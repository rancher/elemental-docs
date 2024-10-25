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
| [Elemental Operator](https://github.com/rancher/elemental-operator/) | v1.6.5  | [Link](https://github.com/rancher/elemental-operator/releases/tag/v1.6.5)    |
| [Elemental Toolkit](https://github.com/rancher/elemental-toolkit/)   | v2.1.1  | [Link](https://github.com/rancher/elemental-toolkit/releases/tag/v2.1.1)     |
| [Elemental Linux](https://github.com/rancher/elemental)              | v2.1.3  | [Link](https://github.com/rancher/elemental/releases/tag/v2.1.3)             |
| [Elemental UI](https://github.com/rancher/elemental-ui)              | v2.0.0  | [Link](https://github.com/rancher/elemental-ui/releases/tag/elemental-2.0.0) |

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
