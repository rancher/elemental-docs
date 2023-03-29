---
sidebar_label: Elemental the command line way
title: ''
---

import Cluster from "!!raw-loader!@site/examples/quickstart/cluster.yaml"
import Registration from "!!raw-loader!@site/examples/quickstart/registration.yaml"
import RegistrationRPi from "!!raw-loader!@site/examples/quickstart/rpi-registration.yaml"
import Selector from "!!raw-loader!@site/examples/quickstart/selector.yaml"
import Prereqs from './partials/_quickstart-prereqs.md'
import Operator from './partials/_elemental-operator-install.md'

# Elemental the command line way

Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher 
with the only help of an Elemental Teal iso

<Prereqs />

<Operator />

## Prepare your kubernetes resources

Node deployment starts with a `MachineRegistration`, identifying a set of machines sharing the same configuration (disk drives, network, etc.)

Then it continues with having a Cluster resource that uses a `MachineInventorySelectorTemplate` to know which machines are for that cluster.

This selector is a simple matcher based on labels set in the `MachineInventory`, so if your selector is matching the `cluster-id` key with a value `myId`
and your `MachineInventory` has that same key with that value, it will match and be bootstrapped as part of the cluster.

<Tabs>
<TabItem value="manualYaml" label="Manually creating the resource yamls" default>

You will need to create the following files.

<CodeBlock language="yaml" title="selector.yaml" showLineNumbers>{Selector}</CodeBlock>

As you can see this is a very simple selector that checks the key `location` for the value `europe`

<CodeBlock language="yaml" title="cluster.yaml" showLineNumbers>{Cluster}</CodeBlock>

As you can see we are setting that our `machineConfigRef` is of Kind `MachineInventorySelectorTemplate` with the name `my-machine-selector`, which matches the selector we created.

You can get more informations about some cluster options like [`machineGlobalConfig`](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineglobalconfig) or [`machineSelectorConfig`](https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineselectorconfig) directly in Rancher Manager documentation.

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

This creates a `MachineRegistration` which will provide a unique URL which we will use with `elemental-register` to register
the node during installation, so the operator can create a `MachineInventory` which will be using to bootstrap the node.
See that we set the label that match our selector here already, although it can always be added later to the `MachineInventory`.



:::warning warning
Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration (i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...).

The SD-card on a Raspberry Pi is usually `/dev/mmcblk0`.
:::

Now that we have all the configuration to create the proper resources in Kubernetes just apply them

```shell showLineNumbers
kubectl apply -f selector.yaml 
kubectl apply -f cluster.yaml 
kubectl apply -f registration.yaml
```

</TabItem>
<TabItem value="repofiles" label="Using quickstart files from Elemental docs repo directly">

