---
sidebar_label: Hardware Labels
title: ''
---

import Registration from "!!raw-loader!@site/examples/quickstart/registration-hardware.yaml"

## Hardware Labels

When a node is registered, hardware data is collected and made available to the MachineRegistration in the same way as [SMBIOS data](smbios.md).

This data can be used for easy identification and selection via a [MachineSelector](machineinventoryselectortemplate-reference.md).

The following are available for templating:

| Label                                                         | Description                                                           |
| ------------------------------------------------------------- | --------------------------------------------------------------------- |
| `${System Data/Memory/Total Physical Bytes}`                  | The total RAM memory in the node, expressed in bytes                  |
| `${System Data/CPU/Total Cores}`                              | Total CPU cores                                                       |
| `${System Data/CPU/Total Threads}`                            | Total CPU threads                                                     |
| `${System Data/CPU/Vendor}`                                   | CPU vendor                                                            |
| `${System Data/CPU/Model}`                                    | CPU model                                                             |
| `${System Data/GPU/Vendor}`                                   | GPU vendor (Only available if the node has an identifiable GPU)       |
| `${System Data/GPU/Model}`                                    | GPU model (Only available if the node has an identifiable GPU)        |
| `${System Data/Network/Number Interfaces}`                    | Number of network interfaces in the system                            |
| `${System Data/Network/{Iface name}/Name}`                    | Network interface name                                                |
| `${System Data/Network/{Iface name}/IsVirtual}`               | Boolean indicating virtual network interface                          |
| `${System Data/Block Devices/Number Devices}`                 | Number of block devices in the system (includes DVD and USB drives)   |
| `${System Data/Block Devices/{Disk name}/Name}`               | Device name of the block device (i.e. sda, sr0, vda, etc...)          |
| `${System Data/Block Devices/{Disk name}/Removable}`          | Whether this block device is removable (i.e. DVD)                     |
| `${System Data/Block Devices/{Disk name}/Size}`               | Total space in this block device, expressed in bytes                  |
| `${System Data/Block Devices/{Disk name}/Drive Type}`         | Drive type of this block device, see table below                      |
| `${System Data/Block Devices/{Disk name}/Storage Controller}` | Controller type for this block device connection, see table below     |

:::info info
On both `Block Devices` and `Network` the device name is used as a sub-block, as there could be more than one device.
:::

### Block device drive types

| Type    | Description                     |
|---------|---------------------------------|
| HDD     | Hard disk drive                 |
| FDD     | Floppy disk drive               |
| ODD     | Optical disk drive              |
| SSD     | Solid-state drive               |
| virtual | virtual drive i.e. loop devices |
| Unknown | unknown drive type              |

### Block device controller types

| Type    | Description                                                    |
|---------|----------------------------------------------------------------|
| IDE     | Integrated Drive Electronics                                   |
| SCSI    | Small computer system interface                                |
| NVMe    | Non-volatile Memory Express                                    |
| MMC     | Multi-media controller (used for mobile phone storage devices) |
| virtio  | Virtualized storage controller/driver                          |
| loop    | loop device                                                    |
| Unknown | unknown controller type                                        |

### Example MachineRegistration

<CodeBlock language="yaml" title="registration example with smbios labels" showLineNumbers>{Registration}</CodeBlock>
