"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8329],{6336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=n(74848),s=n(28453);const l={sidebar_label:"MachineInventorySelectorTemplate reference",title:""},a="MachineInventorySelectorTemplate reference",c={id:"machineinventoryselectortemplate-reference",title:"",description:"The MachineInventorySelectorTemplate is a user defined resource that will be used as the blueprint to create the required MachineInventorySelectors.",source:"@site/versioned_docs/version-1.6/machineinventoryselectortemplate-reference.md",sourceDirName:".",slug:"/machineinventoryselectortemplate-reference",permalink:"/machineinventoryselectortemplate-reference",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{sidebar_label:"MachineInventorySelectorTemplate reference",title:""},sidebar:"docs",previous:{title:"MachineInventorySelector reference",permalink:"/machineinventoryselector-reference"},next:{title:"ManagedOSImage reference",permalink:"/managedosimage-reference"}},i={},o=[{value:"template.spec.selector.matchLabels",id:"templatespecselectormatchlabels",level:4},{value:"template.spec.selector.matchExpressions",id:"templatespecselectormatchexpressions",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:n,Head:l}=t;return n||p("Details",!0),l||p("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/machineinventoryselectortemplate-reference"})}),"\n",(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate reference"})}),"\n",(0,r.jsxs)(t.p,{children:["The MachineInventorySelectorTemplate is a user defined resource that will be used as the blueprint to create the required ",(0,r.jsx)(t.a,{href:"/machineinventoryselector-reference",children:"MachineInventorySelectors"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"It is the resource responsible of defining the matching criteria to pair an inventoried machine with a Cluster resource."}),"\n",(0,r.jsxs)(t.p,{children:["The relevant key is the ",(0,r.jsx)(t.code,{children:"selector"})," which includes label selector expressions."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="MachineInventorySelectorTemplate" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: my-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        ...\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"template.spec.selector"})," can include ",(0,r.jsx)(t.code,{children:"matchLabels"})," and or ",(0,r.jsx)(t.code,{children:"matchExpressions"})," keys."]}),"\n",(0,r.jsx)(t.h4,{id:"templatespecselectormatchlabels",children:"template.spec.selector.matchLabels"}),"\n",(0,r.jsxs)(t.p,{children:["It is a map of ",(0,r.jsx)(t.code,{children:"{key,value}"})," pairs ",(0,r.jsx)(t.code,{children:"(map[string]string)"}),". When multiple labels are provided all labels must match."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:"showLineNumbers",children:"...\nspec:\n  template:\n    spec:\n      selector:\n        matchLabels:\n          element: fire\n          manufacturer: somevalue\n"})})]}),"\n",(0,r.jsx)(t.p,{children:"A Cluster defined with the above selector will only attempt to provision nodes inventoried including these two labels."}),"\n",(0,r.jsx)(t.h4,{id:"templatespecselectormatchexpressions",children:"template.spec.selector.matchExpressions"}),"\n",(0,r.jsx)(t.p,{children:"It is a list of label selectors, each label selectors can be defined as:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"This is the label key the selector applies on"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"operator"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Represents the relationship of the key to a set of values. Valid operators are 'In', 'NotIn', 'Exists' and 'DoesNotExist'"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"values"}),(0,r.jsx)(t.td,{children:"[]string"}),(0,r.jsx)(t.td,{children:"Values is an array of string values. If the operator is 'In' or 'NotIn', the values array must be non-empty. If the operator is 'Exists' or 'DoesNotExist', the values array must be empty"})]})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:"showLineNumbers",children:"...\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: element\n            operator: In\n            values: [ 'fire' ]\n          - key: manufacturer\n            operator: Exists\n"})})]}),"\n",(0,r.jsxs)(t.p,{children:["A Cluster defined with the above selector will only attempt to provision nodes inventoried with the ",(0,r.jsx)(t.code,{children:"element=fire"})," label and including a ",(0,r.jsx)(t.code,{children:"manufacturer"})," label defined with any value."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);