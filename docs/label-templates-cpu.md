---
sidebar_label: CPU
title: ''
---

## CPU Template Variables

The information collected in the CPU template variables defines attributes of the processors
installed on the system.

The data is exposed by processor number (0, 1, 2, ...).

To reference the first processor the processor number (_`<Number>`_) can be omitted
(e.g., the variable `${CPU/Processor/Model}` is the same of
`${CPU/Processor/0/Model}`).


| Variable                                   | Description                                    | from  |
| ------------------------------------------ | ---------------------------------------------- | ----- |
| `${CPU/Processor/Capabilities}`            | Comma separated list of processor capabilities | 1.7.0 |
| `${CPU/Processor/ID}`                      | Processor ID                                   | 1.7.0 |
| `${CPU/Processor/Model}`                   | Processor model                                | 1.7.0 |
| `${CPU/Processor/NumCores}`                | Number of cores                                | 1.7.0 |
| `${CPU/Processor/NumThreads}`              | Number of threads                              | 1.7.0 | 
| `${CPU/Processor/Vendor}`                  | Processor vendor                               | 1.7.0 |
| `${CPU/Processor/_<Number>_/Capabilities}` | Comma separated list of processor _number_     | 1.7.0 |
| `${CPU/Processor/_<Number>_/ID}`           | Processor _number_ ID                          | 1.7.0 |
| `${CPU/Processor/_<Number>_/Model}`        | Processor _number_ model                       | 1.7.0 |
| `${CPU/Processor/_<Number>_/NumCores}`     | Number of cores of processor _number_          | 1.7.0 |
| `${CPU/Processor/_<Number>_/NumThreads}`   | Number of threads of processor _number_        | 1.7.0 |
| `${CPU/Processor/_<Number>_/Vendor}`       | Processor _number_ vendor                      | 1.7.0 |
| `${CPU/TotalCores}`                        | Total number of cores in the system            | 1.7.0 |
| `${CPU/TotalProcessors}`                   | Number of processors in the system             | 1.7.0 |
| `${CPU/TotalThreads}`                      | Total number of threads in the system          | 1.7.0 |