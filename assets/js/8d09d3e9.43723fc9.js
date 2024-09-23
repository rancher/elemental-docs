"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8383],{66748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>A,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(74848),i=n(28453);const r={sidebar_label:"How to use Elemental with Rancher and VMware",title:""},s="How to use Elemental with Rancher and VMware",l={id:"rancher-vmware",title:"",description:"Excerpt",source:"@site/docs/rancher-vmware.md",sourceDirName:".",slug:"/rancher-vmware",permalink:"/next/rancher-vmware",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"How to use Elemental with Rancher and VMware",title:""},sidebar:"docs",previous:{title:"Configure NTP",permalink:"/next/ntp"},next:{title:"Include cloud-config from removable devices",permalink:"/next/removable-device-cloudconfig"}},o={},c=[{value:"Excerpt",id:"excerpt",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Part 1: Rancher Configuration",id:"part-1-rancher-configuration",level:2},{value:"1.1 Enable the extensions under Rancher configurations menu",id:"11-enable-the-extensions-under-rancher-configurations-menu",level:3},{value:"1.2 Install Elemental Plugin",id:"12-install-elemental-plugin",level:3},{value:"1.3 Install the elemental operator in Rancher cluster",id:"13-install-the-elemental-operator-in-rancher-cluster",level:3},{value:"Part 2: Create the Machine Registration Endpoint",id:"part-2-create-the-machine-registration-endpoint",level:2},{value:"Part 3: Create the ISO",id:"part-3-create-the-iso",level:2},{value:"Part 4: Boot the target device",id:"part-4-boot-the-target-device",level:2},{value:"4.1 Prepare the VM to emulate TPM",id:"41-prepare-the-vm-to-emulate-tpm",level:3},{value:"4.2 Boot the VM with the elemental ISO",id:"42-boot-the-vm-with-the-elemental-iso",level:3},{value:"Part 5: Create a cluster on the machine",id:"part-5-create-a-cluster-on-the-machine",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{children:(0,a.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/rancher-vmware"})}),"\n",(0,a.jsx)(t.h1,{id:"how-to-use-elemental-with-rancher-and-vmware",children:"How to use Elemental with Rancher and VMware"}),"\n",(0,a.jsx)(t.h2,{id:"excerpt",children:"Excerpt"}),"\n",(0,a.jsx)(t.p,{children:"In this document we will see how we can enable elemental support in Rancher and then build iso and test it on a vm in VMware mimicking it for an edge device."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Rancher 2.7 or higher installed and running."}),"\n",(0,a.jsx)(t.li,{children:"One Linux machine with docker installed."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"part-1-rancher-configuration",children:"Part 1: Rancher Configuration"}),"\n",(0,a.jsx)(t.h3,{id:"11-enable-the-extensions-under-rancher-configurations-menu",children:"1.1 Enable the extensions under Rancher configurations menu"}),"\n",(0,a.jsx)(t.p,{children:"Click on extensions under the configuration menu and enable it by hitting enable."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Enable extensions in Rancher",src:n(46814).A+"",width:"323",height:"193"})}),"\n",(0,a.jsx)(t.p,{children:"Once you click on enable a dialogue box will pop up asking for confirmation and it will also notify you that the rancher extensions repository will be enabled, make sure it is checked and then confirm."}),"\n",(0,a.jsx)(t.h3,{id:"12-install-elemental-plugin",children:"1.2 Install Elemental Plugin"}),"\n",(0,a.jsx)(t.p,{children:"After the extensions are enabled under the available tab you should see elemental plugin available for installation."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental extension enabled",src:n(34835).A+"",width:"770",height:"367"})}),"\n",(0,a.jsx)(t.p,{children:"Click on Install, this will again ask for a confirmation. Click on Install again to continue. Once the installation is finished it will ask to reload the tab. Reload it by hitting reload, post reloading you should see the elemental plugin under the installed tab."}),"\n",(0,a.jsx)(t.h3,{id:"13-install-the-elemental-operator-in-rancher-cluster",children:"1.3 Install the elemental operator in Rancher cluster"}),"\n",(0,a.jsx)(t.p,{children:"The next step is to install the elemental operator in Rancher Cluster. For that connect to the Rancher K8S cluster and enter the below command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"helm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator-crds oci://registry.suse.com/rancher/elemental-operator-crds-chart\nhelm upgrade --create-namespace -n cattle-elemental-system --install elemental-operator oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental operator install",src:n(85836).A+"",width:"2100",height:"527"})}),"\n",(0,a.jsx)(t.p,{children:"Once the command is successful validate whether the the pod is running before continuing"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl get pods -n cattle-elemental-system\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental operator pod",src:n(42520).A+"",width:"817",height:"120"})}),"\n",(0,a.jsx)(t.p,{children:'This will enable the "OS Management" sub menu under the "Global Apps" menu.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"OS Management menu",src:n(66417).A+"",width:"433",height:"272"})}),"\n",(0,a.jsx)(t.p,{children:"The OS Management dashboard at this point should have nothing in it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"OS Management dashboard",src:n(22526).A+"",width:"2546",height:"913"})}),"\n",(0,a.jsx)(t.p,{children:"At this point we are ready to proceed with the next step, that is to prepare the ISO."}),"\n",(0,a.jsx)(t.h2,{id:"part-2-create-the-machine-registration-endpoint",children:"Part 2: Create the Machine Registration Endpoint"}),"\n",(0,a.jsx)(t.p,{children:"In the OS Management dashboard hit the create registration endpoint button."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"OS Management registration endpoints",src:n(24296).A+"",width:"757",height:"404"})}),"\n",(0,a.jsx)(t.p,{children:"Now here either you can enter each detail in its respective places or you can edit this as yaml and create the endpoint in one go. Here we will edit this as yaml."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: elemental-cls1\n  namespace: fleet-default\nspec:\n  config:\n    cloud-config:\n      users:\n        - name: root\n          passwd: root\n    elemental:\n      install:\n        reboot: true\n        device: /dev/sda\n        debug: true\n      registration:\n        emulate-tpm: true\n        emulated-tpm-seed: 1\n  machineName:\n  machineInventoryLabels:\n    manufacturer: "${System Information/Manufacturer}"\n    productName: "${System Information/Product Name}"\n    serialNumber: "${System Information/Serial Number}"\n    machineUUID: "${System Information/UUID}"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Remove the existing content and enter this code snippet and click on save. Remember to modify this as per your need."}),"\n",(0,a.jsxs)(t.admonition,{title:"main options",type:"info",children:[(0,a.jsx)(t.p,{children:'name: elemental-cls1 --\x3e "Change this as per your need"'}),(0,a.jsx)(t.p,{children:'device: /dev/sda --\x3e Make sure your target device is "sda" otherwise find out and change the naming convention here, for example in raspberry pi it could be "mmblk---"'}),(0,a.jsx)(t.p,{children:"emulate-tpm: true  --\x3e Use this only if your target device doesnt have a tpm device and you have a way of emulating tpm like in VMware or KVM"}),(0,a.jsx)(t.p,{children:"emulated-tpm-seed: 1 --\x3e increase this by 1 for every new machine. --\x3e If this is not given each machine will recieve the same tpm hash so at any point in time regardless of how many machines you boot it wont show up under the machine inventory."})]}),"\n",(0,a.jsx)(t.admonition,{title:"attention",type:"danger",children:(0,a.jsx)(t.p,{children:"Emulate TPM is only for non-production usage like for testing as it beats the purpose of security. So in production usage use the code above without the emulate-tpm and emulate-tpm-seed"})}),"\n",(0,a.jsx)(t.p,{children:"Once you create the machine registration end point it should show up as active."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Machine registered in Registration Endpoints",src:n(29178).A+"",width:"559",height:"464"})}),"\n",(0,a.jsx)(t.p,{children:"Next click on it to view the registration url and download the initial-registration yaml."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Initial registration URL",src:n(94136).A+"",width:"1454",height:"611"})}),"\n",(0,a.jsx)(t.p,{children:'Hit the download button, this will download the "initial-registration.yaml" file on to your local system.'}),"\n",(0,a.jsx)(t.p,{children:"The registration yaml looks something like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Example of initial registration YAML",src:n(94658).A+"",width:"947",height:"384"})}),"\n",(0,a.jsx)(t.p,{children:"We will use this file and inject its content into our vanilla elemental iso."}),"\n",(0,a.jsx)(t.h2,{id:"part-3-create-the-iso",children:"Part 3: Create the ISO"}),"\n",(0,a.jsx)(t.p,{children:"Make sure you have initial-registration.yaml in the system where you will create the iso in this we will use a Linux vm."}),"\n",(0,a.jsx)(t.p,{children:"Create a directory to keep everything:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"mkdir /home/tux/elemental-demo && cd /home/tux/elemental-demo\n"})}),"\n",(0,a.jsx)(t.p,{children:"Create a file and copy the contents of the initial-registration.yaml in it."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"vim initial-registration.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create file with initial registration YAML",src:n(16934).A+"",width:"1105",height:"441"})}),"\n",(0,a.jsx)(t.p,{children:"Next download the script to download the iso and inject the registration.yaml in the iso and make it executable"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget -q https://raw.githubusercontent.com/rancher/elemental/main/.github/elemental-iso-add-registration && chmod +x elemental-iso-add-registration\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next execute the script and pass the initial-registration.yaml as an argument"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"./elemental-iso-add-registration initial-registration.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create ISO with the initial registration options",src:n(90718).A+"",width:"1654",height:"1206"})}),"\n",(0,a.jsx)(t.p,{children:"This command will download the vanilla iso and inject it with the parameters of initial-registration.yaml and create a final iso for you to boot your end device."}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"If you would like to download the vanilla ISO and reuse it later to create additional ISO's, then you can download the iso separately using the below command and then pass the local file path as an argument to the script"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"showLineNumbers",children:"wget https://download.opensuse.org/repositories/isv:/Rancher:/Elemental:/Staging/containers/iso/sl-micro-6.0-baremetal.x86_64.iso\n\n./elemental-iso-add-registration initial-registration.yaml /home/elemental-iso/sl-micro-6.0-baremetal.x86_64.iso\n"})})]}),"\n",(0,a.jsx)(t.h2,{id:"part-4-boot-the-target-device",children:"Part 4: Boot the target device"}),"\n",(0,a.jsx)(t.p,{children:"Now ideally you would just burn the iso to a usb drive and boot your edge device using the usb device and once it boots and become active in Rancher under machine inventory you can select and create a cluster from it, however here we will use a vm to mimic an edge device for testing."}),"\n",(0,a.jsx)(t.h3,{id:"41-prepare-the-vm-to-emulate-tpm",children:"4.1 Prepare the VM to emulate TPM"}),"\n",(0,a.jsx)(t.p,{children:"In VMware workstation create a vm the way you would do normally, make sure to give the HDD size at least 40 GB."}),"\n",(0,a.jsx)(t.p,{children:'Now edit the machine settings and go to the "Options" tab. The very last option would be "Advanced".'}),"\n",(0,a.jsx)(t.p,{children:'Click on "advanced" and on the right window pane change the firmware type from "BIOS" to "UEFI" and check the "Enable secure boot" option as follow:'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Default settings with BIOS selected"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"VM boot options with BIOS",src:n(9298).A+"",width:"709",height:"218"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Updated settings with UEFI selected and secure boot enabled"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"VM boot options with UEFI",src:n(99638).A+"",width:"684",height:"208"})}),"\n",(0,a.jsx)(t.p,{children:'Now on the same "Options" tab click on the "Access Control" option and click on "Encrypt" on the right side.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Access control menu",src:n(65794).A+"",width:"242",height:"28"})}),"\n",(0,a.jsx)(t.p,{children:'This will ask you to enter a password to encrypt the machine. Enter a password and click on "Encrypt"'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Access control encryption credentials",src:n(70796).A+"",width:"352",height:"431"})}),"\n",(0,a.jsx)(t.p,{children:'This is important to add the TPM Hardware. Next go back to the Hardware options and click on "Add"'}),"\n",(0,a.jsx)(t.p,{children:'And add the TPM (Trusted Platform Module) hardware and click on "Finish"'}),"\n",(0,a.jsx)(t.p,{children:"Now with the completion of this step our VM is ready."}),"\n",(0,a.jsx)(t.h3,{id:"42-boot-the-vm-with-the-elemental-iso",children:"4.2 Boot the VM with the elemental ISO"}),"\n",(0,a.jsx)(t.p,{children:"Next add the ISO that we created earlier in the VM and boot it up."}),"\n",(0,a.jsx)(t.p,{children:"It should boot up with the ISO and start installing Elemental:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental OS install grub menu",src:n(26190).A+"",width:"677",height:"451"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental OS install logs",src:n(1373).A+"",width:"1052",height:"281"})}),"\n",(0,a.jsx)(t.p,{children:"And once it is complete it will reboot the VM and it should show up as active under the machine inventory in Rancher as follow:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Machine inventory status while booting"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Machine inventory status during boot",src:n(63302).A+"",width:"612",height:"159"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Machine inventory status after boot completed"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Machine inventory status after boot complete",src:n(60138).A+"",width:"622",height:"112"})}),"\n",(0,a.jsx)(t.h2,{id:"part-5-create-a-cluster-on-the-machine",children:"Part 5: Create a cluster on the machine"}),"\n",(0,a.jsx)(t.p,{children:'Once the machine shows up as active, select it and hit "Create Elemental Cluster".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create Elemental cluster",src:n(52197).A+"",width:"811",height:"398"})}),"\n",(0,a.jsx)(t.p,{children:"At this stage you get a pretty familiar page of creating a cluster in Rancher."}),"\n",(0,a.jsx)(t.p,{children:'Give the cluster a name select the Kubernetes version and hit "Create".'}),"\n",(0,a.jsx)(t.p,{children:"For this we have selected to create a K3S cluster."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental cluster configuration",src:n(7819).A+"",width:"2294",height:"1224"})}),"\n",(0,a.jsx)(t.p,{children:"Now under the Cluster Management page the cluster should show up as creating:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental cluster provisioning",src:n(18502).A+"",width:"793",height:"279"})}),"\n",(0,a.jsx)(t.p,{children:'And once the cluster is fully provisioned it should be active with provider type as "Elemental".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Elemental cluster created",src:n(97237).A+"",width:"2279",height:"242"})}),"\n",(0,a.jsx)(t.p,{children:"Now you can start deploying application on this cluster the normal way."})]})}function A(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},70796:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-access-control-encrypt-60a89768dd80961e42f48b1717f607cb.png"},65794:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAAcCAIAAADURHUBAAAGgklEQVR4nO2bQWwaRxSG/21SUCwtlaotXZWTLUhpiOEMPtmqrAIXR5Ecu4rk9rI0J7Aqt6VKpCiKiqo0Ak6tuSStrJpEiuKLQXId+2SqqifcotIuik9IGG8ii5XsQGzRA+yyu2CDE7Ax2e/E23lv5s2bp5k3C+BWIFQ+gE8mmdab2KAd9iArCvYgywbtYGKy1hgD4ZGgyVSNKjYVVZmKtLFOv9Zh1U4c2l7Tg2Bb7bnaeoCtYkSVU8hZtAmjL8HCYSKmK6I9yBqNxl+CDhNBALAzjB0AnLOs8KiilPgQ01Uje5BNGAH4bjCEi4jYg2zCZwSATMhhmv4dMBH/xMpjcn0jah0ysbITmX8r3twYJCp6wtCAUeiZYYCP5M5IbFVOP8StQOjGN96Gbc5PPYdYxn+d7YxLKiqvy2G7tZq4KqeUt07aARWV9qOmtUoP0oYrI+FPv34nKiptpHFam67dO9yM/fHzDjijotIeDtytD0ncpkmvonKyvEptrW7VKl1Ok9r6Da1GaIqdxFSQS5y0I73D8Ya0+ZXxKNWIJjQ94AU3dAze2wzlCbL6OZUl5viWrE5hvrIBM1afmpZKwKH+n9TUujKkbX3BR+vc4OMgx+l29lqPY7S/PAGPP03404Q/7YGO6eyAJ0qeZy2GUIdD2mMc/QXf+vKj7LsgiMsfPFNs5A4riVR2QT8wY9X4ciUAABkLGJwAgHg07UrKxU2K9VJGACiGwxu+HByj/WvDWgDIc0NBDnJR2A804xaEw9mIMG5kLgsAtNgb7/FnIzTFTmJxi/JaxNE1oUnKqMdagMqkeLxXXNyivBZBWWp75KB0lOLtFax9TPqkJ5LSYcnUxK1dplYMhzd8qI8JZGu0ypksEMKydWF64PyKqEP9F+XdI1oWpFMvmsvHXdcpFlTiAJDnOh+rKkdM6/L+4039ZacVwOPf1i+V90GcEdo04xYszpci7/OzIzrHEpeAJjRtQDRNJKsKcpGMBbR3/OkIKgcZ9XAePw+XPP6NCMBcNVykqRmpCFTTmta59aU7OYVnZMxLsdG0KQnHaP/aVTKyDOip8ytpYg6wGcojlCPJ+eY5d+XEpCnWK7Q2tO0qklnPoDlmS7s2K3Kdw3N8bWo1MzLmVUa4LiaFcemi0BQ7LIYFWOHLgySSPGw6Z4pzbWrdes1/4bQrVykCDUwyKxm3bkGDxeuCn5Va5dg4YloXnl0qPQGsAC6VnqBA4x19tYnWucFP5YBcIT5BjdNcAjo3uKkkJApSUWsCORswC7874S/mCiyo2YAB/mxkLguQYzJRQr74t8IxWmvKVztPrPMZr45ZLiLP3a4Mt1nM1M9FbG1o22VElrmZScoxD6CRw+AbnDD1EUZdTBSLAklYACQL8QkdAx6DZPyvLKBFnn+YE5uoC9LSqH44GqKfx8zR0vr7u/f3SsW3//wBwMsXu2f/uP/1ra8qTQ4radRr1wJURTRZNb71Zt3llZfLiD8NkLGAeRa8x591ycXqyuWKrJ4ap7mEcsPuaXLcVKr/urW1m7GIIsI0NXM0e34hZRizkbDwC3NA0/r+dYdrGwdeGRu+2tstbL98sbuz/Xxn+/nLF7u7hW2xadyijUerdzgiyhstOkeusAjquk3QUIpFVi8RAdBUbFQD8C7/03Bec8EmF2sx5W+vwus1iNdE5qqBkfTmsJLGVOHA+livvah40rrtiZJY4jBMGXGww4qp1Ue4HsWi1BFZ5kwTBtPqljImNp1T3Lkr49YPlyuy+ur7A4eVNLYwx3bReLd+hbfRsrMsWa1DfPMc6zWXJ4DKDUMhhmsi8txQsAjvQHkYADKrT01JbSwgESV7c2JpYwj9a+J5l8oS4CO13niPnwetbeBljruTMs8GzDMpHhArDd7Viu3Jw7uifHkEDRyGZGq1KyOvjPB8fZ8l2Rqt1t3qcoXFPIl14Q6qp4QDmff4uYRiXOWCcq6oruw1e4FMim9QB3aMw/5GAMB07Z40xW/6vlUo3Ax9p/7UqZexGcojxWpp0ZWvqBvSvLYWq5He/EJR5VCYQTK+ku3+PFbQZLduqQt1t1bpMtS/Eaj0IA2KkPsPFh4tLu3t7Tc3Pnvmsnu0HBjrgGMqKq9Og7R+tLj04Ke7fX3nmhrv7Oxe+eLLz66oaa3SXTQoQvb29lvJaQB9feda2dRVVI4ZtbZW6UHe1LTOhByO0HF+QfBGEPcQBEEQhCcu/3zs/A8CtQt0OqppGQAAAABJRU5ErkJggg=="},52197:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-cluster-create-8d06bbcd84075d084212bc3d049dfbbc.png"},97237:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-cluster-created-39460fab3f9c3863673be51507d2d22d.png"},18502:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-cluster-provisioning-b1a441f0c9dd8db3af090c57bf8b216c.png"},7819:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-cluster-template-71f1e521ea8047e899ec3b0f9e48225b.png"},26190:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},1373:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-install-logs-a0fe1cb2f06bd446319ea8755907dcba.png"},85836:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-operator-install-ead7a27570833aea52fc48bf864e7458.png"},42520:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-elemental-operator-pod-5cf9077cbdd41cc2ea98372e615773e3.png"},34835:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-extension-enabled-c4e29279c65407712c74245a906fe8f1.png"},46814:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-extensions-menu-3417b5f0744722377d8b9e1826abc4f8.png"},94658:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-initial-registration-url-yaml-2976a9c6180726ebb308057cb33ae38f.png"},94136:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-initial-registration-url-0c8db5dad180464052c36f376b17c8e3.png"},16934:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-initial-registration-yaml-61b7ae494fd22967d770b3124dd1da9b.png"},90718:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-iso-create-94c20367fff7dd76b113c5f2e046fd69.png"},60138:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-machine-inventory-status-boot-complete-401945492ded59c3f4f94e8dc7ecc419.png"},63302:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-machine-inventory-status-booting-fba3e4b35fc4b52b43fa92dc00f14d28.png"},29178:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-machine-registered-fa33715b7ace60ba91c3ab12694be684.png"},22526:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-osmanagement-dashboard-5ec27221ddfdd9d63f846c6370847cbd.png"},66417:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-osmanagement-menu-18bc9bca56db4f66db675cb679e6ada9.png"},24296:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-registration-endpoints-040525e42e8fcfde1c35a85e44b1bc32.png"},9298:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-vm-boot-bios-28b0123c0fbaf64ff7fe1f5634b0f1ae.png"},99638:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/rancher-vmware-vm-boot-uefi-ca7f800f1c8469b9c1477f78b6ca22e5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);