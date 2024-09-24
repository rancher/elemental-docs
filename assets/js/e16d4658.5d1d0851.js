"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[434],{50990:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=s(74848),t=s(28453),a=s(66186);const r={sidebar_label:"Label Templates",title:""},l="Label Templates Overview",o={id:"label-templates",title:"",description:"Elemental allows to specify label templates in the spec.machineInventoryLabels and spec.machineInventoryAnnotations sections of the",source:"@site/docs/label-templates.md",sourceDirName:".",slug:"/label-templates",permalink:"/next/label-templates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Label Templates",title:""},sidebar:"docs",previous:{title:"Authentication",permalink:"/next/authentication"},next:{title:"BaseBoard",permalink:"/next/label-templates-baseboard"}},c={},h=[{value:"Label Templates&#39; Variables",id:"label-templates-variables",level:2},{value:"Sanitization",id:"sanitization",level:2},{value:"Usage of Label Templates",id:"usage-of-label-templates",level:2},{value:"Hardware data for the Elemental catalog",id:"hardware-data-for-the-elemental-catalog",level:3},{value:"Selectors for Cluster Provisioning",id:"selectors-for-cluster-provisioning",level:3},{value:"Custom Machine Names",id:"custom-machine-names",level:3},{value:"Label Templates in action",id:"label-templates-in-action",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{CodeBlock:s,Head:r}=n;return s||x("CodeBlock",!0),r||x("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/label-templates"})}),"\n","\n","\n",(0,i.jsx)(n.h1,{id:"label-templates-overview",children:"Label Templates Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Elemental allows to specify ",(0,i.jsx)(n.em,{children:"label templates"})," in the ",(0,i.jsx)(n.code,{children:"spec.machineInventoryLabels"})," and ",(0,i.jsx)(n.code,{children:"spec.machineInventoryAnnotations"})," sections of the\n",(0,i.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"})," resources."]}),"\n",(0,i.jsxs)(n.p,{children:["Their format is the canonical ",(0,i.jsx)(n.code,{children:"key"}),":",(0,i.jsx)(n.code,{children:"value"})," used in Kubernetes labels and annotations."]}),"\n",(0,i.jsxs)(n.p,{children:["These label templates are converted to actual labels and annotations attached to each\n",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"})," resource created during the\n",(0,i.jsx)(n.a,{href:"architecture-machineonboarding",children:"machine onboarding"})," phase."]}),"\n",(0,i.jsxs)(n.p,{children:["The resulting labels and annotations have the same ",(0,i.jsx)(n.code,{children:"key"})," of the label template."]}),"\n",(0,i.jsxs)(n.p,{children:["The associated ",(0,i.jsx)(n.code,{children:"value"})," is generated:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["rendering the ",(0,i.jsx)(n.a,{href:"#label-template-variables",children:(0,i.jsx)(n.code,{children:"label template variables"})})]})," (if present)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"sanitizing"})})," the resulting value (in the case of the labels only)"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The Elemental templating functionality covers also the ",(0,i.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"})," ",(0,i.jsx)(n.code,{children:"spec.machineName"})," field,\nwhich defines the resulting hostname of the registering machine and the ",(0,i.jsx)(n.code,{children:"name"})," of the associated\n",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"})," resource."]}),(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"#custom-machine-names",children:"Machine Name"})," section for more details."]})]}),"\n",(0,i.jsx)(n.h2,{id:"label-templates-variables",children:"Label Templates' Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Elemental Label Templating includes a set of predefined variables that could be used inside the ",(0,i.jsx)(n.code,{children:"value"})," of\nthe ",(0,i.jsx)(n.em,{children:"label templates"})," specified in the ",(0,i.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The syntax used to specify label templates' variables is:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["${ ",(0,i.jsx)(n.em,{children:"VARFAMILY"})," / ",(0,i.jsx)(n.em,{children:"VARPATH"})," }"]})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.em,{children:"VARFAMILY"})," defines a group (family) of supported variables and ",(0,i.jsx)(n.em,{children:"VARPATH"})," defines the actual variable\nname inside the belonging family group."]}),"\n",(0,i.jsxs)(n.p,{children:["Elemental currently supports the following ",(0,i.jsx)(n.em,{children:"template variable families"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-bios",children:(0,i.jsx)(n.strong,{children:"BIOS"})}),": ",(0,i.jsx)(n.strong,{children:"${ BIOS /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-baseboard",children:(0,i.jsx)(n.strong,{children:"BaseBoard"})}),": ",(0,i.jsx)(n.strong,{children:"${ BaseBoard /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-cpu",children:(0,i.jsx)(n.strong,{children:"CPU"})}),": ",(0,i.jsx)(n.strong,{children:"${ CPU /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-chassis",children:(0,i.jsx)(n.strong,{children:"Chassis"})}),": ",(0,i.jsx)(n.strong,{children:"${ Chassis /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-gpu",children:(0,i.jsx)(n.strong,{children:"GPU"})}),": ",(0,i.jsx)(n.strong,{children:"${ GPU /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-memory",children:(0,i.jsx)(n.strong,{children:"Memory"})}),": ",(0,i.jsx)(n.strong,{children:"${ Memory /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-network",children:(0,i.jsx)(n.strong,{children:"Network"})}),": ",(0,i.jsx)(n.strong,{children:"${ Network /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-product",children:(0,i.jsx)(n.strong,{children:"Product"})}),": ",(0,i.jsx)(n.strong,{children:"${ Product /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-runtime",children:(0,i.jsx)(n.strong,{children:"Runtime"})}),": ",(0,i.jsx)(n.strong,{children:"${ Runtime /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"label-templates-storage",children:(0,i.jsx)(n.strong,{children:"Storage"})}),": ",(0,i.jsx)(n.strong,{children:"${ Storage /"})," ",(0,i.jsx)(n.em,{children:"VARPATH"})," ",(0,i.jsx)(n.strong,{children:"}"})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["All the ",(0,i.jsx)(n.em,{children:"template variable families"})," (but ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"Random"})}),") are enabled only if ",(0,i.jsx)(n.a,{href:"/next/machineregistration-reference",children:"MachineRegistration"}),"'s\n",(0,i.jsx)(n.code,{children:"elemental.registration.no-smbios"})," field is set to ",(0,i.jsx)(n.code,{children:"false"})," (default)."]}),(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"elemental.registration.no-smbios"})," field is set to ",(0,i.jsx)(n.code,{children:"true"}),", the registering machines do not\nsend any data required for rendering the template variables, so no variables will be available, but\nthe ",(0,i.jsx)(n.strong,{children:"Random"})," variables, which are the only notable exception."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Random"})," variables are always available since they are built-in on the operator side.\nThey are also special since they are computed only once: see the\n",(0,i.jsx)(n.a,{href:"label-templates-random",children:"Random Template variables"})," section for more details."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Template variables can be mixed with static text to form the actual labels assigned to\n(",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventories"}),")."]}),"\n",(0,i.jsx)(n.admonition,{title:"Rendering Examples",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Label Template tracking the number of CPU cores of the registering host (assume host has 4 cores):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["original label: ",(0,i.jsx)(n.strong,{children:"cpu: ${CPU/TotalCores}-cores"})]}),"\n",(0,i.jsxs)(n.li,{children:["rendered label: ",(0,i.jsx)(n.strong,{children:"cpu: 4-cores"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Label Template tracking the SMBIOS UUID of the registering host:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["original label: ",(0,i.jsx)(n.strong,{children:"sbios-UUID: ${Product/UUID}"})]}),"\n",(0,i.jsxs)(n.li,{children:["rendered label: ",(0,i.jsx)(n.strong,{children:"sbios-UUID: fd95324a-c26b-4e28-8727-1dcec293a0ec"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"sanitization",children:"Sanitization"}),"\n",(0,i.jsxs)(n.p,{children:["Once the label template value has been rendered accordingly to the included ",(0,i.jsx)(n.a,{href:"#label-template-variables",children:"label template variables"}),", the resulting value is ",(0,i.jsx)(n.code,{children:"sanitized"})," before being assigned to the resulting label."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["The ",(0,i.jsx)(n.code,{children:"sanitization"})," enforce the label value to only contain letters (capitalized or not), numbers and the hyphen (",(0,i.jsx)(n.code,{children:"-"}),"), point (",(0,i.jsx)(n.code,{children:"."}),") and underscore (",(0,i.jsx)(n.code,{children:"_"}),") characters"]}),":\nall the characters not included are substituted with an hyphen."]}),"\n",(0,i.jsx)(n.p,{children:"Any character at the beginning and at the end of the label value must be a letter or a number.\nIf it is not, it is dropped."}),"\n",(0,i.jsx)(n.p,{children:"Two consecutive hyphens are replaced with one."}),"\n",(0,i.jsx)(n.admonition,{title:"Rendering Example",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Label Template with sanitization of prohibited chars:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["original label: ",(0,i.jsxs)(n.strong,{children:["sanitized: this",":needs--sanitizing","!"]})]}),"\n",(0,i.jsxs)(n.li,{children:["rendered label: ",(0,i.jsx)(n.strong,{children:"sanitized: this-needs-sanitizing"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"usage-of-label-templates",children:"Usage of Label Templates"}),"\n",(0,i.jsxs)(n.p,{children:["Label Templates allow to automatically attach and update labels and annotations to each host's\n",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"})," every time an host registers to the Elemental Operator."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Registration happens not only during the ",(0,i.jsx)(n.a,{href:"architecture-machineonboarding",children:"onboarding phase"}),": each host\nre-registers every 30 minutes (and every time it reboots).\nDuring the re-registration, the Label Templates in the associated\n",(0,i.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"})," are re-evaluated and added/updated in the\n",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"There are basically three main cases where the label templates can be of use:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"to attach hardware data to the Elemental Catalog"}),"\n",(0,i.jsx)(n.li,{children:"to add selectors to pick up hosts for Cluster Provisioning"}),"\n",(0,i.jsx)(n.li,{children:"to define a custom template for the Machine Names"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hardware-data-for-the-elemental-catalog",children:"Hardware data for the Elemental catalog"}),"\n",(0,i.jsxs)(n.p,{children:["The Label Templates' variables can be used to attach hardware data to each\n",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"})," resource (which form the Elemental Catalog)."]}),"\n",(0,i.jsx)(n.p,{children:"In this case, annotations may be a better choice since their values are not sanitized."}),"\n",(0,i.jsx)(n.h3,{id:"selectors-for-cluster-provisioning",children:"Selectors for Cluster Provisioning"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Label Templates"})," can be used to generate labels used to indentify and select machines\nwith special hardware properties to form new Kubernetes Clusters."]}),"\n",(0,i.jsxs)(n.p,{children:["The labels attached to each ",(0,i.jsx)(n.a,{href:"machineinventory-reference",children:"MachineInventory"})," are eligible to ",(0,i.jsx)(n.em,{children:"selector"}),"\nfor the ",(0,i.jsx)(n.a,{href:"machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"})," resource\n(see the ",(0,i.jsx)(n.a,{href:"architecture-clusterdeployment#kubernetes-cluster-provisioning",children:"Kubernetes Cluster provisioning"}),"\nsection for more details)."]}),"\n",(0,i.jsx)(n.h3,{id:"custom-machine-names",children:"Custom Machine Names"}),"\n",(0,i.jsxs)(n.p,{children:["The hostname of the onboarding machine can be specified using the\n",(0,i.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"})," ",(0,i.jsx)(n.code,{children:"spec.machineName"})," field."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"spec.machineName"})," value undergoes the same ",(0,i.jsx)(n.code,{children:"Label Templates' variables"})," and ",(0,i.jsx)(n.code,{children:"sanitization"})," processes\nreserved to the ",(0,i.jsx)(n.code,{children:"spec.machineInventoryLabels"})," field."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["There is one notable difference between the ",(0,i.jsx)(n.a,{href:"machineregistration-reference",children:"MachineRegistration"})," ",(0,i.jsx)(n.code,{children:"spec.machineName"})," and ",(0,i.jsx)(n.code,{children:"spec.machineInventorylabels"})," fields: during the ",(0,i.jsx)(n.a,{href:"#sanitization",children:"sanitization"})," process\nthe underscore (",(0,i.jsx)(n.code,{children:"_"}),") is substituted as the other forbidden characters (i.e., it is substituted by an\nhyphen: ",(0,i.jsx)(n.code,{children:"-"}),").\nThis is required as the underscore is not allowed in linux hostnames."]})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on how to define the hostname for Elemental hosts, see the\n",(0,i.jsx)(n.a,{href:"hostname",children:"HowTo/Customize hostname"})," section."]}),"\n",(0,i.jsx)(n.admonition,{title:"Rendering Example",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Define an hostname template like ",(0,i.jsx)(n.code,{children:"SLE-Micro-[random string of 6 hexadecimal values]"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MachineRegistration spec: ",(0,i.jsx)(n.strong,{children:"machineName: SLE-Micro-${Random/Hex/6}"})]}),"\n",(0,i.jsxs)(n.li,{children:["MachineInventory name: ",(0,i.jsx)(n.strong,{children:"SLE-Micro-32ad41"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"label-templates-in-action",children:"Label Templates in action"}),"\n",(0,i.jsx)(s,{language:"yaml",title:"registration example with Label Templates' variables",showLineNumbers:!0,children:a.A})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},66186:(e,n,s)=>{s.d(n,{A:()=>i});const i='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: "${Runtime/Hostname}"\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    elemental.cattle.io/CpuTotalCores: "${CPU/TotalCores}"\n    elemental.cattle.io/CpuTotalThreads: "${CPU/TotalThreads}"\n    elemental.cattle.io/TotalMemoryBytes: "${Memory/TotalPhysicalBytes}"\n    elemental.cattle.io/NumDisks: "${Storage/TotalDisks}"\n'},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);