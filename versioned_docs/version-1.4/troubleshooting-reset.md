---
sidebar_label: Reset
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/troubleshooting-reset"/>
</head>

# Troubleshooting reset

Each `MachineInventory` with the `elemental.cattle.io/resettable: "true"` annotation will trigger the execution of a reset plan, upon deletion.  
The `machineinventory.elemental.cattle.io` finalizer is going to be removed only after the plan has been executed successfully by the `elemental-system-agent` running on the machine.  

You can investigate why a `MachineInventory` has not been deleted yet, by examining it:

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: MachineInventory
metadata:
  # deletionTimestamp has been set. This object has been marked for deletion.
  deletionTimestamp: "2023-08-04T08:41:25Z"
  annotations:
    # `resettable` annotation is enabled.
    # This means the machine has to go through reset, before deletion of this object.
    elemental.cattle.io/resettable: "true"
  # `machineinventory.elemental.cattle.io` finalizer is set.
  #  The `elemental-operator` is going to create a reset plan for the machine to execute.
  #  After successful execution of the reset plan, the finalizer is removed and the object will be deleted.
  finalizers:
  - machineinventory.elemental.cattle.io
status:
  conditions:
  # Most recent condition shows that the MachineInventory is waiting for a plan to be applied.
  - lastTransitionTime: "2023-08-04T08:41:25Z"
    message: waiting for plan to be applied
    reason: WaitingForPlan
    status: "False"
    type: Ready
  # The plan to be executed is referenced. 
  # Normally it has the same name of the MachineInventory and lives within the same namespace.   
  plan:
    checksum: 5aba8b6b3161bc52d8953b2428e54ecda3b59e8e0043b49d761d1e79174eded6
    secretRef:
      name: m-bf1008a1-61d6-4355-b5f5-f7d1c527affe
      namespace: fleet-default
```

You can also examine the referenced plan `Secret`.  
Note that the `elemental-system-agent` running on the machine is watching this secret and it should execute the plan.  
You can also monitor its progress from the machine logs: `journalctl -u elemental-system-agent -f`.

```yaml
apiVersion: v1
kind: Secret
# This is a `elemental.cattle.io/plan` secret plan.
type: elemental.cattle.io/plan
metadata:
  annotations:
    # This is a `reset` plan type.
    elemental.cattle.io/plan.type: reset
  labels:
    elemental.cattle.io/managed: "true"
  name: m-bf1008a1-61d6-4355-b5f5-f7d1c527affe
  namespace: fleet-default
  # It is owned by the `MachineInventory` waiting for deletion.
  ownerReferences:
  - apiVersion: elemental.cattle.io/v1beta1
    controller: true
    kind: MachineInventory
    name: m-bf1008a1-61d6-4355-b5f5-f7d1c527affe
    uid: 5aa3863c-63a5-4cb9-91fd-7a45191d4842
data:
  # The plan has not been applied yet.
  applied-checksum: ""
  # It also hasn't failed.
  failed-checksum: ""
  # The actual plan to be executed, base64 encoded.
  plan: eyJmaWxlcyI6W3siY29udGVudCI6ImJtRnRaVG9nUld4bGJXVnVkR0ZzSUZKbGMyVjBDbk4wWVdkbGN6b0tJQ0FnSUc1bGRIZHZjbXN1WVdaMFpYSTZDaUFnSUNBZ0lDQWdMU0JqYjIxdFlXNWtjem9LSUNBZ0lDQWdJQ0FnSUNBZ0xTQmxiR1Z0Wlc1MFlXd3RjbVZuYVhOMFpYSWdMUzFrWldKMVp5QXRMWEpsYzJWMENpQWdJQ0FnSUNBZ0lDQnBaam9nSjFzZ0xXWWdMM0oxYmk5amIzTXZjbVZqYjNabGNubGZiVzlrWlNCZEp3b2dJQ0FnSUNBZ0lDQWdibUZ0WlRvZ1VuVnVjeUJsYkdWdFpXNTBZV3dnY21WelpYUUsiLCJwYXRoIjoiL29lbS9yZXNldC1jbG91ZC1jb25maWcueWFtbCIsInBlcm1pc3Npb25zIjoiMDYwMCJ9XSwiaW5zdHJ1Y3Rpb25zIjpbeyJuYW1lIjoiY29uZmlndXJlIG5leHQgYm9vdCB0byByZWNvdmVyeSBtb2RlIiwiYXJncyI6WyIvb2VtL2dydWJlbnYiLCJzZXQiLCJuZXh0X2VudHJ5PXJlY292ZXJ5Il0sImNvbW1hbmQiOiJncnViMi1lZGl0ZW52In0seyJuYW1lIjoic2NoZWR1bGUgcmVib290IiwiYXJncyI6WyItciIsIisxIl0sImNvbW1hbmQiOiJzaHV0ZG93biJ9XX0K
