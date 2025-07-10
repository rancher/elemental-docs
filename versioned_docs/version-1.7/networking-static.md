---
sidebar_label: Static Configuration
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/networking"/>
</head>

import YipNmcStaticConfig from "!!raw-loader!@site/examples/network/yip-nmc-static-config.yaml"

:::warning warning
Declarative Networking is in **technology preview** state with limited support.  
As such it is not recommended for production environments.
:::

## Static Network with nm-configurator

The `nm-configurator` [per node configuration](https://github.com/suse-edge/nm-configurator?tab=readme-ov-file#per-node-configurations) can be used to statically assign IP addresses to individual machines, based on the NIC's MAC addresses.  

This solution does not require a remote IPAM provider, but requires the user to maintain mapping between known MAC addresses and IP Addresses.  

In this example, we are going to customize an Elemental image, and include a [yip config](./cloud-config-reference.md#configuration-syntax) that will apply the static network config early at boot.

The following configuration covers 2 nodes with a very basic network setup.  

<CodeBlock language="yaml" title="99_static_network_config.yaml" showLineNumbers>{YipNmcStaticConfig}</CodeBlock>

## Include the static network configuration in a custom OS image

We can extend an Elemental image to include the static network configuration in `/system/oem`.  
Any Elemental powered OS, where [Elemental Toolkit](https://github.com/rancher/elemental-toolkit) is running, will evaluate any config in this directory when executing any stage.  
Additionally we are going to customize the image to install the required `nmc` binary.  

```docker showLineNumbers
# The version of Elemental to modify
FROM registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:latest

# Install the static network config
COPY 99_static_network_config.yaml /system/oem/99_static_network_config.yaml

# Install nmc
RUN curl -LO https://github.com/suse-edge/nm-configurator/releases/download/v0.3.1/nmc-linux-x86_64 && \
    install -o root -g root -m 0755 nmc-linux-x86_64 /usr/sbin/nmc

# IMPORTANT: /etc/os-release is used for versioning/upgrade.
ARG IMAGE_REPO=norepo
ARG IMAGE_TAG=latest
RUN \
    sed -i -e "s|^IMAGE_REPO=.*|IMAGE_REPO=\"${IMAGE_REPO}\"|g" /etc/os-release && \
    sed -i -e "s|^IMAGE_TAG=.*|IMAGE_TAG=\"${IMAGE_TAG}\"|g" /etc/os-release && \
    sed -i -e "s|^IMAGE=.*|IMAGE=\"${IMAGE_REPO}:${IMAGE_TAG}\"|g" /etc/os-release

# IMPORTANT: it is good practice to recreate the initrd and re-apply `elemental-init`
RUN elemental init --force elemental-rootfs,grub-config,dracut-config,cloud-config-essentials,elemental-setup
```

The OS container can now be built and pushed to your registry:  

```bash showLineNumbers
docker build --build-arg IMAGE_REPO=myrepo/static-network-os \
             --build-arg IMAGE_TAG=v1.1.1 \
             -t myrepo/static-network-os:v1.1.1 .
docker push myrepo/static-network-os:v1.1.1
```

Note that since the static network config is included in the image, this requires you to build and maintain different images with different configurations, most likely one per nodepool or one per cluster for example.  
Custom OS images need to be maintained to create the initial ISO bootable image (via a [SeedImage](./seedimage-reference.md)), but also when [upgrading](./upgrade.md) the machines.  
The desired static network config **must** be present on the OS images used with the [ManagedOSImage](./managedosimage-reference.md), otherwise the config will be missing when booting from the upgraded system.  

The custom OS image can also be used as it is to build a bootable raw disk image:  

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: my-raw-image
  namespace: fleet-default
spec:
  type: raw
  baseImage: myrepo/static-network-os:v1.1.1
  registrationRef:
    apiVersion: elemental.cattle.io/v1beta1
    kind: MachineRegistration
    name: my-registration
    namespace: fleet-default
```

## Create a bootable ISO

You can now [build an ISO container](./custom-images.md#create-a-custom-bootable-installation-iso) from this OS container image. For more information on how to customize Elemental images, please refer to the [documentation](./custom-images.md).  

```docker showLineNumbers
FROM myrepo/static-network-os:v1.1.1 AS os
FROM myrepo/static-network-os:v1.1.1 AS builder

WORKDIR /iso
COPY --from=os / rootfs

# work around buildah issue: https://github.com/containers/buildah/issues/4242
RUN rm -f rootfs/etc/resolv.conf

RUN elemental build-iso \
        dir:rootfs \
        --bootloader-in-rootfs \
        --squash-no-compression \
        -o /output -n "elemental"

FROM busybox
COPY --from=builder /output /elemental-iso

ENTRYPOINT ["busybox", "sh", "-c"]
```

```bash showLineNumbers
docker build -t myrepo/static-network-iso:v1.1.1 .
docker push myrepo/static-network-iso:v1.1.1
```

Once the ISO container is published on your registry, you can refer to it in the [SeedImage](./seedimage-reference.md) like any other Elemental distributed ISO image.  

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: my-iso
  namespace: fleet-default
spec:
  type: iso
  baseImage: myrepo/static-network-iso:v1.1.1
  registrationRef:
    apiVersion: elemental.cattle.io/v1beta1
    kind: MachineRegistration
    name: my-registration
    namespace: fleet-default
```

Note that the static network config will now be evaluated when the installation media boots, then it will be installed on the system as part of the base image.  
