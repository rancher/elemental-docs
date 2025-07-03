---
sidebar_label: Chassis
title: ''
---

## Chassis Template Variables

The information in the Chassis variables defines attributes of the system’s mechanical enclosure(s).

Subset of SMBIOS System Enclosure or Chassis (type 3).

For more information on SMBIOS see the
[SMSBIOS specification](https://www.dmtf.org/sites/default/files/standards/documents/DSP0134_3.7.1.pdf).

| Variable                     | Description                | from  |
| ---------------------------- | -------------------------- | ----- |
| `${Chassis/AssetTag}`        | Chassis asset tag          | 1.7.0 |
| `${Chassis/SerialNumber}`    | Chassis serial number      | 1.7.0 |
| `${Chassis/TypeDescription}` | Chassis type (description) | 1.7.0 |
| `${Chassis/Type}`            | Chassis type (number/code) | 1.7.0 |
| `${Chassis/Vendor}`          | Chassis vendor             | 1.7.0 |
| `${Chassis/Version}`         | Chassis version            | 1.7.0 |