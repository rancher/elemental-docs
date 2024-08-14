---
sidebar_label: Static Configuration
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/networking"/>
</head>

import YipNmcStaticConfig from "!!raw-loader!@site/examples/network/yip-nmc-static-config.yaml"

## Static Network with nm-configurator

The `nm-configurator` [per node configuration](https://github.com/suse-edge/nm-configurator?tab=readme-ov-file#per-node-configurations) can be used to statically assign IP addresses to individual machines, based on the NIC's MAC addresses.  

This solution does not require a remote IPAM provider, but requires the user to maintain mapping between known MAC addresses and IP Addresses.  

In this example, we are going to customize an Elemental image, and include a [yip config](./cloud-config-reference.md#configuration-syntax) that will apply the static network config early at boot.  

First we can create the yip config:  

<CodeBlock language="yaml" title="99_static_network_config.yaml" showLineNumbers>{YipNmcStaticConfig}</CodeBlock>

Second, we can extend an Elemental image to include this configuration in `/system/oem`.  
Any Elemental powered OS, where [Elemental Toolkit](https://github.com/rancher/elemental-toolkit) is running, will evaluate any config in this directory when executing any stage.  

```docker showLineNumbers
# The version of Elemental to modify
FROM registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:latest

# Install the static network config
COPY 99_static_network_config.yaml /system/oem/99_static_network_config.yaml

# IMPORTANT: /etc/os-release is used for versioning/upgrade.
ARG IMAGE_REPO=norepo
ARG IMAGE_TAG=latest
RUN \
    sed -i -e "s/^IMAGE_REPO=.*/IMAGE_REPO=\"${IMAGE_REPO}\"/g" /etc/os-release && \
    sed -i -e "s/^IMAGE_TAG=.*/IMAGE_TAG=\"${IMAGE_TAG}\"/g" /etc/os-release && \
    sed -i -e "s/^IMAGE=.*/IMAGE=\"${IMAGE_REPO}:${IMAGE_TAG}\"/g" /etc/os-release

# IMPORTANT: it is good practice to recreate the initrd and re-apply `elemental-init`
RUN elemental init --force immutable-rootfs,grub-config,dracut-config,cloud-config-essentials,elemental-setup
```

You can now [build an ISO container](./custom-images.md#create-a-custom-bootable-installation-iso) from this OS container image. For more information on how to customize Elemental images, please refer to the [documentation](./custom-images.md).  
Once the ISO container is published on your registry, you can refer to it in the [SeedImage](./seedimage-reference.md) like any other Elemental distributed ISO image.  

Note that the static network config will be evaluated when the installation media boots, then it will be installed on the system, and finally it will follow the entire machine lifecycle.  
This also applies to [upgrades](./upgrade.md), given that the static configuration is always included in upgrade images.  
None of the machine phases, from the very first boot, will require a DHCP server.  

Since the configuration is static, be aware that any change (for example to add new nodes) will require you to rebuild and republish your custom images, and rebuild the `SeedImage` too to create a fresh installation media.  
