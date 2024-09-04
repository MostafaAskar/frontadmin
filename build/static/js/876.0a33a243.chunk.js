"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[876],{73431:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(47313),l=o(39180),a=o(2717),i=o(28830),d=o(60535),r=o(46417);const s=()=>{const e=(0,a.I0)(),{languages:t,defaultLang:o}=(0,a.v9)((e=>e.formLang),a.wU);(0,n.useEffect)((()=>{d.Z.getAllActive().then((t=>{let{data:o}=t;e((0,i.dc)(o)),e((0,i.mh)(o.find((e=>1===e.default)).locale))}))}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.ZP.Group,{value:o,onChange:t=>{let{target:{value:o}}=t;e((0,i.mh)(o))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,r.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},90876:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var n=o(47313),l=o(83999),a=o(10976),i=o(77181),d=o(97890),r=o(2717),s=o(73431),u=o(24511),c=o(29395),v=o(53456),m=o(35233),p=o(69096),f=o(33834),y=o(90954),h=o(17649),g=o(70816),_=o.n(g),b=o(90486),x=o(70250),Z=o(23560),C=o(8550),k=o(51282),E=o(46417);const{Step:j}=l.Z;function w(){var e,t,o,g,w,O,S,F,N,P,M,D;const{t:I}=(0,u.$)(),[K]=a.Z.useForm(),{id:Y}=(0,d.UO)(),U=(0,f.K)(),H=(0,r.I0)(),L=(0,d.s0)(),{activeMenu:B}=(0,r.v9)((e=>e.menu),r.wU),{settings:A}=(0,r.v9)((e=>e.globalSettings),r.wU),{defaultCurrency:R}=(0,r.v9)((e=>e.currency),r.wU),T=Number((null===(e=U.values)||void 0===e?void 0:e.step)||0),[V,q]=(0,n.useState)(!1),[z,G]=(0,n.useState)(!1),[J,$]=(0,n.useState)((null===B||void 0===B||null===(t=B.data)||void 0===t?void 0:t.images)||[]),[Q,W]=(0,n.useState)(null!==B&&void 0!==B&&null!==(o=B.data)&&void 0!==o&&o.location_from?{lat:parseFloat(null===B||void 0===B||null===(g=B.data)||void 0===g||null===(w=g.location_from)||void 0===w?void 0:w.latitude),lng:parseFloat(null===B||void 0===B||null===(O=B.data)||void 0===O||null===(S=O.location_from)||void 0===S?void 0:S.longitude)}:(0,h.Z)(A)),[X,ee]=(0,n.useState)(null!==B&&void 0!==B&&null!==(F=B.data)&&void 0!==F&&F.location_to?{lat:parseFloat(null===B||void 0===B||null===(N=B.data)||void 0===N||null===(P=N.location_to)||void 0===P?void 0:P.latitude),lng:parseFloat(null===B||void 0===B||null===(M=B.data)||void 0===M||null===(D=M.location_to)||void 0===D?void 0:D.longitude)}:(0,h.Z)(A));(0,n.useEffect)((()=>()=>{const e=K.getFieldsValue(!0),t=JSON.stringify(e.delivery_date),o=JSON.stringify(e.delivery_time),n={...e,date:t,time:o};H((0,y.nc)({activeMenu:B,data:n}))}),[]);const te=()=>{const e=T+1;U.set("step",e)},oe=()=>{const e=T-1;U.set("step",e)};(0,n.useEffect)((()=>{B.refetch&&Y&&(e=>{q(!0),b.Z.getById(e).then((e=>{var t,o,n,l,a,i,d,r,s,u,c,v,m,p,f,h,g,b,x,Z,k,E,j,w;let O=e.data;$([(0,C.Z)(O.img)]),W({lat:null===O||void 0===O||null===(t=O.address_from)||void 0===t?void 0:t.latitude,lng:null===O||void 0===O||null===(o=O.address_from)||void 0===o?void 0:o.longitude}),ee({lat:null===O||void 0===O||null===(n=O.address_to)||void 0===n?void 0:n.latitude,lng:null===O||void 0===O||null===(l=O.address_to)||void 0===l?void 0:l.longitude});const S={...O,image:[(0,C.Z)(O.img)],delivery_time:null!==O&&void 0!==O&&O.delivery_date?_()(null===O||void 0===O?void 0:O.delivery_date,"YYYY-MM-DD HH:mm:ss"):null,delivery_date:null!==O&&void 0!==O&&O.delivery_date?_()(O.delivery_date,"YYYY-MM-DD"):null,address_from:null===O||void 0===O||null===(a=O.address_from)||void 0===a?void 0:a.address,address_to:null===O||void 0===O||null===(i=O.address_to)||void 0===i?void 0:i.address,house_from:null===O||void 0===O||null===(d=O.address_from)||void 0===d?void 0:d.house,house_to:null===O||void 0===O||null===(r=O.address_to)||void 0===r?void 0:r.house,stage_from:null===O||void 0===O||null===(s=O.address_from)||void 0===s?void 0:s.stage,stage_to:null===O||void 0===O||null===(u=O.address_to)||void 0===u?void 0:u.stage,room_from:null===O||void 0===O||null===(c=O.address_from)||void 0===c?void 0:c.room,room_to:null===O||void 0===O||null===(v=O.address_to)||void 0===v?void 0:v.room,user_from:{label:[null===(m=O.user)||void 0===m?void 0:m.firstname,null===(p=O.user)||void 0===p?void 0:p.lastname].join(" "),value:null===(f=O.user)||void 0===f?void 0:f.id,key:null===(h=O.user)||void 0===h?void 0:h.id},type:{label:null===(g=O.type)||void 0===g?void 0:g.type,value:null===(b=O.type)||void 0===b?void 0:b.id,key:null===(x=O.type)||void 0===x?void 0:x.id},payment_type:{label:I(null===O||void 0===O||null===(Z=O.transaction)||void 0===Z?void 0:Z.payment_system.tag),value:null===O||void 0===O||null===(k=O.transaction)||void 0===k||null===(E=k.payment_system)||void 0===E?void 0:E.id,key:null===O||void 0===O||null===(j=O.transaction)||void 0===j||null===(w=j.payment_system)||void 0===w?void 0:w.id}};K.setFieldsValue(S),H((0,y.nc)({activeMenu:B,data:S}))})).finally((()=>{q(!1),H((0,y.A_)(B))}))})(Y)}),[B.refetch]);return(0,E.jsxs)(i.Z,{title:I(Y?"edit.parcel.order":"add.parcel.order"),extra:(0,E.jsx)(s.Z,{}),children:[(0,E.jsx)(l.Z,{current:T,onChange:e=>{U.set("step",e)},children:c.S.map((e=>(0,E.jsx)(j,{title:I(e.title)},e.title)))}),(0,E.jsx)("div",{className:"steps-content",children:V?(0,E.jsx)(k.Z,{}):(0,E.jsxs)(a.Z,{form:K,name:"parcel-create",layout:"vertical",onFinish:e=>{var t,o,n;G(!0);const l=null===(t=_()(e.delivery_time,"HH:mm").format("HH:mm"))||void 0===t?void 0:t.split(":"),a=new Date(e.delivery_date);a.setHours(Number(l[0])),a.setMinutes(Number(l[1]));const i={user_id:null===(o=e.user_from)||void 0===o?void 0:o.value,currency_id:null===R||void 0===R?void 0:R.id,type_id:null===(n=e.type)||void 0===n?void 0:n.value,rate:null===R||void 0===R?void 0:R.rate,phone_from:e.phone_from.toString(),username_from:e.username_from,address_from:{longitude:null===Q||void 0===Q?void 0:Q.lng,latitude:null===Q||void 0===Q?void 0:Q.lat,address:e.address_from,house:e.house_from,stage:e.stage_from,room:e.room_from},phone_to:e.phone_to.toString(),username_to:e.username_to,address_to:{longitude:null===X||void 0===X?void 0:X.lng,latitude:null===X||void 0===X?void 0:X.lat,address:e.address_to,house:e.house_to,stage:e.stage_to,room:e.room_to},delivery_date:_()(a).format("YYYY-MM-DD HH:mm"),note:e.note,images:J.map((e=>e.name))},d="parcel-orders";b.Z.update(Y,i).then((()=>{H((0,x.LF)()),Z.Am.success(I("successfully.created")),H((0,y.ph)({...B,nextUrl:d})),L(`/${d}`)})).finally((()=>G(!1)))},initialValues:{...B.data},onFinishFailed:e=>{const t=["","",""];e.errorFields.map((e=>e.name[0])).forEach((e=>{e.includes("_from")?t[0]="sender.details.invalid":e.includes("_to")?t[1]="receiver.details.invalid":t[2]="parcel.details.invalid"})),t.forEach((e=>{e&&Z.Am.error(I(e))}))},children:[(0,E.jsx)("div",{className:"First-content"===c.S[T].content?"":"d-none",children:(0,E.jsx)(v.Z,{form:K,next:te,location:Q,setLocation:W})}),(0,E.jsx)("div",{className:"Second-content"===c.S[T].content?"":"d-none",children:(0,E.jsx)(m.Z,{form:K,next:te,prev:oe,location:X,setLocation:ee})}),(0,E.jsx)("div",{className:"Third-content"===c.S[T].content?"":"d-none",children:(0,E.jsx)(p.Z,{form:K,loading:z,prev:oe,locationFrom:Q,locationTo:X,image:J,setImage:$})})]})})]})}},39180:(e,t,o)=>{o.d(t,{ZP:()=>N});var n=o(4942),l=o(87462),a=o(47313),i=o(56482),d=o(46123),r=o.n(d),s=o(16945),u=o(4431),c=o(91964),v=a.createContext(null),m=v.Provider;const p=v;var f=a.createContext(null),y=f.Provider,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o},g=function(e,t){var o,d=a.useContext(p),v=a.useContext(f),m=a.useContext(c.E_),y=m.getPrefixCls,g=m.direction,_=a.useRef(),b=(0,s.sQ)(t,_),x=(0,a.useContext)(u.aM).isFormItemInput,Z=e.prefixCls,C=e.className,k=e.children,E=e.style,j=h(e,["prefixCls","className","children","style"]),w=y("radio",Z),O="button"===((null===d||void 0===d?void 0:d.optionType)||v)?"".concat(w,"-button"):w,S=(0,l.Z)({},j);d&&(S.name=d.name,S.onChange=function(t){var o,n;null===(o=e.onChange)||void 0===o||o.call(e,t),null===(n=null===d||void 0===d?void 0:d.onChange)||void 0===n||n.call(d,t)},S.checked=e.value===d.value,S.disabled=e.disabled||d.disabled);var F=r()("".concat(O,"-wrapper"),(o={},(0,n.Z)(o,"".concat(O,"-wrapper-checked"),S.checked),(0,n.Z)(o,"".concat(O,"-wrapper-disabled"),S.disabled),(0,n.Z)(o,"".concat(O,"-wrapper-rtl"),"rtl"===g),(0,n.Z)(o,"".concat(O,"-wrapper-in-form-item"),x),o),C);return a.createElement("label",{className:F,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a.createElement(i.Z,(0,l.Z)({},S,{type:"radio",prefixCls:O,ref:b})),void 0!==k?a.createElement("span",null,k):null)},_=a.forwardRef(g);_.displayName="Radio";const b=_;var x=o(29439),Z=o(10288),C=o(21631),k=o(81176),E=a.forwardRef((function(e,t){var o=a.useContext(c.E_),i=o.getPrefixCls,d=o.direction,s=a.useContext(C.Z),u=(0,Z.Z)(e.defaultValue,{value:e.value}),v=(0,x.Z)(u,2),p=v[0],f=v[1];return a.createElement(m,{value:{onChange:function(t){var o=p,n=t.target.value;"value"in e||f(n);var l=e.onChange;l&&n!==o&&l(t)},value:p,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var o,u=e.prefixCls,c=e.className,v=void 0===c?"":c,m=e.options,f=e.buttonStyle,y=void 0===f?"outline":f,h=e.disabled,g=e.children,_=e.size,x=e.style,Z=e.id,C=e.onMouseEnter,E=e.onMouseLeave,j=i("radio",u),w="".concat(j,"-group"),O=g;m&&m.length>0&&(O=m.map((function(e){return"string"===typeof e||"number"===typeof e?a.createElement(b,{key:e.toString(),prefixCls:j,disabled:h,value:e,checked:p===e},e):a.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:j,disabled:e.disabled||h,value:e.value,checked:p===e.value,style:e.style},e.label)})));var S=_||s,F=r()(w,"".concat(w,"-").concat(y),(o={},(0,n.Z)(o,"".concat(w,"-").concat(S),S),(0,n.Z)(o,"".concat(w,"-rtl"),"rtl"===d),o),v);return a.createElement("div",(0,l.Z)({},(0,k.Z)(e),{className:F,style:x,onMouseEnter:C,onMouseLeave:E,id:Z,ref:t}),O)}())}));const j=a.memo(E);var w=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o},O=function(e,t){var o=a.useContext(c.E_).getPrefixCls,n=e.prefixCls,i=w(e,["prefixCls"]),d=o("radio",n);return a.createElement(y,{value:"button"},a.createElement(b,(0,l.Z)({prefixCls:d},i,{type:"radio",ref:t})))};const S=a.forwardRef(O);var F=b;F.Button=S,F.Group=j;const N=F},56482:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(87462),l=o(4942),a=o(45987),i=o(1413),d=o(15671),r=o(43144),s=o(60136),u=o(54062),c=o(47313),v=o(46123),m=o.n(v),p=function(e){(0,s.Z)(o,e);var t=(0,u.Z)(o);function o(e){var n;(0,d.Z)(this,o),(n=t.call(this,e)).handleChange=function(e){var t=n.props,o=t.disabled,l=t.onChange;o||("checked"in n.props||n.setState({checked:e.target.checked}),l&&l({target:(0,i.Z)((0,i.Z)({},n.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var l="checked"in e?e.checked:e.defaultChecked;return n.state={checked:l},n}return(0,r.Z)(o,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,o=t.prefixCls,i=t.className,d=t.style,r=t.name,s=t.id,u=t.type,v=t.disabled,p=t.readOnly,f=t.tabIndex,y=t.onClick,h=t.onFocus,g=t.onBlur,_=t.onKeyDown,b=t.onKeyPress,x=t.onKeyUp,Z=t.autoFocus,C=t.value,k=t.required,E=(0,a.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),j=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),w=this.state.checked,O=m()(o,i,(e={},(0,l.Z)(e,"".concat(o,"-checked"),w),(0,l.Z)(e,"".concat(o,"-disabled"),v),e));return c.createElement("span",{className:O,style:d},c.createElement("input",(0,n.Z)({name:r,id:s,type:u,required:k,readOnly:p,disabled:v,tabIndex:f,className:"".concat(o,"-input"),checked:!!w,onClick:y,onFocus:h,onBlur:g,onKeyUp:x,onKeyDown:_,onKeyPress:b,onChange:this.handleChange,autoFocus:Z,ref:this.saveInput,value:C},j)),c.createElement("span",{className:"".concat(o,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,i.Z)((0,i.Z)({},t),{},{checked:e.checked}):null}}]),o}(c.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=p}}]);