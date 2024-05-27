"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6956],{32124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(17624),s=t(4552),r=t(91112),o=t(98992),a=t(24404);const l={sidebar_label:"Elemental behind proxy",title:""},c=void 0,d={id:"elemental_behind_proxy",title:"",description:"Introduction",source:"@site/versioned_docs/version-1.4/elemental_behind_proxy.md",sourceDirName:".",slug:"/elemental_behind_proxy",permalink:"/1.4/elemental_behind_proxy",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Elemental behind proxy",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/1.4/restore"},next:{title:"Customize hostname",permalink:"/1.4/hostname"}},h={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Elemental-register",id:"elemental-register",level:2},{value:"Create Elemental cluster",id:"create-elemental-cluster",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components},{CodeBlock:l,Head:c,TabItem:d,Tabs:h}=n;return l||g("CodeBlock",!0),c||g("Head",!0),d||g("TabItem",!0),h||g("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/elemental_behind_proxy"})}),"\n","\n","\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In a lot of enterprise environments, servers or VMs running on premises do not have direct Internet access. Instead, the connection to external services is done through a HTTP(S) proxy for security reasons. This tutorial shows you how to set up an Elemental deployment in such an environment."}),"\n",(0,i.jsx)(n.admonition,{title:"important note",type:"caution",children:(0,i.jsxs)(n.p,{children:["This guide will not cover the Rancher installation behind a proxy. It's a different use case and you can find the detailed documentation ",(0,i.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/rancher-behind-an-http-proxy",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{title:"info",type:"info",children:(0,i.jsxs)(n.p,{children:["For this documentation, we assume you are using a SUSE family system (like SLE Micro), so proxy settings have to be written in ",(0,i.jsx)(n.code,{children:"/etc/sysconfig/proxy"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Proxy settings must be configured in the following locations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Machine Registration Endpoint"}),"\n",(0,i.jsx)(n.li,{children:"SeedImage resource"}),"\n",(0,i.jsx)(n.li,{children:"Elemental cluster configuration"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"elemental-system-agent"})," needs proxy settings to reach the Rancher Manager.\nTo achieve that, you need to fill the cloud-init section of the Machine Registration Endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["You can do it either with ",(0,i.jsx)(n.a,{href:"quickstart-ui#add-a-machine-registration-endpoint",children:"UI"})," or ",(0,i.jsx)(n.a,{href:"quickstart-cli#prepare-your-kubernetes-resources",children:"CLI"}),"."]}),"\n",(0,i.jsxs)(h,{children:[(0,i.jsx)(d,{value:"cliRegistration",label:"CLI",default:!0,children:(0,i.jsx)(l,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,children:r.c})}),(0,i.jsx)(d,{value:"uiRegistration",label:"UI",default:!0,children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add proxy settings in Machine Registration",src:t(88276).c+"",width:"668",height:"650"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"elemental-register",children:"Elemental-register"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"architecture#elemental-register-client",children:"Elemental-register"})," is the first communication endpoint between the new host and Rancher Manager, this is the first place where proxy settings need to be set."]}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,i.jsx)(n.p,{children:"At the time of writing, it's only possible to configure proxy settings for the ISO with the CLI. The proxy settings aren't implemented in the UI."})}),"\n",(0,i.jsxs)(n.p,{children:["The process happens when you boot your Elemental ISO for the first time, in order to configure the proxy settings you have to include a ",(0,i.jsx)(n.code,{children:"cloud-init"})," definition in the ISO.\nTo do that, you have to create a ",(0,i.jsx)(n.a,{href:"seedimage-reference",children:"SeedImage"})," definition."]}),"\n",(0,i.jsx)(l,{language:"yaml",title:"seedimage.yaml",showLineNumbers:!0,children:o.c}),"\n",(0,i.jsxs)(n.p,{children:["Apply the YAML with ",(0,i.jsx)(n.code,{children:"kubectl"})," and then, print your SeedImage definition to get the URL to download it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"kubectl apply -f <my_seedimage_yaml_file>\nkubectl get seedimage <seed_image_name> -n <namespace> -o yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Boot the ISO and you should see your new system appears in ",(0,i.jsx)(n.a,{href:"architecture#machineinventory",children:"Machine inventory"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"create-elemental-cluster",children:"Create Elemental cluster"}),"\n",(0,i.jsx)(n.p,{children:"For this step, you can use either the UI or CLI."}),"\n",(0,i.jsxs)(h,{children:[(0,i.jsxs)(d,{value:"cliCluster",label:"CLI",default:!0,children:[(0,i.jsx)(l,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,children:a.c}),(0,i.jsxs)(n.p,{children:["You can see that proxy settings are added below ",(0,i.jsx)(n.code,{children:"agentEnvVars"}),"."]})]}),(0,i.jsx)(d,{value:"uiCluster",label:"UI",default:!0,children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add proxy settings for Elemental cluster",src:t(40580).c+"",width:"1756",height:"516"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},24404:(e,n,t)=>{t.d(n,{c:()=>i});const i="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: my-cluster\n  namespace: fleet-default\nspec:\n  agentEnvVars:\n  - name: HTTP_PROXY\n    value: http://<MY_PROXY>:<MY_PORT>\n  - name: HTTPS_PROXY\n    value: https://<MY_PROXY>:<MY_PORT>\n  - name: NO_PROXY\n    value: localhost,127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\n  rkeConfig:\n    machineGlobalConfig:\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: my-machine-selector\n        name: pool1\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n    machineSelectorConfig:\n      - config:\n          protect-kernel-defaults: false\n    registries: {}\n  kubernetesVersion: v1.24.8+k3s1\n"},91112:(e,n,t)=>{t.d(n,{c:()=>i});const i='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      write_files:\n      - path: /etc/sysconfig/proxy\n        append: true\n        content: |\n          PROXY_ENABLED="yes"\n          HTTP_PROXY=http://<MY_PROXY>:<MY_PORT>\n          HTTPS_PROXY=https://<MY_PROXY>:<MY_PORT>\n          NO_PROXY="localhost, 127.0.0.1"\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n      registration:\n        emulate-tpm: true\n'},98992:(e,n,t)=>{t.d(n,{c:()=>i});const i='apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: ...\n  namespace: ...\nspec:\n  baseImage: registry.suse.com/suse/sle-micro/5.5:2.0.2\n  cloud-config:\n    write_files:\n    - path: /etc/sysconfig/proxy\n      append: true\n      content: |\n        PROXY_ENABLED="yes"\n        HTTP_PROXY=http://<MY_PROXY>:<MY_PORT>\n        HTTPS_PROXY=https://<MY_PROXY>:<MY_PORT>\n        NO_PROXY="localhost, 127.0.0.1"\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: ...\n    namespace: ...\n'},40580:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/proxy-settings-cluster-ui-7303e94b634e59942023814ceff5f54f.png"},88276:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/proxy-settings-machine-registration-ui-887aa84b2d739e775e490d74062979fe.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);