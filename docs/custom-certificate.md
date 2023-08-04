---
sidebar_label: Add a custom certificate
title: ''
---


### How to add a custom certificate

Prerequisite: A certificate in `.pem` format

Goal: Make a custom certificate available system-wide

:::note This is for certificates used by system-level services.
Kubernetes workloads should bring their certificates within the
container image instead.
:::

In order to install a custom certificate on SLE Micro for Rancher we
need to

* copy the `.pem` file to `/etc/ssl/certs`
* run `update-ca-certificates`

The respective `cloud-config` snippet looks like this:

```
write_files:
  - path: /etc/ssl/certs/my-custom-certificate.pem
    permission: 0444
    content: |-
      -----BEGIN CERTIFICATE-----
      ...
      -----END CERTIFICATE-----
runcmd:
  - update-ca-certificates
```

(actual certificate content omitted for brevity reasons)
