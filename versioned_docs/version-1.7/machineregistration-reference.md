---
sidebar_label: MachineRegistration
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/machineregistration"/>
</head>

# MachineRegistration reference

The MachineRegistration resource allows:
* to configure the registration process
* to provide OS installation parameters
* to define the [Elemental services](architecture-services.md) enabled for the registering machine
Once created it generates the registration URL used by nodes to register and start the [machine onboarding](architecture-machineonboarding.md) process.

The MachineRegistration has a `Ready` condition which turns to true when the <Vars name="elemental_operator_name" /> has successfully generated the registration URL and an associated `ServiceAccount`. From this point on the target host can connect to the registration URL to kick off the provisioning process.

An HTTP GET request against the registration URL returns the _registration file_: a .yaml file containing the registration data (i.e., the _spec:config:elemental:registration_ section from the just created MachineRegistration).
The registration file contains all the required data to allow the target host to perform self registration and start the Elemental provisioning.

There are several keys that can be configured under a `MachineRegistration` resource spec.

```yaml title="MachineRegistration" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: my-nodes
  namespace: fleet-default
spec:
  machineName: name
  machineInventoryLabels:
    label: value
  machineInventoryAnnotations:
    annotation: value
  config:
    cloud-config:
        ...
    elemental:
        registration:
            ...
        install:
            ... 
```

#### config.cloud-config

Contains the cloud-configuration to be injected in the node.  
Both yip and cloud-init syntax are supported. See the [Cloud Config Reference](cloud-config-reference.md) for full information.

The cloud-configuration provided in this field is not evaluated during the installation, it is
just added to the node so it gets evaluated on reboot.

#### config.network

