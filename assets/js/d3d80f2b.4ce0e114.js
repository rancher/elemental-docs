"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[8944],{39448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(17624),s=t(4552);const r={sidebar_label:"MachineRegistration",title:""},l="MachineRegistration reference",d={id:"machineregistration-reference",title:"",description:"The MachineRegistration resource allows:",source:"@site/versioned_docs/version-1.6/machineregistration-reference.md",sourceDirName:".",slug:"/machineregistration-reference",permalink:"/machineregistration-reference",draft:!1,unlisted:!1,tags:[],version:"1.6",frontMatter:{sidebar_label:"MachineRegistration",title:""},sidebar:"docs",previous:{title:"Cloud-config reference",permalink:"/cloud-config-reference"},next:{title:"MachineInventory reference",permalink:"/machineinventory-reference"}},a={},c=[{value:"config.cloud-config",id:"configcloud-config",level:4},{value:"config.elemental.registration",id:"configelementalregistration",level:4},{value:"config.elemental.install",id:"configelementalinstall",level:4},{value:"config.elemental.install.device-selector",id:"configelementalinstalldevice-selector",level:4},{value:"config.elemental.reset",id:"configelementalreset",level:4},{value:"machineName",id:"machinename",level:4},{value:"machineInventoryLabels",id:"machineinventorylabels",level:4},{value:"machineInventoryAnnotations",id:"machineinventoryannotations",level:4}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components},{Details:t,Head:r,Vars:l}=n;return t||x("Details",!0),r||x("Head",!0),l||x("Vars",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/machineregistration"})}),"\n",(0,i.jsx)(n.h1,{id:"machineregistration-reference",children:"MachineRegistration reference"}),"\n",(0,i.jsx)(n.p,{children:"The MachineRegistration resource allows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"to configure the registration process"}),"\n",(0,i.jsx)(n.li,{children:"to provide OS installation parameters"}),"\n",(0,i.jsxs)(n.li,{children:["to define the ",(0,i.jsx)(n.a,{href:"/architecture-services",children:"Elemental services"})," enabled for the registering machine\nOnce created it generates the registration URL used by nodes to register and start the ",(0,i.jsx)(n.a,{href:"/architecture-machineonboarding",children:"machine onboarding"})," process."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The MachineRegistration has a ",(0,i.jsx)(n.code,{children:"Ready"})," condition which turns to true when the ",(0,i.jsx)(l,{name:"elemental_operator_name"})," has successfully generated the registration URL and an associated ",(0,i.jsx)(n.code,{children:"ServiceAccount"}),". From this point on the target host can connect to the registration URL to kick off the provisioning process."]}),"\n",(0,i.jsxs)(n.p,{children:["An HTTP GET request against the registration URL returns the ",(0,i.jsx)(n.em,{children:"registration file"}),": a .yaml file containing the registration data (i.e., the ",(0,i.jsx)(n.em,{children:"spec:config:elemental:registration"})," section from the just created MachineRegistration).\nThe registration file contains all the required data to allow the target host to perform self registration and start the Elemental provisioning."]}),"\n",(0,i.jsxs)(n.p,{children:["There are several keys that can be configured under a ",(0,i.jsx)(n.code,{children:"MachineRegistration"})," resource spec."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="MachineRegistration" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: name\n  machineInventoryLabels:\n    label: value\n  machineInventoryAnnotations:\n    annotation: value\n  config:\n    cloud-config:\n        ...\n    elemental:\n        registration:\n            ...\n        install:\n            ... \n"})}),"\n",(0,i.jsx)(n.h4,{id:"configcloud-config",children:"config.cloud-config"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the cloud-configuration to be injected in the node.",(0,i.jsx)(n.br,{}),"\n","Both yip and cloud-init syntax are supported. See the ",(0,i.jsx)(n.a,{href:"/cloud-config-reference",children:"Cloud Config Reference"})," for full information."]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalregistration",children:"config.elemental.registration"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the configuration used for the connection and the initial registration to the ",(0,i.jsx)(l,{name:"elemental_operator_name"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Supports the following values:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"url"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsxs)(n.td,{children:["URL to connect to the ",(0,i.jsx)(l,{name:"elemental_operator_name"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ca-cert"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"CA to validate the certificate provided by the server at 'url' (required if the certificate is not signed by a public CA)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"no-smbios"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsxs)(n.td,{children:["Whether SMBIOS data should be sent to the ",(0,i.jsx)(l,{name:"elemental_operator_name"})," (see the ",(0,i.jsx)(n.a,{href:"/smbios",children:"SMBIOS reference"})," for more information)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"no-toolkit"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsxs)(n.td,{children:["Disables the ",(0,i.jsx)(l,{name:"elemental_toolkit_name",link:"elemental_toolkit_url"})," support and allows registration of an ",(0,i.jsx)(n.a,{href:"/unmanaged-os",children:"unmanaged OS"})]})]})]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"The following values are for development purposes only."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"auth"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"tpm"}),(0,i.jsxs)(n.td,{children:["Authentication method to use during registration, one of ",(0,i.jsx)(n.code,{children:"tpm"}),", ",(0,i.jsx)(n.code,{children:"mac"})," or ",(0,i.jsx)(n.code,{children:"sys-uuid"}),". See ",(0,i.jsx)(n.a,{href:"/authentication",children:"Authentication"})," for more information"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emulate-tpm"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"This will use software emulation of the TPM (required for hosts without TPM hardware)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emulated-tpm-seed"}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Fixed seed to use with 'emulate-tpm'. Set to -1 to get a random seed. See ",(0,i.jsx)(n.a,{href:"/tpm",children:"TPM"})," for more information"]})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalinstall",children:"config.elemental.install"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the installation configuration that would be applied via ",(0,i.jsx)(n.code,{children:"elemental-register --install"})," when booted from an ISO and passed to ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental_install.md",children:(0,i.jsx)(n.code,{children:"elemental install"})})]}),"\n",(0,i.jsx)(n.p,{children:"Supports the following values:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"firmware"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"efi"}),(0,i.jsx)(n.td,{children:"Firmware to install ('efi' or 'bios')"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"device"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Device to install the system to"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"device-selector"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Rules for picking device to install the system to"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"no-format"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Don\u2019t format disks. It is implied that COS_STATE, COS_RECOVERY, COS_PERSISTENT, COS_OEM partitions are already existing on the target disk"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"config-urls"}),(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Cloud-init config files locations"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"iso"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Performs an installation from the ISO url instead of the running ISO"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"system-uri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsxs)(n.td,{children:["Sets the system image source and its type (e.g. 'docker",":registry",".org/image",":tag","') instead of using the running ISO"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"debug"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Enable debug output"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tty"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Add named tty to grub"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"poweroff"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Shutdown the system after install"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reboot"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Reboot the system after install"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"snapshotter"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"loopdevice"}),(0,i.jsx)(n.td,{children:"Type of device used to manage snapshots in OS images ('loopdevice' or 'btrfs')."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"eject-cd"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Try to eject the cd on reboot"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,i.jsxs)(n.p,{children:["In case of using both ",(0,i.jsx)(n.code,{children:"iso"})," and ",(0,i.jsx)(n.code,{children:"system-uri"})," the ",(0,i.jsx)(n.code,{children:"iso"})," value takes precedence"]})}),"\n",(0,i.jsxs)(n.p,{children:["It is only required to specify either the ",(0,i.jsx)(n.code,{children:"device"})," or ",(0,i.jsx)(n.code,{children:"device-selector"})," fields for a successful install, the rest of the parameters are all optional."]}),"\n",(0,i.jsxs)(n.p,{children:["If both ",(0,i.jsx)(n.code,{children:"device"})," and ",(0,i.jsx)(n.code,{children:"device-selector"})," is specified the value of ",(0,i.jsx)(n.code,{children:"device"})," is used and ",(0,i.jsx)(n.code,{children:"device-selector"})," is ignored."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    elemental:\n      install:\n        device: /dev/sda\n        debug: true\n        reboot: true\n        eject-cd: true\n        system-uri: registry.suse.com/rancher/sle-micro/5.5:latest\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalinstalldevice-selector",children:"config.elemental.install.device-selector"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"device-selector"})," field can be used to dynamically pick device during installation. The field contains a list of rules that looks like the following:"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example device-selector based on device name"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"device-selector:\n- key: Name\n  operator: In\n  values:\n  - /dev/sda\n  - /dev/vda\n  - /dev/nvme0\n"})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example device-selector based on device size"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"device-selector:\n- key: Size\n  operator: Lt\n  values:\n  - 100Gi\n- key: Size\n  operator: Gt\n  values:\n  - 30Gi\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"The currently supported operators are:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Operator"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"In"}),(0,i.jsx)(n.td,{children:"The key matches one of the provided values"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"NotIn"}),(0,i.jsx)(n.td,{children:"The key does not match any of the provided values"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Gt"}),(0,i.jsx)(n.td,{children:"The key is greater than a single provided value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Lt"}),(0,i.jsx)(n.td,{children:"The key is lesser than  a single provided value"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The currently supported keys are:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Name"}),(0,i.jsx)(n.td,{children:"The device name (eg. /dev/sda)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Size"}),(0,i.jsx)(n.td,{children:"The device size (values can be specified using kubernetes resources, eg 100Gi)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The rules are AND",":ed"," together, which means all rules must match the targeted device."]}),"\n",(0,i.jsx)(n.h4,{id:"configelementalreset",children:"config.elemental.reset"}),"\n",(0,i.jsxs)(n.p,{children:["Contains the reset configuration that would be applied via ",(0,i.jsx)(n.code,{children:"elemental-register --reset"}),", when booted from the recovery partition and passed to ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental_reset.md",children:(0,i.jsx)(n.code,{children:"elemental reset"})})]}),"\n",(0,i.jsx)(n.p,{children:"Supports the following values:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enabled"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"MachineInventories created from this MachineRegistration will have reset functionality enabled"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reset-persistent"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Format the COS_PERSISTENT partition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reset-oem"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Format the COS_OEM partition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"config-urls"}),(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsx)(n.td,{children:"Cloud-init config files"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"system-uri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"empty"}),(0,i.jsxs)(n.td,{children:["Sets the system image source and its type (e.g. 'docker",":registry",".org/image",":tag","') instead of using the running ISO"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"debug"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Enable debug output"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"poweroff"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Shutdown the system after reset"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reboot"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Reboot the system after reset"})]})]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  config:\n    elemental:\n      reset:\n        enabled: true\n        debug: true\n        reset-persistent: true\n        reset-oem: true\n        reboot: true\n        system-uri: registry.suse.com/rancher/sle-micro/5.5:latest\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"machinename",children:"machineName"}),"\n",(0,i.jsxs)(n.p,{children:["This refers to the name that will be set to the node and the kubernetes resources that require a hostname (rke2 deployed pods for example, they use the node hostname as part of the pod names)\n",(0,i.jsx)(n.code,{children:"String"})," type."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"elemental:registration:no-smbios"})," is set to ",(0,i.jsx)(n.code,{children:"false"})," (default), machineName is interpolated with ",(0,i.jsx)(n.a,{href:"https://www.dmtf.org/standards/smbios",children:"SMBIOS"})," data which allows you to store hardware information.\nSee our ",(0,i.jsx)(n.a,{href:"/smbios",children:"SMBIOS docs"})," for more information.\nIf no ",(0,i.jsx)(n.code,{children:"machineName"})," is specified, a default one in the form ",(0,i.jsx)(n.code,{children:"m-$UUID"})," will be set.\nThe UUID will be retrieved from the SMBIOS data if available, otherwise a random UUID will be generated."]})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: hostname-test-4\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"machineinventorylabels",children:"machineInventoryLabels"}),"\n",(0,i.jsxs)(n.p,{children:["Labels that will be set to the ",(0,i.jsx)(n.code,{children:"MachineInventory"})," that is created from this ",(0,i.jsx)(n.code,{children:"MachineRegistration"}),"\n",(0,i.jsx)(n.code,{children:"Key: value"})," type. These labels will be used to establish a selection criteria in ",(0,i.jsx)(n.a,{href:"/machineinventoryselectortemplate-reference",children:"MachineInventorySelectorTemplate"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Elemental nodes will run ",(0,i.jsx)(n.code,{children:"elemental-register"})," every 24 hours.",(0,i.jsx)(n.br,{}),"\n","It is possible to update the ",(0,i.jsx)(n.code,{children:"machineInventoryLabels"})," so that all registered nodes will apply the new labels on the next successfull registration update."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"elemental:registration:no-smbios"})," is set to ",(0,i.jsx)(n.code,{children:"false"})," (default), Labels are interpolated with ",(0,i.jsx)(n.a,{href:"https://www.dmtf.org/standards/smbios",children:"SMBIOS"})," data. This allows to store hardware information in custom labels.\nSee our ",(0,i.jsx)(n.a,{href:"/smbios",children:"SMBIOS docs"})," for more information."]})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineInventoryLabels:\n    my.prefix.io/element: fire\n    my.prefix.io/cpus: 32\n    my.prefix.io/manufacturer: "${System Information/Manufacturer}"\n    my.prefix.io/productName: "${System Information/Product Name}"\n    my.prefix.io/serialNumber: "${System Information/Serial Number}"\n    my.prefix.io/machineUUID: "${System Information/UUID}"\n'})})]}),"\n",(0,i.jsx)(n.h4,{id:"machineinventoryannotations",children:"machineInventoryAnnotations"}),"\n",(0,i.jsxs)(n.p,{children:["Annotations that will be set to the ",(0,i.jsx)(n.code,{children:"MachineInventory"})," that is created from this ",(0,i.jsx)(n.code,{children:"MachineRegistration"}),"\n",(0,i.jsx)(n.code,{children:"Key: value"})," type"]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineInventoryAnnotations:\n    owner: bob\n    version: 1.0.0\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>l});var i=t(11504);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);