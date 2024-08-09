---
sidebar_label: Declarative Networking
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/networking"/>
</head>

import RegistrationWithNetwork from "!!raw-loader!@site/examples/network/machineregistration.yaml"

## Network configuration with Elemental

The [MachineRegistration](machineregistration-reference) supports Declarative Networking and integration with [CAPI IPAM Providers](https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20220125-ipam-integration.md#ipam-provider).  

### Prerequisites

- A DHCP server is still required for the first boot registration and reset of machines. For this reason Lease Time can be kept minimal, as for the entire lifecycle of the machine, the IPAM driven IP Addresses will be used.  

- An IPAM Provider of your choice is installed on the Rancher management cluster.  
  For example the [InCluster IPAM Provider](https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster).

- [nmstatectl](https://github.com/nmstate/nmstate/releases) and [NetworkManager](https://networkmanager.dev) need to be installed on the Elemental OS in use.  
  Elemental provided images already include these dependencies, this only applies when building custom images.  

### How to install the CAPI IPAM Provider

The recommended way to install any CAPI Provider into Rancher is to use [Rancher Turtles](https://turtles.docs.rancher.com).  
Rancher Turtles will allow the user to install and manage the lifecycle of any CAPI Provider.  
To install it on your system please follow the [documentation](https://turtles.docs.rancher.com/getting-started/install-rancher-turtles/using_helm).  

Once Rancher Turtles is installed, installing an IPAM CAPI Provider, for example the [InCluster IPAM Provider](https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster), can be accomplished applying the following resource:

```yaml
kind: CAPIProvider
metadata:
  name: in-cluster
  namespace: default
spec:
  name: in-cluster
  type: ipam
  fetchConfig:
    url: "https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster/releases"
  version: v0.1.0
```

#### Without Rancher Turtles

An alternative option to install a CAPI IPAM Provider is to directly apply the manifest in the Rancher cluster.  
Note that this solution may eventually lead to conflicts with the applied CRDs and resources, as they need to be applied and maintained manually.  

1. The `ipaddresses.ipam.cluster.x-k8s.io` and `ipaddressclaims.ipam.cluster.x-k8s.io` CRDs must be installed on the Rancher management cluster:  

    ```bash
    kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/cluster-api/main/config/crd/bases/ipam.cluster.x-k8s.io_ipaddressclaims.yaml
    kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/cluster-api/main/config/crd/bases/ipam.cluster.x-k8s.io_ipaddresses.yaml
    ```

    :::info info
    These CRDs are expected to eventually be part of Rancher, not requiring manual installation.  
    See: https://github.com/rancher/rancher/issues/46385
    :::

1. Install the [InCluster IPAM Provider](https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster) from the released manifest:  

    ```bash
    kubectl apply -f https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster/releases/download/v0.1.0/ipam-components.yaml
    ```

### Configuring Network

The `network` section of the `MachineRegistration` allows users to define:

1. A map of IPPool references.
1. A nmstate configuration template.

For example:

<CodeBlock language="yaml" title="example MachineRegistration using Declarative Networking" showLineNumbers>{RegistrationWithNetwork}</CodeBlock>

Here we can observe that one `InClusterIPPool` has been defined, since we are using the [InCluster IPAM Provider](https://github.com/kubernetes-sigs/cluster-api-ipam-provider-in-cluster) for this example.  

Next we are going to reference this IPPool in the `MachineRegistration`. The key for this reference is `inventory-ip`, and we are only going to need one IP per registered Machine. If your machine has more than one NIC, you can define more references, and use different IPPools as well, for example:  

```yaml
ipAddresses:
  main-nic-ip:
    apiGroup: ipam.cluster.x-k8s.io
    kind: InClusterIPPool
    name: elemental-inventory-pool
  secondary-nic-ip:
    apiGroup: ipam.cluster.x-k8s.io
    kind: InClusterIPPool
    name: elemental-inventory-pool
  private-nic-ip:
    apiGroup: ipam.cluster.x-k8s.io
    kind: InClusterIPPool
    name: elemental-private-pool
```

Each defined IPPool reference key can be used for the network config template:

```yaml
config:
  dns-resolver:
    config:
      server:
      - 192.168.122.1
      search: []
  routes:
    config:
    - destination: 0.0.0.0/0
      next-hop-interface: enp1s0
      next-hop-address: 192.168.122.1
      metric: 150
      table-id: 254
  interfaces:
    - name: enp1s0
      type: ethernet
      description: Main-NIC
      state: up
      ipv4:
        enabled: true
        dhcp: false
        address:
        - ip: "{inventory-ip}"
          prefix-length: 24
      ipv6:
        enabled: false
```

The snippet above is almost 1:1 [nmstate syntax](https://nmstate.io/examples.html#nmstate-state-examples), with the only exception of the `{inventory-ip}` placeholder.  
During the installation or reset phases of Elemental machines, the `elemental-operator` will claim one IP Address from the referenced IP Pool, and substitute the `{inventory-ip}` placeholder with a real IP Address.  

### Claimed IPAddresses

The `IPAddressClaim` will follow the entire lifecycle of the `MachineInventory`, ensuring that each registered machine will be assigned unique IPs.  
Each claim is named after the `MachineInventory` that uses it, as `$MachineIventoryName-$IPPoolRefKey`, for example:  

```yaml
apiVersion: ipam.cluster.x-k8s.io/v1beta1
kind: IPAddressClaim
metadata:
  finalizers:
    - ipam.cluster.x-k8s.io/ReleaseAddress
  name: m-e5331e3b-1e1b-4ce7-b080-235ed9a6d07c-inventory-ip
  namespace: fleet-default
  ownerReferences:
    - apiVersion: elemental.cattle.io/v1beta1
      kind: MachineInventory
      name: m-e5331e3b-1e1b-4ce7-b080-235ed9a6d07c
spec:
  poolRef:
    apiGroup: ipam.cluster.x-k8s.io
    kind: InClusterIPPool
    name: elemental-inventory-pool
status:
  addressRef:
    name: m-e5331e3b-1e1b-4ce7-b080-235ed9a6d07c-inventory-ip
```

Whenever a `MachineInventory` is deleted, the default (DHCP) network configuration will be restored and the IPs assigned will be released.  

For more information and details on how troubleshoot issues, please consult the [documentation](./troubleshooting-network.md).
