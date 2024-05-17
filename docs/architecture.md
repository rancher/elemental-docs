---
sidebar_label: Overview
title: ''
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/architecture"/>
</head>

# Architecture overview
Elemental is the combination of two main projects: the <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" /> and the <Vars name="elemental_operator_name" link="elemental_operator_url" />.

The <Vars name="elemental_toolkit_name" link="elemental_toolkit_url" /> enables OS installation and updates from OCI container images, so the OS can be distributed and retrieved via container registries.

The <Vars name="elemental_operator_name" link="elemental_operator_url" /> extends Rancher with OS provisioning and OS management functionalities, leveraging the Elemental Toolkit.
It bridges the gap between the <Vars name="elemental_toolkit_name" link="elemental_toolkit_url"/> and the
[Rancher RKE2/K3s Cluster provisioning](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher#launching-kubernetes-on-new-nodes-in-an-infrastructure-provider-1),
to provide a seamless experience going from hosts without OS to fully configured Kubernetes Clusters.

This is achieved through a [set of services](architecture-services.md) offered by Elemental that are made possible thanks to the [components](architecture-components.md) borrowed from the Elemental Toolkit and the Elemental Operator projects.

<ThemedImage
  alt="Elemental Architecture"
  sources={{
    light: useBaseUrl('img/elemental-architecture-v1.5.png'),
    dark: useBaseUrl('img/elemental-architecture-v1.5-dark.png'),
  }}
/>