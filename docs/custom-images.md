---
sidebar_label: Build Custom OS Images
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/custom-images"/>
</head>

# How to build and use custom OS images

## Remastering an OS image with a custom Dockerfile

Since OS images provided by Elemental are container images, they can also be used as a base image
in a Dockerfile in order to create a new container image.

The Elemental project publishes several flavors for images:
* baremetal: An image containing firmware and drivers suitable for baremetal deployment.
* rt: Based on the baremetal image, but contains the real-time kernel.
* kvm: A slimmer image suitable for VMs.
* base: The base system needed for Elemental used by the other flavors.

Imagine some additional packages from an extra repository is required, the following example
showcases how this could be added:

```docker showLineNumbers
# The version of Elemental to modify.
FROM registry.suse.com/suse/sl-micro/6.1/baremetal-os-container:latest

# Custom commands
RUN rpm --import <repo-signing-key-url> && \
    zypper addrepo --refresh <repo_url> extra_repo && \
    zypper install -y <extra_package>

# IMPORTANT: /etc/os-release is used for versioning/upgrade. The
# values here should reflect the tag of the image currently being built
ARG IMAGE_REPO=norepo
ARG IMAGE_TAG=latest
RUN \
    sed -i -e "s|^IMAGE_REPO=.*|IMAGE_REPO=\"${IMAGE_REPO}\"|g" /etc/os-release && \
    sed -i -e "s|^IMAGE_TAG=.*|IMAGE_TAG=\"${IMAGE_TAG}\"|g" /etc/os-release && \
    sed -i -e "s|^IMAGE=.*|IMAGE=\"${IMAGE_REPO}:${IMAGE_TAG}\"|g" /etc/os-release

# IMPORTANT: it is good practice to recreate the initrd and re-apply `elemental-init`
# command that was used in the base image. This ensures that any eventual change that should
# be synced in initrd included binaries is also applied there and consistent.
RUN elemental init --force elemental-rootfs,grub-config,dracut-config,cloud-config-essentials,elemental-setup
```

Where `latest` is the base version we want to customize.

And then the following commands

```bash showLineNumbers
docker build --build-arg IMAGE_REPO=myrepo/custom-build \
             --build-arg IMAGE_TAG=v1.1.1 \
             -t myrepo/custom-build:v1.1.1 .
docker push myrepo/custom-build:v1.1.1
```

The new customized OS is available as the Docker image `myrepo/custom-build:v1.1.1` and it can
be run and verified using docker with

```bash showLineNumbers
docker run -it myrepo/custom-build:v1.1.1 bash
```

## Create a custom bootable installation ISO

Elemental leverages container images to build its root filesystems; therefore, it is possible
to use it in a multi-stage environment to create custom bootable media that bundles a custom container image.

```docker showLineNumbers
FROM registry.suse.com/suse/sl-micro/6.1/baremetal-os-container:latest AS os

# Check the previous section on building custom images

# The released OS already includes the toolchain for building ISOs
FROM registry.suse.com/suse/sl-micro/6.1/baremetal-os-container:latest AS builder

ARG TARGETARCH
WORKDIR /iso
COPY --from=os / rootfs

# work around buildah issue: https://github.com/containers/buildah/issues/4242
RUN rm -f rootfs/etc/resolv.conf

RUN elemental build-iso \
        dir:rootfs \
        --bootloader-in-rootfs \
        --squash-no-compression \
        -o /output -n "elemental-${TARGETARCH}"

FROM busybox
COPY --from=builder /output /elemental-iso

ENTRYPOINT ["busybox", "sh", "-c"]
```

Build it with regular `docker build` command:

```bash showLineNumbers
docker build -t myrepo/custom-build:v1.1.1 \
              --build-arg IMAGE_REPO=myrepo/custom-build-iso \
              --build-arg IMAGE_TAG=v1.1.1 \
              .
```

The resulting container image is actually a container image including the ISO,
this container image can be pushed to an OCI registry too. The ISO image can be
extracted from the container to the current folder by executing the container as:

```bash showLineNumbers
docker run --rm -v $(pwd):/host mytest-image "busybox cp /elemental-iso/*.iso /host"
```

The new customized installation media can be found in `elemental-<arch>.iso`.

The above container run is equivalent to what *elemental-operator* does to extract
the ISO from a container to build a new one including the registration URL,
hence this is also a good check mark to verify the container can be pushed to a
registry and used by the *elemental-operator* as a `baseImage` for a
[SeedImage](seedimage-reference) resource.

## List custom images as a ManagedOSVersion resource

In Elemental listing OS container images and ISO container images as ManagedOSVersion
resources is not mandatory but handy. Specially from a UI perspective this makes
the custom images visible and easy to use from the Elemental UI extension.

