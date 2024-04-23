---
sidebar_label: Configure a VLAN
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/networking/vlan"/>
</head>


### How to configure a VLAN

#### Generate a VLAN connection profile on a live host
Let's configure NetworkManager to add a VLAN interface on top of the eth0 device with a VLAN ID = 1

```shell title="Example: generate a VLAN connection profile with nmcli" showLineNumbers
# nmcli connection add type vlan vlan.id 1 vlan.parent eth0
```

```shell title="Example: retrieve VLAN connection profile keyfile content" showLineNumbers
# cat /etc/NetworkManager/system-connections/vlan.nmconnection
[connection]
id=vlan
uuid=7a9908f4-bed9-4401-8de4-4e7631b5d39e
type=vlan

[ethernet]

[vlan]
flags=1
id=1
parent=eth0

[ipv4]
method=auto

[ipv6]
addr-gen-mode=stable-privacy
method=auto

[proxy]
```

#### Elemental MachineRegistration with VLAN injected cloud-config

```yaml title="Example: MachineRegistration with injected VLAN connection profile" showLineNumbers
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
            id=vlan
            uuid=7a9908f4-bed9-4401-8de4-4e7631b5d39e
            type=vlan

            [vlan]
            flags=1
            id=1
            parent=eth0

            [ipv4]
            method=auto

            [ipv6]
            addr-gen-mode=stable-privacy
            method=auto
       path: /etc/NetworkManager/system-connections/vlan.nmconnection
       permissions: 600
[...]
```
