"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[777],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4036:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_label:"Restore",title:""},c="Restore",s={unversionedId:"restore",id:"restore",title:"",description:"Follow this guide to restore an elemental node configuration from a backup with Rancher.",source:"@site/docs/restore.md",sourceDirName:".",slug:"/restore",permalink:"/restore",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Restore",title:""},sidebar:"elemental",previous:{title:"Backup",permalink:"/backup"},next:{title:"Configure Wi-Fi",permalink:"/wifi"}},l={},i=[{value:"Prepare rancher-backup operator and backup files for restoring",id:"prepare-rancher-backup-operator-and-backup-files-for-restoring",level:2},{value:"Restore the elemental node configuration with rancher-backup operator",id:"restore-the-elemental-node-configuration-with-rancher-backup-operator",level:2}],p={toc:i};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"restore"},"Restore"),(0,a.kt)("p",null,"Follow this guide to restore an elemental node configuration from a backup with Rancher."),(0,a.kt)("h2",{id:"prepare-rancher-backup-operator-and-backup-files-for-restoring"},"Prepare rancher-backup operator and backup files for restoring"),(0,a.kt)("p",null,"Go to official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},"Rancher documentation")," and make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-bakup operator")," is installed and has access to backup files."),(0,a.kt)("h2",{id:"restore-the-elemental-node-configuration-with-rancher-backup-operator"},"Restore the elemental node configuration with rancher-backup operator"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"restore object")," to restore the backup tarball:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz\n")),(0,a.kt)("p",null,"Apply manifest on Kubernetes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f rancher-restore.yaml\n")),(0,a.kt)("p",null,"Check logs from rancher-backup operator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,a.kt)("p",null,"Verify if backup file was restore successfully."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"...\nINFO[2022/10/31 06:34:50] Processing controllerRef apps/v1/deployments/rancher \nINFO[2022/10/31 06:34:50] Done restoring\n...\n")),(0,a.kt)("p",null,"Continue with procedure from ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"Rancher documentation")))}u.isMDXComponent=!0}}]);