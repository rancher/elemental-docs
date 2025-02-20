---
sidebar_label: Elemental the command line way
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/quickstart-cli"/>
</head>

import Cluster from "!!raw-loader!@site/examples/quickstart/cluster.yaml"
import Registration from "!!raw-loader!@site/examples/quickstart/registration.yaml"
import RegistrationRPi from "!!raw-loader!@site/examples/quickstart/rpi-registration.yaml"
import Selector from "!!raw-loader!@site/examples/quickstart/selector.yaml"
import Prereqs from './partials/_quickstart-prereqs.md'
import Operator from './partials/_elemental-operator-install.md'
import SeedImage from "!!raw-loader!@site/examples/quickstart/seedimage.yaml"

# Elemental the command line way

Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher 
with the only help of an Elemental ISO.

<Prereqs />

<Operator />

## Prepare your kubernetes resources

Node deployment starts with a `MachineRegistration`, identifying a set of machines sharing the same configuration (disk drives, network, etc.).

The `MachineRegistration` is needed to perform the deployment of the Elemental OS on the target hosts. When booting up, each host registers to the Elemental Operator which tracks the new host with a `MachineInventory` resource.

Then it continues with having a Cluster resource that uses a `MachineInventorySelectorTemplate` to know which machines are for that cluster.

This selector is a simple matcher based on labels set in the `MachineInventory`, so if your selector is matching on the label `cluster-id` with a value `cluster-id-val`
and your `MachineInventory` has that same `cluster-id`:`cluster-id-val` label, it will match and be bootstrapped as part of the cluster.

In this quickstart we are going to deploy the resources to provision a cluster named *volcano* that will match on `MachineInventory`s with the label *element*:*fire*.

<Tabs>
<TabItem value="manualYaml" label="Manually creating the resource yamls" default>

You will need to create the following files:

<CodeBlock language="yaml" title="selector.yaml" showLineNumbers>{Selector}</CodeBlock>

As you can see this is a very simple selector that looks for `MachineInventory`s having a label with the key `element` and the value `fire`.

<CodeBlock language="yaml" title="cluster.yaml" showLineNumbers>{Cluster}</CodeBlock>

As you can see the `machineConfigRef` is of kind `MachineInventorySelectorTemplate` with the name `fire-machine-selector`: it matches the selector we created.

