---
sidebar_label: SeedImage
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/seedimage"/>
</head>

# SeedImage

A SeedImage is a resource to handle the installation media creation. Includes the reference to the base installation system and a reference to the machine registration. It is used to create and serve installation ISOs including
the MachineRegistration metadata required for the machine registration. The installation media is created and being served in a devoted Pod.

SeedImage have two conditions:

- `SeedImageReady`, tracks the status of the associated pod.
- `Ready`, tracks if all the SeedImage child resources have been successfully created.
