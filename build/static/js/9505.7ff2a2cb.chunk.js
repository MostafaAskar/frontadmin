"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9505],{55940:(e,t,s)=>{s.d(t,{Z:()=>o});s(47313);var n=s(59491),i=s(47515),a=s(23560),d=s(24511),c=s(79492),l=s(46417);function o(e){let{size:t="",onClick:s,type:o="default",...r}=e;const{t:u}=(0,d.$)(),{isDemo:h}=(0,c.Z)();return(0,l.jsx)(n.Z,{size:t,icon:(0,l.jsx)(i.Z,{}),onClick:e=>{h?a.Am.warning(u("cannot.work.demo")):s(e)},type:o,...r})}},53233:(e,t,s)=>{s.d(t,{Z:()=>p});var n=s(47313),i=s(56140),a=s(67251),d=s(45705),c=s(86345),l=s(78267),o=s(37388),r=s(59491),u=s(99587),h=s(24511),v=s(46417);const{Text:m}=i.Z,p=e=>{let{columns:t=[],setColumns:s,style:i,size:p="",iconOnly:x}=e;const{t:Z}=(0,h.$)(),[g,f]=(0,n.useState)(!1),y=(0,v.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,v.jsx)(a.Z.Item,{children:(0,v.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(c.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(l.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{f(e)},visible:g,children:(0,v.jsx)(o.Z,{title:Z("change.columns"),children:(0,v.jsx)(r.Z,{style:{...i},size:p,icon:(0,v.jsx)(u.Z,{}),children:x?null:Z("Columns")})})})}},13945:(e,t,s)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}s.d(t,{Z:()=>n})},49505:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var n=s(47313),i=s(12019),a=s(47515),d=s(55768),c=s(26824),l=s(86345),o=s(45705),r=s(59491),u=s(77181),h=s(78508),v=s(23560),m=s(69658),p=s(74580),x=s(2717),Z=s(97890),g=s(90954),f=s(57409),y=s(69660),w=s(80314),j=s(13945),k=s(24511),C=s(45464),z=s(55940),b=s(53233),V=s(46417);function _(){const{t:e}=(0,k.$)(),t=(0,x.I0)(),s=(0,Z.s0)(),{setIsModalVisible:_}=(0,n.useContext)(p._),[I,H]=(0,n.useState)(null),[S,A]=(0,n.useState)(null),[M,$]=(0,n.useState)(!1),[P,N]=(0,n.useState)(null),{activeMenu:O}=(0,x.v9)((e=>e.menu),x.wU),{discounts:E,meta:R,loading:T,params:B}=(0,x.v9)((e=>e.discount),x.wU),[K,L]=(0,n.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,V.jsx)(c.Z,{src:(0,C.Z)(e),alt:t.type,width:100,className:"rounded",preview:!0,placeholder:!0})},{title:e("type"),dataIndex:"type",key:"type",is_show:!0},{title:e("price"),dataIndex:"price",key:"price",is_show:!0},{title:e("start.date"),dataIndex:"start",key:"start",is_show:!0},{title:e("end.date"),dataIndex:"end",key:"end",is_show:!0},{title:e("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,t)=>(0,V.jsx)(l.Z,{onChange:()=>{_(!0),H([t.id]),A(!0)},checked:t.active})},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(n,d)=>(0,V.jsxs)(o.Z,{children:[(0,V.jsx)(r.Z,{type:"primary",icon:(0,V.jsx)(i.Z,{}),onClick:()=>(n=>{t((0,g.bL)({url:`discount/${n.id}`,id:"discount_edit",name:e("edit.discount")})),s(`/discount/${n.id}`)})(d)}),(0,V.jsx)(z.Z,{icon:(0,V.jsx)(a.Z,{}),onClick:()=>{H([d.id]),A(!1),_(!0),N(!0)}})]})}]);(0,n.useEffect)((()=>{O.refetch&&(0,x.dC)((()=>{t((0,y.k)({})),t((0,g.A_)(O))}))}),[O.refetch]),(0,w.Z)((()=>{const e=O.data,s={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,y.k)(s))}),[O.data]);const U={selectedRowKeys:I,onChange:e=>{H(e)}};return(0,V.jsxs)(u.Z,{title:e("discounts"),extra:(0,V.jsxs)(o.Z,{wrap:!0,children:[(0,V.jsx)(r.Z,{icon:(0,V.jsx)(d.Z,{}),type:"primary",onClick:()=>{t((0,g.bL)({id:"add-restaurant",url:"discount/add",name:e("add.discount")})),s("/discount/add")},children:e("add.discount")}),(0,V.jsx)(z.Z,{onClick:()=>{null===I||0===I.length?v.Am.warning(e("select.the.product")):(_(!0),N(!1))},children:e("delete.selected")}),(0,V.jsx)(b.Z,{columns:K,setColumns:L})]}),children:[(0,V.jsx)(h.Z,{scroll:{x:!0},rowSelection:U,columns:null===K||void 0===K?void 0:K.filter((e=>e.is_show)),dataSource:E,pagination:{pageSize:B.perPage,page:B.page,total:R.total,defaultCurrent:B.page},rowKey:e=>e.id,onChange:function(e,s,n){const{pageSize:i,current:a}=e,{field:d,order:c}=n,l=(0,j.Z)(c);t((0,g.nc)({activeMenu:O,data:{perPage:i,page:a,column:d,sort:l}}))},loading:T}),(0,V.jsx)(m.Z,{click:S?()=>{$(!0),f.Z.setActive(I[0]).then((()=>{v.Am.success(e("successfully.updated")),t((0,y.k)({})),_(!1),A(!0)})).finally((()=>$(!1)))}:()=>{$(!0);const s={...Object.assign({},...I.map(((e,t)=>({[`ids[${t}]`]:e}))))};f.Z.delete(s).then((()=>{v.Am.success(e("successfully.deleted")),t((0,y.k)({})),_(!1)})).finally((()=>{H(null),$(!1)}))},text:e(S?"set.active.discount":P?"delete":"all.delete"),setText:H,loading:M,setActive:A})]})}},55768:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1413),i=s(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=s(17469),c=function(e,t){return i.createElement(d.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};c.displayName="PlusCircleOutlined";const l=i.forwardRef(c)},99587:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1413),i=s(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=s(17469),c=function(e,t){return i.createElement(d.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};c.displayName="TableOutlined";const l=i.forwardRef(c)}}]);