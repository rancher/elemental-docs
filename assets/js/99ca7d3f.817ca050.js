"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8963],{37979:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=c(85893),n=c(11151);const o={sidebar_label:"Add a custom certificate",title:""},r=void 0,s={id:"custom-certificate",title:"",description:"How to add a custom certificate",source:"@site/versioned_docs/version-1.3/custom-certificate.md",sourceDirName:".",slug:"/custom-certificate",permalink:"/1.3/custom-certificate",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Add a custom certificate",title:""},sidebar:"docs",previous:{title:"Include cloud-config from removable devices",permalink:"/1.3/removable-device-cloudconfig"},next:{title:"Rancher upgrades",permalink:"/1.3/troubleshooting-rancher-upgrades"}},a={},d=[{value:"How to add a custom certificate",id:"how-to-add-a-custom-certificate",level:3}];function l(e){const t={admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Head:c}=t;return c||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/custom-certificate"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-add-a-custom-certificate",children:"How to add a custom certificate"}),"\n",(0,i.jsxs)(t.p,{children:["Prerequisite: A certificate in ",(0,i.jsx)(t.code,{children:".pem"})," format"]}),"\n",(0,i.jsx)(t.p,{children:"Goal: Make a custom certificate available system-wide"}),"\n",(0,i.jsx)(t.admonition,{title:"This is for certificates used by system-level services.",type:"note",children:(0,i.jsx)(t.p,{children:"Kubernetes workloads should bring their certificates within the\ncontainer image instead."})}),"\n",(0,i.jsx)(t.p,{children:"In order to install a custom certificate on SLE Micro for Rancher we\nneed to"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["copy the ",(0,i.jsx)(t.code,{children:".pem"})," file to ",(0,i.jsx)(t.code,{children:"/etc/pki/trust/anchors/"})]}),"\n",(0,i.jsxs)(t.li,{children:["run ",(0,i.jsx)(t.code,{children:"update-ca-certificates"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The respective ",(0,i.jsx)(t.code,{children:"cloud-config"})," snippet looks like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"write_files:\n  - path: /etc/pki/trust/anchors/my-custom-certificate.pem\n    permission: 0444\n    content: |-\n      -----BEGIN CERTIFICATE-----\n      ...\n      -----END CERTIFICATE-----\nruncmd:\n  - update-ca-certificates\n"})}),"\n",(0,i.jsx)(t.p,{children:"(actual certificate content omitted for brevity reasons)"})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,c)=>{c.d(t,{Z:()=>s,a:()=>r});var i=c(67294);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);