"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7602],{55940:(e,n,t)=>{t.d(n,{Z:()=>r});t(47313);var a=t(59491),s=t(47515),i=t(23560),l=t(24511),c=t(79492),d=t(46417);function r(e){let{size:n="",onClick:t,type:r="default",...o}=e;const{t:u}=(0,l.$)(),{isDemo:h}=(0,c.Z)();return(0,d.jsx)(a.Z,{size:n,icon:(0,d.jsx)(s.Z,{}),onClick:e=>{h?i.Am.warning(u("cannot.work.demo")):t(e)},type:r,...o})}},53233:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(47313),s=t(56140),i=t(67251),l=t(45705),c=t(86345),d=t(78267),r=t(37388),o=t(59491),u=t(99587),h=t(24511),m=t(46417);const{Text:v}=s.Z,x=e=>{let{columns:n=[],setColumns:t,style:s,size:x="",iconOnly:Z}=e;const{t:p}=(0,h.$)(),[b,f]=(0,a.useState)(!1),g=(0,m.jsx)(i.Z,{children:null===n||void 0===n?void 0:n.map(((e,a)=>(0,m.jsx)(i.Z.Item,{children:(0,m.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(v,{children:e.title}),(0,m.jsx)(c.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===n||void 0===n?void 0:n.map((n=>(n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n)));t(a)}(e),disabled:1===a})]})},e+a)))});return(0,m.jsx)(d.Z,{overlay:g,trigger:["click"],onVisibleChange:e=>{f(e)},visible:b,children:(0,m.jsx)(r.Z,{title:p("change.columns"),children:(0,m.jsx)(o.Z,{style:{...s},size:x,icon:(0,m.jsx)(u.Z,{}),children:Z?null:p("Columns")})})})}},7602:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var a=t(47313),s=t(26824),i=t(86345),l=t(45705),c=t(59491),d=t(77181),r=t(78508),o=t(97421),u=t(97890),h=t(12019),m=t(66407),v=t(47515),x=t(55768),Z=t(69658),p=t(74580),b=t(2717),f=t(90954),g=t(54872),j=t(32447),w=t(23560),y=t(24511),k=t(55940),z=t(53233),C=t(80314),_=t(70816),V=t.n(_),H=t(46417);const I=()=>{const{t:e}=(0,y.$)(),n=(0,b.I0)(),t=(0,u.s0)(),{setIsModalVisible:_}=(0,a.useContext)(p._),[I,S]=(0,a.useState)(!1),{activeMenu:M}=(0,b.v9)((e=>e.menu),b.wU),[$,A]=(0,a.useState)(null),[L,N]=(0,a.useState)(null),{banners:O,meta:T,loading:Y}=(0,b.v9)((e=>e.banner),b.wU),[D,E]=(0,a.useState)(null),[R,B]=(0,a.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,n)=>(0,H.jsx)(s.Z,{src:o.bV+e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:e("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,n)=>(0,H.jsx)(i.Z,{onChange:()=>{_(!0),A(n.id),N(!0)},checked:e},n.id+e)},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>V()(e).format("DD.MM.YYYY HH:mm")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,n)=>(0,H.jsxs)(l.Z,{children:[(0,H.jsx)(c.Z,{type:"primary",icon:(0,H.jsx)(h.Z,{}),onClick:()=>K(n)}),(0,H.jsx)(c.Z,{icon:(0,H.jsx)(m.Z,{}),onClick:()=>P(n)}),(0,H.jsx)(k.Z,{icon:(0,H.jsx)(v.Z,{}),onClick:()=>{_(!0),E([n.id]),N(!1)}})]})}]),K=a=>{n((0,f.bL)({url:`banner/${a.id}`,id:"banner_edit",name:e("edit.banner")})),t(`/banner/${a.id}`)},P=a=>{n((0,f.bL)({url:`banner/clone/${a.id}`,id:"banner_clone",name:e("clone.banner")})),t(`/banner/clone/${a.id}`)};(0,C.Z)((()=>{const e=M.data,t={status:(null===e||void 0===e?void 0:e.role)||"published"};n((0,j.f)(t))}),[M.data]),(0,a.useEffect)((()=>{const e=M.data,t={status:(null===e||void 0===e?void 0:e.role)||"published"};M.refetch&&(n((0,j.f)(t)),n((0,f.A_)(M)))}),[M.refetch]);const U={selectedRowKeys:D,onChange:e=>{E(e)}};return(0,H.jsxs)(d.Z,{title:e("banners"),navLInkTo:"",extra:(0,H.jsxs)(l.Z,{wrap:!0,children:[(0,H.jsx)(c.Z,{type:"primary",icon:(0,H.jsx)(x.Z,{}),onClick:()=>{n((0,f.bL)({id:"banner/add",url:"banner/add",name:e("add.banner")})),t("/banner/add")},children:e("add.banner")}),(0,H.jsx)(k.Z,{size:"",onClick:()=>{null===D||0===D.length?w.Am.warning(e("select.the.product")):_(!0)},children:e("delete.selected")}),(0,H.jsx)(z.Z,{setColumns:B,columns:R})]}),children:[(0,H.jsx)(r.Z,{scroll:{x:!0},rowSelection:U,columns:null===R||void 0===R?void 0:R.filter((e=>e.is_show)),dataSource:O,pagination:{pageSize:T.per_page,page:T.current_page,total:T.total},rowKey:e=>e.id,loading:Y,onChange:e=>{const{pageSize:t,current:a}=e;n((0,j.f)({perPage:t,page:a}))}}),(0,H.jsx)(Z.Z,{click:L?()=>{S(!0),g.Z.setActive($).then((()=>{_(!1),n((0,j.f)()),w.Am.success(e("successfully.updated"))})).finally((()=>S(!1)))}:()=>{S(!0);const t={...Object.assign({},...D.map(((e,n)=>({[`ids[${n}]`]:e}))))};g.Z.delete(t).then((()=>{n((0,j.f)()),w.Am.success(e("successfully.deleted")),_(!1)})).finally((()=>{S(!1)}))},text:e(L?"set.active.banner":"delete.banner"),loading:I,setText:E})]})}},55768:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(1413),s=t(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=t(17469),c=function(e,n){return s.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};c.displayName="PlusCircleOutlined";const d=s.forwardRef(c)},99587:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(1413),s=t(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=t(17469),c=function(e,n){return s.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};c.displayName="TableOutlined";const d=s.forwardRef(c)}}]);