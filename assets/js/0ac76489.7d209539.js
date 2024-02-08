"use strict";(self.webpackChunkelemental_docs=self.webpackChunkelemental_docs||[]).push([[7549],{33678:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=a(85893),t=a(11151);const c={sidebar_label:"Backup",title:""},o="Backup",s={id:"backup",title:"",description:"Since Elemental runs as part of Rancher, the Elemental resources are bundled in the Rancher backup.",source:"@site/versioned_docs/version-1.4/backup.md",sourceDirName:".",slug:"/backup",permalink:"/backup",draft:!1,unlisted:!1,tags:[],version:"1.4",frontMatter:{sidebar_label:"Backup",title:""},sidebar:"docs",previous:{title:"Machine Reset",permalink:"/reset"},next:{title:"Restore",permalink:"/restore"}},i={},l=[{value:"Install rancher-backup operator for Rancher",id:"install-rancher-backup-operator-for-rancher",level:2},{value:"Backup Elemental with rancher-backup operator",id:"backup-elemental-with-rancher-backup-operator",level:2}];function u(e){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Head:a}=r;return a||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{children:(0,n.jsx)("link",{rel:"canonical",href:"https://elemental.docs.rancher.com/backup"})}),"\n",(0,n.jsx)(r.h1,{id:"backup",children:"Backup"}),"\n",(0,n.jsxs)(r.p,{children:["Since Elemental runs as part of Rancher, the Elemental resources are bundled in the Rancher backup.",(0,n.jsx)(r.br,{}),"\n","For more details about Rancher backups, restore, and disaster recovery options, please follow the official ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/backup-restore-configuration",children:"Rancher documentation"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"install-rancher-backup-operator-for-rancher",children:"Install rancher-backup operator for Rancher"}),"\n",(0,n.jsxs)(r.p,{children:["Follow the ",(0,n.jsx)(r.a,{href:"https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",children:"Rancher backup guide"})," to learn how to install and configure the Rancher backup-operator."]}),"\n",(0,n.jsxs)(r.p,{children:["Note that for single node Rancher installations the backup workflow is different.",(0,n.jsx)(r.br,{}),"\n","You may follow the official ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",children:"documentation"})," to learn more."]}),"\n",(0,n.jsx)(r.h2,{id:"backup-elemental-with-rancher-backup-operator",children:"Backup Elemental with rancher-backup operator"}),"\n",(0,n.jsxs)(r.p,{children:["Create a ",(0,n.jsx)(r.code,{children:"backup object"})," (adapted to your needs) to backup Rancher running on a Kubernetes cluster."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: rancher-backup\nspec:\n  resourceSetName: rancher-resource-set\n  schedule: "10 3 * * *"\n  retentionCount: 10\n'})}),"\n",(0,n.jsxs)(r.p,{children:["The rancher-backup operator offers several options for schedule, encryption, and storage classes.",(0,n.jsx)(r.br,{}),"\n","You can explore all options by reading the ",(0,n.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/reference-guides/backup-restore-configuration/backup-configuration",children:"official documentation"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Check logs from rancher-backup operator."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"showLineNumbers",children:"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n"})}),"\n",(0,n.jsx)(r.p,{children:"Verify if backup file was created on Persistent Volume."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:"showLineNumbers",children:"...\nINFO[2022/10/17 07:45:04] Finding files starting with /var/lib/backups/rancher-backup-430169aa-edde-4a61-85e8-858f625a755b*.tar.gz \nINFO[2022/10/17 07:45:04] File rancher-backup-430169aa-edde-4a61-85e8-858f625a755b-2022-10-17T05-15-00Z.tar.gz was created at 2022-10-17 0\n...\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,r,a)=>{a.d(r,{Z:()=>s,a:()=>o});var n=a(67294);const t={},c=n.createContext(t);function o(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);