## Install Elemental Operator

`elemental-operator` is the management endpoint, running the management
cluster and taking care of creating inventories, registrations for machines and much more.

We will use the Helm package manager to install the elemental-operator chart into our cluster.

<Tabs>
<TabItem value="stableOperator" label="Stable version (x86-64, ARM64 (Raspberry Pi 4))" default>

```shell showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/stable/charts/rancher/elemental-operator-chart
```

</TabItem>
<TabItem value="develOperator" label="Development version (x86-64, ARM64 (Raspberry Pi 4))" default>

:::warning Reminder
The development version is 'best effort' supported. We welcome feedback via Slack or Github issues. But it might be a bit rough as we move the stack forward.
:::

```shell showLineNumbers
helm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart
```

</TabItem>
</Tabs>

There is a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart [values.yaml](https://github.com/rancher/elemental-operator/blob/main/chart/values.yaml)

Now after a few seconds you should see the operator pod appear on the `cattle-elemental-system` namespace.

```shell showLineNumbers
kubectl get pods -n cattle-elemental-system
NAME                                  READY   STATUS    RESTARTS   AGE
elemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s
```
