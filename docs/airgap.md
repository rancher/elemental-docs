---
sidebar_label: Air-Gapped Installation
title: ''
---

## Install Elemental in an Air-Gapped Environment

### Assumptions
A Rancher air-gapped installation should be already configured as per the [official Rancher documentation](https://ranchermanager.docs.rancher.com/pages-for-subheaders/air-gapped-helm-cli-install).
In particular a local registry should be available in the air-gapped infrastructure.

:::info authenticated access to the private registry is not supported yet
At this stage Elemental does not support installation from an authenticated registry: the private registry should allow unauthenticated pulls from inside the airgap environment.

Authentication support in registries is tracked in the [*[airgap] add support to private registries* issue](https://github.com/rancher/elemental/issues/967).
:::

### Download Elemental charts and Elemental images
In order to run Elemental in an air-gapped environment the following artifacts are needed:
- the Elemental Operator charts
- the container images referenced in the charts (the *elemental-operator* and *seedimage-builder* images)
- the containerized OS images

Moreover, it could be handy to create a *channel image* referencing the containerized OS images available.
The official channel image (the *elemental-teal-channel* one) references absolute URLs of the OS images on the official suse registry, so it cannot be used in an air-gapped scenario.

All these steps can be perfomed executing the [`elemental-airgap.sh` script](https://raw.githubusercontent.com/rancher/elemental-operator/main/scripts/elemental-airgap.sh) from a host with Internet access.
You can provide a manually downloaded Elemental charts to the script or let it download the helm charts for you.
`elemental-airgap.sh` will inspect the Elemental Operator chart, identify all the required container images, download and save them in an archive.
It will also build a new OS channel image with OS URLs pointing to the local registry (which must be specified as an argument on the command line).

Here we will download all the artifacts and build a custom channel from the latest stable release of Elemental:

```shell showLineNumbers
wget https://raw.githubusercontent.com/rancher/elemental-operator/main/scripts/elemental-airgap.sh
chmod 755 elemental-airgap.sh
./elemental-airgap.sh stable -r <REGISTRY.YOURDOMAIN.COM:PORT>
```

once completed (the script may take a while) the following files will be available in the current dir:
- elemental-operator-crds-chart-<*VERSION*\>.tgz
- elemental-operator-chart-<*VERSION*\>.tgz
- elemental-images.txt
- elemental-images.tar.gz

### Perform Elemental istallation using the generated artifacts
All the above files should be copied to a host with access to the local registry and with kubectl configured to have access to the air-gapped Rancher cluster.
The host should also have helm installed.

Two steps are needed to perform the Elemental installation:
1. load the archive with all the required container images on the local registry:
this could be done using the `rancher-load-images.sh` script distributed with the Rancher release and already used for the Rancher air-gapped deployment:
```shellnocolor showLineNumbers
rancher-load-images.sh \
   --image-list elemental-images.txt \
   --images elemental-images.tar.gz \
   --registry <REGISTRY.YOURDOMAIN.COM:PORT>
```
2. install the downloaded elemental charts configuring the local registry and the newly created channel:
```shellnocolor showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system \
  --install elemental-operator-crds elemental-operator-crds-chart-<VERSION>.tgz

helm upgrade --create-namespace -n cattle-elemental-system \
  --install elemental-operator elemental-operator-chart-<VERSION>.tgz \
  --set registryUrl=<REGISTRY.YOURDOMAIN.COM:PORT> \
  --set channel.repository=rancher/elemental-teal-channel-<REGISTRY.YOURDOMAIN.COM>
```

:::info The elemental airgap script outputs the required commands
The `elemental-airgap.sh` scripts prints out the required commands shown above but using the actual chart version and the provided registry URL to allow to just copy and paste.
:::

### Elemental UI Extension
Rancher 2.7.x doesn't support UI extensions plugin in air-gapped environments, and so the Elemental UI is not available in Rancher 2.7.x.

The Elemental UI plugin will be present in the available UI extension in Rancher 2.8.0 .