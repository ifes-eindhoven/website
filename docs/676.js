/*! For license information please see 676.js.LICENSE.txt */
(self.webpackChunkifes_website=self.webpackChunkifes_website||[]).push([[676],{342:function(e,t,n){e.exports=function(e,t,n,i){"use strict";const s=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},r=s(e),o=s(n),l=s(i);class a extends l.default{constructor(e,n){super(),(e=t.getElement(e))&&(this._element=e,this._config=this._getConfig(n),r.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,i=!0){t.executeAfterTransition(e,n,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return r.default.get(t.getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.1"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}return a}(n(957),n(686),n(265),n(181))},269:function(e,t,n){e.exports=function(e,t,n){"use strict";const i=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},s=i(t),r=i(n),o='[data-bs-toggle="button"]';class l extends r.default{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=l.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}return s.default.on(document,"click.bs.button.data-api",o,(e=>{e.preventDefault();const t=e.target.closest(o);l.getOrCreateInstance(t).toggle()})),e.defineJQueryPlugin(l),l}(n(686),n(265),n(342))},496:function(e,t,n){e.exports=function(e,t,n,i,s,r){"use strict";const o=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},l=o(t),a=o(n),c=o(i),u=o(s),d=o(r),f="next",h="prev",g="left",p="right",m="slid.bs.carousel",_="carousel",b="active",v=".active",y=".carousel-item",E={ArrowLeft:p,ArrowRight:g},w={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},A={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class C extends d.default{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=c.default.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===_&&this.cycle()}static get Default(){return w}static get DefaultType(){return A}static get NAME(){return"carousel"}next(){this._slide(f)}nextWhenVisible(){!document.hidden&&e.isVisible(this._element)&&this.next()}prev(){this._slide(h)}pause(){this._isSliding&&e.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?l.default.one(this._element,m,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void l.default.one(this._element,m,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?f:h;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&l.default.on(this._element,"keydown.bs.carousel",(e=>this._keydown(e))),"hover"===this._config.pause&&(l.default.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),l.default.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&u.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of c.default.find(".carousel-item img",this._element))l.default.on(e,"dragstart.bs.carousel",(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder(g)),rightCallback:()=>this._slide(this._directionToOrder(p)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new u.default(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=E[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=c.default.findOne(v,this._indicatorsElement);t.classList.remove(b),t.removeAttribute("aria-current");const n=c.default.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(b),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const i=this._getActive(),s=t===f,r=n||e.getNextActiveElement(this._getItems(),i,s,this._config.wrap);if(r===i)return;const o=this._getItemIndex(r),a=e=>l.default.trigger(this._element,e,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(a("slide.bs.carousel").defaultPrevented)return;if(!i||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=s?"carousel-item-start":"carousel-item-end",d=s?"carousel-item-next":"carousel-item-prev";r.classList.add(d),e.reflow(r),i.classList.add(u),r.classList.add(u);this._queueCallback((()=>{r.classList.remove(u,d),r.classList.add(b),i.classList.remove(b,d,u),this._isSliding=!1,a(m)}),i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return c.default.findOne(".active.carousel-item",this._element)}_getItems(){return c.default.find(y,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return e.isRTL()?t===g?h:f:t===g?f:h}_orderToDirection(t){return e.isRTL()?t===h?g:p:t===h?p:g}static jQueryInterface(e){return this.each((function(){const t=C.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}return l.default.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const n=e.getElementFromSelector(this);if(!n||!n.classList.contains(_))return;t.preventDefault();const i=C.getOrCreateInstance(n),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===a.default.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),l.default.on(window,"load.bs.carousel.data-api",(()=>{const e=c.default.find('[data-bs-ride="carousel"]');for(const t of e)C.getOrCreateInstance(t)})),e.defineJQueryPlugin(C),C}(n(686),n(265),n(161),n(196),n(311),n(342))},228:function(e,t,n){e.exports=function(e,t,n,i){"use strict";const s=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},r=s(t),o=s(n),l=s(i),a="show",c="collapse",u="collapsing",d='[data-bs-toggle="collapse"]',f={parent:null,toggle:!0},h={parent:"(null|element)",toggle:"boolean"};class g extends l.default{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const i=o.default.find(d);for(const t of i){const n=e.getSelectorFromElement(t),i=o.default.find(n).filter((e=>e===this._element));null!==n&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return f}static get DefaultType(){return h}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>g.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(r.default.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(c),this._element.classList.add(u),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(u),this._element.classList.add(c,a),this._element.style[t]="",r.default.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(r.default.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,e.reflow(this._element),this._element.classList.add(u),this._element.classList.remove(c,a);for(const t of this._triggerArray){const n=e.getElementFromSelector(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(u),this._element.classList.add(c),r.default.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(e=this._element){return e.classList.contains(a)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=e.getElement(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(d);for(const n of t){const t=e.getElementFromSelector(n);t&&this._addAriaAndCollapsedClass([n],this._isShown(t))}}_getFirstLevelChildren(e){const t=o.default.find(":scope .collapse .collapse",this._config.parent);return o.default.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=g.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}return r.default.on(document,"click.bs.collapse.data-api",d,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const n=e.getSelectorFromElement(this),i=o.default.find(n);for(const e of i)g.getOrCreateInstance(e,{toggle:!1}).toggle()})),e.defineJQueryPlugin(g),g}(n(686),n(265),n(196),n(342))},957:function(e){e.exports=function(){"use strict";const e=new Map;return{set(t,n,i){e.has(t)||e.set(t,new Map);const s=e.get(t);s.has(n)||0===s.size?s.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const i=e.get(t);i.delete(n),0===i.size&&e.delete(t)}}}()},265:function(e,t,n){e.exports=function(e){"use strict";const t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,i=/::\d+$/,s={};let r=1;const o={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(e,t){return t&&`${t}::${r++}`||e.uidEvent||r++}function c(e){const t=a(e);return e.uidEvent=t,s[t]=s[t]||{},s[t]}function u(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function d(e,t,n){const i="string"==typeof t,s=i?n:t||n;let r=p(e);return l.has(r)||(r=e),[i,s,r]}function f(e,n,i,s,r){if("string"!=typeof n||!e)return;let[l,f,h]=d(n,i,s);if(n in o){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};f=e(f)}const g=c(e),p=g[h]||(g[h]={}),b=u(p,f,l?i:null);if(b)return void(b.oneOff=b.oneOff&&r);const v=a(f,n.replace(t,"")),y=l?function(e,t,n){return function i(s){const r=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const l of r)if(l===o)return _(s,{delegateTarget:o}),i.oneOff&&m.off(e,s.type,t,n),n.apply(o,[s])}}(e,i,f):function(e,t){return function n(i){return _(i,{delegateTarget:e}),n.oneOff&&m.off(e,i.type,t),t.apply(e,[i])}}(e,f);y.delegationSelector=l?i:null,y.callable=f,y.oneOff=r,y.uidEvent=v,p[v]=y,e.addEventListener(h,y,l)}function h(e,t,n,i,s){const r=u(t[n],i,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function g(e,t,n,i){const s=t[n]||{};for(const r of Object.keys(s))if(r.includes(i)){const i=s[r];h(e,t,n,i.callable,i.delegationSelector)}}function p(e){return e=e.replace(n,""),o[e]||e}const m={on(e,t,n,i){f(e,t,n,i,!1)},one(e,t,n,i){f(e,t,n,i,!0)},off(e,t,n,s){if("string"!=typeof t||!e)return;const[r,o,l]=d(t,n,s),a=l!==t,u=c(e),f=u[l]||{},p=t.startsWith(".");if(void 0===o){if(p)for(const n of Object.keys(u))g(e,u,n,t.slice(1));for(const n of Object.keys(f)){const s=n.replace(i,"");if(!a||t.includes(s)){const t=f[n];h(e,u,l,t.callable,t.delegationSelector)}}}else{if(!Object.keys(f).length)return;h(e,u,l,o,r?n:null)}},trigger(t,n,i){if("string"!=typeof n||!t)return null;const s=e.getjQuery();let r=null,o=!0,l=!0,a=!1;n!==p(n)&&s&&(r=s.Event(n,i),s(t).trigger(r),o=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),a=r.isDefaultPrevented());let c=new Event(n,{bubbles:o,cancelable:!0});return c=_(c,i),a&&c.preventDefault(),l&&t.dispatchEvent(c),c.defaultPrevented&&r&&r.preventDefault(),c}};function _(e,t){for(const[n,i]of Object.entries(t||{}))try{e[n]=i}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>i})}return e}return m}(n(686))},161:function(e){e.exports=function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,i){e.setAttribute(`data-bs-${t(n)}`,i)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={},i=Object.keys(t.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const s of i){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),n[i]=e(t.dataset[s])}return n},getDataAttribute:(n,i)=>e(n.getAttribute(`data-bs-${t(i)}`))}}()},196:function(e,t,n){e.exports=function(e){"use strict";return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(n,t).filter((t=>!e.isDisabled(t)&&e.isVisible(t)))}}}(n(686))},181:function(e,t,n){e.exports=function(e,t){"use strict";const n=(e=>e&&"object"==typeof e&&"default"in e?e:{default:e})(t);return class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(t,i){const s=e.isElement(i)?n.default.getDataAttribute(i,"config"):{};return{...this.constructor.Default,..."object"==typeof s?s:{},...e.isElement(i)?n.default.getDataAttributes(i):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const i of Object.keys(n)){const s=n[i],r=t[i],o=e.isElement(r)?"element":e.toType(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}}}}(n(686),n(161))},686:function(e,t){!function(e){"use strict";const t="transitionend",n=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},i=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0},s=e=>{e.dispatchEvent(new Event(t))},r=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?o(e.parentNode):null},l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,a=[],c=e=>{"loading"===document.readyState?(a.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of a)e()})),a.push(e)):e()},u=e=>{"function"==typeof e&&e()};e.defineJQueryPlugin=e=>{c((()=>{const t=l();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},e.execute=u,e.executeAfterTransition=(e,n,r=!0)=>{if(!r)return void u(e);const o=i(n)+5;let l=!1;const a=({target:i})=>{i===n&&(l=!0,n.removeEventListener(t,a),u(e))};n.addEventListener(t,a),setTimeout((()=>{l||s(n)}),o)},e.findShadowRoot=o,e.getElement=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,e.getElementFromSelector=e=>{const t=n(e);return t?document.querySelector(t):null},e.getNextActiveElement=(e,t,n,i)=>{const s=e.length;let r=e.indexOf(t);return-1===r?!n&&i?e[s-1]:e[0]:(r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))])},e.getSelectorFromElement=e=>{const t=n(e);return t&&document.querySelector(t)?t:null},e.getTransitionDurationFromElement=i,e.getUID=e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e},e.getjQuery=l,e.isDisabled=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),e.isElement=r,e.isRTL=()=>"rtl"===document.documentElement.dir,e.isVisible=e=>{if(!r(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},e.noop=()=>{},e.onDOMContentLoaded=c,e.reflow=e=>{e.offsetHeight},e.toType=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e.triggerTransitionEnd=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(t)},311:function(e,t,n){e.exports=function(e,t,n){"use strict";const i=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},s=i(e),r=i(t),o=".bs.swipe",l={endCallback:null,leftCallback:null,rightCallback:null},a={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class c extends s.default{constructor(e,t){super(),this._element=e,e&&c.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return l}static get DefaultType(){return a}static get NAME(){return"swipe"}dispose(){r.default.off(this._element,o)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),n.execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&n.execute(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(r.default.on(this._element,"pointerdown.bs.swipe",(e=>this._start(e))),r.default.on(this._element,"pointerup.bs.swipe",(e=>this._end(e))),this._element.classList.add("pointer-event")):(r.default.on(this._element,"touchstart.bs.swipe",(e=>this._start(e))),r.default.on(this._element,"touchmove.bs.swipe",(e=>this._move(e))),r.default.on(this._element,"touchend.bs.swipe",(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return c}(n(181),n(265),n(686))}}]);