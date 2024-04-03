"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[2788],{12540:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(17624),i=s(4552);const a={sidebar_label:"Build Custom OS Images",title:""},o="How to build and use custom OS images",r={id:"custom-images",title:"",description:"Remasterimg an OS image with a custom Dockerfile",source:"@site/docs/custom-images.md",sourceDirName:".",slug:"/custom-images",permalink:"/next/custom-images",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Build Custom OS Images",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/next/restore"},next:{title:"Configure Wi-Fi",permalink:"/next/wifi"}},c={},l=[{value:"Remasterimg an OS image with a custom Dockerfile",id:"remasterimg-an-os-image-with-a-custom-dockerfile",level:2},{value:"Create a custom bootable installation ISO",id:"create-a-custom-bootable-installation-iso",level:2},{value:"List custom images as a ManagedOSVersion resource",id:"list-custom-images-as-a-managedosversion-resource",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/custom-images"})}),"\n",(0,t.jsx)(n.h1,{id:"how-to-build-and-use-custom-os-images",children:"How to build and use custom OS images"}),"\n",(0,t.jsx)(n.h2,{id:"remasterimg-an-os-image-with-a-custom-dockerfile",children:"Remasterimg an OS image with a custom Dockerfile"}),"\n",(0,t.jsx)(n.p,{children:"Since OS images provided by Elemental are container images, they can also be used as a base image\nin a Dockerfile in order to create a new container image."}),"\n",(0,t.jsx)(n.p,{children:"Imagine some additional packages from an extra repository is required, the following example\nshowcases how this could be added:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-docker",metastring:"showLineNumbers",children:'# The version of Elemental to modify\nFROM registry.suse.com/suse/sle-micro/5.5:latest\n\n# Custom commands\nRUN rpm --import <repo-signing-key-url> && \\\n    zypper addrepo --refresh <repo_url> extra_repo && \\\n    zypper install -y <extra_package>\n\n# IMPORTANT: /etc/os-release is used for versioning/upgrade. The\n# values here should reflect the tag of the image currently being built\nARG IMAGE_REPO=norepo\nARG IMAGE_TAG=latest\nRUN \\\n    sed -i -e "s/^IMAGE_REPO=.*/IMAGE_REPO=\\"${IMAGE_REPO}\\"/g" /etc/os-release && \\\n    sed -i -e "s/^IMAGE_TAG=.*/IMAGE_TAG=\\"${IMAGE_TAG}\\"/g" /etc/os-release && \\\n    sed -i -e "s/^IMAGE=.*/IMAGE=\\"${IMAGE_REPO}:${IMAGE_TAG}\\"/g" /etc/os-release\n\n# IMPORTANT: it is good practice to recreate the initrd and re-apply `elemental-init`\n# command that was used in the base image. This ensures that any eventual change that should\n# be synced in initrd included binaries is also applied there and consistent.\nRUN elemental init --force immutable-rootfs,grub-config,dracut-config,cloud-config-essentials,elemental-setup\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"latest"})," is the base version we want to customize."]}),"\n",(0,t.jsx)(n.p,{children:"And then the following commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker build --build-arg IMAGE_REPO=myrepo/custom-build \\\n             --build-arg IMAGE_TAG=v1.1.1 \\\n             -t myrepo/custom-build:v1.1.1 .\ndocker push myrepo/custom-build:v1.1.1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The new customized OS is available as the Docker image ",(0,t.jsx)(n.code,{children:"myrepo/custom-build:v1.1.1"})," and it can\nbe run and verified using docker with"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker run -it myrepo/custom-build:v1.1.1 bash\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-a-custom-bootable-installation-iso",children:"Create a custom bootable installation ISO"}),"\n",(0,t.jsx)(n.p,{children:"Elemental leverages container images to build its root filesystems; therefore, it is possible\nto use it in a multi-stage environment to create custom bootable media that bundles a custom container image."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-docker",metastring:"showLineNumbers",children:'FROM registry.suse.com/suse/sle-micro/5.5:latest AS os\n\n# Check the previous section on building custom images\n\n# The released OS already includes the toolchain for building ISOs\nFROM registry.suse.com/suse/sle-micro/5.5:latest AS builder\n\nARG TARGETARCH\nWORKDIR /iso\nCOPY --from=os / rootfs\n\n# work around buildah issue: https://github.com/containers/buildah/issues/4242\nRUN rm -f rootfs/etc/resolv.conf\n\nRUN elemental build-iso \\\n        dir:rootfs \\\n        --bootloader-in-rootfs \\\n        --squash-no-compression \\\n        -o /output -n "elemental-${TARGETARCH}"\n\nFROM busybox\nCOPY --from=builder /output /custom-iso\n\nENTRYPOINT ["busybox", "sh", "-c"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Build it with regular ",(0,t.jsx)(n.code,{children:"docker build"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker build -t myrepo/custom-build:v1.1.1 \\\n              --build-arg IMAGE_REPO=myrepo/custom-build-iso \\\n              --build-arg IMAGE_TAG=v1.1.1 \\\n              .\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting container image is actually a container image including the ISO,\nthis container image can be pushed to an OCI registry too. The ISO image can be\nextracted from the container to the current folder by executing the container as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:'docker run --rm -v $(pwd):/host mytest-image "busybox cp /custom-iso/*.iso /host"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The new customized installation media can be found in ",(0,t.jsx)(n.code,{children:"elemental-<arch>.iso"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The above container run is equivalent to what ",(0,t.jsx)(n.em,{children:"elemental-operator"})," does to extract\nthe ISO from a container to build a new one including the registration URL,\nhence this is also a good check mark to verify the container can be pushed to a\nregistry and used by the ",(0,t.jsx)(n.em,{children:"elemental-operator"})," as a ",(0,t.jsx)(n.code,{children:"baseImage"})," for a\n",(0,t.jsx)(n.a,{href:"seedimage-reference",children:"SeedImage"})," resource."]}),"\n",(0,t.jsx)(n.h2,{id:"list-custom-images-as-a-managedosversion-resource",children:"List custom images as a ManagedOSVersion resource"}),"\n",(0,t.jsx)(n.p,{children:"In Elemental listing OS container images and ISO container images as ManagedOSVersion\nresources is not mandatory but handy. Specially from a UI perspective this makes\nthe custom images visible and easy to use from the Elemental UI extension."}),"\n",(0,t.jsxs)(n.p,{children:["Continuing the example from the previous section a custom OS container referenced as\n",(0,t.jsx)(n.code,{children:"myrepo/custom-build:v1.1.1"})," was built and eventually pushed to a registry. Then this\nimage is ready to be added as a ManagedOSVersion resource with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersion\nmetadata:\n  name: v1.1.1-custom-build\n  namespace: fleet-default\nspec:\n  metadata:\n    displayName: Custom build image\n    upgradeImage: myrepo/custom-build:v1.1.1\n  type: container\n  version: v1.1.1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note the ",(0,t.jsx)(n.code,{children:"type: container"})," states this is a container OS. This makes the image ",(0,t.jsx)(n.code,{children:"myrepo/custom-build:v1.1.1"}),"\neligible for OS upgrades from the UI."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, the custom container for the ISO ",(0,t.jsx)(n.code,{children:"myrepo/custom-build-iso:v1.1.1"})," can also be included\nas a ManagedOSVersion resource with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: ManagedOSVersion\nmetadata:\n  name: v1.1.1-custom-build-iso\n  namespace: fleet-default\nspec:\n  metadata:\n    displayName: Custom build ISO image\n    uri: myrepo/custom-build-iso:v1.1.1\n  type: iso\n  version: v1.1.1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note the  ",(0,t.jsx)(n.code,{children:"type: iso"})," states this is an ISO. This makes the image ",(0,t.jsx)(n.code,{children:"myrepo/custom-build-iso:v1.1.1"}),"\neligible for SeedImages generation from UI."]})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var t=s(11504);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);