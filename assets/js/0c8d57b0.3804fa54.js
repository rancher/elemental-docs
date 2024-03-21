"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3664],{85828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>x,toc:()=>b});var r=t(17624),i=t(4552),a=t(19968),s=t(7576),l=t(31220),o=t(74504);function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Rancher server (v2.7.0 or later) configured (server-url set)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To configure the Rancher ",(0,r.jsx)(n.code,{children:"server-url"})," please check the ",(0,r.jsx)(n.a,{href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/#first-log-in",children:"Rancher docs"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["A machine (bare metal or virtualized) with TPM 2.0","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Hint 1: Libvirt allows setting virtual TPMs for virtual machines ",(0,r.jsx)(n.a,{href:"tpm#add-tpm-module-to-virtual-machine",children:"example here"})]}),"\n",(0,r.jsxs)(n.li,{children:["Hint 2: You can enable TPM emulation on bare metal machines missing the TPM 2.0 module ",(0,r.jsx)(n.a,{href:"tpm#add-tpm-emulation-to-bare-metal-machine",children:"example here"})]}),"\n",(0,r.jsx)(n.li,{children:"Hint 3: Make sure you're using UEFI (not BIOS) on x86-64, or the ISO won't boot"}),"\n",(0,r.jsxs)(n.li,{children:["Hint 4: A minimum volume size of 25 GB is recommended. See the ",(0,r.jsx)(n.a,{href:"installation#deployed-elemental-teal-partition-table",children:"Elemental Teal partition table"})," for more details"]}),"\n",(0,r.jsxs)(n.li,{children:["Hint 5: CPU and RAM requirements depend on the Kubernetes version installed, for example ",(0,r.jsx)(n.a,{href:"https://docs.k3s.io/installation/requirements#hardware",children:"K3s"})," or ",(0,r.jsx)(n.a,{href:"https://docs.rke2.io/install/requirements#hardware",children:"RKE2"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Helm Package Manager (",(0,r.jsx)(n.a,{href:"https://helm.sh/",children:"https://helm.sh/"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["For ARM (aarch64) - One SD-card (32 GB or more, must be ",(0,r.jsx)(n.strong,{children:"fast"})," - 40MB/s write speed is acceptable) and a USB-stick for installation"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{TabItem:t,Tabs:a}=n;return t||u("TabItem",!0),a||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"install-elemental-operator",children:"Install Elemental Operator"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"elemental-operator"})," is the management endpoint, running the management\ncluster and taking care of creating inventories, registrations for machines and much more."]}),"\n",(0,r.jsx)(n.p,{children:"We will use the Helm package manager to install the elemental-operator chart into our cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.suse.com/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now after a few seconds you should see the operator pod appear on the ",(0,r.jsx)(n.code,{children:"cattle-elemental-system"})," namespace:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl get pods -n cattle-elemental-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nelemental-operator-64f88fc695-b8qhn   1/1     Running   0          16s\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Helm v3.8.0+ required",type:"info",children:(0,r.jsx)(n.p,{children:"The Elemental Operator chart is distributed via an OCI registry: Helm correctly supports OCI based registries starting from the v3.8.0 release."})}),"\n",(0,r.jsx)(n.admonition,{title:"Swap charts installation order when upgrading from elemental-operator release < 1.2.4",type:"warning",children:(0,r.jsx)(n.p,{children:"When upgrading from an elemental-operator release embedding the Elemental CRDs (version < 1.2.4) the elemental-operator-crds chart installation will fail.\nYou will need to upgrade the elemental-operator chart first, and only then install the elemental-operator-crds chart."})}),"\n",(0,r.jsx)(n.h3,{id:"non-stable-installations",children:"Non-stable installations"}),"\n",(0,r.jsxs)(n.p,{children:["Besides the Helm charts listed above, there are two other ",(0,r.jsx)(n.code,{children:"non-stable"}),"\nversions available."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Staging:"})," refers to the latest tagged release from Github. This is documented in the ",(0,r.jsx)(n.a,{href:"/next/quickstart-ui",children:"Next"})," pages."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Development:"})," refers to the 'tip of HEAD' from Github. This is the ongoing development version and changes constantly."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)(t,{value:"stagingOperator",label:"Staging version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/staging/charts/rancher/elemental-operator-chart\n"})})}),(0,r.jsxs)(t,{value:"develOperator",label:"Development version (x86-64, ARM64 (Raspberry Pi 4))",default:!0,children:[(0,r.jsx)(n.admonition,{title:"Reminder",type:"warning",children:(0,r.jsx)(n.p,{children:"The development version is not recommended for production environments. We welcome feedback via Slack or Github issues, but it could be unstable and contain experimental features that can be dropped without notice."})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install --set image.imagePullPolicy=Always elemental-operator oci://registry.opensuse.org/isv/rancher/elemental/dev/charts/rancher/elemental-operator-chart\n"})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"installation-options",children:"Installation options"}),"\n",(0,r.jsxs)(n.p,{children:["There are a few options that can be set in the chart install but that is out of scope for this document. You can see all the values on the chart ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/elemental-operator/blob/main/.obs/chartfile/operator/values.yaml",children:"values.yaml"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var p=t(30600);const g={sidebar_label:"Elemental the command line way",title:""},f="Elemental the command line way",x={id:"quickstart-cli",title:"",description:"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher",source:"@site/versioned_docs/version-1.4/quickstart-cli.md",sourceDirName:".",slug:"/quickstart-cli",permalink:"/quickstart-cli",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Elemental the command line way",title:""},sidebar:"docs",previous:{title:"Elemental the visual way",permalink:"/quickstart-ui"},next:{title:"Architecture",permalink:"/architecture"}},j={},b=[{value:"Prepare your kubernetes resources",id:"prepare-your-kubernetes-resources",level:2},{value:"Preparing the installation (seed) image",id:"preparing-the-installation-seed-image",level:2},{value:"Retrieving the prebuilt seed image",id:"retrieving-the-prebuilt-seed-image",level:4},{value:"Verifying the download",id:"verifying-the-download",level:5},{value:"Injecting the registration information",id:"injecting-the-registration-information",level:4},{value:"Writing the seed image to a USB stick",id:"writing-the-seed-image-to-a-usb-stick",level:4},{value:"Booting the Raspberry Pi",id:"booting-the-raspberry-pi",level:4},{value:"Selecting the right machines to join a cluster",id:"selecting-the-right-machines-to-join-a-cluster",level:3},{value:"How can I choose the kubernetes version and deployer for the cluster?",id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster",level:2},{value:"How can I follow what is going on behind the scenes?",id:"how-can-i-follow-what-is-going-on-behind-the-scenes",level:2}];function y(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{CodeBlock:t,Head:c,TabItem:d,Tabs:u}=n;return t||w("CodeBlock",!0),c||w("Head",!0),d||w("TabItem",!0),u||w("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{children:(0,r.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/quickstart-cli"})}),"\n","\n","\n",(0,r.jsx)(n.h1,{id:"elemental-the-command-line-way",children:"Elemental the command line way"}),"\n",(0,r.jsx)(n.p,{children:"Follow this guide to have an auto-deployed cluster via rke2/k3s and managed by Rancher\nwith the only help of an Elemental Teal ISO."}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(m,{}),"\n",(0,r.jsx)(n.h2,{id:"prepare-your-kubernetes-resources",children:"Prepare your kubernetes resources"}),"\n",(0,r.jsxs)(n.p,{children:["Node deployment starts with a ",(0,r.jsx)(n.code,{children:"MachineRegistration"}),", identifying a set of machines sharing the same configuration (disk drives, network, etc.)."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MachineRegistration"})," is needed to perform the deployment of the Elemental OS on the target hosts. When booting up, each host registers to the Elemental Operator which tracks the new host with a ",(0,r.jsx)(n.code,{children:"MachineInventory"})," resource."]}),"\n",(0,r.jsxs)(n.p,{children:["Then it continues with having a Cluster resource that uses a ",(0,r.jsx)(n.code,{children:"MachineInventorySelectorTemplate"})," to know which machines are for that cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["This selector is a simple matcher based on labels set in the ",(0,r.jsx)(n.code,{children:"MachineInventory"}),", so if your selector is matching on the label ",(0,r.jsx)(n.code,{children:"cluster-id"})," with a value ",(0,r.jsx)(n.code,{children:"cluster-id-val"}),"\nand your ",(0,r.jsx)(n.code,{children:"MachineInventory"})," has that same ",(0,r.jsx)(n.code,{children:"cluster-id"}),":",(0,r.jsx)(n.code,{children:"cluster-id-val"})," label, it will match and be bootstrapped as part of the cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["In this quickstart we are going to deploy the resources to provision a cluster named ",(0,r.jsx)(n.em,{children:"volcano"})," that will match on ",(0,r.jsx)(n.code,{children:"MachineInventory"}),"s with the label ",(0,r.jsx)(n.em,{children:"element"}),":",(0,r.jsx)(n.em,{children:"fire"}),"."]}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsxs)(d,{value:"manualYaml",label:"Manually creating the resource yamls",default:!0,children:[(0,r.jsx)(n.p,{children:"You will need to create the following files:"}),(0,r.jsx)(t,{language:"yaml",title:"selector.yaml",showLineNumbers:!0,children:o.c}),(0,r.jsxs)(n.p,{children:["As you can see this is a very simple selector that looks for ",(0,r.jsx)(n.code,{children:"MachineInventory"}),"s having a label with the key ",(0,r.jsx)(n.code,{children:"element"})," and the value ",(0,r.jsx)(n.code,{children:"fire"}),"."]}),(0,r.jsx)(t,{language:"yaml",title:"cluster.yaml",showLineNumbers:!0,children:a.c}),(0,r.jsxs)(n.p,{children:["As you can see the ",(0,r.jsx)(n.code,{children:"machineConfigRef"})," is of kind ",(0,r.jsx)(n.code,{children:"MachineInventorySelectorTemplate"})," with the name ",(0,r.jsx)(n.code,{children:"fire-machine-selector"}),": it matches the selector we created."]}),(0,r.jsxs)(n.p,{children:["You can get more information about cluster options like ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineglobalconfig",children:(0,r.jsx)(n.code,{children:"machineGlobalConfig"})})," or ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration#machineselectorconfig",children:(0,r.jsx)(n.code,{children:"machineSelectorConfig"})})," directly in the ",(0,r.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com",children:"Rancher Manager documentation"}),"."]}),(0,r.jsxs)(u,{children:[(0,r.jsx)(d,{value:"normalRegistration",label:"Registration",default:!0,children:(0,r.jsx)(t,{language:"yaml",title:"registration.yaml",showLineNumbers:!0,children:s.c})}),(0,r.jsxs)(d,{value:"rpiRegistration",label:"Registration for Raspberry Pi",default:!0,children:[(0,r.jsx)(t,{language:"yaml",title:"rpi-registration.yaml",showLineNumbers:!0,children:l.c}),(0,r.jsxs)(n.p,{children:["For deployment on Raspberry Pi, you need to enable emulated TPM\n(except you have ",(0,r.jsx)(n.a,{href:"https://thepihut.com/products/letstrust-tpm-for-raspberry-pi",children:"a hardware TPM for Raspberry Pi"}),").\nYou also need to disable writing to the EFI store (since Raspberry Pi doesn't have one) via ",(0,r.jsx)(n.code,{children:"disable-boot-entry: true"}),"."]})]})]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MachineRegistration"})," defines the registration and installation configuration. Once created, the Elemental operator exposes a unique URL to be used with the ",(0,r.jsx)(n.code,{children:"elemental-register"})," binary to reach out to the management cluster and register the machine during installation: if the registration is successful, the operator creates a ",(0,r.jsx)(n.code,{children:"MachineInventory"})," tracking the machine, which can be used to provision the machine as a node of our cluster.\nWe define the label matching our selector here, although it can also be added later to the created ",(0,r.jsx)(n.code,{children:"MachineInventory"}),"s."]}),(0,r.jsxs)(n.admonition,{title:"warning",type:"warning",children:[(0,r.jsx)(n.p,{children:"Make sure to modify the registration.yaml above to set the proper install device to point to a valid device based on your node configuration (i.e. /dev/sda, /dev/vda, /dev/nvme0, etc...)."}),(0,r.jsxs)(n.p,{children:["The SD-card on a Raspberry Pi is usually ",(0,r.jsx)(n.code,{children:"/dev/mmcblk0"}),"."]})]}),(0,r.jsxs)(u,{children:[(0,r.jsxs)(d,{value:"seedImagex86",label:"Seed Image (x86_64)",default:!0,children:[(0,r.jsx)(t,{language:"yaml",title:"seedimage.yaml",showLineNumbers:!0,children:p.c}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SeedImage"})," is required to generate the ",(0,r.jsx)(n.em,{children:"seed image"})," (like a bootable ISO) that will boot and start the Elemental provisioning on the target machines."]}),(0,r.jsx)(n.p,{children:"Now that we have defined all the configuration files let's apply them to create the proper resources in Kubernetes:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\nkubectl apply -f seedimage.yaml\n"})})]}),(0,r.jsxs)(d,{value:"seedImagerpi",label:"Seed Image for Raspberry Pi",default:!0,children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SeedImage"})," resource, which automates the creation of an Elemental bootable image (the ",(0,r.jsx)(n.em,{children:"seed image"}),"), does not support Raspberry Pi yet.\nWe will generate a ",(0,r.jsx)(n.em,{children:"seed image"})," manually in the ",(0,r.jsx)(n.a,{href:"/quickstart-cli#preparing-the-installation-seed-image",children:"next section"}),"."]}),(0,r.jsx)(n.p,{children:"Now that we have defined all the configuration files let's apply them to create the proper resources in Kubernetes:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl apply -f selector.yaml \nkubectl apply -f cluster.yaml \nkubectl apply -f registration.yaml\n"})})]})]})]}),(0,r.jsxs)(d,{value:"repofiles",label:"Using quickstart files from Elemental docs repo directly",children:[(0,r.jsxs)(n.p,{children:["You can directly apply the quickstart example resource files from the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/elemental-docs",children:"Elemental docs repository"}),"."]}),(0,r.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,r.jsxs)(n.p,{children:["The quickstart example resource files assume the default storage of the target host to be mapped to the ",(0,r.jsx)(n.code,{children:"/dev/sda"}),".\nIf your host storage device file is different, you have to change the registration.yaml file before applying it, changing the ",(0,r.jsx)(n.code,{children:"config.elemental.install.device"})," accordingly."]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"kubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/selector.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/cluster.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/registration.yaml\nkubectl apply -f https://raw.githubusercontent.com/rancher/elemental-docs/main/examples/quickstart/seedimage.yaml (not for aarch64 yet)\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"preparing-the-installation-seed-image",children:"Preparing the installation (seed) image"}),"\n",(0,r.jsx)(n.p,{children:"This is the last step: you need an Elemental Teal seed image that includes the initial registration config, so it can be auto registered, installed and fully deployed as part of your cluster."}),"\n",(0,r.jsxs)(n.admonition,{title:"note",type:"note",children:[(0,r.jsxs)(n.p,{children:["The initial registration config file is generated when you create a ",(0,r.jsx)(n.code,{children:"Machine Registration"}),"."]}),(0,r.jsx)(n.p,{children:"You can download it with:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'wget --no-check-certificate `kubectl get machineregistration -n fleet-default fire-nodes -o jsonpath="{.status.registrationURL}"` -O initial-registration.yaml\n'})})]}),"\n",(0,r.jsx)(n.p,{children:"The contents of the registration config file are nothing more than the registration URL that the node needs to register, the proper server certificate and few options for the registration process."}),"\n",(0,r.jsx)(n.p,{children:"Once generated, a seed image can be used to provision any number of machines."}),"\n",(0,r.jsxs)(u,{children:[(0,r.jsxs)(d,{value:"download",label:"Downloading the quickstart ISO",children:[(0,r.jsxs)(n.p,{children:["The seed image created by the ",(0,r.jsx)(n.code,{children:"SeedImage"})," resource above can be downloaded as an ISO via the following script:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:'kubectl wait --for=condition=ready pod -n fleet-default fire-img\nwget --no-check-certificate `kubectl get seedimage -n fleet-default fire-img -o jsonpath="{.status.downloadURL}"` -O elemental-teal.x86_64.iso\n'})}),(0,r.jsxs)(n.p,{children:["The first command waits for the ISO to be built and ready, the second one downloads it in the current directory with the name ",(0,r.jsx)(n.code,{children:"elemental-teal-x86_64.iso"}),"."]})]}),(0,r.jsxs)(d,{value:"manual_iso",label:"Preparing the seed image (x86_64) manually",children:[(0,r.jsxs)(n.p,{children:["If you created a ",(0,r.jsx)(n.a,{href:"customizing#create-a-custom-bootable-installation-media",children:"customized ISO"}),",\nyou can use the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/elemental/blob/main/.github/elemental-iso-add-registration",children:(0,r.jsx)(n.code,{children:"elemental-iso-add-registration"})}),"\nscript to add the registration config file"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"elemental-iso-add-registration initial-registration.yaml my-customized.iso\n"})})]}),(0,r.jsxs)(d,{value:"manual_raw",label:"Preparing the seed image (aarch64) manually",children:[(0,r.jsx)(n.p,{children:"Elemental's support for Raspberry Pi is primarily for demonstration purposes at this point. Therefore the installation process is modelled similar to x86-64. You boot from a seed image (an USB stick in this case) and install to a storage medium (SD-card for Raspberry Pi)."}),(0,r.jsx)(n.h4,{id:"retrieving-the-prebuilt-seed-image",children:"Retrieving the prebuilt seed image"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable/containers/rpi.raw\n"})}),(0,r.jsx)(n.h5,{id:"verifying-the-download",children:"Verifying the download"}),(0,r.jsx)(n.p,{children:"In order to verify the integrity of the downloaded artifacts, you\nshould do a checksum verification:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget -q https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Stable/containers/rpi.raw.sha256\nsha256sum -c rpi.raw.sha256\n"})}),(0,r.jsxs)(n.p,{children:["This should print ",(0,r.jsx)(n.code,{children:"rpi.raw: OK"})," as output."]}),(0,r.jsx)(n.h4,{id:"injecting-the-registration-information",children:"Injecting the registration information"}),(0,r.jsxs)(n.p,{children:["Adding the ",(0,r.jsx)(n.code,{children:"initial-registration.yaml"})," isn't scripted yet. This is still a manual process:"]}),(0,r.jsxs)(n.p,{children:["The written USB stick will have two partitions. ",(0,r.jsx)(n.code,{children:"RPI_BOOT"})," contains the boot loader files and ",(0,r.jsx)(n.code,{children:"COS_LIVE"})," the Elemental files.\nMount the ",(0,r.jsx)(n.code,{children:"COS_LIVE"})," partition and write ",(0,r.jsx)(n.code,{children:"initial-registration.yaml"})," as ",(0,r.jsx)(n.code,{children:"livecd-cloud-config.yaml"})," to this partition."]}),(0,r.jsx)(n.p,{children:"If you've mounted the USB stick with a file manager, this command should work to copy the registration information:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"sudo cp initial-registration.yaml /run/media/$USER/COS_LIVE/livecd-cloud-config.yaml\n"})}),(0,r.jsx)(n.p,{children:"If you prefer using some CLI tools:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:"IMAGE=rpi.raw\nDEST=$(mktemp -d)\n\nSECTORSIZE=$(sfdisk -J ${IMAGE} | jq '.partitiontable.sectorsize')\nDATAPARTITIONSTART=$(sfdisk -J ${IMAGE} | jq '.partitiontable.partitions[1].start')\nsudo mount -o rw,loop,offset=$((${SECTORSIZE}*${DATAPARTITIONSTART})) ${IMAGE} ${DEST}\nsudo cp initial-registration.yaml ${DEST}/livecd-cloud-config.yaml\nsudo umount ${DEST}\nrmdir ${DEST}\n"})}),(0,r.jsx)(n.h4,{id:"writing-the-seed-image-to-a-usb-stick",children:"Writing the seed image to a USB stick"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".raw"})," image needs to be written to a USB stick to boot from. This can be done with ",(0,r.jsx)(n.code,{children:"dd"})," on the Linux command line if you're comfortable with this command.\n",(0,r.jsx)(n.a,{href:"https://www.opensuse.org",children:"openSUSE"})," has nice instructions on how to write an image to a storage medium for ",(0,r.jsx)(n.a,{href:"https://en.opensuse.org/SDB:Live_USB_stick",children:"Linux"}),",\n",(0,r.jsx)(n.a,{href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_Windows",children:"Windows"}),", and ",(0,r.jsx)(n.a,{href:"https://en.opensuse.org/SDB:Create_a_Live_USB_stick_using_macOS",children:"OS X"}),"."]}),(0,r.jsx)(n.h4,{id:"booting-the-raspberry-pi",children:"Booting the Raspberry Pi"}),(0,r.jsx)(n.p,{children:"Now unmount the USB stick and plug it into your Raspberry Pi."}),(0,r.jsxs)(n.p,{children:["Plug a large (32 GB or more) and ",(0,r.jsx)(n.strong,{children:"fast"})," (!!) micro SD-card into the respective slot."]}),(0,r.jsx)(n.p,{children:"Connect the system to ethernet."}),(0,r.jsx)(n.p,{children:"A powercycle will reboot the Pi. Everything else is identical to x86-64."}),(0,r.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,r.jsx)(n.p,{children:"Make sure the micro SD-card is unpartitioned. Otherwise the Pi bootloader will try to boot from it and fail."})})]})]}),"\n",(0,r.jsx)(n.p,{children:"You can now boot your nodes with this image and they will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Register with the registrationURL given and create a per-machine ",(0,r.jsx)(n.code,{children:"MachineInventory"})]}),"\n",(0,r.jsx)(n.li,{children:"Install Elemental Teal to the given device"}),"\n",(0,r.jsx)(n.li,{children:"Reboot"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"selecting-the-right-machines-to-join-a-cluster",children:"Selecting the right machines to join a cluster"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MachineInventorySelectorTemplate"})," selects the machines needed to provision the cluster from the ",(0,r.jsx)(n.code,{children:"MachineInventory"}),"s having the ",(0,r.jsxs)(n.em,{children:["element",":fire"]})," label.\nWe have added the ",(0,r.jsx)(n.em,{children:"element"}),":",(0,r.jsx)(n.em,{children:"fire"})," label in the ",(0,r.jsx)(n.code,{children:"MachineRegistration"})," ",(0,r.jsx)(n.code,{children:"machineInventoryLabels"})," map, so all the ",(0,r.jsx)(n.code,{children:"MachineInventory"}),"s originated from it already have the label.\nOne could anyway skip the label from the ",(0,r.jsx)(n.code,{children:"MachineRegistration"})," and add it later:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"showLineNumbers",children:'kubectl -n fleet-default label machineinventory $(kubectl get machineinventory -n fleet-default --no-headers -o custom-columns=":metadata.name") element=fire\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As soon as ",(0,r.jsx)(n.code,{children:"MachineInventory"}),"s with the ",(0,r.jsx)(n.em,{children:"element"}),":",(0,r.jsx)(n.em,{children:"fire"})," are present, the corresponding machines auto-deploy the cluster via the chosen provider (k3s/rke)."]}),"\n",(0,r.jsx)(n.p,{children:"After a few minutes your new cluster will be fully provisioned!!"}),"\n",(0,r.jsx)(n.h2,{id:"how-can-i-choose-the-kubernetes-version-and-deployer-for-the-cluster",children:"How can I choose the kubernetes version and deployer for the cluster?"}),"\n",(0,r.jsxs)(n.p,{children:["In your cluster.yaml file there is a key in the ",(0,r.jsx)(n.code,{children:"Spec"})," called ",(0,r.jsx)(n.code,{children:"kubernetesVersion"}),". That sets the version and deployer that will be used for the cluster,\nfor example Kubernetes",(0,r.jsx)(n.code,{children:"v1.24.8"})," for rke2 would be ",(0,r.jsx)(n.code,{children:"v1.24.8+rke2r1"})," and for k3s ",(0,r.jsx)(n.code,{children:"v1.24.8+k3s1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To see all compatible versions check the ",(0,r.jsx)(n.a,{href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/",children:"Rancher Support Matrix"})," PDF for rke/rke2/k3s versions and their components."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also check our ",(0,r.jsx)(n.a,{href:"/kubernetesversions",children:"Version doc"})," to know how to obtain those versions."]}),"\n",(0,r.jsxs)(n.p,{children:["Check our ",(0,r.jsx)(n.a,{href:"/cluster-reference",children:"Cluster Spec"})," page for more info about the ",(0,r.jsx)(n.code,{children:"Cluster"})," resource."]}),"\n",(0,r.jsx)(n.h2,{id:"how-can-i-follow-what-is-going-on-behind-the-scenes",children:"How can I follow what is going on behind the scenes?"}),"\n",(0,r.jsx)(n.p,{children:"You should be able to follow along what the machine is doing via:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["During ISO boot:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["ssh into the machine (user/pass: root/ros):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["running ",(0,r.jsx)(n.code,{children:"journalctl -f -t elemental"})," shows you the progress of the registration (",(0,r.jsx)(n.em,{children:"elemental-register"}),") and the installation of Elemental (",(0,r.jsx)(n.em,{children:"elemental install"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Once the system is installed:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On the Rancher UI -> ",(0,r.jsx)(n.code,{children:"Cluster Management"})," allows you to see your new cluster and the ",(0,r.jsx)(n.code,{children:"Provisioning Log"})," in the cluster details"]}),"\n",(0,r.jsxs)(n.li,{children:["ssh into the machine (user/pass: Whatever your configured on the registration.yaml under ",(0,r.jsx)(n.code,{children:"Spec.config.cloud-config.users"}),"):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["running ",(0,r.jsx)(n.code,{children:"journalctl -f -u elemental-system-agent"})," shows the output of the initial elemental config and the installation of the ",(0,r.jsx)(n.code,{children:"rancher-system-agent"})]}),"\n",(0,r.jsxs)(n.li,{children:["running ",(0,r.jsx)(n.code,{children:"journalctl -f -u rancher-system-agent"})," shows the output of the boostrap of cluster components like k3s"]}),"\n",(0,r.jsxs)(n.li,{children:["running ",(0,r.jsx)(n.code,{children:"journalctl -f -u k3s"})," shows the logs of the k3s deployment"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function v(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}function w(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},19968:(e,n,t)=>{t.d(n,{c:()=>r});const r="kind: Cluster\napiVersion: provisioning.cattle.io/v1\nmetadata:\n  name: volcano\n  namespace: fleet-default\nspec:\n  rkeConfig:\n    machineGlobalConfig:\n      etcd-expose-metrics: false\n      profile: null\n    machinePools:\n      - controlPlaneRole: true\n        etcdRole: true\n        machineConfigRef:\n          apiVersion: elemental.cattle.io/v1beta1\n          kind: MachineInventorySelectorTemplate\n          name: fire-machine-selector\n        name: fire-pool\n        quantity: 1\n        unhealthyNodeTimeout: 0s\n        workerRole: true\n    machineSelectorConfig:\n      - config:\n          protect-kernel-defaults: false\n    registries: {}\n  kubernetesVersion: v1.24.8+k3s1\n"},7576:(e,n,t)=>{t.d(n,{c:()=>r});const r='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},31220:(e,n,t)=>{t.d(n,{c:()=>r});const r='apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: fire-nodes\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/mmcblk0\n        debug: true\n        disable-boot-entry: true\n      registration:\n        emulate-tpm: true\n  machineInventoryLabels:\n    element: fire\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'},30600:(e,n,t)=>{t.d(n,{c:()=>r});const r="apiVersion: elemental.cattle.io/v1beta1\nkind: SeedImage\nmetadata:\n  name: fire-img\n  namespace: fleet-default\nspec:\n  type: iso\n  baseImage: registry.suse.com/rancher/elemental-teal-iso/5.4:1.2.2\n  registrationRef:\n    apiVersion: elemental.cattle.io/v1beta1\n    kind: MachineRegistration\n    name: fire-nodes\n    namespace: fleet-default\n"},74504:(e,n,t)=>{t.d(n,{c:()=>r});const r="apiVersion: elemental.cattle.io/v1beta1\nkind: MachineInventorySelectorTemplate\nmetadata:\n  name: fire-machine-selector\n  namespace: fleet-default\nspec:\n  template:\n    spec:\n      selector:\n        matchExpressions:\n          - key: element\n            operator: In\n            values: [ 'fire' ]\n"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var r=t(11504);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);