"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3790],{35595:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=r(74848),s=r(28453),d=r(79143);const i={sidebar_label:"ManagedOSImage reference",title:""},l="ManagedOSImage reference",c={id:"managedosimage-reference",title:"",description:"The ManagedOSImage resource is responsible of defining an OS image or image version that needs to be applied to each node in a set of targeted Clusters.",source:"@site/versioned_docs/version-1.4/managedosimage-reference.md",sourceDirName:".",slug:"/managedosimage-reference",permalink:"/1.4/managedosimage-reference",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"ManagedOSImage reference",title:""},sidebar:"docs",previous:{title:"MachineInventorySelectorTemplate reference",permalink:"/1.4/machineinventoryselectortemplate-reference"},next:{title:"ManagedOSVersionChannel reference",permalink:"/1.4/managedosversionchannel-reference"}},o={},a=[{value:"ManagedOSImageSpec reference",id:"managedosimagespec-reference",level:4},{value:"cloudConfig",id:"cloudconfig",level:4},{value:"nodeSelector",id:"nodeselector",level:4},{value:"drain",id:"drain",level:4},{value:"prepare",id:"prepare",level:4},{value:"upgradeContainer",id:"upgradecontainer",level:4},{value:"clusterRolloutStrategy",id:"clusterrolloutstrategy",level:4},{value:"clusterTargets",id:"clustertargets",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{CodeBlock:r,Details:i,Head:l}=n;return r||j("CodeBlock",!0),i||j("Details",!0),l||j("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/managedosimage-reference"})}),"\n","\n","\n",(0,t.jsx)(n.h1,{id:"managedosimage-reference",children:"ManagedOSImage reference"}),"\n",(0,t.jsx)(n.p,{children:"The ManagedOSImage resource is responsible of defining an OS image or image version that needs to be applied to each node in a set of targeted Clusters."}),"\n",(0,t.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,t.jsx)(n.code,{children:"ManagedOSImage"})," resource spec."]}),"\n",(0,t.jsx)(r,{language:"yaml",title:"upgrade-cluster-target.yaml",showLineNumbers:!0,children:d.A}),"\n",(0,t.jsx)(n.h4,{id:"managedosimagespec-reference",children:"ManagedOSImageSpec reference"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"osImage"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsxs)(n.td,{children:["The fully qualified image to upgrade nodes to. This value has priority over ",(0,t.jsx)(n.code,{children:"managedOSVersionName"})," if both are configured."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"managedOSVersionName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsxs)(n.td,{children:["The name of a ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," to upgrade nodes to."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cloudConfig"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["A cloud-init config to apply to the nodes during upgrades. See ",(0,t.jsx)(n.a,{href:"#cloudconfig",children:"reference"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nodeSelector"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["This selector can be used to target specific nodes within the ",(0,t.jsx)(n.code,{children:"clusterTargets"}),". See ",(0,t.jsx)(n.a,{href:"#nodeselector",children:"reference"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"concurrency"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"How many nodes within the same cluster should be upgraded at the same time."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cordon"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsxs)(n.td,{children:["Set this to true if the nodes should be cordoned before applying the upgrade. Ineffective when ",(0,t.jsx)(n.code,{children:"drain"})," is also configured."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"drain"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["Configure if and how nodes should be drained before applying the upgrade. See ",(0,t.jsx)(n.a,{href:"#drain",children:"reference"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"prepare"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["The prepare init container, if specified, is run before cordon/drain which is run before the upgrade container. See ",(0,t.jsx)(n.a,{href:"#prepare",children:"reference"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"upgradeContainer"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["The upgrade container that will run the upgrade on the nodes. See ",(0,t.jsx)(n.a,{href:"#upgradecontainer",children:"reference"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clusterRolloutStrategy"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["RolloverStrategy controls the rollout of the upgrade bundle across clusters. See ",(0,t.jsx)(n.a,{href:"#clusterrolloutstrategy",children:"reference"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clusterTargets"}),(0,t.jsx)(n.td,{children:"list"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["Declares clusters to deploy the upgrade plan to. See ",(0,t.jsx)(n.a,{href:"#clustertargets",children:"reference"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"cloudconfig",children:"cloudConfig"}),"\n",(0,t.jsxs)(n.p,{children:["This describes a cloud-init config that will be copied to each upgraded node to the ",(0,t.jsx)(n.code,{children:"/oem/90_operator.yaml"})," path.",(0,t.jsx)(n.br,{}),"\n","This cloud-init config will be applied by the system after reboot.",(0,t.jsx)(n.br,{}),"\n","For more information and examples, see the ",(0,t.jsx)(n.code,{children:"MachineRegistration"})," ",(0,t.jsx)(n.code,{children:"spec.config.cloud-config"})," ",(0,t.jsx)(n.a,{href:"/1.4/cloud-config-reference",children:"reference"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"nodeselector",children:"nodeSelector"}),"\n",(0,t.jsxs)(n.p,{children:["This ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors",children:"Label Selector"})," can be used to restrict the upgrades to only a certain set of nodes within the targeted Clusters."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"nodeSelector:\n  matchExpressions:\n    - {key: my-node/label, operator: Exists}\n"})})]}),"\n",(0,t.jsx)(n.h4,{id:"drain",children:"drain"}),"\n",(0,t.jsxs)(n.p,{children:["Configure if and how nodes should be drained.",(0,t.jsx)(n.br,{}),"\n","Drain is disabled by default."]}),"\n",(0,t.jsxs)(n.p,{children:["The drain settings directly translates to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubectl/generated/kubectl_drain/",children:"kubectl drain"})," command being executed on the node before upgrade."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"time.Duration"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsx)(n.td,{children:"The length of time to wait before giving up draining a node, zero means infinite."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"gracePeriod"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsx)(n.td,{children:"Period of time in seconds given to each pod to terminate gracefully. If negative, the default value specified in the pod will be used."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"deleteLocalData"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Continue even if there are pods using emptyDir (local data that will be deleted when the node is drained)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ignoreDaemonSets"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Ignore DaemonSet-managed pods."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"force"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Continue even if there are pods that do not declare a controller."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"disableEviction"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Force drain to use delete, even if eviction is supported. This will bypass checking PodDisruptionBudgets, use with caution."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"skipWaitForDeleteTimeout"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"60"}),(0,t.jsx)(n.td,{children:"If pod DeletionTimestamp older than N seconds, skip waiting for the pod. Seconds must be greater than 0 to skip."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"prepare",children:"prepare"}),"\n",(0,t.jsxs)(n.p,{children:["Defines a ",(0,t.jsx)(n.code,{children:"prepare"})," Init container that is ran before the ",(0,t.jsx)(n.code,{children:"upgrade"})," container executing the upgrade job on a node.",(0,t.jsx)(n.br,{}),"\n","The keys directly translate to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container",children:"container"})," specification.",(0,t.jsx)(n.br,{}),"\n","Note that the node filesystem is mounted at ",(0,t.jsx)(n.code,{children:"/host"})," inside the container."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"image"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"Container image name."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"command"}),(0,t.jsx)(n.td,{children:"list"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"Entrypoint array."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"args"}),(0,t.jsx)(n.td,{children:"list"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"Arguments to the entrypoint."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"env"}),(0,t.jsx)(n.td,{children:"list"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"List of environment variables to set in the container."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"envFrom"}),(0,t.jsx)(n.td,{children:"list"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"List of sources to populate environment variables in the container."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"upgradecontainer",children:"upgradeContainer"}),"\n",(0,t.jsxs)(n.p,{children:["Defines the ",(0,t.jsx)(n.code,{children:"upgrade"})," container executing the upgrade job on a node.",(0,t.jsx)(n.br,{}),"\n","The keys directly translate to the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#Container",children:"container"})," specification.",(0,t.jsx)(n.br,{}),"\n","Note that the node filesystem is mounted at ",(0,t.jsx)(n.code,{children:"/host"})," inside the container."]}),"\n",(0,t.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,t.jsxs)(n.p,{children:["When using any Elemental or ",(0,t.jsx)(n.a,{href:"/1.4/customizing#remastering-a-custom-docker-image",children:"Elemental based image"})," you are expected to only edit the ",(0,t.jsx)(n.code,{children:"env"})," key to optionally set the ",(0,t.jsx)(n.code,{children:"FORCE"}),", ",(0,t.jsx)(n.code,{children:"UPGRADE_RECOVERY"}),", or ",(0,t.jsx)(n.code,{children:"UPGRADE_RECOVERY_ONLY"})," variables.",(0,t.jsx)(n.br,{}),"\n","For more info you can read the ",(0,t.jsx)(n.a,{href:"/1.4/upgrade#upgrade-via-command-line-interface",children:"upgrade"})," documentation.",(0,t.jsx)(n.br,{}),"\n","Any other change to the ",(0,t.jsx)(n.code,{children:"upgradeContainer"})," may result in issues during upgrades."]})}),"\n",(0,t.jsx)(n.h4,{id:"clusterrolloutstrategy",children:"clusterRolloutStrategy"}),"\n",(0,t.jsxs)(n.p,{children:["This controls the rollout of the bundle across clusters.",(0,t.jsx)(n.br,{}),"\n","For more information you can read the ",(0,t.jsx)(n.a,{href:"https://fleet.rancher.io/0.7/ref-crds#rolloutstrategy",children:"reference documentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"clustertargets",children:"clusterTargets"}),"\n",(0,t.jsxs)(n.p,{children:["Select Clusters to be targeted for the OS image upgrade.",(0,t.jsx)(n.br,{}),"\n","For more information you can read the ",(0,t.jsx)(n.a,{href:"https://fleet.rancher.io/0.7/ref-crds#bundletarget",children:"reference documentation"}),"."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"clusterTargets:\n  - clusterName: volcano\n"})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79143:(e,n,r)=>{r.d(n,{A:()=>t});const t='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSImage\nmetadata:\n  name: my-upgrade\n  namespace: fleet-default\nspec:\n  # Set to the new Elemental version you would like to upgrade to or track the latest tag\n  osImage: "registry.suse.com/suse/sle-micro/5.5:latest"\n  clusterTargets:\n    - clusterName: my-cluster\n'},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);