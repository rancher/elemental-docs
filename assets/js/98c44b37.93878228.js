"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[9853],{44086:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(74848),l=i(28453);const o={sidebar_label:"Customize Elemental Installation",title:""},a="Customize Elemental Installation",s={id:"custom-install",title:"",description:"Elemental installed OS images can be customized in different ways.",source:"@site/versioned_docs/version-1.5/custom-install.md",sourceDirName:".",slug:"/custom-install",permalink:"/1.5/custom-install",draft:!1,unlisted:!1,tags:[],version:"1.5",frontMatter:{sidebar_label:"Customize Elemental Installation",title:""},sidebar:"docs",previous:{title:"Upgrade Lifecycle",permalink:"/1.5/upgrade-lifecycle"},next:{title:"Elemental plans",permalink:"/1.5/elemental-plans"}},r={},d=[{value:"Customize installation ISO and installation process",id:"customize-installation-iso-and-installation-process",level:2},{value:"Common customization pattern",id:"common-customization-pattern",level:3},{value:"Custom Elemental client configuration file",id:"custom-elemental-client-configuration-file",level:4},{value:"Adding additional cloud-init files within the installed OS",id:"adding-additional-cloud-init-files-within-the-installed-os",level:4},{value:"Adding installation hooks or boot stages for the live system",id:"adding-installation-hooks-or-boot-stages-for-the-live-system",level:4},{value:"Adding extra driver binaries into the ISO example",id:"adding-extra-driver-binaries-into-the-iso-example",level:3},{value:"Adding extra LVM volume group disks during the installation",id:"adding-extra-lvm-volume-group-disks-during-the-installation",level:3},{value:"Repacking the ISO image with extra files",id:"repacking-the-iso-image-with-extra-files",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/custom-install"})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"customize-elemental-installation",children:"Customize Elemental Installation"})}),"\n",(0,t.jsx)(n.p,{children:"Elemental installed OS images can be customized in different ways."}),"\n",(0,t.jsxs)(n.p,{children:["One option is to remaster container OS images by simply using a docker build.\nSLE Micro for Rancher images are regular container images, so it is absolutely possible to create\na new image using a Dockerfile based on SLE Micro for Rancher. See ",(0,t.jsx)(n.a,{href:"/1.5/custom-images",children:"Build Custom OS Images"}),"\nsection for further details on that possibility."]}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, it is also possible to provide additional resources within the installation\nmedia so that during installation, or eventually at boot time, additional binaries such as\ndrivers or extra configuration files can be included."}),"\n",(0,t.jsx)(n.p,{children:"This section focuses on how to customize the installation process from a given OS image."}),"\n",(0,t.jsx)(n.h2,{id:"customize-installation-iso-and-installation-process",children:"Customize installation ISO and installation process"}),"\n",(0,t.jsx)(n.p,{children:"In order to adapt the installation ISO a simple approach is to append extra configuration\nfiles into the ISO root in an analog way the registration yaml configuration file\nis added."}),"\n",(0,t.jsx)(n.h3,{id:"common-customization-pattern",children:"Common customization pattern"}),"\n",(0,t.jsxs)(n.p,{children:["Elemental installation can be customized in three different non-exclusive ways. First, including\nsome custom Elemental client configuration file, second, by including additional cloud-init files to execute at\nboot time, and finally, by including  ",(0,t.jsx)(n.code,{children:"cloud-init"})," files such as installation hooks or boot stages evaluated during\nthe live system boot itself."]}),"\n",(0,t.jsxs)(n.p,{children:["A common pattern is to combine the three ways described above. This pattern will allow you to add custom steps during the installation and add ",(0,t.jsx)(n.code,{children:"cloud-init"})," files to be evaluated at boot time."]}),"\n",(0,t.jsxs)(n.p,{children:["Additional config files can be added dynamically boot time by generating the ISO via a ",(0,t.jsx)(n.a,{href:"/1.5/seedimage-reference",children:"SeedImage"})," including custom cloud-config data."]}),"\n",(0,t.jsx)(n.p,{children:"To apply this pattern, the following files need to be included in the ISO or generated at boot time:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/",children:"configuration file"}),"\nfor the elemental client. The file must be named ",(0,t.jsx)(n.code,{children:"config.yaml"})," and located by default in ",(0,t.jsx)(n.code,{children:"/etc/elemental"}),".\nThis path can be configured as part of the installation parameters of a ",(0,t.jsx)(n.a,{href:"/machineregistration-reference",children:"MachineRegistration"})," resource."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The additional ",(0,t.jsx)(n.code,{children:"cloud-init"})," files to be included into the installed system. They\nallow to perform custom operations at boot time."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The installation hooks are evalutated at install time. They allow to perform custom operations\nduring the installation process (include extra software, set additional disks...). The same\nway ",(0,t.jsx)(n.code,{children:"cloud-init"})," files can be included to perform custom operations during the live installation\nmedia boot time."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"custom-elemental-client-configuration-file",children:"Custom Elemental client configuration file"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/rancher/elemental-toolkit/blob/main/docs/elemental.md",children:"Elemental client"})," ",(0,t.jsx)(n.code,{children:"install"}),", ",(0,t.jsx)(n.code,{children:"upgrade"})," and ",(0,t.jsx)(n.code,{children:"reset"})," commands can be configured with a ",(0,t.jsx)(n.a,{href:"https://rancher.github.io/elemental-toolkit/docs/customizing/general_configuration/",children:"custom configuration file"})," located by default in ",(0,t.jsx)(n.code,{children:"/etc/elemental/config.yaml"}),".\nIf you have multiple yaml files, you need to add them in the ",(0,t.jsx)(n.code,{children:"/etc/elemental/config.d"})," directory."]}),"\n",(0,t.jsx)(n.p,{children:"A simple example to set hooks location could be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"extra-partitions:\n  - size: 10240\n    fs: ext4\n    label: EXTRA_PARTITION\n"})}),"\n",(0,t.jsx)(n.p,{children:"The above example sets an additional extra partition during the installation."}),"\n",(0,t.jsx)(n.h4,{id:"adding-additional-cloud-init-files-within-the-installed-os",children:"Adding additional cloud-init files within the installed OS"}),"\n",(0,t.jsxs)(n.p,{children:["In order to include additional cloud-init files during the installation they need\nto be added to the installation data into the MachineRegistration resource. More specific\nthe ",(0,t.jsx)(n.code,{children:"config-urls"})," field is used for this exact purpose. See ",(0,t.jsx)(n.a,{href:"/machineregistration-reference",children:"MachineRegistration reference"})," page."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"config-urls"})," is a list of string literals where each item is an HTTP URL or a local path pointing to a\ncloud-init file. The local path is evaluated during\nthe installation, hence it must exists within the installation media, commonly an ISO image."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, Elemental live systems mount the ISO root at ",(0,t.jsx)(n.code,{children:"/run/initramfs/live"})," which is also the default path set for ",(0,t.jsx)(n.code,{children:"config-url"})," in ",(0,t.jsx)(n.code,{children:"MachineRegistrations"}),":\nSee the example below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  ...\n  config:\n    ...\n    elemental:\n      ...\n      install:\n        ...\n        config-urls:\n        - "/run/initramfs/live/oem/custom_config.yaml"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Elemental live ISOs, when booted, have the ISO root mounted at ",(0,t.jsx)(n.code,{children:"/run/initramfs/live"}),".\nAccording to that, the ISO for the example above is expected to include the ",(0,t.jsx)(n.code,{children:"/oem/custom_config.yaml"})," file."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/run/initramfs/live"})," is a readonly mountpoint and it's not an appropriate path for dynamically generated content at ISO boot."]})}),"\n",(0,t.jsx)(n.h4,{id:"adding-installation-hooks-or-boot-stages-for-the-live-system",children:"Adding installation hooks or boot stages for the live system"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/rancher/elemental-cli",children:"Elemental client"})," ",(0,t.jsx)(n.code,{children:"install"}),", ",(0,t.jsx)(n.code,{children:"upgrade"})," and ",(0,t.jsx)(n.code,{children:"reset"})," procedures include four different hooks:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"before-install"}),": executed after all partition mountpoints are set."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"after-install-chroot"}),": executed after deploying the OS image and before unmounting the associated loop filesystem image. Runs chrooted to the OS image."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"after-install"}),": executed just after the after-install-chroot hook. It is not chrooted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"post-install"}),": executed as the very last step before ending the installation, partitions are still mounted, the loop devices for the image is not."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Hooks are provided as ",(0,t.jsx)(n.code,{children:"cloud-init"})," stages. Equivalent hooks exist for ",(0,t.jsx)(n.code,{children:"reset"})," and ",(0,t.jsx)(n.code,{children:"upgrade"})," procedures.\nThey are loaded from the ",(0,t.jsx)(n.code,{children:"/iso-config"})," folder in ISO filesystem root. In fact, hooks are regular ",(0,t.jsx)(n.code,{children:"cloud-init"})," stages with the\nonly difference that Elemental client parses them during ",(0,t.jsx)(n.code,{children:"install"}),", ",(0,t.jsx)(n.code,{children:"upgrade"})," or ",(0,t.jsx)(n.code,{children:"reset"})," actions, rather than boot time.\nNote any boot stage included this way will be executed during the live installation media boot."]}),"\n",(0,t.jsxs)(n.p,{children:["Hooks are evaluated during ",(0,t.jsx)(n.code,{children:"install"}),",",(0,t.jsx)(n.code,{children:"reset"})," and ",(0,t.jsx)(n.code,{children:"upgrade"})," action from ",(0,t.jsx)(n.code,{children:"/oem"}),", ",(0,t.jsx)(n.code,{children:"/system/oem"})," and ",(0,t.jsx)(n.code,{children:"/usr/local/cloud-config"})," paths,\nhowever for the live ISOs there is an additional the path ",(0,t.jsx)(n.code,{children:"/run/initramfs/live/iso-config"})," included. Note the ",(0,t.jsx)(n.code,{children:"/run/initramfs/live"}),"\nprefix is the mount point of the ISO filesystem of the Elemental Live ISO once booted."]}),"\n",(0,t.jsx)(n.h3,{id:"adding-extra-driver-binaries-into-the-iso-example",children:"Adding extra driver binaries into the ISO example"}),"\n",(0,t.jsx)(n.p,{children:"This example is covering the case in which extra driver binaries are included into the ISO\nand during the installation they are installed over the OS image."}),"\n",(0,t.jsx)(n.p,{children:"For that use case the following files are required:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"additional binaries to install (they could be in the form of RPMs)"}),"\n",(0,t.jsx)(n.li,{children:"additional hooks file to copy binaries into the persistent storage and to install them"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's create an ",(0,t.jsx)(n.code,{children:"overlay"})," directory to create the directory tree that needs to be\nadded into the ISO root. In that case the ",(0,t.jsx)(n.code,{children:"overlay"})," directory could contain:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"overlay/\n  data/\n    extra_drivers/\n      some_driver.rpm\n  iso-config/\n    install_hooks.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"overlay/iso-config/install_hooks.yaml"})," could be as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'name: "Install extra drivers"\nstages:\n  before-install:\n    # Preload data to the persistent storage\n    # During installation persistent partition is mounted at /run/cos/persistent\n    - commands:\n        - rsync -a /run/initramfs/live/data/ /run/cos/persistent\n  after-install-chroot:\n    # extra_drivers folder is at `/usr/local/extra_drivers` from the OS image chroot\n    - commands:\n      - rpm -iv /usr/local/extra_drivers/some_driver.rpm\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note the installation hooks only cover installation procedures, for upgrades equivalent\n",(0,t.jsx)(n.code,{children:"before-upgrade"})," and/or ",(0,t.jsx)(n.code,{children:"after-upgrade-chroot"})," should be defined."]}),"\n",(0,t.jsx)(n.h3,{id:"adding-extra-lvm-volume-group-disks-during-the-installation",children:"Adding extra LVM volume group disks during the installation"}),"\n",(0,t.jsx)(n.p,{children:"This example is covering the setup of an host with multiple disks and some of them used\nas part of an LVM setup."}),"\n",(0,t.jsxs)(n.p,{children:["As an example, we have an host with three disks (",(0,t.jsx)(n.code,{children:"/dev/sda"}),", ",(0,t.jsx)(n.code,{children:"/dev/sdb"}),"\nand ",(0,t.jsx)(n.code,{children:"/dev/sdc"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["The first disk is used for a regular Elemental installation\nand the other remaining two are used as part of a LVM group where arbitrary logical volumes\nare created, formatted and mounted at boot time via an extended ",(0,t.jsx)(n.code,{children:"fstab"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"For this example, the following files are required:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["additional ",(0,t.jsx)(n.code,{children:"clout-init"})," files included in the installed system"]}),"\n",(0,t.jsx)(n.li,{children:"additional installation hooks to prepare the LVM volumes during the installation"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's create an ",(0,t.jsx)(n.code,{children:"overlay"})," directory to create the directory tree that needs to be\nadded into the ISO root. In that case the ",(0,t.jsx)(n.code,{children:"overlay"})," directory could contain:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"overlay/\n  oem/\n    lvm_volumes_in_fstab.yaml\n  iso-config/\n    lvm_volumes_hook.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The installation hook ",(0,t.jsx)(n.code,{children:"overlay/iso-config/lvm_volumes_hook.yaml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'name: "Create LVM logic volumes over some physical disks"\nstages:\n  post-install:\n    - name: "Create physical volume, volume group and logical volumes"\n      if: \'[ -e "/dev/sdb" ] && [ -e "/dev/sdc" ]\'\n      commands:\n      - | \n        # Create the physical volume, volume group and logical volumes\n        pvcreate /dev/sdb /dev/sdc\n        vgcreate elementalLVM /dev/sdb /dev/sdc\n        lvcreate -L 8G -n elementalVol1 elementalLVM\n        lvcreate -l 100%FREE -n elementalVol2 elementalLVM\n\n        # Trigger udev detection\n        if [ ! -e "/dev/elementalLVM/elementalVol1" ] || [ ! -e "/dev/elementalLVM/elementalVol2" ]; then\n          sleep 10\n          udevadm settle\n        fi\n\n        # Ensure devices are already available\n        [ -e "/dev/elementalLVM/elementalVol1" ] || exit 1\n        [ -e "/dev/elementalLVM/elementalVol2" ] || exit 1\n\n        # Format logical volumes with a known label for later use in fstab\n        mkfs.xfs -L eVol1 /dev/elementalLVM/elementalVol1\n        mkfs.xfs -L eVol2 /dev/elementalLVM/elementalVol2\n'})}),"\n",(0,t.jsx)(n.p,{children:"The LVM devices are created and formatted as desired. This is a good\nexample of an installation hook, as this setup is only needed once, at installation\ntime. As an alternative, the same action could be done on first boot, however it would\nrequire a more sophisticated logic to ensure it's only applied once at first boot."}),"\n",(0,t.jsxs)(n.p,{children:["Finally, the boot time ",(0,t.jsx)(n.code,{children:"cloud-init"})," files contain the mount points settings and trigger the\naction of mounting those mountpoints. The Elemental OS ",(0,t.jsx)(n.code,{children:"fstab"})," file is ephemeral and it's\ndynamically created at boot time. That's why it doesn't exist during the installation and\ncan't be used in an installation hook."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example of ",(0,t.jsx)(n.code,{children:"overlay/oem/lvm_volumes_in_fstab.yaml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'name: "Mount LVM volumes"\nstages:\n  initramfs:\n    - name: "Extend fstab to mount LVM logical volumes at boot"\n      commands:\n      - |\n        echo "LABEL=eVol1 /usr/local/eVol1  xfs defaults  0 0" >> /etc/fstab\n        echo "LABEL=eVol2 /usr/local/eVol2  xfs defaults  0 0" >> /etc/fstab\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"initramfs"})," stage is the last stage before switching to the actual root tree.\nAt this stage, the ",(0,t.jsx)(n.code,{children:"/etc/fstab"})," file already exists and can be adapted before\nswitching root. Once running in the final root tree, SystemD will handle the rest of the initialization and apply it."]})}),"\n",(0,t.jsxs)(n.p,{children:["This cloud-init file should be included into the ",(0,t.jsx)(n.code,{children:"/oem"})," directory on the installed\nsystem. ",(0,t.jsx)(n.code,{children:"/oem"})," is a mount point for the OEM partition. In order to include extra files,\nthey should be listed as ",(0,t.jsx)(n.code,{children:"config-urls"})," within the Registration CRD at the\nmanagement cluster."]}),"\n",(0,t.jsx)(n.h3,{id:"repacking-the-iso-image-with-extra-files",children:"Repacking the ISO image with extra files"}),"\n",(0,t.jsxs)(n.p,{children:["Assuming an ",(0,t.jsx)(n.code,{children:"overlay"})," folder was created in the current directory containing all\nadditional files to be appended, the following ",(0,t.jsx)(n.code,{children:"xorriso"})," command adds the extra files:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"xorriso -indev elemental.x86_64.iso -outdev elemental.custom.x86_64.iso -map overlay / -boot_image any replay\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For that a ",(0,t.jsx)(n.code,{children:"xorriso"})," equal or higher than version 1.5 is required."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const l={},o=t.createContext(l);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);