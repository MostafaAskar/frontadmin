"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[351],{90351:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var a=s(47313),i=s(97890),l=s(23560),n=s(10976),r=s(77181),c=s(68197),d=s(59624),u=s(66672),m=s(86345),o=s(59491),h=s(72652),v=s(97421),g=s(2717),p=s(90954),x=s(11216),j=s(73253),f=s(24511),Z=s(5764),y=s(46417);const b=()=>{var e,t;const{t:s}=(0,f.$)(),{activeMenu:b}=(0,g.v9)((e=>e.menu),g.wU),{id:I}=(0,i.UO)(),k=(0,g.I0)(),[w,S]=(0,a.useState)(null!==(e=b.data)&&void 0!==e&&e.image?[null===(t=b.data)||void 0===t?void 0:t.image]:[]),[q]=n.Z.useForm(),E=(0,i.s0)(),F=(0,i.TH)(),[N,P]=(0,a.useState)(!1),[U,V]=(0,a.useState)(!1);(0,a.useEffect)((()=>()=>{const e=q.getFieldsValue(!0);k((0,p.nc)({activeMenu:b,data:e}))}),[]);const z=e=>({name:e,url:v.bV+e});return(0,a.useEffect)((()=>{b.refetch&&(e=>{P(!0),x.Z.getById(e).then((e=>{let t=e.data;q.setFieldsValue({...t,image:[z(t.img)]}),S([z(t.img)])})).finally((()=>{P(!1),k((0,p.A_)(b))}))})(I)}),[b.refetch]),(0,y.jsx)(r.Z,{title:s("edit.brand"),children:N?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,y.jsx)(h.Z,{size:"large",className:"py-5"})}):(0,y.jsxs)(n.Z,{name:"basic",layout:"vertical",onFinish:e=>{var t;const a={...e,active:e.active?1:0,"images[0]":null===(t=w[0])||void 0===t?void 0:t.name};V(!0);const i="catalog/brands";"edit"===F.state?x.Z.update(I,a).then((()=>{l.Am.success(s("successfully.updated")),k((0,p.ph)({...b,nextUrl:i})),E(`/${i}`),k((0,j.S0)({}))})).finally((()=>V(!1))):x.Z.create(a).then((()=>{l.Am.success(s("successfully.updated")),k((0,p.ph)({...b,nextUrl:i})),E(`/${i}`),k((0,j.S0)({}))})).finally((()=>V(!1)))},form:q,initialValues:{...b.data},children:[(0,y.jsxs)(c.Z,{gutter:12,children:[(0,y.jsx)(d.Z,{span:12,children:(0,y.jsx)(n.Z.Item,{label:s("title"),name:"title",rules:[{required:!0,message:s("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(s("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(s("must.be.at.least.2"))):Promise.resolve()}],children:(0,y.jsx)(u.Z,{maxLength:50})})}),(0,y.jsx)(d.Z,{span:6,children:(0,y.jsx)(n.Z.Item,{label:s("image"),name:"images",rules:[{required:!(null!==w&&void 0!==w&&w.length),message:s("required")}],children:(0,y.jsx)(Z.Z,{type:"brands",imageList:w,setImageList:S,form:q,multiple:!1})})}),(0,y.jsx)(d.Z,{span:6,children:(0,y.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,y.jsx)(n.Z.Item,{label:s("active"),name:"active",valuePropName:"checked",children:(0,y.jsx)(m.Z,{})})})})]}),(0,y.jsx)(o.Z,{type:"primary",htmlType:"submit",loading:U,children:s("submit")})]})})}}}]);