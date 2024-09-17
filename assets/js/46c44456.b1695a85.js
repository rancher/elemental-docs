"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[4632],{81316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(17624),s=t(4552);const a={sidebar_label:"Machine Reset",title:"",version_badge:"1.3.0"},r=void 0,l={id:"reset",title:"",description:"Machine Reset",source:"@site/versioned_docs/version-1.6/reset.md",sourceDirName:".",slug:"/reset",permalink:"/reset",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{sidebar_label:"Machine Reset",title:"",version_badge:"1.3.0"},sidebar:"docs",previous:{title:"Inventory Management",permalink:"/inventory-management"},next:{title:"Channels",permalink:"/channels"}},o={},c=[{value:"Machine Reset",id:"machine-reset",level:2},{value:"Reset workflow",id:"reset-workflow",level:3},{value:"Enable machine reset",id:"enable-machine-reset",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/reset"})}),"\n",(0,i.jsx)(n.h2,{id:"machine-reset",children:"Machine Reset"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to reset Elemental machines to their original state or decommission them:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"When deleting a Cluster, all associated machines will be reset"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Delete a Cluster to reset all machines",src:t(10068).c+"",width:"1241",height:"359"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"When managing a Cluster, simply delete the Node that needs to be reset"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Delete a single node to reset it",src:t(53668).c+"",width:"1241",height:"774"})}),"\n",(0,i.jsx)(n.h3,{id:"reset-workflow",children:"Reset workflow"}),"\n",(0,i.jsxs)(n.p,{children:["Once the related ",(0,i.jsx)(n.code,{children:"MachineInventory"})," is flagged for deletion, a reset plan will be executed by the ",(0,i.jsx)(n.code,{children:"elemental-system-agent"})," running on the machine."]}),"\n",(0,i.jsx)(n.p,{children:"If the machine is still running, this plan will:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Reboot the machine in recovery mode."}),"\n",(0,i.jsxs)(n.li,{children:["Execute ",(0,i.jsx)(n.code,{children:"systemctl start elemental-register-reset"}),".",(0,i.jsx)(n.br,{}),"\n","This will fetch the remote ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," and apply the ",(0,i.jsx)(n.code,{children:"spec.config.elemental.reset"})," options to reset the machine.",(0,i.jsx)(n.br,{}),"\n","A new ",(0,i.jsx)(n.code,{children:"MachineInventory"})," will be created and the ",(0,i.jsx)(n.code,{children:"spec.config.cloud-config"})," defined in the ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," will be applied again."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," reference will ",(0,i.jsx)(n.strong,{children:"not"})," change, the machine will ",(0,i.jsx)(n.strong,{children:"not"})," be reinstalled, the ",(0,i.jsx)(n.code,{children:"COS_PERSISTENT"})," and ",(0,i.jsx)(n.code,{children:"COS_OEM"})," partition will be cleared by default if reset is ",(0,i.jsx)(n.code,{children:"enabled"}),". For more information, you can consult the ",(0,i.jsx)(n.a,{href:"installation#deployed-partition-table",children:"Partition Table"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Since the ",(0,i.jsx)(n.code,{children:"cloud-config"})," is re-applied during the reset workflow, you can reset a machine to apply updates from the ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," definition, for example to rotate ",(0,i.jsx)(n.code,{children:"users"})," credentials and authorized keys. It is strongly recommended to enable the ",(0,i.jsx)(n.code,{children:"reset-oem"})," option, to avoid conflicts with previously configured cloud-configs."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to bind a machine to a different ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," and trigger a new full installation, you need to reprovision it again using a new image."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-machine-reset",children:"Enable machine reset"}),"\n",(0,i.jsxs)(n.p,{children:["In order to allow machines to be reset automatically, the ",(0,i.jsx)(n.code,{children:"spec.config.elemental.reset.enabled"})," flag of the ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," should be toggled.",(0,i.jsx)(n.br,{}),"\n","This is off by default, but once activated, all newly created ",(0,i.jsx)(n.code,{children:"MachineInventory"})," will inherit this setting automatically.",(0,i.jsx)(n.br,{}),"\n","For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    elemental:\n      reset:\n        enabled: true\n        reset-persistent: true\n        reset-oem: true\n        # These cloud-init configs will be created during reset and will persist on the system after\n        config-urls: \n          - "https://my.cloud.init/reset-plan-1.yaml"\n          - "https://my.cloud.init/reset-plan-2.yaml"\n        # You can select a different image to run the reset.  \n        # Note that this image will not be installed on the system.\n        system-uri: "my.oci.registry/reset-image:latest"\n        power-off: false\n        reboot: true\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to enable reset at a ",(0,i.jsx)(n.code,{children:"MachineInventory"})," level, for example in scenarios where some machines are physical and will benefit from an automatic reset, and some others are virtual and can simply be destroyed and reprovisioned as needed.",(0,i.jsx)(n.br,{}),"\n","In order to flag a single ",(0,i.jsx)(n.code,{children:"MachineInventory"})," to allow reset, you can use the ",(0,i.jsx)(n.code,{children:"elemental.cattle.io/resettable: true"})," annotation.",(0,i.jsx)(n.br,{}),"\n","For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventory\nmetadata:\n  annotations:\n    elemental.cattle.io/resettable: "true"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},10068:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/reset-cluster-deletion-b98a4f075a3a0600df55a5c847733fe6.png"},53668:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/reset-single-node-deletion-09c47aa5a8f695cb4bfe5eacefbf2bcb.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var i=t(11504);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);