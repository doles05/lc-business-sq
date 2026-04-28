(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))I(E);new MutationObserver(E=>{for(const N of E)if(N.type==="childList")for(const V of N.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&I(V)}).observe(document,{childList:!0,subtree:!0});function f(E){const N={};return E.integrity&&(N.integrity=E.integrity),E.referrerPolicy&&(N.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?N.credentials="include":E.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function I(E){if(E.ep)return;E.ep=!0;const N=f(E);fetch(E.href,N)}})();function Vu(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var _o={exports:{}},xr={},zo={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function qf(){if(Tu)return X;Tu=1;var v=Symbol.for("react.element"),g=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),V=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),R=Symbol.iterator;function U(d){return d===null||typeof d!="object"?null:(d=R&&d[R]||d["@@iterator"],typeof d=="function"?d:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,j={};function H(d,x,Y){this.props=d,this.context=x,this.refs=j,this.updater=Y||B}H.prototype.isReactComponent={},H.prototype.setState=function(d,x){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,x,"setState")},H.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function ye(){}ye.prototype=H.prototype;function Fe(d,x,Y){this.props=d,this.context=x,this.refs=j,this.updater=Y||B}var Ae=Fe.prototype=new ye;Ae.constructor=Fe,G(Ae,H.prototype),Ae.isPureReactComponent=!0;var he=Array.isArray,je=Object.prototype.hasOwnProperty,xe={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function Ie(d,x,Y){var Z,ne={},re=null,ue=null;if(x!=null)for(Z in x.ref!==void 0&&(ue=x.ref),x.key!==void 0&&(re=""+x.key),x)je.call(x,Z)&&!Te.hasOwnProperty(Z)&&(ne[Z]=x[Z]);var oe=arguments.length-2;if(oe===1)ne.children=Y;else if(1<oe){for(var ve=Array(oe),Ze=0;Ze<oe;Ze++)ve[Ze]=arguments[Ze+2];ne.children=ve}if(d&&d.defaultProps)for(Z in oe=d.defaultProps,oe)ne[Z]===void 0&&(ne[Z]=oe[Z]);return{$$typeof:v,type:d,key:re,ref:ue,props:ne,_owner:xe.current}}function Je(d,x){return{$$typeof:v,type:d.type,key:x,ref:d.ref,props:d.props,_owner:d._owner}}function F(d){return typeof d=="object"&&d!==null&&d.$$typeof===v}function J(d){var x={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(Y){return x[Y]})}var le=/\/+/g;function ae(d,x){return typeof d=="object"&&d!==null&&d.key!=null?J(""+d.key):x.toString(36)}function _e(d,x,Y,Z,ne){var re=typeof d;(re==="undefined"||re==="boolean")&&(d=null);var ue=!1;if(d===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(d.$$typeof){case v:case g:ue=!0}}if(ue)return ue=d,ne=ne(ue),d=Z===""?"."+ae(ue,0):Z,he(ne)?(Y="",d!=null&&(Y=d.replace(le,"$&/")+"/"),_e(ne,x,Y,"",function(Ze){return Ze})):ne!=null&&(F(ne)&&(ne=Je(ne,Y+(!ne.key||ue&&ue.key===ne.key?"":(""+ne.key).replace(le,"$&/")+"/")+d)),x.push(ne)),1;if(ue=0,Z=Z===""?".":Z+":",he(d))for(var oe=0;oe<d.length;oe++){re=d[oe];var ve=Z+ae(re,oe);ue+=_e(re,x,Y,ve,ne)}else if(ve=U(d),typeof ve=="function")for(d=ve.call(d),oe=0;!(re=d.next()).done;)re=re.value,ve=Z+ae(re,oe++),ue+=_e(re,x,Y,ve,ne);else if(re==="object")throw x=String(d),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return ue}function b(d,x,Y){if(d==null)return d;var Z=[],ne=0;return _e(d,Z,"","",function(re){return x.call(Y,re,ne++)}),Z}function fe(d){if(d._status===-1){var x=d._result;x=x(),x.then(function(Y){(d._status===0||d._status===-1)&&(d._status=1,d._result=Y)},function(Y){(d._status===0||d._status===-1)&&(d._status=2,d._result=Y)}),d._status===-1&&(d._status=0,d._result=x)}if(d._status===1)return d._result.default;throw d._result}var de={current:null},z={transition:null},$={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:z,ReactCurrentOwner:xe};function M(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:b,forEach:function(d,x,Y){b(d,function(){x.apply(this,arguments)},Y)},count:function(d){var x=0;return b(d,function(){x++}),x},toArray:function(d){return b(d,function(x){return x})||[]},only:function(d){if(!F(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},X.Component=H,X.Fragment=f,X.Profiler=E,X.PureComponent=Fe,X.StrictMode=I,X.Suspense=C,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,X.act=M,X.cloneElement=function(d,x,Y){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var Z=G({},d.props),ne=d.key,re=d.ref,ue=d._owner;if(x!=null){if(x.ref!==void 0&&(re=x.ref,ue=xe.current),x.key!==void 0&&(ne=""+x.key),d.type&&d.type.defaultProps)var oe=d.type.defaultProps;for(ve in x)je.call(x,ve)&&!Te.hasOwnProperty(ve)&&(Z[ve]=x[ve]===void 0&&oe!==void 0?oe[ve]:x[ve])}var ve=arguments.length-2;if(ve===1)Z.children=Y;else if(1<ve){oe=Array(ve);for(var Ze=0;Ze<ve;Ze++)oe[Ze]=arguments[Ze+2];Z.children=oe}return{$$typeof:v,type:d.type,key:ne,ref:re,props:Z,_owner:ue}},X.createContext=function(d){return d={$$typeof:V,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:N,_context:d},d.Consumer=d},X.createElement=Ie,X.createFactory=function(d){var x=Ie.bind(null,d);return x.type=d,x},X.createRef=function(){return{current:null}},X.forwardRef=function(d){return{$$typeof:_,render:d}},X.isValidElement=F,X.lazy=function(d){return{$$typeof:q,_payload:{_status:-1,_result:d},_init:fe}},X.memo=function(d,x){return{$$typeof:O,type:d,compare:x===void 0?null:x}},X.startTransition=function(d){var x=z.transition;z.transition={};try{d()}finally{z.transition=x}},X.unstable_act=M,X.useCallback=function(d,x){return de.current.useCallback(d,x)},X.useContext=function(d){return de.current.useContext(d)},X.useDebugValue=function(){},X.useDeferredValue=function(d){return de.current.useDeferredValue(d)},X.useEffect=function(d,x){return de.current.useEffect(d,x)},X.useId=function(){return de.current.useId()},X.useImperativeHandle=function(d,x,Y){return de.current.useImperativeHandle(d,x,Y)},X.useInsertionEffect=function(d,x){return de.current.useInsertionEffect(d,x)},X.useLayoutEffect=function(d,x){return de.current.useLayoutEffect(d,x)},X.useMemo=function(d,x){return de.current.useMemo(d,x)},X.useReducer=function(d,x,Y){return de.current.useReducer(d,x,Y)},X.useRef=function(d){return de.current.useRef(d)},X.useState=function(d){return de.current.useState(d)},X.useSyncExternalStore=function(d,x,Y){return de.current.useSyncExternalStore(d,x,Y)},X.useTransition=function(){return de.current.useTransition()},X.version="18.3.1",X}var Mu;function Io(){return Mu||(Mu=1,zo.exports=qf()),zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Vf(){if(Ru)return xr;Ru=1;var v=Io(),g=Symbol.for("react.element"),f=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,E=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function V(_,C,O){var q,R={},U=null,B=null;O!==void 0&&(U=""+O),C.key!==void 0&&(U=""+C.key),C.ref!==void 0&&(B=C.ref);for(q in C)I.call(C,q)&&!N.hasOwnProperty(q)&&(R[q]=C[q]);if(_&&_.defaultProps)for(q in C=_.defaultProps,C)R[q]===void 0&&(R[q]=C[q]);return{$$typeof:g,type:_,key:U,ref:B,props:R,_owner:E.current}}return xr.Fragment=f,xr.jsx=V,xr.jsxs=V,xr}var Lu;function Hf(){return Lu||(Lu=1,_o.exports=Vf()),_o.exports}var a=Hf(),ee=Io();const Wf=Vu(ee);var Mi={},Po={exports:{}},Xe={},To={exports:{}},Mo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Qf(){return Fu||(Fu=1,(function(v){function g(z,$){var M=z.length;z.push($);e:for(;0<M;){var d=M-1>>>1,x=z[d];if(0<E(x,$))z[d]=$,z[M]=x,M=d;else break e}}function f(z){return z.length===0?null:z[0]}function I(z){if(z.length===0)return null;var $=z[0],M=z.pop();if(M!==$){z[0]=M;e:for(var d=0,x=z.length,Y=x>>>1;d<Y;){var Z=2*(d+1)-1,ne=z[Z],re=Z+1,ue=z[re];if(0>E(ne,M))re<x&&0>E(ue,ne)?(z[d]=ue,z[re]=M,d=re):(z[d]=ne,z[Z]=M,d=Z);else if(re<x&&0>E(ue,M))z[d]=ue,z[re]=M,d=re;else break e}}return $}function E(z,$){var M=z.sortIndex-$.sortIndex;return M!==0?M:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var N=performance;v.unstable_now=function(){return N.now()}}else{var V=Date,_=V.now();v.unstable_now=function(){return V.now()-_}}var C=[],O=[],q=1,R=null,U=3,B=!1,G=!1,j=!1,H=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,Fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(z){for(var $=f(O);$!==null;){if($.callback===null)I(O);else if($.startTime<=z)I(O),$.sortIndex=$.expirationTime,g(C,$);else break;$=f(O)}}function he(z){if(j=!1,Ae(z),!G)if(f(C)!==null)G=!0,fe(je);else{var $=f(O);$!==null&&de(he,$.startTime-z)}}function je(z,$){G=!1,j&&(j=!1,ye(Ie),Ie=-1),B=!0;var M=U;try{for(Ae($),R=f(C);R!==null&&(!(R.expirationTime>$)||z&&!J());){var d=R.callback;if(typeof d=="function"){R.callback=null,U=R.priorityLevel;var x=d(R.expirationTime<=$);$=v.unstable_now(),typeof x=="function"?R.callback=x:R===f(C)&&I(C),Ae($)}else I(C);R=f(C)}if(R!==null)var Y=!0;else{var Z=f(O);Z!==null&&de(he,Z.startTime-$),Y=!1}return Y}finally{R=null,U=M,B=!1}}var xe=!1,Te=null,Ie=-1,Je=5,F=-1;function J(){return!(v.unstable_now()-F<Je)}function le(){if(Te!==null){var z=v.unstable_now();F=z;var $=!0;try{$=Te(!0,z)}finally{$?ae():(xe=!1,Te=null)}}else xe=!1}var ae;if(typeof Fe=="function")ae=function(){Fe(le)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,b=_e.port2;_e.port1.onmessage=le,ae=function(){b.postMessage(null)}}else ae=function(){H(le,0)};function fe(z){Te=z,xe||(xe=!0,ae())}function de(z,$){Ie=H(function(){z(v.unstable_now())},$)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(z){z.callback=null},v.unstable_continueExecution=function(){G||B||(G=!0,fe(je))},v.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Je=0<z?Math.floor(1e3/z):5},v.unstable_getCurrentPriorityLevel=function(){return U},v.unstable_getFirstCallbackNode=function(){return f(C)},v.unstable_next=function(z){switch(U){case 1:case 2:case 3:var $=3;break;default:$=U}var M=U;U=$;try{return z()}finally{U=M}},v.unstable_pauseExecution=function(){},v.unstable_requestPaint=function(){},v.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=U;U=z;try{return $()}finally{U=M}},v.unstable_scheduleCallback=function(z,$,M){var d=v.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?d+M:d):M=d,z){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=M+x,z={id:q++,callback:$,priorityLevel:z,startTime:M,expirationTime:x,sortIndex:-1},M>d?(z.sortIndex=M,g(O,z),f(C)===null&&z===f(O)&&(j?(ye(Ie),Ie=-1):j=!0,de(he,M-d))):(z.sortIndex=x,g(C,z),G||B||(G=!0,fe(je))),z},v.unstable_shouldYield=J,v.unstable_wrapCallback=function(z){var $=U;return function(){var M=U;U=$;try{return z.apply(this,arguments)}finally{U=M}}}})(Mo)),Mo}var Iu;function $f(){return Iu||(Iu=1,To.exports=Qf()),To.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Gf(){if(Du)return Xe;Du=1;var v=Io(),g=$f();function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I=new Set,E={};function N(e,t){V(e,t),V(e+"Capture",t)}function V(e,t){for(E[e]=t,e=0;e<t.length;e++)I.add(t[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},R={};function U(e){return C.call(R,e)?!0:C.call(q,e)?!1:O.test(e)?R[e]=!0:(q[e]=!0,!1)}function B(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G(e,t,n,r){if(t===null||typeof t>"u"||B(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function j(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new j(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function Fe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ye,Fe);H[t]=new j(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ye,Fe);H[t]=new j(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ye,Fe);H[t]=new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ae(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G(t,n,i,r)&&(n=null),r||i===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var he=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),xe=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),J=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),z=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,d;function x(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var Y=!1;function Z(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?x(e):""}function ne(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case xe:return"Portal";case Je:return"Profiler";case Ie:return"StrictMode";case ae:return"Suspense";case _e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J:return(e.displayName||"Context")+".Consumer";case F:return(e._context.displayName||"Context")+".Provider";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case b:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Ze(e))}function Do(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ve(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Li(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ao(e,t){t=t.checked,t!=null&&Ae(e,"checked",t,!1)}function Fi(e,t){Ao(e,t);var n=oe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ii(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ii(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(f(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(f(92));if(Fn(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oe(n)}}function qo(e,t){var n=oe(t.value),r=oe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ho(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ho(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Wo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Wu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Qo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function $o(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qu=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(Qu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(f(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(t.style!=null&&typeof t.style!="object")throw Error(f(62))}}function Bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,un=null,cn=null;function Go(e){if(e=ir(e)){if(typeof Vi!="function")throw Error(f(280));var t=e.stateNode;t&&(t=$r(t),Vi(e.stateNode,e.type,t))}}function Ko(e){un?cn?cn.push(e):cn=[e]:un=e}function Yo(){if(un){var e=un,t=cn;if(cn=un=null,Go(e),t)for(e=0;e<t.length;e++)Go(t[e])}}function Xo(e,t){return e(t)}function Jo(){}var Hi=!1;function Zo(e,t,n){if(Hi)return e(t,n);Hi=!0;try{return Xo(e,t,n)}finally{Hi=!1,(un!==null||cn!==null)&&(Jo(),Yo())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=$r(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var Wi=!1;if(_)try{var An={};Object.defineProperty(An,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Wi=!1}function $u(e,t,n,r,i,l,o,s,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(k){this.onError(k)}}var Bn=!1,Cr=null,Nr=!1,Qi=null,Gu={onError:function(e){Bn=!0,Cr=e}};function Ku(e,t,n,r,i,l,o,s,u){Bn=!1,Cr=null,$u.apply(Gu,arguments)}function Yu(e,t,n,r,i,l,o,s,u){if(Ku.apply(this,arguments),Bn){if(Bn){var h=Cr;Bn=!1,Cr=null}else throw Error(f(198));Nr||(Nr=!0,Qi=h)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(Kt(e)!==e)throw Error(f(188))}function Xu(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return es(i),e;if(l===r)return es(i),t;l=l.sibling}throw Error(f(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function ts(e){return e=Xu(e),e!==null?ns(e):null}function ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ns(e);if(t!==null)return t;e=e.sibling}return null}var rs=g.unstable_scheduleCallback,is=g.unstable_cancelCallback,Ju=g.unstable_shouldYield,Zu=g.unstable_requestPaint,Ee=g.unstable_now,bu=g.unstable_getCurrentPriorityLevel,$i=g.unstable_ImmediatePriority,ls=g.unstable_UserBlockingPriority,jr=g.unstable_NormalPriority,ec=g.unstable_LowPriority,os=g.unstable_IdlePriority,_r=null,vt=null;function tc(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:ic,nc=Math.log,rc=Math.LN2;function ic(e){return e>>>=0,e===0?32:31-(nc(e)/rc|0)|0}var zr=64,Pr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Un(s):(l&=o,l!==0&&(r=Un(l)))}else o=n&~i,o!==0?r=Un(o):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function lc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ut(l),s=1<<o,u=i[o];u===-1?((s&n)===0||(s&r)!==0)&&(i[o]=lc(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ss(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function sc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function as(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var us,Xi,cs,fs,ds,Ji=!1,Mr=[],Pt=null,Tt=null,Mt=null,Vn=new Map,Hn=new Map,Rt=[],ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Wn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ir(t),t!==null&&Xi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uc(e,t,n,r,i){switch(t){case"focusin":return Pt=Wn(Pt,e,t,n,r,i),!0;case"dragenter":return Tt=Wn(Tt,e,t,n,r,i),!0;case"mouseover":return Mt=Wn(Mt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Vn.set(l,Wn(Vn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Hn.set(l,Wn(Hn.get(l)||null,e,t,n,r,i)),!0}return!1}function ms(e){var t=Yt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=bo(n),t!==null){e.blockedOn=t,ds(e.priority,function(){cs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ui=r,n.target.dispatchEvent(r),Ui=null}else return t=ir(n),t!==null&&Xi(t),e.blockedOn=n,!1;t.shift()}return!0}function hs(e,t,n){Rr(e)&&n.delete(t)}function cc(){Ji=!1,Pt!==null&&Rr(Pt)&&(Pt=null),Tt!==null&&Rr(Tt)&&(Tt=null),Mt!==null&&Rr(Mt)&&(Mt=null),Vn.forEach(hs),Hn.forEach(hs)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ji||(Ji=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,cc)))}function $n(e){function t(i){return Qn(i,e)}if(0<Mr.length){Qn(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Qn(Pt,e),Tt!==null&&Qn(Tt,e),Mt!==null&&Qn(Mt,e),Vn.forEach(t),Hn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)ms(n),n.blockedOn===null&&Rt.shift()}var fn=he.ReactCurrentBatchConfig,Lr=!0;function fc(e,t,n,r){var i=se,l=fn.transition;fn.transition=null;try{se=1,Zi(e,t,n,r)}finally{se=i,fn.transition=l}}function dc(e,t,n,r){var i=se,l=fn.transition;fn.transition=null;try{se=4,Zi(e,t,n,r)}finally{se=i,fn.transition=l}}function Zi(e,t,n,r){if(Lr){var i=bi(e,t,n,r);if(i===null)vl(e,t,r,Fr,n),ps(e,r);else if(uc(i,e,t,n,r))r.stopPropagation();else if(ps(e,r),t&4&&-1<ac.indexOf(e)){for(;i!==null;){var l=ir(i);if(l!==null&&us(l),l=bi(e,t,n,r),l===null&&vl(e,t,r,Fr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var Fr=null;function bi(e,t,n,r){if(Fr=null,e=qi(r),e=Yt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bu()){case $i:return 1;case ls:return 4;case jr:case ec:return 16;case os:return 536870912;default:return 16}default:return 16}}var Lt=null,el=null,Ir=null;function gs(){if(Ir)return Ir;var e,t=el,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Ir=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function ys(){return!1}function be(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Or:ys,this.isPropagationStopped=ys,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=be(dn),Gn=M({},dn,{view:0,detail:0}),pc=be(Gn),nl,rl,Kn,Ar=M({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kn&&(Kn&&e.type==="mousemove"?(nl=e.screenX-Kn.screenX,rl=e.screenY-Kn.screenY):rl=nl=0,Kn=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),xs=be(Ar),mc=M({},Ar,{dataTransfer:0}),hc=be(mc),vc=M({},Gn,{relatedTarget:0}),il=be(vc),gc=M({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),yc=be(gc),xc=M({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kc=be(xc),wc=M({},dn,{data:0}),ks=be(wc),Sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cc[e])?!!t[e]:!1}function ll(){return Nc}var jc=M({},Gn,{key:function(e){if(e.key){var t=Sc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ec[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_c=be(jc),zc=M({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=be(zc),Pc=M({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),Tc=be(Pc),Mc=M({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=be(Mc),Lc=M({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fc=be(Lc),Ic=[9,13,27,32],ol=_&&"CompositionEvent"in window,Yn=null;_&&"documentMode"in document&&(Yn=document.documentMode);var Dc=_&&"TextEvent"in window&&!Yn,Ss=_&&(!ol||Yn&&8<Yn&&11>=Yn),Es=" ",Cs=!1;function Ns(e,t){switch(e){case"keyup":return Ic.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Oc(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(Cs=!0,Es);case"textInput":return e=t.data,e===Es&&Cs?null:e;default:return null}}function Ac(e,t){if(pn)return e==="compositionend"||!ol&&Ns(e,t)?(e=gs(),Ir=el=Lt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ss&&t.locale!=="ko"?null:t.data;default:return null}}var Bc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bc[e.type]:t==="textarea"}function zs(e,t,n,r){Ko(r),t=Hr(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Jn=null;function Uc(e){$s(e,0)}function Br(e){var t=yn(e);if(Do(t))return e}function qc(e,t){if(e==="change")return t}var Ps=!1;if(_){var sl;if(_){var al="oninput"in document;if(!al){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),al=typeof Ts.oninput=="function"}sl=al}else sl=!1;Ps=sl&&(!document.documentMode||9<document.documentMode)}function Ms(){Xn&&(Xn.detachEvent("onpropertychange",Rs),Jn=Xn=null)}function Rs(e){if(e.propertyName==="value"&&Br(Jn)){var t=[];zs(t,Jn,e,qi(e)),Zo(Uc,t)}}function Vc(e,t,n){e==="focusin"?(Ms(),Xn=t,Jn=n,Xn.attachEvent("onpropertychange",Rs)):e==="focusout"&&Ms()}function Hc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Jn)}function Wc(e,t){if(e==="click")return Br(t)}function Qc(e,t){if(e==="input"||e==="change")return Br(t)}function $c(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:$c;function Zn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Is(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Is(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ds(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gc(e){var t=Ds(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Is(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Fs(n,l);var o=Fs(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kc=_&&"documentMode"in document&&11>=document.documentMode,mn=null,cl=null,bn=null,fl=!1;function Os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||mn==null||mn!==Sr(r)||(r=mn,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Zn(bn,r)||(bn=r,r=Hr(cl,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},dl={},As={};_&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function qr(e){if(dl[e])return dl[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in As)return dl[e]=t[n];return e}var Bs=qr("animationend"),Us=qr("animationiteration"),qs=qr("animationstart"),Vs=qr("transitionend"),Hs=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Hs.set(e,t),N(t,[e])}for(var pl=0;pl<Ws.length;pl++){var ml=Ws[pl],Yc=ml.toLowerCase(),Xc=ml[0].toUpperCase()+ml.slice(1);Ft(Yc,"on"+Xc)}Ft(Bs,"onAnimationEnd"),Ft(Us,"onAnimationIteration"),Ft(qs,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Vs,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yu(r,t,void 0,e),e.currentTarget=null}function $s(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,h=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;Qs(i,s,h),l=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,h=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;Qs(i,s,h),l=u}}}if(Nr)throw e=Qi,Nr=!1,Qi=null,e}function pe(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(Gs(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),Gs(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Vr]){e[Vr]=!0,I.forEach(function(n){n!=="selectionchange"&&(Jc.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,hl("selectionchange",!1,t))}}function Gs(e,t,n,r){switch(vs(t)){case 1:var i=fc;break;case 4:i=dc;break;default:i=Zi}n=i.bind(null,t,n,e),i=void 0,!Wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Yt(s),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Zo(function(){var h=l,k=qi(n),w=[];e:{var y=Hs.get(e);if(y!==void 0){var P=tl,L=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":P=_c;break;case"focusin":L="focus",P=il;break;case"focusout":L="blur",P=il;break;case"beforeblur":case"afterblur":P=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=hc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Tc;break;case Bs:case Us:case qs:P=yc;break;case Vs:P=Rc;break;case"scroll":P=pc;break;case"wheel":P=Fc;break;case"copy":case"cut":case"paste":P=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ws}var D=(t&4)!==0,Ce=!D&&e==="scroll",p=D?y!==null?y+"Capture":null:y;D=[];for(var c=h,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=On(c,p),S!=null&&D.push(nr(c,S,m)))),Ce)break;c=c.return}0<D.length&&(y=new P(y,L,null,n,k),w.push({event:y,listeners:D}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",y&&n!==Ui&&(L=n.relatedTarget||n.fromElement)&&(Yt(L)||L[wt]))break e;if((P||y)&&(y=k.window===k?k:(y=k.ownerDocument)?y.defaultView||y.parentWindow:window,P?(L=n.relatedTarget||n.toElement,P=h,L=L?Yt(L):null,L!==null&&(Ce=Kt(L),L!==Ce||L.tag!==5&&L.tag!==6)&&(L=null)):(P=null,L=h),P!==L)){if(D=xs,S="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(D=ws,S="onPointerLeave",p="onPointerEnter",c="pointer"),Ce=P==null?y:yn(P),m=L==null?y:yn(L),y=new D(S,c+"leave",P,n,k),y.target=Ce,y.relatedTarget=m,S=null,Yt(k)===h&&(D=new D(p,c+"enter",L,n,k),D.target=m,D.relatedTarget=Ce,S=D),Ce=S,P&&L)t:{for(D=P,p=L,c=0,m=D;m;m=vn(m))c++;for(m=0,S=p;S;S=vn(S))m++;for(;0<c-m;)D=vn(D),c--;for(;0<m-c;)p=vn(p),m--;for(;c--;){if(D===p||p!==null&&D===p.alternate)break t;D=vn(D),p=vn(p)}D=null}else D=null;P!==null&&Ks(w,y,P,D,!1),L!==null&&Ce!==null&&Ks(w,Ce,L,D,!0)}}e:{if(y=h?yn(h):window,P=y.nodeName&&y.nodeName.toLowerCase(),P==="select"||P==="input"&&y.type==="file")var A=qc;else if(_s(y))if(Ps)A=Qc;else{A=Hc;var W=Vc}else(P=y.nodeName)&&P.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(A=Wc);if(A&&(A=A(e,h))){zs(w,A,n,k);break e}W&&W(e,y,h),e==="focusout"&&(W=y._wrapperState)&&W.controlled&&y.type==="number"&&Ii(y,"number",y.value)}switch(W=h?yn(h):window,e){case"focusin":(_s(W)||W.contentEditable==="true")&&(mn=W,cl=h,bn=null);break;case"focusout":bn=cl=mn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Os(w,n,k);break;case"selectionchange":if(Kc)break;case"keydown":case"keyup":Os(w,n,k)}var Q;if(ol)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else pn?Ns(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Ss&&n.locale!=="ko"&&(pn||K!=="onCompositionStart"?K==="onCompositionEnd"&&pn&&(Q=gs()):(Lt=k,el="value"in Lt?Lt.value:Lt.textContent,pn=!0)),W=Hr(h,K),0<W.length&&(K=new ks(K,e,null,n,k),w.push({event:K,listeners:W}),Q?K.data=Q:(Q=js(n),Q!==null&&(K.data=Q)))),(Q=Dc?Oc(e,n):Ac(e,n))&&(h=Hr(h,"onBeforeInput"),0<h.length&&(k=new ks("onBeforeInput","beforeinput",null,n,k),w.push({event:k,listeners:h}),k.data=Q))}$s(w,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=On(e,n),l!=null&&r.unshift(nr(e,l,i)),l=On(e,t),l!=null&&r.push(nr(e,l,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ks(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,h=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&h!==null&&(s=h,i?(u=On(n,l),u!=null&&o.unshift(nr(n,u,s))):i||(u=On(n,l),u!=null&&o.push(nr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zc=/\r\n?/g,bc=/\u0000|\uFFFD/g;function Ys(e){return(typeof e=="string"?e:""+e).replace(Zc,`
`).replace(bc,"")}function Wr(e,t,n){if(t=Ys(t),Ys(e)!==t&&n)throw Error(f(425))}function Qr(){}var gl=null,yl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,ef=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(e){return Xs.resolve(null).then(e).catch(nf)}:kl;function nf(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$n(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Js(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),gt="__reactFiber$"+gn,rr="__reactProps$"+gn,wt="__reactContainer$"+gn,Sl="__reactEvents$"+gn,rf="__reactListeners$"+gn,lf="__reactHandles$"+gn;function Yt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Js(e);e!==null;){if(n=e[gt])return n;e=Js(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[gt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function $r(e){return e[rr]||null}var El=[],xn=-1;function Dt(e){return{current:e}}function me(e){0>xn||(e.current=El[xn],El[xn]=null,xn--)}function ce(e,t){xn++,El[xn]=e.current,e.current=t}var Ot={},Be=Dt(Ot),Qe=Dt(!1),Xt=Ot;function kn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Gr(){me(Qe),me(Be)}function Zs(e,t,n){if(Be.current!==Ot)throw Error(f(168));ce(Be,t),ce(Qe,n)}function bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(f(108,ue(e)||"Unknown",i));return M({},n,r)}function Kr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Xt=Be.current,ce(Be,e),ce(Qe,Qe.current),!0}function ea(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=bs(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,me(Qe),me(Be),ce(Be,e)):me(Qe),ce(Qe,n)}var St=null,Yr=!1,Cl=!1;function ta(e){St===null?St=[e]:St.push(e)}function of(e){Yr=!0,ta(e)}function At(){if(!Cl&&St!==null){Cl=!0;var e=0,t=se;try{var n=St;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Yr=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),rs($i,At),i}finally{se=t,Cl=!1}}return null}var wn=[],Sn=0,Xr=null,Jr=0,rt=[],it=0,Jt=null,Et=1,Ct="";function Zt(e,t){wn[Sn++]=Jr,wn[Sn++]=Xr,Xr=e,Jr=t}function na(e,t,n){rt[it++]=Et,rt[it++]=Ct,rt[it++]=Jt,Jt=e;var r=Et;e=Ct;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var l=32-ut(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-ut(t)+i|n<<i|r,Ct=l+e}else Et=1<<l|n<<i|r,Ct=e}function Nl(e){e.return!==null&&(Zt(e,1),na(e,1,0))}function jl(e){for(;e===Xr;)Xr=wn[--Sn],wn[Sn]=null,Jr=wn[--Sn],wn[Sn]=null;for(;e===Jt;)Jt=rt[--it],rt[it]=null,Ct=rt[--it],rt[it]=null,Et=rt[--it],rt[it]=null}var et=null,tt=null,ge=!1,ft=null;function ra(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zl(e){if(ge){var t=tt;if(t){var n=t;if(!ia(e,t)){if(_l(e))throw Error(f(418));t=It(n.nextSibling);var r=et;t&&ia(e,t)?ra(r,n):(e.flags=e.flags&-4097|2,ge=!1,et=e)}}else{if(_l(e))throw Error(f(418));e.flags=e.flags&-4097|2,ge=!1,et=e}}}function la(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Zr(e){if(e!==et)return!1;if(!ge)return la(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=tt)){if(_l(e))throw oa(),Error(f(418));for(;t;)ra(e,t),t=It(t.nextSibling)}if(la(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?It(e.stateNode.nextSibling):null;return!0}function oa(){for(var e=tt;e;)e=It(e.nextSibling)}function En(){tt=et=null,ge=!1}function Pl(e){ft===null?ft=[e]:ft.push(e)}var sf=he.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sa(e){var t=e._init;return t(e._payload)}function aa(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=$t(p,c),p.index=0,p.sibling=null,p}function l(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,S){return c===null||c.tag!==6?(c=wo(m,p.mode,S),c.return=p,c):(c=i(c,m),c.return=p,c)}function u(p,c,m,S){var A=m.type;return A===Te?k(p,c,m.props.children,S,m.key):c!==null&&(c.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===fe&&sa(A)===c.type)?(S=i(c,m.props),S.ref=lr(p,c,m),S.return=p,S):(S=Ei(m.type,m.key,m.props,null,p.mode,S),S.ref=lr(p,c,m),S.return=p,S)}function h(p,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=So(m,p.mode,S),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function k(p,c,m,S,A){return c===null||c.tag!==7?(c=sn(m,p.mode,S,A),c.return=p,c):(c=i(c,m),c.return=p,c)}function w(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case je:return m=Ei(c.type,c.key,c.props,null,p.mode,m),m.ref=lr(p,null,c),m.return=p,m;case xe:return c=So(c,p.mode,m),c.return=p,c;case fe:var S=c._init;return w(p,S(c._payload),m)}if(Fn(c)||$(c))return c=sn(c,p.mode,m,null),c.return=p,c;br(p,c)}return null}function y(p,c,m,S){var A=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:s(p,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case je:return m.key===A?u(p,c,m,S):null;case xe:return m.key===A?h(p,c,m,S):null;case fe:return A=m._init,y(p,c,A(m._payload),S)}if(Fn(m)||$(m))return A!==null?null:k(p,c,m,S,null);br(p,m)}return null}function P(p,c,m,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,s(c,p,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case je:return p=p.get(S.key===null?m:S.key)||null,u(c,p,S,A);case xe:return p=p.get(S.key===null?m:S.key)||null,h(c,p,S,A);case fe:var W=S._init;return P(p,c,m,W(S._payload),A)}if(Fn(S)||$(S))return p=p.get(m)||null,k(c,p,S,A,null);br(c,S)}return null}function L(p,c,m,S){for(var A=null,W=null,Q=c,K=c=0,Le=null;Q!==null&&K<m.length;K++){Q.index>K?(Le=Q,Q=null):Le=Q.sibling;var ie=y(p,Q,m[K],S);if(ie===null){Q===null&&(Q=Le);break}e&&Q&&ie.alternate===null&&t(p,Q),c=l(ie,c,K),W===null?A=ie:W.sibling=ie,W=ie,Q=Le}if(K===m.length)return n(p,Q),ge&&Zt(p,K),A;if(Q===null){for(;K<m.length;K++)Q=w(p,m[K],S),Q!==null&&(c=l(Q,c,K),W===null?A=Q:W.sibling=Q,W=Q);return ge&&Zt(p,K),A}for(Q=r(p,Q);K<m.length;K++)Le=P(Q,p,K,m[K],S),Le!==null&&(e&&Le.alternate!==null&&Q.delete(Le.key===null?K:Le.key),c=l(Le,c,K),W===null?A=Le:W.sibling=Le,W=Le);return e&&Q.forEach(function(Gt){return t(p,Gt)}),ge&&Zt(p,K),A}function D(p,c,m,S){var A=$(m);if(typeof A!="function")throw Error(f(150));if(m=A.call(m),m==null)throw Error(f(151));for(var W=A=null,Q=c,K=c=0,Le=null,ie=m.next();Q!==null&&!ie.done;K++,ie=m.next()){Q.index>K?(Le=Q,Q=null):Le=Q.sibling;var Gt=y(p,Q,ie.value,S);if(Gt===null){Q===null&&(Q=Le);break}e&&Q&&Gt.alternate===null&&t(p,Q),c=l(Gt,c,K),W===null?A=Gt:W.sibling=Gt,W=Gt,Q=Le}if(ie.done)return n(p,Q),ge&&Zt(p,K),A;if(Q===null){for(;!ie.done;K++,ie=m.next())ie=w(p,ie.value,S),ie!==null&&(c=l(ie,c,K),W===null?A=ie:W.sibling=ie,W=ie);return ge&&Zt(p,K),A}for(Q=r(p,Q);!ie.done;K++,ie=m.next())ie=P(Q,p,K,ie.value,S),ie!==null&&(e&&ie.alternate!==null&&Q.delete(ie.key===null?K:ie.key),c=l(ie,c,K),W===null?A=ie:W.sibling=ie,W=ie);return e&&Q.forEach(function(Uf){return t(p,Uf)}),ge&&Zt(p,K),A}function Ce(p,c,m,S){if(typeof m=="object"&&m!==null&&m.type===Te&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case je:e:{for(var A=m.key,W=c;W!==null;){if(W.key===A){if(A=m.type,A===Te){if(W.tag===7){n(p,W.sibling),c=i(W,m.props.children),c.return=p,p=c;break e}}else if(W.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===fe&&sa(A)===W.type){n(p,W.sibling),c=i(W,m.props),c.ref=lr(p,W,m),c.return=p,p=c;break e}n(p,W);break}else t(p,W);W=W.sibling}m.type===Te?(c=sn(m.props.children,p.mode,S,m.key),c.return=p,p=c):(S=Ei(m.type,m.key,m.props,null,p.mode,S),S.ref=lr(p,c,m),S.return=p,p=S)}return o(p);case xe:e:{for(W=m.key;c!==null;){if(c.key===W)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=So(m,p.mode,S),c.return=p,p=c}return o(p);case fe:return W=m._init,Ce(p,c,W(m._payload),S)}if(Fn(m))return L(p,c,m,S);if($(m))return D(p,c,m,S);br(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=wo(m,p.mode,S),c.return=p,p=c),o(p)):n(p,c)}return Ce}var Cn=aa(!0),ua=aa(!1),ei=Dt(null),ti=null,Nn=null,Tl=null;function Ml(){Tl=Nn=ti=null}function Rl(e){var t=ei.current;me(ei),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){ti=e,Tl=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(ti===null)throw Error(f(308));Nn=e,ti.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var bt=null;function Fl(e){bt===null?bt=[e]:bt.push(e)}function ca(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}function da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var i=e.updateQueue;Bt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,h=u.next;u.next=null,o===null?l=h:o.next=h,o=u;var k=e.alternate;k!==null&&(k=k.updateQueue,s=k.lastBaseUpdate,s!==o&&(s===null?k.firstBaseUpdate=h:s.next=h,k.lastBaseUpdate=u))}if(l!==null){var w=i.baseState;o=0,k=h=u=null,s=l;do{var y=s.lane,P=s.eventTime;if((r&y)===y){k!==null&&(k=k.next={eventTime:P,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var L=e,D=s;switch(y=t,P=n,D.tag){case 1:if(L=D.payload,typeof L=="function"){w=L.call(P,w,y);break e}w=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=D.payload,y=typeof L=="function"?L.call(P,w,y):L,y==null)break e;w=M({},w,y);break e;case 2:Bt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else P={eventTime:P,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},k===null?(h=k=P,u=w):k=k.next=P,o|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(k===null&&(u=w),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);nn|=o,e.lanes=o,e.memoizedState=w}}function pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(f(191,i));i.call(r)}}}var or={},yt=Dt(or),sr=Dt(or),ar=Dt(or);function en(e){if(e===or)throw Error(f(174));return e}function Dl(e,t){switch(ce(ar,t),ce(sr,e),ce(yt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}me(yt),ce(yt,t)}function _n(){me(yt),me(sr),me(ar)}function ma(e){en(ar.current);var t=en(yt.current),n=Oi(t,e.type);t!==n&&(ce(sr,e),ce(yt,n))}function Ol(e){sr.current===e&&(me(yt),me(sr))}var ke=Dt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function Bl(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var li=he.ReactCurrentDispatcher,Ul=he.ReactCurrentBatchConfig,tn=0,we=null,ze=null,Me=null,oi=!1,ur=!1,cr=0,af=0;function Ue(){throw Error(f(321))}function ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Vl(e,t,n,r,i,l){if(tn=l,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?df:pf,e=n(r,i),ur){l=0;do{if(ur=!1,cr=0,25<=l)throw Error(f(301));l+=1,Me=ze=null,t.updateQueue=null,li.current=mf,e=n(r,i)}while(ur)}if(li.current=ui,t=ze!==null&&ze.next!==null,tn=0,Me=ze=we=null,oi=!1,t)throw Error(f(300));return e}function Hl(){var e=cr!==0;return cr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?we.memoizedState=Me=e:Me=Me.next=e,Me}function ot(){if(ze===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Me===null?we.memoizedState:Me.next;if(t!==null)Me=t,ze=e;else{if(e===null)throw Error(f(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Me===null?we.memoizedState=Me=e:Me=Me.next=e}return Me}function fr(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=ot(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var r=ze,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,u=null,h=l;do{var k=h.lane;if((tn&k)===k)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var w={lane:k,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(s=u=w,o=r):u=u.next=w,we.lanes|=k,nn|=k}h=h.next}while(h!==null&&h!==l);u===null?o=r:u.next=s,ct(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,we.lanes|=l,nn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=ot(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ct(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ha(){}function va(e,t){var n=we,r=ot(),i=t(),l=!ct(r.memoizedState,i);if(l&&(r.memoizedState=i,Ge=!0),r=r.queue,$l(xa.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,dr(9,ya.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(f(349));(tn&30)!==0||ga(n,t,i)}return i}function ga(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ya(e,t,n,r){t.value=n,t.getSnapshot=r,ka(t)&&wa(e)}function xa(e,t,n){return n(function(){ka(t)&&wa(e)})}function ka(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function wa(e){var t=Nt(e,1);t!==null&&ht(t,e,1,-1)}function Sa(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,we,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ea(){return ot().memoizedState}function si(e,t,n,r){var i=xt();we.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=ot();r=r===void 0?null:r;var l=void 0;if(ze!==null){var o=ze.memoizedState;if(l=o.destroy,r!==null&&ql(r,o.deps)){i.memoizedState=dr(t,n,l,r);return}}we.flags|=e,i.memoizedState=dr(1|t,n,l,r)}function Ca(e,t){return si(8390656,8,e,t)}function $l(e,t){return ai(2048,8,e,t)}function Na(e,t){return ai(4,2,e,t)}function ja(e,t){return ai(4,4,e,t)}function _a(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function za(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,_a.bind(null,t,e),n)}function Gl(){}function Pa(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ql(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ta(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ql(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ma(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(ct(n,t)||(n=ss(),we.lanes|=n,nn|=n,e.baseState=!0),t)}function uf(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{se=n,Ul.transition=r}}function Ra(){return ot().memoizedState}function cf(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Fa(t,n);else if(n=ca(e,t,n,r),n!==null){var i=We();ht(n,e,r,i),Ia(n,t,r)}}function ff(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Fa(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,ct(s,o)){var u=t.interleaved;u===null?(i.next=i,Fl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ca(e,t,i,r),n!==null&&(i=We(),ht(n,e,r,i),Ia(n,t,r))}}function La(e){var t=e.alternate;return e===we||t!==null&&t===we}function Fa(e,t){ur=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ia(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yi(e,n)}}var ui={readContext:lt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},df={readContext:lt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Ca,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,_a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Sa,useDebugValue:Gl,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Sa(!1),t=e[0];return e=uf.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=xt();if(ge){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),Re===null)throw Error(f(349));(tn&30)!==0||ga(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ca(xa.bind(null,r,l,e),[e]),r.flags|=2048,dr(9,ya.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=xt(),t=Re.identifierPrefix;if(ge){var n=Ct,r=Et;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pf={readContext:lt,useCallback:Pa,useContext:lt,useEffect:$l,useImperativeHandle:za,useInsertionEffect:Na,useLayoutEffect:ja,useMemo:Ta,useReducer:Wl,useRef:Ea,useState:function(){return Wl(fr)},useDebugValue:Gl,useDeferredValue:function(e){var t=ot();return Ma(t,ze.memoizedState,e)},useTransition:function(){var e=Wl(fr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:ha,useSyncExternalStore:va,useId:Ra,unstable_isNewReconciler:!1},mf={readContext:lt,useCallback:Pa,useContext:lt,useEffect:$l,useImperativeHandle:za,useInsertionEffect:Na,useLayoutEffect:ja,useMemo:Ta,useReducer:Ql,useRef:Ea,useState:function(){return Ql(fr)},useDebugValue:Gl,useDeferredValue:function(e){var t=ot();return ze===null?t.memoizedState=e:Ma(t,ze.memoizedState,e)},useTransition:function(){var e=Ql(fr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:ha,useSyncExternalStore:va,useId:Ra,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=M({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=Wt(e),l=jt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,i),t!==null&&(ht(t,e,i,r),ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=Wt(e),l=jt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,i),t!==null&&(ht(t,e,i,r),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=Wt(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(ht(t,e,r,n),ni(t,e,r))}};function Da(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,l):!0}function Oa(e,t,n){var r=!1,i=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=lt(l):(i=$e(t)?Xt:Be.current,r=t.contextTypes,l=(r=r!=null)?kn(e,i):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Aa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Il(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=lt(l):(l=$e(t)?Xt:Be.current,i.context=kn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Kl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),ri(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",r=t;do n+=ne(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Ba(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,po=r),Jl(e,t)},n}function Ua(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ha(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vf=he.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?ua(t,null,n,r):Cn(t,e.child,n,r)}function Wa(e,t,n,r,i){n=n.render;var l=t.ref;return jn(t,i),r=Vl(e,t,n,r,l,i),n=Hl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(ge&&n&&Nl(t),t.flags|=1,He(e,t,r,i),t.child)}function Qa(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!ko(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$a(e,t,l,r,i)):(e=Ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=$t(l,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Zn(l,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,_t(e,t,i)}return Zl(e,t,n,r,i)}function Ga(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Tn,nt),nt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Tn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ce(Tn,nt),nt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ce(Tn,nt),nt|=r;return He(e,t,i,n),t.child}function Ka(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,n,r,i){var l=$e(n)?Xt:Be.current;return l=kn(t,l),jn(t,i),n=Vl(e,t,n,r,l,i),r=Hl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(ge&&r&&Nl(t),t.flags|=1,He(e,t,n,i),t.child)}function Ya(e,t,n,r,i){if($e(n)){var l=!0;Kr(t)}else l=!1;if(jn(t,i),t.stateNode===null)di(e,t),Oa(t,n,r),Yl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=lt(h):(h=$e(n)?Xt:Be.current,h=kn(t,h));var k=n.getDerivedStateFromProps,w=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function";w||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==h)&&Aa(t,o,r,h),Bt=!1;var y=t.memoizedState;o.state=y,ri(t,r,o,i),u=t.memoizedState,s!==r||y!==u||Qe.current||Bt?(typeof k=="function"&&(Kl(t,n,k,r),u=t.memoizedState),(s=Bt||Da(t,n,s,r,y,u,h))?(w||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=h,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fa(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:dt(t.type,s),o.props=h,w=t.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=lt(u):(u=$e(n)?Xt:Be.current,u=kn(t,u));var P=n.getDerivedStateFromProps;(k=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==w||y!==u)&&Aa(t,o,r,u),Bt=!1,y=t.memoizedState,o.state=y,ri(t,r,o,i);var L=t.memoizedState;s!==w||y!==L||Qe.current||Bt?(typeof P=="function"&&(Kl(t,n,P,r),L=t.memoizedState),(h=Bt||Da(t,n,h,r,y,L,u)||!1)?(k||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,L,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,L,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=L),o.props=r,o.state=L,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,l,i)}function bl(e,t,n,r,i,l){Ka(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ea(t,n,!1),_t(e,t,l);r=t.stateNode,vf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cn(t,e.child,null,l),t.child=Cn(t,null,s,l)):He(e,t,s,l),t.memoizedState=r.state,i&&ea(t,n,!0),t.child}function Xa(e){var t=e.stateNode;t.pendingContext?Zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zs(e,t.context,!1),Dl(e,t.containerInfo)}function Ja(e,t,n,r,i){return En(),Pl(i),t.flags|=256,He(e,t,n,r),t.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function Za(e,t,n){var r=t.pendingProps,i=ke.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ke,i&1),e===null)return zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ci(o,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=to(n),t.memoizedState=eo,e):no(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return gf(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=$t(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=$t(s,l):(l=sn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?to(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=eo,r}return l=e.child,e=l.sibling,r=$t(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function no(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Pl(r),Cn(t,e.child,null,n),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(f(422))),fi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ci({mode:"visible",children:r.children},i,0,null),l=sn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,o),t.child.memoizedState=to(o),t.memoizedState=eo,l);if((t.mode&1)===0)return fi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(f(419)),r=Xl(l,r,void 0),fi(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ge||s){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Nt(e,i),ht(r,e,i,-1))}return xo(),r=Xl(Error(f(421))),fi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Tf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,tt=It(i.nextSibling),et=t,ge=!0,ft=null,e!==null&&(rt[it++]=Et,rt[it++]=Ct,rt[it++]=Jt,Et=e.id,Ct=e.overflow,Jt=t),t=no(t,r.children),t.flags|=4096,t)}function ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function ro(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function eu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ba(e,n,t);else if(e.tag===19)ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ro(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ro(t,!0,n,null,l);break;case"together":ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Xa(t),En();break;case 5:ma(t);break;case 1:$e(t.type)&&Kr(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Za(e,t,n):(ce(ke,ke.current&1),e=_t(e,t,n),e!==null?e.sibling:null);ce(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return eu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Ga(e,t,n)}return _t(e,t,n)}var tu,io,nu,ru;tu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},io=function(){},nu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(yt.current);var l=null;switch(n){case"input":i=Li(e,i),r=Li(e,r),l=[];break;case"select":i=M({},i,{value:void 0}),r=M({},r,{value:void 0}),l=[];break;case"textarea":i=Di(e,i),r=Di(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}Ai(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var s=i[h];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(E.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in r){var u=r[h];if(s=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==s&&(u!=null||s!=null))if(h==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(E.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&pe("scroll",e),l||s===u||(l=[])):(l=l||[]).push(h,u))}n&&(l=l||[]).push("style",n);var h=l;(t.updateQueue=h)&&(t.flags|=4)}},ru=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return $e(t.type)&&Gr(),qe(t),null;case 3:return r=t.stateNode,_n(),me(Qe),me(Be),Bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(vo(ft),ft=null))),io(e,t),qe(t),null;case 5:Ol(t);var i=en(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)nu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(f(166));return qe(t),null}if(e=en(yt.current),Zr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[gt]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<er.length;i++)pe(er[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Oo(r,l),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},pe("invalid",r);break;case"textarea":Uo(r,l),pe("invalid",r)}Ai(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),i=["children",""+s]):E.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":wr(r),Bo(r,l,!0);break;case"textarea":wr(r),Vo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ho(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[gt]=t,e[rr]=r,tu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bi(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<er.length;i++)pe(er[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":Oo(e,r),i=Li(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=M({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Uo(e,r),i=Di(e,r),pe("invalid",e);break;default:i=r}Ai(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?$o(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Wo(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(E.hasOwnProperty(l)?u!=null&&l==="onScroll"&&pe("scroll",e):u!=null&&Ae(e,l,u,o))}switch(n){case"input":wr(e),Bo(e,r,!1);break;case"textarea":wr(e),Vo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oe(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?an(e,!!r.multiple,l,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)ru(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(f(166));if(n=en(ar.current),en(yt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(l=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return qe(t),null;case 13:if(me(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)oa(),En(),t.flags|=98560,l=!1;else if(l=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(f(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[gt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),l=!1}else ft!==null&&(vo(ft),ft=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?Pe===0&&(Pe=3):xo())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return _n(),io(e,t),e===null&&tr(t.stateNode.containerInfo),qe(t),null;case 10:return Rl(t.type._context),qe(t),null;case 17:return $e(t.type)&&Gr(),qe(t),null;case 19:if(me(ke),l=t.memoizedState,l===null)return qe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)pr(l,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ii(e),o!==null){for(t.flags|=128,pr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ke,ke.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>Mn&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ii(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ge)return qe(t),null}else 2*Ee()-l.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=ke.current,ce(ke,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return yo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(f(156,t.tag))}function kf(e,t){switch(jl(t),t.tag){case 1:return $e(t.type)&&Gr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),me(Qe),me(Be),Bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(me(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ke),null;case 4:return _n(),null;case 10:return Rl(t.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var pi=!1,Ve=!1,wf=typeof WeakSet=="function"?WeakSet:Set,T=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function lo(e,t,n){try{n()}catch(r){Se(e,t,r)}}var iu=!1;function Sf(e,t){if(gl=Lr,e=Ds(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,h=0,k=0,w=e,y=null;t:for(;;){for(var P;w!==n||i!==0&&w.nodeType!==3||(s=o+i),w!==l||r!==0&&w.nodeType!==3||(u=o+r),w.nodeType===3&&(o+=w.nodeValue.length),(P=w.firstChild)!==null;)y=w,w=P;for(;;){if(w===e)break t;if(y===n&&++h===i&&(s=o),y===l&&++k===r&&(u=o),(P=w.nextSibling)!==null)break;w=y,y=w.parentNode}w=P}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},Lr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var L=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var D=L.memoizedProps,Ce=L.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?D:dt(t.type,D),Ce);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(S){Se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return L=iu,iu=!1,L}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&lo(t,n,l)}i=i.next}while(i!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function oo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lu(e){var t=e.alternate;t!==null&&(e.alternate=null,lu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[rr],delete t[Sl],delete t[rf],delete t[lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ou(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var De=null,pt=!1;function qt(e,t,n){for(n=n.child;n!==null;)au(e,t,n),n=n.sibling}function au(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(_r,n)}catch{}switch(n.tag){case 5:Ve||Pn(n,t);case 6:var r=De,i=pt;De=null,qt(e,t,n),De=r,pt=i,De!==null&&(pt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(pt?(e=De,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),$n(e)):wl(De,n.stateNode));break;case 4:r=De,i=pt,De=n.stateNode.containerInfo,pt=!0,qt(e,t,n),De=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&lo(n,t,o),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!Ve&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Se(n,t,s)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,qt(e,t,n),Ve=r):qt(e,t,n);break;default:qt(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var i=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,pt=!1;break e;case 3:De=s.stateNode.containerInfo,pt=!0;break e;case 4:De=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(De===null)throw Error(f(160));au(l,o,i),De=null,pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cu(t,e),t=t.sibling}function cu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),kt(e),r&4){try{mr(3,e,e.return),mi(3,e)}catch(D){Se(e,e.return,D)}try{mr(5,e,e.return)}catch(D){Se(e,e.return,D)}}break;case 1:mt(t,e),kt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(mt(t,e),kt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{In(i,"")}catch(D){Se(e,e.return,D)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ao(i,l),Bi(s,o);var h=Bi(s,l);for(o=0;o<u.length;o+=2){var k=u[o],w=u[o+1];k==="style"?$o(i,w):k==="dangerouslySetInnerHTML"?Wo(i,w):k==="children"?In(i,w):Ae(i,k,w,h)}switch(s){case"input":Fi(i,l);break;case"textarea":qo(i,l);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var P=l.value;P!=null?an(i,!!l.multiple,P,!1):y!==!!l.multiple&&(l.defaultValue!=null?an(i,!!l.multiple,l.defaultValue,!0):an(i,!!l.multiple,l.multiple?[]:"",!1))}i[rr]=l}catch(D){Se(e,e.return,D)}}break;case 6:if(mt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(f(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(D){Se(e,e.return,D)}}break;case 3:if(mt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(D){Se(e,e.return,D)}break;case 4:mt(t,e),kt(e);break;case 13:mt(t,e),kt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(fo=Ee())),r&4&&uu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(h=Ve)||k,mt(t,e),Ve=h):mt(t,e),kt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!k&&(e.mode&1)!==0)for(T=e,k=e.child;k!==null;){for(w=T=k;T!==null;){switch(y=T,P=y.child,y.tag){case 0:case 11:case 14:case 15:mr(4,y,y.return);break;case 1:Pn(y,y.return);var L=y.stateNode;if(typeof L.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,L.props=t.memoizedProps,L.state=t.memoizedState,L.componentWillUnmount()}catch(D){Se(r,n,D)}}break;case 5:Pn(y,y.return);break;case 22:if(y.memoizedState!==null){pu(w);continue}}P!==null?(P.return=y,T=P):pu(w)}k=k.sibling}e:for(k=null,w=e;;){if(w.tag===5){if(k===null){k=w;try{i=w.stateNode,h?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=w.stateNode,u=w.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Qo("display",o))}catch(D){Se(e,e.return,D)}}}else if(w.tag===6){if(k===null)try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(D){Se(e,e.return,D)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;k===w&&(k=null),w=w.return}k===w&&(k=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:mt(t,e),kt(e),r&4&&uu(e);break;case 21:break;default:mt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ou(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(In(i,""),r.flags&=-33);var l=su(e);ao(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=su(e);so(e,s,o);break;default:throw Error(f(161))}}catch(u){Se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e,t,n){T=e,fu(e)}function fu(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pi;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Ve;s=pi;var h=Ve;if(pi=o,(Ve=u)&&!h)for(T=i;T!==null;)o=T,u=o.child,o.tag===22&&o.memoizedState!==null?mu(i):u!==null?(u.return=o,T=u):mu(i);for(;l!==null;)T=l,fu(l),l=l.sibling;T=i,pi=s,Ve=h}du(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,T=l):du(e)}}function du(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&pa(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pa(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var k=h.memoizedState;if(k!==null){var w=k.dehydrated;w!==null&&$n(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}Ve||t.flags&512&&oo(t)}catch(y){Se(t,t.return,y)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function pu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function mu(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(u){Se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Se(t,i,u)}}var l=t.return;try{oo(t)}catch(u){Se(t,l,u)}break;case 5:var o=t.return;try{oo(t)}catch(u){Se(t,o,u)}}}catch(u){Se(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Cf=Math.ceil,hi=he.ReactCurrentDispatcher,uo=he.ReactCurrentOwner,st=he.ReactCurrentBatchConfig,te=0,Re=null,Ne=null,Oe=0,nt=0,Tn=Dt(0),Pe=0,hr=null,nn=0,vi=0,co=0,vr=null,Ke=null,fo=0,Mn=1/0,zt=null,gi=!1,po=null,Vt=null,yi=!1,Ht=null,xi=0,gr=0,mo=null,ki=-1,wi=0;function We(){return(te&6)!==0?Ee():ki!==-1?ki:ki=Ee()}function Wt(e){return(e.mode&1)===0?1:(te&2)!==0&&Oe!==0?Oe&-Oe:sf.transition!==null?(wi===0&&(wi=ss()),wi):(e=se,e!==0||(e=window.event,e=e===void 0?16:vs(e.type)),e)}function ht(e,t,n,r){if(50<gr)throw gr=0,mo=null,Error(f(185));qn(e,n,r),((te&2)===0||e!==Re)&&(e===Re&&((te&2)===0&&(vi|=n),Pe===4&&Qt(e,Oe)),Ye(e,r),n===1&&te===0&&(t.mode&1)===0&&(Mn=Ee()+500,Yr&&At()))}function Ye(e,t){var n=e.callbackNode;oc(e,t);var r=Tr(e,e===Re?Oe:0);if(r===0)n!==null&&is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&is(n),t===1)e.tag===0?of(vu.bind(null,e)):ta(vu.bind(null,e)),tf(function(){(te&6)===0&&At()}),n=null;else{switch(as(r)){case 1:n=$i;break;case 4:n=ls;break;case 16:n=jr;break;case 536870912:n=os;break;default:n=jr}n=Cu(n,hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hu(e,t){if(ki=-1,wi=0,(te&6)!==0)throw Error(f(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Tr(e,e===Re?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=te;te|=2;var l=yu();(Re!==e||Oe!==t)&&(zt=null,Mn=Ee()+500,ln(e,t));do try{_f();break}catch(s){gu(e,s)}while(!0);Ml(),hi.current=l,te=i,Ne!==null?t=0:(Re=null,Oe=0,t=Pe)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(r=i,t=ho(e,i))),t===1)throw n=hr,ln(e,0),Qt(e,r),Ye(e,Ee()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Nf(i)&&(t=Si(e,r),t===2&&(l=Gi(e),l!==0&&(r=l,t=ho(e,l))),t===1))throw n=hr,ln(e,0),Qt(e,r),Ye(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:on(e,Ke,zt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=fo+500-Ee(),10<t)){if(Tr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(on.bind(null,e,Ke,zt),t);break}on(e,Ke,zt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ut(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=kl(on.bind(null,e,Ke,zt),r);break}on(e,Ke,zt);break;case 5:on(e,Ke,zt);break;default:throw Error(f(329))}}}return Ye(e,Ee()),e.callbackNode===n?hu.bind(null,e):null}function ho(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Si(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&vo(t)),e}function vo(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ct(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~co,t&=~vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function vu(e){if((te&6)!==0)throw Error(f(327));Rn();var t=Tr(e,0);if((t&1)===0)return Ye(e,Ee()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Gi(e);r!==0&&(t=r,n=ho(e,r))}if(n===1)throw n=hr,ln(e,0),Qt(e,t),Ye(e,Ee()),n;if(n===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Ke,zt),Ye(e,Ee()),null}function go(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Mn=Ee()+500,Yr&&At())}}function rn(e){Ht!==null&&Ht.tag===0&&(te&6)===0&&Rn();var t=te;te|=1;var n=st.transition,r=se;try{if(st.transition=null,se=1,e)return e()}finally{se=r,st.transition=n,te=t,(te&6)===0&&At()}}function yo(){nt=Tn.current,me(Tn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ef(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gr();break;case 3:_n(),me(Qe),me(Be),Bl();break;case 5:Ol(r);break;case 4:_n();break;case 13:me(ke);break;case 19:me(ke);break;case 10:Rl(r.type._context);break;case 22:case 23:yo()}n=n.return}if(Re=e,Ne=e=$t(e.current,null),Oe=nt=t,Pe=0,hr=null,co=vi=nn=0,Ke=vr=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}bt=null}return e}function gu(e,t){do{var n=Ne;try{if(Ml(),li.current=ui,oi){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(tn=0,Me=ze=we=null,ur=!1,cr=0,uo.current=null,n===null||n.return===null){Pe=1,hr=t,Ne=null;break}e:{var l=e,o=n.return,s=n,u=t;if(t=Oe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,k=s,w=k.tag;if((k.mode&1)===0&&(w===0||w===11||w===15)){var y=k.alternate;y?(k.updateQueue=y.updateQueue,k.memoizedState=y.memoizedState,k.lanes=y.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=Va(o);if(P!==null){P.flags&=-257,Ha(P,o,s,l,t),P.mode&1&&qa(l,h,t),t=P,u=h;var L=t.updateQueue;if(L===null){var D=new Set;D.add(u),t.updateQueue=D}else L.add(u);break e}else{if((t&1)===0){qa(l,h,t),xo();break e}u=Error(f(426))}}else if(ge&&s.mode&1){var Ce=Va(o);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),Ha(Ce,o,s,l,t),Pl(zn(u,s));break e}}l=u=zn(u,s),Pe!==4&&(Pe=2),vr===null?vr=[l]:vr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Ba(l,u,t);da(l,p);break e;case 1:s=u;var c=l.type,m=l.stateNode;if((l.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=Ua(l,s,t);da(l,S);break e}}l=l.return}while(l!==null)}ku(n)}catch(A){t=A,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function yu(){var e=hi.current;return hi.current=ui,e===null?ui:e}function xo(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Re===null||(nn&268435455)===0&&(vi&268435455)===0||Qt(Re,Oe)}function Si(e,t){var n=te;te|=2;var r=yu();(Re!==e||Oe!==t)&&(zt=null,ln(e,t));do try{jf();break}catch(i){gu(e,i)}while(!0);if(Ml(),te=n,hi.current=r,Ne!==null)throw Error(f(261));return Re=null,Oe=0,Pe}function jf(){for(;Ne!==null;)xu(Ne)}function _f(){for(;Ne!==null&&!Ju();)xu(Ne)}function xu(e){var t=Eu(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?ku(e):Ne=t,uo.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=xf(n,t,nt),n!==null){Ne=n;return}}else{if(n=kf(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Pe===0&&(Pe=5)}function on(e,t,n){var r=se,i=st.transition;try{st.transition=null,se=1,zf(e,t,n,r)}finally{st.transition=i,se=r}return null}function zf(e,t,n,r){do Rn();while(Ht!==null);if((te&6)!==0)throw Error(f(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(sc(e,l),e===Re&&(Ne=Re=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,Cu(jr,function(){return Rn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=st.transition,st.transition=null;var o=se;se=1;var s=te;te|=4,uo.current=null,Sf(e,n),cu(n,e),Gc(yl),Lr=!!gl,yl=gl=null,e.current=n,Ef(n),Zu(),te=s,se=o,st.transition=l}else e.current=n;if(yi&&(yi=!1,Ht=e,xi=i),l=e.pendingLanes,l===0&&(Vt=null),tc(n.stateNode),Ye(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gi)throw gi=!1,e=po,po=null,e;return(xi&1)!==0&&e.tag!==0&&Rn(),l=e.pendingLanes,(l&1)!==0?e===mo?gr++:(gr=0,mo=e):gr=0,At(),null}function Rn(){if(Ht!==null){var e=as(xi),t=st.transition,n=se;try{if(st.transition=null,se=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,xi=0,(te&6)!==0)throw Error(f(331));var i=te;for(te|=4,T=e.current;T!==null;){var l=T,o=l.child;if((T.flags&16)!==0){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var h=s[u];for(T=h;T!==null;){var k=T;switch(k.tag){case 0:case 11:case 15:mr(8,k,l)}var w=k.child;if(w!==null)w.return=k,T=w;else for(;T!==null;){k=T;var y=k.sibling,P=k.return;if(lu(k),k===h){T=null;break}if(y!==null){y.return=P,T=y;break}T=P}}}var L=l.alternate;if(L!==null){var D=L.child;if(D!==null){L.child=null;do{var Ce=D.sibling;D.sibling=null,D=Ce}while(D!==null)}}T=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:mr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,T=p;break e}T=l.return}}var c=e.current;for(T=c;T!==null;){o=T;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,T=m;else e:for(o=c;T!==null;){if(s=T,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:mi(9,s)}}catch(A){Se(s,s.return,A)}if(s===o){T=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,T=S;break e}T=s.return}}if(te=i,At(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(_r,e)}catch{}r=!0}return r}finally{se=n,st.transition=t}}return!1}function wu(e,t,n){t=zn(n,t),t=Ba(e,t,1),e=Ut(e,t,1),t=We(),e!==null&&(qn(e,1,t),Ye(e,t))}function Se(e,t,n){if(e.tag===3)wu(e,e,n);else for(;t!==null;){if(t.tag===3){wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=zn(n,e),e=Ua(t,e,1),t=Ut(t,e,1),e=We(),t!==null&&(qn(t,1,e),Ye(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Oe&n)===n&&(Pe===4||Pe===3&&(Oe&130023424)===Oe&&500>Ee()-fo?ln(e,0):co|=n),Ye(e,t)}function Su(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=We();e=Nt(e,t),e!==null&&(qn(e,t,n),Ye(e,n))}function Tf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Su(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}r!==null&&r.delete(t),Su(e,n)}var Eu;Eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,yf(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ge&&(t.flags&1048576)!==0&&na(t,Jr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=kn(t,Be.current);jn(t,n),i=Vl(null,t,r,e,i,n);var l=Hl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(l=!0,Kr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Il(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Yl(t,r,e,n),t=bl(null,t,r,!0,l,n)):(t.tag=0,ge&&l&&Nl(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lf(r),e=dt(r,e),i){case 0:t=Zl(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Qa(null,t,r,dt(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Ya(e,t,r,i,n);case 3:e:{if(Xa(t),e===null)throw Error(f(387));r=t.pendingProps,l=t.memoizedState,i=l.element,fa(e,t),ri(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=zn(Error(f(423)),t),t=Ja(e,t,r,n,i);break e}else if(r!==i){i=zn(Error(f(424)),t),t=Ja(e,t,r,n,i);break e}else for(tt=It(t.stateNode.containerInfo.firstChild),et=t,ge=!0,ft=null,n=ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=_t(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return ma(t),e===null&&zl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,xl(r,i)?o=null:l!==null&&xl(r,l)&&(t.flags|=32),Ka(e,t),He(e,t,o,n),t.child;case 6:return e===null&&zl(t),null;case 13:return Za(e,t,n);case 4:return Dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Wa(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,ce(ei,r._currentValue),r._currentValue=o,l!==null)if(ct(l.value,o)){if(l.children===i.children&&!Qe.current){t=_t(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=jt(-1,n&-n),u.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var k=h.pending;k===null?u.next=u:(u.next=k.next,k.next=u),h.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ll(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(f(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ll(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=lt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),Qa(e,t,r,i,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),di(e,t),t.tag=1,$e(r)?(e=!0,Kr(t)):e=!1,jn(t,n),Oa(t,r,i),Yl(t,r,i,n),bl(null,t,r,!0,e,n);case 19:return eu(e,t,n);case 22:return Ga(e,t,n)}throw Error(f(156,t.tag))};function Cu(e,t){return rs(e,t)}function Rf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Rf(e,t,n,r)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===le)return 11;if(e===b)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")ko(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Te:return sn(n.children,i,l,t);case Ie:o=8,i|=8;break;case Je:return e=at(12,n,t,i|2),e.elementType=Je,e.lanes=l,e;case ae:return e=at(13,n,t,i),e.elementType=ae,e.lanes=l,e;case _e:return e=at(19,n,t,i),e.elementType=_e,e.lanes=l,e;case de:return Ci(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:o=10;break e;case J:o=9;break e;case le:o=11;break e;case b:o=14;break e;case fe:o=16,r=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return t=at(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=at(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ff(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eo(e,t,n,r,i,l,o,s,u){return e=new Ff(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=at(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(l),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return Ot;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(f(171))}if(e.tag===1){var n=e.type;if($e(n))return bs(e,n,t)}return t}function ju(e,t,n,r,i,l,o,s,u){return e=Eo(n,r,!0,e,i,l,o,s,u),e.context=Nu(null),n=e.current,r=We(),i=Wt(n),l=jt(r,i),l.callback=t??null,Ut(n,l,i),e.current.lanes=i,qn(e,i,r),Ye(e,r),e}function Ni(e,t,n,r){var i=t.current,l=We(),o=Wt(i);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,o),e!==null&&(ht(e,i,o,l),ni(e,i,o)),o}function ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Co(e,t){_u(e,t),(e=e.alternate)&&_u(e,t)}function Df(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}_i.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));Ni(e,t,null,null)},_i.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Ni(null,e,null,null)}),t[wt]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&ms(e)}};function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function Of(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var h=ji(o);l.call(h)}}var o=ju(t,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=o,e[wt]=o.current,tr(e.nodeType===8?e.parentNode:e),rn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var h=ji(u);s.call(h)}}var u=Eo(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=u,e[wt]=u.current,tr(e.nodeType===8?e.parentNode:e),rn(function(){Ni(t,u,n,r)}),u}function Pi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var u=ji(o);s.call(u)}}Ni(t,o,e,i)}else o=Of(n,t,e,i,r);return ji(o)}us=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Yi(t,n|1),Ye(t,Ee()),(te&6)===0&&(Mn=Ee()+500,At()))}break;case 13:rn(function(){var r=Nt(e,1);if(r!==null){var i=We();ht(r,e,1,i)}}),Co(e,1)}},Xi=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=We();ht(t,e,134217728,n)}Co(e,134217728)}},cs=function(e){if(e.tag===13){var t=Wt(e),n=Nt(e,t);if(n!==null){var r=We();ht(n,e,t,r)}Co(e,t)}},fs=function(){return se},ds=function(e,t){var n=se;try{return se=e,t()}finally{se=n}},Vi=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$r(r);if(!i)throw Error(f(90));Do(r),Fi(r,i)}}}break;case"textarea":qo(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}},Xo=go,Jo=rn;var Af={usingClientEntryPoint:!1,Events:[ir,yn,$r,Ko,Yo,go]},yr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bf={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ts(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{_r=Ti.inject(Bf),vt=Ti}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af,Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jo(t))throw Error(f(200));return If(e,t,null,n)},Xe.createRoot=function(e,t){if(!jo(e))throw Error(f(299));var n=!1,r="",i=zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Eo(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,tr(e.nodeType===8?e.parentNode:e),new No(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=ts(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return rn(e)},Xe.hydrate=function(e,t,n){if(!zi(t))throw Error(f(200));return Pi(null,e,t,!0,n)},Xe.hydrateRoot=function(e,t,n){if(!jo(e))throw Error(f(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=zu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ju(t,null,e,1,n??null,i,!1,l,o),e[wt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _i(t)},Xe.render=function(e,t,n){if(!zi(t))throw Error(f(200));return Pi(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!zi(e))throw Error(f(40));return e._reactRootContainer?(rn(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},Xe.unstable_batchedUpdates=go,Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return Pi(e,t,n,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Ou;function Kf(){if(Ou)return Po.exports;Ou=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(g){console.error(g)}}return v(),Po.exports=Gf(),Po.exports}var Au;function Yf(){if(Au)return Mi;Au=1;var v=Kf();return Mi.createRoot=v.createRoot,Mi.hydrateRoot=v.hydrateRoot,Mi}var Xf=Yf();const Jf=Vu(Xf),Bu={years:[{year:2016,questions:[{qn:1,units:[4,6],chapters:[11,18,20],topics:["Acronyms","Mixed"],summary:"Acronyms: IDA / PLC / SME / ROI / CEO"},{qn:2,units:[1],chapters:[3],topics:["Industrial Relations","Trade Dispute"],summary:"Term trade dispute + types of official industrial action"},{qn:3,units:[6],chapters:[20],topics:["Mixed Statements","Economic Indicators"],summary:"True/False: inflation, currency, unemployment, interest rates, recession"},{qn:4,units:[4],chapters:[12],topics:["Match Terms","Insurance"],summary:"Match: Insurable Interest, Average Clause, Subrogation, Contribution, Indemnity"},{qn:5,units:[4],chapters:[11],topics:["Accounting Ratios","Gearing"],summary:"Debt/Equity Ratio (Gearing) calculation"},{qn:6,units:[6],chapters:[19],topics:["Categories of Industry","Job Production"],summary:"Two features of job production"},{qn:7,units:[7],chapters:[23],topics:["International Trade","Balance of Trade"],summary:"Visible exports/imports + Balance of Trade + invisible exports"},{qn:8,units:[5],chapters:[16],topics:["Marketing","Product Life Cycle"],summary:"Methods of extending a product life cycle"},{qn:9,units:[4],chapters:[12],topics:["Insurance & Tax","Tax"],summary:"Distinguish VAT and Corporation Tax"},{qn:10,units:[7],chapters:[24],topics:["European Union"],summary:"EU institutions in decision making (Commission, Parliament, Council)"}]},{year:2017,questions:[{qn:1,units:[6],chapters:[18],topics:["Match Terms","Contract Law"],summary:"Match: Specific Performance, Legality of form, Performance, Consideration, Capacity"},{qn:2,units:[6],chapters:[18],topics:["Mixed Statements","Business Organisations"],summary:"Multi-choice: Sole Trader, PLC, Franchise, Co-op, Partnership"},{qn:3,units:[1,6],chapters:[3,18],topics:["Acronyms","Mixed"],summary:"Acronyms: IBEC / ICTU / ISME / IFA / CAI"},{qn:4,units:[4],chapters:[12],topics:["Mixed Statements","Tax"],summary:"True/False: Customs Duty, Corporation Tax, P45, Tax Credits, CAT"},{qn:5,units:[4],chapters:[13],topics:["Finance","Cash Flow"],summary:"Cash flow forecast"},{qn:6,units:[4],chapters:[13],topics:["Finance","Bad Debts"],summary:"Methods to minimise bad debts"},{qn:7,units:[7],chapters:[25],topics:["Global Business"],summary:"Term Global Business + examples"},{qn:8,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even chart + Margin of Safety"},{qn:9,units:[7],chapters:[24],topics:["European Union"],summary:"European Commission role + other EU institutions"},{qn:10,units:[6],chapters:[20],topics:["Economy & Government","Inflation"],summary:"Inflation rate vs interest rate"}]},{year:2018,questions:[{qn:1,units:[1],chapters:[2],topics:["Consumer Conflict","SGSS"],summary:"Sale of Goods and Supply of Services Act 1980 fill-in-the-blanks"},{qn:2,units:[3,6],chapters:[8,18],topics:["Management Activities","Organisation Structure"],summary:"Implications of changing from functional to matrix organisation structure"},{qn:3,units:[5],chapters:[17],topics:["Mixed Statements","Business Expansion"],summary:"Multi-choice: acquisition, merger, alliance, debt capital, economies of scale"},{qn:4,units:[4],chapters:[13],topics:["Match Terms","Finance"],summary:"Match: Leasing, Hire Purchase, Overdraft, Grant, Trade Credit"},{qn:5,units:[7],chapters:[23],topics:["International Trade","Balance of Trade"],summary:"Visible trade bar chart + import substitution"},{qn:6,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even table calculations"},{qn:7,units:[4],chapters:[13],topics:["Finance","Working Capital"],summary:"Term working capital + problems for start-up business"},{qn:8,units:[6],chapters:[20],topics:["Economy & Government","Privatisation"],summary:"Government policies of privatisation and deregulation"},{qn:9,units:[7],chapters:[24],topics:["Mixed Statements","European Union"],summary:"True/False: EU Commission, Eurozone, Directive, Council, co-decision"},{qn:10,units:[4],chapters:[9],topics:["HRM","Training"],summary:"Distinguish induction training and staff development"}]},{year:2019,questions:[{qn:1,units:[3,4],chapters:[5,9],topics:["Match Terms","HRM"],summary:"Match: Job Description, Norming, Manpower Planning, Person Specification, Chain of command"},{qn:2,units:[6],chapters:[19],topics:["Categories of Industry"],summary:"Three categories of industry + occupation example"},{qn:3,units:[4],chapters:[12],topics:["Acronyms","Tax"],summary:"Acronyms: PAYE / USC / PRSI / DIRT / CGT"},{qn:4,units:[6,7],chapters:[20,24],topics:["Mixed Statements","Economy & Government"],summary:"Multi-choice: inflation, ECB, Euro, PAYE, employment"},{qn:5,units:[6],chapters:[20],topics:["Economy & Government","Minimum Wage"],summary:"Term National Minimum Wage + economic impact of increase"},{qn:6,units:[3],chapters:[5],topics:["Management","Span of Control"],summary:"Problems from too wide a span of control"},{qn:7,units:[7],chapters:[23],topics:["International Trade","Balance of Trade"],summary:"Ireland's Trade in Goods infographic + Balance of Trade"},{qn:8,units:[5],chapters:[16],topics:["Marketing","Niche Market"],summary:"Term niche market + example"},{qn:9,units:[2],chapters:[4],topics:["Enterprise"],summary:"Co-operative relationship between entrepreneur and investor"},{qn:10,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even chart + profit calculation + limitation of break-even"}]},{year:2020,questions:[{qn:1,units:[5],chapters:[16],topics:["Match Terms","Marketing","Pricing"],summary:"Match: Premium / Penetration / Loss Leader / Price Skimming / Price Discrimination"},{qn:2,units:[6],chapters:[18,20,21],topics:["Acronyms","Mixed"],summary:"Acronyms: CEO / CRO / LEO / IDA / CCPC"},{qn:3,units:[6],chapters:[19],topics:["Categories of Industry","Tertiary Sector"],summary:"Term tertiary sector + trends in Ireland (aviation leasing)"},{qn:4,units:[4],chapters:[12],topics:["Mixed Statements","Tax"],summary:"Multi-choice: CGT, USC, tax credits, VAT, BIK"},{qn:5,units:[7],chapters:[24],topics:["European Union","GDPR"],summary:"GDPR + EU Regulation + EU institution proposing legislation"},{qn:6,units:[6],chapters:[19],topics:["Categories of Industry","Indigenous Firm"],summary:"Term indigenous firm + challenges"},{qn:7,units:[6],chapters:[19],topics:["Mixed Statements","Categories of Industry"],summary:"True/False: EDI, JIT, Lead Time, economies of scale, optimum stock"},{qn:8,units:[4],chapters:[9],topics:["HRM","Dismissal"],summary:"Distinguish fair dismissal and constructive dismissal"},{qn:9,units:[5],chapters:[16],topics:["Marketing","Product Life Cycle"],summary:"Product Life Cycle stages (Apple products) + extending the cycle"},{qn:10,units:[4],chapters:[12],topics:["Insurance & Tax","Insurance"],summary:"Insurance compensation calculation (Allianz home insurance)"}]},{year:2021,questions:[{qn:1,units:[5],chapters:[17],topics:["Match Terms","Business Expansion"],summary:"Match: Merger / Economies of Scale / Acquisition / Diversification / Strategic Alliance"},{qn:2,units:[6,7],chapters:[19,23],topics:["Acronyms","Mixed"],summary:"Acronyms: WTO / CAM / EDI / CAD / JIT"},{qn:3,units:[5],chapters:[17],topics:["Business Expansion","Franchising"],summary:"Term franchising (Camile Thai) + benefit as start-up option"},{qn:4,units:[4],chapters:[12],topics:["Mixed Statements","Insurance"],summary:"Multi-choice: policy excess, actuary/assessor, indemnity, loadings, subrogation"},{qn:5,units:[6],chapters:[20,21],topics:["Economy & Government","State Agencies"],summary:"State agencies (LEO/Enterprise Ireland/Failte Ireland/IDA)"},{qn:6,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Term invisible imports + impact of decrease on Balance of Payments"},{qn:7,units:[3],chapters:[5],topics:["Management","Span of Control"],summary:"Distinguish chain of command and span of control"},{qn:8,units:[4],chapters:[11],topics:["Accounting Ratios","ROI"],summary:"ROI calculation + analysis of change"},{qn:9,units:[2,3],chapters:[4,5],topics:["Enterprise","Management"],summary:"Distinguish enterprise and management + example in school"},{qn:10,units:[6],chapters:[20],topics:["Economy & Government","Interest Groups"],summary:"Role of interest groups in business with examples"},{qn:11,units:[7],chapters:[25],topics:["Global Business","MNCs"],summary:"Reasons MNCs (Pfizer) locate in Ireland"},{qn:12,units:[6],chapters:[20],topics:["Economy & Government","Privatisation"],summary:"Advantages of privatisation for the Irish economy"}]},{year:2022,questions:[{qn:1,units:[6],chapters:[20],topics:["Match Terms","Economic Indicators"],summary:"Match: GDP / Recession / Interest Rate / Exchange Rate / Unemployment"},{qn:2,units:[6,7],chapters:[20,23,24],topics:["Acronyms","Mixed"],summary:"Acronyms: WTO / EMU / IDA / FDI / CAP"},{qn:3,units:[5],chapters:[16],topics:["Marketing","Product Life Cycle"],summary:"Term Product Life Cycle + extension methods (Coca Cola)"},{qn:4,units:[3],chapters:[6],topics:["Mixed Statements","Maslow","McGregor"],summary:"Multi-choice: Maslow, McGregor, workplace friendships, staff turnover, self-actualisation"},{qn:5,units:[3,7],chapters:[7,24],topics:["Communication","GDPR"],summary:"Draft email about GDPR rights for customers"},{qn:6,units:[6],chapters:[20],topics:["Economy & Government","Inflation"],summary:"Inflation + how Consumer Price Index works"},{qn:7,units:[3],chapters:[8],topics:["Mixed Statements","Management Activities"],summary:"True/False on meetings: treasurer, disadvantage, EGM, AOB, quorum"},{qn:8,units:[7],chapters:[23],topics:["International Trade","Protectionism"],summary:"Term protectionism + protectionist measures"},{qn:9,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even calculations: TR, TC, profit, BEP"},{qn:10,units:[7],chapters:[23],topics:["International Trade","Imports"],summary:"Distinguish visible imports and import substitution"},{qn:11,units:[4],chapters:[13],topics:["Finance","Bad Debts"],summary:"Two ways to minimise bad debts"},{qn:12,units:[4],chapters:[12],topics:["Insurance & Tax","PAYE"],summary:"PAYE calculation with tax credits"}]},{year:2023,questions:[{qn:1,units:[6],chapters:[19],topics:["Categories of Industry","Indigenous Firm"],summary:"Term indigenous firm (InterSport Elverys) + challenges"},{qn:2,units:[4,6],chapters:[11,18,19],topics:["Acronyms","Mixed"],summary:"Acronyms: TQM / ISME / JIT / EDI / ROI"},{qn:3,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Term invisible exports + Balance of Trade/Payments calculation"},{qn:4,units:[7],chapters:[24],topics:["Match Terms","European Union"],summary:"Match: ECB / Court of Auditors / European Parliament / Council / Commission"},{qn:5,units:[3,6],chapters:[8,18],topics:["Management Activities","Organisation Structure"],summary:"Functional organisational structure for manufacturing firm"},{qn:6,units:[5],chapters:[16],topics:["Marketing","Pricing"],summary:"Distinguish penetration pricing and price skimming"},{qn:7,units:[4],chapters:[11],topics:["Accounting Ratios","Liquidity"],summary:"Term liquidity + Acid Test Ratio calculation"},{qn:8,units:[6],chapters:[20],topics:["Economy & Government","Minimum Wage"],summary:"Term National Minimum Wage + economic impact of increase"},{qn:9,units:[4,5,6],chapters:[12,16,19],topics:["Mixed Statements"],summary:"True/False: PR (Aviva), Global Product (McDonalds), USP, CGT, Q Mark"},{qn:10,units:[2],chapters:[4],topics:["Enterprise","Entrepreneur"],summary:"Characteristics/skills associated with entrepreneurs"},{qn:11,units:[1,7],chapters:[2,24],topics:["Consumer Conflict","GDPR"],summary:"GDPR / Data Protection Commission fines + data subject rights"},{qn:12,units:[3],chapters:[7,8],topics:["Communication","Meetings"],summary:"Types of meetings + meetings as method of communication"}]},{year:2024,questions:[{qn:1,units:[6],chapters:[18],topics:["Business Organisations"],summary:"Match types: Partnership/Co-op/Franchise/Merger/Takeover"},{qn:2,units:[1,6,7],chapters:[18,23,24],topics:["Acronyms","Business Organisations"],summary:"Acronyms: IDA / CEO / ECB / CRO / WTO"},{qn:3,units:[6],chapters:[21],topics:["Community Development"],summary:"Term Community Development + service offered"},{qn:4,units:[6],chapters:[20],topics:["Economic Indicators","Economy & Government"],summary:"Multi-choice: economic growth / employment / interest rates / taxation / euro"},{qn:5,units:[7],chapters:[24],topics:["European Union"],summary:"Two functions of the European Parliament"},{qn:6,units:[7],chapters:[23],topics:["International Trade"],summary:"Distinguish between Embargo and Quota"},{qn:7,units:[3],chapters:[8],topics:["Management Activities","Planning"],summary:"True/False on planning of global companies (J&J, Netflix, RTÉ, DHL, Nintendo)"},{qn:8,units:[3],chapters:[8],topics:["Management Activities","Management Control"],summary:"Two types of management control"},{qn:9,units:[4],chapters:[12],topics:["Insurance & Tax","Insurance"],summary:"Role of an assessor + insurance calculation"},{qn:10,units:[5],chapters:[16],topics:["Marketing","Public Relations"],summary:"Three public relations methods used by businesses"},{qn:11,units:[1],chapters:[3],topics:["Industrial Relations"],summary:"Joint Labour Committee"},{qn:12,units:[4],chapters:[9],topics:["HRM","Teamwork"],summary:"Teamwork + four stages of team development (Tuckman)"}]},{year:2025,questions:[{qn:1,units:[7],chapters:[24],topics:["European Union"],summary:"Match EU institutions (ECB, Court of Auditors, Parliament, Council, Commission)"},{qn:2,units:[7],chapters:[25],topics:["Global Business"],summary:"Term Global Business + two examples"},{qn:3,units:[1,6,7],chapters:[3,20,23],topics:["Acronyms","International Trade"],summary:"Acronyms: DAC / MNC / IBEC / ICTU / CAP"},{qn:4,units:[6],chapters:[20],topics:["Economic Indicators","Economy & Government"],summary:"Multi-choice: economic growth / employment / interest rates / taxation / euro"},{qn:5,units:[4],chapters:[12],topics:["Insurance & Tax","Tax"],summary:"Capital Gains Tax vs Capital Acquisitions Tax"},{qn:6,units:[6],chapters:[22],topics:["Social Responsibility","Business Ethics"],summary:"Methods to encourage ethical business practice"},{qn:7,units:[4],chapters:[11,13],topics:["Accounting Ratios","Finance"],summary:"Term Gearing + Debt/Equity Ratio calculation"},{qn:8,units:[3,6],chapters:[8,18],topics:["Business Organisations","Management Activities"],summary:"Benefits of matrix organisation structure"},{qn:9,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Import substitution + Balance of Payments"},{qn:10,units:[5],chapters:[16],topics:["Marketing","Advertising"],summary:"Factors when choosing an advertising medium"},{qn:11,units:[6],chapters:[20],topics:["Economic Indicators","Inflation"],summary:"Term Inflation + two causes"},{qn:12,units:[6],chapters:[21],topics:["Community Development","Local Enterprise Office"],summary:"Two functions of a Local Enterprise Office (LEO)"}]}],units:[{id:1,name:"People in Business",color:"#E54B3B"},{id:2,name:"Enterprise",color:"#F4B83C"},{id:3,name:"Managing 1",color:"#7CA9C9"},{id:4,name:"Managing 2",color:"#2E5E48"},{id:5,name:"Business in Action",color:"#C77DA0"},{id:6,name:"Domestic Environment",color:"#5B4FB0"},{id:7,name:"International Environment",color:"#D9663E"}]},Uu=[{bg:"#F4B83C",ink:"#1F1B17"},{bg:"#E54B3B",ink:"#FBF7EE"},{bg:"#2E5E48",ink:"#FBF7EE"},{bg:"#F2D6CC",ink:"#1F1B17"},{bg:"#7CA9C9",ink:"#1F1B17"}];function Ro(v,g){return`q-status:${v}-${g}`}function Zf(){const[v,g]=ee.useState({}),[f,I]=ee.useState(!1);return ee.useEffect(()=>{try{const _={};for(let C=0;C<localStorage.length;C++){const O=localStorage.key(C);O&&O.startsWith("q-status:")&&(_[O]=localStorage.getItem(O))}g(_),I(!0)}catch{I(!0)}},[]),{get:(_,C)=>v[Ro(_,C)]||null,set:(_,C,O)=>{const q=Ro(_,C);g(R=>{const U={...R};return O==null?delete U[q]:U[q]=O,U});try{O==null?localStorage.removeItem(q):localStorage.setItem(q,O)}catch{}},stats:_=>{let C=0,O=0;for(const q of _){const R=v[Ro(q.year,q.qn)];R==="got-it"?C++:R==="review"&&O++}return{got:C,rev:O,unseen:_.length-C-O,total:_.length}},loaded:f}}const Lo="https://doles05.github.io/lc-business-sq/",Fo={},Ln={};function Hu(v){if(Fo[v])return Promise.resolve(Fo[v]);if(Ln[v])return Ln[v];if(Lo.startsWith("__")||Lo.includes("yourusername"))return Promise.reject(new Error("DATA_BASE_URL not configured — see HOSTING_README to set up GitHub Pages and replace the placeholder."));const g=`${Lo}${v}.json`;return Ln[v]=fetch(g).then(f=>{if(!f.ok)throw new Error(`HTTP ${f.status} for ${v}`);return f.json()}).then(f=>(Fo[v]=f,delete Ln[v],f)).catch(f=>{throw delete Ln[v],f}),Ln[v]}function bf(v){const[g,f]=ee.useState({ready:!1,error:null,dataByYear:{}}),I=v.join(",");return ee.useEffect(()=>{let E=!1;return f(N=>({...N,ready:!1,error:null})),Promise.all(v.map(N=>Hu(N).catch(V=>({__error:V,year:N})))).then(N=>{if(E)return;const V={};let _=null;N.forEach(C=>{C&&C.__error?_||(_=C.__error):C&&C.year&&(V[C.year]=C)}),f({ready:!0,error:_,dataByYear:V})}),()=>{E=!0}},[I]),g}function ed(){var Je;const[v,g]=ee.useState("home"),[f,I]=ee.useState(null),[E,N]=ee.useState(null),[V,_]=ee.useState(0),[C,O]=ee.useState(null),[q,R]=ee.useState([]),U=Zf(),B=ee.useMemo(()=>[...Bu.years].sort((F,J)=>J.year-F.year),[]),G=Bu.units||[],j=ee.useMemo(()=>B.map(F=>F.year),[B]);ee.useEffect(()=>{j.forEach(F=>{Hu(F).catch(()=>{})})},[j]);const ye=bf(v==="year"&&f?[f]:j),Fe=(F,J)=>{if(F&&F.q&&F.s)return{...F,year:J};const le=ye.dataByYear[J];if(!le)return null;const ae=le.questions.find(_e=>_e.qn===F.qn);return ae?{...F,...ae,year:J}:null},Ae=B.find(F=>F.year===f),he=ee.useMemo(()=>{const F=[];return B.forEach(J=>{J.questions.forEach(le=>F.push({...le,year:J.year}))}),F},[B]),je=F=>he.filter(J=>(J.units||[]).includes(F)),xe=F=>{const J={};F.forEach(b=>{(J[b.year]=J[b.year]||[]).push(b)}),Object.values(J).forEach(b=>{for(let fe=b.length-1;fe>0;fe--){const de=Math.floor(Math.random()*(fe+1));[b[fe],b[de]]=[b[de],b[fe]]}});const le=Object.keys(J);for(let b=le.length-1;b>0;b--){const fe=Math.floor(Math.random()*(b+1));[le[b],le[fe]]=[le[fe],le[b]]}const ae=[];let _e=!0;for(;_e;){_e=!1;for(const b of le)J[b].length&&(ae.push(J[b].shift()),_e=!0)}return ae},Te=(F,J={})=>{let le=F.length===0||F.length===G.length?[...he]:he.filter(b=>(b.units||[]).some(fe=>F.includes(fe)));J.reviewOnly&&(le=le.filter(b=>U.get(b.year,b.qn)==="review"));const ae=xe(le),_e=ae.slice(0,Math.min(12,ae.length));O({questions:_e,current:0}),g("mock")},Ie=(F={})=>{let J=[...he];F.reviewOnly&&(J=J.filter(le=>U.get(le.year,le.qn)==="review")),R(xe(J)),_(0),g("shuffle")};return a.jsxs("div",{className:"app",children:[a.jsx(hd,{}),a.jsx(td,{view:v,year:f,unitName:v==="unit"&&E?(Je=G.find(F=>F.id===E))==null?void 0:Je.name:null,onHome:()=>{g("home"),I(null),N(null),O(null)}}),a.jsxs("main",{className:"main",children:[v!=="home"&&a.jsx("button",{onClick:()=>{g("home"),I(null),N(null),O(null)},className:"back-btn",children:"← Back to home"}),v==="home"&&a.jsx(nd,{years:B,units:G,allQuestions:he,questionsForUnit:je,status:U,onPickUnit:F=>{N(F),_(0),g("unit")},onPickYear:F=>{I(F),_(0),g("year")},onStartMock:Te,onStartShuffle:Ie}),v==="shuffle"&&q.length>0&&a.jsx(ad,{questions:q,qIndex:V,setQIndex:_,onReshuffle:Ie,unitsLookup:G,status:U,enrichQuestion:Fe,yearsData:ye}),v==="unit"&&E!==null&&a.jsx(od,{unit:G.find(F=>F.id===E),questions:je(E),qIndex:V,setQIndex:_,unitsLookup:G,status:U,enrichQuestion:Fe,yearsData:ye}),v==="year"&&Ae&&a.jsx(ud,{year:Ae,qIndex:V,setQIndex:_,unitsLookup:G,status:U,enrichQuestion:Fe,yearsData:ye}),v==="mock"&&C&&a.jsx(dd,{state:C,setState:O,unitsLookup:G,status:U,enrichQuestion:Fe,yearsData:ye,onExit:()=>{g("home"),O(null)}})]}),a.jsx(md,{})]})}function td({view:v,year:g,unitName:f,onHome:I}){return a.jsxs("header",{className:"hdr",children:[a.jsxs("button",{onClick:I,className:"hdr-mark","aria-label":"Back to home",title:"Back to home",children:[a.jsx("span",{className:"hdr-mark-ink",children:"SQ"}),a.jsx("span",{className:"hdr-mark-dot"})]}),a.jsxs("div",{className:"hdr-text",children:[a.jsx("div",{className:"hdr-title",children:"Short Question Practice"}),a.jsxs("div",{className:"hdr-sub",children:["Leaving Cert Business · Higher Level",g&&v==="year"?a.jsxs(a.Fragment,{children:[" · ",a.jsx("em",{children:g})]}):null,f&&v==="unit"?a.jsxs(a.Fragment,{children:[" · ",a.jsx("em",{children:f})]}):null,v==="mock"?a.jsxs(a.Fragment,{children:[" · ",a.jsx("em",{children:"Mock test"})]}):null,v==="shuffle"?a.jsxs(a.Fragment,{children:[" · ",a.jsx("em",{children:"Shuffle"})]}):null]})]})]})}function nd({years:v,units:g,allQuestions:f,questionsForUnit:I,status:E,onPickUnit:N,onPickYear:V,onStartMock:_,onStartShuffle:C}){const[O,q]=ee.useState(!1),R=E?E.stats(f):null,U=R?R.rev:0;return a.jsxs("div",{className:"home",children:[a.jsxs("div",{className:"hero",children:[a.jsx("div",{className:"hero-eyebrow",children:"Browse by unit"}),a.jsxs("h1",{className:"hero-h1",children:["Section 1, sliced",a.jsx("br",{}),a.jsx("span",{className:"hero-h1-accent",children:"by topic."})]}),a.jsx("p",{className:"hero-lede",children:"Drill a unit you've just covered, scan an old paper, or take a 12-question mock. Every question shows its full marking-scheme answer and the points breakdown."})]}),R&&(R.got>0||R.rev>0)&&a.jsxs("div",{className:"stats-line",children:[a.jsxs("span",{className:"stats-pill stats-pill-got",children:[a.jsx("span",{className:"stats-dot stats-dot-got"}),R.got," got it"]}),a.jsxs("span",{className:"stats-pill stats-pill-rev",children:[a.jsx("span",{className:"stats-dot stats-dot-rev"}),R.rev," to review"]}),a.jsxs("span",{className:"stats-pill stats-pill-unseen",children:[R.unseen," new"]})]}),a.jsxs("div",{className:"cta-pair",children:[a.jsxs("button",{onClick:()=>q(!0),className:"mock-cta",children:[a.jsxs("div",{className:"mock-cta-left",children:[a.jsx("div",{className:"mock-cta-eyebrow",children:"Test yourself"}),a.jsx("div",{className:"mock-cta-h",children:"Mock Test"}),a.jsx("div",{className:"mock-cta-sub",children:"12 random questions · 20 minutes · choose units"})]}),a.jsxs("div",{className:"mock-cta-right",children:[a.jsx("div",{className:"mock-cta-num",children:"12"}),a.jsx("div",{className:"mock-cta-arrow",children:"→"})]})]}),a.jsxs("button",{onClick:()=>C(),className:"shuffle-cta",children:[a.jsxs("div",{className:"shuffle-cta-left",children:[a.jsx("div",{className:"shuffle-cta-eyebrow",children:"Browse all"}),a.jsx("div",{className:"shuffle-cta-h",children:"Shuffle"}),a.jsx("div",{className:"shuffle-cta-sub",children:"Every question, random order, no timer"})]}),a.jsx("div",{className:"shuffle-cta-right",children:a.jsx("div",{className:"shuffle-cta-icon",children:"⇄"})})]})]}),U>0&&a.jsxs("button",{onClick:()=>C({reviewOnly:!0}),className:"review-cta",children:[a.jsx("span",{className:"review-cta-icon",children:"↻"}),a.jsxs("span",{className:"review-cta-text",children:[a.jsxs("strong",{children:["Review ",U]})," question",U===1?"":"s"," marked for review"]}),a.jsx("span",{className:"review-cta-arrow",children:"→"})]}),O&&a.jsx(ld,{units:g,allQuestions:f,status:E,onCancel:()=>q(!1),onStart:(B,G)=>{q(!1),_(B,G)}}),a.jsx("div",{className:"section-divider",children:a.jsx("span",{className:"section-divider-label",children:"Practice by unit"})}),a.jsx("div",{className:"unit-grid",children:g.map(B=>{const G=I(B.id).length;return a.jsx(rd,{unit:B,count:G,onOpen:()=>G>0&&N(B.id)},B.id)})}),a.jsx("div",{className:"section-divider",children:a.jsx("span",{className:"section-divider-label",children:"Or browse by paper"})}),a.jsx("div",{className:"year-grid",children:v.map((B,G)=>{const j=Uu[G%Uu.length];return a.jsx(id,{year:B.year,count:B.questions.length,tone:j,onOpen:()=>V(B.year)},B.year)})})]})}function rd({unit:v,count:g,onOpen:f}){const I=g===0;return a.jsxs("button",{onClick:f,className:`unit-tile ${I?"unit-tile-empty":""}`,style:{"--unit-color":v.color},disabled:I,children:[a.jsxs("div",{className:"unit-tile-num",children:["U",v.id]}),a.jsx("div",{className:"unit-tile-name",children:v.name}),a.jsxs("div",{className:"unit-tile-count",children:[g," ",g===1?"question":"questions"]})]})}function id({year:v,count:g,tone:f,onOpen:I}){return a.jsxs("button",{onClick:I,className:"tile",style:{background:f.bg,color:f.ink},children:[a.jsx("div",{className:"tile-yr",children:v}),a.jsxs("div",{className:"tile-meta",children:[a.jsx("span",{className:"tile-count",children:g})," short questions"]}),a.jsx("div",{className:"tile-arrow",children:"Browse →"})]})}function ld({units:v,allQuestions:g,status:f,onCancel:I,onStart:E}){const[N,V]=ee.useState([]),[_,C]=ee.useState(!1),O=f?g.filter(j=>f.get(j.year,j.qn)==="review").length:0,q=N.length===0,R=q?g:g.filter(j=>(j.units||[]).some(H=>N.includes(H))),B=(_?R.filter(j=>f&&f.get(j.year,j.qn)==="review"):R).length,G=j=>{V(H=>H.includes(j)?H.filter(ye=>ye!==j):[...H,j])};return a.jsx("div",{className:"sheet-backdrop",onClick:I,children:a.jsxs("div",{className:"sheet",onClick:j=>j.stopPropagation(),children:[a.jsx("div",{className:"sheet-grip"}),a.jsx("h2",{className:"sheet-title",children:"Mock test setup"}),a.jsx("p",{className:"sheet-sub",children:"Pick units to focus on, or leave blank for any unit."}),a.jsx("div",{className:"sheet-units",children:v.map(j=>a.jsxs("button",{onClick:()=>G(j.id),className:`sheet-unit ${N.includes(j.id)?"sheet-unit-on":""}`,style:{"--unit-color":j.color},children:[a.jsxs("span",{className:"sheet-unit-num",children:["U",j.id]}),a.jsx("span",{className:"sheet-unit-name",children:j.name}),a.jsx("span",{className:"sheet-unit-check",children:N.includes(j.id)?"✓":""})]},j.id))}),O>0&&a.jsxs("button",{onClick:()=>C(j=>!j),className:`sheet-toggle ${_?"sheet-toggle-on":""}`,children:[a.jsx("span",{className:"sheet-toggle-check",children:_?"✓":""}),a.jsxs("span",{className:"sheet-toggle-text",children:["Only questions marked ",a.jsx("strong",{children:"review again"})]}),a.jsx("span",{className:"sheet-toggle-count",children:O})]}),a.jsx("div",{className:"sheet-meta",children:B===0?a.jsx(a.Fragment,{children:"No questions match — try a different filter."}):q&&!_?a.jsxs(a.Fragment,{children:["Drawing from ",a.jsxs("strong",{children:["all ",g.length," questions"]})]}):a.jsxs(a.Fragment,{children:["Pool: ",a.jsx("strong",{children:B})," ",B===1?"question":"questions"," match",B<12&&a.jsxs(a.Fragment,{children:[" · you'll get ",a.jsx("strong",{children:B}),", not 12"]})]})}),a.jsxs("div",{className:"sheet-actions",children:[a.jsx("button",{className:"sheet-btn sheet-btn-ghost",onClick:I,children:"Cancel"}),a.jsxs("button",{className:"sheet-btn sheet-btn-primary",onClick:()=>E(N,{reviewOnly:_}),disabled:B===0,children:["Start mock ",B>0&&`· ${Math.min(12,B)} Qs`]})]})]})})}function od({unit:v,questions:g,qIndex:f,setQIndex:I,unitsLookup:E,status:N,enrichQuestion:V,yearsData:_}){const C=g[f],[O,q]=ee.useState(!1);ee.useEffect(()=>q(!1),[f]);const R=()=>f>0&&I(f-1),U=()=>f<g.length-1&&I(f+1);if(ee.useEffect(()=>{const j=H=>{H.key==="ArrowLeft"?R():H.key==="ArrowRight"?U():(H.key===" "||H.key==="Enter")&&(H.preventDefault(),q(ye=>!ye))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[f]),!C)return a.jsx("div",{children:"No questions in this unit yet."});const B=V?V(C,C.year):C,G=B&&B.q&&B.s;return a.jsxs("div",{className:"year-view",children:[a.jsxs("div",{className:"unit-banner",style:{"--unit-color":v.color},children:[a.jsxs("span",{className:"unit-banner-num",children:["U",v.id]}),a.jsx("span",{className:"unit-banner-name",children:v.name}),a.jsxs("span",{className:"unit-banner-count",children:[g.length," ",g.length===1?"question":"questions"]})]}),a.jsx(sd,{questions:g,active:f,onPick:j=>I(j),status:N}),G?a.jsx(Ri,{flipped:O,onFlip:()=>q(j=>!j),questionImg:B.q,schemeImg:B.s,qn:C.qn,year:C.year,topics:C.topics,units:C.units,unitsLookup:E,status:N}):a.jsx(kr,{yearsData:_}),a.jsxs("div",{className:"navbar",children:[a.jsx("button",{onClick:R,disabled:f===0,className:"nav-btn",children:"← Previous"}),a.jsx("button",{onClick:()=>q(j=>!j),className:"nav-btn nav-btn-flip",disabled:!G,children:O?"Show question":"Show me the answer"}),a.jsx("button",{onClick:U,disabled:f===g.length-1,className:"nav-btn",children:"Next →"})]})]})}function kr({yearsData:v}){return v&&v.error?a.jsxs("div",{className:"loading-card loading-card-error",children:[a.jsx("div",{className:"loading-card-h",children:"Couldn't load images"}),a.jsx("div",{className:"loading-card-sub",children:v.error.message||"Network error"}),a.jsx("div",{className:"loading-card-help",children:"Check your internet connection or try again."})]}):a.jsxs("div",{className:"loading-card",children:[a.jsx("div",{className:"loading-card-spinner"}),a.jsx("div",{className:"loading-card-h",children:"Loading question..."})]})}function sd({questions:v,active:g,onPick:f,status:I}){return a.jsx("nav",{className:"strip","aria-label":"Question navigator",children:v.map((E,N)=>{const V=I?I.get(E.year,E.qn):null,_=V==="got-it"?"chip-dot chip-dot-got":V==="review"?"chip-dot chip-dot-rev":null;return a.jsxs("button",{onClick:()=>f(N),className:`chip chip-mock ${N===g?"chip-on":""}`,"aria-current":N===g?"true":void 0,children:[_&&a.jsx("span",{className:_}),a.jsxs("span",{className:"chip-mock-n",children:["Q",E.qn]}),a.jsxs("span",{className:"chip-mock-yr",children:["'",String(E.year).slice(-2)]})]},N)})})}function ad({questions:v,qIndex:g,setQIndex:f,onReshuffle:I,unitsLookup:E,status:N,enrichQuestion:V,yearsData:_}){const C=v[g],[O,q]=ee.useState(!1);ee.useEffect(()=>q(!1),[g]);const R=()=>g>0&&f(g-1),U=()=>g<v.length-1&&f(g+1);if(ee.useEffect(()=>{const j=H=>{H.key==="ArrowLeft"?R():H.key==="ArrowRight"?U():(H.key===" "||H.key==="Enter")&&(H.preventDefault(),q(ye=>!ye))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[g]),!C)return null;const B=V?V(C,C.year):C,G=B&&B.q&&B.s;return a.jsxs("div",{className:"year-view",children:[a.jsxs("div",{className:"shuffle-bar",children:[a.jsxs("div",{className:"shuffle-bar-info",children:[a.jsx("span",{className:"shuffle-bar-eyebrow",children:"Shuffle"}),a.jsxs("span",{className:"shuffle-bar-progress",children:[g+1," of ",v.length]})]}),a.jsx("button",{onClick:I,className:"shuffle-bar-btn",children:"⇄ Reshuffle"})]}),G?a.jsx(Ri,{flipped:O,onFlip:()=>q(j=>!j),questionImg:B.q,schemeImg:B.s,qn:C.qn,year:C.year,topics:C.topics,units:C.units,unitsLookup:E,status:N}):a.jsx(kr,{yearsData:_}),a.jsxs("div",{className:"navbar",children:[a.jsx("button",{onClick:R,disabled:g===0,className:"nav-btn",children:"← Previous"}),a.jsx("button",{onClick:()=>q(j=>!j),className:"nav-btn nav-btn-flip",disabled:!G,children:O?"Show question":"Show me the answer"}),a.jsx("button",{onClick:U,disabled:g===v.length-1,className:"nav-btn",children:"Next →"})]})]})}function ud({year:v,qIndex:g,setQIndex:f,unitsLookup:I,status:E,enrichQuestion:N,yearsData:V}){const _=v.questions[g],[C,O]=ee.useState(!1);ee.useEffect(()=>O(!1),[g]);const q=()=>g>0&&f(g-1),R=()=>g<v.questions.length-1&&f(g+1);if(ee.useEffect(()=>{const G=j=>{j.key==="ArrowLeft"?q():j.key==="ArrowRight"?R():(j.key===" "||j.key==="Enter")&&(j.preventDefault(),O(H=>!H))};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[g]),!_)return null;const U=N?N(_,v.year):_,B=U&&U.q&&U.s;return a.jsxs("div",{className:"year-view",children:[a.jsx(cd,{year:v,active:g,onPick:G=>f(G),status:E}),B?a.jsx(Ri,{flipped:C,onFlip:()=>O(G=>!G),questionImg:U.q,schemeImg:U.s,qn:_.qn,year:v.year,topics:_.topics,units:_.units,unitsLookup:I,status:E}):a.jsx(kr,{yearsData:V}),a.jsxs("div",{className:"navbar",children:[a.jsx("button",{onClick:q,disabled:g===0,className:"nav-btn",children:"← Previous"}),a.jsx("button",{onClick:()=>O(G=>!G),className:"nav-btn nav-btn-flip",disabled:!B,children:C?"Show question":"Show me the answer"}),a.jsx("button",{onClick:R,disabled:g===v.questions.length-1,className:"nav-btn",children:"Next →"})]})]})}function cd({year:v,active:g,onPick:f,status:I}){return a.jsx("nav",{className:"strip","aria-label":"Question navigator",children:v.questions.map((E,N)=>{const V=I?I.get(v.year,E.qn):null,_=V==="got-it"?"chip-dot chip-dot-got":V==="review"?"chip-dot chip-dot-rev":null;return a.jsxs("button",{onClick:()=>f(N),className:`chip ${N===g?"chip-on":""}`,"aria-current":N===g?"true":void 0,children:[_&&a.jsx("span",{className:_}),"Q",E.qn]},E.qn)})})}function Ri({flipped:v,onFlip:g,questionImg:f,schemeImg:I,qn:E,year:N,topics:V,units:_,unitsLookup:C,status:O}){const q=a.jsx(fd,{units:_,topics:V,unitsLookup:C}),R=O?O.get(N,E):null;return a.jsx("div",{className:`flip ${v?"is-flipped":""}`,children:a.jsxs("div",{className:"flip-inner",children:[a.jsxs("div",{className:"flip-face flip-front",children:[a.jsxs("div",{className:"face-tag",children:[a.jsxs("span",{className:"face-tag-no",children:["Q",E]}),a.jsxs("span",{className:"face-tag-label",children:["Question · ",N]}),R&&a.jsx(qu,{value:R})]}),q,a.jsx("div",{className:"face-img-wrap",children:a.jsx("img",{src:f,alt:`Question ${E} from ${N}`})}),a.jsx("button",{onClick:g,className:"flip-cta flip-cta-front",children:"Flip → marking scheme"})]}),a.jsxs("div",{className:"flip-face flip-back",children:[a.jsxs("div",{className:"face-tag face-tag-back",children:[a.jsxs("span",{className:"face-tag-no",children:["Q",E]}),a.jsxs("span",{className:"face-tag-label",children:["Marking scheme · ",N]}),R&&a.jsx(qu,{value:R})]}),q,a.jsx("div",{className:"face-img-wrap face-img-wrap-back",children:a.jsx("img",{src:I,alt:`Marking scheme for question ${E} in ${N}`})}),a.jsx("p",{className:"ms-note",children:'The mark allocation (e.g. "3+2+2+2+1") tells you how the marks split — useful for knowing how many distinct points are needed.'}),O&&a.jsxs("div",{className:"status-bar",children:[a.jsx("button",{onClick:()=>O.set(N,E,R==="got-it"?null:"got-it"),className:`status-btn status-btn-got ${R==="got-it"?"is-active":""}`,children:"✓ Got it"}),a.jsx("button",{onClick:()=>O.set(N,E,R==="review"?null:"review"),className:`status-btn status-btn-rev ${R==="review"?"is-active":""}`,children:"↻ Review again"})]}),a.jsx("button",{onClick:g,className:"flip-cta flip-cta-back",children:"← Back to question"})]})]})})}function qu({value:v}){return v==="got-it"?a.jsx("span",{className:"status-badge status-badge-got",children:"✓ Got it"}):v==="review"?a.jsx("span",{className:"status-badge status-badge-rev",children:"↻ Review"}):null}function fd({units:v=[],topics:g=[],unitsLookup:f=[]}){return!v.length&&!g.length?null:a.jsxs("div",{className:"tag-pills",children:[v.map(I=>{const E=f.find(N=>N.id===I);return E?a.jsxs("span",{className:"tag-pill tag-pill-unit",style:{"--unit-color":E.color},children:["U",E.id," · ",E.name]},`u${I}`):null}),g.map((I,E)=>a.jsx("span",{className:"tag-pill tag-pill-topic",children:I},`t${E}`))]})}function dd({state:v,setState:g,unitsLookup:f,status:I,enrichQuestion:E,yearsData:N,onExit:V}){const[C,O]=ee.useState(1200),[q,R]=ee.useState(!1),[U,B]=ee.useState(0),[G,j]=ee.useState(!1),H=ee.useRef(null);ee.useEffect(()=>{if(!q)return H.current=setInterval(()=>{O(F=>F<=1?(clearInterval(H.current),R(!0),0):F-1)},1e3),()=>clearInterval(H.current)},[q]);const ye=Math.floor(C/60),Fe=C%60,Ae=`${ye}:${String(Fe).padStart(2,"0")}`,he=C<60&&!q;if(q){const F=v.questions[U],J=E?E(F,F.year):F,le=J&&J.q&&J.s;return a.jsxs("div",{className:"mock",children:[a.jsx("div",{className:"mock-banner mock-banner-done",children:"Time's up · Review mode"}),a.jsx(pd,{questions:v.questions,active:U,onPick:ae=>{B(ae),j(!1)},status:I}),le?a.jsx(Ri,{flipped:G,onFlip:()=>j(ae=>!ae),questionImg:J.q,schemeImg:J.s,qn:F.qn,year:F.year,topics:F.topics,units:F.units,unitsLookup:f,status:I}):a.jsx(kr,{yearsData:N}),a.jsx("div",{className:"navbar",children:a.jsx("button",{onClick:V,className:"nav-btn",children:"← Back to home"})})]})}const je=v.questions[v.current],xe=E?E(je,je.year):je,Te=xe&&xe.q&&xe.s,Ie=()=>g(F=>({...F,current:Math.max(0,F.current-1)})),Je=()=>g(F=>({...F,current:Math.min(F.questions.length-1,F.current+1)}));return a.jsxs("div",{className:"mock",children:[a.jsxs("div",{className:"mock-bar",children:[a.jsxs("div",{className:`mock-timer ${he?"mock-timer-low":""}`,children:[a.jsx("span",{className:"mock-timer-label",children:"Time left"}),a.jsx("span",{className:"mock-timer-num",children:Ae})]}),a.jsxs("div",{className:"mock-progress",children:["Question ",v.current+1," of ",v.questions.length]}),a.jsx("button",{onClick:()=>R(!0),className:"mock-end",children:"End test"})]}),Te?a.jsxs("div",{className:"mock-card",children:[a.jsxs("div",{className:"face-tag",children:[a.jsxs("span",{className:"face-tag-no",children:["Q",v.current+1]}),a.jsxs("span",{className:"face-tag-label",children:["No peeking · from ",je.year]})]}),a.jsx("div",{className:"face-img-wrap",children:a.jsx("img",{src:xe.q,alt:`Mock question ${v.current+1}`})}),a.jsx("p",{className:"mock-hint",children:`Write your answer on paper. The marking scheme is locked until time's up or you tap "End test".`})]}):a.jsx(kr,{yearsData:N}),a.jsxs("div",{className:"navbar",children:[a.jsx("button",{onClick:Ie,disabled:v.current===0,className:"nav-btn",children:"← Previous"}),a.jsx("button",{onClick:Je,disabled:v.current===v.questions.length-1,className:"nav-btn nav-btn-flip",children:"Next →"})]})]})}function pd({questions:v,active:g,onPick:f,status:I}){return a.jsx("nav",{className:"strip","aria-label":"Mock question navigator",children:v.map((E,N)=>{const V=I?I.get(E.year,E.qn):null,_=V==="got-it"?"chip-dot chip-dot-got":V==="review"?"chip-dot chip-dot-rev":null;return a.jsxs("button",{onClick:()=>f(N),className:`chip chip-mock ${N===g?"chip-on":""}`,"aria-current":N===g?"true":void 0,children:[_&&a.jsx("span",{className:_}),a.jsx("span",{className:"chip-mock-n",children:N+1}),a.jsxs("span",{className:"chip-mock-yr",children:["'",String(E.year).slice(-2)]})]},N)})})}function md(){return a.jsx("footer",{className:"ftr",children:a.jsx("div",{className:"ftr-line",children:"Past papers © State Examinations Commission. Used for revision purposes."})})}function hd(){return a.jsxs(a.Fragment,{children:[a.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400;9..144,600;9..144,800;9..144,900&family=Manrope:wght@400;500;600;700&display=swap"}),a.jsx("style",{children:vd})]})}const vd=`
:root {
  --paper: #FBF7EE;
  --ink: #1F1B17;
  --ink2: #544A40;
  --coral: #E54B3B;
  --mustard: #F4B83C;
  --forest: #2E5E48;
  --blush: #F2D6CC;
  --mint: #CDE3D2;
  --rule: #E5DDCB;
  --serif: 'Fraunces', 'Georgia', serif;
  --sans: 'Manrope', system-ui, sans-serif;
}

* { box-sizing: border-box; }

html, body, #root { margin: 0; padding: 0; min-height: 100%; }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Subtle paper grain via radial dots */
.app {
  min-height: 100vh;
  position: relative;
  background:
    radial-gradient(circle at 1px 1px, rgba(31,27,23,0.04) 1px, transparent 0)
      0 0 / 24px 24px,
    var(--paper);
  display: flex;
  flex-direction: column;
}

/* ---------- Header ---------- */
.hdr {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 32px;
  border-bottom: 2px solid var(--ink);
  background: var(--paper);
  position: sticky;
  top: 0;
  z-index: 10;
}
.hdr-mark {
  border: none;
  background: var(--coral);
  color: var(--paper);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  position: relative;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}
.hdr-mark:hover { transform: rotate(-8deg) scale(1.05); }
.hdr-mark-ink {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 22px;
  letter-spacing: -1px;
  font-style: italic;
}
.hdr-mark-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--mustard);
  border: 2px solid var(--ink);
  border-radius: 50%;
  top: -2px;
  right: -2px;
}
.hdr-text { flex: 1; min-width: 0; }
.hdr-title {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 22px;
  font-variation-settings: 'opsz' 144, 'SOFT' 50;
  line-height: 1;
}
.hdr-sub {
  font-size: 13px;
  color: var(--ink2);
  margin-top: 4px;
  letter-spacing: 0.02em;
}
.hdr-sub em {
  font-style: normal;
  font-weight: 700;
  color: var(--coral);
}

/* ---------- Main ---------- */
.main {
  flex: 1;
  padding: 32px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

/* ---------- Home ---------- */
.hero { margin-bottom: 48px; }
.hero-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  font-weight: 700;
  color: var(--coral);
  margin-bottom: 12px;
}
.hero-h1 {
  font-family: var(--serif);
  font-weight: 900;
  font-size: clamp(40px, 7vw, 84px);
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0 0 18px;
  font-variation-settings: 'opsz' 144, 'SOFT' 100, 'WONK' 1;
}
.hero-h1-accent {
  font-style: italic;
  color: var(--coral);
  font-weight: 800;
}
.hero-lede {
  font-size: 17px;
  max-width: 580px;
  color: var(--ink2);
  line-height: 1.55;
}

/* ---------- Home: mock CTA ---------- */
.mock-cta {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  border: 2px solid var(--ink);
  background: var(--ink);
  color: var(--paper);
  padding: 22px 26px;
  border-radius: 22px;
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  box-shadow: 5px 5px 0 var(--coral);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  margin-bottom: 36px;
  position: relative;
  overflow: hidden;
}
.mock-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 90% 120%, var(--coral) 0, transparent 50%),
    radial-gradient(circle at 10% -20%, var(--mustard) 0, transparent 35%);
  opacity: 0.4;
  pointer-events: none;
}
.mock-cta:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--coral);
}
.mock-cta-left { position: relative; z-index: 1; flex: 1; min-width: 0; }
.mock-cta-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  font-weight: 700;
  color: var(--mustard);
  margin-bottom: 6px;
}
.mock-cta-h {
  font-family: var(--serif);
  font-weight: 900;
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.mock-cta-sub {
  margin-top: 10px;
  font-size: 13px;
  opacity: 0.85;
}
.mock-cta-right {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.mock-cta-num {
  font-family: var(--serif);
  font-weight: 900;
  font-size: clamp(48px, 9vw, 76px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--paper);
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.mock-cta-arrow {
  font-size: 24px;
  font-weight: 700;
  color: var(--mustard);
}

/* ---------- Section divider ---------- */
.section-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 8px 0 22px;
  color: var(--ink2);
}
.section-divider::before,
.section-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--rule);
}
.section-divider-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 700;
}

/* ---------- Back button (top of every non-home view) ---------- */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1.5px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.15s;
}
.back-btn:hover {
  background: var(--ink);
  color: var(--paper);
}

/* ---------- Home: CTA pair (Mock + Shuffle) ---------- */
.cta-pair {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 36px;
}
@media (min-width: 720px) {
  .cta-pair {
    grid-template-columns: 1.5fr 1fr;
  }
}
.cta-pair .mock-cta { margin-bottom: 0; }

.shuffle-cta {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
  border: 2px solid var(--ink);
  background: var(--mustard);
  color: var(--ink);
  padding: 22px 24px;
  border-radius: 22px;
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  box-shadow: 5px 5px 0 var(--ink);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.shuffle-cta:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--ink);
}
.shuffle-cta-left { flex: 1; min-width: 0; }
.shuffle-cta-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  font-weight: 700;
  color: var(--ink2);
  margin-bottom: 6px;
}
.shuffle-cta-h {
  font-family: var(--serif);
  font-weight: 900;
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.shuffle-cta-sub {
  margin-top: 10px;
  font-size: 13px;
  opacity: 0.8;
}
.shuffle-cta-right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.shuffle-cta-icon {
  font-family: var(--serif);
  font-weight: 900;
  font-size: clamp(40px, 8vw, 60px);
  line-height: 1;
  color: var(--ink);
}

/* Shuffle bar (top of shuffle view) */
.shuffle-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  border: 2px solid var(--ink);
  border-radius: 14px;
  background: var(--mustard);
}
.shuffle-bar-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.shuffle-bar-eyebrow {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--ink2);
}
.shuffle-bar-progress {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 18px;
  color: var(--ink);
  font-variation-settings: 'opsz' 144;
}
.shuffle-bar-btn {
  border: 1.5px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  padding: 8px 14px;
  border-radius: 999px;
  font-family: var(--sans);
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s;
}
.shuffle-bar-btn:hover {
  background: var(--ink);
  color: var(--paper);
}

.year-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

/* ---------- Unit grid (primary navigation) ---------- */
.unit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 36px;
}
.unit-tile {
  border: 2px solid var(--ink);
  background: var(--paper);
  padding: 18px 18px 18px 22px;
  border-radius: 18px;
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 3px 3px 0 var(--unit-color, var(--ink));
  color: var(--ink);
}
.unit-tile::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: var(--unit-color, var(--ink));
}
.unit-tile:hover:not(:disabled) {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--unit-color, var(--ink));
}
.unit-tile-empty {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: 3px 3px 0 var(--rule);
}
.unit-tile-num {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 32px;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--unit-color, var(--ink));
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.unit-tile-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.unit-tile-count {
  font-size: 12px;
  color: var(--ink2);
  margin-top: 2px;
  font-weight: 500;
}

/* Unit banner shown at top of UnitView */
.unit-banner {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 14px 18px;
  border: 2px solid var(--ink);
  border-radius: 14px;
  background: var(--unit-color);
  color: var(--ink);
  position: relative;
  box-shadow: 3px 3px 0 var(--ink);
}
.unit-banner-num {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 30px;
  letter-spacing: -0.03em;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.unit-banner-name {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
  flex: 1;
}
.unit-banner-count {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  opacity: 0.8;
}

/* ---------- Mock setup sheet (modal) ---------- */
.sheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(31, 27, 23, 0.55);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.sheet {
  background: var(--paper);
  border: 2px solid var(--ink);
  border-bottom: none;
  border-radius: 24px 24px 0 0;
  padding: 14px 24px 28px;
  width: 100%;
  max-width: 560px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 -10px 0 var(--coral);
  animation: slideUp 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@media (min-width: 640px) {
  .sheet-backdrop { align-items: center; }
  .sheet { border-radius: 24px; border-bottom: 2px solid var(--ink); }
}
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.sheet-grip {
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--rule);
  margin: 0 auto 14px;
}
.sheet-title {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 26px;
  margin: 0 0 6px;
  letter-spacing: -0.02em;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.sheet-sub {
  margin: 0 0 18px;
  font-size: 14px;
  color: var(--ink2);
}
.sheet-units {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
}
.sheet-unit {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  background: var(--paper);
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  transition: background 0.12s;
  position: relative;
}
.sheet-unit::before {
  content: "";
  width: 4px;
  align-self: stretch;
  background: var(--unit-color);
  border-radius: 2px;
}
.sheet-unit-num {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 18px;
  color: var(--unit-color);
  letter-spacing: -0.02em;
  font-variation-settings: 'opsz' 144;
  min-width: 30px;
}
.sheet-unit-name {
  flex: 1;
  font-weight: 600;
  font-size: 14px;
}
.sheet-unit-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid var(--rule);
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 14px;
  color: transparent;
}
.sheet-unit-on {
  background: var(--blush);
}
.sheet-unit-on .sheet-unit-check {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.sheet-meta {
  font-size: 13px;
  color: var(--ink2);
  text-align: center;
  padding: 12px;
  background: rgba(31, 27, 23, 0.04);
  border-radius: 10px;
  margin-bottom: 18px;
}
.sheet-actions {
  display: flex;
  gap: 10px;
}
.sheet-btn {
  flex: 1;
  padding: 14px 18px;
  border-radius: 999px;
  font-family: var(--sans);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.15s;
  border: 2px solid var(--ink);
}
.sheet-btn-ghost {
  background: var(--paper);
  color: var(--ink);
}
.sheet-btn-primary {
  background: var(--coral);
  color: var(--paper);
  border-color: var(--coral);
}
.sheet-btn-primary:hover:not(:disabled) {
  background: var(--ink);
  border-color: var(--ink);
}
.sheet-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ---------- Sheet "review only" toggle ---------- */
.sheet-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 2px solid var(--ink);
  border-radius: 12px;
  background: var(--paper);
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  width: 100%;
  margin-bottom: 14px;
  transition: background 0.12s;
}
.sheet-toggle-on {
  background: var(--blush);
}
.sheet-toggle-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid var(--rule);
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 14px;
  color: transparent;
  flex-shrink: 0;
}
.sheet-toggle-on .sheet-toggle-check {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}
.sheet-toggle-text {
  flex: 1;
  font-size: 14px;
  color: var(--ink);
}
.sheet-toggle-count {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 16px;
  color: var(--coral);
  font-variation-settings: 'opsz' 144;
}

/* ---------- Status: got-it / review-again ---------- */
.status-bar {
  display: flex;
  gap: 10px;
  margin: 0 0 12px;
}
.status-btn {
  flex: 1;
  padding: 11px 14px;
  border-radius: 999px;
  border: 1.5px solid var(--ink);
  background: var(--paper);
  font-family: var(--sans);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.15s;
  color: var(--ink);
}
.status-btn:hover { background: rgba(31, 27, 23, 0.05); }
.status-btn-got.is-active {
  background: #2E5E48;
  color: var(--paper);
  border-color: #2E5E48;
}
.status-btn-rev.is-active {
  background: var(--coral);
  color: var(--paper);
  border-color: var(--coral);
}

.status-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: 999px;
  margin-left: auto;
  white-space: nowrap;
  font-family: var(--sans);
  text-transform: uppercase;
}
.status-badge-got {
  background: #2E5E48;
  color: var(--paper);
}
.status-badge-rev {
  background: var(--coral);
  color: var(--paper);
}

/* Chip dot indicator (got-it / review-again) */
.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  right: 4px;
}
.chip-dot-got { background: #2E5E48; }
.chip-dot-rev { background: var(--coral); }
.chip { position: relative; }

/* Home stats line */
.stats-line {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: -12px 0 24px;
}
.stats-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1.5px solid var(--rule);
  font-family: var(--sans);
  font-weight: 600;
  font-size: 12px;
  background: var(--paper);
  color: var(--ink2);
}
.stats-pill-got { color: #2E5E48; border-color: #2E5E48; }
.stats-pill-rev { color: var(--coral); border-color: var(--coral); }
.stats-pill-unseen { color: var(--ink2); border-color: var(--rule); }
.stats-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.stats-dot-got { background: #2E5E48; }
.stats-dot-rev { background: var(--coral); }

/* Home review-again CTA (shown when there are review-marked questions) */
/* Loading state when images aren't ready */
.loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 60px 24px;
  border: 2px solid var(--rule);
  border-radius: 18px;
  background: var(--paper);
  margin-bottom: 12px;
  min-height: 360px;
}
.loading-card-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--rule);
  border-top-color: var(--coral);
  border-radius: 50%;
  animation: lc-spin 0.9s linear infinite;
}
@keyframes lc-spin {
  to { transform: rotate(360deg); }
}
.loading-card-h {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 18px;
  color: var(--ink);
  letter-spacing: -0.01em;
  font-variation-settings: 'opsz' 144;
}
.loading-card-sub {
  font-size: 13px;
  color: var(--ink2);
  text-align: center;
  max-width: 320px;
}
.loading-card-help {
  font-size: 12px;
  color: var(--ink2);
  opacity: 0.8;
  text-align: center;
}
.loading-card-error {
  border-color: var(--coral);
  background: rgba(229, 75, 59, 0.04);
}
.loading-card-error .loading-card-h {
  color: var(--coral);
}

.review-cta {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  border: 2px solid var(--coral);
  background: rgba(229, 75, 59, 0.08);
  color: var(--ink);
  padding: 14px 18px;
  border-radius: 14px;
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  margin-bottom: 36px;
  transition: all 0.15s;
}
.review-cta:hover {
  background: var(--coral);
  color: var(--paper);
}
.review-cta-icon {
  font-size: 22px;
  font-weight: 700;
  color: var(--coral);
  flex-shrink: 0;
}
.review-cta:hover .review-cta-icon { color: var(--paper); }
.review-cta-text {
  flex: 1;
  font-size: 14px;
}
.review-cta-arrow {
  font-weight: 700;
  font-size: 18px;
}

/* ---------- Loading card (lazy-load placeholder) ---------- */
.loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border: 2px solid var(--ink);
  border-radius: 22px;
  background: var(--paper);
  padding: 60px 24px;
  margin-bottom: 14px;
  min-height: 320px;
  box-shadow: 4px 4px 0 var(--ink);
  text-align: center;
}
.loading-card-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--rule);
  border-top-color: var(--coral);
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loading-card-h {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
  color: var(--ink);
}
.loading-card-sub {
  font-size: 14px;
  color: var(--ink2);
}
.loading-card-help {
  font-size: 12px;
  color: var(--ink2);
  font-style: italic;
}
.loading-card-error {
  border-color: var(--coral);
  box-shadow: 4px 4px 0 var(--coral);
}
.loading-card-error .loading-card-h { color: var(--coral); }

/* ---------- Tag pills on flip card ---------- */
.tag-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: -4px;
}
.tag-pill {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1.5px solid var(--ink);
  white-space: nowrap;
  font-family: var(--sans);
}
.tag-pill-unit {
  background: var(--unit-color);
  color: var(--ink);
}
.tag-pill-topic {
  background: var(--paper);
  color: var(--ink2);
  border-color: var(--rule);
}

.tile {
  border-radius: 22px;
  padding: 24px 22px 22px;
  border: 2px solid var(--ink);
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  box-shadow: 4px 4px 0 var(--ink);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
  font-family: var(--sans);
  text-align: left;
  color: var(--ink);
}
.tile:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}
.tile-yr {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 64px;
  line-height: 0.85;
  letter-spacing: -0.04em;
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.tile-meta {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.tile-count { font-weight: 800; font-size: 17px; }
.tile-arrow {
  margin-top: auto;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.85;
}

/* ---------- Year view ---------- */
.year-view, .mock { display: flex; flex-direction: column; gap: 20px; }

.strip {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 12px;
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 14px;
}
.chip {
  border: 1.5px solid var(--ink);
  background: transparent;
  color: var(--ink);
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  font-family: var(--sans);
  letter-spacing: 0.02em;
  transition: all 0.1s;
}
.chip:hover { background: var(--blush); }
.chip-on {
  background: var(--ink);
  color: var(--paper);
}

/* Mock-strip chip: number on top, year below */
.chip-mock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 5px 10px 4px;
  line-height: 1;
}
.chip-mock-n {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 15px;
  font-variation-settings: 'opsz' 144;
}
.chip-mock-yr {
  font-size: 9px;
  letter-spacing: 0.05em;
  font-weight: 600;
  opacity: 0.7;
}
.chip-on .chip-mock-yr { opacity: 0.85; }

/* ---------- Flip card ---------- */
.flip {
  perspective: 2000px;
  min-height: 600px;
}
.flip-inner {
  position: relative;
  width: 100%;
  min-height: 600px;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.flip.is-flipped .flip-inner { transform: rotateY(180deg); }

.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border: 2px solid var(--ink);
  border-radius: 18px;
  padding: 22px 22px 28px;
  background: var(--paper);
  box-shadow: 5px 5px 0 var(--ink);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.flip-back {
  transform: rotateY(180deg);
  background: #F4FAF6;  /* faint mint paper for the answer side */
}

.face-tag {
  display: flex;
  align-items: baseline;
  gap: 14px;
  border-bottom: 1.5px dashed var(--rule);
  padding-bottom: 14px;
}
.face-tag-back { border-bottom-color: var(--forest); }
.face-tag-no {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 36px;
  letter-spacing: -0.02em;
  color: var(--coral);
  font-variation-settings: 'opsz' 144, 'WONK' 1;
}
.face-tag-back .face-tag-no { color: var(--forest); }
.face-tag-label {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  font-weight: 700;
  color: var(--ink2);
}

.face-img-wrap {
  border: 1.5px solid var(--rule);
  border-radius: 12px;
  padding: 14px;
  background: white;
  display: flex;
  justify-content: center;
  flex: 1;
}
.face-img-wrap-back { background: white; }
.face-img-wrap img {
  max-width: 100%;
  height: auto;
  display: block;
}

.ms-note {
  font-size: 13px;
  color: var(--forest);
  background: rgba(46, 94, 72, 0.08);
  padding: 10px 14px;
  border-radius: 10px;
  margin: 0;
  font-style: italic;
  line-height: 1.45;
}

.flip-cta {
  border: none;
  background: transparent;
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  align-self: center;
  padding: 4px 8px;
}
.flip-cta-front { color: var(--coral); }
.flip-cta-back { color: var(--forest); }

/* ---------- Nav bar ---------- */
.navbar {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.nav-btn {
  border: 2px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 700;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s;
}
.nav-btn:hover:not(:disabled) {
  background: var(--ink);
  color: var(--paper);
}
.nav-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.nav-btn-flip {
  background: var(--coral);
  color: var(--paper);
  border-color: var(--coral);
  flex: 1;
  max-width: 320px;
}
.nav-btn-flip:hover:not(:disabled) {
  background: var(--ink);
  border-color: var(--ink);
}

/* ---------- Mock mode ---------- */
.mock-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--ink);
  color: var(--paper);
  border-radius: 14px;
}
.mock-timer {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.mock-timer-label {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.7;
}
.mock-timer-num {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 28px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  font-variation-settings: 'opsz' 144;
}
.mock-timer-low .mock-timer-num {
  color: var(--mustard);
  animation: pulse 1s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.mock-progress {
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
}
.mock-end {
  background: var(--coral);
  border: none;
  color: var(--paper);
  padding: 10px 16px;
  border-radius: 999px;
  font-family: var(--sans);
  font-weight: 700;
  cursor: pointer;
  font-size: 13px;
}
.mock-end:hover { background: var(--mustard); color: var(--ink); }

.mock-card {
  border: 2px solid var(--ink);
  border-radius: 18px;
  padding: 22px;
  background: var(--paper);
  box-shadow: 5px 5px 0 var(--ink);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mock-hint {
  font-size: 13px;
  color: var(--ink2);
  margin: 0;
  text-align: center;
  font-style: italic;
}

.mock-banner {
  text-align: center;
  padding: 14px;
  border-radius: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  font-family: var(--serif);
  font-size: 20px;
}
.mock-banner-done {
  background: var(--mustard);
  color: var(--ink);
  border: 2px solid var(--ink);
}

/* ---------- Footer ---------- */
.ftr {
  padding: 40px 32px 24px;
  border-top: 1px solid var(--rule);
  margin-top: auto;
}
.ftr-line {
  text-align: center;
  font-size: 12px;
  color: var(--ink2);
  letter-spacing: 0.02em;
}

/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .hdr { padding: 14px 16px; gap: 12px; }
  .hdr-mark { width: 44px; height: 44px; }
  .hdr-mark-ink { font-size: 17px; }
  .hdr-title { font-size: 17px; }
  .hdr-sub { font-size: 11px; }
  .main { padding: 20px 16px; }
  .hero-h1 { font-size: 44px; }
  .hero-lede { font-size: 15px; }
  .year-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
  .tile { padding: 18px 16px; }
  .tile-yr { font-size: 48px; }
  .flip, .flip-inner { min-height: 500px; }
  .flip-face { padding: 16px 16px 22px; }
  .face-tag-no { font-size: 28px; }
  .navbar { flex-wrap: wrap; }
  .nav-btn { padding: 10px 14px; font-size: 13px; }
  .nav-btn-flip { width: 100%; max-width: none; order: -1; }
  .mock-bar { flex-wrap: wrap; gap: 12px; padding: 12px 14px; }
  .mock-timer-num { font-size: 22px; }
}
`;Jf.createRoot(document.getElementById("root")).render(a.jsx(Wf.StrictMode,{children:a.jsx(ed,{})}));
