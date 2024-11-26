---
sidebar_label: Network
title: ''
---

## Network Template Variables

The information collected in the Network template variables defines attributes of the network
interfaces available in the system.

The NICs are tracked both by number (0, 1, 2, ...) and by interface name (_eth0_, _virbr0_, ...).

The IPv4Addresses and IPv6Addresses are tracked by number (0, 1, ...) and the first IPv4 and IPv6
address entries (i.e., IPv4Addresses.0 and IPv6Addresses.0) are tracked in the IPv4Address and the
IPv6Address variables.

For example, if `${Network/NICs/2/Name}` is equal to `eth0`, then the network interface
Mac Address can be retrieved via both the `${Network/NICs/2/MacAddress}` and the
`${Network/NICs/eth0/MacAddress}` variables.

`eth0` (first) IPv4 address can be retrieved with both the `${Network/NICs/eth0/IPv4Address}`
and the `${Network/NICs/eth0/IPv4Addresses/0}` variables.
The secondary `eth0` IPv4 address can be retrieved with `${Network/NICs/eth0/IPv4Addresses/1}` instead.

| Variable                                                  | Description                                      |
| --------------------------------------------------------- | ------------------------------------------------ |
| `${Network/NICs/_<IfaceName>_/AdvertisedLinkModes}`       | Ethernet Link Modes advertised as available      |
| `${Network/NICs/_<IfaceName>_/Duplex}`                    | Ethernet Duplex mode                             |
| `${Network/NICs/_<IfaceName>_/IPv4Address}`               | First IPv4 address assigned to the interface     |
| `${Network/NICs/_<IfaceName>_/IPv4Addresses/_<Number>_}`  | \<Number\>ith assigned IPv4 address              |
| `${Network/NICs/_<IfaceName>_/IPv6Address}`               | First IPv6 address assigned to the interface     |
| `${Network/NICs/_<IfaceName>_/IPv6Addresses/_<Number>_}`  | \<Number\>ith assigned IPv6 address              |
| `${Network/NICs/_<IfaceName>_/IsVirtual}`                 | Wheter the NIC is real ("false") or not ("true") |
| `${Network/NICs/_<IfaceName>_/MacAddress}`                | MAC of the interface                             |
| `${Network/NICs/_<IfaceName>_/Name}`                      | Interface name                                   |
| `${Network/NICs/_<IfaceName>_/Speed}`                     | Speed of the link                                |
| `${Network/NICs/_<IfaceName>_/SupportedLinkModes}`        | Ethernet Link Modes supported by the NIC         |
| `${Network/NICs/_<IfaceName>_/SupportedPorts}`            | NIC's available ports                            |
| `${Network/NICs/_<Number>_/AdvertisedLinkModes}`          | Ethernet Link Modes advertised as available      |
| `${Network/NICs/_<Number>_/Duplex}`                       | Ethernet Duplex mode                             |
| `${Network/NICs/_<Number>_/IPv4Address}`                  | First IPv4 address assigned to the interface     |
| `${Network/NICs/_<Number>_/IPv4Addresses/_<Number>_}`     | \<Number\>ith assigned IPv4 address              |
| `${Network/NICs/_<Number>_/IPv6Address}`                  | First IPv6 address assigned to the interface     |
| `${Network/NICs/_<Number>_/IPv6Addresses/_<Number>_}`     | \<Number\>ith assigned IPv6 address              |
| `${Network/NICs/_<Number>_/IsVirtual}`                    | Wheter the NIC is real ("false") or not ("true") |
| `${Network/NICs/_<Number>_/MacAddress}`                   | MAC of the interface                             |
| `${Network/NICs/_<Number>_/Name}`                         | Interface name                                   |
| `${Network/NICs/_<Number>_/Speed}`                        | Speed of the link                                |
| `${Network/NICs/_<Number>_/SupportedLinkModes}`           | Ethernet Link Modes supported by the NIC         |
| `${Network/NICs/_<Number>_/SupportedPorts}`               | NIC's available ports                            |
| `${Network/TotalNICs/}`                                   | Number of NICs present in the system             |