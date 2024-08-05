---
sidebar_label: Rancher upgrades
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/troubleshooting-rancher-upgrades"/>
</head>

# Troubleshooting Rancher upgrades

:::warning warning
Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).
:::

Note that the issue is present only if at least one Elemental cluster is defined.

To workaround the issue create an empty `dynamicschemas.management.cattle.io` resource named `machineinventoryselectortemplate`:

```shell showLineNumbers
kubectl apply -f - <<EOF
kind: DynamicSchema
apiVersion: management.cattle.io/v3
metadata:
  name: machineinventoryselectortemplate
EOF

```

The crash loop will stop and Rancher upgrade will complete successfully.