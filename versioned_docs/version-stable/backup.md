---
sidebar_label: Backup
title: ''
---

# Backup

Follow this guide to create backup for Elemental configuration installed together with Rancher.

## Install rancher-backup operator for Rancher

Go to official [Rancher documentation](https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher) and install rancher-backup operator from there.

## Backup Elemental with rancher-backup operator

Create a `backup object` (adapted to your needs) to backup an Elemental configuration.

```yaml showLineNumbers
apiVersion: resources.cattle.io/v1
kind: Backup
metadata:
  name: elemental-backup
spec:
  resourceSetName: rancher-resource-set
  schedule: "10 3 * * *"
  retentionCount: 10
```

Apply manifest on Kubernete.

```shell showLineNumbers
kubectl apply -f elemental-backup.yaml
```

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
