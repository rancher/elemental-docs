---
sidebar_label: Cloud-config reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/cloud-config-reference"/>
</head>

# Cloud-config Reference

Node OS images build using the [Elemental Toolkit](https://github.com/elemental-toolkit) are expected
to be initialized and configured by using [yip](https://github.com/rancher/yip). Yip is a small utility to
apply a set of actions and configurations to the system described with yaml files. Yip is integrated and consumed
as a library within the elemental client binary (see `elemental run-stage --help`). Yip groups the configurations
and actions to apply in arbitrary _stages_, for instance the `elemental run-stage network` command call would only
apply defined actions and configuration for the stage named `network`. Note from Yip perspective stages can be run at
any time as they are simply grouping a set of actions under an arbitrary name.

Elemental Toolkit integrates five predefined stages into the OS boot process.

1. **`rootfs`**: this stage runs on early boot inside the init ram disk, just after mounting the root device (typically at `/sysroot`).
   This stage can be used to define first-boot steps like expanding or creating persistent partitions. Ephemeral and
   persistent paths are typically defined at this stage. Executed as part of the `initrd-root-fs.target`.

2. **`initramfs`**: this stage runs inside the init ram disk too, but on a later stage just before switching root. This stage runs in a chrooted
   environment to the actual root device. This stage is handy to set some system parameters that might be relevant to systemd
   after switching root. For instance, additional systemd unit files could be added here before the systemd from the actual root is executed.
   Executed as part of the `initrd.target`.

3. **`fs`**: this stage is the first one executed after switching root and it is executed as part of the `sysinit.target` which runs once all
   all local filesystems and mountpoints defined in fstab are mounted and ready.

4. **`network`**: this stage is executed as part of the `multi-user.target` and after the `network-online.target` is reached. This stage can be used
   to run actions and configurations that require network connectivity. For instance this stage is used to run the very first node registration and
   and installation from a live ISO.

5. **`boot`**: this stage is executed as part of the `multi-user.target` and before the `getty.target`. This is the default stage to run cloud-config
   data provided using the supported cloud-init syntax. See [cloud-init compatibility](cloud-config-reference.md#compatibility-with-cloud-init-format) section.

By default, `elemental` reads the yaml configuration files from the following paths in order: `/system/oem`, `/oem` and `/usr/local/cloud-config`.

In Elemental Operator, all kubernetes resources including a `cloud-config` field can be expressed in either [yip](#configuration-syntax) or [cloud-init compatible](#compatibility-with-cloud-init-format) syntax. This includes resources such as `MachineRegistration`, `SeedImage`, and `ManagedOSImage`.

:::note
In contrast to similar projects such as _Cloud Init_, Yip does not keep records or caches of executed stages and steps,
all stages and its associated configuration is executed at every boot.
:::

## Configuration syntax

Yip has its own syntax, it essentially requires to define _stages_ and a list of steps for each stage. Steps are executed in
order and each step can be a combination different action types (e.g run commands, create files, set hostname, etc.).

Consider the following example:

```yaml
stages:
  initramfs:
  - name: "Setup users"
    ensure_entities:
    - path: /etc/shadow
      entity: |
          kind: "shadow"
          username: "root"
          password: "root"
  boot:
  - files:
    - path: /tmp/script.sh
      content: |
        #!/bin/sh
        echo "test"
      permissions: 0777
      owner: 1000
      group: 100
  - commands:
    - /tmp/script.sh
```

In the above exaple there are two stages: `initramfs` and `boot`.  
The `initramfs` stage initializes a sample user.  
The `boot` stage includes two steps, one to create an executable script file and a second one
that actually runs the script.

Yip also supports `*.before` and `*.after` suffix modifiers to any given stage. For instance, running the `network` stage
results into running first `network.before` stages found in config files and then `network` and finally `network.after`.

See the full reference of applicable keys in steps documented in
[yip project](https://github.com/rancher/yip?tab=readme-ov-file#configuration-reference) itself.

Below is an example of the above configuration embedded in a MachineRegistration resource.  

<details>
  <summary>MachineRegistration example</summary>

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: my-nodes
  namespace: fleet-default
spec:
  config:
    cloud-config:
      name: "A registration driven config"
      stages:
        initramfs:
        - name: "Setup users"
          ensure_entities:
          - path: /etc/shadow
            entity: |
                kind: "shadow"
                username: "root"
                password: "root"
        boot:
        - files:
          - path: /tmp/script.sh
            content: |
              #!/bin/sh
              echo "test"
            permissions: 0777
            owner: 1000
            group: 100
        - commands:
          - /tmp/script.sh
    elemental:
      install:
        reboot: true
        device: /dev/sda
        debug: true
  machineName: my-machine
  machineInventoryLabels:
    element: fire
```

</details>

## Compatibility with Cloud Init format

A subset of the official [cloud-config spec](http://cloudinit.readthedocs.org/en/latest/topics/format.html#cloud-config-data) is implemented by yip.
More specific the supported cloud-init keys are: `users`, `ssh_authorized_keys`, `runcmd`, `hostname` and `write_files` are implemented.

If a yaml file starts with `#cloud-config` it is parsed as a standard cloud-init, associated it to the yip `boot` stage.
For example:

```yaml
#cloud-config
users:
- name: "bar"
  passwd: "foo"
  groups: "users"
  homedir: "/home/foo"
  shell: "/bin/bash"
  ssh_authorized_keys:
  - faaapploo

# Assigns these keys to the first user in users or root if there
# is none
ssh_authorized_keys:
- asdd

# Run these commands once the system has fully booted
runcmd:
- foo

# Write arbitrary files
write_files:
- encoding: b64
  content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4
  path: /foo/bar
  permissions: "0644"
  owner: "bar"
```

Below is an example of the above configuration embedded in a MachineRegistration resource.

<details>
  <summary>MachineRegistration example</summary>

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineRegistration
metadata:
  name: my-nodes
  namespace: fleet-default
spec:
  config:
    cloud-config:
      users:
      - name: "bar"
        passwd: "foo"
        groups: "users"
        homedir: "/home/foo"
        shell: "/bin/bash"
        ssh_authorized_keys:
        - faaapploo
      ssh_authorized_keys:
      - asdd
      runcmd:
      - foo
      write_files:
      - encoding: b64
        content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4
        path: /foo/bar
        permissions: "0644"
        owner: "bar"
    elemental:
      install:
        reboot: true
        device: /dev/sda
        debug: true
  machineName: my-machine
  machineInventoryLabels:
    element: fire
```
  
</details>
