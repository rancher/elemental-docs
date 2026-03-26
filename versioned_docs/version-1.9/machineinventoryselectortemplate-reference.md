---
sidebar_label: MachineInventorySelectorTemplate reference
title: ''
---

<head>
  <link rel="canonical" href="https://elemental.docs.rancher.com/machineinventoryselectortemplate-reference"/>
</head>

# MachineInventorySelectorTemplate reference

The MachineInventorySelectorTemplate is a user defined resource that will be used as the blueprint to create the required [MachineInventorySelectors](machineinventoryselector-reference.md).

It is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource.

The relevant key is the `selector` which includes label selector expressions.

```yaml title="MachineInventorySelectorTemplate" showLineNumbers
apiVersion: elemental.cattle.io/v1beta1
kind: MachineInventorySelectorTemplate
metadata:
  name: my-machine-selector
  namespace: fleet-default
spec:
  template:
    spec:
      selector:
        ...
```

`template.spec.selector` can include `matchLabels` and or `matchExpressions` keys.

#### template.spec.selector.matchLabels

It is a map of `{key,value}` pairs `(map[string]string)`. When multiple labels are provided all labels must match.

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  ...
  spec:
    template:
      spec:
        selector:
          matchLabels:
            element: fire
            manufacturer: somevalue
  ```

</details>

A Cluster defined with the above selector will only attempt to provision nodes inventoried including these two labels.

#### template.spec.selector.matchExpressions

It is a list of label selectors, each label selectors can be defined as:

| Key               | Type              | Description                                     |
|-------------------|-------------------|-------------------------------------------------|
| key               | string            | This is the label key the selector applies on   |
| operator          | string            | Represents the relationship of the key to a set of values. Valid operators are 'In', 'NotIn', 'Exists' and 'DoesNotExist' |
| values            | []string          | Values is an array of string values. If the operator is 'In' or 'NotIn', the values array must be non-empty. If the operator is 'Exists' or 'DoesNotExist', the values array must be empty |

<details>
  <summary>Example</summary>

  ```yaml showLineNumbers
  ...
  spec:
    template:
      spec:
        selector:
          matchExpressions:
            - key: element
              operator: In
              values: [ 'fire' ]
            - key: manufacturer
              operator: Exists
  ```

</details>

A Cluster defined with the above selector will only attempt to provision nodes inventoried with the `element=fire` label and including a `manufacturer` label defined with any value.
