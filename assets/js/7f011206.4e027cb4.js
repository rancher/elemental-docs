"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6536],{15024:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=i(17624),s=i(4552);const a={sidebar_label:"SeedImage reference",title:""},r="SeedImage reference",d={id:"seedimage-reference",title:"",description:"A SeedImage resource allows to build an installation media that can be used to install Elemental onto a node.",source:"@site/docs/seedimage-reference.md",sourceDirName:".",slug:"/seedimage-reference",permalink:"/next/seedimage-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"SeedImage reference",title:""},sidebar:"docs",previous:{title:"ManagedOSVersion reference",permalink:"/next/managedosversion-reference"},next:{title:"Cluster reference",permalink:"/next/cluster-reference"}},l={},o=[{value:"SeedImageSpec reference",id:"seedimagespec-reference",level:2},{value:"BuildContainer",id:"buildcontainer",level:3},{value:"ISO and Raw images",id:"iso-and-raw-images",level:3},{value:"Multi-Platform support",id:"multi-platform-support",level:3},{value:"Downloadable URLs",id:"downloadable-urls",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components},{Details:i,Head:a}=n;return i||m("Details",!0),a||m("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/seedimage-reference"})}),"\n",(0,t.jsx)(n.h1,{id:"seedimage-reference",children:"SeedImage reference"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"SeedImage"})," resource allows to build an installation media that can be used to install Elemental onto a node.\nIt requires a ",(0,t.jsx)(n.code,{children:"baseImage"}),", i.e., a URL to an Elemental installation ISO or node container image, and a ",(0,t.jsx)(n.code,{children:"registrationRef"})," reference to a ",(0,t.jsx)(n.code,{children:"MachineRegistration"})," resource, from which the registration part of the Elemental configuration is extracted and injected in the media to produce the final ",(0,t.jsx)(n.em,{children:"seed image"}),".\nIt is also possible to inject customizations in the ",(0,t.jsx)(n.code,{children:"cloud-config"})," field. Both yip and cloud-init syntax are supported. See the ",(0,t.jsx)(n.a,{href:"/next/cloud-config-reference",children:"Cloud Config Reference"})," for full information."]}),"\n",(0,t.jsxs)(n.p,{children:["Once the seed image is ready, the download URL is shared in the ",(0,t.jsx)(n.code,{children:".status.downloadURL"})," field.\nIt stays available for download for ",(0,t.jsx)(n.code,{children:"cleanupAfterMinutes"})," minutes (default is ",(0,t.jsx)(n.code,{children:"60"}),", 1 hour), after which it is deleted.\nSetting ",(0,t.jsx)(n.code,{children:"retriggerBuild"})," to ",(0,t.jsx)(n.code,{children:"true"})," retriggers the seed image build process while setting ",(0,t.jsx)(n.code,{children:"cleanupAfterMinutes"})," to ",(0,t.jsx)(n.code,{children:"0"})," keeps the seed image around till the ",(0,t.jsx)(n.code,{children:"SeedImage"})," resource is deleted."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SeedImage"})," resource also has a ",(0,t.jsx)(n.code,{children:"type"})," field which can be set to either ",(0,t.jsx)(n.code,{children:"iso"}),", to build an ISO, or ",(0,t.jsx)(n.code,{children:"raw"})," to build a raw disk image. Raw disk images can be copied directly to the target drive and on first boot will automatically boot into a recovery partition to expand the drive to use the available disk space and register the node, after which it will reboot the same way as for the ISO installation."]}),"\n",(0,t.jsxs)(n.p,{children:["If no ",(0,t.jsx)(n.code,{children:"BuildContainer"})," is specified for the seed-image it will be automatically filled in based on default values and ",(0,t.jsx)(n.code,{children:"type"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Building a SeedImage for a different platform is accomplished using the ",(0,t.jsx)(n.code,{children:"targetPlatform"})," field. The platform is specified using ",(0,t.jsx)(n.code,{children:"os/arch"}),", for example (",(0,t.jsx)(n.code,{children:"linux/x86_64"})," or ",(0,t.jsx)(n.code,{children:"linux/aarch64"}),"). By default the image will be built for the same platform that the operator is hosted on."]}),"\n",(0,t.jsx)(n.admonition,{title:"seed images may fill up local storage",type:"warning",children:(0,t.jsxs)(n.p,{children:["The seed images are kept on the node's local storage: pay attention to the number of ",(0,t.jsx)(n.code,{children:"SeedImage"})," resources you start concurrently and to the ones you may leave around with the auto-cleanup feature disabled (",(0,t.jsx)(n.code,{children:"cleanupAfterMinutes"})," = ",(0,t.jsx)(n.code,{children:"0"}),") as you may exhaust the storage on your cluster nodes."]})}),"\n",(0,t.jsx)(n.h2,{id:"seedimagespec-reference",children:"SeedImageSpec reference"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"baseImage"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsx)(n.td,{children:"The base Elemental image used to build the seed image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"registrationRef"}),(0,t.jsx)(n.td,{children:"object ref."}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsx)(n.td,{children:"A reference to a MachineRegistration that will be used for all installed machines to register."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"buildContainer"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["Settings for a custom container used to generate the downloadable image. (See ",(0,t.jsx)(n.a,{href:"#buildcontainer",children:"documentation"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cleanupAfterMinutes"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"60"}),(0,t.jsx)(n.td,{children:"The time after which the built seed image will be cleaned up. Active downloads will finish before the image is removed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"retriggerBuild"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Trigger to build again a cleaned up seed image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"size"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"6Gi"}),(0,t.jsx)(n.td,{children:"Specifies the size of the volume used to store the image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"iso"}),(0,t.jsxs)(n.td,{children:["Specifies the type of seed image to built. ",(0,t.jsx)(n.code,{children:"iso"})," or ",(0,t.jsx)(n.code,{children:"raw"}),". (See ",(0,t.jsx)(n.a,{href:"#iso-and-raw-images",children:"documentation"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"targetPlatform"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"empty"}),(0,t.jsxs)(n.td,{children:["Specifies the target platform for the built image. Example: ",(0,t.jsx)(n.code,{children:"linux/x86_64"})," or ",(0,t.jsx)(n.code,{children:"linux/aarch64"}),". (See ",(0,t.jsx)(n.a,{href:"#multi-platform-support",children:"documentation"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cloud-config"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsxs)(n.td,{children:["Contains cloud-config data to be included in the generated image. (See ",(0,t.jsx)(n.a,{href:"/next/cloud-config-reference",children:"documentation"}),")."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"buildcontainer",children:"BuildContainer"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"buildContainer"})," settings can be used to customize the ",(0,t.jsx)(n.code,{children:"build"})," init container within the ",(0,t.jsx)(n.code,{children:"SeedImage"}),"'s pod.",(0,t.jsx)(n.br,{}),"\n","This could be the case for example when building custom Elemental images."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'buildContainer:\n  name: "custom-build"\n  image: my.registry.com/elemental-custom-builder:1.2.3\n  command:\n    - build-image\n  args:\n    - foo\n    - bar\n  imagePullPolicy: Always\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that the container will additionally have two volumes mounted at ",(0,t.jsx)(n.code,{children:"/iso"})," and ",(0,t.jsx)(n.code,{children:"/overlay"}),".",(0,t.jsx)(n.br,{}),"\n","The SeedImage build process expects the build container to place the build artifact in ",(0,t.jsx)(n.code,{children:"/iso/$(ELEMENTAL_OUTPUT_NAME)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Configuration files are available in:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/overlay/reg/livecd-cloud-config.yaml"}),": A configuration file that can be used by ",(0,t.jsx)(n.code,{children:"elemental-register"})," to register the machine."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/overlay/iso-config/cloud-config.yaml"}),": The cloud-config defined in ",(0,t.jsx)(n.code,{children:"SeedImage.spec.cloud-config"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following list of environment variables can also be used within the custom build container:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ELEMENTAL_DEVICE"}),": The ",(0,t.jsx)(n.code,{children:"MachineRegistration.spec.config.elemental.install.device"})," value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ELEMENTAL_REGISTRATION_URL"}),": The unique URL of the MachineRegistration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ELEMENTAL_BASE_IMAGE"}),": The base image defined in the ",(0,t.jsx)(n.code,{children:"SeedImage"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ELEMENTAL_OUTPUT_NAME"}),": The expected file name of the build artifact."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"iso-and-raw-images",children:"ISO and Raw images"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SeedImage"})," is able to build ",(0,t.jsx)(n.code,{children:"iso"})," or ",(0,t.jsx)(n.code,{children:"raw"})," image types.",(0,t.jsx)(n.br,{}),"\n","Note that Elemental ships two different flavors of images, ",(0,t.jsx)(n.code,{children:"iso"})," or ",(0,t.jsx)(n.code,{children:"container"})," types. See ",(0,t.jsx)(n.a,{href:"/next/managedosversion-reference#managedosversionspec-reference",children:"ManagedOSversion's type"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When building a ",(0,t.jsx)(n.code,{children:"iso"})," ",(0,t.jsx)(n.code,{children:"SeedImage"}),", you can use an ",(0,t.jsx)(n.code,{children:"iso"})," Elemental image.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"iso"})," images contain a pre-built ",(0,t.jsx)(n.code,{children:".iso"})," artifact. This is the default Elemental way of shipping official ISOs, so that they don't need to be rebuilt every time you define a ",(0,t.jsx)(n.code,{children:"SeedImage"}),"."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"ISO SeedImage example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: fire-iso\n  namespace: fleet-default\nspec:\n  type: iso\n  baseImage: registry.suse.com/suse/sl-micro/6.0/baremetal-iso-image:2.1.1-3.36\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: fire-nodes\n    namespace: fleet-default\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, when building a ",(0,t.jsx)(n.code,{children:"raw"})," ",(0,t.jsx)(n.code,{children:"SeedImage"}),", you should use ",(0,t.jsx)(n.code,{children:"container"})," Elemental images. These images are also used during the upgrade process (See: ",(0,t.jsx)(n.a,{href:"/next/managedosimage-reference",children:"ManagedOSImage"}),"), but can be used to build ",(0,t.jsx)(n.code,{children:"raw"})," ",(0,t.jsx)(n.code,{children:"SeedImages"})," as well."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Raw SeedImage example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: fire-raw\n  namespace: fleet-default\nspec:\n  type: raw\n  baseImage: registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:2.1.1-3.29\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: fire-nodes\n    namespace: fleet-default\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"multi-platform-support",children:"Multi-Platform support"}),"\n",(0,t.jsxs)(n.p,{children:["Elemental ships ",(0,t.jsx)(n.code,{children:"linux/x86_64"})," and ",(0,t.jsx)(n.code,{children:"linux/aarch64"})," images for most flavors.",(0,t.jsx)(n.br,{}),"\n","In order to determine whether a ",(0,t.jsx)(n.code,{children:"ManagedOSVersion"})," image supports both platforms, you can verify the ",(0,t.jsx)(n.code,{children:"ManagedOSVersion.spec.metadata.platform"})," values. (See ",(0,t.jsx)(n.a,{href:"/next/managedosversion-reference#metadata",children:"documentation"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["When defining a ",(0,t.jsx)(n.code,{children:"SeedImage"}),", you can then use this value for the image's ",(0,t.jsx)(n.code,{children:"targetPlatform"}),".",(0,t.jsx)(n.br,{}),"\n","Leaving the ",(0,t.jsx)(n.code,{children:"targetPlatform"})," empty, will default to the platform where the ",(0,t.jsx)(n.code,{children:"elemental-operator"})," is running."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Raw aarch64 SeedImage example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: fire-raw-aarch64\n  namespace: fleet-default\nspec:\n  targetPlatform: linux/aarch64\n  type: raw\n  baseImage: registry.suse.com/suse/sl-micro/6.0/baremetal-os-container:2.1.1-3.29\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: fire-nodes\n    namespace: fleet-default\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"downloadable-urls",children:"Downloadable URLs"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SeedImage"})," resource tracks the seed image build process through two status conditions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ready"}),": tracks the creation of all the required child resources that perform the actual build process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SeedImageReady"}),": tracks the status of the build process in the child resources."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively it is also possible to wait for the ",(0,t.jsx)(n.code,{children:"SeedImage"})," pod to be ready:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl wait --for=condition=ready pod -n fleet-default fire-img\n"})}),"\n",(0,t.jsx)(n.p,{children:"Waiting on Ready conditions is a best practice before downloading any artifact."}),"\n",(0,t.jsxs)(n.p,{children:["Once a ",(0,t.jsx)(n.code,{children:"SeedImage"})," is ready, the ",(0,t.jsx)(n.code,{children:".status.downloadURL"})," will contain the downloadable URL.",(0,t.jsx)(n.br,{}),"\n","Note that the URL will use the same endpoint as Rancher, so beware of HTTPS validation when using self signed certificates."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The checksum of the image is also available to verify the download was correct:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.checksumURL}"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>r});var t=i(11504);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);