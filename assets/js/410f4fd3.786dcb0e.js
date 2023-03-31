"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[6836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?o.createElement(m,a(a({ref:n},s),{},{components:t})):o.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"Configure Wi-Fi",title:""},a=void 0,c={unversionedId:"wifi",id:"wifi",title:"",description:"How to configure Wi-Fi",source:"@site/docs/wifi.md",sourceDirName:".",slug:"/wifi",permalink:"/next/wifi",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Configure Wi-Fi",title:""},sidebar:"docs",previous:{title:"Restore",permalink:"/next/restore"},next:{title:"How to use Elemental with Rancher and VMware",permalink:"/next/rancher-vmware"}},l={},p=[{value:"How to configure Wi-Fi",id:"how-to-configure-wi-fi",level:3}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"how-to-configure-wi-fi"},"How to configure Wi-Fi"),(0,r.kt)("admonition",{title:"info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The information on this page is just a specific use case of using cloud-config. For more generic info on how to create arbitrary files check our ",(0,r.kt)("a",{parentName:"p",href:"/next/cloud-config-reference"},"cloud-config")," page")),(0,r.kt)("p",null,"Elemental Teal currently uses ",(0,r.kt)("a",{parentName:"p",href:"https://networkmanager.dev/"},"NetworkManager")," to manage network connections."),(0,r.kt)("p",null,"In order to add Wi-Fi to your node, your registration should include a configuration in the ",(0,r.kt)("a",{parentName:"p",href:"/next/cloud-config-reference"},"cloud-config")," section to write a\n",(0,r.kt)("inlineCode",{parentName:"p"},".connection")," file so NetworkManager can connect to the Wi-Fi."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},".connection")," file is a connection configuration file for NetworkManager.\nThe connection files are stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/NetworkManager/system-connections/")," and can include ethernet, Wi-Fi, VPN and more."),(0,r.kt)("p",null,"For example for a network with the SSID ",(0,r.kt)("inlineCode",{parentName:"p"},"testSSID")," and the WPA-PSK key ",(0,r.kt)("inlineCode",{parentName:"p"},"123456789")," and using the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"wlan0")," you would write the following ",(0,r.kt)("inlineCode",{parentName:"p"},".connection")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[connection]\nid=testConnection\ntype=wifi\ninterface-name=wlan0\npermissions=\ntimestamp=1671549641\n\n[wifi]\nmac-address-blacklist=\nmode=infrastructure\nssid=testSSID\n\n[wifi-security]\nkey-mgmt=wpa-psk\npsk=123456789\n\n[ipv4]\ndns-search=\nmethod=auto\n\n[ipv6]\naddr-gen-mode=stable-privacy\ndns-search=\nmethod=auto\n\n[proxy]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To see all the configurations available for NetworkManager check ",(0,r.kt)("a",{parentName:"p",href:"https://networkmanager.dev/docs/api/latest/nm-settings-nmcli.html"},"nm-settings"),"\nwhich includes the format of the connection file and all the different options you can use.")),(0,r.kt)("p",null,"Which we should encode to base64 and paste in the content in our ",(0,r.kt)("a",{parentName:"p",href:"/next/machineregistration-reference"},"registration")," cloud-config section as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="wifi cloud config" showLineNumbers',title:'"wifi',cloud:!0,'config"':!0,showLineNumbers:!0},"apiVersion: elemental.cattle.io/v1beta1\nkind: MachineRegistration\nmetadata:\n  name: my-nodes\n  namespace: fleet-default\nspec:\n  machineName: name\n  config:\n    cloud-config:\n      write_files:\n        - encoding: b64\n          content: W2Nvbm5lY3Rpb25dCmlkPXRlc3RDb25uZWN0aW9uCnR5cGU9d2lmaQppbnRlcmZhY2UtbmFtZT13bGFuMApwZXJtaXNzaW9ucz0KdGltZXN0YW1wPTE2NzE1NDk2NDEKClt3aWZpXQptYWMtYWRkcmVzcy1ibGFja2xpc3Q9Cm1vZGU9aW5mcmFzdHJ1Y3R1cmUKc3NpZD10ZXN0Cgpbd2lmaS1zZWN1cml0eV0Ka2V5LW1nbXQ9bm9uZQp3ZXAta2V5LXR5cGU9MQp3ZXAta2V5MD0xMjM0NTY3ODkxCgpbaXB2NF0KZG5zLXNlYXJjaD0KbWV0aG9kPWF1dG8KCltpcHY2XQphZGRyLWdlbi1tb2RlPXN0YWJsZS1wcml2YWN5CmRucy1zZWFyY2g9Cm1ldGhvZD1hdXRvCgpbcHJveHldCg==\n          path: /etc/NetworkManager/system-connections/wifi1.connection\n")),(0,r.kt)("p",null,"This would get the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/NetworkManager/system-connections/wifi1.connection")," file deployed on the node during installation with the connection content and NetworkManager would\nread and enable the connection on boot."))}d.isMDXComponent=!0}}]);