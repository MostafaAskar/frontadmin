(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7052],{33834:(e,t,l)=>{"use strict";l.d(t,{K:()=>i});var a=l(97890),s=l(74776),n=l.n(s);const i=()=>{const e=(0,a.s0)(),t=(0,a.TH)(),l=n().parse(t.search,{ignoreQueryPrefix:!0});return{values:l,set:(t,a)=>e({search:n().stringify({...l,[t]:a})}),reset:t=>{const a={...l};a[t]&&delete a[t],e({search:n().stringify({...a})})},clear:()=>e({search:n().stringify({})}),merge:t=>e({search:n().stringify({...l,...t})})}}},19321:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>y});var a=l(47313),s=l(2717),n=l(73431),i=l(24511),r=l(68668),o=l(83999),d=l(77181),u=l(40622),c=l(84427),m=l(33834),v=l(90954),p=l(49067),h=l(97890),f=l(20131),x=l(51282),g=l(1358),j=l(76833),Z=l(46417);const{Step:w}=o.Z,y=()=>{var e,t;const{t:l}=(0,i.$)(),{activeMenu:y}=(0,s.v9)((e=>e.menu),s.wU),_=(0,m.K)(),S=Number((null===(e=_.values)||void 0===e?void 0:e.step)||0),[b,k]=(0,a.useState)(y.refetch),q=(0,s.I0)(),{uuid:F}=(0,h.UO)(),{languages:I}=(0,s.v9)((e=>e.formLang),s.wU),N=()=>{const e=S+1;_.set("step",e)},C=()=>{const e=S-1;_.set("step",e)},P=e=>({items:e,uid:e,url:e,name:e});function $(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,l=I.map((e=>{var l,a,s;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,[`address[${e.locale}]`]:null===(s=t.find((t=>t.locale===e.locale)))||void 0===s?void 0:s.address}}));return Object.assign({},...l)}return(0,a.useEffect)((()=>{y.refetch&&F&&(e=>{k(!0),p.Z.getById(e).then((e=>{var t,l,a,s,n,i,r,o,d,u,c,m,p,h,f,x,g,j;const Z={...e.data,...$(e.data),logo_img:P(e.data.logo_img),background_img:P(e.data.background_img),user:{label:(null===(t=e.data)||void 0===t||null===(l=t.seller)||void 0===l?void 0:l.firstname)+" "+(null===(a=e.data)||void 0===a||null===(s=a.seller)||void 0===s?void 0:s.lastname),value:null===(n=e.data)||void 0===n||null===(i=n.seller)||void 0===i?void 0:i.id},delivery_time_from:(null===(r=e.data)||void 0===r?void 0:r.delivery_time.from)||0,delivery_time_to:(null===(o=e.data)||void 0===o?void 0:o.delivery_time.to)||0,delivery_time_type:null===(d=e.data)||void 0===d?void 0:d.delivery_time.type,recommended:"recommended"===e.data.mark,categories:null===(u=e.data)||void 0===u||null===(c=u.categories)||void 0===c?void 0:c.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),tags:null===(m=e.data)||void 0===m||null===(p=m.tags)||void 0===p?void 0:p.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),price:(null===(h=e.data)||void 0===h?void 0:h.price)||0,price_per_km:(null===(f=e.data)||void 0===f?void 0:f.price_per_km)||0,min_amount:(null===(x=e.data)||void 0===x?void 0:x.min_amount)||0,tax:(null===(g=e.data)||void 0===g?void 0:g.tax)||0,percentage:(null===(j=e.data)||void 0===j?void 0:j.percentage)||0};q((0,v.nc)({activeMenu:y,data:Z}))})).finally((()=>{k(!1),q((0,v.A_)(y))}))})(F)}),[y.refetch,S,F]),(0,Z.jsxs)(d.Z,{title:l("shop.edit"),extra:(0,Z.jsx)(n.Z,{}),children:[(0,Z.jsx)(o.Z,{current:S,onChange:e=>{q((0,v.nc)({activeMenu:y,data:{...y.data,step:e}})),_.set("step",e)},children:r.S.map((e=>(0,Z.jsx)(w,{title:l(e.title)},e.title)))}),b?(0,Z.jsx)(x.Z,{}):(0,Z.jsxs)("div",{className:"steps-content",children:["First-content"===r.S[S].content&&(0,Z.jsx)(u.Z,{next:N,loading:b,action_type:"edit",user:null===(t=y.data)||void 0===t?void 0:t.seller}),"Second-content"===r.S[S].content&&(0,Z.jsx)(g.Z,{next:N,prev:C}),"Third-content"===r.S[S].content&&(0,Z.jsx)(j.Z,{next:N,prev:C}),"Fourth-content"===r.S[S].content&&(0,Z.jsx)(f.Z,{next:N,prev:C}),"Fifth-content"===r.S[S].content&&(0,Z.jsx)(c.Z,{next:N,prev:C})]})]})}},68668:(e,t,l)=>{"use strict";l.d(t,{S:()=>a});const a=[{title:"shop",content:"First-content"},{title:"shop.locations",content:"Second-content"},{title:"shop.social",content:"Third-content"},{title:"delivery",content:"Fourth-content"},{title:"user",content:"Fifth-content"}]},84427:(e,t,l)=>{"use strict";l.d(t,{Z:()=>w});var a=l(47313),s=l(10976),n=l(97890),i=l(2717),r=l(49986),o=l(23560),d=l(90954),u=l(24511),c=l(51282),m=l(68197),v=l(59624),p=l(66672),h=l(16124),f=l(45705),x=l(59491),g=l(46417);const j=e=>{let{prev:t,loadingBtn:l,error:a}=e;const{t:n}=(0,u.$)();return(0,g.jsxs)(m.Z,{gutter:12,children:[(0,g.jsx)(v.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:n("firstname"),name:"firstname",help:null!==a&&void 0!==a&&a.firstname?a.firstname[0]:null,validateStatus:null!==a&&void 0!==a&&a.firstname?"error":"success",rules:[{required:!0,message:n("required")}],children:(0,g.jsx)(p.Z,{className:"w-100"})})}),(0,g.jsx)(v.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:n("lastname"),name:"lastname",help:null!==a&&void 0!==a&&a.lastname?a.lastname[0]:null,validateStatus:null!==a&&void 0!==a&&a.lastname?"error":"success",rules:[{required:!0,message:n("required")}],children:(0,g.jsx)(p.Z,{className:"w-100"})})}),(0,g.jsx)(v.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:n("phone"),name:"phone",help:null!==a&&void 0!==a&&a.phone?a.phone[0]:null,validateStatus:null!==a&&void 0!==a&&a.phone?"error":"success",rules:[{required:!0,message:n("required")}],children:(0,g.jsx)(h.Z,{min:0,className:"w-100"})})}),(0,g.jsx)(v.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:n("email"),name:"email",help:null!==a&&void 0!==a&&a.email?a.email[0]:null,validateStatus:null!==a&&void 0!==a&&a.email?"error":"success",rules:[{required:!0,message:n("required")}],children:(0,g.jsx)(p.Z,{type:"email",className:"w-100"})})}),(0,g.jsx)(v.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:n("password"),name:"password",help:null!==a&&void 0!==a&&a.password?a.password[0]:null,validateStatus:null!==a&&void 0!==a&&a.password?"error":"success",rules:[{required:!1,message:n("required")},{type:"string",min:6,message:n("min.6.letters")}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,g.jsx)(p.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})}),(0,g.jsx)(v.Z,{span:12,children:(0,g.jsx)(s.Z.Item,{label:n("password.confirmation"),help:null!==a&&void 0!==a&&a.password_confirmation?a.password_confirmation[0]:null,validateStatus:null!==a&&void 0!==a&&a.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!1,message:n("required")},e=>{let{getFieldValue:t}=e;return{validator:(e,l)=>l&&t("password")!==l?Promise.reject(n("passwords.do.not.match")):Promise.resolve()}}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,g.jsx)(p.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})}),(0,g.jsx)(v.Z,{span:24,children:(0,g.jsxs)(f.Z,{children:[(0,g.jsx)(x.Z,{type:"primary",htmlType:"submit",loading:l,children:n("save")}),(0,g.jsx)(x.Z,{htmlType:"submit",onClick:()=>t(),children:n("prev")})]})})]})};var Z=l(44528);function w(e){let{prev:t}=e;const{t:l}=(0,u.$)(),{activeMenu:m}=(0,i.v9)((e=>e.menu),i.wU),v=(0,i.I0)(),p=(0,n.s0)(),[h,f]=(0,a.useState)(null),[x,w]=(0,a.useState)(!1),[y,_]=(0,a.useState)(!1),[S]=s.Z.useForm();return(0,a.useEffect)((()=>{var e,t,l;null!==m&&void 0!==m&&m.data.seller&&(l=null===m||void 0===m||null===(e=m.data)||void 0===e||null===(t=e.seller)||void 0===t?void 0:t.uuid,_(!0),r.Z.getById(l).then((e=>{const t=e.data;S.setFieldsValue({firstname:t.firstname,lastname:t.lastname,email:t.email,phone:t.phone,password_confirmation:t.password_confirmation,password:t.password})})).finally((()=>_(!1))))}),[]),(0,g.jsx)(g.Fragment,{children:y?(0,g.jsx)(c.Z,{}):(0,g.jsx)(s.Z,{form:S,layout:"vertical",initialValues:{...m.data},onFinish:e=>{var t,a;w(!0);const s={firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,password_confirmation:e.password_confirmation,password:e.password},n="shops";r.Z.update(null===m||void 0===m||null===(t=m.data)||void 0===t||null===(a=t.seller)||void 0===a?void 0:a.uuid,s).then((()=>{o.Am.success(l("successfully.updated")),p("/shops"),v((0,Z.N)({perPage:10,page:1})),v((0,d.ph)({...m,nextUrl:n}))})).catch((e=>f(e.response.data.params))).finally((()=>w(!1)))},className:"py-4",children:(0,g.jsx)(j,{error:h,loadingBtn:x})})})}},24654:()=>{}}]);