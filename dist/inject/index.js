!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!O[e]||!g[e])return;for(var t in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(y[t]=n[t]);0==--b&&0===v&&E()}(e,t),n&&n(e,t)};var t,r=!0,o="b1712df1621cc3f7fd82",c=1e4,i={},d=[],u=[];function a(e){var n=D[e];if(!n)return H;var r=function(r){return n.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(d=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),H(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,o(c));return r.e=function(e){return"ready"===f&&p("prepare"),v++,H.e(e).then(n,function(e){throw n(),e});function n(){v--,"prepare"===f&&(w[e]||k(e),0===v&&0===b&&E())}},r.t=function(e,n){return 1&n&&(e=r(e)),H.t(e,-2&n)},r}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:x,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return t=void 0,n}var l=[],f="idle";function p(e){f=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var h,y,m,b=0,v=0,w={},g={},O={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=c,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,c=H.p+""+o+".hot-update.json";r.open("GET",c,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+c+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;g={},w={},O=e.c,m=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});y={};return k(1),"prepare"===f&&0===v&&0===b&&E(),n});var n}function k(e){O[e]?(g[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function E(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return x(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in y)Object.prototype.hasOwnProperty.call(y,t)&&n.push(_(t));e.resolve(n)}}function x(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,c,u,a;function s(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,i=o.chain;if((u=D[c])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<u.parents.length;d++){var a=u.parents[d],s=D[a];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([a]),moduleId:c,parentId:a};-1===n.indexOf(a)&&(s.hot._acceptedDependencies[c]?(t[a]||(t[a]=[]),l(t[a],[c])):(delete t[a],n.push(a),r.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},b=[],v={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var j;a=_(g);var k=!1,E=!1,x=!1,P="";switch((j=y[g]?s(a):{type:"disposed",moduleId:g}).chain&&(P="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+j.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(k=new Error("Aborted because "+a+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),x=!0;break;default:throw new Error("Unexception type "+j.type)}if(k)return p("abort"),Promise.reject(k);if(E)for(a in v[a]=y[a],l(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,a)&&(h[a]||(h[a]=[]),l(h[a],j.outdatedDependencies[a]));x&&(l(b,[j.moduleId]),v[a]=w)}var S,M=[];for(r=0;r<b.length;r++)a=b[r],D[a]&&D[a].hot._selfAccepted&&v[a]!==w&&M.push({module:a,errorHandler:D[a].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var I,q,L=b.slice();L.length>0;)if(a=L.pop(),u=D[a]){var A={},T=u.hot._disposeHandlers;for(c=0;c<T.length;c++)(t=T[c])(A);for(i[a]=A,u.hot.active=!1,delete D[a],delete h[a],c=0;c<u.children.length;c++){var $=D[u.children[c]];$&&((S=$.parents.indexOf(a))>=0&&$.parents.splice(S,1))}}for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(u=D[a]))for(q=h[a],c=0;c<q.length;c++)I=q[c],(S=u.children.indexOf(I))>=0&&u.children.splice(S,1);for(a in p("apply"),o=m,v)Object.prototype.hasOwnProperty.call(v,a)&&(e[a]=v[a]);var C=null;for(a in h)if(Object.prototype.hasOwnProperty.call(h,a)&&(u=D[a])){q=h[a];var U=[];for(r=0;r<q.length;r++)if(I=q[r],t=u.hot._acceptedDependencies[I]){if(-1!==U.indexOf(t))continue;U.push(t)}for(r=0;r<U.length;r++){t=U[r];try{t(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:a,dependencyId:q[r],error:e}),n.ignoreErrored||C||(C=e)}}}for(r=0;r<M.length;r++){var N=M[r];a=N.module,d=[a];try{H(a)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:t,originalError:e}),n.ignoreErrored||C||(C=t),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:a,error:e}),n.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(b)}))}var D={};function H(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:s(n),parents:(u=d,d=[],u),children:[]};return e[n].call(t.exports,t,t.exports,a(n)),t.l=!0,t.exports}H.m=e,H.c=D,H.d=function(e,n,t){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(H.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)H.d(t,r,function(n){return e[n]}.bind(null,r));return t},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="",H.h=function(){return o},a(913)(H.s=913)}({107:function(e,n,t){"use strict";t.d(n,"c",function(){return o}),t.d(n,"a",function(){return c}),t.d(n,"b",function(){return i});var r=t(14);function o(e){const{str:n,toStr:t}=e;if(-1===window.location.href.indexOf(n))return;const r=window.location.href.replace(n,t);window.open(r)}function c(e){const{str:n,toStr:t}=e;-1!==window.location.href.indexOf(n)&&d(window.location.href.replace(n,t))}function i(e){const{type:n}=e;switch(n){case r.k:!function(){const e=window.location.href,n=e.match(/https?:\/\/github\.com\/(.*)\/(.*)/);let t="";n&&n.length>1&&(t=`- [${n[2]}](${e}) - `);const r=document.querySelector(".f4.mt-3");r&&r.innerHTML&&(t+=r.innerHTML.trim());d(t=`${t} ![img](https://img.shields.io/github/stars/${n[1]}/${n[2]})`)}();break;case r.l:!function(){const e=window.location.href;let n="";d(n=`[${document.title}](${e})`)}();break;case r.m:!function(){let e="";const{hash:n,pathname:t}=window.location,r=decodeURI(n.slice(1));d(e=`[${r}](${t}${n})`)}()}}async function d(e){const n=document.createElement("input");document.body.appendChild(n),n.value=e,n.select();document.execCommand("copy");document.body.removeChild(n)}},14:function(e,n,t){"use strict";t.d(n,"u",function(){return r}),t.d(n,"r",function(){return o}),t.d(n,"o",function(){return c}),t.d(n,"s",function(){return i}),t.d(n,"p",function(){return d}),t.d(n,"q",function(){return u}),t.d(n,"n",function(){return a}),t.d(n,"t",function(){return s}),t.d(n,"k",function(){return l}),t.d(n,"l",function(){return f}),t.d(n,"m",function(){return p}),t.d(n,"a",function(){return h}),t.d(n,"j",function(){return y}),t.d(n,"i",function(){return m}),t.d(n,"d",function(){return b}),t.d(n,"h",function(){return v}),t.d(n,"c",function(){return w}),t.d(n,"f",function(){return g}),t.d(n,"g",function(){return O}),t.d(n,"e",function(){return _}),t.d(n,"b",function(){return j});const r="ui",o="get-data",c="change-settings",i="goto-link",d="copy-link",u="generate-link",a="add-css",s="open-edit",l="awesome",f="reference",p="reference_relative",h="open",y="translate",m="search_zhihu",b="search_juejin",v="search_wiki",w="search_git",g="search_npm",O="search_npm_trend",_="search_mdn",j="read_source"},158:function(e,n,t){"use strict";const r=Object.prototype.toString;function o(e,n){return r.call(e)==="[object "+n+"]"}function c(e){return o(e,"String")}const i=/[\s\r\n]+/gi;function d(e){if(!e)return null;if(!c(e))return e;let n=document.getElementById(e);return null===n&&(n=document.querySelector(e)),n}const u={top:function(e,n){const t=e.firstChild;e.insertBefore(n,t)},bottom:function(e,n){e.appendChild(n)},before:function(e,n){const t=e.parentNode;t&&t.insertBefore(n,e)},after:function(e,n){const t=e.parentNode;t&&t.insertBefore(n,e.nextSibling)}};function a(e,n,t="bottom"){const r=c(e)?d(e):e,o=c(n)?d(n):n;u[t](r,o)}function s(e,n){a(e,n)}function l(e=""){const n=e.replace(i," ").trim();if(!n)return;const t=function(e,n,t){const r=document.createElement(e),o={a:{href:"#",hideFocus:!0},style:{type:"text/css"},link:{type:"text/css",rel:"stylesheet"},iframe:{frameBorder:0},script:{defer:!0,type:"text/javascript"}}[e.toLowerCase()],c=Object.assign(r,o);if(n&&(c.id=n),!t)return c;const i=d(t);return s(i||document.body,c),c}("style");return t.textContent=n,s(document.head,t),t}function f(e){l(e)}function p(){document.body.contentEditable="true"}t.d(n,"a",function(){return f}),t.d(n,"b",function(){return p})},913:function(e,n,t){"use strict";t.r(n);var r=t(14),o=t(107);var c=t(158);chrome.runtime.onMessage.addListener(function({type:e,data:n}){switch(e){case r.s:{const e=n;Object(o.c)(e);break}case r.p:{const e=n;Object(o.a)(e);break}case r.q:Object(o.b)(n);break;case r.n:Object(c.a)(n);break;case r.t:Object(c.b)()}}),(window.location.href.includes("https://github.com/FunnyLiu?")||"https://github.com/FunnyLiu"===window.location.href)&&setTimeout(function(){document.querySelector("#your-repos-filter").addEventListener("blur",function(){document.querySelector(".org-repos.repo-list").querySelectorAll(".public.fork.d-block.py-4.border-bottom").forEach(e=>{if(e.outerHTML.includes("Forked from")&&!e.outerHTML.includes("brizer-li")){let n=e.querySelector(".d-inline-block"),t=n.innerHTML.trim(),r=document.createElement("a");r.href=`https://github.com/FunnyLiu/${t}/tree/readsource`,r.target="_blank",r.className="brizer-li",r.innerText="放放的源码分析",n.parentNode.appendChild(r)}})}.bind(this),!1)},1e3)}});
//# sourceMappingURL=index.js.map