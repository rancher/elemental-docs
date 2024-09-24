"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9890],{99344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=t(74848),i=t(28453);const l={sidebar_label:"Reset",title:""},a="Troubleshooting reset",s={id:"troubleshooting-reset",title:"",description:'Each MachineInventory with the elemental.cattle.io/resettable: "true" annotation will trigger the execution of a reset plan, upon deletion.',source:"@site/versioned_docs/version-1.4/troubleshooting-reset.md",sourceDirName:".",slug:"/troubleshooting-reset",permalink:"/1.4/troubleshooting-reset",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Reset",title:""},sidebar:"docs",previous:{title:"Upgrade",permalink:"/1.4/troubleshooting-upgrade"},next:{title:"Release Notes",permalink:"/1.4/release-notes"}},r={},c=[{value:"Forcefully deleting a MachineInventory undergoing reset",id:"forcefully-deleting-a-machineinventory-undergoing-reset",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/troubleshooting-reset"})}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"troubleshooting-reset",children:"Troubleshooting reset"})}),"\n",(0,o.jsxs)(n.p,{children:["Each ",(0,o.jsx)(n.code,{children:"MachineInventory"})," with the ",(0,o.jsx)(n.code,{children:'elemental.cattle.io/resettable: "true"'})," annotation will trigger the execution of a reset plan, upon deletion.",(0,o.jsx)(n.br,{}),"\n","The ",(0,o.jsx)(n.code,{children:"machineinventory.elemental.cattle.io"})," finalizer is going to be removed only after the plan has been executed successfully by the ",(0,o.jsx)(n.code,{children:"elemental-system-agent"})," running on the machine."]}),"\n",(0,o.jsxs)(n.p,{children:["You can investigate why a ",(0,o.jsx)(n.code,{children:"MachineInventory"})," has not been deleted yet, by examining it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventory\nmetadata:\n  # deletionTimestamp has been set. This object has been marked for deletion.\n  deletionTimestamp: "2023-08-04T08:41:25Z"\n  annotations:\n    # `resettable` annotation is enabled.\n    # This means the machine has to go through reset, before deletion of this object.\n    elemental.cattle.io/resettable: "true"\n  # `machineinventory.elemental.cattle.io` finalizer is set.\n  #  The `elemental-operator` is going to create a reset plan for the machine to execute.\n  #  After successful execution of the reset plan, the finalizer is removed and the object will be deleted.\n  finalizers:\n  - machineinventory.elemental.cattle.io\nstatus:\n  conditions:\n  # Most recent condition shows that the MachineInventory is waiting for a plan to be applied.\n  - lastTransitionTime: "2023-08-04T08:41:25Z"\n    message: waiting for plan to be applied\n    reason: WaitingForPlan\n    status: "False"\n    type: Ready\n  # The plan to be executed is referenced. \n  # Normally it has the same name of the MachineInventory and lives within the same namespace.   \n  plan:\n    checksum: 5aba8b6b3161bc52d8953b2428e54ecda3b59e8e0043b49d761d1e79174eded6\n    secretRef:\n      name: m-bf1008a1-61d6-4355-b5f5-f7d1c527affe\n      namespace: fleet-default\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can also examine the referenced plan ",(0,o.jsx)(n.code,{children:"Secret"}),".",(0,o.jsx)(n.br,{}),"\n","Note that the ",(0,o.jsx)(n.code,{children:"elemental-system-agent"})," running on the machine is watching this secret and it should execute the plan.",(0,o.jsx)(n.br,{}),"\n","You can also monitor its progress from the machine logs: ",(0,o.jsx)(n.code,{children:"journalctl -u elemental-system-agent -f"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Secret\n# This is a `elemental.cattle.io/plan` secret plan.\ntype: elemental.cattle.io/plan\nmetadata:\n  annotations:\n    # This is a `reset` plan type.\n    elemental.cattle.io/plan.type: reset\n  labels:\n    elemental.cattle.io/managed: "true"\n  name: m-bf1008a1-61d6-4355-b5f5-f7d1c527affe\n  namespace: fleet-default\n  # It is owned by the `MachineInventory` waiting for deletion.\n  ownerReferences:\n  - apiVersion: elemental.cattle.io/v1beta1\n    controller: true\n    kind: MachineInventory\n    name: m-bf1008a1-61d6-4355-b5f5-f7d1c527affe\n    uid: 5aa3863c-63a5-4cb9-91fd-7a45191d4842\ndata:\n  # The plan has not been applied yet.\n  applied-checksum: ""\n  # It also hasn\'t failed.\n  failed-checksum: ""\n  # The actual plan to be executed, base64 encoded.\n  plan: eyJmaWxlcyI6W3siY29udGVudCI6ImJtRnRaVG9nUld4bGJXVnVkR0ZzSUZKbGMyVjBDbk4wWVdkbGN6b0tJQ0FnSUc1bGRIZHZjbXN1WVdaMFpYSTZDaUFnSUNBZ0lDQWdMU0JqYjIxdFlXNWtjem9LSUNBZ0lDQWdJQ0FnSUNBZ0xTQmxiR1Z0Wlc1MFlXd3RjbVZuYVhOMFpYSWdMUzFrWldKMVp5QXRMWEpsYzJWMENpQWdJQ0FnSUNBZ0lDQnBaam9nSjFzZ0xXWWdMM0oxYmk5amIzTXZjbVZqYjNabGNubGZiVzlrWlNCZEp3b2dJQ0FnSUNBZ0lDQWdibUZ0WlRvZ1VuVnVjeUJsYkdWdFpXNTBZV3dnY21WelpYUUsiLCJwYXRoIjoiL29lbS9yZXNldC1jbG91ZC1jb25maWcueWFtbCIsInBlcm1pc3Npb25zIjoiMDYwMCJ9XSwiaW5zdHJ1Y3Rpb25zIjpbeyJuYW1lIjoiY29uZmlndXJlIG5leHQgYm9vdCB0byByZWNvdmVyeSBtb2RlIiwiYXJncyI6WyIvb2VtL2dydWJlbnYiLCJzZXQiLCJuZXh0X2VudHJ5PXJlY292ZXJ5Il0sImNvbW1hbmQiOiJncnViMi1lZGl0ZW52In0seyJuYW1lIjoic2NoZWR1bGUgcmVib290IiwiYXJncyI6WyItciIsIisxIl0sImNvbW1hbmQiOiJzaHV0ZG93biJ9XX0K\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The plan created by the ",(0,o.jsx)(n.code,{children:"elemental-operator"})," should contain the following instructions:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "files": [\n    // A cloud-init config file is created on the default /oem directory.  \n    // This config will be executed once in recovery mode.\n    {\n      "content": "bmFtZTogRWxlbWVudGFsIFJlc2V0CnN0YWdlczoKICAgIG5ldHdvcmsuYWZ0ZXI6CiAgICAgICAgLSBjb21tYW5kczoKICAgICAgICAgICAgLSBlbGVtZW50YWwtcmVnaXN0ZXIgLS1kZWJ1ZyAtLXJlc2V0CiAgICAgICAgICBpZjogJ1sgLWYgL3J1bi9jb3MvcmVjb3ZlcnlfbW9kZSBdJwogICAgICAgICAgbmFtZTogUnVucyBlbGVtZW50YWwgcmVzZXQK",\n      "path": "/oem/reset-cloud-config.yaml",\n      "permissions": "0600"\n    }\n  ],\n  "instructions": [\n    {\n      "name": "configure next boot to recovery mode",\n      "args": [\n        "/oem/grubenv",\n        "set",\n        "next_entry=recovery"\n      ],\n      "command": "grub2-editenv"\n    },\n    {\n      "name": "schedule reboot",\n      "args": [\n        "-r",\n        "+1"\n      ],\n      "command": "shutdown"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.code,{children:"elemental-system-agent"})," successfully executed the plan, the ",(0,o.jsx)(n.code,{children:"machineinventory.elemental.cattle.io"})," finalizer on the ",(0,o.jsx)(n.code,{children:"MachineInventory"})," will be removed and the ",(0,o.jsx)(n.code,{children:"MachineInventory"})," will be deleted.",(0,o.jsx)(n.br,{}),"\n","Note that this is not an indication that the machine has been fully reset yet.",(0,o.jsx)(n.br,{}),"\n","This is a limitation of the current implementation and it will eventually improve, so that it will be possible to completely track the reset status."]}),"\n",(0,o.jsxs)(n.p,{children:["However, at this stage we do expect the host to undergo reboot, and reboot in recovery mode.",(0,o.jsx)(n.br,{}),"\n","Once in recovery mode, the ",(0,o.jsx)(n.code,{children:"cos-setup-network"})," should execute the cloud-init config that has been written on ",(0,o.jsx)(n.code,{children:"/oem/reset-cloud-config.yaml"}),".",(0,o.jsx)(n.br,{}),"\n","You can monitor the status with ",(0,o.jsx)(n.code,{children:"journalctl -u cos-setup-network -f"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The cloud-init instructions should look like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"name: Elemental Reset\nstages:\n    network.after:\n        - if: '[ -f /run/cos/recovery_mode ]'\n          name: Runs elemental reset\n          commands:\n            - systemctl start elemental-register-reset\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"elemental-register"})," cli will register with the ",(0,o.jsx)(n.code,{children:"elemental-operator"})," as a new machine. This will lead to the creation of a new ",(0,o.jsx)(n.code,{children:"MachineInventory"})," object.",(0,o.jsx)(n.br,{}),"\n","The remote ",(0,o.jsx)(n.code,{children:"MachineRegistration"})," configuration will also be fetched to apply the reset options, for example ",(0,o.jsx)(n.code,{children:"reset-persistent"}),", ",(0,o.jsx)(n.code,{children:"reset-oem"}),", or the power settings, either ",(0,o.jsx)(n.code,{children:"reboot"})," or ",(0,o.jsx)(n.code,{children:"power-off"}),".",(0,o.jsx)(n.br,{}),"\n","After reset, depending on the settings, the machine should either shut down or reboot and be ready to be adopted within a new cluster."]}),"\n",(0,o.jsx)(n.h2,{id:"forcefully-deleting-a-machineinventory-undergoing-reset",children:"Forcefully deleting a MachineInventory undergoing reset"}),"\n",(0,o.jsxs)(n.p,{children:["If the machine is unable to execute the reset instructions and the related ",(0,o.jsx)(n.code,{children:"MachineInventory"})," is not deleted, there are two equivalent ways you can manually fix the issue."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Remove the ",(0,o.jsx)(n.code,{children:'elemental.cattle.io/resettable: "true"'})," annotation from the ",(0,o.jsx)(n.code,{children:"MachineInventory"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Remove the ",(0,o.jsx)(n.code,{children:"machineinventory.elemental.cattle.io"})," finalizer from the ",(0,o.jsx)(n.code,{children:"MachineInventory"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Remember to also take care of the machine itself, by fully reprovisioning it or rebooting into recovery mode and using the ",(0,o.jsx)(n.code,{children:"elemental reset"})," command directly."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},l=o.createContext(i);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);