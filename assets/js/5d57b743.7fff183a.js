"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9096],{21404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(17624),i=t(4552);const r={sidebar_label:"Cloud-config reference",title:""},s="Cloud-config Reference",c={id:"cloud-config-reference",title:"",description:"All custom configuration applied on top of a fresh deployment should come",source:"@site/docs/cloud-config-reference.md",sourceDirName:".",slug:"/cloud-config-reference",permalink:"/next/cloud-config-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Cloud-config reference",title:""},sidebar:"docs",previous:{title:"Authentication",permalink:"/next/authentication"},next:{title:"MachineRegistration",permalink:"/next/machineregistration-reference"}},a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.M)(),...e.components},{Details:t,Head:r}=n;return t||h("Details",!0),r||h("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:(0,o.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/cloud-config-reference"})}),"\n",(0,o.jsx)(n.h1,{id:"cloud-config-reference",children:"Cloud-config Reference"}),"\n",(0,o.jsxs)(n.p,{children:["All custom configuration applied on top of a fresh deployment should come\nfrom the ",(0,o.jsx)(n.code,{children:"cloud-config"})," section in a ",(0,o.jsx)(n.code,{children:"MachineRegistration"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This will get run by ",(0,o.jsx)(n.a,{href:"https://github.com/rancher/elemental-cli/blob/main/docs/elemental_run-stage.md",children:(0,o.jsx)(n.code,{children:"elemental-cli run-stage"})})," during the ",(0,o.jsx)(n.code,{children:"boot"})," stage, and\nit will be stored in the node under the ",(0,o.jsx)(n.code,{children:"/oem"})," dir."]}),"\n",(0,o.jsxs)(n.p,{children:["Elemental uses ",(0,o.jsx)(n.a,{href:"https://github.com/mudler/yip",children:"yip"})," to run these cloud-config files, so we support the ",(0,o.jsx)(n.a,{href:"https://github.com/mudler/yip#compatibility-with-cloud-init-format",children:"yip subset cloud-config implementation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Below is an example of the supported configuration on a ",(0,o.jsx)(n.code,{children:"MachineRegistration"})," resource."]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: "bar"\n        passwd: "foo"\n        groups: "users"\n        homedir: "/home/foo"\n        shell: "/bin/bash"\n        ssh_authorized_keys:\n          - faaapploo\n      # Assigns these keys to the first user in users or root if there\n      # is none\n      ssh_authorized_keys:\n        - asdd\n      # Run these commands once the system has fully booted\n      runcmd:\n        - foo\n      # Write arbitrary files\n      write_files:\n        - encoding: b64\n          content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4\n          path: /foo/bar\n          permissions: "0644"\n          owner: "bar"\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineName: my-machine\n  machineInventoryLabels:\n    element: fire\n'})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>s});var o=t(11504);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);