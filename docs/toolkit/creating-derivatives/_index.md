
---
title: "Creating derivatives"
sidebar_label: "Creating derivatives"
weight: 4
date: 2023-05-11
description: >
  Documents various methods for creating Elemental derivatives
---

A derivative is a standard container image which can be booted by Elemental. 

We can identify a build phase where we build the derivative, and a "runtime phase" where we consume it.

The image is described by a Dockerfile, composed of a base OS of choice (e.g. openSUSE, Ubuntu, etc. ) and the Elemental toolkit itself in order to be consumed by Elemental and allow to be upgraded from by other derivatives. 

elemental-toolkit then converts the OCI artifact into a bootable medium (ISO, packer, ova, etc) and the image itself then can be used to bootstrap other derivatives, which can in turn upgrade to any derivative built with Elemental.

A derivative can also be later re-used again as input as base-image for downstream derivatives.

All the documentation below imply that the container image generated will be the booting one, there are however several configuration entrypoint that you should keep in mind while building the image which are general across all the implementation:

- Custom persistent runtime configuration has to be provided in `/system/oem` for derivatives, [see also the documentation section](../customizing/configuration_persistency).  Everything under `/system/oem` will be loaded during the various stages (boot, network, initramfs).
- `/etc/cos/bootargs.cfg` contains the booting options required to boot the image with GRUB, [see grub customization](../customizing/configure_grub)

Derivatives inherits `Elemental` defaults, which you can override during the build process, however there are some defaults which are relevant and listed below:

