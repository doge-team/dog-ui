"use strict";(self["webpackChunkdog_ui"]=self["webpackChunkdog_ui"]||[]).push([[574],{7359:function(e,o,l){l.d(o,{X:function(){return a}});var r=l(6980);const a=()=>{const e=(e,o)=>{o?r.z8.success(`${e}成功!`):r.z8.error(`${e}失败!`)};return{handleActionResult:e}}},3070:function(e,o,l){l.d(o,{A:function(){return a}});var r=l(6980);const a=({formRef:e,formDataHandler:o,formComp:l,shown:a,loading:n,action:t})=>{const u=async e=>{n.value=!0;const u=await l.value.onSubmit();if(o&&o(u),!u)return r.z8.error("请先完善表单信息!"),void(n.value=!1);const i="new"===t.value?await e.add(u):await e.update(u);i?(r.z8.success("保存成功"),a.value=!1):r.z8.error("保存失败"),n.value=!1},i=o=>{a.value=!0,e.value=o||{...e.value},t.value=o?"edit":"new"},s=()=>{e.value={},l.value.clearValidate(),t.value=null,n.value=!1},c=()=>{a.value=!1};return{onSubmit:u,onOpen:i,onClsoe:s,closeDialog:c}}},2878:function(e,o,l){l.d(o,{L:function(){return a}});const r={menu:{title:[{required:!0,message:"请输入标题!",trigger:"blur"}],order:[{required:!0,message:"请输入顺序!",trigger:"blur"}]},navigation:{menuId:[{required:!0,message:"请选择对应的菜单!",trigger:"change"}],description:[{required:!0,message:"请输入描述信息!",trigger:"blur"}],link:[{required:!0,message:"请输入导航链接!",trigger:"blur"}],openType:[{required:!0,message:"请选择打开链接的方式!",trigger:"change"}],title:[{required:!0,message:"请输入标题!",trigger:"blur"}],order:[{required:!0,message:"请输入顺序!",trigger:"blur"}]}},a=e=>{const o=()=>r[e];return{getFormRules:o}}},9665:function(e,o,l){l.d(o,{u:function(){return r}});const r=async e=>{try{const o=await e.value.validate();return o}catch(o){console.log(o)}}},5574:function(e,o,l){l.r(o),l.d(o,{default:function(){return R}});var r=l(2179),a=l(5905),n=l(3961),t=l(7359),u=l(964),i=l(4726),s=l(89),c=l(9421),d=l(6836),m=l(3070),p=l(2878),f=l(3004),g=(0,r.aZ)({__name:"menu-form",props:{form:Object},setup(e,{expose:o}){const l=e,{form:n}=(0,a.BK)(l),{getFormRules:t}=(0,p.L)("menu"),u=(0,a.qj)(t());return o({form:n,rules:u}),(e,o)=>{const l=(0,r.up)("el-input"),t=(0,r.up)("el-form-item");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(t,{prop:"title",label:"标题"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:(0,a.SU)(n).title,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,a.SU)(n).title=e)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(t,{prop:"order",label:"排序"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{modelValue:(0,a.SU)(n).order,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,a.SU)(n).order=e),type:"number"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(t,{prop:"icon",label:"图标"},{default:(0,r.w5)((()=>[(0,r.Wm)(f.Z,{form:(0,a.SU)(n),uploadFolder:"menu"},null,8,["form"])])),_:1})],64)}}}),v=l(7759);const w=(0,v.Z)(g,[["__scopeId","data-v-7801bafe"]]);var _=w;const b={class:"menu-dialog-container"},U={class:"dialog-footer"},y=(0,r.Uk)("确认"),S=(0,r.Uk)("取消");var k=(0,r.aZ)({__name:"menu-dialog",setup(e,{expose:o}){const l=(0,a.iH)(null),n=(0,a.iH)(null),t=(0,a.iH)(!1),i=(0,a.iH)(!1);let s=(0,a.iH)("new");const p=(0,a.iH)({icon:d.QT,order:0,title:""}),{onSubmit:f,onOpen:g,onClsoe:v,closeDialog:w}=(0,m.A)({formRef:p,formComp:l,shown:t,action:s,loading:i}),k=()=>f({add:e=>u.v.addMenu(e),update:e=>u.v.updateMenu(e)}),h=e=>g(e);return o({open:h}),(e,o)=>{const u=(0,r.up)("el-button"),s=(0,r.up)("el-dialog"),d=(0,r.Q2)("loading");return(0,r.wg)(),(0,r.j4)(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),title:"菜单",onClose:(0,a.SU)(v)},{footer:(0,r.w5)((()=>[(0,r._)("span",U,[(0,r.Wm)(u,{type:"primary",onClick:k},{default:(0,r.w5)((()=>[y])),_:1}),(0,r.Wm)(u,{onClick:(0,a.SU)(w)},{default:(0,r.w5)((()=>[S])),_:1},8,["onClick"])])])),default:(0,r.w5)((()=>[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",b,[(0,r.Wm)(c.Z,{ref_key:"formComp",ref:l,form:n.value?.form,rules:n.value?.rules},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{ref_key:"menuFormComp",ref:n,form:p.value},null,8,["form"])])),_:1},8,["form","rules"])])),[[d,i.value]])])),_:1},8,["modelValue","onClose"])}}});const h=k;var W=h;const C={class:"menu-container el-card is-hover-shadow"},D={class:"actions"},H=(0,r.Uk)("新增菜单"),F=["src"],V={key:0,class:"navgroup"},q={class:"nav"};var z=(0,r.aZ)({__name:"menu-manage",setup(e){const o=(0,a.iH)(null),l=(0,a.Fl)((()=>u.v.menus)),c=(0,a.Fl)((()=>u.v.loading)),d=(0,a.iH)([]),{handleActionResult:m}=(0,t.X)(),p=async()=>{await u.v.loadMenus()},f=async e=>{d[e]=!0;const o=await u.v.removeMenu(e);m("删除",o),d[e]=!1},g=e=>!(0,s.isEmpty)(e.row.navigationList),v=e=>{o.value.open(e)};return(0,r.wF)((async()=>{await p()})),(e,t)=>{const u=(0,r.up)("el-button"),s=(0,r.up)("el-table-column"),m=(0,r.up)("el-table"),p=(0,r.Q2)("loading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",D,[(0,r.Wm)(u,{type:"primary",onClick:t[0]||(t[0]=e=>v())},{default:(0,r.w5)((()=>[H])),_:1})]),(0,r.Wm)(m,{data:(0,a.SU)(l),stripe:"",style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{prop:"icon",label:"图标",width:"180"},{default:(0,r.w5)((e=>[(0,r._)("img",{src:e.row.icon,width:"24",style:{color:"white"}},null,8,F)])),_:1}),(0,r.Wm)(s,{prop:"title",label:"目录名",width:"180"}),(0,r.Wm)(s,{prop:"order",label:"顺序",width:"180"}),(0,r.Wm)(s,{prop:"navigationList",label:"导航"},{default:(0,r.w5)((e=>[g(e)?((0,r.wg)(),(0,r.iD)("div",V,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e?.row?.navigationList,(e=>((0,r.wg)(),(0,r.iD)("div",q,(0,n.zw)(e?.title)+", ",1)))),256))])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(s,{fixed:"right",label:"Operations",width:"120"},{default:(0,r.w5)((e=>[(0,r.Wm)(u,{type:"primary",icon:(0,a.SU)(i.I8b),circle:"",onClick:o=>v(e.row)},null,8,["icon","onClick"]),(0,r.Wm)(u,{type:"danger",icon:(0,a.SU)(i.HG3),circle:"",onClick:o=>f(e.row.id),loading:d.value[e.row.id]},null,8,["icon","onClick","loading"])])),_:1})])),_:1},8,["data"])])),[[p,(0,a.SU)(c)]]),(0,r.Wm)(W,{ref_key:"menuDialog",ref:o},null,512)],64)}}});const Z=z;var R=Z},3004:function(e,o,l){l.d(o,{Z:function(){return v}});var r=l(2179),a=l(5905),n=(l(2148),l(6980));const t=["imge/png","image/jpeg","image/jpg","image/gif"],u=e=>{const o=e=>t.includes(e.type)?(n.z8.error("上传文件格式不正确！"),!1):!(e.size/1024/1024>2)||(n.z8.error("文件大小最多2MB！"),!1),l=(o,l)=>{0===o.code?e.value.icon=o.data.path:n.z8.error("文件上传失败")};return{beforeAvatarUpload:o,onUploadSucceed:l}};var i=l(4726),s=l(6836),c=l(3121),d=l(8505);const m={class:"upload-container"},p=["src"];var f=(0,r.aZ)({__name:"doge-upload",props:{form:Object,uploadFolder:String},setup(e){const o=e,l=c.R["production"].baseUrl,n=c.R["production"].fileUrl,{form:t}=(0,a.BK)(o),f=(0,r.Fl)((()=>t?`${n}/${t.value.icon}`:s.QT)),g=(0,r.Fl)((()=>`${l}/file/${o.uploadFolder}/uploadFile`)),v={token:(0,d.LP)()},{beforeAvatarUpload:w,onUploadSucceed:_}=u(t);return(e,o)=>{const l=(0,r.up)("el-icon"),n=(0,r.up)("el-upload");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(n,{class:"avatar-uploader",action:(0,a.SU)(g),"show-file-list":!1,"on-success":(0,a.SU)(_),"before-upload":(0,a.SU)(w),headers:v},{default:(0,r.w5)((()=>[(0,a.SU)(t).icon?((0,r.wg)(),(0,r.iD)("img",{key:0,src:(0,a.SU)(f),class:"avatar"},null,8,p)):((0,r.wg)(),(0,r.j4)(l,{key:1,class:"avatar-uploader-icon"},{default:(0,r.w5)((()=>[(0,r.Wm)((0,a.SU)(i.v37))])),_:1}))])),_:1},8,["action","on-success","before-upload"])])}}});const g=f;var v=g},9421:function(e,o,l){l.d(o,{Z:function(){return s}});var r=l(2179),a=l(5905),n=l(9665),t=l(89),u=(0,r.aZ)({__name:"single-form",props:["form","rules"],setup(e,{expose:o}){const l=e,{form:u,rules:i}=(0,a.BK)(l),s=(0,a.iH)(),c=async()=>{const e=await(0,n.u)(s);return e?(0,t.cloneDeep)(u.value):null},d=()=>{s.value.clearValidate()};return o({onSubmit:c,clearValidate:d}),(e,o)=>{const l=(0,r.up)("el-form");return(0,r.wg)(),(0,r.j4)(l,{model:(0,a.SU)(u),rules:(0,a.SU)(i),"label-width":"120px",ref_key:"formRef",ref:s},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3},8,["model","rules"])}}});const i=u;var s=i}}]);
//# sourceMappingURL=574.5e4071d4.js.map