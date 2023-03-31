"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[5489],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?t.createElement(k,l(l({ref:n},p),{},{components:a})):t.createElement(k,l({ref:n},p))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1489:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Backup",title:""},l="Backup",s={unversionedId:"backup",id:"backup",title:"",description:"Follow this guide to create backup for Elemental configuration installed together with Rancher.",source:"@site/docs/backup.md",sourceDirName:".",slug:"/backup",permalink:"/next/backup",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Backup",title:""},sidebar:"docs",previous:{title:"Inventory Management",permalink:"/next/inventory-management"},next:{title:"Restore",permalink:"/next/restore"}},i={},c=[{value:"Install rancher-backup operator for Rancher",id:"install-rancher-backup-operator-for-rancher",level:2},{value:"Backup Elemental with rancher-backup operator (only for Rancher v2.7 and below)",id:"backup-elemental-with-rancher-backup-operator-only-for-rancher-v27-and-below",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=p("Tabs"),m=p("TabItem"),d={toc:c},k="wrapper";function b(e){let{components:n,...a}=e;return(0,r.kt)(k,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup"},"Backup"),(0,r.kt)("p",null,"Follow this guide to create backup for Elemental configuration installed together with Rancher."),(0,r.kt)("h2",{id:"install-rancher-backup-operator-for-rancher"},"Install rancher-backup operator for Rancher"),(0,r.kt)("p",null,"Go to official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"Rancher documentation")," and install rancher-bakup operator from there."),(0,r.kt)("admonition",{title:"warning",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"For Rancher v2.7 and below it is needed to edit ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceSet")," for rancher-backup operator.\nFor Rancher v2.7.1+ backup will be done automatically by rancher-backup operator and no further operation are needed.")),(0,r.kt)("h2",{id:"backup-elemental-with-rancher-backup-operator-only-for-rancher-v27-and-below"},"Backup Elemental with rancher-backup operator (only for Rancher v2.7 and below)"),(0,r.kt)("p",null,"Fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-resource-set")," object from Kubernetes cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl get ResourceSet rancher-resource-set -o yaml > rancher-resource-set.yaml\n")),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"manualEdit",label:"Manually editing the resource set yaml",mdxType:"TabItem"},(0,r.kt)("p",null,"At the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-resource-set.yaml")," file add the definition of Elemental resources"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'- apiVersion: apiextensions.k8s.io/v1\nkindsRegexp: .\nresourceNameRegexp: elemental.cattle.io$\n- apiVersion: apps/v1\nkindsRegexp: ^deployments$\nnamespaces:\n- cattle-elemental-system\nresourceNames:\n- elemental-operator\n- apiVersion: rbac.authorization.k8s.io/v1\nkindsRegexp: ^clusterroles$\nresourceNames:\n- elemental-operator\n- apiVersion: rbac.authorization.k8s.io/v1\nkindsRegexp: ^clusterrolebindings$\nresourceNames:\n- elemental-operator\n- apiVersion: v1\nkindsRegexp: ^serviceaccounts$\nnamespaces:\n- cattle-elemental-system\nresourceNames:\n- elemental-operator\n- apiVersion: management.cattle.io/v3\nkindsRegexp: ^globalrole$\nresourceNames:\n- elemental-operator\n- apiVersion: management.cattle.io/v3\nkindsRegexp: ^apiservice$\nresourceNameRegexp: elemental.cattle.io$\n- apiVersion: elemental.cattle.io/v1beta1\nkindsRegexp: .\nnamespaceRegexp: ^cattle-fleet-|^fleet-|^cluster-fleet-\n- apiVersion: rbac.authorization.k8s.io/v1\nkindsRegexp: ^roles$|^rolebindings$\nlabelSelectors:\n  matchExpressions:\n  - key: elemental.cattle.io/managed\n    operator: In\n    values:\n    - "true"\nnamespaceRegexp: ^cattle-fleet-|^fleet-|^cluster-fleet-\n- apiVersion: v1\nkindsRegexp: ^secrets$|^serviceaccounts$\nlabelSelectors:\n  matchExpressions:\n  - key: elemental.cattle.io/managed\n    operator: In\n    values:\n    - "true"\nnamespaceRegexp: ^cattle-fleet-|^fleet-|^cluster-fleet-\n'))),(0,r.kt)(m,{value:"yqMerge",label:"Using yq to auto merge yaml files",mdxType:"TabItem"},(0,r.kt)("p",null,"You can use yq to auto merge ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-resource-set.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-resource-set.yaml"),". Please go and install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mikefarah/yq/#install"},"yq v4.x")," version"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"elemental-resource-set.yaml")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: resources.cattle.io/v1\nkind: ResourceSet\nmetadata:\n  name: rancher-resource-set\nresourceSelectors:\n- apiVersion: apiextensions.k8s.io/v1\n  kindsRegexp: .\n  resourceNameRegexp: elemental.cattle.io$\n- apiVersion: apps/v1\n  kindsRegexp: ^deployments$\n  namespaces:\n  - cattle-elemental-system\n  resourceNames:\n  - elemental-operator\n- apiVersion: rbac.authorization.k8s.io/v1\n  kindsRegexp: ^clusterroles$\n  resourceNames:\n  - elemental-operator\n- apiVersion: rbac.authorization.k8s.io/v1\n  kindsRegexp: ^clusterrolebindings$\n  resourceNames:\n  - elemental-operator\n- apiVersion: v1\n  kindsRegexp: ^serviceaccounts$\n  namespaces:\n  - cattle-elemental-system\n  resourceNames:\n  - elemental-operator\n- apiVersion: management.cattle.io/v3\n  kindsRegexp: ^globalrole$\n  resourceNames:\n  - elemental-operator\n- apiVersion: management.cattle.io/v3\n  kindsRegexp: ^apiservice$\n  resourceNameRegexp: elemental.cattle.io$\n- apiVersion: elemental.cattle.io/v1beta1\n  kindsRegexp: .\n  namespaceRegexp: ^cattle-fleet-|^fleet-|^cluster-fleet-\n- apiVersion: rbac.authorization.k8s.io/v1\n  kindsRegexp: ^roles$|^rolebindings$\n  labelSelectors:\n    matchExpressions:\n    - key: elemental.cattle.io/managed\n      operator: In\n      values:\n      - "true"\n  namespaceRegexp: ^cattle-fleet-|^fleet-|^cluster-fleet-\n- apiVersion: v1\n  kindsRegexp: ^secrets$|^serviceaccounts$\n  labelSelectors:\n    matchExpressions:\n    - key: elemental.cattle.io/managed\n      operator: In\n      values:\n      - "true"\n  namespaceRegexp: ^cattle-fleet-|^fleet-|^cluster-fleet-\n')),(0,r.kt)("p",null,"To merge both files, use ",(0,r.kt)("inlineCode",{parentName:"p"},"yq")," command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"yq ea --inplace '. as $item ireduce ({}; . *+ $item )' rancher-resource-set.yaml elemental-resource-set.yaml\n")))),(0,r.kt)("p",null,"Then apply changes to Kubernetes cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl apply -f rancher-resource-set.yaml\n")),(0,r.kt)("p",null,"Create backup with creating Backup object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: elemental-backup\nspec:\n  resourceSetName: rancher-resource-set\n  schedule: "10 3 * * *"\n  retentionCount: 10\n')),(0,r.kt)("p",null,"Check logs from rancher-backup operator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,r.kt)("p",null,"Verify if backup file was created on Persistent Volume."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"...\nINFO[2022/10/17 07:45:04] Finding files starting with /var/lib/backups/rancher-backup-430169aa-edde-4a61-85e8-858f625a755b*.tar.gz \nINFO[2022/10/17 07:45:04] File rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz was created at 2022-10-17 0\n...\n")))}b.isMDXComponent=!0}}]);