---
sidebar_label: Configure Networking
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/networking"/>
</head>


## Network configuration with Elemental

Elemental cloud-config support does not include declarative networking at the moment.

The defaul OS channel shipped with Elemental provides SLE Micro OS images with [NetworkManager](https://networkmanager.dev) which enables DCHP ethernet configuration automatically.

[Elemental cloud-config](cloud-config-reference) allows to create NetworkManager connection profile configuration files in order to customize the host network.

To define custom network configuration for your Elemental OS deployment the required steps are:
* Identify the content of the desired NetworkManager connection profile configuration files
* Include a `write_files` cloud-config snippet in the Elemental [MachineRegistration](machineregistration-reference) resource to create configuration files with content identified in the previous step

:::info info
The cloud-config configuration put in the Elemental [MachineRegistration](machineregistration-reference) is applied on the installed system only, not on the generated ISO/Image.
This means that when booting from the Elemental ISO/Image the [MachineRegistration](machineregistration-reference) cloud-config is not applied on the host: it will be applied only after the OS is installed and rebooted.

Host configuration during Elemental ISO/Image boot is possible adding the cloud-config customization in the [SeedImage](seedimage-reference) resource instead of the [MachineRegistration](machineregistration-reference) one.
:::

### Identify NetworkManager connection profile configuration files content
NetworkManager supports multiple connection profile storage formats.
While one could focus on any of the supported configuration file plugins, the [keyfile plugin](https://networkmanager.dev/docs/api/latest/nm-settings-keyfile.html) is the one we recommend: it allows to store all the possible connection profile data and has a quite simple syntax.

NetworkManager keyfiles can be written directly following the [nm-settings-keyfile man page](https://networkmanager.dev/docs/api/latest/nm-settings-keyfile.html).

Anyway, it could be easier to instruct NetworkManager to configure a connection profile if a live system is available: NetworkManager then creates the keyfiles for us in the `/etc/NetworkManager/system-connections/` directory.

There are multiple different ways to interact with NetworkManager and create connection profiles. The most used and handy configuration tools include:
* [nmcli](https://networkmanager.dev/docs/api/latest/nmcli.html) - the NetworkManager CLI
* [nmtui](https://networkmanager.dev/docs/api/latest/nmtui.html) - the NetworManager Text User Interface
* the UI applets present in all the major linux desktops environments

Finally, to generate NetworkManager keyfiles _offline_ using a declarative approach, one could use the [nm-configurator](https://github.com/suse-edge/nm-configurator) project.

```shell title="Example: generate a static IPv4 ethernet connection porfile with nmcli" showLineNumbers
nmcli connection add \
  con-name fixed-ip\
  type ethernet \
  ipv4.method manual \
  ipv4.addresses 192.168.1.2/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns 192.168.1.1
```
After running the above command, you will find your keyfile at
`/etc/NetworkManager/system-connections/fixed-ip.nmconnection`.

### Elemental cloud-config
The NetworkManager connection profile keyfiles can be injected in a [MachineRegistration](machineregistration-reference) using the `write_files` module.

The `content` can be either plain text or base64 encoded (`encoding: b64`).

```yaml title="Example: MachineRegistration with static IPv4 ethernet connection profile" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: fire-nodes
  namespace: fleet-default
spec:
  config:
    cloud-config:
      users:
        - name: root
          passwd: root
      write_files:
        - content: |
            [connection]
            id=fixed-ip
            uuid=9039a243-452d-4f01-9424-78648404d50b
            type=ethernet
            [ipv4]
            address1=192.168.1.2/24,192.168.1.1
            dns=192.168.1.1;
            method=manual
          path: /etc/NetworkManager/system-connections/fixed-ip.nmconnection
          permissions: 600
    elemental:
      install:
        reboot: true
        device: /dev/sda
        debug: true
  machineInventoryLabels:
    element: fire
    manufacturer: "${System Information/Manufacturer}"
    productName: "${System Information/Product Name}"
    serialNumber: "${System Information/Serial Number}"
    machineUUID: "${System Information/UUID}"
```
:::warning
The connection profile keyfile file permissions should allow read and write access to the root user only, otherwise NetworkManager will refuse to load the connection profile: ensure to set `permissions` to `600` for NetworkManager keyfiles, otherwise your connection profiles will not be loaded.
:::
