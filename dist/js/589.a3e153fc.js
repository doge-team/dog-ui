"use strict";(self["webpackChunkdog_ui"]=self["webpackChunkdog_ui"]||[]).push([[589],{9665:function(e,l,a){a.d(l,{u:function(){return u}});const u=async e=>{try{const l=await e.value.validate();return l}catch(l){console.log(l)}}},3589:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var u=a(2179),n=a(1775),o=a(5905),s=a(5816),t=a(5382),r=a(9904),c=a(9665),i=a(6980);const d=e=>((0,u.dD)("data-v-1f1af8d4"),e=e(),(0,u.Cn)(),e),p={class:"login-container"},_={class:"container"},f=d((()=>(0,u._)("div",{class:"tit"},"登录",-1))),m=(0,u.Uk)("登录"),w=[m],g=d((()=>(0,u._)("span",null,[(0,u.Uk)("没有账号？"),(0,u._)("a",{href:"#"},"去注册")],-1))),v=d((()=>(0,u._)("div",{class:"square"},[(0,u._)("ul",null,[(0,u._)("li"),(0,u._)("li"),(0,u._)("li"),(0,u._)("li"),(0,u._)("li")])],-1))),h=d((()=>(0,u._)("div",{class:"circle"},[(0,u._)("ul",null,[(0,u._)("li"),(0,u._)("li"),(0,u._)("li"),(0,u._)("li"),(0,u._)("li")])],-1)));var k=(0,u.aZ)({__name:"login",setup(e){let l=(0,o.iH)(!1);const a=(0,o.qj)({account:[{required:!0,message:"请输入用户名!",trigger:"blur"}],passwd:[{required:!0,message:"请输入密码!",trigger:"blur"}]}),d=(0,o.qj)({account:"",passwd:""}),m=(0,o.iH)(),k=async()=>{const e=await(0,c.u)(m);if(!e)return;l.value=!0;const a=new s.n(d.account,d.passwd);var u=await r.o.login(a);l.value=!1,u?(i.z8.success("登陆成功,欢迎来到dog系统"),t.Z.push({path:"/admin"})):i.z8.error("登陆失败，账号或密码错误")};return(e,s)=>{const t=(0,u.up)("el-input"),r=(0,u.up)("el-form-item"),c=(0,u.up)("el-form"),i=(0,u.Q2)("loading");return(0,u.wg)(),(0,u.iD)("div",p,[(0,u._)("div",_,[f,(0,u.Wm)(c,{model:d,rules:a,ref_key:"formRef",ref:m},{default:(0,u.w5)((()=>[(0,u.Wm)(r,{prop:"account"},{default:(0,u.w5)((()=>[(0,u.Wm)(t,{placeholder:"账号",modelValue:d.account,"onUpdate:modelValue":s[0]||(s[0]=e=>d.account=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(r,{prop:"passwd"},{default:(0,u.w5)((()=>[(0,u.Wm)(t,{placeholder:"密码",modelValue:d.passwd,"onUpdate:modelValue":s[1]||(s[1]=e=>d.passwd=e),"show-password":"",onKeyup:(0,n.D2)(k,["enter"])},null,8,["modelValue","onKeyup"])])),_:1})])),_:1},8,["model","rules"]),(0,u.wy)(((0,u.wg)(),(0,u.iD)("button",{onClick:k},w)),[[i,(0,o.SU)(l)]]),g]),v,h])}}}),y=a(7759);const V=(0,y.Z)(k,[["__scopeId","data-v-1f1af8d4"]]);var b=V}}]);
//# sourceMappingURL=589.a3e153fc.js.map