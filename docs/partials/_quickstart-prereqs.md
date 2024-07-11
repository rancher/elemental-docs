## Prerequisites

* A Rancher server (v2.7.0 or later) configured (server-url set)
  * To configure the Rancher `server-url` please check the [Rancher docs](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration#first-log-in)
* A machine (bare metal or virtualized) with TPM 2.0
  * Hint 1: Libvirt allows setting virtual TPMs for virtual machines [example here](tpm#add-tpm-module-to-virtual-machine)
  * Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module [example here](tpm#add-tpm-emulation-to-bare-metal-machine)
  * Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot
  * Hint 4: A minimum volume size of 25 GB is recommended. See the [Elemental partition table](installation#deployed-partition-table) for more details  
  * Hint 5: CPU and RAM requirements depend on the Kubernetes version installed, for example [K3s](https://docs.k3s.io/installation/requirements#hardware) or [RKE2](https://docs.rke2.io/install/requirements#hardware)  
* Helm Package Manager (https://helm.sh/)
* For ARM (aarch64) - One SD-card (32 GB or more, must be **fast** - 40MB/s write speed is acceptable) and a USB-stick for installation
