"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[5060],{24805:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=o(74848),t=o(28453);const c={sidebar_label:"Configure Wi-Fi",title:""},r=void 0,s={id:"wifi",title:"",description:"How to configure Wi-Fi",source:"@site/versioned_docs/version-1.3/wifi.md",sourceDirName:".",slug:"/wifi",permalink:"/1.3/wifi",draft:!1,unlisted:!1,tags:[],version:"1.3",frontMatter:{sidebar_label:"Configure Wi-Fi",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/1.3/restore"},next:{title:"Elemental behind proxy",permalink:"/1.3/elemental_behind_proxy"}},a={},l=[{value:"How to configure Wi-Fi",id:"how-to-configure-wi-fi",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{children:(0,i.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/wifi"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-configure-wi-fi",children:"How to configure Wi-Fi"}),"\n",(0,i.jsxs)(n.admonition,{title:"important note",type:"caution",children:[(0,i.jsx)(n.p,{children:"This guide describes how to configure Wi-Fi on a freshly installed operating system.\nFor some reasons, like no wired network connection availabe, you may want to also use Wi-Fi when you boot from the ISO."}),(0,i.jsxs)(n.p,{children:["This is possible by using a cloud-config definition in the ",(0,i.jsx)(n.a,{href:"https://elemental.docs.rancher.com/seedimage-reference/",children:"SeedImage"})," resource.\nYou can refer to the same instructions as below on how to create it."]})]}),"\n",(0,i.jsx)(n.admonition,{title:"info",type:"info",children:(0,i.jsxs)(n.p,{children:["The information on this page is just a specific use case of using cloud-config. For more generic info on how to create arbitrary files check our ",(0,i.jsx)(n.a,{href:"/1.3/cloud-config-reference",children:"cloud-config"})," page"]})}),"\n",(0,i.jsxs)(n.p,{children:["Elemental Teal currently uses ",(0,i.jsx)(n.a,{href:"https://networkmanager.dev/",children:"NetworkManager"})," to manage network connections."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to add Wi-Fi to your node, your registration should include a configuration in the ",(0,i.jsx)(n.a,{href:"/1.3/cloud-config-reference",children:"cloud-config"})," section to write a\n",(0,i.jsx)(n.code,{children:".connection"})," file so NetworkManager can connect to the Wi-Fi."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:".connection"})," file is a connection configuration file for NetworkManager.\nThe connection files are stored under ",(0,i.jsx)(n.code,{children:"/etc/NetworkManager/system-connections/"})," and can include ethernet, Wi-Fi, VPN and more."]}),"\n",(0,i.jsxs)(n.p,{children:["For example for a network with the SSID ",(0,i.jsx)(n.code,{children:"testSSID"})," and the WPA-PSK key ",(0,i.jsx)(n.code,{children:"123456789"})," and using the interface ",(0,i.jsx)(n.code,{children:"wlan0"})," you would write the following ",(0,i.jsx)(n.code,{children:".connection"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[connection]\nid=testConnection\ntype=wifi\ninterface-name=wlan0\npermissions=\ntimestamp=1671549641\n\n[wifi]\nmac-address-blacklist=\nmode=infrastructure\nssid=testSSID\n\n[wifi-security]\nkey-mgmt=wpa-psk\npsk=123456789\n\n[ipv4]\ndns-search=\nmethod=auto\n\n[ipv6]\naddr-gen-mode=stable-privacy\ndns-search=\nmethod=auto\n\n[proxy]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To see all the configurations available for NetworkManager check ",(0,i.jsx)(n.a,{href:"https://networkmanager.dev/docs/api/latest/nm-settings-nmcli.html",children:"nm-settings"}),"\nwhich includes the format of the connection file and all the different options you can use."]})}),"\n",(0,i.jsxs)(n.p,{children:["Which we should encode to base64 and paste in the content in our ",(0,i.jsx)(n.a,{href:"/1.3/machineregistration-reference",children:"registration"})," cloud-config section as such:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="wifi cloud config" showLineNumbers',children:"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: name\n  config:\n    cloud-config:\n      write_files:\n        - encoding: b64\n          content: W2Nvbm5lY3Rpb25dCmlkPXRlc3RDb25uZWN0aW9uCnR5cGU9d2lmaQppbnRlcmZhY2UtbmFtZT13bGFuMApwZXJtaXNzaW9ucz0KdGltZXN0YW1wPTE2NzE1NDk2NDEKClt3aWZpXQptYWMtYWRkcmVzcy1ibGFja2xpc3Q9Cm1vZGU9aW5mcmFzdHJ1Y3R1cmUKc3NpZD10ZXN0Cgpbd2lmaS1zZWN1cml0eV0Ka2V5LW1nbXQ9bm9uZQp3ZXAta2V5LXR5cGU9MQp3ZXAta2V5MD0xMjM0NTY3ODkxCgpbaXB2NF0KZG5zLXNlYXJjaD0KbWV0aG9kPWF1dG8KCltpcHY2XQphZGRyLWdlbi1tb2RlPXN0YWJsZS1wcml2YWN5CmRucy1zZWFyY2g9Cm1ldGhvZD1hdXRvCgpbcHJveHldCg==\n          path: /etc/NetworkManager/system-connections/wifi1.connection\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This would get the ",(0,i.jsx)(n.code,{children:"/etc/NetworkManager/system-connections/wifi1.connection"})," file deployed on the node during installation with the connection content and NetworkManager would\nread and enable the connection on boot."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var i=o(96540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);