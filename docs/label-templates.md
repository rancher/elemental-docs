---
sidebar_label: Label Templates
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/label-templates"/>
</head>

import Registration from "!!raw-loader!@site/examples/quickstart/registration-hardware-dhcphostname.yaml"

# Label Templates Overview
Elemental allows to specify *label templates* in the `spec.machineInventoryLabels` and `spec.machineInventoryAnnotations` sections of the
[MachineRegistration](machineregistration-reference) resources.

Their format is the canonical `key`:`value` used in Kubernetes labels and annotations.

These label templates are converted to actual labels and annotations attached to each
[MachineInventory](machineinventory-reference) resource created during the
[machine onboarding](architecture-machineonboarding) phase.

The resulting labels and annotations have the same `key` of the label template.

The associated `value` is generated:
* **rendering the [`label template variables`](#label-template-variables)** (if present)
* **`sanitizing`** the resulting value (in the case of the labels only)


:::info
The Elemental templating functionality covers also the [MachineRegistration](machineregistration-reference) `spec.machineName` field,
which defines the resulting hostname of the registering machine and the `name` of the associated
[MachineInventory](machineinventory-reference) resource.

See the [Machine Name](#custom-machine-names) section for more details.
:::

## Label Templates' Variables
Elemental Label Templating includes a set of predefined variables that could be used inside the `value` of
the *label templates* specified in the [MachineRegistration](machineregistration-reference).

The syntax used to specify label templates' variables is:

**\$\{ *VARFAMILY* \/ *VARPATH* \}**

where _VARFAMILY_ defines a group (family) of supported variables and _VARPATH_ defines the actual variable
name inside the belonging family group.

Elemental currently supports the following _template variable families_:

* [**BIOS**](label-templates-bios): **\$\{ BIOS \/** _VARPATH_ **\}**
* [**BaseBoard**](label-templates-baseboard): **\$\{ BaseBoard \/** _VARPATH_ **\}**
* [**CPU**](label-templates-cpu): **\$\{ CPU \/** _VARPATH_ **\}**
* [**Chassis**](label-templates-chassis): **\$\{ Chassis \/** _VARPATH_ **\}**
* [**GPU**](label-templates-gpu): **\$\{ GPU \/** _VARPATH_ **\}**
* [**Memory**](label-templates-memory): **\$\{ Memory \/** _VARPATH_ **\}**
* [**Network**](label-templates-network): **\$\{ Network \/** _VARPATH_ **\}**
* [**Product**](label-templates-product): **\$\{ Product \/** _VARPATH_ **\}**
* [**Runtime**](label-templates-runtime): **\$\{ Runtime \/** _VARPATH_ **\}**
* [**Storage**](label-templates-storage): **\$\{ Storage \/** _VARPATH_ **\}**

:::warning
All the _template variable families_ (but _`Random`_) are enabled only if [MachineRegistration](machineregistration-reference.md)'s
`elemental.registration.no-smbios` field is set to `false` (default).

When the `elemental.registration.no-smbios` field is set to `true`, the registering machines do not
send any data required for rendering the template variables, so no variables will be available, but
the **Random** variables, which are the only notable exception.

**Random** variables are always available since they are built-in on the operator side.
They are also special since they are computed only once: see the
[Random Template variables](label-templates-random) section for more details.
:::

Template variables can be mixed with static text to form the actual labels assigned to
([MachineInventories](machineinventory-reference)).

:::note Rendering Examples
* Label Template tracking the number of CPU cores of the registering host (assume host has 4 cores):
  * original label: **cpu: $\{CPU\/TotalCores\}-cores**
  * rendered label: **cpu: 4-cores**
* Label Template tracking the SMBIOS UUID of the registering host:
  * original label: **sbios-UUID: \$\{Product\/UUID\}**
  * rendered label: **sbios-UUID: fd95324a-c26b-4e28-8727-1dcec293a0ec**
:::

## Sanitization
Once the label template value has been rendered accordingly to the included [label template variables](#label-template-variables), the resulting value is `sanitized` before being assigned to the resulting label.

**The `sanitization` enforces the label value to only contain letters (capitalized or not), numbers and the hyphen (`-`), point (`.`) and underscore (`_`) characters**:
all the characters not included are substituted with an hyphen.

Any character at the beginning and at the end of the label value must be a letter or a number.
If it is not, it is dropped.

Two consecutive hyphens are replaced with one.

:::note Rendering Example
* Label Template with sanitization of prohibited chars:
  * original label: **sanitized: this:needs--sanitizing!**
  * rendered label: **sanitized: this-needs-sanitizing**
:::

## Usage of Label Templates
Label Templates allow to automatically attach and update labels and annotations to each host's
[MachineInventory](machineinventory-reference) every time an host registers to the Elemental Operator.

:::info
Registration happens not only during the [onboarding phase](architecture-machineonboarding): each host
re-registers every 30 minutes (and every time it reboots).
During the re-registration, the Label Templates in the associated
[MachineRegistration](machineregistration-reference) are re-evaluated and added/updated in the
[MachineInventory](machineinventory-reference).
:::

There are basically three main cases where the label templates can be of use:
* to attach hardware data to the Elemental Catalog
* to add selectors to pick up hosts for Cluster Provisioning
* to define a custom template for the Machine Names

### Hardware data for the Elemental catalog
The Label Templates' variables can be used to attach hardware data to each
[MachineInventory](machineinventory-reference) resource (which form the Elemental Catalog).

In this case, annotations may be a better choice since their values are not sanitized.

### Selectors for Cluster Provisioning
The `Label Templates` can be used to generate labels used to identify and select machines
with special hardware properties to form new Kubernetes Clusters.

The labels attached to each [MachineInventory](machineinventory-reference) are eligible to _selector_
for the [MachineInventorySelectorTemplate](machineinventoryselectortemplate-reference) resource
(see the [Kubernetes Cluster provisioning](architecture-clusterdeployment#kubernetes-cluster-provisioning)
section for more details).

### Custom Machine Names
The hostname of the onboarding machine can be specified using the
[MachineRegistration](machineregistration-reference) `spec.machineName` field.

`spec.machineName` value undergoes the same `Label Templates' variables` and `sanitization` processes
reserved to the `spec.machineInventoryLabels` field.

:::warning
There is one notable difference between the [MachineRegistration](machineregistration-reference) `spec.machineName` and `spec.machineInventorylabels` fields: during the [sanitization](#sanitization) process
the underscore (`_`) is substituted as the other forbidden characters (i.e., it is substituted by an
hyphen: `-`).
This is required as the underscore is not allowed in linux hostnames.
:::

For more information on how to define the hostname for Elemental hosts, see the
[HowTo/Customize hostname](hostname) section.

:::note Rendering Example
* Define an hostname template like `SLE-Micro-[random string of 6 hexadecimal values]`:
  * MachineRegistration spec: **machineName: SLE-Micro-\$\{Random\/Hex\/6\}**
  * MachineInventory name: **SLE-Micro-32ad41**
:::

## Label Templates in action

<CodeBlock language="yaml" title="registration example with Label Templates' variables" showLineNumbers>{Registration}</CodeBlock>
