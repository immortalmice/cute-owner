(function(){"use strict";var e={8875:function(e,t,n){n.d(t,{H2:function(){return a},PA:function(){return c},TB:function(){return u},kS:function(){return p},um:function(){return l},xV:function(){return s}});var r=n(6943);const o="https://api.mausurabbit.xyz/auth",i={withCredentials:!0},a=e=>r.Z.post(`${o}/register/option`,{...e,rp_id:"immortalmice.github.io"},i),u=e=>r.Z.post(`${o}/register/verify`,e,i),s=e=>r.Z.post(`${o}/authentication/option`,{...e,rp_id:"immortalmice.github.io"},i),c=e=>r.Z.post(`${o}/authentication/verify`,e,i),l=()=>r.Z.get(`${o}/info`,i),p=()=>r.Z.post(`${o}/logout`,{},i)},6599:function(e,t,n){var r=n(9242),o=n(3396),i=(0,o.aZ)({__name:"App",setup(e){const t=()=>document.body.style.setProperty("--vh",window.innerHeight/100+"px");return(0,o.bv)(t),window.addEventListener("resize",t),(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}}});const a=i;var u=a,s=n(2483),c=n(7139),l=n.p+"img/user.69f1de6f.svg",p=(n(7658),n(4870)),f=n.p+"img/close.45875a91.svg",d=n(8875),m=n(9545),h=n(2578);const b=()=>({user:null});var v=(0,h.Q_)("main",{state:b});function g(e,t){return t.filter((t=>e.includes(t)??!1)).length>0}var y=(0,o.aZ)({__name:"ShowWithUserGroup",props:{groups:null},setup(e){const t=e,n=v(),r=(0,p.Fl)((()=>{const e=n.user;return!!g(e?.userGroup||[],t.groups)}));return(e,t)=>(0,p.SU)(r)?(0,o.WI)(e.$slots,"default",{key:0}):(0,o.kq)("",!0)}});const w=y;var _=w,k=n(8304);const C=(0,o._)("p",null,"兔兔系統發現你還沒登入呢 >.0",-1);var S=(0,o.aZ)({__name:"UserPanel",props:{show:{type:Boolean,default:!0}},emits:["update:show"],setup(e,{emit:t}){const n=(0,s.tv)(),i=v(),{user:a}=(0,p.BK)(i),u=(0,p.Fl)((()=>a.value?.userGroup.map((e=>(0,k.c)(e))).join(", ")||"")),l=()=>t("update:show",!1),h=async()=>{try{await(0,d.kS)()}catch(e){}finally{n.push("/auth/login")}};return(t,n)=>{const s=(0,o.up)("RouterLink");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["centralize-container",t.$style.container])},[(0,o._)("img",{class:(0,c.C_)(t.$style.close),src:f,onClick:l},null,2),(0,p.SU)(i).user?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("h2",null,(0,c.zw)((0,p.SU)(a)?.username),1),(0,o._)("p",null,"Email: "+(0,c.zw)((0,p.SU)(a)?.email),1),(0,o._)("p",null,"身分： "+(0,c.zw)((0,p.SU)(u)),1),(0,o.Wm)((0,p.SU)(m.zx),{class:(0,c.C_)(t.$style.btn),round:!0,size:"small",type:"primary",onClick:h},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登出 ")])),_:1},8,["class"]),(0,o.Wm)(s,{to:"/rabbit-status",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 去看看兔兔的狀態吧")])),_:1}),(0,o.Wm)(_,{groups:["rabbit","owner"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/backpack",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 前往背包")])),_:1})])),_:1}),(0,o.Wm)(_,{groups:["rabbit"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/rabbit-status/create",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請更新狀態")])),_:1}),(0,o.Wm)(s,{to:"/backpack/set",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請發禮物")])),_:1})])),_:1})],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[C,(0,o.Wm)((0,p.SU)(m.zx),{class:(0,c.C_)(t.$style.btn),round:!0,size:"small",type:"primary",onClick:n[0]||(n[0]=e=>t.$router.push("/auth/login"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登入 ")])),_:1},8,["class"])],64))],2)),[[r.F8,e.show]])}}}),U={container:"UserPanel_container_ICrIj",btn:"UserPanel_btn_Kk_M0",close:"UserPanel_close_ICNxt"},P=n(89);const x={};x["$style"]=U;const $=(0,P.Z)(S,[["__cssModules",x]]);var j=$,E=(0,o.aZ)({__name:"index",setup(e){const t=(0,p.iH)(!1);return(0,s.ao)((()=>{t.value=!1})),(e,n)=>{const r=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o._)("img",{onClick:n[0]||(n[0]=e=>t.value=!0),class:(0,c.C_)(e.$style.user),src:l},null,2),(0,o.Wm)(j,{show:t.value,"onUpdate:show":n[1]||(n[1]=e=>t.value=e),class:(0,c.C_)(e.$style.panel)},null,8,["show","class"])],64)}}}),O={user:"index_user_aGGnv",panel:"index_panel_I58X4"};const z={};z["$style"]=O;const W=(0,P.Z)(E,[["__cssModules",z]]);var Z=W;const A=[{path:"/",redirect:"/rabbit-status"},{path:"/auth",redirect:"/auth/login"},{path:"/auth/register",component:()=>Promise.all([n.e(73),n.e(508)]).then(n.bind(n,9508))},{path:"/auth/login",component:()=>Promise.all([n.e(73),n.e(488)]).then(n.bind(n,8488))},{path:"/rabbit-status",component:Z,children:[{path:"",component:()=>n.e(287).then(n.bind(n,8287))},{path:"create",component:()=>Promise.all([n.e(73),n.e(826)]).then(n.bind(n,2826)),meta:{permission:["rabbit"]}}]},{path:"/backpack",component:Z,children:[{path:"",component:()=>n.e(344).then(n.bind(n,9344)),meta:{permission:["rabbit","owner"]}},{path:"set",component:()=>Promise.all([n.e(73),n.e(892)]).then(n.bind(n,6892)),meta:{permission:["rabbit"]}}]},{path:"/:pathMatch(.*)*",component:()=>n.e(946).then(n.bind(n,946))}],N=(0,s.p7)({history:(0,s.r5)(),routes:A});var T=N,B=n(530),F=n.n(B),G=n(5488);F().configure({showSpinner:!1}),T.beforeEach((async(e,t,n)=>{F().start();const r=v();try{const{data:e}=await(0,d.um)();r.user=e?{email:e.email,username:e.username,userGroup:e.user_groups}:null}catch(o){console.log("Info api failed"),r.user=null}e.meta.permission?g(r.user?.userGroup||[],e.meta.permission)?n():((0,G.l)("沒有權限"),n(!1)):n()})),T.afterEach((()=>F().done()));n(5110);(0,r.ri)(u).use((0,h.WB)()).use(T).mount("#app")},8304:function(e,t,n){n.d(t,{Y:function(){return o},c:function(){return r}});const r=e=>({rabbit:"兔子大帝",owner:"主人",user:"兔粉"}[e]),o=e=>({poop:"兔兔精華",summon_ticket:"兔兔召喚券",headshot_ticket:"兔兔頭槌卷",bite_ticket:"兔兔咬咬券",swoop_ticket:"兔兔飛撲券",rub_ticket:"兔兔蹭蹭券"}[e]||e)},5488:function(e,t,n){n.d(t,{l:function(){return o}});var r=n(5770);function o(e){(0,r.NU)({message:e,type:"primary"})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{73:"bb63a624",287:"c6156f1d",344:"ab7de518",488:"10c6c092",508:"2dc62591",826:"ce0a1611",892:"da22a6c3",946:"0bcbf9ec"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{287:"d58ac35e",344:"c8beaa21",488:"f297a305",508:"652b6c1b",826:"9dac6d45",892:"93f7ea80"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cute-owner:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={287:1,344:1,488:1,508:1,826:1,892:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6599)}));r=n.O(r)})();
//# sourceMappingURL=app.26ed2444.js.map