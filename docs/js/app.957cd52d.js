(function(){"use strict";var e={8875:function(e,t,n){n.d(t,{H2:function(){return u},PA:function(){return c},TB:function(){return a},kS:function(){return f},um:function(){return l},xV:function(){return s}});var r=n(6943);const o="https://api.mausurabbit.xyz/auth",i={withCredentials:!0},u=e=>r.Z.post(`${o}/register/option`,{...e,rp_id:"immortalmice.github.io"},i),a=e=>r.Z.post(`${o}/register/verify`,e,i),s=e=>r.Z.post(`${o}/authentication/option`,{...e,rp_id:"immortalmice.github.io"},i),c=e=>r.Z.post(`${o}/authentication/verify`,e,i),l=()=>r.Z.get(`${o}/info`,i),f=()=>r.Z.post(`${o}/logout`,{},i)},1207:function(e,t,n){var r=n(9242),o=n(3396),i=(0,o.aZ)({__name:"App",setup(e){const t=()=>document.body.style.setProperty("--vh",window.innerHeight/100+"px");return(0,o.bv)(t),window.addEventListener("resize",t),(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}}});const u=i;var a=u,s=n(2483),c=n(7139),l=n.p+"img/user.69f1de6f.svg",f=(n(7658),n(4870)),p=n.p+"img/close.45875a91.svg",d=n(8875),m=n(9545),h=n(7627),b=n(3933),v=n(8304);const g=(0,o._)("p",null,"兔兔系統發現你還沒登入呢 >.0",-1);var y=(0,o.aZ)({__name:"UserPanel",props:{show:{type:Boolean,default:!0}},emits:["update:show"],setup(e,{emit:t}){const n=(0,s.tv)(),i=(0,h.Z)(),{user:u}=(0,f.BK)(i),a=(0,f.Fl)((()=>u.value?.userGroup.map((e=>(0,v.c)(e))).join(", ")||"")),l=()=>t("update:show",!1),y=async()=>{try{await(0,d.kS)()}catch(e){}finally{n.push("/auth/login")}};return(t,n)=>{const s=(0,o.up)("RouterLink");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["centralize-container",t.$style.container])},[(0,o._)("img",{class:(0,c.C_)(t.$style.close),src:p,onClick:l},null,2),(0,f.SU)(i).user?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("h2",null,(0,c.zw)((0,f.SU)(u)?.username),1),(0,o._)("p",null,"Email: "+(0,c.zw)((0,f.SU)(u)?.email),1),(0,o._)("p",null,"身分： "+(0,c.zw)((0,f.SU)(a)),1),(0,o.Wm)((0,f.SU)(m.zx),{class:(0,c.C_)(t.$style.btn),round:!0,size:"small",type:"primary",onClick:y},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登出 ")])),_:1},8,["class"]),(0,o.Wm)(s,{to:"/rabbit-status",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 去看看兔兔的狀態吧")])),_:1}),(0,o.Wm)(b.Z,{groups:["rabbit","owner"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/backpack",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 前往背包")])),_:1})])),_:1}),(0,o.Wm)(b.Z,{groups:["rabbit"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/rabbit-status/create",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請更新狀態")])),_:1}),(0,o.Wm)(s,{to:"/backpack/set",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請發禮物")])),_:1})])),_:1})],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[g,(0,o.Wm)((0,f.SU)(m.zx),{class:(0,c.C_)(t.$style.btn),round:!0,size:"small",type:"primary",onClick:n[0]||(n[0]=e=>t.$router.push("/auth/login"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登入 ")])),_:1},8,["class"])],64))],2)),[[r.F8,e.show]])}}}),w={container:"UserPanel_container_ICrIj",btn:"UserPanel_btn_Kk_M0",close:"UserPanel_close_ICNxt"},_=n(89);const k={};k["$style"]=w;const C=(0,_.Z)(y,[["__cssModules",k]]);var S=C,U=(0,o.aZ)({__name:"index",setup(e){const t=(0,f.iH)(!1);return(0,s.ao)((()=>{t.value=!1})),(e,n)=>{const r=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o._)("img",{onClick:n[0]||(n[0]=e=>t.value=!0),class:(0,c.C_)(e.$style.user),src:l},null,2),(0,o.Wm)(S,{show:t.value,"onUpdate:show":n[1]||(n[1]=e=>t.value=e),class:(0,c.C_)(e.$style.panel)},null,8,["show","class"])],64)}}}),Z={user:"index_user_aGGnv",panel:"index_panel_I58X4"};const P={};P["$style"]=Z;const x=(0,_.Z)(U,[["__cssModules",P]]);var $=x;const j=[{path:"/",redirect:"/rabbit-status"},{path:"/auth",redirect:"/auth/login"},{path:"/auth/register",component:()=>Promise.all([n.e(73),n.e(508)]).then(n.bind(n,9508))},{path:"/auth/login",component:()=>Promise.all([n.e(73),n.e(488)]).then(n.bind(n,8488))},{path:"/rabbit-status",component:$,children:[{path:"",component:()=>Promise.all([n.e(73),n.e(612)]).then(n.bind(n,7100))},{path:"create",component:()=>Promise.all([n.e(73),n.e(826)]).then(n.bind(n,2826)),meta:{permission:["rabbit"]}},{path:"recently",component:()=>n.e(968).then(n.bind(n,9968)),meta:{permission:["rabbit","owner"]}}]},{path:"/backpack",component:$,children:[{path:"",component:()=>n.e(985).then(n.bind(n,5985)),meta:{permission:["rabbit","owner"]}},{path:"set",component:()=>Promise.all([n.e(73),n.e(892)]).then(n.bind(n,6892)),meta:{permission:["rabbit"]}}]},{path:"/:pathMatch(.*)*",component:()=>n.e(946).then(n.bind(n,946))}],E=(0,s.p7)({history:(0,s.r5)(),routes:j});var O=E,z=n(2578),W=n(530),A=n.n(W),L=n(9845),N=n(5488);A().configure({showSpinner:!1}),O.beforeEach((async(e,t,n)=>{A().start();const r=(0,h.Z)();try{const{data:e}=await(0,d.um)();r.user=e?{email:e.email,username:e.username,userGroup:e.user_groups}:null}catch(o){console.log("Info api failed"),r.user=null}e.meta.permission?(0,L.L)(r.user?.userGroup||[],e.meta.permission)?n():((0,N.l)("沒有權限"),n(!1)):n()})),O.afterEach((()=>A().done()));n(5110);(0,r.ri)(a).use((0,z.WB)()).use(O).mount("#app")},7627:function(e,t,n){var r=n(2578);const o=()=>({user:null});t["Z"]=(0,r.Q_)("main",{state:o})},9845:function(e,t,n){function r(e,t){return t.filter((t=>e.includes(t)??!1)).length>0}n.d(t,{L:function(){return r}})},8304:function(e,t,n){n.d(t,{Y:function(){return o},c:function(){return r}});const r=e=>({rabbit:"兔子大帝",owner:"主人",fan:"兔粉",user:"使用者"}[e]),o=e=>({poop:"兔兔精華",summon_ticket:"兔兔召喚券",headshot_ticket:"兔兔頭槌卷",bite_ticket:"兔兔咬咬券",swoop_ticket:"兔兔飛撲券",rub_ticket:"兔兔蹭蹭券"}[e]||e)},5488:function(e,t,n){n.d(t,{l:function(){return o}});var r=n(5770);function o(e){(0,r.NU)({message:e,type:"primary"})}},3933:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3396),o=n(4870),i=n(7627),u=n(9845),a=(0,r.aZ)({__name:"ShowWithUserGroup",props:{groups:null},setup(e){const t=e,n=(0,i.Z)(),a=(0,o.Fl)((()=>{const e=n.user;return!!(0,u.L)(e?.userGroup||[],t.groups)}));return(e,t)=>(0,o.SU)(a)?(0,r.WI)(e.$slots,"default",{key:0}):(0,r.kq)("",!0)}});const s=a;var c=s}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{73:"bb63a624",488:"10c6c092",508:"2dc62591",612:"6375c4d8",826:"0c564d88",892:"da22a6c3",946:"0bcbf9ec",968:"d1f90179",985:"75797c52"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{488:"f297a305",508:"652b6c1b",612:"63a83f73",826:"9dac6d45",892:"93f7ea80",968:"75c475db",985:"7d6d8e8b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cute-owner:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={488:1,508:1,612:1,826:1,892:1,968:1,985:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var l=s(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1207)}));r=n.O(r)})();
//# sourceMappingURL=app.957cd52d.js.map