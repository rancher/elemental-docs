---
sidebar_label: Local Node Labels
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/local-node-labels"/>
</head>

# Local Node Labels

Node labels can now also be specified in a local file on each node (/etc/elemental/labels.yaml). This file will be read during registration and used to set extra labels in the inventory.

The file can be generated using yip, ignition or during installation.

:::info
If the same key is specified for both local and MachineRegistration labels the MachineRegistration takes preference.
:::

import LabelsYaml from "!!raw-loader!@site/examples/labeltemplates/labels.yaml"

<CodeBlock language="yaml" title="/etc/elemental/labels.yaml" showLineNumbers>
{LabelsYaml}
</CodeBlock>
