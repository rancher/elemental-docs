---
sidebar_label: Random
title: ''
---

import Registration from "!!raw-loader!@site/examples/quickstart/registration-random-hostname.yaml"

## Random Template Variables

Random template variables are built-in in the Elemental Operator.

They allow to include random `Int`, `Hex` or `UUID` values in custom [label templates](label-templates).

The values are computed on the fly during the `label template variables` rendering.

:::info Random label templates are rendered only once

A label template containing a Random variable is rendered only if the
[MachineInventory](machineinventory-reference) of the registering
host doesn't have a value for that label yet (a label with the same key is missing or its value is empty).

So, the three cases in which a label template with a Random variable is rendered are:
1. the host is registering for the first time and the [MachineInventory](machineinventory-reference) is created anew
2. the label template has been added to the MachineRegistration after the host (re-)registered last time
3. the [MachineInventory](machineinventory-reference) label matching the label template (same label key) has been manually removed
or its value has been cleared out
:::

| Variable                 | Description                                                        | from  |
| ------------------------ | ------------------------------------------------------------------ | ----- |
| `${Random/UUID}`         | random UUID (e.g., fd95324a-c26b-4e28-8727-1dcec293a0ec)           | 1.7.0 |
| `${Random/Hex/[1-32]}`   | random hexadecimal string of the specified length (min 1, max 32)  | 1.7.0 |
| `${Random/Int/[MAXINT]`  | random integer (min 0, max MAXINT-1)                               | 1.7.0 |


:::note Rendering Examples
| template value        | rendered value example               |
|-----------------------|--------------------------------------|
| `${Random/UUID}`      | fd95324a-c26b-4e28-8727-1dcec293a0ec |
| `${Random/Hex/12}`    | acd231f222b8                         |
| `${Random/Int/10000}` | 9432                                 |
:::

The Random Template Variables can be handy for generating custom hostnames to be assigned to the registering host.

Since the hostname must be unique and is assigned through the
[MachineRegistration](machineregistration-reference) `spec.machineName` field, Random variables can be used
to ensure uniqueness of a group of host sharing the same custom prefix and/or suffix.

Check the [HowTo/Customize hostname](hostname) section for more information.

<CodeBlock language="yaml" title="registration example Random template variables" showLineNumbers>{Registration}</CodeBlock>
