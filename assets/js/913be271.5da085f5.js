"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8777],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>k});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},b=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=n,k=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return t?a.createElement(k,c(c({ref:r},u),{},{components:t})):a.createElement(k,c({ref:r},u))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9605:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_label:"Backup",title:""},c="Backup",l={unversionedId:"backup",id:"version-Stable/backup",title:"",description:"Follow this guide to create backup for Elemental configuration installed together with Rancher.",source:"@site/versioned_docs/version-Stable/backup.md",sourceDirName:".",slug:"/backup",permalink:"/backup",draft:!1,tags:[],version:"Stable",frontMatter:{sidebar_label:"Backup",title:""},sidebar:"docs",previous:{title:"Inventory Management",permalink:"/inventory-management"},next:{title:"Restore",permalink:"/restore"}},i={},p=[{value:"Install rancher-backup operator for Rancher",id:"install-rancher-backup-operator-for-rancher",level:2},{value:"Backup Elemental with rancher-backup operator",id:"backup-elemental-with-rancher-backup-operator",level:2}],u={toc:p},s="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backup"},"Backup"),(0,n.kt)("p",null,"Follow this guide to create backup for Elemental configuration installed together with Rancher."),(0,n.kt)("h2",{id:"install-rancher-backup-operator-for-rancher"},"Install rancher-backup operator for Rancher"),(0,n.kt)("p",null,"Go to official ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"Rancher documentation")," and install rancher-backup operator from there."),(0,n.kt)("h2",{id:"backup-elemental-with-rancher-backup-operator"},"Backup Elemental with rancher-backup operator"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"backup object")," (adapted to your needs) to backup an Elemental configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: elemental-backup\nspec:\n  resourceSetName: rancher-resource-set\n  schedule: "10 3 * * *"\n  retentionCount: 10\n')),(0,n.kt)("p",null,"Apply manifest on Kubernete."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f elemental-backup.yaml\n")),(0,n.kt)("p",null,"Check logs from rancher-backup operator."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,n.kt)("p",null,"Verify if backup file was created on Persistent Volume."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"...\nINFO[2022/10/17 07:45:04] Finding files starting with /var/lib/backups/rancher-backup-430169aa-edde-4a61-85e8-858f625a755b*.tar.gz \nINFO[2022/10/17 07:45:04] File rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz was created at 2022-10-17 0\n...\n")))}m.isMDXComponent=!0}}]);