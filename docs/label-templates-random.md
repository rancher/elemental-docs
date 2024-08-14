---
sidebar_label: Random
title: ''
---

import Registration from "!!raw-loader!@site/examples/quickstart/registration-random-hostname.yaml"

## Random Template Variables

Random template variables are built-in in the Elemental Operator.

They allow to include random `Int`, `Hex` or `UUID` values in custom [label templates](label-templates).

The values are computed on the fly during the `label template variables` rendering.

| Variable                                 | Description                                                           |
| ---------------------------------------- | --------------------------------------------------------------------- |
| `${Random/UUID}`                         | random UUID (e.g., fd95324a-c26b-4e28-8727-1dcec293a0ec)              |
| `${Random/Hex/[1-32]}`                   | random hexadecimal string of the specified lenght (min 1, max 32)     |
| `${Random/Int/[MAXINT]`                  | random integer (min 0, max MAXINT-1)                                  |


:::note Rendering Examples
| template value         | rendered value example               |
|------------------------|--------------------------------------|
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