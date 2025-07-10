---
sidebar_label: ManagedOSVersion reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/managedosversion-reference"/>
</head>

# ManagedOSVersion reference

The `ManagedOSVersion` resource is responsible of defining an OS image version that can be used with `SeedImage` or `ManagedOSImage` resources.

There are several keys that can be configured under a `ManagedOSVersion` resource spec.

```yaml title="managedosversion-example.yaml" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: ManagedOSVersion
metadata:
  labels:
    elemental.cattle.io/channel: elemental-channel
  name: v2.0.2
  namespace: fleet-default
spec:
  metadata:
    displayName: SLE Micro
    upgradeImage: registry.suse.com/suse/sle-micro/5.5:2.0.2
  type: container
  version: v2.0.2
```

#### ManagedOSVersionSpec reference

| Key              | Type   | Default value | Description                                                                  |
|------------------|--------|---------------|------------------------------------------------------------------------------|
| metadata         | object | null          | This defines some data about the OS image. See [reference](#metadata)        |
| minVersion       | string | null          | Not used                                                                     |
| type             | string | empty         | Defines the OS image type, could be `container` or `iso`                     |
| version          | string | empty         | OS image version                                                             |
| upgradeContainer | object | null          | An upgrade container that can be defined. See [reference](#upgradecontainer) |

<details>
  <summary>ISO image example</summary>

  ```yaml showLineNumbers
  metadata:
    displayName: SLE Micro ISO x86_64
    uri: registry.suse.com/suse/sl-micro/6.0/baremetal-iso-image:2.2.0
  type: iso
  version: v2.2.0
  ```
  
</details>

<details>
  <summary>Container image example</summary>

  ```yaml showLineNumbers
  metadata:
    displayName: SLE Micro
    upgradeImage: registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:2.2.0
  type: container
  version: v2.2.0
  ```
  
</details>

#### metadata

This describes the needed information to define an OS image in Elemental.

If `type` is set to `container`:
| Key          | Type   | Default value | Description                                                         |
|--------------|--------|---------------|---------------------------------------------------------------------|
| displayName  | string | empty         | OS image name as seen in Rancher UI                                 |
| upgradeImage | string | empty         | Fully qualified Container image (OCI reference or HTTP URI)        |
| platforms    | list   | empty         | The supported platforms (`linux/x86_64`, `linux/aarch64`, or both). |

If `type` is set to `iso`:
| Key          | Type   | Default value | Description                                                         |
|--------------|--------|---------------|---------------------------------------------------------------------|
| displayName  | string | empty         | OS image name as seen in Rancher UI                                 |
| uri          | string | empty         | Fully qualified ISO image                                           |
| platforms    | list   | empty         | The supported platforms (`linux/x86_64`, `linux/aarch64`, or both). |

#### upgradeContainer

This allows to overwrite the default `upgrade` field of System Upgrade Controller plans (see [upgrade components](/upgrade-lifecycle.md#components)) based on this ManagedOSVersion.
These keys are translated by the System Upgrade Controller to a Kubernetes [container](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container) specification.
This is the container responsible of running an OS upgrade.
