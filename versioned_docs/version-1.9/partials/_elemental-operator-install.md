## Install Elemental Operator

`elemental-operator` is the management endpoint, running the management
cluster and taking care of creating inventories, registrations for machines and much more.

We will use the Helm package manager to install the elemental-operator chart into our cluster.

```shell showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.suse.com/rancher/elemental-operator-crds-chart
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.suse.com/rancher/elemental-operator-chart
```

Now after a few seconds you should see the operator pod appear on the `cattle-elemental-system` namespace:

```shell showLineNumbers
kubectl get pods -n cattle-elemental-system
NAME                                  READY   STATUS    RESTARTS   AGE
elemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s
```

:::info Helm v3.8.0+ required
The Elemental Operator chart is distributed via an OCI registry: Helm correctly supports OCI based registries starting from the v3.8.0 release.
:::

:::warning Swap charts installation order when upgrading from elemental-operator release < 1.2.4
When upgrading from an elemental-operator release embedding the Elemental CRDs (version < 1.2.4) the elemental-operator-crds chart installation will fail.
You will need to upgrade the elemental-operator chart first, and only then install the elemental-operator-crds chart.
:::

### Non-stable installations

Besides the Helm charts listed above, there are two other `non-stable`
versions available.

* **Staging:** refers to the latest tagged release from Github. This is documented in the [Next](/next/quickstart-ui) pages.

* **Development:** refers to the 'tip of HEAD' from Github. This is the ongoing development version and changes constantly.

<Tabs>
<TabItem value="stagingOperator" label="Staging version (x86-64, ARM64 (Raspberry Pi 4))" default>

```shell showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-crds-chart
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-chart
```

</TabItem>
<TabItem value="develOperator" label="Development version (x86-64, ARM64 (Raspberry Pi 4))" default>

:::warning Reminder
The development version is not recommended for production environments. We welcome feedback via Slack or Github issues, but it could be unstable and contain experimental features that can be dropped without notice.
:::

```shell showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-crds-chart
helm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart
```

</TabItem>
</Tabs>

### Installation options

There are a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart [values.yaml](https://github.com/rancher/elemental-operator/blob/main/.obs/chartfile/operator/values.yaml).
