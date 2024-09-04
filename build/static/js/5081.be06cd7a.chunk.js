"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5081],{52008:(e,l,t)=>{t.d(l,{Z:()=>i});t(47313);const i=t.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},89281:(e,l,t)=>{t.d(l,{h:()=>d});var i=t(47313),n=t(12279),a=t.n(n),o=t(74294),s=t(72652),r=t(46417);const d=e=>{let{fetchOptions:l,debounceTimeout:t=400,onClear:n,refetchOptions:d=!1,...c}=e;const[u,v]=(0,i.useState)(!1),[h,p]=(0,i.useState)([]),f=(0,i.useMemo)((()=>a()((e=>{p([]),v(!0),l(e).then((e=>{p(e),v(!1)}))}),t)),[l,t]);return(0,r.jsx)(o.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:f,onClear:()=>{f(""),n&&n()},notFoundContent:u?(0,r.jsx)(s.Z,{size:"small"}):"no results",...c,options:h,onFocus:()=>{h.length&&!d||f("")}})}},13945:(e,l,t)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(l,{Z:()=>i})},84017:(e,l,t)=>{function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?`${i} ${l}`:`${l} ${i}`}t.d(l,{Z:()=>i})},14637:(e,l,t)=>{t.d(l,{Z:()=>a});t(47313);var i=t(77181),n=t(46417);function a(e){let{title:l="Orders",value:t=0,color:a="grey",onClick:o}=e;return(0,n.jsx)(i.Z,{className:"statistics-card",hoverable:!!o,onClick:o,children:(0,n.jsxs)("div",{className:"card-wrapper",children:[(0,n.jsx)("div",{className:"space"}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("h1",{className:"number",children:t})}),(0,n.jsx)("span",{className:`highlighter ${a}`}),l&&(0,n.jsx)("h4",{className:"title",children:l})]})})}},85081:(e,l,t)=>{t.r(l),t.d(l,{default:()=>E});var i=t(47313),n=t(99096),a=t(77181),o=t(45705),s=t(59491),r=t(68197),d=t(59624),c=t(78508),u=t(97890),v=t(2717),h=t(90954),p=t(24511),f=t(80314),x=t(13945),m=t(84017),y=t(89281),_=t(49986),j=t(23560),Z=t(70816),g=t.n(Z),b=t(53149),w=t(10924),k=t(71122),C=t(9274),Y=t(72652),M=t(52008),N=t(26672),S=t(92709),D=t(57864),$=t(20637),z=t(58821),I=t(46417);function A(e){let{open:l,onCancel:t,onConfirm:n,isPaying:o}=e;const{t:c}=(0,p.$)(),[u,v]=(0,i.useState)({}),[h,f]=(0,i.useState)(null),[x,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{!async function(){m(!0),$.Z.getAll().then((e=>{let{data:l}=e;return f(l.map((e=>({label:e.tag||"no name",value:e.id,key:e.id}))))})).finally((()=>{m(!1)}))}()}),[]);const y=e=>{switch(e){case"wallet":return(0,I.jsx)(D.dk2,{size:80});case"paypal":return(0,I.jsx)(N.kD0,{size:80});case"stripe":return(0,I.jsx)(S.K6C,{size:80});case"razorpay":return(0,I.jsx)(S.r98,{size:80});case"paystack":return(0,I.jsx)("img",{src:M.Z,alt:"img",width:"80",height:"80"});default:return(0,I.jsx)(z.HsN,{size:80})}};return(0,I.jsx)(C.Z,{visible:l,title:c("pay.to.partner"),onCancel:t,footer:[(0,I.jsx)(s.Z,{type:"primary",disabled:x||!u.value,loading:o,onClick:()=>{u.value?n(u.value):j.Am.warning(c("please.select.payment.type"))},children:c("confirm")},"save-btn"),(0,I.jsx)(s.Z,{type:"default",onClick:t,children:c("cancel")},"cancel-btn")],children:(0,I.jsx)(Y.Z,{spinning:x,children:(0,I.jsx)(r.Z,{gutter:12,children:null===h||void 0===h?void 0:h.map(((e,l)=>"cash"===e.label||"wallet"===e.label?(0,I.jsx)(d.Z,{span:12,children:(0,I.jsxs)(a.Z,{style:{display:"flex",justifyContent:"center"},className:"payment-card "+((null===u||void 0===u?void 0:u.label)===e.label?"active":""),onClick:()=>{v(e)},children:[(0,I.jsx)("div",{className:"payment-icon",children:y(null===e||void 0===e?void 0:e.label)}),(0,I.jsx)("div",{className:"font-weight-bold mt-2 text-center",children:c(null===e||void 0===e?void 0:e.label)})]})},l):null))})})})}var P=t(14637);const{RangePicker:O}=n.Z;function E(){var e,l,t,n,Z,C,Y;const{type:M}=(0,u.UO)(),N=(0,v.I0)(),S=(0,u.s0)(),{t:D}=(0,p.$)(),{defaultCurrency:$}=(0,v.v9)((e=>e.currency),v.wU),[z,E]=(0,i.useState)(!1),F=[{title:D("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0,render:e=>(0,I.jsxs)("span",{className:"text-hover",onClick:()=>(e=>{N((0,h.bL)({url:`order/details/${e}`,id:"order_details",name:D("order.details")})),S(`/order/details/${e}`)})(e),children:["#",e]})},{title:D(M),is_show:!0,dataIndex:"user",key:"user",render:(e,l)=>{var t;const i="seller"===M?null===l||void 0===l||null===(t=l.shop)||void 0===t?void 0:t.seller:l.deliveryman;return(0,I.jsxs)("div",{children:[null===i||void 0===i?void 0:i.firstname," ",(null===i||void 0===i?void 0:i.lastname)||""]})}},{title:D("order.total_price"),is_show:!0,dataIndex:"total_price",key:"total_price",render:(e,l)=>{var t,i;const n=null===(t=l.transaction)||void 0===t?void 0:t.status;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{children:(0,m.Z)(e,$.symbol)}),(0,I.jsx)("br",{}),(0,I.jsx)("span",{className:"progress"===n?"text-primary":"paid"===n?"text-success":"rejected"===n?"text-danger":"text-info",children:null===(i=l.transaction)||void 0===i?void 0:i.status})]})}},..."seller"===M?[{title:D("coupon.price"),is_show:!0,dataIndex:"coupon_price",key:"coupon_price",render:e=>(0,m.Z)(e)}]:[],..."seller"===M?[{title:D("total.cashback"),is_show:!0,dataIndex:"point_histories",key:"point_histories",render:e=>{var l;return(0,m.Z)(null===e||void 0===e||null===(l=e[0])||void 0===l?void 0:l.price)}}]:[],{title:D("delivery.fee"),is_show:!0,dataIndex:"delivery_fee",key:"delivery_fee",render:e=>(0,m.Z)(e)},..."seller"===M?[{title:D("service.fee"),is_show:!0,dataIndex:"service_fee",key:"service_fee",render:(e,l)=>(0,m.Z)((l.service_fee||0)+(l.commission_fee||0))}]:[],..."seller"===M?[{title:D("seller.fee"),is_show:!0,dataIndex:"seller_fee",key:"seller_fee",render:e=>(0,m.Z)(e)}]:[],{title:D("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:e=>{var l;return D(null===e||void 0===e||null===(l=e.payment_system)||void 0===l?void 0:l.tag)||"-"}}],{activeMenu:U}=(0,v.v9)((e=>e.menu),v.wU),[K,R]=(0,i.useState)(null),[T,H]=(0,i.useState)(!1),[L,V]=(0,i.useState)(g()().subtract(1,"month"),g()()),{list:q,loading:B,params:G,meta:J}=(0,v.v9)((e=>e.paymentToPartners),v.wU),Q=U.data,W={search:null===Q||void 0===Q?void 0:Q.search,sort:null===Q||void 0===Q?void 0:Q.sort,column:null===Q||void 0===Q?void 0:Q.column,perPage:null===Q||void 0===Q?void 0:Q.perPage,page:null===Q||void 0===Q?void 0:Q.page,user_id:null===Q||void 0===Q?void 0:Q.user_id,shop_id:null!==(null===(e=U.data)||void 0===e?void 0:e.shop_id)?null===(l=U.data)||void 0===l?void 0:l.shop_id:null,date_from:Array.isArray(L)?null===(t=L[0])||void 0===t?void 0:t.format("YYYY-MM-DD"):g()().subtract(1,"month").format("YYYY-MM-DD"),date_to:Array.isArray(L)?null===(n=L[1])||void 0===n?void 0:n.format("YYYY-MM-DD"):g()().format("YYYY-MM-DD"),type:M};(0,f.Z)((()=>{N((0,w.EZ)(W))}),[Q,L,M]);const X=(e,l)=>{N((0,h.nc)({activeMenu:U,data:{...Q,[l]:e}}))};(0,i.useEffect)((()=>{null!==U&&void 0!==U&&U.refetch&&(N((0,w.EZ)(W)),N((0,h.A_)(U)))}),[null===U||void 0===U?void 0:U.refetch]);const ee={selectedRowKeys:K,onChange:e=>{R(e)}};return(0,i.useEffect)((()=>()=>{N((0,h.nc)({activeMenu:U,data:{}}))}),[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a.Z,{children:(0,I.jsxs)("div",{className:"flex justify-content-space-between",children:[(0,I.jsxs)(o.Z,{wrap:!0,className:"order-filter",style:{flex:1,width:"100%"},children:[(0,I.jsx)(y.h,{placeholder:D("select.shop"),fetchOptions:async function(e){const l={search:e,status:"approved"};return b.Z.getAll(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:null===(l=e.translation)||void 0===l?void 0:l.title,value:e.id}}))}))},style:{width:"100%"},onSelect:e=>X(e.value,"shop_id"),onDeselect:()=>X(null,"shop_id"),allowClear:!0,value:null===Q||void 0===Q?void 0:Q.shop_id}),(0,I.jsx)(y.h,{placeholder:D("select.user"),fetchOptions:async function(e){const l={search:e,perPage:10,role:M};return _.Z.search(l).then((e=>{let{data:l}=e;return l.map((e=>({label:`${e.firstname} ${e.lastname}`,value:e.id})))}))},onSelect:e=>X(e.value,"user_id"),onDeselect:()=>X(null,"user_id"),style:{width:"100%"},value:null===Q||void 0===Q?void 0:Q.user_id}),(0,I.jsx)(O,{value:L,onChange:e=>{X((l=>{var t,i;return{...l,date_from:null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.format("YYYY-MM-DD")}})),V(e)},disabledDate:e=>e&&e>g()().endOf("day"),style:{width:"100%"}})]}),(0,I.jsx)(s.Z,{type:"primary",disabled:!K||0===K.length,onClick:()=>E(!0),children:D("pay")})]})}),(0,I.jsx)(a.Z,{children:(0,I.jsxs)(r.Z,{gutter:16,className:"mt-3",children:[(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("commission.fee"),value:(0,m.Z)(null===q||void 0===q?void 0:q.total_commission_fee,null===$||void 0===$?void 0:$.symbol),color:"purple"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("coupon"),value:(0,m.Z)(null===q||void 0===q?void 0:q.total_coupon,null===$||void 0===$?void 0:$.symbol),color:"red"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("delivery.fee"),value:(0,m.Z)(null!==q&&void 0!==q&&q.total_delivery_fee?Math.trunc(null===q||void 0===q?void 0:q.total_delivery_fee):0,null===$||void 0===$?void 0:$.symbol),color:"green"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("point.history"),value:(0,m.Z)(null!==q&&void 0!==q&&q.total_point_history?Math.trunc(null===q||void 0===q?void 0:q.total_point_history):0,null===$||void 0===$?void 0:$.symbol),color:"purple"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("price"),value:(0,m.Z)(null!==q&&void 0!==q&&q.total_price?Math.trunc(null===q||void 0===q?void 0:q.total_price):0,null===$||void 0===$?void 0:$.symbol),color:"red"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("seller.fee"),value:(0,m.Z)(null!==q&&void 0!==q&&q.total_seller_fee?Math.trunc(null===q||void 0===q?void 0:q.total_seller_fee):0,null===$||void 0===$?void 0:$.symbol),color:"purple"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("service.fee"),value:(0,m.Z)(null!==q&&void 0!==q&&q.total_service_fee?Math.trunc(null===q||void 0===q?void 0:q.total_service_fee):0,null===$||void 0===$?void 0:$.symbol),color:"red"})}),(0,I.jsx)(d.Z,{flex:"0 0 25%",children:(0,I.jsx)(P.Z,{title:D("tax"),value:(0,m.Z)(null!==q&&void 0!==q&&q.total_tax?Math.trunc(null===q||void 0===q?void 0:q.total_tax):0,null===$||void 0===$?void 0:$.symbol),color:"green"})})]})}),(0,I.jsx)(a.Z,{children:(0,I.jsx)(c.Z,{scroll:{x:!0},rowSelection:ee,columns:null===F||void 0===F?void 0:F.filter((e=>e.is_show)),dataSource:null===q||void 0===q?void 0:q.data,loading:B,pagination:{pageSize:G.perPage,page:(null===(Z=U.data)||void 0===Z?void 0:Z.page)||1,total:null===J||void 0===J?void 0:J.total,defaultCurrent:null===(C=U.data)||void 0===C?void 0:C.page,current:null===(Y=U.data)||void 0===Y?void 0:Y.page},rowKey:e=>null===e||void 0===e?void 0:e.id,onChange:function(e,l,t){const{pageSize:i,current:n}=e,{field:a,order:o}=t,s=(0,x.Z)(o);N((0,h.nc)({activeMenu:U,data:{...Q,perPage:i,page:n,column:a,sort:s}}))}})}),z&&(0,I.jsx)(A,{open:z,onCancel:()=>{E(!1),R(null)},onConfirm:e=>(e=>{H(!0);const l={data:K,type:M,payment_id:e};k.Z.pay(l).then((()=>{j.Am.success(D("successfully.payed")),N((0,w.EZ)(W))})).finally((()=>{R(null),H(!1),E(!1)}))})(e),isPaying:T})]})}}}]);