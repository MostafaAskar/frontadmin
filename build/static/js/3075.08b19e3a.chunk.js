"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3075],{51988:(e,l,t)=>{t.d(l,{Z:()=>a});t(47313);var i=t(24511),n=t(66188);const o=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",d=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",r=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var s=t(46417);const a=function(e){let{id:l="noresult",text:t=""}=e;const{t:a}=(0,i.$)(),u={src:{noproductsfound:o,noresult:d,nosell:r}[l],artboard:"New Artboard",autoplay:!0},{RiveComponent:c}=(0,n.useRive)(u);return(0,s.jsxs)("div",{className:"animation-canvas",children:[(0,s.jsx)("div",{style:{width:"100%",height:200},children:(0,s.jsx)(c,{})}),(0,s.jsx)("div",{className:"text",children:a(t)})]})}},41481:(e,l,t)=>{t.d(l,{Z:()=>s});var i=t(47313),n=t(66672),o=t(16031),d=t(40765),r=t(46417);function s(e){let{handleChange:l,defaultValue:t,resetSearch:s,...a}=e;const[u,c]=(0,i.useState)(t),v=(0,i.useMemo)((()=>(0,o.debounce)((e=>{l(e)}),800)),[]);return(0,i.useEffect)((()=>{c(t)}),[s]),(0,r.jsx)(n.Z,{value:u,onChange:e=>{c(e.target.value),v(e.target.value)},prefix:(0,r.jsx)(d.Z,{}),...a})}},89281:(e,l,t)=>{t.d(l,{h:()=>a});var i=t(47313),n=t(12279),o=t.n(n),d=t(74294),r=t(72652),s=t(46417);const a=e=>{let{fetchOptions:l,debounceTimeout:t=400,onClear:n,refetchOptions:a=!1,...u}=e;const[c,v]=(0,i.useState)(!1),[h,x]=(0,i.useState)([]),p=(0,i.useMemo)((()=>o()((e=>{x([]),v(!0),l(e).then((e=>{x(e),v(!1)}))}),t)),[l,t]);return(0,s.jsx)(d.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),n&&n()},notFoundContent:c?(0,s.jsx)(r.Z,{size:"small"}):"no results",...u,options:h,onFocus:()=>{h.length&&!a||p("")}})}},77370:(e,l,t)=>{function i(e,l){for(var t=[],i=[],n="",o=0;o<(null===(d=e.stocks)||void 0===d?void 0:d.length);o++){var d;n="",e.stocks[o].extras.sort(((e,l)=>e.extra_group_id-l.extra_group_id));for(var r=0;r<(null===(s=e.stocks[o].extras)||void 0===s?void 0:s.length);r++){var s,a=Object.assign({},e.stocks[o].extras[r]),u=t.findIndex((e=>e.extra_value_id==a.extra_value_id));-1==u?(a.level=r,a.up=[n],t.push(a),n+=a.extra_value_id.toString()):(t[u].up.push(n),n+=a.extra_value_id.toString())}var c={id:e.stocks[o].id,extras:n,price:e.stocks[o].price,quantity:e.stocks[o].quantity,countable_id:e.stocks[o].countable_id,discount:e.stocks[o].discount,tax:e.stocks[o].tax,total_price:e.stocks[o].total_price,bonus:e.stocks[o].bonus};i.push(c)}return{stock:i,extras:t}}function n(e,l,t){for(var i=""==e?[]:e.split(","),n=[],o=[],d=0;d<=i.length;d++){d-1>=0&&(o[o.length]=i[d-1].toString());var r=l.filter((e=>{if(new Set(e.up).has(o.join("")))return e}));r.length>0&&n.push(r)}d=0;if(o.length<n.length)for(;d<l.length;){o[o.length]=n[n.length-1][0].extra_value_id.toString();let e=l.filter((e=>!!new Set(e.up).has(o.join(""))));if(0==e.length)break;n.push(e),d++}var s=t.findIndex((e=>e.extras==o.join("")));return{stock:t[s],extras:n}}t.d(l,{o:()=>i,y:()=>n})},28939:(e,l,t)=>{function i(e){var l;const t=null===e||void 0===e||null===(l=e.extras)||void 0===l?void 0:l.find((e=>"image"===e.group.type));return t?t.value:""}t.d(l,{Z:()=>i})},84017:(e,l,t)=>{function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?`${i} ${l}`:`${l} ${i}`}t.d(l,{Z:()=>i})},91220:(e,l,t)=>{function i(e,l){var t;const i=(null===l||void 0===l||null===(t=l.translation)||void 0===t?void 0:t.title)||"pcs";if(!e)return 0;switch(null===l||void 0===l?void 0:l.position){case"after":return e+" "+i;case"before":return i+" "+e}}t.d(l,{Z:()=>i})},85445:(e,l,t)=>{t.r(l),t.d(l,{default:()=>W});var i=t(47313),n=t(97890),o=t(77181),d=t(46155),r=t(68197),s=t(59624),a=t(45705),u=t(66204),c=t(59491),v=t(24511),h=t(62412),x=t(90954),p=t(2717),j=t(51282),m=t(80314),g=t(84017),Z=t(72652),f=t(51988),y=t(45464),b=t(66909),_=t(82138),w=t(95882),k=t(89281),S=t(30763),C=t(41481),q=t(9274),N=t(26824),P=t(83371),$=t(28939),I=t(91220),F=t(8846),M=t(77370),E=t(17101),U=t(46417);function O(e){var l,t,n,o;let{productData:d,setProductData:u}=e;const{t:h}=(0,v.$)(),j=(0,p.I0)(),{currency:m}=(0,p.v9)((e=>e.order.data),p.wU),{activeMenu:f}=(0,p.v9)((e=>e.menu),p.wU),[b,w]=(0,i.useState)({}),[k,S]=(0,i.useState)(!1),[C,O]=(0,i.useState)({}),[R,D]=(0,i.useState)([]),[z,A]=(0,i.useState)([]),[B,V]=(0,i.useState)([]),[T,H]=(0,i.useState)((null===b||void 0===b?void 0:b.quantity)||d.quantity||d.min_qty),[W,G]=(0,i.useState)({extras:[],stock:{id:0,quantity:1,price:0}}),J=()=>{u(null)},K=e=>{var l;return(null===W||void 0===W||null===(l=W.stock)||void 0===l?void 0:l[e||"price"])*T},L=e=>{var l;const t=R.findIndex((l=>l.extra_group_id===e.extra_group_id));let i=R;t>-1&&(i=i.slice(0,t)),i.push(e);const n=i.map((e=>e.extra_value_id)).join(",");var o=(0,M.y)(n,z,B);G(o),null===(l=o.extras)||void 0===l||l.forEach((l=>{const t=R.findIndex((t=>l[0].extra_group_id!==e.extra_group_id?t.extra_group_id===l[0].extra_group_id:t.extra_group_id===e.extra_group_id));if(l[0].level>=e.level){var n=l[0].extra_group_id!==e.extra_group_id?l[0]:e;-1===t?i.push(n):i[t]=n}})),D(i)};return(0,i.useEffect)((()=>{S(!0),E.Z.getById(d.uuid).then((e=>{var l;let{data:t}=e;w(t);const i=(0,M.o)(t,{});A(i.extras),H(t.quantity||t.min_qty),V(i.stock),G((0,M.y)(R,i.extras,i.stock)),null===(l=(0,M.y)("",i.extras,i.stock).extras)||void 0===l||l.forEach((e=>{D((l=>[...l,e[0]]))}))})).finally((()=>S(!1)))}),[d.uuid]),(0,i.useEffect)((()=>{null!==W&&void 0!==W&&W.stock&&O({...W.stock,extras:R})}),[W]),(0,U.jsx)(q.Z,{visible:!!d,onCancel:J,footer:[k?"":(0,U.jsx)(c.Z,{type:"primary",onClick:()=>{const e={stock:{...C,extras:R},quantity:T,id:C.id,img:(0,$.Z)(C)||(null===b||void 0===b?void 0:b.img),price:C.price,translation:null===b||void 0===b?void 0:b.translation};j((0,x.nc)({activeMenu:f,data:{newProduct:{...e}}})),u(null)},children:h("add")},"add-product"),(0,U.jsx)(c.Z,{type:"default",onClick:J,children:h("cancel")},"cancel-modal")],children:(0,U.jsxs)(Z.Z,{spinning:k,children:[(0,U.jsxs)(r.Z,{gutter:24,children:[(0,U.jsx)(s.Z,{span:8,children:(0,U.jsx)(N.Z,{src:(0,y.Z)((0,$.Z)(C)||(null===d||void 0===d?void 0:d.img)),alt:d.name,height:200,style:{objectFit:"contain"}})}),(0,U.jsx)(s.Z,{span:16,children:(0,U.jsxs)(P.Z,{title:null===(l=d.translation)||void 0===l?void 0:l.title,children:[(0,U.jsxs)(P.Z.Item,{label:h("price"),span:3,children:[(0,U.jsx)("div",{className:null!==C&&void 0!==C&&C.discount?"strike":"",children:(0,g.Z)(K(),m.symbol)}),null!==C&&void 0!==C&&C.discount?(0,U.jsx)("div",{className:"ml-2 font-weight-bold",children:(0,g.Z)(K("total_price"),m.symbol)}):""]}),(0,U.jsx)(P.Z.Item,{label:h("in.stock"),span:3,children:(0,I.Z)(null===C||void 0===C?void 0:C.quantity,null===b||void 0===b?void 0:b.unit)}),(0,U.jsx)(P.Z.Item,{label:h("tax"),span:3,children:(0,g.Z)(null===C||void 0===C?void 0:C.tax,m.symbol)})]})})]}),null!==W&&void 0!==W&&W.extras?null===W||void 0===W||null===(t=W.extras)||void 0===t?void 0:t.map(((e,l)=>(0,U.jsx)("div",{className:"extra-group",children:(0,U.jsx)(a.Z,{className:"extras-select",wrap:!0,children:null===e||void 0===e?void 0:e.map(((e,l)=>{var t,i,n,o;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)?(0,U.jsx)("span",{className:"extras-color-wrapper "+(R.find((l=>l.id===e.id))?"selected":""),onClick:()=>L(e),children:(0,U.jsx)("i",{className:"extras-color",style:{backgroundColor:null===e||void 0===e||null===(n=e.value)||void 0===n?void 0:n.value}})},"color"+l):"text"===(null===e||void 0===e||null===(i=e.group)||void 0===i?void 0:i.type)?(0,U.jsx)("span",{className:"extras-text rounded "+(R.find((l=>l.id===e.id))?"selected":""),onClick:()=>L(e),children:null===e||void 0===e||null===(o=e.value)||void 0===o?void 0:o.value},"text"+l):null}))})},"extra-group"+l))):null,(0,U.jsx)(a.Z,{direction:"vertical",size:"middle"}),(0,U.jsx)(r.Z,{gutter:12,className:"mt-3",children:(0,U.jsx)(s.Z,{span:24,children:(0,U.jsxs)(a.Z,{children:[(0,U.jsx)(c.Z,{type:"primary",icon:(0,U.jsx)(F.Z,{}),onClick:()=>{1!==T&&(T<=(null===b||void 0===b?void 0:b.min_qty)||H((e=>e-1)))}},"plus"),(T||1)*((null===d||void 0===d?void 0:d.interval)||1),null===d||void 0===d||null===(n=d.unit)||void 0===n||null===(o=n.translation)||void 0===o?void 0:o.title,(0,U.jsx)(c.Z,{type:"primary",icon:(0,U.jsx)(_.Z,{}),onClick:()=>{T!==b.max_qty&&H((e=>e+1))}},"minus")]})})})]})})}function R(){const{t:e}=(0,v.$)(),l=(0,p.I0)(),{products:t,loading:n}=(0,p.v9)((e=>e.product),p.wU),{myShop:d}=(0,p.v9)((e=>e.myShop),p.wU),[u,c]=(0,i.useState)(null),[h,x]=(0,i.useState)(null),[j,m]=(0,i.useState)(null),[g,q]=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e={perPage:10,page:1,brand_id:null===h||void 0===h?void 0:h.value,category_id:null===j||void 0===j?void 0:j.value,search:u,shop_id:null===d||void 0===d?void 0:d.id,active:1};l((0,w.q1)(e))}),[h,j,u]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(o.Z,{title:e("products"),className:"order-add",children:[(0,U.jsxs)(a.Z,{wrap:!0,className:"mb-4",children:[(0,U.jsx)(C.Z,{placeholder:e("search"),handleChange:e=>c(e),defaultValue:u}),(0,U.jsx)(k.h,{placeholder:e("select.category"),fetchOptions:async function(e){const l={search:e,type:"main",shop_id:null===d||void 0===d?void 0:d.id};return S.Z.search(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},style:{minWidth:150},onChange:e=>m(e),value:j})]}),0===t.length?(0,U.jsx)(s.Z,{span:24,children:(0,U.jsx)(f.Z,{id:"nosell"})}):(0,U.jsxs)("div",{className:"products-row order-items",children:[t.length?t.map((e=>{var l,t;return(0,U.jsxs)(o.Z,{className:"products-col",cover:(0,U.jsx)("img",{alt:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,src:(0,y.Z)(null===e||void 0===e?void 0:e.img)}),onClick:()=>q(e),children:[(0,U.jsx)(b.Z,{title:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title}),(0,U.jsx)("div",{className:"preview",children:(0,U.jsx)(_.Z,{})})]},e.id)})):(0,U.jsx)(r.Z,{children:(0,U.jsx)(s.Z,{span:24,children:(0,U.jsx)(f.Z,{id:"nosell"})})}),n&&(0,U.jsx)("div",{className:"loader",children:(0,U.jsx)(Z.Z,{})})]})]}),g&&(0,U.jsx)(O,{productData:g,setProductData:q})]})}function D(){var e,l,t,i,n,d,c,h,x,j,m,Z,f;const{t:y}=(0,v.$)(),{activeMenu:b}=(0,p.v9)((e=>e.menu),p.wU),{defaultCurrency:_}=(0,p.v9)((e=>e.currency),p.wU);return(0,U.jsx)(o.Z,{title:y("new.product"),children:(0,U.jsxs)(r.Z,{gutter:12,children:[(0,U.jsx)(s.Z,{span:4,style:{width:"100px",height:"250px"},children:(0,U.jsx)("div",{style:{display:"flex",width:"100%",height:"100%",objectFit:"contain",overflow:"hidden",borderRadius:"15px"},children:(0,U.jsx)("img",{src:null===(e=b.data)||void 0===e||null===(l=e.newProduct)||void 0===l?void 0:l.img,placeholder:!0,style:{width:"100%",height:"100%",objectFit:"contain"}})})}),(0,U.jsxs)(s.Z,{span:20,children:[(0,U.jsx)("h4",{children:null===(t=b.data)||void 0===t||null===(i=t.newProduct)||void 0===i||null===(n=i.translation)||void 0===n?void 0:n.title}),(0,U.jsxs)(a.Z,{children:[(0,U.jsxs)("p",{children:[y("quantity"),": "]}),(0,U.jsx)("p",{children:null===(d=b.data)||void 0===d||null===(c=d.newProduct)||void 0===c?void 0:c.quantity})]}),(0,U.jsx)("br",{}),(0,U.jsxs)(a.Z,{children:[(0,U.jsxs)("p",{children:[y("price"),": "]}),(0,U.jsx)("p",{children:(0,g.Z)(null===(h=b.data)||void 0===h||null===(x=h.newProduct)||void 0===x?void 0:x.price,null===_||void 0===_?void 0:_.symbol)})]}),(0,U.jsx)("br",{}),(0,U.jsx)(a.Z,{wrap:!0,children:null===(j=b.data)||void 0===j||null===(m=j.newProduct)||void 0===m||null===(Z=m.stock)||void 0===Z||null===(f=Z.extras)||void 0===f?void 0:f.map((e=>{var l,t,i;return"color"===(null===e||void 0===e||null===(l=e.group)||void 0===l?void 0:l.type)?(0,U.jsx)("span",{style:{display:"block",width:"30px",height:"30px",backgroundColor:null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.value,border:"2px solid #909091",borderRadius:"50%"}},null===e||void 0===e?void 0:e.id):(0,U.jsx)(u.Z,{children:null===e||void 0===e||null===(i=e.value)||void 0===i?void 0:i.value},null===e||void 0===e?void 0:e.id)}))})]})]})})}var z=t(66672),A=t(10976),B=t(16124);const{TextArea:V}=z.Z;function T(e){let{showModal:l,setShowModal:t,handleSubmit:n,userData:o}=e;const{t:d}=(0,v.$)(),[a]=A.Z.useForm(),{before_order_phone_required:u}=(0,p.v9)((e=>e.globalSettings.settings),p.wU);console.log("before_order_phone_required",u);const[h,x]=(0,i.useState)(!1);return(0,U.jsx)(q.Z,{visible:l,title:d("note"),onCancel:()=>t(!1),footer:[(0,U.jsx)(c.Z,{type:"primary",onClick:()=>a.submit(),loading:h,children:d("submit")},"submit-modal"),(0,U.jsx)(c.Z,{type:"default",onClick:()=>t(null),children:d("cancel")},"cancel-modal")],children:(0,U.jsx)(A.Z,{form:a,layout:"vertical",onFinish:e=>{x(!0),n(e).finally((()=>x(!1)))},initialValues:{phone:null===o||void 0===o?void 0:o.phone},children:(0,U.jsxs)(r.Z,{children:[(0,U.jsx)(s.Z,{span:24,children:(0,U.jsx)(A.Z.Item,{label:d("note"),name:"note",rules:[{required:!0,message:d("required")},{validator:(e,l)=>l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(d("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<3?Promise.reject(new Error(d("must.be.at.least.3"))):Promise.resolve()}],children:(0,U.jsx)(V,{rows:4,className:"w-100"})})}),"1"===u&&(0,U.jsx)(s.Z,{span:24,children:(0,U.jsx)(A.Z.Item,{label:d("phone.number"),name:"phone",rules:[{required:!0,message:d("required")},{validator:(e,l)=>l<0?Promise.reject(new Error(d("must.be.positive"))):Promise.resolve()}],children:(0,U.jsx)(B.Z,{className:"w-100",addonBefore:"+",parser:e=>parseInt(e,10),disabled:!(null===o||void 0===o||!o.phone)})})})]})})})}var H=t(23560);function W(){var e,l,t,Z,f,y,b,_,w,k;const{t:S}=(0,v.$)(),C=(0,p.I0)(),q=(0,n.s0)(),{order_id:N,stock_id:P}=(0,n.UO)(),{activeMenu:$}=(0,p.v9)((e=>e.menu),p.wU),{defaultCurrency:I}=(0,p.v9)((e=>e.currency),p.wU),[F,M]=(0,i.useState)(!1),[E,O]=(0,i.useState)({}),[z,A]=(0,i.useState)(!1),B=()=>{M(!0),h.Z.getById(N).then((e=>{var l;let{data:t}=e;const i=null===t||void 0===t||null===(l=t.details)||void 0===l?void 0:l.filter((e=>(null===e||void 0===e?void 0:e.stock_id)===Number(P)));O({...i[0],user:null===t||void 0===t?void 0:t.user})})).finally((()=>{M(!1),C((0,x.A_)($))}))};(0,i.useEffect)((()=>{B()}),[N]),(0,m.Z)((()=>{$.refetch&&B()}),[$.refetch]);return(0,U.jsxs)(U.Fragment,{children:[F?(0,U.jsx)(j.Z,{}):(0,U.jsxs)(o.Z,{children:[(0,U.jsx)(R,{}),(0,U.jsx)(d.Z,{}),(0,U.jsx)(o.Z,{title:S("old.product"),bordered:!0,children:(0,U.jsxs)(r.Z,{gutter:12,children:[(0,U.jsx)(s.Z,{span:4,style:{width:"100px",height:"250px"},children:(0,U.jsx)("div",{style:{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden",borderRadius:"15px"},children:(0,U.jsx)("img",{src:null===E||void 0===E||null===(e=E.stock)||void 0===e||null===(l=e.product)||void 0===l?void 0:l.img,placeholder:!0,style:{width:"100%",height:"100%",objectFit:"contain"}})})}),(0,U.jsxs)(s.Z,{span:20,children:[(0,U.jsx)("h4",{children:null===E||void 0===E||null===(t=E.stock)||void 0===t||null===(Z=t.product)||void 0===Z||null===(f=Z.translation)||void 0===f?void 0:f.title}),(0,U.jsxs)(a.Z,{children:[(0,U.jsxs)("p",{children:[S("quantity"),": "]}),(0,U.jsx)("p",{children:null===E||void 0===E?void 0:E.quantity})]}),(0,U.jsx)("br",{}),(0,U.jsxs)(a.Z,{children:[(0,U.jsxs)("p",{children:[S("price"),": "]}),(0,U.jsx)("p",{children:(0,g.Z)(null===E||void 0===E||null===(y=E.stock)||void 0===y?void 0:y.price,null===I||void 0===I?void 0:I.symbol)})]}),(0,U.jsx)("br",{}),(0,U.jsx)(a.Z,{wrap:!0,children:null===E||void 0===E||null===(b=E.stock)||void 0===b||null===(_=b.extras)||void 0===_?void 0:_.map((e=>{var l,t,i;return"color"===(null===e||void 0===e||null===(l=e.group)||void 0===l?void 0:l.type)?(0,U.jsx)("span",{style:{display:"block",width:"30px",height:"30px",backgroundColor:null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.value,border:"2px solid #909091",borderRadius:"50%"}},null===e||void 0===e?void 0:e.id):(0,U.jsx)(u.Z,{children:null===e||void 0===e||null===(i=e.value)||void 0===i?void 0:i.value},null===e||void 0===e?void 0:e.id)}))})]})]})}),(0,U.jsx)(d.Z,{}),(null===(w=$.data)||void 0===w?void 0:w.newProduct)&&(0,U.jsx)(D,{}),(0,U.jsx)(a.Z,{wrap:!0,children:(0,U.jsx)(c.Z,{type:"primary",disabled:!(null!==(k=$.data)&&void 0!==k&&k.newProduct),onClick:()=>A(!0),children:S("next")})})]},`${N} ${P}`),z&&(0,U.jsx)(T,{showModal:z,setShowModal:A,handleSubmit:e=>{var l,t,i,n,o,d;const r=`seller/order/details/${N}`,s={products:[{replace_note:null===e||void 0===e?void 0:e.note,replace_stock_id:null===E||void 0===E||null===(l=E.stock)||void 0===l?void 0:l.id,replace_quantity:null===E||void 0===E?void 0:E.quantity,stock_id:null===(t=$.data)||void 0===t||null===(i=t.newProduct)||void 0===i||null===(n=i.stock)||void 0===n?void 0:n.id,quantity:null===(o=$.data)||void 0===o||null===(d=o.newProduct)||void 0===d?void 0:d.quantity}],currency_id:null===I||void 0===I?void 0:I.id,phone:`${null===e||void 0===e?void 0:e.phone}`};return null!==e&&void 0!==e&&e.phone||delete s.phone,h.Z.replaceProduct(N,s).then((()=>{A(!1),H.Am.success(S("successfully.replaced")),(0,p.dC)((()=>{C((0,x.ph)({...$,nextUrl:r})),C((0,x.xo)($))})),q(`/${r}`)}))},userData:null===E||void 0===E?void 0:E.user})]})}},8846:(e,l,t)=>{t.d(l,{Z:()=>s});var i=t(1413),n=t(47313);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};var d=t(17469),r=function(e,l){return n.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:l,icon:o}))};r.displayName="MinusOutlined";const s=n.forwardRef(r)}}]);