(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2220:(e,t,n)=>{Promise.resolve().then(n.bind(n,5665))},5353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=n(2115);function a(e,t){let n=(0,r.useRef)(()=>{}),a=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),a.current()):(n.current=s(e,r),a.current=s(t,r))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5665:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(5155),a=n(340),s=n.n(a);n(347);var l=n(2115),o=n(8173),i=n.n(o),c=n(6658);let d=()=>{let e=(0,c.usePathname)(),[t,n]=(0,l.useState)(!1),[a,s]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let o=[{name:"Home",href:"/"},{name:"News",href:"/news"},{name:"Donate",href:"/donate"},{name:"About Us",href:"/about"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"navbar fixed top-0 z-50 w-full transition-all duration-300 ".concat(t?"bg-gradient-to-r from-base-200/95 to-base-200/90 backdrop-blur-sm border-b border-base-300 shadow-lg":"bg-transparent"),children:[(0,r.jsx)("div",{className:"navbar-start",children:(0,r.jsx)("button",{onClick:()=>s(!0),className:"btn btn-ghost btn-circle lg:hidden ".concat(t?"":"text-white"),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),(0,r.jsx)("div",{className:"navbar-center",children:(0,r.jsx)("div",{role:"tablist",className:"hidden lg:flex tabs tabs-border gap-6",children:o.map(n=>(0,r.jsx)(i(),{href:n.href,role:"tab",className:"tab tab-bordered transition-all duration-300 hover:text-primary ".concat(t?"":"text-white hover:text-white/80"," ").concat(e===n.href||(null==e?void 0:e.startsWith(n.href))&&"/"!==n.href?"tab-active font-medium border-primary":"hover:border-primary/50"),children:n.name},n.name))})}),(0,r.jsx)("div",{className:"navbar-end"})]}),a&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 lg:hidden",onClick:()=>s(!1)}),(0,r.jsxs)("div",{className:"fixed top-0 left-0 h-full w-80 bg-base-200 z-50 transform transition-all duration-300 ease-in-out lg:hidden ".concat(a?"translate-x-0 shadow-2xl":"-translate-x-full"),children:[(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-base-300 bg-base-300/30",children:[(0,r.jsx)("div",{className:"text-xl font-bold",children:"Sentosa SPSS"}),(0,r.jsx)("button",{onClick:()=>s(!1),className:"btn btn-ghost btn-sm btn-circle hover:rotate-90 transition-transform duration-200",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("ul",{className:"menu menu-vertical gap-2",children:o.map((t,n)=>(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:t.href,onClick:()=>s(!1),className:"flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-base-300 \n                                        ".concat(e===t.href?"bg-primary text-primary-content font-medium":"hover:translate-x-1"),style:{animationDelay:"".concat(100*n,"ms"),animation:a?"slideIn 0.4s ease forwards":"none"},children:t.name})},t.name))})}),(0,r.jsx)("div",{className:"absolute bottom-0 w-full p-4 border-t border-base-300 text-center text-sm text-base-content/70",children:"\xa9 2024 Sentosa SPSS"})]})]})},u={title:"PRIMA SENTOSA",description:"Dibuat oleh ketua koperasi dan developer Muhammad Luqman Al Hakim"};function h(e){let{children:t}=e;return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("meta",{name:"description",content:u.description})]}),(0,r.jsx)("body",{className:"".concat(s().className),children:(0,r.jsxs)("div",{className:"relative min-h-screen z-0",children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{children:t})]})})]})}},347:()=>{},340:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[758,173,441,517,358],()=>t(2220)),_N_E=e.O()}]);