```

The plan created by the `elemental-operator` should contain the following instructions:

```json
{
  "files": [
    // A cloud-init config file is created on the default /oem directory.  
    // This config will be executed once in recovery mode.
    {
      "content": "bmFtZTogRWxlbWVudGFsIFJlc2V0CnN0YWdlczoKICAgIG5ldHdvcmsuYWZ0ZXI6CiAgICAgICAgLSBjb21tYW5kczoKICAgICAgICAgICAgLSBlbGVtZW50YWwtcmVnaXN0ZXIgLS1kZWJ1ZyAtLXJlc2V0CiAgICAgICAgICBpZjogJ1sgLWYgL3J1bi9jb3MvcmVjb3ZlcnlfbW9kZSBdJwogICAgICAgICAgbmFtZTogUnVucyBlbGVtZW50YWwgcmVzZXQK",
      "path": "/oem/reset-cloud-config.yaml",
      "permissions": "0600"
    }
  ],
  "instructions": [
    {
      "name": "configure next boot to recovery mode",
      "args": [
        "/oem/grubenv",
        "set",
        "next_entry=recovery"
      ],
      "command": "grub2-editenv"
    },
    {
      "name": "schedule reboot",
      "args": [
        "-r",
        "+1"
      ],
      "command": "shutdown"
    }
  ]
}
```

If the `elemental-system-agent` successfully executed the plan, the `machineinventory.elemental.cattle.io` finalizer on the `MachineInventory` will be removed and the `MachineInventory` will be deleted.  
Note that this is not an indication that the machine has been fully reset yet.  
This is a limitation of the current implementation and it will eventually improve, so that it will be possible to completely track the reset status.  

However, at this stage we do expect the host to undergo reboot, and reboot in recovery mode.  
Once in recovery mode, the `cos-setup-network` should execute the cloud-init config that has been written on `/oem/reset-cloud-config.yaml`.  
You can monitor the status with `journalctl -u cos-setup-network -f`.

The cloud-init instructions should look like the following:

```yaml
name: Elemental Reset
stages:
    network.after:
        - if: '[ -f /run/cos/recovery_mode ]'
          name: Runs elemental reset
          commands:
            - systemctl start elemental-register-reset
```

The `elemental-register` cli will register with the `elemental-operator` as a new machine. This will lead to the creation of a new `MachineInventory` object.  
The remote `MachineRegistration` configuration will also be fetched to apply the reset options, for example `reset-persistent`, `reset-oem`, or the power settings, either `reboot` or `power-off`.  
After reset, depending on the settings, the machine should either shut down or reboot and be ready to be adopted within a new cluster.  

## Forcefully deleting a MachineInventory undergoing reset

If the machine is unable to execute the reset instructions and the related `MachineInventory` is not deleted, there are two equivalent ways you can manually fix the issue.

- Remove the `elemental.cattle.io/resettable: "true"` annotation from the `MachineInventory`.  
- Remove the `machineinventory.elemental.cattle.io` finalizer from the `MachineInventory`.  

Remember to also take care of the machine itself, by fully reprovisioning it or rebooting into recovery mode and using the `elemental reset` command directly.  
