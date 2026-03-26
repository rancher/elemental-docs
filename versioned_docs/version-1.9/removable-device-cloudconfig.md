---
sidebar_label: Include cloud-config from removable devices
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/removable-device-cloudconfig"/>
</head>


### How to include cloud-config files from removable devices

Elemental nodes supports loading [cloud-config](cloud-config-reference.md) files from specific block devices.
In particular supports loading cloud-config files from an ISO having `CIDATA` as the volume ID or any vFAT formatted
device labeled with `CIDATA`. If a device matching this criteria is found on early boot the Elemental client will
read it and look for a `user-data` file in its root.

As an example an ISO including a cloud-config file can be created on a Linux host with the procedure below.

Create a `user-data` file with the cloud-config data in it. In the example below we just set a
proxy:

```yaml title="user-data" showLineNumbers
#cloud-config
write_files:
- path: /etc/sysconfig/proxy
  append: true
  content: |
    PROXY_ENABLED="yes"
    HTTP_PROXY=http://some.domain.org:8080
    HTTPS_PROXY=https://some.domain.org:8080
    NO_PROXY="localhost, 127.0.0.1"
```

Once the `user-data` file exists create an ISO including only this file by using the `mkisofs` Linux utility:

```bash
mkisof -o cidata.iso -V CIDATA -J -r user-data
```

The result is an ISO labeled with `CIDATA` including the `user-data` file.

At boot the `user-data` file will be copied as is to `/oem/user-data` and in case it contains cloud-config data
an extra copy will be added as `/oem/user-data.yaml`. The file `/oem/user-data.yaml` will be parsed
on any later cloud-init stage.

Since the data is copied to `/oem` it will be persistent, hence on follow up reboots the removable device is
not required to be present any more. If still present on follow up reboots, it just overwrites any
already pre-existing data.

#### Include non cloud-config data

If the `user-data` is not containing cloud-config data the Elemental client will just copy it as
is to `/oem/user-data`. Only `*.yaml` files are parsed when executing cloud-init stages, so in that
case the file will be ignored by cloud-init services.

If the `user-data` contains a script the Elemental client will, in addition, try to execute it. The way
Elemental client determines if `user-data` is a script or not is by the presence of a _Shebang_ in the
first line. For example, the previous `user-data` file could be rewritten as:


```bash title="user-data" showLineNumbers
#!/bin/bash

cat <<EOF >> /etc/sysconfig/proxy
PROXY_ENABLED="yes"
HTTP_PROXY=http://some.domain.org:8080
HTTPS_PROXY=https://some.domain.org:8080
NO_PROXY="localhost, 127.0.0.1"
EOF
```
