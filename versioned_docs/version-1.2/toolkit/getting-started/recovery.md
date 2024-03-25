---
title: "Recovery"
sidebar_label: "Recovery"
---

Elemental derivatives shares a common recovery mechanism built-in which can be leveraged to restore the system to a known point. At installation time, the recovery partition is created from the installation medium.

The recovery system can be accessed during boot by selecting the last entry in the menu (labeled by "recovery").

A derivative can be recovered anytime by booting into the ` recovery` partition and by running `elemental reset` from it. 

This command will regenerate the bootloader and the images in the `COS_STATE` partition by using the recovery image.

### Upgrading the recovery partition

From either the active or passive system, the recovery partition can also be upgraded by running 

```bash
elemental upgrade --recovery
``` 

It also supports to specify docker images directly:

```bash
elemental upgrade --recovery --recovery-system.uri <image-uri>
```

Where `<image-uri>` can be an opaque URI of `docker` scheme (e.g. `docker:registry.org/some/image:tag`). 

### Upgrading the active system from the recovery

The recovery system can upgrade also the active system by running `elemental upgrade`, and it also supports to specify docker images directly:

```bash
elemental upgrade --system.uri <image-uri>
```

