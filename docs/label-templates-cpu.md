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


| Variable             | Description           |
| -------------------- | --------------------- |
| `${CPU/Processor/Capabilities}`| Comma separated list of processor capabilities |
| `${CPU/Processor/ID}` | Processor ID |
| `${CPU/Processor/Model}`| Processor model |
| `${CPU/Processor/NumCores}`| Number of cores |
| `${CPU/Processor/NumThreads}`| Number of threads |
| `${CPU/Processor/Vendor}`| Processor vendor |
| `${CPU/Processor/_<Number>_/Capabilities}` | Comma separated list of processor _number_ | 
| `${CPU/Processor/_<Number>_/ID}`| Processor _number_ ID |
| `${CPU/Processor/_<Number>_/Model}`| Processor _number_ model |
| `${CPU/Processor/_<Number>_/NumCores}`| Number of cores of processor _number_ |
| `${CPU/Processor/_<Number>_/NumThreads}`| Number of threads of processor _number_ |
| `${CPU/Processor/_<Number>_/Vendor}`| Processor _number_ vendor |
| `${CPU/TotalCores}`| Total number of cores in the system |
| `${CPU/TotalProcessors}`| Number of processors in the system |
| `${CPU/TotalThreads}`| Total number of threads in the system |