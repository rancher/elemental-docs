---
sidebar_label: Customize Elemental Installation
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/custom-install"/>
</head>

# Customize Elemental Installation

Elemental installed OS images can be customized in different ways.

One option is to remaster container OS images by simply using a docker build.
SL Micro images are regular container images, so it is absolutely possible to create
a new image using a Dockerfile based on SLE Micro. See [Build Custom OS Images](/custom-images.md)
section for further details, this is the preferred option.

Alternatively, it is also possible to provide additional resources and configuration
within the installation media so that during installation, or eventually at boot time,
additional binaries such as drivers or extra configuration files can be included.

This section focuses on how to customize the installation process from a given OS image. 

## Customization options

Elemental installation can be customized in three different non-exclusive ways. First,
including additional cloud-config files into the installed system, second, by including
additional cloud-config file into the installation media, and finally, by adding a custom
Elemental client configuration file (`/etc/elemental/config.yaml`).

1. The additional cloud-config files included into the installed system are useful to run
   custom operations at boot time. See the [Cloud Config Reference](cloud-config-reference.md).

2. The additional cloud-config files into the installation media are useful to run custom operations
   at install time or to customize the installation environment to match certain specific needs.

3. A custom Elemental client configuration file is, by default, located at `/etc/elemental/config.yaml`
   and it can also be split into multiple yaml files under `/etc/elemental/config.d` directory.
   See the configuration file
   [reference](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/).

A common pattern is to combine the three ways described above depending on the specific needs.

### Adding additional cloud-config files within the installed OS

In order to include additional cloud-config files during the installation they need
to be added to the installation data into the MachineRegistration resource. The most simple
way to achieve it is by adding the desired cloud-config directly as part of the MachineRegistration [devoted
section](machineregistration-reference.md#configcloud-config). See the example below


```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: my-nodes
  namespace: fleet-default
spec:
  ...
  config:
    ...
    cloud-config:
      stages:
        boot:
        - name: "Adding 'admin' user"
          users:
            admin:
              passwd: mysecretpasswd
```

Alternatively, cloud-config files path can also be referenced explicitly so the configuration is not
strictly needed to live within the MachineRegistration resource itself. The `config-urls` section of the
MachineRegistration is used for this exact purpose. See
[MachineRegistration reference](/machineregistration-reference) page.

`config-urls` is a list of string literals where each item is an HTTP URL or a local path pointing to a
cloud-config file. The local path is evaluated during
the installation, hence it must exists within the installation media, commonly an ISO image.

By default, Elemental live systems mount the ISO root at `/run/initramfs/live` which is also the default path set for `config-url` in `MachineRegistrations`:
See the example below:

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: my-nodes
  namespace: fleet-default
spec:
  ...
  config:
    ...
    elemental:
      ...
      install:
        ...
        config-urls:
        - "/run/initramfs/live/oem/custom_config.yaml"
```
Elemental live ISOs, when booted, have the ISO root mounted at `/run/initramfs/live`.
According to that, the ISO for the example above is expected to include the `/oem/custom_config.yaml` file.

:::note
`/run/initramfs/live` is a readonly mountpoint and it's not an appropriate path for dynamically generated content at ISO boot.
:::

### Adding additional cloud-config files within the installation media

Adding additional cloud-config files within the installation media might be required to configure the
installation environment (e.g. setting the network connectivity to register) or to provide some
[installation hooks](cloud-config-reference.md#elemental-client-cloud-config-hooks) to run custom
logic during the installation itself.

In Elemental the [SeedImage](seedimage-reference.md) resources are the responsibles of handling the installation
media. So the simplest place to include additional cloud-config data is within the installation media is by
adding it to the [`cloud-config` section](seedimage-reference.md#seedimagespec-reference). By doing so the
given cloud-config will be already evaluated form the very first boot of the installation media and also
honored during the installation phase in case some install hook is provided. Consider the following example:

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: custom-seed
  namespace: fleet-default
spec:
  ...
  cloud-config:
    stages:
      post-install:
      - name: "Run custom script after installation"
        commands:
        - |
          echo "This is a custom script"
          echo "For instance, this could be used to handle extra drives for an LVM group"
      boot:
      - name: "Add proxy setup for the installation media"
        files:
        - path: /etc/sysconfig/proxy
          permissions: 0664
          content: |
            PROXY_ENABLED="yes"
            HTTP_PROXY=http://<MY_PROXY>:<MY_PORT>
            HTTPS_PROXY=https://<MY_PROXY>:<MY_PORT>
            NO_PROXY="localhost, 127.0.0.1"
```

### Custom Elemental client configuration file

[Elemental client](https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental.md) `install`, `upgrade` and 
`reset` commands can be configured with a
[custom configuration file](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/) located
by default in `/etc/elemental/config.yaml`. If you have multiple yaml files, you need to add them in the
`/etc/elemental/config.d` directory.

The following example sets an additional extra partition during the installation:

```yaml showLineNumbers
install:
  extra-partitions:
  - size: 10240
    fs: ext4
    label: EXTRA_PARTITION
```

In order to make it available at installation time this could be done my adding the extra file as part
of the SeedImage resource cloud-config as it is described in the previous section of this page. Consider
the example:

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: custom-seed
  namespace: fleet-default
spec:
  ...
  cloud-config:
    stages:
      boot:
      - name: "Add Elemental client configuration file"
        files:
        - path: /etc/elemental/config.d/extra-partition.yaml
          permissions: 0664
          content: |
            install:
              extra-partitions:
              - size: 10240
                fs: ext4
                label: EXTRA_PARTITION
```