You can directly apply the quickstart example resource files from the [Elemental docs repository](https://github.com/rancher/elemental-docs)

:::warning warning
This assumes that your Node will have a `/dev/sda` disk available as that is the default device selected in those files.
If your node doesnt have that device you will have to manually create the registration.yaml file or download the one from the repo and modify before applying
:::

```bash showLineNumbers
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/selector.yaml
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/cluster.yaml
kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/registration.yaml
```

</TabItem>
</Tabs>

## Preparing the installation (seed) image

Now this is the last step, we need to prepare an Elemental Teal seed image that includes the initial registration config, so
it can be auto registered, installed and fully deployed as part of our cluster. The contents of the file are nothing 
more than the registration url that the node needs to register and the proper server certificate, so it can connect securely.

This seed image can then be used to provision an infinite number of machines.

Our `MachineRegistration` provides the needed config in its resource as part of its `Status.RegistrationURL`,
so we can use that url to obtain the proper yaml needed for the seed image.

<Tabs>
<TabItem value="oneLiner" label="One liner">

```shell showLineNumbers
wget --no-check-certificate `kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml
```

This will download the proper yaml from the registration URL and store it on the current directory under the `initial-registration.yaml` name.

</TabItem>
<TabItem value="explanation" label="Full explanation">

First we need to obtain the `RegistrationURL` that was generated for our `MachineRegistration`.

```bash showLineNumbers
$ kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"
https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp
```

As you can see we obtained the proper initial registration needed by `elemental-register` to register the node properly and continue with the automated installation.

Then we need to visit that URL as that will provide the URL and CA certificate for unauthenticated requests:

```bash showLineNumbers
$ curl --insecure https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp

elemental:
  registration:
    url: https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp
    ca-cert: |-
      -----BEGIN CERTIFICATE-----
      MIIBqDCCAU2gAwIBAgIBADAKBggqhkjOPQQDAjA7MRwwGgYDVQQKExNkeW5hbWlj
      bGlzdGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwHhcNMjIw
      ODA0MTA1OTE1WhcNMzIwODAxMTA1OTE1WjA7MRwwGgYDVQQKExNkeW5hbWljbGlz
      dGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwWTATBgcqhkjO
      PQIBBggqhkjOPQMBBwNCAASa8PJH7JJGT5QUPMBYnJe0j50G7dTEaDlk4xRpqVk1
      y4dloslsI0RTb6B++7nNgnLPOe2KqZfylNmVIAelrSaUo0IwQDAOBgNVHQ8BAf8E
      BAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUxp8OBfjZlnyV6pzzKqIF
      wWByvCYwCgYIKoZIzj0EAwIDSQAwRgIhAPI2XUWcnxkkBe98SGPFa1Hlncyu/FCR
      AbEYIAdUC2z+AiEA+GizukSRiiLV28wdNdKihEELy+qzi5MlVYowUuQYZsA=
      -----END CERTIFICATE-----
```

As you can see we obtained the proper initial registration needed by `elemental-register` to register the node properly and continue with the automated installation.

Now we can write down the data returned for that url into a file that we will inject into the seed image.

```yaml title="initial-registration.yaml" showLineNumbers
elemental:
  registration:
    url: https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp
    ca-cert: |-
      -----BEGIN CERTIFICATE-----
      MIIBqDCCAU2gAwIBAgIBADAKBggqhkjOPQQDAjA7MRwwGgYDVQQKExNkeW5hbWlj
      bGlzdGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwHhcNMjIw
      ODA0MTA1OTE1WhcNMzIwODAxMTA1OTE1WjA7MRwwGgYDVQQKExNkeW5hbWljbGlz
      dGVuZXItb3JnMRswGQYDVQQDExJkeW5hbWljbGlzdGVuZXItY2EwWTATBgcqhkjO
      PQIBBggqhkjOPQMBBwNCAASa8PJH7JJGT5QUPMBYnJe0j50G7dTEaDlk4xRpqVk1
      y4dloslsI0RTb6B++7nNgnLPOe2KqZfylNmVIAelrSaUo0IwQDAOBgNVHQ8BAf8E
      BAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUxp8OBfjZlnyV6pzzKqIF
      wWByvCYwCgYIKoZIzj0EAwIDSQAwRgIhAPI2XUWcnxkkBe98SGPFa1Hlncyu/FCR
      AbEYIAdUC2z+AiEA+GizukSRiiLV28wdNdKihEELy+qzi5MlVYowUuQYZsA=
      -----END CERTIFICATE-----
```

</TabItem>
</Tabs>

Now we can proceed to create the final seed image:

<Tabs>
<TabItem value="script" label="ISO (x86-64) via script">

We provide a ISO build script for ease of use that can get the final ISO and inject the `initial-registration.yaml`:

```shell showLineNumbers
wget -q https://raw.githubusercontent.com/rancher/elemental/main/.github/elemental-iso-add-registration && chmod +x elemental-iso-add-registration
```

Now that we have the script we can proceed to download the ISO and inject our configuration injected:

```shell showLineNumbers
./elemental-iso-add-registration initial-registration.yaml
```

This will generate an ISO on the current directory with the name `elemental-teal-x86_64.iso`.

</TabItem>
<TabItem value="manual" label="Preparing the seed image (aarch64) manually">

Elemental's support for Raspberry Pi is primarily for demonstration purposes at this point. Therefore the installation
process is modelled similar to x86-64. You boot from a seed image (USB stick in this case) and install to a storage medium (SD-card for Raspberry Pi).

#### Retrieving the prebuilt seed image

```shell showLineNumbers
wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Dev:/Teal53/images/rpi.raw
```

##### Verifying the download

In order to verify the integrity of the downloaded artifacts, you
should do a checksum verification:


```shell showLineNumbers
wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Dev:/Teal53/images/rpi.raw.sha256
sha256sum -c rpi.raw.sha256
```

This should print `rpi.raw: OK` as output.

#### Writing the seed image to a USB stick

The `.raw` image needs to be written to a USB stick to boot from. This can be done with `dd` on the Linux command line if you're comfortable with this command.
[openSUSE](https://www.opensuse.org) has nice instructions on how to write an image to a storage medium for [Linux](https://en.opensuse.org/SDB:Live_USB_stick),
[Windows](https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows), and [OS X](https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS).

#### Injecting the registration information

Adding the `initial-registration.yaml` isn't scripted yet. This is still a manual process:

The written USB stick will have two partitions. `RPI_BOOT` contains the boot loader files and `COS_LIVE` the Elemental files.
Mount the `COS_LIVE` partition and write `initial-registration.yaml` as `livecd-cloud-config.yaml` to this partition.

If you've mounted the USB stick with a file manager, this command should work to copy the registration information:

```shell showLineNumbers
sudo cp initial-registration.yaml /run/media/$USER/COS_LIVE/livecd-cloud-config.yaml
```

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
- Install Elemental Teal to the given device
- Reboot

### Selecting the right machines to join a cluster

In order for the `MachineInventorySelectorTemplate` to select the nodes, a location label to the `MachineInventory` is now needed:

```shell showLineNumbers
kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") location=europe
```

After the label has been applied the machines will auto-deploy the cluster via the chosen provider (k3s/rke).

After a few minutes your new cluster will be fully provisioned!!

## How can I choose the kubernetes version and deployer for the cluster?

In your cluster.yaml file there is a key in the `Spec` called `kubernetesVersion`. That sets the version and deployer that will be used for the cluster,
for example for rke `v1.24.8` while for rke2 would be `v1.24.8+rke2r1` and for k3s `v1.24.8+k3s1`

To see all compatible versions check the [Rancher Support Matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/) PDF for rke/rke2/k3s versions and their components.

You can also check our [Version doc](kubernetesversions.md) to know how to obtain those versions.

Check our [Cluster Spec](cluster-reference.md) page for more info about the `Cluster` resource.

## How can I follow what is going on behind the scenes?

You should be able to follow along what the machine is doing via:

- During ISO boot:
  - ssh into the machine (user/pass: root/ros):
    - running `journalctl -f -t elemental` will show you the output of the elemental-register and the elemental install
- Once the system is installed:
  - On the Rancher UI -> `Cluster Management` you should see your new cluster and be able to see the `Provisioning Log` in the cluster details
  - ssh into the machine (user/pass: Whatever your configured on the registration.yaml under `Spec.config.cloud-config.users`):
    - running `journalctl -f -u elemental-system-agent` will show the output of the initial elemental config and install of `rancher-system-agent`
    - running `journalctl -f -u rancher-system-agent` will show the output of the boostrap of cluster components like k3s
    - running `journalctl -f -u k3s` will show the logs of the k3s deployment
