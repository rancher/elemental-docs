"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[545],{23663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=n(74848),r=n(28453),d=n(76667);const i={sidebar_label:"Hardware Labels",title:""},l=void 0,c={id:"hardwarelabels",title:"",description:"Hardware Labels",source:"@site/versioned_docs/version-1.2/hardwarelabels.md",sourceDirName:".",slug:"/hardwarelabels",permalink:"/1.2/hardwarelabels",draft:!1,unlisted:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Hardware Labels",title:""},sidebar:"docs",previous:{title:"Smbios",permalink:"/1.2/smbios"},next:{title:"Inventory Management",permalink:"/1.2/inventory-management"}},a={},o=[{value:"Hardware Labels",id:"hardware-labels",level:2},{value:"Block device drive types",id:"block-device-drive-types",level:3},{value:"Block device controller types",id:"block-device-controller-types",level:3},{value:"Example MachineRegistration",id:"example-machineregistration",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{CodeBlock:n,Head:i}=t;return n||j("CodeBlock",!0),i||j("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/hardwarelabels"})}),"\n","\n",(0,s.jsx)(t.h2,{id:"hardware-labels",children:"Hardware Labels"}),"\n",(0,s.jsxs)(t.p,{children:["When a node is registered, hardware data is collected and made available to the MachineRegistration in the same way as ",(0,s.jsx)(t.a,{href:"/1.2/smbios",children:"SMBIOS data"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This data can be used for easy identification and selection via a ",(0,s.jsx)(t.a,{href:"/1.2/machineinventoryselectortemplate-reference",children:"MachineSelector"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The following are available for templating:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Label"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Memory/Total Physical Bytes}"})}),(0,s.jsx)(t.td,{children:"The total RAM memory in the node, expressed in bytes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/CPU/Total Cores}"})}),(0,s.jsx)(t.td,{children:"Total CPU cores"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/CPU/Total Threads}"})}),(0,s.jsx)(t.td,{children:"Total CPU threads"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/CPU/Vendor}"})}),(0,s.jsx)(t.td,{children:"CPU vendor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/CPU/Model}"})}),(0,s.jsx)(t.td,{children:"CPU model"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/GPU/Vendor}"})}),(0,s.jsx)(t.td,{children:"GPU vendor (Only available if the node has an identifiable GPU)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/GPU/Model}"})}),(0,s.jsx)(t.td,{children:"GPU model (Only available if the node has an identifiable GPU)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Network/Number Interfaces}"})}),(0,s.jsx)(t.td,{children:"Number of network interfaces in the system"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Network/{Iface name}/Name}"})}),(0,s.jsx)(t.td,{children:"Network interface name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Network/{Iface name}/IsVirtual}"})}),(0,s.jsx)(t.td,{children:"Boolean indicating virtual network interface"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Block Devices/Number Devices}"})}),(0,s.jsx)(t.td,{children:"Number of block devices in the system (includes DVD and USB drives)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Block Devices/{Disk name}/Name}"})}),(0,s.jsx)(t.td,{children:"Device name of the block device (i.e. sda, sr0, vda, etc...)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Block Devices/{Disk name}/Removable}"})}),(0,s.jsx)(t.td,{children:"Whether this block device is removable (i.e. DVD)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Block Devices/{Disk name}/Size}"})}),(0,s.jsx)(t.td,{children:"Total space in this block device, expressed in bytes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Block Devices/{Disk name}/Drive Type}"})}),(0,s.jsx)(t.td,{children:"Drive type of this block device, see table below"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"${System Data/Block Devices/{Disk name}/Storage Controller}"})}),(0,s.jsx)(t.td,{children:"Controller type for this block device connection, see table below"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{title:"info",type:"info",children:(0,s.jsxs)(t.p,{children:["On both ",(0,s.jsx)(t.code,{children:"Block Devices"})," and ",(0,s.jsx)(t.code,{children:"Network"})," the device name is used as a sub-block, as there could be more than one device."]})}),"\n",(0,s.jsx)(t.h3,{id:"block-device-drive-types",children:"Block device drive types"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HDD"}),(0,s.jsx)(t.td,{children:"Hard disk drive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FDD"}),(0,s.jsx)(t.td,{children:"Floppy disk drive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ODD"}),(0,s.jsx)(t.td,{children:"Optical disk drive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SSD"}),(0,s.jsx)(t.td,{children:"Solid-state drive"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"virtual"}),(0,s.jsx)(t.td,{children:"virtual drive i.e. loop devices"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Unknown"}),(0,s.jsx)(t.td,{children:"unknown drive type"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"block-device-controller-types",children:"Block device controller types"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"IDE"}),(0,s.jsx)(t.td,{children:"Integrated Drive Electronics"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SCSI"}),(0,s.jsx)(t.td,{children:"Small computer system interface"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NVMe"}),(0,s.jsx)(t.td,{children:"Non-volatile Memory Express"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MMC"}),(0,s.jsx)(t.td,{children:"Multi-media controller (used for mobile phone storage devices)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"virtio"}),(0,s.jsx)(t.td,{children:"Virtualized storage controller/driver"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"loop"}),(0,s.jsx)(t.td,{children:"loop device"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Unknown"}),(0,s.jsx)(t.td,{children:"unknown controller type"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-machineregistration",children:"Example MachineRegistration"}),"\n",(0,s.jsx)(n,{language:"yaml",title:"registration example with smbios labels",showLineNumbers:!0,children:d.A})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76667:(e,t,n)=>{n.d(t,{A:()=>s});const s='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    elemental.cattle.io/CpuTotalCores: "${CPU/TotalCores}"\n    elemental.cattle.io/CpuTotalThreads: "${CPU/TotalThreads}"\n    elemental.cattle.io/TotalMemoryBytes: "${Memory/TotalPhysicalBytes}"\n    elemental.cattle.io/NumDisks: "${Storage/TotalDisks}"\n'},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},d=s.createContext(r);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);