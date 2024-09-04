"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9824],{30153:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(47313),r=n(10976),o=n(24511),l=n(68144),s=n(76733),c=n.n(s),i=n(97421),u=n(36104),d=n(23560),p=n(46417);function m(e){let{form:t,lang:n,languages:s}=e;const{t:m}=(0,o.$)();function v(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,n)=>{const a=new FormData;e.file.then((e=>{e.size/1024/1024<2||(d.Am.error(m("min.2.mb")),n()),a.append("image",e),a.append("type","blogs"),u.Z.upload(a).then((e=>{let{data:n}=e;t({default:`${i.bV+n.title}`})})).catch((e=>{n(e)}))}))}))}}(e)}return(0,p.jsx)(a.Fragment,{children:s.map((e=>(0,p.jsx)(r.Z.Item,{label:m("description"),name:`description[${e.locale}]`,valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===n,message:m("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(m("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(m("must.be.at.least.5"))):t&&(null===t||void 0===t?void 0:t.trim().length)>200?Promise.reject(new Error(m("must.be.less.200"))):Promise.resolve()}],hidden:e.locale!==n,children:(0,p.jsx)(l.CKEditor,{editor:c(),config:{extraPlugins:[v]},onBlur:(n,a)=>{const r=a.getData();t.setFieldsValue({[`description[${e.value}]`]:r})}})},"desc"+e.locale)))})}},73431:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(47313),r=n(39180),o=n(2717),l=n(28830),s=n(60535),c=n(46417);const i=()=>{const e=(0,o.I0)(),{languages:t,defaultLang:n}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:n}=t;e((0,l.dc)(n)),e((0,l.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,l.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},89281:(e,t,n)=>{n.d(t,{h:()=>i});var a=n(47313),r=n(12279),o=n.n(r),l=n(74294),s=n(72652),c=n(46417);const i=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:r,refetchOptions:i=!1,...u}=e;const[d,p]=(0,a.useState)(!1),[m,v]=(0,a.useState)([]),h=(0,a.useMemo)((()=>o()((e=>{v([]),p(!0),t(e).then((e=>{v(e),p(!1)}))}),n)),[t,n]);return(0,c.jsx)(l.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,onClear:()=>{h(""),r&&r()},notFoundContent:d?(0,c.jsx)(s.Z,{size:"small"}):"no results",...u,options:m,onFocus:()=>{m.length&&!i||h("")}})}},75336:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t[`${n}[${e.locale}]`]?void 0:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},59824:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(47313),r=n(10976),o=n(77181),l=n(68197),s=n(59624),c=n(66672),i=n(86345),u=n(59491),d=n(23560),p=n(97890),m=n(73431),v=n(2717),h=n(90954),f=n(57481),y=n(24511),g=n(89281),b=n(30763),x=n(85191),Z=n(30153),C=n(75336),j=n(46417);const k=()=>{const{t:e}=(0,y.$)(),t=(0,p.s0)(),n=(0,v.I0)(),{activeMenu:k}=(0,v.v9)((e=>e.menu),v.wU),[P]=r.Z.useForm(),[w,E]=(0,a.useState)(!1),{defaultLang:O,languages:F}=(0,v.v9)((e=>e.formLang),v.wU);(0,a.useEffect)((()=>()=>{const e=P.getFieldsValue(!0);n((0,h.nc)({activeMenu:k,data:e}))}),[]);return(0,j.jsx)(o.Z,{title:e("add.career"),extra:(0,j.jsx)(m.Z,{}),children:(0,j.jsxs)(r.Z,{name:"basic",layout:"vertical",onFinish:a=>{E(!0);const r={...a,active:Number(a.active),category_id:a.category_id.value,type:a.type,title:(0,C.Z)(F,a,"title"),description:(0,C.Z)(F,a,"description"),address:(0,C.Z)(F,a,"address")},o="catalog/career";f.Z.create(r).then((()=>{d.Am.success(e("successfully.created")),n((0,h.ph)({...k,nextUrl:o})),n((0,x.a)()),t(`/${o}`)})).catch((e=>console.error(e.response.data.params))).finally((()=>E(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...k.data},form:P,children:[(0,j.jsxs)(l.Z,{gutter:12,children:[(0,j.jsx)(s.Z,{span:12,children:F.map(((t,n)=>(0,j.jsx)(r.Z.Item,{label:e("name"),name:`title[${t.locale}]`,rules:[{required:(null===t||void 0===t?void 0:t.locale)===O,message:e("required")},{validator:(t,n)=>n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(e("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve()}],hidden:t.locale!==O,children:(0,j.jsx)(c.Z,{placeholder:e("name"),maxLength:50})},t.title+n)))}),(0,j.jsx)(s.Z,{span:12}),(0,j.jsx)(s.Z,{span:24,children:(0,j.jsx)(Z.Z,{form:P,lang:O,languages:F})}),(0,j.jsx)(s.Z,{span:12,children:(0,j.jsx)(r.Z.Item,{label:e("category"),name:"category_id",rules:[{required:!0,message:e("required")}],children:(0,j.jsx)(g.h,{fetchOptions:async function(e){const t={search:e,type:"career",active:1};return b.Z.getAll(t).then((e=>e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id})))))}})})}),(0,j.jsx)(s.Z,{span:12,children:F.map(((t,n)=>(0,j.jsx)(r.Z.Item,{label:e("location"),name:`address[${t.locale}]`,rules:[{required:(null===t||void 0===t?void 0:t.locale)===O,message:e("required")},{validator:(t,n)=>n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(e("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve()}],hidden:t.locale!==O,children:(0,j.jsx)(c.Z,{maxLength:100})},t.locale+n)))}),(0,j.jsx)(s.Z,{span:12,children:(0,j.jsx)(r.Z.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(i.Z,{})})}),(0,j.jsx)(s.Z,{span:12}),(0,j.jsx)(s.Z,{span:24,className:"mb-5"})]}),(0,j.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:w,children:e("submit")})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>N});var a=n(4942),r=n(87462),o=n(47313),l=n(56482),s=n(46123),c=n.n(s),i=n(16945),u=n(4431),d=n(91964),p=o.createContext(null),m=p.Provider;const v=p;var h=o.createContext(null),f=h.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e,t){var n,s=o.useContext(v),p=o.useContext(h),m=o.useContext(d.E_),f=m.getPrefixCls,g=m.direction,b=o.useRef(),x=(0,i.sQ)(t,b),Z=(0,o.useContext)(u.aM).isFormItemInput,C=e.prefixCls,j=e.className,k=e.children,P=e.style,w=y(e,["prefixCls","className","children","style"]),E=f("radio",C),O="button"===((null===s||void 0===s?void 0:s.optionType)||p)?"".concat(E,"-button"):E,F=(0,r.Z)({},w);s&&(F.name=s.name,F.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},F.checked=e.value===s.value,F.disabled=e.disabled||s.disabled);var I=c()("".concat(O,"-wrapper"),(n={},(0,a.Z)(n,"".concat(O,"-wrapper-checked"),F.checked),(0,a.Z)(n,"".concat(O,"-wrapper-disabled"),F.disabled),(0,a.Z)(n,"".concat(O,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(O,"-wrapper-in-form-item"),Z),n),j);return o.createElement("label",{className:I,style:P,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,r.Z)({},F,{type:"radio",prefixCls:O,ref:x})),void 0!==k?o.createElement("span",null,k):null)},b=o.forwardRef(g);b.displayName="Radio";const x=b;var Z=n(29439),C=n(10288),j=n(21631),k=n(81176),P=o.forwardRef((function(e,t){var n=o.useContext(d.E_),l=n.getPrefixCls,s=n.direction,i=o.useContext(j.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),v=p[0],h=p[1];return o.createElement(m,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||h(a);var r=e.onChange;r&&a!==n&&r(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,m=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,y=e.disabled,g=e.children,b=e.size,Z=e.style,C=e.id,j=e.onMouseEnter,P=e.onMouseLeave,w=l("radio",u),E="".concat(w,"-group"),O=g;m&&m.length>0&&(O=m.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:w,disabled:y,value:e,checked:v===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var F=b||i,I=c()(E,"".concat(E,"-").concat(f),(n={},(0,a.Z)(n,"".concat(E,"-").concat(F),F),(0,a.Z)(n,"".concat(E,"-rtl"),"rtl"===s),n),p);return o.createElement("div",(0,r.Z)({},(0,k.Z)(e),{className:I,style:Z,onMouseEnter:j,onMouseLeave:P,id:C,ref:t}),O)}())}));const w=o.memo(P);var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=function(e,t){var n=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,l=E(e,["prefixCls"]),s=n("radio",a);return o.createElement(f,{value:"button"},o.createElement(x,(0,r.Z)({prefixCls:s},l,{type:"radio",ref:t})))};const F=o.forwardRef(O);var I=x;I.Button=F,I.Group=w;const N=I},56482:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(4942),o=n(45987),l=n(1413),s=n(15671),c=n(43144),i=n(60136),u=n(54062),d=n(47313),p=n(46123),m=n.n(p),v=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,s=t.style,c=t.name,i=t.id,u=t.type,p=t.disabled,v=t.readOnly,h=t.tabIndex,f=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,Z=t.onKeyUp,C=t.autoFocus,j=t.value,k=t.required,P=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(P).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=P[t]),e}),{}),E=this.state.checked,O=m()(n,l,(e={},(0,r.Z)(e,"".concat(n,"-checked"),E),(0,r.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:O,style:s},d.createElement("input",(0,a.Z)({name:c,id:i,type:u,required:k,readOnly:v,disabled:p,tabIndex:h,className:"".concat(n,"-input"),checked:!!E,onClick:f,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:j},w)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);