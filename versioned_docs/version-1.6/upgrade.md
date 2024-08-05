---
sidebar_label: Upgrade
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/upgrade"/>
</head>

import ClusterTarget from "!!raw-loader!@site/examples/upgrade/upgrade-cluster-target.yaml"
import NodeSelector from "!!raw-loader!@site/examples/upgrade/upgrade-node-selector.yaml"
import UpgradeForce from "!!raw-loader!@site/examples/upgrade/upgrade-force.yaml"
import UpgradeRecovery from "!!raw-loader!@site/examples/upgrade/upgrade-recovery.yaml"
import ManagedOSVersion from "!!raw-loader!@site/examples/upgrade/upgrade-managedos-version.yaml"

# Upgrade

All components in Elemental are managed using Kubernetes. Below is how
to use Kubernetes approaches to upgrade the components.

## Elemental node upgrade

Elemental nodes are upgraded with the <Vars name="elemental_operator_name" />. Refer to the
[<Vars name="elemental_operator_name" />](elementaloperatorchart-reference.md) documentation for complete information.

Upgrade can be achieve either with CLI or UI:

- [Command Line Interface](#upgrade-via-command-line-interface)
- [User Interface](#upgrade-via-user-interface)
## Upgrade via command line interface

There are two ways of selecting nodes for upgrading. Via a cluster target, which will match ALL nodes in a cluster that matches our
selector or via node selector, which will match nodes based on the node labels. Node selector allows us to be more targeted with the upgrade
while cluster selector just selects all the nodes in a matched cluster.  

Updating an existing `ManagedOSImage` will trigger a new upgrade cycle, to reconcile the configured image (or image version) to all targeted nodes.  

<Tabs>
<TabItem value="clusterTarget" label="With 'clusterTarget'" default>
You can target nodes for an upgrade via a `clusterTarget` by setting it to the cluster name that you want to upgrade.
All nodes in a cluster that matches that name will match and be upgraded.

<CodeBlock language="yaml" title="upgrade-cluster-target.yaml" showLineNumbers>{ClusterTarget}</CodeBlock>

</TabItem>
<TabItem value="nodeSelector" label="With nodeSelector">
You can target nodes for an upgrade via a `nodeSelector` by setting it to the label and value that you want to match.
Any nodes containing that key with the value will match and be upgraded.

<CodeBlock language="yaml" title="upgrade-node-selector.yaml" showLineNumbers>{NodeSelector}</CodeBlock>

</TabItem>
<TabItem value="forceUpgrade" label="With FORCE flag">
When upgrading to an older version or the same version that is already running the upgrade-procedure will be skipped.

It is possible to force upgrades to older versions by setting the FORCE environment variable as shown below.

<CodeBlock language="yaml" title="upgrade-force.yaml" showLineNumbers>{UpgradeForce}</CodeBlock>

</TabItem>

<TabItem value="recoveryUpgrade" label="With UPGRADE_RECOVERY flag">
You can decide upgrade the Recovery partition when upgrading the system, or alternatively to upgrade the Recovery partition only.

<CodeBlock language="yaml" title="upgrade-recovery.yaml" showLineNumbers>{UpgradeRecovery}</CodeBlock>

</TabItem>
</Tabs>

### Selecting source for upgrade 

<Tabs>
<TabItem value="osImage" label="Via 'osImage'">

Just specify an OCI image on the `osImage` field

<CodeBlock language="yaml" title="upgrade-cluster-target.yaml" showLineNumbers>{ClusterTarget}</CodeBlock>

</TabItem>
<TabItem value="managedOSVersion" label="Via 'ManagedOSVersion'">

In this case we use the auto populated `ManagedOSVersion` resources to set the wanted `managedOSVersionName` field.
See section [Managing available versions](#managing-available-versions) to understand how the `ManagedOSVersion` are managed.

<CodeBlock language="yaml" title="upgrade-managedos-version.yaml" showLineNumbers>{ManagedOSVersion}</CodeBlock>

</TabItem>
</Tabs>

:::warning Warning
If both `osImage` and `ManagedOSVersion` are defined in the same `ManagedOSImage` be aware that `osImage` takes precedence.
:::

### Managing available versions

It is possible to create [ManagedOSVersions](./managedosversion-reference.md) directly, or to subscribe to [ManagedOSVersionChannels](./managedosversionchannel-reference.md) to automatically sync `ManagedOSVersions` from them.  

For more details and a list of available channels, or to even make your own, please read the [documentation](./channels.md).  

## Upgrade via user interface

To upgrade via the UI, you have to go in the Elemental Advanced menu, then click on `Update Groups`.

Choose a name, select clusters to target and choose between the two upgrade ways:

![Elemental Upgrade Menu](images/upgrade-ui-menu.png)


<Tabs>

<TabItem value="managedOSVersion" label="Via Managed OS Version">

In this case, a `OS Version Channels` is used to auto populated `OS Versions` resources.

The channel bellow is provide by us but you can bring your own channel as well.

See section [Managing available versions](#managing-available-versions) to understand how the `ManagedOSVersion` are managed.

![Create OS Version Channel](images/upgrade-ui-version-channel.png)

After a short syncing time, you will see your `OS Versions` appears in the `OS Versions` menu.

![Elemental OS Version menu](images/upgrade-ui-os-version.png)

Finally, you can select the `OS Versions` when you create your `Upgrade Group` according to the following screenshot:

![Select OS Version in Upgrade Group](images/upgrade-ui-upgrade-group-channel.png)

</TabItem>
<TabItem value="imageFromRegistry" label="Via Image from registry">

Just specify an OCI image on the `Image path` field to upgrade to:

![Upgrade via Image Registry](images/upgrade-ui-image-registry.png)

</TabItem>
</Tabs>

Click on the `Create` button to start the upgrade process, if you have multiple nodes, the upgrade will be done sequentially node by node.
