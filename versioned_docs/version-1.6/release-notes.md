---
sidebar_label: Release Notes
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/release-notes"/>
</head>

# Release Notes

The Elemental project stack is made of various components such as the `Operator` and `UI` for example.

Each of these components have an independent development lifecycle with its own versioning. Once a new version is ready, meaning it fully integrates with the others components of the Elemental project stack, a release is made.

Here's the different components, their latest version and a link to the respective release notes on GitHub:

| Name                                                                 | Version | Release Notes                                                                |
|----------------------------------------------------------------------|---------|------------------------------------------------------------------------------|
| [Elemental Operator](https://github.com/rancher/elemental-operator/) | v1.6.4  | [Link](https://github.com/rancher/elemental-operator/releases/tag/v1.6.4)    |
| [Elemental Toolkit](https://github.com/rancher/elemental-toolkit/)   | v2.1.1  | [Link](https://github.com/rancher/elemental-toolkit/releases/tag/v2.1.1)     |
| [Elemental Linux](https://github.com/rancher/elemental)              | v2.1.2  | [Link](https://github.com/rancher/elemental/releases/tag/v2.1.2)             |
| [Elemental UI](https://github.com/rancher/elemental-ui)              | v1.3.1  | [Link](https://github.com/rancher/elemental-ui/releases/tag/elemental-1.3.1) |

:::note Information on docs versioning

The docs versioning is based on the `Elemental Operator` component as it's the user "entrypoint" to the Elemental project stack.

:::

## Known issues

### Predictable Network Interface Names
The SLE Micro OS images with versions v2.1.1 and v2.1.2 (released in the default
[ManagedOSVersionChannel](managedosversionchannel-reference))
adopt predictable network interface names by default.

This is a change from SLE Micro OS images previously released, so you should expect your
Elemental hosts to switch the network interface names from the `ethX` template to the `enpXsY` one.

You can disable the predictable network interface names by passing the `net.ifnames=0` argument
to the kernel command line. To make it permanent:

```
grub2-editenv /oem/grubenv set extra_cmdline=net.ifnames=0
```
:::warning
The adoption of the predictable network interface names feature was not a planned one:
it will be reverted in the next SLE Micro OS images starting from version v2.1.3.
These OS images will include the `net.ifnames=0` kernel command line argument by default.  
The v2.1.3 OS images will be released via the default Elemental 1.6 channel.
:::

### SSH root access
The SLE Micro OS images released in the current Elemental version (throught the default
[ManagedOSVersionChannel](managedosversionchannel-reference)) do not allow ssh root access
via password anymore. Easyest workaround is to either configure ssh root access via an ssh
key or add a new user to the system.
