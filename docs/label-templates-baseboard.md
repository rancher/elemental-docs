---
sidebar_label: BaseBoard
title: ''
---

## BaseBoard Template Variables

The information collected in the BaseBoard variables defines attributes of a system baseboard (for
example, a motherboard, planar, server blade, or other standard system module).

Subset of SMBIOS Baseboard (or Module) information data (type 2).

For more information on SMBIOS see the
[SMSBIOS specification](https://www.dmtf.org/sites/default/files/standards/documents/DSP0134_3.7.1.pdf).

| Variable                    | Description               |
| --------------------------- | ------------------------- |
| `${BaseBoard/AssetTag}`     | Motherboard asset tag     |
| `${BaseBoard/Product}`      | Motherboard product name  |
| `${BaseBoard/SerialNumber}` | Motherboard serial number |
| `${BaseBoard/Vendor}`       | Motherboard vendor        |
| `${BaseBoard/Version}`      | Motherboard revision      |