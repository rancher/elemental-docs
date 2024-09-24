"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[1625],{77326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=t(74848),c=t(28453);const o={sidebar_label:"MachineInventory reference",title:""},i="MachineInventory",s={id:"machineinventory-reference",title:"",description:"When a new host registers successfully, the  creates a MachineInventory resource representing that particular host.",source:"@site/docs/machineinventory-reference.md",sourceDirName:".",slug:"/machineinventory-reference",permalink:"/next/machineinventory-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"MachineInventory reference",title:""},sidebar:"docs",previous:{title:"MachineRegistration",permalink:"/next/machineregistration-reference"},next:{title:"MachineInventorySelector reference",permalink:"/next/machineinventoryselector-reference"}},a={},h=[];function l(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components},{Head:t,Vars:o}=n;return t||u("Head",!0),o||u("Vars",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/machineinventory-reference"})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"machineinventory",children:"MachineInventory"})}),"\n",(0,r.jsxs)(n.p,{children:["When a new host registers successfully, the ",(0,r.jsx)(o,{name:"elemental_operator_name"})," creates a MachineInventory resource representing that particular host.\nThe MachineInventory stores the TPM hash of the tracked host, retrieved during the registration process, and allows to execute arbitrary commands (plans) on the machine."]}),"\n",(0,r.jsx)(n.p,{children:"A MachineInventory has two conditions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AdoptionReady"}),", which indicates the machine has been adopted by a selector to be part of a cluster."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Ready"}),", which indicates that the machine has been registered and provisioned with an Elemental OS."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const c={},o=r.createContext(c);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);