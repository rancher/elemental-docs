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
SLE Micro for Rancher images are regular container images, so it is absolutely possible to create
a new image using a Dockerfile based on SLE Micro for Rancher. See [Build Custom OS Images](/custom-images.md)
section for further details on that possibility.

Alternatively, it is also possible to provide additional resources within the installation
media so that during installation, or eventually at boot time, additional binaries such as
drivers or extra configuration files can be included.

This section focuses on how to customize the installation process from a given OS image. 

## Customize installation ISO and installation process

In order to adapt the installation ISO a simple approach is to append extra configuration
files into the ISO root in an analog way the registration yaml configuration file
is added.

### Common customization pattern

Elemental installation can be customized in three different non-exclusive ways. First, including
some custom Elemental client configuration file, second, by including additional cloud-init files to execute at
boot time, and finally, by including  `cloud-init` files such as installation hooks or boot stages evaluated during
the live system boot itself.

A common pattern is to combine the three ways described above. This pattern will allow you to add custom steps during the installation and add `cloud-init` files to be evaluated at boot time.

Additional config files can be added dynamically boot time by generating the ISO via a [SeedImage](/seedimage-reference.md) including custom cloud-config data.

To apply this pattern, the following files need to be included in the ISO or generated at boot time:

1. A [configuration file](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/)
   for the elemental client. The file must be named `config.yaml` and located by default in `/etc/elemental`.
   This path can be configured as part of the installation parameters of a [MachineRegistration](/machineregistration-reference) resource.

2. The additional `cloud-init` files to be included into the installed system. They
   allow to perform custom operations at boot time.

3. The installation hooks are evalutated at install time. They allow to perform custom operations
   during the installation process (include extra software, set additional disks...). The same
   way `cloud-init` files can be included to perform custom operations during the live installation
   media boot time.

#### Custom Elemental client configuration file

[Elemental client](https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental.md) `install`, `upgrade` and `reset` commands can be configured with a [custom configuration file](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/) located by default in `/etc/elemental/config.yaml`.
If you have multiple yaml files, you need to add them in the `/etc/elemental/config.d` directory.

A simple example to set hooks location could be:

```yaml
extra-partitions:
  - size: 10240
    fs: ext4
    label: EXTRA_PARTITION
```

The above example sets an additional extra partition during the installation.

#### Adding additional cloud-init files within the installed OS

In order to include additional cloud-init files during the installation they need
to be added to the installation data into the MachineRegistration resource. More specific
the `config-urls` field is used for this exact purpose. See [MachineRegistration reference](/machineregistration-reference) page.

`config-urls` is a list of string literals where each item is an HTTP URL or a local path pointing to a
cloud-init file. The local path is evaluated during
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

#### Adding installation hooks or boot stages for the live system

