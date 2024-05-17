"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[3480],{1208:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=t(17624),s=t(4552);const l={sidebar_label:"Elemental Operator Helm Chart",title:""},i="Elemental Operator Helm Chart",a={id:"elementaloperatorchart-reference",title:"",description:"The  is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations.",source:"@site/docs/elementaloperatorchart-reference.md",sourceDirName:".",slug:"/elementaloperatorchart-reference",permalink:"/next/elementaloperatorchart-reference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Elemental Operator Helm Chart",title:""},sidebar:"docs",previous:{title:"Cluster reference",permalink:"/next/cluster-reference"},next:{title:"Kubernetes versions",permalink:"/next/kubernetesversions"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get Helm chart info",id:"get-helm-chart-info",level:2},{value:"Install Chart",id:"install-chart",level:2},{value:"Uninstall Chart",id:"uninstall-chart",level:2},{value:"Upgrading Chart",id:"upgrading-chart",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Values",id:"values",level:2}];function o(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components},{Head:t,Vars:l}=r;return t||m("Head",!0),l||m("Vars",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/elementaloperatorchart-reference"})}),"\n",(0,n.jsx)(r.h1,{id:"elemental-operator-helm-chart",children:"Elemental Operator Helm Chart"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(l,{name:"elemental_operator_name",link:"elemental_operator_url"})," is responsible for managing the Elemental versions and maintaining a machine inventory to assist with edge or bare metal installations."]}),"\n",(0,n.jsxs)(r.p,{children:["The associated chart bootstraps an elemental-operator deployment on the ",(0,n.jsx)(r.a,{href:"https://rancher.com/docs/rancher/v2.6/",children:"Rancher Manager v2.6"})," cluster using the ",(0,n.jsx)(r.a,{href:"https://helm.sh",children:"Helm"})," package manager."]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Rancher Manager version v2.6"}),"\n",(0,n.jsx)(r.li,{children:"Helm client version v3.8.0+"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"get-helm-chart-info",children:"Get Helm chart info"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",metastring:"showLineNumbers",children:"helm pull oci://registry.suse.com/rancher/elemental-operator-chart\nhelm show all oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,n.jsx)(r.h2,{id:"install-chart",children:"Install Chart"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",metastring:"showLineNumbers",children:"helm install --create-namespace -n cattle-elemental-system elemental-operator-crds \\\n             oci://registry.suse.com/rancher/elemental-operator-crds-chart\nhelm install --create-namespace -n cattle-elemental-system elemental-operator \\\n             oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,n.jsx)(r.p,{children:"The command deploys elemental-operator on the Kubernetes cluster in the default configuration."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["See ",(0,n.jsx)(r.a,{href:"#configuration",children:"configuration"})," below."]})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["See ",(0,n.jsx)(r.a,{href:"https://helm.sh/docs/helm/helm_install/",children:"helm install"})," for command documentation."]})}),"\n",(0,n.jsx)(r.h2,{id:"uninstall-chart",children:"Uninstall Chart"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",metastring:"showLineNumbers",children:"helm uninstall -n cattle-elemental-system elemental-operator\n"})}),"\n",(0,n.jsx)(r.p,{children:"This removes all the Kubernetes components associated with the chart and deletes the release."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["See ",(0,n.jsx)(r.a,{href:"https://helm.sh/docs/helm/helm_uninstall/",children:"helm uninstall"})," for command documentation."]})}),"\n",(0,n.jsx)(r.h2,{id:"upgrading-chart",children:"Upgrading Chart"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",metastring:"showLineNumbers",children:"helm upgrade -n cattle-elemental-system \\\n             --install elemental-operator \\\n             oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["See ",(0,n.jsx)(r.a,{href:"https://helm.sh/docs/helm/helm_upgrade/",children:"helm upgrade"})," for command documentation."]})}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing",children:"Customizing the Chart Before Installing"}),". To see all configurable options with detailed comments, visit the chart's ",(0,n.jsx)(r.a,{href:"#values",children:"values"}),", or run these configuration commands:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",metastring:"showLineNumbers",children:"helm show values oci://registry.suse.com/rancher/elemental-operator-chart\n"})}),"\n",(0,n.jsx)(r.h2,{id:"values",children:"Values"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"image.empty"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"rancher/pause:3.1"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"image.repository"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"registry.suse.com/rancher/elemental-operator-chart"})}),(0,n.jsx)(r.td,{children:"Source image for elemental-operator with repository name"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"image.tag"}),(0,n.jsx)(r.td,{children:"tag"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"image.imagePullPolicy"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"IfNotPresent"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"noProxy"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:'`127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local"'}),(0,n.jsx)(r.td,{children:"Comma separated list of domains or ip addresses that will not use the proxy"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"global.cattle.systemDefaultRegistry"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'""'})}),(0,n.jsx)(r.td,{children:"Default container registry name"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sync_interval"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"60m"'})}),(0,n.jsx)(r.td,{children:"Default sync interval for upgrade channel"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sync_namespaces"}),(0,n.jsx)(r.td,{children:"list"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"[]"})}),(0,n.jsx)(r.td,{children:"Namespace the operator will watch for, leave empty for all"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"debug"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})}),(0,n.jsx)(r.td,{children:"Enable debug output for operator"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nodeSelector.kubernetes.io/os"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"linux"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tolerations"}),(0,n.jsx)(r.td,{children:"object"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"{}"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tolerations.key"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"cattle.io/os"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tolerations.operator"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"Equal"'})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tolerations.value"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"linux"'})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tolerations.effect"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"NoSchedule"})}),(0,n.jsx)(r.td,{})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}function m(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,r,t)=>{t.d(r,{I:()=>a,M:()=>i});var n=t(11504);const s={},l=n.createContext(s);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);