function gS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l_={exports:{}},Iu={},u_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),vS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),wS=Symbol.for("react.strict_mode"),ES=Symbol.for("react.profiler"),TS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),SS=Symbol.for("react.forward_ref"),RS=Symbol.for("react.suspense"),AS=Symbol.for("react.memo"),CS=Symbol.for("react.lazy"),eg=Symbol.iterator;function PS(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,d_={};function gs(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f_(){}f_.prototype=gs.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}var of=sf.prototype=new f_;of.constructor=sf;h_(of,gs.prototype);of.isPureReactComponent=!0;var tg=Array.isArray,p_=Object.prototype.hasOwnProperty,af={current:null},m_={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p_.call(e,r)&&!m_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xo,type:t,key:s,ref:o,props:i,_owner:af.current}}function kS(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function NS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NS(""+t.key):e.toString(36)}function ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xo:case vS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Fc(o,0):r,tg(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),ol(i,e,n,"",function(c){return c})):i!=null&&(lf(i)&&(i=kS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Fc(s,l);o+=ol(s,e,n,u,i)}else if(u=PS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Fc(s,l++),o+=ol(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var r=[],i=0;return ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},al={transition:null},OS={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:al,ReactCurrentOwner:af};function y_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=gs;te.Fragment=_S;te.Profiler=ES;te.PureComponent=sf;te.StrictMode=wS;te.Suspense=RS;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;te.act=y_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=af.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)p_.call(e,u)&&!m_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Xo,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TS,_context:t},t.Consumer=t};te.createElement=g_;te.createFactory=function(t){var e=g_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:SS,render:t}};te.isValidElement=lf;te.lazy=function(t){return{$$typeof:CS,_payload:{_status:-1,_result:t},_init:xS}};te.memo=function(t,e){return{$$typeof:AS,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};te.unstable_act=y_;te.useCallback=function(t,e){return dt.current.useCallback(t,e)};te.useContext=function(t){return dt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};te.useEffect=function(t,e){return dt.current.useEffect(t,e)};te.useId=function(){return dt.current.useId()};te.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return dt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};te.useRef=function(t){return dt.current.useRef(t)};te.useState=function(t){return dt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return dt.current.useTransition()};te.version="18.3.1";u_.exports=te;var V=u_.exports;const DS=yS(V),bS=gS({__proto__:null,default:DS},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=V,VS=Symbol.for("react.element"),MS=Symbol.for("react.fragment"),FS=Object.prototype.hasOwnProperty,US=LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jS={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FS.call(e,r)&&!jS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VS,type:t,key:s,ref:o,props:i,_owner:US.current}}Iu.Fragment=MS;Iu.jsx=v_;Iu.jsxs=v_;l_.exports=Iu;var N=l_.exports,__={exports:{}},bt={},w_={exports:{}},E_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var Y=$.length;$.push(G);e:for(;0<Y;){var me=Y-1>>>1,he=$[me];if(0<i(he,G))$[me]=G,$[Y]=he,Y=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],Y=$.pop();if(Y!==G){$[0]=Y;e:for(var me=0,he=$.length,Pe=he>>>1;me<Pe;){var yn=2*(me+1)-1,vn=$[yn],_n=yn+1,wn=$[_n];if(0>i(vn,Y))_n<he&&0>i(wn,vn)?($[me]=wn,$[_n]=Y,me=_n):($[me]=vn,$[yn]=Y,me=yn);else if(_n<he&&0>i(wn,Y))$[me]=wn,$[_n]=Y,me=_n;else break e}}return G}function i($,G){var Y=$.sortIndex-G.sortIndex;return Y!==0?Y:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,E=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=$)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function O($){if(A=!1,S($),!E)if(n(u)!==null)E=!0,fe(M);else{var G=n(c);G!==null&&pt(O,G.startTime-$)}}function M($,G){E=!1,A&&(A=!1,T(y),y=-1),w=!0;var Y=m;try{for(S(G),p=n(u);p!==null&&(!(p.expirationTime>G)||$&&!k());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var he=me(p.expirationTime<=G);G=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),S(G)}else r(u);p=n(u)}if(p!==null)var Pe=!0;else{var yn=n(c);yn!==null&&pt(O,yn.startTime-G),Pe=!1}return Pe}finally{p=null,m=Y,w=!1}}var U=!1,I=null,y=-1,_=5,R=-1;function k(){return!(t.unstable_now()-R<_)}function x(){if(I!==null){var $=t.unstable_now();R=$;var G=!0;try{G=I(!0,$)}finally{G?C():(U=!1,I=null)}}else U=!1}var C;if(typeof v=="function")C=function(){v(x)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,gn=se.port2;se.port1.onmessage=x,C=function(){gn.postMessage(null)}}else C=function(){P(x,0)};function fe($){I=$,U||(U=!0,C())}function pt($,G){y=P(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){E||w||(E=!0,fe(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var Y=m;m=G;try{return $()}finally{m=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=m;m=$;try{return G()}finally{m=Y}},t.unstable_scheduleCallback=function($,G,Y){var me=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?me+Y:me):Y=me,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Y+he,$={id:d++,callback:G,priorityLevel:$,startTime:Y,expirationTime:he,sortIndex:-1},Y>me?($.sortIndex=Y,e(c,$),n(u)===null&&$===n(c)&&(A?(T(y),y=-1):A=!0,pt(O,Y-me))):($.sortIndex=he,e(u,$),E||w||(E=!0,fe(M))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var G=m;return function(){var Y=m;m=G;try{return $.apply(this,arguments)}finally{m=Y}}}})(E_);w_.exports=E_;var BS=w_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS=V,Dt=BS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T_=new Set,Io={};function ui(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Io[t]=e,t=0;t<e.length;t++)T_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nh=Object.prototype.hasOwnProperty,$S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rg={},ig={};function qS(t){return Nh.call(ig,t)?!0:Nh.call(rg,t)?!1:$S.test(t)?ig[t]=!0:(rg[t]=!0,!1)}function HS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WS(t,e,n,r){if(e===null||typeof e>"u"||HS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,cf);Ge[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,cf);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,cf);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WS(e,n,i,r)&&(n=null),r||i===null?qS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=zS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),sg=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=sg&&t[sg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Uc;function Js(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var jc=!1;function Bc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function KS(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=Bc(t.type,!1),t;case 11:return t=Bc(t.type.render,!1),t;case 1:return t=Bc(t.type,!0),t;default:return""}}function bh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case ki:return"Portal";case xh:return"Profiler";case df:return"StrictMode";case Oh:return"Suspense";case Dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S_:return(t.displayName||"Context")+".Consumer";case I_:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:bh(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return bh(t(e))}catch{}}return null}function GS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bh(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QS(t){var e=A_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=QS(t))}function C_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P_(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Vh(t,e){P_(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mh(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mh(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Xs(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function k_(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,x_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function So(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YS=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){YS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function O_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function D_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=O_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JS=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jh(t,e){if(e){if(JS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $h=null,qi=null,Hi=null;function cg(t){if(t=ta(t)){if(typeof $h!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Pu(e),$h(t.stateNode,t.type,e))}}function b_(t){qi?Hi?Hi.push(t):Hi=[t]:qi=t}function L_(){if(qi){var t=qi,e=Hi;if(Hi=qi=null,cg(t),e)for(t=0;t<e.length;t++)cg(e[t])}}function V_(t,e){return t(e)}function M_(){}var zc=!1;function F_(t,e,n){if(zc)return t(e,n);zc=!0;try{return V_(t,e,n)}finally{zc=!1,(qi!==null||Hi!==null)&&(M_(),L_())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var qh=!1;if(On)try{var $s={};Object.defineProperty($s,"passive",{get:function(){qh=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{qh=!1}function XS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ao=!1,Nl=null,xl=!1,Hh=null,ZS={onError:function(t){ao=!0,Nl=t}};function e1(t,e,n,r,i,s,o,l,u){ao=!1,Nl=null,XS.apply(ZS,arguments)}function t1(t,e,n,r,i,s,o,l,u){if(e1.apply(this,arguments),ao){if(ao){var c=Nl;ao=!1,Nl=null}else throw Error(B(198));xl||(xl=!0,Hh=c)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hg(t){if(ci(t)!==t)throw Error(B(188))}function n1(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hg(i),t;if(s===r)return hg(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function j_(t){return t=n1(t),t!==null?B_(t):null}function B_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B_(t);if(e!==null)return e;t=t.sibling}return null}var z_=Dt.unstable_scheduleCallback,dg=Dt.unstable_cancelCallback,r1=Dt.unstable_shouldYield,i1=Dt.unstable_requestPaint,Ne=Dt.unstable_now,s1=Dt.unstable_getCurrentPriorityLevel,gf=Dt.unstable_ImmediatePriority,$_=Dt.unstable_UserBlockingPriority,Ol=Dt.unstable_NormalPriority,o1=Dt.unstable_LowPriority,q_=Dt.unstable_IdlePriority,Su=null,on=null;function a1(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Su,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:c1,l1=Math.log,u1=Math.LN2;function c1(t){return t>>>=0,t===0?32:31-(l1(t)/u1|0)|0}var Ua=64,ja=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zs(l):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function h1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=h1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function H_(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function f1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function W_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K_,vf,G_,Q_,Y_,Kh=!1,Ba=[],or=null,ar=null,lr=null,Ao=new Map,Co=new Map,Yn=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ta(e),e!==null&&vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function m1(t,e,n,r,i){switch(e){case"focusin":return or=qs(or,t,e,n,r,i),!0;case"dragenter":return ar=qs(ar,t,e,n,r,i),!0;case"mouseover":return lr=qs(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,qs(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Co.set(s,qs(Co.get(s)||null,t,e,n,r,i)),!0}return!1}function J_(t){var e=jr(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=U_(n),e!==null){t.blockedOn=e,Y_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zh=r,n.target.dispatchEvent(r),zh=null}else return e=ta(n),e!==null&&vf(e),t.blockedOn=n,!1;e.shift()}return!0}function pg(t,e,n){ll(t)&&n.delete(e)}function g1(){Kh=!1,or!==null&&ll(or)&&(or=null),ar!==null&&ll(ar)&&(ar=null),lr!==null&&ll(lr)&&(lr=null),Ao.forEach(pg),Co.forEach(pg)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Kh||(Kh=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,g1)))}function Po(t){function e(i){return Hs(i,t)}if(0<Ba.length){Hs(Ba[0],t);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Hs(or,t),ar!==null&&Hs(ar,t),lr!==null&&Hs(lr,t),Ao.forEach(e),Co.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)J_(n),n.blockedOn===null&&Yn.shift()}var Wi=jn.ReactCurrentBatchConfig,bl=!0;function y1(t,e,n,r){var i=de,s=Wi.transition;Wi.transition=null;try{de=1,_f(t,e,n,r)}finally{de=i,Wi.transition=s}}function v1(t,e,n,r){var i=de,s=Wi.transition;Wi.transition=null;try{de=4,_f(t,e,n,r)}finally{de=i,Wi.transition=s}}function _f(t,e,n,r){if(bl){var i=Gh(t,e,n,r);if(i===null)Zc(t,e,r,Ll,n),fg(t,r);else if(m1(i,t,e,n,r))r.stopPropagation();else if(fg(t,r),e&4&&-1<p1.indexOf(t)){for(;i!==null;){var s=ta(i);if(s!==null&&K_(s),s=Gh(t,e,n,r),s===null&&Zc(t,e,r,Ll,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zc(t,e,r,null,n)}}var Ll=null;function Gh(t,e,n,r){if(Ll=null,t=mf(r),t=jr(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function X_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s1()){case gf:return 1;case $_:return 4;case Ol:case o1:return 16;case q_:return 536870912;default:return 16}default:return 16}}var nr=null,wf=null,ul=null;function Z_(){if(ul)return ul;var t,e=wf,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ul=i.slice(t,1<r?1-r:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function mg(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:mg,this.isPropagationStopped=mg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Lt(ys),ea=Ie({},ys,{view:0,detail:0}),_1=Lt(ea),qc,Hc,Ws,Ru=Ie({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(qc=t.screenX-Ws.screenX,Hc=t.screenY-Ws.screenY):Hc=qc=0,Ws=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),gg=Lt(Ru),w1=Ie({},Ru,{dataTransfer:0}),E1=Lt(w1),T1=Ie({},ea,{relatedTarget:0}),Wc=Lt(T1),I1=Ie({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),S1=Lt(I1),R1=Ie({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A1=Lt(R1),C1=Ie({},ys,{data:0}),yg=Lt(C1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N1[t])?!!e[t]:!1}function Tf(){return x1}var O1=Ie({},ea,{key:function(t){if(t.key){var e=P1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D1=Lt(O1),b1=Ie({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vg=Lt(b1),L1=Ie({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),V1=Lt(L1),M1=Ie({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),F1=Lt(M1),U1=Ie({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j1=Lt(U1),B1=[9,13,27,32],If=On&&"CompositionEvent"in window,lo=null;On&&"documentMode"in document&&(lo=document.documentMode);var z1=On&&"TextEvent"in window&&!lo,e0=On&&(!If||lo&&8<lo&&11>=lo),_g=" ",wg=!1;function t0(t,e){switch(t){case"keyup":return B1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function $1(t,e){switch(t){case"compositionend":return n0(e);case"keypress":return e.which!==32?null:(wg=!0,_g);case"textInput":return t=e.data,t===_g&&wg?null:t;default:return null}}function q1(t,e){if(xi)return t==="compositionend"||!If&&t0(t,e)?(t=Z_(),ul=wf=nr=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e0&&e.locale!=="ko"?null:e.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H1[t.type]:e==="textarea"}function r0(t,e,n,r){b_(r),e=Vl(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,ko=null;function W1(t){p0(t,0)}function Au(t){var e=bi(t);if(C_(e))return t}function K1(t,e){if(t==="change")return e}var i0=!1;if(On){var Kc;if(On){var Gc="oninput"in document;if(!Gc){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Gc=typeof Tg.oninput=="function"}Kc=Gc}else Kc=!1;i0=Kc&&(!document.documentMode||9<document.documentMode)}function Ig(){uo&&(uo.detachEvent("onpropertychange",s0),ko=uo=null)}function s0(t){if(t.propertyName==="value"&&Au(ko)){var e=[];r0(e,ko,t,mf(t)),F_(W1,e)}}function G1(t,e,n){t==="focusin"?(Ig(),uo=e,ko=n,uo.attachEvent("onpropertychange",s0)):t==="focusout"&&Ig()}function Q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(ko)}function Y1(t,e){if(t==="click")return Au(e)}function J1(t,e){if(t==="input"||t==="change")return Au(e)}function X1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:X1;function No(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nh.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=Sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function o0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a0(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z1(t){var e=a0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o0(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rg(n,s);var o=Rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eR=On&&"documentMode"in document&&11>=document.documentMode,Oi=null,Qh=null,co=null,Yh=!1;function Ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yh||Oi==null||Oi!==kl(r)||(r=Oi,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&No(co,r)||(co=r,r=Vl(Qh,"onSelect"),0<r.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},Qc={},l0={};On&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Cu(t){if(Qc[t])return Qc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l0)return Qc[t]=e[n];return t}var u0=Cu("animationend"),c0=Cu("animationiteration"),h0=Cu("animationstart"),d0=Cu("transitionend"),f0=new Map,Cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){f0.set(t,e),ui(e,[t])}for(var Yc=0;Yc<Cg.length;Yc++){var Jc=Cg[Yc],tR=Jc.toLowerCase(),nR=Jc[0].toUpperCase()+Jc.slice(1);Rr(tR,"on"+nR)}Rr(u0,"onAnimationEnd");Rr(c0,"onAnimationIteration");Rr(h0,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(d0,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rR=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,t1(r,e,void 0,t),t.currentTarget=null}function p0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Pg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Pg(i,l,c),s=u}}}if(xl)throw t=Hh,xl=!1,Hh=null,t}function ve(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var r=t+"__bubble";n.has(r)||(m0(e,t,2,!1),n.add(r))}function Xc(t,e,n){var r=0;e&&(r|=4),m0(n,t,r,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[qa]){t[qa]=!0,T_.forEach(function(n){n!=="selectionchange"&&(rR.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,Xc("selectionchange",!1,e))}}function m0(t,e,n,r){switch(X_(e)){case 1:var i=y1;break;case 4:i=v1;break;default:i=_f}n=i.bind(null,e,n,t),i=void 0,!qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}F_(function(){var c=s,d=mf(n),p=[];e:{var m=f0.get(t);if(m!==void 0){var w=Ef,E=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":w=D1;break;case"focusin":E="focus",w=Wc;break;case"focusout":E="blur",w=Wc;break;case"beforeblur":case"afterblur":w=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=V1;break;case u0:case c0:case h0:w=S1;break;case d0:w=F1;break;case"scroll":w=_1;break;case"wheel":w=j1;break;case"copy":case"cut":case"paste":w=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=vg}var A=(e&4)!==0,P=!A&&t==="scroll",T=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,T!==null&&(O=Ro(v,T),O!=null&&A.push(Oo(v,O,S)))),P)break;v=v.return}0<A.length&&(m=new w(m,E,null,n,d),p.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==zh&&(E=n.relatedTarget||n.fromElement)&&(jr(E)||E[Dn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?jr(E):null,E!==null&&(P=ci(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(A=gg,O="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=vg,O="onPointerLeave",T="onPointerEnter",v="pointer"),P=w==null?m:bi(w),S=E==null?m:bi(E),m=new A(O,v+"leave",w,n,d),m.target=P,m.relatedTarget=S,O=null,jr(d)===c&&(A=new A(T,v+"enter",E,n,d),A.target=S,A.relatedTarget=P,O=A),P=O,w&&E)t:{for(A=w,T=E,v=0,S=A;S;S=Ti(S))v++;for(S=0,O=T;O;O=Ti(O))S++;for(;0<v-S;)A=Ti(A),v--;for(;0<S-v;)T=Ti(T),S--;for(;v--;){if(A===T||T!==null&&A===T.alternate)break t;A=Ti(A),T=Ti(T)}A=null}else A=null;w!==null&&kg(p,m,w,A,!1),E!==null&&P!==null&&kg(p,P,E,A,!0)}}e:{if(m=c?bi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var M=K1;else if(Eg(m))if(i0)M=J1;else{M=Q1;var U=G1}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=Y1);if(M&&(M=M(t,c))){r0(p,M,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Mh(m,"number",m.value)}switch(U=c?bi(c):window,t){case"focusin":(Eg(U)||U.contentEditable==="true")&&(Oi=U,Qh=c,co=null);break;case"focusout":co=Qh=Oi=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Ag(p,n,d);break;case"selectionchange":if(eR)break;case"keydown":case"keyup":Ag(p,n,d)}var I;if(If)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else xi?t0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(e0&&n.locale!=="ko"&&(xi||y!=="onCompositionStart"?y==="onCompositionEnd"&&xi&&(I=Z_()):(nr=d,wf="value"in nr?nr.value:nr.textContent,xi=!0)),U=Vl(c,y),0<U.length&&(y=new yg(y,t,null,n,d),p.push({event:y,listeners:U}),I?y.data=I:(I=n0(n),I!==null&&(y.data=I)))),(I=z1?$1(t,n):q1(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(d=new yg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}p0(p,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Oo(t,s,i)),s=Ro(t,e),s!=null&&r.push(Oo(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ro(n,s),u!=null&&o.unshift(Oo(n,u,l))):i||(u=Ro(n,s),u!=null&&o.push(Oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iR=/\r\n?/g,sR=/\u0000|\uFFFD/g;function Ng(t){return(typeof t=="string"?t:""+t).replace(iR,`
`).replace(sR,"")}function Ha(t,e,n){if(e=Ng(e),Ng(t)!==e&&n)throw Error(B(425))}function Ml(){}var Jh=null,Xh=null;function Zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,oR=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,aR=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(lR)}:ed;function lR(t){setTimeout(function(){throw t})}function eh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),rn="__reactFiber$"+vs,Do="__reactProps$"+vs,Dn="__reactContainer$"+vs,td="__reactEvents$"+vs,uR="__reactListeners$"+vs,cR="__reactHandles$"+vs;function jr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Og(t);t!==null;){if(n=t[rn])return n;t=Og(t)}return e}t=n,n=t.parentNode}return null}function ta(t){return t=t[rn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Pu(t){return t[Do]||null}var nd=[],Li=-1;function Ar(t){return{current:t}}function _e(t){0>Li||(t.current=nd[Li],nd[Li]=null,Li--)}function ge(t,e){Li++,nd[Li]=t.current,t.current=e}var _r={},st=Ar(_r),_t=Ar(!1),Jr=_r;function ts(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Fl(){_e(_t),_e(st)}function Dg(t,e,n){if(st.current!==_r)throw Error(B(168));ge(st,e),ge(_t,n)}function g0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,GS(t)||"Unknown",i));return Ie({},n,r)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Jr=st.current,ge(st,t),ge(_t,_t.current),!0}function bg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=g0(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,_e(_t),_e(st),ge(st,t)):_e(_t),ge(_t,n)}var Sn=null,ku=!1,th=!1;function y0(t){Sn===null?Sn=[t]:Sn.push(t)}function hR(t){ku=!0,y0(t)}function Cr(){if(!th&&Sn!==null){th=!0;var t=0,e=de;try{var n=Sn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,ku=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),z_(gf,Cr),i}finally{de=e,th=!1}}return null}var Vi=[],Mi=0,jl=null,Bl=0,Vt=[],Mt=0,Xr=null,Rn=1,An="";function Mr(t,e){Vi[Mi++]=Bl,Vi[Mi++]=jl,jl=t,Bl=e}function v0(t,e,n){Vt[Mt++]=Rn,Vt[Mt++]=An,Vt[Mt++]=Xr,Xr=t;var r=Rn;t=An;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-Gt(e)+i|n<<i|r,An=s+t}else Rn=1<<s|n<<i|r,An=t}function Rf(t){t.return!==null&&(Mr(t,1),v0(t,1,0))}function Af(t){for(;t===jl;)jl=Vi[--Mi],Vi[Mi]=null,Bl=Vi[--Mi],Vi[Mi]=null;for(;t===Xr;)Xr=Vt[--Mt],Vt[Mt]=null,An=Vt[--Mt],Vt[Mt]=null,Rn=Vt[--Mt],Vt[Mt]=null}var kt=null,Ct=null,we=!1,Kt=null;function _0(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Ct=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Rn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Ct=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(we){var e=Ct;if(e){var n=e;if(!Lg(t,e)){if(rd(t))throw Error(B(418));e=ur(n.nextSibling);var r=kt;e&&Lg(t,e)?_0(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(rd(t))throw Error(B(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function Vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Wa(t){if(t!==kt)return!1;if(!we)return Vg(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zh(t.type,t.memoizedProps)),e&&(e=Ct)){if(rd(t))throw w0(),Error(B(418));for(;e;)_0(t,e),e=ur(e.nextSibling)}if(Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=kt?ur(t.stateNode.nextSibling):null;return!0}function w0(){for(var t=Ct;t;)t=ur(t.nextSibling)}function ns(){Ct=kt=null,we=!1}function Cf(t){Kt===null?Kt=[t]:Kt.push(t)}var dR=jn.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mg(t){var e=t._init;return e(t._payload)}function E0(t){function e(T,v){if(t){var S=T.deletions;S===null?(T.deletions=[v],T.flags|=16):S.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=fr(T,v),T.index=0,T.sibling=null,T}function s(T,v,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<v?(T.flags|=2,v):S):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,S,O){return v===null||v.tag!==6?(v=lh(S,T.mode,O),v.return=T,v):(v=i(v,S),v.return=T,v)}function u(T,v,S,O){var M=S.type;return M===Ni?d(T,v,S.props.children,O,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&Mg(M)===v.type)?(O=i(v,S.props),O.ref=Ks(T,v,S),O.return=T,O):(O=yl(S.type,S.key,S.props,null,T.mode,O),O.ref=Ks(T,v,S),O.return=T,O)}function c(T,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=uh(S,T.mode,O),v.return=T,v):(v=i(v,S.children||[]),v.return=T,v)}function d(T,v,S,O,M){return v===null||v.tag!==7?(v=Gr(S,T.mode,O,M),v.return=T,v):(v=i(v,S),v.return=T,v)}function p(T,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lh(""+v,T.mode,S),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return S=yl(v.type,v.key,v.props,null,T.mode,S),S.ref=Ks(T,null,v),S.return=T,S;case ki:return v=uh(v,T.mode,S),v.return=T,v;case Gn:var O=v._init;return p(T,O(v._payload),S)}if(Xs(v)||zs(v))return v=Gr(v,T.mode,S,null),v.return=T,v;Ka(T,v)}return null}function m(T,v,S,O){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:l(T,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:return S.key===M?u(T,v,S,O):null;case ki:return S.key===M?c(T,v,S,O):null;case Gn:return M=S._init,m(T,v,M(S._payload),O)}if(Xs(S)||zs(S))return M!==null?null:d(T,v,S,O,null);Ka(T,S)}return null}function w(T,v,S,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(S)||null,l(v,T,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Va:return T=T.get(O.key===null?S:O.key)||null,u(v,T,O,M);case ki:return T=T.get(O.key===null?S:O.key)||null,c(v,T,O,M);case Gn:var U=O._init;return w(T,v,S,U(O._payload),M)}if(Xs(O)||zs(O))return T=T.get(S)||null,d(v,T,O,M,null);Ka(v,O)}return null}function E(T,v,S,O){for(var M=null,U=null,I=v,y=v=0,_=null;I!==null&&y<S.length;y++){I.index>y?(_=I,I=null):_=I.sibling;var R=m(T,I,S[y],O);if(R===null){I===null&&(I=_);break}t&&I&&R.alternate===null&&e(T,I),v=s(R,v,y),U===null?M=R:U.sibling=R,U=R,I=_}if(y===S.length)return n(T,I),we&&Mr(T,y),M;if(I===null){for(;y<S.length;y++)I=p(T,S[y],O),I!==null&&(v=s(I,v,y),U===null?M=I:U.sibling=I,U=I);return we&&Mr(T,y),M}for(I=r(T,I);y<S.length;y++)_=w(I,T,y,S[y],O),_!==null&&(t&&_.alternate!==null&&I.delete(_.key===null?y:_.key),v=s(_,v,y),U===null?M=_:U.sibling=_,U=_);return t&&I.forEach(function(k){return e(T,k)}),we&&Mr(T,y),M}function A(T,v,S,O){var M=zs(S);if(typeof M!="function")throw Error(B(150));if(S=M.call(S),S==null)throw Error(B(151));for(var U=M=null,I=v,y=v=0,_=null,R=S.next();I!==null&&!R.done;y++,R=S.next()){I.index>y?(_=I,I=null):_=I.sibling;var k=m(T,I,R.value,O);if(k===null){I===null&&(I=_);break}t&&I&&k.alternate===null&&e(T,I),v=s(k,v,y),U===null?M=k:U.sibling=k,U=k,I=_}if(R.done)return n(T,I),we&&Mr(T,y),M;if(I===null){for(;!R.done;y++,R=S.next())R=p(T,R.value,O),R!==null&&(v=s(R,v,y),U===null?M=R:U.sibling=R,U=R);return we&&Mr(T,y),M}for(I=r(T,I);!R.done;y++,R=S.next())R=w(I,T,y,R.value,O),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?y:R.key),v=s(R,v,y),U===null?M=R:U.sibling=R,U=R);return t&&I.forEach(function(x){return e(T,x)}),we&&Mr(T,y),M}function P(T,v,S,O){if(typeof S=="object"&&S!==null&&S.type===Ni&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:e:{for(var M=S.key,U=v;U!==null;){if(U.key===M){if(M=S.type,M===Ni){if(U.tag===7){n(T,U.sibling),v=i(U,S.props.children),v.return=T,T=v;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&Mg(M)===U.type){n(T,U.sibling),v=i(U,S.props),v.ref=Ks(T,U,S),v.return=T,T=v;break e}n(T,U);break}else e(T,U);U=U.sibling}S.type===Ni?(v=Gr(S.props.children,T.mode,O,S.key),v.return=T,T=v):(O=yl(S.type,S.key,S.props,null,T.mode,O),O.ref=Ks(T,v,S),O.return=T,T=O)}return o(T);case ki:e:{for(U=S.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(T,v.sibling),v=i(v,S.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=uh(S,T.mode,O),v.return=T,T=v}return o(T);case Gn:return U=S._init,P(T,v,U(S._payload),O)}if(Xs(S))return E(T,v,S,O);if(zs(S))return A(T,v,S,O);Ka(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,S),v.return=T,T=v):(n(T,v),v=lh(S,T.mode,O),v.return=T,T=v),o(T)):n(T,v)}return P}var rs=E0(!0),T0=E0(!1),zl=Ar(null),$l=null,Fi=null,Pf=null;function kf(){Pf=Fi=$l=null}function Nf(t){var e=zl.current;_e(zl),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){$l=t,Pf=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if($l===null)throw Error(B(308));Fi=t,$l.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Br=null;function xf(t){Br===null?Br=[t]:Br.push(t)}function I0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xf(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,xf(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}function Fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=t,A=l;switch(m=e,w=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){p=E.call(w,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,m=typeof E=="function"?E.call(w,p,m):E,m==null)break e;p=Ie({},p,m);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=p}}function Ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var na={},an=Ar(na),bo=Ar(na),Lo=Ar(na);function zr(t){if(t===na)throw Error(B(174));return t}function Df(t,e){switch(ge(Lo,e),ge(bo,t),ge(an,na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uh(e,t)}_e(an),ge(an,e)}function is(){_e(an),_e(bo),_e(Lo)}function R0(t){zr(Lo.current);var e=zr(an.current),n=Uh(e,t.type);e!==n&&(ge(bo,t),ge(an,n))}function bf(t){bo.current===t&&(_e(an),_e(bo))}var Ee=Ar(0);function Hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nh=[];function Lf(){for(var t=0;t<nh.length;t++)nh[t]._workInProgressVersionPrimary=null;nh.length=0}var dl=jn.ReactCurrentDispatcher,rh=jn.ReactCurrentBatchConfig,Zr=0,Te=null,be=null,je=null,Wl=!1,ho=!1,Vo=0,fR=0;function Ze(){throw Error(B(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function Mf(t,e,n,r,i,s){if(Zr=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?yR:vR,t=n(r,i),ho){s=0;do{if(ho=!1,Vo=0,25<=s)throw Error(B(301));s+=1,je=be=null,e.updateQueue=null,dl.current=_R,t=n(r,i)}while(ho)}if(dl.current=Kl,e=be!==null&&be.next!==null,Zr=0,je=be=Te=null,Wl=!1,e)throw Error(B(300));return t}function Ff(){var t=Vo!==0;return Vo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Te.memoizedState=je=t:je=je.next=t,je}function zt(){if(be===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=je===null?Te.memoizedState:je.next;if(e!==null)je=e,be=t;else{if(t===null)throw Error(B(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},je===null?Te.memoizedState=je=t:je=je.next=t}return je}function Mo(t,e){return typeof e=="function"?e(t):e}function ih(t){var e=zt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Zr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=d,ei|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sh(t){var e=zt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function A0(){}function C0(t,e){var n=Te,r=zt(),i=e(),s=!Yt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Uf(N0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Fo(9,k0.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(B(349));Zr&30||P0(n,e,i)}return i}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,r){e.value=n,e.getSnapshot=r,x0(e)&&O0(t)}function N0(t,e,n){return n(function(){x0(e)&&O0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function O0(t){var e=bn(t,1);e!==null&&Qt(e,t,1,-1)}function jg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=gR.bind(null,Te,t),[e.memoizedState,t]}function Fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function D0(){return zt().memoizedState}function fl(t,e,n,r){var i=nn();Te.flags|=t,i.memoizedState=Fo(1|e,n,void 0,r===void 0?null:r)}function Nu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Vf(r,o.deps)){i.memoizedState=Fo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Fo(1|e,n,s,r)}function Bg(t,e){return fl(8390656,8,t,e)}function Uf(t,e){return Nu(2048,8,t,e)}function b0(t,e){return Nu(4,2,t,e)}function L0(t,e){return Nu(4,4,t,e)}function V0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,V0.bind(null,e,t),n)}function jf(){}function F0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j0(t,e,n){return Zr&21?(Yt(n,e)||(n=H_(),Te.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function pR(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=rh.transition;rh.transition={};try{t(!1),e()}finally{de=n,rh.transition=r}}function B0(){return zt().memoizedState}function mR(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z0(t))$0(e,n);else if(n=I0(t,e,n,r),n!==null){var i=ht();Qt(n,t,r,i),q0(n,e,r)}}function gR(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z0(t))$0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(i.next=i,xf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=I0(t,e,i,r),n!==null&&(i=ht(),Qt(n,t,r,i),q0(n,e,r))}}function z0(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function $0(t,e){ho=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yf(t,n)}}var Kl={readContext:Bt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},yR={readContext:Bt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fl(4194308,4,V0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return fl(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mR.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:jg,useDebugValue:jf,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=jg(!1),e=t[0];return t=pR.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=nn();if(we){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Be===null)throw Error(B(349));Zr&30||P0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bg(N0.bind(null,r,s,t),[t]),r.flags|=2048,Fo(9,k0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Be.identifierPrefix;if(we){var n=An,r=Rn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vR={readContext:Bt,useCallback:F0,useContext:Bt,useEffect:Uf,useImperativeHandle:M0,useInsertionEffect:b0,useLayoutEffect:L0,useMemo:U0,useReducer:ih,useRef:D0,useState:function(){return ih(Mo)},useDebugValue:jf,useDeferredValue:function(t){var e=zt();return j0(e,be.memoizedState,t)},useTransition:function(){var t=ih(Mo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:C0,useId:B0,unstable_isNewReconciler:!1},_R={readContext:Bt,useCallback:F0,useContext:Bt,useEffect:Uf,useImperativeHandle:M0,useInsertionEffect:b0,useLayoutEffect:L0,useMemo:U0,useReducer:sh,useRef:D0,useState:function(){return sh(Mo)},useDebugValue:jf,useDeferredValue:function(t){var e=zt();return be===null?e.memoizedState=t:j0(e,be.memoizedState,t)},useTransition:function(){var t=sh(Mo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:C0,useId:B0,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xu={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=dr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Qt(e,t,i,r),hl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=dr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Qt(e,t,i,r),hl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=dr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(Qt(e,t,r,n),hl(e,t,r))}};function zg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function H0(t,e,n){var r=!1,i=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=wt(e)?Jr:st.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xu.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Of(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=wt(e)?Jr:st.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xu.enqueueReplaceState(i,i.state,null),ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",r=e;do n+=KS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wR=typeof WeakMap=="function"?WeakMap:Map;function W0(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ql||(Ql=!0,vd=r),ld(t,e)},n}function K0(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bR.bind(null,t,e,n),e.then(t,t))}function Hg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var ER=jn.ReactCurrentOwner,vt=!1;function ut(t,e,n,r){e.child=t===null?T0(e,null,n,r):rs(e,t.child,n,r)}function Kg(t,e,n,r,i){n=n.render;var s=e.ref;return Ki(e,i),r=Mf(t,e,n,r,s,i),n=Ff(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(we&&n&&Rf(e),e.flags|=1,ut(t,e,r,i),e.child)}function Gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G0(t,e,s,r,i)):(t=yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function G0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(No(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return ud(t,e,n,r,i)}function Q0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ji,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ji,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(ji,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(ji,At),At|=r;return ut(t,e,i,n),e.child}function Y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,r,i){var s=wt(n)?Jr:st.current;return s=ts(e,s),Ki(e,i),n=Mf(t,e,n,r,s,i),r=Ff(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(we&&r&&Rf(e),e.flags|=1,ut(t,e,n,i),e.child)}function Qg(t,e,n,r,i){if(wt(n)){var s=!0;Ul(e)}else s=!1;if(Ki(e,i),e.stateNode===null)pl(t,e),H0(e,n,r),ad(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=wt(n)?Jr:st.current,c=ts(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&$g(e,o,r,c),Qn=!1;var m=e.memoizedState;o.state=m,ql(e,r,o,i),u=e.memoizedState,l!==r||m!==u||_t.current||Qn?(typeof d=="function"&&(od(e,n,d,r),u=e.memoizedState),(l=Qn||zg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,S0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ht(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=wt(n)?Jr:st.current,u=ts(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&$g(e,o,r,u),Qn=!1,m=e.memoizedState,o.state=m,ql(e,r,o,i);var E=e.memoizedState;l!==p||m!==E||_t.current||Qn?(typeof w=="function"&&(od(e,n,w,r),E=e.memoizedState),(c=Qn||zg(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return cd(t,e,n,r,s,i)}function cd(t,e,n,r,i,s){Y0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bg(e,n,!1),Ln(t,e,s);r=e.stateNode,ER.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&bg(e,n,!0),e.child}function J0(t){var e=t.stateNode;e.pendingContext?Dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dg(t,e.context,!1),Df(t,e.containerInfo)}function Yg(t,e,n,r,i){return ns(),Cf(i),e.flags|=256,ut(t,e,n,r),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function X0(t,e,n){var r=e.pendingProps,i=Ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ee,i&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bu(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=hd,t):Bf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bf(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,r){return r!==null&&Cf(r),rs(e,t.child,null,n),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oh(Error(B(422))),Ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bu({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=hd,s);if(!(e.mode&1))return Ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=oh(s,r,void 0),Ga(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Qt(r,t,i,-1))}return Kf(),r=oh(Error(B(421))),Ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=LR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=ur(i.nextSibling),kt=e,we=!0,Kt=null,t!==null&&(Vt[Mt++]=Rn,Vt[Mt++]=An,Vt[Mt++]=Xr,Rn=t.id,An=t.overflow,Xr=e),e=Bf(e,r.children),e.flags|=4096,e)}function Jg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sd(t.return,e,n)}function ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Z0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jg(t,n,e);else if(t.tag===19)Jg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ah(e,!0,n,null,s);break;case"together":ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IR(t,e,n){switch(e.tag){case 3:J0(e),ns();break;case 5:R0(e);break;case 1:wt(e.type)&&Ul(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?X0(t,e,n):(ge(Ee,Ee.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Z0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Q0(t,e,n)}return Ln(t,e,n)}var ew,fd,tw,nw;ew=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};tw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(an.current);var s=null;switch(n){case"input":i=Lh(t,i),r=Lh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Fh(t,i),r=Fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ml)}jh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SR(t,e,n){var r=e.pendingProps;switch(Af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return wt(e.type)&&Fl(),et(e),null;case 3:return r=e.stateNode,is(),_e(_t),_e(st),Lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Ed(Kt),Kt=null))),fd(t,e),et(e),null;case 5:bf(e);var i=zr(Lo.current);if(n=e.type,t!==null&&e.stateNode!=null)tw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return et(e),null}if(t=zr(an.current),Wa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)ve(eo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":og(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":lg(r,s),ve("invalid",r)}jh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ha(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ha(r.textContent,l,t),i=["children",""+l]):Io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ma(r),ag(r,s,!0);break;case"textarea":Ma(r),ug(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ml)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Do]=r,ew(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)ve(eo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":og(t,r),i=Lh(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ve("invalid",t);break;case"textarea":lg(t,r),i=Fh(t,r),ve("invalid",t);break;default:i=r}jh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?D_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&x_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&So(t,u):typeof u=="number"&&So(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&hf(t,s,u,o))}switch(n){case"input":Ma(t),ag(t,r,!1);break;case"textarea":Ma(t),ug(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)nw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=zr(Lo.current),zr(an.current),Wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ha(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return et(e),null;case 13:if(_e(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Ct!==null&&e.mode&1&&!(e.flags&128))w0(),ns(),e.flags|=98560,s=!1;else if(s=Wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[rn]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else Kt!==null&&(Ed(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ve===0&&(Ve=3):Kf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return is(),fd(t,e),t===null&&xo(e.stateNode.containerInfo),et(e),null;case 10:return Nf(e.type._context),et(e),null;case 17:return wt(e.type)&&Fl(),et(e),null;case 19:if(_e(Ee),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hl(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>os&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return et(e),null}else 2*Ne()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Wf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function RR(t,e){switch(Af(e),e.tag){case 1:return wt(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),_e(_t),_e(st),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(_e(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ee),null;case 4:return is(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var Qa=!1,rt=!1,AR=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function pd(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Xg=!1;function CR(t,e){if(Jh=bl,t=a0(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xh={focusedElem:t,selectionRange:n},bl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,P=E.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Ht(e.type,A),P);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){Ae(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return E=Xg,Xg=!1,E}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pd(e,n,s)}i=i.next}while(i!==r)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rw(t){var e=t.alternate;e!==null&&(t.alternate=null,rw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Do],delete e[td],delete e[uR],delete e[cR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iw(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(r!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var qe=null,Wt=!1;function qn(t,e,n){for(n=n.child;n!==null;)sw(t,e,n),n=n.sibling}function sw(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:rt||Ui(n,e);case 6:var r=qe,i=Wt;qe=null,qn(t,e,n),qe=r,Wt=i,qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?eh(t.parentNode,n):t.nodeType===1&&eh(t,n),Po(t)):eh(qe,n.stateNode));break;case 4:r=qe,i=Wt,qe=n.stateNode.containerInfo,Wt=!0,qn(t,e,n),qe=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pd(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!rt&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,qn(t,e,n),rt=r):qn(t,e,n);break;default:qn(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AR),e.forEach(function(r){var i=VR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Wt=!1;break e;case 3:qe=l.stateNode.containerInfo,Wt=!0;break e;case 4:qe=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(qe===null)throw Error(B(160));sw(s,o,i),qe=null,Wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ow(e,t),e=e.sibling}function ow(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),tn(t),r&4){try{fo(3,t,t.return),Ou(3,t)}catch(A){Ae(t,t.return,A)}try{fo(5,t,t.return)}catch(A){Ae(t,t.return,A)}}break;case 1:qt(e,t),tn(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(qt(e,t),tn(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{So(i,"")}catch(A){Ae(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&P_(i,s),Bh(l,o);var c=Bh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?D_(i,p):d==="dangerouslySetInnerHTML"?x_(i,p):d==="children"?So(i,p):hf(i,d,p,c)}switch(l){case"input":Vh(i,s);break;case"textarea":k_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?$i(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(A){Ae(t,t.return,A)}}break;case 6:if(qt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Ae(t,t.return,A)}}break;case 3:if(qt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(A){Ae(t,t.return,A)}break;case 4:qt(e,t),tn(t);break;case 13:qt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qf=Ne())),r&4&&ey(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||d,qt(e,t),rt=c):qt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,w=m.child,m.tag){case 0:case 11:case 14:case 15:fo(4,m,m.return);break;case 1:Ui(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){Ae(r,n,A)}}break;case 5:Ui(m,m.return);break;case 22:if(m.memoizedState!==null){ny(p);continue}}w!==null?(w.return=m,H=w):ny(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=O_("display",o))}catch(A){Ae(t,t.return,A)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(A){Ae(t,t.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),tn(t),r&4&&ey(t);break;case 21:break;default:qt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var s=Zg(t);yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zg(t);gd(t,l,o);break;default:throw Error(B(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PR(t,e,n){H=t,aw(t)}function aw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Qa;var c=rt;if(Qa=o,(rt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?ry(i):u!==null?(u.return=o,H=u):ry(i);for(;s!==null;)H=s,aw(s),s=s.sibling;H=i,Qa=l,rt=c}ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ty(t)}}function ty(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ug(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ug(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Po(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}rt||e.flags&512&&md(e)}catch(m){Ae(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ny(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function ry(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{md(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{md(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var kR=Math.ceil,Gl=jn.ReactCurrentDispatcher,zf=jn.ReactCurrentOwner,Ut=jn.ReactCurrentBatchConfig,ae=0,Be=null,Oe=null,Ke=0,At=0,ji=Ar(0),Ve=0,Uo=null,ei=0,Du=0,$f=0,po=null,gt=null,qf=0,os=1/0,In=null,Ql=!1,vd=null,hr=null,Ya=!1,rr=null,Yl=0,mo=0,_d=null,ml=-1,gl=0;function ht(){return ae&6?Ne():ml!==-1?ml:ml=Ne()}function dr(t){return t.mode&1?ae&2&&Ke!==0?Ke&-Ke:dR.transition!==null?(gl===0&&(gl=H_()),gl):(t=de,t!==0||(t=window.event,t=t===void 0?16:X_(t.type)),t):1}function Qt(t,e,n,r){if(50<mo)throw mo=0,_d=null,Error(B(185));Zo(t,n,r),(!(ae&2)||t!==Be)&&(t===Be&&(!(ae&2)&&(Du|=n),Ve===4&&Jn(t,Ke)),Et(t,r),n===1&&ae===0&&!(e.mode&1)&&(os=Ne()+500,ku&&Cr()))}function Et(t,e){var n=t.callbackNode;d1(t,e);var r=Dl(t,t===Be?Ke:0);if(r===0)n!==null&&dg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dg(n),e===1)t.tag===0?hR(iy.bind(null,t)):y0(iy.bind(null,t)),aR(function(){!(ae&6)&&Cr()}),n=null;else{switch(W_(r)){case 1:n=gf;break;case 4:n=$_;break;case 16:n=Ol;break;case 536870912:n=q_;break;default:n=Ol}n=mw(n,lw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lw(t,e){if(ml=-1,gl=0,ae&6)throw Error(B(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=Dl(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jl(t,r);else{e=r;var i=ae;ae|=2;var s=cw();(Be!==t||Ke!==e)&&(In=null,os=Ne()+500,Kr(t,e));do try{OR();break}catch(l){uw(t,l)}while(!0);kf(),Gl.current=s,ae=i,Oe!==null?e=0:(Be=null,Ke=0,e=Ve)}if(e!==0){if(e===2&&(i=Wh(t),i!==0&&(r=i,e=wd(t,i))),e===1)throw n=Uo,Kr(t,0),Jn(t,r),Et(t,Ne()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!NR(i)&&(e=Jl(t,r),e===2&&(s=Wh(t),s!==0&&(r=s,e=wd(t,s))),e===1))throw n=Uo,Kr(t,0),Jn(t,r),Et(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Fr(t,gt,In);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=qf+500-Ne(),10<e)){if(Dl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ed(Fr.bind(null,t,gt,In),e);break}Fr(t,gt,In);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kR(r/1960))-r,10<r){t.timeoutHandle=ed(Fr.bind(null,t,gt,In),r);break}Fr(t,gt,In);break;case 5:Fr(t,gt,In);break;default:throw Error(B(329))}}}return Et(t,Ne()),t.callbackNode===n?lw.bind(null,t):null}function wd(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=gt,gt=n,e!==null&&Ed(e)),t}function Ed(t){gt===null?gt=t:gt.push.apply(gt,t)}function NR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~$f,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(ae&6)throw Error(B(327));Gi();var e=Dl(t,0);if(!(e&1))return Et(t,Ne()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var r=Wh(t);r!==0&&(e=r,n=wd(t,r))}if(n===1)throw n=Uo,Kr(t,0),Jn(t,e),Et(t,Ne()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,gt,In),Et(t,Ne()),null}function Hf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(os=Ne()+500,ku&&Cr())}}function ti(t){rr!==null&&rr.tag===0&&!(ae&6)&&Gi();var e=ae;ae|=1;var n=Ut.transition,r=de;try{if(Ut.transition=null,de=1,t)return t()}finally{de=r,Ut.transition=n,ae=e,!(ae&6)&&Cr()}}function Wf(){At=ji.current,_e(ji)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oR(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:is(),_e(_t),_e(st),Lf();break;case 5:bf(r);break;case 4:is();break;case 13:_e(Ee);break;case 19:_e(Ee);break;case 10:Nf(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(Be=t,Oe=t=fr(t.current,null),Ke=At=e,Ve=0,Uo=null,$f=Du=ei=0,gt=po=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function uw(t,e){do{var n=Oe;try{if(kf(),dl.current=Kl,Wl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(Zr=0,je=be=Te=null,ho=!1,Vo=0,zf.current=null,n===null||n.return===null){Ve=1,Uo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Hg(o);if(w!==null){w.flags&=-257,Wg(w,o,l,s,e),w.mode&1&&qg(s,c,e),e=w,u=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(u),e.updateQueue=A}else E.add(u);break e}else{if(!(e&1)){qg(s,c,e),Kf();break e}u=Error(B(426))}}else if(we&&l.mode&1){var P=Hg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Wg(P,o,l,s,e),Cf(ss(u,l));break e}}s=u=ss(u,l),Ve!==4&&(Ve=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=W0(s,u,e);Fg(s,T);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(hr===null||!hr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=K0(s,l,e);Fg(s,O);break e}}s=s.return}while(s!==null)}dw(n)}catch(M){e=M,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function cw(){var t=Gl.current;return Gl.current=Kl,t===null?Kl:t}function Kf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Be===null||!(ei&268435455)&&!(Du&268435455)||Jn(Be,Ke)}function Jl(t,e){var n=ae;ae|=2;var r=cw();(Be!==t||Ke!==e)&&(In=null,Kr(t,e));do try{xR();break}catch(i){uw(t,i)}while(!0);if(kf(),ae=n,Gl.current=r,Oe!==null)throw Error(B(261));return Be=null,Ke=0,Ve}function xR(){for(;Oe!==null;)hw(Oe)}function OR(){for(;Oe!==null&&!r1();)hw(Oe)}function hw(t){var e=pw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?dw(t):Oe=e,zf.current=null}function dw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RR(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Oe=null;return}}else if(n=SR(n,e,At),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Ve===0&&(Ve=5)}function Fr(t,e,n){var r=de,i=Ut.transition;try{Ut.transition=null,de=1,DR(t,e,n,r)}finally{Ut.transition=i,de=r}return null}function DR(t,e,n,r){do Gi();while(rr!==null);if(ae&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f1(t,s),t===Be&&(Oe=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,mw(Ol,function(){return Gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=de;de=1;var l=ae;ae|=4,zf.current=null,CR(t,n),ow(n,t),Z1(Xh),bl=!!Jh,Xh=Jh=null,t.current=n,PR(n),i1(),ae=l,de=o,Ut.transition=s}else t.current=n;if(Ya&&(Ya=!1,rr=t,Yl=i),s=t.pendingLanes,s===0&&(hr=null),a1(n.stateNode),Et(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ql)throw Ql=!1,t=vd,vd=null,t;return Yl&1&&t.tag!==0&&Gi(),s=t.pendingLanes,s&1?t===_d?mo++:(mo=0,_d=t):mo=0,Cr(),null}function Gi(){if(rr!==null){var t=W_(Yl),e=Ut.transition,n=de;try{if(Ut.transition=null,de=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,Yl=0,ae&6)throw Error(B(331));var i=ae;for(ae|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,w=d.return;if(rw(d),d===c){H=null;break}if(m!==null){m.return=w,H=m;break}H=w}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,H=T;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ou(9,l)}}catch(M){Ae(l,l.return,M)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(ae=i,Cr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Su,t)}catch{}r=!0}return r}finally{de=n,Ut.transition=e}}return!1}function sy(t,e,n){e=ss(n,e),e=W0(t,e,1),t=cr(t,e,1),e=ht(),t!==null&&(Zo(t,1,e),Et(t,e))}function Ae(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=ss(n,t),t=K0(e,t,1),e=cr(e,t,1),t=ht(),e!==null&&(Zo(e,1,t),Et(e,t));break}}e=e.return}}function bR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(Ve===4||Ve===3&&(Ke&130023424)===Ke&&500>Ne()-qf?Kr(t,0):$f|=n),Et(t,e)}function fw(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=ht();t=bn(t,e),t!==null&&(Zo(t,e,n),Et(t,n))}function LR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fw(t,n)}function VR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),fw(t,n)}var pw;pw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,IR(t,e,n);vt=!!(t.flags&131072)}else vt=!1,we&&e.flags&1048576&&v0(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pl(t,e),t=e.pendingProps;var i=ts(e,st.current);Ki(e,n),i=Mf(null,e,r,t,i,n);var s=Ff();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Of(e),i.updater=xu,e.stateNode=i,i._reactInternals=e,ad(e,r,t,n),e=cd(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Rf(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FR(r),t=Ht(r,t),i){case 0:e=ud(null,e,r,t,n);break e;case 1:e=Qg(null,e,r,t,n);break e;case 11:e=Kg(null,e,r,t,n);break e;case 14:e=Gg(null,e,r,Ht(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ud(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Qg(t,e,r,i,n);case 3:e:{if(J0(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,S0(t,e),ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(B(423)),e),e=Yg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(B(424)),e),e=Yg(t,e,r,n,i);break e}else for(Ct=ur(e.stateNode.containerInfo.firstChild),kt=e,we=!0,Kt=null,n=T0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=Ln(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return R0(e),t===null&&id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zh(r,i)?o=null:s!==null&&Zh(r,s)&&(e.flags|=32),Y0(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&id(e),null;case 13:return X0(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Kg(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(zl,r._currentValue),r._currentValue=o,s!==null)if(Yt(s.value,o)){if(s.children===i.children&&!_t.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),sd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ki(e,n),i=Bt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),Gg(t,e,r,i,n);case 15:return G0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),pl(t,e),e.tag=1,wt(r)?(t=!0,Ul(e)):t=!1,Ki(e,n),H0(e,r,i),ad(e,r,i,n),cd(null,e,r,!0,t,n);case 19:return Z0(t,e,n);case 22:return Q0(t,e,n)}throw Error(B(156,e.tag))};function mw(t,e){return z_(t,e)}function MR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new MR(t,e,n,r)}function Gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FR(t){if(typeof t=="function")return Gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===pf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return Gr(n.children,i,s,e);case df:o=8,i|=8;break;case xh:return t=Ft(12,n,e,i|2),t.elementType=xh,t.lanes=s,t;case Oh:return t=Ft(13,n,e,i),t.elementType=Oh,t.lanes=s,t;case Dh:return t=Ft(19,n,e,i),t.elementType=Dh,t.lanes=s,t;case R_:return bu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I_:o=10;break e;case S_:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case Gn:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function bu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function lh(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function uh(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,r,i,s,o,l,u){return t=new UR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(s),t}function jR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gw(t){if(!t)return _r;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(wt(n))return g0(t,n,e)}return e}function yw(t,e,n,r,i,s,o,l,u){return t=Qf(n,r,!0,t,i,s,o,l,u),t.context=gw(null),n=t.current,r=ht(),i=dr(n),s=Nn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,Zo(t,i,r),Et(t,r),t}function Lu(t,e,n,r){var i=e.current,s=ht(),o=dr(i);return n=gw(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(Qt(t,i,o,s),hl(t,i,o)),o}function Xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){oy(t,e),(t=t.alternate)&&oy(t,e)}function BR(){return null}var vw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}Vu.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Lu(t,e,null,null)};Vu.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Lu(null,t,null,null)}),e[Dn]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&J_(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function zR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Xl(o);s.call(c)}}var o=yw(e,r,t,0,null,!1,!1,"",ay);return t._reactRootContainer=o,t[Dn]=o.current,xo(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Xl(u);l.call(c)}}var u=Qf(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=u,t[Dn]=u.current,xo(t.nodeType===8?t.parentNode:t),ti(function(){Lu(e,u,n,r)}),u}function Fu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Xl(o);l.call(u)}}Lu(e,o,t,i)}else o=zR(n,e,t,i,r);return Xl(o)}K_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(yf(e,n|1),Et(e,Ne()),!(ae&6)&&(os=Ne()+500,Cr()))}break;case 13:ti(function(){var r=bn(t,1);if(r!==null){var i=ht();Qt(r,t,1,i)}}),Yf(t,1)}};vf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=ht();Qt(e,t,134217728,n)}Yf(t,134217728)}};G_=function(t){if(t.tag===13){var e=dr(t),n=bn(t,e);if(n!==null){var r=ht();Qt(n,t,e,r)}Yf(t,e)}};Q_=function(){return de};Y_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};$h=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pu(r);if(!i)throw Error(B(90));C_(r),Vh(r,i)}}}break;case"textarea":k_(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};V_=Hf;M_=ti;var $R={usingClientEntryPoint:!1,Events:[ta,bi,Pu,b_,L_,Hf]},Qs={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qR={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j_(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||BR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Su=Ja.inject(qR),on=Ja}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$R;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(B(200));return jR(t,e,null,n)};bt.createRoot=function(t,e){if(!Xf(t))throw Error(B(299));var n=!1,r="",i=vw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,xo(t.nodeType===8?t.parentNode:t),new Jf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=j_(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return ti(t)};bt.hydrate=function(t,e,n){if(!Mu(e))throw Error(B(200));return Fu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yw(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vu(e)};bt.render=function(t,e,n){if(!Mu(e))throw Error(B(200));return Fu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(B(40));return t._reactRootContainer?(ti(function(){Fu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};bt.unstable_batchedUpdates=Hf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Fu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function _w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_w)}catch(t){console.error(t)}}_w(),__.exports=bt;var HR=__.exports,ww,ly=HR;ww=ly.createRoot,ly.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jo.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const uy="popstate";function WR(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=hi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Td("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Zl(s))}function r(i,s){Zf(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return GR(e,n,r,t)}function De(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KR(){return Math.random().toString(36).substr(2,8)}function cy(t,e){return{usr:t.state,key:t.key,idx:e}}function Td(t,e,n,r){return n===void 0&&(n=null),jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hi(e):e,{state:n,key:e&&e.key||r||KR()})}function Zl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function GR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ir.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(jo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=ir.Pop;let P=d(),T=P==null?null:P-c;c=P,u&&u({action:l,location:A.location,delta:T})}function m(P,T){l=ir.Push;let v=Td(A.location,P,T);n&&n(v,P),c=d()+1;let S=cy(v,c),O=A.createHref(v);try{o.pushState(S,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&u&&u({action:l,location:A.location,delta:1})}function w(P,T){l=ir.Replace;let v=Td(A.location,P,T);n&&n(v,P),c=d();let S=cy(v,c),O=A.createHref(v);o.replaceState(S,"",O),s&&u&&u({action:l,location:A.location,delta:0})}function E(P){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:Zl(P);return v=v.replace(/ $/,"%20"),De(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let A={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,p),u=P,()=>{i.removeEventListener(uy,p),u=null}},createHref(P){return e(i,P)},createURL:E,encodeLocation(P){let T=E(P);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:w,go(P){return o.go(P)}};return A}var hy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hy||(hy={}));function QR(t,e,n){return n===void 0&&(n="/"),YR(t,e,n,!1)}function YR(t,e,n,r){let i=typeof e=="string"?hi(e):e,s=ep(i.pathname||"/",n);if(s==null)return null;let o=Ew(t);JR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=lA(s);l=oA(o[u],c,r)}return l}function Ew(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(De(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(De(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ew(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Tw(s.path))i(s,o,u)}),e}function Tw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Tw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function JR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XR=/^:[\w-]+$/,ZR=3,eA=2,tA=1,nA=10,rA=-2,dy=t=>t==="*";function iA(t,e){let n=t.split("/"),r=n.length;return n.some(dy)&&(r+=rA),e&&(r+=eA),n.filter(i=>!dy(i)).reduce((i,s)=>i+(XR.test(s)?ZR:s===""?tA:nA),r)}function sA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=fy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=fy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:pr([s,p.pathname]),pathnameBase:dA(pr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=pr([s,p.pathnameBase]))}return o}function fy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let A=l[p]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=l[p];return w&&!E?c[m]=void 0:c[m]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Zf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ep(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hi(t):t;return{pathname:n?n.startsWith("/")?n:cA(n,e):e,search:fA(r),hash:pA(i)}}function cA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ch(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Iw(t,e){let n=hA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=hi(t):(i=jo({},t),De(!i.pathname||!i.pathname.includes("?"),ch("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),ch("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),ch("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=uA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),dA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Rw=["post","put","patch","delete"];new Set(Rw);const gA=["get",...Rw];new Set(gA);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}const tp=V.createContext(null),yA=V.createContext(null),di=V.createContext(null),Uu=V.createContext(null),Pr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),Aw=V.createContext(null);function vA(t,e){let{relative:n}=e===void 0?{}:e;ra()||De(!1);let{basename:r,navigator:i}=V.useContext(di),{hash:s,pathname:o,search:l}=Pw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:pr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ra(){return V.useContext(Uu)!=null}function ia(){return ra()||De(!1),V.useContext(Uu).location}function Cw(t){V.useContext(di).static||V.useLayoutEffect(t)}function _s(){let{isDataRoute:t}=V.useContext(Pr);return t?xA():_A()}function _A(){ra()||De(!1);let t=V.useContext(tp),{basename:e,future:n,navigator:r}=V.useContext(di),{matches:i}=V.useContext(Pr),{pathname:s}=ia(),o=JSON.stringify(Iw(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return Cw(()=>{l.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Sw(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:pr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function np(){let{matches:t}=V.useContext(Pr),e=t[t.length-1];return e?e.params:{}}function Pw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(di),{matches:i}=V.useContext(Pr),{pathname:s}=ia(),o=JSON.stringify(Iw(i,r.v7_relativeSplatPath));return V.useMemo(()=>Sw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function wA(t,e){return EA(t,e)}function EA(t,e,n,r){ra()||De(!1);let{navigator:i}=V.useContext(di),{matches:s}=V.useContext(Pr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ia(),d;if(e){var p;let P=typeof e=="string"?hi(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||De(!1),d=P}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=QR(t,{pathname:w}),A=AA(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:pr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:pr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&A?V.createElement(Uu.Provider,{value:{location:Bo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ir.Pop}},A):A}function TA(){let t=NA(),e=mA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const IA=V.createElement(TA,null);class SA extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(Pr.Provider,{value:this.props.routeContext},V.createElement(Aw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RA(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(tp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Pr.Provider,{value:e},r)}function AA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||De(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:w}=n,E=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let w,E=!1,A=null,P=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,A=p.route.errorElement||IA,u&&(c<0&&m===0?(E=!0,P=null):c===m&&(E=!0,P=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let S;return w?S=A:E?S=P:p.route.Component?S=V.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=d,V.createElement(RA,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(SA,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var kw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kw||{}),eu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(eu||{});function CA(t){let e=V.useContext(tp);return e||De(!1),e}function PA(t){let e=V.useContext(yA);return e||De(!1),e}function kA(t){let e=V.useContext(Pr);return e||De(!1),e}function Nw(t){let e=kA(),n=e.matches[e.matches.length-1];return n.route.id||De(!1),n.route.id}function NA(){var t;let e=V.useContext(Aw),n=PA(eu.UseRouteError),r=Nw(eu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xA(){let{router:t}=CA(kw.UseNavigateStable),e=Nw(eu.UseNavigateStable),n=V.useRef(!1);return Cw(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bo({fromRouteId:e},s)))},[t,e])}const py={};function OA(t,e){py[e]||(py[e]=!0,console.warn(e))}const my=(t,e,n)=>OA(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function DA(t,e){t!=null&&t.v7_startTransition||my("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&my("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Kn(t){De(!1)}function bA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ir.Pop,navigator:s,static:o=!1,future:l}=t;ra()&&De(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:Bo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=hi(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:E="default"}=r,A=V.useMemo(()=>{let P=ep(d,u);return P==null?null:{location:{pathname:P,search:p,hash:m,state:w,key:E},navigationType:i}},[u,d,p,m,w,E,i]);return A==null?null:V.createElement(di.Provider,{value:c},V.createElement(Uu.Provider,{children:n,value:A}))}function LA(t){let{children:e,location:n}=t;return wA(Id(e),n)}new Promise(()=>{});function Id(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Id(r.props.children,s));return}r.type!==Kn&&De(!1),!r.props.index||!r.props.children||De(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Id(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sd.apply(this,arguments)}function VA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FA(t,e){return t.button===0&&(!e||e==="_self")&&!MA(t)}const UA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jA="6";try{window.__reactRouterVersion=jA}catch{}const BA="startTransition",gy=bS[BA];function zA(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=WR({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=V.useCallback(p=>{c&&gy?gy(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(d),[o,d]),V.useEffect(()=>DA(r),[r]),V.createElement(bA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const $A=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ct=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=VA(e,UA),{basename:w}=V.useContext(di),E,A=!1;if(typeof c=="string"&&qA.test(c)&&(E=c,$A))try{let S=new URL(window.location.href),O=c.startsWith("//")?new URL(S.protocol+c):new URL(c),M=ep(O.pathname,w);O.origin===S.origin&&M!=null?c=M+O.search+O.hash:A=!0}catch{}let P=vA(c,{relative:i}),T=HA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(S){r&&r(S),S.defaultPrevented||T(S)}return V.createElement("a",Sd({},m,{href:E||P,onClick:A||s?r:v,ref:n,target:u}))});var yy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yy||(yy={}));var vy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vy||(vy={}));function HA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=_s(),c=ia(),d=Pw(t,{relative:o});return V.useCallback(p=>{if(FA(p,n)){p.preventDefault();let m=r!==void 0?r:Zl(c)===Zl(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function xw(t,e){return function(){return t.apply(e,arguments)}}const{toString:WA}=Object.prototype,{getPrototypeOf:rp}=Object,ju=(t=>e=>{const n=WA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zt=t=>(t=t.toLowerCase(),e=>ju(e)===t),Bu=t=>e=>typeof e===t,{isArray:ws}=Array,zo=Bu("undefined");function KA(t){return t!==null&&!zo(t)&&t.constructor!==null&&!zo(t.constructor)&&Nt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ow=Zt("ArrayBuffer");function GA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ow(t.buffer),e}const QA=Bu("string"),Nt=Bu("function"),Dw=Bu("number"),zu=t=>t!==null&&typeof t=="object",YA=t=>t===!0||t===!1,vl=t=>{if(ju(t)!=="object")return!1;const e=rp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},JA=Zt("Date"),XA=Zt("File"),ZA=Zt("Blob"),eC=Zt("FileList"),tC=t=>zu(t)&&Nt(t.pipe),nC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Nt(t.append)&&((e=ju(t))==="formdata"||e==="object"&&Nt(t.toString)&&t.toString()==="[object FormData]"))},rC=Zt("URLSearchParams"),[iC,sC,oC,aC]=["ReadableStream","Request","Response","Headers"].map(Zt),lC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function sa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),ws(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function bw(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const $r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lw=t=>!zo(t)&&t!==$r;function Rd(){const{caseless:t}=Lw(this)&&this||{},e={},n=(r,i)=>{const s=t&&bw(e,i)||i;vl(e[s])&&vl(r)?e[s]=Rd(e[s],r):vl(r)?e[s]=Rd({},r):ws(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&sa(arguments[r],n);return e}const uC=(t,e,n,{allOwnKeys:r}={})=>(sa(e,(i,s)=>{n&&Nt(i)?t[s]=xw(i,n):t[s]=i},{allOwnKeys:r}),t),cC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),hC=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},dC=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&rp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},fC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},pC=t=>{if(!t)return null;if(ws(t))return t;let e=t.length;if(!Dw(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},mC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&rp(Uint8Array)),gC=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},yC=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},vC=Zt("HTMLFormElement"),_C=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),_y=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),wC=Zt("RegExp"),Vw=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};sa(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},EC=t=>{Vw(t,(e,n)=>{if(Nt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Nt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TC=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ws(t)?r(t):r(String(t).split(e)),n},IC=()=>{},SC=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,hh="abcdefghijklmnopqrstuvwxyz",wy="0123456789",Mw={DIGIT:wy,ALPHA:hh,ALPHA_DIGIT:hh+hh.toUpperCase()+wy},RC=(t=16,e=Mw.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function AC(t){return!!(t&&Nt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const CC=t=>{const e=new Array(10),n=(r,i)=>{if(zu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ws(r)?[]:{};return sa(r,(o,l)=>{const u=n(o,i+1);!zo(u)&&(s[l]=u)}),e[i]=void 0,s}}return r};return n(t,0)},PC=Zt("AsyncFunction"),kC=t=>t&&(zu(t)||Nt(t))&&Nt(t.then)&&Nt(t.catch),Fw=((t,e)=>t?setImmediate:e?((n,r)=>($r.addEventListener("message",({source:i,data:s})=>{i===$r&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),$r.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Nt($r.postMessage)),NC=typeof queueMicrotask<"u"?queueMicrotask.bind($r):typeof process<"u"&&process.nextTick||Fw,L={isArray:ws,isArrayBuffer:Ow,isBuffer:KA,isFormData:nC,isArrayBufferView:GA,isString:QA,isNumber:Dw,isBoolean:YA,isObject:zu,isPlainObject:vl,isReadableStream:iC,isRequest:sC,isResponse:oC,isHeaders:aC,isUndefined:zo,isDate:JA,isFile:XA,isBlob:ZA,isRegExp:wC,isFunction:Nt,isStream:tC,isURLSearchParams:rC,isTypedArray:mC,isFileList:eC,forEach:sa,merge:Rd,extend:uC,trim:lC,stripBOM:cC,inherits:hC,toFlatObject:dC,kindOf:ju,kindOfTest:Zt,endsWith:fC,toArray:pC,forEachEntry:gC,matchAll:yC,isHTMLForm:vC,hasOwnProperty:_y,hasOwnProp:_y,reduceDescriptors:Vw,freezeMethods:EC,toObjectSet:TC,toCamelCase:_C,noop:IC,toFiniteNumber:SC,findKey:bw,global:$r,isContextDefined:Lw,ALPHABET:Mw,generateString:RC,isSpecCompliantForm:AC,toJSONObject:CC,isAsyncFn:PC,isThenable:kC,setImmediate:Fw,asap:NC};function ee(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const Uw=ee.prototype,jw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{jw[t]={value:t}});Object.defineProperties(ee,jw);Object.defineProperty(Uw,"isAxiosError",{value:!0});ee.from=(t,e,n,r,i,s)=>{const o=Object.create(Uw);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),ee.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const xC=null;function Ad(t){return L.isPlainObject(t)||L.isArray(t)}function Bw(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Ey(t,e,n){return t?t.concat(e).map(function(i,s){return i=Bw(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function OC(t){return L.isArray(t)&&!t.some(Ad)}const DC=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function $u(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,P){return!L.isUndefined(P[A])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(L.isDate(E))return E.toISOString();if(!u&&L.isBlob(E))throw new ee("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(E)||L.isTypedArray(E)?u&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function d(E,A,P){let T=E;if(E&&!P&&typeof E=="object"){if(L.endsWith(A,"{}"))A=r?A:A.slice(0,-2),E=JSON.stringify(E);else if(L.isArray(E)&&OC(E)||(L.isFileList(E)||L.endsWith(A,"[]"))&&(T=L.toArray(E)))return A=Bw(A),T.forEach(function(S,O){!(L.isUndefined(S)||S===null)&&e.append(o===!0?Ey([A],O,s):o===null?A:A+"[]",c(S))}),!1}return Ad(E)?!0:(e.append(Ey(P,A,s),c(E)),!1)}const p=[],m=Object.assign(DC,{defaultVisitor:d,convertValue:c,isVisitable:Ad});function w(E,A){if(!L.isUndefined(E)){if(p.indexOf(E)!==-1)throw Error("Circular reference detected in "+A.join("."));p.push(E),L.forEach(E,function(T,v){(!(L.isUndefined(T)||T===null)&&i.call(e,T,L.isString(v)?v.trim():v,A,m))===!0&&w(T,A?A.concat(v):[v])}),p.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return w(t),e}function Ty(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ip(t,e){this._pairs=[],t&&$u(t,this,e)}const zw=ip.prototype;zw.append=function(e,n){this._pairs.push([e,n])};zw.toString=function(e){const n=e?function(r){return e.call(this,r,Ty)}:Ty;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function bC(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $w(t,e,n){if(!e)return t;const r=n&&n.encode||bC,i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new ip(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Iy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const qw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},LC=typeof URLSearchParams<"u"?URLSearchParams:ip,VC=typeof FormData<"u"?FormData:null,MC=typeof Blob<"u"?Blob:null,FC={isBrowser:!0,classes:{URLSearchParams:LC,FormData:VC,Blob:MC},protocols:["http","https","file","blob","url","data"]},sp=typeof window<"u"&&typeof document<"u",Cd=typeof navigator=="object"&&navigator||void 0,UC=sp&&(!Cd||["ReactNative","NativeScript","NS"].indexOf(Cd.product)<0),jC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",BC=sp&&window.location.href||"http://localhost",zC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sp,hasStandardBrowserEnv:UC,hasStandardBrowserWebWorkerEnv:jC,navigator:Cd,origin:BC},Symbol.toStringTag,{value:"Module"})),Tt={...zC,...FC};function $C(t,e){return $u(t,new Tt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Tt.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function qC(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function HC(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Hw(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=HC(i[o])),!l)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(qC(r),i,n,0)}),n}return null}function WC(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const oa={transitional:qw,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(Hw(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $C(e,this.formSerializer).toString();if((l=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return $u(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),WC(e)):e}],transformResponse:[function(e){const n=this.transitional||oa.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?ee.from(l,ee.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{oa.headers[t]={}});const KC=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),GC=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&KC[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Sy=Symbol("internals");function Ys(t){return t&&String(t).trim().toLowerCase()}function _l(t){return t===!1||t==null?t:L.isArray(t)?t.map(_l):String(t)}function QC(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const YC=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function dh(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function JC(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function XC(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class It{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,u,c){const d=Ys(u);if(!d)throw new Error("header name must be a non-empty string");const p=L.findKey(i,d);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||u]=_l(l))}const o=(l,u)=>L.forEach(l,(c,d)=>s(c,d,u));if(L.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(L.isString(e)&&(e=e.trim())&&!YC(e))o(GC(e),n);else if(L.isHeaders(e))for(const[l,u]of e.entries())s(u,l,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=Ys(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return QC(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ys(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||dh(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Ys(o),o){const l=L.findKey(r,o);l&&(!n||dh(r,r[l],l,n))&&(delete r[l],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||dh(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=_l(i),delete n[s];return}const l=e?JC(s):String(s).trim();l!==s&&delete n[s],n[l]=_l(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Sy]=this[Sy]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=Ys(o);r[l]||(XC(i,o),r[l]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(It.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(It);function fh(t,e){const n=this||oa,r=e||n,i=It.from(r.headers);let s=r.data;return L.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Ww(t){return!!(t&&t.__CANCEL__)}function Es(t,e,n){ee.call(this,t??"canceled",ee.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Es,ee,{__CANCEL__:!0});function Kw(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ZC(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function eP(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];o||(o=c),n[i]=u,r[i]=c;let p=s,m=0;for(;p!==i;)m+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const w=d&&c-d;return w?Math.round(m*1e3/w):void 0}}function tP(t,e){let n=0,r=1e3/e,i,s;const o=(c,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?o(c,d):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i)]}const tu=(t,e,n=3)=>{let r=0;const i=eP(50,250);return tP(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:u,rate:c||void 0,estimated:c&&l&&d?(l-o)/c:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},Ry=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ay=t=>(...e)=>L.asap(()=>t(...e)),nP=Tt.hasStandardBrowserEnv?function(){const e=Tt.navigator&&/(msie|trident)/i.test(Tt.navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=L.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),rP=Tt.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function iP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function sP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Gw(t,e){return t&&!iP(e)?sP(t,e):e}const Cy=t=>t instanceof It?{...t}:t;function ni(t,e){e=e||{};const n={};function r(c,d,p){return L.isPlainObject(c)&&L.isPlainObject(d)?L.merge.call({caseless:p},c,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function i(c,d,p){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c,p)}else return r(c,d,p)}function s(c,d){if(!L.isUndefined(d))return r(void 0,d)}function o(c,d){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,p){if(p in e)return r(c,d);if(p in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,d)=>i(Cy(c),Cy(d),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=u[d]||i,m=p(t[d],e[d],d);L.isUndefined(m)&&p!==l||(n[d]=m)}),n}const Qw=t=>{const e=ni({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=e;e.headers=o=It.from(o),e.url=$w(Gw(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let u;if(L.isFormData(n)){if(Tt.hasStandardBrowserEnv||Tt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[c,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...d].join("; "))}}if(Tt.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&nP(e.url))){const c=i&&s&&rP.read(s);c&&o.set(i,c)}return e},oP=typeof XMLHttpRequest<"u",aP=oP&&function(t){return new Promise(function(n,r){const i=Qw(t);let s=i.data;const o=It.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=i,d,p,m,w,E;function A(){w&&w(),E&&E(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let P=new XMLHttpRequest;P.open(i.method.toUpperCase(),i.url,!0),P.timeout=i.timeout;function T(){if(!P)return;const S=It.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),M={data:!l||l==="text"||l==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:S,config:t,request:P};Kw(function(I){n(I),A()},function(I){r(I),A()},M),P=null}"onloadend"in P?P.onloadend=T:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(T)},P.onabort=function(){P&&(r(new ee("Request aborted",ee.ECONNABORTED,t,P)),P=null)},P.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,t,P)),P=null},P.ontimeout=function(){let O=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||qw;i.timeoutErrorMessage&&(O=i.timeoutErrorMessage),r(new ee(O,M.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,t,P)),P=null},s===void 0&&o.setContentType(null),"setRequestHeader"in P&&L.forEach(o.toJSON(),function(O,M){P.setRequestHeader(M,O)}),L.isUndefined(i.withCredentials)||(P.withCredentials=!!i.withCredentials),l&&l!=="json"&&(P.responseType=i.responseType),c&&([m,E]=tu(c,!0),P.addEventListener("progress",m)),u&&P.upload&&([p,w]=tu(u),P.upload.addEventListener("progress",p),P.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(d=S=>{P&&(r(!S||S.type?new Es(null,t,P):S),P.abort(),P=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const v=ZC(i.url);if(v&&Tt.protocols.indexOf(v)===-1){r(new ee("Unsupported protocol "+v+":",ee.ERR_BAD_REQUEST,t));return}P.send(s||null)})},lP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof ee?d:new Es(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new ee(`timeout ${e} of ms exceeded`,ee.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>L.asap(l),u}},uP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},cP=async function*(t,e){for await(const n of hP(t))yield*uP(n,e)},hP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Py=(t,e,n,r)=>{const i=cP(t,e);let s=0,o,l=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){l(),u.close();return}let p=d.byteLength;if(n){let m=s+=p;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),i.return()}},{highWaterMark:2})},qu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Yw=qu&&typeof ReadableStream=="function",dP=qu&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Jw=(t,...e)=>{try{return!!t(...e)}catch{return!1}},fP=Yw&&Jw(()=>{let t=!1;const e=new Request(Tt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),ky=64*1024,Pd=Yw&&Jw(()=>L.isReadableStream(new Response("").body)),nu={stream:Pd&&(t=>t.body)};qu&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!nu[e]&&(nu[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ee(`Response type '${e}' is not supported`,ee.ERR_NOT_SUPPORT,r)})})})(new Response);const pP=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(Tt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(L.isArrayBufferView(t)||L.isArrayBuffer(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await dP(t)).byteLength},mP=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??pP(e)},gP=qu&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:l,onUploadProgress:u,responseType:c,headers:d,withCredentials:p="same-origin",fetchOptions:m}=Qw(t);c=c?(c+"").toLowerCase():"text";let w=lP([i,s&&s.toAbortSignal()],o),E;const A=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let P;try{if(u&&fP&&n!=="get"&&n!=="head"&&(P=await mP(d,r))!==0){let M=new Request(e,{method:"POST",body:r,duplex:"half"}),U;if(L.isFormData(r)&&(U=M.headers.get("content-type"))&&d.setContentType(U),M.body){const[I,y]=Ry(P,tu(Ay(u)));r=Py(M.body,ky,I,y)}}L.isString(p)||(p=p?"include":"omit");const T="credentials"in Request.prototype;E=new Request(e,{...m,signal:w,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:T?p:void 0});let v=await fetch(E);const S=Pd&&(c==="stream"||c==="response");if(Pd&&(l||S&&A)){const M={};["status","statusText","headers"].forEach(_=>{M[_]=v[_]});const U=L.toFiniteNumber(v.headers.get("content-length")),[I,y]=l&&Ry(U,tu(Ay(l),!0))||[];v=new Response(Py(v.body,ky,I,()=>{y&&y(),A&&A()}),M)}c=c||"text";let O=await nu[L.findKey(nu,c)||"text"](v,t);return!S&&A&&A(),await new Promise((M,U)=>{Kw(M,U,{data:O,headers:It.from(v.headers),status:v.status,statusText:v.statusText,config:t,request:E})})}catch(T){throw A&&A(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new ee("Network Error",ee.ERR_NETWORK,t,E),{cause:T.cause||T}):ee.from(T,T&&T.code,t,E)}}),kd={http:xC,xhr:aP,fetch:gP};L.forEach(kd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ny=t=>`- ${t}`,yP=t=>L.isFunction(t)||t===null||t===!1,Xw={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!yP(n)&&(r=kd[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Ny).join(`
`):" "+Ny(s[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:kd};function ph(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Es(null,t)}function xy(t){return ph(t),t.headers=It.from(t.headers),t.data=fh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Xw.getAdapter(t.adapter||oa.adapter)(t).then(function(r){return ph(t),r.data=fh.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return Ww(r)||(ph(t),r&&r.response&&(r.response.data=fh.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const Zw="1.7.7",op={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{op[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Oy={};op.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Zw+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new ee(i(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Oy[o]&&(Oy[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function vP(t,e,n){if(typeof t!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],u=l===void 0||o(l,s,t);if(u!==!0)throw new ee("option "+s+" must be "+u,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+s,ee.ERR_BAD_OPTION)}}const Nd={assertOptions:vP,validators:op},Hn=Nd.validators;class Qr{constructor(e){this.defaults=e,this.interceptors={request:new Iy,response:new Iy}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ni(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Nd.assertOptions(r,{silentJSONParsing:Hn.transitional(Hn.boolean),forcedJSONParsing:Hn.transitional(Hn.boolean),clarifyTimeoutError:Hn.transitional(Hn.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Nd.assertOptions(i,{encode:Hn.function,serialize:Hn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],E=>{delete s[E]}),n.headers=It.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(n)===!1||(u=u&&A.synchronous,l.unshift(A.fulfilled,A.rejected))});const c=[];this.interceptors.response.forEach(function(A){c.push(A.fulfilled,A.rejected)});let d,p=0,m;if(!u){const E=[xy.bind(this),void 0];for(E.unshift.apply(E,l),E.push.apply(E,c),m=E.length,d=Promise.resolve(n);p<m;)d=d.then(E[p++],E[p++]);return d}m=l.length;let w=n;for(p=0;p<m;){const E=l[p++],A=l[p++];try{w=E(w)}catch(P){A.call(this,P);break}}try{d=xy.call(this,w)}catch(E){return Promise.reject(E)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(e){e=ni(this.defaults,e);const n=Gw(e.baseURL,e.url);return $w(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){Qr.prototype[e]=function(n,r){return this.request(ni(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(ni(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Qr.prototype[e]=n(),Qr.prototype[e+"Form"]=n(!0)});class ap{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Es(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new ap(function(i){e=i}),cancel:e}}}function _P(t){return function(n){return t.apply(null,n)}}function wP(t){return L.isObject(t)&&t.isAxiosError===!0}const xd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xd).forEach(([t,e])=>{xd[e]=t});function eE(t){const e=new Qr(t),n=xw(Qr.prototype.request,e);return L.extend(n,Qr.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return eE(ni(t,i))},n}const ue=eE(oa);ue.Axios=Qr;ue.CanceledError=Es;ue.CancelToken=ap;ue.isCancel=Ww;ue.VERSION=Zw;ue.toFormData=$u;ue.AxiosError=ee;ue.Cancel=ue.CanceledError;ue.all=function(e){return Promise.all(e)};ue.spread=_P;ue.isAxiosError=wP;ue.mergeConfig=ni;ue.AxiosHeaders=It;ue.formToJSON=t=>Hw(L.isHTMLForm(t)?new FormData(t):t);ue.getAdapter=Xw.getAdapter;ue.HttpStatusCode=xd;ue.default=ue;var Dy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new TP;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const E=c<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IP=function(t){const e=tE(t);return nE.encodeByteArray(e,!0)},ru=function(t){return IP(t).replace(/\./g,"")},rE=function(t){try{return nE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=()=>SP().__FIREBASE_DEFAULTS__,AP=()=>{if(typeof process>"u"||typeof Dy>"u")return;const t=Dy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rE(t[1]);return e&&JSON.parse(e)},Hu=()=>{try{return RP()||AP()||CP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iE=t=>{var e,n;return(n=(e=Hu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PP=t=>{const e=iE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=Hu())===null||t===void 0?void 0:t.config},oE=t=>{var e;return(e=Hu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ru(JSON.stringify(n)),ru(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function OP(){var t;const e=(t=Hu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LP(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VP(){return!OP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lE(){try{return typeof indexedDB=="object"}catch{return!1}}function uE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function MP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FP,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new en(i,l,r)}}function UP(t,e){return t.replace(jP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jP=/\{\$([^}]+)}/g;function BP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function as(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(by(s)&&by(o)){if(!as(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function by(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function no(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zP(t,e){const n=new $P(t,e);return n.subscribe.bind(n)}class $P{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mh),i.error===void 0&&(i.error=mh),i.complete===void 0&&(i.complete=mh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=1e3,WP=2,KP=4*60*60*1e3,GP=.5;function Ly(t,e=HP,n=WP){const r=e*Math.pow(n,t),i=Math.round(GP*r*(Math.random()-.5)*2);return Math.min(KP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JP(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YP(t){return t===Ur?void 0:t}function JP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const ZP={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},ek=ne.INFO,tk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},nk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wu{constructor(e){this.name=e,this._logLevel=ek,this._logHandler=nk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const rk=(t,e)=>e.some(n=>t instanceof n);let Vy,My;function ik(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cE=new WeakMap,Od=new WeakMap,hE=new WeakMap,gh=new WeakMap,lp=new WeakMap;function ok(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cE.set(n,t)}).catch(()=>{}),lp.set(e,t),e}function ak(t){if(Od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Od.set(t,e)}let Dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lk(t){Dd=t(Dd)}function uk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yh(this),e,...n);return hE.set(r,e.sort?e.sort():[e]),mr(r)}:sk().includes(t)?function(...e){return t.apply(yh(this),e),mr(cE.get(this))}:function(...e){return mr(t.apply(yh(this),e))}}function ck(t){return typeof t=="function"?uk(t):(t instanceof IDBTransaction&&ak(t),rk(t,ik())?new Proxy(t,Dd):t)}function mr(t){if(t instanceof IDBRequest)return ok(t);if(gh.has(t))return gh.get(t);const e=ck(t);return e!==t&&(gh.set(t,e),lp.set(e,t)),e}const yh=t=>lp.get(t);function dE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const hk=["get","getKey","getAll","getAllKeys","count"],dk=["put","add","delete","clear"],vh=new Map;function Fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vh.get(e))return vh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return vh.set(e,s),s}lk(t=>({...t,get:(e,n,r)=>Fy(e,n)||t.get(e,n,r),has:(e,n)=>!!Fy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bd="@firebase/app",Uy="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Wu("@firebase/app"),mk="@firebase/app-compat",gk="@firebase/analytics-compat",yk="@firebase/analytics",vk="@firebase/app-check-compat",_k="@firebase/app-check",wk="@firebase/auth",Ek="@firebase/auth-compat",Tk="@firebase/database",Ik="@firebase/data-connect",Sk="@firebase/database-compat",Rk="@firebase/functions",Ak="@firebase/functions-compat",Ck="@firebase/installations",Pk="@firebase/installations-compat",kk="@firebase/messaging",Nk="@firebase/messaging-compat",xk="@firebase/performance",Ok="@firebase/performance-compat",Dk="@firebase/remote-config",bk="@firebase/remote-config-compat",Lk="@firebase/storage",Vk="@firebase/storage-compat",Mk="@firebase/firestore",Fk="@firebase/vertexai",Uk="@firebase/firestore-compat",jk="firebase",Bk="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="[DEFAULT]",zk={[bd]:"fire-core",[mk]:"fire-core-compat",[yk]:"fire-analytics",[gk]:"fire-analytics-compat",[_k]:"fire-app-check",[vk]:"fire-app-check-compat",[wk]:"fire-auth",[Ek]:"fire-auth-compat",[Tk]:"fire-rtdb",[Ik]:"fire-data-connect",[Sk]:"fire-rtdb-compat",[Rk]:"fire-fn",[Ak]:"fire-fn-compat",[Ck]:"fire-iid",[Pk]:"fire-iid-compat",[kk]:"fire-fcm",[Nk]:"fire-fcm-compat",[xk]:"fire-perf",[Ok]:"fire-perf-compat",[Dk]:"fire-rc",[bk]:"fire-rc-compat",[Lk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Mk]:"fire-fst",[Uk]:"fire-fst-compat",[Fk]:"fire-vertex","fire-js":"fire-js",[jk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map,$k=new Map,Vd=new Map;function jy(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(Vd.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Vd.set(e,t);for(const n of iu.values())jy(n,t);for(const n of $k.values())jy(n,t);return!0}function pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new fi("app","Firebase",qk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=Bk;function fE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=sE()),!n)throw gr.create("no-options");const s=iu.get(i);if(s){if(as(n,s.options)&&as(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new XP(i);for(const u of Vd.values())o.addComponent(u);const l=new Hk(n,r,o);return iu.set(i,l),l}function up(t=Ld){const e=iu.get(t);if(!e&&t===Ld&&sE())return fE();if(!e)throw gr.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let i=(r=zk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}fn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="firebase-heartbeat-database",Kk=1,$o="firebase-heartbeat-store";let _h=null;function pE(){return _h||(_h=dE(Wk,Kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),_h}async function Gk(t){try{const n=(await pE()).transaction($o),r=await n.objectStore($o).get(mE(t));return await n.done,r}catch(e){if(e instanceof en)Vn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function By(t,e){try{const r=(await pE()).transaction($o,"readwrite");await r.objectStore($o).put(e,mE(t)),await r.done}catch(n){if(n instanceof en)Vn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function mE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1024,Yk=30*24*60*60*1e3;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Yk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zy(),{heartbeatsToSend:r,unsentEntries:i}=Xk(this._heartbeatsCache.heartbeats),s=ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function zy(){return new Date().toISOString().substring(0,10)}function Xk(t,e=Qk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$y(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lE()?uE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return By(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return By(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $y(t){return ru(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){fn(new Jt("platform-logger",e=>new fk(e),"PRIVATE")),fn(new Jt("heartbeat",e=>new Jk(e),"PRIVATE")),jt(bd,Uy,t),jt(bd,Uy,"esm2017"),jt("fire-js","")}eN("");var qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,gE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function _(){}_.prototype=y.prototype,I.D=y.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(R,k,x){for(var C=Array(arguments.length-2),se=2;se<arguments.length;se++)C[se-2]=arguments[se];return y.prototype[k].apply(R,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,_){_||(_=0);var R=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)R[k]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(k=0;16>k;++k)R[k]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=I.g[0],_=I.g[1],k=I.g[2];var x=I.g[3],C=y+(x^_&(k^x))+R[0]+3614090360&4294967295;y=_+(C<<7&4294967295|C>>>25),C=x+(k^y&(_^k))+R[1]+3905402710&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(_^x&(y^_))+R[2]+606105819&4294967295,k=x+(C<<17&4294967295|C>>>15),C=_+(y^k&(x^y))+R[3]+3250441966&4294967295,_=k+(C<<22&4294967295|C>>>10),C=y+(x^_&(k^x))+R[4]+4118548399&4294967295,y=_+(C<<7&4294967295|C>>>25),C=x+(k^y&(_^k))+R[5]+1200080426&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(_^x&(y^_))+R[6]+2821735955&4294967295,k=x+(C<<17&4294967295|C>>>15),C=_+(y^k&(x^y))+R[7]+4249261313&4294967295,_=k+(C<<22&4294967295|C>>>10),C=y+(x^_&(k^x))+R[8]+1770035416&4294967295,y=_+(C<<7&4294967295|C>>>25),C=x+(k^y&(_^k))+R[9]+2336552879&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(_^x&(y^_))+R[10]+4294925233&4294967295,k=x+(C<<17&4294967295|C>>>15),C=_+(y^k&(x^y))+R[11]+2304563134&4294967295,_=k+(C<<22&4294967295|C>>>10),C=y+(x^_&(k^x))+R[12]+1804603682&4294967295,y=_+(C<<7&4294967295|C>>>25),C=x+(k^y&(_^k))+R[13]+4254626195&4294967295,x=y+(C<<12&4294967295|C>>>20),C=k+(_^x&(y^_))+R[14]+2792965006&4294967295,k=x+(C<<17&4294967295|C>>>15),C=_+(y^k&(x^y))+R[15]+1236535329&4294967295,_=k+(C<<22&4294967295|C>>>10),C=y+(k^x&(_^k))+R[1]+4129170786&4294967295,y=_+(C<<5&4294967295|C>>>27),C=x+(_^k&(y^_))+R[6]+3225465664&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^_&(x^y))+R[11]+643717713&4294967295,k=x+(C<<14&4294967295|C>>>18),C=_+(x^y&(k^x))+R[0]+3921069994&4294967295,_=k+(C<<20&4294967295|C>>>12),C=y+(k^x&(_^k))+R[5]+3593408605&4294967295,y=_+(C<<5&4294967295|C>>>27),C=x+(_^k&(y^_))+R[10]+38016083&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^_&(x^y))+R[15]+3634488961&4294967295,k=x+(C<<14&4294967295|C>>>18),C=_+(x^y&(k^x))+R[4]+3889429448&4294967295,_=k+(C<<20&4294967295|C>>>12),C=y+(k^x&(_^k))+R[9]+568446438&4294967295,y=_+(C<<5&4294967295|C>>>27),C=x+(_^k&(y^_))+R[14]+3275163606&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^_&(x^y))+R[3]+4107603335&4294967295,k=x+(C<<14&4294967295|C>>>18),C=_+(x^y&(k^x))+R[8]+1163531501&4294967295,_=k+(C<<20&4294967295|C>>>12),C=y+(k^x&(_^k))+R[13]+2850285829&4294967295,y=_+(C<<5&4294967295|C>>>27),C=x+(_^k&(y^_))+R[2]+4243563512&4294967295,x=y+(C<<9&4294967295|C>>>23),C=k+(y^_&(x^y))+R[7]+1735328473&4294967295,k=x+(C<<14&4294967295|C>>>18),C=_+(x^y&(k^x))+R[12]+2368359562&4294967295,_=k+(C<<20&4294967295|C>>>12),C=y+(_^k^x)+R[5]+4294588738&4294967295,y=_+(C<<4&4294967295|C>>>28),C=x+(y^_^k)+R[8]+2272392833&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^_)+R[11]+1839030562&4294967295,k=x+(C<<16&4294967295|C>>>16),C=_+(k^x^y)+R[14]+4259657740&4294967295,_=k+(C<<23&4294967295|C>>>9),C=y+(_^k^x)+R[1]+2763975236&4294967295,y=_+(C<<4&4294967295|C>>>28),C=x+(y^_^k)+R[4]+1272893353&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^_)+R[7]+4139469664&4294967295,k=x+(C<<16&4294967295|C>>>16),C=_+(k^x^y)+R[10]+3200236656&4294967295,_=k+(C<<23&4294967295|C>>>9),C=y+(_^k^x)+R[13]+681279174&4294967295,y=_+(C<<4&4294967295|C>>>28),C=x+(y^_^k)+R[0]+3936430074&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^_)+R[3]+3572445317&4294967295,k=x+(C<<16&4294967295|C>>>16),C=_+(k^x^y)+R[6]+76029189&4294967295,_=k+(C<<23&4294967295|C>>>9),C=y+(_^k^x)+R[9]+3654602809&4294967295,y=_+(C<<4&4294967295|C>>>28),C=x+(y^_^k)+R[12]+3873151461&4294967295,x=y+(C<<11&4294967295|C>>>21),C=k+(x^y^_)+R[15]+530742520&4294967295,k=x+(C<<16&4294967295|C>>>16),C=_+(k^x^y)+R[2]+3299628645&4294967295,_=k+(C<<23&4294967295|C>>>9),C=y+(k^(_|~x))+R[0]+4096336452&4294967295,y=_+(C<<6&4294967295|C>>>26),C=x+(_^(y|~k))+R[7]+1126891415&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~_))+R[14]+2878612391&4294967295,k=x+(C<<15&4294967295|C>>>17),C=_+(x^(k|~y))+R[5]+4237533241&4294967295,_=k+(C<<21&4294967295|C>>>11),C=y+(k^(_|~x))+R[12]+1700485571&4294967295,y=_+(C<<6&4294967295|C>>>26),C=x+(_^(y|~k))+R[3]+2399980690&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~_))+R[10]+4293915773&4294967295,k=x+(C<<15&4294967295|C>>>17),C=_+(x^(k|~y))+R[1]+2240044497&4294967295,_=k+(C<<21&4294967295|C>>>11),C=y+(k^(_|~x))+R[8]+1873313359&4294967295,y=_+(C<<6&4294967295|C>>>26),C=x+(_^(y|~k))+R[15]+4264355552&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~_))+R[6]+2734768916&4294967295,k=x+(C<<15&4294967295|C>>>17),C=_+(x^(k|~y))+R[13]+1309151649&4294967295,_=k+(C<<21&4294967295|C>>>11),C=y+(k^(_|~x))+R[4]+4149444226&4294967295,y=_+(C<<6&4294967295|C>>>26),C=x+(_^(y|~k))+R[11]+3174756917&4294967295,x=y+(C<<10&4294967295|C>>>22),C=k+(y^(x|~_))+R[2]+718787259&4294967295,k=x+(C<<15&4294967295|C>>>17),C=_+(x^(k|~y))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var _=y-this.blockSize,R=this.B,k=this.h,x=0;x<y;){if(k==0)for(;x<=_;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(R[k++]=I.charCodeAt(x++),k==this.blockSize){i(this,R),k=0;break}}else for(;x<y;)if(R[k++]=I[x++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var _=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=_&255,_/=256;for(this.u(I),I=Array(16),y=_=0;4>y;++y)for(var R=0;32>R;R+=8)I[_++]=this.g[y]>>>R&255;return I};function s(I,y){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=y(I)}function o(I,y){this.h=y;for(var _=[],R=!0,k=I.length-1;0<=k;k--){var x=I[k]|0;R&&x==y||(_[k]=x,R=!1)}this.g=_}var l={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return P(c(-I));for(var y=[],_=1,R=0;I>=_;R++)y[R]=I/_|0,_*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return P(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(y,8)),R=p,k=0;k<I.length;k+=8){var x=Math.min(8,I.length-k),C=parseInt(I.substring(k,k+x),y);8>x?(x=c(Math.pow(y,x)),R=R.j(x).add(c(C))):(R=R.j(_),R=R.add(c(C)))}return R}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var I=0,y=1,_=0;_<this.g.length;_++){var R=this.i(_);I+=(0<=R?R:4294967296+R)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(E(this))return"0";if(A(this))return"-"+P(this).toString(I);for(var y=c(Math.pow(I,6)),_=this,R="";;){var k=O(_,y).g;_=T(_,k.j(y));var x=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=k,E(_))return x+R;for(;6>x.length;)x="0"+x;R=x+R}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function E(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function A(I){return I.h==-1}t.l=function(I){return I=T(this,I),A(I)?-1:E(I)?0:1};function P(I){for(var y=I.g.length,_=[],R=0;R<y;R++)_[R]=~I.g[R];return new o(_,~I.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],R=0,k=0;k<=y;k++){var x=R+(this.i(k)&65535)+(I.i(k)&65535),C=(x>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);R=C>>>16,x&=65535,C&=65535,_[k]=C<<16|x}return new o(_,_[_.length-1]&-2147483648?-1:0)};function T(I,y){return I.add(P(y))}t.j=function(I){if(E(this)||E(I))return p;if(A(this))return A(I)?P(this).j(P(I)):P(P(this).j(I));if(A(I))return P(this.j(P(I)));if(0>this.l(w)&&0>I.l(w))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,_=[],R=0;R<2*y;R++)_[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<I.g.length;k++){var x=this.i(R)>>>16,C=this.i(R)&65535,se=I.i(k)>>>16,gn=I.i(k)&65535;_[2*R+2*k]+=C*gn,v(_,2*R+2*k),_[2*R+2*k+1]+=x*gn,v(_,2*R+2*k+1),_[2*R+2*k+1]+=C*se,v(_,2*R+2*k+1),_[2*R+2*k+2]+=x*se,v(_,2*R+2*k+2)}for(R=0;R<y;R++)_[R]=_[2*R+1]<<16|_[2*R];for(R=y;R<2*y;R++)_[R]=0;return new o(_,0)};function v(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function S(I,y){this.g=I,this.h=y}function O(I,y){if(E(y))throw Error("division by zero");if(E(I))return new S(p,p);if(A(I))return y=O(P(I),y),new S(P(y.g),P(y.h));if(A(y))return y=O(I,P(y)),new S(P(y.g),y.h);if(30<I.g.length){if(A(I)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,R=y;0>=R.l(I);)_=M(_),R=M(R);var k=U(_,1),x=U(R,1);for(R=U(R,2),_=U(_,2);!E(R);){var C=x.add(R);0>=C.l(I)&&(k=k.add(_),x=C),R=U(R,1),_=U(_,1)}return y=T(I,k.j(y)),new S(k,y)}for(k=p;0<=I.l(y);){for(_=Math.max(1,Math.floor(I.m()/y.m())),R=Math.ceil(Math.log(_)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),x=c(_),C=x.j(y);A(C)||0<C.l(I);)_-=R,x=c(_),C=x.j(y);E(x)&&(x=m),k=k.add(x),I=T(I,C)}return new S(k,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],R=0;R<y;R++)_[R]=this.i(R)&I.i(R);return new o(_,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],R=0;R<y;R++)_[R]=this.i(R)|I.i(R);return new o(_,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),_=[],R=0;R<y;R++)_[R]=this.i(R)^I.i(R);return new o(_,this.h^I.h)};function M(I){for(var y=I.g.length+1,_=[],R=0;R<y;R++)_[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(_,I.h)}function U(I,y){var _=y>>5;y%=32;for(var R=I.g.length-_,k=[],x=0;x<R;x++)k[x]=0<y?I.i(x+_)>>>y|I.i(x+_+1)<<32-y:I.i(x+_);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Yr=o}).apply(typeof qy<"u"?qy:typeof self<"u"?self:typeof window<"u"?window:{});var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yE,ro,vE,wl,Md,_E,wE,EE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xa=="object"&&Xa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in f))break e;f=f[D]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,D={next:function(){if(!g&&f<a.length){var b=f++;return{value:h(b,a[b]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function E(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,D,b){for(var z=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)z[pe-2]=arguments[pe];return h.prototype[D].apply(g,z)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const D=a.length||0,b=g.length||0;a.length=D+b;for(let z=0;z<b;z++)a[D+z]=g[z]}else a.push(g)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let f,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(f in g)a[f]=g[f];for(let b=0;b<_.length;b++)f=_[b],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function C(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class se{constructor(){this.h=this.g=null}add(h,f){const g=gn.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var gn=new T(()=>new fe,a=>a.reset());class fe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,$=!1,G=new se,Y=()=>{const a=l.Promise.resolve(void 0);pt=()=>{a.then(me)}};var me=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){x(f)}var h=gn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function vn(a,h){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{O(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&vn.aa.h.call(this)}}E(vn,Pe);var _n={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),UI=0;function jI(a,h,f,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=D,this.key=++UI,this.da=this.fa=!1}function ya(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function va(a){this.src=a,this.g={},this.h=0}va.prototype.add=function(a,h,f,g,D){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var z=gc(a,h,g,D);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new jI(h,this.src,b,!!g,D),h.fa=f,a.push(h)),h};function mc(a,h){var f=h.type;if(f in a.g){var g=a.g[f],D=Array.prototype.indexOf.call(g,h,void 0),b;(b=0<=D)&&Array.prototype.splice.call(g,D,1),b&&(ya(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function gc(a,h,f,g){for(var D=0;D<a.length;++D){var b=a[D];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==g)return D}return-1}var yc="closure_lm_"+(1e6*Math.random()|0),vc={};function tm(a,h,f,g,D){if(Array.isArray(h)){for(var b=0;b<h.length;b++)tm(a,h[b],f,g,D);return null}return f=im(f),a&&a[wn]?a.K(h,f,c(g)?!!g.capture:!!g,D):BI(a,h,f,!1,g,D)}function BI(a,h,f,g,D,b){if(!h)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,pe=wc(a);if(pe||(a[yc]=pe=new va(a)),f=pe.add(h,f,g,z,b),f.proxy)return f;if(g=zI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)yn||(D=z),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(rm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function zI(){function a(f){return h.call(a.src,a.listener,f)}const h=$I;return a}function nm(a,h,f,g,D){if(Array.isArray(h))for(var b=0;b<h.length;b++)nm(a,h[b],f,g,D);else g=c(g)?!!g.capture:!!g,f=im(f),a&&a[wn]?(a=a.i,h=String(h).toString(),h in a.g&&(b=a.g[h],f=gc(b,f,g,D),-1<f&&(ya(b[f]),Array.prototype.splice.call(b,f,1),b.length==0&&(delete a.g[h],a.h--)))):a&&(a=wc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=gc(h,f,g,D)),(f=-1<a?h[a]:null)&&_c(f))}function _c(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])mc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(rm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=wc(h))?(mc(f,a),f.h==0&&(f.src=null,h[yc]=null)):ya(a)}}}function rm(a){return a in vc?vc[a]:vc[a]="on"+a}function $I(a,h){if(a.da)a=!0;else{h=new vn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&_c(a),a=f.call(g,h)}return a}function wc(a){return a=a[yc],a instanceof va?a:null}var Ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function im(a){return typeof a=="function"?a:(a[Ec]||(a[Ec]=function(h){return a.handleEvent(h)}),a[Ec])}function Ye(){he.call(this),this.i=new va(this),this.M=this,this.F=null}E(Ye,he),Ye.prototype[wn]=!0,Ye.prototype.removeEventListener=function(a,h,f,g){nm(this,a,h,f,g)};function at(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Pe(h,a);else if(h instanceof Pe)h.target=h.target||a;else{var D=h;h=new Pe(g,a),R(h,D)}if(D=!0,f)for(var b=f.length-1;0<=b;b--){var z=h.g=f[b];D=_a(z,g,!0,h)&&D}if(z=h.g=a,D=_a(z,g,!0,h)&&D,D=_a(z,g,!1,h)&&D,f)for(b=0;b<f.length;b++)z=h.g=f[b],D=_a(z,g,!1,h)&&D}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ya(f[g]);delete a.g[h],a.h--}}this.F=null},Ye.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ye.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function _a(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,b=0;b<h.length;++b){var z=h[b];if(z&&!z.da&&z.capture==f){var pe=z.listener,$e=z.ha||z.src;z.fa&&mc(a.i,z),D=pe.call($e,g)!==!1&&D}}return D&&!g.defaultPrevented}function sm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function om(a){a.g=sm(()=>{a.g=null,a.i&&(a.i=!1,om(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qI extends he{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:om(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(a){he.call(this),this.h=a,this.g={}}E(ks,he);var am=[];function lm(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&_c(h)},a),a.g={}}ks.prototype.N=function(){ks.aa.N.call(this),lm(this)},ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tc=l.JSON.stringify,HI=l.JSON.parse,WI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ic(){}Ic.prototype.h=null;function um(a){return a.h||(a.h=a.i())}function cm(){}var Ns={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){Pe.call(this,"d")}E(Sc,Pe);function Rc(){Pe.call(this,"c")}E(Rc,Pe);var Dr={},hm=null;function wa(){return hm=hm||new Ye}Dr.La="serverreachability";function dm(a){Pe.call(this,Dr.La,a)}E(dm,Pe);function xs(a){const h=wa();at(h,new dm(h))}Dr.STAT_EVENT="statevent";function fm(a,h){Pe.call(this,Dr.STAT_EVENT,a),this.stat=h}E(fm,Pe);function lt(a){const h=wa();at(h,new fm(h,a))}Dr.Ma="timingevent";function pm(a,h){Pe.call(this,Dr.Ma,a),this.size=h}E(pm,Pe);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function KI(a,h,f,g,D,b){a.info(function(){if(a.g)if(b)for(var z="",pe=b.split("&"),$e=0;$e<pe.length;$e++){var le=pe[$e].split("=");if(1<le.length){var Je=le[0];le=le[1];var Xe=Je.split("_");z=2<=Xe.length&&Xe[1]=="type"?z+(Je+"="+le+"&"):z+(Je+"=redacted&")}}else z=null;else z=b;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+f+`
`+z})}function GI(a,h,f,g,D,b,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+f+`
`+b+" "+z})}function vi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+YI(a,f)+(g?" "+g:"")})}function QI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ds.prototype.info=function(){};function YI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var b=D[0];if(b!="noop"&&b!="stop"&&b!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return Tc(f)}catch{return h}}var Ea={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ac;function Ta(){}E(Ta,Ic),Ta.prototype.g=function(){return new XMLHttpRequest},Ta.prototype.i=function(){return{}},Ac=new Ta;function Bn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var ym={},Cc={};function Pc(a,h,f){a.L=1,a.v=Aa(En(h)),a.m=f,a.P=!0,vm(a,null)}function vm(a,h){a.F=Date.now(),Ia(a),a.A=En(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Om(f.i,"t",g),a.C=0,f=a.j.J,a.h=new gm,a.g=Ym(a.j,f?h:null,!a.m),0<a.O&&(a.M=new qI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(am[0]=D.toString()),D=am);for(var b=0;b<D.length;b++){var z=tm(f,D[b],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),xs(),KI(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=Tn(this.g);var h=this.g.Ba();const Ei=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Um(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=Ei?xs(3):xs(2)),kc(this);var f=this.g.Z();this.X=f;t:if(_m(this)){var g=Um(this.g);a="";var D=g.length,b=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),bs(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(b&&h==D-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,GI(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,$e=this.g;if((pe=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var le=pe;break t}}le=null}if(f=le)vi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nc(this,f);else{this.o=!1,this.s=3,lt(12),br(this),bs(this);break e}}if(this.P){f=!0;let $t;for(;!this.J&&this.C<z.length;)if($t=JI(this,z),$t==Cc){Xe==4&&(this.s=4,lt(14),f=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if($t==ym){this.s=4,lt(15),vi(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else vi(this.i,this.l,$t,null),Nc(this,$t);if(_m(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||z.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)vi(this.i,this.l,z,"[Invalid Chunked Response]"),br(this),bs(this);else if(0<z.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Vc(Je),Je.M=!0,lt(11))}}else vi(this.i,this.l,z,null),Nc(this,z);Xe==4&&br(this),this.o&&!this.J&&(Xe==4?Wm(this.j,this):(this.o=!1,Ia(this)))}else pS(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),br(this),bs(this)}}}catch{}finally{}};function _m(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function JI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Cc:(f=Number(h.substring(f,g)),isNaN(f)?ym:(g+=1,g+f>h.length?Cc:(h=h.slice(g,g+f),a.C=g+f,h)))}Bn.prototype.cancel=function(){this.J=!0,br(this)};function Ia(a){a.S=Date.now()+a.I,wm(a,a.I)}function wm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Os(m(a.ba,a),h)}function kc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QI(this.i,this.A),this.L!=2&&(xs(),lt(17)),br(this),this.s=2,bs(this)):wm(this,this.S-a)};function bs(a){a.j.G==0||a.J||Wm(a.j,a)}function br(a){kc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,lm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Nc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||xc(f.h,a))){if(!a.K&&xc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Oa(f),Na(f);else break e;Lc(f),lt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Os(m(f.Za,f),6e3));if(1>=Im(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&Oa(f),!v(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let le=D[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const Je=le[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Xe=le[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const Ei=le[5];Ei!=null&&typeof Ei=="number"&&0<Ei&&(g=1.5*Ei,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const $t=a.g;if($t){const ba=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ba){var b=g.h;b.g||ba.indexOf("spdy")==-1&&ba.indexOf("quic")==-1&&ba.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Oc(b,b.h),b.h=null))}if(g.D){const Mc=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(g.ya=Mc,ye(g.I,g.D,Mc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=Qm(g,g.J?g.ia:null,g.W),z.K){Sm(g.h,z);var pe=z,$e=g.L;$e&&(pe.I=$e),pe.B&&(kc(pe),Ia(pe)),g.g=z}else qm(g);0<f.i.length&&xa(f)}else le[0]!="stop"&&le[0]!="close"||Vr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Vr(f,7):bc(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}xs(4)}catch{}}var XI=class{constructor(a,h){this.g=a,this.map=h}};function Em(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Im(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function Sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Em.prototype.cancel=function(){if(this.i=Rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function ZI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function eS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Am(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=eS(a),g=ZI(a),D=g.length,b=0;b<D;b++)h.call(void 0,g[b],f&&f[b],a)}var Cm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tS(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),D=null;if(0<=g){var b=a[f].substring(0,g);D=a[f].substring(g+1)}else b=a[f];h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Sa(this,a.j),this.o=a.o,this.g=a.g,Ra(this,a.s),this.l=a.l;var h=a.i,f=new Ms;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Pm(this,f),this.m=a.m}else a&&(h=String(a).match(Cm))?(this.h=!1,Sa(this,h[1]||"",!0),this.o=Ls(h[2]||""),this.g=Ls(h[3]||"",!0),Ra(this,h[4]),this.l=Ls(h[5]||"",!0),Pm(this,h[6]||"",!0),this.m=Ls(h[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}Lr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Vs(h,km,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vs(h,km,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Vs(f,f.charAt(0)=="/"?iS:rS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Vs(f,oS)),a.join("")};function En(a){return new Lr(a)}function Sa(a,h,f){a.j=f?Ls(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ra(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Pm(a,h,f){h instanceof Ms?(a.i=h,aS(a.i,a.h)):(f||(h=Vs(h,sS)),a.i=new Ms(h,a.h))}function ye(a,h,f){a.i.set(h,f)}function Aa(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ls(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,nS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var km=/[#\/\?@]/g,rS=/[#\?:]/g,iS=/[#\?]/g,sS=/[#\?@]/g,oS=/#/g;function Ms(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&tS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ms.prototype,t.add=function(a,h){zn(this),this.i=null,a=_i(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Nm(a,h){zn(a),h=_i(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function xm(a,h){return zn(a),h=_i(a,h),a.g.has(h)}t.forEach=function(a,h){zn(this),this.g.forEach(function(f,g){f.forEach(function(D){a.call(h,D,g,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const D=a[g];for(let b=0;b<D.length;b++)f.push(h[g])}return f},t.V=function(a){zn(this);let h=[];if(typeof a=="string")xm(this,a)&&(h=h.concat(this.g.get(_i(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return zn(this),this.i=null,a=_i(this,a),xm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Om(a,h,f){Nm(a,h),0<f.length&&(a.i=null,a.g.set(_i(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const b=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var D=b;z[g]!==""&&(D+="="+encodeURIComponent(String(z[g]))),a.push(D)}}return this.i=a.join("&")};function _i(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function aS(a,h){h&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(f,g){var D=g.toLowerCase();g!=D&&(Nm(this,g),Om(this,D,f))},a)),a.j=h}function lS(a,h){const f=new Ds;if(l.Image){const g=new Image;g.onload=w($n,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w($n,f,"TestLoadImage: error",!1,h,g),g.onabort=w($n,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w($n,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function uS(a,h){const f=new Ds,g=new AbortController,D=setTimeout(()=>{g.abort(),$n(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(D),b.ok?$n(f,"TestPingServer: ok",!0,h):$n(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),$n(f,"TestPingServer: error",!1,h)})}function $n(a,h,f,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(f)}catch{}}function cS(){this.g=new WI}function hS(a,h,f){const g=f||"";try{Am(a,function(D,b){let z=D;c(D)&&(z=Tc(D)),h.push(g+b+"="+encodeURIComponent(z))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function Ca(a){this.l=a.Ub||null,this.j=a.eb||!1}E(Ca,Ic),Ca.prototype.g=function(){return new Pa(this.l,this.j)},Ca.prototype.i=function(a){return function(){return a}}({});function Pa(a,h){Ye.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Pa,Ye),t=Pa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Fs(this):Us(this),this.readyState==3&&Dm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},t.Qa=function(a){this.g&&(this.response=a,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Us(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bm(a){let h="";return U(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Dc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=bm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ye(a,h,f))}function Re(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Re,Ye);var dS=/^https?$/i,fS=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ac.g(),this.v=this.o?um(this.o):um(Ac),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){Lm(this,b);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)f.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())f.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fS,h,void 0))||g||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of f)this.g.setRequestHeader(b,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fm(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Lm(this,b)}};function Lm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Vm(a),ka(a)}function Vm(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Mm(this):this.bb())},t.bb=function(){Mm(this)};function Mm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)sm(a.Ea,0,a);else if(at(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var D=String(a.D).match(Cm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),g=!dS.test(D?D.toLowerCase():"")}f=g}if(f)at(a,"complete"),at(a,"success");else{a.m=6;try{var b=2<Tn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Vm(a)}}finally{ka(a)}}}}function ka(a,h){if(a.g){Fm(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{f.onreadystatechange=g}catch{}}}function Fm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),HI(h)}};function Um(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pS(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=k(a[g]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[D]||[];h[D]=b,b.push(f)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function jm(a){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=js("baseRetryDelayMs",5e3,a),this.cb=js("retryDelaySeedMs",1e4,a),this.Wa=js("forwardChannelMaxRetries",2,a),this.wa=js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Em(a&&a.concurrentRequestLimit),this.Da=new cS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){lt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Qm(this,null,this.W),xa(this)};function bc(a){if(Bm(a),a.G==3){var h=a.U++,f=En(a.I);if(ye(f,"SID",a.K),ye(f,"RID",h),ye(f,"TYPE","terminate"),Bs(a,f),h=new Bn(a,a.j,h),h.L=2,h.v=Aa(En(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ym(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ia(h)}Gm(a)}function Na(a){a.g&&(Vc(a),a.g.cancel(),a.g=null)}function Bm(a){Na(a),a.u&&(l.clearTimeout(a.u),a.u=null),Oa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function xa(a){if(!Tm(a.h)&&!a.s){a.s=!0;var h=a.Ga;pt||Y(),$||(pt(),$=!0),G.add(h,a),a.B=0}}function mS(a,h){return Im(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Os(m(a.Ga,a,h),Km(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Bn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),R(b,this.S)):b=this.S),this.m!==null||this.O||(D.H=b,b=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=$m(this,D,h),f=En(this.I),ye(f,"RID",a),ye(f,"CVER",22),this.D&&ye(f,"X-HTTP-Session-Id",this.D),Bs(this,f),b&&(this.O?h="headers="+encodeURIComponent(String(bm(b)))+"&"+h:this.m&&Dc(f,this.m,b)),Oc(this.h,D),this.Ua&&ye(f,"TYPE","init"),this.P?(ye(f,"$req",h),ye(f,"SID","null"),D.T=!0,Pc(D,f,null)):Pc(D,f,h),this.G=2}}else this.G==3&&(a?zm(this,a):this.i.length==0||Tm(this.h)||zm(this))};function zm(a,h){var f;h?f=h.l:f=a.U++;const g=En(a.I);ye(g,"SID",a.K),ye(g,"RID",f),ye(g,"AID",a.T),Bs(a,g),a.m&&a.o&&Dc(g,a.m,a.o),f=new Bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=$m(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oc(a.h,f),Pc(f,g,h)}function Bs(a,h){a.H&&U(a.H,function(f,g){ye(h,g,f)}),a.l&&Am({},function(f,g){ye(h,g,f)})}function $m(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let b=-1;for(;;){const z=["count="+f];b==-1?0<f?(b=D[0].g,z.push("ofs="+b)):b=0:z.push("ofs="+b);let pe=!0;for(let $e=0;$e<f;$e++){let le=D[$e].g;const Je=D[$e].map;if(le-=b,0>le)b=Math.max(0,D[$e].g-100),pe=!1;else try{hS(Je,z,"req"+le+"_")}catch{g&&g(Je)}}if(pe){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function qm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;pt||Y(),$||(pt(),$=!0),G.add(h,a),a.v=0}}function Lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Os(m(a.Fa,a),Km(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Hm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Os(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Na(this),Hm(this))};function Vc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Hm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=En(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),Bs(a,h),a.m&&a.o&&Dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Aa(En(h)),f.m=null,f.P=!0,vm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Na(this),Lc(this),lt(19))};function Oa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Wm(a,h){var f=null;if(a.g==h){Oa(a),Vc(a),a.g=null;var g=2}else if(xc(a.h,h))f=h.D,Sm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;g=wa(),at(g,new pm(g,f)),xa(a)}else qm(a);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&mS(a,h)||g==2&&Lc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Km(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const D=!g;g=new Lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Sa(g,"https"),Aa(g),D?lS(g.toString(),f):uS(g.toString(),f)}else lt(2);a.G=0,a.l&&a.l.sa(h),Gm(a),Bm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Gm(a){if(a.G=0,a.ka=[],a.l){const h=Rm(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Qm(a,h,f){var g=f instanceof Lr?En(f):new Lr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ra(g,g.s);else{var D=l.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var b=new Lr(null);g&&Sa(b,g),h&&(b.g=h),D&&Ra(b,D),f&&(b.l=f),g=b}return f=a.D,h=a.ya,f&&h&&ye(g,f,h),ye(g,"VER",a.la),Bs(a,g),g}function Ym(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Re(new Ca({eb:f})):new Re(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jm(){}t=Jm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Da(){}Da.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){Ye.call(this),this.g=new jm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wi(this)}E(Rt,Ye),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){bc(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Tc(a),a=f);h.i.push(new XI(h.Ya++,a)),h.G==3&&xa(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,Rt.aa.N.call(this)};function Xm(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}E(Xm,Sc);function Zm(){Rc.call(this),this.status=1}E(Zm,Rc);function wi(a){this.g=a}E(wi,Jm),wi.prototype.ua=function(){at(this.g,"a")},wi.prototype.ta=function(a){at(this.g,new Xm(a))},wi.prototype.sa=function(a){at(this.g,new Zm)},wi.prototype.ra=function(){at(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,EE=function(){return new Da},wE=function(){return wa()},_E=Dr,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,wl=Ea,mm.COMPLETE="complete",vE=mm,cm.EventType=Ns,Ns.OPEN="a",Ns.CLOSE="b",Ns.ERROR="c",Ns.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,ro=cm,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,yE=Re}).apply(typeof Xa<"u"?Xa:typeof self<"u"?self:typeof window<"u"?window:{});const Hy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Wu("@firebase/firestore");function Ri(){return ri.logLevel}function q(t,...e){if(ri.logLevel<=ne.DEBUG){const n=e.map(cp);ri.debug(`Firestore (${Is}): ${t}`,...n)}}function Mn(t,...e){if(ri.logLevel<=ne.ERROR){const n=e.map(cp);ri.error(`Firestore (${Is}): ${t}`,...n)}}function ls(t,...e){if(ri.logLevel<=ne.WARN){const n=e.map(cp);ri.warn(`Firestore (${Is}): ${t}`,...n)}}function cp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function ce(t,e){t||J()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class nN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rN{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new nt(e)}}class iN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class sN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new oN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new Me(0,0))}static max(){return new X(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends qo{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const uN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends qo{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return uN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ce.fromString(e))}static fromName(e){return new K(Ce.fromString(e).popFirst(5))}static empty(){return new K(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ce(e.slice()))}}function cN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new wr(i,K.empty(),e)}function hN(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(X.min(),K.empty(),-1)}static max(){return new wr(X.max(),K.empty(),-1)}}function dN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==fN)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ku.oe=-1;function Gu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function gN(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wy(e)),e=vN(t.get(n),e);return Wy(e)}function vN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Wy(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function SE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Za(this.root,e,this.comparator,!1)}getReverseIterator(){return new Za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Za(this.root,e,this.comparator,!0)}}class Za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gy(this.data.getIterator())}getIteratorFrom(e){return new Gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Fe(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new RE("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const _N=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(ce(!!t),typeof t=="string"){let e=0;const n=_N.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qu(t){const e=t.mapValue.fields.__previous_value__;return hp(e)?Qu(e):e}function Ho(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hp(t)?4:TN(t)?9007199254740991:EN(t)?10:11:J()}function pn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Tr(i.bytesValue).isEqual(Tr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?su(o)===su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ky(o)!==Ky(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function Ko(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Qy(t.timestampValue,e.timestampValue);case 4:return Qy(Ho(t),Ho(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Tr(s),u=Tr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ie(l[c],u[c]);if(d!==0)return d}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(ke(s.latitude),ke(o.latitude));return l!==0?l:ie(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,A=ie(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0);return A!==0?A:Yy(w,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===el.mapValue&&o===el.mapValue)return 0;if(s===el.mapValue)return 1;if(o===el.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ie(u[p],d[p]);if(m!==0)return m;const w=cs(l[u[p]],c[d[p]]);if(w!==0)return w}return ie(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J()}}function Qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Er(t),r=Er(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function Yy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=cs(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function hs(t){return Fd(t)}function Fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Fd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Fd(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function El(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qu(t);return e?16+El(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+El(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return kr(r.fields,(s,o)=>{i+=s.length+El(o)}),i}(t.mapValue);default:throw J()}}function Ud(t){return!!t&&"integerValue"in t}function dp(t){return!!t&&"arrayValue"in t}function Jy(t){return!!t&&"nullValue"in t}function Xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tl(t){return!!t&&"mapValue"in t}function EN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(go(this.value))}}function AE(t){const e=[];return kr(t.fields,(n,r)=>{const i=new We([n]);if(Tl(r)){const s=AE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,X.min(),X.min(),X.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,X.min(),X.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,X.min(),X.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.position=e,this.inclusive=n}}function Zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ev(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n="asc"){this.field=e,this.dir=n}}function IN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{}class Le extends CE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RN(e,n,r):n==="array-contains"?new PN(e,r):n==="in"?new kN(e,r):n==="not-in"?new NN(e,r):n==="array-contains-any"?new xN(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AN(e,r):new CN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends CE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mn(e,n)}matches(e){return PE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function PE(t){return t.op==="and"}function kE(t){return SN(t)&&PE(t)}function SN(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function jd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(kE(t))return t.filters.map(e=>jd(e)).join(",");{const e=t.filters.map(n=>jd(n)).join(",");return`${t.op}(${e})`}}function NE(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&NE(o,i.filters[l]),!0):!1}(t,e):void J()}function xE(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(xE).join(" ,")+"}"}(t):"Filter"}class RN extends Le{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class AN extends Le{constructor(e,n){super(e,"in",n),this.keys=OE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CN extends Le{constructor(e,n){super(e,"not-in",n),this.keys=OE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class PN extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dp(n)&&Ko(n.arrayValue,this.value)}}class kN extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class NN extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class xN extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function tv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ON(t,e,n,r,i,s,o)}function fp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.ue=n}return e.ue}function pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ev(t.startAt,e.startAt)&&ev(t.endAt,e.endAt)}function Bd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function DN(t,e,n,r,i,s,o,l){return new Yu(t,e,n,r,i,s,o,l)}function mp(t){return new Yu(t)}function nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bN(t){return t.collectionGroup!==null}function yo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new au(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new au(We.keyField(),r))}return e.ce}function ln(t){const e=Z(t);return e.le||(e.le=LN(e,yo(t))),e.le}function LN(t,e){if(t.limitType==="F")return tv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new au(i.field,s)});const n=t.endAt?new ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ou(t.startAt.position,t.startAt.inclusive):null;return tv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zd(t,e,n){return new Yu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return pp(ln(t),ln(e))&&t.limitType===e.limitType}function DE(t){return`${fp(ln(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xE(i)).join(", ")}]`),Gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>hs(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Zy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const c=Zy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),i))}(t,e)}function VN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bE(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=MN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MN(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?cs(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return SE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Se(K.comparator);function Fn(){return FN}const LE=new Se(K.comparator);function io(...t){let e=LE;for(const n of t)e=e.insert(n.key,n);return e}function VE(t){let e=LE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return vo()}function ME(){return vo()}function vo(){return new mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const UN=new Se(K.comparator),jN=new Fe(K.comparator);function re(...t){let e=jN;for(const n of t)e=e.add(n);return e}const BN=new Fe(ie);function zN(){return BN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function FE(t){return{integerValue:""+t}}function $N(t,e){return gN(e)?FE(e):gp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function qN(t,e,n){return t instanceof lu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hp(s)&&(s=Qu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ds?jE(t,e):t instanceof Go?BE(t,e):function(i,s){const o=UE(i,s),l=rv(o)+rv(i.Pe);return Ud(o)&&Ud(i.Pe)?FE(l):gp(i.serializer,l)}(t,e)}function HN(t,e,n){return t instanceof ds?jE(t,e):t instanceof Go?BE(t,e):n}function UE(t,e){return t instanceof uu?function(r){return Ud(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lu extends Zu{}class ds extends Zu{constructor(e){super(),this.elements=e}}function jE(t,e){const n=zE(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends Zu{constructor(e){super(),this.elements=e}}function BE(t,e){let n=zE(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class uu extends Zu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function rv(t){return ke(t.integerValue||t.doubleValue)}function zE(t){return dp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.field=e,this.transform=n}}function KN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ds&&i instanceof ds||r instanceof Go&&i instanceof Go?us(r.elements,i.elements,pn):r instanceof uu&&i instanceof uu?pn(r.Pe,i.Pe):r instanceof lu&&i instanceof lu}(t.transform,e.transform)}class GN{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function $E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HE(t.key,un.none()):new la(t.key,t.data,un.none());{const n=t.data,r=yt.empty();let i=new Fe(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new Pt(i.toArray()),un.none())}}function QN(t,e,n){t instanceof la?function(i,s,o){const l=i.value.clone(),u=sv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!Il(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=sv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof la?function(s,o,l,u){if(!Il(s.precondition,o))return l;const c=s.value.clone(),d=ov(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,l,u){if(!Il(s.precondition,o))return l;const c=ov(s.fieldTransforms,u,o),d=o.data;return d.setAll(qE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Il(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=UE(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function iv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&us(r,i,(s,o)=>KN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sv(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,HN(o,l,n[i]))}return r}function ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qN(s,o,e))}return r}class HE extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JN extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ME();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=$E(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>iv(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>iv(n,r))}}class yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return UN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,oe;function tx(t){switch(t){default:return J();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function WE(t){if(t===void 0)return Mn("GRPC error has no .code"),j.UNKNOWN;switch(t){case xe.OK:return j.OK;case xe.CANCELLED:return j.CANCELLED;case xe.UNKNOWN:return j.UNKNOWN;case xe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case xe.INTERNAL:return j.INTERNAL;case xe.UNAVAILABLE:return j.UNAVAILABLE;case xe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case xe.NOT_FOUND:return j.NOT_FOUND;case xe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case xe.ABORTED:return j.ABORTED;case xe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case xe.DATA_LOSS:return j.DATA_LOSS;default:return J()}}(oe=xe||(xe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new Yr([4294967295,4294967295],0);function av(t){const e=nx().encode(t),n=new gE;return n.update(e),new Uint8Array(n.digest())}function lv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new so(`Invalid padding: ${n}`);if(r<0)throw new so(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new so(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new so(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Yr.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(Yr.fromNumber(r)));return i.compare(rx)===1&&(i=new Yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=av(e),[r,i]=lv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=av(e),[r,i]=lv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class so extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(X.min(),i,new Se(ie),Fn(),re())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class KE{constructor(e,n){this.targetId=e,this.me=n}}class GE{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uv{constructor(){this.fe=0,this.ge=cv(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new ua(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=cv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ix{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=tl(),this.Qe=tl(),this.Ke=new Se(ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(Bd(s))if(r===0){const o=new K(s.path);this.We(n,o,it.newNoDocument(o,X.min()))}else ce(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),u=l?this.et(l,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(u){if(u instanceof RE)return ls("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vp(o,i,s)}catch(u){return ls(u instanceof so?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&Bd(l.target)){const u=new K(l.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new tc(e,n,this.Ke,this.ke,r);return this.ke=Fn(),this.qe=tl(),this.Qe=tl(),this.Ke=new Se(ie),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new uv,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Fe(ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Fe(ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new uv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function tl(){return new Se(K.comparator)}function cv(){return new Se(K.comparator)}const sx={asc:"ASCENDING",desc:"DESCENDING"},ox={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ax={and:"AND",or:"OR"};class lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $d(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ux(t,e){return cu(t,e.toTimestamp())}function cn(t){return ce(!!t),X.fromTimestamp(function(n){const r=Er(n);return new Me(r.seconds,r.nanos)}(t))}function _p(t,e){return qd(t,e).canonicalString()}function qd(t,e){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function YE(t){const e=Ce.fromString(t);return ce(tT(e)),e}function Hd(t,e){return _p(t.databaseId,e.path)}function wh(t,e){const n=YE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(XE(n))}function JE(t,e){return _p(t.databaseId,e)}function cx(t){const e=YE(t);return e.length===4?Ce.emptyPath():XE(e)}function Wd(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XE(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hv(t,e,n){return{name:Hd(t,e),fields:n.value.mapValue.fields}}function hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ce(d===void 0||typeof d=="string"),Qe.fromBase64String(d||"")):(ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:WE(c.code);return new W(d,c.message||"")}(o);n=new GE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wh(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):X.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Sl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wh(t,r.document),s=r.readTime?cn(r.readTime):X.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wh(t,r.document),s=r.removedTargetIds||[];n=new Sl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ex(i,s),l=r.targetId;n=new KE(l,o)}}return n}function dx(t,e){let n;if(e instanceof la)n={update:hv(t,e.key,e.value)};else if(e instanceof HE)n={delete:Hd(t,e.key)};else if(e instanceof Nr)n={update:hv(t,e.key,e.data),updateMask:Ex(e.fieldMask)};else{if(!(e instanceof JN))return J();n={verify:Hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof lu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ux(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function fx(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?cn(i.updateTime):cn(s);return o.isEqual(X.min())&&(o=cn(s)),new GN(o,i.transformResults||[])}(n,e))):[]}function px(t,e){return{documents:[JE(t,e.path)]}}function mx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=JE(t,i);const s=function(c){if(c.length!==0)return eT(mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ci(m.field),direction:vx(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$d(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function gx(t){let e=cx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=ZE(p);return m instanceof mn&&kE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new au(Pi(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Gu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new ou(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new ou(w,m)}(n.endAt)),DN(e,i,o,s,l,"F",u,c)}function yx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>ZE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function vx(t){return sx[t]}function _x(t){return ox[t]}function wx(t){return ax[t]}function Ci(t){return{fieldPath:t.canonicalString()}}function Pi(t){return We.fromServerFormat(t.fieldPath)}function eT(t){return t instanceof Le?function(n){if(n.op==="=="){if(Xy(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NAN"}};if(Jy(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xy(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NAN"}};if(Jy(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(n.field),op:_x(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>eT(i));return r.length===1?r[0]:{compositeFilter:{op:wx(n.op),filters:r}}}(t):J()}function Ex(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.ht=e}}function Ix(t){const e=gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.ln=new Rx}addToCollectionParentIndex(e,n){return this.ln.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(wr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Rx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(41943040,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new fs(0)}static Qn(){return new fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class Ax{constructor(e){this.Gn=e,this.buffer=new Fe(fv),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();fv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Cx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){q("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rs(n)?q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ss(n)}await this.Yn(3e5)})}}class Px{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Ku.oe);const r=new Ax(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(dv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dv):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ri()<=ne.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function kx(t,e){return new Px(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.changes=new mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,Pt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=io();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fn();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Nr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),_o(d.mutation,c,d.mutation.getFieldMask(),Me.now())):o.set(c.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new xx(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vo();let i=new Se((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Pt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=ME();d.forEach(m=>{if(!s.has(m)){const w=$E(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(qr());let l=-1,u=s;return o.next(c=>F.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:VE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new Yu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,it.newInvalidDocument(d)))});let l=io();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&_o(d.mutation,c,Pt.empty(),Me.now()),Xu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return F.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:Ix(i.bundledQuery),readTime:cn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.overlays=new Se(K.comparator),this.Er=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=qr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=qr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return F.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZN(n,r));let s=this.Er.get(n);s===void 0&&(s=re(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.dr=new Fe(Ue.Ar),this.Rr=new Fe(Ue.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ue(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new K(new Ce([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new K(new Ce([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return K.comparator(e.key,n.key)||ie(e.br,n.br)}static Vr(e,n){return ie(e.br,n.br)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Fe(Ue.Ar)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const l=this.Cr(o.br);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ie);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],l=>{r=r.add(l.br)})}),F.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new K(s),0);let l=new Fe(ie);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.br)),!0)},o),F.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return F.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ue(n,0),i=this.vr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.Nr=e,this.docs=function(){return new Se(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||dN(hN(d),r)<=0||(i.has(d.key)||Xu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Lr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Fx(this)}getSize(e){return F.resolve(this.size)}}class Fx extends Nx{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.persistence=e,this.Br=new mi(n=>fp(n),pp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.kr=0,this.qr=new wp,this.targetCount=0,this.Qr=fs.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),F.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Un(n),F.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ku(0),this.Ur=!1,this.Ur=!0,this.Wr=new Lx,this.referenceDelegate=e(this),this.Gr=new Ux(this),this.indexManager=new Sx,this.remoteDocumentCache=function(i){return new Mx(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Tx(n),this.jr=new Dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new Vx(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new jx(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return F.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class jx extends pN{constructor(e){super(),this.currentSequenceNumber=e}}class Ep{constructor(e){this.persistence=e,this.Zr=new wp,this.Xr=null}static ei(e){return new Ep(e)}get ti(){if(this.Xr)return this.Xr;throw J()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),F.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ti,r=>{const i=K.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return F.or([()=>F.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class hu{constructor(e,n){this.persistence=e,this.ri=new mi(r=>yN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=kx(this,n)}static ei(e,n){return new hu(e,n)}Hr(){}Jr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return F.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=El(e.data.value)),n}ir(e,n,r){return F.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return VP()?8:mN(ot())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Bx;return this.ts(e,n,o).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Ri()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),F.resolve()):(Ri()<=ne.DEBUG&&q("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Ri()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):F.resolve())}Xi(e,n){if(nv(n))return F.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,l);return this.ss(n,c,o,u.readTime)?this.Xi(e,zd(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return nv(n)||i.isEqual(X.min())?F.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?F.resolve(null):(Ri()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.os(e,o,n,cN(i,-1)).next(l=>l))})}rs(e,n){let r=new Fe(bE(e));return n.forEach((i,s)=>{Xu(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return Ri()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.Zi.getDocumentsMatchingQuery(e,n,wr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Se(ie),this.cs=new mi(s=>fp(s),pp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ox(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function qx(t,e,n,r){return new $x(t,e,n,r)}async function rT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:l}))})})}function Hx(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=F.resolve();return m.forEach(E=>{w=w.next(()=>d.getEntry(u,E)).next(A=>{const P=c.docVersions.get(E);ce(P!==null),A.version.compareTo(P)<0&&(p.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function iT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Wx(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Qe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(A,P,T){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,w,d)&&l.push(n.Gr.updateTargetData(s,w))});let u=Fn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(Kx(s,o,e.documentUpdates).next(d=>{u=d.Is,c=d.Es})),!r.isEqual(X.min())){const d=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.us=i,s))}function Kx(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Is:o,Es:i}})}function Gx(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qx(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Kd(t,e,n){const r=Z(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rs(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function pv(t,e,n){const r=Z(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),m=p.cs.get(d);return m!==void 0?F.resolve(p.us.get(m)):p.Gr.getTargetData(c,d)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(l=>(Yx(r,VN(e),l),{documents:l,ds:s})))}function Yx(t,e,n){let r=t.ls.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class mv{constructor(){this.activeTargetIds=zN()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jx{constructor(){this._o=new mv,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl=null;function Eh(){return nl===null?nl=function(){return 268435456+Math.round(2147483648*Math.random())}():nl++,"0x"+nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class tO extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const l=Eh(),u=this.No(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ls("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,s,o,l){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=Zx[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=Eh();return new Promise((o,l)=>{const u=new yE;u.setWithCredentials(!0),u.listenOnce(vE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wl.NO_ERROR:const d=u.getResponseJson();q(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case wl.TIMEOUT:q(tt,`RPC '${e}' ${s} timed out`),l(new W(j.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const p=u.getStatus();if(q(tt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const E=function(P){const T=P.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(w.status);l(new W(E,w.message))}else l(new W(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(j.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=Eh(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=EE(),l=wE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(tt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const E=new eO({Eo:P=>{w?q(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(q(tt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(tt,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Ao:()=>p.close()}),A=(P,T,v)=>{P.listen(T,S=>{try{v(S)}catch(O){setTimeout(()=>{throw O},0)}})};return A(p,ro.EventType.OPEN,()=>{w||(q(tt,`RPC '${e}' stream ${i} transport opened.`),E.So())}),A(p,ro.EventType.CLOSE,()=>{w||(w=!0,q(tt,`RPC '${e}' stream ${i} transport closed`),E.Do())}),A(p,ro.EventType.ERROR,P=>{w||(w=!0,ls(tt,`RPC '${e}' stream ${i} transport errored:`,P),E.Do(new W(j.UNAVAILABLE,"The operation could not be completed")))}),A(p,ro.EventType.MESSAGE,P=>{var T;if(!w){const v=P.data[0];ce(!!v);const S=v,O=(S==null?void 0:S.error)||((T=S[0])===null||T===void 0?void 0:T.error);if(O){q(tt,`RPC '${e}' stream ${i} received error:`,O);const M=O.status;let U=function(_){const R=xe[_];if(R!==void 0)return WE(R)}(M),I=O.message;U===void 0&&(U=j.INTERNAL,I="Unknown error status: "+M+" with message "+O.message),w=!0,E.Do(new W(U,I)),p.close()}else q(tt,`RPC '${e}' stream ${i} received:`,v),E.vo(v)}}),A(l,_E.STAT_EVENT,P=>{P.stat===Md.PROXY?q(tt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Md.NOPROXY&&q(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return new lx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r,i,s,o,l,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sT(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new W(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nO extends oT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=hx(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?cn(o.readTime):X.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Wd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Bd(u)?{documents:px(s,u)}:{query:mx(s,u).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=QE(s,o.resumeToken);const c=$d(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=cu(s,o.snapshotVersion.toTimestamp());const c=$d(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=yx(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Wd(this.serializer),n.removeTarget=e,this.c_(n)}}class rO extends oT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=fx(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Wd(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dx(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,qd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(j.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,qd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Mn(n),this.C_=!1):q("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{gi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.k_.add(4),await ca(c),c.K_.set("Unknown"),c.k_.delete(4),await rc(c)}(this))})}),this.K_=new sO(r,i)}}async function rc(t){if(gi(t))for(const e of t.q_)await e(!0)}async function ca(t){for(const e of t.q_)await e(!1)}function aT(t,e){const n=Z(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Ap(n)?Rp(n):As(n).s_()&&Sp(n,e))}function Ip(t,e){const n=Z(t),r=As(n);n.B_.delete(e),r.s_()&&lT(n,e),n.B_.size===0&&(r.s_()?r.a_():gi(n)&&n.K_.set("Unknown"))}function Sp(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).V_(e)}function lT(t,e){t.U_.xe(e),As(t).m_(e)}function Rp(t){t.U_=new ix({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),As(t).start(),t.K_.F_()}function Ap(t){return gi(t)&&!As(t).i_()&&t.B_.size>0}function gi(t){return Z(t).k_.size===0}function uT(t){t.U_=void 0}async function aO(t){t.K_.set("Online")}async function lO(t){t.B_.forEach((e,n)=>{Sp(t,e)})}async function uO(t,e){uT(t),Ap(t)?(t.K_.O_(e),Rp(t)):t.K_.set("Unknown")}async function cO(t,e,n){if(t.K_.set("Online"),e instanceof GE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await du(t,r)}else if(e instanceof Sl?t.U_.$e(e):e instanceof KE?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(X.min()))try{const r=await iT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.U_.it(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.B_.get(c);d&&s.B_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.B_.get(u);if(!d)return;s.B_.set(u,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),lT(s,u);const p=new sr(d.target,u,c,d.sequenceNumber);Sp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await du(t,r)}}async function du(t,e,n){if(!Rs(e))throw e;t.k_.add(1),await ca(t),t.K_.set("Offline"),n||(n=()=>iT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await rc(t)})}function cT(t,e){return e().catch(n=>du(t,n,e))}async function ic(t){const e=Z(t),n=Sr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;hO(e);)try{const i=await Gx(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,dO(e,i)}catch(i){await du(e,i)}hT(e)&&dT(e)}function hO(t){return gi(t)&&t.L_.length<10}function dO(t,e){t.L_.push(e);const n=Sr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function hT(t){return gi(t)&&!Sr(t).i_()&&t.L_.length>0}function dT(t){Sr(t).start()}async function fO(t){Sr(t).w_()}async function pO(t){const e=Sr(t);for(const n of t.L_)e.g_(n.mutations)}async function mO(t,e,n){const r=t.L_.shift(),i=yp.from(r,e,n);await cT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ic(t)}async function gO(t,e){e&&Sr(t).f_&&await async function(r,i){if(function(o){return tx(o)&&o!==j.ABORTED}(i.code)){const s=r.L_.shift();Sr(r).__(),await cT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ic(r)}}(t,e),hT(t)&&dT(t)}async function yv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.k_.add(3),await ca(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await rc(n)}async function yO(t,e){const n=Z(t);e?(n.k_.delete(2),await rc(n)):e||(n.k_.add(2),await ca(n),n.K_.set("Unknown"))}function As(t){return t.W_||(t.W_=function(n,r,i){const s=Z(n);return s.b_(),new nO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:aO.bind(null,t),mo:lO.bind(null,t),po:uO.bind(null,t),R_:cO.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Ap(t)?Rp(t):t.K_.set("Unknown")):(await t.W_.stop(),uT(t))})),t.W_}function Sr(t){return t.G_||(t.G_=function(n,r,i){const s=Z(n);return s.b_(),new rO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:fO.bind(null,t),po:gO.bind(null,t),p_:pO.bind(null,t),y_:mO.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ic(t)):(await t.G_.stop(),t.L_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Cp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pp(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Rs(t))return new W(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static emptySet(e){return new Qi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.z_=new Se(K.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):J():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ps{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ps(e,n,Qi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class _O{constructor(){this.queries=_v(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=_v(),s.forEach((o,l)=>{for(const u of l.J_)u.onError(r)})})(this,new W(j.ABORTED,"Firestore shutting down"))}}function _v(){return new mi(t=>DE(t),Ju)}async function wO(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new vO,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Pp(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&kp(n)}async function EO(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TO(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.J_)l.ta(i)&&(r=!0);o.H_=i}}r&&kp(n)}function IO(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function kp(t){t.X_.forEach(e=>{e.next()})}var Gd,wv;(wv=Gd||(Gd={})).na="default",wv.Cache="cache";class SO{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Gd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.key=e}}class pT{constructor(e){this.key=e}}class RO{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=re(),this.mutatedKeys=re(),this.Va=bE(e),this.ma=new Qi(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new vv,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=Xu(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;m&&w?m.data.isEqual(w.data)?E!==A&&(r.track({type:3,doc:w}),P=!0):this.ya(m,w)||(r.track({type:2,doc:w}),P=!0,(u&&this.Va(w,u)>0||c&&this.Va(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),P=!0):m&&!w&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(w?(o=o.add(w),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(w,E){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return A(w)-A(E)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,o.length!==0||c?{snapshot:new ps(this.query,e.ma,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new vv,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=re(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new pT(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new fT(r))}),n}va(e){this.da=e.ds,this.Ra=re();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ps.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class AO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CO{constructor(e){this.key=e,this.Fa=!1}}class PO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new mi(l=>DE(l),Ju),this.Oa=new Map,this.Na=new Set,this.La=new Se(K.comparator),this.Ba=new Map,this.ka=new wp,this.qa={},this.Qa=new Map,this.Ka=fs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function kO(t,e,n=!0){const r=wT(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await mT(r,e,n,!0),i}async function NO(t,e){const n=wT(t);await mT(n,e,!0,!1)}async function mT(t,e,n,r){const i=await Qx(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await xO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&aT(t.remoteStore,i),l}async function xO(t,e,n,r,i){t.Ua=(p,m,w)=>async function(A,P,T,v){let S=P.view.ga(T);S.ss&&(S=await pv(A.localStore,P.query,!1).then(({documents:I})=>P.view.ga(I,S)));const O=v&&v.targetChanges.get(P.targetId),M=v&&v.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(S,A.isPrimaryClient,O,M);return Tv(A,P.targetId,U.ba),U.snapshot}(t,p,m,w);const s=await pv(t.localStore,e,!0),o=new RO(e,s.ds),l=o.ga(s.documents),u=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Tv(t,n,c.ba);const d=new AO(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function OO(t,e,n){const r=Z(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Ju(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Kd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ip(r.remoteStore,i.targetId),Qd(r,i.targetId)}).catch(Ss)):(Qd(r,i.targetId),await Kd(r.localStore,i.targetId,!0))}async function DO(t,e){const n=Z(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ip(n.remoteStore,r.targetId))}async function bO(t,e,n){const r=BO(t);try{const i=await function(o,l){const u=Z(o),c=Me.now(),d=l.reduce((w,E)=>w.add(E.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Fn(),A=re();return u.hs.getEntries(w,d).next(P=>{E=P,E.forEach((T,v)=>{v.isValidDocument()||(A=A.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,E)).next(P=>{p=P;const T=[];for(const v of l){const S=YN(v,p.get(v.key).overlayedDocument);S!=null&&T.push(new Nr(v.key,S,AE(S.value.mapValue),un.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,T,l)}).next(P=>{m=P;const T=P.applyToLocalDocumentSet(p,A);return u.documentOverlayCache.saveOverlays(w,P.batchId,T)})}).then(()=>({batchId:m.batchId,changes:VE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.qa[o.currentUser.toKey()];c||(c=new Se(ie)),c=c.insert(l,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ha(r,i.changes),await ic(r.remoteStore)}catch(i){const s=Pp(i,"Failed to persist write");n.reject(s)}}async function gT(t,e){const n=Z(t);try{const r=await Wx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?ce(o.Fa):i.removedDocuments.size>0&&(ce(o.Fa),o.Fa=!1))}),await ha(n,r,e)}catch(r){await Ss(r)}}function Ev(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(c=!0)}),c&&kp(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Se(K.comparator);o=o.insert(s,it.newNoDocument(s,X.min()));const l=re().add(s),u=new tc(X.min(),new Map,new Se(ie),o,l);await gT(r,u),r.La=r.La.remove(s),r.Ba.delete(e),Np(r)}else await Kd(r.localStore,e,!1).then(()=>Qd(r,e,n)).catch(Ss)}async function VO(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await Hx(n.localStore,e);vT(n,r,null),yT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await Ss(i)}}async function MO(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ce(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);vT(r,e,n),yT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await Ss(i)}}function yT(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function vT(t,e,n){const r=Z(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||_T(t,r)})}function _T(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Ip(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Np(t))}function Tv(t,e,n){for(const r of n)r instanceof fT?(t.ka.addReference(r.key,e),FO(t,r)):r instanceof pT?(q("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||_T(t,r.key)):J()}function FO(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(q("SyncEngine","New document in limbo: "+n),t.Na.add(r),Np(t))}function Np(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new K(Ce.fromString(e)),r=t.Ka.next();t.Ba.set(r,new CO(n)),t.La=t.La.insert(n,r),aT(t.remoteStore,new sr(ln(mp(n.path)),r,"TargetPurposeLimboResolution",Ku.oe))}}async function ha(t,e,n){const r=Z(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,u)=>{o.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Tp.zi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.Wi,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>F.forEach(m.Gi,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Rs(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.us.get(m),E=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(E);d.us=d.us.insert(m,A)}}}(r.localStore,s))}async function UO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await rT(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(l=>{l.forEach(u=>{u.reject(new W(j.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.Ts)}}function jO(t,e){const n=Z(t),r=n.Ba.get(e);if(r&&r.Fa)return re().add(r.key);{let i=re();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function wT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LO.bind(null,e),e.Ma.R_=TO.bind(null,e.eventManager),e.Ma.Wa=IO.bind(null,e.eventManager),e}function BO(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MO.bind(null,e),e}class fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return qx(this.persistence,new zx,e.initialUser,this.serializer)}ja(e){return new nT(Ep.ei,this.serializer)}za(e){return new Jx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fu.provider={build:()=>new fu};class zO extends fu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ce(this.persistence.referenceDelegate instanceof hu);const r=this.persistence.referenceDelegate.garbageCollector;return new Cx(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new nT(r=>hu.ei(r,n),this.serializer)}}class Yd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ev(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UO.bind(null,this.syncEngine),await yO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _O}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(s){return new tO(s)}(e.databaseInfo);return function(s,o,l,u){return new iO(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new oO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ev(this.syncEngine,n,0),function(){return gv.p()?new gv:new Xx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new PO(i,s,o,l,u,c);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await ca(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yd.provider={build:()=>new Yd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=IE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Iv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HO(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yv(e.remoteStore,i)),t._onlineComponents=e}async function HO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ls("Error using user provided cache. Falling back to memory cache: "+n),await Ih(t,new fu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Ih(t,new zO(void 0));return t._offlineComponents}async function ET(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Iv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Iv(t,new Yd))),t._onlineComponents}function WO(t){return ET(t).then(e=>e.syncEngine)}async function KO(t){const e=await ET(t),n=e.eventManager;return n.onListen=kO.bind(null,e.syncEngine),n.onUnlisten=OO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DO.bind(null,e.syncEngine),n}function GO(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new $O({next:m=>{d.eu(),o.enqueueAndForget(()=>EO(s,p));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new W(j.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new W(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new SO(mp(l.path),d,{includeMetadataChanges:!0,ua:!0});return wO(s,p)}(await KO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e,n){if(!n)throw new W(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YO(t,e,n,r){if(e===!0&&r===!0)throw new W(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rv(t){if(!K.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function ii(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xp(t);throw new W(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Op{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Av({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Av(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tN;switch(r.type){case"firstParty":return new sN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Sv.delete(n),r.terminate())}(this),Promise.resolve()}}function JO(t,e,n,r={}){var i;const s=(t=ii(t,Op))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=NP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(c)}t._authCredentials=new nN(new TE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dp(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Qo extends Dp{constructor(e,n,r){super(e,n,mp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new K(e))}withConverter(e){return new Qo(this.firestore,e,this._path)}}function wo(t,e,...n){if(t=ze(t),arguments.length===1&&(e=IE.newId()),QO("doc","path",e),t instanceof Op){const r=Ce.fromString(e,...n);return Rv(r),new xt(t,null,new K(r))}{if(!(t instanceof xt||t instanceof Qo))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Rv(r),new xt(t.firestore,t instanceof Qo?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sT(this,"async_queue_retry"),this.fu=()=>{const r=Th();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new yr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Rs(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Cp.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&J()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class sc extends Op{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Cv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cv(e),this._firestoreClient=void 0,await e}}}function Yi(t,e){const n=typeof t=="object"?t:up(),r=typeof t=="string"?t:"(default)",i=pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PP("firestore");s&&JO(i,...s)}return i}function IT(t){if(t._terminated)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XO(t),t._firestoreClient}function XO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new wN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,TT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new qO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(Qe.fromBase64String(e))}catch(n){throw new W(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=/^__.*__$/;class eD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class ST{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function RT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class lc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return pu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(RT(this.Mu)&&ZO.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class tD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}$u(e,n,r,i=!1){return new lc({Mu:e,methodName:n,Ku:r,path:We.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AT(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new tD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nD(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);Mp("Data must be an object, but it was:",o,r);const l=CT(r,o);let u,c;if(s.merge)u=new Pt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Jd(e,p,n);if(!o.contains(m))throw new W(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kT(d,m)||d.push(m)}u=new Pt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new eD(new yt(l),u,c)}class uc extends ac{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}function rD(t,e,n){return new lc({Mu:3,Ku:e.settings.Ku,methodName:t._methodName,Nu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vp extends ac{constructor(e,n){super(e),this.Uu=n}_toFieldTransform(e){const n=rD(this,e,!0),r=this.Uu.map(s=>da(s,n)),i=new ds(r);return new WN(e.path,i)}isEqual(e){return e instanceof Vp&&as(this.Uu,e.Uu)}}function iD(t,e,n,r){const i=t.$u(1,e,n);Mp("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();kr(r,(u,c)=>{const d=Fp(e,u,n);c=ze(c);const p=i.Bu(d);if(c instanceof uc)s.push(d);else{const m=da(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Pt(s);return new ST(o,l,i.fieldTransforms)}function sD(t,e,n,r,i,s){const o=t.$u(1,e,n),l=[Jd(e,r,n)],u=[i];if(s.length%2!=0)throw new W(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Jd(e,s[m])),u.push(s[m+1]);const c=[],d=yt.empty();for(let m=l.length-1;m>=0;--m)if(!kT(c,l[m])){const w=l[m];let E=u[m];E=ze(E);const A=o.Bu(w);if(E instanceof uc)c.push(w);else{const P=da(E,A);P!=null&&(c.push(w),d.set(w,P))}}const p=new Pt(c);return new ST(d,p,o.fieldTransforms)}function da(t,e){if(PT(t=ze(t)))return Mp("Unsupported field value:",e,t),CT(t,e);if(t instanceof ac)return function(r,i){if(!RT(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=da(l,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $N(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:cu(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cu(i.serializer,s)}}if(r instanceof bp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ms)return{bytesValue:QE(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_p(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.qu("VectorValues must only contain numeric values.");return gp(l.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${xp(r)}`)}(t,e)}function CT(t,e){const n={};return SE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,i)=>{const s=da(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof bp||t instanceof ms||t instanceof xt||t instanceof ac||t instanceof Lp)}function Mp(t,e,n){if(!PT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xp(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Jd(t,e,n){if((e=ze(e))instanceof oc)return e._internalPath;if(typeof e=="string")return Fp(t,e);throw pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const oD=new RegExp("[~\\*/\\[\\]]");function Fp(t,e,n){if(e.search(oD)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oc(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(j.INVALID_ARGUMENT,l+t+u)}function kT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aD extends NT{data(){return super.data()}}function xT(t,e){return typeof e=="string"?Fp(t,e):e instanceof oc?e._internalPath:e._delegate._internalPath}class lD{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new Lp(s)}convertGeoPoint(e){return new bp(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ho(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ce(tT(r));const i=new Wo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OT extends NT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hD extends OT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){t=ii(t,xt);const e=ii(t.firestore,sc);return GO(IT(e),t._key).then(n=>fD(e,t,n))}class dD extends lD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function DT(t,e,n){t=ii(t,xt);const r=ii(t.firestore,sc),i=uD(t.converter,e);return bT(r,[nD(AT(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,un.none())])}function mu(t,e,n,...r){t=ii(t,xt);const i=ii(t.firestore,sc),s=AT(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof oc?sD(s,"updateDoc",t._key,e,n,r):iD(s,"updateDoc",t._key,e),bT(i,[o.toMutation(t._key,un.exists(!0))])}function bT(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>bO(await WO(r),i,s)),s.promise}(IT(t),e)}function fD(t,e,n){const r=n.docs.get(e._key),i=new dD(t);return new OT(t,i,e._key,r,new cD(n.hasPendingWrites,n.fromCache),e.converter)}function LT(...t){return new Vp("arrayUnion",t)}(function(e,n=!0){(function(i){Is=i})(Ts),fn(new Jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new sc(new rN(r.getProvider("auth-internal")),new aN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jt(Hy,"4.7.5",e),jt(Hy,"4.7.5","esm2017")})();function jp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function VT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pD=VT,MT=new fi("auth","Firebase",VT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Wu("@firebase/auth");function mD(t,...e){gu.logLevel<=ne.WARN&&gu.warn(`Auth (${Ts}): ${t}`,...e)}function Rl(t,...e){gu.logLevel<=ne.ERROR&&gu.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Bp(t,...e)}function hn(t,...e){return Bp(t,...e)}function FT(t,e,n){const r=Object.assign(Object.assign({},pD()),{[e]:n});return new fi("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return FT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return MT.create(t,...e)}function Q(t,e,...n){if(!t)throw Bp(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rl(e),new Error(e)}function Un(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gD(){return Pv()==="http:"||Pv()==="https:"}function Pv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gD()||aE()||"connection"in navigator)?navigator.onLine:!0}function vD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=xP()||bP()}get(){return yD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new fa(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,i={}){return jT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=aa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return DP()||(c.referrerPolicy="no-referrer"),UT.fetch()(BT(t,t.config.apiHost,n,l),c)})}async function jT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_D),e);try{const i=new TD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw rl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw FT(t,d,c);Xt(t,d)}}catch(i){if(i instanceof en)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await Or(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zp(t.config,i):`${t.config.apiScheme}://${i}`}function ED(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),wD.get())})}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function kv(t){return t!==void 0&&t.enterprise!==void 0}class ID{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ED(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SD(t,e){return Or(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function zT(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AD(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=$p(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(Sh(i.auth_time)),issuedAtTime:Eo(Sh(i.iat)),expirationTime:Eo(Sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=rE(n);return i?JSON.parse(i):(Rl("Failed to decode base64 JWT payload"),null)}catch(i){return Rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nv(t){const e=$p(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&CD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yo(t,zT(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$T(s.providerUserInfo):[],l=ND(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function kD(t){const e=ze(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ND(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $T(t){return t.map(e=>{var{providerId:n}=e,r=jp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(t,e){const n=await jT(t,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",UT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OD(t,e){return Or(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ji;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AD(this,e)}reload(){return kD(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await Yo(this,RD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:O,isAnonymous:M,providerData:U,stsTokenManager:I}=n;Q(S&&I,e,"internal-error");const y=Ji.fromJSON(this.name,I);Q(typeof S=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof M=="boolean",e,"internal-error"),Wn(w,e.name),Wn(E,e.name),Wn(A,e.name),Wn(P,e.name),Wn(T,e.name),Wn(v,e.name);const _=new Pn({uid:S,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:M,photoURL:E,phoneNumber:w,tenantId:A,stsTokenManager:y,createdAt:T,lastLoginAt:v});return U&&Array.isArray(U)&&(_.providerData=U.map(R=>Object.assign({},R))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$T(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ji;l.updateFromIdToken(r);const u=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;function kn(t){Un(t instanceof Function,"Expected a class definition");let e=xv.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qT.type="NONE";const Ov=qT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Al(this.userKey,i.apiKey,s),this.fullPersistenceKey=Al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(kn(Ov),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(Ov);const o=Al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Pn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YT(e))return"Blackberry";if(JT(e))return"Webos";if(WT(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(QT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HT(t=ot()){return/firefox\//i.test(t)}function WT(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(t=ot()){return/crios\//i.test(t)}function GT(t=ot()){return/iemobile/i.test(t)}function QT(t=ot()){return/android/i.test(t)}function YT(t=ot()){return/blackberry/i.test(t)}function JT(t=ot()){return/webos/i.test(t)}function qp(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DD(t=ot()){var e;return qp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bD(){return LP()&&document.documentMode===10}function XT(t=ot()){return qp(t)||QT(t)||JT(t)||YT(t)||/windows phone/i.test(t)||GT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e=[]){let n;switch(t){case"Browser":n=Dv(ot());break;case"Worker":n=`${Dv(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e={}){return Or(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=6;class FD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bv(this),this.idTokenSubscription=new bv(this),this.beforeStateQueue=new LD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zT(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(xn(this));const n=e?ze(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VD(this),n=new FD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return ze(t)}class bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=zP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jD(t){cc=t}function eI(t){return cc.loadJS(t)}function BD(){return cc.recaptchaEnterpriseScript}function zD(){return cc.gapiScript}function $D(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qD{constructor(){this.enterprise=new HD}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HD{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WD="recaptcha-enterprise",tI="NO_RECAPTCHA";class KD{constructor(e){this.type=WD,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{SD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new ID(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;kv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(tI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qD().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&kv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=BD();u.length!==0&&(u+=l),eI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Lv(t,e,n,r=!1,i=!1){const s=new KD(t);let o;if(i)o=tI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ef(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Lv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Lv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){const n=pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(as(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function QD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YD(t,e,n){const r=yi(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nI(e),{host:o,port:l}=JD(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),XD()}function nI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JD(t){const e=nI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vv(o)}}}function Vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function ZD(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function nb(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ef(e,n,"signInWithPassword",eb);case"emailLink":return tb(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ef(e,r,"signUpPassword",ZD);case"emailLink":return nb(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="http://localhost";class si extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zi(e,n)}buildRequest(){const e={requestUri:rb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sb(t){const e=to(no(t)).link,n=e?to(no(e)).deep_link_id:null,r=to(no(t)).deep_link_id;return(r?to(no(r)).link:null)||r||n||e||t}class Wp{constructor(e){var n,r,i,s,o,l;const u=to(no(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=ib((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=sb(e);try{return new Wp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wp.parseLink(n);return Q(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends rI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ma{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends ma{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends ma{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){return pa(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Mv(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mv(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vu(e,n,r,i)}}function iI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vu._fromErrorAndOperation(t,s,e,r):s})}async function ab(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await Yo(t,iI(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=$p(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e,n=!1){if(sn(t.app))return Promise.reject(xn(t));const r="signIn",i=await iI(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ub(t,e){return sI(yi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t){const e=yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cb(t,e,n){if(sn(t.app))return Promise.reject(xn(t));const r=yi(t),o=await ef(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ob).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&oI(t),u}),l=await oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hb(t,e,n){return sn(t.app)?Promise.reject(xn(t)):ub(ze(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oI(t),r})}function db(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function fb(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function pb(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function mb(t){return ze(t).signOut()}const _u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_u,"1"),this.storage.removeItem(_u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=1e3,yb=10;class lI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=XT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lI.type="LOCAL";const vb=lI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uI.type="SESSION";const cI=uI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await _b(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Kp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function Eb(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function Tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ib(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sb(){return hI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="firebaseLocalStorageDb",Rb=1,wu="firebaseLocalStorage",fI="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function Ab(){const t=indexedDB.deleteDatabase(dI);return new ga(t).toPromise()}function tf(){const t=indexedDB.open(dI,Rb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:fI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await Ab(),e(await tf()))})})}async function Fv(t,e,n){const r=dc(t,!0).put({[fI]:e,value:n});return new ga(r).toPromise()}async function Cb(t,e){const n=dc(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Uv(t,e){const n=dc(t,!0).delete(e);return new ga(n).toPromise()}const Pb=800,kb=3;class pI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(Sb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tb(),!this.activeServiceWorker)return;this.sender=new wb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await Fv(e,_u,"1"),await Uv(e,_u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dc(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pI.type="LOCAL";const Nb=pI;new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t,e){return e?kn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ob(t){return sI(t.auth,new Gp(t),t.bypassAuthState)}function Db(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),lb(n,new Gp(t),t.bypassAuthState)}async function bb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),ab(n,new Gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ob;case"linkViaPopup":case"linkViaRedirect":return bb;case"reauthViaPopup":case"reauthViaRedirect":return Db;default:Xt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new fa(2e3,1e4);class Bi extends mI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lb.get())};e()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="pendingRedirect",Cl=new Map;class Mb extends mI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await Fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fb(t,e){const n=Bb(e),r=jb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ub(t,e){Cl.set(t._key(),e)}function jb(t){return kn(t._redirectPersistence)}function Bb(t){return Al(Vb,t.config.apiKey,t.name)}async function zb(t,e,n=!1){if(sn(t.app))return Promise.reject(xn(t));const r=yi(t),i=xb(r,e),o=await new Mb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=10*60*1e3;class qb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(jv(e))}saveEventToCache(e){this.cachedEventUids.add(jv(e)),this.lastProcessedEventTime=Date.now()}}function jv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gb=/^https?/;async function Qb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wb(t);for(const n of e)try{if(Yb(n))return}catch{}Xt(t,"unauthorized-domain")}function Yb(t){const e=Xd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gb.test(n))return!1;if(Kb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new fa(3e4,6e4);function Bv(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xb(t){return new Promise((e,n)=>{var r,i,s;function o(){Bv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bv(),n(hn(t,"network-request-failed"))},timeout:Jb.get()})}if(!((i=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dn().gapi)===null||s===void 0)&&s.load)o();else{const l=$D("iframefcb");return dn()[l]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},eI(`${zD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function Zb(t){return Pl=Pl||Xb(t),Pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eL=new fa(5e3,15e3),tL="__/auth/iframe",nL="emulator/auth/iframe",rL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sL(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zp(e,nL):`https://${t.config.authDomain}/${tL}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},i=iL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${aa(r).slice(1)}`}async function oL(t){const e=await Zb(t),n=dn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:sL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=dn().setTimeout(()=>{s(o)},eL.get());function u(){dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lL=500,uL=600,cL="_blank",hL="http://localhost";class zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dL(t,e,n,r=lL,i=uL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},aL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ot().toLowerCase();n&&(l=KT(c)?cL:n),HT(c)&&(e=e||hL,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,E])=>`${m}${w}=${E},`,"");if(DD(c)&&l!=="_self")return fL(e||"",l),new zv(null);const p=window.open(e||"",l,d);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new zv(p)}function fL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL="__/auth/handler",mL="emulator/auth/handler",gL=encodeURIComponent("fac");async function $v(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:i};if(e instanceof rI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ma){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${gL}=${encodeURIComponent(u)}`:"";return`${yL(t)}?${aa(l).slice(1)}${c}`}function yL({config:t}){return t.emulator?zp(t,mL):`https://${t.authDomain}/${pL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="webStorageSupport";class vL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cI,this._completeRedirectFn=zb,this._overrideRedirectResult=Ub}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $v(e,n,r,Xd(),i);return dL(e,o,Kp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $v(e,n,r,Xd(),i);return Eb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oL(e),r=new qb(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rh,{type:Rh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rh];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XT()||WT()||qp()}}const _L=vL;var qv="@firebase/auth",Hv="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TL(t){fn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZT(t)},c=new UD(r,i,s,u);return QD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Jt("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new wL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(qv,Hv,EL(t)),jt(qv,Hv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=5*60,SL=oE("authIdTokenMaxAge")||IL;let Wv=null;const RL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SL)return;const i=n==null?void 0:n.token;Wv!==i&&(Wv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hr(t=up()){const e=pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GD(t,{popupRedirectResolver:_L,persistence:[Nb,vb,cI]}),r=oE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RL(s.toString());fb(n,o,()=>o(n.currentUser)),db(n,l=>o(l))}}const i=iE("auth");return i&&YD(n,`http://${i}`),n}function AL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TL("Browser");const Ps=()=>{const t=ia();return N.jsxs("div",{className:"homebar",children:[N.jsxs(ct,{to:"/",className:`homebar-icon ${t.pathname==="/"?"active":""}`,children:[N.jsx("span",{children:"🏠"}),"Home"]}),N.jsxs(ct,{to:"/search",className:`homebar-icon ${t.pathname==="/search"?"active":""}`,children:[N.jsx("span",{children:"🔍"}),"Search"]}),N.jsxs(ct,{to:"/profile",className:`homebar-icon ${t.pathname==="/profile"?"active":""}`,children:[N.jsx("span",{children:"👤"}),"Profile"]})]})},Ii="https://api.themoviedb.org/3",Si="a0ac84614536cd4679d457482617fd23",CL=()=>{const[t,e]=V.useState([]),[n,r]=V.useState([]),[i,s]=V.useState([]),[o,l]=V.useState([]),[u,c]=V.useState([]),[d,p]=V.useState(0),[m,w]=V.useState(!0),[E,A]=V.useState(null),[P,T]=V.useState(!1),[v,S]=V.useState(""),[O,M]=V.useState(null);V.useEffect(()=>{const _=Hr(),R=pb(_,k=>{M(k)});return()=>R()},[]),V.useEffect(()=>{window.scrollTo(0,0);const _=async()=>{try{const se=await ue.get(`${Ii}/movie/popular`,{params:{api_key:Si,language:"en-US",page:1}});e(se.data.results),w(!1)}catch(se){console.error(se),A("Failed to load movies"),w(!1)}},R=async()=>{try{const se=await ue.get(`${Ii}/trending/movie/week`,{params:{api_key:Si,language:"en-US"}});r(se.data.results)}catch(se){console.error(se),A("Failed to load trending movies")}},k=async()=>{try{const se=await ue.get(`${Ii}/movie/popular`,{params:{api_key:Si,language:"en-US",page:2}});s(se.data.results)}catch(se){console.error(se),A("Failed to load popular movies")}},x=async()=>{try{const se=await ue.get(`${Ii}/movie/top_rated`,{params:{api_key:Si,language:"en-US",page:1}});l(se.data.results)}catch(se){console.error(se),A("Failed to load top-rated movies")}},C=async()=>{try{const se=await ue.get(`${Ii}/movie/upcoming`,{params:{api_key:Si,language:"en-US",page:1}});c(se.data.results)}catch(se){console.error(se),A("Failed to load upcoming movies")}};_(),R(),k(),x(),C()},[]),V.useEffect(()=>{let _;const R=()=>{if(t.length>0){const k=Math.floor(Math.random()*t.length);p(k)}};return t.length>0&&(R(),_=setInterval(R,1e4)),()=>{_&&clearInterval(_)}},[t]);const U=async _=>{if(!O){console.log("User is not authenticated");return}const R=Yi(),k=wo(R,"users",O.uid);if(!(await Up(k)).exists())try{await DT(k,{name:O.displayName,email:O.email,movieList:[]}),console.log("User document created")}catch(C){console.error("Error creating user document: ",C);return}try{await mu(k,{movieList:LT({id:_.id,title:_.title,poster_path:_.poster_path,release_date:_.release_date,imdb_rating:_.vote_average,overview:_.overview})}),console.log("Movie added to list")}catch(C){console.error("Error adding movie to list: ",C)}},I=async _=>{try{const k=(await ue.get(`${Ii}/movie/${_}/videos`,{params:{api_key:Si,language:"en-US"}})).data.results.find(x=>x.type==="Trailer");k&&(S(k.key),T(!0))}catch(R){console.error(R),A("Failed to load trailer")}},y=()=>{T(!P),S("")};return m?N.jsx("p",{children:"Loading movies..."}):E?N.jsx("p",{children:E}):N.jsxs("div",{className:"container",children:[N.jsx("div",{className:"card",children:t.length>0&&N.jsxs(N.Fragment,{children:[N.jsx(ct,{to:`/movie/${t[d].id}`,children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w300${t[d].poster_path}`,alt:t[d].title,className:"image"})}),N.jsxs("div",{className:"overlay-buttons",children:[N.jsx("button",{className:"poster-button",onClick:()=>I(t[d].id),children:"Watch Trailer"}),N.jsx("button",{className:"poster-button",onClick:()=>U(t[d]),children:"Add to List"})]})]})}),P&&N.jsx("div",{className:"trailer-modal",onClick:y,children:N.jsxs("div",{className:"modal-content",onClick:_=>_.stopPropagation(),children:[N.jsx("button",{className:"close-btn",onClick:y,children:"X"}),v&&N.jsx("iframe",{width:"100%",height:"400px",src:`https://www.youtube.com/embed/${v}`,title:"Trailer",frameBorder:"0",allowFullScreen:!0})]})}),N.jsx("h2",{className:"trending-heading",children:"Trending Movies"}),N.jsx("div",{className:"trending-container",children:n.map(_=>N.jsx("div",{className:"trending-card",children:N.jsx(ct,{to:`/movie/${_.id}`,children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${_.poster_path}`,alt:_.title,className:"trending-image"})})},_.id))}),N.jsx("h2",{className:"trending-heading",children:"Popular Movies"}),N.jsx("div",{className:"trending-container",children:i.map(_=>N.jsx("div",{className:"trending-card",children:N.jsx(ct,{to:`/movie/${_.id}`,children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${_.poster_path}`,alt:_.title,className:"trending-image"})})},_.id))}),N.jsx("h2",{className:"trending-heading",children:"Top Rated Movies"}),N.jsx("div",{className:"trending-container",children:o.map(_=>N.jsx("div",{className:"trending-card",children:N.jsx(ct,{to:`/movie/${_.id}`,children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${_.poster_path}`,alt:_.title,className:"trending-image"})})},_.id))}),N.jsx("h2",{className:"trending-heading",children:"Upcoming Movies"}),N.jsx("div",{className:"trending-container",children:u.map(_=>N.jsx("div",{className:"trending-card",children:N.jsx(ct,{to:`/movie/${_.id}`,children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${_.poster_path}`,alt:_.title,className:"trending-image"})})},_.id))}),N.jsx(Ps,{})]})},Kv="https://api.themoviedb.org/3",Gv="a0ac84614536cd4679d457482617fd23",PL="https://image.tmdb.org/t/p/w200",kL=()=>{const[t,e]=V.useState(""),[n,r]=V.useState([]),[i,s]=V.useState(null),[o,l]=V.useState(!1),[u,c]=V.useState(null),d=async()=>{l(!0),s(null);try{const w=await fetch(`${Kv}/trending/movie/day?api_key=${Gv}`);if(!w.ok)throw new Error("Failed to fetch trending movies");const E=await w.json();r(E.results||[])}catch(w){s(w.message)}finally{l(!1)}},p=async w=>{if(!w.trim()){d();return}l(!0),s(null);try{const E=await fetch(`${Kv}/search/movie?api_key=${Gv}&query=${encodeURIComponent(w)}`);if(!E.ok)throw new Error("Failed to fetch search results");const A=await E.json();r(A.results||[])}catch(E){s(E.message)}finally{l(!1)}},m=w=>{const E=w.target.value;e(E),u&&clearTimeout(u);const A=setTimeout(()=>{p(E)},500);c(A)};return V.useEffect(()=>{d()},[]),N.jsxs("div",{className:"search-page",children:[N.jsx(Ps,{})," ",N.jsxs("div",{className:"search-container",children:[N.jsx("input",{type:"text",value:t,onChange:m,placeholder:"Search for a movie...",className:"search-input"}),N.jsxs("div",{className:"results-container",children:[o&&N.jsx("p",{children:"Loading..."}),i&&N.jsx("p",{className:"error-message",children:i}),!o&&n.length>0&&n.map(w=>N.jsx(ct,{to:`/movie/${w.id}`,children:N.jsx("img",{src:w.poster_path?`${PL}${w.poster_path}`:"/placeholder.png",alt:w.title||"No Title",className:"result-poster"})},w.id)),!o&&t&&n.length===0&&!i&&N.jsxs("p",{children:['No results found for "',t,'"']})]})]})]})},NL="Left",xL="Right",OL="Up",DL="Down",zi={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},nf={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Qv="mousemove",Yv="mouseup",bL="touchend",LL="touchmove",VL="touchstart";function ML(t,e,n,r){return t>e?n>0?xL:NL:r>0?DL:OL}function Jv(t,e){if(e===0)return t;const n=Math.PI/180*e,r=t[0]*Math.cos(n)+t[1]*Math.sin(n),i=t[1]*Math.cos(n)-t[0]*Math.sin(n);return[r,i]}function FL(t,e){const n=d=>{const p="touches"in d;p&&d.touches.length>1||t((m,w)=>{w.trackMouse&&!p&&(document.addEventListener(Qv,r),document.addEventListener(Yv,o));const{clientX:E,clientY:A}=p?d.touches[0]:d,P=Jv([E,A],w.rotationAngle);return w.onTouchStartOrOnMouseDown&&w.onTouchStartOrOnMouseDown({event:d}),Object.assign(Object.assign(Object.assign({},m),nf),{initial:P.slice(),xy:P,start:d.timeStamp||0})})},r=d=>{t((p,m)=>{const w="touches"in d;if(w&&d.touches.length>1)return p;if(d.timeStamp-p.start>m.swipeDuration)return p.swiping?Object.assign(Object.assign({},p),{swiping:!1}):p;const{clientX:E,clientY:A}=w?d.touches[0]:d,[P,T]=Jv([E,A],m.rotationAngle),v=P-p.xy[0],S=T-p.xy[1],O=Math.abs(v),M=Math.abs(S),U=(d.timeStamp||0)-p.start,I=Math.sqrt(O*O+M*M)/(U||1),y=[v/(U||1),S/(U||1)],_=ML(O,M,v,S),R=typeof m.delta=="number"?m.delta:m.delta[_.toLowerCase()]||zi.delta;if(O<R&&M<R&&!p.swiping)return p;const k={absX:O,absY:M,deltaX:v,deltaY:S,dir:_,event:d,first:p.first,initial:p.initial,velocity:I,vxvy:y};k.first&&m.onSwipeStart&&m.onSwipeStart(k),m.onSwiping&&m.onSwiping(k);let x=!1;return(m.onSwiping||m.onSwiped||m[`onSwiped${_}`])&&(x=!0),x&&m.preventScrollOnSwipe&&m.trackTouch&&d.cancelable&&d.preventDefault(),Object.assign(Object.assign({},p),{first:!1,eventData:k,swiping:!0})})},i=d=>{t((p,m)=>{let w;if(p.swiping&&p.eventData){if(d.timeStamp-p.start<m.swipeDuration){w=Object.assign(Object.assign({},p.eventData),{event:d}),m.onSwiped&&m.onSwiped(w);const E=m[`onSwiped${w.dir}`];E&&E(w)}}else m.onTap&&m.onTap({event:d});return m.onTouchEndOrOnMouseUp&&m.onTouchEndOrOnMouseUp({event:d}),Object.assign(Object.assign(Object.assign({},p),nf),{eventData:w})})},s=()=>{document.removeEventListener(Qv,r),document.removeEventListener(Yv,o)},o=d=>{s(),i(d)},l=(d,p)=>{let m=()=>{};if(d&&d.addEventListener){const w=Object.assign(Object.assign({},zi.touchEventOptions),p.touchEventOptions),E=[[VL,n,w],[LL,r,Object.assign(Object.assign({},w),p.preventScrollOnSwipe?{passive:!1}:{})],[bL,i,w]];E.forEach(([A,P,T])=>d.addEventListener(A,P,T)),m=()=>E.forEach(([A,P])=>d.removeEventListener(A,P))}return m},c={ref:d=>{d!==null&&t((p,m)=>{if(p.el===d)return p;const w={};return p.el&&p.el!==d&&p.cleanUpTouch&&(p.cleanUpTouch(),w.cleanUpTouch=void 0),m.trackTouch&&d&&(w.cleanUpTouch=l(d,m)),Object.assign(Object.assign(Object.assign({},p),{el:d}),w)})}};return e.trackMouse&&(c.onMouseDown=n),[c,l]}function UL(t,e,n,r){return!e.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?e.preventScrollOnSwipe!==n.preventScrollOnSwipe||e.touchEventOptions.passive!==n.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:r(t.el,e)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:r(t.el,e)})}function jL(t){const{trackMouse:e}=t,n=V.useRef(Object.assign({},nf)),r=V.useRef(Object.assign({},zi)),i=V.useRef(Object.assign({},r.current));i.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},zi),t);let s;for(s in zi)r.current[s]===void 0&&(r.current[s]=zi[s]);const[o,l]=V.useMemo(()=>FL(u=>n.current=u(n.current,r.current),{trackMouse:e}),[e]);return n.current=UL(n.current,r.current,i.current,l),o}const BL=({movie:t,onRemove:e,onMarkAsSeen:n,onSwipe:r,swiped:i})=>{const[s,o]=V.useState(!1),[l,u]=V.useState(t.seen||!1),c=V.useRef(null);V.useEffect(()=>{const E=()=>{o(window.innerWidth<=768)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const d=jL({onSwipedLeft:()=>{r(t.id)},onSwipedRight:()=>{r(t.id)},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),p=s?d:{},m=E=>{E.stopPropagation(),e(t.id)},w=E=>{E.stopPropagation();const A=!l;u(A),n(t.id,A)};return N.jsxs("div",{ref:c,...p,className:`swipeable-card ${i?"swiped":""} ${l?"seen":""}`,children:[N.jsx(ct,{to:`/movie/${t.id}`,className:"movie-card-link",children:N.jsxs("div",{className:"movie-item",children:[N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${t.poster_path}`,alt:t.title,className:"movie-poster"}),N.jsxs("div",{className:"movie-info",children:[N.jsx("h4",{children:t.title}),N.jsx("p",{className:"release-date",children:new Date(t.release_date).getFullYear()}),N.jsx("p",{className:"rating",children:t.imdb_rating?`${t.imdb_rating.toFixed(1)}/10`:"N/A"}),N.jsx("p",{className:"description",children:t.overview&&t.overview.length>100?`${t.overview.substring(0,100)}...`:t.overview})]})]})}),i&&N.jsxs("div",{className:"swipe-buttons show",children:[N.jsx("button",{onClick:m,className:"swipe-button remove-button",children:"Remove"}),N.jsxs("button",{onClick:w,className:"swipe-button mark-seen-button",children:[l?"Unmark as Seen":"Mark as Seen"," "]})]})]})},zL=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState([]),[o,l]=V.useState(!0),[u,c]=V.useState(null),[d,p]=V.useState({}),m=_s();V.useEffect(()=>{const v=Hr().currentUser;if(v){e(v.email);const S=v.metadata.creationTime,O={year:"numeric",month:"long",day:"numeric"},M=new Date(S).toLocaleDateString("en-GB",O);r(M),(async()=>{try{const I=Yi(),y=wo(I,"users",v.uid),_=await Up(y);_.exists()?s(_.data().movieList||[]):s([])}catch{c("Error fetching movie list.")}finally{l(!1)}})()}},[]);const w=async T=>{const S=Hr().currentUser;if(S)try{const O=Yi(),M=wo(O,"users",S.uid),U=i.filter(I=>I.id!==T);await mu(M,{movieList:U}),s(U)}catch{c("Failed to remove the movie. Please try again.")}},E=async()=>{try{const T=Hr();await mb(T),m("/")}catch{c("Failed to log out. Please try again.")}};V.useEffect(()=>{const T=v=>{const S=document.querySelector(".movie-list");S&&!S.contains(v.target)&&p({})};return document.addEventListener("pointerdown",T),()=>{document.removeEventListener("pointerdown",T)}},[]);const A=T=>{p(v=>({...v,[T]:!0}))},P=async(T,v)=>{const O=Hr().currentUser;if(O)try{const M=Yi(),U=wo(M,"users",O.uid),I=i.map(y=>y.id===T?{...y,seen:v}:y);await mu(U,{movieList:I}),s(I)}catch{c("Failed to mark the movie as seen. Please try again.")}};return N.jsxs("div",{className:"profile-page",children:[N.jsx(Ps,{}),N.jsxs("div",{className:"profile-content",children:[N.jsxs("div",{className:"profile-details",children:[N.jsx("h2",{children:t}),N.jsxs("p",{className:"member-since",children:["Member since: ",n]}),N.jsx("div",{className:"profile-buttons",children:N.jsx("button",{className:"profile-button",onClick:E,children:"Log Out"})})]}),N.jsxs("div",{className:"movie-list-section",children:[N.jsx("h3",{children:"Your Movie List"}),o?N.jsx("p",{children:"Loading your movie list..."}):u?N.jsx("p",{children:u}):i.length===0?N.jsx("p",{children:"No movies added yet."}):N.jsx("div",{className:"movie-list",children:i.map(T=>N.jsx(BL,{movie:T,onRemove:w,onSwipe:A,onMarkAsSeen:P,swiped:d[T.id]},T.id))})]})]})]})},il="https://api.themoviedb.org/3",sl="a0ac84614536cd4679d457482617fd23";function $L(){const{id:t}=np(),e=_s(),[n,r]=V.useState(null),[i,s]=V.useState(!0),[o,l]=V.useState(null),[u,c]=V.useState([]),[d,p]=V.useState([]),[m,w]=V.useState(!1),[E,A]=V.useState(window.innerWidth),[P,T]=V.useState(null),[v,S]=V.useState(!1),O=300;if(V.useEffect(()=>{window.scrollTo(0,0),(async()=>{try{const pt=await ue.get(`${il}/movie/${t}`,{params:{api_key:sl,language:"en-US"}});r(pt.data);const $=await ue.get(`${il}/movie/${t}/credits`,{params:{api_key:sl}});c($.data.cast);const G=await ue.get(`${il}/movie/${t}/similar`,{params:{api_key:sl,language:"en-US"}});p(G.data.results);const me=(await ue.get(`${il}/movie/${t}/videos`,{params:{api_key:sl,language:"en-US"}})).data.results.find(he=>he.type==="Trailer");T(me?me.key:null),s(!1)}catch{l("Failed to load movie details"),s(!1)}})()},[t]),V.useEffect(()=>{const fe=()=>A(window.innerWidth);return window.addEventListener("resize",fe),()=>window.removeEventListener("resize",fe)},[]),i)return N.jsx("p",{children:"Loading movie details..."});if(o)return N.jsx("p",{children:o});const M=n.release_date?new Date(n.release_date).getFullYear():"N/A",U=n.adult?"18+":"PG-13",I=n.runtime,y=Math.floor(I/60),_=I%60,R=I?`${y}h ${_}m`:"N/A",k=()=>w(!m),x=()=>S(!v),C=E>720?5:3,se=E>720?7:4,gn=async()=>{const fe=Hr().currentUser;if(!fe){console.log("User is not authenticated");return}const pt=Yi(),$=wo(pt,"users",fe.uid);if(!(await Up($)).exists())try{await DT($,{name:fe.displayName,email:fe.email,movieList:[]}),console.log("User document created")}catch(Y){console.error("Error creating user document: ",Y);return}try{await mu($,{movieList:LT({id:n.id,title:n.title,poster_path:n.poster_path,release_date:n.release_date,imdb_rating:n.vote_average,overview:n.overview})}),console.log("Movie added to list")}catch(Y){console.error("Error adding movie to list: ",Y)}};return N.jsxs("div",{className:"details-page",children:[N.jsx(Ps,{}),N.jsx("div",{className:"details-background",style:{backgroundImage:`url(https://image.tmdb.org/t/p/original${n.backdrop_path})`},children:N.jsxs("div",{className:"details-content",children:[N.jsxs("button",{className:"back-button-details",onClick:()=>e(-1),children:[N.jsx("span",{className:"back-icon",children:"←"})," Back"]}),N.jsxs("div",{className:"overlay",children:[N.jsxs("div",{className:"poster-title-section",children:[N.jsxs("div",{className:"poster-rating-section",children:[N.jsx("img",{className:"additional-poster",src:`https://image.tmdb.org/t/p/w200${n.poster_path}`,alt:n.title}),N.jsx("div",{className:"movie-rating-centered",children:N.jsxs("strong",{children:[n.vote_average.toFixed(1)," / 10"]})})]}),N.jsxs("div",{className:"text-section",children:[N.jsx("h1",{className:"movie-title",children:n.title}),N.jsxs("p",{className:"movie-info",children:[M," · ",U," · ",R]}),N.jsxs("p",{className:"movie-description",children:[m||n.overview.length<=O?n.overview:`${n.overview.slice(0,O)}... `,n.overview.length>O&&N.jsx("button",{onClick:k,className:"read-more-button",children:m?"Show Less":"Read More"})]})]})]}),N.jsxs("div",{className:"cast-section",children:[N.jsxs("div",{className:"cast-header",children:[N.jsx("h2",{children:"Cast"}),N.jsx(ct,{to:`/movie/${t}/cast`,className:"show-all-button",children:"Show All"})]}),N.jsx("div",{className:"cast-list",children:u.slice(0,se).map(fe=>N.jsx("div",{className:"cast-member",children:N.jsxs(ct,{to:`/actor/${fe.id}`,children:[N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${fe.profile_path}`,alt:fe.name,className:"cast-member-photo"}),N.jsx("p",{className:"cast-member-name",children:fe.name})]})},fe.id))}),N.jsxs("div",{className:"button-section",children:[P&&N.jsx("button",{className:"red-button",onClick:x,children:"Watch Trailer"}),N.jsx("button",{className:"red-button",onClick:gn,children:"Add to List"})]})]}),N.jsxs("div",{className:"similar-movies-section",children:[N.jsx("h2",{children:"Similar Movies"}),N.jsx("div",{className:"similar-movies-list",children:d.slice(0,C).map(fe=>N.jsx(ct,{to:`/movie/${fe.id}`,className:"similar-movie",children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${fe.poster_path}`,alt:fe.title,className:"similar-movie-poster"})},fe.id))})]})]})]})}),v&&N.jsx("div",{className:"trailer-modal",onClick:x,children:N.jsxs("div",{className:"modal-content",onClick:fe=>fe.stopPropagation(),children:[N.jsx("button",{className:"close-btn",onClick:x,children:"X"}),P?N.jsx("iframe",{width:"100%",height:"400px",src:`https://www.youtube.com/embed/${P}`,title:"Trailer",frameBorder:"0",allowFullScreen:!0}):N.jsx("p",{children:"No trailer available"})]})})]})}const qL="https://api.themoviedb.org/3",HL="a0ac84614536cd4679d457482617fd23",WL=()=>{const{id:t}=np(),[e,n]=V.useState([]),[r,i]=V.useState(!0),[s,o]=V.useState(null),l=_s();return V.useEffect(()=>{window.scrollTo(0,0),(async()=>{try{const c=await ue.get(`${qL}/movie/${t}/credits`,{params:{api_key:HL}});n(c.data.cast),i(!1)}catch{o("Failed to load cast details. Please try again."),i(!1)}})()},[t]),r?N.jsx("div",{className:"loading-spinner",children:"Loading..."}):s?N.jsxs("div",{className:"error-container",children:[N.jsx("p",{children:s}),N.jsx("button",{onClick:()=>window.location.reload(),className:"retry-button",children:"Retry"})]}):N.jsxs("div",{className:"full-cast-page",children:[N.jsxs("div",{className:"full-cast-header",children:[N.jsxs("button",{onClick:()=>l(-1),className:"back-button-fullCast",children:[N.jsx("span",{className:"back-icon",children:"←"})," Back"]}),N.jsx("h1",{className:"full-cast-title",children:"Full Cast"})]}),N.jsx("div",{className:"full-cast-list",children:e.map(u=>N.jsx(ct,{to:`/actor/${u.id}`,className:"full-cast-actor-link",children:N.jsxs("div",{className:"full-cast-actor",children:[N.jsx("img",{src:u.profile_path?`https://image.tmdb.org/t/p/w200${u.profile_path}`:"/path/to/placeholder-image.jpg",alt:u.name,className:"full-cast-actor-photo"}),N.jsxs("div",{className:"full-cast-actor-info",children:[N.jsx("p",{className:"full-cast-actor-name",children:u.name}),u.character&&N.jsxs("p",{className:"full-cast-actor-role",children:["as ",u.character]})]})]})},u.id))}),N.jsx(Ps,{})]})},Xv="https://api.themoviedb.org/3",Zv="a0ac84614536cd4679d457482617fd23";function KL(){const t=_s(),{actorId:e}=np(),[n,r]=V.useState(null),[i,s]=V.useState([]),[o,l]=V.useState(!0),[u,c]=V.useState(null),[d,p]=V.useState(!1),[m,w]=V.useState(!1),[E,A]=V.useState(6),P=300;V.useEffect(()=>{(async()=>{try{const M=await ue.get(`${Xv}/person/${e}`,{params:{api_key:Zv,language:"en-US"}});r(M.data);const U=await ue.get(`${Xv}/person/${e}/movie_credits`,{params:{api_key:Zv,language:"en-US"}});s(U.data.cast),l(!1)}catch{c("Failed to load actor details"),l(!1)}})()},[e]),V.useEffect(()=>{const O=()=>{const M=window.innerWidth;M>=1070?A(6):M>=900?A(5):M>=740?A(4):(M>=580,A(3))};return O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]);const T=()=>p(!d),v=()=>w(!m);if(o)return N.jsx("p",{children:"Loading actor details..."});if(u)return N.jsx("p",{children:u});const S=m?i:i.slice(0,E);return N.jsxs("div",{className:"actor-detail",children:[N.jsxs("div",{className:"actor-content",children:[N.jsxs("div",{className:"actor-header",children:[N.jsxs("button",{onClick:()=>t(-1),className:"back-button",children:[N.jsx("span",{className:"back-icon",children:"←"})," Back"]}),N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${n.profile_path}`,alt:n.name,className:"actor-photo"}),N.jsxs("div",{className:"actor-info",children:[N.jsx("h1",{children:n.name}),N.jsxs("p",{className:"actor-bio",children:[d||!n.biography||n.biography.length<=P?n.biography:`${n.biography.slice(0,P)}...`,n.biography&&n.biography.length>P&&N.jsx("button",{onClick:T,className:"read-more-button",children:d?"Show Less":"Read More"})]})]})]}),N.jsxs("div",{className:"actor-films",children:[N.jsxs("div",{className:"actor-films-header",children:[N.jsx("h2",{children:"Known For"}),N.jsx("button",{onClick:v,className:"show-all-button",children:m?"Show Less":"Show All"})]}),N.jsx("div",{className:"films-list",children:S.map(O=>N.jsx("div",{className:"film-item",children:N.jsx(ct,{to:`/movie/${O.id}`,children:N.jsx("img",{src:`https://image.tmdb.org/t/p/w200${O.poster_path}`,alt:O.title,className:"film-poster"})})},O.id))})]})]}),N.jsx(Ps,{})]})}var GL="firebase",QL="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(GL,QL,"app");const yI="@firebase/installations",Qp="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=1e4,_I=`w:${Qp}`,wI="FIS_v2",YL="https://firebaseinstallations.googleapis.com/v1",JL=60*60*1e3,XL="installations",ZL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ai=new fi(XL,ZL,e2);function EI(t){return t instanceof en&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI({projectId:t}){return`${YL}/projects/${t}/installations`}function II(t){return{token:t.token,requestStatus:2,expiresIn:n2(t.expiresIn),creationTime:Date.now()}}async function SI(t,e){const r=(await e.json()).error;return ai.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function t2(t,{refreshToken:e}){const n=RI(t);return n.append("Authorization",r2(e)),n}async function AI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function n2(t){return Number(t.replace("s","000"))}function r2(t){return`${wI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=TI(t),i=RI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:wI,appId:t.appId,sdkVersion:_I},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await AI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:II(c.authToken)}}else throw await SI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=/^[cdef][\w-]{21}$/,rf="";function a2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=l2(t);return o2.test(n)?n:rf}catch{return rf}}function l2(t){return s2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Map;function kI(t,e){const n=fc(t);NI(n,e),u2(n,e)}function NI(t,e){const n=PI.get(t);if(n)for(const r of n)r(e)}function u2(t,e){const n=c2();n&&n.postMessage({key:t,fid:e}),h2()}let Wr=null;function c2(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=t=>{NI(t.data.key,t.data.fid)}),Wr}function h2(){PI.size===0&&Wr&&(Wr.close(),Wr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="firebase-installations-database",f2=1,li="firebase-installations-store";let Ah=null;function Yp(){return Ah||(Ah=dE(d2,f2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}})),Ah}async function Eu(t,e){const n=fc(t),i=(await Yp()).transaction(li,"readwrite"),s=i.objectStore(li),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&kI(t,e.fid),e}async function xI(t){const e=fc(t),r=(await Yp()).transaction(li,"readwrite");await r.objectStore(li).delete(e),await r.done}async function pc(t,e){const n=fc(t),i=(await Yp()).transaction(li,"readwrite"),s=i.objectStore(li),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&kI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t){let e;const n=await pc(t.appConfig,r=>{const i=p2(r),s=m2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function p2(t){const e=t||{fid:a2(),registrationStatus:0};return OI(e)}function m2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ai.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=g2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:y2(t)}:{installationEntry:e}}async function g2(t,e){try{const n=await i2(t,e);return Eu(t.appConfig,n)}catch(n){throw EI(n)&&n.customData.serverCode===409?await xI(t.appConfig):await Eu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function y2(t){let e=await e_(t.appConfig);for(;e.registrationStatus===1;)await CI(100),e=await e_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jp(t);return r||n}return e}function e_(t){return pc(t,e=>{if(!e)throw ai.create("installation-not-found");return OI(e)})}function OI(t){return v2(t)?{fid:t.fid,registrationStatus:0}:t}function v2(t){return t.registrationStatus===1&&t.registrationTime+vI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2({appConfig:t,heartbeatServiceProvider:e},n){const r=w2(t,n),i=t2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:_I,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await AI(()=>fetch(r,l));if(u.ok){const c=await u.json();return II(c)}else throw await SI("Generate Auth Token",u)}function w2(t,{fid:e}){return`${TI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(t,e=!1){let n;const r=await pc(t.appConfig,s=>{if(!DI(s))throw ai.create("not-registered");const o=s.authToken;if(!e&&I2(o))return s;if(o.requestStatus===1)return n=E2(t,e),s;{if(!navigator.onLine)throw ai.create("app-offline");const l=R2(s);return n=T2(t,l),l}});return n?await n:r.authToken}async function E2(t,e){let n=await t_(t.appConfig);for(;n.authToken.requestStatus===1;)await CI(100),n=await t_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Xp(t,e):r}function t_(t){return pc(t,e=>{if(!DI(e))throw ai.create("not-registered");const n=e.authToken;return A2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function T2(t,e){try{const n=await _2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Eu(t.appConfig,r),n}catch(n){if(EI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Eu(t.appConfig,r)}throw n}}function DI(t){return t!==void 0&&t.registrationStatus===2}function I2(t){return t.requestStatus===2&&!S2(t)}function S2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+JL}function R2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function A2(t){return t.requestStatus===1&&t.requestTime+vI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Jp(e);return r?r.catch(console.error):Xp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(t,e=!1){const n=t;return await k2(n),(await Xp(n,e)).token}async function k2(t){const{registrationPromise:e}=await Jp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){if(!t||!t.options)throw Ch("App Configuration");if(!t.name)throw Ch("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ch(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ch(t){return ai.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="installations",x2="installations-internal",O2=t=>{const e=t.getProvider("app").getImmediate(),n=N2(e),r=pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},D2=t=>{const e=t.getProvider("app").getImmediate(),n=pi(e,bI).getImmediate();return{getId:()=>C2(n),getToken:i=>P2(n,i)}};function b2(){fn(new Jt(bI,O2,"PUBLIC")),fn(new Jt(x2,D2,"PRIVATE"))}b2();jt(yI,Qp);jt(yI,Qp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="analytics",L2="firebase_id",V2="origin",M2=60*1e3,F2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Wu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new fi("analytics","Analytics",U2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){if(!t.startsWith(Zp)){const e=Ot.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function LI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function B2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function z2(t,e){const n=B2("firebase-js-sdk-policy",{createScriptURL:j2}),r=document.createElement("script"),i=`${Zp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function q2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await LI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){St.error(l)}t("config",i,s)}async function H2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await LI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function W2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await H2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await q2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){St.error(l)}}return i}function K2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=W2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function G2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=30,Y2=1e3;class J2{constructor(e={},n=Y2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VI=new J2;function X2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Z2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:X2(r)},s=F2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function eV(t,e=VI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ot.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new rV;return setTimeout(async()=>{l.abort()},M2),MI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function MI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VI){var s;const{appId:o,measurementId:l}=t;try{await tV(r,e)}catch(u){if(l)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Z2(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!nV(c)){if(i.deleteThrottleMetadata(o),l)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ly(n,i.intervalMillis,Q2):Ly(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),St.debug(`Calling attemptFetch again in ${d} millis`),MI(t,p,r,i)}}function tV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nV(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV(){if(lE())try{await uE()}catch(t){return St.warn(Ot.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oV(t,e,n,r,i,s,o){var l;const u=eV(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>St.error(w)),e.push(u);const c=sV().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([u,c]);G2(s)||z2(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[V2]="firebase",m.update=!0,p!=null&&(m[L2]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.app=e}_delete(){return delete To[this.app.options.appId],Promise.resolve()}}let To={},n_=[];const r_={};let Ph="dataLayer",lV="gtag",i_,FI,s_=!1;function uV(){const t=[];if(aE()&&t.push("This is a browser extension environment."),MP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ot.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function cV(t,e,n){uV();const r=t.options.appId;if(!r)throw Ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(To[r]!=null)throw Ot.create("already-exists",{id:r});if(!s_){$2(Ph);const{wrappedGtag:s,gtagCore:o}=K2(To,n_,r_,Ph,lV);FI=s,i_=o,s_=!0}return To[r]=oV(t,n_,r_,e,i_,Ph,n),new aV(t)}function hV(t=up()){t=ze(t);const e=pi(t,Tu);return e.isInitialized()?e.getImmediate():dV(t)}function dV(t,e={}){const n=pi(t,Tu);if(n.isInitialized()){const i=n.getImmediate();if(as(e,n.getOptions()))return i;throw Ot.create("already-initialized")}return n.initialize({options:e})}function fV(t,e,n,r){t=ze(t),iV(FI,To[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const o_="@firebase/analytics",a_="0.10.10";function pV(){fn(new Jt(Tu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return cV(r,i,n)},"PUBLIC")),fn(new Jt("analytics-internal",t,"PRIVATE")),jt(o_,a_),jt(o_,a_,"esm2017");function t(e){try{const n=e.getProvider(Tu).getImmediate();return{logEvent:(r,i,s)=>fV(n,r,i,s)}}catch(n){throw Ot.create("interop-component-reg-failed",{reason:n})}}}pV();const mV={apiKey:"AIzaSyB-PI0ZJCrWuIkTr7RVSofJdgcXBR21r18",authDomain:"filmfanatic-7d265.firebaseapp.com",projectId:"filmfanatic-7d265",storageBucket:"filmfanatic-7d265.firebasestorage.app",messagingSenderId:"1031117293329",appId:"1:1031117293329:web:1e7633dc533e44a15deeb0",measurementId:"G-FF32LYE65B"},em=fE(mV),kh=Hr(em);Yi(em);hV(em);const gV=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(!1),[u,c]=V.useState(!1),d=_s(),p=E=>e(E.target.value),m=E=>r(E.target.value);V.useEffect(()=>{const E=kh.onAuthStateChanged(A=>{A&&d("/home")});return()=>E()},[d]);const w=async E=>{if(E.preventDefault(),!t||!n){s("Please enter both email and password.");return}l(!0),s("");try{u?(await cb(kh,t,n),l(!1),d("/home")):(await hb(kh,t,n),l(!1),d("/home"))}catch(A){l(!1),s(A.message)}};return N.jsx("div",{className:"login-page",children:N.jsxs("form",{onSubmit:w,className:"login-form",children:[N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"email",children:"Email:"}),N.jsx("input",{type:"email",id:"email",value:t,onChange:p,placeholder:"Enter your email",required:!0})]}),N.jsxs("div",{className:"form-group",children:[N.jsx("label",{htmlFor:"password",children:"Password:"}),N.jsx("input",{type:"password",id:"password",value:n,onChange:m,placeholder:"Enter your password",required:!0})]}),i&&N.jsx("p",{className:"error-message",children:i}),N.jsx("button",{type:"submit",className:"login-button",disabled:o,children:o?u?"Registering...":"Logging in...":u?"Register":"Login"}),N.jsxs("div",{className:"register-option",children:[N.jsx("p",{children:"or"}),N.jsx("button",{type:"button",className:"register-button",onClick:()=>c(E=>!E),children:u?"Already have an account? Login":"Need an account? Register"})]})]})})},yV=()=>N.jsx(zA,{children:N.jsxs(LA,{children:[N.jsx(Kn,{path:"/",element:N.jsx(gV,{})}),"  ",N.jsx(Kn,{path:"/home",element:N.jsx(CL,{})}),N.jsx(Kn,{path:"/search",element:N.jsx(kL,{})}),N.jsx(Kn,{path:"/profile",element:N.jsx(zL,{})}),N.jsx(Kn,{path:"/movie/:id",element:N.jsx($L,{})}),N.jsx(Kn,{path:"/movie/:id/cast",element:N.jsx(WL,{})}),N.jsx(Kn,{path:"/actor/:actorId",element:N.jsx(KL,{})})]})});ww(document.getElementById("root")).render(N.jsx(V.StrictMode,{children:N.jsx(yV,{})}));
