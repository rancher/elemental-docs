---
title: "Download"
sidebar_label: "Download"
---

Elemental-toolkit consists of a CLI program that is used to install a system and build bootable sources. The CLI also embeds configuration needed for a bootable derivative.

## Download Elemental

Elemental toolkit can be run directly using a container runtime such as docker: 

```bash
docker run -it --rm ghcr.io/rancher/elemental-toolkit/elemental-cli:latest version
```

## Building from source

The CLI can also be built from source by checking out the repo and running make:

```bash
git clone https://github.com/rancher/elemental-toolkit
cd elemental-toolkit
make build-cli
./build/elemental version
```

## What to do next?

Check out [the customization section](../customizing/stages) to build a custom `Elemental` derivative or [the example section](../examples/creating_bootable_images) for some already prepared recipe examples.
