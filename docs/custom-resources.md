<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/custom-resources"/>
</head>

# Custom Resources

The <Vars name="elemental_operator_name" /> allows control of the Elemental Nodes by extending the Kubernetes APIs with a set of _elemental.cattle.io_ [Kubernetes CRDs](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/):

- [MachineRegistration](machineregistration.md)
- [MachineInventory](machineinventory.md)
- [MachineInventorySelector](machineinventoryselector.md)
- [MachineInventorySelectorTemplate](machineinventoryselectortemplate.md)
- ManagedOSImage
- ManagedOSVersion
- ManagedOSVersionChannel
- [SeedImage](seedimage.md)