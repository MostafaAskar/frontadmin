"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3382],{30153:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(47313),l=n(10976),o=n(24511),r=n(68144),s=n(76733),i=n.n(s),c=n(97421),u=n(36104),d=n(23560),p=n(46417);function v(e){let{form:t,lang:n,languages:s}=e;const{t:v}=(0,o.$)();function m(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,n)=>{const a=new FormData;e.file.then((e=>{e.size/1024/1024<2||(d.Am.error(v("min.2.mb")),n()),a.append("image",e),a.append("type","blogs"),u.Z.upload(a).then((e=>{let{data:n}=e;t({default:`${c.bV+n.title}`})})).catch((e=>{n(e)}))}))}))}}(e)}return(0,p.jsx)(a.Fragment,{children:s.map((e=>(0,p.jsx)(l.Z.Item,{label:v("description"),name:`description[${e.locale}]`,valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===n,message:v("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(v("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(v("must.be.at.least.5"))):t&&(null===t||void 0===t?void 0:t.trim().length)>200?Promise.reject(new Error(v("must.be.less.200"))):Promise.resolve()}],hidden:e.locale!==n,children:(0,p.jsx)(r.CKEditor,{editor:i(),config:{extraPlugins:[m]},onBlur:(n,a)=>{const l=a.getData();t.setFieldsValue({[`description[${e.value}]`]:l})}})},"desc"+e.locale)))})}},73431:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(47313),l=n(39180),o=n(2717),r=n(28830),s=n(60535),i=n(46417);const c=()=>{const e=(0,o.I0)(),{languages:t,defaultLang:n}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:n}=t;e((0,r.dc)(n)),e((0,r.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},75336:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t[`${n}[${e.locale}]`]?void 0:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},83382:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(47313),l=n(97890),o=n(23560),r=n(10976),s=n(77181),i=n(68197),c=n(59624),u=n(66672),d=n(74294),p=n(86345),v=n(59491),m=n(72652),f=n(2717),h=n(90954),g=n(1706),b=n(40113),y=n(24511),x=n(73431),Z=n(5764),j=n(10320),k=n(97421),_=n(30153),C=n(31881),w=n.n(C),E=n(75336),P=n(46417);const N=()=>{var e,t,n;const{t:C}=(0,y.$)(),{activeMenu:N}=(0,f.v9)((e=>e.menu),f.wU),O=(0,f.I0)(),[I]=r.Z.useForm(),F=(0,l.s0)(),{id:$}=(0,l.UO)(),[S,K]=(0,a.useState)(!1),[A,D]=(0,a.useState)(!1),[M,L]=(0,a.useState)(null),{languages:U,defaultLang:q}=(0,f.v9)((e=>e.formLang),f.wU),B=e=>({name:e,url:k.bV+e}),[z,V]=(0,a.useState)(null!==(e=N.data)&&void 0!==e&&null!==(t=e.galleries)&&void 0!==t&&t[0]?[B(null===(n=N.data.galleries)||void 0===n?void 0:n[0].path)]:[]);function R(e){if(!e)return{};const{translations:t}=e,n=U.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}(0,a.useEffect)((()=>()=>{const e=I.getFieldsValue(!0);O((0,h.nc)({activeMenu:N,data:e}))}),[]);return(0,a.useEffect)((()=>{var e;N.refetch&&(e=$,D(!0),b.Z.getById(e).then((e=>{let t=e.data;const n={...t,...R(t),...t.buttons};I.setFieldsValue(n),V([B(t.galleries[0].path)]),L(t.type)})).finally((()=>{O((0,h.A_)(N)),D(!1)})))}),[N.refetch]),(0,P.jsx)(s.Z,{title:C("edit.page"),className:"h-100",extra:(0,P.jsx)(x.Z,{}),children:A?(0,P.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,P.jsx)(m.Z,{size:"large",className:"py-5"})}):(0,P.jsxs)(r.Z,{name:"banner-add",layout:"vertical",onFinish:e=>{K(!0);const t={images:z.map((e=>e.name)),active:Number(e.active),type:e.type,title:(0,E.Z)(U,e,"title"),description:(0,E.Z)(U,e,"description"),buttons:{google_play_button_link:null===e||void 0===e?void 0:e.google_play_button_link,app_store_button_link:null===e||void 0===e?void 0:e.app_store_button_link}},n=e=>{var t;return null===e||void 0===e||null===(t=e.trim())||void 0===t?void 0:t.length};var a,l;n(null===e||void 0===e?void 0:e.google_play_button_link)||(null===(a=t.buttons)||void 0===a||delete a.google_play_button_link);n(null===e||void 0===e?void 0:e.app_store_button_link)||(null===(l=t.buttons)||void 0===l||delete l.app_store_button_link);n(null===e||void 0===e?void 0:e.app_store_button_link)||n(null===e||void 0===e?void 0:e.google_play_button_link)||delete t.buttons,w()({method:"put",url:`${k.YZ}dashboard/admin/pages/${$}`,headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},data:t,params:{}}).then((()=>{const e="pages";o.Am.success(C("successfully.updated")),O((0,h.ph)({...N,nextUrl:e})),F("/pages"),O((0,g.R)())})).catch((e=>{var t,n;return o.Am.error(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)})).finally((()=>K(!1)))},form:I,initialValues:{active:!0,...N.data},className:"d-flex flex-column h-100",children:[(0,P.jsxs)(i.Z,{gutter:12,children:[(0,P.jsx)(c.Z,{span:12,children:U.map((e=>(0,P.jsx)(r.Z.Item,{label:C("name"),name:`title[${e.locale}]`,rules:[{required:e.locale===q,message:C("required")}],hidden:e.locale!==q,children:(0,P.jsx)(u.Z,{})},"title"+e.locale)))}),(0,P.jsx)(c.Z,{span:12}),(0,P.jsx)(c.Z,{span:24,children:(0,P.jsx)(_.Z,{form:I,languages:U,lang:q})}),(0,P.jsx)(c.Z,{span:12,children:(0,P.jsx)(r.Z.Item,{label:C("type"),name:"type",rules:[{required:!0,message:C("required")}],children:(0,P.jsx)(d.Z,{options:j.z,className:"w-100",disabled:!0})})}),(0,P.jsx)(c.Z,{span:12,children:(0,P.jsx)(r.Z.Item,{label:C("active"),name:"active",valuePropName:"checked",children:(0,P.jsx)(p.Z,{})})}),"delivery"!==M&&"about"!==M&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c.Z,{span:12,children:(0,P.jsx)(r.Z.Item,{label:C("google_play_button_link"),name:"google_play_button_link",children:(0,P.jsx)(u.Z,{className:"w-100"})})}),(0,P.jsx)(c.Z,{span:12,children:(0,P.jsx)(r.Z.Item,{label:C("app_store_button_link"),name:"app_store_button_link",children:(0,P.jsx)(u.Z,{className:"w-100"})})})]}),(0,P.jsx)(c.Z,{span:12,children:(0,P.jsx)(r.Z.Item,{label:C("image"),children:(0,P.jsx)(Z.Z,{type:"receipts",imageList:z,setImageList:V,form:I,multiple:!1})})})]}),(0,P.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,P.jsx)("div",{className:"pb-5",children:(0,P.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:S,disabled:S,children:C("submit")})})})]})})}},10320:(e,t,n)=>{n.d(t,{z:()=>a});const a=[{value:"delivery",label:"Delivery"},{value:"about",label:"About"},{value:"about_second",label:"About second"},{value:"about_three",label:"About third"}]},39180:(e,t,n)=>{n.d(t,{ZP:()=>I});var a=n(4942),l=n(87462),o=n(47313),r=n(56482),s=n(46123),i=n.n(s),c=n(16945),u=n(4431),d=n(91964),p=o.createContext(null),v=p.Provider;const m=p;var f=o.createContext(null),h=f.Provider,g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},b=function(e,t){var n,s=o.useContext(m),p=o.useContext(f),v=o.useContext(d.E_),h=v.getPrefixCls,b=v.direction,y=o.useRef(),x=(0,c.sQ)(t,y),Z=(0,o.useContext)(u.aM).isFormItemInput,j=e.prefixCls,k=e.className,_=e.children,C=e.style,w=g(e,["prefixCls","className","children","style"]),E=h("radio",j),P="button"===((null===s||void 0===s?void 0:s.optionType)||p)?"".concat(E,"-button"):E,N=(0,l.Z)({},w);s&&(N.name=s.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},N.checked=e.value===s.value,N.disabled=e.disabled||s.disabled);var O=i()("".concat(P,"-wrapper"),(n={},(0,a.Z)(n,"".concat(P,"-wrapper-checked"),N.checked),(0,a.Z)(n,"".concat(P,"-wrapper-disabled"),N.disabled),(0,a.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===b),(0,a.Z)(n,"".concat(P,"-wrapper-in-form-item"),Z),n),k);return o.createElement("label",{className:O,style:C,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.Z,(0,l.Z)({},N,{type:"radio",prefixCls:P,ref:x})),void 0!==_?o.createElement("span",null,_):null)},y=o.forwardRef(b);y.displayName="Radio";const x=y;var Z=n(29439),j=n(10288),k=n(21631),_=n(81176),C=o.forwardRef((function(e,t){var n=o.useContext(d.E_),r=n.getPrefixCls,s=n.direction,c=o.useContext(k.Z),u=(0,j.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),m=p[0],f=p[1];return o.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var l=e.onChange;l&&a!==n&&l(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,g=e.disabled,b=e.children,y=e.size,Z=e.style,j=e.id,k=e.onMouseEnter,C=e.onMouseLeave,w=r("radio",u),E="".concat(w,"-group"),P=b;v&&v.length>0&&(P=v.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:w,disabled:g,value:e,checked:m===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||g,value:e.value,checked:m===e.value,style:e.style},e.label)})));var N=y||c,O=i()(E,"".concat(E,"-").concat(h),(n={},(0,a.Z)(n,"".concat(E,"-").concat(N),N),(0,a.Z)(n,"".concat(E,"-rtl"),"rtl"===s),n),p);return o.createElement("div",(0,l.Z)({},(0,_.Z)(e),{className:O,style:Z,onMouseEnter:k,onMouseLeave:C,id:j,ref:t}),P)}())}));const w=o.memo(C);var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},P=function(e,t){var n=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=E(e,["prefixCls"]),s=n("radio",a);return o.createElement(h,{value:"button"},o.createElement(x,(0,l.Z)({prefixCls:s},r,{type:"radio",ref:t})))};const N=o.forwardRef(P);var O=x;O.Button=N,O.Group=w;const I=O},56482:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),l=n(4942),o=n(45987),r=n(1413),s=n(15671),i=n(43144),c=n(60136),u=n(54062),d=n(47313),p=n(46123),v=n.n(p),m=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,i.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,s=t.style,i=t.name,c=t.id,u=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,g=t.onFocus,b=t.onBlur,y=t.onKeyDown,x=t.onKeyPress,Z=t.onKeyUp,j=t.autoFocus,k=t.value,_=t.required,C=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),E=this.state.checked,P=v()(n,r,(e={},(0,l.Z)(e,"".concat(n,"-checked"),E),(0,l.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:P,style:s},d.createElement("input",(0,a.Z)({name:i,id:c,type:u,required:_,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!E,onClick:h,onFocus:g,onBlur:b,onKeyUp:Z,onKeyDown:y,onKeyPress:x,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},w)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m}}]);