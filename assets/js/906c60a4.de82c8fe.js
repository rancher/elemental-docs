"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[366],{8266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(5893),s=t(1151);const a={sidebar_label:"Rancher upgrades",title:""},o="Troubleshooting Rancher upgrades",i={id:"troubleshooting-rancher-upgrades",title:"",description:"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).",source:"@site/versioned_docs/version-1.2/troubleshooting-rancher-upgrades.md",sourceDirName:".",slug:"/troubleshooting-rancher-upgrades",permalink:"/1.2/troubleshooting-rancher-upgrades",draft:!1,unlisted:!1,tags:[],version:"1.2",frontMatter:{sidebar_label:"Rancher upgrades",title:""},sidebar:"docs",previous:{title:"Add a custom certificate",permalink:"/1.2/custom-certificate"},next:{title:"Restore",permalink:"/1.2/troubleshooting-restore"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"troubleshooting-rancher-upgrades",children:"Troubleshooting Rancher upgrades"}),"\n",(0,r.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,r.jsxs)(n.p,{children:["Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/rancher/issues/41145",children:"https://github.com/rancher/rancher/issues/41145"}),")."]})}),"\n",(0,r.jsx)(n.p,{children:"Note that the issue is present only if at least one Elemental cluster is defined."}),"\n",(0,r.jsxs)(n.p,{children:["To workaround the issue create an empty ",(0,r.jsx)(n.code,{children:"dynamicschemas.management.cattle.io"})," resource named ",(0,r.jsx)(n.code,{children:"machineinventoryselectortemplate"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl apply -f - <<EOF\nkind: DynamicSchema\napiVersion: management.cattle.io/v3\nmetadata:\n  name: machineinventoryselectortemplate\nEOF\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The crash loop will stop and Rancher upgrade will complete successfully."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);