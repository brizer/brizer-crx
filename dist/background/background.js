!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!k[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--m&&0===b&&S()}(e,n),t&&t(e,n)};var n,r=!0,o="84f4ab384e4d909369b7",i=1e4,s={},a=[],c=[];function d(e){var t=O[e];if(!t)return j;var r=function(r){return t.hot.active?(O[r]?-1===O[r].parents.indexOf(e)&&O[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),j(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var i in j)Object.prototype.hasOwnProperty.call(j,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&h("prepare"),b++,j.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===p&&(v[e]||_(e),0===b&&0===m&&S())}},r.t=function(e,t){return 1&t&&(e=r(e)),j.t(e,-2&t)},r}function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:T,apply:D,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:s[e]};return n=void 0,t}var l=[],p="idle";function h(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var f,g,y,m=0,b=0,v={},w={},k={};function x(e){return+e+""===e?+e:e}function T(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=j.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},v={},k=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});g={};return _(0),"prepare"===p&&0===b&&0===m&&S(),t});var t}function _(e){k[e]?(w[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function S(){h("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(x(n));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,i,c,d;function u(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((c=O[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<c.parents.length;a++){var d=c.parents[a],u=O[d];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(u.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),l(n[d],[i])):(delete n[d],t.push(d),r.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},m=[],b={},v=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var w in g)if(Object.prototype.hasOwnProperty.call(g,w)){var T;d=x(w);var _=!1,S=!1,D=!1,M="";switch((T=g[w]?u(d):{type:"disposed",moduleId:w}).chain&&(M="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+T.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(_=new Error("Aborted because "+d+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(T),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),D=!0;break;default:throw new Error("Unexception type "+T.type)}if(_)return h("abort"),Promise.reject(_);if(S)for(d in b[d]=g[d],l(m,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,d)&&(f[d]||(f[d]=[]),l(f[d],T.outdatedDependencies[d]));D&&(l(m,[T.moduleId]),b[d]=v)}var E,C=[];for(r=0;r<m.length;r++)d=m[r],O[d]&&O[d].hot._selfAccepted&&b[d]!==v&&C.push({module:d,errorHandler:O[d].hot._selfAccepted});h("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete installedChunks[e]}(e)});for(var P,L,I=m.slice();I.length>0;)if(d=I.pop(),c=O[d]){var U={},H=c.hot._disposeHandlers;for(i=0;i<H.length;i++)(n=H[i])(U);for(s[d]=U,c.hot.active=!1,delete O[d],delete f[d],i=0;i<c.children.length;i++){var A=O[c.children[i]];A&&((E=A.parents.indexOf(d))>=0&&A.parents.splice(E,1))}}for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(c=O[d]))for(L=f[d],i=0;i<L.length;i++)P=L[i],(E=c.children.indexOf(P))>=0&&c.children.splice(E,1);for(d in h("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var q=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(c=O[d])){L=f[d];var $=[];for(r=0;r<L.length;r++)if(P=L[r],n=c.hot._acceptedDependencies[P]){if(-1!==$.indexOf(n))continue;$.push(n)}for(r=0;r<$.length;r++){n=$[r];try{n(L)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:L[r],error:e}),t.ignoreErrored||q||(q=e)}}}for(r=0;r<C.length;r++){var z=C[r];d=z.module,a=[d];try{j(d)}catch(e){if("function"==typeof z.errorHandler)try{z.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||q||(q=e)}}return q?(h("fail"),Promise.reject(q)):(h("idle"),new Promise(function(e){e(m)}))}var O={};function j(t){if(O[t])return O[t].exports;var n=O[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}j.m=e,j.c=O,j.d=function(e,t,n){j.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,t){if(1&t&&(e=j(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(j.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)j.d(n,r,function(t){return e[t]}.bind(null,r));return n},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="",j.h=function(){return o},d(910)(j.s=910)}({14:function(e,t,n){"use strict";n.d(t,"v",function(){return r}),n.d(t,"s",function(){return o}),n.d(t,"p",function(){return i}),n.d(t,"t",function(){return s}),n.d(t,"q",function(){return a}),n.d(t,"r",function(){return c}),n.d(t,"o",function(){return d}),n.d(t,"u",function(){return u}),n.d(t,"l",function(){return l}),n.d(t,"m",function(){return p}),n.d(t,"n",function(){return h}),n.d(t,"a",function(){return f}),n.d(t,"k",function(){return g}),n.d(t,"j",function(){return y}),n.d(t,"e",function(){return m}),n.d(t,"i",function(){return b}),n.d(t,"c",function(){return v}),n.d(t,"g",function(){return w}),n.d(t,"h",function(){return k}),n.d(t,"f",function(){return x}),n.d(t,"b",function(){return T}),n.d(t,"d",function(){return _});const r="ui",o="get-data",i="change-settings",s="goto-link",a="copy-link",c="generate-link",d="add-css",u="open-edit",l="awesome",p="reference",h="reference_relative",f="open",g="translate",y="search_zhihu",m="search_juejin",b="search_wiki",v="search_git",w="search_npm",k="search_npm_trend",x="search_mdn",T="read_source",_="search_git_pro"},49:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,d=[],u=!1,l=-1;function p(){u&&c&&(u=!1,c.length?d=c.concat(d):l=-1,d.length&&h())}function h(){if(!u){var e=a(p);u=!0;for(var t=d.length;t;){for(c=d,d=[];++l<t;)c&&c[l].run();l=-1,t=d.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new f(e,t)),1!==d.length||u||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},679:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o{constructor(){r(this,"defaultSettings",void 0),r(this,"settings",void 0),this.defaultSettings={urls:[]},this.settings=Object.assign({},this.defaultSettings),this.loadSettings()}async loadSettings(){this.settings=await this.loadSettingsFromStorage()}loadSettingsFromStorage(){return new Promise(e=>{chrome.storage.sync.get(this.defaultSettings,t=>{e(t)})})}async saveSettings(){const e=await this.saveSettingsIntoStorage(this.settings);this.settings=e}saveSettingsIntoStorage(e){return new Promise(t=>{chrome.storage.sync.set(e,()=>t(e))})}set(e){this.settings={...this.settings,...e}}}var i=n(14);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class a{constructor(e){s(this,"reporters",void 0),s(this,"adapter",void 0),this.adapter=e,chrome.runtime.onConnect.addListener(e=>{e.name===i.v&&e.onMessage.addListener(t=>this.onUIMessage(e,t))})}async onUIMessage(e,{type:t,id:n,data:r}){switch(t){case i.s:{const t=await this.adapter.collect();e.postMessage({id:n,data:t});break}case i.p:this.adapter.changeSettings(r);break;case i.t:this.adapter.gotoLink(r);break;case i.q:this.adapter.copyLink(r);break;case i.r:this.adapter.generateLink(r);break;case i.o:this.adapter.addCss(r);break;case i.u:this.adapter.openEdit()}}}class c{constructor(){}getTabs(e){return new Promise(t=>{chrome.tabs.query(e,e=>t(e))})}async getCurrentTab(){return(await this.getTabs({active:!0,currentWindow:!0}))[0]}async getCurrentTabId(){const{id:e}=await this.getCurrentTab();return e}async sendMessageToContent(e){const t=await this.getCurrentTabId();chrome.tabs.sendMessage(t,e)}}class d{constructor(e){var t,n,r;r=void 0,(n="adapter")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.adapter=e,this.createContext(),this.listenClick()}createContext(){chrome.contextMenus.create({id:i.a,title:"新开相同页",contexts:["all"]}),chrome.contextMenus.create({id:i.k,title:"新开翻译页",contexts:["all"]}),chrome.contextMenus.create({id:i.j,title:"知乎搜索",contexts:["selection"]}),chrome.contextMenus.create({id:i.e,title:"掘金搜索",contexts:["selection"]}),chrome.contextMenus.create({id:i.i,title:"维基搜索",contexts:["selection"]}),chrome.contextMenus.create({id:i.c,title:"github搜索",contexts:["selection"]}),chrome.contextMenus.create({id:i.g,title:"npm搜索",contexts:["selection"]}),chrome.contextMenus.create({id:i.h,title:"npm下载对比",contexts:["selection"]}),chrome.contextMenus.create({id:i.f,title:"mdn搜索",contexts:["selection"]}),chrome.contextMenus.create({id:i.b,title:"源码分析",contexts:["selection"]}),chrome.contextMenus.create({id:i.d,title:"github搜索最大化",contexts:["selection"]})}listenClick(){chrome.contextMenus.onClicked.addListener((e,t)=>{switch(e.menuItemId){case i.a:this.adapter.open({key:+new Date,str:"",toStr:""});break;case i.k:this.adapter.open({key:+new Date,str:"http",toStr:"https://translate.google.com.hk/translate?sl=en&tl=zh-CN&u=http"});break;case i.j:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://www.zhihu.com/search?type=content&q=${e.selectionText}`});break;case i.e:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://juejin.im/search?query=${e.selectionText}&type=all`});break;case i.i:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://zh.wikipedia.org/w/index.php?search=${e.selectionText}&title=Special:%E6%90%9C%E7%B4%A2&go=%E5%89%8D%E5%BE%80&ns0=1`});break;case i.c:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://github.com/search?q=${e.selectionText}`});break;case i.g:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://www.npmjs.com/search?q=${e.selectionText}`});break;case i.h:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://www.npmtrends.com/${e.selectionText}`});break;case i.f:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://developer.mozilla.org/zh-CN/search?q=${e.selectionText}`});break;case i.b:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://github.com/FunnyLiu/${e.selectionText}/tree/readsource`});break;case i.d:this.adapter.open({key:+new Date,str:e.pageUrl,toStr:`https://github.com/search?q=in%3Areadme+${e.selectionText}&type=Repositories`})}})}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return l});class l{constructor(){u(this,"ready",void 0),u(this,"user",void 0),u(this,"messenger",void 0),u(this,"tab",void 0),u(this,"context",void 0),this.ready=!1,this.user=new o,this.messenger=new a(this.getMessengerAdapter()),this.tab=new c,this.context=new d(this.getContextAdapter())}async start(){this.ready=!0}getMessengerAdapter(){return{collect:()=>this.collectData(),changeSettings:e=>this.changeSettings(e),gotoLink:e=>this.gotoLink(e),copyLink:e=>this.copyLink(e),generateLink:e=>this.generateLink(e),addCss:e=>this.addCss(e),openEdit:()=>this.openEdit()}}getContextAdapter(){return{open:e=>this.gotoLink(e)}}async collectData(){return{settings:this.user.settings}}changeSettings(e){this.user.set(e),this.saveUserSettings()}async saveUserSettings(){this.user.saveSettings()}gotoLink(e){this.tab.sendMessageToContent({type:i.t,data:e})}copyLink(e){this.tab.sendMessageToContent({type:i.q,data:e})}generateLink(e){this.tab.sendMessageToContent({type:i.r,data:e})}addCss(e){this.tab.sendMessageToContent({type:i.o,data:e})}openEdit(){this.tab.sendMessageToContent({type:i.u})}}},910:function(e,t,n){"use strict";n.r(t),function(e){const t=new(n(679).a);if(t.start(),window.extension=t,e.env.DEBUG){const e=()=>{const t=new XMLHttpRequest;t.open("GET","http://localhost:8890/",!0),t.overrideMimeType("text/plain"),t.onload=()=>{t.status>=200&&t.status<300&&"reload"===t.responseText?chrome.runtime.reload():setTimeout(e,2e3)},t.onerror=()=>setTimeout(e,2e3),t.send()};setTimeout(e,2e3)}}.call(this,n(49))}});
//# sourceMappingURL=background.js.map