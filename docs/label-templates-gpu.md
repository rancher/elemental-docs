---
sidebar_label: GPU
title: ''
---

## GPU Template Variables

The information collected in the GPU template variables defines the attributes of the graphics
cards installed in the system.

The data is exposed by graphic card number (0, 1, 2, ...)

To reference the first graphic card, the graphic card number (_`<Number>`_) can be omitted
(e.g., the variable `${GPU/GraphicsCards/Driver}` is the same of `${GPU/GraphicsCards/0/Driver}`).

| Variable             | Description           |
| -------------------- | --------------------- |
| `${GPU/GraphicsCards/Driver}`| GPU card driver |
| `${GPU/GraphicsCards/ProductName}` | GPU card model |
| `${GPU/GraphicsCards/VendorName}` | GPU card vendor |
| `${GPU/GraphicsCards/_<Number>_/Driver}`| GPU card _number_ driver |
| `${GPU/GraphicsCards/_<Number>_/ProductName}` | GPU card _number_ model |
| `${GPU/GraphicsCards/_<Number>_/VendorName}` | GPU card _number_ vendor |
| `${GPU/TotalCards}`| Number of GPU cards in the system |