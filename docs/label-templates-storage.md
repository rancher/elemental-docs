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

| Variable                                             | Description                           |
| ---------------------------------------------------- | ------------------------------------- |
| `${Storage/Disks/_<Number>_/DriveType}`              | Disk type                             |
| `${Storage/Disks/_<Number>_/Model}`                  | Disk model                            |
| `${Storage/Disks/_<Number>_/Name}`                   | Device name                           |
| `${Storage/Disks/_<Number>_/Removable}`              | is removable media?                   |
| `${Storage/Disks/_<Number>_/Size}`                   | Size ( bytes)                         |
| `${Storage/Disks/_<Number>_/StorageController}`      | Controller type                       |
| `${Storage/Disks/_<DeviceName>_/DriveType}`          | Disk type                             |
| `${Storage/Disks/_<DeviceName>_/Model}`              | Disk model                            |
| `${Storage/Disks/_<DeviceName>_/Name}`               | Device name                           |
| `${Storage/Disks/_<DeviceName>_/Removable}`          | is removable media?                   |
| `${Storage/Disks/_<DeviceName>_/Size}`               | Size ( bytes)                         |
| `${Storage/Disks/_<DeviceName>_/StorageController}`  | Controller type                       |
| `${Storage/TotalDisks}`                              | Number of disks present in the system |