---
sidebar_label: Deprecated Variables
title: ''
---

## Label Templates' deprecated variables

[**SMBIOS**](smbios) and [**Hardware**](hardwarelabels) variable families have been deprecated in the Elemental Operator v1.7.0.

While these variable families are still correctly rendered in current Elemental Operator versions,
their support will be removed in future Elemental Operator releases.

If you are still using these old Label Templates' variable families, please switch to
[the newer available ones](label-templates#label-templates-variables) if possible.

To simplify the adoption of the new variables, check the tables mapping the deprecated variables to the new
supported ones:
* [Hardware Labels to new Label Templates' variables](#hardware-labels-to-new-label-templates-variables-table)
* [SMBIOS labels to new Label Templates' variables](#smbios-labels-to-new-label-templates-variable-table)

#### Hardware Labels to new Label Templates' variables table

| Deprecated Variable                                               | Equivalent new Variable |
| ----------------------------------------------------------------- | ----------------------- |
| `${System Data/Block Devices/Number Devices}`                     | `${Storage/TotalDisks}` |
| `${System Data/Block Devices/_<DeviceName>_/Drive Type} `         | `${Storage/Disks/_<DeviceName>_/DriveType}` |
| `${System Data/Block Devices/_<DeviceName>_/Name} `               | `${Storage/Disks/_<DeviceName>_/Name}` |
| `${System Data/Block Devices/_<DeviceName>_/Removable} `          | `${Storage/Disks/_<DeviceName>_/Removable}` |
| `${System Data/Block Devices/_<DeviceName>_/Size} `               | `${Storage/Disks/_<DeviceName>_/Size}` |
| `${System Data/Block Devices/_<DeviceName>_/Storage Controller} ` | `${Storage/Disks/_<DeviceName>_/StorageController}` |
| `${System Data/CPU/Model}`                                        | `${CPU/Model}` |
| `${System Data/CPU/Total Cores}`                                  | `${CPU/TotalCores}` |
| `${System Data/CPU/Total Threads}`                                | `${CPU/TotalThreads}` |
| `${System Data/CPU/Vendor}`                                       | `${CPU/Processor/Vendor}` |
| `${System Data/GPU/Model}`                                        | `${GPU/GraphicsCard/ProductName}` |
| `${System Data/GPU/Vendor}`                                       | `${GPU/GraphicsCard/VendorName}` |
| `${System Data/Memory/Total Physical Bytes}`                      | `${Memory/TotalPhysicalBytes}` |
| `${System Data/Memory/Total Usable Bytes}`                        | `${Memory/TotalUsableBytes}` |
| `${System Data/Network/Number Interfaces}`                        | `${Network/TotalNICs}` |
| `${System Data/Network/_<IfaceName>_/IsVirtual}`                  | `${Network/NICs/_<IfaceName>_/IsVirtual}` |
| `${System Data/Network/_<IfaceName>_/MacAddress}`                 | `${Network/NICs/_<IfaceName>_/MacAddress}` |
| `${System Data/Network/_<IfaceName>_/Name}`                       | `${Network/NICs/_<IfaceName>_/Name}` |
| `${System Data/Runtime/Hostname}`                                 | `${Runtime/Hostname}` |

#### SMBIOS Labels to new Label Templates' variable table
| Deprecated Variable                                               | Equivalent new Variable |
| ----------------------------------------------------------------- | ----------------------- |
| `${BIOS Information/Address}`                        | _not available_ |
| `${BIOS Information/BIOS Revision}`                  | _not available_ |
| `${BIOS Information/ROM Size}`                       | _not available_ |
| `${BIOS Information/Release Date}`                   | `${BIOS/Date}`   |
| `${BIOS Information/Runtime Size}`                   | _not available_  |
| `${BIOS Information/Vendor}`                         | `${BIOS/Vendor}` |
| `${BIOS Information/Version}`                        | `${BIOS/Version}` |
| `${Base Board Information/Asset Tag}`                | `${BaseBoard/AssetTag}` |
| `${Base Board Information/Chassis Handle}`           | _not available_ |
| `${Base Board Information/Contained Object Handles}` | _not available_ |
| `${Base Board Information/Location In Chassis}`      | _not available_ |
| `${Base Board Information/Manufacturer}`             | `${BaseBoard/Vendor}` |
| `${Base Board Information/Product Name}`             | `${BaseBoard/Product}` |
| `${Base Board Information/Serial Number}`            | `${BaseBoard/SerialNumber}` |
| `${Base Board Information/Type}`                     | _not available_ |
| `${Base Board Information/Version}`                  | `${BaseBoard/Version}` |
| `${Chassis Information/Asset Tag}`                   | `${Chassis/AssetTag}` |
| `${Chassis Information/Boot-up State}`               | _not available_ |
| `${Chassis Information/Contained Elements}`          | _not available_ |
| `${Chassis Information/Height}`                      | _not available_ |
| `${Chassis Information/Lock}`                        | _not available_ |
| `${Chassis Information/Manufacturer}`                | `${Chassis/Vendor}` |
| `${Chassis Information/Number Of Power Cords}`       | _not available_ |
| `${Chassis Information/OEM Information}`             | _not available_ |
| `${Chassis Information/Power Supply State}`          | _not available_ |
| `${Chassis Information/SKU Number}`                  | _not available_ |
| `${Chassis Information/Security Status}`             | _not available_ |
| `${Chassis Information/Serial Number}`               | `${Chassis/SerialNumber}` |
| `${Chassis Information/Thermal State}`               | _not available_ |
| `${Chassis Information/Type}`                        | `${Chassis/TypeDescription}` |
| `${Chassis Information/Version}`                     | `${Chassis/Version}` |
| `${System Information/Family}`                       | `${Product/Family}` |
| `${System Information/Manufacturer}`                 | `${Product/Vendor}` |
| `${System Information/Product Name}`                 | `${Product/Name}`   |
| `${System Information/SKU Number}`                   | `${Product/SKU}`    |
| `${System Information/Serial Number}`                | `${Product/SerialNumber}` |
| `${System Information/UUID}`                         | `${Product/UUID}` |
| `${System Information/Version}`                      | `${Product/Version}` |
| `${System Information/Wake-up Type}`                 | _not available_ |
