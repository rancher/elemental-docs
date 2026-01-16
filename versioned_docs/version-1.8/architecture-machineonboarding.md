---
sidebar_label: Machine onboarding
title: ''
---

## Machine onboarding
The goal of the Machine Onboarding service is to register a new machine in the Elemental Operator catalog ([MachineInventory](machineinventory-reference.md) resources) and provision the host with the OS, applying the desired configuration.

The Machine Onboarding involves the following steps:
* The user creates a [MachineRegistration](machineregistration-reference.md) resource: the MachineRegistration includes the configuration required for the OS installation.
As soon as the MachineRegistration is created, the Elemental Operator exposes an HTTP _registration endpoint_: it is the entrypoint required by the onboarding hosts to register to the operator.
* The user requests a self-installing image via a [SeedImage](seedimage-reference.md) resource: it only requires a reference to a MachineRegistration resource and to an OS container image compatible with the Elemental Toolkit.
As soon as the SeedImage is created, the Elemental Operator triggers the build process of the self-installing image: once completed, the URL is exposed in the `status.downloadURL` field of the [SeedImage](seedimage-reference.md) resource.
* The user downloads the self-installing image and uses it to boot an unprovisioned host:
the host [authenticates](https://elemental.docs.rancher.com/authentication) to the _registration endpoint_ of the Elemental Operator, gets the full configuration stored in the MachineRegistration and installs the OS on the local storage device. As soon as the host has completed the registration process, the Elemental Operator creates a unique [MachineInventory](machineinventory-reference.md) resource tracking the host.
The self-installing image can be used to onboard any number of hosts.