"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7956],{52008:(e,l,a)=>{a.d(l,{Z:()=>r});a(47313);const r=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},89802:(e,l,a)=>{a.d(l,{q:()=>d});var r=a(47313),s=a(74294),i=a(72652),n=a(46417);const d=e=>{let{fetchOptions:l,refetch:a=!1,value:d,...t}=e;const[u,c]=(0,r.useState)(!1),[m,o]=(0,r.useState)([]);"object"===typeof(null===d||void 0===d?void 0:d.label)&&null!==(null===d||void 0===d?void 0:d.label)&&(d.label=d.label.value);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.Z,{labelInValue:!0,filterOption:!1,notFoundContent:u?(0,n.jsx)(i.Z,{size:"small"}):"no results",value:d,...t,options:u?[]:m,onFocus:()=>{m.length&&!a||(c(!0),l().then((e=>{o(e),c(!1)})))}})})}},67956:(e,l,a)=>{a.r(l),a.d(l,{default:()=>w});var r=a(47313),s=a(97890),i=a(23560),n=a(10976),d=a(77181),t=a(68197),u=a(59624),c=a(74294),m=a(72652),o=a(66672),p=a(86345),x=a(59491),h=a(2717),j=a(90954),Z=a(24511),v=a(52008),b=a(26672),y=a(92709),q=a(91260),g=a(89802),f=a(30554),k=a(6957),_=a(79053),I=a(5764),N=a(46417);const w=()=>{var e,l,a,w,F,z,P,A,O;const{t:V}=(0,Z.$)(),{activeMenu:C}=(0,h.v9)((e=>e.menu),h.wU),$=(0,h.I0)(),[L]=n.Z.useForm(),S=(0,s.s0)(),{id:B}=(0,s.UO)(),[U,E]=(0,r.useState)(!1),[M,D]=(0,r.useState)(!1),{languages:K}=(0,h.v9)((e=>e.formLang),h.wU),[R,T]=(0,r.useState)(null),[G,H]=(0,r.useState)(null!==(e=C.data)&&void 0!==e&&e.image?[null===(l=C.data)||void 0===l?void 0:l.image]:[]),{defaultCurrency:J}=(0,h.v9)((e=>e.currency),h.wU);(0,r.useEffect)((()=>()=>{const e=L.getFieldsValue(!0);$((0,j.nc)({activeMenu:C,data:e}))}),[]);(0,r.useEffect)((()=>{C.refetch&&(e=>{D(!0),q.x.getById(e).then((e=>{var l,a,r,s,i;let{data:n}=e;var d;T({label:null===n||void 0===n||null===(l=n.payment)||void 0===l?void 0:l.tag,value:null===n||void 0===n||null===(a=n.payment)||void 0===a?void 0:a.id,key:null===n||void 0===n||null===(r=n.payment)||void 0===r?void 0:r.id}),L.setFieldsValue({...n.payload,demo:Boolean(null===n||void 0===n||null===(s=n.payload)||void 0===s?void 0:s.demo),payment_id:null===n||void 0===n?void 0:n.payment.tag,paypal_validate_ssl:Boolean(null===n||void 0===n||null===(i=n.payload)||void 0===i?void 0:i.paypal_validate_ssl)}),H([(d=null===n||void 0===n?void 0:n.payload.logo,{name:d,url:d})])})).finally((()=>{D(!1),$((0,j.A_)(C))}))})(B)}),[C.refetch]);return(0,N.jsx)(d.Z,{title:V("edit.payment.payloads"),className:"h-100",children:M?(0,N.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,N.jsx)(m.Z,{size:"large",className:"py-5"})}):(0,N.jsxs)(n.Z,{name:"edit.payment.payloads",layout:"vertical",onFinish:e=>{var l,a;if(delete e.payment_id,"flutter-wave"===(null===R||void 0===R?void 0:R.label)&&!G[0])return void i.Am.error(V("choose.payload.image"));E(!0);const r={payment_id:R.value,payload:{...e,logo:G[0]?G[0].name:void 0,currency:(null===(l=e.currency)||void 0===l?void 0:l.label)||e.currency,paypal_validate_ssl:null!==e&&void 0!==e&&e.paypal_validate_ssl?Number(e.paypal_validate_ssl):void 0,sandbox:Number(Boolean(null===e||void 0===e?void 0:e.sandbox)),demo:null!==e&&void 0!==e&&e.demo?Number(Boolean(null===e||void 0===e?void 0:e.demo)):void 0,sub_merchant_key:null!==e&&void 0!==e&&null!==(a=e.sub_merchant_key)&&void 0!==a&&a.length?null===e||void 0===e?void 0:e.sub_merchant_key:void 0}};q.x.update(B,r).then((()=>{const e="payment-payloads";i.Am.success(V("successfully.updated")),(0,h.dC)((()=>{$((0,j.ph)({...C,nextUrl:e})),$((0,_.j)({}))})),S(`/${e}`)})).finally((()=>E(!1)))},form:L,initialValues:{...C.data},className:"d-flex flex-column h-100",children:[(0,N.jsxs)(t.Z,{gutter:12,children:[(0,N.jsx)(u.Z,{span:"cash"===(null===R||void 0===R?void 0:R.label)||"wallet"===(null===R||void 0===R?void 0:R.label)?12:24,children:(0,N.jsx)(n.Z.Item,{label:V("payment"),name:"payment_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(c.Z,{notFoundContent:M?(0,N.jsx)(m.Z,{size:"small"}):"no results",allowClear:!0,disabled:!0})})}),"cash"===(null===R||void 0===R?void 0:R.label)||"wallet"===(null===R||void 0===R?void 0:R.label)?"":(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:24,className:"d-flex justify-content-center mt-4 mb-5",children:(e=>{switch(e){case"Paypal":return(0,N.jsx)(b.kD0,{size:80});case"Stripe":return(0,N.jsx)(y.K6C,{size:80});case"Razorpay":return(0,N.jsx)(y.r98,{size:80});case"Paystack":return(0,N.jsx)("img",{src:v.Z,alt:"img",width:"80",height:"80"});case"flutter-wave":return(0,N.jsx)(y.Bq1,{size:80});default:return null}})(null===R||void 0===R?void 0:R.label)}),"paystack"===(null===R||void 0===R?void 0:R.label)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})})," ",(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})})]}):"paypal"===(null===R||void 0===R?void 0:R.label)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(c.Z,{options:[{value:"live",label:V("live")},{value:"sandbox",label:V("sandbox")}]})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(c.Z,{options:[{value:"Sale",label:V("sale")},{value:"Order",label:V("order")},{value:"Authorization",label:V("authorization")}]})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title} (${e.symbol||""})`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:V("required")}],valuePropName:"value",children:(0,N.jsx)(c.Z,{placeholder:V("select.locale"),defaultValue:{label:null===(a=K.find((e=>e.locale===k.Z.language)))||void 0===a?void 0:a.title,value:k.Z.language},options:null===K||void 0===K?void 0:K.map((e=>({value:e.locale,label:e.title})))})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,N.jsx)(p.Z,{})})})]}):"stripe"===(null===R||void 0===R?void 0:R.label)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})})," ",(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})})]}):"razorpay"===(null===R||void 0===R?void 0:R.label)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})})," ",(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})})]}):"flutter-wave"===(null===R||void 0===R?void 0:R.label)?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("payload.title"),name:"title",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("payload.description"),name:"description",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("flw_pk"),name:"flw_pk",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("flw_sk"),name:"flw_sk",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})})," ",(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("key"),name:"key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:6,children:(0,N.jsx)(n.Z.Item,{rules:[{required:!0}],label:V("logo"),children:(0,N.jsx)(I.Z,{type:"brands",imageList:G,setImageList:H,form:L,multiple:!1})})})]}):"mollie"===(null===R||void 0===R?void 0:R.label.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("partner.id"),name:"partner_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("profile.id"),name:"profile_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("secret.key"),name:"secret_key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:6,children:(0,N.jsx)(n.Z.Item,{rules:[{required:!0}],label:V("logo"),children:(0,N.jsx)(I.Z,{type:"brands",imageList:G,setImageList:H,form:L,multiple:!1})})})]}):"moya-sar"===(null===R||void 0===R||null===(w=R.label)||void 0===w?void 0:w.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("public.key"),name:"public_key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("secret.key"),name:"secret_key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("secret.token"),name:"secret_token",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:6,children:(0,N.jsx)(n.Z.Item,{rules:[{required:!0}],label:V("logo"),children:(0,N.jsx)(I.Z,{type:"brands",imageList:G,setImageList:H,form:L,multiple:!1})})})]}):"paytabs"===(null===R||void 0===R||null===(F=R.label)||void 0===F?void 0:F.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("server.key"),name:"server_key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("profile.id"),name:"profile_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("client.key"),name:"client_key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})})]}):"zain-cash"===(null===R||void 0===R||null===(z=R.label)||void 0===z?void 0:z.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("url"),name:"url",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("msisdn"),name:"msisdn",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("merchantId"),name:"merchantId",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("key"),name:"key",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})})]}):"mercado-pago"===(null===R||void 0===R||null===(P=R.label)||void 0===P?void 0:P.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("token"),name:"token",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("sandbox"),name:"sandbox",valuePropName:"checked",children:(0,N.jsx)(p.Z,{})})})]}):"maksekeskus"===(null===R||void 0===R||null===(A=R.label)||void 0===A?void 0:A.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("shop.id"),name:"shop_id",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("key.publishable"),name:"key_publishable",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("country"),name:"country",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("locale"),name:"locale",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("demo"),name:"demo",valuePropName:"checked",children:(0,N.jsx)(p.Z,{})})})]}):"iyzico"===(null===R||void 0===R||null===(O=R.label)||void 0===O?void 0:O.toLowerCase())?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{name:"api_key",label:V("api.key"),rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{name:"secret_key",label:V("secret.key"),rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{name:"sub_merchant_key",label:V("sub.merchant.key"),children:(0,N.jsx)(o.Z,{})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("currency"),name:"currency",rules:[{required:!0,message:V("required")}],children:(0,N.jsx)(g.q,{placeholder:V("select.currency"),valuePropName:"label",defaultValue:{value:J.id,label:J.title},fetchOptions:()=>f.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title}`,key:e.id})))}))})})}),(0,N.jsx)(u.Z,{span:12,children:(0,N.jsx)(n.Z.Item,{label:V("sandbox"),name:"sandbox",valuePropName:"checked",children:(0,N.jsx)(p.Z,{})})})]}):null]})]}),(0,N.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,N.jsx)("div",{className:"pb-5",children:(0,N.jsx)(x.Z,{type:"primary",htmlType:"submit",loading:U,disabled:U,children:V("submit")})})})]})})}}}]);