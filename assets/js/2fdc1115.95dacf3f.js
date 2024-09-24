"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7948],{91960:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=r(74848),t=r(28453);const i={sidebar_label:"ManagedOSVersion reference",title:""},a="ManagedOSVersion reference",d={id:"managedosversion-reference",title:"",description:"The ManagedOSVersion resource is responsible of defining an OS image version that can be used with SeedImage or ManagedOSImage resources.",source:"@site/versioned_docs/version-1.3/managedosversion-reference.md",sourceDirName:".",slug:"/managedosversion-reference",permalink:"/1.3/managedosversion-reference",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"ManagedOSVersion reference",title:""},sidebar:"docs",previous:{title:"ManagedOSVersionChannel reference",permalink:"/1.3/managedosversionchannel-reference"},next:{title:"Cluster reference",permalink:"/1.3/cluster-reference"}},c={},l=[{value:"ManagedOSVersionSpec reference",id:"managedosversionspec-reference",level:4},{value:"metadata",id:"metadata",level:4},{value:"upgradeContainer",id:"upgradecontainer",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Details:r,Head:i}=n;return r||x("Details",!0),i||x("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/managedosversion-reference"})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"managedosversion-reference",children:"ManagedOSVersion reference"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," resource is responsible of defining an OS image version that can be used with ",(0,s.jsx)(n.code,{children:"SeedImage"})," or ",(0,s.jsx)(n.code,{children:"ManagedOSImage"})," resources."]}),"\n",(0,s.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," resource spec."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="managedosversion-example.yaml" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersion\nmetadata:\n  labels:\n    elemental.cattle.io/channel: elemental-channel\n  name: v1.2.3\n  namespace: fleet-default\nspec:\n  metadata:\n    displayName: SLE Micro\n    upgradeImage: registry.suse.com/suse/sle-micro/5.4:1.2.3\n  type: container\n  version: v1.2.3\n"})}),"\n",(0,s.jsx)(n.h4,{id:"managedosversionspec-reference",children:"ManagedOSVersionSpec reference"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"metadata"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"null"}),(0,s.jsxs)(n.td,{children:["This defines some data about the OS image. See ",(0,s.jsx)(n.a,{href:"#metadata",children:"reference"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minVersion"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"null"}),(0,s.jsx)(n.td,{children:"Not used"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsxs)(n.td,{children:["Defines the OS image type, could be ",(0,s.jsx)(n.code,{children:"container"})," or ",(0,s.jsx)(n.code,{children:"iso"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"version"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"OS image version"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"upgradeContainer"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"null"}),(0,s.jsxs)(n.td,{children:["An upgrade container that can be defined. See ",(0,s.jsx)(n.a,{href:"#upgradecontainer",children:"reference"})]})]})]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"ISO image example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"metadata:\n  displayName: Elemental Teal ISO x86_64\n  uri: registry.suse.com/rancher/elemental-teal-iso/5.4:1.2.3\ntype: iso\nversion: v1.2.3\n"})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Container image example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"metadata:\n  displayName: Elemental Teal OS\n  upgradeImage: registry.suse.com/rancher/elemental-teal/5.4:1.2.3\ntype: container\nversion: v1.2.3\n"})})]}),"\n",(0,s.jsx)(n.h4,{id:"metadata",children:"metadata"}),"\n",(0,s.jsx)(n.p,{children:"This describes the needed informations to define an OS image in Elemental."}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"type"})," is set to ",(0,s.jsx)(n.code,{children:"container"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"displayName"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"OS image name as seen in Rancher UI"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"upgradeImage"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"Fully qualified Containter image (OCI reference or HTTP URI)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"type"})," is set to ",(0,s.jsx)(n.code,{children:"iso"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"displayName"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"OS image name as seen in Rancher UI"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uri"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"Fully qualified ISO image"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"upgradecontainer",children:"upgradeContainer"}),"\n",(0,s.jsxs)(n.p,{children:["This allows to overwrite the default ",(0,s.jsx)(n.code,{children:"upgrade"})," field of System Upgrade Controller plans (see ",(0,s.jsx)(n.a,{href:"/1.3/upgrade-lifecycle#components",children:"upgrade compontents"}),") based on this ManagedOSVersion.\nThese keys are translated by the System Upgrade Controller to a Kubernetes ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container",children:"container"})," specification.\nThis is the container responsible of running an OS upgrade."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var s=r(96540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);