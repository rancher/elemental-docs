---
title: "Upgrading"
sidebar_label: "Upgrading"
---

Elemental and every derivative can upgrade, rollback or just switch to different versions in runtime by using the toolkit installed inside the image.

To upgrade an installed system, just run `elemental upgrade` and reboot. 

This will perform an upgrade based on the default derivative configuration for the image. See [general configuration](../customizing/general_configuration) on how to configure defaults when building a derivative.

"Upgrades" are not carried over the usual way of treating each single package individually: Elemental considers the container image as a new system where to boot into. It will pull a new container image during this phase, which will be booted on the next reboot.

## Upgrade to a specific container image

To specify a specific container image to upgrade to instead of the regular upgrade channels, run `elemental upgrade --system.uri imagei-uri`.

_Note_ by default `elemental upgrade --system.uri` runs an mtree checksum verificatiom (requires images manifests generated with mtree separately). To disable image checksum verification, run `elemental upgrade --verify --system.uri`.

## Integration with System Upgrade Controller

If running a kubernetes cluster on the `Elemental` system, you can leverage the [system-upgrade-controller](https://github.com/rancher/system-upgrade-controller) to trigger upgrades to specific image versions, for example:

```yaml
---
apiVersion: upgrade.cattle.io/v1
kind: Plan
metadata:
  name: elemental-upgrade
  namespace: system-upgrade
  labels:
    k3s-upgrade: server
spec:
  concurrency: 1
  version:  fleet-sample # Image tag
  nodeSelector:
    matchExpressions:
      - {key: k3s.io/hostname, operator: Exists}
  serviceAccountName: system-upgrade
  cordon: true
#  drain:
#    force: true
  upgrade:
    image: quay.io/costoolkit/test-images # Image upgrade reference
    command:
    - "/usr/sbin/suc-upgrade"
```

See also [trigger upgrades with fleet](../tutorials/trigger_upgrades_with_fleet)

## From ISO

The ISO can be also used as a recovery medium: type `elemental upgrade` from a LiveCD. It will then try to upgrade the image of the active partition installed in the system.

## How it works
Elemental during installation sets two `.img` images files in the `COS_STATE` partition:
- `/cOS/active.img` labeled `COS_ACTIVE`: Where `Elemental` typically boots from
- `/cOS/passive.img` labeled `COS_PASSIVE`: Where `Elemental` boots for fallback

Those are used by the upgrade mechanism to prepare and install a pristine `Elemental` each time an upgrade is attempted.
