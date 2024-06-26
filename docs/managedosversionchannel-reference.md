---
sidebar_label: ManagedOSVersionChannel reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/managedosversionchannel-reference"/>
</head>

# ManagedOSVersionChannel reference

The `ManagedOSVersionChannel` resource is responsible of defining OS image channel.

There are several keys that can be configured under a `ManagedOSVersionChannel` resource spec.

```yaml title="managedosversionchannel-example.yaml" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: ManagedOSVersionChannel
metadata:
  name: elemental-channel
  namespace: fleet-default
spec:
  options:
    image: registry.suse.com/rancher/elemental-channel:1.4.2
  syncInterval: 1h
  type: custom
```

#### ManagedOSVersionChannelSpec reference

| Key                          | Type   | Default value | Description                                                                             |
|------------------------------|--------|---------------|-----------------------------------------------------------------------------------------|
| options                      | object | null          | Defines the optional informations that can be added in an OS channel                    |
| syncInterval                 | string | 1h            | Defines when to sync the OS channel                                                     |
| type                         | string | empty         | Defines the channel type, only `custom` is supported now                                |
| upgradeContainer             | object | null          | An upgrade container that can be defined. See [reference](#upgradecontainer)            |
| deleteNoLongerInSyncVersions | bool   | false         | Automatically delete deprecated OS versions that are no longer included in the channel  |

#### upgradeContainer

This allows to overwrite the default `upgrade` field of System Upgrade Controller plans (see [upgrade compontents](/upgrade-lifecycle.md#components)) based on this ManagedOSVersion.
These keys are translated by the System Upgrade Controller to a Kubernetes [container](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container) specification.
This is the container responsible of running an OS upgrade.
