(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7401],{31247:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var a=l(47313),i=l(72652),n=l(15178),s=l(55291),r=l(82138),o=l(36104),d=l(24511),c=l(46417);const u=e=>{let{fileList:t=[],setFileList:l,type:u,id:p}=e;const{t:v}=(0,d.$)(),[m,x]=(0,a.useState)(!1),f=m?(0,c.jsx)(i.Z,{}):(0,c.jsx)(r.Z,{}),h=t.find((e=>e.id===p))||[];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.Z,{listType:"picture-card",fileList:(null===h||void 0===h?void 0:h.galleries)||(null===h||void 0===h?void 0:h.images),customRequest:e=>{let{file:a,onSuccess:i}=e;x(!0);const n=new FormData;n.append("image",a),n.append("type",u),o.Z.upload(n).then((e=>{let{data:a}=e;((e,a)=>{if(t.findIndex((t=>t.id===e))>=0){const i=t.map((t=>t.id===e?{id:e,images:[...t.images,a]}:t));l(i)}else l((t=>[...t,{id:e,images:[a]}]))})(p,(e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0}))(a)),i("ok")})).finally((()=>{x(!1)}))},onRemove:e=>{const a=t.map((t=>{if(t.id===p){const l=t.images.filter((t=>t.uid!==e.uid));return 0===l.length?null:{...t,images:l}}return t})).filter((e=>null!==e));l(a)},showUploadList:!0,accept:".png,.jpg,.jpeg,.webp",beforeUpload:e=>!!(e.size/1024/1024<2)||(s.ZP.error(v("max.2.mb")),!1),children:f})})}},33834:(e,t,l)=>{"use strict";l.d(t,{K:()=>s});var a=l(97890),i=l(74776),n=l.n(i);const s=()=>{const e=(0,a.s0)(),t=(0,a.TH)(),l=n().parse(t.search,{ignoreQueryPrefix:!0});return{values:l,set:(t,a)=>e({search:n().stringify({...l,[t]:a})}),reset:t=>{const a={...l};a[t]&&delete a[t],e({search:n().stringify({...a})})},clear:()=>e({search:n().stringify({})}),merge:t=>e({search:n().stringify({...l,...t})})}}},17899:(e,t,l)=>{"use strict";l.d(t,{Z:()=>i});var a=l(34344);const i={create:e=>a.Z.post("dashboard/admin/digital-files",e,{})}},86140:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>k});var a=l(47313),i=l(96077),n=l(83999),s=l(77181),r=l(72652),o=l(35321),d=l(78873),c=l(8597),u=l(47668),p=l(97307),v=l(73431),m=l(97890),x=l(17101),f=l(2717),h=l(90954),g=l(24511),j=l(33834),Z=l(87882),y=l(34144),S=l(46417);const{Step:b}=n.Z,k=()=>{var e,t,l,k,w;const{t:N}=(0,g.$)(),{uuid:F}=(0,m.UO)(),$=(0,j.K)(),{activeMenu:C}=(0,f.v9)((e=>e.menu),f.wU),{languages:L}=(0,f.v9)((e=>e.formLang),f.wU),M=(0,f.I0)(),U=Number((null===(e=$.values)||void 0===e?void 0:e.step)||0),[z,A]=(0,a.useState)(C.refetch),[E,_]=(0,a.useState)(i.S),{extras:I}=(null===C||void 0===C?void 0:C.data)||{},T=null===C||void 0===C||null===(t=C.data)||void 0===t?void 0:t.digital,P=null===I||void 0===I?void 0:I.some((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)})),R=(0,a.useMemo)((()=>null===I||void 0===I?void 0:I.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[I]),q=Array.from(new Set(null===R||void 0===R||null===(l=R.values)||void 0===l?void 0:l.map((e=>e.value)))).map((e=>{var t;return null===R||void 0===R||null===(t=R.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),B=()=>{const e=U+1;$.set("step",e)},D=()=>{const e=U-1;$.set("step",e)},G=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id}:null;function K(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,l=L.map((e=>{var l,a;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...l)}(0,a.useEffect)((()=>{C.refetch&&function(e){A(!0),x.Z.getById(e).then((e=>{const t={...e.data,...K(e.data),shop:G(e.data.shop),category:G(e.data.category),brand:G(e.data.brand),unit:G(e.data.unit),images:(l=e.data.galleries,l.map((e=>({uid:e.id,name:e.path,url:e.path})))),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};var l;M((0,h.nc)({activeMenu:C,data:t}))})).finally((()=>{A(!1),M((0,h.A_)(C))}))}(F)}),[C.refetch]);return(0,a.useEffect)((()=>{T?_(i.S.filter((e=>"product.extras"!==e.title))):!1===T&&_(i.S.filter((e=>"product.digital"!==e.title))),_(P?e=>e:e=>e.filter((e=>"Gallery"!==e.title)))}),[P,T]),(0,S.jsxs)(s.Z,{title:N("clone.product"),extra:(0,S.jsx)(v.Z,{}),children:[(0,S.jsx)(n.Z,{current:U,onChange:e=>{M((0,h.nc)({activeMenu:C,data:{...C.data,step:e}})),$.set("step",e)},children:i.S.map((e=>(0,S.jsx)(b,{title:N(e.title)},e.title)))}),z?(0,S.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,S.jsx)(r.Z,{size:"large",className:"py-5"})}):(0,S.jsxs)("div",{className:"steps-content",children:["First-content"===i.S[U].content&&(0,S.jsx)(p.Z,{next:B}),(null===(k=C.data)||void 0===k?void 0:k.digital)&&"Product-digital"===E[U].content&&(0,S.jsx)(Z.Z,{next:B,prev:D}),!(null!==(w=C.data)&&void 0!==w&&w.digital)&&"Second-content"===E[U].content&&(0,S.jsx)(u.Z,{next:B,prev:D}),"Third-content"===i.S[U].content&&(0,S.jsx)(c.Z,{next:B,prev:D}),(null===q||void 0===q?void 0:q.length)>0&&"Gallery-content"===i.S[U].content&&(0,S.jsx)(y.Z,{next:B,prev:D}),"Fourth-content"===i.S[U].content&&(0,S.jsx)(o.Z,{next:B,prev:D}),"Finish-content"===i.S[U].content&&(0,S.jsx)(d.Z,{prev:D})]})]})}},87882:(e,t,l)=>{"use strict";l.d(t,{Z:()=>v});l(47313);var a=l(77181),i=l(45705),n=l(59491),s=l(24511),r=l(91107),o=l(66736),d=l(23560),c=l(17899),u=l(2717),p=l(46417);function v(e){let{prev:t,next:l}=e;const{t:v}=(0,s.$)(),{activeMenu:m}=(0,u.v9)((e=>e.menu),u.wU);return(0,p.jsxs)(a.Z,{bordered:!1,className:"mb-0",children:[(0,p.jsxs)(r.Z,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{var t;let{file:l,onSuccess:a,onError:i}=e;const n=new FormData;n.append("file",l),n.append("active",1),n.append("product_id",null===(t=m.data)||void 0===t?void 0:t.id),c.Z.create(n).then((()=>{d.Am.success(v("successfully.import")),a("ok")})).catch((e=>{console.log("upload error",e),i("error"),d.Am.error(v("file.upload.error"))}))},accept:".zip",children:[(0,p.jsx)("p",{className:"ant-upload-drag-icon",children:(0,p.jsx)(o.Z,{})}),(0,p.jsx)("p",{className:"ant-upload-text",children:v("upload-drag")}),(0,p.jsx)("p",{className:"ant-upload-hint",children:v("upload-text")})]}),(0,p.jsxs)(i.Z,{className:"mt-3",children:[(0,p.jsx)(n.Z,{onClick:t,children:v("prev")}),(0,p.jsx)(n.Z,{type:"primary",onClick:l,children:v("next")})]})]})}},34144:(e,t,l)=>{"use strict";l.d(t,{Z:()=>j});var a=l(47313),i=l(69888),n=l(23885),s=l(77181),r=l(37388),o=l(45705),d=l(68197),c=l(59624),u=l(41068),p=l(46155),v=l(59491),m=l(34273),x=l(2717),f=l(31247),h=l(17101),g=l(46417);const j=e=>{var t;let{prev:l,next:j}=e;const[Z,y]=(0,a.useState)([]),{activeMenu:S}=(0,x.v9)((e=>e.menu),x.wU),{newExtras:b}=(null===S||void 0===S?void 0:S.data)||{},k=(0,a.useMemo)((()=>null===b||void 0===b?void 0:b.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[b]),w=Array.from(new Set(null===k||void 0===k||null===(t=k.values)||void 0===t?void 0:t.map((e=>e.value)))).map((e=>{var t;return null===k||void 0===k||null===(t=k.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),N=e=>({uid:e.path,name:e.path,status:"done",url:e.path,created:!0});return(0,a.useEffect)((()=>{(()=>{const e=S.data.stocks.map((e=>{let{id:t,galleries:l}=e;return{id:t,images:(null===l||void 0===l?void 0:l.map(N))||[]}}));y(e)})()}),[S.data]),(0,g.jsxs)(s.Z,{title:(0,g.jsx)(r.Z,{placement:"topLeft",title:"In the process of internal desktop applications development",children:(0,g.jsxs)(o.Z,{children:[(0,n.t)("add.media.file"),(0,g.jsx)(i.Z,{style:{fontSize:16,cursor:"pointer"}})]})}),children:[(0,g.jsx)(d.Z,{gutter:[24,24],children:null===w||void 0===w?void 0:w.map((e=>{let{label:t,stock_id:l,value:a}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.Z,{span:24,children:[(0,g.jsx)(o.Z,{className:"mb-4",children:(0,g.jsx)(u.Z,{color:t||a,className:"extras-color-badge",text:`${t||a} - ${(0,m.B)(t||a)}`})}),(0,g.jsx)(f.Z,{id:l,fileList:Z,setFileList:y,type:"stocks"})]}),(0,g.jsx)(p.Z,{})]})}))}),(0,g.jsxs)(o.Z,{className:"mt-4",children:[(0,g.jsx)(v.Z,{onClick:l,children:(0,n.t)("prev")}),(0,g.jsx)(v.Z,{type:"primary",htmlType:"submit",onClick:()=>{if(!Z.length)return void j();const e=Z.map((e=>({...e,images:e.images.map((e=>e.name))})));h.Z.updateStocks({data:e}).then((()=>{j()})).catch((e=>{console.log(e)}))},children:(0,n.t)("next")})]})]})}},24654:()=>{}}]);