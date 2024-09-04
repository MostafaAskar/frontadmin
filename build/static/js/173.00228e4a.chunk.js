"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[173],{49655:(e,t,l)=>{l.d(t,{_:()=>d});var a=l(47313),i=l(12279),n=l.n(i),s=l(74294),r=l(72652),o=l(46417);const d=e=>{let{fetchOptions:t,debounceTimeout:l=400,hasMore:i,...d}=e;const[c,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),[g,p]=(0,a.useState)(!1),[m,x]=(0,a.useState)(null),[Z,f]=(0,a.useState)(1),j=(0,a.useMemo)((()=>n()((e=>{h([]),x(e),u(!0),t({search:e}).then((e=>{h(e),f(2),u(!1)})).finally((()=>p(!1)))}),l)),[t,l,Z]);return(0,o.jsxs)(s.Z,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const l=e.target;g||l.scrollTop+l.offsetHeight!==l.scrollHeight||i&&(p(!0),l.scrollTo(0,l.scrollHeight),t({search:m,page:Z}).then((e=>{f((e=>e+1)),h([...v,...e])})).finally((()=>p(!1))))},labelInValue:!0,filterOption:!1,onSearch:j,notFoundContent:c?(0,o.jsx)(r.Z,{size:"small"}):"no results",onFocus:()=>{v.length||j("")},...d,children:[v.map(((e,t)=>(0,o.jsx)(s.Z.Option,{value:e.value,children:e.label},t))),g&&(0,o.jsx)(s.Z.Option,{children:(0,o.jsx)(r.Z,{size:"small"})})]})}},73431:(e,t,l)=>{l.d(t,{Z:()=>d});var a=l(47313),i=l(39180),n=l(2717),s=l(28830),r=l(60535),o=l(46417);const d=()=>{const e=(0,n.I0)(),{languages:t,defaultLang:l}=(0,n.v9)((e=>e.formLang),n.wU);(0,a.useEffect)((()=>{r.Z.getAllActive().then((t=>{let{data:l}=t;e((0,s.dc)(l)),e((0,s.mh)(l.find((e=>1===e.default)).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.ZP.Group,{value:l,onChange:t=>{let{target:{value:l}}=t;e((0,s.mh)(l))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,o.jsx)(i.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},41481:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(47313),i=l(66672),n=l(16031),s=l(40765),r=l(46417);function o(e){let{handleChange:t,defaultValue:l,resetSearch:o,...d}=e;const[c,u]=(0,a.useState)(l),v=(0,a.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(l)}),[o]),(0,r.jsx)(i.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,r.jsx)(s.Z,{}),...d})}},80173:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var a=l(47313),i=l(86345),n=l(45705),s=l(59491),r=l(77181),o=l(78508),d=l(74580),c=l(2717),u=l(90954),v=l(23560),h=l(24511),g=l(7607),p=l(41481),m=l(80314),x=l(79637),Z=l(29466),f=l(97890),j=l(12019),y=l(47515),b=l(10976),_=l(9274),S=l(72652),C=l(68197),k=l(59624),I=l(66672),w=l(73431),B=l(47139),O=l(49655),P=l(27453),z=l(46417);function V(e){let{visible:t,setVisible:l,id:n,setId:r}=e;const[o]=b.Z.useForm(),d=(0,c.I0)(),{t:u}=(0,h.$)(),{defaultLang:p,languages:m}=(0,c.v9)((e=>e.formLang),c.wU),[Z,f]=(0,a.useState)(!1),[j,y]=(0,a.useState)(!1),[V,A]=(0,a.useState)(null),E=()=>{A(null),l(!1),o.resetFields(),r(null)};function F(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,l=m.map((e=>{var l;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title}}));return Object.assign({},...l)}return(0,a.useEffect)((()=>{n&&(y(!0),x.Z.show(n).then((e=>{let{data:t}=e;A(t),o.setFieldsValue({active:null===t||void 0===t?void 0:t.active,country_id:{label:t.country.translation.title,value:t.country.id},region_id:{label:t.region.translation.title,value:t.region.id},...F(t)})})).finally((()=>y(!1))))}),[n]),(0,z.jsx)(_.Z,{visible:t,onCancel:E,onOk:E,footer:null,loading:j,title:u("add.country"),children:(0,z.jsxs)(b.Z,{form:o,onFinish:e=>{var t,l;f(!0);const a={country_id:null===e||void 0===e||null===(t=e.country_id)||void 0===t?void 0:t.value,region_id:null===e||void 0===e||null===(l=e.region_id)||void 0===l?void 0:l.value,active:e.active,title:{...Object.assign({},...m.map((t=>({[t.locale]:e[`title[${t.locale}]`]}))))}};null!==V&&void 0!==V&&V.id?(e=>{x.Z.update(V.id,e).then((()=>{v.Am.success(u("successfully.updated")),(0,c.dC)((()=>{d((0,g.B)({}))})),E()})).finally((()=>f(!1)))})(a):(e=>{x.Z.create(e).then((()=>{v.Am.success(u("successfully.added")),(0,c.dC)((()=>{d((0,g.B)({}))})),E()})).finally((()=>f(!1)))})(a)},layout:"vertical",initialValues:{active:!0},children:[(0,z.jsx)(S.Z,{spinning:j,children:(0,z.jsxs)(C.Z,{gutter:24,children:[(0,z.jsx)(k.Z,{span:24,children:(0,z.jsx)(w.Z,{})}),(0,z.jsx)(k.Z,{span:24,children:m.map((e=>(0,z.jsx)(b.Z.Item,{label:u("title"),name:`title[${e.locale}]`,hidden:e.locale!==p,rules:[{validator:(t,l)=>l||(null===e||void 0===e?void 0:e.locale)!==p?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(u("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(u("required")))}],children:(0,z.jsx)(I.Z,{})},"title"+e.id)))}),(0,z.jsx)(k.Z,{span:24,children:(0,z.jsx)(b.Z.Item,{name:"region_id",label:u("region_id"),rules:[{required:!0,message:u("required")}],children:(0,z.jsx)(O._,{fetchOptions:e=>{let{search:t,page:l}=e;return P.Z.get({search:t,page:l,has_price:!0}).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))))}})})}),(0,z.jsx)(k.Z,{span:24,children:(0,z.jsx)(b.Z.Item,{name:"country_id",label:u("country_id"),rules:[{required:!0,message:u("required")}],children:(0,z.jsx)(O._,{fetchOptions:e=>{let{search:t,page:l}=e;return B.Z.get({search:t,page:l,has_price:!0}).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))))}})})}),(0,z.jsx)(k.Z,{span:4,children:(0,z.jsx)(b.Z.Item,{label:u("active"),name:"active",valuePropName:"checked",children:(0,z.jsx)(i.Z,{defaultChecked:!0})})})]})}),(0,z.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:Z,children:u("submit")})]})})}const A=()=>{const{t:e}=(0,h.$)(),t=(0,c.I0)(),l=(0,f.s0)();let[b,_]=(0,Z.lr)();const{setIsModalVisible:S}=(0,a.useContext)(d._),{activeMenu:C}=(0,c.v9)((e=>e.menu),c.wU),k=null===C||void 0===C?void 0:C.data,I=b.get("country_id"),{list:w,meta:B,loading:O}=(0,c.v9)((e=>e.deliveryCity),c.wU),[P,A]=(0,a.useState)(!1),[E,F]=(0,a.useState)(!1),[$,M]=(0,a.useState)(!1),[q,L]=(0,a.useState)(null),T=[{title:e("id"),dataIndex:"id",key:"id"},{title:e("name"),dataIndex:"translation",key:"translation",render:(a,i)=>(0,z.jsx)("div",{style:{cursor:"pointer",textDecoration:"underline"},onClick:()=>(a=>{t((0,u.bL)({url:`deliveryzone/area?city_id=${a.id}`,id:"area",name:e("area")})),l(`/deliveryzone/area?city_id=${a.id}`)})(i),children:(null===a||void 0===a?void 0:a.title)||"-"})},{title:e("active"),dataIndex:"active",key:"active",render:(l,a)=>(0,z.jsx)(i.Z,{onChange:()=>(l=>{A(l),x.Z.status(l).then((()=>{S(!1),t((0,g.B)({country_id:I})),v.Am.success(e("successfully.updated"))})).finally((()=>{A(null)}))})(a.id),checked:l,loading:Boolean(P===a.id)},a.id)},{title:e("options"),dataIndex:"options",is_show:!0,render:(l,a)=>(0,z.jsxs)(n.Z,{children:[(0,z.jsx)(s.Z,{type:"primary",icon:(0,z.jsx)(j.Z,{}),onClick:()=>(e=>{F(!0),L(e)})(a.id)}),(0,z.jsx)(s.Z,{loading:Boolean($===a.id),icon:(0,z.jsx)(y.Z,{onClick:()=>(l=>{M(l),x.Z.delete(l).then((()=>{t((0,g.B)()),v.Am.success(e("successfully.deleted"))})).finally((()=>{M(!1)}))})(a.id)})})]})}];(0,a.useEffect)((()=>{C.refetch&&(t((0,g.B)({country_id:I})),t((0,u.A_)(C)))}),[C.refetch]),(0,m.Z)((()=>{const e={search:null===k||void 0===k?void 0:k.search,country_id:I};t((0,g.B)(e))}),[null===C||void 0===C?void 0:C.data]);return(0,z.jsxs)(r.Z,{title:e("cities"),extra:(0,z.jsxs)(n.Z,{children:[(0,z.jsx)(p.Z,{placeholder:e("search"),handleChange:e=>{return l=e,a="search",void t((0,u.nc)({activeMenu:C,data:{...k,[a]:l}}));var l,a},defaultValue:null===k||void 0===k?void 0:k.search,resetSearch:!(null!==k&&void 0!==k&&k.search)}),(0,z.jsx)(s.Z,{type:"primary",onClick:()=>F(!0),children:e("add.city")})]}),children:[(0,z.jsx)(o.Z,{columns:T,dataSource:w,pagination:{pageSize:B.per_page,page:B.current_page,total:B.total},rowKey:e=>e.id,loading:O,onChange:e=>{const{pageSize:l,current:a}=e;t((0,g.B)({perPage:l,page:a,country_id:I}))}}),(0,z.jsx)(V,{visible:E,setVisible:F,id:q,setId:L})]})}}}]);