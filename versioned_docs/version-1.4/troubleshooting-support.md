---
sidebar_label: Support
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/troubleshooting-support"/>
</head>

# Elemental Support

The `elemental-support` is a utility program that collects all information about the machine where the Elemental stack is running.  

When troubleshooting issues with any Elemental node, it is possible to generate a compressed file containing logs and config files.  
Be aware that **the tar.gz generated file may contain sensitive information**, like access tokens to the management cluster and more.  

## Requirements

Optionally, the `elemental-support` utility needs `kubectl` to be available on the target machine, in order to collect node information. This can be very useful to debug Elemental upgrade issues with a node.  
The kubectl config used will be looked up from the `KUBECONFIG` environment variable, or in its absence either the `/etc/rancher/k3s/k3s.yaml` or `/etc/rancher/rke2/rke2.yaml` files will be used instead.  

## Collecting information

Once ran, the `elemental-support` will create the compressed archive within the same directory.  

Example run:  

```bash
m-993369ec-4b3f-4368-86c3-1449ebf57cf2# elemental-support 
I0430 11:33:38.934777    8536 log.go:42] Support version 1.3.4, commit 192dc33d, commit date 20230831
I0430 11:33:38.934865    8536 log.go:46] Getting elemental-support version
I0430 11:33:38.934918    8536 log.go:42] Copying /etc/os-release
I0430 11:33:38.935008    8536 log.go:42] Copying /etc/resolv.conf
I0430 11:33:38.935066    8536 log.go:42] Copying /etc/hostname
I0430 11:33:38.935131    8536 log.go:42] Copying /etc/rancher/agent/config.yaml
I0430 11:33:38.935174    8536 log.go:42] Copying /etc/rancher/agent/config.yaml
I0430 11:33:38.935214    8536 log.go:42] Copying dir /var/lib/elemental/agent/applied/
I0430 11:33:38.935434    8536 log.go:42] Copying dir /var/lib/rancher/agent/applied/
I0430 11:33:38.935572    8536 log.go:42] Copying dir /system/oem
I0430 11:33:38.936584    8536 log.go:42] Copying dir /oem/
I0430 11:33:38.937121    8536 log.go:42] Getting service log elemental-system-agent
I0430 11:33:38.959813    8536 log.go:42] Getting service log rancher-system-agent
I0430 11:33:38.979271    8536 log.go:42] Getting service log k3s
I0430 11:33:39.018177    8536 log.go:42] Getting service log rke2
I0430 11:33:39.036852    8536 log.go:42] Getting service log cos-setup-boot
I0430 11:33:39.053409    8536 log.go:42] Getting service log cos-setup-fs
I0430 11:33:39.068132    8536 log.go:42] Getting service log cos-setup-initramfs
I0430 11:33:39.085935    8536 log.go:42] Getting service log cos-setup-network
I0430 11:33:39.101440    8536 log.go:42] Getting service log cos-setup-reconcile
I0430 11:33:39.119528    8536 log.go:42] Getting service log cos-setup-rootfs
I0430 11:33:39.136151    8536 log.go:42] Getting service log cos-immutable-rootfs
I0430 11:33:39.153850    8536 log.go:42] Getting service log elemental
I0430 11:33:39.170564    8536 log.go:42] Getting service log NetworkManager
I0430 11:33:39.190169    8536 log.go:42] Getting elemental-cli version
I0430 11:33:39.205410    8536 log.go:42] Getting elemental-operator version
I0430 11:33:39.205621    8536 log.go:42] Getting elemental-register version
I0430 11:33:39.266263    8536 log.go:42] Found k3s kubeconfig at /etc/rancher/k3s/k3s.yaml
I0430 11:33:39.266312    8536 log.go:42] Found k3s kubectl at /usr/local/bin/kubectl
I0430 11:33:39.266320    8536 log.go:42] Getting k8s info for pods
I0430 11:33:39.770730    8536 log.go:42] Getting k8s info for secrets
I0430 11:33:39.962037    8536 log.go:42] Getting k8s info for nodes
I0430 11:33:40.118680    8536 log.go:42] Getting k8s info for services
I0430 11:33:40.280797    8536 log.go:42] Getting k8s info for deployments
I0430 11:33:40.458869    8536 log.go:42] Getting k8s info for plans
I0430 11:33:40.612138    8536 log.go:42] Getting k8s info for apps
I0430 11:33:40.787309    8536 log.go:42] Getting k8s info for jobs
I0430 11:33:40.932361    8536 log.go:42] Getting k8s logs for namespace cattle-system
I0430 11:33:41.353556    8536 log.go:42] Getting k8s logs for namespace kube-system
I0430 11:33:41.935885    8536 log.go:42] Getting k8s logs for namespace ingress-nginx
W0430 11:33:41.999345    8536 log.go:62] No pods in namespace ingress-nginx
I0430 11:33:41.999365    8536 log.go:42] Getting k8s logs for namespace calico-system
W0430 11:33:42.061902    8536 log.go:62] No pods in namespace calico-system
I0430 11:33:42.061927    8536 log.go:42] Getting k8s logs for namespace cattle-fleet-system
I0430 11:33:42.204459    8536 log.go:42] Creating final file
I0430 11:33:42.215815    8536 log.go:42] All done. File created at m-993369ec-4b3f-4368-86c3-1449ebf57cf2-2024-04-30T113342Z.tar.gz
```
