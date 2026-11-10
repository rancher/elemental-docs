---
sidebar_label: Kubernetes versions
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/kubernetesversions"/>
</head>

## Valid Versions

The list of valid versions for the `kubernetesVersion` field can be determined
from the Rancher metadata using the following commands. Replace the example Rancher version with your target version.

__k3s:__
```bash showLineNumbers
curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.15/data/data.json | jq -r '.k3s.releases[].version'
```
__rke2:__
```bash showLineNumbers
curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.15/data/data.json | jq -r '.rke2.releases[].version'
```
