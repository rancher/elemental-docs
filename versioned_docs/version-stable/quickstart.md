---
sidebar_label: Quickstart
title: ''
---

import Cluster from "!!raw-loader!@site/examples/quickstart/cluster.yaml"
import Registration from "!!raw-loader!@site/examples/quickstart/registration.yaml"
import Selector from "!!raw-loader!@site/examples/quickstart/selector.yaml"

# Quickstart
Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher 
with the only help of an Elemental Teal iso

## Introduction

---

### What is Elemental Teal ?

Elemental Teal is the combination of "SLE Micro for Rancher" with the Rancher Elemental stack

SLE Micro for Rancher is a containerized and "stripped to the bones" operating system layer. It only requires grub2, dracut, a kernel, and systemd.

Its sole purpose is to run Kubernetes (k3s or RKE2), with everything controlled through Rancher Manager.

Elemental Teal is built in the [openSUSE Build Service](https://build.opensuse.org/package/show/isv:Rancher:Elemental:Stable:Teal53/node-image)
and available through the [openSUSE Registry](http://registry.opensuse.org/isv/rancher/elemental/stable/teal53/15.4/rancher/elemental-node-image/5.3:latest)

### What is the Rancher Elemental Stack ?

The Elemental Stack consists of some packages on top of SLE Micro for Rancher

- **elemental-toolkit** - includes a set of OS utilities to enable OS management via containers. Includes dracut modules, bootloader configuration, cloud-init style configuration services, etc.
- **elemental-operator** - this connects to Rancher Manager and handles machineRegistration and machineInventory CRDs
- **elemental-register** - this registers machines via machineRegistrations and installs them via elemental-cli
- **elemental-cli** - this installs any elemental-toolkit based derivative. Basically an installer based on our A/B install and upgrade system
- **rancher-system-agent** - runs on the installed system and gets instructions ("Plans") from Rancher Manager what to install and run on the system

## Prerequisites

 - A Rancher server (2.7.0) configured (server-url set)
     - To configure the Rancher server-url please check the [Rancher docs](https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in)
 - A machine (bare metal or virtualized) with TPM 2.0
     - Hint 1: Libvirt allows setting virtual TPMs for virtual machines [example here](tpm/#add-tpm-module-to-virtual-machine)
     - Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module [example here](tpm/#add-tpm-emulation-to-bare-metal-machine)
     - Hint 3: Make sure you're using UEFI (not BIOS), or the ISO won't boot
 - Helm Package Manager (https://helm.sh/)
 - Docker (for iso manipulation)

## Preparing the cluster

`elemental-operator` is the management endpoint, running the management
cluster and taking care of creating inventories, registrations for machines and much more.

We will use the Helm package manager to install the elemental-operator chart into our cluster

```shell showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart
```

There is a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart [values.yaml](https://github.com/rancher/elemental-operator/blob/main/chart/values.yaml)

Now after a few seconds you should see the operator pod appear on the `cattle-elemental-system` namespace.

```shell showLineNumbers
kubectl get pods -n cattle-elemental-system
NAME                                  READY   STATUS    RESTARTS   AGE
elemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s
```

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

<CodeBlock language="yaml" title="registration.yaml" showLineNumbers>{Registration}</CodeBlock>

This creates a `MachineRegistration` which will provide a unique URL which we will use with `elemental-register` to register
the node during installation, so the operator can create a `MachineInventory` which will be using to bootstrap the node.
See that we set the label that match our selector here already, although it can always be added later to the `MachineInventory`.

:::warning warning
Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration(i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...)
:::

Now that we have all the configuration to create the proper resources in Kubernetes just apply them

```shell showLineNumbers
kubectl apply -f selector.yaml 
kubectl apply -f cluster.yaml 
kubectl apply -f registration.yaml
```

</TabItem>
<TabItem value="repofiles" label="Using quickstart files from Elemental repo directly">

You can directly apply the quickstart example resource files from the [Elemental repository](https://github.com/rancher/elemental)

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

## Preparing the iso

Now this is the last step, we need to prepare an Elemental Teal iso that includes the initial registration config, so
it can be auto registered, installed and fully deployed as part of our cluster. The contents of the file are nothing 
more than the registration url that the node needs to register and the proper server certificate, so it can connect securely.
This iso then can be used to provision an infinite number of machines

Now, our `MachineRegistration` provides the needed config in its resource as part of its `Status.RegistrationURL`,
so we can use that url to obtain the proper yaml needed for the iso.

<Tabs>
<TabItem value="oneLiner" label="One liner">

```shell showLineNumbers
wget --no-check-certificate `kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml
```

This will download the proper yaml from the registration URL and store it on the current directory under the `initial-registration.yaml` name.

</TabItem>
<TabItem value="explanation" label="Full explanation">

First we need to obtain the `RegistrationURL` that was generated for our `MachineRegistration`

```bash showLineNumbers
$ kubectl get machineregistration -n fleet-default my-nodes -o jsonpath="{.status.registrationURL}"
https://172.18.0.2.sslip.io/elemental/registration/gsh4n8nj9gvbsjk4x7hxvnr5l6hmhbdbdffrmkwzrss2dtfbnpbmqp
```

As you can see we obtained the proper initial registration needed by `elemental-register` to register the node properly and continue with the automated installation

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

As you can see we obtained the proper initial registration needed by `elemental-register` to register the node properly and continue with the automated installation

Now we can write down the data returned for that url into a file that we will inject into the iso

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

Now we can proceed to create the ISO

<Tabs>
<TabItem value="script" label="Via script">

We provide a ISO build script for ease of use that can get the final ISO and inject the `initial-registration.yaml`:

```shell showLineNumbers
wget -q https://raw.githubusercontent.com/rancher/elemental/main/.github/elemental-iso-add-registration && chmod +x elemental-iso-add-registration
```

Now that we have the script we can proceed to download the ISO and inject our configuration injected:

```shell showLineNumbers
./elemental-iso-add-registration initial-registration.yaml
```

This will generate an ISO on the current directory with the name `elemental-teal-<ARCH>.iso`

:::info
The script uses the iso for the arch based on the system is being run from. If you want to cross build for another system,
you can set the `ARCH` environment variable to the desired target system (x86_64, aarch64) and the iso will be built for that architecture.
:::

</TabItem>
</Tabs>

You can now boot your nodes with this ISO, and they will:

- Register with the registrationURL given and create a per-machine `MachineInventory`
- Install Elemental Teal to the given device
- Reboot

In order for the `MachineInventorySelectorTemplate` to select the nodes, a location label to the `MachineInventory` is now needed:

```shell showLineNumbers
kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") location=europe
```

After the label has been applied the machines will auto-deploy the cluster via the chosen provider (k3s/rke).

After a few minutes your new cluster will be fully provisioned!!

## How can I choose the kubernetes version and deployer for the cluster?

In your cluster.yaml file there is a key in the `Spec` called `kubernetesVersion`. That sets the version and deployer that will be used for the cluster,
for example for rke `v1.23.6` while for rke2 would be `v1.23.6+rke2r1` and for k3s `v1.23.6+k3s1`

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
