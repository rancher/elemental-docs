"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[198],{97428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(74848),o=t(28453);const s={sidebar_label:"Rancher upgrades",title:""},a="Troubleshooting Rancher upgrades",i={id:"troubleshooting-rancher-upgrades",title:"",description:"Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see https://github.com/rancher/rancher/issues/41145).",source:"@site/versioned_docs/version-1.6/troubleshooting-rancher-upgrades.md",sourceDirName:".",slug:"/troubleshooting-rancher-upgrades",permalink:"/troubleshooting-rancher-upgrades",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{sidebar_label:"Rancher upgrades",title:""},sidebar:"docs",previous:{title:"Support",permalink:"/troubleshooting-support"},next:{title:"Restore",permalink:"/troubleshooting-restore"}},c={},l=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/troubleshooting-rancher-upgrades"})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"troubleshooting-rancher-upgrades",children:"Troubleshooting Rancher upgrades"})}),"\n",(0,r.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,r.jsxs)(n.p,{children:["Upgrading to Rancher v2.7.2 will fail if Elemental clusters are defined. The rancher pod gets stuck in a crash loop (see ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/rancher/issues/41145",children:"https://github.com/rancher/rancher/issues/41145"}),")."]})}),"\n",(0,r.jsx)(n.p,{children:"Note that the issue is present only if at least one Elemental cluster is defined."}),"\n",(0,r.jsxs)(n.p,{children:["To workaround the issue create an empty ",(0,r.jsx)(n.code,{children:"dynamicschemas.management.cattle.io"})," resource named ",(0,r.jsx)(n.code,{children:"machineinventoryselectortemplate"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl apply -f - <<EOF\nkind: DynamicSchema\napiVersion: management.cattle.io/v3\nmetadata:\n  name: machineinventoryselectortemplate\nEOF\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The crash loop will stop and Rancher upgrade will complete successfully."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);