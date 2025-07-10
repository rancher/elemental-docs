---
sidebar_label: MachineInventorySelector reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/machineinventoryselector-reference"/>
</head>

# MachineInventorySelector reference

A MachineInventorySelector selects MachineInventories based on applied selectors (usually pattern matching on MachineInventory label values).

MachineInventorySelectors have two conditions:

- `InventoryReady`, turns to true if the MachineInventorySelector has found a matching MachineInventory and has successfully set itself as the MachineInventory owner.
- `Ready`, tracks if the selector already adopted a machine and started the kubernetes provisioning process (node bootstrap).