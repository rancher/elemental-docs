"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2285],{48397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(74848),a=t(28453),r=t(51230);const i={sidebar_label:"Smbios",title:""},s=void 0,l={id:"smbios",title:"",description:"Introduction",source:"@site/versioned_docs/version-1.5/smbios.md",sourceDirName:".",slug:"/smbios",permalink:"/1.5/smbios",draft:!1,unlisted:!1,tags:[],version:"1.5",frontMatter:{sidebar_label:"Smbios",title:""},sidebar:"docs",previous:{title:"Kubernetes versions",permalink:"/1.5/kubernetesversions"},next:{title:"Hardware Labels",permalink:"/1.5/hardwarelabels"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How does Elemental use SMBIOS data?",id:"how-does-elemental-use-smbios-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{CodeBlock:t,Head:i}=n;return t||u("CodeBlock",!0),i||u("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/smbios"})}),"\n","\n","\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The System Management BIOS (SMBIOS) specification defines data structures (and access methods) that can be used to read management information produced by the BIOS of a computer."}),"\n",(0,o.jsx)(n.p,{children:"This allows us to gather hardware information about the running system and use that as part of our labels."}),"\n",(0,o.jsx)(n.h2,{id:"how-does-elemental-use-smbios-data",children:"How does Elemental use SMBIOS data?"}),"\n",(0,o.jsxs)(n.p,{children:["The registration client tries to gather SMBIOS data by running ",(0,o.jsx)(n.code,{children:"dmidecode"})," during the initial registration of the node and that data is\nsent to the registration controller to use on interpolating different fields in the inventory that we create for that node."]}),"\n",(0,o.jsxs)(n.p,{children:["Currently, we support interpolating that data into the ",(0,o.jsx)(n.code,{children:"machineName"})," and the ",(0,o.jsx)(n.code,{children:"machineInventoryLabels"})," of a ",(0,o.jsx)(n.a,{href:"/1.5/machineregistration-reference",children:"machineRegistration"})]}),"\n",(0,o.jsx)(n.p,{children:"The interpolation format is as follows:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"{$KEY/VALUE}"})," and ",(0,o.jsx)(n.code,{children:"${KEY/SUBKEY/VALUE}"})]}),"\n",(0,o.jsxs)(n.p,{children:["This can be mixed with normal strings so ",(0,o.jsx)(n.code,{children:"my-prefix-${KEY/VALUE}"})," would result into the resolved values with ",(0,o.jsx)(n.code,{children:"my-prefix-"})," prefixed"]}),"\n",(0,o.jsx)(n.p,{children:"For example, having the following SMBIOS data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",metastring:"showLineNumbers",children:"System Information\n\tManufacturer: My manufacturer\n\tProduct Name: Awesome PC\n\tVersion: Not Specified\n\tSerial Number: THX1138\n\tFamily: Toretto\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And setting the ",(0,o.jsx)(n.code,{children:"machineName"})," to ",(0,o.jsx)(n.code,{children:"serial-${System Information/Serial Number}"})," would result in the final value of ",(0,o.jsx)(n.code,{children:"serial-THX1138"})]}),"\n",(0,o.jsxs)(n.p,{children:["This is useful to generate automatic names for machines based on their hardware values, for example using the UUID or the Product name.\nOur default ",(0,o.jsx)(n.code,{children:"machineName"})," when the registration values are empty is ",(0,o.jsx)(n.code,{children:'"m-${System Information/UUID}"'}),"."]}),"\n",(0,o.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,o.jsxs)(n.p,{children:["All non-valid characters will be changed into ",(0,o.jsx)(n.code,{children:"-"})," automatically on parse. Valid characters for labels are alphanumeric and ",(0,o.jsx)(n.code,{children:"-"}),",",(0,o.jsx)(n.code,{children:"_"})," and ",(0,o.jsx)(n.code,{children:"."}),"\nFor machineName the constraints are stricter as that value is used for the hostname so valid values are lowercase alphanumeric and ",(0,o.jsx)(n.code,{children:"-"})," only."]})}),"\n",(0,o.jsx)(n.p,{children:"A good use of SMBIOS data is to set up different labels for all your machines and get those values from the hardware directly."}),"\n",(0,o.jsxs)(n.p,{children:["Having your ",(0,o.jsx)(n.code,{children:"machineInventoryLabels"})," on the ",(0,o.jsx)(n.a,{href:"/1.5/machineregistration-reference",children:"machineRegistration"})," set to SMBIOS data would allow\nyou to use selectors down the line to select similar machines."]}),"\n",(0,o.jsxs)(n.p,{children:["For example using the following label ",(0,o.jsx)(n.code,{children:'cpuFamily: "${Processor Information/Family}'})," would allow you to use a selector to search for i7 cpus in your machine fleet."]}),"\n",(0,o.jsx)(t,{language:"yaml",title:"registration example with smbios labels",showLineNumbers:!0,children:r.A})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},51230:(e,n,t)=>{t.d(n,{A:()=>o});const o='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${Product/Vendor}"\n    productName: "${Product/Name}"\n    serialNumber: "${Product/Serial Number}"\n    machineUUID: "${Product/UUID}"'},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(96540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);