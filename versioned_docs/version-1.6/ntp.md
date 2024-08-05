---
sidebar_label: Configure NTP
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/ntp"/>
</head>


## NTP configuration with Elemental

### Overview
The default OS channel shipped with Elemental provides NTP support via `systemd-timesyncd`.

This page covers configuring `systemd-timesyncd` with the provided SLE Micro images, which is
pre-configured with some default (fallback) NTP servers: (_[0-3].suse.pool.ntp.org_).

The easiest way to configure a specific NTP server, is to drop a configuration file in the
`/etc/systemd/timesyncd.conf.d` directory.
The directory and the configuration file should be accessible by the `systemd-timesync` user.

### Configure a static NTP server
The NTP configuration can be provided via a cloud-config snippet added to the MachineRegistration
configuration.

We will need to:
* ensure the `timesyncd.conf.d` directory can be read by the `systemd-timesync` user
* write the custom config file in the `timesyncd.conf.d` directory
* restart the `systemd-timesyncd` service to use the new configuration

As an example, let's see how to configure `ntp.ripe.net` as the primary NTP server (lines 6-14):
```yaml showLineNumbers
config:
  cloud-config:
    users:
      - name: root
        passwd: root
    write_files:
      - content: |
          [Time]
          NTP=ntp.ripe.net
        path: /etc/systemd/timesyncd.conf.d/custom-ntp.conf
        permissions: 644
    runcmd:
      - chmod 755 /etc/systemd/timesyncd.conf.d
      - systemctl restart systemd-timesyncd
  elemental:
    install:
      device: /dev/vda
      reboot: true
machineInventoryLabels:
  element: fire

```

### Configure NTP from DHCP
In order to get the NTP server from the network via the NTP DHCP option, we need
a NetworkManager dispatcher script to reconfigure dynamically the `systemd-timesync` service when
needed.

We will have both to:
* provide the dispatcher script which creates and deletes the systemd-timesyncd config files
* enable the NetworkManager-dispatcher service

See lines 6-34 in the following MachineRegistration configuration example:

```yaml showLineNumbers
config:
  cloud-config:
    users:
      - name: root
        passwd: root
    write_files:
      - content: |
          #! /usr/bin/bash

          [ -n "$CONNECTION_UUID" ] || exit

          INTERFACE=$1
          ACTION=$2

          case $ACTION in
              up | dhcp4-change | dhcp6-change)
                  [ -n "$DHCP4_NTP_SERVERS" ] || exit
                  mkdir -p /etc/systemd/timesyncd.conf.d/
                  cat<<EOF > /etc/systemd/timesyncd.conf.d/$CONNECTION_UUID.conf
          [Time]
          NTP=$DHCP4_NTP_SERVERS
          RootDistanceMaxSec=15
          EOF
                  systemctl restart systemd-timesyncd
                  ;;
              down)
                  rm -f /etc/systemd/timesyncd.conf.d/$CONNECTION_UUID.conf
                  systemctl restart systemd-timesyncd
                  ;;
          esac
        path: /etc/NetworkManager/dispatcher.d/10-update-timesyncd
        permissions: 700
    runcmd:
      - systemctl enable NetworkManager-dispatcher
  elemental:
    install:
      device: /dev/vda
      reboot: true
machineInventoryLabels:
  element: fire

```
