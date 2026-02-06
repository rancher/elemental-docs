---
sidebar_label: Verification
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/troubleshooting-verification"/>
</head>

# Troubleshooting and verification steps

The first thing to consider when facing Elemental issues is to
acknowledge in which process or phase the issue appears. These are the
phases or stages of a regular classic Elemental life cycle:

1.  **Create a MachineRegistration resource**

    a.  The user provides node installation and configuration
        parameters.

    b.  Elemental operator generates a token based registration URL.

2.  **Create a SeedImage resource**

    a.  Builds and serves an ISO or RAW image with the selected OS and
        including the registration URL of the given MachineRegistration.

3.  **Register and installation of nodes**

    a.  Boot an ISO or RAW from a SeedImage and it auto-registers
        creating a MachineInventory.

    b.  Installation starts and reboots to the installed system applying
        the configuration that was given in the associated
        MachineRegistartion.

4.  **Creation of a new Elemental cluster**

    a.  The new cluster uses the node selector criteria to adopt
        matching MachineInventories.

    b.  Elemental operator adds a finalizer to the adopted
        MachineInventories to handle the reset use case.

5.  **K8s provisioning**

    a.  Elemental operator triggers Rancher provisioning scripts with
        the elemental-system-agent service.

    b.  Rancher handles the rest of the kubernetes provisioning at this point.
        Provisioning system installs rancher-system-agent service in nodes
        which will follow and execute the plans provided by the management cluster.

6.  **Create a ManagedOSImage resource (OS Upgrade)**

    a.  Creates a System Upgrade Controller (SUC) plan which runs the OSImage as a pod in the
        downstream cluster on each node one by one to self dump into a
        new snapshot.

7.  **Kubernetes upgrade**

    a.  Entirely managed by Rancher there are no Elemental specific procedures at this stage.

# What to check in different phases

These are few checks and validations that should be considered to narrow
and better scope the issue.

#### Issues building the installation media (SeedImage)

- Check the associated SeedImage resource status and check the related pod and its
  logs (a pod named with `media-image-reg` preffix))

- If the seedimage pod is not even launched, the elemental-operator pod
  logs related to SeedImage resources will be helpful.

#### Issues creating the MachineInventory (image boot + register + OS install)

- The installer media does not register: check in the SeedImage the
  `livecd-cloud-config.yaml` is consistent with an active
  MachineRegistration in Rancher. Then check if the node has access to
  the URL and, finally, check the logs of the
  `elemental-register-install.service`.

- The MachineInventory is created but never turns into active state

  - Check if `elemental-register-install.service` failed or not, and if
    so, check the service logs.

  - Installation succeeded but there was no reboot, then check the
    MachineRegistration has the reboot set to `true` in the install
    section.

  - The system rebooted but failed to finalize registration. Check the
    `elemental-register.service` logs.

#### Issues assigning machines to a cluster

- Check all values are consistent: labels in nodes vs the selector
  criteria in the new cluster and the number of nodes the cluster is
  defined for. If everything looks sane try to find related errors in
  the `elemental-operator` logs (check the traces for MachineInventory and
  MachineInventorySelector resources).

#### Issues provisioning Kubernetes

- Elemental triggers Rancher provisioning via the
  `elemental-system-agent`. If the `elemental-system-agent` does not report
  errors the root cause of any issue is likely to be related with
  Rancher provisioning process.

#### Issues upgrading nodes OS

- Check the ystem Upgrade Controller (SUC) plan is created and launched to downstream clusters. If this
  is the case check and provide the logs for the pod that the System
  Upgrade Controller launched in the downstream cluster (pod named with
  the `apply-os-upgrader` prefix). Downgrades are not allowed by default,
  so check both versions of the OS are acceptable, the current version and
  the one we want to upgrade to.

#### Issues in the configuration

- Config not applied: double check `cloud-config` syntax and verify there
  is no mix between `cloud-init` and `yip` syntax.