Continuing the example from the previous section a custom OS container referenced as
`myrepo/custom-build:v1.1.1` was built and eventually pushed to a registry. Then this
image is ready to be added as a ManagedOSVersion resource with:

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: ManagedOSVersion
metadata:
  name: v1.1.1-custom-build
  namespace: fleet-default
spec:
  metadata:
    displayName: Custom build image
    upgradeImage: myrepo/custom-build:v1.1.1
  type: container
  version: v1.1.1
```

Note the `type: container` states this is a container OS. This makes the image `myrepo/custom-build:v1.1.1`
eligible for OS upgrades from the UI.

Finally, the custom container for the ISO `myrepo/custom-build-iso:v1.1.1` can also be included
as a ManagedOSVersion resource with:

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: ManagedOSVersion
metadata:
  name: v1.1.1-custom-build-iso
  namespace: fleet-default
spec:
  metadata:
    displayName: Custom build ISO image
    uri: myrepo/custom-build-iso:v1.1.1
  type: iso
  version: v1.1.1
```

Note the  `type: iso` states this is an ISO. This makes the image `myrepo/custom-build-iso:v1.1.1`
eligible for SeedImages generation from UI.

## Custom partition size

When building custom images, it's important to take in account disk partition sizes, to ensure the image and the upgrade snapshots can fit correctly over time.  
A partitions configuration can be included in your custom image, or alternatively it can be conveniently applied to the [SeedImage](./seedimage-reference.md) used to generate the install media.  
Note that all `size` values are expressed in megabytes, and a value of `0` will take the rest of the disk. This is the default behavior of the `persistent` partition if no `size` has been defined for it. For more information, see the full [configuration sample](https://github.com/rancher/elemental-toolkit/blob/main/config.yaml.example).  

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: custom-partitions-iso
  namespace: fleet-default
spec:
  cloud-config:
    write_files:
    - path: /etc/elemental/config.d/partitions.yaml
      content: |
        install:
          partitions:
            recovery:
              size: 8192
            state:
              size: 16384
    - path: /etc/elemental/config.d/snapshotter.yaml
      content: |
        snapshotter:
          max-snaps: 2
  baseImage: myrepo/custom-build-iso:v1.1.1
  registrationRef:
    name: my-machine-registration
    namespace: fleet-default
```

The `state` partition will hold all system snapshots. Therefore when sizing this partition, the following formula can be considered: `$image_size * ($max_number_of_snapshots + 1 + 1)`.  
The `$max_number_of_snapshots` can be similarly configured with a custom configuration file as shown in the sample above.  
Note that by default it's `4` for the `btrfs` snapshotter type, and `2` for the `loopdevice` type.  
You can configure the snapshotter type in use editing the [MachineRegistration](./machineregistration-reference.md#configelementalinstallsnapshotter).  

Since the state partition is also used for the <Vars name="elemental_toolkit_name" link="elemental_toolkit_url"/> work directory, it's best to leave an additional `$image_size` worth of free space, so that the image can be unpacked correctly for example when running upgrades.  

Lastly, an extra `$image_size` free space can be used as a safe margin to keep. This is especially important when using the `loopdevice` snapshotter type, in case newer images will grow in size from the originally installed one.  
On the contrary, the `btrfs` snapshotter can be used instead to save space on the `state` partition, or to use the same space to keep more snapshots.  

## Finding Elemental base images

Using crane we can find the following SL-Micro images suitable for extending:

```
$ crane catalog registry.suse.com | grep -i "suse/sl-micro"
suse/sl-micro/6.0/baremetal-iso-image
suse/sl-micro/6.0/baremetal-os-container
suse/sl-micro/6.0/base-iso-image
suse/sl-micro/6.0/base-os-container
suse/sl-micro/6.0/kvm-iso-image
suse/sl-micro/6.0/kvm-os-container
suse/sl-micro/6.0/rt-iso-image
suse/sl-micro/6.0/rt-os-container
suse/sl-micro/6.1/baremetal-iso-image
suse/sl-micro/6.1/baremetal-os-container
suse/sl-micro/6.1/base-iso-image
suse/sl-micro/6.1/base-os-container
suse/sl-micro/6.1/kvm-iso-image
suse/sl-micro/6.1/kvm-os-container
suse/sl-micro/6.1/rt-iso-image
suse/sl-micro/6.1/rt-os-container
```

The images with `-iso-image` suffix contains a pre-built ISO image and a busybox system to be able to copy the contents to a volume.
Images with a `-os-container` suffix contains a root filesystem that can be used as the base for custom images.
