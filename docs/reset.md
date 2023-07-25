---
sidebar_label: Machine Reset
title: ''
version_badge: '1.3.0'
---

## Machine Reset

There are two ways to reset Elemental machines to their original state or decommission them:

1. When deleting a Cluster, all associated machines will be reset  

![Delete a Cluster to reset all machines](images/reset-cluster-deletion.png)

2. When managing a Cluster, simply delete the Node that needs to be reset  

![Delete a single node to reset it](images/reset-single-node-deletion.png)

### Reset workflow

Once the related `MachineInventory` is flagged for deletion, a reset plan will be executed by the `elemental-system-agent` running on the machine.  

If the machine is still running, this plan will:

1. Reboot the machine in recovery mode.
2. Execute `elemental reset --reset-persistent --reset-oem`.  
   This will format both `COS_PERSISTENT` and `COS_OEM` labeled partitions.  
3. Execute `elemental-register --install`.  
   This will make the machine register as new to the same `MachineRegistration` endpoint.  
   A new `MachineInventory` will be created and the `spec.config.cloud-config` defined in the `MachineRegistration` will be applied again.

Note that the `MachineRegistration` will **not** change, the machine will **not** be reinstalled, only the `COS_PERSISTENT` and `COS_OEM` partition are cleared. For more information, you can consult the [Partition Table](installation#deployed-elemental-teal-partition-table).  

Since the `cloud-config` is re-applied during the reset workflow, you can reset a machine to apply updates from the `MachineRegistration` definition, for example to rotate `users` credentials and authorized keys.  

If you need to bind a machine to a different `MachineRegistration` and trigger a new full installation, you need to reprovision it again using a new image.  

### Enable machine reset

In order to allow machines to be reset automatically, the `spec.config.resettable` flag of the `MachineRegistration` should be toggled.  
This is off by default, but once activated, all associated `MachineInventory` will inherit this setting automatically.  
For example:

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: fire-nodes
  namespace: fleet-default
spec:
  config:
    resettable: true
.
.
.
```

It is also possible to enable reset at a `MachineInventory` level, for example in scenarios where some machines are physical and will benefit from an automatic reset, and some others are virtual and can simply be destroyed and reprovisioned as needed.  
In order to flag a single `MachineInventory` to allow reset, you can use the `elemental.cattle.io/resettable: true` annotation.  
For example:  

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: MachineInventory
metadata:
  annotations:
    elemental.cattle.io/resettable: true
```