You can get more information about cluster options like [`machineGlobalConfig`](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineglobalconfig) or [`machineSelectorConfig`](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineselectorconfig) directly in the [Rancher Manager documentation](https://ranchermanager.docs.rancher.com).

<Tabs>
<TabItem value="normalRegistration" label="Registration" default>
<CodeBlock language="yaml" title="registration.yaml" showLineNumbers>{Registration}</CodeBlock>
</TabItem>
<TabItem value="rpiRegistration" label="Registration for Raspberry Pi" default>
<CodeBlock language="yaml" title="rpi-registration.yaml" showLineNumbers>{RegistrationRPi}</CodeBlock>

For deployment on Raspberry Pi, you need to enable emulated TPM 
(except you have [a hardware TPM for Raspberry Pi](https://thepihut.com/products/letstrust-tpm-for-raspberry-pi)).
You also need to disable writing to the EFI store (since Raspberry Pi doesn't have one) via `disable-boot-entry: true`.

</TabItem>
</Tabs>

The `MachineRegistration` defines the registration and installation configuration. Once created, the Elemental operator exposes a unique URL to be used with the `elemental-register` binary to reach out to the management cluster and register the machine during installation: if the registration is successful, the operator creates a `MachineInventory` tracking the machine, which can be used to provision the machine as a node of our cluster.
We define the label matching our selector here, although it can also be added later to the created `MachineInventory`s.



:::warning warning
Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration (i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...).

The SD-card on a Raspberry Pi is usually `/dev/mmcblk0`.
:::

<Tabs>
<TabItem value="seedImagex86" label="Seed Image (x86_64)" default>
<CodeBlock language="yaml" title="seedimage.yaml" showLineNumbers>{SeedImage}</CodeBlock>

The `SeedImage` is required to generate the *seed image* (like a bootable ISO) that will boot and start the Elemental provisioning on the target machines.

Now that we have defined all the configuration files let's apply them to create the proper resources in Kubernetes:

```shell showLineNumbers
kubectl apply -f selector.yaml 
kubectl apply -f cluster.yaml 
kubectl apply -f registration.yaml
kubectl apply -f seedimage.yaml
```

</TabItem>
<TabItem value="seedImagerpi" label="Seed Image for Raspberry Pi" default>

The `SeedImage` resource, which automates the creation of an Elemental bootable image (the *seed image*), does not support Raspberry Pi ISOs yet (click [here](raspi-disk.md) for a guide to build a raw disk image).

We will generate a *seed image* manually in the [next section](quickstart-cli.md#preparing-the-installation-seed-image).

Now that we have defined all the configuration files let's apply them to create the proper resources in Kubernetes:

```shell showLineNumbers
kubectl apply -f selector.yaml 
kubectl apply -f cluster.yaml 
kubectl apply -f registration.yaml
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="repofiles" label="Using quickstart files from Elemental docs repo directly">

You can directly apply the quickstart example resource files from the [Elemental docs repository](https://github.com/rancher/elemental-docs).

:::warning warning
The quickstart example resource files assume the default storage of the target host to be mapped to the `/dev/sda`.
If your host storage device file is different, you have to change the registration.yaml file before applying it, changing the `config.elemental.install.device` accordingly.
:::

```bash showLineNumbers
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/selector.yaml
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/cluster.yaml
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/registration.yaml
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/seedimage.yaml (not for aarch64 yet)
```

</TabItem>
</Tabs>

## Preparing the installation (seed) image


This is the last step: you need an Elemental seed image that includes the initial registration config, so it can be auto registered, installed and fully deployed as part of your cluster.

:::note note
The initial registration config file is generated when you create a `Machine Registration`.

You can download it with:

```shell
wget --no-check-certificate `kubectl get machineregistration -n fleet-default fire-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml
```
:::

The contents of the registration config file are nothing more than the registration URL that the node needs to register, the proper server certificate and few options for the registration process.

Once generated, a seed image can be used to provision any number of machines.

<Tabs>
<TabItem value="download" label="Downloading the quickstart ISO">

The seed image created by the `SeedImage` resource above can be downloaded as an ISO via the following script:

```shell showLineNumbers
kubectl wait --for=condition=ready pod -n fleet-default fire-img
wget --no-check-certificate `kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}"` -O elemental.x86_64.iso
```

The first command waits for the ISO to be built and ready, the second one downloads it in the current directory with the name `elemental-x86_64.iso`.

</TabItem>
<TabItem value="manual_raw" label="Preparing the seed image (aarch64) manually">

Elemental's support for Raspberry Pi is primarily for demonstration purposes at this point. Therefore the installation process is modelled similar to x86-64. You boot from a seed image (an USB stick in this case) and install to a storage medium (SD-card for Raspberry Pi).

#### Retrieving the prebuilt seed image

```shell showLineNumbers
wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable/containers/rpi.raw
```

##### Verifying the download

In order to verify the integrity of the downloaded artifacts, you
should do a checksum verification:


```shell showLineNumbers
wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable/containers/rpi.raw.sha256
sha256sum -c rpi.raw.sha256
```

This should print `rpi.raw: OK` as output.

#### Injecting the registration information

Adding the `initial-registration.yaml` isn't scripted yet. This is still a manual process:

The written USB stick will have two partitions. `RPI_BOOT` contains the boot loader files and `COS_LIVE` the Elemental files.
Mount the `COS_LIVE` partition and write `initial-registration.yaml` as `livecd-cloud-config.yaml` to this partition.

If you've mounted the USB stick with a file manager, this command should work to copy the registration information:

```shell showLineNumbers
sudo cp initial-registration.yaml /run/media/$USER/COS_LIVE/livecd-cloud-config.yaml
```

If you prefer using some CLI tools:

```shell showLineNumbers
IMAGE=rpi.raw
DEST=$(mktemp -d)

SECTORSIZE=$(sfdisk -J ${IMAGE} | jq '.partitiontable.sectorsize')
DATAPARTITIONSTART=$(sfdisk -J ${IMAGE} | jq '.partitiontable.partitions[1].start')
sudo mount -o rw,loop,offset=$((${SECTORSIZE}*${DATAPARTITIONSTART})) ${IMAGE} ${DEST}
sudo cp initial-registration.yaml ${DEST}/livecd-cloud-config.yaml
sudo umount ${DEST}
rmdir ${DEST}
```

#### Writing the seed image to a USB stick

The `.raw` image needs to be written to a USB stick to boot from. This can be done with `dd` on the Linux command line if you're comfortable with this command.
[openSUSE](https://www.opensuse.org) has nice instructions on how to write an image to a storage medium for [Linux](https://en.opensuse.org/SDB:Live_USB_stick),
[Windows](https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows), and [OS X](https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS).

#### Booting the Raspberry Pi

Now unmount the USB stick and plug it into your Raspberry Pi.

Plug a large (32 GB or more) and **fast** (!!) micro SD-card into the respective slot.

Connect the system to ethernet.

A powercycle will reboot the Pi. Everything else is identical to x86-64.

:::warning warning
Make sure the micro SD-card is unpartitioned. Otherwise the Pi bootloader will try to boot from it and fail.
:::

</TabItem>
</Tabs>

You can now boot your nodes with this image and they will:

- Register with the registrationURL given and create a per-machine `MachineInventory`
- Install SLE Micro to the given device
- Reboot

### Selecting the right machines to join a cluster

The `MachineInventorySelectorTemplate` selects the machines needed to provision the cluster from the `MachineInventory`s having the *element:fire* label.
We have added the *element*:*fire* label in the `MachineRegistration` `machineInventoryLabels` map, so all the `MachineInventory`s originated from it already have the label.
One could anyway skip the label from the `MachineRegistration` and add it later:

```shell showLineNumbers
kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") element=fire
```

As soon as `MachineInventory`s with the *element*:*fire* are present, the corresponding machines auto-deploy the cluster via the chosen provider (k3s/rke).

After a few minutes your new cluster will be fully provisioned!!

## How can I choose the kubernetes version and deployer for the cluster?

In your cluster.yaml file there is a key in the `Spec` called `kubernetesVersion`. That sets the version and deployer that will be used for the cluster,
for example Kubernetes`v1.24.8` for rke2 would be `v1.24.8+rke2r1` and for k3s `v1.24.8+k3s1`.

To see all compatible versions check the [Rancher Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/) PDF for rke/rke2/k3s versions and their components.

You can also check our [Version doc](kubernetesversions.md) to know how to obtain those versions.

Check our [Cluster Spec](cluster-reference.md) page for more info about the `Cluster` resource.

## How can I follow what is going on behind the scenes?

You should be able to follow along what the machine is doing via:

- During ISO boot:
  - ssh into the machine (user/pass: root/ros):
    - running `journalctl -f -t elemental` shows you the progress of the registration (*elemental-register*) and the installation of Elemental (*elemental install*).
- Once the system is installed:
  - On the Rancher UI -> `Cluster Management` allows you to see your new cluster and the `Provisioning Log` in the cluster details
  - ssh into the machine (user/pass: Whatever your configured on the registration.yaml under `Spec.config.cloud-config.users`):
    - running `journalctl -f -u elemental-system-agent` shows the output of the initial elemental config and the installation of the `rancher-system-agent`
    - running `journalctl -f -u rancher-system-agent` shows the output of the bootstrap of cluster components like k3s
    - running `journalctl -f -u k3s` shows the logs of the k3s deployment

## Optional: Install the Elemental UI extension via CLI

Create and apply a new ClusterRepo to add the official Rancher Extensions repository.
```
apiVersion: catalog.cattle.io/v1
kind: ClusterRepo
metadata:
  name: rancher-ui-charts
spec:
  gitBranch: main
  gitRepo: https://github.com/rancher/ui-plugin-charts
```

Add a helm repo for the Rancher UI extensions charts.
```
helm repo add rancher-ui-plugins https://raw.githubusercontent.com/rancher/ui-plugin-charts/main/
```

Install the Elemental UI extension.
```
helm install elemental rancher-ui-plugins/elemental -n cattle-ui-plugin-system
```
