(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2220:(e,t,l)=>{Promise.resolve().then(l.bind(l,1702))},1956:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=l(306)._(l(580));function r(e,t){var l;let r={};"function"==typeof e&&(r.loader=e);let a={...r,...t};return(0,n.default)({...a,modules:null==(l=a.loadableGenerated)?void 0:l.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9827:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let n=l(3719);function r(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return l}},580:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=l(5155),r=l(2115),a=l(9827),o=l(9214);function s(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},l=(0,r.lazy)(()=>t.loader().then(s)),u=t.loading;function c(e){let s=u?(0,n.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,c=i?r.Suspense:r.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(l,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(l,{...e})});return(0,n.jsx)(c,{...i?{fallback:s}:{},children:d})}return c.displayName="LoadableComponent",c}},9214:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return s}});let n=l(5155),r=l(7650),a=l(5861),o=l(8284);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=a.workAsyncStorage.getStore();if(void 0===l)return null;let s=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files;s.push(...t)}}return 0===s.length?null:(0,n.jsx)(n.Fragment,{children:s.map(e=>{let t=l.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},1702:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>y});var n=l(5155),r=l(8985),a=l.n(r);l(347);var o=l(1956),s=l.n(o),i=l(2115),u=l(8885);let c=s()(()=>Promise.all([l.e(173),l.e(59)]).then(l.bind(l,6179)),{loadableGenerated:{webpack:()=>[6179]},ssr:!0,loading:()=>(0,n.jsx)("div",{className:"h-16"})}),d={title:"PRIMA SENTOSA",description:"Dibuat oleh ketua koperasi dan developer Muhammad Luqman Al Hakim"},f=(0,i.memo)(e=>{let{children:t}=e;return(0,n.jsx)("main",{children:t})});function y(e){let{children:t}=e,l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{l.current&&(0,u.Bs)(l.current)},[t]),(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsxs)("head",{children:[(0,n.jsx)("title",{children:d.title}),(0,n.jsx)("meta",{name:"description",content:d.description}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)("body",{className:"".concat(a().className),children:(0,n.jsxs)("div",{ref:l,children:[(0,n.jsx)(c,{}),(0,n.jsx)(f,{children:t})]})})]})}f.displayName="MainContent"},8885:(e,t,l)=>{"use strict";l.d(t,{B0:()=>o,Bs:()=>s,pc:()=>a});var n=l(1478);let r={duration:.6,ease:"power2.out",clearProps:"all",force3D:!0},a=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"next";if(!e||!t)return;let a=Array.from(e.children),o=Array.from(t.children);n.os.set([e,t],{willChange:"transform, opacity"});let s=n.os.timeline({onComplete:()=>{n.os.set([e,t],{willChange:"auto"})}});return"next"===l?s.to(a,{...r,opacity:0,y:-15,scale:.98,stagger:.05}).set(t,{visibility:"visible",scale:1.02}).fromTo(o,{opacity:0,y:20,scale:.98},{...r,opacity:1,y:0,scale:1,stagger:.05}):s.to(a,{...r,opacity:0,y:15,scale:.98,stagger:.05}).set(t,{visibility:"visible",scale:1.02}).fromTo(o,{opacity:0,y:-20,scale:.98},{...r,opacity:1,y:0,scale:1,stagger:.05}),s},o=()=>{window.scrollTo(0,0)},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"next";if(!e)return;let l=Array.from(e.children);n.os.set(e,{willChange:"transform, opacity"});let a=n.os.timeline({onComplete:()=>{n.os.set(e,{willChange:"auto"})}});return a.to(l,{...r,opacity:0,y:"next"===t?-20:20,scale:.98,stagger:.05}).fromTo(l,{opacity:0,y:"next"===t?20:-20,scale:.98},{...r,opacity:1,y:0,scale:1,stagger:.05}),a}},347:()=>{},8985:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[484,690,592,478,441,517,358],()=>t(2220)),_N_E=e.O()}]);