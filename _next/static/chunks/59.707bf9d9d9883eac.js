"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=r(2115);function a(e,t){let r=(0,n.useRef)(()=>{}),a=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),a.current()):(r.current=s(e,n),a.current=s(t,n))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6179:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(5155),a=r(2115),s=r(8173),l=r.n(s),o=r(6658);let i=()=>{let e=(0,o.usePathname)(),[t,r]=(0,a.useState)(!1),[s,i]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let d=[{name:"Home",href:"/"},{name:"News",href:"/news"},{name:"Donate",href:"/donate"},{name:"About Us",href:"/about"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"navbar fixed top-0 z-50 w-full transition-all duration-300 ".concat(t?"bg-gradient-to-r from-base-200/95 to-base-200/90 backdrop-blur-sm border-b border-base-300 shadow-lg":"bg-transparent"),children:[(0,n.jsx)("div",{className:"navbar-start",children:(0,n.jsx)("button",{onClick:()=>i(!0),className:"btn btn-ghost btn-circle lg:hidden ".concat(t?"":"text-white"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),(0,n.jsx)("div",{className:"navbar-center",children:(0,n.jsx)("div",{role:"tablist",className:"hidden lg:flex tabs tabs-border gap-6",children:d.map(r=>(0,n.jsx)(l(),{href:r.href,role:"tab",className:"tab tab-bordered transition-all duration-300 hover:text-primary ".concat(t?"":"text-white hover:text-white/80"," ").concat(e===r.href||(null==e?void 0:e.startsWith(r.href))&&"/"!==r.href?"tab-active font-medium border-primary":"hover:border-primary/50"),children:r.name},r.name))})}),(0,n.jsx)("div",{className:"navbar-end"})]}),s&&(0,n.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 lg:hidden",onClick:()=>i(!1)}),(0,n.jsxs)("div",{className:"fixed top-0 left-0 h-full w-80 bg-base-200 z-50 transform transition-all duration-300 ease-in-out lg:hidden ".concat(s?"translate-x-0 shadow-2xl":"-translate-x-full"),children:[(0,n.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-base-300 bg-base-300/30",children:[(0,n.jsx)("div",{className:"text-xl font-bold",children:"Sentosa SPSS"}),(0,n.jsx)("button",{onClick:()=>i(!1),className:"btn btn-ghost btn-sm btn-circle hover:rotate-90 transition-transform duration-200",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)("ul",{className:"menu menu-vertical gap-2",children:d.map((t,r)=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:t.href,onClick:()=>i(!1),className:"flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-base-300 \n                                        ".concat(e===t.href||(null==e?void 0:e.startsWith(t.href))&&"/"!==t.href?"bg-primary text-primary-content font-medium":"hover:translate-x-1"),style:{animationDelay:"".concat(100*r,"ms"),animation:s?"slideIn 0.4s ease forwards":"none"},children:t.name})},t.name))})}),(0,n.jsx)("div",{className:"absolute bottom-0 w-full p-4 border-t border-base-300 text-center text-sm text-base-content/70",children:"\xa9 2024 Sentosa SPSS"})]})]})}}}]);