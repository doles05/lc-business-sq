(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))_(S);new MutationObserver(S=>{for(const N of S)if(N.type==="childList")for(const b of N.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&_(b)}).observe(document,{childList:!0,subtree:!0});function f(S){const N={};return S.integrity&&(N.integrity=S.integrity),S.referrerPolicy&&(N.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?N.credentials="include":S.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function _(S){if(S.ep)return;S.ep=!0;const N=f(S);fetch(S.href,N)}})();function Wu(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Tl={exports:{}},xr={},Pl={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Uf(){if(Mu)return te;Mu=1;var g=Symbol.for("react.element"),v=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),I=Symbol.iterator;function W(d){return d===null||typeof d!="object"?null:(d=I&&d[I]||d["@@iterator"],typeof d=="function"?d:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,j={};function H(d,x,ee){this.props=d,this.context=x,this.refs=j,this.updater=ee||q}H.prototype.isReactComponent={},H.prototype.setState=function(d,x){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,x,"setState")},H.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function ve(){}ve.prototype=H.prototype;function Te(d,x,ee){this.props=d,this.context=x,this.refs=j,this.updater=ee||q}var Ie=Te.prototype=new ve;Ie.constructor=Te,Q(Ie,H.prototype),Ie.isPureReactComponent=!0;var me=Array.isArray,T=Object.prototype.hasOwnProperty,Y={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function ue(d,x,ee){var ne,le={},se=null,he=null;if(x!=null)for(ne in x.ref!==void 0&&(he=x.ref),x.key!==void 0&&(se=""+x.key),x)T.call(x,ne)&&!X.hasOwnProperty(ne)&&(le[ne]=x[ne]);var de=arguments.length-2;if(de===1)le.children=ee;else if(1<de){for(var Se=Array(de),Je=0;Je<de;Je++)Se[Je]=arguments[Je+2];le.children=Se}if(d&&d.defaultProps)for(ne in de=d.defaultProps,de)le[ne]===void 0&&(le[ne]=de[ne]);return{$$typeof:g,type:d,key:se,ref:he,props:le,_owner:Y.current}}function ce(d,x){return{$$typeof:g,type:d.type,key:x,ref:d.ref,props:d.props,_owner:d._owner}}function R(d){return typeof d=="object"&&d!==null&&d.$$typeof===g}function Z(d){var x={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(ee){return x[ee]})}var re=/\/+/g;function fe(d,x){return typeof d=="object"&&d!==null&&d.key!=null?Z(""+d.key):x.toString(36)}function Pe(d,x,ee,ne,le){var se=typeof d;(se==="undefined"||se==="boolean")&&(d=null);var he=!1;if(d===null)he=!0;else switch(se){case"string":case"number":he=!0;break;case"object":switch(d.$$typeof){case g:case v:he=!0}}if(he)return he=d,le=le(he),d=ne===""?"."+fe(he,0):ne,me(le)?(ee="",d!=null&&(ee=d.replace(re,"$&/")+"/"),Pe(le,x,ee,"",function(Je){return Je})):le!=null&&(R(le)&&(le=ce(le,ee+(!le.key||he&&he.key===le.key?"":(""+le.key).replace(re,"$&/")+"/")+d)),x.push(le)),1;if(he=0,ne=ne===""?".":ne+":",me(d))for(var de=0;de<d.length;de++){se=d[de];var Se=ne+fe(se,de);he+=Pe(se,x,ee,Se,le)}else if(Se=W(d),typeof Se=="function")for(d=Se.call(d),de=0;!(se=d.next()).done;)se=se.value,Se=ne+fe(se,de++),he+=Pe(se,x,ee,Se,le);else if(se==="object")throw x=String(d),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return he}function ie(d,x,ee){if(d==null)return d;var ne=[],le=0;return Pe(d,ne,"","",function(se){return x.call(ee,se,le++)}),ne}function ye(d){if(d._status===-1){var x=d._result;x=x(),x.then(function(ee){(d._status===0||d._status===-1)&&(d._status=1,d._result=ee)},function(ee){(d._status===0||d._status===-1)&&(d._status=2,d._result=ee)}),d._status===-1&&(d._status=0,d._result=x)}if(d._status===1)return d._result.default;throw d._result}var xe={current:null},z={transition:null},G={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:z,ReactCurrentOwner:Y};function D(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:ie,forEach:function(d,x,ee){ie(d,function(){x.apply(this,arguments)},ee)},count:function(d){var x=0;return ie(d,function(){x++}),x},toArray:function(d){return ie(d,function(x){return x})||[]},only:function(d){if(!R(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},te.Component=H,te.Fragment=f,te.Profiler=S,te.PureComponent=Te,te.StrictMode=_,te.Suspense=C,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,te.act=D,te.cloneElement=function(d,x,ee){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var ne=Q({},d.props),le=d.key,se=d.ref,he=d._owner;if(x!=null){if(x.ref!==void 0&&(se=x.ref,he=Y.current),x.key!==void 0&&(le=""+x.key),d.type&&d.type.defaultProps)var de=d.type.defaultProps;for(Se in x)T.call(x,Se)&&!X.hasOwnProperty(Se)&&(ne[Se]=x[Se]===void 0&&de!==void 0?de[Se]:x[Se])}var Se=arguments.length-2;if(Se===1)ne.children=ee;else if(1<Se){de=Array(Se);for(var Je=0;Je<Se;Je++)de[Je]=arguments[Je+2];ne.children=de}return{$$typeof:g,type:d.type,key:le,ref:se,props:ne,_owner:he}},te.createContext=function(d){return d={$$typeof:b,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:N,_context:d},d.Consumer=d},te.createElement=ue,te.createFactory=function(d){var x=ue.bind(null,d);return x.type=d,x},te.createRef=function(){return{current:null}},te.forwardRef=function(d){return{$$typeof:P,render:d}},te.isValidElement=R,te.lazy=function(d){return{$$typeof:B,_payload:{_status:-1,_result:d},_init:ye}},te.memo=function(d,x){return{$$typeof:L,type:d,compare:x===void 0?null:x}},te.startTransition=function(d){var x=z.transition;z.transition={};try{d()}finally{z.transition=x}},te.unstable_act=D,te.useCallback=function(d,x){return xe.current.useCallback(d,x)},te.useContext=function(d){return xe.current.useContext(d)},te.useDebugValue=function(){},te.useDeferredValue=function(d){return xe.current.useDeferredValue(d)},te.useEffect=function(d,x){return xe.current.useEffect(d,x)},te.useId=function(){return xe.current.useId()},te.useImperativeHandle=function(d,x,ee){return xe.current.useImperativeHandle(d,x,ee)},te.useInsertionEffect=function(d,x){return xe.current.useInsertionEffect(d,x)},te.useLayoutEffect=function(d,x){return xe.current.useLayoutEffect(d,x)},te.useMemo=function(d,x){return xe.current.useMemo(d,x)},te.useReducer=function(d,x,ee){return xe.current.useReducer(d,x,ee)},te.useRef=function(d){return xe.current.useRef(d)},te.useState=function(d){return xe.current.useState(d)},te.useSyncExternalStore=function(d,x,ee){return xe.current.useSyncExternalStore(d,x,ee)},te.useTransition=function(){return xe.current.useTransition()},te.version="18.3.1",te}var _u;function Fl(){return _u||(_u=1,Pl.exports=Uf()),Pl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Wf(){if(Ru)return xr;Ru=1;var g=Fl(),v=Symbol.for("react.element"),f=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,S=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function b(P,C,L){var B,I={},W=null,q=null;L!==void 0&&(W=""+L),C.key!==void 0&&(W=""+C.key),C.ref!==void 0&&(q=C.ref);for(B in C)_.call(C,B)&&!N.hasOwnProperty(B)&&(I[B]=C[B]);if(P&&P.defaultProps)for(B in C=P.defaultProps,C)I[B]===void 0&&(I[B]=C[B]);return{$$typeof:v,type:P,key:W,ref:q,props:I,_owner:S.current}}return xr.Fragment=f,xr.jsx=b,xr.jsxs=b,xr}var Lu;function bf(){return Lu||(Lu=1,Tl.exports=Wf()),Tl.exports}var s=bf(),J=Fl();const Hf=Wu(J);var _i={},zl={exports:{}},Xe={},Ml={exports:{}},_l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Vf(){return Iu||(Iu=1,(function(g){function v(z,G){var D=z.length;z.push(G);e:for(;0<D;){var d=D-1>>>1,x=z[d];if(0<S(x,G))z[d]=G,z[D]=x,D=d;else break e}}function f(z){return z.length===0?null:z[0]}function _(z){if(z.length===0)return null;var G=z[0],D=z.pop();if(D!==G){z[0]=D;e:for(var d=0,x=z.length,ee=x>>>1;d<ee;){var ne=2*(d+1)-1,le=z[ne],se=ne+1,he=z[se];if(0>S(le,D))se<x&&0>S(he,le)?(z[d]=he,z[se]=D,d=se):(z[d]=le,z[ne]=D,d=ne);else if(se<x&&0>S(he,D))z[d]=he,z[se]=D,d=se;else break e}}return G}function S(z,G){var D=z.sortIndex-G.sortIndex;return D!==0?D:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var N=performance;g.unstable_now=function(){return N.now()}}else{var b=Date,P=b.now();g.unstable_now=function(){return b.now()-P}}var C=[],L=[],B=1,I=null,W=3,q=!1,Q=!1,j=!1,H=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ie(z){for(var G=f(L);G!==null;){if(G.callback===null)_(L);else if(G.startTime<=z)_(L),G.sortIndex=G.expirationTime,v(C,G);else break;G=f(L)}}function me(z){if(j=!1,Ie(z),!Q)if(f(C)!==null)Q=!0,ye(T);else{var G=f(L);G!==null&&xe(me,G.startTime-z)}}function T(z,G){Q=!1,j&&(j=!1,ve(ue),ue=-1),q=!0;var D=W;try{for(Ie(G),I=f(C);I!==null&&(!(I.expirationTime>G)||z&&!Z());){var d=I.callback;if(typeof d=="function"){I.callback=null,W=I.priorityLevel;var x=d(I.expirationTime<=G);G=g.unstable_now(),typeof x=="function"?I.callback=x:I===f(C)&&_(C),Ie(G)}else _(C);I=f(C)}if(I!==null)var ee=!0;else{var ne=f(L);ne!==null&&xe(me,ne.startTime-G),ee=!1}return ee}finally{I=null,W=D,q=!1}}var Y=!1,X=null,ue=-1,ce=5,R=-1;function Z(){return!(g.unstable_now()-R<ce)}function re(){if(X!==null){var z=g.unstable_now();R=z;var G=!0;try{G=X(!0,z)}finally{G?fe():(Y=!1,X=null)}}else Y=!1}var fe;if(typeof Te=="function")fe=function(){Te(re)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,ie=Pe.port2;Pe.port1.onmessage=re,fe=function(){ie.postMessage(null)}}else fe=function(){H(re,0)};function ye(z){X=z,Y||(Y=!0,fe())}function xe(z,G){ue=H(function(){z(g.unstable_now())},G)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(z){z.callback=null},g.unstable_continueExecution=function(){Q||q||(Q=!0,ye(T))},g.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<z?Math.floor(1e3/z):5},g.unstable_getCurrentPriorityLevel=function(){return W},g.unstable_getFirstCallbackNode=function(){return f(C)},g.unstable_next=function(z){switch(W){case 1:case 2:case 3:var G=3;break;default:G=W}var D=W;W=G;try{return z()}finally{W=D}},g.unstable_pauseExecution=function(){},g.unstable_requestPaint=function(){},g.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=W;W=z;try{return G()}finally{W=D}},g.unstable_scheduleCallback=function(z,G,D){var d=g.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?d+D:d):D=d,z){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=D+x,z={id:B++,callback:G,priorityLevel:z,startTime:D,expirationTime:x,sortIndex:-1},D>d?(z.sortIndex=D,v(L,z),f(C)===null&&z===f(L)&&(j?(ve(ue),ue=-1):j=!0,xe(me,D-d))):(z.sortIndex=x,v(C,z),Q||q||(Q=!0,ye(T))),z},g.unstable_shouldYield=Z,g.unstable_wrapCallback=function(z){var G=W;return function(){var D=W;W=G;try{return z.apply(this,arguments)}finally{W=D}}}})(_l)),_l}var Fu;function $f(){return Fu||(Fu=1,Ml.exports=Vf()),Ml.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Qf(){if(Du)return Xe;Du=1;var g=Fl(),v=$f();function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _=new Set,S={};function N(e,t){b(e,t),b(e+"Capture",t)}function b(e,t){for(S[e]=t,e=0;e<t.length;e++)_.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},I={};function W(e){return C.call(I,e)?!0:C.call(B,e)?!1:L.test(e)?I[e]=!0:(B[e]=!0,!1)}function q(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q(e,t,n,r){if(t===null||typeof t>"u"||q(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function j(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new j(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function Te(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ve,Te);H[t]=new j(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ve,Te);H[t]=new j(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ve,Te);H[t]=new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ie(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q(t,n,i,r)&&(n=null),r||i===null?W(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var me=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=Symbol.for("react.element"),Y=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),Z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),z=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,d;function x(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var ee=!1;function ne(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?x(e):""}function le(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Y:return"Portal";case ce:return"Profiler";case ue:return"StrictMode";case fe:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:return(e.displayName||"Context")+".Consumer";case R:return(e._context.displayName||"Context")+".Provider";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=Se(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Je(e))}function Dl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Se(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Li(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ol(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ql(e,t){t=t.checked,t!=null&&Ie(e,"checked",t,!1)}function Ii(e,t){ql(e,t);var n=de(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fi(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Al(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fi(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(f(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(f(92));if(In(n)){if(1<n.length)throw Error(f(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function Ul(e,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Hl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Hu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Vl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function $l(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vu=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,t){if(t){if(Vu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(f(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(f(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(t.style!=null&&typeof t.style!="object")throw Error(f(62))}}function Ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,un=null,cn=null;function Ql(e){if(e=ir(e)){if(typeof Wi!="function")throw Error(f(280));var t=e.stateNode;t&&(t=$r(t),Wi(e.stateNode,e.type,t))}}function Gl(e){un?cn?cn.push(e):cn=[e]:un=e}function Kl(){if(un){var e=un,t=cn;if(cn=un=null,Ql(e),t)for(e=0;e<t.length;e++)Ql(t[e])}}function Yl(e,t){return e(t)}function Xl(){}var bi=!1;function Jl(e,t,n){if(bi)return e(t,n);bi=!0;try{return Yl(e,t,n)}finally{bi=!1,(un!==null||cn!==null)&&(Xl(),Kl())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=$r(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var Hi=!1;if(P)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{Hi=!1}function $u(e,t,n,r,i,o,l,a,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(k){this.onError(k)}}var An=!1,Cr=null,Nr=!1,Vi=null,Qu={onError:function(e){An=!0,Cr=e}};function Gu(e,t,n,r,i,o,l,a,u){An=!1,Cr=null,$u.apply(Qu,arguments)}function Ku(e,t,n,r,i,o,l,a,u){if(Gu.apply(this,arguments),An){if(An){var h=Cr;An=!1,Cr=null}else throw Error(f(198));Nr||(Nr=!0,Vi=h)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function es(e){if(Gt(e)!==e)throw Error(f(188))}function Yu(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return es(i),e;if(o===r)return es(i),t;o=o.sibling}throw Error(f(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function ts(e){return e=Yu(e),e!==null?ns(e):null}function ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ns(e);if(t!==null)return t;e=e.sibling}return null}var rs=v.unstable_scheduleCallback,is=v.unstable_cancelCallback,Xu=v.unstable_shouldYield,Ju=v.unstable_requestPaint,ze=v.unstable_now,Zu=v.unstable_getCurrentPriorityLevel,$i=v.unstable_ImmediatePriority,os=v.unstable_UserBlockingPriority,jr=v.unstable_NormalPriority,ec=v.unstable_LowPriority,ls=v.unstable_IdlePriority,Tr=null,gt=null;function tc(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:ic,nc=Math.log,rc=Math.LN2;function ic(e){return e>>>=0,e===0?32:31-(nc(e)/rc|0)|0}var Pr=64,zr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Bn(a):(o&=l,o!==0&&(r=Bn(o)))}else l=n&~i,l!==0?r=Bn(l):o!==0&&(r=Bn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function oc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ut(o),a=1<<l,u=i[l];u===-1?((a&n)===0||(a&r)!==0)&&(i[l]=oc(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ss(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Un(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function sc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ki(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function as(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var us,Yi,cs,fs,ds,Xi=!1,_r=[],zt=null,Mt=null,_t=null,Wn=new Map,bn=new Map,Rt=[],ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Hn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ir(t),t!==null&&Yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uc(e,t,n,r,i){switch(t){case"focusin":return zt=Hn(zt,e,t,n,r,i),!0;case"dragenter":return Mt=Hn(Mt,e,t,n,r,i),!0;case"mouseover":return _t=Hn(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wn.set(o,Hn(Wn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bn.set(o,Hn(bn.get(o)||null,e,t,n,r,i)),!0}return!1}function ms(e){var t=Kt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zl(n),t!==null){e.blockedOn=t,ds(e.priority,function(){cs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bi=r,n.target.dispatchEvent(r),Bi=null}else return t=ir(n),t!==null&&Yi(t),e.blockedOn=n,!1;t.shift()}return!0}function hs(e,t,n){Rr(e)&&n.delete(t)}function cc(){Xi=!1,zt!==null&&Rr(zt)&&(zt=null),Mt!==null&&Rr(Mt)&&(Mt=null),_t!==null&&Rr(_t)&&(_t=null),Wn.forEach(hs),bn.forEach(hs)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xi||(Xi=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,cc)))}function $n(e){function t(i){return Vn(i,e)}if(0<_r.length){Vn(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Vn(zt,e),Mt!==null&&Vn(Mt,e),_t!==null&&Vn(_t,e),Wn.forEach(t),bn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)ms(n),n.blockedOn===null&&Rt.shift()}var fn=me.ReactCurrentBatchConfig,Lr=!0;function fc(e,t,n,r){var i=pe,o=fn.transition;fn.transition=null;try{pe=1,Ji(e,t,n,r)}finally{pe=i,fn.transition=o}}function dc(e,t,n,r){var i=pe,o=fn.transition;fn.transition=null;try{pe=4,Ji(e,t,n,r)}finally{pe=i,fn.transition=o}}function Ji(e,t,n,r){if(Lr){var i=Zi(e,t,n,r);if(i===null)vo(e,t,r,Ir,n),ps(e,r);else if(uc(i,e,t,n,r))r.stopPropagation();else if(ps(e,r),t&4&&-1<ac.indexOf(e)){for(;i!==null;){var o=ir(i);if(o!==null&&us(o),o=Zi(e,t,n,r),o===null&&vo(e,t,r,Ir,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vo(e,t,r,null,n)}}var Ir=null;function Zi(e,t,n,r){if(Ir=null,e=Ui(r),e=Kt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function gs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zu()){case $i:return 1;case os:return 4;case jr:case ec:return 16;case ls:return 536870912;default:return 16}default:return 16}}var Lt=null,eo=null,Fr=null;function vs(){if(Fr)return Fr;var e,t=eo,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function ys(){return!1}function Ze(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Or:ys,this.isPropagationStopped=ys,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=Ze(dn),Qn=D({},dn,{view:0,detail:0}),pc=Ze(Qn),no,ro,Gn,qr=D({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(no=e.screenX-Gn.screenX,ro=e.screenY-Gn.screenY):ro=no=0,Gn=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),xs=Ze(qr),mc=D({},qr,{dataTransfer:0}),hc=Ze(mc),gc=D({},Qn,{relatedTarget:0}),io=Ze(gc),vc=D({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),yc=Ze(vc),xc=D({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kc=Ze(xc),wc=D({},dn,{data:0}),ks=Ze(wc),Sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cc[e])?!!t[e]:!1}function oo(){return Nc}var jc=D({},Qn,{key:function(e){if(e.key){var t=Sc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ec[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tc=Ze(jc),Pc=D({},qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=Ze(Pc),zc=D({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Mc=Ze(zc),_c=D({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=Ze(_c),Lc=D({},qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ic=Ze(Lc),Fc=[9,13,27,32],lo=P&&"CompositionEvent"in window,Kn=null;P&&"documentMode"in document&&(Kn=document.documentMode);var Dc=P&&"TextEvent"in window&&!Kn,Ss=P&&(!lo||Kn&&8<Kn&&11>=Kn),Es=" ",Cs=!1;function Ns(e,t){switch(e){case"keyup":return Fc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Oc(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(Cs=!0,Es);case"textInput":return e=t.data,e===Es&&Cs?null:e;default:return null}}function qc(e,t){if(pn)return e==="compositionend"||!lo&&Ns(e,t)?(e=vs(),Fr=eo=Lt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ss&&t.locale!=="ko"?null:t.data;default:return null}}var Ac={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ac[e.type]:t==="textarea"}function Ps(e,t,n,r){Gl(r),t=br(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Xn=null;function Bc(e){$s(e,0)}function Ar(e){var t=yn(e);if(Dl(t))return e}function Uc(e,t){if(e==="change")return t}var zs=!1;if(P){var so;if(P){var ao="oninput"in document;if(!ao){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),ao=typeof Ms.oninput=="function"}so=ao}else so=!1;zs=so&&(!document.documentMode||9<document.documentMode)}function _s(){Yn&&(Yn.detachEvent("onpropertychange",Rs),Xn=Yn=null)}function Rs(e){if(e.propertyName==="value"&&Ar(Xn)){var t=[];Ps(t,Xn,e,Ui(e)),Jl(Bc,t)}}function Wc(e,t,n){e==="focusin"?(_s(),Yn=t,Xn=n,Yn.attachEvent("onpropertychange",Rs)):e==="focusout"&&_s()}function bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ar(Xn)}function Hc(e,t){if(e==="click")return Ar(t)}function Vc(e,t){if(e==="input"||e==="change")return Ar(t)}function $c(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:$c;function Jn(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Is(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Fs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ds(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qc(e){var t=Ds(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fs(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Is(n,o);var l=Is(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gc=P&&"documentMode"in document&&11>=document.documentMode,mn=null,co=null,Zn=null,fo=!1;function Os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||mn==null||mn!==Sr(r)||(r=mn,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&Jn(Zn,r)||(Zn=r,r=br(co,"onSelect"),0<r.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},po={},qs={};P&&(qs=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Ur(e){if(po[e])return po[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qs)return po[e]=t[n];return e}var As=Ur("animationend"),Bs=Ur("animationiteration"),Us=Ur("animationstart"),Ws=Ur("transitionend"),bs=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){bs.set(e,t),N(t,[e])}for(var mo=0;mo<Hs.length;mo++){var ho=Hs[mo],Kc=ho.toLowerCase(),Yc=ho[0].toUpperCase()+ho.slice(1);It(Kc,"on"+Yc)}It(As,"onAnimationEnd"),It(Bs,"onAnimationIteration"),It(Us,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(Ws,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ku(r,t,void 0,e),e.currentTarget=null}function $s(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Vs(i,a,h),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,h=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Vs(i,a,h),o=u}}}if(Nr)throw e=Vi,Nr=!1,Vi=null,e}function ke(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Qs(t,e,2,!1),n.add(r))}function go(e,t,n){var r=0;t&&(r|=4),Qs(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Wr]){e[Wr]=!0,_.forEach(function(n){n!=="selectionchange"&&(Xc.has(n)||go(n,!1,e),go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,go("selectionchange",!1,t))}}function Qs(e,t,n,r){switch(gs(t)){case 1:var i=fc;break;case 4:i=dc;break;default:i=Ji}n=i.bind(null,t,n,e),i=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vo(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Kt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Jl(function(){var h=o,k=Ui(n),w=[];e:{var y=bs.get(e);if(y!==void 0){var M=to,O=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":M=Tc;break;case"focusin":O="focus",M=io;break;case"focusout":O="blur",M=io;break;case"beforeblur":case"afterblur":M=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=hc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Mc;break;case As:case Bs:case Us:M=yc;break;case Ws:M=Rc;break;case"scroll":M=pc;break;case"wheel":M=Ic;break;case"copy":case"cut":case"paste":M=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=ws}var A=(t&4)!==0,Me=!A&&e==="scroll",p=A?y!==null?y+"Capture":null:y;A=[];for(var c=h,m;c!==null;){m=c;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=On(c,p),E!=null&&A.push(nr(c,E,m)))),Me)break;c=c.return}0<A.length&&(y=new M(y,O,null,n,k),w.push({event:y,listeners:A}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",y&&n!==Bi&&(O=n.relatedTarget||n.fromElement)&&(Kt(O)||O[wt]))break e;if((M||y)&&(y=k.window===k?k:(y=k.ownerDocument)?y.defaultView||y.parentWindow:window,M?(O=n.relatedTarget||n.toElement,M=h,O=O?Kt(O):null,O!==null&&(Me=Gt(O),O!==Me||O.tag!==5&&O.tag!==6)&&(O=null)):(M=null,O=h),M!==O)){if(A=xs,E="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=ws,E="onPointerLeave",p="onPointerEnter",c="pointer"),Me=M==null?y:yn(M),m=O==null?y:yn(O),y=new A(E,c+"leave",M,n,k),y.target=Me,y.relatedTarget=m,E=null,Kt(k)===h&&(A=new A(p,c+"enter",O,n,k),A.target=m,A.relatedTarget=Me,E=A),Me=E,M&&O)t:{for(A=M,p=O,c=0,m=A;m;m=gn(m))c++;for(m=0,E=p;E;E=gn(E))m++;for(;0<c-m;)A=gn(A),c--;for(;0<m-c;)p=gn(p),m--;for(;c--;){if(A===p||p!==null&&A===p.alternate)break t;A=gn(A),p=gn(p)}A=null}else A=null;M!==null&&Gs(w,y,M,A,!1),O!==null&&Me!==null&&Gs(w,Me,O,A,!0)}}e:{if(y=h?yn(h):window,M=y.nodeName&&y.nodeName.toLowerCase(),M==="select"||M==="input"&&y.type==="file")var U=Uc;else if(Ts(y))if(zs)U=Vc;else{U=bc;var V=Wc}else(M=y.nodeName)&&M.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=Hc);if(U&&(U=U(e,h))){Ps(w,U,n,k);break e}V&&V(e,y,h),e==="focusout"&&(V=y._wrapperState)&&V.controlled&&y.type==="number"&&Fi(y,"number",y.value)}switch(V=h?yn(h):window,e){case"focusin":(Ts(V)||V.contentEditable==="true")&&(mn=V,co=h,Zn=null);break;case"focusout":Zn=co=mn=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Os(w,n,k);break;case"selectionchange":if(Gc)break;case"keydown":case"keyup":Os(w,n,k)}var $;if(lo)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else pn?Ns(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Ss&&n.locale!=="ko"&&(pn||K!=="onCompositionStart"?K==="onCompositionEnd"&&pn&&($=vs()):(Lt=k,eo="value"in Lt?Lt.value:Lt.textContent,pn=!0)),V=br(h,K),0<V.length&&(K=new ks(K,e,null,n,k),w.push({event:K,listeners:V}),$?K.data=$:($=js(n),$!==null&&(K.data=$)))),($=Dc?Oc(e,n):qc(e,n))&&(h=br(h,"onBeforeInput"),0<h.length&&(k=new ks("onBeforeInput","beforeinput",null,n,k),w.push({event:k,listeners:h}),k.data=$))}$s(w,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=On(e,n),o!=null&&r.unshift(nr(e,o,i)),o=On(e,t),o!=null&&r.push(nr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=On(n,o),u!=null&&l.unshift(nr(n,u,a))):i||(u=On(n,o),u!=null&&l.push(nr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jc=/\r\n?/g,Zc=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(Jc,`
`).replace(Zc,"")}function Hr(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(f(425))}function Vr(){}var yo=null,xo=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,ef=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(nf)}:wo;function nf(e){setTimeout(function(){throw e})}function So(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$n(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),vt="__reactFiber$"+vn,rr="__reactProps$"+vn,wt="__reactContainer$"+vn,Eo="__reactEvents$"+vn,rf="__reactListeners$"+vn,of="__reactHandles$"+vn;function Kt(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xs(e);e!==null;){if(n=e[vt])return n;e=Xs(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[vt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(f(33))}function $r(e){return e[rr]||null}var Co=[],xn=-1;function Dt(e){return{current:e}}function we(e){0>xn||(e.current=Co[xn],Co[xn]=null,xn--)}function ge(e,t){xn++,Co[xn]=e.current,e.current=t}var Ot={},Be=Dt(Ot),$e=Dt(!1),Yt=Ot;function kn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function Qr(){we($e),we(Be)}function Js(e,t,n){if(Be.current!==Ot)throw Error(f(168));ge(Be,t),ge($e,n)}function Zs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(f(108,he(e)||"Unknown",i));return D({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Yt=Be.current,ge(Be,e),ge($e,$e.current),!0}function ea(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=Zs(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,we($e),we(Be),ge(Be,e)):we($e),ge($e,n)}var St=null,Kr=!1,No=!1;function ta(e){St===null?St=[e]:St.push(e)}function lf(e){Kr=!0,ta(e)}function qt(){if(!No&&St!==null){No=!0;var e=0,t=pe;try{var n=St;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Kr=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),rs($i,qt),i}finally{pe=t,No=!1}}return null}var wn=[],Sn=0,Yr=null,Xr=0,rt=[],it=0,Xt=null,Et=1,Ct="";function Jt(e,t){wn[Sn++]=Xr,wn[Sn++]=Yr,Yr=e,Xr=t}function na(e,t,n){rt[it++]=Et,rt[it++]=Ct,rt[it++]=Xt,Xt=e;var r=Et;e=Ct;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Et=1<<32-ut(t)+i|n<<i|r,Ct=o+e}else Et=1<<o|n<<i|r,Ct=e}function jo(e){e.return!==null&&(Jt(e,1),na(e,1,0))}function To(e){for(;e===Yr;)Yr=wn[--Sn],wn[Sn]=null,Xr=wn[--Sn],wn[Sn]=null;for(;e===Xt;)Xt=rt[--it],rt[it]=null,Ct=rt[--it],rt[it]=null,Et=rt[--it],rt[it]=null}var et=null,tt=null,Ee=!1,ft=null;function ra(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(Ee){var t=tt;if(t){var n=t;if(!ia(e,t)){if(Po(e))throw Error(f(418));t=Ft(n.nextSibling);var r=et;t&&ia(e,t)?ra(r,n):(e.flags=e.flags&-4097|2,Ee=!1,et=e)}}else{if(Po(e))throw Error(f(418));e.flags=e.flags&-4097|2,Ee=!1,et=e}}}function oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Jr(e){if(e!==et)return!1;if(!Ee)return oa(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=tt)){if(Po(e))throw la(),Error(f(418));for(;t;)ra(e,t),t=Ft(t.nextSibling)}if(oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?Ft(e.stateNode.nextSibling):null;return!0}function la(){for(var e=tt;e;)e=Ft(e.nextSibling)}function En(){tt=et=null,Ee=!1}function Mo(e){ft===null?ft=[e]:ft.push(e)}var sf=me.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sa(e){var t=e._init;return t(e._payload)}function aa(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=$t(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,m,E){return c===null||c.tag!==6?(c=wl(m,p.mode,E),c.return=p,c):(c=i(c,m),c.return=p,c)}function u(p,c,m,E){var U=m.type;return U===X?k(p,c,m.props.children,E,m.key):c!==null&&(c.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ye&&sa(U)===c.type)?(E=i(c,m.props),E.ref=or(p,c,m),E.return=p,E):(E=Ei(m.type,m.key,m.props,null,p.mode,E),E.ref=or(p,c,m),E.return=p,E)}function h(p,c,m,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Sl(m,p.mode,E),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function k(p,c,m,E,U){return c===null||c.tag!==7?(c=sn(m,p.mode,E,U),c.return=p,c):(c=i(c,m),c.return=p,c)}function w(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case T:return m=Ei(c.type,c.key,c.props,null,p.mode,m),m.ref=or(p,null,c),m.return=p,m;case Y:return c=Sl(c,p.mode,m),c.return=p,c;case ye:var E=c._init;return w(p,E(c._payload),m)}if(In(c)||G(c))return c=sn(c,p.mode,m,null),c.return=p,c;Zr(p,c)}return null}function y(p,c,m,E){var U=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return U!==null?null:a(p,c,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case T:return m.key===U?u(p,c,m,E):null;case Y:return m.key===U?h(p,c,m,E):null;case ye:return U=m._init,y(p,c,U(m._payload),E)}if(In(m)||G(m))return U!==null?null:k(p,c,m,E,null);Zr(p,m)}return null}function M(p,c,m,E,U){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(c,p,""+E,U);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case T:return p=p.get(E.key===null?m:E.key)||null,u(c,p,E,U);case Y:return p=p.get(E.key===null?m:E.key)||null,h(c,p,E,U);case ye:var V=E._init;return M(p,c,m,V(E._payload),U)}if(In(E)||G(E))return p=p.get(m)||null,k(c,p,E,U,null);Zr(c,E)}return null}function O(p,c,m,E){for(var U=null,V=null,$=c,K=c=0,Oe=null;$!==null&&K<m.length;K++){$.index>K?(Oe=$,$=null):Oe=$.sibling;var ae=y(p,$,m[K],E);if(ae===null){$===null&&($=Oe);break}e&&$&&ae.alternate===null&&t(p,$),c=o(ae,c,K),V===null?U=ae:V.sibling=ae,V=ae,$=Oe}if(K===m.length)return n(p,$),Ee&&Jt(p,K),U;if($===null){for(;K<m.length;K++)$=w(p,m[K],E),$!==null&&(c=o($,c,K),V===null?U=$:V.sibling=$,V=$);return Ee&&Jt(p,K),U}for($=r(p,$);K<m.length;K++)Oe=M($,p,K,m[K],E),Oe!==null&&(e&&Oe.alternate!==null&&$.delete(Oe.key===null?K:Oe.key),c=o(Oe,c,K),V===null?U=Oe:V.sibling=Oe,V=Oe);return e&&$.forEach(function(Qt){return t(p,Qt)}),Ee&&Jt(p,K),U}function A(p,c,m,E){var U=G(m);if(typeof U!="function")throw Error(f(150));if(m=U.call(m),m==null)throw Error(f(151));for(var V=U=null,$=c,K=c=0,Oe=null,ae=m.next();$!==null&&!ae.done;K++,ae=m.next()){$.index>K?(Oe=$,$=null):Oe=$.sibling;var Qt=y(p,$,ae.value,E);if(Qt===null){$===null&&($=Oe);break}e&&$&&Qt.alternate===null&&t(p,$),c=o(Qt,c,K),V===null?U=Qt:V.sibling=Qt,V=Qt,$=Oe}if(ae.done)return n(p,$),Ee&&Jt(p,K),U;if($===null){for(;!ae.done;K++,ae=m.next())ae=w(p,ae.value,E),ae!==null&&(c=o(ae,c,K),V===null?U=ae:V.sibling=ae,V=ae);return Ee&&Jt(p,K),U}for($=r(p,$);!ae.done;K++,ae=m.next())ae=M($,p,K,ae.value,E),ae!==null&&(e&&ae.alternate!==null&&$.delete(ae.key===null?K:ae.key),c=o(ae,c,K),V===null?U=ae:V.sibling=ae,V=ae);return e&&$.forEach(function(Bf){return t(p,Bf)}),Ee&&Jt(p,K),U}function Me(p,c,m,E){if(typeof m=="object"&&m!==null&&m.type===X&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case T:e:{for(var U=m.key,V=c;V!==null;){if(V.key===U){if(U=m.type,U===X){if(V.tag===7){n(p,V.sibling),c=i(V,m.props.children),c.return=p,p=c;break e}}else if(V.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ye&&sa(U)===V.type){n(p,V.sibling),c=i(V,m.props),c.ref=or(p,V,m),c.return=p,p=c;break e}n(p,V);break}else t(p,V);V=V.sibling}m.type===X?(c=sn(m.props.children,p.mode,E,m.key),c.return=p,p=c):(E=Ei(m.type,m.key,m.props,null,p.mode,E),E.ref=or(p,c,m),E.return=p,p=E)}return l(p);case Y:e:{for(V=m.key;c!==null;){if(c.key===V)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Sl(m,p.mode,E),c.return=p,p=c}return l(p);case ye:return V=m._init,Me(p,c,V(m._payload),E)}if(In(m))return O(p,c,m,E);if(G(m))return A(p,c,m,E);Zr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=wl(m,p.mode,E),c.return=p,p=c),l(p)):n(p,c)}return Me}var Cn=aa(!0),ua=aa(!1),ei=Dt(null),ti=null,Nn=null,_o=null;function Ro(){_o=Nn=ti=null}function Lo(e){var t=ei.current;we(ei),e._currentValue=t}function Io(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){ti=e,_o=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(_o!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(ti===null)throw Error(f(308));Nn=e,ti.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Zt=null;function Fo(e){Zt===null?Zt=[e]:Zt.push(e)}function ca(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Fo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}function da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,l===null?o=h:l.next=h,l=u;var k=e.alternate;k!==null&&(k=k.updateQueue,a=k.lastBaseUpdate,a!==l&&(a===null?k.firstBaseUpdate=h:a.next=h,k.lastBaseUpdate=u))}if(o!==null){var w=i.baseState;l=0,k=h=u=null,a=o;do{var y=a.lane,M=a.eventTime;if((r&y)===y){k!==null&&(k=k.next={eventTime:M,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var O=e,A=a;switch(y=t,M=n,A.tag){case 1:if(O=A.payload,typeof O=="function"){w=O.call(M,w,y);break e}w=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=A.payload,y=typeof O=="function"?O.call(M,w,y):O,y==null)break e;w=D({},w,y);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[a]:y.push(a))}else M={eventTime:M,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},k===null?(h=k=M,u=w):k=k.next=M,l|=y;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;y=a,a=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(k===null&&(u=w),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=w}}function pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(f(191,i));i.call(r)}}}var lr={},yt=Dt(lr),sr=Dt(lr),ar=Dt(lr);function en(e){if(e===lr)throw Error(f(174));return e}function Oo(e,t){switch(ge(ar,t),ge(sr,e),ge(yt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oi(t,e)}we(yt),ge(yt,t)}function Tn(){we(yt),we(sr),we(ar)}function ma(e){en(ar.current);var t=en(yt.current),n=Oi(t,e.type);t!==n&&(ge(sr,e),ge(yt,n))}function qo(e){sr.current===e&&(we(yt),we(sr))}var Ce=Dt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function Bo(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var oi=me.ReactCurrentDispatcher,Uo=me.ReactCurrentBatchConfig,tn=0,Ne=null,Re=null,Fe=null,li=!1,ur=!1,cr=0,af=0;function Ue(){throw Error(f(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,o){if(tn=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?df:pf,e=n(r,i),ur){o=0;do{if(ur=!1,cr=0,25<=o)throw Error(f(301));o+=1,Fe=Re=null,t.updateQueue=null,oi.current=mf,e=n(r,i)}while(ur)}if(oi.current=ui,t=Re!==null&&Re.next!==null,tn=0,Fe=Re=Ne=null,li=!1,t)throw Error(f(300));return e}function Ho(){var e=cr!==0;return cr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ne.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function lt(){if(Re===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Fe===null?Ne.memoizedState:Fe.next;if(t!==null)Fe=t,Re=e;else{if(e===null)throw Error(f(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Fe===null?Ne.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function fr(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=lt(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,h=o;do{var k=h.lane;if((tn&k)===k)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var w={lane:k,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=w,l=r):u=u.next=w,Ne.lanes|=k,nn|=k}h=h.next}while(h!==null&&h!==o);u===null?l=r:u.next=a,ct(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $o(e){var t=lt(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);ct(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ha(){}function ga(e,t){var n=Ne,r=lt(),i=t(),o=!ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,Qo(xa.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,dr(9,ya.bind(null,n,r,i,t),void 0,null),De===null)throw Error(f(349));(tn&30)!==0||va(n,t,i)}return i}function va(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ya(e,t,n,r){t.value=n,t.getSnapshot=r,ka(t)&&wa(e)}function xa(e,t,n){return n(function(){ka(t)&&wa(e)})}function ka(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function wa(e){var t=Nt(e,1);t!==null&&ht(t,e,1,-1)}function Sa(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,Ne,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ea(){return lt().memoizedState}function si(e,t,n,r){var i=xt();Ne.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(Re!==null){var l=Re.memoizedState;if(o=l.destroy,r!==null&&Wo(r,l.deps)){i.memoizedState=dr(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=dr(1|t,n,o,r)}function Ca(e,t){return si(8390656,8,e,t)}function Qo(e,t){return ai(2048,8,e,t)}function Na(e,t){return ai(4,2,e,t)}function ja(e,t){return ai(4,4,e,t)}function Ta(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pa(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,Ta.bind(null,t,e),n)}function Go(){}function za(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ma(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _a(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(ct(n,t)||(n=ss(),Ne.lanes|=n,nn|=n,e.baseState=!0),t)}function uf(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Uo.transition;Uo.transition={};try{e(!1),t()}finally{pe=n,Uo.transition=r}}function Ra(){return lt().memoizedState}function cf(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Ia(t,n);else if(n=ca(e,t,n,r),n!==null){var i=Ve();ht(n,e,r,i),Fa(n,t,r)}}function ff(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Ia(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,ct(a,l)){var u=t.interleaved;u===null?(i.next=i,Fo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ca(e,t,i,r),n!==null&&(i=Ve(),ht(n,e,r,i),Fa(n,t,r))}}function La(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Ia(e,t){ur=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fa(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ki(e,n)}}var ui={readContext:ot,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},df={readContext:ot,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Ca,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,Ta.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Sa,useDebugValue:Go,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Sa(!1),t=e[0];return e=uf.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=xt();if(Ee){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),De===null)throw Error(f(349));(tn&30)!==0||va(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ca(xa.bind(null,r,o,e),[e]),r.flags|=2048,dr(9,ya.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=De.identifierPrefix;if(Ee){var n=Ct,r=Et;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pf={readContext:ot,useCallback:za,useContext:ot,useEffect:Qo,useImperativeHandle:Pa,useInsertionEffect:Na,useLayoutEffect:ja,useMemo:Ma,useReducer:Vo,useRef:Ea,useState:function(){return Vo(fr)},useDebugValue:Go,useDeferredValue:function(e){var t=lt();return _a(t,Re.memoizedState,e)},useTransition:function(){var e=Vo(fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ha,useSyncExternalStore:ga,useId:Ra,unstable_isNewReconciler:!1},mf={readContext:ot,useCallback:za,useContext:ot,useEffect:Qo,useImperativeHandle:Pa,useInsertionEffect:Na,useLayoutEffect:ja,useMemo:Ma,useReducer:$o,useRef:Ea,useState:function(){return $o(fr)},useDebugValue:Go,useDeferredValue:function(e){var t=lt();return Re===null?t.memoizedState=e:_a(t,Re.memoizedState,e)},useTransition:function(){var e=$o(fr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:ha,useSyncExternalStore:ga,useId:Ra,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ko(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Ht(e),o=jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,i),t!==null&&(ht(t,e,i,r),ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=Ht(e),o=jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,i),t!==null&&(ht(t,e,i,r),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Ht(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(ht(t,e,r,n),ni(t,e,r))}};function Da(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(i,o):!0}function Oa(e,t,n){var r=!1,i=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=Qe(t)?Yt:Be.current,r=t.contextTypes,o=(r=r!=null)?kn(e,i):Ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Yo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=Qe(t)?Yt:Be.current,i.context=kn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ko(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),ri(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,t){try{var n="",r=t;do n+=le(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Aa(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,pl=r),Jo(e,t)},n}function Ba(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jo(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ua(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function Wa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ba(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var gf=me.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?ua(t,null,n,r):Cn(t,e.child,n,r)}function Ha(e,t,n,r,i){n=n.render;var o=t.ref;return jn(t,i),r=bo(e,t,n,r,o,i),n=Ho(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(Ee&&n&&jo(t),t.flags|=1,He(e,t,r,i),t.child)}function Va(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$a(e,t,o,r,i)):(e=Ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(l,r)&&e.ref===t.ref)return Tt(e,t,i)}return t.flags|=1,e=$t(o,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Jn(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Tt(e,t,i)}return Zo(e,t,n,r,i)}function Qa(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Mn,nt),nt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Mn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ge(Mn,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ge(Mn,nt),nt|=r;return He(e,t,i,n),t.child}function Ga(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zo(e,t,n,r,i){var o=Qe(n)?Yt:Be.current;return o=kn(t,o),jn(t,i),n=bo(e,t,n,r,o,i),r=Ho(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(Ee&&r&&jo(t),t.flags|=1,He(e,t,n,i),t.child)}function Ka(e,t,n,r,i){if(Qe(n)){var o=!0;Gr(t)}else o=!1;if(jn(t,i),t.stateNode===null)di(e,t),Oa(t,n,r),Yo(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=ot(h):(h=Qe(n)?Yt:Be.current,h=kn(t,h));var k=n.getDerivedStateFromProps,w=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==h)&&qa(t,l,r,h),At=!1;var y=t.memoizedState;l.state=y,ri(t,r,l,i),u=t.memoizedState,a!==r||y!==u||$e.current||At?(typeof k=="function"&&(Ko(t,n,k,r),u=t.memoizedState),(a=At||Da(t,n,a,r,y,u,h))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=h,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,fa(e,t),a=t.memoizedProps,h=t.type===t.elementType?a:dt(t.type,a),l.props=h,w=t.pendingProps,y=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ot(u):(u=Qe(n)?Yt:Be.current,u=kn(t,u));var M=n.getDerivedStateFromProps;(k=typeof M=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==w||y!==u)&&qa(t,l,r,u),At=!1,y=t.memoizedState,l.state=y,ri(t,r,l,i);var O=t.memoizedState;a!==w||y!==O||$e.current||At?(typeof M=="function"&&(Ko(t,n,M,r),O=t.memoizedState),(h=At||Da(t,n,h,r,y,O,u)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,O,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,O,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=O),l.props=r,l.state=O,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return el(e,t,n,r,o,i)}function el(e,t,n,r,i,o){Ga(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ea(t,n,!1),Tt(e,t,o);r=t.stateNode,gf.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Cn(t,e.child,null,o),t.child=Cn(t,null,a,o)):He(e,t,a,o),t.memoizedState=r.state,i&&ea(t,n,!0),t.child}function Ya(e){var t=e.stateNode;t.pendingContext?Js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Js(e,t.context,!1),Oo(e,t.containerInfo)}function Xa(e,t,n,r,i){return En(),Mo(i),t.flags|=256,He(e,t,n,r),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ja(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ce,i&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ci(l,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=nl(n),t.memoizedState=tl,e):rl(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vf(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=$t(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=$t(a,o):(o=sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?nl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=tl,r}return o=e.child,e=o.sibling,r=$t(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rl(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Mo(r),Cn(t,e.child,null,n),e=rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Xo(Error(f(422))),fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ci({mode:"visible",children:r.children},i,0,null),o=sn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Cn(t,e.child,null,l),t.child.memoizedState=nl(l),t.memoizedState=tl,o);if((t.mode&1)===0)return fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(f(419)),r=Xo(o,r,void 0),fi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ge||a){if(r=De,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),ht(r,e,i,-1))}return xl(),r=Xo(Error(f(421))),fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=Ft(i.nextSibling),et=t,Ee=!0,ft=null,e!==null&&(rt[it++]=Et,rt[it++]=Ct,rt[it++]=Xt,Et=e.id,Ct=e.overflow,Xt=t),t=rl(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Io(e.return,t,n)}function il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function eu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,o);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Ya(t),En();break;case 5:ma(t);break;case 1:Qe(t.type)&&Gr(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ja(e,t,n):(ge(Ce,Ce.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return eu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Qa(e,t,n)}return Tt(e,t,n)}var tu,ol,nu,ru;tu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ol=function(){},nu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(yt.current);var o=null;switch(n){case"input":i=Li(e,i),r=Li(e,r),o=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),o=[];break;case"textarea":i=Di(e,i),r=Di(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}qi(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(S.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(S.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ke("scroll",e),o||a===u||(o=[])):(o=o||[]).push(h,u))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}},ru=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(To(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Qe(t.type)&&Qr(),We(t),null;case 3:return r=t.stateNode,Tn(),we($e),we(Be),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(gl(ft),ft=null))),ol(e,t),We(t),null;case 5:qo(t);var i=en(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)nu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(f(166));return We(t),null}if(e=en(yt.current),Jr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<er.length;i++)ke(er[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Ol(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":Bl(r,o),ke("invalid",r)}qi(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),i=["children",""+a]):S.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ke("scroll",r)}switch(n){case"input":wr(r),Al(r,o,!0);break;case"textarea":wr(r),Wl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vt]=t,e[rr]=r,tu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ai(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<er.length;i++)ke(er[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":Ol(e,r),i=Li(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Bl(e,r),i=Di(e,r),ke("invalid",e);break;default:i=r}qi(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?$l(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hl(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fn(e,u):typeof u=="number"&&Fn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(S.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ke("scroll",e):u!=null&&Ie(e,o,u,l))}switch(n){case"input":wr(e),Al(e,r,!1);break;case"textarea":wr(e),Wl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?an(e,!!r.multiple,o,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)ru(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(f(166));if(n=en(ar.current),en(yt.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return We(t),null;case 13:if(we(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)la(),En(),t.flags|=98560,o=!1;else if(o=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(f(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(f(317));o[vt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else ft!==null&&(gl(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Le===0&&(Le=3):xl())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Tn(),ol(e,t),e===null&&tr(t.stateNode.containerInfo),We(t),null;case 10:return Lo(t.type._context),We(t),null;case 17:return Qe(t.type)&&Qr(),We(t),null;case 19:if(we(Ce),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)pr(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ii(e),l!==null){for(t.flags|=128,pr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>_n&&(t.flags|=128,r=!0,pr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ii(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ee)return We(t),null}else 2*ze()-o.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,pr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return yl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(f(156,t.tag))}function kf(e,t){switch(To(t),t.tag){case 1:return Qe(t.type)&&Qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),we($e),we(Be),Bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qo(t),null;case 13:if(we(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ce),null;case 4:return Tn(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return yl(),null;case 24:return null;default:return null}}var pi=!1,be=!1,wf=typeof WeakSet=="function"?WeakSet:Set,F=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function ll(e,t,n){try{n()}catch(r){je(e,t,r)}}var iu=!1;function Sf(e,t){if(yo=Lr,e=Ds(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,h=0,k=0,w=e,y=null;t:for(;;){for(var M;w!==n||i!==0&&w.nodeType!==3||(a=l+i),w!==o||r!==0&&w.nodeType!==3||(u=l+r),w.nodeType===3&&(l+=w.nodeValue.length),(M=w.firstChild)!==null;)y=w,w=M;for(;;){if(w===e)break t;if(y===n&&++h===i&&(a=l),y===o&&++k===r&&(u=l),(M=w.nextSibling)!==null)break;w=y,y=w.parentNode}w=M}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xo={focusedElem:e,selectionRange:n},Lr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var A=O.memoizedProps,Me=O.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?A:dt(t.type,A),Me);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(f(163))}}catch(E){je(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return O=iu,iu=!1,O}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ll(t,n,o)}i=i.next}while(i!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ou(e){var t=e.alternate;t!==null&&(e.alternate=null,ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[rr],delete t[Eo],delete t[rf],delete t[of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lu(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ul(e,t,n),e=e.sibling;e!==null;)ul(e,t,n),e=e.sibling}var qe=null,pt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)au(e,t,n),n=n.sibling}function au(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Tr,n)}catch{}switch(n.tag){case 5:be||zn(n,t);case 6:var r=qe,i=pt;qe=null,Ut(e,t,n),qe=r,pt=i,qe!==null&&(pt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(pt?(e=qe,n=n.stateNode,e.nodeType===8?So(e.parentNode,n):e.nodeType===1&&So(e,n),$n(e)):So(qe,n.stateNode));break;case 4:r=qe,i=pt,qe=n.stateNode.containerInfo,pt=!0,Ut(e,t,n),qe=r,pt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&ll(n,t,l),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!be&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Ut(e,t,n),be=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var i=_f.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,pt=!1;break e;case 3:qe=a.stateNode.containerInfo,pt=!0;break e;case 4:qe=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(qe===null)throw Error(f(160));au(o,l,i),qe=null,pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){je(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cu(t,e),t=t.sibling}function cu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),kt(e),r&4){try{mr(3,e,e.return),mi(3,e)}catch(A){je(e,e.return,A)}try{mr(5,e,e.return)}catch(A){je(e,e.return,A)}}break;case 1:mt(t,e),kt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(mt(t,e),kt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Fn(i,"")}catch(A){je(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ql(i,o),Ai(a,l);var h=Ai(a,o);for(l=0;l<u.length;l+=2){var k=u[l],w=u[l+1];k==="style"?$l(i,w):k==="dangerouslySetInnerHTML"?Hl(i,w):k==="children"?Fn(i,w):Ie(i,k,w,h)}switch(a){case"input":Ii(i,o);break;case"textarea":Ul(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var M=o.value;M!=null?an(i,!!o.multiple,M,!1):y!==!!o.multiple&&(o.defaultValue!=null?an(i,!!o.multiple,o.defaultValue,!0):an(i,!!o.multiple,o.multiple?[]:"",!1))}i[rr]=o}catch(A){je(e,e.return,A)}}break;case 6:if(mt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(f(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(A){je(e,e.return,A)}}break;case 3:if(mt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(A){je(e,e.return,A)}break;case 4:mt(t,e),kt(e);break;case 13:mt(t,e),kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dl=ze())),r&4&&uu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(be=(h=be)||k,mt(t,e),be=h):mt(t,e),kt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!k&&(e.mode&1)!==0)for(F=e,k=e.child;k!==null;){for(w=F=k;F!==null;){switch(y=F,M=y.child,y.tag){case 0:case 11:case 14:case 15:mr(4,y,y.return);break;case 1:zn(y,y.return);var O=y.stateNode;if(typeof O.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(A){je(r,n,A)}}break;case 5:zn(y,y.return);break;case 22:if(y.memoizedState!==null){pu(w);continue}}M!==null?(M.return=y,F=M):pu(w)}k=k.sibling}e:for(k=null,w=e;;){if(w.tag===5){if(k===null){k=w;try{i=w.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=w.stateNode,u=w.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Vl("display",l))}catch(A){je(e,e.return,A)}}}else if(w.tag===6){if(k===null)try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(A){je(e,e.return,A)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;k===w&&(k=null),w=w.return}k===w&&(k=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:mt(t,e),kt(e),r&4&&uu(e);break;case 21:break;default:mt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lu(n)){var r=n;break e}n=n.return}throw Error(f(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fn(i,""),r.flags&=-33);var o=su(e);ul(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=su(e);al(e,a,l);break;default:throw Error(f(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e,t,n){F=e,fu(e)}function fu(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pi;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||be;a=pi;var h=be;if(pi=l,(be=u)&&!h)for(F=i;F!==null;)l=F,u=l.child,l.tag===22&&l.memoizedState!==null?mu(i):u!==null?(u.return=l,F=u):mu(i);for(;o!==null;)F=o,fu(o),o=o.sibling;F=i,pi=a,be=h}du(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,F=o):du(e)}}function du(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pa(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var k=h.memoizedState;if(k!==null){var w=k.dehydrated;w!==null&&$n(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(f(163))}be||t.flags&512&&sl(t)}catch(y){je(t,t.return,y)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function pu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function mu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(u){je(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){je(t,i,u)}}var o=t.return;try{sl(t)}catch(u){je(t,o,u)}break;case 5:var l=t.return;try{sl(t)}catch(u){je(t,l,u)}}}catch(u){je(t,t.return,u)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var Cf=Math.ceil,hi=me.ReactCurrentDispatcher,cl=me.ReactCurrentOwner,st=me.ReactCurrentBatchConfig,oe=0,De=null,_e=null,Ae=0,nt=0,Mn=Dt(0),Le=0,hr=null,nn=0,gi=0,fl=0,gr=null,Ke=null,dl=0,_n=1/0,Pt=null,vi=!1,pl=null,Wt=null,yi=!1,bt=null,xi=0,vr=0,ml=null,ki=-1,wi=0;function Ve(){return(oe&6)!==0?ze():ki!==-1?ki:ki=ze()}function Ht(e){return(e.mode&1)===0?1:(oe&2)!==0&&Ae!==0?Ae&-Ae:sf.transition!==null?(wi===0&&(wi=ss()),wi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:gs(e.type)),e)}function ht(e,t,n,r){if(50<vr)throw vr=0,ml=null,Error(f(185));Un(e,n,r),((oe&2)===0||e!==De)&&(e===De&&((oe&2)===0&&(gi|=n),Le===4&&Vt(e,Ae)),Ye(e,r),n===1&&oe===0&&(t.mode&1)===0&&(_n=ze()+500,Kr&&qt()))}function Ye(e,t){var n=e.callbackNode;lc(e,t);var r=Mr(e,e===De?Ae:0);if(r===0)n!==null&&is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&is(n),t===1)e.tag===0?lf(gu.bind(null,e)):ta(gu.bind(null,e)),tf(function(){(oe&6)===0&&qt()}),n=null;else{switch(as(r)){case 1:n=$i;break;case 4:n=os;break;case 16:n=jr;break;case 536870912:n=ls;break;default:n=jr}n=Cu(n,hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hu(e,t){if(ki=-1,wi=0,(oe&6)!==0)throw Error(f(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Mr(e,e===De?Ae:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=oe;oe|=2;var o=yu();(De!==e||Ae!==t)&&(Pt=null,_n=ze()+500,on(e,t));do try{Tf();break}catch(a){vu(e,a)}while(!0);Ro(),hi.current=o,oe=i,_e!==null?t=0:(De=null,Ae=0,t=Le)}if(t!==0){if(t===2&&(i=Qi(e),i!==0&&(r=i,t=hl(e,i))),t===1)throw n=hr,on(e,0),Vt(e,r),Ye(e,ze()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Nf(i)&&(t=Si(e,r),t===2&&(o=Qi(e),o!==0&&(r=o,t=hl(e,o))),t===1))throw n=hr,on(e,0),Vt(e,r),Ye(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(f(345));case 2:ln(e,Ke,Pt);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=dl+500-ze(),10<t)){if(Mr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wo(ln.bind(null,e,Ke,Pt),t);break}ln(e,Ke,Pt);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ut(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=wo(ln.bind(null,e,Ke,Pt),r);break}ln(e,Ke,Pt);break;case 5:ln(e,Ke,Pt);break;default:throw Error(f(329))}}}return Ye(e,ze()),e.callbackNode===n?hu.bind(null,e):null}function hl(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Si(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&gl(t)),e}function gl(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~fl,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function gu(e){if((oe&6)!==0)throw Error(f(327));Rn();var t=Mr(e,0);if((t&1)===0)return Ye(e,ze()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=hl(e,r))}if(n===1)throw n=hr,on(e,0),Vt(e,t),Ye(e,ze()),n;if(n===6)throw Error(f(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Ke,Pt),Ye(e,ze()),null}function vl(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(_n=ze()+500,Kr&&qt())}}function rn(e){bt!==null&&bt.tag===0&&(oe&6)===0&&Rn();var t=oe;oe|=1;var n=st.transition,r=pe;try{if(st.transition=null,pe=1,e)return e()}finally{pe=r,st.transition=n,oe=t,(oe&6)===0&&qt()}}function yl(){nt=Mn.current,we(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ef(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(To(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qr();break;case 3:Tn(),we($e),we(Be),Bo();break;case 5:qo(r);break;case 4:Tn();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:Lo(r.type._context);break;case 22:case 23:yl()}n=n.return}if(De=e,_e=e=$t(e.current,null),Ae=nt=t,Le=0,hr=null,fl=gi=nn=0,Ke=gr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Zt=null}return e}function vu(e,t){do{var n=_e;try{if(Ro(),oi.current=ui,li){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(tn=0,Fe=Re=Ne=null,ur=!1,cr=0,cl.current=null,n===null||n.return===null){Le=1,hr=t,_e=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Ae,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,k=a,w=k.tag;if((k.mode&1)===0&&(w===0||w===11||w===15)){var y=k.alternate;y?(k.updateQueue=y.updateQueue,k.memoizedState=y.memoizedState,k.lanes=y.lanes):(k.updateQueue=null,k.memoizedState=null)}var M=Wa(l);if(M!==null){M.flags&=-257,ba(M,l,a,o,t),M.mode&1&&Ua(o,h,t),t=M,u=h;var O=t.updateQueue;if(O===null){var A=new Set;A.add(u),t.updateQueue=A}else O.add(u);break e}else{if((t&1)===0){Ua(o,h,t),xl();break e}u=Error(f(426))}}else if(Ee&&a.mode&1){var Me=Wa(l);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),ba(Me,l,a,o,t),Mo(Pn(u,a));break e}}o=u=Pn(u,a),Le!==4&&(Le=2),gr===null?gr=[o]:gr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Aa(o,u,t);da(o,p);break e;case 1:a=u;var c=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Ba(o,a,t);da(o,E);break e}}o=o.return}while(o!==null)}ku(n)}catch(U){t=U,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function yu(){var e=hi.current;return hi.current=ui,e===null?ui:e}function xl(){(Le===0||Le===3||Le===2)&&(Le=4),De===null||(nn&268435455)===0&&(gi&268435455)===0||Vt(De,Ae)}function Si(e,t){var n=oe;oe|=2;var r=yu();(De!==e||Ae!==t)&&(Pt=null,on(e,t));do try{jf();break}catch(i){vu(e,i)}while(!0);if(Ro(),oe=n,hi.current=r,_e!==null)throw Error(f(261));return De=null,Ae=0,Le}function jf(){for(;_e!==null;)xu(_e)}function Tf(){for(;_e!==null&&!Xu();)xu(_e)}function xu(e){var t=Eu(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?ku(e):_e=t,cl.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=xf(n,t,nt),n!==null){_e=n;return}}else{if(n=kf(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,_e=null;return}}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Le===0&&(Le=5)}function ln(e,t,n){var r=pe,i=st.transition;try{st.transition=null,pe=1,Pf(e,t,n,r)}finally{st.transition=i,pe=r}return null}function Pf(e,t,n,r){do Rn();while(bt!==null);if((oe&6)!==0)throw Error(f(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sc(e,o),e===De&&(_e=De=null,Ae=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,Cu(jr,function(){return Rn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=st.transition,st.transition=null;var l=pe;pe=1;var a=oe;oe|=4,cl.current=null,Sf(e,n),cu(n,e),Qc(xo),Lr=!!yo,xo=yo=null,e.current=n,Ef(n),Ju(),oe=a,pe=l,st.transition=o}else e.current=n;if(yi&&(yi=!1,bt=e,xi=i),o=e.pendingLanes,o===0&&(Wt=null),tc(n.stateNode),Ye(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=pl,pl=null,e;return(xi&1)!==0&&e.tag!==0&&Rn(),o=e.pendingLanes,(o&1)!==0?e===ml?vr++:(vr=0,ml=e):vr=0,qt(),null}function Rn(){if(bt!==null){var e=as(xi),t=st.transition,n=pe;try{if(st.transition=null,pe=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,xi=0,(oe&6)!==0)throw Error(f(331));var i=oe;for(oe|=4,F=e.current;F!==null;){var o=F,l=o.child;if((F.flags&16)!==0){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(F=h;F!==null;){var k=F;switch(k.tag){case 0:case 11:case 15:mr(8,k,o)}var w=k.child;if(w!==null)w.return=k,F=w;else for(;F!==null;){k=F;var y=k.sibling,M=k.return;if(ou(k),k===h){F=null;break}if(y!==null){y.return=M,F=y;break}F=M}}}var O=o.alternate;if(O!==null){var A=O.child;if(A!==null){O.child=null;do{var Me=A.sibling;A.sibling=null,A=Me}while(A!==null)}}F=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:mr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,F=p;break e}F=o.return}}var c=e.current;for(F=c;F!==null;){l=F;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,F=m;else e:for(l=c;F!==null;){if(a=F,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch(U){je(a,a.return,U)}if(a===l){F=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,F=E;break e}F=a.return}}if(oe=i,qt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Tr,e)}catch{}r=!0}return r}finally{pe=n,st.transition=t}}return!1}function wu(e,t,n){t=Pn(n,t),t=Aa(e,t,1),e=Bt(e,t,1),t=Ve(),e!==null&&(Un(e,1,t),Ye(e,t))}function je(e,t,n){if(e.tag===3)wu(e,e,n);else for(;t!==null;){if(t.tag===3){wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Pn(n,e),e=Ba(t,e,1),t=Bt(t,e,1),e=Ve(),t!==null&&(Un(t,1,e),Ye(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Ae&n)===n&&(Le===4||Le===3&&(Ae&130023424)===Ae&&500>ze()-dl?on(e,0):fl|=n),Ye(e,t)}function Su(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=Ve();e=Nt(e,t),e!==null&&(Un(e,t,n),Ye(e,n))}function Mf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Su(e,n)}function _f(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(f(314))}r!==null&&r.delete(t),Su(e,n)}var Eu;Eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,yf(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,Ee&&(t.flags&1048576)!==0&&na(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=kn(t,Be.current);jn(t,n),i=bo(null,t,r,e,i,n);var o=Ho();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Do(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,Yo(t,r,e,n),t=el(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&jo(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lf(r),e=dt(r,e),i){case 0:t=Zo(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Ha(null,t,r,e,n);break e;case 14:t=Va(null,t,r,dt(r.type,e),n);break e}throw Error(f(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Zo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Ka(e,t,r,i,n);case 3:e:{if(Ya(t),e===null)throw Error(f(387));r=t.pendingProps,o=t.memoizedState,i=o.element,fa(e,t),ri(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pn(Error(f(423)),t),t=Xa(e,t,r,n,i);break e}else if(r!==i){i=Pn(Error(f(424)),t),t=Xa(e,t,r,n,i);break e}else for(tt=Ft(t.stateNode.containerInfo.firstChild),et=t,Ee=!0,ft=null,n=ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=Tt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return ma(t),e===null&&zo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ko(r,i)?l=null:o!==null&&ko(r,o)&&(t.flags|=32),Ga(e,t),He(e,t,l,n),t.child;case 6:return e===null&&zo(t),null;case 13:return Ja(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Ha(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ge(ei,r._currentValue),r._currentValue=l,o!==null)if(ct(o.value,l)){if(o.children===i.children&&!$e.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=jt(-1,n&-n),u.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var k=h.pending;k===null?u.next=u:(u.next=k.next,k.next=u),h.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Io(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(f(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Io(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=ot(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),Va(e,t,r,i,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),di(e,t),t.tag=1,Qe(r)?(e=!0,Gr(t)):e=!1,jn(t,n),Oa(t,r,i),Yo(t,r,i,n),el(null,t,r,!0,e,n);case 19:return eu(e,t,n);case 22:return Qa(e,t,n)}throw Error(f(156,t.tag))};function Cu(e,t){return rs(e,t)}function Rf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Rf(e,t,n,r)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===re)return 11;if(e===ie)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")kl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case X:return sn(n.children,i,o,t);case ue:l=8,i|=8;break;case ce:return e=at(12,n,t,i|2),e.elementType=ce,e.lanes=o,e;case fe:return e=at(13,n,t,i),e.elementType=fe,e.lanes=o,e;case Pe:return e=at(19,n,t,i),e.elementType=Pe,e.lanes=o,e;case xe:return Ci(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:l=10;break e;case Z:l=9;break e;case re:l=11;break e;case ie:l=14;break e;case ye:l=16,r=null;break e}throw Error(f(130,e==null?e:typeof e,""))}return t=at(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=at(22,e,r,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Sl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function If(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function El(e,t,n,r,i,o,l,a,u){return e=new If(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function Ff(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return Ot;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(f(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(f(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Zs(e,n,t)}return t}function ju(e,t,n,r,i,o,l,a,u){return e=El(n,r,!0,e,i,o,l,a,u),e.context=Nu(null),n=e.current,r=Ve(),i=Ht(n),o=jt(r,i),o.callback=t??null,Bt(n,o,i),e.current.lanes=i,Un(e,i,r),Ye(e,r),e}function Ni(e,t,n,r){var i=t.current,o=Ve(),l=Ht(i);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,l),e!==null&&(ht(e,i,l,o),ni(e,i,l)),l}function ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cl(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}function Df(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nl(e){this._internalRoot=e}Ti.prototype.render=Nl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));Ni(e,t,null,null)},Ti.prototype.unmount=Nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Ni(null,e,null,null)}),t[wt]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&ms(e)}};function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Of(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=ji(l);o.call(h)}}var l=ju(t,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=l,e[wt]=l.current,tr(e.nodeType===8?e.parentNode:e),rn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=ji(u);a.call(h)}}var u=El(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=u,e[wt]=u.current,tr(e.nodeType===8?e.parentNode:e),rn(function(){Ni(t,u,n,r)}),u}function zi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ji(l);a.call(u)}}Ni(t,l,e,i)}else l=Of(n,t,e,i,r);return ji(l)}us=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Ki(t,n|1),Ye(t,ze()),(oe&6)===0&&(_n=ze()+500,qt()))}break;case 13:rn(function(){var r=Nt(e,1);if(r!==null){var i=Ve();ht(r,e,1,i)}}),Cl(e,1)}},Yi=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ve();ht(t,e,134217728,n)}Cl(e,134217728)}},cs=function(e){if(e.tag===13){var t=Ht(e),n=Nt(e,t);if(n!==null){var r=Ve();ht(n,e,t,r)}Cl(e,t)}},fs=function(){return pe},ds=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}},Wi=function(e,t,n){switch(t){case"input":if(Ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$r(r);if(!i)throw Error(f(90));Dl(r),Ii(r,i)}}}break;case"textarea":Ul(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}},Yl=vl,Xl=rn;var qf={usingClientEntryPoint:!1,Events:[ir,yn,$r,Gl,Kl,vl]},yr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ts(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Tr=Mi.inject(Af),gt=Mi}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf,Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jl(t))throw Error(f(200));return Ff(e,t,null,n)},Xe.createRoot=function(e,t){if(!jl(e))throw Error(f(299));var n=!1,r="",i=Pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=El(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Nl(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=ts(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return rn(e)},Xe.hydrate=function(e,t,n){if(!Pi(t))throw Error(f(200));return zi(null,e,t,!0,n)},Xe.hydrateRoot=function(e,t,n){if(!jl(e))throw Error(f(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Pu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ju(t,null,e,1,n??null,i,!1,o,l),e[wt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ti(t)},Xe.render=function(e,t,n){if(!Pi(t))throw Error(f(200));return zi(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(f(40));return e._reactRootContainer?(rn(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},Xe.unstable_batchedUpdates=vl,Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(f(200));if(e==null||e._reactInternals===void 0)throw Error(f(38));return zi(e,t,n,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Ou;function Gf(){if(Ou)return zl.exports;Ou=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(v){console.error(v)}}return g(),zl.exports=Qf(),zl.exports}var qu;function Kf(){if(qu)return _i;qu=1;var g=Gf();return _i.createRoot=g.createRoot,_i.hydrateRoot=g.hydrateRoot,_i}var Yf=Kf();const Xf=Wu(Yf),Au={years:[{year:2011,questions:[{qn:1,units:[5],chapters:[16],topics:["Marketing","Branding"],summary:"Own-brand products + reasons retailers use them"},{qn:2,units:[4],chapters:[11],topics:["Accounting Ratios","ROI"],summary:"Return on Investment (ROI) calculation"},{qn:3,units:[3],chapters:[8],topics:["Management Activities","Meetings"],summary:"Types of meetings + meetings as method of communication"},{qn:4,units:[3],chapters:[5],topics:["Management","Span of Control"],summary:"Term span of control + factors affecting width"},{qn:5,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Invisible imports + Balance of Trade/Payments calculation"},{qn:6,units:[6],chapters:[20],topics:["Economy & Government","Government"],summary:"Ways Government could encourage business activity in Ireland"},{qn:7,units:[1],chapters:[3],topics:["Industrial Relations","Industrial Action"],summary:"Two types of industrial action available to employees"},{qn:8,units:[6,7],chapters:[20,23],topics:["Economy & Government","Mixed Statements"],summary:"True/False: IDA, privatisation, code of ethics, environment, currency"},{qn:9,units:[4],chapters:[13],topics:["Finance","Short-term Finance"],summary:"Term short-term finance + business situation"},{qn:10,units:[4],chapters:[10],topics:["Change Management"],summary:"Strategies management could use to help employees adapt to change"}]},{year:2012,questions:[{qn:1,units:[2],chapters:[4],topics:["Enterprise"],summary:"Term enterprise + understanding"},{qn:2,units:[1,2,6],chapters:[3,4,18],topics:["Match Terms","Mixed"],summary:"Match: Stakeholder, Ultra Vires, Lobbying, Legality of Form, Labour Court"},{qn:3,units:[4],chapters:[12],topics:["Insurance & Tax","Tax"],summary:"Tax rates vs tax credits"},{qn:4,units:[3],chapters:[5],topics:["Management","Delegation"],summary:"Term delegation + benefits within a business"},{qn:5,units:[3],chapters:[8],topics:["Management Activities","Organisation Structure"],summary:"Features of a matrix organisation structure"},{qn:6,units:[4,6],chapters:[12,18,20],topics:["Acronyms","Mixed"],summary:"Acronyms: R&D / PLC / IBEC / EGM / DIRT"},{qn:7,units:[5],chapters:[17],topics:["Business Expansion","Merger"],summary:"Distinguish merger and franchise as methods of business expansion"},{qn:8,units:[6],chapters:[19],topics:["Categories of Industry","Primary Sector"],summary:"Term primary sector + current trends affecting it"},{qn:9,units:[7],chapters:[23],topics:["International Trade","Trading Bloc"],summary:"Term Trading Bloc"},{qn:10,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even chart, BEP, Profit at forecast sales, Margin of Safety"}]},{year:2013,questions:[{qn:1,units:[6],chapters:[18],topics:["Business Organisations","Private Limited Company"],summary:"Two characteristics of a private limited company"},{qn:2,units:[1],chapters:[2],topics:["Consumer Conflict","NCA"],summary:"NCA (National Consumer Agency) + functions"},{qn:3,units:[4],chapters:[11],topics:["Accounting Ratios","Liquidity"],summary:"Current Ratio calculation + comment on liquidity"},{qn:4,units:[4,6],chapters:[11,18,19],topics:["Mixed Statements"],summary:"True/False: batch production, hire purchase, cash flow, sole trader, gearing"},{qn:5,units:[3],chapters:[8],topics:["Management Activities","ICT"],summary:"Implications for management when company develops own website"},{qn:6,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Fixed Costs vs Variable Costs in break-even analysis"},{qn:7,units:[4],chapters:[9],topics:["HRM","Constructive Dismissal"],summary:"Term Constructive Dismissal"},{qn:8,units:[6],chapters:[20],topics:["Match Terms","Economic Indicators"],summary:"Match: Exchange Rate, Interest Rate, Taxation, Economic Growth, Inflation"},{qn:9,units:[7],chapters:[24],topics:["European Union","EU Law"],summary:"Distinguish Directive vs Regulation as legislative instruments"},{qn:10,units:[3],chapters:[6],topics:["Leadership & Motivation","McGregor"],summary:"Implications of McGregor's Theory X approach to managing"}]},{year:2014,questions:[{qn:1,units:[6],chapters:[21],topics:["Community Development","Local Business"],summary:"Two benefits of local business for a local community"},{qn:2,units:[5],chapters:[14],topics:["Match Terms","Identifying Opportunities"],summary:"Match: Idea Generation, Concept Development, Product Launch, Prototype, Feasibility"},{qn:3,units:[7],chapters:[23],topics:["International Trade","Protectionism","WTO"],summary:"WTO + understanding the term protectionism"},{qn:4,units:[1],chapters:[2],topics:["Consumer Conflict","Data Protection"],summary:"Two rights of a Data Subject under Data Protection Acts 1988 and 2003"},{qn:5,units:[4,6],chapters:[13,20],topics:["Finance","Interest Rate"],summary:"Term interest rate + economic impacts of low interest rates"},{qn:6,units:[4,6,7],chapters:[9,12,20,23],topics:["Acronyms","Mixed"],summary:"Acronyms: FDI / HRM / USC / ECB / CGT"},{qn:7,units:[3,4],chapters:[6,10],topics:["Leadership & Motivation","Change Management"],summary:"Leadership style + managing change"},{qn:8,units:[1],chapters:[3],topics:["Industrial Relations","LRC"],summary:"Two functions of the Labour Relations Commission"},{qn:9,units:[5],chapters:[17],topics:["Business Expansion","Strategic Alliance"],summary:"Strategic alliance vs takeover as methods of business expansion"},{qn:10,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even calculation: TR, TC, Profit, BEP"}]},{year:2015,questions:[{qn:1,units:[3],chapters:[5],topics:["Management","Span of Control"],summary:"Term span of control + situation where narrow span is appropriate"},{qn:2,units:[4],chapters:[12],topics:["Insurance & Tax","PAYE"],summary:"PAYE + features of the PAYE tax system"},{qn:3,units:[4],chapters:[11],topics:["Accounting Ratios","Net Profit Margin"],summary:"Net Profit Percentage (Margin) calculation + decisions"},{qn:4,units:[6],chapters:[19],topics:["Categories of Industry","Mixed Statements"],summary:"True/False: factors of production, secondary/service industries, agriculture"},{qn:5,units:[5],chapters:[17],topics:["Business Expansion","Merger"],summary:"Difference between a merger and a strategic alliance"},{qn:6,units:[4],chapters:[9],topics:["HRM","Teamwork","Tuckman"],summary:"Tuckman team development: storming and norming"},{qn:7,units:[7],chapters:[23],topics:["International Trade","Exchange Rate"],summary:"Term exchange rate + risks for businesses in Ireland"},{qn:8,units:[6],chapters:[18],topics:["Match Terms","Business Organisations"],summary:"Match: PLC, Franchise, Co-operative, Sole Trader, State-owned enterprise"},{qn:9,units:[1],chapters:[3],topics:["Industrial Relations","Picketing"],summary:"Primary vs secondary picketing as types of industrial action"},{qn:10,units:[2],chapters:[4],topics:["Enterprise","Intrapreneurship"],summary:"Methods of promoting intrapreneurship"}]},{year:2016,questions:[{qn:1,units:[4,6],chapters:[11,18,20],topics:["Acronyms","Mixed"],summary:"Acronyms: IDA / PLC / SME / ROI / CEO"},{qn:2,units:[1],chapters:[3],topics:["Industrial Relations","Trade Dispute"],summary:"Term trade dispute + types of official industrial action"},{qn:3,units:[6],chapters:[20],topics:["Mixed Statements","Economic Indicators"],summary:"True/False: inflation, currency, unemployment, interest rates, recession"},{qn:4,units:[4],chapters:[12],topics:["Match Terms","Insurance"],summary:"Match: Insurable Interest, Average Clause, Subrogation, Contribution, Indemnity"},{qn:5,units:[4],chapters:[11],topics:["Accounting Ratios","Gearing"],summary:"Debt/Equity Ratio (Gearing) calculation"},{qn:6,units:[6],chapters:[19],topics:["Categories of Industry","Job Production"],summary:"Two features of job production"},{qn:7,units:[7],chapters:[23],topics:["International Trade","Balance of Trade"],summary:"Visible exports/imports + Balance of Trade + invisible exports"},{qn:8,units:[5],chapters:[16],topics:["Marketing","Product Life Cycle"],summary:"Methods of extending a product life cycle"},{qn:9,units:[4],chapters:[12],topics:["Insurance & Tax","Tax"],summary:"Distinguish VAT and Corporation Tax"},{qn:10,units:[7],chapters:[24],topics:["European Union"],summary:"EU institutions in decision making (Commission, Parliament, Council)"}]},{year:2017,questions:[{qn:1,units:[6],chapters:[18],topics:["Match Terms","Contract Law"],summary:"Match: Specific Performance, Legality of form, Performance, Consideration, Capacity"},{qn:2,units:[6],chapters:[18],topics:["Mixed Statements","Business Organisations"],summary:"Multi-choice: Sole Trader, PLC, Franchise, Co-op, Partnership"},{qn:3,units:[1,6],chapters:[3,18],topics:["Acronyms","Mixed"],summary:"Acronyms: IBEC / ICTU / ISME / IFA / CAI"},{qn:4,units:[4],chapters:[12],topics:["Mixed Statements","Tax"],summary:"True/False: Customs Duty, Corporation Tax, P45, Tax Credits, CAT"},{qn:5,units:[4],chapters:[13],topics:["Finance","Cash Flow"],summary:"Cash flow forecast"},{qn:6,units:[4],chapters:[13],topics:["Finance","Bad Debts"],summary:"Methods to minimise bad debts"},{qn:7,units:[7],chapters:[25],topics:["Global Business"],summary:"Term Global Business + examples"},{qn:8,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even chart + Margin of Safety"},{qn:9,units:[7],chapters:[24],topics:["European Union"],summary:"European Commission role + other EU institutions"},{qn:10,units:[6],chapters:[20],topics:["Economy & Government","Inflation"],summary:"Inflation rate vs interest rate"}]},{year:2018,questions:[{qn:1,units:[1],chapters:[2],topics:["Consumer Conflict","SGSS"],summary:"Sale of Goods and Supply of Services Act 1980 fill-in-the-blanks"},{qn:2,units:[3,6],chapters:[8,18],topics:["Management Activities","Organisation Structure"],summary:"Implications of changing from functional to matrix organisation structure"},{qn:3,units:[5],chapters:[17],topics:["Mixed Statements","Business Expansion"],summary:"Multi-choice: acquisition, merger, alliance, debt capital, economies of scale"},{qn:4,units:[4],chapters:[13],topics:["Match Terms","Finance"],summary:"Match: Leasing, Hire Purchase, Overdraft, Grant, Trade Credit"},{qn:5,units:[7],chapters:[23],topics:["International Trade","Balance of Trade"],summary:"Visible trade bar chart + import substitution"},{qn:6,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even table calculations"},{qn:7,units:[4],chapters:[13],topics:["Finance","Working Capital"],summary:"Term working capital + problems for start-up business"},{qn:8,units:[6],chapters:[20],topics:["Economy & Government","Privatisation"],summary:"Government policies of privatisation and deregulation"},{qn:9,units:[7],chapters:[24],topics:["Mixed Statements","European Union"],summary:"True/False: EU Commission, Eurozone, Directive, Council, co-decision"},{qn:10,units:[4],chapters:[9],topics:["HRM","Training"],summary:"Distinguish induction training and staff development"}]},{year:2019,questions:[{qn:1,units:[3,4],chapters:[5,9],topics:["Match Terms","HRM"],summary:"Match: Job Description, Norming, Manpower Planning, Person Specification, Chain of command"},{qn:2,units:[6],chapters:[19],topics:["Categories of Industry"],summary:"Three categories of industry + occupation example"},{qn:3,units:[4],chapters:[12],topics:["Acronyms","Tax"],summary:"Acronyms: PAYE / USC / PRSI / DIRT / CGT"},{qn:4,units:[6,7],chapters:[20,24],topics:["Mixed Statements","Economy & Government"],summary:"Multi-choice: inflation, ECB, Euro, PAYE, employment"},{qn:5,units:[6],chapters:[20],topics:["Economy & Government","Minimum Wage"],summary:"Term National Minimum Wage + economic impact of increase"},{qn:6,units:[3],chapters:[5],topics:["Management","Span of Control"],summary:"Problems from too wide a span of control"},{qn:7,units:[7],chapters:[23],topics:["International Trade","Balance of Trade"],summary:"Ireland's Trade in Goods infographic + Balance of Trade"},{qn:8,units:[5],chapters:[16],topics:["Marketing","Niche Market"],summary:"Term niche market + example"},{qn:9,units:[2],chapters:[4],topics:["Enterprise"],summary:"Co-operative relationship between entrepreneur and investor"},{qn:10,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even chart + profit calculation + limitation of break-even"}]},{year:2020,questions:[{qn:1,units:[5],chapters:[16],topics:["Match Terms","Marketing","Pricing"],summary:"Match: Premium / Penetration / Loss Leader / Price Skimming / Price Discrimination"},{qn:2,units:[6],chapters:[18,20,21],topics:["Acronyms","Mixed"],summary:"Acronyms: CEO / CRO / LEO / IDA / CCPC"},{qn:3,units:[6],chapters:[19],topics:["Categories of Industry","Tertiary Sector"],summary:"Term tertiary sector + trends in Ireland (aviation leasing)"},{qn:4,units:[4],chapters:[12],topics:["Mixed Statements","Tax"],summary:"Multi-choice: CGT, USC, tax credits, VAT, BIK"},{qn:5,units:[7],chapters:[24],topics:["European Union","GDPR"],summary:"GDPR + EU Regulation + EU institution proposing legislation"},{qn:6,units:[6],chapters:[19],topics:["Categories of Industry","Indigenous Firm"],summary:"Term indigenous firm + challenges"},{qn:7,units:[6],chapters:[19],topics:["Mixed Statements","Categories of Industry"],summary:"True/False: EDI, JIT, Lead Time, economies of scale, optimum stock"},{qn:8,units:[4],chapters:[9],topics:["HRM","Dismissal"],summary:"Distinguish fair dismissal and constructive dismissal"},{qn:9,units:[5],chapters:[16],topics:["Marketing","Product Life Cycle"],summary:"Product Life Cycle stages (Apple products) + extending the cycle"},{qn:10,units:[4],chapters:[12],topics:["Insurance & Tax","Insurance"],summary:"Insurance compensation calculation (Allianz home insurance)"}]},{year:2021,questions:[{qn:1,units:[5],chapters:[17],topics:["Match Terms","Business Expansion"],summary:"Match: Merger / Economies of Scale / Acquisition / Diversification / Strategic Alliance"},{qn:2,units:[6,7],chapters:[19,23],topics:["Acronyms","Mixed"],summary:"Acronyms: WTO / CAM / EDI / CAD / JIT"},{qn:3,units:[5],chapters:[17],topics:["Business Expansion","Franchising"],summary:"Term franchising (Camile Thai) + benefit as start-up option"},{qn:4,units:[4],chapters:[12],topics:["Mixed Statements","Insurance"],summary:"Multi-choice: policy excess, actuary/assessor, indemnity, loadings, subrogation"},{qn:5,units:[6],chapters:[20,21],topics:["Economy & Government","State Agencies"],summary:"State agencies (LEO/Enterprise Ireland/Failte Ireland/IDA)"},{qn:6,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Term invisible imports + impact of decrease on Balance of Payments"},{qn:7,units:[3],chapters:[5],topics:["Management","Span of Control"],summary:"Distinguish chain of command and span of control"},{qn:8,units:[4],chapters:[11],topics:["Accounting Ratios","ROI"],summary:"ROI calculation + analysis of change"},{qn:9,units:[2,3],chapters:[4,5],topics:["Enterprise","Management"],summary:"Distinguish enterprise and management + example in school"},{qn:10,units:[6],chapters:[20],topics:["Economy & Government","Interest Groups"],summary:"Role of interest groups in business with examples"},{qn:11,units:[7],chapters:[25],topics:["Global Business","MNCs"],summary:"Reasons MNCs (Pfizer) locate in Ireland"},{qn:12,units:[6],chapters:[20],topics:["Economy & Government","Privatisation"],summary:"Advantages of privatisation for the Irish economy"}]},{year:2022,questions:[{qn:1,units:[6],chapters:[20],topics:["Match Terms","Economic Indicators"],summary:"Match: GDP / Recession / Interest Rate / Exchange Rate / Unemployment"},{qn:2,units:[6,7],chapters:[20,23,24],topics:["Acronyms","Mixed"],summary:"Acronyms: WTO / EMU / IDA / FDI / CAP"},{qn:3,units:[5],chapters:[16],topics:["Marketing","Product Life Cycle"],summary:"Term Product Life Cycle + extension methods (Coca Cola)"},{qn:4,units:[3],chapters:[6],topics:["Mixed Statements","Maslow","McGregor"],summary:"Multi-choice: Maslow, McGregor, workplace friendships, staff turnover, self-actualisation"},{qn:5,units:[3,7],chapters:[7,24],topics:["Communication","GDPR"],summary:"Draft email about GDPR rights for customers"},{qn:6,units:[6],chapters:[20],topics:["Economy & Government","Inflation"],summary:"Inflation + how Consumer Price Index works"},{qn:7,units:[3],chapters:[8],topics:["Mixed Statements","Management Activities"],summary:"True/False on meetings: treasurer, disadvantage, EGM, AOB, quorum"},{qn:8,units:[7],chapters:[23],topics:["International Trade","Protectionism"],summary:"Term protectionism + protectionist measures"},{qn:9,units:[4],chapters:[13],topics:["Finance","Break-even"],summary:"Break-even calculations: TR, TC, profit, BEP"},{qn:10,units:[7],chapters:[23],topics:["International Trade","Imports"],summary:"Distinguish visible imports and import substitution"},{qn:11,units:[4],chapters:[13],topics:["Finance","Bad Debts"],summary:"Two ways to minimise bad debts"},{qn:12,units:[4],chapters:[12],topics:["Insurance & Tax","PAYE"],summary:"PAYE calculation with tax credits"}]},{year:2023,questions:[{qn:1,units:[6],chapters:[19],topics:["Categories of Industry","Indigenous Firm"],summary:"Term indigenous firm (InterSport Elverys) + challenges"},{qn:2,units:[4,6],chapters:[11,18,19],topics:["Acronyms","Mixed"],summary:"Acronyms: TQM / ISME / JIT / EDI / ROI"},{qn:3,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Term invisible exports + Balance of Trade/Payments calculation"},{qn:4,units:[7],chapters:[24],topics:["Match Terms","European Union"],summary:"Match: ECB / Court of Auditors / European Parliament / Council / Commission"},{qn:5,units:[3,6],chapters:[8,18],topics:["Management Activities","Organisation Structure"],summary:"Functional organisational structure for manufacturing firm"},{qn:6,units:[5],chapters:[16],topics:["Marketing","Pricing"],summary:"Distinguish penetration pricing and price skimming"},{qn:7,units:[4],chapters:[11],topics:["Accounting Ratios","Liquidity"],summary:"Term liquidity + Acid Test Ratio calculation"},{qn:8,units:[6],chapters:[20],topics:["Economy & Government","Minimum Wage"],summary:"Term National Minimum Wage + economic impact of increase"},{qn:9,units:[4,5,6],chapters:[12,16,19],topics:["Mixed Statements"],summary:"True/False: PR (Aviva), Global Product (McDonalds), USP, CGT, Q Mark"},{qn:10,units:[2],chapters:[4],topics:["Enterprise","Entrepreneur"],summary:"Characteristics/skills associated with entrepreneurs"},{qn:11,units:[1,7],chapters:[2,24],topics:["Consumer Conflict","GDPR"],summary:"GDPR / Data Protection Commission fines + data subject rights"},{qn:12,units:[3],chapters:[7,8],topics:["Communication","Meetings"],summary:"Types of meetings + meetings as method of communication"}]},{year:2024,questions:[{qn:1,units:[6],chapters:[18],topics:["Business Organisations"],summary:"Match types: Partnership/Co-op/Franchise/Merger/Takeover"},{qn:2,units:[1,6,7],chapters:[18,23,24],topics:["Acronyms","Business Organisations"],summary:"Acronyms: IDA / CEO / ECB / CRO / WTO"},{qn:3,units:[6],chapters:[21],topics:["Community Development"],summary:"Term Community Development + service offered"},{qn:4,units:[6],chapters:[20],topics:["Economic Indicators","Economy & Government"],summary:"Multi-choice: economic growth / employment / interest rates / taxation / euro"},{qn:5,units:[7],chapters:[24],topics:["European Union"],summary:"Two functions of the European Parliament"},{qn:6,units:[7],chapters:[23],topics:["International Trade"],summary:"Distinguish between Embargo and Quota"},{qn:7,units:[3],chapters:[8],topics:["Management Activities","Planning"],summary:"True/False on planning of global companies (J&J, Netflix, RTÉ, DHL, Nintendo)"},{qn:8,units:[3],chapters:[8],topics:["Management Activities","Management Control"],summary:"Two types of management control"},{qn:9,units:[4],chapters:[12],topics:["Insurance & Tax","Insurance"],summary:"Role of an assessor + insurance calculation"},{qn:10,units:[5],chapters:[16],topics:["Marketing","Public Relations"],summary:"Three public relations methods used by businesses"},{qn:11,units:[1],chapters:[3],topics:["Industrial Relations"],summary:"Joint Labour Committee"},{qn:12,units:[4],chapters:[9],topics:["HRM","Teamwork"],summary:"Teamwork + four stages of team development (Tuckman)"}]},{year:2025,questions:[{qn:1,units:[7],chapters:[24],topics:["European Union"],summary:"Match EU institutions (ECB, Court of Auditors, Parliament, Council, Commission)"},{qn:2,units:[7],chapters:[25],topics:["Global Business"],summary:"Term Global Business + two examples"},{qn:3,units:[1,6,7],chapters:[3,20,23],topics:["Acronyms","International Trade"],summary:"Acronyms: DAC / MNC / IBEC / ICTU / CAP"},{qn:4,units:[6],chapters:[20],topics:["Economic Indicators","Economy & Government"],summary:"Multi-choice: economic growth / employment / interest rates / taxation / euro"},{qn:5,units:[4],chapters:[12],topics:["Insurance & Tax","Tax"],summary:"Capital Gains Tax vs Capital Acquisitions Tax"},{qn:6,units:[6],chapters:[22],topics:["Social Responsibility","Business Ethics"],summary:"Methods to encourage ethical business practice"},{qn:7,units:[4],chapters:[11,13],topics:["Accounting Ratios","Finance"],summary:"Term Gearing + Debt/Equity Ratio calculation"},{qn:8,units:[3,6],chapters:[8,18],topics:["Business Organisations","Management Activities"],summary:"Benefits of matrix organisation structure"},{qn:9,units:[7],chapters:[23],topics:["International Trade","Balance of Payments"],summary:"Import substitution + Balance of Payments"},{qn:10,units:[5],chapters:[16],topics:["Marketing","Advertising"],summary:"Factors when choosing an advertising medium"},{qn:11,units:[6],chapters:[20],topics:["Economic Indicators","Inflation"],summary:"Term Inflation + two causes"},{qn:12,units:[6],chapters:[21],topics:["Community Development","Local Enterprise Office"],summary:"Two functions of a Local Enterprise Office (LEO)"}]}],units:[{id:1,name:"People in Business",color:"#E54B3B"},{id:2,name:"Enterprise",color:"#F4B83C"},{id:3,name:"Managing 1",color:"#7CA9C9"},{id:4,name:"Managing 2",color:"#2E5E48"},{id:5,name:"Business in Action",color:"#C77DA0"},{id:6,name:"Domestic Environment",color:"#5B4FB0"},{id:7,name:"International Environment",color:"#D9663E"}]},Bu=[{bg:"#F4B83C",ink:"#1F1B17"},{bg:"#E54B3B",ink:"#FBF7EE"},{bg:"#2E5E48",ink:"#FBF7EE"},{bg:"#F2D6CC",ink:"#1F1B17"},{bg:"#7CA9C9",ink:"#1F1B17"}];function Rl(g,v){return`q-status:${g}-${v}`}function Jf(){const[g,v]=J.useState({}),[f,_]=J.useState(!1);return J.useEffect(()=>{try{const P={};for(let C=0;C<localStorage.length;C++){const L=localStorage.key(C);L&&L.startsWith("q-status:")&&(P[L]=localStorage.getItem(L))}v(P),_(!0)}catch{_(!0)}},[]),{get:(P,C)=>g[Rl(P,C)]||null,set:(P,C,L)=>{const B=Rl(P,C);v(I=>{const W={...I};return L==null?delete W[B]:W[B]=L,W});try{L==null?localStorage.removeItem(B):localStorage.setItem(B,L)}catch{}},stats:P=>{let C=0,L=0;for(const B of P){const I=g[Rl(B.year,B.qn)];I==="got-it"?C++:I==="review"&&L++}return{got:C,rev:L,unseen:P.length-C-L,total:P.length}},loaded:f}}const Ll="https://doles05.github.io/lc-business-sq/",Il={},Ln={};function bu(g){if(Il[g])return Promise.resolve(Il[g]);if(Ln[g])return Ln[g];if(Ll.startsWith("__")||Ll.includes("yourusername"))return Promise.reject(new Error("DATA_BASE_URL not configured — see HOSTING_README to set up GitHub Pages and replace the placeholder."));const v=`${Ll}${g}.json`;return Ln[g]=fetch(v).then(f=>{if(!f.ok)throw new Error(`HTTP ${f.status} for ${g}`);return f.json()}).then(f=>(Il[g]=f,delete Ln[g],f)).catch(f=>{throw delete Ln[g],f}),Ln[g]}function Zf(g){const[v,f]=J.useState({ready:!1,error:null,dataByYear:{}}),_=g.join(",");return J.useEffect(()=>{let S=!1;return f(N=>({...N,ready:!1,error:null})),Promise.all(g.map(N=>bu(N).catch(b=>({__error:b,year:N})))).then(N=>{if(S)return;const b={};let P=null;N.forEach(C=>{C&&C.__error?P||(P=C.__error):C&&C.year&&(b[C.year]=C)}),f({ready:!0,error:P,dataByYear:b})}),()=>{S=!0}},[_]),v}function ed(){var ce;const[g,v]=J.useState("home"),[f,_]=J.useState(null),[S,N]=J.useState(null),[b,P]=J.useState(0),[C,L]=J.useState(null),[B,I]=J.useState([]),W=Jf(),q=J.useMemo(()=>[...Au.years].sort((R,Z)=>Z.year-R.year),[]),Q=Au.units||[],j=J.useMemo(()=>q.map(R=>R.year),[q]);J.useEffect(()=>{j.forEach(R=>{bu(R).catch(()=>{})})},[j]);const ve=Zf(g==="year"&&f?[f]:j),Te=(R,Z)=>{if(R&&R.q&&R.s)return{...R,year:Z};const re=ve.dataByYear[Z];if(!re)return null;const fe=re.questions.find(Pe=>Pe.qn===R.qn);return fe?{...R,...fe,year:Z}:null},Ie=q.find(R=>R.year===f),me=J.useMemo(()=>{const R=[];return q.forEach(Z=>{Z.questions.forEach(re=>R.push({...re,year:Z.year}))}),R},[q]),T=R=>me.filter(Z=>(Z.units||[]).includes(R)),Y=R=>{const Z={};R.forEach(ie=>{(Z[ie.year]=Z[ie.year]||[]).push(ie)}),Object.values(Z).forEach(ie=>{for(let ye=ie.length-1;ye>0;ye--){const xe=Math.floor(Math.random()*(ye+1));[ie[ye],ie[xe]]=[ie[xe],ie[ye]]}});const re=Object.keys(Z);for(let ie=re.length-1;ie>0;ie--){const ye=Math.floor(Math.random()*(ie+1));[re[ie],re[ye]]=[re[ye],re[ie]]}const fe=[];let Pe=!0;for(;Pe;){Pe=!1;for(const ie of re)Z[ie].length&&(fe.push(Z[ie].shift()),Pe=!0)}return fe},X=(R,Z={})=>{let re=R.length===0||R.length===Q.length?[...me]:me.filter(ie=>(ie.units||[]).some(ye=>R.includes(ye)));Z.reviewOnly&&(re=re.filter(ie=>W.get(ie.year,ie.qn)==="review"));const fe=Y(re),Pe=fe.slice(0,Math.min(12,fe.length));L({questions:Pe,current:0}),v("mock")},ue=(R={})=>{let Z=[...me];R.reviewOnly&&(Z=Z.filter(re=>W.get(re.year,re.qn)==="review")),I(Y(Z)),P(0),v("shuffle")};return s.jsxs("div",{className:"app",children:[s.jsx(gd,{}),s.jsx(td,{view:g,year:f,unitName:g==="unit"&&S?(ce=Q.find(R=>R.id===S))==null?void 0:ce.name:null,onHome:()=>{v("home"),_(null),N(null),L(null)}}),s.jsxs("main",{className:"main",children:[g!=="home"&&s.jsx("button",{onClick:()=>{v("home"),_(null),N(null),L(null)},className:"back-btn",children:"← Back to home"}),g==="home"&&s.jsx(nd,{years:q,units:Q,allQuestions:me,questionsForUnit:T,status:W,onPickUnit:R=>{N(R),P(0),v("unit")},onPickYear:R=>{_(R),P(0),v("year")},onStartMock:X,onStartShuffle:ue}),g==="shuffle"&&B.length>0&&s.jsx(ad,{questions:B,qIndex:b,setQIndex:P,onReshuffle:ue,unitsLookup:Q,status:W,enrichQuestion:Te,yearsData:ve}),g==="unit"&&S!==null&&s.jsx(ld,{unit:Q.find(R=>R.id===S),questions:T(S),qIndex:b,setQIndex:P,unitsLookup:Q,status:W,enrichQuestion:Te,yearsData:ve}),g==="year"&&Ie&&s.jsx(ud,{year:Ie,qIndex:b,setQIndex:P,unitsLookup:Q,status:W,enrichQuestion:Te,yearsData:ve}),g==="mock"&&C&&s.jsx(dd,{state:C,setState:L,unitsLookup:Q,status:W,enrichQuestion:Te,yearsData:ve,onExit:()=>{v("home"),L(null)}})]}),s.jsx(md,{}),s.jsx(hd,{clearKey:`${g}|${f}|${S}|${b}`})]})}function td({view:g,year:v,unitName:f,onHome:_}){return s.jsxs("header",{className:"hdr",children:[s.jsx("button",{onClick:_,className:"hdr-mark hdr-mark-logo","aria-label":"Back to home",title:"Back to home",children:s.jsx("img",{src:"https://doles05.github.io/lc-business-sq/lgog.png",alt:"G360",className:"hdr-mark-img"})}),s.jsxs("div",{className:"hdr-text",children:[s.jsx("div",{className:"hdr-title",children:"Short Question Practice"}),s.jsxs("div",{className:"hdr-sub",children:["Leaving Cert Business · Higher Level",v&&g==="year"?s.jsxs(s.Fragment,{children:[" · ",s.jsx("em",{children:v})]}):null,f&&g==="unit"?s.jsxs(s.Fragment,{children:[" · ",s.jsx("em",{children:f})]}):null,g==="mock"?s.jsxs(s.Fragment,{children:[" · ",s.jsx("em",{children:"Mock test"})]}):null,g==="shuffle"?s.jsxs(s.Fragment,{children:[" · ",s.jsx("em",{children:"Shuffle"})]}):null]})]})]})}function nd({years:g,units:v,allQuestions:f,questionsForUnit:_,status:S,onPickUnit:N,onPickYear:b,onStartMock:P,onStartShuffle:C}){const[L,B]=J.useState(!1),I=S?S.stats(f):null,W=I?I.rev:0;return s.jsxs("div",{className:"home",children:[s.jsxs("div",{className:"intro-card",children:[s.jsx("img",{src:"https://doles05.github.io/lc-business-sq/dave.png",alt:"Dave Dolan",className:"intro-avatar"}),s.jsxs("div",{className:"intro-text",children:[s.jsxs("div",{className:"intro-name",children:["Hi, I'm Dave from ",s.jsx("span",{className:"intro-brand",children:"Grinds360"}),"."]}),s.jsx("p",{className:"intro-body",children:"This is a short-question practice tool I built for Leaving Cert Business students. Every Section 1 question from 2011–2025 with its full marking scheme — flip the card to see the answer. Especially useful for Units 6 and 7. Free for everyone."})]})]}),s.jsxs("div",{className:"hero",children:[s.jsx("div",{className:"hero-eyebrow",children:"Browse by unit"}),s.jsxs("h1",{className:"hero-h1",children:["Section 1, sliced",s.jsx("br",{}),s.jsx("span",{className:"hero-h1-accent",children:"by topic."})]}),s.jsx("p",{className:"hero-lede",children:"Drill a unit you've just covered, scan an old paper, or take a 12-question mock. Every question shows its full marking-scheme answer and the points breakdown."})]}),I&&(I.got>0||I.rev>0)&&s.jsxs("div",{className:"stats-line",children:[s.jsxs("span",{className:"stats-pill stats-pill-got",children:[s.jsx("span",{className:"stats-dot stats-dot-got"}),I.got," got it"]}),s.jsxs("span",{className:"stats-pill stats-pill-rev",children:[s.jsx("span",{className:"stats-dot stats-dot-rev"}),I.rev," to review"]}),s.jsxs("span",{className:"stats-pill stats-pill-unseen",children:[I.unseen," new"]})]}),s.jsxs("div",{className:"cta-pair",children:[s.jsxs("button",{onClick:()=>B(!0),className:"mock-cta",children:[s.jsxs("div",{className:"mock-cta-left",children:[s.jsx("div",{className:"mock-cta-eyebrow",children:"Test yourself"}),s.jsx("div",{className:"mock-cta-h",children:"Mock Test"}),s.jsx("div",{className:"mock-cta-sub",children:"12 random questions · 20 minutes · choose units"})]}),s.jsxs("div",{className:"mock-cta-right",children:[s.jsx("div",{className:"mock-cta-num",children:"12"}),s.jsx("div",{className:"mock-cta-arrow",children:"→"})]})]}),s.jsxs("button",{onClick:()=>C(),className:"shuffle-cta",children:[s.jsxs("div",{className:"shuffle-cta-left",children:[s.jsx("div",{className:"shuffle-cta-eyebrow",children:"Browse all"}),s.jsx("div",{className:"shuffle-cta-h",children:"Shuffle"}),s.jsx("div",{className:"shuffle-cta-sub",children:"Every question, random order, no timer"})]}),s.jsx("div",{className:"shuffle-cta-right",children:s.jsx("div",{className:"shuffle-cta-icon",children:"⇄"})})]})]}),W>0&&s.jsxs("button",{onClick:()=>C({reviewOnly:!0}),className:"review-cta",children:[s.jsx("span",{className:"review-cta-icon",children:"↻"}),s.jsxs("span",{className:"review-cta-text",children:[s.jsxs("strong",{children:["Review ",W]})," question",W===1?"":"s"," marked for review"]}),s.jsx("span",{className:"review-cta-arrow",children:"→"})]}),L&&s.jsx(od,{units:v,allQuestions:f,status:S,onCancel:()=>B(!1),onStart:(q,Q)=>{B(!1),P(q,Q)}}),s.jsx("div",{className:"section-divider",children:s.jsx("span",{className:"section-divider-label",children:"Practice by unit"})}),s.jsx("div",{className:"unit-grid",children:v.map(q=>{const Q=_(q.id).length;return s.jsx(rd,{unit:q,count:Q,onOpen:()=>Q>0&&N(q.id)},q.id)})}),s.jsx("div",{className:"section-divider",children:s.jsx("span",{className:"section-divider-label",children:"Or browse by paper"})}),s.jsx("div",{className:"year-grid",children:g.map((q,Q)=>{const j=Bu[Q%Bu.length];return s.jsx(id,{year:q.year,count:q.questions.length,tone:j,onOpen:()=>b(q.year)},q.year)})})]})}function rd({unit:g,count:v,onOpen:f}){const _=v===0;return s.jsxs("button",{onClick:f,className:`unit-tile ${_?"unit-tile-empty":""}`,style:{"--unit-color":g.color},disabled:_,children:[s.jsxs("div",{className:"unit-tile-num",children:["U",g.id]}),s.jsx("div",{className:"unit-tile-name",children:g.name}),s.jsxs("div",{className:"unit-tile-count",children:[v," ",v===1?"question":"questions"]})]})}function id({year:g,count:v,tone:f,onOpen:_}){return s.jsxs("button",{onClick:_,className:"tile",style:{background:f.bg,color:f.ink},children:[s.jsx("div",{className:"tile-yr",children:g}),s.jsxs("div",{className:"tile-meta",children:[s.jsx("span",{className:"tile-count",children:v})," short questions"]}),s.jsx("div",{className:"tile-arrow",children:"Browse →"})]})}function od({units:g,allQuestions:v,status:f,onCancel:_,onStart:S}){const[N,b]=J.useState([]),[P,C]=J.useState(!1),L=f?v.filter(j=>f.get(j.year,j.qn)==="review").length:0,B=N.length===0,I=B?v:v.filter(j=>(j.units||[]).some(H=>N.includes(H))),q=(P?I.filter(j=>f&&f.get(j.year,j.qn)==="review"):I).length,Q=j=>{b(H=>H.includes(j)?H.filter(ve=>ve!==j):[...H,j])};return s.jsx("div",{className:"sheet-backdrop",onClick:_,children:s.jsxs("div",{className:"sheet",onClick:j=>j.stopPropagation(),children:[s.jsx("div",{className:"sheet-grip"}),s.jsx("h2",{className:"sheet-title",children:"Mock test setup"}),s.jsx("p",{className:"sheet-sub",children:"Pick units to focus on, or leave blank for any unit."}),s.jsx("div",{className:"sheet-units",children:g.map(j=>s.jsxs("button",{onClick:()=>Q(j.id),className:`sheet-unit ${N.includes(j.id)?"sheet-unit-on":""}`,style:{"--unit-color":j.color},children:[s.jsxs("span",{className:"sheet-unit-num",children:["U",j.id]}),s.jsx("span",{className:"sheet-unit-name",children:j.name}),s.jsx("span",{className:"sheet-unit-check",children:N.includes(j.id)?"✓":""})]},j.id))}),L>0&&s.jsxs("button",{onClick:()=>C(j=>!j),className:`sheet-toggle ${P?"sheet-toggle-on":""}`,children:[s.jsx("span",{className:"sheet-toggle-check",children:P?"✓":""}),s.jsxs("span",{className:"sheet-toggle-text",children:["Only questions marked ",s.jsx("strong",{children:"review again"})]}),s.jsx("span",{className:"sheet-toggle-count",children:L})]}),s.jsx("div",{className:"sheet-meta",children:q===0?s.jsx(s.Fragment,{children:"No questions match — try a different filter."}):B&&!P?s.jsxs(s.Fragment,{children:["Drawing from ",s.jsxs("strong",{children:["all ",v.length," questions"]})]}):s.jsxs(s.Fragment,{children:["Pool: ",s.jsx("strong",{children:q})," ",q===1?"question":"questions"," match",q<12&&s.jsxs(s.Fragment,{children:[" · you'll get ",s.jsx("strong",{children:q}),", not 12"]})]})}),s.jsxs("div",{className:"sheet-actions",children:[s.jsx("button",{className:"sheet-btn sheet-btn-ghost",onClick:_,children:"Cancel"}),s.jsxs("button",{className:"sheet-btn sheet-btn-primary",onClick:()=>S(N,{reviewOnly:P}),disabled:q===0,children:["Start mock ",q>0&&`· ${Math.min(12,q)} Qs`]})]})]})})}function ld({unit:g,questions:v,qIndex:f,setQIndex:_,unitsLookup:S,status:N,enrichQuestion:b,yearsData:P}){const C=v[f],[L,B]=J.useState(!1);J.useEffect(()=>B(!1),[f]);const I=()=>f>0&&_(f-1),W=()=>f<v.length-1&&_(f+1);if(J.useEffect(()=>{const j=H=>{H.key==="ArrowLeft"?I():H.key==="ArrowRight"?W():(H.key===" "||H.key==="Enter")&&(H.preventDefault(),B(ve=>!ve))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[f]),!C)return s.jsx("div",{children:"No questions in this unit yet."});const q=b?b(C,C.year):C,Q=q&&q.q&&q.s;return s.jsxs("div",{className:"year-view",children:[s.jsxs("div",{className:"unit-banner",style:{"--unit-color":g.color},children:[s.jsxs("span",{className:"unit-banner-num",children:["U",g.id]}),s.jsx("span",{className:"unit-banner-name",children:g.name}),s.jsxs("span",{className:"unit-banner-count",children:[v.length," ",v.length===1?"question":"questions"]})]}),s.jsx(sd,{questions:v,active:f,onPick:j=>_(j),status:N}),Q?s.jsx(Ri,{flipped:L,onFlip:()=>B(j=>!j),questionImg:q.q,schemeImg:q.s,qn:C.qn,year:C.year,topics:C.topics,units:C.units,unitsLookup:S,status:N}):s.jsx(kr,{yearsData:P}),s.jsxs("div",{className:"navbar",children:[s.jsx("button",{onClick:I,disabled:f===0,className:"nav-btn",children:"← Previous"}),s.jsx("button",{onClick:()=>B(j=>!j),className:"nav-btn nav-btn-flip",disabled:!Q,children:L?"Show question":"Show me the answer"}),s.jsx("button",{onClick:W,disabled:f===v.length-1,className:"nav-btn",children:"Next →"})]})]})}function kr({yearsData:g}){return g&&g.error?s.jsxs("div",{className:"loading-card loading-card-error",children:[s.jsx("div",{className:"loading-card-h",children:"Couldn't load images"}),s.jsx("div",{className:"loading-card-sub",children:g.error.message||"Network error"}),s.jsx("div",{className:"loading-card-help",children:"Check your internet connection or try again."})]}):s.jsxs("div",{className:"loading-card",children:[s.jsx("div",{className:"loading-card-spinner"}),s.jsx("div",{className:"loading-card-h",children:"Loading question..."})]})}function sd({questions:g,active:v,onPick:f,status:_}){return s.jsx("nav",{className:"strip","aria-label":"Question navigator",children:g.map((S,N)=>{const b=_?_.get(S.year,S.qn):null,P=b==="got-it"?"chip-dot chip-dot-got":b==="review"?"chip-dot chip-dot-rev":null;return s.jsxs("button",{onClick:()=>f(N),className:`chip chip-mock ${N===v?"chip-on":""}`,"aria-current":N===v?"true":void 0,children:[P&&s.jsx("span",{className:P}),s.jsxs("span",{className:"chip-mock-n",children:["Q",S.qn]}),s.jsxs("span",{className:"chip-mock-yr",children:["'",String(S.year).slice(-2)]})]},N)})})}function ad({questions:g,qIndex:v,setQIndex:f,onReshuffle:_,unitsLookup:S,status:N,enrichQuestion:b,yearsData:P}){const C=g[v],[L,B]=J.useState(!1);J.useEffect(()=>B(!1),[v]);const I=()=>v>0&&f(v-1),W=()=>v<g.length-1&&f(v+1);if(J.useEffect(()=>{const j=H=>{H.key==="ArrowLeft"?I():H.key==="ArrowRight"?W():(H.key===" "||H.key==="Enter")&&(H.preventDefault(),B(ve=>!ve))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[v]),!C)return null;const q=b?b(C,C.year):C,Q=q&&q.q&&q.s;return s.jsxs("div",{className:"year-view",children:[s.jsxs("div",{className:"shuffle-bar",children:[s.jsxs("div",{className:"shuffle-bar-info",children:[s.jsx("span",{className:"shuffle-bar-eyebrow",children:"Shuffle"}),s.jsxs("span",{className:"shuffle-bar-progress",children:[v+1," of ",g.length]})]}),s.jsx("button",{onClick:_,className:"shuffle-bar-btn",children:"⇄ Reshuffle"})]}),Q?s.jsx(Ri,{flipped:L,onFlip:()=>B(j=>!j),questionImg:q.q,schemeImg:q.s,qn:C.qn,year:C.year,topics:C.topics,units:C.units,unitsLookup:S,status:N}):s.jsx(kr,{yearsData:P}),s.jsxs("div",{className:"navbar",children:[s.jsx("button",{onClick:I,disabled:v===0,className:"nav-btn",children:"← Previous"}),s.jsx("button",{onClick:()=>B(j=>!j),className:"nav-btn nav-btn-flip",disabled:!Q,children:L?"Show question":"Show me the answer"}),s.jsx("button",{onClick:W,disabled:v===g.length-1,className:"nav-btn",children:"Next →"})]})]})}function ud({year:g,qIndex:v,setQIndex:f,unitsLookup:_,status:S,enrichQuestion:N,yearsData:b}){const P=g.questions[v],[C,L]=J.useState(!1);J.useEffect(()=>L(!1),[v]);const B=()=>v>0&&f(v-1),I=()=>v<g.questions.length-1&&f(v+1);if(J.useEffect(()=>{const Q=j=>{j.key==="ArrowLeft"?B():j.key==="ArrowRight"?I():(j.key===" "||j.key==="Enter")&&(j.preventDefault(),L(H=>!H))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[v]),!P)return null;const W=N?N(P,g.year):P,q=W&&W.q&&W.s;return s.jsxs("div",{className:"year-view",children:[s.jsx(cd,{year:g,active:v,onPick:Q=>f(Q),status:S}),q?s.jsx(Ri,{flipped:C,onFlip:()=>L(Q=>!Q),questionImg:W.q,schemeImg:W.s,qn:P.qn,year:g.year,topics:P.topics,units:P.units,unitsLookup:_,status:S}):s.jsx(kr,{yearsData:b}),s.jsxs("div",{className:"navbar",children:[s.jsx("button",{onClick:B,disabled:v===0,className:"nav-btn",children:"← Previous"}),s.jsx("button",{onClick:()=>L(Q=>!Q),className:"nav-btn nav-btn-flip",disabled:!q,children:C?"Show question":"Show me the answer"}),s.jsx("button",{onClick:I,disabled:v===g.questions.length-1,className:"nav-btn",children:"Next →"})]})]})}function cd({year:g,active:v,onPick:f,status:_}){return s.jsx("nav",{className:"strip","aria-label":"Question navigator",children:g.questions.map((S,N)=>{const b=_?_.get(g.year,S.qn):null,P=b==="got-it"?"chip-dot chip-dot-got":b==="review"?"chip-dot chip-dot-rev":null;return s.jsxs("button",{onClick:()=>f(N),className:`chip ${N===v?"chip-on":""}`,"aria-current":N===v?"true":void 0,children:[P&&s.jsx("span",{className:P}),"Q",S.qn]},S.qn)})})}function Ri({flipped:g,onFlip:v,questionImg:f,schemeImg:_,qn:S,year:N,topics:b,units:P,unitsLookup:C,status:L}){const B=s.jsx(fd,{units:P,topics:b,unitsLookup:C}),I=L?L.get(N,S):null;return s.jsx("div",{className:`flip ${g?"is-flipped":""}`,children:s.jsxs("div",{className:"flip-inner",children:[s.jsxs("div",{className:"flip-face flip-front",children:[s.jsxs("div",{className:"face-tag",children:[s.jsxs("span",{className:"face-tag-no",children:["Q",S]}),s.jsxs("span",{className:"face-tag-label",children:["Question · ",N]}),I&&s.jsx(Uu,{value:I})]}),B,s.jsx("div",{className:"face-img-wrap",children:s.jsx("img",{src:f,alt:`Question ${S} from ${N}`})}),s.jsx("button",{onClick:v,className:"flip-cta flip-cta-front",children:"Flip → marking scheme"})]}),s.jsxs("div",{className:"flip-face flip-back",children:[s.jsxs("div",{className:"face-tag face-tag-back",children:[s.jsxs("span",{className:"face-tag-no",children:["Q",S]}),s.jsxs("span",{className:"face-tag-label",children:["Marking scheme · ",N]}),I&&s.jsx(Uu,{value:I})]}),B,s.jsx("div",{className:"face-img-wrap face-img-wrap-back",children:s.jsx("img",{src:_,alt:`Marking scheme for question ${S} in ${N}`})}),s.jsx("p",{className:"ms-note",children:'The mark allocation (e.g. "3+2+2+2+1") tells you how the marks split — useful for knowing how many distinct points are needed.'}),L&&s.jsxs("div",{className:"status-bar",children:[s.jsx("button",{onClick:()=>L.set(N,S,I==="got-it"?null:"got-it"),className:`status-btn status-btn-got ${I==="got-it"?"is-active":""}`,children:"✓ Got it"}),s.jsx("button",{onClick:()=>L.set(N,S,I==="review"?null:"review"),className:`status-btn status-btn-rev ${I==="review"?"is-active":""}`,children:"↻ Review again"})]}),s.jsx("button",{onClick:v,className:"flip-cta flip-cta-back",children:"← Back to question"})]})]})})}function Uu({value:g}){return g==="got-it"?s.jsx("span",{className:"status-badge status-badge-got",children:"✓ Got it"}):g==="review"?s.jsx("span",{className:"status-badge status-badge-rev",children:"↻ Review"}):null}function fd({units:g=[],topics:v=[],unitsLookup:f=[]}){return!g.length&&!v.length?null:s.jsxs("div",{className:"tag-pills",children:[g.map(_=>{const S=f.find(N=>N.id===_);return S?s.jsxs("span",{className:"tag-pill tag-pill-unit",style:{"--unit-color":S.color},children:["U",S.id," · ",S.name]},`u${_}`):null}),v.map((_,S)=>s.jsx("span",{className:"tag-pill tag-pill-topic",children:_},`t${S}`))]})}function dd({state:g,setState:v,unitsLookup:f,status:_,enrichQuestion:S,yearsData:N,onExit:b}){const[C,L]=J.useState(1200),[B,I]=J.useState(!1),[W,q]=J.useState(0),[Q,j]=J.useState(!1),H=J.useRef(null);J.useEffect(()=>{if(!B)return H.current=setInterval(()=>{L(R=>R<=1?(clearInterval(H.current),I(!0),0):R-1)},1e3),()=>clearInterval(H.current)},[B]);const ve=Math.floor(C/60),Te=C%60,Ie=`${ve}:${String(Te).padStart(2,"0")}`,me=C<60&&!B;if(B){const R=g.questions[W],Z=S?S(R,R.year):R,re=Z&&Z.q&&Z.s;return s.jsxs("div",{className:"mock",children:[s.jsx("div",{className:"mock-banner mock-banner-done",children:"Time's up · Review mode"}),s.jsx(pd,{questions:g.questions,active:W,onPick:fe=>{q(fe),j(!1)},status:_}),re?s.jsx(Ri,{flipped:Q,onFlip:()=>j(fe=>!fe),questionImg:Z.q,schemeImg:Z.s,qn:R.qn,year:R.year,topics:R.topics,units:R.units,unitsLookup:f,status:_}):s.jsx(kr,{yearsData:N}),s.jsx("div",{className:"navbar",children:s.jsx("button",{onClick:b,className:"nav-btn",children:"← Back to home"})})]})}const T=g.questions[g.current],Y=S?S(T,T.year):T,X=Y&&Y.q&&Y.s,ue=()=>v(R=>({...R,current:Math.max(0,R.current-1)})),ce=()=>v(R=>({...R,current:Math.min(R.questions.length-1,R.current+1)}));return s.jsxs("div",{className:"mock",children:[s.jsxs("div",{className:"mock-bar",children:[s.jsxs("div",{className:`mock-timer ${me?"mock-timer-low":""}`,children:[s.jsx("span",{className:"mock-timer-label",children:"Time left"}),s.jsx("span",{className:"mock-timer-num",children:Ie})]}),s.jsxs("div",{className:"mock-progress",children:["Question ",g.current+1," of ",g.questions.length]}),s.jsx("button",{onClick:()=>I(!0),className:"mock-end",children:"End test"})]}),X?s.jsxs("div",{className:"mock-card",children:[s.jsxs("div",{className:"face-tag",children:[s.jsxs("span",{className:"face-tag-no",children:["Q",g.current+1]}),s.jsxs("span",{className:"face-tag-label",children:["No peeking · from ",T.year]})]}),s.jsx("div",{className:"face-img-wrap",children:s.jsx("img",{src:Y.q,alt:`Mock question ${g.current+1}`})}),s.jsx("p",{className:"mock-hint",children:`Write your answer on paper. The marking scheme is locked until time's up or you tap "End test".`})]}):s.jsx(kr,{yearsData:N}),s.jsxs("div",{className:"navbar",children:[s.jsx("button",{onClick:ue,disabled:g.current===0,className:"nav-btn",children:"← Previous"}),s.jsx("button",{onClick:ce,disabled:g.current===g.questions.length-1,className:"nav-btn nav-btn-flip",children:"Next →"})]})]})}function pd({questions:g,active:v,onPick:f,status:_}){return s.jsx("nav",{className:"strip","aria-label":"Mock question navigator",children:g.map((S,N)=>{const b=_?_.get(S.year,S.qn):null,P=b==="got-it"?"chip-dot chip-dot-got":b==="review"?"chip-dot chip-dot-rev":null;return s.jsxs("button",{onClick:()=>f(N),className:`chip chip-mock ${N===v?"chip-on":""}`,"aria-current":N===v?"true":void 0,children:[P&&s.jsx("span",{className:P}),s.jsx("span",{className:"chip-mock-n",children:N+1}),s.jsxs("span",{className:"chip-mock-yr",children:["'",String(S.year).slice(-2)]})]},N)})})}function md(){return s.jsx("footer",{className:"ftr",children:s.jsx("div",{className:"ftr-line",children:"Past papers © State Examinations Commission. Used for revision purposes."})})}function hd({clearKey:g}){const[v,f]=J.useState(!1),[_,S]=J.useState("pen"),[N,b]=J.useState("#1f1d1a"),P=J.useRef(null),C=J.useRef([]),L=J.useRef(null),B=J.useRef(!1),I=["#1f1d1a","#c0392b","#1f6feb","#1f8a4c","#d99518"],W=()=>{const T=P.current;if(!T)return;const Y=window.devicePixelRatio||1,X=window.innerWidth,ue=window.innerHeight;T.width=Math.floor(X*Y),T.height=Math.floor(ue*Y),T.style.width=X+"px",T.style.height=ue+"px",T.getContext("2d").setTransform(Y,0,0,Y,0,0),q()},q=()=>{const T=P.current;if(!T)return;const Y=T.getContext("2d"),X=T.clientWidth,ue=T.clientHeight;Y.clearRect(0,0,X,ue);for(const ce of C.current)Q(Y,ce)},Q=(T,Y)=>{if(!Y.points.length)return;T.save(),Y.tool==="highlight"?(T.globalAlpha=.32,T.lineCap="butt",T.lineJoin="round"):Y.tool==="eraser"?(T.globalCompositeOperation="destination-out",T.lineCap="round",T.lineJoin="round"):(T.globalAlpha=1,T.lineCap="round",T.lineJoin="round"),T.strokeStyle=Y.color,T.lineWidth=Y.width;const X=Y.points;if(X.length===1)T.beginPath(),T.arc(X[0].x,X[0].y,Y.width/2,0,Math.PI*2),T.fillStyle=Y.color,T.fill();else{T.beginPath(),T.moveTo(X[0].x,X[0].y);for(let ce=1;ce<X.length-1;ce++){const R=(X[ce].x+X[ce+1].x)/2,Z=(X[ce].y+X[ce+1].y)/2;T.quadraticCurveTo(X[ce].x,X[ce].y,R,Z)}const ue=X[X.length-1];T.lineTo(ue.x,ue.y),T.stroke()}T.restore()};J.useEffect(()=>{C.current=[],q()},[g]),J.useEffect(()=>{if(!v)return;W();const T=()=>W();return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[v]);const j=T=>T==="highlight"?14:T==="eraser"?22:2.4,H=T=>{if(!v)return;T.preventDefault();const Y=P.current,X=Y.getBoundingClientRect(),ue=T.clientX-X.left,ce=T.clientY-X.top;B.current=!0,L.current={tool:_,color:N,width:j(_),points:[{x:ue,y:ce,p:T.pressure||.5}]},C.current.push(L.current);try{Y.setPointerCapture(T.pointerId)}catch{}},ve=T=>{if(!B.current||!L.current)return;const Y=P.current,X=Y.getBoundingClientRect(),ue=T.clientX-X.left,ce=T.clientY-X.top,R=L.current.points,Z=R[R.length-1],re=ue-Z.x,fe=ce-Z.y;if(re*re+fe*fe<1.44)return;R.push({x:ue,y:ce,p:T.pressure||.5});const Pe=Y.getContext("2d");Q(Pe,L.current)},Te=T=>{B.current&&(B.current=!1,L.current=null,q())},Ie=()=>{C.current.pop(),q()},me=()=>{C.current=[],q()};return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:`ink-fab ${v?"ink-fab-active":""}`,onClick:()=>f(T=>!T),"aria-label":v?"Close drawing":"Start drawing",title:v?"Close drawing":"Start drawing",children:v?s.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),s.jsx("line",{x1:"6",y1:"18",x2:"18",y2:"6"})]}):s.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),s.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),s.jsx("path",{d:"M2 2l7.586 7.586"}),s.jsx("circle",{cx:"11",cy:"11",r:"2"})]})}),v&&s.jsxs("div",{className:"ink-overlay",role:"dialog","aria-label":"Drawing layer",children:[s.jsx("canvas",{ref:P,className:"ink-canvas",onPointerDown:H,onPointerMove:ve,onPointerUp:Te,onPointerCancel:Te,onPointerLeave:Te}),s.jsxs("div",{className:"ink-toolbar",children:[s.jsxs("div",{className:"ink-tool-group",children:[s.jsx("button",{className:`ink-tool ${_==="pen"?"is-on":""}`,onClick:()=>S("pen"),"aria-label":"Pen",title:"Pen",children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),s.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),s.jsx("path",{d:"M2 2l7.586 7.586"}),s.jsx("circle",{cx:"11",cy:"11",r:"2"})]})}),s.jsx("button",{className:`ink-tool ${_==="highlight"?"is-on":""}`,onClick:()=>S("highlight"),"aria-label":"Highlighter",title:"Highlighter",children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M9 11l6-6 4 4-6 6z"}),s.jsx("path",{d:"M5 21l4-4"}),s.jsx("path",{d:"M14 4l3 3"})]})}),s.jsx("button",{className:`ink-tool ${_==="eraser"?"is-on":""}`,onClick:()=>S("eraser"),"aria-label":"Eraser",title:"Eraser",children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 17l6 6 12-12-6-6z"}),s.jsx("path",{d:"M9 17l-6-6"})]})})]}),s.jsx("div",{className:"ink-tool-divider"}),s.jsx("div",{className:"ink-tool-group",children:I.map(T=>s.jsx("button",{className:`ink-color ${N===T?"is-on":""}`,style:{background:T},onClick:()=>{b(T),_==="eraser"&&S("pen")},"aria-label":`Color ${T}`,title:"Color"},T))}),s.jsx("div",{className:"ink-tool-divider"}),s.jsxs("div",{className:"ink-tool-group",children:[s.jsx("button",{className:"ink-tool",onClick:Ie,"aria-label":"Undo",title:"Undo last stroke",children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 7v6h6"}),s.jsx("path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"})]})}),s.jsx("button",{className:"ink-tool",onClick:me,"aria-label":"Clear",title:"Clear all",children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("polyline",{points:"3 6 5 6 21 6"}),s.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),s.jsx("path",{d:"M10 11v6M14 11v6"})]})})]})]})]})]})}function gd(){return s.jsxs(s.Fragment,{children:[s.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400;9..144,600;9..144,800;9..144,900&family=Manrope:wght@400;500;600;700&display=swap"}),s.jsx("style",{children:vd})]})}const vd=`
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
.hdr-mark-logo {
  background: var(--paper);
  border: 1.5px solid var(--ink);
  padding: 4px;
  overflow: hidden;
}
.hdr-mark-logo:hover { transform: rotate(-4deg) scale(1.05); }
.hdr-mark-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
.intro-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 22px;
  background: var(--paper);
  border: 1.5px solid var(--ink);
  border-radius: 18px;
  margin-bottom: 32px;
  box-shadow: 4px 4px 0 var(--ink);
}
.intro-avatar {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--ink);
  background: var(--cream);
  flex-shrink: 0;
}
.intro-text { flex: 1; min-width: 0; }
.intro-name {
  font-family: var(--serif);
  font-weight: 800;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 6px;
  font-variation-settings: 'opsz' 144;
}
.intro-brand {
  color: var(--coral);
  font-style: italic;
}
.intro-body {
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--ink2);
  margin: 0;
}

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
  position: sticky;
  bottom: 12px;
  background: var(--cream);
  padding: 12px 0;
  z-index: 50;
  margin: 0 -2px;
  border-top: 1.5px dashed transparent;
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
  .intro-card { gap: 14px; padding: 14px 16px; }
  .intro-avatar { width: 64px; height: 64px; }
  .intro-name { font-size: 17px; }
  .intro-body { font-size: 13.5px; }
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

/* ---------- Ink overlay ---------- */
.ink-fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(31, 29, 26, 0.18);
  background: var(--cream);
  color: var(--ink1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(31, 29, 26, 0.18), 0 1px 2px rgba(31, 29, 26, 0.08);
  z-index: 9000;
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
}
.ink-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(31, 29, 26, 0.22), 0 1px 2px rgba(31, 29, 26, 0.10);
}
.ink-fab-active {
  background: var(--ink1);
  color: var(--cream);
  border-color: var(--ink1);
}

.ink-overlay {
  position: fixed;
  inset: 0;
  z-index: 8999; /* below FAB so the close button stays clickable */
  pointer-events: none; /* canvas itself enables pointer events */
}

.ink-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.001); /* near-transparent so events work */
  pointer-events: auto;
  touch-action: none; /* prevent scroll while drawing */
  cursor: crosshair;
}

.ink-toolbar {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--cream);
  border: 1px solid rgba(31, 29, 26, 0.16);
  border-radius: 999px;
  box-shadow: 0 8px 28px rgba(31, 29, 26, 0.20), 0 1px 2px rgba(31, 29, 26, 0.08);
  pointer-events: auto;
  z-index: 9001;
  max-width: calc(100vw - 40px);
  overflow-x: auto;
}

.ink-tool-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.ink-tool-divider {
  width: 1px;
  height: 22px;
  background: rgba(31, 29, 26, 0.14);
  margin: 0 4px;
}

.ink-tool {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: transparent;
  color: var(--ink1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease;
}
.ink-tool:hover { background: rgba(31, 29, 26, 0.06); }
.ink-tool.is-on {
  background: var(--ink1);
  color: var(--cream);
  border-color: var(--ink1);
}

.ink-color {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: transform 0.12s ease, border-color 0.12s ease;
}
.ink-color:hover { transform: scale(1.1); }
.ink-color.is-on {
  border-color: var(--cream);
  box-shadow: 0 0 0 2px var(--ink1);
}

@media (max-width: 640px) {
  .ink-fab {
    right: 14px;
    bottom: 14px;
    width: 48px;
    height: 48px;
  }
  .ink-toolbar {
    bottom: 14px;
    padding: 6px 10px;
    gap: 6px;
  }
  .ink-tool { width: 34px; height: 34px; }
  .ink-color { width: 24px; height: 24px; }
  .ink-tool-divider { height: 20px; margin: 0 2px; }
}
`;Xf.createRoot(document.getElementById("root")).render(s.jsx(Hf.StrictMode,{children:s.jsx(ed,{})}));
