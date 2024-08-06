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

Imagine some additional packages from an extra repository is required, the following example
showcases how this could be added:

```docker showLineNumbers
# The version of Elemental to modify
FROM registry.suse.com/suse/sle-micro/5.5:latest

# Custom commands
RUN rpm --import <repo-signing-key-url> && \
    zypper addrepo --refresh <repo_url> extra_repo && \
    zypper install -y <extra_package>

# IMPORTANT: /etc/os-release is used for versioning/upgrade. The
# values here should reflect the tag of the image currently being built
ARG IMAGE_REPO=norepo
ARG IMAGE_TAG=latest
RUN \
    sed -i -e "s/^IMAGE_REPO=.*/IMAGE_REPO=\"${IMAGE_REPO}\"/g" /etc/os-release && \
    sed -i -e "s/^IMAGE_TAG=.*/IMAGE_TAG=\"${IMAGE_TAG}\"/g" /etc/os-release && \
    sed -i -e "s/^IMAGE=.*/IMAGE=\"${IMAGE_REPO}:${IMAGE_TAG}\"/g" /etc/os-release

# IMPORTANT: it is good practice to recreate the initrd and re-apply `elemental-init`
# command that was used in the base image. This ensures that any eventual change that should
# be synced in initrd included binaries is also applied there and consistent.
RUN elemental init --force immutable-rootfs,grub-config,dracut-config,cloud-config-essentials,elemental-setup
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
FROM registry.suse.com/suse/sle-micro/5.5:latest AS os

# Check the previous section on building custom images

# The released OS already includes the toolchain for building ISOs
FROM registry.suse.com/suse/sle-micro/5.5:latest AS builder

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
