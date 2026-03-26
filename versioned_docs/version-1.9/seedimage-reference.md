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

Building a SeedImage for a different platform is accomplished using the `targetPlatform` field. The platform is specified using `os/arch`, for example (`linux/x86_64` or `linux/aarch64`). By default the image will be built for the same platform that the operator is hosted on.

:::warning seed images may fill up local storage
The seed images are kept on the node's local storage: pay attention to the number of `SeedImage` resources you start concurrently and to the ones you may leave around with the auto-cleanup feature disabled (`cleanupAfterMinutes` = `0`) as you may exhaust the storage on your cluster nodes.
:::

## SeedImageSpec reference

| Key                 | Type        | Default value | Description                                                                                                                                    |
|---------------------|-------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| baseImage           | string      | empty         | The base Elemental image used to build the seed image.                                                                                         |
| registrationRef     | object ref. | null          | A reference to a MachineRegistration that will be used for all installed machines to register.                                                 |
| buildContainer      | object      | null          | Settings for a custom container used to generate the downloadable image. (See [documentation](#buildcontainer)).                               |
| cleanupAfterMinutes | int         | 60            | The time after which the built seed image will be cleaned up. Active downloads will finish before the image is removed.                        |
| retriggerBuild      | bool        | false         | Trigger to build again a cleaned up seed image.                                                                                                |
| size                | string      | 6Gi           | Specifies the size of the volume used to store the image.                                                                                      |
| type                | string      | iso           | Specifies the type of seed image to built. `iso` or `raw`. (See [documentation](#iso-and-raw-images))                                          |
| targetPlatform      | string      | empty         | Specifies the target platform for the built image. Example: `linux/x86_64` or `linux/aarch64`. (See [documentation](#multi-platform-support)). |
| cloud-config        | object      | null          | Contains cloud-config data to be included in the generated image. (See [documentation](./cloud-config-reference.md)).                          |

### BuildContainer

The `buildContainer` settings can be used to customize the `build` init container within the `SeedImage`'s pod.  
This could be the case for example when building custom Elemental images.  

```yaml
buildContainer:
  name: "custom-build"
  image: my.registry.com/elemental-custom-builder:1.2.3
  command:
    - build-image
  args:
    - foo
    - bar
  imagePullPolicy: Always
```

Note that the container will additionally have two volumes mounted at `/iso` and `/overlay`.  
The SeedImage build process expects the build container to place the build artifact in `/iso/$(ELEMENTAL_OUTPUT_NAME)`.  

Configuration files are available in:

- `/overlay/reg/livecd-cloud-config.yaml`: A configuration file that can be used by `elemental-register` to register the machine.

- `/overlay/iso-config/cloud-config.yaml`: The cloud-config defined in `SeedImage.spec.cloud-config`

The following list of environment variables can also be used within the custom build container:

- `ELEMENTAL_DEVICE`: The `MachineRegistration.spec.config.elemental.install.device` value.
- `ELEMENTAL_REGISTRATION_URL`: The unique URL of the MachineRegistration.
- `ELEMENTAL_BASE_IMAGE`: The base image defined in the `SeedImage`.
- `ELEMENTAL_OUTPUT_NAME`: The expected file name of the build artifact.

### ISO and Raw images

The `SeedImage` is able to build `iso` or `raw` image types.  
Note that Elemental ships two different flavors of images, `iso` or `container` types. See [ManagedOSversion's type](./managedosversion-reference.md#managedosversionspec-reference).

When building a `iso` `SeedImage`, you can use an `iso` Elemental image.  
`iso` images contain a pre-built `.iso` artifact. This is the default Elemental way of shipping official ISOs, so that they don't need to be rebuilt every time you define a `SeedImage`.

<details>
  <summary>ISO SeedImage example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: SeedImage
  metadata:
    name: fire-iso
    namespace: fleet-default
  spec:
    type: iso
    baseImage: registry.suse.com/suse/sl-micro/6.0/baremetal-iso-image:2.1.1-3.36
    registrationRef:
      apiVersion: elemental.cattle.io/v1beta1
      kind: MachineRegistration
      name: fire-nodes
      namespace: fleet-default
  ```

</details>

Alternatively, when building a `raw` `SeedImage`, you should use `container` Elemental images. These images are also used during the upgrade process (See: [ManagedOSImage](./managedosimage-reference.md)), but can be used to build `raw` `SeedImages` as well.  

<details>
  <summary>Raw SeedImage example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: SeedImage
  metadata:
    name: fire-raw
    namespace: fleet-default
  spec:
    type: raw
    baseImage: registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:2.1.1-3.29
    registrationRef:
      apiVersion: elemental.cattle.io/v1beta1
      kind: MachineRegistration
      name: fire-nodes
      namespace: fleet-default
  ```

</details>

### Multi-Platform support

Elemental ships `linux/x86_64` and `linux/aarch64` images for most flavors.  
In order to determine whether a `ManagedOSVersion` image supports both platforms, you can verify the `ManagedOSVersion.spec.metadata.platform` values. (See [documentation](./managedosversion-reference.md#metadata)).

When defining a `SeedImage`, you can then use this value for the image's `targetPlatform`.  
Leaving the `targetPlatform` empty, will default to the platform where the `elemental-operator` is running.  

<details>
  <summary>Raw aarch64 SeedImage example</summary>

  ```yaml showLineNumbers
  apiVersion: elemental.cattle.io/v1beta1
  kind: SeedImage
  metadata:
    name: fire-raw-aarch64
    namespace: fleet-default
  spec:
    targetPlatform: linux/aarch64
    type: raw
    baseImage: registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:2.1.1-3.29
    registrationRef:
      apiVersion: elemental.cattle.io/v1beta1
      kind: MachineRegistration
      name: fire-nodes
      namespace: fleet-default
  ```

</details>

## Downloadable URLs

The `SeedImage` resource tracks the seed image build process through two status conditions:

- **Ready**: tracks the creation of all the required child resources that perform the actual build process.
- **SeedImageReady**: tracks the status of the build process in the child resources.

Alternatively it is also possible to wait for the `SeedImage` pod to be ready:

```bash
kubectl wait --for=condition=ready pod -n fleet-default fire-img
```

Waiting on Ready conditions is a best practice before downloading any artifact.

Once a `SeedImage` is ready, the `.status.downloadURL` will contain the downloadable URL.  
Note that the URL will use the same endpoint as Rancher, so beware of HTTPS validation when using self signed certificates.  

```bash
kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}"
```

The checksum of the image is also available to verify the download was correct:

```bash
kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.checksumURL}"
```
