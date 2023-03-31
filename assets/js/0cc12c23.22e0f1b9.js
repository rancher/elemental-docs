"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Restore",title:""},i="Troubleshooting restore",s={unversionedId:"troubleshooting-restore",id:"version-stable/troubleshooting-restore",title:"",description:"When a restore is performed, do not restart the rancher-system-agent on elemental nodes as it can stale and end with the following error:",source:"@site/versioned_docs/version-stable/troubleshooting-restore.md",sourceDirName:".",slug:"/troubleshooting-restore",permalink:"/troubleshooting-restore",draft:!1,tags:[],version:"stable",frontMatter:{sidebar_label:"Restore",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/restore"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting-restore"},"Troubleshooting restore"),(0,o.kt)("admonition",{title:"warning",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"When a restore is performed, do not restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-system-agent")," on elemental nodes as it can stale and end with the following error:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"panic: error while connecting to Kubernetes cluster: the server has asked for the client to provide credentials")),(0,o.kt)("p",{parentName:"admonition"},"If you face this problem, please follow the procedure below.")),(0,o.kt)("p",null,"Before you initiate a restore, you need to copy ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/agent/rancher2_connection_info.json")," from the elemental node to a place where you have access with Rancher UI."),(0,o.kt)("p",null,"Once the file is copied, download the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-agent-token-update.sh")," script from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental"},"Elemental repository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"wget -q https://raw.githubusercontent.com/rancher/elemental/main/scripts/rancher-agent-token-update && chmod +x rancher-agent-token-update\n")),(0,o.kt)("p",null,"Execute the script without any additional options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"./rancher-agent-token-update\n")),(0,o.kt)("p",null,"After the restore successfully completed, copy ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher2_connection_info.json")," back to the elemental node to the path\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/agent/rancher2_connection_info.json"),". Finally, restart the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-system-agent")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"systemctl restart rancher-system-agent\n")))}m.isMDXComponent=!0}}]);