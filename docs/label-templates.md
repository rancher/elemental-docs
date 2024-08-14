---
sidebar_label: Label Templates
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/label-templates"/>
</head>

# Label Templates Overview
Elemental allows to specify *label templates* in the `spec.machineInventoryLabels` section of the 
[MachineRegistration](machineregistration-reference).

Their format is the canonical `key`:`value` used in Kubernetes labels.

These label templates are converted to actual labels attached to each
[MachineInventory](machineinventory-reference) resources created during the
[machine onboarding](architecture-machineonboarding) phase.

The resulting labels have the same `key` of the label template.

The associated `value` is generated:
* **rendering the [`label template variables`](#label-template-variables)** (if present)
* **`sanitizing`** the resulting value


:::info
The Elemental templating functionality covers also the [MachineRegistration] `spec.machineName` field,
which defines the resulting hostname of the registering machine and the `name` of the associated
[MachineInventory](machineinventory-reference) resource.

See the [Machine Name](#custom-machine-names) section for more details.
:::

## Label Template Variables
Elemental Label Templating includes a set of predefined variables that could be used inside the `value` of
the *label templates* specified in the [MachineRegistration](machineregistration-reference).

The syntax used to specify template variables is:

**\$\{ *VARFAMILY* \/ *VARPATH* \}**

where _VARFAMILY_ defines a group (family) of supported variables and _VARPATH_ defines the actual variable
name inside the belonging family group.

Elemental currently supports three families of template variables:
* **SMBIOS**:  **\$\{ System Information \/** _VARPATH_ **\}**
* **HARDWARE**:  **\$\{ System Data \/** _VARPATH_ **\}**
* **RANDOM**:  **\$\{ Random \/** _VARPATH_ **\}**

Template variables can be mixed with static text to form the actual labels assigned to
([MachineInventories](machineinventory-reference)).

:::note Rendering Examples
* Template label tracking the number of CPU cores of the registering host (assume host has 4 cores):
  * template label: **cpu: $\{System Data\/CPU\/Total Cores\}-cores**
  * rendered label: **cpu: 4-cores**
* Template label to track the SMBIOS UUID of the registering host:
  * template label: **sbios-UUID: \$\{System Information\/UUID\}**
  * rendered label: **sbios-UUID: fd95324a-c26b-4e28-8727-1dcec293a0ec**
:::

## Sanitization
Once the label template value has been rendered accordingly to the included [label template variables](#label-template-variables), the resulting value is `sanitized` before being assigned to the resulting label.

**The `sanitization` enforce the label value to only contain letters (capitalized or not), numbers and the hyphen (`-`), point (`.`) and underscore (`_`) characters**:
all the characters not included are substituted with an underscore.

If an underscore is at the beginning or at the end of the label value, it is dropped.

Two consecutive underscores are replaced with one.

:::note Rendering Example
* Template label with not allowed chars sanitization:
  * template label: **sanitized: this:needs--sanitizing!**
  * rendered label: **sanitized: this-needs-sanitizing**
:::

## Usage of template labels
Template labels allow to automatically attach labels to each host's
[MachineInventory](machineinventory-reference) every time an host register to the Elemental Operator.

:::info
Registration happens not only during the [onboarding phase](architecture-machineonboarding): each host
re-registers every 30 minutes (and every time it reboots).
During the re-registration, the template labels in the associated
[MachineRegistration](machineregistration-reference) are re-evaluated and added/updated in the
[MachineInventory](machineinventory-reference).
:::

There are basically three main cases where the template labels are handy:
* as hardware data added to the Elemental catalog
* as selectors for Cluster Provisioning
* as template for custom Machine Names

### Hardware data for the Elemental catalog
The [SMBIOS](smbios) and [Hardware](hardwarelabels) template variables can be used to attach to each
[MachineInventory](machineinventory-reference) hardware and system data of each host.

### Selectors for Cluster Provisioning
The `template labels` can be used to indentify and select machines with special properties to form
a new Kubernetes Cluster.

The labels generated for each [MachineInventory](machineinventory-reference) are an handy selector for the
[MachineInventorySelectorTemplate](machineinventoryselectortemplate-reference) resource
(see the [Kubernetes Cluster provisioning](architecture-clusterdeployment#kubernetes-cluster-provisioning)
section for more details).

### Custom Machine Names
The hostname of the onboarding machine can be specified using the
[MachineRegistration](machineregistration-reference) `spec.machineName` field.

`spec.machineName` value undergoes the same `label templates variables` and `sanitization` process reserved
to the `spec.machineInventoryLabels` label values.

:::warning
There is one notable difference during the [sanitization](#sanitization) rendering: the underscore (`_`) is
not allowed and is dealt as the other forbidden characters (i.e., it is substituted by an hyphen: `-`).
This is required as the underscore is not allowed in the OS hostnames.
:::

For more information on how to define the hostname for Elemental hosts, see the
[HowTo/Customize hostname](hostname) section.

:::note Rendering Example
* Define an hostname template like `SLE-Micro-[random string of 6 hexadecimal values]`:
  * MachineRegistration spec: **machineName: SLE-Micro-\$\{Random\/Hex\/6\}**
  * MachineInventory name: **SLE-Micro-32ad41**
:::