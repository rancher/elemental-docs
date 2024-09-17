---
sidebar_label: Chassis
title: ''
---

## Chassis Template Variables

The information in the Chassis variables defines attributes of the system’s mechanical enclosure(s).

Subset of SMBIOS System Enclosure or Chassis (type 3).

For more information on SMBIOS see the
[SMSBIOS specification](https://www.dmtf.org/sites/default/files/standards/documents/DSP0134_3.7.1.pdf).

| Variable                     | Description                |
| ---------------------------- | -------------------------- |
| `${Chassis/AssetTag}`        | Chassis asset tag          |
| `${Chassis/SerialNumber}`    | Chassis serial number      |
| `${Chassis/TypeDescription}` | Chassis type (description) |
| `${Chassis/Type}`            | Chassis type (number/code) |
| `${Chassis/Vendor}`          | Chassis vendor             |
| `${Chassis/Version}`         | Chassis version            |