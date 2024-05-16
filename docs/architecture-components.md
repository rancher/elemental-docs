---
sidebar_label: Elemental components
title: ''
---

# Elemental components

The components required to provide the [Elemental services](architecture-services.md) are:
* the [``elemental``](#elemental-command-line-tool) command line tool
* the [``elemental-operator``](#elemental-operator-daemon) daemon
* the [``elemental-register``](#elemental-register-command-line-tool) command line tool
* the [``elemental-system-agent``](#elemental-system-agent-daemon) daemon
* one or more [Elemental OS container images](#elemental-os-container-image)

### ``elemental`` command line tool
The ``elemental`` tool is part of the <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" /> project.
It performs the actual OS installation and upgrade operations on the host and is used to execute the [cloud-config](cloud-config-reference.md) directives added in the [Elemental CRDs](custom-resources.md).

The ``elemental`` binary is included in all the base OS images distributed with Elemental.

### ``elemental-operator`` daemon
The **elemental-operator** daemon performs two main tasks:
1. embeds the Elemental Kubernetes controllers to manage all the [Elemental CRDs](custom-resources.md)
2. exposes the _registration endpoints_ to allow the host to register and download the OS installation configuration during the [machine onboarding](architecture-machineonboarding.md)

The `elemental-operator` daemon is deployed on the Rancher cluster as a `Deployment` via the [Elemental Operator Helm Chart](elementaloperatorchart-reference.md).

### ``elemental-register`` command line tool
The **elemental-register** binary is the client used to register the host against the _registration endpoints_ exposed by the [elemental-operator](#elemental-operator-daemon). It collects and forwards the host data to allow the [elemental-operator](#elemental-operator-daemon) to fill the [SMBIOS](smbios.md) and the [Hardware](hardwarelabels.md) label templates.

If the registraton phase is performed successfully, the **elemental-register** gets the full configuration stored in the [MachineRegistration](machineregistration-reference.md) from the **elemental-operator**.
As the last step, the **elemental-register** client calls the [elemental](#elemental-command-line-tool) binary passing the retrieved configuration to kick off the OS installation.

### ``elemental-system-agent`` daemon
The ``elemental-system-agent`` is built from the [Rancher System Agent project](https://github.com/rancher/system-agent) and allows Elemental to deploy _plans_ to assist with the host provisioning.
Notably, the ``rancher-system-agent`` installation and configuration required for the [Kubernetes Cluster provisioning service](architecture-clusterdeployment.md) is performed through an ``elemental-system-agent`` _plan_.

### Elemental OS container image
An <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" /> OS image is an OCI container image containing all the files that will make up the OS of the target host. It contains not only all the binaries and libraries, but also the kernel and the boot files required by a linux system.

The Elemental OS image is an opinionated <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" /> OS image which is based on [SLE Micro](https://www.suse.com/products/micro/) and contains specific Elemental configurations and binaries (the [elemental](#elemental-command-line-tool) and the [elemental-register](#elemental-register-command-line-tool) ones).

The Elemental OS images are tracked in the [ManagedOSVersions](managedosversion-reference.md) resources. The [ManagedOSVersions](managedosversion-reference.md) resources are dynamically created from [ManagedOSVersionChannel](managedosversionchannel-reference.md) resources. A default[ManagedOSVersionChannel](managedosversionchannel-reference.md) resource is deployed with each Elemental Operator installation.