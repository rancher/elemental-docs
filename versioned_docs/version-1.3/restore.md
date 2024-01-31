---
sidebar_label: Restore
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/restore"/>
</head>

# Restore

Follow this guide to restore an Elemental configuration from a backup with Rancher.

## Prepare rancher-backup operator and backup files for restoring

Go to official [Rancher documentation](https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher) and make sure that `rancher-backup operator` is installed and has access to backup files.

You first have to follow this [documentation](backup.md) to do a backup of Elemental resources.

## Restore the Elemental configuration with rancher-backup operator

Create a `restore object` (adapted to your needs) to restore the backup tarball.

```yaml showLineNumbers
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: elemental-restore
spec:
  backupFilename: rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz
```

Apply manifest on Kubernetes.

```shell showLineNumbers
kubectl apply -f elemental-restore.yaml
```

Check logs from rancher-backup operator.

```shell showLineNumbers
kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f
```

Verify if backup file was restore successfully.

```shell showLineNumbers
...
INFO[2022/10/31 06:34:50] Processing controllerRef apps/v1/deployments/rancher 
INFO[2022/10/31 06:34:50] Done restoring
...
```

Continue with procedure from [Rancher documentation](https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster)
