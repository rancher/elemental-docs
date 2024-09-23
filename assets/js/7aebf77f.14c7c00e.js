"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7104],{94062:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(74848),t=r(28453);const o={sidebar_label:"Kubernetes versions",title:""},i=void 0,a={id:"kubernetesversions",title:"",description:"Valid Versions",source:"@site/versioned_docs/version-1.4/kubernetesversions.md",sourceDirName:".",slug:"/kubernetesversions",permalink:"/1.4/kubernetesversions",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Kubernetes versions",title:""},sidebar:"docs",previous:{title:"Elemental Operator Helm Chart",permalink:"/1.4/elementaloperatorchart-reference"},next:{title:"Smbios",permalink:"/1.4/smbios"}},c={},l=[{value:"Valid Versions",id:"valid-versions",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Head:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/kubernetesversions"})}),"\n",(0,s.jsx)(n.h2,{id:"valid-versions",children:"Valid Versions"}),"\n",(0,s.jsxs)(n.p,{children:["The list of valid versions for the ",(0,s.jsx)(n.code,{children:"kubernetesVersion"})," field can be determined\nfrom the Rancher metadata using the following commands."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"k3s:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.6/data/data.json | jq -r '.k3s.releases[].version'\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"rke2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.6/data/data.json | jq -r '.rke2.releases[].version'\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);