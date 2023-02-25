import{r as c,j as k,a as p,y as _,K as F}from"./index.c271ad25.js";import{C as Z}from"./index.c2390cfe.js";let B={data:""},U=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||B,V=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,X=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,b=(e,t)=>{let r="",o="",a="";for(let s in e){let n=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+n+";":o+=s[1]=="f"?b(n,s):s+"{"+b(n,s[1]=="k"?"":t)+"}":typeof n=="object"?o+=b(n,t?t.replace(/([^,])+/g,i=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):s):n!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=b.p?b.p(s,n):s+":"+n+";")}return r+(t&&a?t+"{"+a+"}":a)+o},x={},P=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+P(e[r]);return t}return e},R=(e,t,r,o,a)=>{let s=P(e),n=x[s]||(x[s]=(l=>{let d=0,u=11;for(;d<l.length;)u=101*u+l.charCodeAt(d++)>>>0;return"go"+u})(s));if(!x[n]){let l=s!==e?e:(d=>{let u,h,f=[{}];for(;u=V.exec(d.replace(X,""));)u[4]?f.shift():u[3]?(h=u[3].replace(T," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][u[1]]=u[2].replace(T," ").trim();return f[0]})(e);x[n]=b(a?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&x.g?x.g:null;return r&&(x.g=x[n]),((l,d,u,h)=>{h?d.data=d.data.replace(h,l):d.data.indexOf(l)===-1&&(d.data=u?l+d.data:d.data+l)})(x[n],t,o,i),n},Y=(e,t,r)=>e.reduce((o,a,s)=>{let n=t[s];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":b(i,""):i===!1?"":i}return o+a+(n==null?"":n)},"");function M(e){let t=this||{},r=e.call?e(t.p):e;return R(r.unshift?r.raw?Y(r,[].slice.call(arguments,1),t.p):r.reduce((o,a)=>Object.assign(o,a&&a.call?a(t.p):a),{}):r,U(t.target),t.g,t.o,t.k)}let H,A,z;M.bind({g:1});let y=M.bind({k:1});function q(e,t,r,o){b.p=t,H=e,A=r,z=o}function v(e,t){let r=this||{};return function(){let o=arguments;function a(s,n){let i=Object.assign({},s),l=i.className||a.className;r.p=Object.assign({theme:A&&A()},i),r.o=/ *go\d+/.test(l),i.className=M.apply(r,o)+(l?" "+l:""),t&&(i.ref=n);let d=e;return e[0]&&(d=i.as||e,delete i.as),z&&d[0]&&z(i),H(d,i)}return t?t(a):a}}var G=e=>typeof e=="function",I=(e,t)=>G(e)?e(t):e,J=(()=>{let e=0;return()=>(++e).toString()})(),S=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),K=20,N=new Map,Q=1e3,W=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),w({type:4,toastId:e})},Q);N.set(e,t)},ee=e=>{let t=N.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,K)};case 1:return t.toast.id&&ee(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?D(e,{type:1,toast:r}):D(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?W(o):e.toasts.forEach(s=>{W(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+a}))}}},L=[],$={toasts:[],pausedAt:void 0},w=e=>{$=D($,e),L.forEach(t=>{t($)})},te={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},re=(e={})=>{let[t,r]=c.exports.useState($);c.exports.useEffect(()=>(L.push(r),()=>{let a=L.indexOf(r);a>-1&&L.splice(a,1)}),[t]);let o=t.toasts.map(a=>{var s,n;return{...e,...e[a.type],...a,duration:a.duration||((s=e[a.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||te[a.type],style:{...e.style,...(n=e[a.type])==null?void 0:n.style,...a.style}}});return{...t,toasts:o}},se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||J()}),E=e=>(t,r)=>{let o=se(t,e,r);return w({type:2,toast:o}),o.id},m=(e,t)=>E("blank")(e,t);m.error=E("error");m.success=E("success");m.loading=E("loading");m.custom=E("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,r)=>{let o=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(a=>(m.success(I(t.success,a),{id:o,...r,...r==null?void 0:r.success}),a)).catch(a=>{m.error(I(t.error,a),{id:o,...r,...r==null?void 0:r.error})}),e};var oe=(e,t)=>{w({type:1,toast:{id:e,height:t}})},ae=()=>{w({type:5,time:Date.now()})},ie=e=>{let{toasts:t,pausedAt:r}=re(e);c.exports.useEffect(()=>{if(r)return;let s=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(s-i.createdAt);if(l<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let o=c.exports.useCallback(()=>{r&&w({type:6,time:Date.now()})},[r]),a=c.exports.useCallback((s,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},u=t.filter(g=>(g.position||d)===(s.position||d)&&g.height),h=u.findIndex(g=>g.id===s.id),f=u.filter((g,O)=>O<h&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,O)=>g+(O.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:oe,startPause:ae,endPause:o,calculateOffset:a}}},ne=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,le=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,me=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fe=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,he=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ge=v("div")`
  position: absolute;
`,xe=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ye=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ve=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.exports.createElement(be,null,t):t:r==="blank"?null:c.exports.createElement(xe,null,c.exports.createElement(ue,{...o}),r!=="loading"&&c.exports.createElement(ge,null,r==="error"?c.exports.createElement(ce,{...o}):c.exports.createElement(he,{...o})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ke=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ce="0%{opacity:0;} 100%{opacity:1;}",Ee="0%{opacity:1;} 100%{opacity:0;}",je=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ne=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Le=(e,t)=>{let r=e.includes("top")?1:-1,[o,a]=S()?[Ce,Ee]:[we(r),ke(r)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$e=c.exports.memo(({toast:e,position:t,style:r,children:o})=>{let a=e.height?Le(e.position||t||"top-center",e.visible):{opacity:0},s=c.exports.createElement(ve,{toast:e}),n=c.exports.createElement(Ne,{...e.ariaProps},I(e.message,e));return c.exports.createElement(je,{className:e.className,style:{...a,...r,...e.style}},typeof o=="function"?o({icon:s,message:n}):c.exports.createElement(c.exports.Fragment,null,s,n))});q(c.exports.createElement);var Ie=({id:e,className:t,style:r,onHeightUpdate:o,children:a})=>{let s=c.exports.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.exports.createElement("div",{ref:s,className:t,style:r},a)},Me=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...a}},Oe=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,j=16,_e=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:a,containerStyle:s,containerClassName:n})=>{let{toasts:i,handlers:l}=ie(r);return c.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:j,left:j,right:j,bottom:j,pointerEvents:"none",...s},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let u=d.position||t,h=l.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),f=Me(u,h);return c.exports.createElement(Ie,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Oe:"",style:f},d.type==="custom"?I(d.message,d):a?a(d):c.exports.createElement($e,{toast:d,position:u}))}))},Fe=m;const Ae=({size:e="20",color:t="currentColor",...r})=>k("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[p("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M10 6.66669V10",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M10 13.3333H10.0088",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ze=({size:e="16",color:t="currentColor",...r})=>k("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[p("path",{d:"M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M8 10.6667V8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M8 5.33331H8.0075",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),De=({size:e="24px",color:t="currentColor",...r})=>k("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[p("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M12.5 7.5L7.5 12.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M7.5 7.5L12.5 12.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Te=({children:e,visible:t,className:r,...o})=>p("div",{className:_("flex items-start bg-grey-90 p-base border rounded-rounded shadow-toaster mb-xsmall last:mb-0",{"animate-enter":t},{"animate-leave":!t},r),...o,children:e}),We=({toast:e,type:t,title:r,message:o})=>{const a=()=>{m.dismiss(e.id)};return k(Te,{visible:e.visible,className:"w-[380px]",children:[p("div",{children:Pe(t)}),k("div",{className:"flex flex-col ml-small mr-base gap-y-2xsmall flex-grow text-white",children:[p("span",{className:"inter-small-semibold",children:r}),p("span",{className:"inter-small-regular text-grey-20",children:o})]}),k("div",{children:[p("button",{onClick:a,children:p(F,{size:C,className:"text-grey-40"})}),p("span",{className:"sr-only",children:"Close"})]})]})},C=20;function Pe(e){switch(e){case"success":return p(Z,{size:C,className:"text-emerald-40"});case"warning":return p(Ae,{size:C,className:"text-orange-40"});case"error":return p(De,{size:C,className:"text-rose-40"});default:return p(ze,{size:C,className:"text-grey-40"})}}const Ze=()=>(e,t,r)=>{m.custom(o=>p(We,{toast:o,type:r,title:e,message:t}),{position:"top-right",duration:3e3})};export{Ae as A,ze as I,Te as T,De as X,Fe as _,_e as a,m as n,Ze as u};
