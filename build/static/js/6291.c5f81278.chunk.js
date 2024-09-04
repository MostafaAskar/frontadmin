"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6291],{53233:(e,t,n)=>{n.d(t,{Z:()=>x});var l=n(47313),s=n(56140),a=n(67251),i=n(45705),r=n(86345),d=n(78267),o=n(37388),c=n(59491),u=n(99587),h=n(24511),v=n(46417);const{Text:m}=s.Z,x=e=>{let{columns:t=[],setColumns:n,style:s,size:x="",iconOnly:p}=e;const{t:Z}=(0,h.$)(),[j,f]=(0,l.useState)(!1),g=(0,v.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(a.Z.Item,{children:(0,v.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(r.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(d.Z,{overlay:g,trigger:["click"],onVisibleChange:e=>{f(e)},visible:j,children:(0,v.jsx)(o.Z,{title:Z("change.columns"),children:(0,v.jsx)(c.Z,{style:{...s},size:x,icon:(0,v.jsx)(u.Z,{}),children:p?null:Z("Columns")})})})}},13945:(e,t,n)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>l})},36291:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var l=n(47313),s=n(66204),a=n(45705),i=n(59491),r=n(77181),d=n(78508),o=n(70660),c=n(10976),u=n(9274),h=n(66672),v=n(39180),m=n(24511),x=n(2717),p=n(15810),Z=n(46417);function j(e){let{inviteId:t,handleCancel:n}=e;const{t:s}=(0,m.$)(),[a]=c.Z.useForm(),r=(0,x.I0)(),[d,j]=(0,l.useState)(!1);return(0,Z.jsx)(u.Z,{title:s("accept.invite"),visible:!!t,onCancel:n,footer:[(0,Z.jsx)(i.Z,{type:"primary",onClick:()=>a.submit(),loading:d,children:s("save")},"save-btn"),(0,Z.jsx)(i.Z,{type:"default",onClick:n,children:s("cancel")},"cancel-btn")],children:(0,Z.jsxs)(c.Z,{form:a,layout:"vertical",onFinish:e=>{const l={role:e.role};j(!0),o.Z.statusUpdate(t.id,l).then((()=>{n(),r((0,p.x)())})).finally((()=>j(!1)))},children:[(0,Z.jsx)(c.Z.Item,{label:s("user"),children:(0,Z.jsx)(h.Z,{value:t.user.firstname+" "+t.user.lastname,disabled:!0})}),(0,Z.jsx)(c.Z.Item,{label:s("select.role"),name:"role",rules:[{required:!0,message:s("required")}],children:(0,Z.jsxs)(v.ZP.Group,{optionType:"button",children:[(0,Z.jsx)(v.ZP,{value:"moderator",children:s("moderator")}),(0,Z.jsx)(v.ZP,{value:"deliveryman",children:s("deliveryman")})]})})]})})}var f=n(74580),g=n(69658),y=n(90954),b=n(13945),w=n(80314),k=n(53233);function C(){const{t:e}=(0,m.$)(),t=(0,x.I0)(),{activeMenu:n}=(0,x.v9)((e=>e.menu),x.wU),{loading:c,invites:u,params:h,meta:v}=(0,x.v9)((e=>e.invite),x.wU),[C,z]=(0,l.useState)(null),{setIsModalVisible:I}=(0,l.useContext)(f._),[_,V]=(0,l.useState)(null),[H,S]=(0,l.useState)(!1),[P,M]=(0,l.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("fullname"),dataIndex:"user",key:"user",is_show:!0,render:e=>(0,Z.jsxs)(Z.Fragment,{children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})},{title:e("role"),dataIndex:"role",key:"role",is_show:!0},{title:e("status"),dataIndex:"status",key:"status",is_show:!0,render:t=>(0,Z.jsx)(s.Z,{color:"rejected"===t?"red":"new"===t?"blue":"cyan",children:e(t)})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(t,n)=>(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(i.Z,{type:"primary",onClick:()=>z(n),disabled:"excepted"===n.status,children:e("accept")}),(0,Z.jsx)(i.Z,{type:"primary",danger:!0,onClick:()=>{I(!0),V(n.id)},disabled:"rejected"===n.status,children:e("reject")})]})}]);return(0,l.useEffect)((()=>{n.refetch&&(t((0,p.x)()),t((0,y.A_)(n)))}),[n.refetch]),(0,w.Z)((()=>{const e=n.data,l={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,p.x)(l))}),[n.data]),(0,Z.jsxs)(r.Z,{title:e("invites"),extra:(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(k.Z,{columns:P,setColumns:M})}),children:[(0,Z.jsx)(d.Z,{scroll:{x:!0},columns:null===P||void 0===P?void 0:P.filter((e=>e.is_show)),dataSource:u,pagination:{pageSize:h.perPage,page:h.page,total:v.total,defaultCurrent:h.page},rowKey:e=>e.id,onChange:function(e,l,s){const{pageSize:a,current:i}=e,{field:r,order:d}=s,o=(0,b.Z)(d);t((0,y.nc)({activeMenu:n,data:{perPage:a,page:i,column:r,sort:o}}))},loading:c}),!!C&&(0,Z.jsx)(j,{inviteId:C,handleCancel:()=>z(null)}),(0,Z.jsx)(g.Z,{click:function(){S(!0),o.Z.statusUpdate(_).then((()=>{I(!1),V(null),t((0,p.x)())})).finally((()=>S(!1)))},text:e("reject.invite"),loading:H})]})}},99587:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(1413),s=n(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=n(17469),r=function(e,t){return s.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:a}))};r.displayName="TableOutlined";const d=s.forwardRef(r)}}]);