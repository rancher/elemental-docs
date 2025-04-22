---
sidebar_label: Inventory Management
title: ''
version_badge: '1.3.0'
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/inventory-management"/>
</head>

## Inventory Management

The Elemental operator can hold an inventory of machines and
the mapping of the machine to it's configuration and assigned cluster.

### MachineInventory

The `MachineInventory` holds all the relevant information for a registered machine.  

Upon successful registration, the `MachineInventory` inherits all the `machineInventoryLabels`
and the `machineInventoryAnnotations` defined in the associated `MachineRegistration`.

The registering host sends also a bunch of [`system annotations`](#system-annotations) tracking information regarding the authentication
method used, the running OS version and the current IP address.

Those annotations are added to the associated [MachineInventory](machineinventory-reference.md).

Elemental machines attempt a registration update every 30 minutes to update labels and annotations.

#### System Annotations
| Key                                         | Description                                                                                |
|---------------------------------------------|--------------------------------------------------------------------------------------------|
| elemental.cattle.io/auth                    | Authentication used during registration (one of 'tpm', 'emulated-tpm', 'mac', 'sys-uuid')  |
| elemental.cattle.io/registration-ip         | IP address used during last registration                                                   |
| elemental.cattle.io/os.unmanaged            | Only present when set to 'true', disables OS management functionality on the tracked host  |
| elemental.cattle.io/name                    | 'NAME' from /etc/os-release                                                                |
| elemental.cattle.io/version                 | 'VERSION' from /etc/os-release                                                             |
| elemental.cattle.io/version-id              | 'VERSION_ID' from /etc/os-release                                                          |
| elemental.cattle.io/id                      | 'ID' from /etc/os-release                                                                  |
| elemental.cattle.io/pretty-name             | 'PRETTY_NAME' from /etc/os-release                                                         |
| elemental.cattle.io/image                   | 'IMAGE' from /etc/os-release                                                               |
| elemental.cattle.io/cpe-name                | 'CPE_NAME' from /etc/os-release                                                            |

#### Reference

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: MachineInventory
metadata:
  # Machine annotations can be useful to identify hosts
  annotations:
    elemental.cattle.io/auth: tpm
    elemental.cattle.io/registration-ip: 192.168.122.152
  labels:
    # A label inherited from the MachineRegistration definition
    element: fire
    # Generic SMBIOS labels that are typically populated with
    # the MachineRegister approach
    machineUUID: f266c64b-3972-40e7-9937-3dc4a311436c
    manufacturer: QEMU
    productName: Standard-PC-Q35-ICH9-2009
    serialNumber: Not-Specified
    # Custom labels can be applied to each MachineInventory
    myCustomLabel: foo 
  name: m-479ab68e-00ff-4081-a731-5b1a76610289
  # The namespace must match the namespace of the cluster
  # assigned to the clusters.provisioning.cattle.io resource
  namespace: fleet-default
  # A reference to the MachineInventorySelector that links the 
  # machine to a Cluster definition
  ownerReferences:
  - apiVersion: elemental.cattle.io/v1beta1
    controller: true
    kind: MachineInventorySelector
    name: fire-machine-selector-qcn7d
    uid: 0a1f751e-4ca9-4a0d-919a-97ba1f434d12
spec:
  # The hash of the TPM EK public key. This is used if you are
  # using TPM2 to identify nodes. Nodes can report their TPM
  # hash by using the MachineRegistration.
  tpmHash: d68795c6192af9922692f050b...
```

### MachineRegistration

`MachineRegistration` holds information on how to install, reset, and configure all connected Elemental machines.  

The `spec.machineInventoryLabels` and `spec.machineInventoryAnnotations` fields hold label and annotation templates
rendered to actual labels and annotations applied to the [MachineInventories](machineinventory-reference.md) tracking
the registered machines.

Elemental machines attempt a registration update every 30 minutes to update labels and annotations.

While it's possible to modify the `spec.config` definition, updates to the `spec.config` will be ignored by machines that already completed installation.
Machines that couldn't complete the installation will try again every 30 minutes by reloading the remote `MachineRegistration` definition.
This can be useful to correct `spec.config` mistakes that prevent successful installation (for ex. `spec.config.elemental.install.device`), without having to create a new `MachineRegistration` and a new ISO.

#### Reference

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: fire-nodes
  # The namespace must match the namespace of the cluster
  # assigned to the clusters.provisioning.cattle.io resource
  namespace: fleet-default
spec:
  # The cloud config that will be used to provision the node
  config:
    cloud-config:
      users:
        - name: root
          passwd: root
    elemental:
      install:
        reboot: true
        device: /dev/sda
        debug: true
      reset:
        enabled: true
        debug: true
        reset-persistent: true
        reset-oem: true
        reboot: true
  # Labels to be added to the created MachineInventory object
  machineInventoryLabels:
    element: fire
    manufacturer: "${System Information/Manufacturer}"
    productName: "${System Information/Product Name}"
    serialNumber: "${System Information/Serial Number}"
    machineUUID: "${System Information/UUID}"
  # Annotations to be added to the created MachineInventory object
  machineInventoryAnnotations: {}
```
