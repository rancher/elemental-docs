---
sidebar_label: Hardware Labels
title: ''
---

## Hardware Labels
When a node is registered, the data is stored in the [inventory](inventory-management.md#machineinventory) with default labels and values relative to the node hardware.

This data is used for easy identification and selection via a [MachineSelector](machineinventoryselectortemplate-reference.md).


The following labels are set up automatically:

| Label                                           | Description                                                         |
|-------------------------------------------------|---------------------------------------------------------------------|
| elemental.cattle.io/TotalMemory                 | The total RAM memory in the node, expressed in bytes                |
| elemental.cattle.io/CpuTotalCores               | Total CPU cores                                                     |
| elemental.cattle.io/CpuTotalThreads             | Total CPU threads                                                   |
| elemental.cattle.io/CpuVendor                   | CPU vendor                                                          |
| elemental.cattle.io/CpuModel                    | CPU model                                                           |
| elemental.cattle.io/GpuModel                    | GPU model (Only available if the node has an identifiable GPU)      |
| elemental.cattle.io/GpuVendor                   | GPU vendor (Only available if the node has an identifiable GPU)     |
| elemental.cattle.io/NetNumberInterfaces         | Number of network interfaces in the system                          |
| elemental.cattle.io/NetIfaceX-Name              | Network interface name                                              |
| elemental.cattle.io/NetIfaceX-Virtual           | Whether the Network Interface is a virtual one                      |
| elemental.cattle.io/BlockTotal                  | Number of block devices in the system (includes DVD and USB drives) |
| elemental.cattle.io/BlockDeviceX-Name           | Device name of the block device (i.e. sda, sr0, vda, etc...)        |
| elemental.cattle.io/BlockDeviceX-Removable      | Whether this block device is removable (i.e. DVD)                   |
| elemental.cattle.io/BlockDeviceX-Size           | Total space in this block device, expressed in bytes                |
| elemental.cattle.io/BlockDeviceX-DriveType      | Drive type of this block device, see table below                    |
| elemental.cattle.io/BlockDeviceX-ControllerType | Controller type for this block device connection, see table below   |


:::info info
On both `BlockDeviceX` and `NetIfaceX` the X indicates a number, as there could be more than one device. Numbers are just for enumeration purposes and have no relation with the underlying hardware.
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