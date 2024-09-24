"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8115],{77528:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var s=a(74848),r=a(28453),t=a(6772),i=a(83401),l=a(70218);const o={sidebar_label:"Channels",title:""},c=void 0,d={id:"channels",title:"",description:"Channels",source:"@site/versioned_docs/version-1.6/channels.md",sourceDirName:".",slug:"/channels",permalink:"/channels",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{sidebar_label:"Channels",title:""},sidebar:"docs",previous:{title:"Machine Reset",permalink:"/reset"},next:{title:"Backup",permalink:"/backup"}},h={},m=[{value:"Channels",id:"channels",level:2},{value:"Available Channels",id:"available-channels",level:3},{value:"Flavors",id:"flavors",level:3},{value:"Channels lifecycle and best practices",id:"channels-lifecycle-and-best-practices",level:3},{value:"Making your own Channels",id:"making-your-own-channels",level:3}];function u(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{CodeBlock:o,Head:c,TabItem:d,Tabs:h,Vars:m}=n;return o||j("CodeBlock",!0),c||j("Head",!0),d||j("TabItem",!0),h||j("Tabs",!0),m||j("Vars",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{children:(0,s.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/channels"})}),"\n","\n",(0,s.jsx)(n.h2,{id:"channels",children:"Channels"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(m,{name:"elemental_operator_name"})," allows subscription to one or more ",(0,s.jsx)(n.a,{href:"/managedosversionchannel-reference",children:"ManagedOSVersionChannels"}),", to automatically populate a list of ",(0,s.jsx)(n.a,{href:"/managedosversion-reference",children:"ManagedOSVersions"})," ready to be consumed to build new ISOs using a ",(0,s.jsx)(n.a,{href:"/seedimage-reference",children:"SeedImage"}),", or to upgrade existing Elemental nodes to new OS versions using the ",(0,s.jsx)(n.a,{href:"/managedosimage-reference",children:"ManagedOSImage"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A channel is normally distributed as an OCI container image, but it is also possible to reference the URI of a JSON file directly containing a list of ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"}),". Note that the best practice is to distribute channels using images, so that distribution is consistent with all other images needed by the ",(0,s.jsx)(m,{name:"elemental_operator_name"}),". This can be beneficial for example when deploying in an Airgapped environment."]}),"\n",(0,s.jsxs)(h,{children:[(0,s.jsxs)(d,{value:"jsonSyncer",label:"Json syncer",children:[(0,s.jsxs)(n.p,{children:["This syncer will fetch a json from url and parse it into valid ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," resources."]}),(0,s.jsx)(o,{language:"yaml",title:"managed-os-version-channel-json.yaml",showLineNumbers:!0,children:t.A})]}),(0,s.jsxs)(d,{value:"customSyncer",label:"Custom syncer",children:[(0,s.jsxs)(n.p,{children:["A custom syncer allows more flexibility on how to gather ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," by allowing custom commands with custom images."]}),(0,s.jsxs)(n.p,{children:["This type of syncer allows to run a given command with arguments and env vars in a custom image and output a json file to ",(0,s.jsx)(n.code,{children:"/data/output"}),".\nThe generated data is then automounted by the syncer and then parsed so it can gather create the proper versions."]}),(0,s.jsxs)(n.p,{children:["Elemental project provides channels to list all ",(0,s.jsx)(n.code,{children:"ManagedOSVersions"})," released as a custom syncer.",(0,s.jsx)(n.br,{}),"\n","See the channel resource definition below:"]}),(0,s.jsx)(o,{language:"yaml",title:"managed-os-version-channel.yaml",showLineNumbers:!0,children:i.A})]})]}),"\n",(0,s.jsx)(n.h3,{id:"available-channels",children:"Available Channels"}),"\n",(0,s.jsx)(n.p,{children:"Elemental maintains a list of channels that can be used out of the box."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Base OS"}),(0,s.jsx)(n.th,{children:"BaseOS Version"}),(0,s.jsx)(n.th,{children:"Flavor"}),(0,s.jsx)(n.th,{children:"Channel URI"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SL Micro"}),(0,s.jsx)(n.td,{children:"6.0"}),(0,s.jsx)(n.td,{children:"Base"}),(0,s.jsx)(n.td,{children:"registry.suse.com/rancher/elemental-channel/sl-micro:6.0-base"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SL Micro"}),(0,s.jsx)(n.td,{children:"6.0"}),(0,s.jsx)(n.td,{children:"Bare-metal"}),(0,s.jsx)(n.td,{children:"registry.suse.com/rancher/elemental-channel/sl-micro:6.0-baremetal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SL Micro"}),(0,s.jsx)(n.td,{children:"6.0"}),(0,s.jsx)(n.td,{children:"KVM"}),(0,s.jsx)(n.td,{children:"registry.suse.com/rancher/elemental-channel/sl-micro:6.0-kvm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SL Micro"}),(0,s.jsx)(n.td,{children:"6.0"}),(0,s.jsx)(n.td,{children:"RT"}),(0,s.jsx)(n.td,{children:"registry.suse.com/rancher/elemental-channel/sl-micro:6.0-rt"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"flavors",children:"Flavors"}),"\n",(0,s.jsx)(n.p,{children:"Elemental distributes different OS flavors that can better fit specific use cases."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Flavor"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Reference"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Base"}),(0,s.jsx)(n.td,{children:"A minimal image that can be used as base to build custom images."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-base-os/Dockerfile",children:"Source"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bare-metal"}),(0,s.jsx)(n.td,{children:"Contains bare-metal and usability packages. Can be used for any generic workload."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-baremetal-os/Dockerfile",children:"Source"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"KVM"}),(0,s.jsx)(n.td,{children:"Ready to be used with KVM. Contains QEMU Guest agent by default."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-kvm-os/Dockerfile",children:"Source"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RT"}),(0,s.jsx)(n.td,{children:"Like bare-metal images, but includes a Real-Time kernel."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/rancher/elemental/blob/v2.1.x/.obs/dockerfile/micro-rt-os/Dockerfile",children:"Source"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"channels-lifecycle-and-best-practices",children:"Channels lifecycle and best practices"}),"\n",(0,s.jsxs)(n.p,{children:["Once a new ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"})," is created, the ",(0,s.jsx)(m,{name:"elemental_operator_name"})," will periodically sync the channel provided JSON list, and convert it to new ",(0,s.jsx)(n.code,{children:"ManagedOSVersions"}),".",(0,s.jsx)(n.br,{}),"\n","All synced ",(0,s.jsx)(n.code,{children:"ManagedOSVersions"})," will be owned by the ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"}),". Deleting the ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"})," will lead to the deletion of all ",(0,s.jsx)(n.code,{children:"ManagedOSVersions"})," on cascade."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel"})," supports automatic clean up of no longer in sync ",(0,s.jsx)(n.code,{children:"ManagedOSVersions"}),", when the ",(0,s.jsx)(n.code,{children:"ManagedOSVersionChannel.spec.deleteNoLongerInSyncVersions"})," option is enabled."]}),"\n",(0,s.jsxs)(n.p,{children:["When a ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," is scheduled for deletion, a finalizer will make sure that there is no active reference on any ",(0,s.jsx)(n.code,{children:"ManagedOSImage"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," can not be deleted, you can find out by which resources it is referenced:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl -n fleet-default get managedosimages -l elemental.cattle.io/managed-os-version-name=my-deleted-os-version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When using multiple channels it's important to keep a proper naming strategy to always have a quick, human readable reference on the owned ",(0,s.jsx)(n.code,{children:"ManagedOSVersions"}),".",(0,s.jsx)(n.br,{}),"\n","It is recommended to name any channel as: ",(0,s.jsx)(n.code,{children:"{BaseOS}-{BaseOSVersion}-{Flavor}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This should allow the user to use the ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," name as the specific Elemental build version of the image, while keeping a reference on the Base OS and Base OS version from the parent channel.",(0,s.jsx)(n.br,{}),"\n","On the Rancher UI this will look something like the following image:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Channel naming",src:a(44220).A+"",width:"1462",height:"924"})}),"\n",(0,s.jsx)(n.h3,{id:"making-your-own-channels",children:"Making your own Channels"}),"\n",(0,s.jsxs)(n.p,{children:["The only requirement to make your own custom syncer is to make it output a JSON file to ",(0,s.jsx)(n.code,{children:"/data/output"})," and keep the correct JSON structure."]}),"\n",(0,s.jsxs)(n.p,{children:["The file is a JSON array containing ISO and Container entries.",(0,s.jsx)(n.br,{}),"\n","Each entry in the array is mapped 1:1 with a ",(0,s.jsx)(n.a,{href:"/managedosversion-reference",children:"ManagedOSVersion"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"type": "iso"'})," entries must contain a bootable Elemental ISO and are used by ",(0,s.jsx)(n.a,{href:"/seedimage-reference",children:"SeedImages"}),", while ",(0,s.jsx)(n.code,{children:'"type": "container"'})," entries are used by ",(0,s.jsx)(n.a,{href:"/managedosimage-reference",children:"ManagedOSImage"})," for Elemental upgrades."]}),"\n",(0,s.jsxs)(n.p,{children:["If in doubt, the ",(0,s.jsx)(n.a,{href:"https://github.com/rancher-sandbox/elemental-channels",children:"elemental-channels"})," project can be used as a reference implementation on how to build and maintain your own channels."]}),"\n",(0,s.jsxs)(n.p,{children:["When creating new entries, be mindful of the naming strategy you choose, in order to avoid collisions with other channels, since they may end up syncing different ",(0,s.jsx)(n.code,{children:"ManagedOSVersion"})," with the same name.",(0,s.jsx)(n.br,{}),"\n","A best practice is to use the convention: ",(0,s.jsx)(n.code,{children:"{Flavor}-{Version}-{Type}"}),(0,s.jsx)(n.br,{}),"\n","A sample of the JSON format is as follows:"]}),"\n",(0,s.jsx)(o,{language:"json",title:"versions.json",showLineNumbers:!0,children:l.A})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},83401:(e,n,a)=>{a.d(n,{A:()=>s});const s="apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-channel\n  namespace: fleet-default\nspec:\n  options:\n    image: registry.suse.com/rancher/elemental-channel:latest\n  type: custom\n"},6772:(e,n,a)=>{a.d(n,{A:()=>s});const s='apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersionChannel\nmetadata:\n  name: elemental-versions\n  namespace: fleet-default\nspec:\n  options:\n    URI: "https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/upgrade/versions.json"\n    Timeout: "1m"\n  type: json'},70218:(e,n,a)=>{a.d(n,{A:()=>s});const s='[\n  {\n      "metadata": {\n          "name": "my-flavor-v0.1.0"\n      },\n      "spec": {\n          "version": "v0.1.0",\n          "type": "container",\n          "metadata": {\n              "upgradeImage": "foo/bar-os:v0.1.0-myflavor",\n              "displayName": "Foo Bar OS - My Flavor"\n          }\n      }\n  },\n  {\n    "metadata": {\n        "name": "my-flavor-v0.1.0-iso"\n    },\n    "spec": {\n        "version": "v0.1.0",\n        "type": "iso",\n        "metadata": {\n            "uri": "foo/bar-iso:v0.1.0-myflavor",\n            "displayName": "Foo Bar ISO - My Flavor"\n        }\n    }\n  }\n]\n'},44220:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/channel-naming-1f877f048ac6f5d0e0e7e6caa2e3b877.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(96540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);