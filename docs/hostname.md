---
sidebar_label: Customize hostname
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/hostname"/>
</head>

### How to set a custom hostname

When booting a host with an Elemental ISO, the hostname is temporarily set to `rancher-{$RANDOM}`.
As soon as the boot process is finished, the registration phase takes place: the host connects to the
Elemental Operator, which creates a MachineInventory for the host.

Each host registered with the Elemental Operator is tracked by a `MachineInventory` resource.
The hostname of the host is eventually set to the `name` of the `MachineInventory` resource,
during the Cluster provisioning phase (i.e., during k3s/RKE2 deployment on the host).

#### Default hostname

The default name assigned to the newly created MachineInventory is in the form `m-{$UUID}`.
When the host is provisioned as part of a Cluster, the `m-{UUID}` hostname is set, overriding the previous `rancher-{$RANDOM}` hostname.

#### Set custom hostnames

The hostname can be specified setting the [`machineName`](machineregistration-reference.md#machinename) field in the
['MachineRegistration'](machineregistration-reference.md) resource.

The hostname set in the `machineName` is expected to be in a template form, in order to be uniquely generated for each host using [SMBIOS](smbios.md) and [Hardware Labels](hardwarelabels.md) data.

:::caution important note
The `machineName` field in the `MachineRegistration` resource will be used as the blueprint not
only for the hostname of the registering host, but also for the name of the `MachineInventory` resource
created to track the host.

This means that if you don't use a templated `machineName` such to generate a unique name for each
host that will boot using the same `MachineRegistration` data (i.e., the same ISO), only the first
registering host will be successful while the others will fail: the `MachineInventory` name must be
unique.
:::