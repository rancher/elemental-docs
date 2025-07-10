---
sidebar_label: Register an Unmanaged OS
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/unmanaged-os"/>
</head>

# Register an Unmanaged OS

Normally, the <Vars name="elemental_operator_name" link="elemental_operator_url" /> manages operating systems that are installed and configured by the <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" />.  
For example, in order to automate OS installation, upgrade, and reset, the `elemental-register` relies on the `elemental` CLI to execute these operations.  

However, it is also possible to register and provision Elemental "Toolkitless" systems.  

In this scenario, [elemental-register](architecture-components.md#elemental-register-command-line-tool) needs to be installed on the system.  
Optionally, the [elemental-system-agent](architecture-components.md#elemental-system-agent-daemon) can be installed. Note that without the `elemental-system-agent`, the <Vars name="elemental_operator_name" /> will not be able to provision any k8s cluster on the machine. In this case the <Vars name="elemental_operator_name" /> can only be used for OS Inventory purposes only.  

Finally, on the management cluster, the `MachineRegistration` must enable the `spec.config.elemental.registration.no-toolkit` flag.  

Once `no-toolkit` is enabled on the `MachineRegistration`, and a new registration occurs using `elemental-register --install` on the system, a new `MachineInventory` will be created on the management cluster:  

```bash
kubectl -n fleet-default describe machineinventory my-unmanaged-os-machine
```

The `MachineInventory` will be annotated with the `elemental.cattle.io/os.unmanaged: "true"` annotation, highlighting that this machine is not managed and has limited functionality.  

On the system, upon successful registration, the `/etc/rancher/elemental/agent/config.yaml` and `/var/lib/elemental/agent/elemental_connection.json` files are automatically created to configure the `elemental-system-agent`.
The `elemental-system-agent` component is needed for K8s provisioning and Reset triggers.  

When a [machine reset](reset.md) is triggered, for example by deleting the `MachineInventory` directly, the `elemental-system-agent` will execute a simple reset plan that will create the `/var/lib/elemental/.unmanaged_reset` sentinel file.  
The presence of this file indicates that the machine needs a reset. This may involve stopping services, uninstalling packages, formatting devices, and so on, depending how the machine is customly managed.  

## Supported Features

- Registration of a `MachineInventory`
- K8s provisioning (when the [elemental-system-agent](architecture-components.md#elemental-system-agent-daemon) is installed and running on the machine)
- Reset triggers (when the [elemental-system-agent](architecture-components.md#elemental-system-agent-daemon) is installed and running on the machine)

## Unsupported Features

- Cloud-init driven [configuration](cloud-config-reference.md)
- OS [Upgrades](upgrade.md)
- OS [Reset](reset.md)
