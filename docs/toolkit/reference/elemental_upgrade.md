---
title: "elemental upgrade"
sidebar_label: "elemental upgrade"
---

Upgrade the system

```
elemental upgrade [flags]
```

### Options

```
      --cosign                           Enable cosign verification (requires images with signatures)
      --cosign-key string                Sets the URL of the public key to be used by cosign validation
  -h, --help                             help for upgrade
      --local                            Use an image from local cache
      --poweroff                         Shutdown the system after install
      --reboot                           Reboot the system after install
      --recovery                         Upgrade the recovery
      --recovery-system.uri string       Sets the recovery image source and its type (e.g. 'docker:registry.org/image:tag')
  -x, --squash-compression stringArray   cmd options for compression to pass to mksquashfs. Full cmd including --comp as the whole values will be passed to mksquashfs. For a full list of options please check mksquashfs manual. (default value: '-comp xz -Xbcj ARCH')
      --squash-no-compression            Disable squashfs compression. Overrides any values on squash-compression
      --strict                           Enable strict check of hooks (They need to exit with 0)
      --system.uri string                Sets the system image source and its type (e.g. 'docker:registry.org/image:tag')
      --verify                           Enable mtree checksum verification (requires images manifests generated with mtree separately)
```

### Options inherited from parent commands

```
      --config-dir string   Set config dir
      --debug               Enable debug output
      --logfile string      Set logfile
      --quiet               Do not output to stdout
```

### SEE ALSO

* [elemental](elemental.md)	 - Elemental

