---
sidebar_label: Machine Reset
title: ''
version_badge: '1.3.0'
---

## Machine Reset

There are two ways to reset Elemental machines to their original state or decommission them:

1. When deleting a Cluster, all associated machines will be decommissioned.
2. When managing a Cluster, simply delete the Node that needs to be decommissioned.

Once the related `MachineInventory` is flagged for deletion, a reset plan will be executed by the `elemental-system-agent` running on the machine.  

If the machine is still running, this plan will reboot it in recovery mode, trigger `elemental reset --reset-persistent`, and reboot again to register to a new `MachineInventory` object.  

Note that the `MachineRegistration` will **not** change, the machine will **not** be reinstalled, only the `COS_PERSISTENT` partition is cleared. For more information, you can consult the [Partition Table](installation#deployed-elemental-teal-partition-table).  

If you need to bind a machine to a different `MachineRegistration` and trigger a new installation config, you need to reprovision it again using a new image.  
