"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9096],{21074:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(47313),o=n(68144),l=n(76733),r=n.n(l),i=n(10976),c=n(24511),s=n(36104),u=n(97421),d=n(46417);const p=e=>{let{getLanguageFields:t,form:n,lang:l,languages:p}=e;const{t:v}=(0,c.$)();function f(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,n)=>{const a=new FormData;e.file.then((e=>{a.append("image",e),a.append("type","blogs"),s.Z.upload(a).then((e=>{let{data:n}=e;t({default:`${u.bV+n.title}`})})).catch((e=>{n(e)}))}))}))}}(e)}return(0,d.jsx)(a.Fragment,{children:p.map((e=>(0,d.jsx)(i.Z.Item,{label:v("description"),name:`description[${e.locale}]`,valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===l,message:v("required")}],hidden:e.locale!==l,children:(0,d.jsx)(o.CKEditor,{editor:r(),data:t()[`description[${e.value}]`],config:{extraPlugins:[f]},onBlur:(t,a)=>{const o=a.getData();n.setFieldsValue({[`description[${e.value}]`]:o})}})},"desc"+e.locale)))})}},73431:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(47313),o=n(39180),l=n(2717),r=n(28830),i=n(60535),c=n(46417);const s=()=>{const e=(0,l.I0)(),{languages:t,defaultLang:n}=(0,l.v9)((e=>e.formLang),l.wU);(0,a.useEffect)((()=>{i.Z.getAllActive().then((t=>{let{data:n}=t;e((0,r.dc)(n)),e((0,r.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(o.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},75336:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t[`${n}[${e.locale}]`]?void 0:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},9096:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(47313),o=n(97890),l=n(23560),r=n(10976),i=n(77181),c=n(68197),s=n(59624),u=n(66672),d=n(45705),p=n(59491),v=n(72652),f=n(2717),m=n(90954),h=n(80337),g=n(56078),y=n(73431),x=n(75336),b=n(24511),Z=n(21074),C=n(46417);function j(){const{t:e}=(0,b.$)(),{activeMenu:t}=(0,f.v9)((e=>e.menu),f.wU),{languages:n,defaultLang:j}=(0,f.v9)((e=>e.formLang),f.wU),k=(0,f.I0)(),[E]=r.Z.useForm(),P=(0,o.s0)(),{uuid:w}=(0,o.UO)(),[O,F]=(0,a.useState)(!1),[N,$]=(0,a.useState)(!1);(0,a.useEffect)((()=>()=>{const e=E.getFieldsValue(!0);k((0,m.nc)({activeMenu:t,data:e}))}),[]);function I(e){if(!e)return{};const{translations:t}=e,a=n.map((e=>{var n,a,o;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,[`short_desc[${e.locale}]`]:null===(o=t.find((t=>t.locale===e.locale)))||void 0===o?void 0:o.short_desc}}));return Object.assign({},...a)}return(0,a.useEffect)((()=>{t.refetch&&(e=>{$(!0),g.Z.getById(e).then((e=>{let t=e.data;E.setFieldsValue({...t,...I(t)})})).finally((()=>{$(!1),k((0,m.A_)(t))}))})(w)}),[t.refetch]),(0,C.jsx)(i.Z,{title:e("edit.notification"),extra:(0,C.jsx)(y.Z,{}),children:N?(0,C.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,C.jsx)(v.Z,{size:"large",className:"py-5"})}):(0,C.jsxs)(r.Z,{name:"notification-edit",layout:"vertical",onFinish:a=>{const o={type:"notification",title:(0,x.Z)(n,a),description:(0,x.Z)(n,a,"description"),short_desc:(0,x.Z)(n,a,"short_desc")};F(!0);const r="notifications";g.Z.update(w,o).then((()=>{l.Am.success(e("successfully.updated")),k((0,m.ph)({...t,nextUrl:r})),P(`/${r}`),k((0,h.n)({}))})).finally((()=>F(!1)))},form:E,initialValues:{active:!0,...t.data},children:[(0,C.jsxs)(c.Z,{gutter:12,children:[(0,C.jsx)(s.Z,{span:12,children:n.map((t=>(0,C.jsx)(r.Z.Item,{label:e("title"),name:`title[${t.locale}]`,rules:[{validator:(n,a)=>a||(null===t||void 0===t?void 0:t.locale)!==j?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(e("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}],hidden:t.locale!==j,children:(0,C.jsx)(u.Z,{maxLength:50})},"title"+t.locale)))}),(0,C.jsx)(s.Z,{span:24,children:n.map((t=>(0,C.jsx)(r.Z.Item,{label:e("short.description"),name:`short_desc[${t.locale}]`,rules:[{validator:(n,a)=>a||(null===t||void 0===t?void 0:t.locale)!==j?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(e("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}],hidden:t.locale!==j,children:(0,C.jsx)(u.Z,{maxLength:50})},"short_desc"+t.locale)))}),(0,C.jsx)(s.Z,{span:24,children:(0,C.jsx)(Z.Z,{form:E,lang:j,languages:n,getLanguageFields:I})})]}),(0,C.jsx)(d.Z,{children:(0,C.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:O,children:e("save")})})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>$});var a=n(4942),o=n(87462),l=n(47313),r=n(56482),i=n(46123),c=n.n(i),s=n(16945),u=n(4431),d=n(91964),p=l.createContext(null),v=p.Provider;const f=p;var m=l.createContext(null),h=m.Provider,g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},y=function(e,t){var n,i=l.useContext(f),p=l.useContext(m),v=l.useContext(d.E_),h=v.getPrefixCls,y=v.direction,x=l.useRef(),b=(0,s.sQ)(t,x),Z=(0,l.useContext)(u.aM).isFormItemInput,C=e.prefixCls,j=e.className,k=e.children,E=e.style,P=g(e,["prefixCls","className","children","style"]),w=h("radio",C),O="button"===((null===i||void 0===i?void 0:i.optionType)||p)?"".concat(w,"-button"):w,F=(0,o.Z)({},P);i&&(F.name=i.name,F.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,t)},F.checked=e.value===i.value,F.disabled=e.disabled||i.disabled);var N=c()("".concat(O,"-wrapper"),(n={},(0,a.Z)(n,"".concat(O,"-wrapper-checked"),F.checked),(0,a.Z)(n,"".concat(O,"-wrapper-disabled"),F.disabled),(0,a.Z)(n,"".concat(O,"-wrapper-rtl"),"rtl"===y),(0,a.Z)(n,"".concat(O,"-wrapper-in-form-item"),Z),n),j);return l.createElement("label",{className:N,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(r.Z,(0,o.Z)({},F,{type:"radio",prefixCls:O,ref:b})),void 0!==k?l.createElement("span",null,k):null)},x=l.forwardRef(y);x.displayName="Radio";const b=x;var Z=n(29439),C=n(10288),j=n(21631),k=n(81176),E=l.forwardRef((function(e,t){var n=l.useContext(d.E_),r=n.getPrefixCls,i=n.direction,s=l.useContext(j.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),f=p[0],m=p[1];return l.createElement(v,{value:{onChange:function(t){var n=f,a=t.target.value;"value"in e||m(a);var o=e.onChange;o&&a!==n&&o(t)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,g=e.disabled,y=e.children,x=e.size,Z=e.style,C=e.id,j=e.onMouseEnter,E=e.onMouseLeave,P=r("radio",u),w="".concat(P,"-group"),O=y;v&&v.length>0&&(O=v.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(b,{key:e.toString(),prefixCls:P,disabled:g,value:e,checked:f===e},e):l.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||g,value:e.value,checked:f===e.value,style:e.style},e.label)})));var F=x||s,N=c()(w,"".concat(w,"-").concat(h),(n={},(0,a.Z)(n,"".concat(w,"-").concat(F),F),(0,a.Z)(n,"".concat(w,"-rtl"),"rtl"===i),n),p);return l.createElement("div",(0,o.Z)({},(0,k.Z)(e),{className:N,style:Z,onMouseEnter:j,onMouseLeave:E,id:C,ref:t}),O)}())}));const P=l.memo(E);var w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},O=function(e,t){var n=l.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=w(e,["prefixCls"]),i=n("radio",a);return l.createElement(h,{value:"button"},l.createElement(b,(0,o.Z)({prefixCls:i},r,{type:"radio",ref:t})))};const F=l.forwardRef(O);var N=b;N.Button=F,N.Group=P;const $=N},56482:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(4942),l=n(45987),r=n(1413),i=n(15671),c=n(43144),s=n(60136),u=n(54062),d=n(47313),p=n(46123),v=n.n(p),f=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,i.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,i=t.style,c=t.name,s=t.id,u=t.type,p=t.disabled,f=t.readOnly,m=t.tabIndex,h=t.onClick,g=t.onFocus,y=t.onBlur,x=t.onKeyDown,b=t.onKeyPress,Z=t.onKeyUp,C=t.autoFocus,j=t.value,k=t.required,E=(0,l.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),w=this.state.checked,O=v()(n,r,(e={},(0,o.Z)(e,"".concat(n,"-checked"),w),(0,o.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:k,readOnly:f,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!w,onClick:h,onFocus:g,onBlur:y,onKeyUp:Z,onKeyDown:x,onKeyPress:b,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:j},P)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=f}}]);