(function(){"use strict";var e={8875:function(e,t,n){n.d(t,{H2:function(){return a},PA:function(){return c},TB:function(){return u},um:function(){return l},xV:function(){return s}});var r=n(6943);const o="https://api.mausurabbit.xyz/auth",i={withCredentials:!0},a=e=>r.Z.post(`${o}/register/option`,{...e,rp_id:"immortalmice.github.io"},i),u=e=>r.Z.post(`${o}/register/verify`,e,i),s=e=>r.Z.post(`${o}/authentication/option`,{...e,rp_id:"immortalmice.github.io"},i),c=e=>r.Z.post(`${o}/authentication/verify`,e,i),l=()=>r.Z.get(`${o}/info`,i)},1208:function(e,t,n){var r=n(9242),o=n(3396),i=(0,o.aZ)({__name:"App",setup(e){const t=()=>document.body.style.setProperty("--vh",window.innerHeight/100+"px");return(0,o.bv)(t),window.addEventListener("resize",t),(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}}});const a=i;var u=a,s=n(2483),c=n(7139),l=n.p+"img/user.69f1de6f.svg",p=(n(7658),n(4870)),f=n.p+"img/close.45875a91.svg",d=n(9545),m=n(7627),h=n(3933),b=n(8304);const v=(0,o._)("p",null,"兔兔系統發現你還沒登入呢 >.0",-1);var g=(0,o.aZ)({__name:"UserPanel",props:{show:{type:Boolean,default:!0}},emits:["update:show"],setup(e,{emit:t}){const n=(0,s.tv)(),i=(0,m.Z)(),{user:a}=(0,p.BK)(i),u=(0,p.Fl)((()=>a.value?.userGroups.map((e=>(0,b.c)(e))).join(", ")||"")),l=()=>t("update:show",!1),g=async()=>{localStorage.removeItem("token"),n.push("/auth/login")};return(t,n)=>{const s=(0,o.up)("RouterLink");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["centralize-container",t.$style.container])},[(0,o._)("img",{class:(0,c.C_)(t.$style.close),src:f,onClick:l},null,2),(0,p.SU)(i).user?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("h2",null,(0,c.zw)((0,p.SU)(a)?.username),1),(0,o._)("p",null,"Email: "+(0,c.zw)((0,p.SU)(a)?.email),1),(0,o._)("p",null,"身分： "+(0,c.zw)((0,p.SU)(u)),1),(0,o.Wm)((0,p.SU)(d.zx),{class:(0,c.C_)(t.$style.btn),round:!0,size:"small",type:"primary",onClick:g},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登出 ")])),_:1},8,["class"]),(0,o.Wm)(s,{to:"/rabbit-status",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 去看看兔兔的狀態吧")])),_:1}),(0,o.Wm)(h.Z,{groups:["rabbit","owner"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/backpack",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 前往背包")])),_:1})])),_:1}),(0,o.Wm)(h.Z,{groups:["rabbit"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/rabbit-status/create",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請更新狀態")])),_:1}),(0,o.Wm)(s,{to:"/backpack/set",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請發禮物")])),_:1}),(0,o.Wm)(s,{to:"/item/edit",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請調整物品")])),_:1}),(0,o.Wm)(s,{to:"/auth/user-group/set",onClick:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請提名兔粉")])),_:1})])),_:1})],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[v,(0,o.Wm)((0,p.SU)(d.zx),{class:(0,c.C_)(t.$style.btn),round:!0,size:"small",type:"primary",onClick:n[0]||(n[0]=e=>t.$router.push("/auth/login"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登入 ")])),_:1},8,["class"])],64))],2)),[[r.F8,e.show]])}}}),w={container:"UserPanel_container_ICrIj",btn:"UserPanel_btn_Kk_M0",close:"UserPanel_close_ICNxt"},y=n(89);const _={};_["$style"]=w;const k=(0,y.Z)(g,[["__cssModules",_]]);var C=k,U=(0,o.aZ)({__name:"index",setup(e){const t=(0,p.iH)(!1);return(0,s.ao)((()=>{t.value=!1})),(e,n)=>{const r=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o._)("img",{onClick:n[0]||(n[0]=e=>t.value=!0),class:(0,c.C_)(e.$style.user),src:l},null,2),(0,o.Wm)(C,{show:t.value,"onUpdate:show":n[1]||(n[1]=e=>t.value=e),class:(0,c.C_)(e.$style.panel)},null,8,["show","class"])],64)}}}),S={user:"index_user_aGGnv",panel:"index_panel_I58X4"};const P={};P["$style"]=S;const Z=(0,y.Z)(U,[["__cssModules",P]]);var j=Z;const z=[{path:"/",redirect:"/rabbit-status"},{path:"/auth",redirect:"/auth/login"},{path:"/auth/register",component:()=>Promise.all([n.e(73),n.e(19)]).then(n.bind(n,7019))},{path:"/auth/login",component:()=>Promise.all([n.e(73),n.e(505)]).then(n.bind(n,8505))},{path:"/auth/user-group/set",component:j,children:[{path:"",component:()=>Promise.all([n.e(73),n.e(544),n.e(461)]).then(n.bind(n,461))}]},{path:"/rabbit-status",component:j,children:[{path:"",component:()=>Promise.all([n.e(73),n.e(666),n.e(713)]).then(n.bind(n,4651))},{path:"create",component:()=>Promise.all([n.e(73),n.e(826)]).then(n.bind(n,2826)),meta:{permission:["rabbit"]}},{path:"recently",component:()=>Promise.all([n.e(73),n.e(666),n.e(566)]).then(n.bind(n,3213)),meta:{permission:["rabbit","owner","fan"]}}]},{path:"/backpack",component:j,children:[{path:"",component:()=>n.e(985).then(n.bind(n,5985)),meta:{permission:["rabbit","owner"]}},{path:"set",component:()=>Promise.all([n.e(73),n.e(544),n.e(639)]).then(n.bind(n,7639)),meta:{permission:["rabbit"]}}]},{path:"/item",component:j,children:[{path:"edit",component:()=>Promise.all([n.e(73),n.e(544),n.e(420)]).then(n.bind(n,4420)),meta:{permission:["rabbit"]}}]},{path:"/:pathMatch(.*)*",component:()=>n.e(946).then(n.bind(n,946))}],x=(0,s.p7)({history:(0,s.r5)(),routes:z});var E=x,O=n(2578),W=n(530),$=n.n(W),A=n(8875),I=n(9845),L=n(5488);$().configure({showSpinner:!1}),E.beforeEach((async(e,t,n)=>{$().start();const r=(0,m.Z)();try{const{data:e}=await(0,A.um)();r.user=e?{id:e.id,email:e.email,username:e.username,userGroups:e.userGroups}:null}catch(o){console.log("Info api failed"),N(o)&&T(o.response)&&401===o.response.status&&localStorage.removeItem("token"),r.user=null}e.meta.permission?(0,I.L)(r.user?.userGroups||[],e.meta.permission)?n():((0,L.l)("沒有權限"),n(!1)):n()})),E.afterEach((()=>$().done()));const N=e=>"object"===typeof e&&null!==e&&"response"in e,T=e=>"object"===typeof e&&null!==e&&"status"in e;var B=n(6943);B.Z.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=t),e}));n(5110);(0,r.ri)(u).use((0,O.WB)()).use(E).mount("#app")},7627:function(e,t,n){var r=n(2578);const o=()=>({user:null});t["Z"]=(0,r.Q_)("main",{state:o})},9845:function(e,t,n){function r(e,t){return t.filter((t=>e.includes(t)??!1)).length>0}n.d(t,{L:function(){return r}})},8304:function(e,t,n){n.d(t,{Y:function(){return o},c:function(){return r}});const r=e=>({rabbit:"兔子大帝",owner:"主人",fan:"兔粉",user:"使用者"}[e]),o=e=>({poop:"兔兔精華",summon_ticket:"兔兔召喚券",headshot_ticket:"兔兔頭槌卷",bite_ticket:"兔兔咬咬券",swoop_ticket:"兔兔飛撲券",rub_ticket:"兔兔蹭蹭券"}[e]||e)},5488:function(e,t,n){n.d(t,{l:function(){return o}});var r=n(5770);function o(e){(0,r.NU)({message:e,type:"primary"})}},3933:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3396),o=n(4870),i=n(7627),a=n(9845),u=(0,r.aZ)({__name:"ShowWithUserGroup",props:{groups:null},setup(e){const t=e,n=(0,i.Z)(),u=(0,o.Fl)((()=>{const e=n.user;return!!(0,a.L)(e?.userGroup||[],t.groups)}));return(e,t)=>(0,o.SU)(u)?(0,r.WI)(e.$slots,"default",{key:0}):(0,r.kq)("",!0)}});const s=u;var c=s}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{19:"e6b0a8f4",73:"fccd8bd4",420:"cdeac02a",461:"78870d57",505:"8d417d04",544:"0ad86eb8",566:"00273d49",639:"6cfa3811",666:"b7001d03",713:"bb5eaa42",826:"0c1c2d0b",946:"7f4cd343",985:"0f55964a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{19:"652b6c1b",420:"14f109d6",461:"7ac0bba7",505:"f297a305",566:"5d3fd05e",639:"93f7ea80",713:"616d5d2b",826:"9dac6d45",985:"7d6d8e8b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cute-owner:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={19:1,420:1,461:1,505:1,566:1,639:1,713:1,826:1,985:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1208)}));r=n.O(r)})();