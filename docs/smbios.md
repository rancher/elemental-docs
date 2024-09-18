---
sidebar_label: SMBIOS
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/smbios"/>
</head>

import Registration from "!!raw-loader!@site/examples/quickstart/registration.yaml"

:::warning
SMBIOS Template Variables have been deprecated: please use the new
[Label Templates' Variables](label-templates#label-templates-variables) when possible.

Check the [deprecated variables page](label-templates-deprecated) and the
[conversion table](label-templates-deprecated#smbios-labels-to-new-label-templates-variable-table)
for a smooth transition.
:::

## SMBIOS Template Variables

The System Management BIOS (SMBIOS) specification defines data structures (and access methods) that can be used to read management information produced by the BIOS of a computer.

This allows us to gather hardware information about the running system and use that as part of our labels.

The [Elemental Register Client](architecture-components#elemental-register-command-line-tool) gathers SMBIOS data running the `dmidecode` binary during the initial registration of the machine and
sends that data to the [Elemental Operator](architecture-components#elemental-operator-daemon).

That data is used to render the [template label variables](label-templates#label-template-variables) in the [MachineInventory](machineinventory-reference) associated to that machine.

:::note Example
Having the following SMBIOS data:

```console showLineNumbers
System Information
	Manufacturer: My manufacturer
	Product Name: Awesome PC
	Version: Not Specified
	Serial Number: THX1138
	Family: Toretto
```

And setting the `machineName` to `serial-${System Information/Serial Number}` would result in the final value of `serial-THX1138`
:::

A good use of SMBIOS data is to set up different labels for all your machines and get those values from the hardware directly.

Having your `machineInventoryLabels` on the [machineRegistration](machineregistration-reference.md) set to SMBIOS data would allow 
you to use selectors down the line to select similar machines.

For example using the following label `cpuFamily: "${Processor Information/Family}` would allow you to use a selector to search for i7 cpus in your machine fleet.

<CodeBlock language="yaml" title="registration example with SMBIOS template variables" showLineNumbers>{Registration}</CodeBlock>
