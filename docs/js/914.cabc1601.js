"use strict";(self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[]).push([[914],{8914:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});r(7658);var n=r(3396),o=r(7139),i=r(4870),a=r(8875),l=r(4652),s=r(487),c=r(3708),u=r(3989),d=r(2483);const w=(0,n._)("h1",null,"兔兔註冊系統",-1);var p=(0,n.aZ)({__name:"Register",setup(e){const t=(0,d.tv)(),r=(0,i.iH)(""),p=(0,i.iH)(""),h=async()=>{try{const{data:e}=await(0,a.H2)({email:r.value,username:p.value}),n=await(0,l.RQ)(e);await(0,a.TB)(n),(0,s.NU)({message:"註冊成功，可以登入了",type:"primary"}),t.push("/auth/login")}catch(e){console.log(e),(0,s.NU)({message:"註冊失敗",type:"primary"})}};return(e,t)=>{const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["centralize-container",e.$style.container])},[w,(0,n.Wm)((0,i.SU)(c.gN),{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),class:(0,o.C_)(e.$style.control),type:"email",label:"Email"},null,8,["modelValue","class"]),(0,n.Wm)((0,i.SU)(c.gN),{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value=e),class:(0,o.C_)(e.$style.control),type:"text",label:"暱稱"},null,8,["modelValue","class"]),(0,n.Wm)((0,i.SU)(u.zx),{round:!0,class:(0,o.C_)(e.$style.control),type:"primary",onClick:h},{default:(0,n.w5)((()=>[(0,n.Uk)(" 註冊 ")])),_:1},8,["class"]),(0,n.Wm)(a,{to:"/auth/login"},{default:(0,n.w5)((()=>[(0,n.Uk)("有帳號了？前往登入！")])),_:1})],2)}}}),h={container:"Register_container_ZH1It",control:"Register_control_RU1RJ"},f=r(89);const m={};m["$style"]=h;const y=(0,f.Z)(p,[["__cssModules",m]]);var g=y},4652:function(e,t,r){r.d(t,{RQ:function(){return f},oz:function(){return b}});r(2801);function n(e){return(new TextEncoder).encode(e)}function o(e){const t=new Uint8Array(e);let r="";for(const o of t)r+=String.fromCharCode(o);const n=btoa(r);return n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function i(e){const t=e.replace(/-/g,"+").replace(/_/g,"/"),r=(4-t.length%4)%4,n=t.padEnd(t.length+r,"="),o=atob(n),i=new ArrayBuffer(o.length),a=new Uint8Array(i);for(let l=0;l<o.length;l++)a[l]=o.charCodeAt(l);return i}function a(){return void 0!==(null===window||void 0===window?void 0:window.PublicKeyCredential)&&"function"===typeof window.PublicKeyCredential}function l(e){const{id:t}=e;return{...e,id:i(t),transports:e.transports}}function s(e){return"localhost"===e||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}class c extends Error{constructor(e,t="WebAuthnError"){super(e),this.name=t}}function u({error:e,options:t}){var r,n;const{publicKey:o}=t;if(!o)throw Error("options was missing required publicKey property");if("AbortError"===e.name){if(t.signal===(new AbortController).signal)return new c("Registration ceremony was sent an abort signal","AbortError")}else if("ConstraintError"===e.name){if(!0===(null===(r=o.authenticatorSelection)||void 0===r?void 0:r.requireResidentKey))return new c("Discoverable credentials were required but no available authenticator supported it","ConstraintError");if("required"===(null===(n=o.authenticatorSelection)||void 0===n?void 0:n.userVerification))return new c("User verification was required but no available authenticator supported it","ConstraintError")}else{if("InvalidStateError"===e.name)return new c("The authenticator was previously registered","InvalidStateError");if("NotAllowedError"===e.name)return new c("User clicked cancel, or the registration ceremony timed out","NotAllowedError");if("NotSupportedError"===e.name){const e=o.pubKeyCredParams.filter((e=>"public-key"===e.type));return 0===e.length?new c('No entry in pubKeyCredParams was of type "public-key"',"NotSupportedError"):new c("No available authenticator supported any of the specified pubKeyCredParams algorithms","NotSupportedError")}if("SecurityError"===e.name){const e=window.location.hostname;if(!s(e))return new c(`${window.location.hostname} is an invalid domain`,"SecurityError");if(o.rp.id!==e)return new c(`The RP ID "${o.rp.id}" is invalid for this domain`,"SecurityError")}else if("TypeError"===e.name){if(o.user.id.byteLength<1||o.user.id.byteLength>64)return new c("User ID was not between 1 and 64 characters","TypeError")}else if("UnknownError"===e.name)return new c("The authenticator was unable to process the specified options, or could not create a new credential","UnknownError")}return e}class d{createNewAbortSignal(){this.controller&&this.controller.abort("Cancelling existing WebAuthn API call for new one");const e=new AbortController;return this.controller=e,e.signal}}const w=new d,p=["cross-platform","platform"];function h(e){if(e&&!(p.indexOf(e)<0))return e}async function f(e){var t;if(!a())throw new Error("WebAuthn is not supported in this browser");const r={...e,challenge:i(e.challenge),user:{...e.user,id:n(e.user.id)},excludeCredentials:null===(t=e.excludeCredentials)||void 0===t?void 0:t.map(l)},s={publicKey:r};let c;s.signal=w.createNewAbortSignal();try{c=await navigator.credentials.create(s)}catch(g){throw u({error:g,options:s})}if(!c)throw new Error("Registration was not completed");const{id:d,rawId:p,response:f,type:m}=c;let y;return"function"===typeof f.getTransports&&(y=f.getTransports()),{id:d,rawId:o(p),response:{attestationObject:o(f.attestationObject),clientDataJSON:o(f.clientDataJSON),transports:y},type:m,clientExtensionResults:c.getClientExtensionResults(),authenticatorAttachment:h(c.authenticatorAttachment)}}function m(e){return new TextDecoder("utf-8").decode(e)}async function y(){const e=window.PublicKeyCredential;return void 0!==e.isConditionalMediationAvailable&&e.isConditionalMediationAvailable()}function g({error:e,options:t}){var r;const{publicKey:n}=t;if(!n)throw Error("options was missing required publicKey property");if("AbortError"===e.name){if(t.signal===(new AbortController).signal)return new c("Authentication ceremony was sent an abort signal","AbortError")}else{if("NotAllowedError"===e.name)return(null===(r=n.allowCredentials)||void 0===r?void 0:r.length)?new c("No available authenticator recognized any of the allowed credentials","NotAllowedError"):new c("User clicked cancel, or the authentication ceremony timed out","NotAllowedError");if("SecurityError"===e.name){const e=window.location.hostname;if(!s(e))return new c(`${window.location.hostname} is an invalid domain`,"SecurityError");if(n.rpId!==e)return new c(`The RP ID "${n.rpId}" is invalid for this domain`,"SecurityError")}else if("UnknownError"===e.name)return new c("The authenticator was unable to process the specified options, or could not create a new assertion signature","UnknownError")}return e}async function b(e,t=!1){var r,n;if(!a())throw new Error("WebAuthn is not supported in this browser");let s;0!==(null===(r=e.allowCredentials)||void 0===r?void 0:r.length)&&(s=null===(n=e.allowCredentials)||void 0===n?void 0:n.map(l));const c={...e,challenge:i(e.challenge),allowCredentials:s},u={};if(t){if(!await y())throw Error("Browser does not support WebAuthn autofill");const e=document.querySelectorAll("input[autocomplete*='webauthn']");if(e.length<1)throw Error('No <input> with `"webauthn"` in its `autocomplete` attribute was detected');u.mediation="conditional",c.allowCredentials=[]}let d;u.publicKey=c,u.signal=w.createNewAbortSignal();try{d=await navigator.credentials.get(u)}catch(A){throw g({error:A,options:u})}if(!d)throw new Error("Authentication was not completed");const{id:p,rawId:f,response:b,type:v}=d;let E;return b.userHandle&&(E=m(b.userHandle)),{id:p,rawId:o(f),response:{authenticatorData:o(b.authenticatorData),clientDataJSON:o(b.clientDataJSON),signature:o(b.signature),userHandle:E},type:v,clientExtensionResults:d.getClientExtensionResults(),authenticatorAttachment:h(d.authenticatorAttachment)}}}}]);
//# sourceMappingURL=914.cabc1601.js.map