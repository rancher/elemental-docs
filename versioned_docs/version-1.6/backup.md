---
sidebar_label: Backup
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/backup"/>
</head>

# Backup

Since Elemental runs as part of Rancher, the Elemental resources are bundled in the Rancher backup.  
For more details about Rancher backups, restore, and disaster recovery options, please follow the official [Rancher documentation](https://ranchermanager.docs.rancher.com/pages-for-subheaders/backup-restore-configuration).

## Install rancher-backup operator for Rancher

Follow the [Rancher backup guide](https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher) to learn how to install and configure the Rancher backup-operator.  

Note that for single node Rancher installations the backup workflow is different.  
You may follow the official [documentation](https://ranchermanager.docs.rancher.com/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher) to learn more.

## Backup Elemental with rancher-backup operator

Create a `backup object` (adapted to your needs) to backup Rancher running on a Kubernetes cluster.  

```yaml showLineNumbers
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: rancher-backup
spec:
  resourceSetName: rancher-resource-set
  schedule: "10 3 * * *"
  retentionCount: 10
```

The rancher-backup operator offers several options for schedule, encryption, and storage classes.  
You can explore all options by reading the [official documentation](https://ranchermanager.docs.rancher.com/reference-guides/backup-restore-configuration/backup-configuration).

Check logs from rancher-backup operator.

```shell showLineNumbers
kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f
```

Verify if backup file was created on Persistent Volume.

```shell showLineNumbers
...
INFO[2022/10/17 07:45:04] Finding files starting with /var/lib/backups/rancher-backup-430169aa-edde-4a61-85e8-858f625a755b*.tar.gz 
INFO[2022/10/17 07:45:04] File rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz was created at 2022-10-17 0
...
```
