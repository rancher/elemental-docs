---
sidebar_label: Kubernetes cluster provisioning
title: ''
---

## Kubernetes cluster provisioning
The goal of the Kubernetes Cluster deployment phase is to create a new RKE2 or K3s cluster using the available [MachineInventories](machineinventory-reference.md), i.e., the hosts that have successfully completed the [Machine onboarding](architecture-machineonboarding.md) phase.

The Elemental Kubernetes cluster deployment involves the following steps:
* The user creates a [MachineInventorySelectorTemplate](machineinventoryselectortemplate-reference.md) resource: it allows to define a _selector_ to identify a subset of the available [MachineInventories](machineinventory-reference.md) based on the value of their labels.
* The user defines a [Rancher cluster](cluster-reference.md) and adds to the `machinePools` definition a reference to the [MachineInventorySelectorTemplate](machineinventoryselectortemplate-reference.md) created in the step before.
* The [Rancher RKE2/K3s Cluster provisioning](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-uuides/launch-kubernetes-with-rancher#rke2) reacts to the Rancher cluster resource creation by generating a number of [MachineInventorySelectors](machineinventoryselector-reference.md) resources equal to the _quantity_ specified in the _machinePools_.
* The Elemental Operator pairs each generated [MachineInventorySelector](machineinventoryselector-reference.md) resource with an available [MachineInventory](machineinventory-reference.md) and installs the [rancher-system-agent](https://github.com/rancher/system-agent) daemon on the host tracked by the [MachineInventory](machineinventory-reference.md).
The [Rancher RKE2/K3s Cluster provisioning](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-uuides/launch-kubernetes-with-rancher#rke2) takes over the K3s/RKE provisioning using [rancher-system-agent](https://github.com/rancher/system-agent) _plans_: it installs the required components (e.g., containerd, K3s, ...) and creates the configuration files till the successful deployment of the new Kubernetes cluster.
