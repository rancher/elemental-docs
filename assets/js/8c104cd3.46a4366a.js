"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8215],{33772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=s(74848),t=s(28453);const l={sidebar_label:"Upgrade Lifecycle",title:""},a="Upgrade Lifecycle",c={id:"upgrade-lifecycle",title:"",description:"Upgrade Flow",source:"@site/versioned_docs/version-1.6/upgrade-lifecycle.md",sourceDirName:".",slug:"/upgrade-lifecycle",permalink:"/upgrade-lifecycle",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{sidebar_label:"Upgrade Lifecycle",title:""},sidebar:"docs",previous:{title:"Upgrade",permalink:"/upgrade"},next:{title:"Customize Elemental Installation",permalink:"/custom-install"}},i={},o=[{value:"Components",id:"components",level:2},{value:"Versioning and components lifecycle",id:"versioning-and-components-lifecycle",level:2},{value:"Verifying successful upgrades",id:"verifying-successful-upgrades",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Head:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/upgrade-lifecycle"})}),"\n",(0,r.jsx)(n.h1,{id:"upgrade-lifecycle",children:"Upgrade Lifecycle"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Upgrade Flow",src:s(17767).A+"",width:"883",height:"831"})}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://elemental.docs.rancher.com/upgrade",children:"Elemental Operator"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The Elemental Operator supports several ways to configure the OS version on a Cluster level.",(0,r.jsx)(n.br,{}),"\n","Whenever a new ",(0,r.jsx)(n.code,{children:"ManagedOSIMage"})," is defined, a related Fleet ",(0,r.jsx)(n.code,{children:"Bundle"})," is also generated by the Elemental Operator."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://fleet.rancher.io/",children:"Fleet"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In this context, Fleet is used to apply an ",(0,r.jsx)(n.code,{children:"upgrade.cattle.io/v1"})," ",(0,r.jsx)(n.code,{children:"Plan"})," on each Cluster targeted by the ",(0,r.jsx)(n.code,{children:"ManagedOSImage"}),".",(0,r.jsx)(n.br,{}),"\n","The ",(0,r.jsx)(n.code,{children:"Plan"})," is then executed by the ",(0,r.jsx)(n.code,{children:"System Upgrade Controller"})," running on the downstream Elemental Cluster."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"System Upgrade Controller"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The System Upgrade Controller is an upgrade tool used by ",(0,r.jsx)(n.a,{href:"https://docs.k3s.io/upgrades/automated",children:"k3s"})," and ",(0,r.jsx)(n.a,{href:"https://docs.rke2.io/upgrade/automated_upgrade",children:"rke2"})," clusters. It should always be automatically installed on each provisioned Elemental cluster.",(0,r.jsx)(n.br,{}),"\n","In this context the System Upgrade Controller orchestrates the application of ",(0,r.jsx)(n.code,{children:"upgrade.cattle.io/v1"})," ",(0,r.jsx)(n.code,{children:"Plan"})," to the Elemental nodes."]}),"\n",(0,r.jsx)(n.h2,{id:"versioning-and-components-lifecycle",children:"Versioning and components lifecycle"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://fleet.rancher.io/",children:"Fleet"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"System Upgrade Controller"})," versions are controlled by Rancher."]}),"\n",(0,r.jsx)(n.p,{children:"On the Rancher cluster, you can run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get settings fleet-version system-upgrade-controller-chart-version\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information about chart versions, you can visit the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/charts",children:"repository"})," or read the ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/helm-charts-in-rancher",children:"documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The charts version is determined by Rancher.",(0,r.jsx)(n.br,{}),"\n","Depending on how Rancher is installed, the following environment variables can be set, for example when installing the ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/helm-chart-options#setting-extra-environment-variables",children:"Rancher Helm chart"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"CATTLE_SYSTEM_UPGRADE_CONTROLLER_CHART_VERSION\nCATTLE_FLEET_VERSION\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Manually updating the versions is generally not recommended.",(0,r.jsx)(n.br,{}),"\n","Also beware that a new ",(0,r.jsx)(n.code,{children:"CATTLE_SYSTEM_UPGRADE_CONTROLLER_CHART_VERSION"})," will trigger a ",(0,r.jsx)(n.code,{children:"system-upgrade-controller"})," chart update on all provisioned downstream clusters."]}),"\n",(0,r.jsx)(n.h2,{id:"verifying-successful-upgrades",children:"Verifying successful upgrades"}),"\n",(0,r.jsx)(n.p,{children:"Verifying the correct execution of the upgrade jobs is a fundamental part of ensuring the Elemental upgrade process is complete."}),"\n",(0,r.jsxs)(n.p,{children:["To troubleshoot each step within the entire upgrade process, please consult the ",(0,r.jsx)(n.a,{href:"/troubleshooting-upgrade",children:"related document"}),".",(0,r.jsx)(n.br,{}),"\n","This section only describes the last step needed to verify the correct application of the upgrade Plan on one targeted cluster."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Versions higher or equal to ",(0,r.jsx)(n.strong,{children:"v0.13.4"})," of the ",(0,r.jsx)(n.code,{children:"system-upgrade-controller"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl -n cattle-system describe plan os-upgrader-my-upgrade\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once the Plan is applied to all nodes, it will have a ",(0,r.jsx)(n.code,{children:"Complete"})," status condition."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Older versions:"}),"\n",(0,r.jsxs)(n.p,{children:["Each Plan has a ",(0,r.jsx)(n.code,{children:"latestHash"})," status value that should match the Plan label on each node.",(0,r.jsx)(n.br,{}),"\n","A simple script can be used to list all nodes where the plan has not be applied yet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"#!/bin/bash\n\n# This script prints a list of all nodes where an upgrade plan was not applied.  \n# To further determine the cause of failures, you can analyze the Plan status and the related jobs.\n# For ex: kubectl -n cattle-system get plans,jobs\n\n# Edit this variable according to your ManagedOSImage name.\nMANAGED_OS_IMAGE_NAME=my-upgrade\n\nPLAN_NAME=os-upgrader-$MANAGED_OS_IMAGE_NAME\nLATEST_HASH=$(kubectl -n cattle-system get plan $PLAN_NAME -o=jsonpath='{.status.latestHash}')\n\nprintf \"Plan '$PLAN_NAME' latest hash is: '$LATEST_HASH'\\n\"\n\nPLAN_LABEL=plan.upgrade.cattle.io/$PLAN_NAME\nprintf \"Listing all nodes with mismatching or missing label '$PLAN_LABEL':\\n\"\nkubectl get nodes -l $PLAN_LABEL!=$LATEST_HASH\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},17767:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/upgrade-lifecycle-d04ebc28593991d53a8c0e59bb2a666b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(96540);const t={},l=r.createContext(t);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);