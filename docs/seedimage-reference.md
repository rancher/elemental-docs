---
sidebar_label: SeedImage reference
title: ''
---

# SeedImage reference

A `SeedImage` definition is used to build an ISO that can be used to install Elemental Teal onto a node.

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
      apiVersion: elemental.cattle.io/v1beta1
      kind: MachineRegistration
      name: ...
      namespace: ...
  ```
</details>

