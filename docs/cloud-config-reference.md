---
sidebar_label: Cloud-config reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/cloud-config-reference"/>
</head>

# Cloud-config Reference

Node OS images build using the [Elemental Toolkit](https://github.com/rancher/elemental-toolkit) are expected
to be initialized and configured by using [yip](https://github.com/rancher/yip). Yip is a small utility to
apply a set of actions and configurations to the system described with yaml files. Yip is integrated and consumed
as a library within the elemental client binary (see `elemental run-stage --help`). Yip groups the configurations
and actions to apply in arbitrary _stages_, for instance the `elemental run-stage network` command call would only
apply defined actions and configuration for the stage named `network`. Note from Yip perspective stages can be run at
any time as they are simply grouping a set of actions under an arbitrary name.

Elemental Toolkit integrates five predefined stages into the OS boot process.

1. **`pre-rootfs`**: this stage runs on early boot inside the init ram disk, just *before* mounting the root device (typically at `/sysroot`).
   This stage can be used to define first-boot steps that are required before mounting the root device. A good example is expanding the
   root device partition. Executed as part of the `initrd-root-device.target`.

2. **`rootfs`**: this stage runs on early boot inside the init ram disk, just *after* mounting the root device (typically at `/sysroot`).
   This stage can be used to define first-boot steps like creating new partitions. Ephemeral and  persistent paths are typically defined
   at this stage. Executed as part of the `initrd-root-fs.target`.

3. **`initramfs`**: this stage runs inside the init ram disk too, but on a later stage just before switching root. This stage runs in a chrooted
   environment to the actual root device. This stage is handy to set some system parameters that might be relevant to systemd
   after switching root. For instance, additional systemd unit files could be added here before the systemd from the actual root is executed.
   Executed as part of the `initrd.target`.

4. **`fs`**: this stage is the first one executed after switching root and it is executed as part of the `sysinit.target` which runs once all
   all local filesystems and mountpoints defined in fstab are mounted and ready.

5. **`network`**: this stage is executed as part of the `multi-user.target` and after the `network-online.target` is reached. This stage can be used
   to run actions and configurations that require network connectivity. For instance this stage is used to run the very first node registration and
   and installation from a live ISO.

6. **`boot`**: this stage is executed as part of the `multi-user.target` and before the `getty.target`. This is the default stage to run cloud-config
   data provided using the supported cloud-init syntax. See [cloud-init compatibility](cloud-config-reference.md#compatibility-with-cloud-init-format) section.

By default, `elemental` reads the yaml configuration files from the following paths in order: `/system/oem`, `/oem` and `/usr/local/cloud-config`.

In Elemental Operator, all kubernetes resources including a `cloud-config` field can be expressed in either [yip](#configuration-syntax) or
[cloud-init compatible](#compatibility-with-cloud-init-format) syntax. This includes resources such as `MachineRegistration`, `SeedImage`, and `ManagedOSImage`.

:::note
In contrast to similar projects such as _Cloud Init_, Yip does not keep records or caches of executed stages and steps,
all stages and its associated configuration is executed at every boot.
:::


## Elemental client cloud-config hooks

In addition to the defined cloud-config stages at boot described in the previous section the Elemental client also
honors some specific stages, referenced as hooks, to customize the behavior of these subcommands: `install`, 
`upgrade`, `reset` and `build-disk`. Each of these subcommands has it's own set of four different cloud-config stages executed at
analog phases of the specific subcommand execution.

Hooks are essetially a way to provide permanent changes to system that can't be easily expressed as part of an OCI container or that
are not easily achievable with the `elemental` client configuration options. A good example could be handling the firmware in EFI
partition for Raspberry Pi devices.

:::warning
Note most hooks are executed in the host environment with privileges, so they are potentially destructive operations. In most
cases regular cloud-config operations at boot time are sufficient to setup the system. Also to include additional software in an image
the preferred option is to build a [derivative image](custom-images.md) and not abuse of hooks to install additional software.
:::


### Hook stages

* Before stages: `before-install`, `before-upgrade`, `before-reset`, `before-disk`
  These stages are executed once the working directories and environment are prepared but before starting the actual action. In
  `install`, `upgrade` and `reset` steps this happens once all the associated partitions are created and mounted, but before stating
  the deployment of any image.

* After chrooted stages: `after-install-chroot`, `after-upgrade-chroot`, `after-reset-chroot`, `after-disk-chroot`
  These stages are executed after deploying the target system into the working area into a chroot environment rooted to the
  actual deployed image. Since this happens in a chroot env the elemental client analyses the hooks present in the deployed image, not in the host.
  Only `/oem` is shared with the host if available.

* After stages: `after-install`, `after-upgrade`, `after-reset`, `after-disk`
  These stages are executed after deploying the target system into the working area from the host environment. At this stages all
  partitions are still mounted and available in RW mode. This particular set of stages analyses the hooks present in the host
  and into the equivalent set of paths chrooted to the deployed image. The hook however is not executed in a chroot environment.
  This is helpful to provide `after-*` hooks within the deployed image.

* Post stages: `post-install`, `post-upgrade`, `post-reset`, `post-disk`
  These stages are executed at end before exiting the command and running a cleanup process. At this stage the image is already deployed
  and locked in a read-only subvolume or filesystem. Partitions are still mounted at this stage.

:::note
Note installation hooks are not applied as part of the [MachineRegistration.config.cloud-config](machineregistration-reference.md#configcloud-config).
In order to provide installation hooks they can be included as part of the [SeedImage.cloud-config](seedimage-reference.md#seedimagespec-reference),
as they need to be present in the installation media.
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

In the above example there are two stages: `initramfs` and `boot`.
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
        after-install-chroot:
        - name: "Set serial console"
          commands:
          - grub2-editenv /oem/grubenv set extra_cmdline="console=ttyS0"
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

## Synchronization

During execution of a stage all files are loaded and a graph is computed and then executed. This means that steps in the
same stage can be expected to be executed in any order (regardless of filenames).

In order to synchronize execution the user can use the post/pre stages or refer to the `after` keyword in the [yip syntax](https://github.com/rancher/yip/blob/ee4051d9ec2782989344f813bc6a0975bbd8f3fe/pkg/executor/default_test.go#L222)

## Compatibility with Cloud Init format

A subset of the official [cloud-config spec](http://cloudinit.readthedocs.org/en/latest/topics/format.html#cloud-config-data) is implemented by yip.
More specific the supported cloud-init keys are: `users`, `ssh_authorized_keys`, `runcmd`, `hostname` and `write_files` are implemented.

If a yaml file starts with `#cloud-config` it is parsed as a standard cloud-init, associated it to the yip `boot` stage.
For example:

```yaml
#cloud-config

# Note groups are delivered as list, not as comma separated values
users:
- name: "bar"
  passwd: "foo"
  groups:
  - "users"
  homedir: "/home/foo"
  shell: "/bin/bash"
  ssh_authorized_keys:
  - faaapploo

# Assigns these keys to the first user in users or root if there
# is none
ssh_authorized_keys:
- asddadfafefa

# Run these commands once the system has fully booted
# Each command is expressed as a sinlge string, no nested lists
runcmd:
- echo hello world

# Hostname
hostname: myserver

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
        groups:
        - "users"
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
