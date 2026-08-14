(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function _v(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var yh={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function nS(){if(X0)return zo;X0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var W0;function iS(){return W0||(W0=1,yh.exports=nS()),yh.exports}var Z=iS(),Sh={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function aS(){if(j0)return me;j0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function _(z,rt,Et){this.props=z,this.context=rt,this.refs=S,this.updater=Et||T}_.prototype.isReactComponent={},_.prototype.setState=function(z,rt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,rt,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function I(){}I.prototype=_.prototype;function O(z,rt,Et){this.props=z,this.context=rt,this.refs=S,this.updater=Et||T}var D=O.prototype=new I;D.constructor=O,A(D,_.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function k(){}var U={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function C(z,rt,Et){var Q=Et.ref;return{$$typeof:r,type:z,key:rt,ref:Q!==void 0?Q:null,props:Et}}function R(z,rt){return C(z.type,rt,z.props)}function L(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function B(z){var rt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Et){return rt[Et]})}var j=/\/+/g;function st(z,rt){return typeof z=="object"&&z!==null&&z.key!=null?B(""+z.key):rt.toString(36)}function mt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(k,k):(z.status="pending",z.then(function(rt){z.status==="pending"&&(z.status="fulfilled",z.value=rt)},function(rt){z.status==="pending"&&(z.status="rejected",z.reason=rt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,rt,Et,Q,vt){var Pt=typeof z;(Pt==="undefined"||Pt==="boolean")&&(z=null);var Rt=!1;if(z===null)Rt=!0;else switch(Pt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(z.$$typeof){case r:case t:Rt=!0;break;case g:return Rt=z._init,P(Rt(z._payload),rt,Et,Q,vt)}}if(Rt)return vt=vt(z),Rt=Q===""?"."+st(z,0):Q,G(vt)?(Et="",Rt!=null&&(Et=Rt.replace(j,"$&/")+"/"),P(vt,rt,Et,"",function(Lt){return Lt})):vt!=null&&(L(vt)&&(vt=R(vt,Et+(vt.key==null||z&&z.key===vt.key?"":(""+vt.key).replace(j,"$&/")+"/")+Rt)),rt.push(vt)),1;Rt=0;var tt=Q===""?".":Q+":";if(G(z))for(var ot=0;ot<z.length;ot++)Q=z[ot],Pt=tt+st(Q,ot),Rt+=P(Q,rt,Et,Pt,vt);else if(ot=M(z),typeof ot=="function")for(z=ot.call(z),ot=0;!(Q=z.next()).done;)Q=Q.value,Pt=tt+st(Q,ot++),Rt+=P(Q,rt,Et,Pt,vt);else if(Pt==="object"){if(typeof z.then=="function")return P(mt(z),rt,Et,Q,vt);throw rt=String(z),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function K(z,rt,Et){if(z==null)return z;var Q=[],vt=0;return P(z,Q,"","",function(Pt){return rt.call(Et,Pt,vt++)}),Q}function q(z){if(z._status===-1){var rt=z._result;rt=rt(),rt.then(function(Et){(z._status===0||z._status===-1)&&(z._status=1,z._result=Et)},function(Et){(z._status===0||z._status===-1)&&(z._status=2,z._result=Et)}),z._status===-1&&(z._status=0,z._result=rt)}if(z._status===1)return z._result.default;throw z._result}var At=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Dt={map:K,forEach:function(z,rt,Et){K(z,function(){rt.apply(this,arguments)},Et)},count:function(z){var rt=0;return K(z,function(){rt++}),rt},toArray:function(z){return K(z,function(rt){return rt})||[]},only:function(z){if(!L(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return me.Activity=v,me.Children=Dt,me.Component=_,me.Fragment=i,me.Profiler=l,me.PureComponent=O,me.StrictMode=s,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,me.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},me.cache=function(z){return function(){return z.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(z,rt,Et){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Q=A({},z.props),vt=z.key;if(rt!=null)for(Pt in rt.key!==void 0&&(vt=""+rt.key),rt)!V.call(rt,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&rt.ref===void 0||(Q[Pt]=rt[Pt]);var Pt=arguments.length-2;if(Pt===1)Q.children=Et;else if(1<Pt){for(var Rt=Array(Pt),tt=0;tt<Pt;tt++)Rt[tt]=arguments[tt+2];Q.children=Rt}return C(z.type,vt,Q)},me.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},me.createElement=function(z,rt,Et){var Q,vt={},Pt=null;if(rt!=null)for(Q in rt.key!==void 0&&(Pt=""+rt.key),rt)V.call(rt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(vt[Q]=rt[Q]);var Rt=arguments.length-2;if(Rt===1)vt.children=Et;else if(1<Rt){for(var tt=Array(Rt),ot=0;ot<Rt;ot++)tt[ot]=arguments[ot+2];vt.children=tt}if(z&&z.defaultProps)for(Q in Rt=z.defaultProps,Rt)vt[Q]===void 0&&(vt[Q]=Rt[Q]);return C(z,Pt,vt)},me.createRef=function(){return{current:null}},me.forwardRef=function(z){return{$$typeof:d,render:z}},me.isValidElement=L,me.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:q}},me.memo=function(z,rt){return{$$typeof:p,type:z,compare:rt===void 0?null:rt}},me.startTransition=function(z){var rt=U.T,Et={};U.T=Et;try{var Q=z(),vt=U.S;vt!==null&&vt(Et,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(k,At)}catch(Pt){At(Pt)}finally{rt!==null&&Et.types!==null&&(rt.types=Et.types),U.T=rt}},me.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},me.use=function(z){return U.H.use(z)},me.useActionState=function(z,rt,Et){return U.H.useActionState(z,rt,Et)},me.useCallback=function(z,rt){return U.H.useCallback(z,rt)},me.useContext=function(z){return U.H.useContext(z)},me.useDebugValue=function(){},me.useDeferredValue=function(z,rt){return U.H.useDeferredValue(z,rt)},me.useEffect=function(z,rt){return U.H.useEffect(z,rt)},me.useEffectEvent=function(z){return U.H.useEffectEvent(z)},me.useId=function(){return U.H.useId()},me.useImperativeHandle=function(z,rt,Et){return U.H.useImperativeHandle(z,rt,Et)},me.useInsertionEffect=function(z,rt){return U.H.useInsertionEffect(z,rt)},me.useLayoutEffect=function(z,rt){return U.H.useLayoutEffect(z,rt)},me.useMemo=function(z,rt){return U.H.useMemo(z,rt)},me.useOptimistic=function(z,rt){return U.H.useOptimistic(z,rt)},me.useReducer=function(z,rt,Et){return U.H.useReducer(z,rt,Et)},me.useRef=function(z){return U.H.useRef(z)},me.useState=function(z){return U.H.useState(z)},me.useSyncExternalStore=function(z,rt,Et){return U.H.useSyncExternalStore(z,rt,Et)},me.useTransition=function(){return U.H.useTransition()},me.version="19.2.8",me}var Y0;function qd(){return Y0||(Y0=1,Sh.exports=aS()),Sh.exports}var Xt=qd();const sS=_v(Xt);var Mh={exports:{}},Fo={},Eh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function rS(){return q0||(q0=1,(function(r){function t(P,K){var q=P.length;P.push(K);t:for(;0<q;){var At=q-1>>>1,Dt=P[At];if(0<l(Dt,K))P[At]=K,P[q]=Dt,q=At;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var K=P[0],q=P.pop();if(q!==K){P[0]=q;t:for(var At=0,Dt=P.length,z=Dt>>>1;At<z;){var rt=2*(At+1)-1,Et=P[rt],Q=rt+1,vt=P[Q];if(0>l(Et,q))Q<Dt&&0>l(vt,Et)?(P[At]=vt,P[Q]=q,At=Q):(P[At]=Et,P[rt]=q,At=rt);else if(Q<Dt&&0>l(vt,q))P[At]=vt,P[Q]=q,At=Q;else break t}}return K}function l(P,K){var q=P.sortIndex-K.sortIndex;return q!==0?q:P.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,T=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=P)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function G(P){if(A=!1,D(P),!T)if(i(m)!==null)T=!0,k||(k=!0,B());else{var K=i(p);K!==null&&mt(G,K.startTime-P)}}var k=!1,U=-1,V=5,C=-1;function R(){return S?!0:!(r.unstable_now()-C<V)}function L(){if(S=!1,k){var P=r.unstable_now();C=P;var K=!0;try{t:{T=!1,A&&(A=!1,I(U),U=-1),M=!0;var q=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var At=v.callback;if(typeof At=="function"){v.callback=null,x=v.priorityLevel;var Dt=At(v.expirationTime<=P);if(P=r.unstable_now(),typeof Dt=="function"){v.callback=Dt,D(P),K=!0;break e}v===i(m)&&s(m),D(P)}else s(m);v=i(m)}if(v!==null)K=!0;else{var z=i(p);z!==null&&mt(G,z.startTime-P),K=!1}}break t}finally{v=null,x=q,M=!1}K=void 0}}finally{K?B():k=!1}}}var B;if(typeof O=="function")B=function(){O(L)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,st=j.port2;j.port1.onmessage=L,B=function(){st.postMessage(null)}}else B=function(){_(L,0)};function mt(P,K){U=_(function(){P(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return P()}finally{x=q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return K()}finally{x=q}},r.unstable_scheduleCallback=function(P,K,q){var At=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?At+q:At):q=At,P){case 1:var Dt=-1;break;case 2:Dt=250;break;case 5:Dt=1073741823;break;case 4:Dt=1e4;break;default:Dt=5e3}return Dt=q+Dt,P={id:g++,callback:K,priorityLevel:P,startTime:q,expirationTime:Dt,sortIndex:-1},q>At?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(A?(I(U),U=-1):A=!0,mt(G,q-At))):(P.sortIndex=Dt,t(m,P),T||M||(T=!0,k||(k=!0,B()))),P},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(P){var K=x;return function(){var q=x;x=K;try{return P.apply(this,arguments)}finally{x=q}}}})(Th)),Th}var Z0;function oS(){return Z0||(Z0=1,Eh.exports=rS()),Eh.exports}var bh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function lS(){if(K0)return Ln;K0=1;var r=qd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.8",Ln}var Q0;function cS(){if(Q0)return bh.exports;Q0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=lS(),bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function uS(){if(J0)return Fo;J0=1;var r=oS(),t=qd(),i=cS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,b=u.child;b;){if(b===a){y=!0,a=u,o=f;break}if(b===o){y=!0,o=u,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,o=u;break}if(b===o){y=!0,o=f,a=u;break}b=b.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case k:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case O:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:st(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return st(e(n))}catch{}}return null}var mt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},At=[],Dt=-1;function z(e){return{current:e}}function rt(e){0>Dt||(e.current=At[Dt],At[Dt]=null,Dt--)}function Et(e,n){Dt++,At[Dt]=e.current,e.current=n}var Q=z(null),vt=z(null),Pt=z(null),Rt=z(null);function tt(e,n){switch(Et(Pt,n),Et(vt,e),Et(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?d0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=d0(n),e=p0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(Q),Et(Q,e)}function ot(){rt(Q),rt(vt),rt(Pt)}function Lt(e){e.memoizedState!==null&&Et(Rt,e);var n=Q.current,a=p0(n,e.type);n!==a&&(Et(vt,e),Et(Q,a))}function zt(e){vt.current===e&&(rt(Q),rt(vt)),Rt.current===e&&(rt(Rt),No._currentValue=q)}var Ot,Ft;function F(e){if(Ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ot=n&&n[1]||"",Ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+e+Ft}var ie=!1;function $t(e,n){if(!e||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ht){var lt=ht}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(ht){lt=ht}e.call(bt.prototype)}}else{try{throw Error()}catch(ht){lt=ht}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ht){if(ht&&lt&&typeof ht.stack=="string")return[ht.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var H=y.split(`
`),at=b.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===at.length)for(o=H.length-1,u=at.length-1;1<=o&&0<=u&&H[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==at[u]){var xt=`
`+H[o].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=o&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?F(a):""}function ye(e,n){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return F("Activity");default:return""}}function Mt(e){try{var n="",a=null;do n+=ye(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Wt=Object.prototype.hasOwnProperty,Ct=r.unstable_scheduleCallback,Ht=r.unstable_cancelCallback,ce=r.unstable_shouldYield,N=r.unstable_requestPaint,E=r.unstable_now,et=r.unstable_getCurrentPriorityLevel,ut=r.unstable_ImmediatePriority,_t=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,te=r.unstable_LowPriority,Bt=r.unstable_IdlePriority,Zt=r.log,yt=r.unstable_setDisableYieldValue,gt=null,wt=null;function jt(e){if(typeof Zt=="function"&&yt(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(gt,e)}catch{}}var kt=Math.clz32?Math.clz32:X,Gt=Math.log,le=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Gt(e)/le|0)|0}var Vt=256,Nt=262144,Ut=4194304;function dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=dt(o):(y&=b,y!==0?u=dt(y):a||(a=b&~e,a!==0&&(u=dt(a))))):(b=o&~f,b!==0?u=dt(b):y!==0?u=dt(y):a||(a=o&~e,a!==0&&(u=dt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Qt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Ue(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Sn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,H=e.expirationTimes,at=e.hiddenUpdates;for(a=y&~a;0<a;){var xt=31-kt(a),bt=1<<xt;b[xt]=0,H[xt]=-1;var lt=at[xt];if(lt!==null)for(at[xt]=null,xt=0;xt<lt.length;xt++){var ht=lt[xt];ht!==null&&(ht.lane&=-536870913)}a&=~bt}o!==0&&Xr(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function Xr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ni(e,n){var a=n&-n;return a=(a&42)!==0?1:ns(a),(a&(e.suspendedLanes|n))!==0?0:a}function ns(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jr(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:z0(e.type))}function is(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var yi=Math.random().toString(36).slice(2),tn="__reactFiber$"+yi,Mn="__reactProps$"+yi,Wi="__reactContainer$"+yi,Yr="__reactEvents$"+yi,du="__reactListeners$"+yi,pu="__reactHandles$"+yi,al="__reactResources$"+yi,as="__reactMarker$"+yi;function qr(e){delete e[tn],delete e[Mn],delete e[Yr],delete e[du],delete e[pu]}function w(e){var n=e[tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wi]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=S0(e);e!==null;){if(a=e[tn])return a;e=S0(e)}return n}e=a,a=e.parentNode}return null}function J(e){if(e=e[tn]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ct(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ft(e){var n=e[al];return n||(n=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[as]=!0}var It=new Set,Yt={};function Jt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Yt[e]=n,e=0;e<n.length;e++)It.add(n[e])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),he={},ae={};function Me(e){return Wt.call(ae,e)?!0:Wt.call(he,e)?!1:fe.test(e)?ae[e]=!0:(he[e]=!0,!1)}function De(e,n,a){if(Me(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ge(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ne(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Le(e){if(!e._valueTracker){var n=re(e)?"checked":"value";e._valueTracker=dn(e,n,""+e[n])}}function Fn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=re(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function vn(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(e,n,a,o,u,f,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Dn(e,y,pe(n)):a!=null?Dn(e,y,pe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+pe(b):e.removeAttribute("name")}function Pn(e,n,a,o,u,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Le(e);return}a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Le(e)}function Dn(e,n,a){n==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function Bs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Le(e)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Qv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function fp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&up(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&up(e,f,n[f])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return $v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Gs=null;function hp(e){var n=J(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ve(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fn(o)}break t;case"textarea":En(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var vu=!1;function dp(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,(Hs!==null||Gs!==null)&&(jl(),Hs&&(n=Hs,e=Gs,Gs=Hs=null,hp(n),e)))for(n=0;n<e.length;n++)hp(e[n])}}function Zr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Yi)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{xu=!1}var xa=null,yu=null,rl=null;function pp(){if(rl)return rl;var e,n=yu,a=n.length,o,u="value"in xa?xa.value:xa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return rl=u.slice(e,1<o?1-o:void 0)}function ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function mp(){return!1}function Hn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:mp,this.isPropagationStopped=mp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Hn(ss),Qr=v({},ss,{view:0,detail:0}),tx=Hn(Qr),Su,Mu,Jr,ul=v({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Su=e.screenX-Jr.screenX,Mu=e.screenY-Jr.screenY):Mu=Su=0,Jr=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),gp=Hn(ul),ex=v({},ul,{dataTransfer:0}),nx=Hn(ex),ix=v({},Qr,{relatedTarget:0}),Eu=Hn(ix),ax=v({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=Hn(ax),rx=v({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ox=Hn(rx),lx=v({},ss,{data:0}),_p=Hn(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fx[e])?!!n[e]:!1}function Tu(){return hx}var dx=v({},Qr,{key:function(e){if(e.key){var n=cx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),px=Hn(dx),mx=v({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Hn(mx),gx=v({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),_x=Hn(gx),vx=v({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=Hn(vx),yx=v({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=Hn(yx),Mx=v({},ss,{newState:0,oldState:0}),Ex=Hn(Mx),Tx=[9,13,27,32],bu=Yi&&"CompositionEvent"in window,$r=null;Yi&&"documentMode"in document&&($r=document.documentMode);var bx=Yi&&"TextEvent"in window&&!$r,xp=Yi&&(!bu||$r&&8<$r&&11>=$r),yp=" ",Sp=!1;function Mp(e,n){switch(e){case"keyup":return Tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vs=!1;function Ax(e,n){switch(e){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(Sp=!0,yp);case"textInput":return e=n.data,e===yp&&Sp?null:e;default:return null}}function Rx(e,n){if(Vs)return e==="compositionend"||!bu&&Mp(e,n)?(e=pp(),rl=yu=xa=null,Vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cx[e.type]:n==="textarea"}function bp(e,n,a,o){Hs?Gs?Gs.push(o):Gs=[o]:Hs=o,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var to=null,eo=null;function wx(e){o0(e,0)}function fl(e){var n=ct(e);if(Fn(n))return e}function Ap(e,n){if(e==="change")return n}var Rp=!1;if(Yi){var Au;if(Yi){var Ru="oninput"in document;if(!Ru){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Ru=typeof Cp.oninput=="function"}Au=Ru}else Au=!1;Rp=Au&&(!document.documentMode||9<document.documentMode)}function wp(){to&&(to.detachEvent("onpropertychange",Dp),eo=to=null)}function Dp(e){if(e.propertyName==="value"&&fl(eo)){var n=[];bp(n,eo,e,_u(e)),dp(wx,n)}}function Dx(e,n,a){e==="focusin"?(wp(),to=n,eo=a,to.attachEvent("onpropertychange",Dp)):e==="focusout"&&wp()}function Lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(eo)}function Ux(e,n){if(e==="click")return fl(n)}function Nx(e,n){if(e==="input"||e==="change")return fl(n)}function Ox(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Ox;function no(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Wt.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,n){var a=Lp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lp(a)}}function Np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Si(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Si(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Px=Yi&&"documentMode"in document&&11>=document.documentMode,ks=null,wu=null,io=null,Du=!1;function Pp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||ks==null||ks!==Si(o)||(o=ks,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=$l(wu,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ks)))}function rs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},Lu={},Ip={};Yi&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function os(e){if(Lu[e])return Lu[e];if(!Xs[e])return e;var n=Xs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return Lu[e]=n[a];return e}var zp=os("animationend"),Fp=os("animationiteration"),Bp=os("animationstart"),Ix=os("transitionrun"),zx=os("transitionstart"),Fx=os("transitioncancel"),Hp=os("transitionend"),Gp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Mi(e,n){Gp.set(e,n),Jt(n,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Ws=0,Nu=0;function dl(){for(var e=Ws,n=Nu=Ws=0;n<e;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Vp(a,u,f)}}function pl(e,n,a,o){si[Ws++]=e,si[Ws++]=n,si[Ws++]=a,si[Ws++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return pl(e,n,a,o),ml(e)}function ls(e,n){return pl(e,null,null,n),ml(e)}function Vp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-kt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function ml(e){if(50<Ao)throw Ao=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var js={};function Bx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Bx(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Pu(e)&&(y=1);else if(typeof e=="string")y=Xy(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Qn(31,a,n,u),e.elementType=C,e.lanes=f,e;case A:return cs(a.children,u,f,n);case S:y=8,u|=24;break;case _:return e=Qn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case G:return e=Qn(13,a,n,u),e.elementType=G,e.lanes=f,e;case k:return e=Qn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:y=10;break t;case I:y=9;break t;case D:y=11;break t;case U:y=14;break t;case V:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function cs(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Xp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function zu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Wp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Wp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Mt(n)},Wp.set(e,n),n)}return{value:e,source:n,stack:Mt(n)}}var Ys=[],qs=0,_l=null,ao=0,oi=[],li=0,ya=null,Oi=1,Pi="";function Zi(e,n){Ys[qs++]=ao,Ys[qs++]=_l,_l=e,ao=n}function jp(e,n,a){oi[li++]=Oi,oi[li++]=Pi,oi[li++]=ya,ya=e;var o=Oi;e=Pi;var u=32-kt(o)-1;o&=~(1<<u),a+=1;var f=32-kt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Oi=1<<32-kt(n)+u|a<<u|o,Pi=f+e}else Oi=1<<f|a<<u|o,Pi=e}function Fu(e){e.return!==null&&(Zi(e,1),jp(e,1,0))}function Bu(e){for(;e===_l;)_l=Ys[--qs],Ys[qs]=null,ao=Ys[--qs],Ys[qs]=null;for(;e===ya;)ya=oi[--li],oi[li]=null,Pi=oi[--li],oi[li]=null,Oi=oi[--li],oi[li]=null}function Yp(e,n){oi[li++]=Oi,oi[li++]=Pi,oi[li++]=ya,Oi=n.id,Pi=n.overflow,ya=e}var Tn=null,Ze=null,Ce=!1,Sa=null,ci=!1,Hu=Error(s(519));function Ma(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(ri(n,e)),Hu}function qp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[tn]=e,n[Mn]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Te(Co[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Bs(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||f0(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ma(e,!0)}function Zp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Zs(e){if(e!==Tn)return!1;if(!Ce)return Zp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ma(e),Zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=y0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=y0(e)}else n===27?(n=Ze,Ia(e.type)?(e=uh,uh=null,Ze=e):Ze=n):Ze=Tn?fi(e.stateNode.nextSibling):null;return!0}function us(){Ze=Tn=null,Ce=!1}function Gu(){var e=Sa;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Sa=null),e}function so(e){Sa===null?Sa=[e]:Sa.push(e)}var Vu=z(null),fs=null,Ki=null;function Ea(e,n,a){Et(Vu,n._currentValue),n._currentValue=a}function Qi(e){e._currentValue=Vu.current,rt(Vu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var H=0;H<n.length;H++)if(b.context===n[H]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ku(f.return,a,e),o||(y=null);break t}f=b.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),ku(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Ks(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var b=u.type;Kn(u.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(u===Rt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}u=u.return}e!==null&&Xu(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){fs=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Kp(fs,e)}function xl(e,n){return fs===null&&hs(e),Kp(e,n)}function Kp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(e===null)throw Error(s(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return a}var Hx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Gx=r.unstable_scheduleCallback,Vx=r.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new Hx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&Gx(Vx,function(){e.controller.abort()})}var oo=null,ju=0,Qs=0,Js=null;function kx(e,n){if(oo===null){var a=oo=[];ju=0,Qs=Kf(),Js={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(Qp,Qp),n}function Qp(){if(--ju===0&&oo!==null){Js!==null&&(Js.status="fulfilled");var e=oo;oo=null,Qs=0,Js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Xx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Jp=P.S;P.S=function(e,n){Pg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&kx(e,n),Jp!==null&&Jp(e,n)};var ds=z(null);function Yu(){var e=ds.current;return e!==null?e:qe.pooledCache}function yl(e,n){n===null?Et(ds,ds.current):Et(ds,n.pool)}function $p(){var e=Yu();return e===null?null:{parent:ln._currentValue,pool:e}}var $s=Error(s(460)),qu=Error(s(474)),Sl=Error(s(542)),Ml={then:function(){}};function tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e}throw ms=n,$s}}function ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,$s):a}}var ms=null;function nm(){if(ms===null)throw Error(s(459));var e=ms;return ms=null,e}function im(e){if(e===$s||e===Sl)throw Error(s(483))}var tr=null,lo=0;function El(e){var n=lo;return lo+=1,tr===null&&(tr=[]),em(tr,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function am(e){function n($,W){if(e){var it=$.deletions;it===null?($.deletions=[W],$.flags|=16):it.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=qi($,W),$.index=0,$.sibling=null,$}function f($,W,it){return $.index=it,e?(it=$.alternate,it!==null?(it=it.index,it<W?($.flags|=67108866,W):it):($.flags|=67108866,W)):($.flags|=1048576,W)}function y($){return e&&$.alternate===null&&($.flags|=67108866),$}function b($,W,it,St){return W===null||W.tag!==6?(W=Iu(it,$.mode,St),W.return=$,W):(W=u(W,it),W.return=$,W)}function H($,W,it,St){var se=it.type;return se===A?xt($,W,it.props.children,St,it.key):W!==null&&(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===V&&ps(se)===W.type)?(W=u(W,it.props),co(W,it),W.return=$,W):(W=gl(it.type,it.key,it.props,null,$.mode,St),co(W,it),W.return=$,W)}function at($,W,it,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=zu(it,$.mode,St),W.return=$,W):(W=u(W,it.children||[]),W.return=$,W)}function xt($,W,it,St,se){return W===null||W.tag!==7?(W=cs(it,$.mode,St,se),W.return=$,W):(W=u(W,it),W.return=$,W)}function bt($,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Iu(""+W,$.mode,it),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return it=gl(W.type,W.key,W.props,null,$.mode,it),co(it,W),it.return=$,it;case T:return W=zu(W,$.mode,it),W.return=$,W;case V:return W=ps(W),bt($,W,it)}if(mt(W)||B(W))return W=cs(W,$.mode,it,null),W.return=$,W;if(typeof W.then=="function")return bt($,El(W),it);if(W.$$typeof===O)return bt($,xl($,W),it);Tl($,W)}return null}function lt($,W,it,St){var se=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return se!==null?null:b($,W,""+it,St);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case M:return it.key===se?H($,W,it,St):null;case T:return it.key===se?at($,W,it,St):null;case V:return it=ps(it),lt($,W,it,St)}if(mt(it)||B(it))return se!==null?null:xt($,W,it,St,null);if(typeof it.then=="function")return lt($,W,El(it),St);if(it.$$typeof===O)return lt($,W,xl($,it),St);Tl($,it)}return null}function ht($,W,it,St,se){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(it)||null,b(W,$,""+St,se);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case M:return $=$.get(St.key===null?it:St.key)||null,H(W,$,St,se);case T:return $=$.get(St.key===null?it:St.key)||null,at(W,$,St,se);case V:return St=ps(St),ht($,W,it,St,se)}if(mt(St)||B(St))return $=$.get(it)||null,xt(W,$,St,se,null);if(typeof St.then=="function")return ht($,W,it,El(St),se);if(St.$$typeof===O)return ht($,W,it,xl(W,St),se);Tl(W,St)}return null}function ee($,W,it,St){for(var se=null,Oe=null,ne=W,ve=W=0,Re=null;ne!==null&&ve<it.length;ve++){ne.index>ve?(Re=ne,ne=null):Re=ne.sibling;var Pe=lt($,ne,it[ve],St);if(Pe===null){ne===null&&(ne=Re);break}e&&ne&&Pe.alternate===null&&n($,ne),W=f(Pe,W,ve),Oe===null?se=Pe:Oe.sibling=Pe,Oe=Pe,ne=Re}if(ve===it.length)return a($,ne),Ce&&Zi($,ve),se;if(ne===null){for(;ve<it.length;ve++)ne=bt($,it[ve],St),ne!==null&&(W=f(ne,W,ve),Oe===null?se=ne:Oe.sibling=ne,Oe=ne);return Ce&&Zi($,ve),se}for(ne=o(ne);ve<it.length;ve++)Re=ht(ne,$,ve,it[ve],St),Re!==null&&(e&&Re.alternate!==null&&ne.delete(Re.key===null?ve:Re.key),W=f(Re,W,ve),Oe===null?se=Re:Oe.sibling=Re,Oe=Re);return e&&ne.forEach(function(Ga){return n($,Ga)}),Ce&&Zi($,ve),se}function ue($,W,it,St){if(it==null)throw Error(s(151));for(var se=null,Oe=null,ne=W,ve=W=0,Re=null,Pe=it.next();ne!==null&&!Pe.done;ve++,Pe=it.next()){ne.index>ve?(Re=ne,ne=null):Re=ne.sibling;var Ga=lt($,ne,Pe.value,St);if(Ga===null){ne===null&&(ne=Re);break}e&&ne&&Ga.alternate===null&&n($,ne),W=f(Ga,W,ve),Oe===null?se=Ga:Oe.sibling=Ga,Oe=Ga,ne=Re}if(Pe.done)return a($,ne),Ce&&Zi($,ve),se;if(ne===null){for(;!Pe.done;ve++,Pe=it.next())Pe=bt($,Pe.value,St),Pe!==null&&(W=f(Pe,W,ve),Oe===null?se=Pe:Oe.sibling=Pe,Oe=Pe);return Ce&&Zi($,ve),se}for(ne=o(ne);!Pe.done;ve++,Pe=it.next())Pe=ht(ne,$,ve,Pe.value,St),Pe!==null&&(e&&Pe.alternate!==null&&ne.delete(Pe.key===null?ve:Pe.key),W=f(Pe,W,ve),Oe===null?se=Pe:Oe.sibling=Pe,Oe=Pe);return e&&ne.forEach(function(eS){return n($,eS)}),Ce&&Zi($,ve),se}function We($,W,it,St){if(typeof it=="object"&&it!==null&&it.type===A&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case M:t:{for(var se=it.key;W!==null;){if(W.key===se){if(se=it.type,se===A){if(W.tag===7){a($,W.sibling),St=u(W,it.props.children),St.return=$,$=St;break t}}else if(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===V&&ps(se)===W.type){a($,W.sibling),St=u(W,it.props),co(St,it),St.return=$,$=St;break t}a($,W);break}else n($,W);W=W.sibling}it.type===A?(St=cs(it.props.children,$.mode,St,it.key),St.return=$,$=St):(St=gl(it.type,it.key,it.props,null,$.mode,St),co(St,it),St.return=$,$=St)}return y($);case T:t:{for(se=it.key;W!==null;){if(W.key===se)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){a($,W.sibling),St=u(W,it.children||[]),St.return=$,$=St;break t}else{a($,W);break}else n($,W);W=W.sibling}St=zu(it,$.mode,St),St.return=$,$=St}return y($);case V:return it=ps(it),We($,W,it,St)}if(mt(it))return ee($,W,it,St);if(B(it)){if(se=B(it),typeof se!="function")throw Error(s(150));return it=se.call(it),ue($,W,it,St)}if(typeof it.then=="function")return We($,W,El(it),St);if(it.$$typeof===O)return We($,W,xl($,it),St);Tl($,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(a($,W.sibling),St=u(W,it),St.return=$,$=St):(a($,W),St=Iu(it,$.mode,St),St.return=$,$=St),y($)):a($,W)}return function($,W,it,St){try{lo=0;var se=We($,W,it,St);return tr=null,se}catch(ne){if(ne===$s||ne===Sl)throw ne;var Oe=Qn(29,ne,null,$.mode);return Oe.lanes=St,Oe.return=$,Oe}finally{}}}var gs=am(!0),sm=am(!1),Ta=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),Vp(e,null,a),n}return pl(e,o,n,a),ml(e)}function uo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wr(e,a)}}function Qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ju=!1;function fo(){if(Ju){var e=Js;if(e!==null)throw e}}function ho(e,n,a,o){Ju=!1;var u=e.updateQueue;Ta=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var H=b,at=H.next;H.next=null,y===null?f=at:y.next=at,y=H;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,b=xt.lastBaseUpdate,b!==y&&(b===null?xt.firstBaseUpdate=at:b.next=at,xt.lastBaseUpdate=H))}if(f!==null){var bt=u.baseState;y=0,xt=at=H=null,b=f;do{var lt=b.lane&-536870913,ht=lt!==b.lane;if(ht?(Ae&lt)===lt:(o&lt)===lt){lt!==0&&lt===Qs&&(Ju=!0),xt!==null&&(xt=xt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,ue=b;lt=n;var We=a;switch(ue.tag){case 1:if(ee=ue.payload,typeof ee=="function"){bt=ee.call(We,bt,lt);break t}bt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ue.payload,lt=typeof ee=="function"?ee.call(We,bt,lt):ee,lt==null)break t;bt=v({},bt,lt);break t;case 2:Ta=!0}}lt=b.callback,lt!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[lt]:ht.push(lt))}else ht={lane:lt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},xt===null?(at=xt=ht,H=bt):xt=xt.next=ht,y|=lt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ht=b,b=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);xt===null&&(H=bt),u.baseState=H,u.firstBaseUpdate=at,u.lastBaseUpdate=xt,f===null&&(u.shared.lanes=0),La|=y,e.lanes=y,e.memoizedState=bt}}function rm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function om(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rm(a[e],n)}var er=z(null),bl=z(0);function lm(e,n){e=ra,Et(bl,e),Et(er,n),ra=e|n.baseLanes}function $u(){Et(bl,ra),Et(er,er.current)}function tf(){ra=bl.current,rt(er),rt(bl)}var Jn=z(null),ui=null;function Ra(e){var n=e.alternate;Et(rn,rn.current&1),Et(Jn,e),ui===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(ui=e)}function ef(e){Et(rn,rn.current),Et(Jn,e),ui===null&&(ui=e)}function cm(e){e.tag===22?(Et(rn,rn.current),Et(Jn,e),ui===null&&(ui=e)):Ca()}function Ca(){Et(rn,rn.current),Et(Jn,Jn.current)}function $n(e){rt(Jn),ui===e&&(ui=null),rt(rn)}var rn=z(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,ge=null,ke=null,cn=null,Rl=!1,nr=!1,_s=!1,Cl=0,po=0,ir=null,Wx=0;function nn(){throw Error(s(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function af(e,n,a,o,u,f){return Ji=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?jm:xf,_s=!1,f=a(o,u),_s=!1,nr&&(f=fm(n,a,o,u)),um(e),f}function um(e){P.H=_o;var n=ke!==null&&ke.next!==null;if(Ji=0,cn=ke=ge=null,Rl=!1,po=0,ir=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&vl(e)&&(un=!0))}function fm(e,n,a,o){ge=e;var u=0;do{if(nr&&(ir=null),po=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,cn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Ym,f=n(a,o)}while(nr);return f}function jx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ge.flags|=1024),n}function sf(){var e=Cl!==0;return Cl=0,e}function rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}Ji=0,cn=ke=ge=null,nr=!1,po=Cl=0,ir=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ge.memoizedState=cn=e:cn=cn.next=e,cn}function on(){if(ke===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=cn===null?ge.memoizedState:cn.next;if(n!==null)cn=n,ke=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?ge.memoizedState=cn=e:cn=cn.next=e}return cn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,ir===null&&(ir=[]),e=em(ir,e,n),n=ge,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?jm:xf),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===O)return bn(e)}throw Error(s(438,String(e)))}function lf(e){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function $i(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=on();return cf(n,ke,e)}function cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=y=null,H=null,at=n,xt=!1;do{var bt=at.lane&-536870913;if(bt!==at.lane?(Ae&bt)===bt:(Ji&bt)===bt){var lt=at.revertLane;if(lt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),bt===Qs&&(xt=!0);else if((Ji&lt)===lt){at=at.next,lt===Qs&&(xt=!0);continue}else bt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(b=H=bt,y=f):H=H.next=bt,ge.lanes|=lt,La|=lt;bt=at.action,_s&&a(f,bt),f=at.hasEagerState?at.eagerState:a(f,bt)}else lt={lane:bt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(b=H=lt,y=f):H=H.next=lt,ge.lanes|=bt,La|=bt;at=at.next}while(at!==null&&at!==n);if(H===null?y=f:H.next=b,!Kn(f,e.memoizedState)&&(un=!0,xt&&(a=Js,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Kn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function hm(e,n,a){var o=ge,u=on(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Kn((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,df(mm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ar(9,{destroy:void 0},pm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(Ji&127)!==0||dm(o,n,a)}return a}function dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=wl(),ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function pm(e,n,a,o){n.value=a,n.getSnapshot=o,gm(n)&&_m(e)}function mm(e,n,a){return a(function(){gm(n)&&_m(e)})}function gm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function _m(e){var n=ls(e,2);n!==null&&Wn(n,e,2)}function ff(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),_s){jt(!0);try{a()}finally{jt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function vm(e,n,a,o){return e.baseState=a,cf(e,ke,typeof o=="function"?o:$i)}function Yx(e,n,a,o,u){if(Ol(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,xm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,y={};P.T=y;try{var b=a(u,o),H=P.S;H!==null&&H(y,b),ym(e,n,b)}catch(at){hf(e,n,at)}finally{f!==null&&y.types!==null&&(f.types=y.types),P.T=f}}else try{f=a(u,o),ym(e,n,f)}catch(at){hf(e,n,at)}}function ym(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sm(e,n,o)},function(o){return hf(e,n,o)}):Sm(e,n,a)}function Sm(e,n,a){n.status="fulfilled",n.value=a,Mm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xm(e,a)))}function hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Mm(n),n=n.next;while(n!==o)}e.action=null}function Mm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Em(e,n){return n}function Tm(e,n){if(Ce){var a=qe.formState;if(a!==null){t:{var o=ge;if(Ce){if(Ze){e:{for(var u=Ze,f=ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=fi(u.nextSibling),o=u.data==="F!";break t}}Ma(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:n},a.queue=o,a=km.bind(null,ge,o),o.dispatch=a,o=ff(!1),f=vf.bind(null,ge,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Yx.bind(null,ge,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function bm(e){var n=on();return Am(n,ke,e)}function Am(e,n,a){if(n=cf(e,n,Em)[0],e=Ll($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(y){throw y===$s?Sl:y}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,ar(9,{destroy:void 0},qx.bind(null,u,a),null)),[o,f,e]}function qx(e,n){e.action=n}function Rm(e){var n=on(),a=ke;if(a!==null)return Am(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ar(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=wl(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Cm(){return on().memoizedState}function Ul(e,n,a,o){var u=In();ge.flags|=e,u.memoizedState=ar(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nl(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&nf(o,ke.memoizedState.deps)?u.memoizedState=ar(n,f,a,o):(ge.flags|=e,u.memoizedState=ar(1|n,f,a,o))}function wm(e,n){Ul(8390656,8,e,n)}function df(e,n){Nl(2048,8,e,n)}function Zx(e){ge.flags|=4;var n=ge.updateQueue;if(n===null)n=wl(),ge.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Dm(e){var n=on().memoizedState;return Zx({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Lm(e,n){return Nl(4,2,e,n)}function Um(e,n){return Nl(4,4,e,n)}function Nm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Om(e,n,a){a=a!=null?a.concat([e]):null,Nl(4,4,Nm.bind(null,n,e),a)}function pf(){}function Pm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Im(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=e(),_s){jt(!0);try{e()}finally{jt(!1)}}return a.memoizedState=[o,n],o}function mf(e,n,a){return a===void 0||(Ji&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=zg(),ge.lanes|=e,La|=e,a)}function zm(e,n,a,o){return Kn(a,n)?a:er.current!==null?(e=mf(e,a,o),Kn(e,n)||(un=!0),e):(Ji&42)===0||(Ji&1073741824)!==0&&(Ae&261930)===0?(un=!0,e.memoizedState=a):(e=zg(),ge.lanes|=e,La|=e,n)}function Fm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var y=P.T,b={};P.T=b,vf(e,!1,n,a);try{var H=u(),at=P.S;if(at!==null&&at(b,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xt=Xx(H,o);go(e,n,xt,ni(e))}else go(e,n,o,ni(e))}catch(bt){go(e,n,{then:function(){},status:"rejected",reason:bt},ni())}finally{K.p=f,y!==null&&b.types!==null&&(y.types=b.types),P.T=y}}function Kx(){}function gf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Bm(e).queue;Fm(e,u,n,q,a===null?Kx:function(){return Hm(e),a(o)})}function Bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hm(e){var n=Bm(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},ni())}function _f(){return bn(No)}function Gm(){return on().memoizedState}function Vm(){return on().memoizedState}function Qx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=ba(a);var o=Aa(n,e,a);o!==null&&(Wn(o,n,a),uo(o,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function Jx(e,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Xm(n,a):(a=Ou(e,n,a,o),a!==null&&(Wn(a,e,o),Wm(a,n,o)))}function km(e,n,a){var o=ni();go(e,n,a,o)}function go(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Xm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(u.hasEagerState=!0,u.eagerState=b,Kn(b,y))return pl(e,n,u,0),qe===null&&dl(),!1}catch{}finally{}if(a=Ou(e,n,u,o),a!==null)return Wn(a,e,o),Wm(a,n,o),!0}return!1}function vf(e,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&Wn(n,e,2)}function Ol(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function Xm(e,n){nr=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Wm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wr(e,a)}}var _o={readContext:bn,use:Dl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};_o.useEffectEvent=nn;var jm={readContext:bn,use:Dl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,Nm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(_s){jt(!0);try{e()}finally{jt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(_s){jt(!0);try{a(n)}finally{jt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Jx.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=ff(e);var n=e.queue,a=km.bind(null,ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=In();return mf(a,e,n)},useTransition:function(){var e=ff(!1);return e=Fm.bind(null,ge,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ge,u=In();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Ae&127)!==0||dm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,wm(mm.bind(null,o,f,e),[e]),o.flags|=2048,ar(9,{destroy:void 0},pm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=qe.identifierPrefix;if(Ce){var a=Pi,o=Oi;a=(o&~(1<<32-kt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:Tm,useActionState:Tm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:lf,useCacheRefresh:function(){return In().memoizedState=Qx.bind(null,ge)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:bn,use:Dl,useCallback:Pm,useContext:bn,useEffect:df,useImperativeHandle:Om,useInsertionEffect:Lm,useLayoutEffect:Um,useMemo:Im,useReducer:Ll,useRef:Cm,useState:function(){return Ll($i)},useDebugValue:pf,useDeferredValue:function(e,n){var a=on();return zm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Ll($i)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:_f,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=on();return vm(a,ke,e,n)},useMemoCache:lf,useCacheRefresh:Vm};xf.useEffectEvent=Dm;var Ym={readContext:bn,use:Dl,useCallback:Pm,useContext:bn,useEffect:df,useImperativeHandle:Om,useInsertionEffect:Lm,useLayoutEffect:Um,useMemo:Im,useReducer:uf,useRef:Cm,useState:function(){return uf($i)},useDebugValue:pf,useDeferredValue:function(e,n){var a=on();return ke===null?mf(a,e,n):zm(a,ke.memoizedState,e,n)},useTransition:function(){var e=uf($i)[0],n=on().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:_f,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,n){var a=on();return ke!==null?vm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Vm};Ym.useEffectEvent=Dm;function yf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ni(),u=ba(o);u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(Wn(n,e,o),uo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ni(),u=ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(Wn(n,e,o),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),o=ba(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(e,o,a),n!==null&&(Wn(n,e,a),uo(n,e,a))}};function qm(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function Zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Sf.enqueueReplaceState(n,n.state,null)}function vs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Km(e){hl(e)}function Qm(e){console.error(e)}function Jm(e){hl(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $m(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function tg(e){return e=ba(e),e.tag=3,e}function eg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){$m(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){$m(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function $x(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Yl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,u)),!1}throw Error(s(435,a.tag))}return Yf(e,o,u),Yl(),!1}if(Ce)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(s(422),{cause:o}),so(ri(e,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),so(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ri(o,a),u=Mf(e.stateNode,o,u),Qu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=ri(f,a),bo===null?bo=[f]:bo.push(f),an!==4&&(an=2),n===null)return!0;o=ri(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,o,e),Qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tg(u),eg(u,e,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),un=!1;function An(e,n,a,o){n.child=e===null?sm(n,null,a,o):gs(n,e.child,a,o)}function ng(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return hs(n),o=af(e,n,a,y,f,u),b=sf(),e!==null&&!un?(rf(e,n,u),ta(e,n,u)):(Ce&&b&&Fu(n),n.flags|=1,An(e,n,o,u),n.child)}function ig(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ag(e,n,f,o,u)):(e=gl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Lf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(y,o)&&e.ref===n.ref)return ta(e,n,u)}return n.flags|=1,e=qi(f,o),e.ref=n.ref,e.return=n,n.child=e}function ag(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(no(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Lf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ta(e,n,u)}return Tf(e,n,a,o,u)}function sg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return rg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,f!==null?f.cachePool:null),f!==null?lm(n,f):$u(),cm(n);else return o=n.lanes=536870912,rg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(yl(n,f.cachePool),lm(n,f),Ca(),n.memoizedState=null):(e!==null&&yl(n,null),$u(),Ca());return An(e,n,u,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rg(e,n,a,o,u){var f=Yu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&yl(n,null),$u(),cm(n),e!==null&&Ks(e,n,o,!0),n.childLanes=u,null}function Il(e,n){return n=Fl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function og(e,n,a){return gs(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function ty(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,vo(null,e);if(ef(n),(e=Ze)?(e=x0(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Il(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=og(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=qe,o!==null&&(y=Ni(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ls(e,y),Wn(o,e,y),Ef;Yl(),n=og(e,n,a)}else e=f.treeContext,Ze=fi(y.nextSibling),Tn=n,Ce=!0,Sa=null,ci=!1,e!==null&&Yp(n,e),n=Il(n,o),n.flags|=4096;return n}return e=qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Tf(e,n,a,o,u){return hs(n),a=af(e,n,a,o,void 0,u),o=sf(),e!==null&&!un?(rf(e,n,u),ta(e,n,u)):(Ce&&o&&Fu(n),n.flags|=1,An(e,n,a,u),n.child)}function lg(e,n,a,o,u,f){return hs(n),n.updateQueue=null,a=fm(n,o,a,u),um(e),o=sf(),e!==null&&!un?(rf(e,n,f),ta(e,n,f)):(Ce&&o&&Fu(n),n.flags|=1,An(e,n,a,f),n.child)}function cg(e,n,a,o,u){if(hs(n),n.stateNode===null){var f=js,y=a.contextType;typeof y=="object"&&y!==null&&(f=bn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Zu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?bn(y):js,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(yf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Sf.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,H=vs(a,b);f.props=H;var at=f.context,xt=a.contextType;y=js,typeof xt=="object"&&xt!==null&&(y=bn(xt));var bt=a.getDerivedStateFromProps;xt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||at!==y)&&Zm(n,f,o,y),Ta=!1;var lt=n.memoizedState;f.state=lt,ho(n,o,f,u),fo(),at=n.memoizedState,b||lt!==at||Ta?(typeof bt=="function"&&(yf(n,a,bt,o),at=n.memoizedState),(H=Ta||qm(n,a,H,o,lt,at,y))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=y,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(e,n),y=n.memoizedProps,xt=vs(a,y),f.props=xt,bt=n.pendingProps,lt=f.context,at=a.contextType,H=js,typeof at=="object"&&at!==null&&(H=bn(at)),b=a.getDerivedStateFromProps,(at=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==bt||lt!==H)&&Zm(n,f,o,H),Ta=!1,lt=n.memoizedState,f.state=lt,ho(n,o,f,u),fo();var ht=n.memoizedState;y!==bt||lt!==ht||Ta||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof b=="function"&&(yf(n,a,b,o),ht=n.memoizedState),(xt=Ta||qm(n,a,xt,o,lt,ht,H)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ht,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ht,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),f.props=o,f.state=ht,f.context=H,o=xt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=gs(n,e.child,null,u),n.child=gs(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ta(e,n,u),e}function ug(e,n,a,o){return us(),n.flags|=256,An(e,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:$p()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function fg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Ra(n):Ca(),(e=Ze)?(e=x0(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(e),a.return=n,n.child=a,Tn=n,Ze=null)):e=null,e===null)throw Ma(n);return ch(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Ca(),u=n.mode,b=Fl({mode:"hidden",children:b},u),o=cs(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,y,a),n.memoizedState=bf,vo(null,o)):(Ra(n),Cf(n,b))}var H=e.memoizedState;if(H!==null&&(b=H.dehydrated,b!==null)){if(f)n.flags&256?(Ra(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Ca(),n.child=e.child,n.flags|=128,n=null):(Ca(),b=o.fallback,u=n.mode,o=Fl({mode:"visible",children:o.children},u),b=cs(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,gs(n,e.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,y,a),n.memoizedState=bf,n=vo(null,o));else if(Ra(n),ch(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var at=y.dgst;y=at,o=Error(s(419)),o.stack="",o.digest=y,so({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(un||Ks(e,n,a,!1),y=(a&e.childLanes)!==0,un||y){if(y=qe,y!==null&&(o=Ni(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ls(e,o),Wn(y,e,o),Ef;lh(b)||Yl(),n=wf(e,n,a)}else lh(b)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=fi(b.nextSibling),Tn=n,Ce=!0,Sa=null,ci=!1,e!==null&&Yp(n,e),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Ca(),b=o.fallback,u=n.mode,H=e.child,at=H.sibling,o=qi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,at!==null?b=qi(at,b):(b=cs(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,vo(null,o),o=n.child,b=e.child.memoizedState,b===null?b=Af(a):(u=b.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=$p(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=Rf(e,y,a),n.memoizedState=bf,vo(e.child,o)):(Ra(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Cf(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return gs(n,e.child,null,a),e=Cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Df(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function dg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=rn.current,b=(y&2)!==0;if(b?(y=y&1|2,n.flags|=128):y&=1,Et(rn,y),An(e,n,o,a),o=Ce?ao:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hg(e,a,n);else if(e.tag===19)hg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,f,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function ey(e,n,a){switch(n.tag){case 3:tt(n,n.stateNode.containerInfo),Ea(n,ln,e.memoizedState.cache),us();break;case 27:case 5:Lt(n);break;case 4:tt(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fg(e,n,a):(Ra(n),e=ta(e,n,a),e!==null?e.sibling:null);Ra(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ks(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return dg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et(rn,rn.current),o)break;return null;case 22:return n.lanes=0,sg(e,n,a,n.pendingProps);case 24:Ea(n,ln,e.memoizedState.cache)}return ta(e,n,a)}function pg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Lf(e,a)&&(n.flags&128)===0)return un=!1,ey(e,n,a);un=(e.flags&131072)!==0}else un=!1,Ce&&(n.flags&1048576)!==0&&jp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ps(n.elementType),n.type=e,typeof e=="function")Pu(e)?(o=vs(e,o),n.tag=1,n=cg(null,n,e,o,a)):(n.tag=0,n=Tf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=ng(null,n,e,o,a);break t}else if(u===U){n.tag=14,n=ig(null,n,e,o,a);break t}}throw n=st(e)||e,Error(s(306,n,""))}}return n;case 0:return Tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=vs(o,n.pendingProps),cg(e,n,o,u,a);case 3:t:{if(tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(e,n),ho(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ea(n,ln,o),o!==f.cache&&Xu(n,[ln],a,!0),fo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ug(e,n,o,a);break t}else if(o!==u){u=ri(Error(s(424)),n),so(u),n=ug(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=fi(e.firstChild),Tn=n,Ce=!0,Sa=null,ci=!0,a=sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(us(),o===u){n=ta(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=b0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=tc(Pt.current).createElement(a),o[tn]=n,o[Mn]=e,Rn(o,a,e),Y(o),n.stateNode=o):n.memoizedState=b0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&Ce&&(o=n.stateNode=M0(n.type,n.pendingProps,Pt.current),Tn=n,ci=!0,u=Ze,Ia(n.type)?(uh=u,Ze=fi(o.firstChild)):Ze=u),An(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=Ze)&&(o=Ly(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Tn=n,Ze=fi(o.firstChild),ci=!1,u=!0):u=!1),u||Ma(n)),Lt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,sh(u,f)?o=null:y!==null&&sh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=af(e,n,jx,null,null,a),No._currentValue=u),zl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=Uy(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Ze=null,e=!0):e=!1),e||Ma(n)),null;case 13:return fg(e,n,a);case 4:return tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=gs(n,null,o,a):An(e,n,o,a),n.child;case 11:return ng(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hs(n),u=bn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return ig(e,n,n.type,n.pendingProps,a);case 15:return ag(e,n,n.type,n.pendingProps,a);case 19:return dg(e,n,a);case 31:return ty(e,n,a);case 22:return sg(e,n,a,n.pendingProps);case 24:return hs(n),o=bn(ln),e===null?(u=Yu(),u===null&&(u=qe,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Zu(n),Ea(n,ln,u)):((e.lanes&a)!==0&&(Ku(e,n),ho(n,null,null,a),fo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ea(n,ln,o)):(o=f.cache,Ea(n,ln,o),o!==u.cache&&Xu(n,[ln],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(e){e.flags|=4}function Uf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Gg())e.flags|=8192;else throw ms=Ml,qu}else e.flags&=-16777217}function mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!D0(n))if(Gg())e.flags|=8192;else throw ms=Ml,qu}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?He():536870912,e.lanes|=n,lr|=n)}function xo(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ny(e,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(ln),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(Ke(n),mg(n,f)):(Ke(n),Uf(n,u,null,o,a))):f?f!==e.memoizedState?(ea(n),Ke(n),mg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ea(n),Ke(n),Uf(n,u,e,o,a)),null;case 27:if(zt(n),a=Pt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Q.current,Zs(n)?qp(n):(e=M0(u,o,a),n.stateNode=e,ea(n))}return Ke(n),null;case 5:if(zt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Q.current,Zs(n))qp(n);else{var y=tc(Pt.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[tn]=n,f[Mn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Rn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ea(n)}}return Ke(n),Uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Pt.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[tn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||f0(e.nodeValue,a)),e||Ma(n,!0)}else e=tc(e).createTextNode(o),e[tn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Zs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[tn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Ke(n),null);case 4:return ot(),e===null&&th(n.stateNode.containerInfo),Ke(n),null;case 10:return Qi(n.type),Ke(n),null;case 19:if(rt(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,xo(o,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)kp(a,e),a=a.sibling;return Et(rn,rn.current&1|2),Ce&&Zi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Xl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Al(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ce)return Ke(n),null}else 2*E()-o.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=rn.current,Et(rn,u?a&1|2:a&1),Ce&&Zi(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return $n(n),tf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function iy(e,n){switch(Bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(ln),ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(rn),null;case 4:return ot(),null;case 10:return Qi(n.type),null;case 22:case 23:return $n(n),tf(),e!==null&&rt(ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(ln),null;case 25:return null;default:return null}}function gg(e,n){switch(Bu(n),n.tag){case 3:Qi(ln),ot();break;case 26:case 27:case 5:zt(n);break;case 4:ot();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:rt(rn);break;case 10:Qi(n.type);break;case 22:case 23:$n(n),tf(),e!==null&&rt(ds);break;case 24:Qi(ln)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(b){Be(n,n.return,b)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,u=n;var H=a,at=b;try{at()}catch(xt){Be(u,H,xt)}}}o=o.next}while(o!==f)}}catch(xt){Be(n,n.return,xt)}}function _g(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{om(n,a)}catch(o){Be(e,e.return,o)}}}function vg(e,n,a){a.props=vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function xg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Nf(e,n,a){try{var o=e.stateNode;by(o,e.type,a,n),o[Mn]=n}catch(u){Be(e,e.return,u)}}function yg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||yg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pf(e,n,a),e=e.sibling;e!==null;)Pf(e,n,a),e=e.sibling}function Hl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function Sg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[tn]=e,n[Mn]=a}catch(f){Be(e,e.return,f)}}var na=!1,fn=!1,If=!1,Mg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function ay(e,n){if(e=e.containerInfo,ih=oc,e=Op(e),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,b=-1,H=-1,at=0,xt=0,bt=e,lt=null;e:for(;;){for(var ht;bt!==a||u!==0&&bt.nodeType!==3||(b=y+u),bt!==f||o!==0&&bt.nodeType!==3||(H=y+o),bt.nodeType===3&&(y+=bt.nodeValue.length),(ht=bt.firstChild)!==null;)lt=bt,bt=ht;for(;;){if(bt===e)break e;if(lt===a&&++at===u&&(b=y),lt===f&&++xt===o&&(H=y),(ht=bt.nextSibling)!==null)break;bt=lt,lt=bt.parentNode}bt=ht}a=b===-1||H===-1?null:{start:b,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:e,selectionRange:a},oc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=vs(a.type,u);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Be(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Eg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),o&4&&yo(5,a);break;case 1:if(aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Be(a,a.return,y)}else{var u=vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Be(a,a.return,y)}}o&64&&_g(a),o&512&&So(a,a.return);break;case 3:if(aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{om(e,n)}catch(y){Be(a,a.return,y)}}break;case 27:n===null&&o&4&&Sg(a);case 26:case 5:aa(e,a),n===null&&o&4&&xg(a),o&512&&So(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),o&4&&Ag(e,a);break;case 13:aa(e,a),o&4&&Rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dy.bind(null,a),Ny(e,a))));break;case 22:if(o=a.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||fn,u=na;var f=fn;na=o,(fn=n)&&!f?sa(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),na=u,fn=f}break;case 30:break;default:aa(e,a)}}function Tg(e){var n=e.alternate;n!==null&&(e.alternate=null,Tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Gn=!1;function ia(e,n,a){for(a=a.child;a!==null;)bg(e,n,a),a=a.sibling}function bg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),ia(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var o=Qe,u=Gn;Ia(a.type)&&(Qe=a.stateNode,Gn=!1),ia(e,n,a),Do(a.stateNode),Qe=o,Gn=u;break;case 5:fn||Ii(a,n);case 6:if(o=Qe,u=Gn,Qe=null,ia(e,n,a),Qe=o,Gn=u,Qe!==null)if(Gn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Gn?(e=Qe,_0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gr(e)):_0(Qe,a.stateNode));break;case 4:o=Qe,u=Gn,Qe=a.stateNode.containerInfo,Gn=!0,ia(e,n,a),Qe=o,Gn=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),fn||wa(4,a,n),ia(e,n,a);break;case 1:fn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&vg(a,n,o)),ia(e,n,a);break;case 21:ia(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ia(e,n,a),fn=o;break;default:ia(e,n,a)}}function Ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gr(e)}catch(a){Be(n,n.return,a)}}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gr(e)}catch(a){Be(n,n.return,a)}}function sy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mg),n;default:throw Error(s(435,e.tag))}}function Gl(e,n){var a=sy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=py.bind(null,e,o);o.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(Ia(b.type)){Qe=b.stateNode,Gn=!1;break t}break;case 5:Qe=b.stateNode,Gn=!1;break t;case 3:case 4:Qe=b.stateNode.containerInfo,Gn=!0;break t}b=b.return}if(Qe===null)throw Error(s(160));bg(f,y,u),Qe=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cg(n,e),n=n.sibling}var Ei=null;function Cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),o&4&&(wa(3,e,e.return),yo(3,e),wa(5,e,e.return));break;case 1:Vn(n,e),kn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&64&&na&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Vn(n,e),kn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[as]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[tn]=e,Y(f),o=f;break t;case"link":var y=C0("link","href",u).get(o+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=C0("meta","content",u).get(o+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[tn]=e,Y(f),o=f}e.stateNode=o}else w0(u,e.type,e.stateNode);else e.stateNode=R0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?w0(u,e.type,e.stateNode):R0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),o&512&&(fn||a===null||Ii(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),o&512&&(fn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{Bn(u,"")}catch(ee){Be(e,e.return,ee)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(Vn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ee){Be(e,e.return,ee)}}break;case 3:if(ic=null,u=Ei,Ei=ec(n.containerInfo),Vn(n,e),Ei=u,kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(ee){Be(e,e.return,ee)}If&&(If=!1,wg(e));break;case 4:o=Ei,Ei=ec(e.stateNode.containerInfo),Vn(n,e),kn(e),Ei=o;break;case 12:Vn(n,e),kn(e);break;case 31:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,at=na,xt=fn;if(na=at||u,fn=xt||H,Vn(n,e),fn=xt,na=at,kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||na||fn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=H.stateNode;var bt=H.memoizedProps.style,lt=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;b.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ee){Be(H,H.return,ee)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ee){Be(H,H.return,ee)}}}else if(n.tag===18){if(a===null){H=n;try{var ht=H.stateNode;u?v0(ht,!0):v0(H.stateNode,!1)}catch(ee){Be(H,H.return,ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gl(e,a))));break;case 19:Vn(n,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gl(e,o)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(yg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(e);Hl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Bn(y,""),a.flags&=-33);var b=Of(e);Hl(e,b,y);break;case 3:case 4:var H=a.stateNode.containerInfo,at=Of(e);Pf(e,at,H);break;default:throw Error(s(161))}}catch(xt){Be(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Eg(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),xs(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vg(n,n.return,a),xs(n);break;case 27:Do(n.stateNode);case 26:case 5:Ii(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),yo(4,f);break;case 1:if(sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Be(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)rm(H[u],b)}catch(at){Be(o,o.return,at)}}a&&y&64&&_g(f),So(f,f.return);break;case 27:Sg(f);case 26:case 5:sa(u,f,a),a&&o===null&&y&4&&xg(f),So(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&y&4&&Ag(u,f);break;case 13:sa(u,f,a),a&&y&4&&Rg(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),So(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function zf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dg(e,n,a,o),n=n.sibling}function Dg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),u&2048&&yo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Ti(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,o):Mo(e,n):f._visibility&2?Ti(e,n,a,o):(f._visibility|=2,sr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&zf(y,n);break;case 24:Ti(e,n,a,o),u&2048&&Ff(n.alternate,n);break;default:Ti(e,n,a,o)}}function sr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,b=a,H=o,at=y.flags;switch(y.tag){case 0:case 11:case 15:sr(f,y,b,H,u),yo(8,y);break;case 23:break;case 22:var xt=y.stateNode;y.memoizedState!==null?xt._visibility&2?sr(f,y,b,H,u):Mo(f,y):(xt._visibility|=2,sr(f,y,b,H,u)),u&&at&2048&&zf(y.alternate,y);break;case 24:sr(f,y,b,H,u),u&&at&2048&&Ff(y.alternate,y);break;default:sr(f,y,b,H,u)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&zf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Ff(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function rr(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)Lg(e,n,a),e=e.sibling}function Lg(e,n,a){switch(e.tag){case 26:rr(e,n,a),e.flags&Eo&&e.memoizedState!==null&&Wy(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:rr(e,n,a);break;case 3:case 4:var o=Ei;Ei=ec(e.stateNode.containerInfo),rr(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,rr(e,n,a),Eo=o):rr(e,n,a));break;default:rr(e,n,a)}}function Ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Og(o,e)}Ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ng(e),e=e.sibling}function Ng(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&wa(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):To(e);break;default:To(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Og(o,e)}Ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function Og(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(Tg(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var ry={getCacheForType:function(e){var n=bn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(ln).controller.signal}},oy=typeof WeakMap=="function"?WeakMap:Map,ze=0,qe=null,Ee=null,Ae=0,Fe=0,ti=null,Da=!1,or=!1,Bf=!1,ra=0,an=0,La=0,ys=0,Hf=0,ei=0,lr=0,bo=null,Xn=null,Gf=!1,kl=0,Pg=0,Xl=1/0,Wl=null,Ua=null,pn=0,Na=null,cr=null,oa=0,Vf=0,kf=null,Ig=null,Ao=0,Xf=null;function ni(){return(ze&2)!==0&&Ae!==0?Ae&-Ae:P.T!==null?Kf():jr()}function zg(){if(ei===0)if((Ae&536870912)===0||Ce){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function Wn(e,n,a){(e===qe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(ur(e,0),Oa(e,Ae,ei,!1)),Sn(e,a),((ze&2)===0||e!==qe)&&(e===qe&&((ze&2)===0&&(ys|=a),an===4&&Oa(e,Ae,ei,!1)),zi(e))}function Fg(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Qt(e,n),u=o?uy(e,n):jf(e,n,!0),f=o;do{if(u===0){or&&!o&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ly(a)){u=jf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;u=bo;var H=b.current.memoizedState.isDehydrated;if(H&&(ur(b,y).flags|=256),y=jf(b,y,!1),y!==2){if(Bf&&!H){b.errorRecoveryDisabledLanes|=f,ys|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){ur(e,0),Oa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,ei,!Da);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-E(),10<u)){if(Oa(o,n,ei,!Da),Tt(o,0,!0)!==0)break t;oa=n,o.timeoutHandle=m0(Bg.bind(null,o,a,Xn,Wl,Gf,n,ei,ys,lr,Da,f,"Throttled",-0,0),u);break t}Bg(o,a,Xn,Wl,Gf,n,ei,ys,lr,Da,f,null,-0,0)}}break}while(!0);zi(e)}function Bg(e,n,a,o,u,f,y,b,H,at,xt,bt,lt,ht){if(e.timeoutHandle=-1,bt=n.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Lg(n,f,bt);var ee=(f&62914560)===f?kl-E():(f&4194048)===f?Pg-E():0;if(ee=jy(bt,ee),ee!==null){oa=f,e.cancelPendingCommit=ee(Yg.bind(null,e,n,f,a,o,u,y,b,H,xt,bt,null,lt,ht)),Oa(e,f,y,!at);return}}Yg(e,n,f,a,o,u,y,b,H)}function ly(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,o){n&=~Hf,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-kt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Xr(e,a,n)}function jl(){return(ze&6)===0?(Ro(0),!1):!0}function Wf(){if(Ee!==null){if(Fe===0)var e=Ee.return;else e=Ee,Ki=fs=null,of(e),tr=null,lo=0,e=Ee;for(;e!==null;)gg(e.alternate,e),e=e.return;Ee=null}}function ur(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,Wf(),qe=e,Ee=a=qi(e.current,null),Ae=n,Fe=0,ti=null,Da=!1,or=Qt(e,n),Bf=!1,lr=ei=Hf=ys=La=an=0,Xn=bo=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-kt(o),f=1<<u;n|=e[u],o&=~f}return ra=n,dl(),a}function Hg(e,n){ge=null,P.H=_o,n===$s||n===Sl?(n=nm(),Fe=3):n===qu?(n=nm(),Fe=4):Fe=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Ee===null&&(an=1,Pl(e,ri(n,e.current)))}function Gg(){var e=Jn.current;return e===null?!0:(Ae&4194048)===Ae?ui===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===ui:!1}function Vg(){var e=P.H;return P.H=_o,e===null?_o:e}function kg(){var e=P.A;return P.A=ry,e}function Yl(){an=4,Da||(Ae&4194048)!==Ae&&Jn.current!==null||(or=!0),(La&134217727)===0&&(ys&134217727)===0||qe===null||Oa(qe,Ae,ei,!1)}function jf(e,n,a){var o=ze;ze|=2;var u=Vg(),f=kg();(qe!==e||Ae!==n)&&(Wl=null,ur(e,n)),n=!1;var y=an;t:do try{if(Fe!==0&&Ee!==null){var b=Ee,H=ti;switch(Fe){case 8:Wf(),y=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var at=Fe;if(Fe=0,ti=null,fr(e,b,H,at),a&&or){y=0;break t}break;default:at=Fe,Fe=0,ti=null,fr(e,b,H,at)}}cy(),y=an;break}catch(xt){Hg(e,xt)}while(!0);return n&&e.shellSuspendCounter++,Ki=fs=null,ze=o,P.H=u,P.A=f,Ee===null&&(qe=null,Ae=0,dl()),y}function cy(){for(;Ee!==null;)Xg(Ee)}function uy(e,n){var a=ze;ze|=2;var o=Vg(),u=kg();qe!==e||Ae!==n?(Wl=null,Xl=E()+500,ur(e,n)):or=Qt(e,n);t:do try{if(Fe!==0&&Ee!==null){n=Ee;var f=ti;e:switch(Fe){case 1:Fe=0,ti=null,fr(e,n,f,1);break;case 2:case 9:if(tm(f)){Fe=0,ti=null,Wg(n);break}n=function(){Fe!==2&&Fe!==9||qe!==e||(Fe=7),zi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:tm(f)?(Fe=0,ti=null,Wg(n)):(Fe=0,ti=null,fr(e,n,f,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var b=Ee;if(y?D0(y):b.stateNode.complete){Fe=0,ti=null;var H=b.sibling;if(H!==null)Ee=H;else{var at=b.return;at!==null?(Ee=at,ql(at)):Ee=null}break e}}Fe=0,ti=null,fr(e,n,f,5);break;case 6:Fe=0,ti=null,fr(e,n,f,6);break;case 8:Wf(),an=6;break t;default:throw Error(s(462))}}fy();break}catch(xt){Hg(e,xt)}while(!0);return Ki=fs=null,P.H=o,P.A=u,ze=a,Ee!==null?0:(qe=null,Ae=0,dl(),an)}function fy(){for(;Ee!==null&&!ce();)Xg(Ee)}function Xg(e){var n=pg(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?ql(e):Ee=n}function Wg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=lg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=lg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:of(n);default:gg(a,n),n=Ee=kp(n,ra),n=pg(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?ql(e):Ee=n}function fr(e,n,a,o){Ki=fs=null,of(n),tr=null,lo=0;var u=n.return;try{if($x(e,u,n,a,Ae)){an=1,Pl(e,ri(a,e.current)),Ee=null;return}}catch(f){if(u!==null)throw Ee=u,f;an=1,Pl(e,ri(a,e.current)),Ee=null;return}n.flags&32768?(Ce||o===1?e=!0:or||(Ae&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),jg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){jg(n,Da);return}e=n.return;var a=ny(n.alternate,n,ra);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);an===0&&(an=5)}function jg(e,n){do{var a=iy(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);an=6,Ee=null}function Yg(e,n,a,o,u,f,y,b,H){e.cancelPendingCommit=null;do Zl();while(pn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nu,xi(e,a,f,y,b,H),e===qe&&(Ee=qe=null,Ae=0),cr=n,Na=e,oa=a,Vf=f,kf=u,Ig=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,my(pt,function(){return Jg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=K.p,K.p=2,y=ze,ze|=4;try{ay(e,n,a)}finally{ze=y,K.p=u,P.T=o}}pn=1,qg(),Zg(),Kg()}}function qg(){if(pn===1){pn=0;var e=Na,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=ze;ze|=4;try{Cg(n,e);var f=ah,y=Op(e.containerInfo),b=f.focusedElem,H=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&Np(b.ownerDocument.documentElement,b)){if(H!==null&&Cu(b)){var at=H.start,xt=H.end;if(xt===void 0&&(xt=at),"selectionStart"in b)b.selectionStart=at,b.selectionEnd=Math.min(xt,b.value.length);else{var bt=b.ownerDocument||document,lt=bt&&bt.defaultView||window;if(lt.getSelection){var ht=lt.getSelection(),ee=b.textContent.length,ue=Math.min(H.start,ee),We=H.end===void 0?ue:Math.min(H.end,ee);!ht.extend&&ue>We&&(y=We,We=ue,ue=y);var $=Up(b,ue),W=Up(b,We);if($&&W&&(ht.rangeCount!==1||ht.anchorNode!==$.node||ht.anchorOffset!==$.offset||ht.focusNode!==W.node||ht.focusOffset!==W.offset)){var it=bt.createRange();it.setStart($.node,$.offset),ht.removeAllRanges(),ue>We?(ht.addRange(it),ht.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ht.addRange(it))}}}}for(bt=[],ht=b;ht=ht.parentNode;)ht.nodeType===1&&bt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<bt.length;b++){var St=bt[b];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}oc=!!ih,ah=ih=null}finally{ze=u,K.p=o,P.T=a}}e.current=n,pn=2}}function Zg(){if(pn===2){pn=0;var e=Na,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var u=ze;ze|=4;try{Eg(e,n.alternate,n)}finally{ze=u,K.p=o,P.T=a}}pn=3}}function Kg(){if(pn===4||pn===3){pn=0,N();var e=Na,n=cr,a=oa,o=Ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,cr=Na=null,Qg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),Fs(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=K.p,K.p=2,P.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var b=o[y];f(b.value,{componentStack:b.stack})}}finally{P.T=n,K.p=u}}(oa&3)!==0&&Zl(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xf?Ao++:(Ao=0,Xf=e):Ao=0,Ro(0)}}function Qg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function Zl(){return qg(),Zg(),Kg(),Jg()}function Jg(){if(pn!==5)return!1;var e=Na,n=Vf;Vf=0;var a=Fs(oa),o=P.T,u=K.p;try{K.p=32>a?32:a,P.T=null,a=kf,kf=null;var f=Na,y=oa;if(pn=0,cr=Na=null,oa=0,(ze&6)!==0)throw Error(s(331));var b=ze;if(ze|=4,Ng(f.current),Dg(f,f.current,y,a),ze=b,Ro(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(gt,f)}catch{}return!0}finally{K.p=u,P.T=o,Qg(e,n)}}function $g(e,n,a){n=ri(a,n),n=Mf(e.stateNode,n,2),e=Aa(e,n,2),e!==null&&(Sn(e,2),zi(e))}function Be(e,n,a){if(e.tag===3)$g(e,e,a);else for(;n!==null;){if(n.tag===3){$g(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ri(a,e),a=tg(2),o=Aa(n,a,2),o!==null&&(eg(a,o,n,e),Sn(o,2),zi(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new oy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),e=hy.bind(null,e,n,a),n.then(e,e))}function hy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Ae&a)===a&&(an===4||an===3&&(Ae&62914560)===Ae&&300>E()-kl?(ze&2)===0&&ur(e,0):Hf|=a,lr===Ae&&(lr=0)),zi(e)}function t0(e,n){n===0&&(n=He()),e=ls(e,n),e!==null&&(Sn(e,n),zi(e))}function dy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),t0(e,a)}function py(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),t0(e,a)}function my(e,n){return Ct(e,n)}var Kl=null,hr=null,qf=!1,Ql=!1,Zf=!1,Pa=0;function zi(e){e!==hr&&e.next===null&&(hr===null?Kl=hr=e:hr=hr.next=e),Ql=!0,qf||(qf=!0,_y())}function Ro(e,n){if(!Zf&&Ql){Zf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-kt(42|e)+1)-1,f&=u&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,a0(o,f))}else f=Ae,f=Tt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Qt(o,f)||(a=!0,a0(o,f));o=o.next}while(a);Zf=!1}}function gy(){e0()}function e0(){Ql=qf=!1;var e=0;Pa!==0&&Ry()&&(e=Pa);for(var n=E(),a=null,o=Kl;o!==null;){var u=o.next,f=n0(o,n);f===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(hr=a)):(a=o,(e!==0||(f&3)!==0)&&(Ql=!0)),o=u}pn!==0&&pn!==5||Ro(e),Pa!==0&&(Pa=0)}function n0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-kt(f),b=1<<y,H=u[y];H===-1?((b&a)===0||(b&o)!==0)&&(u[y]=de(b,n)):H<=n&&(e.expiredLanes|=b),f&=~b}if(n=qe,a=Ae,a=Tt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ht(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ht(o),Fs(a)){case 2:case 8:a=_t;break;case 32:a=pt;break;case 268435456:a=Bt;break;default:a=pt}return o=i0.bind(null,e),a=Ct(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ht(o),e.callbackPriority=2,e.callbackNode=null,2}function i0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=Ae;return o=Tt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Fg(e,o,n),n0(e,E()),e.callbackNode!=null&&e.callbackNode===a?i0.bind(null,e):null)}function a0(e,n){if(Zl())return null;Fg(e,n,!0)}function _y(){wy(function(){(ze&6)!==0?Ct(ut,gy):e0()})}function Kf(){if(Pa===0){var e=Qs;e===0&&(e=Vt,Vt<<=1,(Vt&261888)===0&&(Vt=256)),Pa=e}return Pa}function s0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function r0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function vy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=s0((u[Mn]||null).action),y=o.submitter;y&&(n=(n=y[Mn]||null)?s0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new cl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pa!==0){var H=y?r0(u,y):new FormData(u);gf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(b.preventDefault(),H=y?r0(u,y):new FormData(u),gf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Qf=0;Qf<Uu.length;Qf++){var Jf=Uu[Qf],xy=Jf.toLowerCase(),yy=Jf[0].toUpperCase()+Jf.slice(1);Mi(xy,"on"+yy)}Mi(zp,"onAnimationEnd"),Mi(Fp,"onAnimationIteration"),Mi(Bp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Ix,"onTransitionRun"),Mi(zx,"onTransitionStart"),Mi(Fx,"onTransitionCancel"),Mi(Hp,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function o0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],H=b.instance,at=b.currentTarget;if(b=b.listener,H!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=at;try{f(u)}catch(xt){hl(xt)}u.currentTarget=null,f=H}else for(y=0;y<o.length;y++){if(b=o[y],H=b.instance,at=b.currentTarget,b=b.listener,H!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=at;try{f(u)}catch(xt){hl(xt)}u.currentTarget=null,f=H}}}}function Te(e,n){var a=n[Yr];a===void 0&&(a=n[Yr]=new Set);var o=e+"__bubble";a.has(o)||(l0(n,e,2,!1),a.add(o))}function $f(e,n,a){var o=0;n&&(o|=4),l0(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[Jl]){e[Jl]=!0,It.forEach(function(a){a!=="selectionchange"&&(Sy.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,$f("selectionchange",!1,n))}}function l0(e,n,a,o){switch(z0(n)){case 2:var u=Zy;break;case 8:u=Ky;break;default:u=mh}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function eh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;b!==null;){if(y=w(b),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=f=y;continue t}b=b.parentNode}}o=o.return}dp(function(){var at=f,xt=_u(a),bt=[];t:{var lt=Gp.get(e);if(lt!==void 0){var ht=cl,ee=e;switch(e){case"keypress":if(ol(a)===0)break t;case"keydown":case"keyup":ht=px;break;case"focusin":ee="focus",ht=Eu;break;case"focusout":ee="blur",ht=Eu;break;case"beforeblur":case"afterblur":ht=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=_x;break;case zp:case Fp:case Bp:ht=sx;break;case Hp:ht=xx;break;case"scroll":case"scrollend":ht=tx;break;case"wheel":ht=Sx;break;case"copy":case"cut":case"paste":ht=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=vp;break;case"toggle":case"beforetoggle":ht=Ex}var ue=(n&4)!==0,We=!ue&&(e==="scroll"||e==="scrollend"),$=ue?lt!==null?lt+"Capture":null:lt;ue=[];for(var W=at,it;W!==null;){var St=W;if(it=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||it===null||$===null||(St=Zr(W,$),St!=null&&ue.push(wo(W,St,it))),We)break;W=W.return}0<ue.length&&(lt=new ht(lt,ee,null,a,xt),bt.push({event:lt,listeners:ue}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",lt&&a!==gu&&(ee=a.relatedTarget||a.fromElement)&&(w(ee)||ee[Wi]))break t;if((ht||lt)&&(lt=xt.window===xt?xt:(lt=xt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ht?(ee=a.relatedTarget||a.toElement,ht=at,ee=ee?w(ee):null,ee!==null&&(We=c(ee),ue=ee.tag,ee!==We||ue!==5&&ue!==27&&ue!==6)&&(ee=null)):(ht=null,ee=at),ht!==ee)){if(ue=gp,St="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ue=vp,St="onPointerLeave",$="onPointerEnter",W="pointer"),We=ht==null?lt:ct(ht),it=ee==null?lt:ct(ee),lt=new ue(St,W+"leave",ht,a,xt),lt.target=We,lt.relatedTarget=it,St=null,w(xt)===at&&(ue=new ue($,W+"enter",ee,a,xt),ue.target=it,ue.relatedTarget=We,St=ue),We=St,ht&&ee)e:{for(ue=My,$=ht,W=ee,it=0,St=$;St;St=ue(St))it++;St=0;for(var se=W;se;se=ue(se))St++;for(;0<it-St;)$=ue($),it--;for(;0<St-it;)W=ue(W),St--;for(;it--;){if($===W||W!==null&&$===W.alternate){ue=$;break e}$=ue($),W=ue(W)}ue=null}else ue=null;ht!==null&&c0(bt,lt,ht,ue,!1),ee!==null&&We!==null&&c0(bt,We,ee,ue,!0)}}t:{if(lt=at?ct(at):window,ht=lt.nodeName&&lt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&lt.type==="file")var Oe=Ap;else if(Tp(lt))if(Rp)Oe=Nx;else{Oe=Lx;var ne=Dx}else ht=lt.nodeName,!ht||ht.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?at&&mu(at.elementType)&&(Oe=Ap):Oe=Ux;if(Oe&&(Oe=Oe(e,at))){bp(bt,Oe,a,xt);break t}ne&&ne(e,lt,at),e==="focusout"&&at&&lt.type==="number"&&at.memoizedProps.value!=null&&Dn(lt,"number",lt.value)}switch(ne=at?ct(at):window,e){case"focusin":(Tp(ne)||ne.contentEditable==="true")&&(ks=ne,wu=at,io=null);break;case"focusout":io=wu=ks=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Pp(bt,a,xt);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":Pp(bt,a,xt)}var ve;if(bu)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Vs?Mp(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(xp&&a.locale!=="ko"&&(Vs||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Vs&&(ve=pp()):(xa=xt,yu="value"in xa?xa.value:xa.textContent,Vs=!0)),ne=$l(at,Re),0<ne.length&&(Re=new _p(Re,e,null,a,xt),bt.push({event:Re,listeners:ne}),ve?Re.data=ve:(ve=Ep(a),ve!==null&&(Re.data=ve)))),(ve=bx?Ax(e,a):Rx(e,a))&&(Re=$l(at,"onBeforeInput"),0<Re.length&&(ne=new _p("onBeforeInput","beforeinput",null,a,xt),bt.push({event:ne,listeners:Re}),ne.data=ve)),vy(bt,e,at,a,xt)}o0(bt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zr(e,a),u!=null&&o.unshift(wo(e,u,f)),u=Zr(e,n),u!=null&&o.push(wo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function My(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c0(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var b=a,H=b.alternate,at=b.stateNode;if(b=b.tag,H!==null&&H===o)break;b!==5&&b!==26&&b!==27||at===null||(H=at,u?(at=Zr(a,f),at!=null&&y.unshift(wo(a,at,H))):u||(at=Zr(a,f),at!=null&&y.push(wo(a,at,H)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function u0(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ty,"")}function f0(e,n){return n=u0(n),u0(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":Ge(e,"class",o);break;case"tabIndex":Ge(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,a,o);break;case"style":fp(e,o,f);break;case"data":if(n!=="object"){Ge(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),De(e,"popover",o);break;case"xlinkActuate":Ne(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ne(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ne(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ne(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ne(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ne(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":De(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jv.get(a)||a,De(e,a,o))}}function nh(e,n,a,o,u,f){switch(a){case"style":fp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):De(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,y,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var b=f=y=u=null,H=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":u=xt;break;case"type":y=xt;break;case"checked":H=xt;break;case"defaultChecked":at=xt;break;case"value":f=xt;break;case"defaultValue":b=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,xt,a,null)}}Pn(e,f,b,H,at,y,u,!1);return;case"select":Te("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:Xe(e,n,u,b,a,null)}n=f,a=y,e.multiple=!!o,n!=null?en(e,!!o,n,!1):a!=null&&en(e,!!o,a,!0);return;case"textarea":Te("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Xe(e,n,y,b,a,null)}Bs(e,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,H,o,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)Te(Co[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,at,o,a,null)}return;default:if(mu(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&nh(e,n,xt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Xe(e,n,b,o,a,null))}function by(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,b=null,H=null,at=null,xt=null;for(ht in a){var bt=a[ht];if(a.hasOwnProperty(ht)&&bt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":H=bt;default:o.hasOwnProperty(ht)||Xe(e,n,ht,null,o,bt)}}for(var lt in o){var ht=o[lt];if(bt=a[lt],o.hasOwnProperty(lt)&&(ht!=null||bt!=null))switch(lt){case"type":f=ht;break;case"name":u=ht;break;case"checked":at=ht;break;case"defaultChecked":xt=ht;break;case"value":y=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==bt&&Xe(e,n,lt,ht,o,bt)}}Ve(e,y,b,H,at,xt,f,u);return;case"select":ht=y=b=lt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ht=H;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":lt=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==H&&Xe(e,n,u,f,o,H)}n=b,a=y,o=ht,lt!=null?en(e,!!a,lt,!1):!!o!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":ht=lt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Xe(e,n,b,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":lt=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,y,u,o,f)}En(e,lt,ht);return;case"option":for(var ee in a)if(lt=a[ee],a.hasOwnProperty(ee)&&lt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Xe(e,n,ee,null,o,lt)}for(H in o)if(lt=o[H],ht=a[H],o.hasOwnProperty(H)&&lt!==ht&&(lt!=null||ht!=null))switch(H){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Xe(e,n,H,lt,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)lt=a[ue],a.hasOwnProperty(ue)&&lt!=null&&!o.hasOwnProperty(ue)&&Xe(e,n,ue,null,o,lt);for(at in o)if(lt=o[at],ht=a[at],o.hasOwnProperty(at)&&lt!==ht&&(lt!=null||ht!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Xe(e,n,at,lt,o,ht)}return;default:if(mu(n)){for(var We in a)lt=a[We],a.hasOwnProperty(We)&&lt!==void 0&&!o.hasOwnProperty(We)&&nh(e,n,We,void 0,o,lt);for(xt in o)lt=o[xt],ht=a[xt],!o.hasOwnProperty(xt)||lt===ht||lt===void 0&&ht===void 0||nh(e,n,xt,lt,o,ht);return}}for(var $ in a)lt=a[$],a.hasOwnProperty($)&&lt!=null&&!o.hasOwnProperty($)&&Xe(e,n,$,null,o,lt);for(bt in o)lt=o[bt],ht=a[bt],!o.hasOwnProperty(bt)||lt===ht||lt==null&&ht==null||Xe(e,n,bt,lt,o,ht)}function h0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ay(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,b=u.duration;if(f&&b&&h0(y)){for(y=0,b=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],at=H.startTime;if(at>b)break;var xt=H.transferSize,bt=H.initiatorType;xt&&h0(bt)&&(H=H.responseEnd,y+=xt*(H<b?1:(b-at)/(H-at)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ih=null,ah=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function d0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function Ry(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(e){return g0.resolve(null).then(e).catch(Dy)}:m0;function Dy(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function _0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),gr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var y=f.nextSibling,b=f.nodeName;f[as]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Do(e.ownerDocument.body);a=u}while(a);gr(n)}function v0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ly(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[as])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Uy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function x0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ny(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function y0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function S0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function M0(e,n,a){switch(n=tc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qr(e)}var hi=new Map,E0=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=K.d;K.d={f:Oy,r:Py,D:Iy,C:zy,L:Fy,m:By,X:Gy,S:Hy,M:Vy};function Oy(){var e=la.f(),n=jl();return e||n}function Py(e){var n=J(e);n!==null&&n.tag===5&&n.type==="form"?Hm(n):la.r(e)}var dr=typeof document>"u"?null:document;function T0(e,n,a){var o=dr;if(o&&typeof n=="string"&&n){var u=vn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),E0.has(u)||(E0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),Y(n),o.head.appendChild(n)))}}function Iy(e){la.D(e),T0("dns-prefetch",e,null)}function zy(e,n){la.C(e,n),T0("preconnect",e,n)}function Fy(e,n,a){la.L(e,n,a);var o=dr;if(o&&e&&n){var u='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vn(a.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var f=u;switch(n){case"style":f=pr(e);break;case"script":f=mr(e)}hi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),Rn(n,"link",e),Y(n),o.head.appendChild(n)))}}function By(e,n){la.m(e,n);var a=dr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vn(o)+'"][href="'+vn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(e)}if(!hi.has(f)&&(e=v({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),Rn(o,"link",e),Y(o),a.head.appendChild(o)}}}function Hy(e,n,a){la.S(e,n,a);var o=dr;if(o&&e){var u=ft(o).hoistableStyles,f=pr(e);n=n||"default";var y=u.get(f);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(Lo(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&fh(e,a);var H=y=o.createElement("link");Y(H),Rn(H,"link",e),H._p=new Promise(function(at,xt){H.onload=at,H.onerror=xt}),H.addEventListener("load",function(){b.loading|=1}),H.addEventListener("error",function(){b.loading|=2}),b.loading|=4,nc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},u.set(f,y)}}}function Gy(e,n){la.X(e,n);var a=dr;if(a&&e){var o=ft(a).hoistableScripts,u=mr(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=v({src:e,async:!0},n),(n=hi.get(u))&&hh(e,n),f=a.createElement("script"),Y(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Vy(e,n){la.M(e,n);var a=dr;if(a&&e){var o=ft(a).hoistableScripts,u=mr(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=hi.get(u))&&hh(e,n),f=a.createElement("script"),Y(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function b0(e,n,a,o){var u=(u=Pt.current)?ec(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=ft(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=pr(a.href);var f=ft(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Lo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||ky(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=ft(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pr(e){return'href="'+vn(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function A0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ky(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),Y(n),e.head.appendChild(n))}function mr(e){return'[src="'+vn(e)+'"]'}function Uo(e){return"script[async]"+e}function R0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+vn(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),Rn(o,"style",u),nc(o,a.precedence,e),n.instance=o;case"stylesheet":u=pr(a.href);var f=e.querySelector(Lo(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;o=A0(a),(u=hi.get(u))&&fh(o,u),f=(e.ownerDocument||e).createElement("link"),Y(f);var y=f;return y._p=new Promise(function(b,H){y.onload=b,y.onerror=H}),Rn(f,"link",o),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=mr(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,Y(u),u):(o=a,(u=hi.get(f))&&(o=v({},a),hh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nc(o,a.precedence,e));return n.instance}function nc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function C0(e,n,a){if(ic===null){var o=new Map,u=ic=new Map;u.set(a,o)}else u=ic,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[as]||f[tn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var b=o.get(y);b?b.push(f):o.set(y,[f])}}return o}function w0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Xy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function D0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(o.href),f=n.querySelector(Lo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ac.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,o=A0(o),(u=hi.get(u))&&fh(o,u),f=f.createElement("link"),Y(f);var y=f;y._p=new Promise(function(b,H){y.onload=b,y.onerror=H}),Rn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ac.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function jy(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&dh===0&&(dh=62500*Ay());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>dh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(Yy,e),sc=null,ac.call(e))}function Yy(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var No={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function qy(e,n,a,o,u,f,y,b,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function L0(e,n,a,o,u,f,y,b,H,at,xt,bt){return e=new qy(e,n,a,y,H,at,xt,bt,b),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Zu(f),e}function U0(e){return e?(e=js,e):js}function N0(e,n,a,o,u,f){u=U0(u),o.context===null?o.context=u:o.pendingContext=u,o=ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Aa(e,o,n),a!==null&&(Wn(a,e,n),uo(a,e,n))}function O0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ph(e,n){O0(e,n),(e=e.alternate)&&O0(e,n)}function P0(e){if(e.tag===13||e.tag===31){var n=ls(e,67108864);n!==null&&Wn(n,e,67108864),ph(e,67108864)}}function I0(e){if(e.tag===13||e.tag===31){var n=ni();n=ns(n);var a=ls(e,n);a!==null&&Wn(a,e,n),ph(e,n)}}var oc=!0;function Zy(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=2,mh(e,n,a,o)}finally{K.p=f,P.T=u}}function Ky(e,n,a,o){var u=P.T;P.T=null;var f=K.p;try{K.p=8,mh(e,n,a,o)}finally{K.p=f,P.T=u}}function mh(e,n,a,o){if(oc){var u=gh(o);if(u===null)eh(e,n,o,lc,a),F0(e,o);else if(Jy(u,e,n,a,o))o.stopPropagation();else if(F0(e,o),n&4&&-1<Qy.indexOf(e)){for(;u!==null;){var f=J(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=dt(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var H=1<<31-kt(y);b.entanglements[1]|=H,y&=~H}zi(f),(ze&6)===0&&(Xl=E()+500,Ro(0))}}break;case 31:case 13:b=ls(f,2),b!==null&&Wn(b,f,2),jl(),ph(f,2)}if(f=gh(o),f===null&&eh(e,n,o,lc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else eh(e,n,o,null,a)}}function gh(e){return e=_u(e),_h(e)}var lc=null;function _h(e){if(lc=null,e=w(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case ut:return 2;case _t:return 8;case pt:case te:return 32;case Bt:return 268435456;default:return 32}default:return 32}}var vh=!1,za=null,Fa=null,Ba=null,Oo=new Map,Po=new Map,Ha=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(e,n){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Io(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=J(n),n!==null&&P0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Jy(e,n,a,o,u){switch(n){case"focusin":return za=Io(za,e,n,a,o,u),!0;case"dragenter":return Fa=Io(Fa,e,n,a,o,u),!0;case"mouseover":return Ba=Io(Ba,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Io(Oo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Io(Po.get(f)||null,e,n,a,o,u)),!0}return!1}function B0(e){var n=w(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,is(e.priority,function(){I0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,is(e.priority,function(){I0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=J(a),n!==null&&P0(n),e.blockedOn=a,!1;n.shift()}return!0}function H0(e,n,a){cc(e)&&a.delete(n)}function $y(){vh=!1,za!==null&&cc(za)&&(za=null),Fa!==null&&cc(Fa)&&(Fa=null),Ba!==null&&cc(Ba)&&(Ba=null),Oo.forEach(H0),Po.forEach(H0)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,$y)))}var fc=null;function G0(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var f=J(a);f!==null&&(e.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function gr(e){function n(H){return uc(H,e)}za!==null&&uc(za,e),Fa!==null&&uc(Fa,e),Ba!==null&&uc(Ba,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)B0(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Mn]||null;if(typeof f=="function")y||G0(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Mn]||null)b=y.formAction;else if(_h(u)!==null)continue}else b=y.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),G0(a)}}}function V0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(e){this._internalRoot=e}hc.prototype.render=xh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();N0(a,o,e,n,null,null)},hc.prototype.unmount=xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;N0(e.current,2,null,e,null,null),jl(),n[Wi]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&B0(e)}};var k0=t.version;if(k0!=="19.2.8")throw Error(s(527,k0,"19.2.8"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var tS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{gt=dc.inject(tS),wt=dc}catch{}}return Fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Km,f=Qm,y=Jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=L0(e,1,!1,null,null,a,o,null,u,f,y,V0),e[Wi]=n.current,th(e),new xh(n)},Fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Km,y=Qm,b=Jm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=L0(e,1,!0,n,a??null,o,u,H,f,y,b,V0),n.context=U0(null),a=n.current,o=ni(),o=ns(o),u=ba(o),u.callback=null,Aa(a,u,o),a=o,n.current.lanes=a,Sn(n,a),zi(n),e[Wi]=n.current,th(e),new hc(n)},Fo.version="19.2.8",Fo}var $0;function fS(){if($0)return Mh.exports;$0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=uS(),Mh.exports}var hS=fS();const dS=_v(hS);var oe=(r=>(r.NONE="NONE",r.RESIDENTIAL="RESIDENTIAL",r.COMMERCIAL="COMMERCIAL",r.INDUSTRIAL="INDUSTRIAL",r.ROAD="ROAD",r.PARK="PARK",r.POWER_PLANT="POWER_PLANT",r.WATER_TOWER="WATER_TOWER",r.FIRE_STATION="FIRE_STATION",r.HOSPITAL="HOSPITAL",r.SCHOOL="SCHOOL",r.UNIVERSITY="UNIVERSITY",r.WASTE_MANAGEMENT="WASTE_MANAGEMENT",r.LANDMARK="LANDMARK",r))(oe||{});const bi=24,pS=10,pc=5e4,mc=0,Bo=65,gc=1,Ho=85,_c=100,Va=55,vc=0,xc=10,yc=0,vv=2500,t_=25,mS=20,gS=.1,_S=0,vS=-1e4,xS=-5,wi=1,pa=100,e_=5e-5,yS=.1,SS=2,MS=5,ES=5,TS=1,n_=16729344,i_=13369344,a_=.6,bS=200,AS=50,RS=7,Sc=35,Mc=55,CS=150,wS=20,DS=6,LS=500,US=60,NS=10,ws=25,OS=.3,PS=100,IS=.05,qo=50,zS=.05,FS=200,BS=.35,HS=3,GS=.1,VS=.15,kS=4,Ss=3,s_=100,ka=3,r_=40,XS=vv/2,Cn={[oe.NONE]:{name:"없음",cost:0,maintenanceCost:0,color:0,height:0,icon:"",isFlammable:!1},[oe.RESIDENTIAL]:{name:"주거",cost:300,maintenanceCost:10,color:2278750,height:15,residentialCapacity:50,powerDemand:5,waterDemand:3,happinessEffect:1,icon:"🏠",isFlammable:!0,upgrades:[{name:"주거 레벨 2",cost:450,effects:{residentialCapacity:75,maintenanceCost:15,powerDemand:7,waterDemand:5,height:20}},{name:"주거 레벨 3",cost:700,effects:{residentialCapacity:100,maintenanceCost:22,powerDemand:10,waterDemand:7,height:25}}]},[oe.COMMERCIAL]:{name:"상업",cost:400,maintenanceCost:25,color:3900150,height:20,jobsProvided:20,powerDemand:10,waterDemand:5,happinessEffect:1,icon:"🏢",isFlammable:!0,upgrades:[{name:"상업 레벨 2",cost:600,effects:{jobsProvided:30,maintenanceCost:38,powerDemand:15,waterDemand:8,height:25}}]},[oe.INDUSTRIAL]:{name:"산업",cost:550,maintenanceCost:40,color:16096779,height:25,jobsProvided:30,powerDemand:20,waterDemand:10,happinessEffect:-4,icon:"🏭",isFlammable:!0,pollutionOutput:5,upgrades:[{name:"산업 레벨 2",cost:850,effects:{jobsProvided:45,maintenanceCost:60,powerDemand:30,waterDemand:15,happinessEffect:-5,height:30,pollutionOutput:8}}]},[oe.ROAD]:{name:"도로",cost:30,maintenanceCost:3,color:7041664,height:.5,icon:"ରା",isFlammable:!1},[oe.PARK]:{name:"공원",cost:180,maintenanceCost:5,color:8702998,height:2,happinessEffect:5,powerDemand:1,waterDemand:2,icon:"🌳",isFlammable:!0,pollutionReduction:1,appealPoints:3,upgrades:[{name:"공원 레벨 2",cost:270,effects:{happinessEffect:8,maintenanceCost:8,height:3,pollutionReduction:2,appealPoints:5}}]},[oe.POWER_PLANT]:{name:"발전소",cost:1100,maintenanceCost:75,color:15680580,height:30,powerCapacity:100,waterDemand:10,happinessEffect:-2,icon:"⚡",isFlammable:!1,pollutionOutput:8,upgrades:[{name:"발전소 레벨 2",cost:1700,effects:{powerCapacity:150,maintenanceCost:110,waterDemand:15,happinessEffect:-3,height:35,pollutionOutput:12}}]},[oe.WATER_TOWER]:{name:"급수탑",cost:700,maintenanceCost:30,color:959977,height:28,waterCapacity:80,powerDemand:10,icon:"💧",isFlammable:!1},[oe.FIRE_STATION]:{name:"소방서",cost:1400,maintenanceCost:100,color:14427686,height:22,icon:"🚒",isFlammable:!1,powerDemand:15,waterDemand:5,fireFightingPower:MS,fireCoverageRadius:ES,maxActiveFiresHandled:TS},[oe.HOSPITAL]:{name:"병원",cost:1700,maintenanceCost:125,color:4906624,height:26,icon:"🏥",isFlammable:!1,powerDemand:20,waterDemand:10,patientCapacity:bS,healthPointContribution:AS,healthServiceRadius:RS},[oe.SCHOOL]:{name:"학교",cost:1e3,maintenanceCost:60,color:16436245,height:18,icon:"🏫",isFlammable:!1,powerDemand:10,waterDemand:8,studentCapacity:CS,educationPointContribution:wS,educationCoverageRadius:DS,happinessEffect:2,upgrades:[{name:"학교 레벨 2",cost:1400,effects:{studentCapacity:220,maintenanceCost:90,educationPointContribution:30,height:20,happinessEffect:3}}]},[oe.UNIVERSITY]:{name:"대학교",cost:2500,maintenanceCost:175,color:9133302,height:32,icon:"🎓",isFlammable:!1,powerDemand:30,waterDemand:15,studentCapacity:LS,educationPointContribution:US,educationCoverageRadius:NS,happinessEffect:4,upgrades:[{name:"대학교 레벨 2",cost:3400,effects:{studentCapacity:750,maintenanceCost:250,educationPointContribution:90,height:36,happinessEffect:6}}]},[oe.WASTE_MANAGEMENT]:{name:"폐기물 처리장",cost:1200,maintenanceCost:90,color:5231045,height:20,icon:"♻️",isFlammable:!0,powerDemand:12,waterDemand:4,pollutionReduction:20,happinessEffect:-1},[oe.LANDMARK]:{name:"조각상",cost:2800,maintenanceCost:100,color:10530496,height:26,icon:"🗿",isFlammable:!1,powerDemand:5,waterDemand:3,happinessEffect:2,appealPoints:25}},WS=[oe.NONE];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="177",Nr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jS=0,o_=1,YS=2,xv=1,qS=2,ma=3,ts=0,qn=1,Bi=2,Ja=0,Or=1,l_=2,c_=3,u_=4,ZS=5,Ds=100,KS=101,QS=102,JS=103,$S=104,tM=200,eM=201,nM=202,iM=203,rd=204,od=205,aM=206,sM=207,rM=208,oM=209,lM=210,cM=211,uM=212,fM=213,hM=214,ld=0,cd=1,ud=2,zr=3,fd=4,hd=5,dd=6,pd=7,yv=0,dM=1,pM=2,$a=0,mM=1,gM=2,_M=3,vM=4,xM=5,yM=6,SM=7,Sv=300,Fr=301,Br=302,md=303,gd=304,cu=306,_d=1e3,Us=1001,vd=1002,Ui=1003,MM=1004,Ec=1005,Hi=1006,Ah=1007,Ns=1008,Vi=1009,Mv=1010,Ev=1011,Ko=1012,Kd=1013,Os=1014,ga=1015,tl=1016,Qd=1017,Jd=1018,Qo=1020,Tv=35902,bv=1021,Av=1022,Li=1023,Jo=1026,$o=1027,Rv=1028,$d=1029,Cv=1030,tp=1031,ep=1033,Jc=33776,$c=33777,tu=33778,eu=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,Td=37492,bd=37496,Ad=37808,Rd=37809,Cd=37810,wd=37811,Dd=37812,Ld=37813,Ud=37814,Nd=37815,Od=37816,Pd=37817,Id=37818,zd=37819,Fd=37820,Bd=37821,nu=36492,Hd=36494,Gd=36495,wv=36283,Vd=36284,kd=36285,Xd=36286,EM=3200,TM=3201,Dv=0,bM=1,Qa="",pi="srgb",Hr="srgb-linear",au="linear",je="srgb",_r=7680,f_=519,AM=512,RM=513,CM=514,Lv=515,wM=516,DM=517,LM=518,UM=519,h_=35044,d_="300 es",_a=2e3,su=2001;class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,Wd=180/Math.PI;function el(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function be(r,t,i){return Math.max(t,Math.min(i,r))}function NM(r,t){return(r%t+t)%t}function Rh(r,t,i){return(1-i)*r+i*t}function Go(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const OM={DEG2RAD:Zo};class _e{constructor(t=0,i=0){_e.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=c[h+0],M=c[h+1],T=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=T,t[i+3]=A;return}if(v!==A||m!==x||p!==M||g!==T){let S=1-d;const _=m*x+p*M+g*T+v*A,I=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const G=Math.sqrt(O),k=Math.atan2(G,_*I);S=Math.sin(S*k)/G,d=Math.sin(d*k)/G}const D=d*I;if(m=m*S+x*D,p=p*S+M*D,g=g*S+T*D,v=v*S+A*D,S===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[h],x=c[h+1],M=c[h+2],T=c[h+3];return t[i]=d*T+g*v+m*M-p*x,t[i+1]=m*T+g*x+p*v-d*M,t[i+2]=p*T+g*M+d*x-m*v,t[i+3]=g*T-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(c/2),x=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=x*g*v+p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v-x*M*T;break;case"YXZ":this._x=x*g*v+p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v+x*M*T;break;case"ZXY":this._x=x*g*v-p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v-x*M*T;break;case"ZYX":this._x=x*g*v-p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v+x*M*T;break;case"YZX":this._x=x*g*v+p*M*T,this._y=p*M*v+x*g*T,this._z=p*g*T-x*M*v,this._w=p*g*v-x*M*T;break;case"XZY":this._x=x*g*v-p*M*T,this._y=p*M*v-x*g*T,this._z=p*g*T+x*M*v,this._w=p*g*v+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(p_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ch=new nt,p_=new Ps;class xe{constructor(t,i,s,l,c,h,d,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],T=s[8],A=l[0],S=l[3],_=l[6],I=l[1],O=l[4],D=l[7],G=l[2],k=l[5],U=l[8];return c[0]=h*A+d*I+m*G,c[3]=h*S+d*O+m*k,c[6]=h*_+d*D+m*U,c[1]=p*A+g*I+v*G,c[4]=p*S+g*O+v*k,c[7]=p*_+g*D+v*U,c[2]=x*A+M*I+T*G,c[5]=x*S+M*O+T*k,c[8]=x*_+M*D+T*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*c,M=p*c-h*m,T=i*v+s*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(l*p-g*s)*A,t[2]=(d*s-l*h)*A,t[3]=x*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(wh.makeScale(t,i)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,i){return this.premultiply(wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new xe;function Uv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function PM(){const r=ru("canvas");return r.style.display="block",r}const m_={};function Pr(r){r in m_||(m_[r]=!0,console.warn(r))}function IM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function zM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function FM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const g_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BM(){const r={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===je&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===je&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?au:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Hr]:{primaries:t,whitePoint:s,transfer:au,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:je,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}const Ie=BM();function va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class HM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{vr===void 0&&(vr=ru("canvas")),vr.width=t.width,vr.height=t.height;const l=vr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=va(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GM=0;class np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=el(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Dh(l[h].image)):c.push(Dh(l[h]))}else c=Dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;const Lh=new nt;class Zn extends zs{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Us,l=Us,c=Hi,h=Ns,d=Li,m=Vi,p=Zn.DEFAULT_ANISOTROPY,g=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=el(),this.name="",this.source=new np(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Sv;Zn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],T=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,G=(_+1)/2,k=(g+x)/4,U=(v+A)/4,V=(T+S)/4;return O>D&&O>G?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=k/s,c=U/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=k/l,c=V/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=U/c,l=V/c),this.set(s,l,c,i),this}let I=Math.sqrt((S-T)*(S-T)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(S-T)/I,this.y=(v-A)/I,this.z=(x-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends zs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Zn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new np(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends kM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Nv extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),bc.subVectors(this.max,Vo),xr.subVectors(t.a,Vo),yr.subVectors(t.b,Vo),Sr.subVectors(t.c,Vo),Xa.subVectors(yr,xr),Wa.subVectors(Sr,yr),Ms.subVectors(xr,Sr);let i=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-Ms.z,Ms.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,Ms.z,0,-Ms.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-Ms.y,Ms.x,0];return!Uh(i,xr,yr,Sr,bc)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,xr,yr,Sr,bc))?!1:(Ac.crossVectors(Xa,Wa),i=[Ac.x,Ac.y,Ac.z],Uh(i,xr,yr,Sr,bc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Ai=new nt,Tc=new nl,xr=new nt,yr=new nt,Sr=new nt,Xa=new nt,Wa=new nt,Ms=new nt,Vo=new nt,bc=new nt,Ac=new nt,Es=new nt;function Uh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Es.fromArray(r,c);const d=l.x*Math.abs(Es.x)+l.y*Math.abs(Es.y)+l.z*Math.abs(Es.z),m=t.dot(Es),p=i.dot(Es),g=s.dot(Es);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const WM=new nl,ko=new nt,Nh=new nt;class uu{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):WM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Nh)),this.expandByPoint(ko.copy(t.center).sub(Nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ua=new nt,Oh=new nt,Rc=new nt,ja=new nt,Ph=new nt,Cc=new nt,Ih=new nt;class fu{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Oh.copy(t).add(i).multiplyScalar(.5),Rc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(Oh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Rc),d=ja.dot(this.direction),m=-ja.dot(Rc),p=ja.lengthSq(),g=Math.abs(1-h*h);let v,x,M,T;if(g>0)if(v=h*m-d,x=h*d-m,T=c*g,v>=0)if(x>=-T)if(x<=T){const A=1/g;v*=A,x*=A,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-T?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=T?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Oh).addScaledVector(Rc,x),M}intersectSphere(t,i){ua.subVectors(t.center,this.origin);const s=ua.dot(this.direction),l=ua.dot(ua)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ua)!==null}intersectTriangle(t,i,s,l,c){Ph.subVectors(i,t),Cc.subVectors(s,t),Ih.crossVectors(Ph,Cc);let h=this.direction.dot(Ih),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ja.subVectors(this.origin,t);const m=d*this.direction.dot(Cc.crossVectors(ja,Cc));if(m<0)return null;const p=d*this.direction.dot(Ph.cross(ja));if(p<0||m+p>h)return null;const g=-d*ja.dot(Ih);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,g,v,x,M,T,A,S){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,v,x,M,T,A,S)}set(t,i,s,l,c,h,d,m,p,g,v,x,M,T,A,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=T,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Mr.setFromMatrixColumn(t,0).length(),c=1/Mr.setFromMatrixColumn(t,1).length(),h=1/Mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*v,T=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,T=p*g,A=p*v;i[0]=x+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-T,i[6]=A+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,T=p*g,A=p*v;i[0]=x-A*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*g,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,T=d*g,A=d*v;i[0]=m*g,i[4]=T*p-M,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*g,i[4]=A-x*v,i[8]=T*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+T,i[10]=x-A*v}else if(t.order==="XZY"){const x=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+A,i[5]=h*g,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*g,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jM,t,YM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ya.crossVectors(s,ii),Ya.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ya.crossVectors(s,ii)),Ya.normalize(),wc.crossVectors(ii,Ya),l[0]=Ya.x,l[4]=wc.x,l[8]=ii.x,l[1]=Ya.y,l[5]=wc.y,l[9]=ii.y,l[2]=Ya.z,l[6]=wc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],T=s[2],A=s[6],S=s[10],_=s[14],I=s[3],O=s[7],D=s[11],G=s[15],k=l[0],U=l[4],V=l[8],C=l[12],R=l[1],L=l[5],B=l[9],j=l[13],st=l[2],mt=l[6],P=l[10],K=l[14],q=l[3],At=l[7],Dt=l[11],z=l[15];return c[0]=h*k+d*R+m*st+p*q,c[4]=h*U+d*L+m*mt+p*At,c[8]=h*V+d*B+m*P+p*Dt,c[12]=h*C+d*j+m*K+p*z,c[1]=g*k+v*R+x*st+M*q,c[5]=g*U+v*L+x*mt+M*At,c[9]=g*V+v*B+x*P+M*Dt,c[13]=g*C+v*j+x*K+M*z,c[2]=T*k+A*R+S*st+_*q,c[6]=T*U+A*L+S*mt+_*At,c[10]=T*V+A*B+S*P+_*Dt,c[14]=T*C+A*j+S*K+_*z,c[3]=I*k+O*R+D*st+G*q,c[7]=I*U+O*L+D*mt+G*At,c[11]=I*V+O*B+D*P+G*Dt,c[15]=I*C+O*j+D*K+G*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],T=t[3],A=t[7],S=t[11],_=t[15];return T*(+c*m*v-l*p*v-c*d*x+s*p*x+l*d*M-s*m*M)+A*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*g-c*m*g)+S*(+i*p*v-i*d*M-c*h*v+s*h*M+c*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],T=t[12],A=t[13],S=t[14],_=t[15],I=v*S*p-A*x*p+A*m*M-d*S*M-v*m*_+d*x*_,O=T*x*p-g*S*p-T*m*M+h*S*M+g*m*_-h*x*_,D=g*A*p-T*v*p+T*d*M-h*A*M-g*d*_+h*v*_,G=T*v*m-g*A*m-T*d*x+h*A*x+g*d*S-h*v*S,k=i*I+s*O+l*D+c*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return t[0]=I*U,t[1]=(A*x*c-v*S*c-A*l*M+s*S*M+v*l*_-s*x*_)*U,t[2]=(d*S*c-A*m*c+A*l*p-s*S*p-d*l*_+s*m*_)*U,t[3]=(v*m*c-d*x*c-v*l*p+s*x*p+d*l*M-s*m*M)*U,t[4]=O*U,t[5]=(g*S*c-T*x*c+T*l*M-i*S*M-g*l*_+i*x*_)*U,t[6]=(T*m*c-h*S*c-T*l*p+i*S*p+h*l*_-i*m*_)*U,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*M+i*m*M)*U,t[8]=D*U,t[9]=(T*v*c-g*A*c-T*s*M+i*A*M+g*s*_-i*v*_)*U,t[10]=(h*A*c-T*d*c+T*s*p-i*A*p-h*s*_+i*d*_)*U,t[11]=(g*d*c-h*v*c-g*s*p+i*v*p+h*s*M-i*d*M)*U,t[12]=G*U,t[13]=(g*A*l-T*v*l+T*s*x-i*A*x-g*s*S+i*v*S)*U,t[14]=(T*d*l-h*A*l-T*s*m+i*A*m+h*s*S-i*d*S)*U,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*x+i*d*x)*U,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,x=c*p,M=c*g,T=c*v,A=h*g,S=h*v,_=d*v,I=m*p,O=m*g,D=m*v,G=s.x,k=s.y,U=s.z;return l[0]=(1-(A+_))*G,l[1]=(M+D)*G,l[2]=(T-O)*G,l[3]=0,l[4]=(M-D)*k,l[5]=(1-(x+_))*k,l[6]=(S+I)*k,l[7]=0,l[8]=(T+O)*U,l[9]=(S-I)*U,l[10]=(1-(x+A))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Mr.set(l[0],l[1],l[2]).length();const h=Mr.set(l[4],l[5],l[6]).length(),d=Mr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/c,g=1/h,v=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=_a){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,T;if(d===_a)M=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===su)M=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=_a){const m=this.elements,p=1/(i-t),g=1/(s-l),v=1/(h-c),x=(i+t)*p,M=(s+l)*g;let T,A;if(d===_a)T=(h+c)*v,A=-2*v;else if(d===su)T=c*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Mr=new nt,Ri=new Je,jM=new nt(0,0,0),YM=new nt(1,1,1),Ya=new nt,wc=new nt,ii=new nt,v_=new Je,x_=new Ps;class ki{constructor(t=0,i=0,s=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return v_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return x_.setFromEuler(this),this.setFromQuaternion(x_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qM=0;const y_=new nt,Er=new Ps,fa=new Je,Dc=new nt,Xo=new nt,ZM=new nt,KM=new Ps,S_=new nt(1,0,0),M_=new nt(0,1,0),E_=new nt(0,0,1),T_={type:"added"},QM={type:"removed"},Tr={type:"childadded",child:null},zh={type:"childremoved",child:null};class wn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new nt,i=new ki,s=new Ps,l=new nt(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new xe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(S_,t)}rotateY(t){return this.rotateOnAxis(M_,t)}rotateZ(t){return this.rotateOnAxis(E_,t)}translateOnAxis(t,i){return y_.copy(t).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(S_,t)}translateY(t){return this.translateOnAxis(M_,t)}translateZ(t){return this.translateOnAxis(E_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Dc.copy(t):Dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Xo,Dc,this.up):fa.lookAt(Dc,Xo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(fa),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(T_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QM),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(T_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,ZM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,KM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new nt(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new nt,ha=new nt,Fh=new nt,da=new nt,br=new nt,Ar=new nt,b_=new nt,Bh=new nt,Hh=new nt,Gh=new nt,Vh=new sn,kh=new sn,Xh=new sn;class gi{constructor(t=new nt,i=new nt,s=new nt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),ha.subVectors(s,i),Fh.subVectors(t,i);const h=Ci.dot(Ci),d=Ci.dot(ha),m=Ci.dot(Fh),p=ha.dot(ha),g=ha.dot(Fh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,T=(h*g-d*m)*x;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(h,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Vh,c.x),h.addScaledVector(kh,c.y),h.addScaledVector(Xh,c.z),h}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),ha.subVectors(t,i),Ci.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ci.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return gi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;br.subVectors(l,s),Ar.subVectors(c,s),Bh.subVectors(t,s);const m=br.dot(Bh),p=Ar.dot(Bh);if(m<=0&&p<=0)return i.copy(s);Hh.subVectors(t,l);const g=br.dot(Hh),v=Ar.dot(Hh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(br,h);Gh.subVectors(t,c);const M=br.dot(Gh),T=Ar.dot(Gh);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Ar,d);const S=g*T-M*v;if(S<=0&&v-g>=0&&M-T>=0)return b_.subVectors(c,l),d=(v-g)/(v-g+(M-T)),i.copy(l).addScaledVector(b_,d);const _=1/(S+A+x);return h=A*_,d=x*_,i.copy(s).addScaledVector(br,h).addScaledVector(Ar,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Wh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class we{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ie.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ie.workingColorSpace){if(t=NM(t,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Wh(h,c,t+1/3),this.g=Wh(h,c,t),this.b=Wh(h,c,t-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=Ov[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Ie.workingToColorSpace(Nn.copy(this),t),Math.round(be(Nn.r*255,0,255))*65536+Math.round(be(Nn.g*255,0,255))*256+Math.round(be(Nn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=pi){Ie.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+i,qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(qa),t.getHSL(Lc);const s=Rh(qa.h,Lc.h,i),l=Rh(qa.s,Lc.s,i),c=Rh(qa.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new we;we.NAMES=Ov;let JM=0;class Vr extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Or,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(s.blending=this.blending),this.side!==ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ap extends Vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new nt,Uc=new _e;let $M=0;class Gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=h_,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(t),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Go(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==h_&&(t.usage=this.usage),t}}class Pv extends Gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Iv extends Gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class vi extends Gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let tE=0;const di=new Je,jh=new wn,Rr=new nt,ai=new nl,Wo=new nl,yn=new nt;class Xi extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uv(t)?Iv:Pv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return jh.lookAt(t),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ai.min,Wo.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Wo.max),ai.expandByPoint(yn)):(ai.expandByPoint(Wo.min),ai.expandByPoint(Wo.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Rr.fromBufferAttribute(t,p),yn.add(Rr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new nt,m[V]=new nt;const p=new nt,g=new nt,v=new nt,x=new _e,M=new _e,T=new _e,A=new nt,S=new nt;function _(V,C,R){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,R),x.fromBufferAttribute(c,V),M.fromBufferAttribute(c,C),T.fromBufferAttribute(c,R),g.sub(p),v.sub(p),M.sub(x),T.sub(x);const L=1/(M.x*T.y-T.x*M.y);isFinite(L)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(L),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(L),d[V].add(A),d[C].add(A),d[R].add(A),m[V].add(S),m[C].add(S),m[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let V=0,C=I.length;V<C;++V){const R=I[V],L=R.start,B=R.count;for(let j=L,st=L+B;j<st;j+=3)_(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const O=new nt,D=new nt,G=new nt,k=new nt;function U(V){G.fromBufferAttribute(l,V),k.copy(G);const C=d[V];O.copy(C),O.sub(G.multiplyScalar(G.dot(C))).normalize(),D.crossVectors(k,C);const L=D.dot(m[V])<0?-1:1;h.setXYZW(V,O.x,O.y,O.z,L)}for(let V=0,C=I.length;V<C;++V){const R=I[V],L=R.start,B=R.count;for(let j=L,st=L+B;j<st;j+=3)U(t.getX(j+0)),U(t.getX(j+1)),U(t.getX(j+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new nt,c=new nt,h=new nt,d=new nt,m=new nt,p=new nt,g=new nt,v=new nt;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),A=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,T=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let _=0;_<g;_++)x[T++]=p[M++]}return new Gi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new Je,Ts=new fu,Nc=new uu,R_=new nt,Oc=new nt,Pc=new nt,Ic=new nt,Yh=new nt,zc=new nt,C_=new nt,Fc=new nt;class _i extends wn{constructor(t=new Xi,i=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(Yh.fromBufferAttribute(v,t),h?zc.addScaledVector(Yh,g):zc.addScaledVector(Yh.sub(i),g))}i.add(zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),Ts.copy(t.ray).recast(t.near),!(Nc.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Nc,R_)===null||Ts.origin.distanceToSquared(R_)>(t.far-t.near)**2))&&(A_.copy(c).invert(),Ts.copy(t.ray).applyMatrix4(A_),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=h[S.materialIndex],I=Math.max(S.start,M.start),O=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,G=O;D<G;D+=3){const k=d.getX(D),U=d.getX(D+1),V=d.getX(D+2);l=Bc(this,_,t,s,p,g,v,k,U,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=T,_=A;S<_;S+=3){const I=d.getX(S),O=d.getX(S+1),D=d.getX(S+2);l=Bc(this,h,t,s,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const S=x[T],_=h[S.materialIndex],I=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=I,G=O;D<G;D+=3){const k=D,U=D+1,V=D+2;l=Bc(this,_,t,s,p,g,v,k,U,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=T,_=A;S<_;S+=3){const I=S,O=S+1,D=S+2;l=Bc(this,h,t,s,p,g,v,I,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function eE(r,t,i,s,l,c,h,d){let m;if(t.side===qn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ts,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:r}}function Bc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(p,Ic);const g=eE(r,t,i,s,Oc,Pc,Ic,C_);if(g){const v=new nt;gi.getBarycoord(C_,Oc,Pc,Ic,v),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new _e)),c&&(g.uv1=gi.getInterpolatedAttribute(c,d,m,p,v,new _e)),h&&(g.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new nt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new nt,materialIndex:0};gi.getNormal(Oc,Pc,Ic,x.normal),g.face=x,g.barycoord=v}return g}class Di extends Xi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(g,3)),this.setAttribute("uv",new vi(v,2));function T(A,S,_,I,O,D,G,k,U,V,C){const R=D/U,L=G/V,B=D/2,j=G/2,st=k/2,mt=U+1,P=V+1;let K=0,q=0;const At=new nt;for(let Dt=0;Dt<P;Dt++){const z=Dt*L-j;for(let rt=0;rt<mt;rt++){const Et=rt*R-B;At[A]=Et*I,At[S]=z*O,At[_]=st,p.push(At.x,At.y,At.z),At[A]=0,At[S]=0,At[_]=k>0?1:-1,g.push(At.x,At.y,At.z),v.push(rt/U),v.push(1-Dt/V),K+=1}}for(let Dt=0;Dt<V;Dt++)for(let z=0;z<U;z++){const rt=x+z+mt*Dt,Et=x+z+mt*(Dt+1),Q=x+(z+1)+mt*(Dt+1),vt=x+(z+1)+mt*Dt;m.push(rt,Et,vt),m.push(Et,Q,vt),q+=6}d.addGroup(M,q,C),M+=q,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(r){const t={};for(let i=0;i<r.length;i++){const s=Gr(r[i]);for(const l in s)t[l]=s[l]}return t}function nE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const iE={clone:Gr,merge:zn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=nE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Fv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=_a}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new nt,w_=new _e,D_=new _e;class mi extends Fv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,i){return this.getViewBounds(t,w_,D_),i.subVectors(D_,w_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cr=-90,wr=1;class rE extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Cr,wr,t,i);l.layers=this.layers,this.add(l);const c=new mi(Cr,wr,t,i);c.layers=this.layers,this.add(c);const h=new mi(Cr,wr,t,i);h.layers=this.layers,this.add(h);const d=new mi(Cr,wr,t,i);d.layers=this.layers,this.add(d);const m=new mi(Cr,wr,t,i);m.layers=this.layers,this.add(m);const p=new mi(Cr,wr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===_a)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Bv extends Zn{constructor(t=[],i=Fr,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oE extends Is{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Di(5,5,5),c=new es({name:"CubemapFromEquirect",uniforms:Gr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Ja});c.uniforms.tEquirect.value=i;const h=new _i(l,c),d=i.minFilter;return i.minFilter===Ns&&(i.minFilter=Hi),new rE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Hc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,s),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Hc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class cE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Zh=new nt,uE=new nt,fE=new xe;class Ka{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Zh.subVectors(s,i).cross(uE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Zh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||fE.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new uu,Gc=new nt;class sp{constructor(t=new Ka,i=new Ka,s=new Ka,l=new Ka,c=new Ka,h=new Ka){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=_a){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],T=l[9],A=l[10],S=l[11],_=l[12],I=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-c,x-p,S-M,D-_).normalize(),s[1].setComponents(m+c,x+p,S+M,D+_).normalize(),s[2].setComponents(m+h,x+g,S+T,D+I).normalize(),s[3].setComponents(m-h,x-g,S-T,D-I).normalize(),s[4].setComponents(m-d,x-v,S-A,D-O).normalize(),i===_a)s[5].setComponents(m+d,x+v,S+A,D+O).normalize();else if(i===su)s[5].setComponents(d,v,A,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rp extends Vr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new nt,lu=new nt,L_=new Je,jo=new fu,Vc=new uu,Kh=new nt,U_=new nt;class hE extends wn{constructor(t=new Xi,i=new rp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new vi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,t.ray.intersectsSphere(Vc)===!1)return;L_.copy(l).invert(),jo.copy(t.ray).applyMatrix4(L_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let A=M,S=T-1;A<S;A+=p){const _=g.getX(A),I=g.getX(A+1),O=kc(this,t,jo,m,_,I,A);O&&i.push(O)}if(this.isLineLoop){const A=g.getX(T-1),S=g.getX(M),_=kc(this,t,jo,m,A,S,T-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let A=M,S=T-1;A<S;A+=p){const _=kc(this,t,jo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=kc(this,t,jo,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function kc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(ou.fromBufferAttribute(d,l),lu.fromBufferAttribute(d,c),i.distanceSqToSegment(ou,lu,Kh,U_)>s)return;Kh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Kh);if(!(p<t.near||p>t.far))return{distance:p,point:U_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const N_=new nt,O_=new nt;class Hv extends hE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)N_.fromBufferAttribute(i,l),O_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+N_.distanceTo(O_);t.setAttribute("lineDistance",new vi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gv extends Zn{constructor(t,i,s=Os,l,c,h,d=Ui,m=Ui,p,g=Jo,v=1){if(g!==Jo&&g!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Xc=new nt,Wc=new nt,Qh=new nt,jc=new gi;class P_ extends Xi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Zo*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),x={},M=[];for(let T=0;T<m;T+=3){h?(p[0]=h.getX(T),p[1]=h.getX(T+1),p[2]=h.getX(T+2)):(p[0]=T,p[1]=T+1,p[2]=T+2);const{a:A,b:S,c:_}=jc;if(A.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),jc.getNormal(Qh),v[0]=`${Math.round(A.x*l)},${Math.round(A.y*l)},${Math.round(A.z*l)}`,v[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,v[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let I=0;I<3;I++){const O=(I+1)%3,D=v[I],G=v[O],k=jc[g[I]],U=jc[g[O]],V=`${D}_${G}`,C=`${G}_${D}`;C in x&&x[C]?(Qh.dot(x[C].normal)<=c&&(M.push(k.x,k.y,k.z),M.push(U.x,U.y,U.z)),x[C]=null):V in x||(x[V]={index0:p[I],index1:p[O],normal:Qh.clone()})}}for(const T in x)if(x[T]){const{index0:A,index1:S}=x[T];Xc.fromBufferAttribute(d,A),Wc.fromBufferAttribute(d,S),M.push(Xc.x,Xc.y,Xc.z),M.push(Wc.x,Wc.y,Wc.z)}this.setAttribute("position",new vi(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class il extends Xi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],T=[],A=[],S=[];for(let _=0;_<g;_++){const I=_*x-h;for(let O=0;O<p;O++){const D=O*v-c;T.push(D,-I,0),A.push(0,0,1),S.push(O/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const O=I+p*_,D=I+p*(_+1),G=I+1+p*(_+1),k=I+1+p*_;M.push(O,D,k),M.push(D,G,k)}this.setIndex(M),this.setAttribute("position",new vi(T,3)),this.setAttribute("normal",new vi(A,3)),this.setAttribute("uv",new vi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.widthSegments,t.heightSegments)}}class I_ extends Vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dv,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dE extends Vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pE extends Vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vv extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Jh=new Je,z_=new nt,F_=new nt;class mE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sp,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;z_.setFromMatrixPosition(t.matrixWorld),i.position.copy(z_),F_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(F_),i.updateMatrixWorld(),Jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kv extends Fv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gE extends mE{constructor(){super(new kv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _E extends Vv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new gE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vE extends Vv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xE extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const B_=new Je;class yE{constructor(t,i,s=0,l=1/0){this.ray=new fu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return B_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(B_),this}intersectObject(t,i=!0,s=[]){return jd(t,this,s,i),s.sort(H_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)jd(t[l],this,s,i);return s.sort(H_),s}}function H_(r,t){return r.distance-t.distance}function jd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)jd(c[h],t,i,!0)}}class G_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class SE extends Hv{constructor(t=10,i=10,s=4473924,l=8947848){s=new we(s),l=new we(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,T=-d;x<=i;x++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const A=x===c?s:l;A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3,A.toArray(p,M),M+=3}const g=new Xi;g.setAttribute("position",new vi(m,3)),g.setAttribute("color",new vi(p,3));const v=new rp({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ME extends zs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function V_(r,t,i,s){const l=EE(s);switch(i){case bv:return r*t;case Rv:return r*t/l.components*l.byteLength;case $d:return r*t/l.components*l.byteLength;case Cv:return r*t*2/l.components*l.byteLength;case tp:return r*t*2/l.components*l.byteLength;case Av:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case ep:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case xd:case Sd:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nu:case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case wv:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EE(r){switch(r){case Vi:case Mv:return{byteLength:1,components:1};case Ko:case Ev:case tl:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Os:case Kd:case ga:return{byteLength:4,components:1};case Tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function TE(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<v.length;M++){const T=v[x],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,v[x]=A)}v.length=x+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var bE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eT="gl_FragColor = linearToOutputTexel( gl_FragColor );",nT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ET=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,db=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:bE,alphahash_pars_fragment:AE,alphamap_fragment:RE,alphamap_pars_fragment:CE,alphatest_fragment:wE,alphatest_pars_fragment:DE,aomap_fragment:LE,aomap_pars_fragment:UE,batching_pars_vertex:NE,batching_vertex:OE,begin_vertex:PE,beginnormal_vertex:IE,bsdfs:zE,iridescence_fragment:FE,bumpmap_pars_fragment:BE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:kE,color_fragment:XE,color_pars_fragment:WE,color_pars_vertex:jE,color_vertex:YE,common:qE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:KE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:$E,emissivemap_pars_fragment:tT,colorspace_fragment:eT,colorspace_pars_fragment:nT,envmap_fragment:iT,envmap_common_pars_fragment:aT,envmap_pars_fragment:sT,envmap_pars_vertex:rT,envmap_physical_pars_fragment:_T,envmap_vertex:oT,fog_vertex:lT,fog_pars_vertex:cT,fog_fragment:uT,fog_pars_fragment:fT,gradientmap_pars_fragment:hT,lightmap_pars_fragment:dT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:gT,lights_toon_fragment:vT,lights_toon_pars_fragment:xT,lights_phong_fragment:yT,lights_phong_pars_fragment:ST,lights_physical_fragment:MT,lights_physical_pars_fragment:ET,lights_fragment_begin:TT,lights_fragment_maps:bT,lights_fragment_end:AT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:wT,logdepthbuf_vertex:DT,map_fragment:LT,map_pars_fragment:UT,map_particle_fragment:NT,map_particle_pars_fragment:OT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:IT,morphinstance_vertex:zT,morphcolor_vertex:FT,morphnormal_vertex:BT,morphtarget_pars_vertex:HT,morphtarget_vertex:GT,normal_fragment_begin:VT,normal_fragment_maps:kT,normal_pars_fragment:XT,normal_pars_vertex:WT,normal_vertex:jT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:KT,iridescence_pars_fragment:QT,opaque_fragment:JT,packing:$T,premultiplied_alpha_fragment:tb,project_vertex:eb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:ab,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:ob,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:ub,skinning_pars_vertex:fb,skinning_vertex:hb,skinnormal_vertex:db,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:_b,transmission_fragment:vb,transmission_pars_fragment:xb,uv_pars_fragment:yb,uv_pars_vertex:Sb,uv_vertex:Mb,worldpos_vertex:Eb,background_vert:Tb,background_frag:bb,backgroundCube_vert:Ab,backgroundCube_frag:Rb,cube_vert:Cb,cube_frag:wb,depth_vert:Db,depth_frag:Lb,distanceRGBA_vert:Ub,distanceRGBA_frag:Nb,equirect_vert:Ob,equirect_frag:Pb,linedashed_vert:Ib,linedashed_frag:zb,meshbasic_vert:Fb,meshbasic_frag:Bb,meshlambert_vert:Hb,meshlambert_frag:Gb,meshmatcap_vert:Vb,meshmatcap_frag:kb,meshnormal_vert:Xb,meshnormal_frag:Wb,meshphong_vert:jb,meshphong_frag:Yb,meshphysical_vert:qb,meshphysical_frag:Zb,meshtoon_vert:Kb,meshtoon_frag:Qb,points_vert:Jb,points_frag:$b,shadow_vert:t1,shadow_frag:e1,sprite_vert:n1,sprite_frag:i1},qt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Fi={basic:{uniforms:zn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:zn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new we(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:zn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:zn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:zn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new we(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:zn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:zn([qt.points,qt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:zn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:zn([qt.common,qt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:zn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:zn([qt.sprite,qt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:zn([qt.common,qt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:zn([qt.lights,qt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Fi.physical={uniforms:zn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Yc={r:0,b:0,g:0},As=new ki,a1=new Je;function s1(r,t,i,s,l,c,h){const d=new we(0);let m=c===!0?0:1,p,g,v=null,x=0,M=null;function T(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function A(O){let D=!1;const G=T(O);G===null?_(d,m):G&&G.isColor&&(_(G,1),D=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(O,D){const G=T(D);G&&(G.isCubeTexture||G.mapping===cu)?(g===void 0&&(g=new _i(new Di(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Gr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,U,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),As.copy(D.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(As)),g.material.toneMapped=Ie.getTransfer(G.colorSpace)!==je,(v!==G||x!==G.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,M=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new _i(new il(2,2),new es({name:"BackgroundMaterial",uniforms:Gr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ie.getTransfer(G.colorSpace)!==je,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=G,x=G.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(Yc,zv(r)),s.buffers.color.setClear(Yc.r,Yc.g,Yc.b,D,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:A,addToRenderList:S,dispose:I}}function r1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(R,L,B,j,st){let mt=!1;const P=v(j,B,L);c!==P&&(c=P,p(c.object)),mt=M(R,j,B,st),mt&&T(R,j,B,st),st!==null&&t.update(st,r.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,D(R,L,B,j),st!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function v(R,L,B){const j=B.wireframe===!0;let st=s[R.id];st===void 0&&(st={},s[R.id]=st);let mt=st[L.id];mt===void 0&&(mt={},st[L.id]=mt);let P=mt[j];return P===void 0&&(P=x(m()),mt[j]=P),P}function x(R){const L=[],B=[],j=[];for(let st=0;st<i;st++)L[st]=0,B[st]=0,j[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:j,object:R,attributes:{},index:null}}function M(R,L,B,j){const st=c.attributes,mt=L.attributes;let P=0;const K=B.getAttributes();for(const q in K)if(K[q].location>=0){const Dt=st[q];let z=mt[q];if(z===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),Dt===void 0||Dt.attribute!==z||z&&Dt.data!==z.data)return!0;P++}return c.attributesNum!==P||c.index!==j}function T(R,L,B,j){const st={},mt=L.attributes;let P=0;const K=B.getAttributes();for(const q in K)if(K[q].location>=0){let Dt=mt[q];Dt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Dt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Dt=R.instanceColor));const z={};z.attribute=Dt,Dt&&Dt.data&&(z.data=Dt.data),st[q]=z,P++}c.attributes=st,c.attributesNum=P,c.index=j}function A(){const R=c.newAttributes;for(let L=0,B=R.length;L<B;L++)R[L]=0}function S(R){_(R,0)}function _(R,L){const B=c.newAttributes,j=c.enabledAttributes,st=c.attributeDivisors;B[R]=1,j[R]===0&&(r.enableVertexAttribArray(R),j[R]=1),st[R]!==L&&(r.vertexAttribDivisor(R,L),st[R]=L)}function I(){const R=c.newAttributes,L=c.enabledAttributes;for(let B=0,j=L.length;B<j;B++)L[B]!==R[B]&&(r.disableVertexAttribArray(B),L[B]=0)}function O(R,L,B,j,st,mt,P){P===!0?r.vertexAttribIPointer(R,L,B,st,mt):r.vertexAttribPointer(R,L,B,j,st,mt)}function D(R,L,B,j){A();const st=j.attributes,mt=B.getAttributes(),P=L.defaultAttributeValues;for(const K in mt){const q=mt[K];if(q.location>=0){let At=st[K];if(At===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(At=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(At=R.instanceColor)),At!==void 0){const Dt=At.normalized,z=At.itemSize,rt=t.get(At);if(rt===void 0)continue;const Et=rt.buffer,Q=rt.type,vt=rt.bytesPerElement,Pt=Q===r.INT||Q===r.UNSIGNED_INT||At.gpuType===Kd;if(At.isInterleavedBufferAttribute){const Rt=At.data,tt=Rt.stride,ot=At.offset;if(Rt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<q.locationSize;Lt++)_(q.location+Lt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Lt=0;Lt<q.locationSize;Lt++)S(q.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Lt=0;Lt<q.locationSize;Lt++)O(q.location+Lt,z/q.locationSize,Q,Dt,tt*vt,(ot+z/q.locationSize*Lt)*vt,Pt)}else{if(At.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)_(q.location+Rt,At.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)S(q.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Rt=0;Rt<q.locationSize;Rt++)O(q.location+Rt,z/q.locationSize,Q,Dt,z*vt,z/q.locationSize*Rt*vt,Pt)}}else if(P!==void 0){const Dt=P[K];if(Dt!==void 0)switch(Dt.length){case 2:r.vertexAttrib2fv(q.location,Dt);break;case 3:r.vertexAttrib3fv(q.location,Dt);break;case 4:r.vertexAttrib4fv(q.location,Dt);break;default:r.vertexAttrib1fv(q.location,Dt)}}}}I()}function G(){V();for(const R in s){const L=s[R];for(const B in L){const j=L[B];for(const st in j)g(j[st].object),delete j[st];delete L[B]}delete s[R]}}function k(R){if(s[R.id]===void 0)return;const L=s[R.id];for(const B in L){const j=L[B];for(const st in j)g(j[st].object),delete j[st];delete L[B]}delete s[R.id]}function U(R){for(const L in s){const B=s[L];if(B[R.id]===void 0)continue;const j=B[R.id];for(const st in j)g(j[st].object),delete j[st];delete B[R.id]}}function V(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function o1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let T=0;for(let A=0;A<v;A++)T+=g[A]*x[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function l1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==Li&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const V=U===tl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Vi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ga&&!V)}function m(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:G,maxSamples:k}}function c1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ka,d=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const T=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!l||T===null||T.length===0||c&&!S)c?g(null):p();else{const I=c?0:s,O=I*4;let D=_.clippingState||null;m.value=D,D=g(T,x,O,M);for(let G=0;G!==O;++G)D[G]=i[G];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,T){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=m.value,T!==!0||S===null){const _=M+A*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let O=0,D=M;O!==A;++O,D+=4)h.copy(v[O]).applyMatrix4(I,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function u1(r){let t=new WeakMap;function i(h,d){return d===md?h.mapping=Fr:d===gd&&(h.mapping=Br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===md||d===gd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new oE(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ur=4,k_=[.125,.215,.35,.446,.526,.582],Ls=20,$h=new kv,X_=new we;let td=null,ed=0,nd=0,id=!1;const Cs=(1+Math.sqrt(5))/2,Dr=1/Cs,W_=[new nt(-Cs,Dr,0),new nt(Cs,Dr,0),new nt(-Dr,0,Cs),new nt(Dr,0,Cs),new nt(0,Cs,-Dr),new nt(0,Cs,Dr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],f1=new nt;class j_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=f1}=c;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fr||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:tl,format:Li,colorSpace:Hr,depthBuffer:!1},l=Y_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h1(c)),this._blurMaterial=d1(c,t,i)}return l}_compileMaterial(t){const i=new _i(this._lodPlanes[0],t);this._renderer.compile(i,$h)}_sceneToCubeUV(t,i,s,l,c){const m=new mi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(X_),v.toneMapping=$a,v.autoClear=!1;const T=new ap({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),A=new _i(new Di,T);let S=!1;const _=t.background;_?_.isColor&&(T.color.copy(_),t.background=null,S=!0):(T.color.copy(X_),S=!0);for(let I=0;I<6;I++){const O=I%3;O===0?(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):O===1?(m.up.set(0,0,p[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const D=this._cubeSize;qc(l,O*D,I>2?D:0,D,D),v.setRenderTarget(l),S&&v.render(A,m),v.render(t,m)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fr||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new _i(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;qc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,$h)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=W_[(l-c-1)%W_.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new _i(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ls-1),A=c/T,S=isFinite(c)?1+Math.floor(g*A):Ls;S>Ls&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ls}`);const _=[];let I=0;for(let U=0;U<Ls;++U){const V=U/A,C=Math.exp(-V*V/2);_.push(C),U===0?I+=C:U<S&&(I+=2*C)}for(let U=0;U<_.length;U++)_[U]=_[U]/I;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-s;const D=this._sizeLods[l],G=3*D*(l>O-Ur?l-O+Ur:0),k=4*(this._cubeSize-D);qc(i,G,k,3*D,2*D),m.setRenderTarget(i),m.render(v,$h)}}function h1(r){const t=[],i=[],s=[];let l=r;const c=r-Ur+1+k_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Ur?m=k_[h-r+Ur-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,A=3,S=2,_=1,I=new Float32Array(A*T*M),O=new Float32Array(S*T*M),D=new Float32Array(_*T*M);for(let k=0;k<M;k++){const U=k%3*2/3-1,V=k>2?0:-1,C=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];I.set(C,A*T*k),O.set(x,S*T*k);const R=[k,k,k,k,k,k];D.set(R,_*T*k)}const G=new Xi;G.setAttribute("position",new Gi(I,A)),G.setAttribute("uv",new Gi(O,S)),G.setAttribute("faceIndex",new Gi(D,_)),t.push(G),l>Ur&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Y_(r,t,i){const s=new Is(r,t,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function d1(r,t,i){const s=new Float32Array(Ls),l=new nt(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function q_(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Z_(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===md||m===gd,g=m===Fr||m===Br;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new j_(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new j_(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function m1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Pr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function g1(r,t,i,s){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const I=M.array;A=M.version;for(let O=0,D=I.length;O<D;O+=3){const G=I[O+0],k=I[O+1],U=I[O+2];x.push(G,k,k,U,U,G)}}else if(T!==void 0){const I=T.array;A=T.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const G=O+0,k=O+1,U=O+2;x.push(G,k,k,U,U,G)}}else return;const S=new(Uv(x)?Iv:Pv)(x,1);S.version=A;const _=c.get(v);_&&t.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function _1(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,T){T!==0&&(r.drawElementsInstanced(s,M,c,x*h,T),i.update(M,s,T))}function g(x,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,T);let S=0;for(let _=0;_<T;_++)S+=M[_];i.update(S,s,1)}function v(x,M,T,A){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,A,0,T);let _=0;for(let I=0;I<T;I++)_+=M[I]*A[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function v1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function x1(r,t,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let R=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let G=d.attributes.position.count*D,k=1;G>t.maxTextureSize&&(k=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const U=new Float32Array(G*k*4*v),V=new Nv(U,G,k,v);V.type=ga,V.needsUpdate=!0;const C=D*4;for(let L=0;L<v;L++){const B=_[L],j=I[L],st=O[L],mt=G*k*4*L;for(let P=0;P<B.count;P++){const K=P*C;T===!0&&(l.fromBufferAttribute(B,P),U[mt+K+0]=l.x,U[mt+K+1]=l.y,U[mt+K+2]=l.z,U[mt+K+3]=0),A===!0&&(l.fromBufferAttribute(j,P),U[mt+K+4]=l.x,U[mt+K+5]=l.y,U[mt+K+6]=l.z,U[mt+K+7]=0),S===!0&&(l.fromBufferAttribute(st,P),U[mt+K+8]=l.x,U[mt+K+9]=l.y,U[mt+K+10]=l.z,U[mt+K+11]=st.itemSize===4?l.w:1)}}x={count:v,texture:V,size:new _e(G,k)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function y1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Wv=new Zn,K_=new Gv(1,1),jv=new Nv,Yv=new XM,qv=new Bv,Q_=[],J_=[],$_=new Float32Array(16),tv=new Float32Array(9),ev=new Float32Array(4);function kr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Q_[l];if(c===void 0&&(c=new Float32Array(l),Q_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=J_[t];i===void 0&&(i=new Int32Array(t),J_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function S1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function T1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function b1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;ev.set(s),r.uniformMatrix2fv(this.addr,!1,ev),_n(i,s)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;tv.set(s),r.uniformMatrix3fv(this.addr,!1,tv),_n(i,s)}}function R1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;$_.set(s),r.uniformMatrix4fv(this.addr,!1,$_),_n(i,s)}}function C1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function L1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function U1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function P1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function I1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(K_.compareFunction=Lv,c=K_):c=Wv,i.setTexture2D(t||c,l)}function z1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Yv,l)}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||qv,l)}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||jv,l)}function H1(r){switch(r){case 5126:return S1;case 35664:return M1;case 35665:return E1;case 35666:return T1;case 35674:return b1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return L1;case 5125:return U1;case 36294:return N1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return B1}}function G1(r,t){r.uniform1fv(this.addr,t)}function V1(r,t){const i=kr(t,this.size,2);r.uniform2fv(this.addr,i)}function k1(r,t){const i=kr(t,this.size,3);r.uniform3fv(this.addr,i)}function X1(r,t){const i=kr(t,this.size,4);r.uniform4fv(this.addr,i)}function W1(r,t){const i=kr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function j1(r,t){const i=kr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Y1(r,t){const i=kr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function q1(r,t){r.uniform1iv(this.addr,t)}function Z1(r,t){r.uniform2iv(this.addr,t)}function K1(r,t){r.uniform3iv(this.addr,t)}function Q1(r,t){r.uniform4iv(this.addr,t)}function J1(r,t){r.uniform1uiv(this.addr,t)}function $1(r,t){r.uniform2uiv(this.addr,t)}function tA(r,t){r.uniform3uiv(this.addr,t)}function eA(r,t){r.uniform4uiv(this.addr,t)}function nA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Wv,c[h])}function iA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Yv,c[h])}function aA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||qv,c[h])}function sA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||jv,c[h])}function rA(r){switch(r){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return W1;case 35675:return j1;case 35676:return Y1;case 5124:case 35670:return q1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return tA;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return sA}}class oA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rA(i.type)}}class cA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function nv(r,t){r.seq.push(t),r.map[t.id]=t}function uA(r,t,i){const s=r.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),h=ad.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){nv(i,p===void 0?new oA(d,r,t):new lA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new cA(d),nv(i,v)),i=v}}}class iu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);uA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function iv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const fA=37297;let hA=0;function dA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const av=new xe;function pA(r){Ie._getMatrix(av,Ie.workingColorSpace,r);const t=`mat3( ${av.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+dA(r.getShaderSource(t),h)}else return l}function mA(r,t){const i=pA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gA(r,t){let i;switch(t){case mM:i="Linear";break;case gM:i="Reinhard";break;case _M:i="Cineon";break;case vM:i="ACESFilmic";break;case yM:i="AgX";break;case SM:i="Neutral";break;case xM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new nt;function _A(){Ie.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function xA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Yo(r){return r!==""}function rv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ov(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(r){return r.replace(SA,EA)}const MA=new Map;function EA(r,t){let i=Se[t];if(i===void 0){const s=MA.get(t);if(s!==void 0)i=Se[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Yd(i)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(r){return r.replace(TA,bA)}function bA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function cv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ma&&(t="SHADOWMAP_TYPE_VSM"),t}function RA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fr:case Br:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function CA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function wA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yv:t="ENVMAP_BLENDING_MULTIPLY";break;case dM:t="ENVMAP_BLENDING_MIX";break;case pM:t="ENVMAP_BLENDING_ADD";break}return t}function DA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=AA(i),p=RA(i),g=CA(i),v=wA(i),x=DA(i),M=vA(i),T=xA(c),A=l.createProgram();let S,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(S=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?Se.tonemapping_pars_fragment:"",i.toneMapping!==$a?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),_A(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),h=Yd(h),h=rv(h,i),h=ov(h,i),d=Yd(d),d=rv(d,i),d=ov(d,i),h=lv(h),d=lv(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=I+S+h,D=I+_+d,G=iv(l,l.VERTEX_SHADER,O),k=iv(l,l.FRAGMENT_SHADER,D);l.attachShader(A,G),l.attachShader(A,k),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function U(L){if(r.debug.checkShaderErrors){const B=l.getProgramInfoLog(A).trim(),j=l.getShaderInfoLog(G).trim(),st=l.getShaderInfoLog(k).trim();let mt=!0,P=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(mt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,G,k);else{const K=sv(l,G,"vertex"),q=sv(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+K+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(j===""||st==="")&&(P=!1);P&&(L.diagnostics={runnable:mt,programLog:B,vertexShader:{log:j,prefix:S},fragmentShader:{log:st,prefix:_}})}l.deleteShader(G),l.deleteShader(k),V=new iu(l,A),C=yA(l,A)}let V;this.getUniforms=function(){return V===void 0&&U(this),V};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,fA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=k,this}let UA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new OA(t),i.set(t,s)),s}}class OA{constructor(t){this.id=UA++,this.code=t,this.usedTimes=0}}function PA(r,t,i,s,l,c,h){const d=new ip,m=new NA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,R,L,B,j){const st=B.fog,mt=j.geometry,P=C.isMeshStandardMaterial?B.environment:null,K=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),q=K&&K.mapping===cu?K.image.height:null,At=T[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Dt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,z=Dt!==void 0?Dt.length:0;let rt=0;mt.morphAttributes.position!==void 0&&(rt=1),mt.morphAttributes.normal!==void 0&&(rt=2),mt.morphAttributes.color!==void 0&&(rt=3);let Et,Q,vt,Pt;if(At){const Ue=Fi[At];Et=Ue.vertexShader,Q=Ue.fragmentShader}else Et=C.vertexShader,Q=C.fragmentShader,m.update(C),vt=m.getVertexShaderID(C),Pt=m.getFragmentShaderID(C);const Rt=r.getRenderTarget(),tt=r.state.buffers.depth.getReversed(),ot=j.isInstancedMesh===!0,Lt=j.isBatchedMesh===!0,zt=!!C.map,Ot=!!C.matcap,Ft=!!K,F=!!C.aoMap,ie=!!C.lightMap,$t=!!C.bumpMap,ye=!!C.normalMap,Mt=!!C.displacementMap,Wt=!!C.emissiveMap,Ct=!!C.metalnessMap,Ht=!!C.roughnessMap,ce=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,et=C.iridescence>0,ut=C.sheen>0,_t=C.transmission>0,pt=ce&&!!C.anisotropyMap,te=N&&!!C.clearcoatMap,Bt=N&&!!C.clearcoatNormalMap,Zt=N&&!!C.clearcoatRoughnessMap,yt=et&&!!C.iridescenceMap,gt=et&&!!C.iridescenceThicknessMap,wt=ut&&!!C.sheenColorMap,jt=ut&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Gt=!!C.specularColorMap,le=!!C.specularIntensityMap,X=_t&&!!C.transmissionMap,Vt=_t&&!!C.thicknessMap,Nt=!!C.gradientMap,Ut=!!C.alphaMap,dt=C.alphaTest>0,Tt=!!C.alphaHash,Qt=!!C.extensions;let de=$a;C.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(de=r.toneMapping);const He={shaderID:At,shaderType:C.type,shaderName:C.name,vertexShader:Et,fragmentShader:Q,defines:C.defines,customVertexShaderID:vt,customFragmentShaderID:Pt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Lt,batchingColor:Lt&&j._colorsTexture!==null,instancing:ot,instancingColor:ot&&j.instanceColor!==null,instancingMorph:ot&&j.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Hr,alphaToCoverage:!!C.alphaToCoverage,map:zt,matcap:Ot,envMap:Ft,envMapMode:Ft&&K.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:ie,bumpMap:$t,normalMap:ye,displacementMap:x&&Mt,emissiveMap:Wt,normalMapObjectSpace:ye&&C.normalMapType===bM,normalMapTangentSpace:ye&&C.normalMapType===Dv,metalnessMap:Ct,roughnessMap:Ht,anisotropy:ce,anisotropyMap:pt,clearcoat:N,clearcoatMap:te,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Zt,dispersion:E,iridescence:et,iridescenceMap:yt,iridescenceThicknessMap:gt,sheen:ut,sheenColorMap:wt,sheenRoughnessMap:jt,specularMap:kt,specularColorMap:Gt,specularIntensityMap:le,transmission:_t,transmissionMap:X,thicknessMap:Vt,gradientMap:Nt,opaque:C.transparent===!1&&C.blending===Or&&C.alphaToCoverage===!1,alphaMap:Ut,alphaTest:dt,alphaHash:Tt,combine:C.combine,mapUv:zt&&A(C.map.channel),aoMapUv:F&&A(C.aoMap.channel),lightMapUv:ie&&A(C.lightMap.channel),bumpMapUv:$t&&A(C.bumpMap.channel),normalMapUv:ye&&A(C.normalMap.channel),displacementMapUv:Mt&&A(C.displacementMap.channel),emissiveMapUv:Wt&&A(C.emissiveMap.channel),metalnessMapUv:Ct&&A(C.metalnessMap.channel),roughnessMapUv:Ht&&A(C.roughnessMap.channel),anisotropyMapUv:pt&&A(C.anisotropyMap.channel),clearcoatMapUv:te&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:jt&&A(C.sheenRoughnessMap.channel),specularMapUv:kt&&A(C.specularMap.channel),specularColorMapUv:Gt&&A(C.specularColorMap.channel),specularIntensityMapUv:le&&A(C.specularIntensityMap.channel),transmissionMapUv:X&&A(C.transmissionMap.channel),thicknessMapUv:Vt&&A(C.thicknessMap.channel),alphaMapUv:Ut&&A(C.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ye||ce),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!mt.attributes.uv&&(zt||Ut),fog:!!st,useFog:C.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:tt,skinning:j.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:rt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,decodeVideoTexture:zt&&C.map.isVideoTexture===!0&&Ie.getTransfer(C.map.colorSpace)===je,decodeVideoTextureEmissive:Wt&&C.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(C.emissiveMap.colorSpace)===je,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Bi,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Qt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&C.extensions.multiDraw===!0||Lt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return He.vertexUv1s=p.has(1),He.vertexUv2s=p.has(2),He.vertexUv3s=p.has(3),p.clear(),He}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const L in C.defines)R.push(L),R.push(C.defines[L]);return C.isRawShaderMaterial===!1&&(I(R,C),O(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function I(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function O(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=T[C.type];let L;if(R){const B=Fi[R];L=iE.clone(B.uniforms)}else L=C.uniforms;return L}function G(C,R){let L;for(let B=0,j=g.length;B<j;B++){const st=g[B];if(st.cacheKey===R){L=st,++L.usedTimes;break}}return L===void 0&&(L=new LA(r,R,C,c),g.push(L)),L}function k(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function U(C){m.remove(C)}function V(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:G,releaseProgram:k,releaseShaderCache:U,programs:g,dispose:V}}function IA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function zA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function uv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,T,A,S){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:S},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=S),t++,_}function d(v,x,M,T,A,S){const _=h(v,x,M,T,A,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,T,A,S){const _=h(v,x,M,T,A,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||zA),s.length>1&&s.sort(x||uv),l.length>1&&l.sort(x||uv)}function g(){for(let v=t,x=r.length;v<x;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function FA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new fv,r.set(s,[h])):l>=c.length?(h=new fv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function BA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new we};break;case"SpotLight":i={position:new nt,direction:new nt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return r[t.id]=i,i}}}function HA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let GA=0;function VA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kA(r){const t=new BA,i=HA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,c=new Je,h=new Je;function d(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,T=0,A=0,S=0,_=0,I=0,O=0,D=0,G=0,k=0,U=0;p.sort(VA);for(let C=0,R=p.length;C<R;C++){const L=p[C],B=L.color,j=L.intensity,st=L.distance,mt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)g+=B.r*j,v+=B.g*j,x+=B.b*j;else if(L.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(L.sh.coefficients[P],j);U++}else if(L.isDirectionalLight){const P=t.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,q=i.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=mt,s.directionalShadowMatrix[M]=L.shadow.matrix,I++}s.directional[M]=P,M++}else if(L.isSpotLight){const P=t.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy(B).multiplyScalar(j),P.distance=st,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,s.spot[A]=P;const K=L.shadow;if(L.map&&(s.spotLightMap[G]=L.map,G++,K.updateMatrices(L),L.castShadow&&k++),s.spotLightMatrix[A]=K.matrix,L.castShadow){const q=i.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[A]=q,s.spotShadowMap[A]=mt,D++}A++}else if(L.isRectAreaLight){const P=t.get(L);P.color.copy(B).multiplyScalar(j),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=P,S++}else if(L.isPointLight){const P=t.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),P.distance=L.distance,P.decay=L.decay,L.castShadow){const K=L.shadow,q=i.get(L);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[T]=q,s.pointShadowMap[T]=mt,s.pointShadowMatrix[T]=L.shadow.matrix,O++}s.point[T]=P,T++}else if(L.isHemisphereLight){const P=t.get(L);P.skyColor.copy(L.color).multiplyScalar(j),P.groundColor.copy(L.groundColor).multiplyScalar(j),s.hemi[_]=P,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qt.LTC_FLOAT_1,s.rectAreaLTC2=qt.LTC_FLOAT_2):(s.rectAreaLTC1=qt.LTC_HALF_1,s.rectAreaLTC2=qt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==M||V.pointLength!==T||V.spotLength!==A||V.rectAreaLength!==S||V.hemiLength!==_||V.numDirectionalShadows!==I||V.numPointShadows!==O||V.numSpotShadows!==D||V.numSpotMaps!==G||V.numLightProbes!==U)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=S,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+G-k,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=U,V.directionalLength=M,V.pointLength=T,V.spotLength=A,V.rectAreaLength=S,V.hemiLength=_,V.numDirectionalShadows=I,V.numPointShadows=O,V.numSpotShadows=D,V.numSpotMaps=G,V.numLightProbes=U,s.version=GA++)}function m(p,g){let v=0,x=0,M=0,T=0,A=0;const S=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const O=p[_];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),v++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),h.identity(),c.copy(O.matrixWorld),c.premultiply(S),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:s}}function hv(r){const t=new kA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function XA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new hv(r),t.set(l,[d])):c>=h.length?(d=new hv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YA(r,t,i){let s=new sp;const l=new _e,c=new _e,h=new sn,d=new dE({depthPacking:TM}),m=new pE,p={},g=i.maxTextureSize,v={[ts]:qn,[qn]:ts,[Bi]:Bi},x=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:WA,fragmentShader:jA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Xi;T.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _i(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xv;let _=this.type;this.render=function(k,U,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const C=r.getRenderTarget(),R=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Ja),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=_!==ma&&this.type===ma,st=_===ma&&this.type!==ma;for(let mt=0,P=k.length;mt<P;mt++){const K=k[mt],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const At=q.getFrameExtents();if(l.multiply(At),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/At.x),l.x=c.x*At.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/At.y),l.y=c.y*At.y,q.mapSize.y=c.y)),q.map===null||j===!0||st===!0){const z=this.type!==ma?{minFilter:Ui,magFilter:Ui}:{};q.map!==null&&q.map.dispose(),q.map=new Is(l.x,l.y,z),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const Dt=q.getViewportCount();for(let z=0;z<Dt;z++){const rt=q.getViewport(z);h.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),B.viewport(h),q.updateMatrices(K,z),s=q.getFrustum(),D(U,V,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ma&&I(q,V),q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(C,R,L)};function I(k,U){const V=t.update(A);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Is(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(U,null,V,x,A,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(U,null,V,M,A,null)}function O(k,U,V,C){let R=null;const L=V.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(L!==void 0)R=L;else if(R=V.isPointLight===!0?m:d,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const B=R.uuid,j=U.uuid;let st=p[B];st===void 0&&(st={},p[B]=st);let mt=st[j];mt===void 0&&(mt=R.clone(),st[j]=mt,U.addEventListener("dispose",G)),R=mt}if(R.visible=U.visible,R.wireframe=U.wireframe,C===ma?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:v[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=r.properties.get(R);B.light=V}return R}function D(k,U,V,C,R){if(k.visible===!1)return;if(k.layers.test(U.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===ma)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,k.matrixWorld);const j=t.update(k),st=k.material;if(Array.isArray(st)){const mt=j.groups;for(let P=0,K=mt.length;P<K;P++){const q=mt[P],At=st[q.materialIndex];if(At&&At.visible){const Dt=O(k,At,C,R);k.onBeforeShadow(r,k,U,V,j,Dt,q),r.renderBufferDirect(V,null,j,Dt,k,q),k.onAfterShadow(r,k,U,V,j,Dt,q)}}}else if(st.visible){const mt=O(k,st,C,R);k.onBeforeShadow(r,k,U,V,j,mt,null),r.renderBufferDirect(V,null,j,mt,k,null),k.onAfterShadow(r,k,U,V,j,mt,null)}}const B=k.children;for(let j=0,st=B.length;j<st;j++)D(B[j],U,V,C,R)}function G(k){k.target.removeEventListener("dispose",G);for(const V in p){const C=p[V],R=k.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const qA={[ld]:cd,[ud]:dd,[fd]:pd,[zr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:zr};function ZA(r,t){function i(){let X=!1;const Vt=new sn;let Nt=null;const Ut=new sn(0,0,0,0);return{setMask:function(dt){Nt!==dt&&!X&&(r.colorMask(dt,dt,dt,dt),Nt=dt)},setLocked:function(dt){X=dt},setClear:function(dt,Tt,Qt,de,He){He===!0&&(dt*=de,Tt*=de,Qt*=de),Vt.set(dt,Tt,Qt,de),Ut.equals(Vt)===!1&&(r.clearColor(dt,Tt,Qt,de),Ut.copy(Vt))},reset:function(){X=!1,Nt=null,Ut.set(-1,0,0,0)}}}function s(){let X=!1,Vt=!1,Nt=null,Ut=null,dt=null;return{setReversed:function(Tt){if(Vt!==Tt){const Qt=t.get("EXT_clip_control");Tt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Vt=Tt;const de=dt;dt=null,this.setClear(de)}},getReversed:function(){return Vt},setTest:function(Tt){Tt?Rt(r.DEPTH_TEST):tt(r.DEPTH_TEST)},setMask:function(Tt){Nt!==Tt&&!X&&(r.depthMask(Tt),Nt=Tt)},setFunc:function(Tt){if(Vt&&(Tt=qA[Tt]),Ut!==Tt){switch(Tt){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ut=Tt}},setLocked:function(Tt){X=Tt},setClear:function(Tt){dt!==Tt&&(Vt&&(Tt=1-Tt),r.clearDepth(Tt),dt=Tt)},reset:function(){X=!1,Nt=null,Ut=null,dt=null,Vt=!1}}}function l(){let X=!1,Vt=null,Nt=null,Ut=null,dt=null,Tt=null,Qt=null,de=null,He=null;return{setTest:function(Ue){X||(Ue?Rt(r.STENCIL_TEST):tt(r.STENCIL_TEST))},setMask:function(Ue){Vt!==Ue&&!X&&(r.stencilMask(Ue),Vt=Ue)},setFunc:function(Ue,Sn,xi){(Nt!==Ue||Ut!==Sn||dt!==xi)&&(r.stencilFunc(Ue,Sn,xi),Nt=Ue,Ut=Sn,dt=xi)},setOp:function(Ue,Sn,xi){(Tt!==Ue||Qt!==Sn||de!==xi)&&(r.stencilOp(Ue,Sn,xi),Tt=Ue,Qt=Sn,de=xi)},setLocked:function(Ue){X=Ue},setClear:function(Ue){He!==Ue&&(r.clearStencil(Ue),He=Ue)},reset:function(){X=!1,Vt=null,Nt=null,Ut=null,dt=null,Tt=null,Qt=null,de=null,He=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],T=null,A=!1,S=null,_=null,I=null,O=null,D=null,G=null,k=null,U=new we(0,0,0),V=0,C=!1,R=null,L=null,B=null,j=null,st=null;const mt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=K>=2);let At=null,Dt={};const z=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),Et=new sn().fromArray(z),Q=new sn().fromArray(rt);function vt(X,Vt,Nt,Ut){const dt=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(X,Tt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<Nt;Qt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Vt,0,r.RGBA,1,1,Ut,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(Vt+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return Tt}const Pt={};Pt[r.TEXTURE_2D]=vt(r.TEXTURE_2D,r.TEXTURE_2D,1),Pt[r.TEXTURE_CUBE_MAP]=vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[r.TEXTURE_2D_ARRAY]=vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pt[r.TEXTURE_3D]=vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Rt(r.DEPTH_TEST),h.setFunc(zr),$t(!1),ye(o_),Rt(r.CULL_FACE),F(Ja);function Rt(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function tt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function ot(X,Vt){return v[X]!==Vt?(r.bindFramebuffer(X,Vt),v[X]=Vt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Vt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Vt),!0):!1}function Lt(X,Vt){let Nt=M,Ut=!1;if(X){Nt=x.get(Vt),Nt===void 0&&(Nt=[],x.set(Vt,Nt));const dt=X.textures;if(Nt.length!==dt.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,Qt=dt.length;Tt<Qt;Tt++)Nt[Tt]=r.COLOR_ATTACHMENT0+Tt;Nt.length=dt.length,Ut=!0}}else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,Ut=!0);Ut&&r.drawBuffers(Nt)}function zt(X){return T!==X?(r.useProgram(X),T=X,!0):!1}const Ot={[Ds]:r.FUNC_ADD,[KS]:r.FUNC_SUBTRACT,[QS]:r.FUNC_REVERSE_SUBTRACT};Ot[JS]=r.MIN,Ot[$S]=r.MAX;const Ft={[tM]:r.ZERO,[eM]:r.ONE,[nM]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[lM]:r.SRC_ALPHA_SATURATE,[rM]:r.DST_COLOR,[aM]:r.DST_ALPHA,[iM]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[oM]:r.ONE_MINUS_DST_COLOR,[sM]:r.ONE_MINUS_DST_ALPHA,[cM]:r.CONSTANT_COLOR,[uM]:r.ONE_MINUS_CONSTANT_COLOR,[fM]:r.CONSTANT_ALPHA,[hM]:r.ONE_MINUS_CONSTANT_ALPHA};function F(X,Vt,Nt,Ut,dt,Tt,Qt,de,He,Ue){if(X===Ja){A===!0&&(tt(r.BLEND),A=!1);return}if(A===!1&&(Rt(r.BLEND),A=!0),X!==ZS){if(X!==S||Ue!==C){if((_!==Ds||D!==Ds)&&(r.blendEquation(r.FUNC_ADD),_=Ds,D=Ds),Ue)switch(X){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case l_:r.blendFunc(r.ONE,r.ONE);break;case c_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case u_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case l_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case c_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case u_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,O=null,G=null,k=null,U.set(0,0,0),V=0,S=X,C=Ue}return}dt=dt||Vt,Tt=Tt||Nt,Qt=Qt||Ut,(Vt!==_||dt!==D)&&(r.blendEquationSeparate(Ot[Vt],Ot[dt]),_=Vt,D=dt),(Nt!==I||Ut!==O||Tt!==G||Qt!==k)&&(r.blendFuncSeparate(Ft[Nt],Ft[Ut],Ft[Tt],Ft[Qt]),I=Nt,O=Ut,G=Tt,k=Qt),(de.equals(U)===!1||He!==V)&&(r.blendColor(de.r,de.g,de.b,He),U.copy(de),V=He),S=X,C=!1}function ie(X,Vt){X.side===Bi?tt(r.CULL_FACE):Rt(r.CULL_FACE);let Nt=X.side===qn;Vt&&(Nt=!Nt),$t(Nt),X.blending===Or&&X.transparent===!1?F(Ja):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ut=X.stencilWrite;d.setTest(Ut),Ut&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){R!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),R=X)}function ye(X){X!==jS?(Rt(r.CULL_FACE),X!==L&&(X===o_?r.cullFace(r.BACK):X===YS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):tt(r.CULL_FACE),L=X}function Mt(X){X!==B&&(P&&r.lineWidth(X),B=X)}function Wt(X,Vt,Nt){X?(Rt(r.POLYGON_OFFSET_FILL),(j!==Vt||st!==Nt)&&(r.polygonOffset(Vt,Nt),j=Vt,st=Nt)):tt(r.POLYGON_OFFSET_FILL)}function Ct(X){X?Rt(r.SCISSOR_TEST):tt(r.SCISSOR_TEST)}function Ht(X){X===void 0&&(X=r.TEXTURE0+mt-1),At!==X&&(r.activeTexture(X),At=X)}function ce(X,Vt,Nt){Nt===void 0&&(At===null?Nt=r.TEXTURE0+mt-1:Nt=At);let Ut=Dt[Nt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Dt[Nt]=Ut),(Ut.type!==X||Ut.texture!==Vt)&&(At!==Nt&&(r.activeTexture(Nt),At=Nt),r.bindTexture(X,Vt||Pt[X]),Ut.type=X,Ut.texture=Vt)}function N(){const X=Dt[At];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){Et.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function jt(X){Q.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function kt(X,Vt){let Nt=p.get(Vt);Nt===void 0&&(Nt=new WeakMap,p.set(Vt,Nt));let Ut=Nt.get(X);Ut===void 0&&(Ut=r.getUniformBlockIndex(Vt,X.name),Nt.set(X,Ut))}function Gt(X,Vt){const Ut=p.get(Vt).get(X);m.get(Vt)!==Ut&&(r.uniformBlockBinding(Vt,Ut,X.__bindingPointIndex),m.set(Vt,Ut))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},At=null,Dt={},v={},x=new WeakMap,M=[],T=null,A=!1,S=null,_=null,I=null,O=null,D=null,G=null,k=null,U=new we(0,0,0),V=0,C=!1,R=null,L=null,B=null,j=null,st=null,Et.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Rt,disable:tt,bindFramebuffer:ot,drawBuffers:Lt,useProgram:zt,setBlending:F,setMaterial:ie,setFlipSided:$t,setCullFace:ye,setLineWidth:Mt,setPolygonOffset:Wt,setScissorTest:Ct,activeTexture:Ht,bindTexture:ce,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:yt,texImage3D:gt,updateUBOMapping:kt,uniformBlockBinding:Gt,texStorage2D:Bt,texStorage3D:Zt,texSubImage2D:ut,texSubImage3D:_t,compressedTexSubImage2D:pt,compressedTexSubImage3D:te,scissor:wt,viewport:jt,reset:le}}function KA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return M?new OffscreenCanvas(N,E):ru("canvas")}function A(N,E,et){let ut=1;const _t=ce(N);if((_t.width>et||_t.height>et)&&(ut=et/Math.max(_t.width,_t.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(ut*_t.width),te=Math.floor(ut*_t.height);v===void 0&&(v=T(pt,te));const Bt=E?T(pt,te):v;return Bt.width=pt,Bt.height=te,Bt.getContext("2d").drawImage(N,0,0,pt,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+pt+"x"+te+")."),Bt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(N,E,et,ut,_t=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=E;if(E===r.RED&&(et===r.FLOAT&&(pt=r.R32F),et===r.HALF_FLOAT&&(pt=r.R16F),et===r.UNSIGNED_BYTE&&(pt=r.R8)),E===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.R8UI),et===r.UNSIGNED_SHORT&&(pt=r.R16UI),et===r.UNSIGNED_INT&&(pt=r.R32UI),et===r.BYTE&&(pt=r.R8I),et===r.SHORT&&(pt=r.R16I),et===r.INT&&(pt=r.R32I)),E===r.RG&&(et===r.FLOAT&&(pt=r.RG32F),et===r.HALF_FLOAT&&(pt=r.RG16F),et===r.UNSIGNED_BYTE&&(pt=r.RG8)),E===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RG8UI),et===r.UNSIGNED_SHORT&&(pt=r.RG16UI),et===r.UNSIGNED_INT&&(pt=r.RG32UI),et===r.BYTE&&(pt=r.RG8I),et===r.SHORT&&(pt=r.RG16I),et===r.INT&&(pt=r.RG32I)),E===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),et===r.UNSIGNED_INT&&(pt=r.RGB32UI),et===r.BYTE&&(pt=r.RGB8I),et===r.SHORT&&(pt=r.RGB16I),et===r.INT&&(pt=r.RGB32I)),E===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),et===r.UNSIGNED_INT&&(pt=r.RGBA32UI),et===r.BYTE&&(pt=r.RGBA8I),et===r.SHORT&&(pt=r.RGBA16I),et===r.INT&&(pt=r.RGBA32I)),E===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),E===r.RGBA){const te=_t?au:Ie.getTransfer(ut);et===r.FLOAT&&(pt=r.RGBA32F),et===r.HALF_FLOAT&&(pt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(pt=te===je?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(N,E){let et;return N?E===null||E===Os||E===Qo?et=r.DEPTH24_STENCIL8:E===ga?et=r.DEPTH32F_STENCIL8:E===Ko&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Os||E===Qo?et=r.DEPTH_COMPONENT24:E===ga?et=r.DEPTH_COMPONENT32F:E===Ko&&(et=r.DEPTH_COMPONENT16),et}function G(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ui&&N.minFilter!==Hi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function k(N){const E=N.target;E.removeEventListener("dispose",k),V(E),E.isVideoTexture&&g.delete(E)}function U(N){const E=N.target;E.removeEventListener("dispose",U),R(E)}function V(N){const E=s.get(N);if(E.__webglInit===void 0)return;const et=N.source,ut=x.get(et);if(ut){const _t=ut[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&C(N),Object.keys(ut).length===0&&x.delete(et)}s.remove(N)}function C(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const et=N.source,ut=x.get(et);delete ut[E.__cacheKey],h.memory.textures--}function R(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let _t=0;_t<E.__webglFramebuffer[ut].length;_t++)r.deleteFramebuffer(E.__webglFramebuffer[ut][_t]);else r.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[ut]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ut=0,_t=et.length;ut<_t;ut++){const pt=s.get(et[ut]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(et[ut])}s.remove(N)}let L=0;function B(){L=0}function j(){const N=L;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),L+=1,N}function st(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function mt(N,E){const et=s.get(N);if(N.isVideoTexture&&Ct(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ut=N.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(et,N,E);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+E)}function P(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){Pt(et,N,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+E)}function K(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){Pt(et,N,E);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+E)}function q(N,E){const et=s.get(N);if(N.version>0&&et.__version!==N.version){Rt(et,N,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+E)}const At={[_d]:r.REPEAT,[Us]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},Dt={[Ui]:r.NEAREST,[MM]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[Ah]:r.LINEAR_MIPMAP_NEAREST,[Ns]:r.LINEAR_MIPMAP_LINEAR},z={[AM]:r.NEVER,[UM]:r.ALWAYS,[RM]:r.LESS,[Lv]:r.LEQUAL,[CM]:r.EQUAL,[LM]:r.GEQUAL,[wM]:r.GREATER,[DM]:r.NOTEQUAL};function rt(N,E){if(E.type===ga&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hi||E.magFilter===Ah||E.magFilter===Ec||E.magFilter===Ns||E.minFilter===Hi||E.minFilter===Ah||E.minFilter===Ec||E.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,At[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,At[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,At[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Dt[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Dt[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ui||E.minFilter!==Ec&&E.minFilter!==Ns||E.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Et(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",k));const ut=E.source;let _t=x.get(ut);_t===void 0&&(_t={},x.set(ut,_t));const pt=st(E);if(pt!==N.__cacheKey){_t[pt]===void 0&&(_t[pt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),_t[pt].usedTimes++;const te=_t[N.__cacheKey];te!==void 0&&(_t[N.__cacheKey].usedTimes--,te.usedTimes===0&&C(E)),N.__cacheKey=pt,N.__webglTexture=_t[pt].texture}return et}function Q(N,E,et){return Math.floor(Math.floor(N/et)/E)}function vt(N,E,et,ut){const pt=N.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,et,ut,E.data);else{pt.sort((gt,wt)=>gt.start-wt.start);let te=0;for(let gt=1;gt<pt.length;gt++){const wt=pt[te],jt=pt[gt],kt=wt.start+wt.count,Gt=Q(jt.start,E.width,4),le=Q(wt.start,E.width,4);jt.start<=kt+1&&Gt===le&&Q(jt.start+jt.count-1,E.width,4)===Gt?wt.count=Math.max(wt.count,jt.start+jt.count-wt.start):(++te,pt[te]=jt)}pt.length=te+1;const Bt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),yt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let gt=0,wt=pt.length;gt<wt;gt++){const jt=pt[gt],kt=Math.floor(jt.start/4),Gt=Math.ceil(jt.count/4),le=kt%E.width,X=Math.floor(kt/E.width),Vt=Gt,Nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,le,X,Vt,Nt,et,ut,E.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Bt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,yt)}}function Pt(N,E,et){let ut=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=r.TEXTURE_3D);const _t=Et(N,E),pt=E.source;i.bindTexture(ut,N.__webglTexture,r.TEXTURE0+et);const te=s.get(pt);if(pt.version!==te.__version||_t===!0){i.activeTexture(r.TEXTURE0+et);const Bt=Ie.getPrimaries(Ie.workingColorSpace),Zt=E.colorSpace===Qa?null:Ie.getPrimaries(E.colorSpace),yt=E.colorSpace===Qa||Bt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let gt=A(E.image,!1,l.maxTextureSize);gt=Ht(E,gt);const wt=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let kt=O(E.internalFormat,wt,jt,E.colorSpace,E.isVideoTexture);rt(ut,E);let Gt;const le=E.mipmaps,X=E.isVideoTexture!==!0,Vt=te.__version===void 0||_t===!0,Nt=pt.dataReady,Ut=G(E,gt);if(E.isDepthTexture)kt=D(E.format===$o,E.type),Vt&&(X?i.texStorage2D(r.TEXTURE_2D,1,kt,gt.width,gt.height):i.texImage2D(r.TEXTURE_2D,0,kt,gt.width,gt.height,0,wt,jt,null));else if(E.isDataTexture)if(le.length>0){X&&Vt&&i.texStorage2D(r.TEXTURE_2D,Ut,kt,le[0].width,le[0].height);for(let dt=0,Tt=le.length;dt<Tt;dt++)Gt=le[dt],X?Nt&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,wt,jt,Gt.data):i.texImage2D(r.TEXTURE_2D,dt,kt,Gt.width,Gt.height,0,wt,jt,Gt.data);E.generateMipmaps=!1}else X?(Vt&&i.texStorage2D(r.TEXTURE_2D,Ut,kt,gt.width,gt.height),Nt&&vt(E,gt,wt,jt)):i.texImage2D(r.TEXTURE_2D,0,kt,gt.width,gt.height,0,wt,jt,gt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,kt,le[0].width,le[0].height,gt.depth);for(let dt=0,Tt=le.length;dt<Tt;dt++)if(Gt=le[dt],E.format!==Li)if(wt!==null)if(X){if(Nt)if(E.layerUpdates.size>0){const Qt=V_(Gt.width,Gt.height,E.format,E.type);for(const de of E.layerUpdates){const He=Gt.data.subarray(de*Qt/Gt.data.BYTES_PER_ELEMENT,(de+1)*Qt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,de,Gt.width,Gt.height,1,wt,He)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Gt.width,Gt.height,gt.depth,wt,Gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,kt,Gt.width,Gt.height,gt.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Nt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Gt.width,Gt.height,gt.depth,wt,jt,Gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,dt,kt,Gt.width,Gt.height,gt.depth,0,wt,jt,Gt.data)}else{X&&Vt&&i.texStorage2D(r.TEXTURE_2D,Ut,kt,le[0].width,le[0].height);for(let dt=0,Tt=le.length;dt<Tt;dt++)Gt=le[dt],E.format!==Li?wt!==null?X?Nt&&i.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,wt,Gt.data):i.compressedTexImage2D(r.TEXTURE_2D,dt,kt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Nt&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,Gt.width,Gt.height,wt,jt,Gt.data):i.texImage2D(r.TEXTURE_2D,dt,kt,Gt.width,Gt.height,0,wt,jt,Gt.data)}else if(E.isDataArrayTexture)if(X){if(Vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,kt,gt.width,gt.height,gt.depth),Nt)if(E.layerUpdates.size>0){const dt=V_(gt.width,gt.height,E.format,E.type);for(const Tt of E.layerUpdates){const Qt=gt.data.subarray(Tt*dt/gt.data.BYTES_PER_ELEMENT,(Tt+1)*dt/gt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Tt,gt.width,gt.height,1,wt,jt,Qt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,wt,jt,gt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,gt.width,gt.height,gt.depth,0,wt,jt,gt.data);else if(E.isData3DTexture)X?(Vt&&i.texStorage3D(r.TEXTURE_3D,Ut,kt,gt.width,gt.height,gt.depth),Nt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,wt,jt,gt.data)):i.texImage3D(r.TEXTURE_3D,0,kt,gt.width,gt.height,gt.depth,0,wt,jt,gt.data);else if(E.isFramebufferTexture){if(Vt)if(X)i.texStorage2D(r.TEXTURE_2D,Ut,kt,gt.width,gt.height);else{let dt=gt.width,Tt=gt.height;for(let Qt=0;Qt<Ut;Qt++)i.texImage2D(r.TEXTURE_2D,Qt,kt,dt,Tt,0,wt,jt,null),dt>>=1,Tt>>=1}}else if(le.length>0){if(X&&Vt){const dt=ce(le[0]);i.texStorage2D(r.TEXTURE_2D,Ut,kt,dt.width,dt.height)}for(let dt=0,Tt=le.length;dt<Tt;dt++)Gt=le[dt],X?Nt&&i.texSubImage2D(r.TEXTURE_2D,dt,0,0,wt,jt,Gt):i.texImage2D(r.TEXTURE_2D,dt,kt,wt,jt,Gt);E.generateMipmaps=!1}else if(X){if(Vt){const dt=ce(gt);i.texStorage2D(r.TEXTURE_2D,Ut,kt,dt.width,dt.height)}Nt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,jt,gt)}else i.texImage2D(r.TEXTURE_2D,0,kt,wt,jt,gt);S(E)&&_(ut),te.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Rt(N,E,et){if(E.image.length!==6)return;const ut=Et(N,E),_t=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+et);const pt=s.get(_t);if(_t.version!==pt.__version||ut===!0){i.activeTexture(r.TEXTURE0+et);const te=Ie.getPrimaries(Ie.workingColorSpace),Bt=E.colorSpace===Qa?null:Ie.getPrimaries(E.colorSpace),Zt=E.colorSpace===Qa||te===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const yt=E.isCompressedTexture||E.image[0].isCompressedTexture,gt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let Tt=0;Tt<6;Tt++)!yt&&!gt?wt[Tt]=A(E.image[Tt],!0,l.maxCubemapSize):wt[Tt]=gt?E.image[Tt].image:E.image[Tt],wt[Tt]=Ht(E,wt[Tt]);const jt=wt[0],kt=c.convert(E.format,E.colorSpace),Gt=c.convert(E.type),le=O(E.internalFormat,kt,Gt,E.colorSpace),X=E.isVideoTexture!==!0,Vt=pt.__version===void 0||ut===!0,Nt=_t.dataReady;let Ut=G(E,jt);rt(r.TEXTURE_CUBE_MAP,E);let dt;if(yt){X&&Vt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,le,jt.width,jt.height);for(let Tt=0;Tt<6;Tt++){dt=wt[Tt].mipmaps;for(let Qt=0;Qt<dt.length;Qt++){const de=dt[Qt];E.format!==Li?kt!==null?X?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt,0,0,de.width,de.height,kt,de.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt,0,0,de.width,de.height,kt,Gt,de.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt,le,de.width,de.height,0,kt,Gt,de.data)}}}else{if(dt=E.mipmaps,X&&Vt){dt.length>0&&Ut++;const Tt=ce(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,le,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(gt){X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,wt[Tt].width,wt[Tt].height,kt,Gt,wt[Tt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,le,wt[Tt].width,wt[Tt].height,0,kt,Gt,wt[Tt].data);for(let Qt=0;Qt<dt.length;Qt++){const He=dt[Qt].image[Tt].image;X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt+1,0,0,He.width,He.height,kt,Gt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt+1,le,He.width,He.height,0,kt,Gt,He.data)}}else{X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,kt,Gt,wt[Tt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,le,kt,Gt,wt[Tt]);for(let Qt=0;Qt<dt.length;Qt++){const de=dt[Qt];X?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt+1,0,0,kt,Gt,de.image[Tt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Qt+1,le,kt,Gt,de.image[Tt])}}}S(E)&&_(r.TEXTURE_CUBE_MAP),pt.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function tt(N,E,et,ut,_t,pt){const te=c.convert(et.format,et.colorSpace),Bt=c.convert(et.type),Zt=O(et.internalFormat,te,Bt,et.colorSpace),yt=s.get(E),gt=s.get(et);if(gt.__renderTarget=E,!yt.__hasExternalTextures){const wt=Math.max(1,E.width>>pt),jt=Math.max(1,E.height>>pt);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?i.texImage3D(_t,pt,Zt,wt,jt,E.depth,0,te,Bt,null):i.texImage2D(_t,pt,Zt,wt,jt,0,te,Bt,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Wt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,_t,gt.__webglTexture,0,Mt(E)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,_t,gt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(N,E,et){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const ut=E.depthTexture,_t=ut&&ut.isDepthTexture?ut.type:null,pt=D(E.stencilBuffer,_t),te=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=Mt(E);Wt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt,pt,E.width,E.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,pt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,pt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,N)}else{const ut=E.textures;for(let _t=0;_t<ut.length;_t++){const pt=ut[_t],te=c.convert(pt.format,pt.colorSpace),Bt=c.convert(pt.type),Zt=O(pt.internalFormat,te,Bt,pt.colorSpace),yt=Mt(E);et&&Wt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,Zt,E.width,E.height):Wt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt,Zt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt(E.depthTexture,0);const _t=ut.__webglTexture,pt=Mt(E);if(E.depthTexture.format===Jo)Wt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0);else if(E.depthTexture.format===$o)Wt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function zt(N){const E=s.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",_t)};ut.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ut}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=N.texture.mipmaps;ut&&ut.length>0?Lt(E.__webglFramebuffer[0],N):Lt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=r.createRenderbuffer(),ot(E.__webglDepthbuffer[ut],N,!1);else{const _t=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,pt)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ot(E.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(N,E,et){const ut=s.get(N);E!==void 0&&tt(ut.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&zt(N)}function Ft(N){const E=N.texture,et=s.get(N),ut=s.get(E);N.addEventListener("dispose",U);const _t=N.textures,pt=N.isWebGLCubeRenderTarget===!0,te=_t.length>1;if(te||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=E.version,h.memory.textures++),pt){et.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Bt]=[];for(let Zt=0;Zt<E.mipmaps.length;Zt++)et.__webglFramebuffer[Bt][Zt]=r.createFramebuffer()}else et.__webglFramebuffer[Bt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)et.__webglFramebuffer[Bt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(te)for(let Bt=0,Zt=_t.length;Bt<Zt;Bt++){const yt=s.get(_t[Bt]);yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&Wt(N)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Bt=0;Bt<_t.length;Bt++){const Zt=_t[Bt];et.__webglColorRenderbuffer[Bt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Bt]);const yt=c.convert(Zt.format,Zt.colorSpace),gt=c.convert(Zt.type),wt=O(Zt.internalFormat,yt,gt,Zt.colorSpace,N.isXRRenderTarget===!0),jt=Mt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,wt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Bt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),rt(r.TEXTURE_CUBE_MAP,E);for(let Bt=0;Bt<6;Bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)tt(et.__webglFramebuffer[Bt][Zt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Zt);else tt(et.__webglFramebuffer[Bt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);S(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(te){for(let Bt=0,Zt=_t.length;Bt<Zt;Bt++){const yt=_t[Bt],gt=s.get(yt);i.bindTexture(r.TEXTURE_2D,gt.__webglTexture),rt(r.TEXTURE_2D,yt),tt(et.__webglFramebuffer,N,yt,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,0),S(yt)&&_(r.TEXTURE_2D)}i.unbindTexture()}else{let Bt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Bt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Bt,ut.__webglTexture),rt(Bt,E),E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)tt(et.__webglFramebuffer[Zt],N,E,r.COLOR_ATTACHMENT0,Bt,Zt);else tt(et.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,Bt,0);S(E)&&_(Bt),i.unbindTexture()}N.depthBuffer&&zt(N)}function F(N){const E=N.textures;for(let et=0,ut=E.length;et<ut;et++){const _t=E[et];if(S(_t)){const pt=I(N),te=s.get(_t).__webglTexture;i.bindTexture(pt,te),_(pt),i.unbindTexture()}}}const ie=[],$t=[];function ye(N){if(N.samples>0){if(Wt(N)===!1){const E=N.textures,et=N.width,ut=N.height;let _t=r.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=s.get(N),Bt=E.length>1;if(Bt)for(let yt=0;yt<E.length;yt++)i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);const Zt=N.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Bt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[yt]);const gt=s.get(E[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,gt,0)}r.blitFramebuffer(0,0,et,ut,0,0,et,ut,_t,r.NEAREST),m===!0&&(ie.length=0,$t.length=0,ie.push(r.COLOR_ATTACHMENT0+yt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ie.push(pt),$t.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Bt)for(let yt=0;yt<E.length;yt++){i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,te.__webglColorRenderbuffer[yt]);const gt=s.get(E[yt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,gt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Mt(N){return Math.min(l.maxSamples,N.samples)}function Wt(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ht(N,E){const et=N.colorSpace,ut=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Hr&&et!==Qa&&(Ie.getTransfer(et)===je?(ut!==Li||_t!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function ce(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=B,this.setTexture2D=mt,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Wt}function QA(r,t){function i(s,l=Qa){let c;const h=Ie.getTransfer(l);if(s===Vi)return r.UNSIGNED_BYTE;if(s===Qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Mv)return r.BYTE;if(s===Ev)return r.SHORT;if(s===Ko)return r.UNSIGNED_SHORT;if(s===Kd)return r.INT;if(s===Os)return r.UNSIGNED_INT;if(s===ga)return r.FLOAT;if(s===tl)return r.HALF_FLOAT;if(s===bv)return r.ALPHA;if(s===Av)return r.RGB;if(s===Li)return r.RGBA;if(s===Jo)return r.DEPTH_COMPONENT;if(s===$o)return r.DEPTH_STENCIL;if(s===Rv)return r.RED;if(s===$d)return r.RED_INTEGER;if(s===Cv)return r.RG;if(s===tp)return r.RG_INTEGER;if(s===ep)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(h===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===yd||s===Sd||s===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===Td||s===bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ed||s===Td)return h===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ld||s===Ud||s===Nd||s===Od||s===Pd||s===Id||s===zd||s===Fd||s===Bd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ad)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ud)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Od)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bd)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nu||s===Hd||s===Gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===nu)return h===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wv||s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===nu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const JA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$A=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Zn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new es({vertexShader:JA,fragmentShader:$A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new il(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eR extends zs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,T=null;const A=new tR,S=i.getContextAttributes();let _=null,I=null;const O=[],D=[],G=new _e;let k=null;const U=new mi;U.viewport=new sn;const V=new mi;V.viewport=new sn;const C=[U,V],R=new xE;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=O[Q];return vt===void 0&&(vt=new qh,O[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=O[Q];return vt===void 0&&(vt=new qh,O[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=O[Q];return vt===void 0&&(vt=new qh,O[Q]=vt),vt.getHandSpace()};function j(Q){const vt=D.indexOf(Q.inputSource);if(vt===-1)return;const Pt=O[vt];Pt!==void 0&&(Pt.update(Q.inputSource,Q.frame,p||h),Pt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function st(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",st),l.removeEventListener("inputsourceschange",mt);for(let Q=0;Q<O.length;Q++){const vt=D[Q];vt!==null&&(D[Q]=null,O[Q].disconnect(vt))}L=null,B=null,A.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,I=null,Et.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",st),l.addEventListener("inputsourceschange",mt),S.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Rt=null,tt=null;S.depth&&(tt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Pt=S.stencil?$o:Jo,Rt=S.stencil?Qo:Os);const ot={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(ot),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),I=new Is(x.textureWidth,x.textureHeight,{format:Li,type:Vi,depthTexture:new Gv(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Pt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Is(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Et.setContext(l),Et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function mt(Q){for(let vt=0;vt<Q.removed.length;vt++){const Pt=Q.removed[vt],Rt=D.indexOf(Pt);Rt>=0&&(D[Rt]=null,O[Rt].disconnect(Pt))}for(let vt=0;vt<Q.added.length;vt++){const Pt=Q.added[vt];let Rt=D.indexOf(Pt);if(Rt===-1){for(let ot=0;ot<O.length;ot++)if(ot>=D.length){D.push(Pt),Rt=ot;break}else if(D[ot]===null){D[ot]=Pt,Rt=ot;break}if(Rt===-1)break}const tt=O[Rt];tt&&tt.connect(Pt)}}const P=new nt,K=new nt;function q(Q,vt,Pt){P.setFromMatrixPosition(vt.matrixWorld),K.setFromMatrixPosition(Pt.matrixWorld);const Rt=P.distanceTo(K),tt=vt.projectionMatrix.elements,ot=Pt.projectionMatrix.elements,Lt=tt[14]/(tt[10]-1),zt=tt[14]/(tt[10]+1),Ot=(tt[9]+1)/tt[5],Ft=(tt[9]-1)/tt[5],F=(tt[8]-1)/tt[0],ie=(ot[8]+1)/ot[0],$t=Lt*F,ye=Lt*ie,Mt=Rt/(-F+ie),Wt=Mt*-F;if(vt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Wt),Q.translateZ(Mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),tt[10]===-1)Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Ct=Lt+Mt,Ht=zt+Mt,ce=$t-Wt,N=ye+(Rt-Wt),E=Ot*zt/Ht*Ct,et=Ft*zt/Ht*Ct;Q.projectionMatrix.makePerspective(ce,N,E,et,Ct,Ht),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function At(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let vt=Q.near,Pt=Q.far;A.texture!==null&&(A.depthNear>0&&(vt=A.depthNear),A.depthFar>0&&(Pt=A.depthFar)),R.near=V.near=U.near=vt,R.far=V.far=U.far=Pt,(L!==R.near||B!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,B=R.far),U.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,R.layers.mask=U.layers.mask|V.layers.mask;const Rt=Q.parent,tt=R.cameras;At(R,Rt);for(let ot=0;ot<tt.length;ot++)At(tt[ot],Rt);tt.length===2?q(R,U,V):R.projectionMatrix.copy(U.projectionMatrix),Dt(Q,R,Rt)};function Dt(Q,vt,Pt){Pt===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(Pt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Wd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let z=null;function rt(Q,vt){if(g=vt.getViewerPose(p||h),T=vt,g!==null){const Pt=g.views;M!==null&&(t.setRenderTargetFramebuffer(I,M.framebuffer),t.setRenderTarget(I));let Rt=!1;Pt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Lt=0;Lt<Pt.length;Lt++){const zt=Pt[Lt];let Ot=null;if(M!==null)Ot=M.getViewport(zt);else{const F=v.getViewSubImage(x,zt);Ot=F.viewport,Lt===0&&(t.setRenderTargetTextures(I,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(I))}let Ft=C[Lt];Ft===void 0&&(Ft=new mi,Ft.layers.enable(Lt),Ft.viewport=new sn,C[Lt]=Ft),Ft.matrix.fromArray(zt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(zt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Lt===0&&(R.matrix.copy(Ft.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(Ft)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Lt=v.getDepthInformation(Pt[0]);Lt&&Lt.isValid&&Lt.texture&&A.init(t,Lt,l.renderState)}}for(let Pt=0;Pt<O.length;Pt++){const Rt=D[Pt],tt=O[Pt];Rt!==null&&tt!==void 0&&tt.update(Rt,vt,p||h)}z&&z(Q,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const Et=new Xv;Et.setAnimationLoop(rt),this.setAnimationLoop=function(Q){z=Q},this.dispose=function(){}}}const Rs=new ki,nR=new Je;function iR(r,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,zv(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,I,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),T(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,I,O):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=t.get(_),O=I.envMap,D=I.envMapRotation;O&&(S.envMap.value=O,Rs.copy(D),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),S.envMapRotation.value.setFromMatrix4(nR.makeRotationFromEuler(Rs)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,I,O){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=O*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const I=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function aR(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,O){const D=O.program;s.uniformBlockBinding(I,D)}function p(I,O){let D=l[I.id];D===void 0&&(T(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",S));const G=O.program;s.updateUBOMapping(I,G);const k=t.render.frame;c[I.id]!==k&&(x(I),c[I.id]=k)}function g(I){const O=v();I.__bindingPointIndex=O;const D=r.createBuffer(),G=I.__size,k=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const O=l[I.id],D=I.uniforms,G=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let k=0,U=D.length;k<U;k++){const V=Array.isArray(D[k])?D[k]:[D[k]];for(let C=0,R=V.length;C<R;C++){const L=V[C];if(M(L,k,C,G)===!0){const B=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let st=0;for(let mt=0;mt<j.length;mt++){const P=j[mt],K=A(P);typeof P=="number"||typeof P=="boolean"?(L.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,B+st,L.__data)):P.isMatrix3?(L.__data[0]=P.elements[0],L.__data[1]=P.elements[1],L.__data[2]=P.elements[2],L.__data[3]=0,L.__data[4]=P.elements[3],L.__data[5]=P.elements[4],L.__data[6]=P.elements[5],L.__data[7]=0,L.__data[8]=P.elements[6],L.__data[9]=P.elements[7],L.__data[10]=P.elements[8],L.__data[11]=0):(P.toArray(L.__data,st),st+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(I,O,D,G){const k=I.value,U=O+"_"+D;if(G[U]===void 0)return typeof k=="number"||typeof k=="boolean"?G[U]=k:G[U]=k.clone(),!0;{const V=G[U];if(typeof k=="number"||typeof k=="boolean"){if(V!==k)return G[U]=k,!0}else if(V.equals(k)===!1)return V.copy(k),!0}return!1}function T(I){const O=I.uniforms;let D=0;const G=16;for(let U=0,V=O.length;U<V;U++){const C=Array.isArray(O[U])?O[U]:[O[U]];for(let R=0,L=C.length;R<L;R++){const B=C[R],j=Array.isArray(B.value)?B.value:[B.value];for(let st=0,mt=j.length;st<mt;st++){const P=j[st],K=A(P),q=D%G,At=q%K.boundary,Dt=q+At;D+=At,Dt!==0&&G-Dt<K.storage&&(D+=G-Dt),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=D,D+=K.storage}}}const k=D%G;return k>0&&(D+=G-k),I.__size=D,I.__cache={},this}function A(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function S(I){const O=I.target;O.removeEventListener("dispose",S);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class sR{constructor(t={}){const{canvas:i=PM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=pi;let k=0,U=0,V=null,C=-1,R=null;const L=new sn,B=new sn;let j=null;const st=new we(0);let mt=0,P=i.width,K=i.height,q=1,At=null,Dt=null;const z=new sn(0,0,P,K),rt=new sn(0,0,P,K);let Et=!1;const Q=new sp;let vt=!1,Pt=!1;const Rt=new Je,tt=new Je,ot=new nt,Lt=new sn,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Ft(){return V===null?q:1}let F=s;function ie(w,J){return i.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zd}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",dt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const J="webgl2";if(F=ie(J,w),F===null)throw ie(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $t,ye,Mt,Wt,Ct,Ht,ce,N,E,et,ut,_t,pt,te,Bt,Zt,yt,gt,wt,jt,kt,Gt,le,X;function Vt(){$t=new m1(F),$t.init(),Gt=new QA(F,$t),ye=new l1(F,$t,t,Gt),Mt=new ZA(F,$t),ye.reverseDepthBuffer&&x&&Mt.buffers.depth.setReversed(!0),Wt=new v1(F),Ct=new IA,Ht=new KA(F,$t,Mt,Ct,ye,Gt,Wt),ce=new u1(D),N=new p1(D),E=new TE(F),le=new r1(F,E),et=new g1(F,E,Wt,le),ut=new y1(F,et,E,Wt),wt=new x1(F,ye,Ht),Zt=new c1(Ct),_t=new PA(D,ce,N,$t,ye,le,Zt),pt=new iR(D,Ct),te=new FA,Bt=new XA($t),gt=new s1(D,ce,N,Mt,ut,M,m),yt=new YA(D,ut,ye),X=new aR(F,Wt,ye,Mt),jt=new o1(F,$t,Wt),kt=new _1(F,$t,Wt),Wt.programs=_t.programs,D.capabilities=ye,D.extensions=$t,D.properties=Ct,D.renderLists=te,D.shadowMap=yt,D.state=Mt,D.info=Wt}Vt();const Nt=new eR(D,F);this.xr=Nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(P,K,!1))},this.getSize=function(w){return w.set(P,K)},this.setSize=function(w,J,ct=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,K=J,i.width=Math.floor(w*q),i.height=Math.floor(J*q),ct===!0&&(i.style.width=w+"px",i.style.height=J+"px"),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(P*q,K*q).floor()},this.setDrawingBufferSize=function(w,J,ct){P=w,K=J,q=ct,i.width=Math.floor(w*ct),i.height=Math.floor(J*ct),this.setViewport(0,0,w,J)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,J,ct,ft){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,J,ct,ft),Mt.viewport(L.copy(z).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(rt)},this.setScissor=function(w,J,ct,ft){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,J,ct,ft),Mt.scissor(B.copy(rt).multiplyScalar(q).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){Mt.setScissorTest(Et=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){Dt=w},this.getClearColor=function(w){return w.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,ct=!0){let ft=0;if(w){let Y=!1;if(V!==null){const It=V.texture.format;Y=It===ep||It===tp||It===$d}if(Y){const It=V.texture.type,Yt=It===Vi||It===Os||It===Ko||It===Qo||It===Qd||It===Jd,Jt=gt.getClearColor(),Kt=gt.getClearAlpha(),fe=Jt.r,he=Jt.g,ae=Jt.b;Yt?(T[0]=fe,T[1]=he,T[2]=ae,T[3]=Kt,F.clearBufferuiv(F.COLOR,0,T)):(A[0]=fe,A[1]=he,A[2]=ae,A[3]=Kt,F.clearBufferiv(F.COLOR,0,A))}else ft|=F.COLOR_BUFFER_BIT}J&&(ft|=F.DEPTH_BUFFER_BIT),ct&&(ft|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",dt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),gt.dispose(),te.dispose(),Bt.dispose(),Ct.dispose(),ce.dispose(),N.dispose(),ut.dispose(),le.dispose(),X.dispose(),_t.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Xr),Nt.removeEventListener("sessionend",Wr),Ni.stop()};function Ut(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const w=Wt.autoReset,J=yt.enabled,ct=yt.autoUpdate,ft=yt.needsUpdate,Y=yt.type;Vt(),Wt.autoReset=w,yt.enabled=J,yt.autoUpdate=ct,yt.needsUpdate=ft,yt.type=Y}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qt(w){const J=w.target;J.removeEventListener("dispose",Qt),de(J)}function de(w){He(w),Ct.remove(w)}function He(w){const J=Ct.get(w).programs;J!==void 0&&(J.forEach(function(ct){_t.releaseProgram(ct)}),w.isShaderMaterial&&_t.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,ct,ft,Y,It){J===null&&(J=zt);const Yt=Y.isMesh&&Y.matrixWorld.determinant()<0,Jt=Yr(w,J,ct,ft,Y);Mt.setMaterial(ft,Yt);let Kt=ct.index,fe=1;if(ft.wireframe===!0){if(Kt=et.getWireframeAttribute(ct),Kt===void 0)return;fe=2}const he=ct.drawRange,ae=ct.attributes.position;let Me=he.start*fe,De=(he.start+he.count)*fe;It!==null&&(Me=Math.max(Me,It.start*fe),De=Math.min(De,(It.start+It.count)*fe)),Kt!==null?(Me=Math.max(Me,0),De=Math.min(De,Kt.count)):ae!=null&&(Me=Math.max(Me,0),De=Math.min(De,ae.count));const Ge=De-Me;if(Ge<0||Ge===1/0)return;le.setup(Y,ft,Jt,ct,Kt);let Ne,pe=jt;if(Kt!==null&&(Ne=E.get(Kt),pe=kt,pe.setIndex(Ne)),Y.isMesh)ft.wireframe===!0?(Mt.setLineWidth(ft.wireframeLinewidth*Ft()),pe.setMode(F.LINES)):pe.setMode(F.TRIANGLES);else if(Y.isLine){let re=ft.linewidth;re===void 0&&(re=1),Mt.setLineWidth(re*Ft()),Y.isLineSegments?pe.setMode(F.LINES):Y.isLineLoop?pe.setMode(F.LINE_LOOP):pe.setMode(F.LINE_STRIP)}else Y.isPoints?pe.setMode(F.POINTS):Y.isSprite&&pe.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))pe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const re=Y._multiDrawStarts,dn=Y._multiDrawCounts,Le=Y._multiDrawCount,Fn=Kt?E.get(Kt).bytesPerElement:1,Si=Ct.get(ft).currentProgram.getUniforms();for(let On=0;On<Le;On++)Si.setValue(F,"_gl_DrawID",On),pe.render(re[On]/Fn,dn[On])}else if(Y.isInstancedMesh)pe.renderInstances(Me,Ge,Y.count);else if(ct.isInstancedBufferGeometry){const re=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,dn=Math.min(ct.instanceCount,re);pe.renderInstances(Me,Ge,dn)}else pe.render(Me,Ge)};function Ue(w,J,ct){w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,tn(w,J,ct),w.side=ts,w.needsUpdate=!0,tn(w,J,ct),w.side=Bi):tn(w,J,ct)}this.compile=function(w,J,ct=null){ct===null&&(ct=w),_=Bt.get(ct),_.init(J),O.push(_),ct.traverseVisible(function(Y){Y.isLight&&Y.layers.test(J.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),w!==ct&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(J.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const ft=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const It=Y.material;if(It)if(Array.isArray(It))for(let Yt=0;Yt<It.length;Yt++){const Jt=It[Yt];Ue(Jt,ct,Y),ft.add(Jt)}else Ue(It,ct,Y),ft.add(It)}),_=O.pop(),ft},this.compileAsync=function(w,J,ct=null){const ft=this.compile(w,J,ct);return new Promise(Y=>{function It(){if(ft.forEach(function(Yt){Ct.get(Yt).currentProgram.isReady()&&ft.delete(Yt)}),ft.size===0){Y(w);return}setTimeout(It,10)}$t.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Sn=null;function xi(w){Sn&&Sn(w)}function Xr(){Ni.stop()}function Wr(){Ni.start()}const Ni=new Xv;Ni.setAnimationLoop(xi),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){Sn=w,Nt.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},Nt.addEventListener("sessionstart",Xr),Nt.addEventListener("sessionend",Wr),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(J),J=Nt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,J,V),_=Bt.get(w,O.length),_.init(J),O.push(_),tt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(tt),Pt=this.localClippingEnabled,vt=Zt.init(this.clippingPlanes,Pt),S=te.get(w,I.length),S.init(),I.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){const It=D.xr.getDepthSensingMesh();It!==null&&ns(It,J,-1/0,D.sortObjects)}ns(w,J,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(At,Dt),Ot=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Ot&&gt.addToRenderList(S,w),this.info.render.frame++,vt===!0&&Zt.beginShadows();const ct=_.state.shadowsArray;yt.render(ct,w,J),vt===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=S.opaque,Y=S.transmissive;if(_.setupLights(),J.isArrayCamera){const It=J.cameras;if(Y.length>0)for(let Yt=0,Jt=It.length;Yt<Jt;Yt++){const Kt=It[Yt];jr(ft,Y,w,Kt)}Ot&&gt.render(w);for(let Yt=0,Jt=It.length;Yt<Jt;Yt++){const Kt=It[Yt];Fs(S,w,Kt,Kt.viewport)}}else Y.length>0&&jr(ft,Y,w,J),Ot&&gt.render(w),Fs(S,w,J);V!==null&&U===0&&(Ht.updateMultisampleRenderTarget(V),Ht.updateRenderTargetMipmap(V)),w.isScene===!0&&w.onAfterRender(D,w,J),le.resetDefaultState(),C=-1,R=null,O.pop(),O.length>0?(_=O[O.length-1],vt===!0&&Zt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function ns(w,J,ct,ft){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)ct=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){ft&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tt);const Yt=ut.update(w),Jt=w.material;Jt.visible&&S.push(w,Yt,Jt,ct,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Yt=ut.update(w),Jt=w.material;if(ft&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Lt.copy(Yt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(tt)),Array.isArray(Jt)){const Kt=Yt.groups;for(let fe=0,he=Kt.length;fe<he;fe++){const ae=Kt[fe],Me=Jt[ae.materialIndex];Me&&Me.visible&&S.push(w,Yt,Me,ct,Lt.z,ae)}}else Jt.visible&&S.push(w,Yt,Jt,ct,Lt.z,null)}}const It=w.children;for(let Yt=0,Jt=It.length;Yt<Jt;Yt++)ns(It[Yt],J,ct,ft)}function Fs(w,J,ct,ft){const Y=w.opaque,It=w.transmissive,Yt=w.transparent;_.setupLightsView(ct),vt===!0&&Zt.setGlobalState(D.clippingPlanes,ct),ft&&Mt.viewport(L.copy(ft)),Y.length>0&&is(Y,J,ct),It.length>0&&is(It,J,ct),Yt.length>0&&is(Yt,J,ct),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function jr(w,J,ct,ft){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ft.id]===void 0&&(_.state.transmissionRenderTarget[ft.id]=new Is(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?tl:Vi,minFilter:Ns,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const It=_.state.transmissionRenderTarget[ft.id],Yt=ft.viewport||L;It.setSize(Yt.z*D.transmissionResolutionScale,Yt.w*D.transmissionResolutionScale);const Jt=D.getRenderTarget();D.setRenderTarget(It),D.getClearColor(st),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),Ot&&gt.render(ct);const Kt=D.toneMapping;D.toneMapping=$a;const fe=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),_.setupLightsView(ft),vt===!0&&Zt.setGlobalState(D.clippingPlanes,ft),is(w,ct,ft),Ht.updateMultisampleRenderTarget(It),Ht.updateRenderTargetMipmap(It),$t.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let ae=0,Me=J.length;ae<Me;ae++){const De=J[ae],Ge=De.object,Ne=De.geometry,pe=De.material,re=De.group;if(pe.side===Bi&&Ge.layers.test(ft.layers)){const dn=pe.side;pe.side=qn,pe.needsUpdate=!0,yi(Ge,ct,ft,Ne,pe,re),pe.side=dn,pe.needsUpdate=!0,he=!0}}he===!0&&(Ht.updateMultisampleRenderTarget(It),Ht.updateRenderTargetMipmap(It))}D.setRenderTarget(Jt),D.setClearColor(st,mt),fe!==void 0&&(ft.viewport=fe),D.toneMapping=Kt}function is(w,J,ct){const ft=J.isScene===!0?J.overrideMaterial:null;for(let Y=0,It=w.length;Y<It;Y++){const Yt=w[Y],Jt=Yt.object,Kt=Yt.geometry,fe=Yt.group;let he=Yt.material;he.allowOverride===!0&&ft!==null&&(he=ft),Jt.layers.test(ct.layers)&&yi(Jt,J,ct,Kt,he,fe)}}function yi(w,J,ct,ft,Y,It){w.onBeforeRender(D,J,ct,ft,Y,It),w.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(D,J,ct,ft,w,It),Y.transparent===!0&&Y.side===Bi&&Y.forceSinglePass===!1?(Y.side=qn,Y.needsUpdate=!0,D.renderBufferDirect(ct,J,ft,Y,w,It),Y.side=ts,Y.needsUpdate=!0,D.renderBufferDirect(ct,J,ft,Y,w,It),Y.side=Bi):D.renderBufferDirect(ct,J,ft,Y,w,It),w.onAfterRender(D,J,ct,ft,Y,It)}function tn(w,J,ct){J.isScene!==!0&&(J=zt);const ft=Ct.get(w),Y=_.state.lights,It=_.state.shadowsArray,Yt=Y.state.version,Jt=_t.getParameters(w,Y.state,It,J,ct),Kt=_t.getProgramCacheKey(Jt);let fe=ft.programs;ft.environment=w.isMeshStandardMaterial?J.environment:null,ft.fog=J.fog,ft.envMap=(w.isMeshStandardMaterial?N:ce).get(w.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,fe===void 0&&(w.addEventListener("dispose",Qt),fe=new Map,ft.programs=fe);let he=fe.get(Kt);if(he!==void 0){if(ft.currentProgram===he&&ft.lightsStateVersion===Yt)return Wi(w,Jt),he}else Jt.uniforms=_t.getUniforms(w),w.onBeforeCompile(Jt,D),he=_t.acquireProgram(Jt,Kt),fe.set(Kt,he),ft.uniforms=Jt.uniforms;const ae=ft.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ae.clippingPlanes=Zt.uniform),Wi(w,Jt),ft.needsLights=pu(w),ft.lightsStateVersion=Yt,ft.needsLights&&(ae.ambientLightColor.value=Y.state.ambient,ae.lightProbe.value=Y.state.probe,ae.directionalLights.value=Y.state.directional,ae.directionalLightShadows.value=Y.state.directionalShadow,ae.spotLights.value=Y.state.spot,ae.spotLightShadows.value=Y.state.spotShadow,ae.rectAreaLights.value=Y.state.rectArea,ae.ltc_1.value=Y.state.rectAreaLTC1,ae.ltc_2.value=Y.state.rectAreaLTC2,ae.pointLights.value=Y.state.point,ae.pointLightShadows.value=Y.state.pointShadow,ae.hemisphereLights.value=Y.state.hemi,ae.directionalShadowMap.value=Y.state.directionalShadowMap,ae.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ae.spotShadowMap.value=Y.state.spotShadowMap,ae.spotLightMatrix.value=Y.state.spotLightMatrix,ae.spotLightMap.value=Y.state.spotLightMap,ae.pointShadowMap.value=Y.state.pointShadowMap,ae.pointShadowMatrix.value=Y.state.pointShadowMatrix),ft.currentProgram=he,ft.uniformsList=null,he}function Mn(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=iu.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function Wi(w,J){const ct=Ct.get(w);ct.outputColorSpace=J.outputColorSpace,ct.batching=J.batching,ct.batchingColor=J.batchingColor,ct.instancing=J.instancing,ct.instancingColor=J.instancingColor,ct.instancingMorph=J.instancingMorph,ct.skinning=J.skinning,ct.morphTargets=J.morphTargets,ct.morphNormals=J.morphNormals,ct.morphColors=J.morphColors,ct.morphTargetsCount=J.morphTargetsCount,ct.numClippingPlanes=J.numClippingPlanes,ct.numIntersection=J.numClipIntersection,ct.vertexAlphas=J.vertexAlphas,ct.vertexTangents=J.vertexTangents,ct.toneMapping=J.toneMapping}function Yr(w,J,ct,ft,Y){J.isScene!==!0&&(J=zt),Ht.resetTextureUnits();const It=J.fog,Yt=ft.isMeshStandardMaterial?J.environment:null,Jt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Hr,Kt=(ft.isMeshStandardMaterial?N:ce).get(ft.envMap||Yt),fe=ft.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,he=!!ct.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ae=!!ct.morphAttributes.position,Me=!!ct.morphAttributes.normal,De=!!ct.morphAttributes.color;let Ge=$a;ft.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Ne=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,pe=Ne!==void 0?Ne.length:0,re=Ct.get(ft),dn=_.state.lights;if(vt===!0&&(Pt===!0||w!==R)){const en=w===R&&ft.id===C;Zt.setState(ft,w,en)}let Le=!1;ft.version===re.__version?(re.needsLights&&re.lightsStateVersion!==dn.state.version||re.outputColorSpace!==Jt||Y.isBatchedMesh&&re.batching===!1||!Y.isBatchedMesh&&re.batching===!0||Y.isBatchedMesh&&re.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&re.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&re.instancing===!1||!Y.isInstancedMesh&&re.instancing===!0||Y.isSkinnedMesh&&re.skinning===!1||!Y.isSkinnedMesh&&re.skinning===!0||Y.isInstancedMesh&&re.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&re.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&re.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&re.instancingMorph===!1&&Y.morphTexture!==null||re.envMap!==Kt||ft.fog===!0&&re.fog!==It||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Zt.numPlanes||re.numIntersection!==Zt.numIntersection)||re.vertexAlphas!==fe||re.vertexTangents!==he||re.morphTargets!==ae||re.morphNormals!==Me||re.morphColors!==De||re.toneMapping!==Ge||re.morphTargetsCount!==pe)&&(Le=!0):(Le=!0,re.__version=ft.version);let Fn=re.currentProgram;Le===!0&&(Fn=tn(ft,J,Y));let Si=!1,On=!1,vn=!1;const Ve=Fn.getUniforms(),Pn=re.uniforms;if(Mt.useProgram(Fn.program)&&(Si=!0,On=!0,vn=!0),ft.id!==C&&(C=ft.id,On=!0),Si||R!==w){Mt.buffers.depth.getReversed()?(Rt.copy(w.projectionMatrix),zM(Rt),FM(Rt),Ve.setValue(F,"projectionMatrix",Rt)):Ve.setValue(F,"projectionMatrix",w.projectionMatrix),Ve.setValue(F,"viewMatrix",w.matrixWorldInverse);const En=Ve.map.cameraPosition;En!==void 0&&En.setValue(F,ot.setFromMatrixPosition(w.matrixWorld)),ye.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,On=!0,vn=!0)}if(Y.isSkinnedMesh){Ve.setOptional(F,Y,"bindMatrix"),Ve.setOptional(F,Y,"bindMatrixInverse");const en=Y.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ve.setValue(F,"boneTexture",en.boneTexture,Ht))}Y.isBatchedMesh&&(Ve.setOptional(F,Y,"batchingTexture"),Ve.setValue(F,"batchingTexture",Y._matricesTexture,Ht),Ve.setOptional(F,Y,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",Y._indirectTexture,Ht),Ve.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",Y._colorsTexture,Ht));const Dn=ct.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&wt.update(Y,ct,Fn),(On||re.receiveShadow!==Y.receiveShadow)&&(re.receiveShadow=Y.receiveShadow,Ve.setValue(F,"receiveShadow",Y.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Pn.envMap.value=Kt,Pn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&J.environment!==null&&(Pn.envMapIntensity.value=J.environmentIntensity),On&&(Ve.setValue(F,"toneMappingExposure",D.toneMappingExposure),re.needsLights&&du(Pn,vn),It&&ft.fog===!0&&pt.refreshFogUniforms(Pn,It),pt.refreshMaterialUniforms(Pn,ft,q,K,_.state.transmissionRenderTarget[w.id]),iu.upload(F,Mn(re),Pn,Ht)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(iu.upload(F,Mn(re),Pn,Ht),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ve.setValue(F,"center",Y.center),Ve.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ve.setValue(F,"normalMatrix",Y.normalMatrix),Ve.setValue(F,"modelMatrix",Y.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const en=ft.uniformsGroups;for(let En=0,Bs=en.length;En<Bs;En++){const Bn=en[En];X.update(Bn,Fn),X.bind(Bn,Fn)}}return Fn}function du(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function pu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,J,ct){const ft=Ct.get(w);ft.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Ct.get(w.texture).__webglTexture=J,Ct.get(w.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ct,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const ct=Ct.get(w);ct.__webglFramebuffer=J,ct.__useDefaultFramebuffer=J===void 0};const al=F.createFramebuffer();this.setRenderTarget=function(w,J=0,ct=0){V=w,k=J,U=ct;let ft=!0,Y=null,It=!1,Yt=!1;if(w){const Kt=Ct.get(w);if(Kt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(F.FRAMEBUFFER,null),ft=!1;else if(Kt.__webglFramebuffer===void 0)Ht.setupRenderTarget(w);else if(Kt.__hasExternalTextures)Ht.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ae=w.depthTexture;if(Kt.__boundDepthTexture!==ae){if(ae!==null&&Ct.has(ae)&&(w.width!==ae.image.width||w.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(w)}}const fe=w.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Yt=!0);const he=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(he[J])?Y=he[J][ct]:Y=he[J],It=!0):w.samples>0&&Ht.useMultisampledRTT(w)===!1?Y=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(he)?Y=he[ct]:Y=he,L.copy(w.viewport),B.copy(w.scissor),j=w.scissorTest}else L.copy(z).multiplyScalar(q).floor(),B.copy(rt).multiplyScalar(q).floor(),j=Et;if(ct!==0&&(Y=al),Mt.bindFramebuffer(F.FRAMEBUFFER,Y)&&ft&&Mt.drawBuffers(w,Y),Mt.viewport(L),Mt.scissor(B),Mt.setScissorTest(j),It){const Kt=Ct.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+J,Kt.__webglTexture,ct)}else if(Yt){const Kt=Ct.get(w.texture),fe=J;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,ct,fe)}else if(w!==null&&ct!==0){const Kt=Ct.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,ct)}C=-1},this.readRenderTargetPixels=function(w,J,ct,ft,Y,It,Yt,Jt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt){Mt.bindFramebuffer(F.FRAMEBUFFER,Kt);try{const fe=w.textures[Jt],he=fe.format,ae=fe.type;if(!ye.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-ft&&ct>=0&&ct<=w.height-Y&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Jt),F.readPixels(J,ct,ft,Y,Gt.convert(he),Gt.convert(ae),It))}finally{const fe=V!==null?Ct.get(V).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(w,J,ct,ft,Y,It,Yt,Jt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt)if(J>=0&&J<=w.width-ft&&ct>=0&&ct<=w.height-Y){Mt.bindFramebuffer(F.FRAMEBUFFER,Kt);const fe=w.textures[Jt],he=fe.format,ae=fe.type;if(!ye.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.bufferData(F.PIXEL_PACK_BUFFER,It.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Jt),F.readPixels(J,ct,ft,Y,Gt.convert(he),Gt.convert(ae),0);const De=V!==null?Ct.get(V).__webglFramebuffer:null;Mt.bindFramebuffer(F.FRAMEBUFFER,De);const Ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await IM(F,Ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,It),F.deleteBuffer(Me),F.deleteSync(Ge),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,ct=0){const ft=Math.pow(2,-ct),Y=Math.floor(w.image.width*ft),It=Math.floor(w.image.height*ft),Yt=J!==null?J.x:0,Jt=J!==null?J.y:0;Ht.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ct,0,0,Yt,Jt,Y,It),Mt.unbindTexture()};const as=F.createFramebuffer(),qr=F.createFramebuffer();this.copyTextureToTexture=function(w,J,ct=null,ft=null,Y=0,It=null){It===null&&(Y!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=Y,Y=0):It=0);let Yt,Jt,Kt,fe,he,ae,Me,De,Ge;const Ne=w.isCompressedTexture?w.mipmaps[It]:w.image;if(ct!==null)Yt=ct.max.x-ct.min.x,Jt=ct.max.y-ct.min.y,Kt=ct.isBox3?ct.max.z-ct.min.z:1,fe=ct.min.x,he=ct.min.y,ae=ct.isBox3?ct.min.z:0;else{const Dn=Math.pow(2,-Y);Yt=Math.floor(Ne.width*Dn),Jt=Math.floor(Ne.height*Dn),w.isDataArrayTexture?Kt=Ne.depth:w.isData3DTexture?Kt=Math.floor(Ne.depth*Dn):Kt=1,fe=0,he=0,ae=0}ft!==null?(Me=ft.x,De=ft.y,Ge=ft.z):(Me=0,De=0,Ge=0);const pe=Gt.convert(J.format),re=Gt.convert(J.type);let dn;J.isData3DTexture?(Ht.setTexture3D(J,0),dn=F.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Ht.setTexture2DArray(J,0),dn=F.TEXTURE_2D_ARRAY):(Ht.setTexture2D(J,0),dn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment);const Le=F.getParameter(F.UNPACK_ROW_LENGTH),Fn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Si=F.getParameter(F.UNPACK_SKIP_PIXELS),On=F.getParameter(F.UNPACK_SKIP_ROWS),vn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,he),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ae);const Ve=w.isDataArrayTexture||w.isData3DTexture,Pn=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const Dn=Ct.get(w),en=Ct.get(J),En=Ct.get(Dn.__renderTarget),Bs=Ct.get(en.__renderTarget);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,En.__webglFramebuffer),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let Bn=0;Bn<Kt;Bn++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(w).__webglTexture,Y,ae+Bn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(J).__webglTexture,It,Ge+Bn)),F.blitFramebuffer(fe,he,Yt,Jt,Me,De,Yt,Jt,F.DEPTH_BUFFER_BIT,F.NEAREST);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Ct.has(w)){const Dn=Ct.get(w),en=Ct.get(J);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,as),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,qr);for(let En=0;En<Kt;En++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,Y,ae+En):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,Y),Pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,It,Ge+En):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,It),Y!==0?F.blitFramebuffer(fe,he,Yt,Jt,Me,De,Yt,Jt,F.COLOR_BUFFER_BIT,F.NEAREST):Pn?F.copyTexSubImage3D(dn,It,Me,De,Ge+En,fe,he,Yt,Jt):F.copyTexSubImage2D(dn,It,Me,De,fe,he,Yt,Jt);Mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(dn,It,Me,De,Ge,Yt,Jt,Kt,pe,re,Ne.data):J.isCompressedArrayTexture?F.compressedTexSubImage3D(dn,It,Me,De,Ge,Yt,Jt,Kt,pe,Ne.data):F.texSubImage3D(dn,It,Me,De,Ge,Yt,Jt,Kt,pe,re,Ne):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,It,Me,De,Yt,Jt,pe,re,Ne.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,It,Me,De,Ne.width,Ne.height,pe,Ne.data):F.texSubImage2D(F.TEXTURE_2D,It,Me,De,Yt,Jt,pe,re,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Si),F.pixelStorei(F.UNPACK_SKIP_ROWS,On),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vn),It===0&&J.generateMipmaps&&F.generateMipmap(dn),Mt.unbindTexture()},this.copyTextureToTexture3D=function(w,J,ct=null,ft=null,Y=0){return Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,J,ct,ft,Y)},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&Ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ht.setTextureCube(w,0):w.isData3DTexture?Ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ht.setTexture2DArray(w,0):Ht.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){k=0,U=0,V=null,Mt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const dv={type:"change"},lp={type:"start"},Zv={type:"end"},Kc=new fu,pv=new Ka,rR=Math.cos(70*OM.DEG2RAD),mn=new nt,Yn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class oR extends ME{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Ps,this._lastTargetPosition=new nt,this._quat=new Ps().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new G_,this._sphericalDelta=new G_,this._scale=1,this._panOffset=new nt,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new nt,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cR.bind(this),this._onPointerDown=lR.bind(this),this._onPointerUp=uR.bind(this),this._onContextMenu=_R.bind(this),this._onMouseWheel=dR.bind(this),this._onKeyDown=pR.bind(this),this._onTouchStart=mR.bind(this),this._onTouchMove=gR.bind(this),this._onMouseDown=fR.bind(this),this._onMouseMove=hR.bind(this),this._interceptControlDown=vR.bind(this),this._interceptControlUp=xR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dv),this.update(),this.state=Ye.NONE}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=mn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Kc.origin.copy(this.object.position),Kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kc.direction))<rR?this.object.lookAt(this.target):(pv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kc.intersectPlane(pv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(dv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new _e,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function lR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function cR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zv),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function fR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Nr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Nr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(lp)}function hR(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function dR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(lp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Zv))}function pR(r){this.enabled!==!1&&this._handleKeyDown(r)}function mR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(lp)}function gR(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function _R(r){this.enabled!==!1&&r.preventDefault()}function vR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yR=Xt.forwardRef(({gridSize:r,cellSize:t,buildings:i,selectedBuildingType:s,onPlaceBuilding:l,onDemolishBuilding:c,onSelectBuildingForInfo:h,selectedBuildingForInfo:d,getBuildingCurrentProps:m},p)=>{const g=Xt.useRef(null),v=Xt.useRef(null),x=Xt.useRef(null),M=Xt.useRef(null),T=Xt.useRef(null),A=Xt.useRef({}),S=Xt.useRef(null),_=Xt.useRef(new yE),I=Xt.useRef(new _e),O=Xt.useRef(null),D=Xt.useRef(null),G=r*t;Xt.useImperativeHandle(p,()=>({getCameraState:()=>x.current&&T.current?{position:x.current.position.toArray(),target:T.current.target.toArray()}:null,setCameraState:U=>{x.current&&T.current&&U&&(x.current.position.fromArray(U.position),T.current.target.fromArray(U.target),T.current.update())}})),Xt.useEffect(()=>{if(!g.current)return;const U=new cE;U.background=new we(3359061),v.current=U;const V=new mi(75,g.current.clientWidth/g.current.clientHeight,.1,2e3);V.position.set(G*.5,G*.75,G*.75),V.lookAt(G/2-t/2,0,G/2-t/2),x.current=V;const C=new sR({antialias:!0});C.setSize(g.current.clientWidth,g.current.clientHeight),C.shadowMap.enabled=!0,g.current.appendChild(C.domElement),M.current=C;const R=new oR(V,C.domElement);R.target.set(G/2-t/2,0,G/2-t/2),R.enableDamping=!0,R.minDistance=t*2,R.maxDistance=G*2.5,R.maxPolarAngle=Math.PI/2.1,T.current=R;const L=new il(G,G),B=new I_({color:4674921,side:Bi}),j=new _i(L,B);j.rotation.x=-Math.PI/2,j.position.set(G/2-t/2,0,G/2-t/2),j.receiveShadow=!0,U.add(j),S.current=j;const st=new SE(G,r,16777215,16777215);st.material.opacity=.15,st.material.transparent=!0,st.position.set(G/2-t/2,.01,G/2-t/2),U.add(st);const mt=new vE(16777215,.7);U.add(mt);const P=new _E(16777215,1.5);P.position.set(G*.8,G*1.2,G*.6),P.castShadow=!0,P.shadow.mapSize.width=2048,P.shadow.mapSize.height=2048,P.shadow.camera.near=.5,P.shadow.camera.far=G*3;const K=G*1.2;P.shadow.camera.left=-K,P.shadow.camera.right=K,P.shadow.camera.top=K,P.shadow.camera.bottom=-K,U.add(P);const q=new Di(t*.95,1,t*.95),At=new ap({color:16777215,transparent:!0,opacity:.5}),Dt=new _i(q,At);Dt.visible=!1,U.add(Dt),O.current=Dt;const z=new P_(new Di(t*.9,1,t*.9)),rt=new rp({color:16776960,linewidth:2});D.current=new Hv(z,rt),D.current.visible=!1,U.add(D.current);const Et=()=>{requestAnimationFrame(Et),R.update(),C.render(U,V)};Et();const Q=()=>{g.current&&x.current&&M.current&&(x.current.aspect=g.current.clientWidth/g.current.clientHeight,x.current.updateProjectionMatrix(),M.current.setSize(g.current.clientWidth,g.current.clientHeight))};return window.addEventListener("resize",Q),()=>{var vt,Pt,Rt,tt,ot,Lt;window.removeEventListener("resize",Q),g.current&&M.current&&g.current.removeChild(M.current.domElement),(vt=M.current)==null||vt.dispose(),(Pt=T.current)==null||Pt.dispose(),Object.values(A.current).forEach(zt=>{zt.geometry.dispose(),Array.isArray(zt.material)?zt.material.forEach(Ot=>Ot.dispose()):zt.material.dispose()}),(Rt=D.current)==null||Rt.geometry.dispose(),(ot=(tt=D.current)==null?void 0:tt.material)==null||ot.dispose(),(Lt=v.current)==null||Lt.clear(),A.current={}}},[G,r,t]),Xt.useEffect(()=>{if(!v.current)return;const U=v.current,V=new Set(i.map(C=>C.id));Object.keys(A.current).forEach(C=>{if(!V.has(C)){const R=A.current[C];U.remove(R),R.geometry.dispose(),R.material.dispose(),delete A.current[C]}}),i.forEach(C=>{const R=m(C),L=A.current[C.id];if(L){L.scale.y*L.geometry.parameters.height!==R.height&&(L.geometry.dispose(),L.geometry=new Di(t*.9,R.height,t*.9),L.position.setY(R.height/2));const B=L.material,j=C.isOnFire?n_:R.color,st=C.isOnFire?i_:0,mt=C.isOnFire?a_:0;B.color.getHex()!==j&&B.color.setHex(j),B.emissive.getHex()!==st&&B.emissive.setHex(st),B.emissiveIntensity!==mt&&(B.emissiveIntensity=mt),L.userData={buildingData:C}}else{const B=new Di(t*.9,R.height,t*.9),j=new I_({color:C.isOnFire?n_:R.color,emissive:C.isOnFire?i_:0,emissiveIntensity:C.isOnFire?a_:0}),st=new _i(B,j);st.position.set(C.gridX*t,R.height/2,C.gridZ*t),st.castShadow=!0,st.receiveShadow=!0,st.userData={buildingData:C},U.add(st),A.current[C.id]=st}})},[i,t,m]),Xt.useEffect(()=>{if(D.current)if(d&&A.current[d.id]){const U=A.current[d.id],V=m(d);D.current.geometry.dispose(),D.current.geometry=new P_(new Di(t*.92,V.height+.2,t*.92)),D.current.position.copy(U.position),D.current.visible=!0}else D.current.visible=!1},[d,i,t,m]);const k=Xt.useCallback(U=>{const V=Math.floor((U.x+t/2)/t),C=Math.floor((U.z+t/2)/t);return V>=0&&V<r&&C>=0&&C<r?{x:V,z:C}:null},[r,t]);return Xt.useEffect(()=>{const U=C=>{if(!g.current||!x.current||!S.current||!O.current)return;const R=g.current.getBoundingClientRect();I.current.x=(C.clientX-R.left)/R.width*2-1,I.current.y=-((C.clientY-R.top)/R.height)*2+1,_.current.setFromCamera(I.current,x.current);const L=_.current.intersectObject(S.current);if(L.length>0){const B=L[0].point,j=k(B);if(j&&s&&s!==oe.NONE){const st=Cn[s];O.current.geometry.dispose(),O.current.geometry=new Di(t*.9,st.height,t*.9),O.current.material.color.setHex(st.color),O.current.position.set(j.x*t,st.height/2,j.z*t),O.current.visible=!0}else O.current.visible=!1}else O.current.visible=!1},V=g.current;return V==null||V.addEventListener("mousemove",U),()=>V==null?void 0:V.removeEventListener("mousemove",U)},[s,t,k,G,r]),Xt.useEffect(()=>{const U=R=>{if(!g.current||!x.current||!S.current||R.button!==0)return;const L=g.current.getBoundingClientRect();I.current.x=(R.clientX-L.left)/L.width*2-1,I.current.y=-((R.clientY-L.top)/L.height)*2+1,_.current.setFromCamera(I.current,x.current);const B=Object.values(A.current),j=_.current.intersectObjects(B);if(j.length>0){const st=j[0].object.userData.buildingData;st&&h(st)}else{const st=_.current.intersectObject(S.current);if(st.length>0){const mt=st[0].point,P=k(mt);P&&(s&&s!==oe.NONE?l(P.x,P.z):h(null))}}},V=R=>{if(R.preventDefault(),!g.current||!x.current||!S.current)return;const L=g.current.getBoundingClientRect();I.current.x=(R.clientX-L.left)/L.width*2-1,I.current.y=-((R.clientY-L.top)/L.height)*2+1,_.current.setFromCamera(I.current,x.current);const B=Object.values(A.current),j=_.current.intersectObjects(B);if(j.length>0){const st=j[0].object.userData.buildingData;st&&c(st.gridX,st.gridZ)}},C=g.current;return C==null||C.addEventListener("click",U),C==null||C.addEventListener("contextmenu",V),()=>{C==null||C.removeEventListener("click",U),C==null||C.removeEventListener("contextmenu",V)}},[l,c,k,s,h]),Z.jsx("div",{ref:g,className:"w-full h-full cursor-pointer"})}),SR=({onSelectBuilding:r,selectedBuildingType:t,buildingProperties:i,nonSelectableBuildingTypes:s})=>{const l=Object.keys(i).map(_=>_).filter(_=>!s.includes(_)),c=Xt.useRef(null),[h,d]=Xt.useState(!1),[m,p]=Xt.useState(null),g=Xt.useRef(null),v=Xt.useRef({width:null,height:null}),x=Xt.useCallback(_=>{if(_.button===0&&!_.target.closest("button")&&(_.preventDefault(),c.current)){const I=c.current.getBoundingClientRect();let O=(m==null?void 0:m.top)??I.top,D=(m==null?void 0:m.left)??I.left;v.current.width===null&&(v.current.width=I.width),v.current.height===null&&(v.current.height=I.height),m||p({top:I.top,left:I.left}),g.current={startX:D,startY:O,mouseX:_.clientX,mouseY:_.clientY},d(!0)}},[m]),M=Xt.useCallback(_=>{if(!h||!g.current||!c.current)return;const I=_.clientX-g.current.mouseX,O=_.clientY-g.current.mouseY;let D=g.current.startY+O,G=g.current.startX+I;const k=v.current.width||c.current.offsetWidth,U=v.current.height||c.current.offsetHeight,V=window.innerWidth,C=window.innerHeight;D=Math.max(0,Math.min(D,C-U)),G=Math.max(0,Math.min(G,V-k)),p({top:D,left:G})},[h]),T=Xt.useCallback(()=>{d(!1),g.current=null},[]);Xt.useEffect(()=>(h?(window.addEventListener("mousemove",M),window.addEventListener("mouseup",T)):(window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",T)),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",T)}),[h,M,T]);const A=m?{position:"fixed",top:`${m.top}px`,left:`${m.left}px`,width:v.current.width?`${v.current.width}px`:"auto",zIndex:1e3}:{position:"relative",width:"100%"},S=`bg-gray-700 shadow-md select-none flex flex-col ${m?"":"overflow-x-hidden"}`;return Z.jsxs("div",{ref:c,className:S,style:A,children:[Z.jsx("div",{onMouseDown:x,className:`h-5 ${h?"bg-gray-500 cursor-grabbing":"bg-gray-600 hover:bg-gray-500 cursor-grab"} flex items-center justify-center flex-shrink-0`,"aria-label":"드래그하여 툴바 이동",title:"드래그하여 툴바 이동",children:Z.jsxs("svg",{width:"24",height:"6",viewBox:"0 0 24 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-gray-400",children:[Z.jsx("rect",{y:"0.5",width:"24",height:"1",fill:"currentColor"}),Z.jsx("rect",{y:"3.5",width:"24",height:"1",fill:"currentColor"})]})}),Z.jsxs("div",{className:"overflow-x-auto min-w-0",children:[" ",Z.jsxs("div",{className:"p-3 pt-2 flex flex-nowrap space-x-2 justify-start items-center pb-2",children:[" ",l.map(_=>{const I=i[_];if(!I||!I.icon)return null;const O=t===_;return Z.jsxs("button",{onClick:()=>r(_),title:`${I.name} - 비용: $${I.cost}${I.maintenanceCost>0?`, 유지비: $${I.maintenanceCost}/월`:""}`,className:`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-150 ease-in-out
                              w-24 h-24 text-xs flex-shrink-0 
                              ${O?"bg-blue-600 ring-2 ring-blue-300 scale-105":"bg-gray-600 hover:bg-gray-500"}
                              focus:outline-none focus:ring-2 focus:ring-blue-400`,children:[Z.jsx("span",{className:"text-2xl mb-1",children:I.icon}),Z.jsx("span",{className:"font-semibold truncate w-full px-1",children:I.name}),Z.jsxs("span",{className:"text-green-400",children:["$",I.cost.toLocaleString()]})]},_)}),Z.jsxs("button",{onClick:()=>r(oe.NONE),title:"건물 철거 (오른쪽 클릭)",className:`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-150 ease-in-out
                            w-24 h-24 text-xs flex-shrink-0
                            ${t===oe.NONE?"bg-red-600 ring-2 ring-red-300 scale-105":"bg-gray-600 hover:bg-gray-500"}
                            focus:outline-none focus:ring-2 focus:ring-red-400`,children:[Z.jsx("span",{className:"text-2xl mb-1",children:"💣"}),Z.jsx("span",{className:"font-semibold",children:"철거"}),Z.jsx("span",{className:"text-gray-400",children:"(우클릭)"})]},"demolish")]})]})]})},MR=({stats:r,isPaused:t,isDelegationActive:i,isAiThinking:s})=>{const c=r.powerCapacity-r.powerDemand>=0?"text-green-400":"text-red-400",d=r.waterCapacity-r.waterDemand>=0?"text-sky-400":"text-red-400",m=r.happiness>=70?"text-green-400":r.happiness>=40?"text-yellow-400":"text-red-400",p=r.educationLevel>=ws+20?"text-purple-400":r.educationLevel>=ws?"text-yellow-400":"text-orange-400";let g="text-green-400";r.pollutionLevel>=qo?g="text-red-400":r.pollutionLevel>=qo/2&&(g="text-yellow-400");let v="text-pink-400";return r.appeal>=75?v="text-emerald-400":r.appeal>=50?v="text-lime-400":r.appeal>=25?v="text-yellow-400":v="text-orange-500",Z.jsx("div",{className:"bg-gray-900 bg-opacity-80 p-3 shadow-lg absolute top-0 left-0 right-0 z-10 backdrop-blur-sm",children:Z.jsxs("div",{className:"container mx-auto flex flex-wrap justify-around items-center text-sm md:text-base",children:[Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsxs("span",{className:"text-gray-400 text-xs flex items-center",children:["🗓️ 월",t&&Z.jsx("span",{className:"text-yellow-400 ml-1",children:"(정지됨)"}),i&&!s&&Z.jsx("span",{className:"text-teal-400 ml-1",children:"(AI 활성)"}),i&&s&&Z.jsxs("span",{className:"text-teal-400 ml-1 flex items-center",children:["(AI ",Z.jsxs("svg",{className:"animate-spin h-3 w-3 text-teal-300 ml-0.5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Z.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Z.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),")"]})]}),Z.jsx("span",{className:"font-bold text-lg text-purple-400",children:r.month})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"💰 자금"}),Z.jsxs("span",{className:"font-bold text-lg text-green-400",children:["$",r.funds.toLocaleString()]})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"👨‍👩‍👧‍👦 인구"}),Z.jsx("span",{className:"font-bold text-lg text-blue-400",children:r.population.toLocaleString()})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"💃 관광객"}),Z.jsx("span",{className:"font-bold text-lg text-teal-400",children:r.tourists.toLocaleString()})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"🌟 매력도"}),Z.jsxs("span",{className:`font-bold text-lg ${v}`,children:[r.appeal,"%"]})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"⚡ 전력"}),Z.jsxs("span",{className:`font-bold text-lg ${c}`,children:[r.powerCapacity,"/",r.powerDemand]})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"💧 물"}),Z.jsxs("span",{className:`font-bold text-lg ${d}`,children:[r.waterCapacity,"/",r.waterDemand]})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"💨 오염도"}),Z.jsxs("span",{className:`font-bold text-lg ${g}`,children:[r.pollutionLevel,"%"]})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"🎓 교육"}),Z.jsxs("span",{className:`font-bold text-lg ${p}`,children:[r.educationLevel,"%"]})]}),Z.jsxs("div",{className:"flex flex-col items-center mx-1 my-1",children:[Z.jsx("span",{className:"text-gray-400 text-xs",children:"😊 행복도"}),Z.jsxs("span",{className:`font-bold text-lg ${m}`,children:[r.happiness,"%"]})]})]})})},$e=({label:r,value:t,unit:i="",baseValue:s,improved:l})=>{if(t==null)return null;let c="text-gray-100";return l&&typeof t=="number"&&typeof s=="number"?t>s?c="text-green-400":t<s&&(c="text-red-400"):l&&(r.includes("오염 발생량")||r.includes("유지비")||r.includes("수요"))&&typeof t=="number"&&typeof s=="number"?t>s?c="text-red-400":t<s&&(c="text-green-400"):l&&(r.includes("오염 감소량")||r.includes("매력 포인트"))&&typeof t=="number"&&typeof s=="number"&&(t>s?c="text-green-400":t<s&&(c="text-red-400")),Z.jsxs("div",{className:"text-sm",children:[Z.jsxs("span",{className:"text-gray-400",children:[r,": "]}),Z.jsxs("span",{className:c,children:[t,i]}),s!==void 0&&t!==s&&l&&Z.jsxs("span",{className:"text-xs text-gray-500 ml-1",children:["(기존: ",s,i,")"]})]})},ER=({building:r,buildingProps:t,baseBuildingProps:i,onUpgrade:s,onClose:l,currentFunds:c})=>{var g;const h=r.level-wi,d=(g=i.upgrades)==null?void 0:g[h];let m={};if(d){m={...t};for(const v in d.effects){const x=v;d.effects[x]!==void 0&&(m[x]=d.effects[x])}}const p=(v,x,M,T="")=>{if(x===void 0||M===void 0)return x!==void 0?Z.jsx($e,{label:v,value:x,unit:T}):null;if(x===M&&d)return Z.jsx($e,{label:v,value:x,unit:T});if(!d&&x!==void 0)return Z.jsx($e,{label:v,value:x,unit:T});if(d&&x!==M){const A=v.includes("비용")||v.includes("수요")||v.includes("오염 발생량");let S=M>x;return A&&(S=M<x),(v.includes("오염 감소량")||v.includes("매력 포인트"))&&(S=M>x),Z.jsxs("div",{className:"text-sm",children:[Z.jsxs("span",{className:"text-gray-400",children:[v,": "]}),Z.jsxs("span",{className:"text-gray-100",children:[x,T]}),Z.jsxs("span",{className:`ml-1 ${S?"text-green-400":"text-red-400"}`,children:["➔ ",M,T]})]})}return null};return Z.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-lg shadow-xl z-20 w-80 border border-gray-700 max-h-[90vh] overflow-y-auto",children:[Z.jsxs("div",{className:"flex justify-between items-center mb-4",children:[Z.jsxs("h3",{className:"text-xl font-semibold flex items-center",children:[Z.jsx("span",{className:"text-2xl mr-2",children:t.icon}),t.name," - 레벨 ",r.level]}),Z.jsx("button",{onClick:l,className:"text-gray-400 hover:text-white text-2xl leading-none",children:"×"})]}),r.isOnFire&&Z.jsxs("div",{className:`mb-3 p-3 rounded text-center ${r.fireHealth<=0?"bg-red-800":"bg-red-600 bg-opacity-80"}`,children:[Z.jsx("p",{className:"text-lg font-bold text-white animate-pulse",children:"🔥 건물 화재 발생! 🔥"}),Z.jsxs("p",{className:"text-sm text-red-100",children:["화재 체력: ",r.fireHealth.toFixed(0)," / ",pa]}),r.fireHealth<=0&&Z.jsx("p",{className:"text-sm text-red-100 font-bold mt-1",children:"건물이 완전히 파괴되었습니다!"})]}),Z.jsxs("div",{className:"space-y-1 mb-4",children:[Z.jsx($e,{label:"유지비",value:t.maintenanceCost,unit:"/월"}),t.residentialCapacity!==void 0&&Z.jsx($e,{label:"주거 공간",value:t.residentialCapacity,unit:" 명"}),t.jobsProvided!==void 0&&Z.jsx($e,{label:"일자리 제공",value:t.jobsProvided,unit:" 개"}),t.powerCapacity!==void 0&&Z.jsx($e,{label:"전력 생산",value:t.powerCapacity,unit:" MW"}),t.powerDemand!==void 0&&Z.jsx($e,{label:"전력 수요",value:t.powerDemand,unit:" MW"}),t.waterCapacity!==void 0&&Z.jsx($e,{label:"물 공급",value:t.waterCapacity,unit:" L"}),t.waterDemand!==void 0&&Z.jsx($e,{label:"물 수요",value:t.waterDemand,unit:" L"}),t.happinessEffect!==void 0&&Z.jsx($e,{label:"기본 행복도 기여",value:t.happinessEffect}),t.fireCoverageRadius!==void 0&&Z.jsx($e,{label:"화재 진압 반경",value:t.fireCoverageRadius,unit:" 칸"}),t.fireFightingPower!==void 0&&Z.jsx($e,{label:"화재 진압력",value:t.fireFightingPower,unit:"/틱"}),t.maxActiveFiresHandled!==void 0&&Z.jsx($e,{label:"동시 진압 가능",value:t.maxActiveFiresHandled,unit:" 건"}),t.patientCapacity!==void 0&&Z.jsx($e,{label:"병원 수용 인원",value:t.patientCapacity,unit:" 명"}),t.healthServiceRadius!==void 0&&Z.jsx($e,{label:"의료 서비스 반경",value:t.healthServiceRadius,unit:" 칸"}),t.studentCapacity!==void 0&&Z.jsx($e,{label:"학생 수용량",value:t.studentCapacity,unit:" 명"}),t.educationPointContribution!==void 0&&Z.jsx($e,{label:"교육 점수 기여",value:t.educationPointContribution,unit:" 점"}),t.educationCoverageRadius!==void 0&&Z.jsx($e,{label:"교육 서비스 반경",value:t.educationCoverageRadius,unit:" 칸"}),t.pollutionOutput!==void 0&&Z.jsx($e,{label:"오염 발생량",value:t.pollutionOutput,unit:" 단위"}),t.pollutionReduction!==void 0&&Z.jsx($e,{label:"오염 감소량",value:t.pollutionReduction,unit:" 단위"}),t.appealPoints!==void 0&&Z.jsx($e,{label:"매력 포인트",value:t.appealPoints,unit:" 점"})]}),d&&Z.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-700",children:[Z.jsxs("h4",{className:"text-lg font-semibold mb-2",children:["다음 업그레이드: ",d.name]}),Z.jsxs("p",{className:"text-sm text-yellow-400 mb-1",children:["비용: $",d.cost.toLocaleString()]}),Z.jsxs("div",{className:"space-y-0.5 text-xs mb-3",children:[Z.jsx("p",{className:"font-medium text-gray-300",children:"효과:"}),p("유지비",t.maintenanceCost,m.maintenanceCost,"/월"),p("주거 공간",t.residentialCapacity,m.residentialCapacity," 명"),p("일자리",t.jobsProvided,m.jobsProvided," 개"),p("전력 생산",t.powerCapacity,m.powerCapacity," MW"),p("전력 수요",t.powerDemand,m.powerDemand," MW"),p("물 공급",t.waterCapacity,m.waterCapacity," L"),p("물 수요",t.waterDemand,m.waterDemand," L"),p("기본 행복도 기여",t.happinessEffect,m.happinessEffect),p("화재 진압 반경",t.fireCoverageRadius,m.fireCoverageRadius," 칸"),p("화재 진압력",t.fireFightingPower,m.fireFightingPower,"/틱"),p("병원 수용 인원",t.patientCapacity,m.patientCapacity," 명"),p("의료 서비스 반경",t.healthServiceRadius,m.healthServiceRadius," 칸"),p("학생 수용량",t.studentCapacity,m.studentCapacity," 명"),p("교육 점수 기여",t.educationPointContribution,m.educationPointContribution," 점"),p("교육 서비스 반경",t.educationCoverageRadius,m.educationCoverageRadius," 칸"),p("오염 발생량",t.pollutionOutput,m.pollutionOutput," 단위"),p("오염 감소량",t.pollutionReduction,m.pollutionReduction," 단위"),p("매력 포인트",t.appealPoints,m.appealPoints," 점"),m.height!==t.height&&m.height!==void 0&&Z.jsx($e,{label:"높이",value:`${t.height} ➔ ${m.height}`})]}),Z.jsx("button",{onClick:()=>s(r.id),disabled:c<d.cost||r.isOnFire&&r.fireHealth>0,title:r.isOnFire&&r.fireHealth>0?"불타는 건물은 업그레이드할 수 없습니다.":c<d.cost?"자금이 부족합니다.":`업그레이드: ${d.name}`,className:"w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors",children:r.isOnFire&&r.fireHealth>0?"업그레이드 불가 (화재)":d.cost>c?`자금 부족 ($${d.cost.toLocaleString()})`:`업그레이드 ($${d.cost.toLocaleString()})`})]}),!d&&i.upgrades&&i.upgrades.length>0&&Z.jsx("p",{className:"text-center text-green-400 mt-4",children:"최대 레벨에 도달했습니다!"}),(!i.upgrades||i.upgrades.length===0)&&Z.jsx("p",{className:"text-center text-gray-400 mt-4",children:"이 건물은 업그레이드할 수 없습니다."})]})},TR=()=>{const[r,t]=Xt.useState(!1),i=Xt.useRef(null),s=()=>t(!r);return Xt.useEffect(()=>{var h;const c=d=>{d.key==="Escape"&&t(!1)};return r&&(document.addEventListener("keydown",c),(h=i.current)==null||h.focus()),()=>{document.removeEventListener("keydown",c)}},[r]),Z.jsxs(Z.Fragment,{children:[Z.jsx("button",{onClick:s,className:"action-button bg-indigo-600 hover:bg-indigo-700 text-white","aria-label":"도움말 보기","aria-expanded":r,"aria-controls":"help-modal",title:"도움말",children:Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.755 4 3.92C16 13.09 14.828 14 12.802 14c-.65.002-1.252-.22-1.74-.632S10 12.396 10 11.752c0-.92.75-1.67 1.67-1.67.92 0 1.668.75 1.668 1.67 0 .92-.75 1.67-1.668 1.67H12M12 17.25h.008v.008H12v-.008z"})})}),r&&Z.jsx("div",{id:"help-modal",className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4",onClick:s,role:"dialog","aria-modal":"true","aria-labelledby":"helpModalTitle",children:Z.jsxs("div",{ref:i,tabIndex:-1,className:"bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg w-full text-white border border-gray-700 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalShow",onClick:c=>c.stopPropagation(),children:[Z.jsxs("div",{className:"flex justify-between items-center mb-4",children:[Z.jsxs("h2",{id:"helpModalTitle",className:"text-xl font-semibold text-indigo-400",children:[Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 inline-block mr-2 -mt-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"게임 조작 방법"]}),Z.jsx("button",{onClick:s,className:"text-gray-500 hover:text-white transition-colors text-3xl leading-none","aria-label":"닫기",children:"×"})]}),Z.jsx("ul",{className:"space-y-2 text-gray-300 list-none pl-1",children:`• 건물 정보/업그레이드: 건물 좌클릭
• 건설 모드: 하단 툴바에서 건물 선택 후 맵에 좌클릭
• 철거 모드: 하단 툴바에서 💣 선택 후 건물 우클릭 또는, 건물 선택 없이 맵의 건물 우클릭
• 카메라 이동: 마우스 가운데 버튼 누르고 드래그
• 카메라 회전: 마우스 왼쪽 버튼 누르고 드래그 (3D 뷰에서)
• 카메라 확대/축소: 마우스 휠 스크롤`.split(`
`).map((c,h)=>c.trim()?Z.jsxs("li",{className:"flex items-start",children:[Z.jsx("span",{className:"text-indigo-400 mr-2 mt-1",children:"●"}),Z.jsx("span",{children:c.replace("• ","")})]},h):null)}),Z.jsx("button",{onClick:s,className:"mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500",children:"알겠습니다"})]})})]})},Qc=[{key:"population",label:"인구",color:"#3b82f6"},{key:"funds",label:"자금",color:"#22c55e"},{key:"happiness",label:"행복도",color:"#f59e0b",isPercentage:!0},{key:"powerCapacity",label:"전력 수지",color:"#ef4444",isBalance:!0},{key:"waterCapacity",label:"물 수지",color:"#0ea5e9",isBalance:!0},{key:"pollutionLevel",label:"오염도",color:"#a16207",isPercentage:!0},{key:"educationLevel",label:"교육 수준",color:"#8b5cf6",isPercentage:!0},{key:"tourists",label:"관광객",color:"#14b8a6"},{key:"appeal",label:"매력도",color:"#ec4899",isPercentage:!0},{key:"healthLevel",label:"건강 수준",color:"#65a30d",isPercentage:!0},{key:"safetyLevel",label:"안전 수준",color:"#d97706",isPercentage:!0}],bR=({history:r,onClose:t})=>{const i=Xt.useRef(null),s=Xt.useRef(null),l=Xt.useRef(null),[c,h]=Xt.useState(new Set(["population","funds","happiness"])),[d,m]=Xt.useState({width:0,height:0}),p=L=>{h(B=>{const j=new Set(B);return j.has(L)?j.delete(L):j.add(L),j})};Xt.useEffect(()=>{var B;const L=j=>{j.key==="Escape"&&t()};return document.addEventListener("keydown",L),(B=i.current)==null||B.focus(),()=>document.removeEventListener("keydown",L)},[t]),Xt.useEffect(()=>{const L=()=>{var B;if((B=s.current)!=null&&B.parentElement){const j=s.current.parentElement.clientWidth;m({width:j>0?j:600,height:400})}};return L(),window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]);const g={top:20,right:30,bottom:60,left:60},v=d.width-g.left-g.right,x=d.height-g.top-g.bottom,M=(L,B)=>B==="powerCapacity"?L.powerCapacity-L.powerDemand:B==="waterCapacity"?L.waterCapacity-L.waterDemand:L[B],T=r.length>0?r:[{month:0,population:0,funds:0,happiness:0,powerCapacity:0,powerDemand:0,waterCapacity:0,waterDemand:0,pollutionLevel:0,educationLevel:0,tourists:0,appeal:0,healthLevel:0,safetyLevel:0}],A=c.size>0?T.reduce((L,B)=>(c.forEach(j=>{const st=M(B,j),mt=Qc.find(P=>P.key===j);mt!=null&&mt.isPercentage?(L.min=Math.min(L.min,0),L.max=Math.max(L.max,100)):(L.min=Math.min(L.min,st),L.max=Math.max(L.max,st))}),L),{min:1/0,max:-1/0}):{min:0,max:100};let S=A.min===1/0?0:A.min,_=A.max===-1/0?100:A.max;S===_&&(S===0?_=100:(S=S-Math.abs(S*.1)-1,_=_+Math.abs(_*.1)+1));const I=(_-S)*.05;S-=I,_+=I,S>0&&A.min>=0&&(A.min<S&&(S=A.min-I),A.min>(_-S)*.2&&(S=0)),S===_&&(_=S+1);const O=Xt.useCallback(L=>{if(T.length<=1)return g.left;const B=T[0].month,j=T[T.length-1].month;return j===B?g.left+v/2:g.left+(L-B)/(j-B)*v},[T,v,g.left]),D=Xt.useCallback(L=>_===S?g.top+x/2:g.top+x-(L-S)/(_-S)*x,[S,_,x,g.top]),G=L=>{var K;if(!l.current||T.length===0||c.size===0)return;const B=(K=s.current)==null?void 0:K.getBoundingClientRect();if(!B)return;const j=L.clientX-B.left,st=T[0].month,mt=T[T.length-1].month;let P=-1;if(mt===st&&T.length>0)P=0;else if(mt>st){const q=st+(j-g.left)/v*(mt-st);P=T.reduce((At,Dt,z)=>Math.abs(Dt.month-q)<Math.abs(T[At].month-q)?z:At,0)}if(P!==-1){const q=T[P],At=O(q.month)+B.left+window.scrollX;let Dt=S;if(c.size>0){const Et=Array.from(c)[0];Dt=M(q,Et)}const z=D(Dt)+B.top+window.scrollY-10;l.current.style.display="block",l.current.style.left=`${At}px`,l.current.style.top=`${z}px`;let rt=`<div class="font-bold mb-1">월: ${q.month}</div>`;Qc.forEach(Et=>{if(c.has(Et.key)){const Q=M(q,Et.key);rt+=`<div><span style="color:${Et.color}; display:inline-block; margin-right:4px;">●</span>${Et.label}: ${Q.toLocaleString(void 0,{maximumFractionDigits:Et.isPercentage?1:0})}${Et.isPercentage?"%":""}</div>`}}),l.current.innerHTML=rt}else l.current.style.display="none"},k=()=>{l.current&&(l.current.style.display="none")},U=5,V=Array.from({length:U+1},(L,B)=>S+B*(_-S)/U),C=Math.min(10,T.length),R=T.length>1&&C>1?Array.from({length:C},(L,B)=>{const j=Math.floor(B*(T.length-1)/(C-1));return T[j].month}).filter((L,B,j)=>j.indexOf(L)===B):T.length===1?[T[0].month]:[];return Z.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-2 sm:p-4",onClick:t,role:"dialog","aria-modal":"true","aria-labelledby":"graphModalTitle",children:Z.jsxs("div",{ref:i,tabIndex:-1,className:"bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-3xl text-white border border-gray-700 animate-modalShow flex flex-col max-h-[95vh]",onClick:L=>L.stopPropagation(),children:[Z.jsxs("div",{className:"flex justify-between items-center mb-4",children:[Z.jsxs("h2",{id:"graphModalTitle",className:"text-xl font-semibold text-pink-400",children:[Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 inline-block mr-2 -mt-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7 12l3-3 3 3 4-4M8 20V10"})}),"도시 통계 변화 그래프"]}),Z.jsx("button",{onClick:t,className:"text-gray-500 hover:text-white transition-colors text-3xl leading-none","aria-label":"닫기",children:"×"})]}),Z.jsx("div",{className:"mb-4 flex flex-wrap justify-center gap-1 text-xs",children:Qc.map(L=>Z.jsxs("label",{className:"graph-checkbox-label",style:{border:`1px solid ${L.color}`},children:[Z.jsx("input",{type:"checkbox",checked:c.has(L.key),onChange:()=>p(L.key)}),Z.jsx("span",{style:{color:L.color},children:L.label})]},L.key))}),Z.jsxs("div",{className:"flex-grow overflow-hidden",children:[" ",Z.jsxs("svg",{ref:s,width:d.width,height:d.height,onMouseMove:G,onMouseLeave:k,children:[V.map((L,B)=>Z.jsxs("g",{transform:`translate(0, ${D(L)})`,children:[Z.jsx("line",{x1:g.left,x2:g.left+v,y1:0,y2:0,stroke:"#4b5563",strokeDasharray:"2,2"}),Z.jsx("text",{x:g.left-8,y:4,textAnchor:"end",fontSize:"10px",fill:"#9ca3af",children:L.toLocaleString(void 0,{maximumFractionDigits:L%1===0?0:1})})]},`y-grid-${B}`)),R.map((L,B)=>Z.jsxs("g",{transform:`translate(${O(L)}, 0)`,children:[Z.jsx("line",{x1:0,x2:0,y1:g.top,y2:g.top+x,stroke:"#4b5563",strokeDasharray:"2,2"}),Z.jsx("text",{x:0,y:g.top+x+15,textAnchor:"middle",fontSize:"10px",fill:"#9ca3af",children:L})]},`x-grid-${B}`)),Z.jsx("line",{x1:g.left,y1:g.top,x2:g.left,y2:g.top+x,stroke:"#6b7280"}),Z.jsx("line",{x1:g.left,y1:g.top+x,x2:g.left+v,y2:g.top+x,stroke:"#6b7280"}),Z.jsx("text",{x:g.left+v/2,y:d.height-g.bottom/2+10,textAnchor:"middle",fontSize:"12px",fill:"#9ca3af",children:"월 (Month)"}),Qc.map(L=>{if(c.has(L.key)&&T.length>1){const B=T.map(j=>`${O(j.month)},${D(M(j,L.key))}`).join(" L");return Z.jsx("path",{d:`M${B}`,fill:"none",stroke:L.color,strokeWidth:"2"},L.key)}if(c.has(L.key)&&T.length===1){const B=T[0];return Z.jsx("circle",{cx:O(B.month),cy:D(M(B,L.key)),r:"3",fill:L.color},`${L.key}-point`)}return null})]})]}),Z.jsx("div",{ref:l,className:"graph-tooltip",style:{display:"none"}}),Z.jsx("button",{onClick:t,className:"mt-4 sm:mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500",children:"닫기"})]})})},mv="blockCityBuilderSave_v1",gv=240,AR=()=>{const[r,t]=Xt.useState(null),[i,s]=Xt.useState([]),[l,c]=Xt.useState({population:mc,funds:pc,powerCapacity:0,powerDemand:0,waterCapacity:0,waterDemand:0,happiness:Bo,month:gc,healthLevel:Ho,safetyLevel:_c,educationLevel:Va,pollutionLevel:vc,appeal:xc,tourists:yc}),[h,d]=Xt.useState(null),m=Xt.useRef(null),[p,g]=Xt.useState(null),v=Xt.useRef(null),[x,M]=Xt.useState(!0),[T,A]=Xt.useState(!1),[S,_]=Xt.useState(Ss),[I,O]=Xt.useState(!1),[D,G]=Xt.useState(null),[k,U]=Xt.useState(null),[V,C]=Xt.useState([]),[R,L]=Xt.useState(!1),B=Xt.useCallback((tt,ot=3e3)=>{d(tt),m.current!==null&&clearTimeout(m.current),m.current=window.setTimeout(()=>{d(null),m.current=null},ot)},[]);Xt.useCallback(()=>{m.current!==null&&clearTimeout(m.current),d(null),m.current=null},[]);const j=Xt.useCallback(tt=>{const ot=Cn[tt.type];let Lt={...ot};if(ot.upgrades&&tt.level>wi){for(let zt=0;zt<tt.level-wi;zt++)if(ot.upgrades[zt]){const Ot=ot.upgrades[zt].effects;Lt={...Lt,...Ot}}}return Lt},[]),st=Xt.useCallback((tt,ot)=>{let Lt=0,zt=0,Ot=0,Ft=0,F=0,ie=0,$t=0,ye=0,Mt=0,Wt=0,Ct=0,Ht=0,ce=0,N=0,E=0,et=0;tt.forEach(Ut=>{const dt=j(Ut);if(Ut.isOnFire&&Ut.fireHealth<=0){et++,dt.maintenanceCost&&(ie+=dt.maintenanceCost/2);return}dt.powerCapacity&&(Lt+=dt.powerCapacity),dt.powerDemand&&(zt+=dt.powerDemand),dt.waterCapacity&&(Ot+=dt.waterCapacity),dt.waterDemand&&(Ft+=dt.waterDemand),dt.happinessEffect&&!Ut.isOnFire&&(F+=dt.happinessEffect),dt.maintenanceCost&&(ie+=dt.maintenanceCost),dt.residentialCapacity&&($t+=dt.residentialCapacity),dt.jobsProvided&&(ye+=dt.jobsProvided,Ut.type===oe.COMMERCIAL&&(Mt+=dt.jobsProvided)),dt.patientCapacity&&(Wt+=dt.patientCapacity),dt.studentCapacity&&(Ct+=dt.studentCapacity),dt.educationPointContribution&&(Ht+=dt.educationPointContribution),dt.pollutionOutput&&!Ut.isOnFire&&(ce+=dt.pollutionOutput),dt.pollutionReduction&&!Ut.isOnFire&&(N+=dt.pollutionReduction),dt.appealPoints&&!Ut.isOnFire&&(E+=dt.appealPoints)});let ut=Bo+F;zt>Lt&&tt.length>0&&(ut-=15),Ft>Ot&&tt.length>0&&(ut+=xS);const _t=tt.filter(Ut=>Ut.type===oe.INDUSTRIAL&&!Ut.isOnFire).length,pt=tt.filter(Ut=>Ut.type===oe.PARK&&!Ut.isOnFire).length;if(_t>pt*1.5&&_t>0&&(ut-=_t*2.5),ot.population>0&&ye<ot.population){const Ut=(ot.population-ye)/ot.population;Ut>gS&&(ut-=Math.floor(Ut*30))}ot.funds<_S&&(ut-=10),ot.funds<vS&&(ut-=15);const te=Math.max(0,ce-N),Bt=Math.min(100,Math.floor(te/PS*100));ut-=Bt*IS;let Zt=Ho;ot.population>0&&tt.some(Ut=>Ut.type===oe.HOSPITAL&&!Ut.isOnFire)?Zt=Math.min(100,Math.floor(Wt/(ot.population*.5)*100)):tt.some(Ut=>Ut.type===oe.HOSPITAL&&!Ut.isOnFire)?Zt=100:Zt=50,Bt>qo&&(Zt-=(Bt-qo)*zS),Zt=Math.max(0,Math.min(100,Math.floor(Zt))),ot.healthLevel<Sc&&(ut-=(Sc-ot.healthLevel)/2);let gt=100-tt.filter(Ut=>Ut.isOnFire&&Ut.fireHealth>0).length*20;gt=Math.max(0,gt),ot.safetyLevel<Mc&&(ut-=Mc-ot.safetyLevel),tt.filter(Ut=>Ut.isOnFire&&Ut.fireHealth>0).forEach(()=>ut-=5);let wt=Va;const jt=ot.population*OS;if(tt.some(Ut=>(Ut.type===oe.SCHOOL||Ut.type===oe.UNIVERSITY)&&!Ut.isOnFire))if(jt>0){const dt=Math.min(1,Ht/Math.max(1,jt)),Tt=Math.min(1,Ct/Math.max(1,jt));let Qt=Math.floor(Tt*70+dt*30);Qt+=Math.floor(Ht*.05),wt=Math.min(100,Qt)}else wt=75;else jt>0?ot.population<15?wt=Va:ot.population<40?wt=Math.max(30,Va-Math.floor((ot.population-15)/1.5)):wt=25:wt=Va;wt=Math.max(0,Math.min(100,Math.floor(wt))),wt<ws&&(ut-=(ws-wt)/1.5);let Gt=0;ot.happiness>=50&&Bt<40&&Zt>=Sc&&gt>=Mc&&(Gt=5);let le=E+Gt;ot.happiness>50&&(le+=(ot.happiness-50)*GS),wt>ws&&(le+=(wt-ws)*VS),le=Math.max(0,le);let X=Math.floor(le/FS*100);X-=Bt*BS,X-=et*HS,X=Math.max(0,Math.min(100,Math.floor(X)));let Vt=Math.floor(X*2.5+E*.5);const Nt=Math.floor(Mt/kS);return Vt=Math.min(Vt,Nt),Vt=Math.max(0,Vt),{powerCapacity:Lt,powerDemand:zt,waterCapacity:Ot,waterDemand:Ft,happinessScoreForGrowthConsideration:Math.max(0,Math.min(100,Math.floor(ut))),healthLevel:Zt,safetyLevel:gt,educationLevel:wt,pollutionLevel:Bt,appeal:X,tourists:Vt,totalMaintenanceCost:ie,totalResidentialCapacity:$t,totalJobsProvided:ye,totalCommercialJobs:Mt}},[j]),mt=Xt.useCallback((tt=null,ot=r_)=>{const Lt=new Set;i.forEach(Ot=>Lt.add(`${Ot.gridX},${Ot.gridZ}`));let zt=[];for(let Ot=0;Ot<bi;Ot++)for(let Ft=0;Ft<bi;Ft++)if(!Lt.has(`${Ot},${Ft}`))if(tt){const F=Math.sqrt(Math.pow(Ot-tt.x,2)+Math.pow(Ft-tt.z,2));zt.push({x:Ot,z:Ft,distance:F})}else zt.push({x:Ot,z:Ft});return tt?zt.sort((Ot,Ft)=>(Ot.distance??1/0)-(Ft.distance??1/0)):zt.sort(()=>Math.random()-.5),zt.slice(0,ot).map(({x:Ot,z:Ft})=>({x:Ot,z:Ft}))},[i]),P=Xt.useCallback((tt,ot,Lt,zt)=>{const Ot=(Ft,F)=>Lt.some(ie=>ie.gridX===Ft&&ie.gridZ===F&&ie.type===oe.ROAD)||zt.some(ie=>ie.x===Ft&&ie.z===F&&ie.type===oe.ROAD);return!(Ot(tt+1,ot)&&Ot(tt,ot+1)&&Ot(tt+1,ot+1)||Ot(tt-1,ot)&&Ot(tt,ot+1)&&Ot(tt-1,ot+1)||Ot(tt+1,ot)&&Ot(tt,ot-1)&&Ot(tt+1,ot-1)||Ot(tt-1,ot)&&Ot(tt,ot-1)&&Ot(tt-1,ot-1))},[]),K=Xt.useCallback(async()=>{if(I)return;O(!0),B("AI 플래너가 도시 계획을 구상 중입니다...",3e3);let tt=l.funds;const ot=[];let Lt=[],zt=null;const Ot=st(i,l),Ft=(Mt,Wt,Ct,Ht)=>{if(ot.length>=ka)return!1;const ce=Cn[Mt];if(!ce)return!1;const N=ce.cost,E=!i.some(ut=>ut.gridX===Wt&&ut.gridZ===Ct)&&!ot.some(ut=>ut.x===Wt&&ut.z===Ct),et=Wt>=0&&Wt<bi&&Ct>=0&&Ct<bi;return tt>=N&&E&&et?Mt===oe.ROAD&&!P(Wt,Ct,i,ot)?!1:(ot.push({action:"BUILD",type:Mt,x:Wt,z:Ct,reasoning:Ht}),tt-=N,Lt.push(`${ce.name} 건설 (${Ht})`),Mt===oe.POWER_PLANT&&!D&&(zt={x:Wt,z:Ct}),!0):!1},F=(Mt,Wt)=>{if(ot.length>=ka)return!1;const Ct=Cn[Mt.type];if(!Ct.upgrades||Mt.level-wi>=Ct.upgrades.length)return!1;const Ht=Ct.upgrades[Mt.level-wi];return tt>=Ht.cost&&(!Mt.isOnFire||Mt.fireHealth<=0)?(ot.push({action:"UPGRADE",buildingId:Mt.id,reasoning:Wt}),tt-=Ht.cost,Lt.push(`${Ct.name} 업그레이드 (${Wt})`),!0):!1},ie=mt(D,r_*2),$t=i.some(Mt=>Mt.type===oe.POWER_PLANT&&(!Mt.isOnFire||Mt.fireHealth>0));if(!$t&&ot.length<ka){const Mt=Math.floor(bi/2),Wt=Math.floor(bi/2),Ct=ie.find(Ht=>Ht.x>Mt-5&&Ht.x<Mt+5&&Ht.z>Wt-5&&Ht.z<Wt+5)||ie[0];if(Ct&&Ft(oe.POWER_PLANT,Ct.x,Ct.z,"초기 전력 공급")&&ie.length>1&&Ft(oe.WATER_TOWER,ie[1].x,ie[1].z,"초기 물 공급")){const Ht=Ct.x,ce=Ct.z,N=[{x:Ht+1,z:ce},{x:Ht-1,z:ce},{x:Ht,z:ce+1},{x:Ht,z:ce-1}].find(E=>E.x>=0&&E.x<bi&&E.z>=0&&E.z<bi&&!i.some(et=>et.gridX===E.x&&et.gridZ===E.z)&&P(E.x,E.z,i,ot));N&&Ft(oe.ROAD,N.x,N.z,"발전소 도로 연결")}}if(D&&$t&&ot.length<ka){const Mt=mt(D,10);Mt.length>0&&(Ft(oe.ROAD,Mt[0].x,Mt[0].z,`포커스 지역 도로 확장 (${D.x},${D.z})`)||Mt.length>1&&Ft(oe.RESIDENTIAL,Mt[1].x,Mt[1].z,"포커스 지역 주거 개발"))}if(ot.length<ka){const Mt=i.filter(Ct=>Ct.type!==oe.ROAD&&(!Ct.isOnFire||Ct.fireHealth<=0)),Wt=i.filter(Ct=>Ct.type===oe.ROAD);for(const Ct of Mt){const{gridX:Ht,gridZ:ce}=Ct;if(!Wt.some(E=>Math.abs(E.gridX-Ht)<=1&&E.gridZ===ce||Math.abs(E.gridZ-ce)<=1&&E.gridX===Ht)){const et=[{x:Ht+1,z:ce},{x:Ht-1,z:ce},{x:Ht,z:ce+1},{x:Ht,z:ce-1}].find(ut=>ut.x>=0&&ut.x<bi&&ut.z>=0&&ut.z<bi&&!i.some(_t=>_t.gridX===ut.x&&_t.gridZ===ut.z)&&P(ut.x,ut.z,i,ot));if(et&&Ft(oe.ROAD,et.x,et.z,`${Cn[Ct.type].name} 도로 연결`))break}}}if(ot.length<ka&&(Ot.powerCapacity<Ot.powerDemand*1.2&&ie.length>0?Ft(oe.POWER_PLANT,ie[0].x,ie[0].z,"전력 부족 해결"):Ot.waterCapacity<Ot.waterDemand*1.2&&ie.length>1?Ft(oe.WATER_TOWER,ie[Math.min(1,ie.length-1)].x,ie[Math.min(1,ie.length-1)].z,"물 부족 해결"):l.population>=Ot.totalResidentialCapacity*.85&&l.happiness>45&&ie.length>0?Ft(oe.RESIDENTIAL,ie[0].x,ie[0].z,"주거 공간 확충"):l.population>Ot.totalJobsProvided*1.15&&ie.length>0?Ft(oe.COMMERCIAL,ie[0].x,ie[0].z,"일자리 창출"):l.happiness<60&&ie.length>0&&Ft(oe.PARK,ie[0].x,ie[0].z,"행복도 증진")),ot.length<ka){const Mt=i.filter(Wt=>{const Ct=Cn[Wt.type];return Ct.upgrades&&Wt.level-wi<Ct.upgrades.length&&(!Wt.isOnFire||Wt.fireHealth<=0)}).sort((Wt,Ct)=>Wt.level-Ct.level);if(Mt.length>0){const Wt=Mt[0];let Ct="성능 향상";Wt.type===oe.POWER_PLANT&&Ot.powerCapacity<Ot.powerDemand*1.3&&(Ct="전력 생산 증대"),Wt.type===oe.RESIDENTIAL&&l.population>=Ot.totalResidentialCapacity*.9&&(Ct="주거 공간 추가 확보"),F(Wt,Ct)}}let ye=0;ot.length>0?B(`AI 플래너: ${Lt.join(", ")}`,4e3):B("AI 플래너: 현재 특별한 조치가 필요하지 않다고 판단했습니다.",3e3);for(const Mt of ot){if(ye>=ka)break;if(Mt.action==="BUILD"&&Mt.type&&Mt.x!==void 0&&Mt.z!==void 0){const Ct=Cn[Mt.type].cost;if(l.funds>=Ct){const Ht={id:`${Date.now()}-${Mt.x}-${Mt.z}-ai`,type:Mt.type,gridX:Mt.x,gridZ:Mt.z,level:wi,isOnFire:!1,fireHealth:pa};s(ce=>[...ce,Ht]),c(ce=>({...ce,funds:ce.funds-Ct})),ye++,zt&&Mt.x===zt.x&&Mt.z===zt.z&&(G(zt),U("AI_STRATEGIC"),setTimeout(()=>B(`AI 플래너: 초기 발전소를 (${zt.x},${zt.z})에 건설하고, 이 지점을 전략적 개발 거점으로 설정합니다.`,3500),500))}}else if(Mt.action==="UPGRADE"&&Mt.buildingId){const Wt=i.find(Ct=>Ct.id===Mt.buildingId);if(Wt){const Ct=Cn[Wt.type],Ht=Wt.level-wi;if(Ct.upgrades&&Ht<Ct.upgrades.length){const ce=Ct.upgrades[Ht];l.funds>=ce.cost&&(s(N=>N.map(E=>E.id===Mt.buildingId?{...E,level:E.level+1}:E)),c(N=>({...N,funds:N.funds-ce.cost})),ye++,(p==null?void 0:p.id)===Mt.buildingId&&g(N=>N?{...N,level:N.level+1}:null))}}}}O(!1),_(Ss)},[I,l,i,mt,B,st,p,D,P]),q=Xt.useCallback(()=>{var tt;try{const ot=(tt=v.current)==null?void 0:tt.getCameraState(),Lt={buildings:i,cityStats:l,selectedBuildingId:p==null?void 0:p.id,cameraState:ot||void 0,isDelegationModeActive:T,aiPlannerCooldown:S,aiFocusPoint:D,aiFocusPointSource:k,cityStatsHistory:V};localStorage.setItem(mv,JSON.stringify(Lt)),B("게임이 저장되었습니다!",2e3)}catch(ot){console.error("Error saving game:",ot),B("게임 저장에 실패했습니다.",3e3)}},[i,l,p,B,T,S,D,k,V]),At=Xt.useCallback((tt=!1)=>{try{const ot=localStorage.getItem(mv);if(ot){const Lt=JSON.parse(ot),zt=Lt.buildings||[],Ft={...{population:mc,funds:pc,powerCapacity:0,powerDemand:0,waterCapacity:0,waterDemand:0,happiness:Bo,month:gc,healthLevel:Ho,safetyLevel:_c,educationLevel:Va,pollutionLevel:vc,appeal:xc,tourists:yc},...Lt.cityStats||{}};s(zt),c(Ft),C(Lt.cityStatsHistory||[]);const F=st(zt,Ft);if(c(ie=>({...ie,...F,happiness:F.happinessScoreForGrowthConsideration})),Lt.selectedBuildingId){const ie=zt.find($t=>$t.id===Lt.selectedBuildingId);g(ie||null)}else g(null);Lt.cameraState&&v.current&&v.current.setCameraState(Lt.cameraState),A(Lt.isDelegationModeActive??!1),_(Lt.aiPlannerCooldown??Ss),G(Lt.aiFocusPoint??null),U(Lt.aiFocusPointSource??null),tt?B("저장된 게임을 자동으로 불러왔습니다.",2500):B("게임을 불러왔습니다!",2e3)}else tt||B("저장된 게임이 없습니다.",3e3),s([]),c({population:mc,funds:pc,powerCapacity:0,powerDemand:0,waterCapacity:0,waterDemand:0,happiness:Bo,month:gc,healthLevel:Ho,safetyLevel:_c,educationLevel:Va,pollutionLevel:vc,appeal:xc,tourists:yc}),C([]),A(!1),_(Ss),G(null),U(null)}catch(ot){console.error("Error loading game:",ot),tt||B("게임 불러오기에 실패했습니다.",3e3),s([]),c({population:mc,funds:pc,powerCapacity:0,powerDemand:0,waterCapacity:0,waterDemand:0,happiness:Bo,month:gc,healthLevel:Ho,safetyLevel:_c,educationLevel:Va,pollutionLevel:vc,appeal:xc,tourists:yc}),g(null),C([]),A(!1),_(Ss),G(null),U(null)}},[B,st]);Xt.useEffect(()=>{At(!0)},[]),Xt.useEffect(()=>{if(!T||I)return;const tt=setInterval(()=>{!T||I||_(ot=>ot<=0?l.funds>=s_?(K(),Ss):(B(`AI 플래너: 자금이 $${s_} 미만이라 계획을 보류합니다. (현재 $${l.funds})`,3e3),Ss):ot-1)},XS);return()=>clearInterval(tt)},[T,I,S,l.funds,K,B]),Xt.useEffect(()=>{if(x)return;const ot=setInterval(()=>{let Lt=i,zt=[...i],Ot=[];const Ft=zt.filter(yt=>yt.type===oe.FIRE_STATION&&!yt.isOnFire);let F={};Ft.forEach(yt=>F[yt.id]=0),zt=zt.map(yt=>{if(yt.isOnFire&&yt.fireHealth>0){let gt=yt.fireHealth-SS;for(const wt of Ft){const jt=j(wt);if(F[wt.id]<(jt.maxActiveFiresHandled||1)&&Math.sqrt(Math.pow(yt.gridX-wt.gridX,2)+Math.pow(yt.gridZ-wt.gridZ,2))<=(jt.fireCoverageRadius||0)){gt+=jt.fireFightingPower||0,F[wt.id]++;break}}return gt=Math.min(pa,gt),gt<=0?(Ot.push(`${Cn[yt.type].name} (${yt.gridX},${yt.gridZ})이(가) 화재로 파괴되었습니다!`),{...yt,fireHealth:0}):{...yt,fireHealth:gt}}return yt}),zt.filter(yt=>yt.isOnFire&&yt.fireHealth>0&&yt.fireHealth<pa*.7).forEach(yt=>{if(Math.random()<yS){const gt=[{x:yt.gridX+1,z:yt.gridZ},{x:yt.gridX-1,z:yt.gridZ},{x:yt.gridX,z:yt.gridZ+1},{x:yt.gridX,z:yt.gridZ-1}];for(const wt of gt){const jt=zt.findIndex(kt=>kt.gridX===wt.x&&kt.gridZ===wt.z);if(jt!==-1){const kt=zt[jt],Gt=Cn[kt.type];if(Gt.isFlammable&&!kt.isOnFire){zt[jt]={...kt,isOnFire:!0,fireHealth:pa-1},Ot.push(`화재 발생! ${Gt.name} (${kt.gridX},${kt.gridZ}) 건물로 불이 번졌습니다!`);break}}}}}),zt=zt.map(yt=>{if(yt.isOnFire&&yt.fireHealth<=0)return yt;const gt=Cn[yt.type];if(gt.isFlammable&&!yt.isOnFire&&Math.random()<e_){let wt=!1;for(const jt of Ft){const kt=j(jt);if(F[jt.id]<(kt.maxActiveFiresHandled||1)&&Math.sqrt(Math.pow(yt.gridX-jt.gridX,2)+Math.pow(yt.gridZ-jt.gridZ,2))<=(kt.fireCoverageRadius||0)){wt=!0;break}}if(!wt||Ft.length===0)return Ot.push(`화재 발생! ${gt.name} (${yt.gridX},${yt.gridZ}) 건물에 불이 났습니다!`),{...yt,isOnFire:!0,fireHealth:pa-1};if(Math.random()<e_/2)return Ot.push(`화재 발생! ${gt.name} (${yt.gridX},${yt.gridZ}) 건물에 불이 났습니다! (소방서 관할)`),{...yt,isOnFire:!0,fireHealth:pa-1}}return yt}),s(zt);const $t=st(zt,l),ye=l.tourists*mS,Mt=l.population*t_+ye,Wt=Mt-$t.totalMaintenanceCost,Ct=l.funds+Wt;let Ht=0;const ce=$t.waterDemand<=$t.waterCapacity,N=$t.healthLevel>Sc,E=$t.safetyLevel>Mc,et=$t.educationLevel>=ws,ut=$t.pollutionLevel<qo+20;if(l.population<$t.totalResidentialCapacity&&ce&&N&&E&&et&&ut){let yt=0;$t.happinessScoreForGrowthConsideration>80?yt=.06:$t.happinessScoreForGrowthConsideration>60?yt=.04:$t.happinessScoreForGrowthConsideration>40&&(yt=.02),Ht=Math.floor(l.population*yt+1)+Math.floor($t.totalResidentialCapacity*.005),$t.appeal>70&&(Ht+=Math.floor($t.tourists*.01))}let _t=0;$t.happinessScoreForGrowthConsideration<25&&(_t=Math.max(_t,.06)),$t.happinessScoreForGrowthConsideration<40&&(_t=Math.max(_t,.03)),ce||(_t=Math.max(_t,.08)),N||(_t=Math.max(_t,.06)),E||(_t=Math.max(_t,.07)),et||(_t=Math.max(_t,.04)),!ut&&$t.pollutionLevel>75&&(_t=Math.max(_t,.05)),_t>0&&(Ht-=Math.floor(l.population*_t+1));const pt=l.population+Ht;Ht>0&&pt>$t.totalJobsProvided*1.25&&(Ht=Math.max(0,Ht-Math.floor((pt-$t.totalJobsProvided*1.25)/2)));let te=l.population+Ht;te=Math.min(te,$t.totalResidentialCapacity),te=Math.max(0,te);const Bt=zt.filter(yt=>yt.isOnFire&&yt.fireHealth<=0).length-Lt.filter(yt=>yt.isOnFire&&yt.fireHealth<=0).length;Ot.length>0?Ot.forEach((yt,gt)=>setTimeout(()=>B(yt,4e3),gt*500)):!T&&(l.month%2===0||Wt!==0||Bt>0)&&B(`월별 수입: $${l.population*t_} (세금) + $${ye} (관광) = $${Mt}. 지출: $${$t.totalMaintenanceCost}. 순이익: $${Wt}`,4500);const Zt={...l,...$t,funds:Ct,population:te,month:l.month+1,happiness:$t.happinessScoreForGrowthConsideration};if(c(Zt),C(yt=>{const gt=[...yt,{...Zt}];return gt.length>gv?gt.slice(gt.length-gv):gt}),p){const yt=zt.find(gt=>gt.id===p.id);yt?yt.isOnFire&&yt.fireHealth<=0?g(null):g(yt):g(null)}},vv);return()=>clearInterval(ot)},[x,i,l,st,B,j,p,T]),Xt.useEffect(()=>{const tt=st(i,l);c(ot=>({...ot,powerCapacity:tt.powerCapacity,powerDemand:tt.powerDemand,waterCapacity:tt.waterCapacity,waterDemand:tt.waterDemand,happiness:tt.happinessScoreForGrowthConsideration,healthLevel:tt.healthLevel,safetyLevel:tt.safetyLevel,educationLevel:tt.educationLevel,pollutionLevel:tt.pollutionLevel,appeal:tt.appeal,tourists:tt.tourists}))},[i,l.population,l.funds,l.month,st]),Xt.useEffect(()=>{if(h&&!h.startsWith("AI 플래너가 도시 계획")&&!h.startsWith("AI:")&&!(h.includes("화재")||h.includes("파괴"))){const ot=setTimeout(()=>{d(null)},3e3);return()=>clearTimeout(ot)}},[h]);const Dt=Xt.useCallback(tt=>{t(tt),g(null),tt!==oe.NONE?B(`선택됨: ${Cn[tt].name}`):B("철거 모드 선택됨 (오른쪽 클릭으로 철거)")},[B]),z=Xt.useCallback((tt,ot)=>{if(!r||r===oe.NONE){B("먼저 건물 유형을 선택하세요.");return}if(i.find(Ft=>Ft.gridX===tt&&Ft.gridZ===ot)){B("이 칸은 이미 사용 중입니다.");return}if(r===oe.ROAD&&!P(tt,ot,i,[])){B("도로는 1차선으로만 건설할 수 있습니다. (2x2 도로 블록 형성 불가)",3500);return}const zt=Cn[r];if(l.funds<zt.cost){B("자금이 부족합니다!");return}const Ot={id:`${Date.now()}-${tt}-${ot}`,type:r,gridX:tt,gridZ:ot,level:wi,isOnFire:!1,fireHealth:pa};s(Ft=>[...Ft,Ot]),c(Ft=>({...Ft,funds:Ft.funds-zt.cost})),B(`${zt.name} 건설 완료. 비용: $${zt.cost}`),r===oe.POWER_PLANT&&T&&(G({x:tt,z:ot}),U("PLAYER"),_(1),B(`AI 플래너: 새로운 발전소 (${tt},${ot}) 주변으로 개발을 집중합니다.`,3500))},[r,i,l.funds,B,T,P]),rt=Xt.useCallback((tt,ot)=>{const Lt=i.find(zt=>zt.gridX===tt&&zt.gridZ===ot);if(Lt){const zt=Cn[Lt.type],Ot=Lt.isOnFire&&Lt.fireHealth<pa*.5?0:Math.floor(zt.cost*.3);s(Ft=>Ft.filter(F=>F.id!==Lt.id)),c(Ft=>({...Ft,funds:Ft.funds+Ot})),B(`${zt.name} 철거됨. ${Ot>0?`환급: $${Ot}`:"환급 없음."}`),(p==null?void 0:p.id)===Lt.id&&g(null),D&&D.x===tt&&D.z===ot&&Lt.type===oe.POWER_PLANT&&(G(null),U(null),B("AI 플래너: 집중 개발 대상 발전소가 철거되어 일반 계획 모드로 전환합니다.",3e3))}else B("철거할 건물이 없습니다.")},[i,B,p,l.funds,D]),Et=Xt.useCallback(tt=>{if(tt&&tt.isOnFire&&tt.fireHealth<=0){B("파괴된 건물은 선택할 수 없습니다."),g(null);return}g(tt),t(null)},[B]),Q=Xt.useCallback(tt=>{const ot=i.find(Ot=>Ot.id===tt);if(!ot){B("업그레이드할 건물을 찾을 수 없습니다.");return}if(ot.isOnFire&&ot.fireHealth>0){B("불타는 건물은 업그레이드할 수 없습니다.");return}if(ot.isOnFire&&ot.fireHealth<=0){B("파괴된 건물은 업그레이드할 수 없습니다.");return}const Lt=Cn[ot.type];if(!Lt.upgrades||ot.level-wi>=Lt.upgrades.length){B("더 이상 업그레이드할 수 없습니다.");return}const zt=Lt.upgrades[ot.level-wi];if(l.funds<zt.cost){B("업그레이드 자금이 부족합니다!");return}s(Ot=>Ot.map(Ft=>Ft.id===tt?{...Ft,level:Ft.level+1}:Ft)),c(Ot=>({...Ot,funds:Ot.funds-zt.cost})),B(`${Lt.name}이(가) ${zt.name}(으)로 업그레이드되었습니다. 비용: $${zt.cost}`),g(Ot=>Ot&&Ot.id===tt?{...Ot,level:Ot.level+1}:Ot)},[i,l.funds,B]),vt=Xt.useCallback(()=>{M(tt=>(B(tt?"게임 재개됨":"게임 일시정지됨",2e3),!tt))},[B]),Pt=Xt.useCallback(()=>{A(tt=>{const ot=!tt;return ot?(B("AI 위임 모드 활성화됨. AI가 도시 계획을 시작합니다. 이 모드는 실험 단계입니다.",3e3),_(1)):(B("AI 위임 모드 비활성화됨.",2e3),O(!1),G(null),U(null)),ot})},[B]),Rt=Xt.useCallback(()=>{L(tt=>!tt)},[]);return Z.jsxs("div",{className:"flex flex-col h-screen bg-gray-800 text-white",children:[Z.jsx(MR,{stats:l,isPaused:x,isDelegationActive:T,isAiThinking:I}),Z.jsxs("div",{className:"fixed top-16 right-4 z-30 flex items-center space-x-2",children:[Z.jsx("button",{onClick:Pt,title:T?"AI 위임 모드 비활성화":"AI 위임 모드 활성화","aria-label":T?"Deactivate AI Delegation":"Activate AI Delegation",className:`action-button text-white ${T?"bg-teal-500 hover:bg-teal-600 focus:ring-teal-400":"bg-gray-600 hover:bg-gray-500 focus:ring-gray-400"}`,children:I?Z.jsxs("svg",{className:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Z.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Z.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Z.jsx("path",{fillRule:"evenodd",d:"M7 3.5A1.5 1.5 0 018.5 2h3A1.5 1.5 0 0113 3.5v1.259a4.502 4.502 0 00-2-.5H9a4.502 4.502 0 00-2 .5V3.5zM4.043 6.339A5.001 5.001 0 019 4h2a5.001 5.001 0 014.957 2.339l.344.687A1 1 0 0115.5 8H14a1 1 0 01-1-1v-.687a3 3 0 00-2.043-2.812H9.043A3 3 0 007 6.313V7a1 1 0 01-1 1H4.5a1 1 0 01-.801-.375l-.344-.687zM15 9.5a1.5 1.5 0 011.5 1.5v4.065A2.435 2.435 0 0114.065 17H5.935A2.435 2.435 0 013.5 15.065V11A1.5 1.5 0 015 9.5h10z",clipRule:"evenodd"})})}),Z.jsx("button",{onClick:vt,title:x?"게임 재개":"게임 일시정지","aria-label":x?"Resume Game":"Pause Game",className:`action-button text-white ${x?"bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400":"bg-purple-600 hover:bg-purple-700 focus:ring-purple-500"}`,children:x?Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 16 16",children:Z.jsx("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"})}):Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 16 16",children:Z.jsx("path",{d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"})})}),Z.jsx("button",{onClick:()=>At(!1),title:"게임 불러오기","aria-label":"Load Game",className:"action-button bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",children:Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})}),Z.jsx("button",{onClick:q,title:"게임 저장하기","aria-label":"Save Game",className:"action-button bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",children:Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 4v16h14V8.5L14.5 4H5zM15 4v5h5m-9 7h4"})})}),Z.jsx("button",{onClick:Rt,title:"통계 그래프 보기","aria-label":"Show Statistics Graph",className:"action-button bg-pink-600 hover:bg-pink-700 text-white focus:ring-pink-500",children:Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:Z.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7 12l3-3 3 3 4-4M8 20V10"})})}),Z.jsx(TR,{})]}),h&&Z.jsx("div",{className:`absolute top-20 left-1/2 -translate-x-1/2 text-white p-3 rounded-md shadow-lg z-50 transition-opacity duration-300 ${h.includes("화재")||h.includes("파괴")?"bg-red-700 animate-pulse":h.startsWith("AI 플래너가")||h.startsWith("AI:")?"bg-cyan-600":"bg-indigo-600 animate-pulseOnce"}`,style:{animation:h.includes("화재")||h.includes("파괴")?"pulse 2s infinite":h.startsWith("AI 플래너가 도시 계획 중")||h.startsWith("AI:")?"":"pulseOnce 0.5s ease-out forwards"},children:h}),Z.jsxs("div",{className:"flex-grow relative",children:[Z.jsx(yR,{ref:v,gridSize:bi,cellSize:pS,buildings:i,selectedBuildingType:r,onPlaceBuilding:z,onDemolishBuilding:rt,onSelectBuildingForInfo:Et,selectedBuildingForInfo:p,getBuildingCurrentProps:j}),p&&Z.jsx(ER,{building:p,buildingProps:j(p),baseBuildingProps:Cn[p.type],onUpgrade:Q,onClose:()=>g(null),currentFunds:l.funds})]}),R&&V.length>0&&Z.jsx(bR,{history:V,onClose:Rt}),R&&V.length===0&&Z.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4",onClick:Rt,role:"dialog","aria-modal":"true",children:Z.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full text-white border border-gray-700 animate-modalShow",onClick:tt=>tt.stopPropagation(),children:[Z.jsx("h2",{className:"text-xl font-semibold text-center text-yellow-400 mb-4",children:"통계 데이터 없음"}),Z.jsx("p",{className:"text-gray-300 text-center mb-6",children:"아직 그래프로 표시할 만큼의 시간 경과 데이터가 수집되지 않았습니다. 게임을 잠시 진행한 후 다시 시도해 주세요."}),Z.jsx("button",{onClick:Rt,className:"w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-md transition-colors",children:"알겠습니다"})]})}),Z.jsx(SR,{onSelectBuilding:Dt,selectedBuildingType:r,buildingProperties:Cn,nonSelectableBuildingTypes:WS})]})},cp=document.createElement("style");cp.type="text/css";cp.innerText=`
@keyframes pulseOnce {
  0% { transform: translate(-50%, 0) scale(0.95); opacity: 0.7; }
  50% { transform: translate(-50%, 0) scale(1.05); opacity: 1; }
  100% { transform: translate(-50%, 0) scale(1); opacity: 1; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, 0) scale(1.05); }
}
@keyframes modalShow {
  0% { transform: scale(0.95) translateY(10px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}
.animate-modalShow {
  animation: modalShow 0.2s ease-out forwards;
}
.action-button {
  padding: 0.75rem; /* p-3 */
  border-radius: 9999px; /* rounded-full */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* shadow-lg */
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.action-button:hover {
  transform: scale(1.10);
}
.action-button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #1a202c; 
}
.action-button.bg-blue-600:focus { --tw-ring-color: #3b82f6; } 
.action-button.bg-green-600:focus { --tw-ring-color: #16a34a; } 
.action-button.bg-purple-600:focus { --tw-ring-color: #9333ea; }
.action-button.bg-yellow-500:focus { --tw-ring-color: #f59e0b; }
.action-button.bg-teal-500:focus { --tw-ring-color: #14b8a6; }
.action-button.bg-pink-600:focus { --tw-ring-color: #ec4899; } /* Added for graph button */
.action-button.bg-gray-600:focus { --tw-ring-color: #6b7280; }

/* Styles for Graph Tooltip */
.graph-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  pointer-events: none; /* Important to allow mouse events to pass through to SVG */
  transform: translate(-50%, -100%); /* Position above the cursor */
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 100;
}

/* Styles for Graph Modal Checkboxes */
.graph-checkbox-label {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  margin: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.85rem;
}
.graph-checkbox-label:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.graph-checkbox-label input[type="checkbox"] {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  accent-color: #8b5cf6; /* Tailwind purple-500 */
}

.graph-checkbox-label input[type="checkbox"]:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #4338ca; /* Tailwind indigo-700 */
}


`;document.head.appendChild(cp);const Kv=document.getElementById("root");if(!Kv)throw new Error("Could not find root element to mount to");const RR=dS.createRoot(Kv);RR.render(Z.jsx(sS.StrictMode,{children:Z.jsx(AR,{})}));
