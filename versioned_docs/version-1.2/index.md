---
slug: /
sidebar_label: Overview
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com"/>
</head>

# Overview

Elemental is a software stack enabling centralized, full cloud-native OS management with Kubernetes.

The Elemental Stack consists of a handful of packages on top of SLE Micro for Rancher:

- **elemental-toolkit** - Includes a set of OS utilities to enable OS management via containers. Includes dracut modules, bootloader configuration, cloud-init style configuration services, etc.
- **elemental-operator** - Connects to Rancher Manager and handles MachineRegistration and MachineInventory CRDs.
- **elemental-register** - Registers machines via machineRegistrations and installs them via elemental-cli.
- **elemental-cli** - Installs any elemental-toolkit based derivative. Basically an installer based on our A/B install and upgrade system.
- **rancher-system-agent** - Runs on the installed system and gets instructions ("Plans") from Rancher Manager what to install and run on the system.

Cluster Node OSes are built and maintained via container images through the <Vars name="elemental_cli_name" /> and they can be installed on new hosts using the <Vars link="elemental_ui_url" name="elemental_ui_name" /> for [Rancher Manager](https://www.rancher.com/products/rancher) or the <Vars link="elemental_cli_url" name="elemental_cli_name" />.

The <Vars link="elemental_operator_url" name="elemental_operator_name" /> and the <Vars link="ranchersystemagent_url" name="ranchersystemagent_name" /> enable Rancher Manager to fully control Elemental clusters, from the installation and management of the OS on the Nodes to the provisioning of new K3s or RKE2 clusters in a centralized way.

## What is Elemental Teal ?

Elemental Teal is a combination of "SLE Micro for Rancher" with the Rancher Elemental stack.

SLE Micro for Rancher is a containerized and "stripped to the bones" OS layer. At its core, it only requires grub2, dracut, a kernel, and systemd.

It's sole purpose is to run Kubernetes (k3s or RKE2), with everything controlled through Rancher Manager.

Elemental Teal is built in the [openSUSE Build Service](https://build.opensuse.org/package/show/isv:Rancher:Elemental:Stable:Teal53/node-image)
and available through the [SUSE Registry](https://registry.suse.com).

You can check latest versions available with [skopeo](https://github.com/containers/skopeo):

```console showLineNumbers
skopeo list-tags docker://registry.suse.com/rancher/elemental-teal/5.3
```

### Elemental on x86-64 hardware

Elemental Teal is production ready and fully supported on x86-64 starting with Rancher v2.7.0.

### Elemental on ARM hardware

ARM (aarch64) is functional in the development stage. ARM is currently only tested on Raspberry Pi 4 Model B with k3s 1.24.8 (or later). Feedback is welcome.

### Elemental on other hardware

Elemental is currently targeting 'edge' scenarios and does therefore not support other hardware. We will re-assess this as the market evolves.

## Ready to give it a try?

Get an Elemental Cluster up and running with your preferred method

* With Rancher manager [Elemental plugin](quickstart-ui)
* With the [Elemental CLI](quickstart-cli)

:::note What's next?
Want more details? Take a look at the [Architecture](architecture) section or reach out to the <Vars link="elemental_slack_url" name="elemental_slack_name" /> Slack channel.
:::
