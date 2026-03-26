---
sidebar_label: Extra LVM volume group
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/custom-install/lvm-drives-example"/>
</head>

## How to add extra LVM volume group disks during the installation

This example is covering the setup of a host with multiple disks and some of them used
as part of a LVM setup.

As an example, we have an host with three disks (`/dev/sda`, `/dev/sdb`
and `/dev/sdc`). 

The first disk is used for a regular Elemental installation
and the other remaining two are used as part of a LVM group where arbitrary logical volumes
are created, formatted and mounted at boot time via an extended `fstab` file.

For this example cloud-config steps are required in two different stages. First, some
[installation hooks](cloud-config-reference.md#elemental-client-cloud-config-hooks) are
needed to prepare and handle LVM volumes during the installation. Second, a cloud-config
is required at boot time to ensure the created LVM volumes are included in `/etc/fstab`
and consequently mounted.

Installation hooks can be included to the `SeedImage.spec.cloud-config` section with something
like:

```yaml showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: custom-seed
  namespace: fleet-default
spec:
  ...
  cloud-config:
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

Finally, the boot time cloud-config data contains the mount point settings to trigger the
mounts. The Elemental OS `fstab` file is ephemeral and it's dynamically created at boot time.
That's why it doesn't exist during the installation and can't be used in an installation hook.

Consider the following example to customize the `/etc/fstab` file using the `cloud-config` section
of a MachineRegistration resource:

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
        initramfs:
        - name: "Extend fstab to mount LVM logical volumes at boot"
          commands:
          - |
            echo "LABEL=eVol1 /run/elemental/eVol1  xfs defaults  0 0" >> /etc/fstab
            echo "LABEL=eVol2 /run/elemental/eVol2  xfs defaults  0 0" >> /etc/fstab
```

:::note
The `initramfs` [stage](cloud-config-reference.md) is the last stage before switching to the actual
root tree. At this stage, the `/etc/fstab` file already exists and can be adapted before
switching root. Once running in the final root tree, SystemD will handle the rest of the
initialization and apply it.
:::
