"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2845],{32845:(e,a,l)=>{l.r(a),l.d(a,{default:()=>N});var s=l(47313),r=l(77181),i=l(10976),n=l(68197),d=l(59624),t=l(66672),m=l(16124),u=l(99096),c=l(74294),o=l(45705),h=l(59491),v=l(2717),p=l(24511),x=l(5764),j=l(70816),Z=l.n(j),y=l(58328),g=l(23560),b=l(90954),f=l(97890),q=l(94291),w=l(46417);const I=()=>{var e,a,l,r;const{t:j}=(0,p.$)(),[I]=i.Z.useForm(),S=(0,v.I0)(),N=(0,f.s0)(),{state:k}=(0,f.TH)(),{myShop:D}=(0,v.v9)((e=>e.myShop),v.wU),{activeMenu:L}=(0,v.v9)((e=>e.menu),v.wU),[Y,M]=(0,s.useState)(!1),[T,U]=(0,s.useState)([]),[$,z]=(0,s.useState)(null);return(0,w.jsxs)(i.Z,{form:I,layout:"vertical",onFinish:e=>{var a;const l={...e,birthday:Z()(e.birthday).format("YYYY-MM-DD"),images:[null===T||void 0===T||null===(a=T[0])||void 0===a?void 0:a.name],shop_id:[null===D||void 0===D?void 0:D.id],role:"deliveryman"},s="seller/deliverymen";M(!0),y.Z.create(l).then((()=>{g.Am.success(j("successfully.created")),S((0,b.ph)({...L,nextUrl:s})),S((0,q.EH)(null===k||void 0===k?void 0:k.paramsData)),N(`/${s}`)})).catch((e=>z(e.response.data.params))).finally((()=>M(!1)))},children:[(0,w.jsxs)(n.Z,{gutter:12,children:[(0,w.jsx)(d.Z,{span:24,children:(0,w.jsx)(i.Z.Item,{name:"avatar",label:j("images"),rules:[{required:!(null!==T&&void 0!==T&&T.length),message:j("required")}],children:(0,w.jsx)(x.Z,{type:"users",imageList:T,setImageList:U,form:I,multiple:!1,name:"logo_img"})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{label:j("firstname"),name:"firstname",help:null===$||void 0===$||null===(e=$.firstname)||void 0===e?void 0:e[0],validateStatus:null!==$&&void 0!==$&&$.firstname?"error":"success",rules:[{required:!0,message:j("required")}],children:(0,w.jsx)(t.Z,{className:"w-100",maxLength:20})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{label:j("lastname"),name:"lastname",help:null===$||void 0===$||null===(a=$.lastname)||void 0===a?void 0:a[0],validateStatus:null!==$&&void 0!==$&&$.lastname?"error":"success",rules:[{required:!0,message:j("required")}],children:(0,w.jsx)(t.Z,{className:"w-100",maxLength:20})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{label:j("phone"),name:"phone",help:null===$||void 0===$||null===(l=$.phone)||void 0===l?void 0:l[0],validateStatus:null!==$&&void 0!==$&&$.phone?"error":"success",rules:[{required:!0,message:j("required")}],children:(0,w.jsx)(m.Z,{min:0,className:"w-100"})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{label:j("birthday"),name:"birthday",rules:[{required:!0,message:j("required")}],valuePropName:"birthday",children:(0,w.jsx)(u.Z,{className:"w-100",disabledDate:e=>Z()().add(-18,"years")<=e,defaultPickerValue:Z()().add(-18,"years")})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{label:j("gender"),name:"gender",rules:[{required:!0,message:j("required")}],children:(0,w.jsxs)(c.Z,{picker:"dayTime",className:"w-100",children:[(0,w.jsx)(c.Z.Option,{value:"male",children:j("male")},"male"),(0,w.jsx)(c.Z.Option,{value:"female",children:j("female")},"female")]})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(i.Z.Item,{label:j("email"),name:"email",help:null===$||void 0===$||null===(r=$.email)||void 0===r?void 0:r[0],validateStatus:null!==$&&void 0!==$&&$.email?"error":"success",rules:[{required:!0,message:j("required")},{type:"email",message:j("invalid.email")}],children:(0,w.jsx)(t.Z,{type:"email",className:"w-100"})})})]}),(0,w.jsx)(o.Z,{wrap:!0,children:(0,w.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:Y,children:j("submit")})})]})},S=()=>(0,w.jsx)(I,{});const N=function(){const{t:e}=(0,p.$)();return(0,w.jsx)(r.Z,{title:e("add.deliveryman"),children:(0,w.jsx)(S,{})})}}}]);