---
sidebar_label: Storage
title: ''
---

## Storage Template Variables

The information collected in the Storage template variables defines attributes of the disks available
in the system.

The Disks are tracked both by number (0, 1, 2, ...) and by device name (_sda_, _vda_, _nvme0n1_, ...).

For example, if `${Storage/Disks/2/Name}` is equal to `sda`, the the disk model can be retrieved via
both the `${Storage/Disks/2/Model}` and the `${Storage/Disks/sda/Model}` variables.

:::note
The tracked disks include also optical disk drives and removable devices (e.g., USB sticks).
:::

| Variable                                             | Description                           | from  |
| ---------------------------------------------------- | ------------------------------------- | ----- |
| `${Storage/Disks/_<Number>_/DriveType}`              | Disk type                             | 1.7.0 |
| `${Storage/Disks/_<Number>_/Model}`                  | Disk model                            | 1.7.0 |
| `${Storage/Disks/_<Number>_/Name}`                   | Device name                           | 1.7.0 |
| `${Storage/Disks/_<Number>_/Removable}`              | is removable media?                   | 1.7.0 |
| `${Storage/Disks/_<Number>_/Size}`                   | Size ( bytes)                         | 1.7.0 |
| `${Storage/Disks/_<Number>_/StorageController}`      | Controller type                       | 1.7.0 |
| `${Storage/Disks/_<DeviceName>_/DriveType}`          | Disk type                             | 1.7.0 |
| `${Storage/Disks/_<DeviceName>_/Model}`              | Disk model                            | 1.7.0 |
| `${Storage/Disks/_<DeviceName>_/Name}`               | Device name                           | 1.7.0 |
| `${Storage/Disks/_<DeviceName>_/Removable}`          | is removable media?                   | 1.7.0 |
| `${Storage/Disks/_<DeviceName>_/Size}`               | Size ( bytes)                         | 1.7.0 |
| `${Storage/Disks/_<DeviceName>_/StorageController}`  | Controller type                       | 1.7.0 |
| `${Storage/TotalDisks}`                              | Number of disks present in the system | 1.7.0 |


### Disks' DriveTypes

| Type    | Description                     |
|---------|---------------------------------|
| HDD     | Hard disk drive                 |
| FDD     | Floppy disk drive               |
| ODD     | Optical disk drive              |
| SSD     | Solid-state drive               |
| virtual | virtual drive i.e. loop devices |
| Unknown | unknown drive type              |

### Disks' StorageController types

| Type    | Description                                                    |
|---------|----------------------------------------------------------------|
| IDE     | Integrated Drive Electronics                                   |
| SCSI    | Small computer system interface                                |
| NVMe    | Non-volatile Memory Express                                    |
| MMC     | Multi-media controller (used for mobile phone storage devices) |
| virtio  | Virtualized storage controller/driver                          |
| loop    | loop device                                                    |
| Unknown | unknown controller type                                        |
