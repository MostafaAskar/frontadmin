"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2904],{53233:(e,t,s)=>{s.d(t,{Z:()=>p});var l=s(47313),i=s(56140),n=s(67251),a=s(45705),o=s(86345),r=s(78267),d=s(37388),c=s(59491),u=s(99587),h=s(24511),v=s(46417);const{Text:m}=i.Z,p=e=>{let{columns:t=[],setColumns:s,style:i,size:p="",iconOnly:x}=e;const{t:g}=(0,h.$)(),[f,Z]=(0,l.useState)(!1),w=(0,v.jsx)(n.Z,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(n.Z.Item,{children:(0,v.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(o.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(r.Z,{overlay:w,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:f,children:(0,v.jsx)(d.Z,{title:g("change.columns"),children:(0,v.jsx)(c.Z,{style:{...i},size:p,icon:(0,v.jsx)(u.Z,{}),children:x?null:g("Columns")})})})}},12904:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var l=s(47313),i=s(26824),n=s(77181),a=s(45705),o=s(78508),r=s(2717),d=s(90954),c=s(24511),u=s(84980),h=s(53233),v=s(97421),m=s(46417);const p=()=>{const{t:e}=(0,c.$)(),t=(0,r.I0)(),{activeMenu:s}=(0,r.v9)((e=>e.menu),r.wU),{storeis:p,meta:x,loading:g}=(0,r.v9)((e=>e.storeis),r.wU),[f,Z]=(0,l.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("image"),dataIndex:"file_urls",key:"file_urls",is_show:!0,render:e=>(0,m.jsx)(i.Z,{src:e?e[0].search("stories/")?v.bV+e[0]:"https://api.foodyman.org/storage/"+e[0]:"https://via.placeholder.com/150",alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:e("product"),dataIndex:"stock",key:"stock",is_show:!0,render:(e,t)=>{var s,l;return null===t||void 0===t||null===(s=t.product)||void 0===s||null===(l=s.translation)||void 0===l?void 0:l.title}},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,t)=>{var s,l;return null===(s=t.shop)||void 0===s||null===(l=s.translation)||void 0===l?void 0:l.title}}]);(0,l.useEffect)((()=>{s.refetch&&(t((0,u.Bm)()),t((0,d.A_)(s)))}),[s.refetch]);return(0,m.jsx)(n.Z,{title:e("storeis"),extra:(0,m.jsx)(a.Z,{children:(0,m.jsx)(h.Z,{columns:f,setColumns:Z})}),children:(0,m.jsx)(o.Z,{scroll:{x:!0},columns:null===f||void 0===f?void 0:f.filter((e=>e.is_show)),dataSource:p,pagination:{pageSize:x.per_page,page:x.current_page,total:x.total},rowKey:e=>e.id,loading:g,onChange:e=>{const{pageSize:s,current:l}=e;t((0,u.U7)({perPage:s,page:l}))}})})}},99587:(e,t,s)=>{s.d(t,{Z:()=>r});var l=s(1413),i=s(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=s(17469),o=function(e,t){return i.createElement(a.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};o.displayName="TableOutlined";const r=i.forwardRef(o)}}]);