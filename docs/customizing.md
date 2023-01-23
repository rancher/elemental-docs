---
sidebar_label: Customize Elemental Install
title: ''
---

# Customize Elemental Install

Elemental Teal images can be customized in different ways.
One option is to provide
additional resources within the installation media so that during installation, or
eventually at boot time, additional binaries such as drivers can be included.

Another option would be to remaster the Elemental Teal by simply using a docker build.
Elemental Teal is a regular container image, so it is absolutely possible to create
a new image using a Dockerfile based on Elemental Teal image.

## Customize installation ISO and installation process

In order to adapt the installation ISO a simple approach is to append extra configuration
files into the ISO root in an analog way the registration yaml configuration file
is added.

### Common customization pattern

Elemental Teal installation can be customized in three different non-exclusive ways. First, including
some custom Elemental client configuration file, second, by including additional cloud-init files to execute at
boot time, and finally, by including installation hooks.

A common pattern is to combine the three ways described above. This pattern will allow you to add custom steps during the installation and add `cloud-init` files to be evaluated at boot time.

To apply this pattern, the ISO needs to include:

1. A [configuration file](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/)
   for the elemental client, describing at least the installation hooks location. This file is usually added to the ISO with path and name `/elemental/config.yaml`.

2. The additional cloud-init files to be included into the installed system. They
   allow to perform custom operations at boot time.

3. The installation hooks evalutated at install time. They allow to perform custom operations
   during the installation process (include extra software, set additional disks...).

#### Custom Elemental client configuration file

