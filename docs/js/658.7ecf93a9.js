"use strict";(self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[]).push([[658],{8658:function(a,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(3396),c=t(7139),l=t(6943);const s="https://api.mausurabbit.xyz/backpack",i={withCredentials:!0},u=()=>l.Z.get(`${s}`,i);var o=t(5488),r=t(4870);const _=(0,n._)("h1",null,"兔兔背包",-1),k={key:0},p={key:1};var w=(0,n.aZ)({__name:"Backpack",setup(a){const e=(0,r.iH)(null),t=a=>({poop:"兔兔精華"}[a]||a);return(0,n.bv)((async()=>{try{e.value=(await u()).data}catch(a){console.log(a),(0,o.l)("無法取得背包內容QQ")}})),(a,l)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,c.C_)(["centralize-container",a.$style.container])},[_,e.value?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,c.C_)(a.$style.list)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.value,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.id,class:(0,c.C_)(a.$style.row)},[(0,n._)("span",null,(0,c.zw)(t(e.name)),1),(0,n._)("span",null,(0,c.zw)(e.count)+"個",1)],2)))),128)),0===e.value.length?((0,n.wg)(),(0,n.iD)("p",k," 背包空空如也QQ ")):(0,n.kq)("",!0)],2)):((0,n.wg)(),(0,n.iD)("p",p," 兔兔努力載入中... "))],2))}}),v={container:"Backpack_container__ddl_",list:"Backpack_list_VUQIB",row:"Backpack_row_CSN9q"},d=t(89);const y={};y["$style"]=v;const g=(0,d.Z)(w,[["__cssModules",y]]);var h=g}}]);
//# sourceMappingURL=658.7ecf93a9.js.map