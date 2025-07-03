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

| Variable                                      | Description                       | from  |
| --------------------------------------------- | --------------------------------- | ----- |
| `${GPU/GraphicsCards/Driver}`                 | GPU card driver                   | 1.7.0 |
| `${GPU/GraphicsCards/ProductName}`            | GPU card model                    | 1.7.0 |
| `${GPU/GraphicsCards/VendorName}`             | GPU card vendor                   | 1.7.0 |
| `${GPU/GraphicsCards/_<Number>_/Driver}`      | GPU card _number_ driver          | 1.7.0 |
| `${GPU/GraphicsCards/_<Number>_/ProductName}` | GPU card _number_ model           | 1.7.0 |
| `${GPU/GraphicsCards/_<Number>_/VendorName}`  | GPU card _number_ vendor          | 1.7.0 |
| `${GPU/TotalCards}`                           | Number of GPU cards in the system | 1.7.0 |