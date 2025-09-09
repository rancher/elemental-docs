---
sidebar_label: Channels
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/channels"/>
</head>

import MangedOSVersionChannelJson from "!!raw-loader!@site/examples/upgrade/managed-os-version-channel-json.yaml"
import ManagedOSVersionChannelCustom from "!!raw-loader!@site/examples/upgrade/managed-os-version-channel-custom.yaml"
import Versions from "../examples/upgrade/versions.raw!=!raw-loader!@site/examples/upgrade/versions.json"

## Channels

The <Vars name="elemental_operator_name"/> allows subscription to one or more [ManagedOSVersionChannels](./managedosversionchannel-reference.md), to automatically populate a list of [ManagedOSVersions](./managedosversion-reference.md) ready to be consumed to build new ISOs using a [SeedImage](./seedimage-reference.md), or to upgrade existing Elemental nodes to new OS versions using the [ManagedOSImage](./managedosimage-reference.md).  

A channel is normally distributed as an OCI container image, but it is also possible to reference the URI of a JSON file directly containing a list of `ManagedOSVersion`. Note that the best practice is to distribute channels using images, so that distribution is consistent with all other images needed by the <Vars name="elemental_operator_name"/>. This can be beneficial for example when deploying in an Airgapped environment.

<Tabs>
<TabItem value="jsonSyncer" label="Json syncer">

This syncer will fetch a json from url and parse it into valid `ManagedOSVersion` resources.

<CodeBlock language="yaml" title="managed-os-version-channel-json.yaml" showLineNumbers>{MangedOSVersionChannelJson}</CodeBlock>

</TabItem>
<TabItem value="customSyncer" label="Custom syncer">

A custom syncer allows more flexibility on how to gather `ManagedOSVersion` by allowing custom commands with custom images.

This type of syncer allows to run a given command with arguments and env vars in a custom image and output a json file to `/data/output`.
The generated data is then automounted by the syncer and then parsed so it can gather create the proper versions.

Elemental project provides channels to list all `ManagedOSVersions` released as a custom syncer.  
See the channel resource definition below:

<CodeBlock language="yaml" title="managed-os-version-channel.yaml" showLineNumbers>{ManagedOSVersionChannelCustom}</CodeBlock>

</TabItem>
</Tabs>

### Available Channels

Elemental maintains a list of channels that can be used out of the box.  

| Base OS          | BaseOS Version | Flavor     | Channel URI                                                        |
|------------------|----------------|------------|--------------------------------------------------------------------|
| SL Micro         | 6.1            | Base       | registry.suse.com/rancher/elemental-channel/sl-micro:6.1-base      |
| SL Micro         | 6.1            | Bare-metal | registry.suse.com/rancher/elemental-channel/sl-micro:6.1-baremetal |
| SL Micro         | 6.1            | KVM        | registry.suse.com/rancher/elemental-channel/sl-micro:6.1-kvm       |
| SL Micro         | 6.1            | RT         | registry.suse.com/rancher/elemental-channel/sl-micro:6.1-rt        |

#### Finding Elemental channels

Using crane we can find the channels maintained:

```
$ crane ls -O registry.suse.com/rancher/elemental-channel/sl-micro
6.0-baremetal
6.0-base
6.0-kvm
6.0-rt
6.1-baremetal
6.1-base
6.1-kvm
6.1-rt
<snip>
```

### Flavors

Elemental distributes different OS flavors that can better fit specific use cases.

| Flavor     | Description                                                                       | Reference                                                                                                |
|------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Base       | A minimal image that can be used as base to build custom images.                  | [Source](https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-base-os/Dockerfile)      |
| Bare-metal | Contains bare-metal and usability packages. Can be used for any generic workload. | [Source](https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-baremetal-os/Dockerfile) |
| KVM        | Ready to be used with KVM. Contains QEMU Guest agent by default.                  | [Source](https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-kvm-os/Dockerfile)       |
| RT         | Like bare-metal images, but includes a Real-Time kernel.                          | [Source](https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-rt-os/Dockerfile)        |

### Channels lifecycle and best practices

Once a new `ManagedOSVersionChannel` is created, the <Vars name="elemental_operator_name"/> will periodically sync the channel provided JSON list, and convert it to new `ManagedOSVersions`.  
All synced `ManagedOSVersions` will be owned by the `ManagedOSVersionChannel`. Deleting the `ManagedOSVersionChannel` will lead to the deletion of all `ManagedOSVersions` on cascade.  

Note that the `ManagedOSVersionChannel` supports automatic clean up of no longer in sync `ManagedOSVersions`, when the `ManagedOSVersionChannel.spec.deleteNoLongerInSyncVersions` option is enabled.  

When a `ManagedOSVersion` is scheduled for deletion, a finalizer will make sure that there is no active reference on any `ManagedOSImage`.  

If a `ManagedOSVersion` can not be deleted, you can find out by which resources it is referenced:  

```bash
kubectl -n fleet-default get managedosimages -l elemental.cattle.io/managed-os-version-name=my-deleted-os-version
```

When using multiple channels it's important to keep a proper naming strategy to always have a quick, human readable reference on the owned `ManagedOSVersions`.  
It is recommended to name any channel as: `{BaseOS}-{BaseOSVersion}-{Flavor}`.  

This should allow the user to use the `ManagedOSVersion` name as the specific Elemental build version of the image, while keeping a reference on the Base OS and Base OS version from the parent channel.  
On the Rancher UI this will look something like the following image:  

![Channel naming](images/channel-naming.png)

### Making your own Channels

The only requirement to make your own custom syncer is to make it output a JSON file to `/data/output` and keep the correct JSON structure.  

The file is a JSON array containing ISO and Container entries.  
Each entry in the array is mapped 1:1 with a [ManagedOSVersion](./managedosversion-reference.md) object.  

`"type": "iso"` entries must contain a bootable Elemental ISO and are used by [SeedImages](./seedimage-reference.md), while `"type": "container"` entries are used by [ManagedOSImage](./managedosimage-reference.md) for Elemental upgrades.  

If in doubt, the [elemental-channels](https://github.com/rancher-sandbox/elemental-channels) project can be used as a reference implementation on how to build and maintain your own channels.

When creating new entries, be mindful of the naming strategy you choose, in order to avoid collisions with other channels, since they may end up syncing different `ManagedOSVersion` with the same name.  
A best practice is to use the convention: `{Flavor}-{Version}-{Type}`  
A sample of the JSON format is as follows:  

<CodeBlock language="json" title="versions.json" showLineNumbers>{Versions}</CodeBlock>
