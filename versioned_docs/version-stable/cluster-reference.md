---
sidebar_label: Cluster reference
title: ''
---

import Machinepools from "!!raw-loader!@site/examples/clusters/clusters-several-machinepools.yml"

# Cluster reference

A `Cluster` definition includes a `kubernetesVersion` and a list of `machinePools` to deploy the cluster to.

For how to select a `kubernetesVersion` please check our [Kubernetes Versions](kubernetesversions.md) page.

A `machinePool` is a bundle of configuration with a `ObjectReference` so the cluster is deployed to those `machinePools`
with the proper roles (etcd, control-plane, worker) with a quantity (how many nodes to deploy from this pool) and some extra configurations (rolling update config, max unhealthy nodes, etc...).

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  kind: Cluster
  apiVersion: provisioning.cattle.io/v1
  metadata:
    name: ...
    namespace: ...
  spec:
    rkeConfig:
      machinePools:
        - name: ...
          controlPlaneRole: ...
          etcdRole: ...
          workerRole: ...
          quantity: ...
          machineConfigRef:
            apiVersion: elemental.cattle.io/v1beta1
            kind: MachineInventorySelectorTemplate
            name: ...
        - name: ...
          controlPlaneRole: ...
          etcdRole: ...
          workerRole: ...
          quantity: ...
          machineConfigRef:
            apiVersion: elemental.cattle.io/v1beta1
            kind: MachineInventorySelectorTemplate
            name: ...
  ```

</details>

It's also possible to disable cluster components via the `Cluster` object in `spec.rkeConfig.machineGlobalConfig`, for example:

<details>
  <summary>Service Disabling Example</summary>

  ```yaml showLineNumbers
  kind: Cluster
  apiVersion: provisioning.cattle.io/v1
  metadata:
    name: ...
    namespace: ...
  spec:
    rkeConfig:
      machinePools:
        - name: ...
          controlPlaneRole: ...
          etcdRole: ...
          workerRole: ...
          quantity: ...
          machineConfigRef:
            apiVersion: elemental.cattle.io/v1beta1
            kind: MachineInventorySelectorTemplate
            name: ...
      machineGlobalConfig:
        disable:
          - servicelb
          - ...
  ```

</details>

## rkeConfig.machinePools

A list of `machinePools`. A minimum of 1 `machinePools` is required for the cluster to be deployed to.

## machinePools Spec Reference

| Key                  | Type   | Default value   | Description                                                          |
|----------------------|--------|-----------------|----------------------------------------------------------------------|
| controlPlaneRole     | bool   | false           | Set machines in this pool as control-plane                           |
| etcdRole             | bool   | false           | Set machines in this pool as etcd                                    |
| workerRole           | bool   | false           | Set machines in this pool as worker                                  |
| name                 | string | nil             | Name for this pool                                                   |
| quantity             | int    | nil             | Number of machines to deploy from this pool                          |
| unhealthyNodeTimeout | int    | nil             | Timeout for unhealthy node health checks                             |
| machineConfigRef     | int    | ObjectReference | Reference to an object used to know what nodes are part of this pool |

A minimum of `quantity` set to one is required for this pool to be used.
Basically translates to how many nodes from this pool are going to be setup for this cluster.

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  kind: Cluster
  apiVersion: provisioning.cattle.io/v1
  metadata:
    name: cluster-example
    namespace: example-default
  spec:
    rkeConfig:
      machinePools:
        - name: examplePool 
          controlPlaneRole: true
          etcdRole: true
          workerRole: false
          quantity: 3
          unhealthyNodeTimeout: 0s
          machineConfigRef:
            apiVersion: elemental.cattle.io/v1beta1
            kind: MachineInventorySelectorTemplate
            name: exampleSelector
  ```

</details>

## machineConfigRef Spec Reference

A `machineConfigRef` is a generic k8s `ObjectReference` which usually contain a
`kind` `name` and `apiVersion` to point to a different object.

In Elemental, we set this to a [MachineInventorySelectorTemplate](machineinventoryselectortemplate-reference.md).
This allows us to point to more than one object by using the selector.

### Example

The example below creates a cluster that uses 2 different `machinePool`'s to set different nodes to control-plane and workers nodes,
based on 2 different `MachineInventorySelectorTemplate` that select their nodes based on a `MachineInventory` label (location):

:::warning warning
The labels for the example are manual set labels, they are not set by Elemental automatically..

For automatic labels generated by Elemental please check the [SMBIOS](smbios.md) page.
:::

<CodeBlock language="yaml" title="Example of a cluster with more than one machinePool" showLineNumbers>{Machinepools}</CodeBlock>
