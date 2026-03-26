---
sidebar_label: Rancher IP address options
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/rancher-ip"/>
</head>

import Registration from "!!raw-loader!@site/examples/labeltemplates/registration.yaml"

# Configure K3s and RKE2 internal and external IP addresses

K3s and RKE2 allow to specify the internal and external IP addresses of a node via the
`--node-ip` and `--node-external-ip` parameters.

Rancher Provisioning allows to fill those parameters collecting the IP address from each node's network
interface.

Anyway, the methods to collect those ip options for _Custom_ Rancher Clusters and
_Elemental_ Rancher Clusters differ.

## K3s and RKE2 internal and external IP addresses configuration in Rancher Cluster provisioning
Rancher provisioning allows to specify in the Rancher Agent section the network interfaces that should
be bound to the internal and external IP addresses of each provisioned node.

This is performed by adding the network interface names from which the IP addresses should be extracted
in the `CATTLE_INTERNAL_ADDRESS` and the `CATTLE_ADDRESS` Agent Environment Variables
([see Rancher docs](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options#ip-address-options)).

:::note
The `CATTLE_INTERNAL_ADDRESS` and the `CATTLE_ADDRESS` Agent Environment Variables can be directly filled
with the desired IP addresses. Anyway, since the internal and external IP addresses are *per node*,
this would not work but for single node clusters.
:::

:::warning
While during the creation of an Elemental Cluster it is possible to add Agent Environment Variables,
the `CATTLE_ADDRESS` and the `CATTLE_INTERNAL_ADDRESS` ones are ignored and would not result in the
configuration of the internal and external IP addresses of the provisioned nodes.
:::

## Configure K3s and RKE2 internal and external IP addresses in Elemental Clusters
Elemental allows to configure the internal and external IP addresses of the Cluster Nodes attaching
the `elemental.cattle.io/InternalIP` and `elemental.cattle.io/ExternalIP` labels to the
[MachineInventory](machineinventory-reference.md) resources tracking the target nodes.

These labels when attached to a [MachineInventory](machineinventory-reference.md) resource are used
to fill the internal and external IP addresses of the associated nodes.

The labels can be added to the [MachineRegistration](machineregistration-reference.md)
`machineInventoryLabels` fields, using the
[Network Label Template](label-templates-network.md) IP address variables as values, in order
to allow to collect the IP addresses of each node.

Example: [MachineRegistration](machineregistration-reference.md) where nodes will have the internal IP
address set from interface eth0 and the external IP address from eth1.

<CodeBlock language="yaml" title="registration.yaml" showLineNumbers>{Registration}</CodeBlock>
