"use strict";(self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[]).push([[639],{4257:function(a,e,l){l.d(e,{QX:function(){return c},ev:function(){return s},t8:function(){return o}});var t=l(6943);const u="https://api.mausurabbit.xyz/backpack",n={withCredentials:!0},s=()=>t.Z.get(`${u}`,n),c=(a,e)=>t.Z.get(`${u}/count`,{params:{userID:a,itemID:e},...n}),o=(a,e,l)=>t.Z.post(`${u}/set`,{user_id:a,item_id:e,count:l},n)},3364:function(a,e,l){l.d(e,{e:function(){return c},p:function(){return s}});var t=l(6943);const u="https://api.mausurabbit.xyz/item",n={withCredentials:!0},s=()=>t.Z.get(`${u}/list`,n),c=a=>t.Z.post(`${u}/edit`,a)},1740:function(a,e,l){l.d(e,{f:function(){return c},r:function(){return s}});var t=l(6943);const u="https://api.mausurabbit.xyz/manager",n={withCredentials:!0},s=()=>t.Z.get(`${u}/users`,n),c=a=>t.Z.post(`${u}/user/group`,a)},7639:function(a,e,l){l.r(e),l.d(e,{default:function(){return k}});var t=l(3396),u=l(7139),n=l(4870),s=l(3364),c=l(1740),o=l(4257),r=l(5488),i=l(6073),v=l(9545),d=l(544),p=l(8304);const m={class:"centralize-container"},f=(0,t._)("h1",null,"兔兔發禮物",-1);var b=(0,t.aZ)({__name:"BackpackSet",setup(a){const e=(0,n.iH)(null),l=(0,n.iH)(null),b=(0,t.Fl)((()=>e.value?.map((a=>({text:a.username,value:a.id}))))),y=(0,t.Fl)((()=>l.value?.map((a=>({text:(0,p.Y)(a.name),value:a.id}))))),_=(0,n.iH)(null),h=(0,n.iH)(null),w=(0,n.iH)("0");(0,t.bv)((async()=>{try{e.value=(await(0,c.r)()).data,l.value=(await(0,s.p)()).data}catch(a){(0,r.l)("無法取得使用者名單或物品列表")}})),(0,t.m0)((async()=>{if(w.value=null,_.value&&h.value)try{w.value=(await(0,o.QX)(_.value.value,h.value.value)).data.count}catch(a){(0,r.l)("無法取得背包物品個數")}}));const k=async()=>{try{if(!_.value||!h.value||null===w.value)return;await(0,o.t8)(_.value.value,h.value.value,parseInt(w.value)),(0,r.l)("設定成功")}catch(a){console.log(a),(0,r.l)("無法設定物品個數")}};return(a,e)=>((0,t.wg)(),(0,t.iD)("div",m,[f,(0,t.Wm)(d.Z,{value:_.value,"onUpdate:value":e[0]||(e[0]=a=>_.value=a),class:(0,u.C_)(a.$style.control),options:(0,n.SU)(b),label:"使用者"},null,8,["value","class","options"]),(0,t.Wm)(d.Z,{value:h.value,"onUpdate:value":e[1]||(e[1]=a=>h.value=a),class:(0,u.C_)(a.$style.control),options:(0,n.SU)(y),label:"物品"},null,8,["value","class","options"]),(0,t.Wm)((0,n.SU)(i.gN),{"model-value":null!==w.value?w.value:"",label:"個數",class:(0,u.C_)(a.$style.control),disabled:!_.value||!h.value||null===w.value,"onUpdate:modelValue":e[2]||(e[2]=a=>w.value=a)},null,8,["model-value","class","disabled"]),(0,t.Wm)((0,n.SU)(v.zx),{class:(0,u.C_)(a.$style.control),round:!0,type:"primary",disabled:!_.value||!h.value,onClick:k},{default:(0,t.w5)((()=>[(0,t.Uk)(" 發送 ")])),_:1},8,["class","disabled"])]))}}),y={control:"BackpackSet_control_XNijl"},_=l(89);const h={};h["$style"]=y;const w=(0,_.Z)(b,[["__cssModules",h]]);var k=w}}]);