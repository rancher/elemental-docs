"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3384],{45770:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(85893),s=r(11151);const o={sidebar_label:"Kubernetes versions",title:""},a=void 0,i={id:"kubernetesversions",title:"",description:"Valid Versions",source:"@site/docs/kubernetesversions.md",sourceDirName:".",slug:"/kubernetesversions",permalink:"/next/kubernetesversions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Kubernetes versions",title:""},sidebar:"docs",previous:{title:"Elemental Operator Helm Chart",permalink:"/next/elementaloperatorchart-reference"},next:{title:"Smbios",permalink:"/next/smbios"}},c={},l=[{value:"Valid Versions",id:"valid-versions",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/kubernetesversions"})}),"\n",(0,t.jsx)(n.h2,{id:"valid-versions",children:"Valid Versions"}),"\n",(0,t.jsxs)(n.p,{children:["The list of valid versions for the ",(0,t.jsx)(n.code,{children:"kubernetesVersion"})," field can be determined\nfrom the Rancher metadata using the following commands."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"k3s:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.6/data/data.json | jq -r '.k3s.releases[].version'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"rke2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.6/data/data.json | jq -r '.rke2.releases[].version'\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(67294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);