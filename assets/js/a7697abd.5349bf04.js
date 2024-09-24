"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4666],{84517:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(74848),t=r(28453);const a={sidebar_label:"ManagedOSVersionChannel reference",title:""},d="ManagedOSVersionChannel reference",i={id:"managedosversionchannel-reference",title:"",description:"The ManagedOSVersionChannel resource is responsible of defining OS image channels which embed",source:"@site/docs/managedosversionchannel-reference.md",sourceDirName:".",slug:"/managedosversionchannel-reference",permalink:"/next/managedosversionchannel-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ManagedOSVersionChannel reference",title:""},sidebar:"docs",previous:{title:"ManagedOSImage reference",permalink:"/next/managedosimage-reference"},next:{title:"ManagedOSVersion reference",permalink:"/next/managedosversion-reference"}},l={},c=[{value:"ManagedOSVersionChannelSpec reference",id:"managedosversionchannelspec-reference",level:4},{value:"registry",id:"registry",level:4},{value:"upgradeContainer",id:"upgradecontainer",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/managedosversionchannel-reference"})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"managedosversionchannel-reference",children:"ManagedOSVersionChannel reference"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource is responsible of defining OS image channels which embed\ninformation about ready to use OS and ISO images."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"})," is digested by the ",(0,s.jsx)(n.a,{href:"/next/architecture-components#elemental-operator-daemon",children:"elemental-operator"}),"\nto produce a set of ",(0,s.jsx)(n.a,{href:"/next/managedosversion-reference",children:"ManagedOSVersion"})," resources, which are used\nfor building installation images and to perform OS upgrades."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/next/channels",children:"Operator/Channels"})," for more details."]}),"\n",(0,s.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"})," resource spec."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="managedosversionchannel-example.yaml" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-channel\n  namespace: fleet-default\nspec:\n  options:\n    image: registry.suse.com/rancher/elemental-channel:1.4.2\n  registry: priv-registry.local\n  syncInterval: 1h\n  type: custom\n"})}),"\n",(0,s.jsx)(n.h4,{id:"managedosversionchannelspec-reference",children:"ManagedOSVersionChannelSpec reference"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"deleteNoLongerInSyncVersions"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Automatically delete deprecated OS versions that are no longer included in the channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enabled"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"Enables this channel. Allowing syncing of OS versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"null"}),(0,s.jsx)(n.td,{children:"Defines the optional informations that can be added in an OS channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"registry"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"Registry prepended to all the embedded URIs during ManagedOSVersion resource generation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"syncInterval"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"1h"}),(0,s.jsx)(n.td,{children:"Defines when to sync the OS channel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsxs)(n.td,{children:["Defines the channel type, only ",(0,s.jsx)(n.code,{children:"custom"})," is supported now"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"upgradeContainer"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"null"}),(0,s.jsxs)(n.td,{children:["An upgrade container that can be defined. See ",(0,s.jsx)(n.a,{href:"#upgradecontainer",children:"reference"})]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"registry",children:"registry"}),"\n",(0,s.jsxs)(n.p,{children:["When set, the value is prepended to all the embedded OS and ISO URLs found in the channel to form the actual ",(0,s.jsx)(n.a,{href:"/next/managedosversion-reference",children:"ManagedOSVersion"}),"\nresources.\nThis makes the airgap setup easier, as the channel image can be used as is (while the actual OS and ISO images should still be extracted and loaded\non the private registry)."]}),"\n",(0,s.jsx)(n.h4,{id:"upgradecontainer",children:"upgradeContainer"}),"\n",(0,s.jsxs)(n.p,{children:["This allows to overwrite the default ",(0,s.jsx)(n.code,{children:"upgrade"})," field of System Upgrade Controller plans (see ",(0,s.jsx)(n.a,{href:"/next/upgrade-lifecycle#components",children:"upgrade compontents"}),") based on this ManagedOSVersion.\nThese keys are translated by the System Upgrade Controller to a Kubernetes ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container",children:"container"})," specification.\nThis is the container responsible of running an OS upgrade."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(96540);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);