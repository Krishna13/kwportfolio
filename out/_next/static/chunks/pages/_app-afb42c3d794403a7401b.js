(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6049:function(e,n,t){"use strict";t.d(n,{rE2:function(){return o},dNJ:function(){return a},IS8:function(){return i},Oqj:function(){return u},sCx:function(){return s},lMe:function(){return c},b0D:function(){return l}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var s=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}))};var c=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))};var l=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},3802:function(e,n,t){"use strict";t.d(n,{r7p:function(){return o}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},e),r.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}))}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1063),u=t(4651),s=t(7426);var c={};function l(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,x=s.useIntersection({rootMargin:"200px"}),w=r(x,2),E=w[0],j=w[1],C=a.default.useCallback((function(e){E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);a.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=c[d+"%"+p+(n?"%"+n:"")];e&&!r&&l(o,d,p,{locale:n})}),[p,d,j,b,t,o]);var S={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:u}))}(e,o,d,p,m,h,g,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof b?b:o&&o.locale,P=o&&o.isLocaleDomain&&i.getDomainLocale(p,O,o&&o.locales,o&&o.domainLocales);S.href=P||i.addBasePath(i.addLocale(p,O,o&&o.defaultLocale))}return a.default.cloneElement(n,S)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,s=o.useRef(),c=o.useState(!1),l=r(c,2),f=l[0],d=l[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),i="undefined"!==typeof IntersectionObserver;var u=new Map},7304:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{default:function(){return ke}});t(3146);var o,a,i,u=t(7294);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function d(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof t?t.apply(void 0,o):t}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,d),i}function p(e){var n=e.props,t=e.slot,r=e.defaultTag,i=e.features,u=e.visible,l=void 0===u||u,f=e.name;if(l)return v(n,t,r,f);var p=null!=i?i:o.None;if(p&o.Static){var m=n.static,h=void 0!==m&&m,g=c(n,["static"]);if(h)return v(g,t,r,f)}if(p&o.RenderStrategy){var b,y=n.unmount,x=void 0===y||y,w=c(n,["unmount"]);return d(x?a.Unmount:a.Hidden,((b={})[a.Unmount]=function(){return null},b[a.Hidden]=function(){return v(s({},w,{hidden:!0,style:{display:"none"}}),t,r,f)},b))}return v(n,t,r,f)}function v(e,n,t,r){var o;void 0===n&&(n={});var a=h(e,["unmount","static"]),i=a.as,s=void 0===i?t:i,l=a.children,d=a.refName,p=void 0===d?"ref":d,v=c(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},g="function"===typeof l?l(n):l;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),s===u.Fragment&&Object.keys(v).length>0){if(!(0,u.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,u.cloneElement)(g,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),a=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},i=f(t);!(r=i()).done;)a();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(h(v,["ref"])),g.props,["onClick"]),m))}return(0,u.createElement)(s,Object.assign({},h(v,["ref"]),s!==u.Fragment&&m),g)}function m(e){var n;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function h(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=f(n);!(t=o()).done;){var a=t.value;a in r&&delete r[a]}return r}function g(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,u.useRef)(n);return(0,u.useEffect)((function(){r.current=n}),[n]),(0,u.useCallback)((function(e){for(var n,t=f(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function b(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(o||(o={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(i||(i={}));var y="undefined"!==typeof window?u.useLayoutEffect:u.useEffect,x={serverHandoffComplete:!1};function w(){var e=(0,u.useState)(x.serverHandoffComplete),n=e[0],t=e[1];return(0,u.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,u.useEffect)((function(){!1===x.serverHandoffComplete&&(x.serverHandoffComplete=!0)}),[]),n}var E=0;function j(){return++E}function C(){var e=w(),n=(0,u.useState)(e?j:null),t=n[0],r=n[1];return y((function(){null===t&&r(j())}),[t]),null!=t?""+t:void 0}var S,O,P,k,N=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function L(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(N))}function T(e,n){var t=Array.isArray(e)?e:L(e),r=document.activeElement,o=function(){if(n&(S.First|S.Next))return P.Next;if(n&(S.Previous|S.Last))return P.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=function(){if(n&S.First)return 0;if(n&S.Previous)return Math.max(0,t.indexOf(r))-1;if(n&S.Next)return Math.max(0,t.indexOf(r))+1;if(n&S.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=n&S.NoScroll?{preventScroll:!0}:{},u=0,s=t.length,c=void 0;do{var l;if(u>=s||u+s<=0)return O.Error;var f=a+u;if(n&S.WrapAround)f=(f+s)%s;else{if(f<0)return O.Underflow;if(f>=s)return O.Overflow}null==(l=c=t[f])||l.focus(i),u+=o}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),O.Success}function F(e,n,t){var r=(0,u.useRef)(n);r.current=n,(0,u.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(S||(S={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(O||(O={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(P||(P={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(k||(k={}));var I,M,A,H,R=(0,u.createContext)(null);function D(){return(0,u.useContext)(R)}function B(e){var n=e.value,t=e.children;return u.createElement(R.Provider,{value:n},t)}function U(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}R.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(I||(I={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(A||(A={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(H||(H={}));var _=((M={})[H.TogglePopover]=function(e){var n;return s({},e,{popoverState:d(e.popoverState,(n={},n[A.Open]=A.Closed,n[A.Closed]=A.Open,n))})},M[H.ClosePopover]=function(e){return e.popoverState===A.Closed?e:s({},e,{popoverState:A.Closed})},M[H.SetButton]=function(e,n){return e.button===n.button?e:s({},e,{button:n.button})},M[H.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:s({},e,{buttonId:n.buttonId})},M[H.SetPanel]=function(e,n){return e.panel===n.panel?e:s({},e,{panel:n.panel})},M[H.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:s({},e,{panelId:n.panelId})},M),W=(0,u.createContext)(null);function V(e){var n=(0,u.useContext)(W);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+J.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,V),t}return n}W.displayName="PopoverContext";var K=(0,u.createContext)(null);function q(e){var n=(0,u.useContext)(K);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+J.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return n}K.displayName="PopoverAPIContext";var z=(0,u.createContext)(null);function G(){return(0,u.useContext)(z)}z.displayName="PopoverGroupContext";var X=(0,u.createContext)(null);function Y(e,n){return d(n.type,_,e,n)}X.displayName="PopoverPanelContext";function J(e){var n,t="headlessui-popover-button-"+C(),r="headlessui-popover-panel-"+C(),o=(0,u.useReducer)(Y,{popoverState:A.Closed,button:null,buttonId:t,panel:null,panelId:r}),a=o[0],i=a.popoverState,s=a.button,c=a.panel,l=o[1];(0,u.useEffect)((function(){return l({type:H.SetButtonId,buttonId:t})}),[t,l]),(0,u.useEffect)((function(){return l({type:H.SetPanelId,panelId:r})}),[r,l]);var f=(0,u.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return l({type:H.ClosePopover})}}}),[t,r,l]),v=G(),m=null==v?void 0:v.registerPopover,h=(0,u.useCallback)((function(){var e;return null!=(e=null==v?void 0:v.isFocusWithinPopoverGroup())?e:(null==s?void 0:s.contains(document.activeElement))||(null==c?void 0:c.contains(document.activeElement))}),[v,s,c]);(0,u.useEffect)((function(){return null==m?void 0:m(f)}),[m,f]),F("focus",(function(){i===A.Open&&(h()||s&&c&&l({type:H.ClosePopover}))}),!0),F("mousedown",(function(e){var n=e.target;i===A.Open&&((null==s?void 0:s.contains(n))||(null==c?void 0:c.contains(n))||(l({type:H.ClosePopover}),function(e,n){var t;return void 0===n&&(n=k.Strict),e!==document.body&&d(n,((t={})[k.Strict]=function(){return e.matches(N)},t[k.Loose]=function(){for(var n=e;null!==n;){if(n.matches(N))return!0;n=n.parentElement}return!1},t))}(n,k.Loose)||(e.preventDefault(),null==s||s.focus())))}));var g=(0,u.useCallback)((function(e){l({type:H.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:s:s;null==n||n.focus()}),[l,s]),b=(0,u.useMemo)((function(){return{close:g}}),[g]),y=(0,u.useMemo)((function(){return{open:i===A.Open,close:g}}),[i,g]);return u.createElement(W.Provider,{value:o},u.createElement(K.Provider,{value:b},u.createElement(B,{value:d(i,(n={},n[A.Open]=I.Open,n[A.Closed]=I.Closed,n))},p({props:e,slot:y,defaultTag:"div",name:"Popover"}))))}var $,Q=m((function e(n,t){var r=V([J.name,e.name].join(".")),o=r[0],a=r[1],c=(0,u.useRef)(null),l=G(),f=null==l?void 0:l.closeOthers,d=(0,u.useContext)(X),v=null!==d&&d===o.panelId,m=g(c,t,v?null:function(e){return a({type:H.SetButton,button:e})}),h=g(c,t),x=(0,u.useRef)(null),w=(0,u.useRef)("undefined"===typeof window?null:document.activeElement);F("focus",(function(){w.current=x.current,x.current=document.activeElement}),!0);var E=(0,u.useCallback)((function(e){var n;if(v){if(o.popoverState===A.Closed)return;switch(e.key){case i.Space:case i.Enter:e.preventDefault(),e.stopPropagation(),a({type:H.ClosePopover}),null==(n=o.button)||n.focus()}}else switch(e.key){case i.Space:case i.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===A.Closed&&(null==f||f(o.buttonId)),a({type:H.TogglePopover});break;case i.Escape:if(o.popoverState!==A.Open)return null==f?void 0:f(o.buttonId);if(!c.current)return;if(!c.current.contains(document.activeElement))return;a({type:H.ClosePopover});break;case i.Tab:if(o.popoverState!==A.Open)return;if(!o.panel)return;if(!o.button)return;if(e.shiftKey){var t;if(!w.current)return;if(null==(t=o.button)?void 0:t.contains(w.current))return;if(o.panel.contains(w.current))return;var r=L(),u=r.indexOf(w.current);if(r.indexOf(o.button)>u)return;e.preventDefault(),e.stopPropagation(),T(o.panel,S.Last)}else e.preventDefault(),e.stopPropagation(),T(o.panel,S.First)}}),[a,o.popoverState,o.buttonId,o.button,o.panel,c,f,v]),j=(0,u.useCallback)((function(e){var n;if(!v&&(e.key===i.Space&&e.preventDefault(),o.popoverState===A.Open&&o.panel&&o.button))switch(e.key){case i.Tab:if(!w.current)return;if(null==(n=o.button)?void 0:n.contains(w.current))return;if(o.panel.contains(w.current))return;var t=L(),r=t.indexOf(w.current);if(t.indexOf(o.button)>r)return;e.preventDefault(),e.stopPropagation(),T(o.panel,S.Last)}}),[o.popoverState,o.panel,o.button,v]),C=(0,u.useCallback)((function(e){var t,r;b(e.currentTarget)||(n.disabled||(v?(a({type:H.ClosePopover}),null==(t=o.button)||t.focus()):(o.popoverState===A.Closed&&(null==f||f(o.buttonId)),null==(r=o.button)||r.focus(),a({type:H.TogglePopover}))))}),[a,o.button,o.popoverState,o.buttonId,n.disabled,f,v]),O=(0,u.useMemo)((function(){return{open:o.popoverState===A.Open}}),[o]),P=function(e,n){var t=(0,u.useState)((function(){return U(e)})),r=t[0],o=t[1];return y((function(){o(U(e))}),[e.type,e.as]),y((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,c);return p({props:s({},n,v?{ref:h,type:P,onKeyDown:E,onClick:C}:{ref:m,id:o.buttonId,type:P,"aria-expanded":n.disabled?void 0:o.popoverState===A.Open,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:E,onKeyUp:j,onClick:C}),slot:O,defaultTag:"button",name:"Popover.Button"})})),Z=o.RenderStrategy|o.Static,ee=m((function e(n,t){var r=V([J.name,e.name].join(".")),o=r[0].popoverState,a=r[1],i=g(t),c="headlessui-popover-overlay-"+C(),l=D(),f=null!==l?l===I.Open:o===A.Open,d=(0,u.useCallback)((function(e){if(b(e.currentTarget))return e.preventDefault();a({type:H.ClosePopover})}),[a]),v=(0,u.useMemo)((function(){return{open:o===A.Open}}),[o]);return p({props:s({},n,{ref:i,id:c,"aria-hidden":!0,onClick:d}),slot:v,defaultTag:"div",features:Z,visible:f,name:"Popover.Overlay"})})),ne=o.RenderStrategy|o.Static,te=m((function e(n,t){var r=n.focus,o=void 0!==r&&r,a=c(n,["focus"]),l=V([J.name,e.name].join(".")),f=l[0],d=l[1],v=q([J.name,e.name].join(".")).close,m=(0,u.useRef)(null),h=g(m,t,(function(e){d({type:H.SetPanel,panel:e})})),b=D(),y=null!==b?b===I.Open:f.popoverState===A.Open,x=(0,u.useCallback)((function(e){var n;switch(e.key){case i.Escape:if(f.popoverState!==A.Open)return;if(!m.current)return;if(!m.current.contains(document.activeElement))return;e.preventDefault(),d({type:H.ClosePopover}),null==(n=f.button)||n.focus()}}),[f,m,d]);(0,u.useEffect)((function(){return function(){return d({type:H.SetPanel,panel:null})}}),[d]),(0,u.useEffect)((function(){var e;f.popoverState!==A.Closed||null!=(e=n.unmount)&&!e||d({type:H.SetPanel,panel:null})}),[f.popoverState,n.unmount,d]),(0,u.useEffect)((function(){if(o&&f.popoverState===A.Open&&m.current){var e=document.activeElement;m.current.contains(e)||T(m.current,S.First)}}),[o,m,f.popoverState]),F("keydown",(function(e){if(f.popoverState===A.Open&&m.current&&e.key===i.Tab&&document.activeElement&&m.current&&m.current.contains(document.activeElement)){e.preventDefault();var n,t=T(m.current,e.shiftKey?S.Previous:S.Next);if(t===O.Underflow)return null==(n=f.button)?void 0:n.focus();if(t===O.Overflow){if(!f.button)return;var r=L(),o=r.indexOf(f.button);T(r.splice(o+1).filter((function(e){var n;return!(null==(n=m.current)?void 0:n.contains(e))})),S.First)===O.Error&&T(document.body,S.First)}}})),F("focus",(function(){var e;o&&f.popoverState===A.Open&&m.current&&((null==(e=m.current)?void 0:e.contains(document.activeElement))||d({type:H.ClosePopover}))}),!0);var w=(0,u.useMemo)((function(){return{open:f.popoverState===A.Open,close:v}}),[f,v]),E={ref:h,id:f.panelId,onKeyDown:x};return u.createElement(X.Provider,{value:f.panelId},p({props:s({},a,E),slot:w,defaultTag:"div",features:ne,visible:y,name:"Popover.Panel"}))}));function re(){var e=(0,u.useRef)(!0);return(0,u.useEffect)((function(){e.current=!1}),[]),e.current}function oe(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=f(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function ae(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function ie(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function ue(e,n,t,r,o,a){var i=oe(),u=void 0!==a?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(a):function(){};return ie.apply(void 0,[e].concat(o)),ae.apply(void 0,[e].concat(n,t)),i.nextFrame((function(){ie.apply(void 0,[e].concat(t)),ae.apply(void 0,[e].concat(r)),i.add(function(e,n){var t=oe();if(!e)return t.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),a=o[0],i=o[1];return 0!==a?t.setTimeout((function(){n($.Finished)}),a+i):n($.Finished),t.add((function(){return n($.Cancelled)})),t.dispose}(e,(function(t){return ie.apply(void 0,[e].concat(r,n)),ae.apply(void 0,[e].concat(o)),u(t)})))})),i.add((function(){return ie.apply(void 0,[e].concat(n,t,r,o))})),i.add((function(){return u($.Cancelled)})),i.dispose}function se(e){return void 0===e&&(e=""),(0,u.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}J.Button=Q,J.Overlay=ee,J.Panel=te,J.Group=function(e){var n=(0,u.useRef)(null),t=(0,u.useState)([]),r=t[0],o=t[1],a=(0,u.useCallback)((function(e){o((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[o]),i=(0,u.useCallback)((function(e){return o((function(n){return[].concat(n,[e])})),function(){return a(e)}}),[o,a]),c=(0,u.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||r.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,r]),l=(0,u.useCallback)((function(e){for(var n,t=f(r);!(n=t()).done;){var o=n.value;o.buttonId!==e&&o.close()}}),[r]),d=(0,u.useMemo)((function(){return{registerPopover:i,unregisterPopover:a,isFocusWithinPopoverGroup:c,closeOthers:l}}),[i,a,c,l]),v=(0,u.useMemo)((function(){return{}}),[]),m={ref:n},h=e;return u.createElement(z.Provider,{value:d},p({props:s({},h,m),slot:v,defaultTag:"div",name:"Popover.Group"}))},function(e){e.Finished="finished",e.Cancelled="cancelled"}($||($={}));var ce,le=(0,u.createContext)(null);le.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(ce||(ce={}));var fe=(0,u.createContext)(null);function de(e){return"children"in e?de(e.children):e.current.filter((function(e){return e.state===ce.Visible})).length>0}function pe(e){var n=(0,u.useRef)(e),t=(0,u.useRef)([]),r=function(){var e=(0,u.useRef)(!1);return(0,u.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,u.useEffect)((function(){n.current=e}),[e]);var o=(0,u.useCallback)((function(e,o){var i;void 0===o&&(o=a.Hidden);var u=t.current.findIndex((function(n){return n.id===e}));-1!==u&&(d(o,((i={})[a.Unmount]=function(){t.current.splice(u,1)},i[a.Hidden]=function(){t.current[u].state=ce.Hidden},i)),!de(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),i=(0,u.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==ce.Visible&&(n.state=ce.Visible):t.current.push({id:e,state:ce.Visible}),function(){return o(e,a.Unmount)}}),[t,o]);return(0,u.useMemo)((function(){return{children:t,register:i,unregister:o}}),[i,o,t])}function ve(){}fe.displayName="NestingContext";var me=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function he(e){for(var n,t={},r=f(me);!(n=r()).done;){var o,a=n.value;t[a]=null!=(o=e[a])?o:ve}return t}var ge=o.RenderStrategy;function be(e){var n,t=e.beforeEnter,r=e.afterEnter,o=e.beforeLeave,i=e.afterLeave,l=e.enter,f=e.enterFrom,v=e.enterTo,m=e.entered,h=e.leave,g=e.leaveFrom,b=e.leaveTo,x=c(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),E=(0,u.useRef)(null),j=(0,u.useState)(ce.Visible),S=j[0],O=j[1],P=x.unmount?a.Unmount:a.Hidden,k=function(){var e=(0,u.useContext)(le);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),N=k.show,L=k.appear,T=function(){var e=(0,u.useContext)(fe);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),F=T.register,M=T.unregister,A=re(),H=C(),R=(0,u.useRef)(!1),D=pe((function(){R.current||(O(ce.Hidden),M(H),G.current.afterLeave())}));y((function(){if(H)return F(H)}),[F,H]),y((function(){var e;P===a.Hidden&&H&&(N&&S!==ce.Visible?O(ce.Visible):d(S,((e={})[ce.Hidden]=function(){return M(H)},e[ce.Visible]=function(){return F(H)},e)))}),[S,H,F,M,N,P]);var U=se(l),_=se(f),W=se(v),V=se(m),K=se(h),q=se(g),z=se(b),G=function(e){var n=(0,u.useRef)(he(e));return(0,u.useEffect)((function(){n.current=he(e)}),[e]),n}({beforeEnter:t,afterEnter:r,beforeLeave:o,afterLeave:i}),X=w();(0,u.useEffect)((function(){if(X&&S===ce.Visible&&null===E.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[E,S,X]);var Y=A&&!L;y((function(){var e=E.current;if(e&&!Y)return R.current=!0,N&&G.current.beforeEnter(),N||G.current.beforeLeave(),N?ue(e,U,_,W,V,(function(e){R.current=!1,e===$.Finished&&G.current.afterEnter()})):ue(e,K,q,z,V,(function(e){R.current=!1,e===$.Finished&&(de(D)||(O(ce.Hidden),M(H),G.current.afterLeave()))}))}),[G,H,R,M,D,E,Y,N,U,_,W,K,q,z]);var J={ref:E},Q=x;return u.createElement(fe.Provider,{value:D},u.createElement(B,{value:d(S,(n={},n[ce.Visible]=I.Open,n[ce.Hidden]=I.Closed,n))},p({props:s({},Q,J),defaultTag:"div",features:ge,visible:S===ce.Visible,name:"Transition.Child"})))}function ye(e){var n,t=e.show,r=e.appear,o=void 0!==r&&r,a=e.unmount,i=c(e,["show","appear","unmount"]),l=D();void 0===t&&null!==l&&(t=d(l,((n={})[I.Open]=!0,n[I.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var f=(0,u.useState)(t?ce.Visible:ce.Hidden),v=f[0],m=f[1],h=pe((function(){m(ce.Hidden)})),g=re(),b=(0,u.useMemo)((function(){return{show:t,appear:o||!g}}),[t,o,g]);(0,u.useEffect)((function(){t?m(ce.Visible):de(h)||m(ce.Hidden)}),[t,h]);var y={unmount:a};return u.createElement(fe.Provider,{value:h},u.createElement(le.Provider,{value:b},p({props:s({},y,{as:u.Fragment,children:u.createElement(be,Object.assign({},y,i))}),defaultTag:u.Fragment,features:ge,visible:v===ce.Visible,name:"Transition"})))}ye.Child=function(e){var n=null!==(0,u.useContext)(le),t=null!==D();return!n&&t?u.createElement(ye,Object.assign({},e)):u.createElement(be,Object.assign({},e))},ye.Root=ye;var xe=t(6049),we=t(1664),Ee=(t(3802),t(5893));function je(){return(0,Ee.jsxs)(J,{className:"relative bg-white",children:[(0,Ee.jsx)("div",{className:"max-w-7xl mx-auto px-7 sm:px-6 sticky",children:(0,Ee.jsxs)("div",{className:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10",children:[(0,Ee.jsxs)("div",{className:"flex justify-start items-center lg:w-0 lg:flex-1",children:[(0,Ee.jsxs)("a",{href:"#",children:[(0,Ee.jsx)("span",{className:"sr-only",children:"Workflow"}),(0,Ee.jsx)("img",{className:"h-8 w-auto sm:h-10",src:"/profile-pic.png",alt:""})]}),(0,Ee.jsx)("span",{className:"text-lg uppercase ml-2 sm:hidden",children:"Kaustubh Wankhede"})]}),(0,Ee.jsx)("div",{className:"-mr-2 -my-2 md:hidden",children:(0,Ee.jsxs)(J.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,Ee.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,Ee.jsx)(xe.Oqj,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,Ee.jsxs)(J.Group,{as:"nav",className:"hidden md:flex space-x-10",children:[(0,Ee.jsx)(we.default,{href:"/",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-500 hover:text-gray-900",children:"Home"})}),(0,Ee.jsx)(we.default,{href:"/#about",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-500 hover:text-gray-900",children:"About"})}),(0,Ee.jsx)(we.default,{href:"/#services",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-500 hover:text-gray-900",children:"Services"})}),(0,Ee.jsx)(we.default,{href:"/#pricing",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-500 hover:text-gray-900",children:"Pricing"})})]}),(0,Ee.jsx)("div",{className:"hidden md:flex items-center justify-end md:flex-1 lg:w-0",children:(0,Ee.jsx)(we.default,{href:"/#pricing",children:(0,Ee.jsx)("a",{className:"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600",children:"Get Started"})})})]})}),(0,Ee.jsx)(ye,{as:u.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,Ee.jsx)(J.Panel,{focus:!0,className:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,Ee.jsxs)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",children:[(0,Ee.jsxs)("div",{className:"pt-5 pb-6 px-5",children:[(0,Ee.jsxs)("div",{className:"flex items-center justify-between",children:[(0,Ee.jsx)("div",{children:(0,Ee.jsx)("img",{className:"h-8 w-auto",src:"/profile-pic.png",alt:"Workflow"})}),(0,Ee.jsx)("div",{className:"-mr-2",children:(0,Ee.jsxs)(J.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,Ee.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,Ee.jsx)(xe.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,Ee.jsx)("div",{className:"mt-6",children:(0,Ee.jsx)("nav",{className:"grid gap-y-8"})})]}),(0,Ee.jsxs)("div",{className:"py-6 px-5 space-y-6",children:[(0,Ee.jsxs)("div",{className:"grid grid-cols-2 gap-y-4 gap-x-8",children:[(0,Ee.jsx)(we.default,{href:"/",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-900 hover:text-gray-700",children:"Home"})}),(0,Ee.jsx)(we.default,{href:"/#about",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-900 hover:text-gray-700",children:"About"})}),(0,Ee.jsx)(we.default,{href:"/#services",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-900 hover:text-gray-700",children:"Services"})}),(0,Ee.jsx)(we.default,{href:"/#pricing",children:(0,Ee.jsx)("a",{className:"text-base font-medium text-gray-900 hover:text-gray-700",children:"Pricing"})})]}),(0,Ee.jsxs)("div",{children:[(0,Ee.jsx)(we.default,{href:"/#pricing",children:(0,Ee.jsx)("a",{className:"w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700",children:"Get Started"})}),(0,Ee.jsx)("p",{className:"mt-6 text-center text-base font-medium text-gray-500"})]})]})]})})})]})}var Ce=function(){var e=(new Date).getFullYear();return(0,Ee.jsx)("footer",{className:"text-gray-600 body-font",children:(0,Ee.jsxs)("div",{className:"max-w-7xl px-18 py-8 mx-auto flex items-center sm:flex-row flex-col",children:[(0,Ee.jsx)("a",{className:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",children:(0,Ee.jsx)("span",{className:"ml-3 text-xl",children:"Kaustubh Wankhede"})}),(0,Ee.jsxs)("p",{className:"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",children:["\xa9 ",e," Kaustubh Wankhede \u2014",(0,Ee.jsx)("a",{href:"https://twitter.com/knyttneve",className:"text-gray-600 ml-1",rel:"noopener noreferrer",target:"_blank",children:"Kwinfosys"})]})]})})},Se=t(9008);function Oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Pe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Oe(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ke=function(e){var n=e.Component,t=e.pageProps;return(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)(Se.default,{children:(0,Ee.jsx)("link",{rel:"icon",href:"/profile-pic.png"})}),(0,Ee.jsx)(je,{}),(0,Ee.jsx)(n,Pe({},t)),(0,Ee.jsx)(Ce,{})]})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7304)}])},3146:function(){},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);