---
sidebar_label: MachineInventory reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/machineinventory-reference"/>
</head>

# MachineInventory
When a new host registers successfully, the <Vars name="elemental_operator_name" /> creates a MachineInventory resource representing that particular host.
The MachineInventory stores the TPM hash of the tracked host, retrieved during the registration process, and allows to execute arbitrary commands (plans) on the machine.

A MachineInventory has two conditions:

- `AdoptionReady`, which indicates the machine has been adopted by a selector to be part of a cluster.
- `Ready`, which indicates that the machine has been registered and provisioned with an Elemental OS.
