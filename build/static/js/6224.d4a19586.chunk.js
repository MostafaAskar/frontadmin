"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6224],{13944:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(47313),i=r(77181),l=r(58446),n=r(27834),a=r(33533),o=r(46417);const d={position:"absolute",zIndex:"1"},c={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:r,width:u,height:h,xAxis:v,customOptions:p,card:x,type:m,extra:g,direction:f,bodyClass:y}=e,j=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return a.jd;case"bar":return a.B0;case"area":return a.fT;case"pie":return a.LB}})(m)));const Z=window.innerWidth<768,b=()=>{if(w.current){var e;const t=w.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight=`${Z?0:null===(e=_.current)||void 0===e?void 0:e.offsetWidth}px`,"rtl"===f&&(t.style.right="auto",t.style.left="0"),Z&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,s.useEffect)((()=>{b()}),[]);const _=(0,s.useRef)(null),w=(0,s.useRef)();j.xaxis={categories:v},p&&(j={...j,...p});const z=()=>(0,o.jsx)(n.ZP,{onResize:void setTimeout((()=>{b()}),600),children:(0,o.jsx)("div",{style:"rtl"===f?{direction:"ltr"}:{},className:"chartRef",ref:w,children:(0,o.jsx)(l.Z,{options:j,type:m,series:r,width:u,height:h})})});return(0,o.jsx)(o.Fragment,{children:x?(0,o.jsx)(i.Z,{children:(0,o.jsxs)("div",{className:`position-relative ${y}`,children:[(0,o.jsx)("div",{style:Z?{}:d,children:t})&&(0,o.jsx)("h4",{className:"font-weight-bold",style:Z?{}:d,children:t}),g&&(0,o.jsx)("div",{ref:_,style:Z?{}:c,children:g}),z()]})}):z()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},53233:(e,t,r)=>{r.d(t,{Z:()=>x});var s=r(47313),i=r(56140),l=r(67251),n=r(45705),a=r(86345),o=r(78267),d=r(37388),c=r(59491),u=r(99587),h=r(24511),v=r(46417);const{Text:p}=i.Z,x=e=>{let{columns:t=[],setColumns:r,style:i,size:x="",iconOnly:m}=e;const{t:g}=(0,h.$)(),[f,y]=(0,s.useState)(!1),j=(0,v.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(l.Z.Item,{children:(0,v.jsxs)(n.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(a.Z,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));r(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(o.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{y(e)},visible:f,children:(0,v.jsx)(d.Z,{title:g("change.columns"),children:(0,v.jsx)(c.Z,{style:{...i},size:x,icon:(0,v.jsx)(u.Z,{}),children:m?null:g("Columns")})})})}},22133:(e,t,r)=>{r.d(t,{Z:()=>y});var s=r(56140),i=r(68197),l=r(59624),n=r(77181),a=r(45705),o=r(74294),d=r(46155),c=r(47313),u=r(16034),h=r(88038),v=r(13944),p=r(33533),x=r(24511),m=r(93131),g=r(46417);const{Title:f}=s.Z,y=e=>{let{reportData:t={}}=e;const{by_time:r,options:s,handleByTime:y,chart_type:j,setChartType:Z}=(0,c.useContext)(m.G),{t:b}=(0,x.$)(),_=(0,c.useMemo)((()=>{var e;return null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>e.time))}),[null===t||void 0===t?void 0:t.chart]),w=(0,c.useMemo)((()=>{var e;return Boolean(t.charts)?t.charts.map((e=>{var t;return{name:e.translation.title,data:(null===(t=e.stocks)||void 0===t?void 0:t.map((e=>e.total_order_quantity||e.avg_quantity||e.quantity||e.count||e.price||e.order_details_sum_quantity||0)))||[]}})):[{name:b("orders"),data:(null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>parseInt(e.count||e.total_price||e.quantity||e.price||e.products_count||e.order_details_avg_quantity||e.order_details_avg_total_price||e.order_details_sum_quantity||e.avg_price||e.avg_quantity||0,10))))||[]}]}),[null===t||void 0===t?void 0:t.chart]);return(0,g.jsx)(i.Z,{gutter:24,children:(0,g.jsx)(l.Z,{span:24,children:(0,g.jsxs)(n.Z,{children:[(0,g.jsx)(i.Z,{gutter:24,className:"w-100",children:(0,g.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[(0,g.jsx)(a.Z,{size:"large",className:"d-flex",children:(0,g.jsx)(f,{level:3,className:"mb-0",children:b("item.sold")})}),(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)(o.Z,{style:{width:100},onChange:y,options:s,defaultValue:r}),(0,g.jsx)(d.Z,{type:"vertical",style:{height:"100%"}}),(0,g.jsxs)(a.Z,{children:[(0,g.jsx)(u.Z,{style:{fontSize:"22px",cursor:"pointer",color:"area"===j?"green":""},onClick:()=>Z("area")}),(0,g.jsx)(h.Z,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===j?"green":""},onClick:()=>Z("bar")})]})]})]})}),(0,g.jsx)(d.Z,{}),(0,g.jsx)(v.Z,{type:j||"area",card:!1,series:w,xAxis:_,height:280,customOptions:{colors:[p.DM[1],p.DM[2],p.DM[3],p.DM[4],p.DM[5],p.DM[6],p.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}}})]})})})}},89281:(e,t,r)=>{r.d(t,{h:()=>d});var s=r(47313),i=r(12279),l=r.n(i),n=r(74294),a=r(72652),o=r(46417);const d=e=>{let{fetchOptions:t,debounceTimeout:r=400,onClear:i,refetchOptions:d=!1,...c}=e;const[u,h]=(0,s.useState)(!1),[v,p]=(0,s.useState)([]),x=(0,s.useMemo)((()=>l()((e=>{p([]),h(!0),t(e).then((e=>{p(e),h(!1)}))}),r)),[t,r]);return(0,o.jsx)(n.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),i&&i()},notFoundContent:u?(0,o.jsx)(a.Z,{size:"small"}):"no results",...c,options:v,onFocus:()=>{v.length&&!d||x("")}})}},33533:(e,t,r)=>{r.d(t,{B0:()=>n,DM:()=>s,LB:()=>a,fT:()=>l,jd:()=>i});const s=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],i={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...s],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},l={...i},n={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...s],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}}},a={colors:[...s],plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},84017:(e,t,r)=>{function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const s=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===r?`${s} ${t}`:`${t} ${s}`}r.d(t,{Z:()=>s})},76224:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var s=r(56140),i=r(99096),l=r(59491),n=r(66204),a=r(78267),o=r(67251),d=r(72652),c=r(68197),u=r(59624),h=r(45705),v=r(77181),p=r(78508),x=r(47313),m=r(90954),g=r(2717),f=r(22133),y=r(70816),j=r.n(y),Z=r(93131),b=r(53233),_=r(97890),w=r(24511),z=r(97806),C=r(80314),N=r(84017),k=(r(89281),r(53149),r(46417));const{Text:I,Title:q}=s.Z,{RangePicker:S}=i.Z,M=()=>{const e=(0,g.I0)(),t=(0,_.s0)(),{t:r}=(0,w.$)(),{date_from:s,date_to:i,by_time:y,chart:M,handleChart:O,handleDateRange:$}=(0,x.useContext)(Z.G),{activeMenu:V}=(0,g.v9)((e=>e.menu),g.wU),{loading:H,chartData:D,productList:T}=(0,g.v9)((e=>e.orderReport),g.wU),{defaultCurrency:F}=(0,g.v9)((e=>e.currency),g.wU),[R,L]=(0,x.useState)(),[A,B]=(0,x.useState)([{title:"Order #",dataIndex:"id",key:"id",is_show:!0,render:(e,t)=>(0,k.jsxs)(l.Z,{type:"primary",onClick:()=>E(t),children:["#",t.id]})},{title:"Status",dataIndex:"items_sold",key:"items_sold",is_show:!0,render:(e,t)=>(0,k.jsx)(n.Z,{children:t.status})},{title:"Customer",dataIndex:"user_firstname",key:"user_firstname",is_show:!0,render:(e,t)=>(0,k.jsx)(k.Fragment,{children:`${t.firstname} ${t.lastname}`})},{title:"Customer type",key:"user_active",dataIndex:"user_active",is_show:!0,render:(e,t)=>{const r=Boolean(t.active);return(0,k.jsx)(n.Z,{color:r?"green":"red",children:r?"Active":"Inactive"},t.id)}},{title:"Product(s)",key:"category",dataIndex:"category",is_show:!0,render:(e,t)=>{var r,s,i;return(null===(r=t.products)||void 0===r?void 0:r.length)>1?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{children:t.products[0]}),(0,k.jsx)(a.Z,{overlay:(0,k.jsx)(o.Z,{children:null===(s=t.products)||void 0===s?void 0:s.slice(1,t.products.length).map(((e,t)=>(0,k.jsx)(o.Z.Item,{children:e},t)))}),children:(0,k.jsx)(n.Z,{style:{cursor:"pointer"},children:`+ ${(null===(i=t.products)||void 0===i?void 0:i.length)-1} more`})})]}):(0,k.jsx)(k.Fragment,{children:t.products[0]})}},{title:"Item sold",key:"item_sold",dataIndex:"item_sold",sorter:(e,t)=>Number(e.quantity)-Number(t.quantity),is_show:!0,render:(e,t)=>Number(t.quantity)},{title:"Net sales",key:"price",dataIndex:"price",is_show:!0,sorter:(e,t)=>e.price-t.price,render:(e,t)=>(0,k.jsx)(k.Fragment,{children:(0,N.Z)(t.price,null===F||void 0===F?void 0:F.symbol)})}]),P=[{label:"Item sold",value:"quantity",price:!1,qty:"quantity"},{label:"Net sales",value:"price",price:!0,qty:"price"},{label:"Avg Order price",value:"avg_price",price:!0,qty:"avg_price"},{label:"Orders",value:"count",price:!1,qty:"count"}],E=s=>{const i=`seller/order/details/${s.id}`;e((0,m.K0)({url:i,id:"order_details",name:r("order.details"),refetch:!0,data:{}})),t(`/${i}`)},W=()=>{if(P.find((e=>e.value===M))){const t={date_from:s,date_to:i,type:y,chart:M,shop_id:null===R||void 0===R?void 0:R.value};e((0,z.Cx)(t))}},U=(t,r)=>{e((0,z.c0)({date_from:s,date_to:i,by_time:y,chart:M,page:1,perPage:10,shop_id:null===R||void 0===R?void 0:R.value}))};(0,x.useEffect)((()=>{O(P[0].value)}),[]),(0,x.useEffect)((()=>{V.refetch&&(U(),W(),e((0,m.A_)(V)))}),[V.refetch]),(0,C.Z)((()=>{U()}),[i,y,M,s,null===R||void 0===R?void 0:R.value]),(0,C.Z)((()=>{W()}),[i,y,M,s,null===R||void 0===R?void 0:R.value]);return(0,k.jsxs)(d.Z,{size:"large",spinning:H,children:[(0,k.jsx)(c.Z,{gutter:24,className:"mb-3",children:(0,k.jsx)(u.Z,{span:12,children:(0,k.jsx)(h.Z,{size:"large",children:(0,k.jsx)(S,{defaultValue:[j()(s),j()(i)],onChange:$})})})}),(0,k.jsx)(c.Z,{gutter:24,className:"report-products",children:null===P||void 0===P?void 0:P.map(((e,t)=>(0,k.jsx)(u.Z,{span:6,onClick:()=>O(e.value),children:(0,k.jsxs)(v.Z,{className:M===e.value&&"active",children:[(0,k.jsx)(c.Z,{className:"mb-5",children:(0,k.jsx)(u.Z,{children:(0,k.jsx)(I,{children:e.label})})}),(0,k.jsx)(c.Z,{gutter:24,children:(0,k.jsx)(u.Z,{span:18,children:(0,k.jsx)(q,{level:2,children:e.price?(0,N.Z)(D[e.qty],null===F||void 0===F?void 0:F.symbol):D[e.qty]})})})]})},e.label)))}),(0,k.jsx)(f.Z,{reportData:D,chart_data:"price_avg"}),(0,k.jsx)(c.Z,{gutter:24,children:(0,k.jsx)(u.Z,{span:24,children:(0,k.jsxs)(v.Z,{children:[(0,k.jsxs)(h.Z,{className:"d-flex justify-content-between",children:[(0,k.jsx)(I,{level:3,children:"Orders"}),(0,k.jsx)(h.Z,{className:"d-flex justify-content-end",children:(0,k.jsx)(b.Z,{columns:A,setColumns:B})})]}),(0,k.jsx)(p.Z,{columns:null===A||void 0===A?void 0:A.filter((e=>e.is_show)),dataSource:null===T||void 0===T?void 0:T.data,rowKey:e=>e.id,loading:H,pagination:{pageSize:null===T||void 0===T?void 0:T.per_page,page:(null===T||void 0===T?void 0:T.current_page)||1,total:null===T||void 0===T?void 0:T.total,defaultCurrent:1},onChange:e=>{const{pageSize:t,current:r}=e;U()},scroll:{x:1200}})]})})})]})}},16034:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(1413),i=r(47313);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};var n=r(17469),a=function(e,t){return i.createElement(n.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:l}))};a.displayName="LineChartOutlined";const o=i.forwardRef(a)},99587:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(1413),i=r(47313);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var n=r(17469),a=function(e,t){return i.createElement(n.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:l}))};a.displayName="TableOutlined";const o=i.forwardRef(a)}}]);