Contains the Declarative Networking configuration, supporting integration with [CAPI IPAM Providers](https://github.com/kubernetes-sigs/cluster-api/blob/main/docs/proposals/20220125-ipam-integration.md#ipam-provider).  
See the [Declarative Networking Reference](networking.md) for full information.  
Any `configurator` value different than `none` will denote that the Network is managed by Elemental.  

| Key               | Type      | Default value | Description                                                                                                   |
|-------------------|-----------|---------------|---------------------------------------------------------------------------------------------------------------|
| configurator      | string    | none          | The network configurator type to use (`none`, `nmc`, `nmstate`, or `nmconnections`)                           |
| ipAddresses       | objRefMap | empty         | A map of `IPPool` references. Map keys can be used for IPAddress substitution in the network config template. |
| config            | obj       | empty         | The network config template. Syntax varies depending on the `configurator` in use.                            |

#### config.elemental.registration
Contains the configuration used for the connection and the initial registration to the <Vars name="elemental_operator_name" />.

Supports the following values:

| Key               | Type   | Default value | Description                                                                                                                                    |
|-------------------|--------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| url               | string | empty         | URL to connect to the <Vars name="elemental_operator_name" />                                                                                  |
| ca-cert           | string | empty         | CA to validate the certificate provided by the server at 'url' (required if the certificate is not signed by a public CA)                      |
| no-smbios         | bool   | false         | Whether SMBIOS data should be sent to the <Vars name="elemental_operator_name" /> (see the [SMBIOS reference](smbios.md) for more information) |
| no-toolkit        | bool   | false         | Disables the <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" /> support and allows registration of an [unmanaged OS](unmanaged-os.md)                                           |

:::warning
The following values are for development purposes only.

| Key               | Type   | Default value | Description                                                                                                                                       |
|-------------------|--------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| auth              | string | tpm           | Authentication method to use during registration, one of `tpm`, `mac` or `sys-uuid`. See [Authentication](authentication.md) for more information |
| emulate-tpm       | bool   | false         | This will use software emulation of the TPM (required for hosts without TPM hardware)                                                             |
| emulated-tpm-seed | int64  | 1             | Fixed seed to use with 'emulate-tpm'. Set to -1 to get a random seed. See [TPM](tpm.md) for more information                                      |

:::


#### config.elemental.install

Contains the installation configuration that would be applied via `elemental-register --install` when booted from an ISO and passed to [`elemental install`](https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental_install.md)

Supports the following values:

| Key             | Type   | Default value | Description                                                                                                                                |
|-----------------|--------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| firmware        | string | efi           | Firmware to install ('efi' or 'bios')                                                                                                      |
| device          | string | empty         | Device to install the system to                                                                                                            |
| device-selector | string | empty         | Rules for picking device to install the system to                                                                                          |
| no-format       | bool   | false         | Don’t format disks. It is implied that COS_STATE, COS_RECOVERY, COS_PERSISTENT, COS_OEM partitions are already existing on the target disk |
| config-urls     | list   | empty         | Cloud-init config files locations                                                                                                          |
| iso             | string | empty         | Performs an installation from the ISO url instead of the running ISO                                                                       |
| system-uri      | string | empty         | Sets the system image source and its type (e.g. 'docker:registry.org/image:tag') instead of using the running ISO                          |
| debug           | bool   | false         | Enable debug output                                                                                                                        |
| tty             | string | empty         | Add named tty to grub                                                                                                                      |
| poweroff        | bool   | false         | Shutdown the system after install                                                                                                          |
| reboot          | bool   | false         | Reboot the system after install                                                                                                            |
| snapshotter     | obj    | empty         | Snapshotter configuration. See [reference](#configelementalinstallsnapshotter)                                                             |
| eject-cd        | bool   | false         | Try to eject the cd on reboot                                                                                                              |

:::warning warning
In case of using both `iso` and `system-uri` the `iso` value takes precedence
:::

It is only required to specify either the `device` or `device-selector` fields for a successful install, the rest of the parameters are all optional.

If both `device` and `device-selector` is specified the value of `device` is used and `device-selector` is ignored.

<details>
<summary>Example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: MachineRegistration
  metadata:
    name: my-nodes
    namespace: fleet-default
  spec:
    config:
      elemental:
        install:
          device: /dev/sda
          debug: true
          reboot: true
          eject-cd: true
          system-uri: registry.suse.com/rancher/sle-micro/5.5:latest
  ```
</details>

#### config.elemental.install.device-selector

The `device-selector` field can be used to dynamically pick device during installation. The field contains a list of rules that looks like the following:

<details>
<summary>Example device-selector based on device name</summary>
  ```yaml showLineNumbers
  device-selector:
  - key: Name
    operator: In
    values:
    - /dev/sda
    - /dev/vda
    - /dev/nvme0
  ```
</details>

<details>
<summary>Example device-selector based on device size</summary>
  ```yaml showLineNumbers
  device-selector:
  - key: Size
    operator: Lt
    values:
    - 100Gi
  - key: Size
    operator: Gt
    values:
    - 30Gi
  ```
</details>

The currently supported operators are:

| Operator            | Description                                       |
| ------------------- | ------------------------------------------------- |
| In                  | The key matches one of the provided values        |
| NotIn               | The key does not match any of the provided values |
| Gt                  | The key is greater than a single provided value   |
| Lt                  | The key is lesser than  a single provided value   |

The currently supported keys are:

| Key                 | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| Name                | The device name (eg. /dev/sda)                                                 |
| Size                | The device size (values can be specified using kubernetes resources, eg 100Gi) |

The rules are AND:ed together, which means all rules must match the targeted device.

#### config.elemental.install.snapshotter

You can configure how Elemental manages snapshots on the installed machine.  
New snapshots are created for example when [upgrading](./upgrade) the machine with a new OS image.  
The `loopdevice` snapshotter will unpack new images on a `ext4` filesystem, while the `btrfs` snapshotter will make use of the underlying [btrfs snapshots](https://archive.kernel.org/oldwiki/btrfs.wiki.kernel.org/index.php/SysadminGuide.html#Snapshots) functionality, greatly reducing the amount of disk space needed to store multiple snapshots.  

| Key      | Type   | Default value | Description                                                                     |
|----------|--------|---------------|---------------------------------------------------------------------------------|
| type     | string | loopdevice    | Type of device used to manage snapshots in OS images ('loopdevice' or 'btrfs'). |
| maxSnaps | int    | 2             | Maximum amount of snapshots to keep.                                            |

#### config.elemental.reset

Contains the reset configuration that would be applied via `elemental-register --reset`, when booted from the recovery partition and passed to [`elemental reset`](https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental_reset.md)

Supports the following values:

| Key               | Type   | Default value | Description                                                                                                                                |
|-------------------|--------|---------------|-------------------------------------------------------------------------------------------------------------------|
| enabled           | bool   | false         | MachineInventories created from this MachineRegistration will have reset functionality enabled                    |
| reset-persistent  | bool   | true          | Format the COS_PERSISTENT partition                                                                               |
| reset-oem         | bool   | true          | Format the COS_OEM partition                                                                                      |
| config-urls       | list   | empty         | Cloud-init config files                                                                                           |
| system-uri        | string | empty         | Sets the system image source and its type (e.g. 'docker:registry.org/image:tag') instead of using the running ISO |
| debug             | bool   | false         | Enable debug output                                                                                               |
| poweroff          | bool   | false         | Shutdown the system after reset                                                                                   |
| reboot            | bool   | true          | Reboot the system after reset                                                                                     |

<details>
<summary>Example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: MachineRegistration
  metadata:
    name: my-nodes
    namespace: fleet-default
  spec:
    config:
      elemental:
        reset:
          enabled: true
          debug: true
          reset-persistent: true
          reset-oem: true
          reboot: true
          system-uri: registry.suse.com/rancher/sle-micro/5.5:latest
  ```
</details>

#### machineName

Template used to derive the hostname to be set to the node and as the name of the associated [MachineInventory](machineinventory-reference.md) kubernetes resource.

The value is interpolated using [Label Templates](label-templates.md).

:::info
If no `machineName` is specified, a default one in the form `m-$UUID` will be set.

See the [Customize Hostname section](hostname.md#customize-hostname) for further details.
:::

<details>
<summary>Example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: MachineRegistration
  metadata:
    name: my-nodes
    namespace: fleet-default
  spec:
    machineName: hostname-test-4
  ```

</details>

#### machineInventoryLabels

Labels to be set to the `MachineInventory` created from this `MachineRegistration`.

The label values are interpolated using [Label Templates](label-templates.md).

These labels could be used to establish a selection criteria in [MachineInventorySelectorTemplate](machineinventoryselectortemplate-reference.md).

Elemental nodes will run `elemental-register` every 30 minutes.

It is possible to update the `machineInventoryLabels` so that all registered nodes apply the new labels on the next successful registration update.

<details>
<summary>Example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: MachineRegistration
  metadata:
    name: my-nodes
    namespace: fleet-default
  spec:
    machineInventoryLabels:
      my.prefix.io/element: fire
      my.prefix.io/cpus: 32
      my.prefix.io/manufacturer: "${System Information/Manufacturer}"
      my.prefix.io/productName: "${System Information/Product Name}"
      my.prefix.io/serialNumber: "${System Information/Serial Number}"
      my.prefix.io/machineUUID: "${System Information/UUID}"
  ```

</details>

#### machineInventoryAnnotations

Annotations that will be set to the `MachineInventory` that is created from this `MachineRegistration`
`Key: value` type

<details>
<summary>Example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: MachineRegistration
  metadata:
    name: my-nodes
    namespace: fleet-default
  spec:
    machineInventoryAnnotations:
      owner: bob
      version: 1.0.0
  ```

</details>
