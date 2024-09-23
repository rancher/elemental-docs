"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9254],{19503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const s={sidebar_label:"Restore",title:""},a="Troubleshooting restore",c={id:"troubleshooting-restore",title:"",description:"When a restore is performed, do not restart the rancher-system-agent on elemental nodes as it can stale and end with the following error:",source:"@site/versioned_docs/version-1.3/troubleshooting-restore.md",sourceDirName:".",slug:"/troubleshooting-restore",permalink:"/1.3/troubleshooting-restore",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Restore",title:""},sidebar:"docs",previous:{title:"Rancher upgrades",permalink:"/1.3/troubleshooting-rancher-upgrades"},next:{title:"Upgrade",permalink:"/1.3/troubleshooting-upgrade"}},i={},l=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/troubleshooting-restore"})}),"\n",(0,r.jsx)(t.h1,{id:"troubleshooting-restore",children:"Troubleshooting restore"}),"\n",(0,r.jsxs)(t.admonition,{title:"warning",type:"warning",children:[(0,r.jsxs)(t.p,{children:["When a restore is performed, do not restart the ",(0,r.jsx)(t.code,{children:"rancher-system-agent"})," on elemental nodes as it can stale and end with the following error:"]}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"panic: error while connecting to Kubernetes cluster: the server has asked for the client to provide credentials"})}),(0,r.jsx)(t.p,{children:"If you face this problem, please follow the procedure below."})]}),"\n",(0,r.jsxs)(t.p,{children:["Before you initiate a restore, you need to copy ",(0,r.jsx)(t.code,{children:"/var/lib/rancher/agent/rancher2_connection_info.json"})," from the elemental node to a place where you have access with Rancher UI."]}),"\n",(0,r.jsxs)(t.p,{children:["Once the file is copied, download the ",(0,r.jsx)(t.code,{children:"rancher-agent-token-update.sh"})," script from the ",(0,r.jsx)(t.a,{href:"https://github.com/rancher/elemental",children:"Elemental repository"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget -q https://raw.githubusercontent.com/rancher/elemental/main/scripts/rancher-agent-token-update && chmod +x rancher-agent-token-update\n"})}),"\n",(0,r.jsx)(t.p,{children:"Execute the script without any additional options:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"./rancher-agent-token-update\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After the restore successfully completed, copy ",(0,r.jsx)(t.code,{children:"rancher2_connection_info.json"})," back to the elemental node to the path\n",(0,r.jsx)(t.code,{children:"/var/lib/rancher/agent/rancher2_connection_info.json"}),". Finally, restart the ",(0,r.jsx)(t.code,{children:"rancher-system-agent"})," service:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"systemctl restart rancher-system-agent\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);