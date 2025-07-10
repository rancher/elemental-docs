---
sidebar_label: Add a custom certificate
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/custom-certificate"/>
</head>


### How to add a custom certificate

Prerequisite: A certificate in `.pem` format

Goal: Make a custom certificate available system-wide

:::note This is for certificates used by system-level services.
Kubernetes workloads should bring their certificates within the
container image instead.
:::

In order to install a custom certificate we need to

* copy the `.pem` file to `/etc/pki/trust/anchors/`
* run `update-ca-certificates`

The respective `cloud-config` snippet looks like this:

```yaml
write_files:
  - path: /etc/pki/trust/anchors/my-custom-certificate.pem
    permission: 0444
    content: |-
      -----BEGIN CERTIFICATE-----
      ...
      -----END CERTIFICATE-----
runcmd:
  - update-ca-certificates
```

(actual certificate content omitted for brevity reasons)
