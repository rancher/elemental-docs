---
sidebar_label: Configure Wi-Fi
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/wifi"/>
</head>


### How to configure Wi-Fi

:::caution important note
This guide describes how to configure Wi-Fi on a freshly installed operating system.
For some reasons, like no wired network connection availabe, you may want to also use Wi-Fi when you boot from the ISO.

This is possible by using a cloud-config definition in the [SeedImage](https://elemental.docs.rancher.com/seedimage-reference/) resource.
You can refer to the same instructions as below on how to create it.
:::

:::info info
The information on this page is just a specific use case of using cloud-config. For more generic info on how to create arbitrary files check our [cloud-config](cloud-config-reference.md) page
:::

SLE Micro currently uses [NetworkManager](https://networkmanager.dev/) to manage network connections.

In order to add Wi-Fi to your node, your registration should include a configuration in the [cloud-config](cloud-config-reference.md) section to write a
`.connection` file so NetworkManager can connect to the Wi-Fi.

A `.connection` file is a connection configuration file for NetworkManager.
The connection files are stored under `/etc/NetworkManager/system-connections/` and can include ethernet, Wi-Fi, VPN and more.

For example for a network with the SSID `testSSID` and the WPA-PSK key `123456789` and using the interface `wlan0` you would write the following `.connection` file:

```
[connection]
id=testConnection
type=wifi
interface-name=wlan0
permissions=
timestamp=1671549641

[wifi]
mac-address-blacklist=
mode=infrastructure
ssid=testSSID

[wifi-security]
key-mgmt=wpa-psk
psk=123456789

[ipv4]
dns-search=
method=auto

[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto

[proxy]
```

:::info
To see all the configurations available for NetworkManager check [nm-settings](https://networkmanager.dev/docs/api/latest/nm-settings-nmcli.html)
which includes the format of the connection file and all the different options you can use.
:::

Which we should encode to base64 and paste in the content in our [registration](machineregistration-reference.md) cloud-config section as such:

```yaml title="wifi cloud config" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: my-nodes
  namespace: fleet-default
spec:
  machineName: name
  config:
    cloud-config:
      write_files:
        - encoding: b64
          content: W2Nvbm5lY3Rpb25dCmlkPXRlc3RDb25uZWN0aW9uCnR5cGU9d2lmaQppbnRlcmZhY2UtbmFtZT13bGFuMApwZXJtaXNzaW9ucz0KdGltZXN0YW1wPTE2NzE1NDk2NDEKClt3aWZpXQptYWMtYWRkcmVzcy1ibGFja2xpc3Q9Cm1vZGU9aW5mcmFzdHJ1Y3R1cmUKc3NpZD10ZXN0Cgpbd2lmaS1zZWN1cml0eV0Ka2V5LW1nbXQ9bm9uZQp3ZXAta2V5LXR5cGU9MQp3ZXAta2V5MD0xMjM0NTY3ODkxCgpbaXB2NF0KZG5zLXNlYXJjaD0KbWV0aG9kPWF1dG8KCltpcHY2XQphZGRyLWdlbi1tb2RlPXN0YWJsZS1wcml2YWN5CmRucy1zZWFyY2g9Cm1ldGhvZD1hdXRvCgpbcHJveHldCg==
          path: /etc/NetworkManager/system-connections/wifi1.connection
```


This would get the `/etc/NetworkManager/system-connections/wifi1.connection` file deployed on the node during installation with the connection content and NetworkManager would 
read and enable the connection on boot.
