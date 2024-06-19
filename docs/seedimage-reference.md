---
sidebar_label: SeedImage reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/seedimage-reference"/>
</head>

# SeedImage reference

A `SeedImage` resource allows to build an installation media that can be used to install Elemental onto a node.
It requires a `baseImage`, i.e., a URL to an Elemental installation ISO or node container image, and a `registrationRef` reference to a `MachineRegistration` resource, from which the registration part of the Elemental configuration is extracted and injected in the media to produce the final *seed image*.
It is also possible to inject customizations in the `cloud-config` field. Both yip and cloud-init syntax are supported. See the [Cloud Config Reference](cloud-config-reference.md) for full information.

Once the seed image is ready, the download URL is shared in the `.status.downloadURL` field.
It stays available for download for `cleanupAfterMinutes` minutes (default is `60`, 1 hour), after which it is deleted.
Setting `retriggerBuild` to `true` retriggers the seed image build process while setting `cleanupAfterMinutes` to `0` keeps the seed image around till the `SeedImage` resource is deleted.

The `SeedImage` resource also has a `type` field which can be set to either `iso`, to build an ISO, or `raw` to build a raw disk image. Raw disk images can be copied directly to the target drive and on first boot will automatically boot into a recovery partition to expand the drive to use the available disk space and register the node, after which it will reboot the same way as for the ISO installation.

If no `BuildContainer` is specified for the seed-image it will be automatically filled in based on default values and `type`.

Building a SeedImage for a different platform is accomplished using the `targetPlatform` field. The platform is specified using `os/arch`, for example (`linux/amd64` or `linux/arm64`). By default the image will be built for the same platform that the operator is hosted on.

:::warning seed images may fill up local storage
The seed images are kept on the node's local storage: pay attention to the number of `SeedImage` resources you start concurrently and to the ones you may leave around with the auto-cleanup feature disabled (`cleanupAfterMinutes` = `0`) as you may exhaust the storage on your cluster nodes.
:::

The `SeedImage` resource tracks the seed image build process through two status conditions:
- **Ready**: tracks the creation of all the required child resources that perform the actual build process.
- **SeedImageReady**: tracks the status of the build process in the child resources.


<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: SeedImage
  metadata:
    name: ...
    namespace: ...
  spec:
    type: ...
    baseImage: ...
    targetPlatform: ...
    buildContainer:
      name: ...
      image: ...
      command: [...]
      args: [...]
      imagePullPolicy: ...
    cloud-config: ...
    registrationRef:
      name: ...
      namespace: ...
    cleanupAfterMinutes: ...
    retriggerBuild: ...
  ```
</details>

