"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2501],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(b,s(s({ref:r},u),{},{components:t})):n.createElement(b,s({ref:r},u))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_label:"Kubernetes versions",title:""},s=void 0,i={unversionedId:"kubernetesversions",id:"version-stable/kubernetesversions",title:"",description:"Valid Versions",source:"@site/versioned_docs/version-stable/kubernetesversions.md",sourceDirName:".",slug:"/kubernetesversions",permalink:"/kubernetesversions",draft:!1,tags:[],version:"stable",frontMatter:{sidebar_label:"Kubernetes versions",title:""},sidebar:"docs",previous:{title:"Elemental Operator Helm Chart",permalink:"/elementaloperatorchart-reference"},next:{title:"Smbios",permalink:"/smbios"}},l={},c=[{value:"Valid Versions",id:"valid-versions",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"valid-versions"},"Valid Versions"),(0,a.kt)("p",null,"The list of valid versions for the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetesVersion")," field can be determined\nfrom the Rancher metadata using the following commands."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"k3s:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.6/data/data.json | jq -r '.k3s.releases[].version'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"rke2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"curl -sL https://raw.githubusercontent.com/rancher/kontainer-driver-metadata/release-v2.6/data/data.json | jq -r '.rke2.releases[].version'\n")))}m.isMDXComponent=!0}}]);