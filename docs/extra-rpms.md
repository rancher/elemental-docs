---
sidebar_label: Add third party RPMs
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/custom-install/extra-rpms"/>
</head>

## How to add third party RPMs at install time

This example is covering the case in which extra RPMS (e.g. specific hardware drivers) are included
into the ISO and during the installation they are installed over the OS image.

For that use case the following files are required:

* additional RPMs to install
* additional cloud-config file defining hooks to copy and install binaries as installation hooks

We can handle it all into a single `SeedImage.spec.cloud-config` section assuming the additional
RPM is available to download it from a remote server at installation time.

Consider the following cloud-config data which could be used as the content of the `cloud-config`
section in a [SeedImage resource](seedimage-reference.md#seedimagespec-reference).

```yaml showLineNumbers
name: "Install extra drivers"
stages:
  before-install:
  # Preload data to the persistent storage
  # During installation persistent partition is mounted at /run/elemental/persistent
  - downloads:
    - path: /tmp/some_package.rpm
      url: "<REMOTE_PACKAGE_URL>"
      permissions: 0777
  - commands:
    - mkdir -o /run/elemental/persistent/extra-pkgs
    - cp -p /tmp/some_package.rpm /run/elemental/persistent/extra-pkgs

  after-install-chroot:
  # Install the package at install time
  - commands:
    - rpm -iv /run/elemental/extra-pkgs/some_package.rpm

  # Include to the install system analog upgrade and reset hooks
  - files:
    - path: /oem/extra-pkg.yaml
      permissions: 0664
      content: |
        name: "Install extra drivers"
        stages:
          after-upgrade-chroot:
          # Install the package after upgrading to a new image
          - commands:
            - rpm -iv /run/elemental/extra-pkgs/some_package.rpm
          after-reset-chroot:
          # Install the package on reset
          - commands:
            - rpm -iv /run/elemental/extra-pkgs/some_package.rpm
```

Note the installation hooks only cover installation procedures, so that additional cloud-config data should
be also part of the installed system in order to keep installing the package as part of the upgrade or reset
processes.

### Repacking a generated ISO image with extra files

Alternatively, if having the dynamic download of content at install time is not a desired behavior
and an ISO already including all the extra binaries is the actual goal this can is also possible
but requires manually repacking the ISO.

Using `xorriso`, the linux utility to create ISOs, this turns to be a relatively easy process.

Let's create an `overlay` directory to create the directory tree that needs to be
added into the ISO root. In that case the `overlay` directory could contain:

```yaml showLineNumbers
overlay/
  data/
    extra-pkgs/
      some_package.rpm
  iso-config/
    install_hooks.yaml
```

We are assuming the `install_hooks.yaml` is the content the actual cloud-config exposed in the previous
section which is manually included into image instead of being embedded in a SeedImage resource. The `data` folder is eventually including the binaries we want to append into the ISO.

Assuming we already downloaded an Elemental ISO tied to a specific MachineRegistration with the following
`xorriso` call all the `overlay` folder contents would be included into a new ISO:

```bash
xorriso -indev elemental.x86_64.iso -outdev elemental.custom.x86_64.iso -map overlay / -boot_image any replay
```

Requires `xorriso` equal or higher than version 1.5.

The contents of `install_hooks.yaml` could eventually be the same as the previous section but omitting the RPM
package download and also adapting the RPM path to `/run/initramfs/live/data/extra-pkgs/some_package.rpm` as
the ISO root folder is mounted at `/run/initramfs/live`.
