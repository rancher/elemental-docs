---
sidebar_label: ManagedOSImage reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/managedosimage-reference"/>
</head>

import ClusterTarget from "!!raw-loader!@site/examples/upgrade/upgrade-cluster-target.yaml"

# ManagedOSImage reference

The ManagedOSImage resource is responsible of defining an OS image or image version that needs to be applied to each node in a set of targeted Clusters.  
Once created, the ManagedOSImage resource can be updated with a new `osImage` or `managedOSVersionName` to trigger a new upgrade.  
Similarly, an existing ManagedOSImage can be updated to target new Clusters.  

There are several keys that can be configured under a `ManagedOSImage` resource spec.

<CodeBlock language="yaml" title="upgrade-cluster-target.yaml" showLineNumbers>{ClusterTarget}</CodeBlock>

#### ManagedOSImageSpec reference

| Key                    | Type   | Default value | Description                                                                                                                                |
|------------------------|--------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| osImage                | string | empty         | The fully qualified image to upgrade nodes to. This value has priority over `managedOSVersionName` if both are configured.                 |
| managedOSVersionName   | string | empty         | The name of a `ManagedOSVersion` to upgrade nodes to.                                                                                      |
| cloudConfig            | object | null          | A cloud-init or yip config to apply to the nodes during upgrades. See [reference](#cloudconfig).                                                  |
| nodeSelector           | object | null          | This selector can be used to target specific nodes within the `clusterTargets`. See [reference](#nodeselector).                            |
| concurrency            | int    | 1             | How many nodes within the same cluster should be upgraded at the same time.                                                                |
| cordon                 | bool   | true          | Set this to true if the nodes should be cordoned before applying the upgrade. Ineffective when `drain` is also configured.                 |
| drain                  | object | See ref       | Configure if and how nodes should be drained before applying the upgrade. See [reference](#drain).                                         |
| prepare                | object | null          | The prepare init container, if specified, is run before cordon/drain which is run before the upgrade container. See [reference](#prepare). |
| upgradeContainer       | object | null          | The upgrade container that will run the upgrade on the nodes. See [reference](#upgradecontainer).                                          |
| clusterRolloutStrategy | object | null          | RolloverStrategy controls the rollout of the upgrade bundle across clusters. See [reference](#clusterrolloutstrategy).                     |
| clusterTargets         | list   | null          | Declares clusters to deploy the upgrade plan to. See [reference](#clustertargets).                                                         |

#### cloudConfig

This describes a cloud-init or yip config that will be copied to each upgraded node to the `/oem/90_operator.yaml` path.  
This config will be applied by the system after reboot.  
For more information and examples, see the `MachineRegistration` `spec.config.cloud-config` [reference](./cloud-config-reference.md).  

#### nodeSelector

This [Label Selector](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors) can be used to restrict the upgrades to only a certain set of nodes within the targeted Clusters.

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  nodeSelector:
    matchExpressions:
      - {key: my-node/label, operator: Exists}
  ```
  
</details>

#### drain

Configure if and how nodes should be drained.  
To disable drain during upgrades you can configure this field to `null`.  
Drain is enabled by default.  

The drain settings directly translates to the [kubectl drain](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_drain/) command being executed on the node before upgrade.  

| Key                      | Type             | Default value | Description                                                                                                                                |
|--------------------------|------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| timeout                  | time.Duration    | null          | The length of time to wait before giving up draining a node, zero means infinite.                                                          |
| gracePeriod              | int              | null          | Period of time in seconds given to each pod to terminate gracefully. If negative, the default value specified in the pod will be used.     |
| deleteEmptydirData       | bool             | true          | Continue even if there are pods using emptyDir (local data that will be deleted when the node is drained).                                 |
| ignoreDaemonSets         | bool             | true          | Ignore DaemonSet-managed pods.                                                                                                             |
| force                    | bool             | true          | Continue even if there are pods that do not declare a controller.                                                                          |
| disableEviction          | bool             | false         | Force drain to use delete, even if eviction is supported. This will bypass checking PodDisruptionBudgets, use with caution.                |
| skipWaitForDeleteTimeout | int              | 60            | If pod DeletionTimestamp older than N seconds, skip waiting for the pod. Seconds must be greater than 0 to skip.                           |
| podSelector              | label selector   | null          | Label selector to filter pods on the node. Only selected pods will be evicted.                                                             |

#### prepare

Defines a `prepare` Init container that is ran before the `upgrade` container executing the upgrade job on a node.  
The keys directly translate to the [container](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container) specification.  
Note that the node filesystem is mounted at `/host` inside the container.  

| Key                      | Type   | Default value | Description                                                          |
|--------------------------|--------|---------------|----------------------------------------------------------------------|
| image                    | string | empty         | Container image name.                                                |
| command                  | list   | empty         | Entrypoint array.                                                    |
| args                     | list   | empty         | Arguments to the entrypoint.                                         |
| env                      | list   | empty         | List of environment variables to set in the container.               |
| envFrom                  | list   | empty         | List of sources to populate environment variables in the container.  |
| volumes                  | list   | empty         | List of `hostPath` volumes. See [reference](#preparevolumes).        |
| securityContext          | object | null          | The security options the ephemeral container should be run with.     |

##### prepare.volumes

Each volume definition will translate to a [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath-volume-types) volume (`source`) which will be mounted in the container (`destination`).  
Note that by default the host root filesystem `/` will always be mounted at `/host`.  

| Key          | Type   | Default value | Description                 |
|--------------|--------|---------------|-----------------------------|
| name         | string | empty         | Volume name.                |
| source       | string | empty         | HostPath volume path.       |
| destination  | string | empty         | HostPath volume mount path. |

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  volumes:
    - name: my-custom-volume
      source: /foo
      destination: /foo
  ```
  
</details>

#### upgradeContainer

Defines the `upgrade` container executing the upgrade job on a node.  
The keys directly translate to the [container](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container) specification.  
Note that the node filesystem is mounted at `/host` inside the container.  

:::warning warning
When using any Elemental or [Elemental based image](./custom-images.md) you are expected to only edit the `env` key to optionally set the `FORCE`, `UPGRADE_RECOVERY`, or `UPGRADE_RECOVERY_ONLY` variables.  
For more info you can read the [upgrade](./upgrade.md#upgrade-via-command-line-interface) documentation.  
Any other change to the `upgradeContainer` may result in issues during upgrades.  
:::

#### clusterRolloutStrategy

This controls the rollout of the bundle across clusters.  
For more information you can read the [reference documentation](https://fleet.rancher.io/0.9/ref-crds#rolloutstrategy).  

#### clusterTargets

Select Clusters to be targeted for the OS image upgrade.  
For more information you can read the [reference documentation](https://fleet.rancher.io/0.9/ref-crds#bundletarget).  

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  clusterTargets:
    - clusterName: volcano
  ```
  
</details>
