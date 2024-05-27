---
sidebar_label: Building raw disk images for Raspberry Pi
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/raspi-disk"/>
</head>


### How to build raw disk images for Raspberry Pi

This guide will show how we can build a raw disk image that can be written to an SD-card and booted without any other installation media.

:::caution
Any data on the SD-card will be erased, please only use a SD-card without anything important on it.

The SD-card must be reasonably large (32 GB or more) and **fast** (!!).
:::

```yaml title="SeedImage resource" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: SeedImage
metadata:
  name: fire-img
  namespace: fleet-default
spec:
  type: raw
  baseImage: registry.opensuse.org/isv/rancher/elemental/staging/containers/suse/sl-micro/6.0/baremetal-os-container:latest
  targetPlatform: linux/arm64
  registrationRef:
    apiVersion: elemental.cattle.io/v1beta1
    kind: MachineRegistration
    name: fire-nodes
    namespace: fleet-default
```

Check the logs for the build pod using:

```shell
kubectl logs -n fleet-default fire-img -f -c build
```

When the build is finished we can download the image file using wget:

```shell
wget --no-check-certificate $(kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}") -O sle-micro.arm64.raw
```

Now we can write the `.raw` image to the SD-card. This can be done with `dd` on the Linux command line if you're comfortable with this command.
[openSUSE](https://www.opensuse.org) has nice instructions on how to write an image to a storage medium for [Linux](https://en.opensuse.org/SDB:Live_USB_stick),
[Windows](https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows), and [OS X](https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS).

### Starting the machine

The raw disk image will only include the EFI partition, OEM partition and
recovery partition. On first boot the system will boot into the recovery system
to expand and add missing partitions. After expansion it will register with
rancher and reboot.

If an error occurs during registration phase the journal can be found using
`journalctl -u elemental-register-reset`.
