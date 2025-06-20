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
| [Elemental Operator](https://github.com/rancher/elemental-operator/) | v1.6.9  | [Link](https://github.com/rancher/elemental-operator/releases/tag/v1.6.9)    |
| [Elemental Toolkit](https://github.com/rancher/elemental-toolkit/)   | v2.2.2  | [Link](https://github.com/rancher/elemental-toolkit/releases/tag/v2.2.2)     |
| [Elemental Linux](https://github.com/rancher/elemental)              | v2.2.0  | [Link](https://github.com/rancher/elemental/releases/tag/v2.2.0)             |
| [Elemental UI](https://github.com/rancher/elemental-ui)              | v3.0.1  | [Link](https://github.com/rancher/elemental-ui/releases/tag/elemental-3.0.1) |

:::note Information on docs versioning

The docs versioning is based on the `Elemental Operator` component as it's the user "entrypoint" to the Elemental project stack.

:::

## Install or Upgrade to latest release

In order to install this release of the Elemental Operator check the project documentation.

For already existing deployments use the following Helm commands to upgrade:

```
# Install/upgrade the CRDS chart
helm upgrade \
    --install -n cattle-elemental-system --create-namespace elemental-operator-crds \
    oci://registry.suse.com/rancher/elemental-operator-crds-chart

# Install/upgrade the operator chart
helm upgrade \
    --install -n cattle-elemental-system --create-namespace elemental-operator \
    oci://registry.suse.com/rancher/elemental-operator-chart
```

To install or upgrade from the helm chart repository use:

```
helm repo add elemental-stable https://rancher.github.io/elemental-operator/stable/
```

and installed or upgraded with

```
# Install/upgrade the CRDS chart
helm upgrade --install -n cattle-elemental-system --create-namespace \
    elemental-operator-crds elemental-stable/elemental-operator-crds

# Install/upgrade the operator chart
helm upgrade --install -n cattle-elemental-system --create-namespace \
    elemental-operator elemental-stable/elemental-operator
```

## Known issues

### ManagedOSVersion of type ISO may report a wrong version number

The `ManagedOSVersions` used for OS installation and upgrades come from the OS Channel (`ManagedOSVersionChannel`)
shipped with the Elemental Operator. The Channel contains two *types* of `ManagedOSVersions`: `container` and `iso`,
where the former is used for OS upgrades and the latter for new installations.
The `iso` types are sometimes labelled with a OS version lower than the actual one. This can be easily spotted by
checking if the latest version of the available `ManagedOSVersions` of type `container` lacks a matching version of a
`ManagedOSVersion` of type `iso`.

Example: the latest OS version actually present in the `registry.suse.com/rancher/elemental-channel/sl-micro:6.1-baremetal`
OS channel is `v2.2.0-4.4`. The ManagedOSVersion of type `container` is correctly labelled `v2.2.0-4.4`, while the latest
version of the ManagedOSVersion of type `iso` is `v2.2.0-4.3`: the `iso` type contains instead the OS version `v2.2.0-4.4`,
as would result by checking the `/etc/os-release` file of the installed machine.

### Predictable Network Interface Names

The SLE Micro OS images with versions v2.1.1 and v2.1.2 (released in the default
[ManagedOSVersionChannel](managedosversionchannel-reference))
adopt predictable network interface names by default.

This is a change from SLE Micro OS images previously released, so you should expect your
Elemental hosts to switch the network interface names from the `ethX` template to the `enpXsY` one.

You can disable the predictable network interface names by passing the `net.ifnames=0` argument
to the kernel command line. To make it permanent:

```sh
grub2-editenv /oem/grubenv set extra_cmdline=net.ifnames=0
```

:::warning
The adoption of the predictable network interface names feature was not a planned one:
it will be reverted in the next SLE Micro OS images starting from version v2.1.3.
These OS images will include the `net.ifnames=0` kernel command line argument by default.  
The v2.1.3 OS images will be released via the default Elemental 1.6 channel.
:::

### SSH root access

The SLE Micro OS images released in the current Elemental version (through the default
[ManagedOSVersionChannel](managedosversionchannel-reference)) do not allow ssh root access
via password anymore. Easyest workaround is to either configure ssh root access via an ssh
key or add a new user to the system.

### Kernel Panic on hypervisors

OS Images based on SL Micro 6.0 can fail to boot with a kernel panic on virtual machines using an unsupported CPU type.  
The `x86-64-v2` instruction set is required. For best compatibility CPU host passthrough is recommended.