[Elemental client](https://github.com/rancher/elemental-cli) `install`, `upgrade` and `reset` commands can be configured with a
custom [configuration file](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/).

In order to set a custom configuration file the installation ISO must include it.
By default, the `elemental-register` command will attempt to load the Elemental client
configuration within the `elemental` folder inside the ISO root. That is ISOs including
`/elemental/config.yaml` file and/or multiple yaml files inside the `/elemental.conf.d` folder.

A simple example to set hooks location could be:

```yaml
cloud-init-paths:
  - "/run/initramfs/live/hooks"
```

The above example assumes there is a `/hooks` folder in ISO root including
the hook yaml files. Note the `/run/initramfs/live` prefix is the mount point
of the ISO filesystem of the Elemental Live ISO.

#### Adding additional cloud-init files witin the installed OS

In order to include additional cloud-init files during the installation they need
to be added to the installation data into the MachineRegistration resource. More specific
the `config-urls` field is used for this exact purpose. See [MachineRegistration reference](/machineregistration-reference) page.

`config-urls` is a list of string literals where each item is an http url pointing to a
cloud-init file or a local path of a cloud init file. Note the local path is evaluated during
the installation, hence the local path must exist within the installation media, commonly an ISO image.

Since in Elemental Teal live systems the ISO root is mounted at `/run/initramfs/live`,
the local paths for `config-url` in MachineRegistrations are likely to point there.
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
Elemental Teal live ISOs, when booted, have the ISO root mounted at `/run/initramfs/live`.
According to that, the example above is expected to include the `/oem/custom_config.yaml` file.

#### Installation hooks

[Elemental client](https://github.com/rancher/elemental-cli) `install`, `upgrade` and `reset` procedures include three different hooks:

* `before-install`: executed after all partition mountpoints are set.
* `after-install-chroot`: executed after deploying the OS image and before unmounting the associated loop filesystem image. Runs chrooted to the OS image.
* `after-install`: executed just after the after-install-chroot hook. It is not chrooted.
* `post-install`: executed as the very last step before ending the installation, partitions are still mounted, the loop devices for the image is not.

Hooks are provided as cloud-init stages. Equivalent hooks exist for `reset` and `upgrade` procedures. In fact, hooks are regular cloud-init stages,
the difference though, is that elemental client only parses them during `install`, `upgrade` or `reset` actions, rather than boot time.

Hooks are evaluated during `install`,`reset` and `upgrade` action from `/oem`, `/system/oem` and `/usr/local/cloud-config`, however
additional paths can be provided with the `cloud-init-paths` flag in [Elemental client configuration](https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/).

### Adding extra driver binaries into the ISO example

This example is covering the case in which extra driver binaries are included into the ISO
and during the installation they are installed over the OS image.

For that use case the following files are required:

* additional binaries to install (they could be in the form of RPMs)
* additional hooks file to copy binaries into the persistent storage and to install them
* additional Elemental client configuration file to point hooks file location

Lets create an `overlay` directory to create the directory tree that needs to be
added into the ISO root. In that case the `overlay` directory could contain:

```yaml showLineNumbers
overlay/
  data/
    extra_drivers/
      some_driver.rpm
  hooks/
    install_hooks.yaml
  elemental/
    config.yaml
```

The Elemental client config file in `overlay/elemental` could be as:

```yaml showLineNumbers
cloud-init-paths:
  - "/run/initramfs/live/hooks"
```

This is just to let Elemental client know where to find installation hooks.

Finally, the `overlay/hooks/install_hooks.yaml` could be as:

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

This example is covering the case the host has multiple disks, some of them used
as part of an LVM setup.

In this particular case we will assume a host includes three disks (`/dev/sda`, `/dev/sdb`
and `/dev/sdc`), where the first one is used for a regular Elemental Teal installation
and the other remaining two are used as part of LVM group where abitrary logical volumes
are created, formatted and mounted at boot time via an extended fstab file.

For that use case the following files are required:

* additional clout-init files to include within the installed system
* additional installation hooks to prepare the LVM volumes at install time
* additional Elemental client configuration file to point hooks file location

Lets create an `overlay` directory to create the directory tree that needs to be
added into the ISO root. In that case the `overlay` directory could contain:

```yaml showLineNumbers
overlay/
  oem/
    lvm_volumes_in_fstab.yaml
  hooks/
    lvm_volumes_hook.yaml
  elemental/
    config.yaml
```

The Elemental client config file in `overlay/elemental` could be as:

```yaml showLineNumbers
cloud-init-paths:
  - "/run/initramfs/live/hooks"
```

This is just to let Elemental client know where to find installation hooks.

The installation hook `overlay/hooks/lvm_volumes_hook.yaml` could be as:

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
          udeadm settle
        fi

        # Ensure devices are already available
        [ -e "/dev/elementalLVM/elementalVol1" ] || exit 1
        [ -e "/dev/elementalLVM/elementalVol2" ] || exit 1

        # Format logical volumes with a known label for later use in fstab
        mkfs.xfs -L eVol1 /dev/elementalLVM/elementalVol1
        mkfs.xfs -L eVol2 /dev/elementalLVM/elementalVol2
```

It essentially creates and formats the LVM devices as desired. This is a good
example of an installation hook, as this setup is only needed once at installation
time. Doing such a thing on first boot is also a possibility, but it would definitely
require a more sophisticated logic to ensure its only applied once at first boot.

Finally, the boot time cloud-init files have only to take care of setting the mount
points and actually mounting at boot. In Elemental OS fstab is ephemeral, so there is
no fstab set during the installation, it is dynamically created at boot time. So that
it can't be set within an installation hook and a boot time cloud-init file is used.

The `overlay/oem/lvm_volumes_hook.yaml` could something as simple as:

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

Note the `initramfs` stage is the last stage inside the initfamfs right before
switching root to the actual root tree, in runs chrooted to the final root. At this
stage `/etc/fstab` already exists and it is a good place to adapt it, as after
switching root systemd will handle the rest of the initalizaton and process apply it.

This cloud-init file should be included into the `/oem` folder on the installed
system. `/oem` is mount point for the OEM partition. In order include extra files
there they should be listed as `config-urls` within the Registration CRD at the
management cluster.

### Repacking the ISO image with extra files

Assuming an `overlay` folder was created in the current directory containing all
additional files to be appended, the following `xorriso` command adds the extra files:

```bash showLineNumbers
xorriso -indev elemental-teal.x86_64.iso -outdev elemental-teal.custom.x86_64.iso -map overlay / -boot_image any replay
```

For that a `xorriso` equal or higher than version 1.5 is required.

## Remastering a custom docker image

Since Elemental Teal image is a Docker image it can also be used as a base image
in a Dockerfile in order to create a new container image.

Imagine some additional package from an extra repository is required, the following example
show case how this could be added:

```docker showLineNumbers
# The version of Elemental to modify
FROM registry.opensuse.org/isv/rancher/elemental/teal52/15.3/rancher/elemental-node-image/5.2:VERSION

# Custom commands
RUN rpm --import <repo-signing-key-url> && \
    zypper addrepo --refresh <repo_url> extra_repo && \
    zypper install -y <extra_package>

# IMPORTANT: /etc/os-release is used for versioning/upgrade. The
# values here should reflect the tag of the image currently being built
ARG IMAGE_REPO=norepo
ARG IMAGE_TAG=latest
RUN echo "IMAGE_REPO=${IMAGE_REPO}"          > /etc/os-release && \
    echo "IMAGE_TAG=${IMAGE_TAG}"           >> /etc/os-release && \
    echo "IMAGE=${IMAGE_REPO}:${IMAGE_TAG}" >> /etc/os-release
```

Where VERSION is the base version we want to customize.

And then the following commands

```bash showLineNumbers
docker build --build-arg IMAGE_REPO=myrepo/custom-build \
             --build-arg IMAGE_TAG=v1.1.1 \
             -t myrepo/custom-build:v1.1.1 .
docker push myrepo/custom-build:v1.1.1
```

The new customized OS is available as the Docker image `myrepo/custom-build:v1.1.1` and it can
be run and verified using docker with

```bash showLineNumbers
docker run -it myrepo/custom-build:v1.1.1 bash
```