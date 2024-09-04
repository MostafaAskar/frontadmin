"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[130],{73431:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(47313),l=a(39180),i=a(2717),r=a(28830),s=a(60535),o=a(46417);const c=()=>{const e=(0,i.I0)(),{languages:t,defaultLang:a}=(0,i.v9)((e=>e.formLang),i.wU);(0,n.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:a}=t;e((0,r.dc)(a)),e((0,r.mh)(a.find((e=>1===e.default)).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.ZP.Group,{value:a,onChange:t=>{let{target:{value:a}}=t;e((0,r.mh)(a))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,o.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},385:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(47313),l=a(10976),i=a(26824),r=a(68197),s=a(59624),o=a(45705),c=a(15178),d=a(9274),u=a(59491),m=a(82138),p=a(47515),v=a(5764),h=a(36104),f=a(24511),y=a(46417);const g=e=>{var t;let{mediaList:a,setMediaList:g,name:x="products"}=e;const{t:b}=(0,f.$)(),[Z]=l.Z.useForm(),[j,w]=(0,n.useState)(null),[C,k]=(0,n.useState)([]),[N,P]=(0,n.useState)(!1),[E,O]=(0,n.useState)(!1),I=async e=>{let{file:t,type:a}=e;t.name?(w("video"===a?(0,y.jsx)("video",{controls:!0,src:t.name,width:450,height:450}):(0,y.jsx)(i.Z,{src:t.name,width:"100%",height:450,alt:"preview-img"})),P(!0)):w(null)},_=e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0});return(0,y.jsxs)(r.Z,{gutter:[24,24],children:[(0,y.jsx)(s.Z,{span:24,children:(0,y.jsx)(o.Z,{className:"align-items-start",children:(0,y.jsx)(c.Z,{customRequest:e=>{let{file:t,onSuccess:a}=e;O(!0);const n=new FormData;n.append("image",t),n.append("type",x),h.Z.upload(n).then((e=>{let{data:t}=e;g((e=>({...e,images:[...e.images,{..._(t),isVideo:!0}]}))),a("ok")}))},accept:"video/*",listType:"text",className:"video-upload",multiple:!1,fileList:[],children:(0,y.jsxs)("div",{className:"media-upload",children:[(0,y.jsx)(m.Z,{})," ",(0,y.jsx)("span",{children:b("upload.video")})]})})})}),(0,y.jsx)(s.Z,{span:24,children:null===a||void 0===a||null===(t=a.previews)||void 0===t?void 0:t.map(((e,t)=>{var n,l;return(0,y.jsxs)(o.Z,{className:"uploaded-file",wrap:!0,children:[(0,y.jsx)("span",{className:"media-item",onClick:()=>I({type:"img",file:null===a||void 0===a?void 0:a.previews[t]}),children:null===a||void 0===a||null===(n=a.previews[t])||void 0===n?void 0:n.name}),(0,y.jsx)("span",{className:"media-item",onClick:()=>I({type:"video",file:null===a||void 0===a?void 0:a.images[t]}),children:null===a||void 0===a||null===(l=a.images[t])||void 0===l?void 0:l.name}),(0,y.jsx)(p.Z,{className:"delete-media-item",onClick:()=>(e=>{const t=a.images.filter(((t,a)=>{if(a!==e)return t})),n=a.previews.filter(((t,a)=>{if(a!==e)return t}));g({images:t,previews:n})})(t)})]})}))}),(0,y.jsx)(d.Z,{title:"Video Preview",visible:N,onCancel:()=>{P(!1)},footer:null,children:j}),(0,y.jsx)(d.Z,{title:"Preview image",visible:E,footer:null,children:(0,y.jsx)(l.Z,{form:Z,onFinish:()=>{g((e=>({...e,previews:[...e.previews,...C]}))),k([]),O(!1)},layout:"vertical",children:(0,y.jsxs)(r.Z,{gutter:[24,24],children:[(0,y.jsx)(s.Z,{span:24,children:(0,y.jsx)(l.Z.Item,{label:b("preview.image"),name:"preview-image",rules:[{required:!(null!==C&&void 0!==C&&C.length),message:b("required")}],children:(0,y.jsx)(v.Z,{type:x,imageList:C,setImageList:k,multiple:!1,text:"upload.image",form:Z})})}),(0,y.jsx)(s.Z,{span:24,className:"d-flex justify-content-end",children:(0,y.jsx)(u.Z,{type:"primary",onClick:()=>Z.submit(),children:b("save")})})]})})})]})}},75336:(e,t,a)=>{function n(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=e.map((e=>({[e.locale]:""===t[`${a}[${e.locale}]`]?void 0:t[`${a}[${e.locale}]`]})));return Object.assign({},...n)}a.d(t,{Z:()=>n})},30130:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(47313),l=a(2717),i=a(24511),r=a(10976),s=a(77181),o=a(72652),c=a(68197),d=a(59624),u=a(66672),m=a(74294),p=a(16124),v=a(86345),h=a(59491),f=a(97890),y=a(53213),g=a(23560),x=a(75336),b=a(73431),Z=a(90954),j=a(23885),w=a(5764),C=a(385),k=a(46417);const N=[{value:"main",label:(0,j.t)("main")},{value:"standard",label:(0,j.t)("standard")},{value:"main_top_banner",label:(0,j.t)("main_top_banner")},{value:"main_banner",label:(0,j.t)("main_banner")},{value:"main_left_banner",label:(0,j.t)("main_left_banner")},{value:"standard_top_banner",label:(0,j.t)("standard_top_banner")}],P=e=>{var t,a,j;let{id:P}=e;const{t:E}=(0,i.$)(),O=(0,l.I0)(),I=(0,f.s0)(),[_]=r.Z.useForm(),{activeMenu:q}=(0,l.v9)((e=>e.menu),l.wU),{defaultLang:F,languages:L}=(0,l.v9)((e=>e.formLang),l.wU),[S,M]=(0,n.useState)((null===(t=q.data)||void 0===t||null===(a=t.img)||void 0===a?void 0:a.filter((e=>!(null!==e&&void 0!==e&&e.isVideo))))||[]),[K,V]=(0,n.useState)((null===q||void 0===q||null===(j=q.data)||void 0===j?void 0:j.initialMediaFile)||{images:[],previews:[]}),$=(0,n.useMemo)((()=>[{value:"minute",label:E("minute")},{value:"hour",label:E("hour")},{value:"day",label:E("day")},{value:"month",label:E("month")},{value:"year",label:E("year")}]),[]),[U,B]=(0,n.useState)(!1),[D,R]=(0,n.useState)(!1),A=e=>{B(!0);const t="catalog/advert";y.Z.create(e).then((e=>{I(`/${t}`),g.Am.success(E("successfully.created")),O((0,Z.ph)({...q,nextUrl:t}))})).finally((()=>B(!1)))},T=e=>{B(!0);y.Z.update(P,e).then((e=>{I("/catalog/advert"),g.Am.success(E("successfully.updated")),O((0,Z.ph)({...q,nextUrl:"catalog/advert"}))})).finally((()=>B(!1)))};function z(e){if(!e)return{};const{translations:t}=e,a=L.map((e=>{var a,n;return{[`title[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}const G=e=>e.map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:Boolean(e.preview)}))),Q=e=>{const t={images:[],previews:[]},a=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.preview,url:e.preview}))),n=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:!0})));return t.previews=a,t.images=n,t};return(0,n.useEffect)((()=>{var e;P&&(e=P,R(!0),y.Z.getById(e).then((e=>{let t=e.data;const a={...t,time_type:{value:t.time_type,label:E(t.time_type)},img:G(t.galleries),initialMediaFile:Q(e.data.galleries),...z(t)};M(G(t.galleries).filter((e=>!e.isVideo))),V(Q(e.data.galleries)),_.setFieldsValue(a),O((0,Z.nc)({activeMenu:q,data:a}))})).finally((()=>{O((0,Z.A_)(q)),R(!1)})))}),[P]),D?(0,k.jsx)(s.Z,{title:E("edit.ad"),children:(0,k.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,k.jsx)(o.Z,{size:"large",className:"py-5"})})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{title:E(P?"edit.ad":"add.ad"),extra:(0,k.jsx)(b.Z,{})}),(0,k.jsx)(r.Z,{layout:"vertical",form:_,initialValues:{active:!0},onFinish:e=>{var t;const a=K.images.map((e=>e.name)),n=K.previews.map((e=>e.name)),l={...e,images:[...a,...S.map((e=>null===e||void 0===e?void 0:e.name))],previews:n,title:(0,x.Z)(L,e,"title"),description:(0,x.Z)(L,e,"description"),active:Number(e.active),time_type:e.time_type.value,type:(null===(t=e.type)||void 0===t?void 0:t.value)||e.type};P?T(l):A(l)},children:(0,k.jsxs)(c.Z,{gutter:[24,24],children:[(0,k.jsx)(d.Z,{span:12,children:(0,k.jsxs)(s.Z,{title:E("basic.info"),className:"h-100",children:[L.map((e=>(0,k.jsx)(r.Z.Item,{label:E("name"),name:`title[${e.locale}]`,rules:[{required:e.locale===F,message:E("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(E("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.length)<2?Promise.reject(new Error(E("min.2.letters"))):Promise.resolve()}],hidden:e.locale!==F,children:(0,k.jsx)(u.Z,{maxLength:50})},"title"+e.id))),L.map((e=>(0,k.jsx)(r.Z.Item,{label:E("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===F,message:E("required")},{validator:(e,t)=>t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(E("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(E("must.be.at.least.5"))):Promise.resolve()}],hidden:e.locale!==F,children:(0,k.jsx)(u.Z,{maxLength:150})},"description"+e.locale))),(0,k.jsx)(r.Z.Item,{label:E("type"),name:"type",rules:[{required:!0,message:E("required")}],children:(0,k.jsx)(m.Z,{labelInValue:!0,filterOption:!1,options:N})})]})}),(0,k.jsx)(d.Z,{span:12,children:(0,k.jsxs)(s.Z,{title:E("time.and.price"),className:"h-100",children:[(0,k.jsx)(r.Z.Item,{label:E("time.type"),name:"time_type",rules:[{required:!0,message:E("required")}],children:(0,k.jsx)(m.Z,{labelInValue:!0,filterOption:!1,options:$})}),(0,k.jsx)(r.Z.Item,{label:E("time"),name:"time",rules:[{required:!0,message:E("required")},{type:"number",min:0,message:E("must.be.positive")},{type:"number",max:32e3,message:E("must.be.less.than.32000")}],children:(0,k.jsx)(p.Z,{className:"w-100"})}),(0,k.jsx)(r.Z.Item,{label:E("price"),name:"price",rules:[{required:!0,message:E("required")},{type:"number",max:1e20,message:E("max.length.20")}],children:(0,k.jsx)(p.Z,{className:"w-100",min:0})}),(0,k.jsx)(r.Z.Item,{label:E("active"),name:"active",valuePropName:"checked",children:(0,k.jsx)(v.Z,{})})]})}),(0,k.jsx)(d.Z,{span:16,children:(0,k.jsx)(s.Z,{title:E("video"),className:"h-100",children:(0,k.jsx)(C.Z,{form:_,name:"other",mediaList:K,setMediaList:V})})}),(0,k.jsx)(d.Z,{span:8,children:(0,k.jsx)(s.Z,{title:E("media"),className:"h-100",children:(0,k.jsx)(r.Z.Item,{rules:[{required:!(null!==S&&void 0!==S&&S.length),message:E("required")}],name:"images",children:(0,k.jsx)(w.Z,{type:"other",imageList:S,setImageList:M,form:_,multiple:!1})})})}),(0,k.jsx)(d.Z,{span:24,className:"d-flex justify-content-end",children:(0,k.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:U,children:E("submit")})})]})})]})}},39180:(e,t,a)=>{a.d(t,{ZP:()=>_});var n=a(4942),l=a(87462),i=a(47313),r=a(56482),s=a(46123),o=a.n(s),c=a(16945),d=a(4431),u=a(91964),m=i.createContext(null),p=m.Provider;const v=m;var h=i.createContext(null),f=h.Provider,y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},g=function(e,t){var a,s=i.useContext(v),m=i.useContext(h),p=i.useContext(u.E_),f=p.getPrefixCls,g=p.direction,x=i.useRef(),b=(0,c.sQ)(t,x),Z=(0,i.useContext)(d.aM).isFormItemInput,j=e.prefixCls,w=e.className,C=e.children,k=e.style,N=y(e,["prefixCls","className","children","style"]),P=f("radio",j),E="button"===((null===s||void 0===s?void 0:s.optionType)||m)?"".concat(P,"-button"):P,O=(0,l.Z)({},N);s&&(O.name=s.name,O.onChange=function(t){var a,n;null===(a=e.onChange)||void 0===a||a.call(e,t),null===(n=null===s||void 0===s?void 0:s.onChange)||void 0===n||n.call(s,t)},O.checked=e.value===s.value,O.disabled=e.disabled||s.disabled);var I=o()("".concat(E,"-wrapper"),(a={},(0,n.Z)(a,"".concat(E,"-wrapper-checked"),O.checked),(0,n.Z)(a,"".concat(E,"-wrapper-disabled"),O.disabled),(0,n.Z)(a,"".concat(E,"-wrapper-rtl"),"rtl"===g),(0,n.Z)(a,"".concat(E,"-wrapper-in-form-item"),Z),a),w);return i.createElement("label",{className:I,style:k,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(r.Z,(0,l.Z)({},O,{type:"radio",prefixCls:E,ref:b})),void 0!==C?i.createElement("span",null,C):null)},x=i.forwardRef(g);x.displayName="Radio";const b=x;var Z=a(29439),j=a(10288),w=a(21631),C=a(81176),k=i.forwardRef((function(e,t){var a=i.useContext(u.E_),r=a.getPrefixCls,s=a.direction,c=i.useContext(w.Z),d=(0,j.Z)(e.defaultValue,{value:e.value}),m=(0,Z.Z)(d,2),v=m[0],h=m[1];return i.createElement(p,{value:{onChange:function(t){var a=v,n=t.target.value;"value"in e||h(n);var l=e.onChange;l&&n!==a&&l(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var a,d=e.prefixCls,u=e.className,m=void 0===u?"":u,p=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,y=e.disabled,g=e.children,x=e.size,Z=e.style,j=e.id,w=e.onMouseEnter,k=e.onMouseLeave,N=r("radio",d),P="".concat(N,"-group"),E=g;p&&p.length>0&&(E=p.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(b,{key:e.toString(),prefixCls:N,disabled:y,value:e,checked:v===e},e):i.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:N,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var O=x||c,I=o()(P,"".concat(P,"-").concat(f),(a={},(0,n.Z)(a,"".concat(P,"-").concat(O),O),(0,n.Z)(a,"".concat(P,"-rtl"),"rtl"===s),a),m);return i.createElement("div",(0,l.Z)({},(0,C.Z)(e),{className:I,style:Z,onMouseEnter:w,onMouseLeave:k,id:j,ref:t}),E)}())}));const N=i.memo(k);var P=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},E=function(e,t){var a=i.useContext(u.E_).getPrefixCls,n=e.prefixCls,r=P(e,["prefixCls"]),s=a("radio",n);return i.createElement(f,{value:"button"},i.createElement(b,(0,l.Z)({prefixCls:s},r,{type:"radio",ref:t})))};const O=i.forwardRef(E);var I=b;I.Button=O,I.Group=N;const _=I},56482:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(4942),i=a(45987),r=a(1413),s=a(15671),o=a(43144),c=a(60136),d=a(54062),u=a(47313),m=a(46123),p=a.n(m),v=function(e){(0,c.Z)(a,e);var t=(0,d.Z)(a);function a(e){var n;(0,s.Z)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.props,a=t.disabled,l=t.onChange;a||("checked"in n.props||n.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},n.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var l="checked"in e?e.checked:e.defaultChecked;return n.state={checked:l},n}return(0,o.Z)(a,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,r=t.className,s=t.style,o=t.name,c=t.id,d=t.type,m=t.disabled,v=t.readOnly,h=t.tabIndex,f=t.onClick,y=t.onFocus,g=t.onBlur,x=t.onKeyDown,b=t.onKeyPress,Z=t.onKeyUp,j=t.autoFocus,w=t.value,C=t.required,k=(0,i.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),P=this.state.checked,E=p()(a,r,(e={},(0,l.Z)(e,"".concat(a,"-checked"),P),(0,l.Z)(e,"".concat(a,"-disabled"),m),e));return u.createElement("span",{className:E,style:s},u.createElement("input",(0,n.Z)({name:o,id:c,type:d,required:C,readOnly:v,disabled:m,tabIndex:h,className:"".concat(a,"-input"),checked:!!P,onClick:f,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:x,onKeyPress:b,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:w},N)),u.createElement("span",{className:"".concat(a,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),a}(u.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);