---
sidebar_label: ManagedOSVersionChannel reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/managedosversionchannel-reference"/>
</head>

# ManagedOSVersionChannel reference

The `ManagedOSVersionChannel` resource is responsible of defining OS image channels which embed
information about ready to use OS and ISO images.

The `ManagedOSVersionChannel` is digested by the [elemental-operator](architecture-components.md#elemental-operator-daemon)
to produce a set of [ManagedOSVersion](managedosversion-reference.md) resources, which are used
for building installation images and to perform OS upgrades.

See [Operator/Channels](channels.md) for more details.

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
  registry: priv-registry.local
  syncInterval: 1h
  type: custom
```

#### ManagedOSVersionChannelSpec reference

| Key                          | Type   | Default value | Description                                                                             |
|------------------------------|--------|---------------|-----------------------------------------------------------------------------------------|
| deleteNoLongerInSyncVersions | bool   | false         | Automatically delete deprecated OS versions that are no longer included in the channel  |
| enabled                      | bool   | true          | Enables this channel. Allowing syncing of OS versions.                                  |
| options                      | object | null          | Defines the optional information that can be added in an OS channel                    |
| registry                     | string | empty         | Registry prepended to all the embedded URIs during ManagedOSVersion resource generation |
| syncInterval                 | string | 1h            | Defines when to sync the OS channel                                                     |
| type                         | string | empty         | Defines the channel type, only `custom` is supported now                                |
| upgradeContainer             | object | null          | An upgrade container that can be defined. See [reference](#upgradecontainer)            |

#### registry
When set, the value is prepended to all the embedded OS and ISO URLs found in the channel to form the actual [ManagedOSVersion](managedosversion-reference.md)
resources.
This makes the airgap setup easier, as the channel image can be used as is (while the actual OS and ISO images should still be extracted and loaded
on the private registry).

#### upgradeContainer

This allows to overwrite the default `upgrade` field of System Upgrade Controller plans (see [upgrade components](/upgrade-lifecycle.md#components)) based on this ManagedOSVersion.
These keys are translated by the System Upgrade Controller to a Kubernetes [container](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container) specification.
This is the container responsible of running an OS upgrade.
