"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3080],{56324:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=r(17624),s=r(4552);const t={sidebar_label:"ManagedOSVersionChannel reference",title:""},i="ManagedOSVersionChannel reference",c={id:"managedosversionchannel-reference",title:"",description:"The ManagedOSVersionChannel resource is responsible of defining OS image channel.",source:"@site/versioned_docs/version-1.5/managedosversionchannel-reference.md",sourceDirName:".",slug:"/managedosversionchannel-reference",permalink:"/1.5/managedosversionchannel-reference",draft:!1,unlisted:!1,tags:[],version:"1.5",frontMatter:{sidebar_label:"ManagedOSVersionChannel reference",title:""},sidebar:"docs",previous:{title:"ManagedOSImage reference",permalink:"/1.5/managedosimage-reference"},next:{title:"ManagedOSVersion reference",permalink:"/1.5/managedosversion-reference"}},o={},d=[{value:"ManagedOSVersionChannelSpec reference",id:"managedosversionchannelspec-reference",level:4},{value:"upgradeContainer",id:"upgradecontainer",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/managedosversionchannel-reference"})}),"\n",(0,a.jsx)(n.h1,{id:"managedosversionchannel-reference",children:"ManagedOSVersionChannel reference"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource is responsible of defining OS image channel."]}),"\n",(0,a.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,a.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource spec."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="managedosversionchannel-example.yaml" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-channel\n  namespace: fleet-default\nspec:\n  options:\n    image: registry.suse.com/rancher/elemental-channel:1.4.2\n  syncInterval: 1h\n  type: custom\n"})}),"\n",(0,a.jsx)(n.h4,{id:"managedosversionchannelspec-reference",children:"ManagedOSVersionChannelSpec reference"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Key"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Default value"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"options"}),(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"Defines the optional informations that can be added in an OS channel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"syncInterval"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"1h"}),(0,a.jsx)(n.td,{children:"Defines when to sync the OS channel"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"type"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"empty"}),(0,a.jsxs)(n.td,{children:["Defines the channel type, only ",(0,a.jsx)(n.code,{children:"custom"})," is supported now"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"upgradeContainer"}),(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsxs)(n.td,{children:["An upgrade container that can be defined. See ",(0,a.jsx)(n.a,{href:"#upgradecontainer",children:"reference"})]})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"upgradecontainer",children:"upgradeContainer"}),"\n",(0,a.jsxs)(n.p,{children:["This allows to overwrite the default ",(0,a.jsx)(n.code,{children:"upgrade"})," field of System Upgrade Controller plans (see ",(0,a.jsx)(n.a,{href:"/1.5/upgrade-lifecycle#components",children:"upgrade compontents"}),") based on this ManagedOSVersion.\nThese keys are translated by the System Upgrade Controller to a Kubernetes ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container",children:"container"})," specification.\nThis is the container responsible of running an OS upgrade."]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>c,M:()=>i});var a=r(11504);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);