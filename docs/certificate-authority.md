---
sidebar_label: Certificate Authority Verification
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/certificate-authority"/>
</head>

# Certificate Authority Verification

The `elemental-register` and `elemental-system-agent` rely on the [Rancher's Certificate Authority configuration](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/update-rancher-certificate) to verify the [MachineRegistration](https://elemental.docs.rancher.com/machineregistration-reference#configelementalregistration) URL, and to remotely watch plans.  

Depending on whether the Certificate Authority is private or public, you may want to instruct the agent to enforce `strict` CA verification, or to use the system trust store instead.  

From Rancher `2.9`, the [agent-tls-mode](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/tls-settings#agent-tls-enforcement) global setting will also apply to the installation of Elemental agents.  
Note that if the `agent-tls-mode` setting changes, Elemental machines will need to be [reset](./reset.md) in order for the setting to apply.  

## Private CA certificate lifecycle

When using a private CA, the recommendation is to always make sure that the same CA is also used for Rancher.  
Elemental will make use of the `cacerts`, when including the CA cert to be trusted by agents. This is the same value as it appears on the `https://my.rancher.example/cacerts` URL.  

Note however that it will not be possible to update this value after an Elemental machine has been installed.  
Replacing the CA certificate on Rancher may lead to Elemental machines not being able to re-connect to Rancher and operating normally, when the `agent-tls-mode` is set to `strict`.  

For this reason the recommendation is to use the `agent-tls-mode: system-store` setting instead and manage the lifecycle of CA certs on Elemental machines directly, when a private Certificate Authority is in use.  

The CA cert can be installed in [custom OS images](./custom-images.md) directly, or passed as a cloud-init configuration in Elemental resources.  
For example the initial CA certificate can be included in the [MachineRegistration](./machineregistration-reference.md#configcloud-config) `cloud-config`:  

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: fire-nodes
  namespace: fleet-default
spec:
  config:
    cloud-config:
      write_files:
        - path: /etc/pki/trust/anchors/rancher-ca.pem
          permission: 0444
          content: |-
            -----BEGIN CERTIFICATE-----
            MIIDETCCAfmgAwIBAgIRAK0J3NrgPllXUiGYrA9sTlUwDQYJKoZIhvcNAQELBQAw
            IjEgMB4GA1UEAxMXZWxlbWVudGFsLXNlbGZzaWduZWQtY2EwHhcNMjQxMDA3MTEw
            ODM5WhcNMzUwODAxMTEwODM5WjAiMSAwHgYDVQQDExdlbGVtZW50YWwtc2VsZnNp
            Z25lZC1jYTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJm2esaQL82b
            rWMpnurmyiutruWvdWUT0Dci2+I7vI1CRs7Gqq93in3+HOoEuaJhS4eZQT9AFyaq
            msijMa3cTYUDhTbOAvPs27E/mSBeQyKd/hJuQ0B8vl47Z1ixOpUHdMOBsZDI0XF5
            yjVTj4nTZXW5n0zZpnmEs4DhLJLJc6icjQLdHDsSj/LeTy8alyTtkOaWcPjFppNI
            6M5a1BWJPhNKGlFpezqfjtJogxbOEAohpN4DUKvqebRWnC+4MjhqUcEW5sXatFTH
            F7MGbVSqQk/f7lzIuke4nvWd0FGPyk/sD31rXT2/2eHkcTJEanRq3bwWQNXQynQ1
            wdqIH1TtfMUCAwEAAaNCMEAwDgYDVR0PAQH/BAQDAgKkMA8GA1UdEwEB/wQFMAMB
            Af8wHQYDVR0OBBYEFIv2OZVFAhh8HzoEwjlf5GivNf6IMA0GCSqGSIb3DQEBCwUA
            A4IBAQAfNUNQKZ02oTo9q+/nbS8kIuhwzSTtNzKflQU5oibpDSAxYlx2gsYqppb/
            w7voj+GiONQR22PrCFh+Kr7aGr/GZh6oXg47dK4Es2dVeE8qdqW3WtZ8oj/OJxmP
            7TqWZdGf7TAxfgNzIpGjWFw/coJ7dcYbDrcZFWG5oQpTbLHK/ECMPWytGVRjrqE6
            baLJ85AVqF9rcCb0giXzvzS6/IpyAe7+Q4WvdzY1uaLQSwkBtpt9OM/O35GmeFUR
            OUkPxQ15e+3tUnDLUDnkTk3xMVRvJehnk/I75auqlUra55KLqfd6SUEbGP3MU9ZI
            12xVJHQTSN8XWh0++9jNG0eSMe75
            -----END CERTIFICATE-----
      runcmd:
        - update-ca-certificates
```

Before the CA cert is replaced on Rancher, the new CA cert can be included on Elemental machines by upgrading them.  
The **new** CA cert can be configured in the [ManagedOSImage](./managedosimage-reference.md#cloudconfig) `cloudConfig`:  

```yaml
apiVersion: elemental.cattle.io/v1beta1
kind: ManagedOSImage
metadata:
  name: ca-cert-upgrade
  namespace: fleet-default
spec:
  # The cloudConfig will be applied after node reboot
  cloudConfig:
    write_files:
      - path: /etc/pki/trust/anchors/rancher-ca-new.pem
        permission: 0444
        content: |-
          -----BEGIN CERTIFICATE-----
          MIIDEDCCAfigAwIBAgIQVgcMnY4HFB5+bZ9yhLaFkTANBgkqhkiG9w0BAQsFADAi
          MSAwHgYDVQQDExdlbGVtZW50YWwtc2VsZnNpZ25lZC1jYTAeFw0yNDEwMDcxMjUx
          MzZaFw0zNTA4MDExMjUxMzZaMCIxIDAeBgNVBAMTF2VsZW1lbnRhbC1zZWxmc2ln
          bmVkLWNhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvwokj48hQFF3
          +v/ObqPOOyYszL/Nyv8/BomPgBia/GXGe8mkQHEWUXFS4P6KdMGQQU3X6Pm071qG
          QEWEIy95szy1H/q1DgZQCM5fjYPcfFJMopQ28vJEk58/9PePr/GZRWAeAhmMKZeg
          HP/wpuUMEdEh7vGYjKjVuIJiFgT2lVDKqrtRIon+L1iIP3IRmVa49UzmdW2wM79W
          a1nv52+EZaw3UDSLPonvs29AZG8M+NuENlefHWEwYVpDEwF9lXinfL3wMw36gIo4
          X4LmStP9WU4mvglrR8Zwj1M9COMrYbBYQ86jUGM0L0eNG52Uflsn+0ttLRhgkpba
          wAl8jAZWdQIDAQABo0IwQDAOBgNVHQ8BAf8EBAMCAqQwDwYDVR0TAQH/BAUwAwEB
          /zAdBgNVHQ4EFgQUmOGv0AwumUlwQDdULL2dLik/6FUwDQYJKoZIhvcNAQELBQAD
          ggEBACMmDLbKOgz5Zo1pSLTYc08Nb5sRTK/bW24IZ67cfdPstvTQBDAH5+obAjus
          N2Linl/IAsN8K2cnoBq1gM3sST+YDVOBdItZXwe8jybk3IoJPdzE63l//ReTyTSg
          OamwUR6qHcLZ9XNwS4z8WYNy3mDLO6dgq7udb2DHm/0mvyi3Q0oRvsrI+9JCCrgz
          YTFWEWhbpfUzH+dheISMYJx3l/iIFJajaASWKtGBMnp9G+RC2HhDcDwBnW/4JT1h
          wqvat7kdRIxcWHtW482JKRyfa58QidqA7nIBblZJuWqpo4etAVZTCV/caFKbn/Ek
          FrT88MNiy5xsimgQSdt9vptOvJc=
          -----END CERTIFICATE-----
    runcmd:
      - update-ca-certificates
  osImage: "registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:2.1.2-3.59"
  clusterTargets:
    - clusterName: volcano
  upgradeContainer:
    envs:
      # Use FORCE to force an upgrade. 
      # This is convenient when the `osImage` is the same, and only the `cloudConfig` changed.
      - name: FORCE
        value: "false"
```
