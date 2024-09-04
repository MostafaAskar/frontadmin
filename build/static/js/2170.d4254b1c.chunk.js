"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2170],{49655:(e,t,l)=>{l.d(t,{_:()=>o});var a=l(47313),i=l(12279),n=l.n(i),s=l(74294),r=l(72652),d=l(46417);const o=e=>{let{fetchOptions:t,debounceTimeout:l=400,hasMore:i,...o}=e;const[c,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),[g,p]=(0,a.useState)(!1),[m,Z]=(0,a.useState)(null),[x,f]=(0,a.useState)(1),j=(0,a.useMemo)((()=>n()((e=>{h([]),Z(e),u(!0),t({search:e}).then((e=>{h(e),f(2),u(!1)})).finally((()=>p(!1)))}),l)),[t,l,x]);return(0,d.jsxs)(s.Z,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const l=e.target;g||l.scrollTop+l.offsetHeight!==l.scrollHeight||i&&(p(!0),l.scrollTo(0,l.scrollHeight),t({search:m,page:x}).then((e=>{f((e=>e+1)),h([...v,...e])})).finally((()=>p(!1))))},labelInValue:!0,filterOption:!1,onSearch:j,notFoundContent:c?(0,d.jsx)(r.Z,{size:"small"}):"no results",onFocus:()=>{v.length||j("")},...o,children:[v.map(((e,t)=>(0,d.jsx)(s.Z.Option,{value:e.value,children:e.label},t))),g&&(0,d.jsx)(s.Z.Option,{children:(0,d.jsx)(r.Z,{size:"small"})})]})}},73431:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(47313),i=l(39180),n=l(2717),s=l(28830),r=l(60535),d=l(46417);const o=()=>{const e=(0,n.I0)(),{languages:t,defaultLang:l}=(0,n.v9)((e=>e.formLang),n.wU);(0,a.useEffect)((()=>{r.Z.getAllActive().then((t=>{let{data:l}=t;e((0,s.dc)(l)),e((0,s.mh)(l.find((e=>1===e.default)).locale))}))}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.ZP.Group,{value:l,onChange:t=>{let{target:{value:l}}=t;e((0,s.mh)(l))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,d.jsx)(i.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},41481:(e,t,l)=>{l.d(t,{Z:()=>d});var a=l(47313),i=l(66672),n=l(16031),s=l(40765),r=l(46417);function d(e){let{handleChange:t,defaultValue:l,resetSearch:d,...o}=e;const[c,u]=(0,a.useState)(l),v=(0,a.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(l)}),[d]),(0,r.jsx)(i.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,r.jsx)(s.Z,{}),...o})}},92170:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var a=l(47313),i=l(86345),n=l(45705),s=l(59491),r=l(77181),d=l(78508),o=l(74580),c=l(2717),u=l(90954),v=l(23560),h=l(24511),g=l(21944),p=l(41481),m=l(80314),Z=l(27443),x=l(29466),f=l(10976),j=l(9274),y=l(72652),_=l(68197),b=l(59624),S=l(66672),C=l(73431),I=l(47139),k=l(49655),w=l(79637),O=l(27453),P=l(46417);function A(e){let{visible:t,setVisible:l,id:n,setId:r}=e;const[d]=f.Z.useForm(),o=(0,c.I0)(),{t:u}=(0,h.$)(),{defaultLang:p,languages:m}=(0,c.v9)((e=>e.formLang),c.wU),[x,A]=(0,a.useState)(!1),[V,q]=(0,a.useState)(!1),[E,F]=(0,a.useState)(null),z=()=>{F(null),l(!1),d.resetFields(),r(null)};function M(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,l=m.map((e=>{var l;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title}}));return Object.assign({},...l)}return(0,a.useEffect)((()=>{n&&(q(!0),Z.Z.show(n).then((e=>{let{data:t}=e;F(t),d.setFieldsValue({active:null===t||void 0===t?void 0:t.active,country_id:{label:t.country.translation.title,value:t.country.id},region_id:{label:t.region.translation.title,value:t.region.id},city_id:{label:t.city.translation.title,value:t.city.id},...M(t)})})).finally((()=>q(!1))))}),[n]),(0,P.jsx)(j.Z,{visible:t,onCancel:z,onOk:z,footer:null,loading:V,title:u("add.country"),children:(0,P.jsxs)(f.Z,{form:d,onFinish:e=>{var t,l,a;A(!0);const i={country_id:null===e||void 0===e||null===(t=e.country_id)||void 0===t?void 0:t.value,region_id:null===e||void 0===e||null===(l=e.region_id)||void 0===l?void 0:l.value,city_id:null===e||void 0===e||null===(a=e.city_id)||void 0===a?void 0:a.value,active:e.active,title:{...Object.assign({},...m.map((t=>({[t.locale]:e[`title[${t.locale}]`]}))))}};null!==E&&void 0!==E&&E.id?(e=>{Z.Z.update(E.id,e).then((()=>{v.Am.success(u("successfully.updated")),(0,c.dC)((()=>{o((0,g.e)({}))})),z()})).finally((()=>A(!1)))})(i):(e=>{Z.Z.create(e).then((()=>{v.Am.success(u("successfully.added")),(0,c.dC)((()=>{o((0,g.e)({}))})),z()})).finally((()=>A(!1)))})(i)},layout:"vertical",initialValues:{active:!0},children:[(0,P.jsx)(y.Z,{spinning:V,children:(0,P.jsxs)(_.Z,{gutter:24,children:[(0,P.jsx)(b.Z,{span:24,children:(0,P.jsx)(C.Z,{})}),(0,P.jsx)(b.Z,{span:24,children:m.map((e=>(0,P.jsx)(f.Z.Item,{label:u("title"),name:`title[${e.locale}]`,hidden:e.locale!==p,rules:[{validator:(t,l)=>l||(null===e||void 0===e?void 0:e.locale)!==p?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(u("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(u("required")))}],children:(0,P.jsx)(S.Z,{})},"title"+e.id)))}),(0,P.jsx)(b.Z,{span:24,children:(0,P.jsx)(f.Z.Item,{name:"region_id",label:u("region_id"),rules:[{required:!0,message:u("required")}],children:(0,P.jsx)(k._,{fetchOptions:e=>{let{search:t,page:l}=e;return O.Z.get({search:t,page:l,has_price:!0}).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))))}})})}),(0,P.jsx)(b.Z,{span:24,children:(0,P.jsx)(f.Z.Item,{name:"country_id",label:u("country_id"),rules:[{required:!0,message:u("required")}],children:(0,P.jsx)(k._,{fetchOptions:e=>{let{search:t,page:l}=e;return I.Z.get({search:t,page:l,has_price:!0}).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))))}})})}),(0,P.jsx)(b.Z,{span:24,children:(0,P.jsx)(f.Z.Item,{name:"city_id",label:u("city_id"),rules:[{required:!0,message:u("required")}],children:(0,P.jsx)(k._,{fetchOptions:e=>{let{search:t,page:l}=e;return w.Z.get({search:t,page:l,has_price:!0}).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))))}})})}),(0,P.jsx)(b.Z,{span:4,children:(0,P.jsx)(f.Z.Item,{label:u("active"),name:"active",valuePropName:"checked",children:(0,P.jsx)(i.Z,{defaultChecked:!0})})})]})}),(0,P.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:x,children:u("submit")})]})})}var V=l(12019),q=l(47515);const E=()=>{const{t:e}=(0,h.$)(),t=(0,c.I0)();let[l,f]=(0,x.lr)();const{setIsModalVisible:j}=(0,a.useContext)(o._),{activeMenu:y}=(0,c.v9)((e=>e.menu),c.wU),_=null===y||void 0===y?void 0:y.data,b=l.get("city_id"),{list:S,meta:C,loading:I}=(0,c.v9)((e=>e.deliveryArea),c.wU),[k,w]=(0,a.useState)(!1),[O,E]=(0,a.useState)(!1),[F,z]=(0,a.useState)(!1),[M,$]=(0,a.useState)(null),L=[{title:e("id"),dataIndex:"id",key:"id"},{title:e("name"),dataIndex:"translation",key:"translation",render:(e,t)=>(null===e||void 0===e?void 0:e.title)||"-"},{title:e("active"),dataIndex:"active",key:"active",render:(l,a)=>(0,P.jsx)(i.Z,{onChange:()=>(l=>{w(l),Z.Z.status(l).then((()=>{j(!1),t((0,g.e)({city_id:b})),v.Am.success(e("successfully.updated"))})).finally((()=>{w(null)}))})(a.id),checked:l,loading:Boolean(k===a.id)},a.id)},{title:e("options"),dataIndex:"options",is_show:!0,render:(l,a)=>(0,P.jsxs)(n.Z,{children:[(0,P.jsx)(s.Z,{type:"primary",icon:(0,P.jsx)(V.Z,{}),onClick:()=>(e=>{E(!0),$(e)})(a.id)}),(0,P.jsx)(s.Z,{loading:Boolean(F===a.id),icon:(0,P.jsx)(q.Z,{onClick:()=>(l=>{z(l),Z.Z.delete(l).then((()=>{t((0,g.e)()),v.Am.success(e("successfully.deleted"))})).finally((()=>{z(!1)}))})(a.id)})})]})}];(0,a.useEffect)((()=>{y.refetch&&(t((0,g.e)({city_id:b})),t((0,u.A_)(y)))}),[y.refetch]),(0,m.Z)((()=>{const e={search:null===_||void 0===_?void 0:_.search,city_id:b};t((0,g.e)(e))}),[null===y||void 0===y?void 0:y.data]);return(0,P.jsxs)(r.Z,{title:e("areas"),extra:(0,P.jsxs)(n.Z,{children:[(0,P.jsx)(p.Z,{placeholder:e("search"),handleChange:e=>{return l=e,a="search",void t((0,u.nc)({activeMenu:y,data:{..._,[a]:l}}));var l,a},defaultValue:null===_||void 0===_?void 0:_.search,resetSearch:!(null!==_&&void 0!==_&&_.search)}),(0,P.jsx)(s.Z,{type:"primary",onClick:()=>E(!0),children:e("add.area")})]}),children:[(0,P.jsx)(d.Z,{columns:L,dataSource:S,pagination:{pageSize:C.per_page,page:C.current_page,total:C.total},rowKey:e=>e.id,loading:I,onChange:e=>{const{pageSize:l,current:a}=e;t((0,g.e)({perPage:l,page:a,city_id:b}))}}),(0,P.jsx)(A,{visible:O,setVisible:E,id:M,setId:$})]})}}}]);