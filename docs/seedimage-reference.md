---
sidebar_label: SeedImage reference
title: ''
---

# SeedImage reference

A `SeedImage` resource allows to build an ISO that can be used to install Elemental onto a node.  
It requires a `baseImage`, i.e., a URL to an Elemental installation ISO, and a `registrationRef` reference to a `MachineRegistration` resource, from which the registration part of the Elemental configuration is extracted and injected in the ISO to produce the final *seed image*.  
It is also possible to inject ISO customizations in the `cloud-config` field.

Once the seed image is ready, the download URL is shared in the `.status.downloadURL` field.
It stays available for download for `cleanupAfterMinutes` minutes (default is `60`, 1 hour), after which it is deleted.  
Setting `retriggerBuild` to `true` retriggers the seed image build process while setting `cleanupAfterMinutes` to `0` keeps the seed image around till the `SeedImage` resource is deleted.

:::info
The seed images are kept on the node's local storage: pay attention to the number of `SeedImage` resources you start concurrently and to the ones you may leave around with the auto-cleanup feature disabled (`cleanupAfterMinutes` = `0`) as you may exhaust the storage on your Cluster Nodes.
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
    baseImage: ...
    cloud-config: ...
    registrationRef:
      name: ...
      namespace: ...
    cleanupAfterMinutes: ...
    retriggerBuild: ...
  ```
</details>

