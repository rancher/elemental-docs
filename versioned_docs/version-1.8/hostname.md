---
sidebar_label: Customize hostname
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/hostname"/>
</head>

## Customize hostname
### Elemental hostname management overview

When a host boots from the Elemental ISO, the hostname is temporarily set (*transient hostname*) to the one provided from the DHCP server.
If the DHCP server doesn't provide a hostname, the Elemental ISO provides a transient hostname
in the form: `rancher-${RANDOM}`.

As soon as the boot process is finished, the registration phase kicks in: the host connects to
the Elemental Operator, which creates a `MachineInventory` for the host.
Each host registered with the Elemental Operator is tracked by a `MachineInventory` resource.

**The `name` of the `MachineInventory` resource associated with the node is the permanent (static) hostname**
**eventually set to the host**.
This permanent hostname **is set on the node during the K8s cluster provisioning phase only**.
Before the K8s provisioning phase, the node hostname is either the DHCP assigned one or `rancher-${RANDOM}`.

For the remainder of this section we will refer to the `hostname` meaning the *permanent* hostname,
i.e., the hostname that is set after the host has been provisioned as part of a K8s cluster.

### Default hostname

The default name assigned to each newly created MachineInventory is in the form `m-{$UUID}`.
When the host is provisioned as part of a Cluster, that `m-{UUID}` name is set as the hostname of
the corresponding host, overriding the previous assigned hostname (`rancher-{$RANDOM}` or the DHCP assigned one).

### Set a custom hostname

The hostname can be specified setting the [`machineName`](machineregistration-reference.md#machinename) field in the
['MachineRegistration'](machineregistration-reference.md) resource.

The hostname set in the `machineName` field is expected to be in a template form, in order to be uniquely generated
for each registering node, using the [Random](label-templates-random.md), [SMBIOS](smbios.md) and [Hardware](hardwarelabels.md)
variables from the [Label Templates](label-templates.md) feature.

:::caution important note
The `machineName` field in the `MachineRegistration` resource is used as the blueprint not
only for the hostname of the registering host, but also for the name of the `MachineInventory` resource
created to track the host.

This means that if you don't use a templated `machineName` such to generate a unique name for each
host that will boot using the same `MachineRegistration` data (i.e., the same ISO), only the first
registering host will be successful while the others will fail: the `MachineInventory` name must be
unique.
:::

import Registration from "!!raw-loader!@site/examples/quickstart/registration-hardware-dhcphostname.yaml"

### Keep the hostname assigned from DHCP
In order to keep the hostname assigned from the DHCP server before the host registers to the operator,
the `MachineRegistration` [`machineName field`](machineregistration-reference.md#machinename) should be set
to the `${System Data/Runtime/Hostname}` [Hardware Label](hardwarelabels.md).

This way Elemental will use the current hostname as the `MachineInventory` name during
the registration phase, which will be later set as the static hostname of the host during the
provisioning phase.

<CodeBlock language="yaml" title="registration example with hostname and MachineInventory name set on the hostname got by the DHCP server" showLineNumbers>{Registration}</CodeBlock>