[Elemental client](https://github.com/rancher/elemental-cli) `install`, `upgrade` and `reset` procedures include four different hooks:

* `before-install`: executed after all partition mountpoints are set.
* `after-install-chroot`: executed after deploying the OS image and before unmounting the associated loop filesystem image. Runs chrooted to the OS image.
* `after-install`: executed just after the after-install-chroot hook. It is not chrooted.
* `post-install`: executed as the very last step before ending the installation, partitions are still mounted, the loop devices for the image is not.

Hooks are provided as `cloud-init` stages. Equivalent hooks exist for `reset` and `upgrade` procedures.
They are loaded from the `/iso-config` folder in ISO filesystem root. In fact, hooks are regular `cloud-init` stages with the
only difference that Elemental client parses them during `install`, `upgrade` or `reset` actions, rather than boot time.
Note any boot stage included this way will be executed during the live installation media boot.

Hooks are evaluated during `install`,`reset` and `upgrade` action from `/oem`, `/system/oem` and `/usr/local/cloud-config` paths,
however for the live ISOs there is an additional the path `/run/initramfs/live/iso-config` included. Note the `/run/initramfs/live`
prefix is the mount point of the ISO filesystem of the Elemental Live ISO once booted. 

### Adding extra driver binaries into the ISO example

This example is covering the case in which extra driver binaries are included into the ISO
and during the installation they are installed over the OS image.

For that use case the following files are required:

* additional binaries to install (they could be in the form of RPMs)
* additional hooks file to copy binaries into the persistent storage and to install them

Let's create an `overlay` directory to create the directory tree that needs to be
added into the ISO root. In that case the `overlay` directory could contain:

```yaml showLineNumbers
overlay/
  data/
    extra_drivers/
      some_driver.rpm
  iso-config/
    install_hooks.yaml
```

The `overlay/iso-config/install_hooks.yaml` could be as:

```yaml showLineNumbers
name: "Install extra drivers"
stages:
  before-install:
    # Preload data to the persistent storage
    # During installation persistent partition is mounted at /run/cos/persistent
    - commands:
        - rsync -a /run/initramfs/live/data/ /run/cos/persistent
  after-install-chroot:
    # extra_drivers folder is at `/usr/local/extra_drivers` from the OS image chroot
    - commands:
      - rpm -iv /usr/local/extra_drivers/some_driver.rpm
```

Note the installation hooks only cover installation procedures, for upgrades equivalent
`before-upgrade` and/or `after-upgrade-chroot` should be defined.

### Adding extra LVM volume group disks during the installation

This example is covering the setup of an host with multiple disks and some of them used
as part of an LVM setup.

As an example, we have an host with three disks (`/dev/sda`, `/dev/sdb`
and `/dev/sdc`). 

The first disk is used for a regular Elemental installation
and the other remaining two are used as part of a LVM group where arbitrary logical volumes
are created, formatted and mounted at boot time via an extended `fstab` file.

For this example, the following files are required:

* additional `clout-init` files included in the installed system
* additional installation hooks to prepare the LVM volumes during the installation

Let's create an `overlay` directory to create the directory tree that needs to be
added into the ISO root. In that case the `overlay` directory could contain:

```yaml showLineNumbers
overlay/
  oem/
    lvm_volumes_in_fstab.yaml
  iso-config/
    lvm_volumes_hook.yaml
```

The installation hook `overlay/iso-config/lvm_volumes_hook.yaml`:

```yaml showLineNumbers
name: "Create LVM logic volumes over some physical disks"
stages:
  post-install:
    - name: "Create physical volume, volume group and logical volumes"
      if: '[ -e "/dev/sdb" ] && [ -e "/dev/sdc" ]'
      commands:
      - | 
        # Create the physical volume, volume group and logical volumes
        pvcreate /dev/sdb /dev/sdc
        vgcreate elementalLVM /dev/sdb /dev/sdc
        lvcreate -L 8G -n elementalVol1 elementalLVM
        lvcreate -l 100%FREE -n elementalVol2 elementalLVM

        # Trigger udev detection
        if [ ! -e "/dev/elementalLVM/elementalVol1" ] || [ ! -e "/dev/elementalLVM/elementalVol2" ]; then
          sleep 10
          udevadm settle
        fi

        # Ensure devices are already available
        [ -e "/dev/elementalLVM/elementalVol1" ] || exit 1
        [ -e "/dev/elementalLVM/elementalVol2" ] || exit 1

        # Format logical volumes with a known label for later use in fstab
        mkfs.xfs -L eVol1 /dev/elementalLVM/elementalVol1
        mkfs.xfs -L eVol2 /dev/elementalLVM/elementalVol2
```

The LVM devices are created and formatted as desired. This is a good
example of an installation hook, as this setup is only needed once, at installation
time. As an alternative, the same action could be done on first boot, however it would
require a more sophisticated logic to ensure it's only applied once at first boot.

Finally, the boot time `cloud-init` files contain the mount points settings and trigger the
action of mounting those mountpoints. The Elemental OS `fstab` file is ephemeral and it's 
dynamically created at boot time. That's why it doesn't exist during the installation and
can't be used in an installation hook.

Here's an example of `overlay/oem/lvm_volumes_in_fstab.yaml`:

```yaml showLineNumbers
name: "Mount LVM volumes"
stages:
  initramfs:
    - name: "Extend fstab to mount LVM logical volumes at boot"
      commands:
      - |
        echo "LABEL=eVol1 /usr/local/eVol1  xfs defaults  0 0" >> /etc/fstab
        echo "LABEL=eVol2 /usr/local/eVol2  xfs defaults  0 0" >> /etc/fstab
```

:::note
The `initramfs` stage is the last stage before switching to the actual root tree.
At this stage, the `/etc/fstab` file already exists and can be adapted before
switching root. Once running in the final root tree, SystemD will handle the rest of the initialization and apply it.
:::

This cloud-init file should be included into the `/oem` directory on the installed
system. `/oem` is a mount point for the OEM partition. In order to include extra files,
they should be listed as `config-urls` within the Registration CRD at the
management cluster.

### Repacking the ISO image with extra files

Assuming an `overlay` folder was created in the current directory containing all
additional files to be appended, the following `xorriso` command adds the extra files:

```bash showLineNumbers
xorriso -indev elemental.x86_64.iso -outdev elemental.custom.x86_64.iso -map overlay / -boot_image any replay
```

For that a `xorriso` equal or higher than version 1.5 is required.
