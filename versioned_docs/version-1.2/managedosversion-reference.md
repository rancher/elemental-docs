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
  name: v1.1.5
  namespace: fleet-default
spec:
  metadata:
    displayName: Elemental Teal OS
    upgradeImage: registry.suse.com/rancher/elemental-teal/5.3:1.1.5
  type: container
  version: v1.1.5
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
    displayName: Elemental Teal ISO x86_64
    uri: registry.suse.com/rancher/elemental-teal-iso/5.3:1.1.5
  type: iso
  version: v1.1.5
  ```
  
</details>

<details>
  <summary>Container image example</summary>

  ```yaml showLineNumbers
  metadata:
    displayName: Elemental Teal OS
    upgradeImage: registry.suse.com/rancher/elemental-teal/5.3:1.1.5
  type: container
  version: v1.1.5
  ```
  
</details>

#### metadata

This describes the needed informations to define an OS image in Elemental.

If `type` is set to `container`:
| Key          | Type   | Default value | Description                                                  |
|--------------|--------|---------------|--------------------------------------------------------------|
| displayName  | string | empty         | OS image name as seen in Rancher UI                          |
| upgradeImage | string | empty         | Fully qualified Containter image (OCI reference or HTTP URI) |

If `type` is set to `iso`:
| Key          | Type   | Default value | Description                         |
|--------------|--------|---------------|-------------------------------------|
| displayName  | string | empty         | OS image name as seen in Rancher UI |
| uri          | string | empty         | Fully qualified ISO image           |

#### upgradeContainer

This allows to overwrite the default `upgrade` field of System Upgrade Controller plans (see [upgrade compontents](/upgrade-lifecycle.md#components)) based on this ManagedOSVersion.
These keys are translated by the System Upgrade Controller to a Kubernetes [container](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container) specification.
This is the container responsible of running an OS upgrade.
