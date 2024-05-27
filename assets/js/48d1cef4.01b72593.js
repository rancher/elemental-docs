"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9332],{3332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(17624),r=t(4552);const a={sidebar_label:"Building raw disk images for Raspberry Pi",title:""},s=void 0,o={id:"raspi-disk",title:"",description:"How to build raw disk images for Raspberry Pi",source:"@site/docs/raspi-disk.md",sourceDirName:".",slug:"/raspi-disk",permalink:"/next/raspi-disk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Building raw disk images for Raspberry Pi",title:""},sidebar:"docs",previous:{title:"Air-Gapped Installation",permalink:"/next/airgap"},next:{title:"Trusted Platform Module (TPM)",permalink:"/next/tpm"}},l={},d=[{value:"How to build raw disk images for Raspberry Pi",id:"how-to-build-raw-disk-images-for-raspberry-pi",level:3},{value:"Starting the machine",id:"starting-the-machine",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/raspi-disk"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-build-raw-disk-images-for-raspberry-pi",children:"How to build raw disk images for Raspberry Pi"}),"\n",(0,i.jsx)(n.p,{children:"This guide will show how we can build a raw disk image that can be written to an SD-card and booted without any other installation media."}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Any data on the SD-card will be erased, please only use a SD-card without anything important on it."}),(0,i.jsxs)(n.p,{children:["The SD-card must be reasonably large (32 GB or more) and ",(0,i.jsx)(n.strong,{children:"fast"})," (!!)."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="SeedImage resource" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: fire-img\n  namespace: fleet-default\nspec:\n  type: raw\n  baseImage: registry.opensuse.org/isv/rancher/elemental/staging/containers/suse/sl-micro/6.0/baremetal-os-container:latest\n  targetPlatform: linux/arm64\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: fire-nodes\n    namespace: fleet-default\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check the logs for the build pod using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl logs -n fleet-default fire-img -f -c build\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the build is finished we can download the image file using wget:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'wget --no-check-certificate $(kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}") -O sle-micro.arm64.raw\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can write the ",(0,i.jsx)(n.code,{children:".raw"})," image to the SD-card. This can be done with ",(0,i.jsx)(n.code,{children:"dd"})," on the Linux command line if you're comfortable with this command.\n",(0,i.jsx)(n.a,{href:"https://www.opensuse.org",children:"openSUSE"})," has nice instructions on how to write an image to a storage medium for ",(0,i.jsx)(n.a,{href:"https://en.opensuse.org/SDB:Live_USB_stick",children:"Linux"}),",\n",(0,i.jsx)(n.a,{href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows",children:"Windows"}),", and ",(0,i.jsx)(n.a,{href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS",children:"OS X"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"starting-the-machine",children:"Starting the machine"}),"\n",(0,i.jsx)(n.p,{children:"The raw disk image will only include the EFI partition, OEM partition and\nrecovery partition. On first boot the system will boot into the recovery system\nto expand and add missing partitions. After expansion it will register with\nrancher and reboot."}),"\n",(0,i.jsxs)(n.p,{children:["If an error occurs during registration phase the journal can be found using\n",(0,i.jsx)(n.code,{children:"journalctl -u elemental-register-reset"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>s});var i=t(11504);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);