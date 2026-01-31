const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cd-E3uJQ.js","assets/hooks-Z4K4jYqJ.js","assets/PlayArrow-7H6eO1yT.js","assets/CardContent-CFON729b.js","assets/index-Bws5bbKk.js","assets/index-tn0RQdqM.css","assets/index-DkVD5cH0.js","assets/api-client-Bu6gl70M.js","assets/Alert-ChHryFUl.js","assets/TextField-DtJZXA4v.js","assets/index-CtjYHwrF.js","assets/atoms-Bq5-xkqt.js","assets/index-DlMmPo2Q.js","assets/index-DxI9vCuo.js"])))=>i.map(i=>d[i]);
import{b as w,N as Ud,M as Oo,j as k,G as Fd,O as $d,Q as Bd,S as Vd,s as Hd,l as se,U as Wd,V as zd,x as Je,W as Gd,X as ac,Y as Ms,Z as qd,J as Kd,_ as Yd,o as xe,h as ke,$ as cc,d as Wl,a0 as Jd,g as Pe,i as _e,m as re,n as Te,p as Le,q as zl,P as Zr,t as dt,v as ei,c as jn,a1 as lc,a2 as co,k as Xd,a3 as Do,B as ar,a4 as Gl,a5 as zr,a6 as ql,C as Se,a7 as Qd,e as Zd,w as On,z as ef,a8 as Kl,a9 as Rn,aa as No,ab as tf,y as Ai,ac as nf,E as rf,ad as uc,F as At,H as Dn,ae as sf,af as Yl,ag as Jl,K as Xl,I as js}from"./hooks-Z4K4jYqJ.js";import{e as hc,l as of,_ as Sr,t as af,r as cf}from"./index-Bws5bbKk.js";const lf={show:()=>{throw new Error("Not supported on server side")},close:()=>{throw new Error("Not supported on server side")}};function uf(){const t=w.useContext(Ud);return t||lf}function hf({styles:t,themeId:e,defaultTheme:n={}}){const r=Oo(n),i=typeof t=="function"?t(e&&r[e]||r):t;return k.jsx(Fd,{styles:i})}const df=t=>{var r;const e={systemProps:{},otherProps:{}},n=((r=t==null?void 0:t.theme)==null?void 0:r.unstable_sxConfig)??Bd;return Object.keys(t).forEach(i=>{n[i]?e.systemProps[i]=t[i]:e.otherProps[i]=t[i]}),e};function Lo(t){const{sx:e,...n}=t,{systemProps:r,otherProps:i}=df(n);let o;return Array.isArray(e)?o=[r,...e]:typeof e=="function"?o=(...a)=>{const l=e(...a);return $d(l)?{...r,...l}:r}:o={...r,...e},{...i,sx:o}}function ff(t={}){const{themeId:e,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=t,o=Vd("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(Hd);return w.forwardRef(function(u,d){const f=Oo(n),{className:_,component:b="div",...E}=Lo(u);return k.jsx(o,{as:b,ref:d,className:se(_,i?i(r):r),theme:e&&f[e]||f,...E})})}const pf=Wd();function gf(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:zd(e.components[n].defaultProps,r)}function mf({props:t,name:e,defaultTheme:n,themeId:r}){let i=Oo(n);return r&&(i=i[r]||i),gf({theme:i,name:e,props:t})}function dc(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function yf(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function vf(t,e){var n,r,i;return w.isValidElement(t)&&e.indexOf(t.type.muiName??((i=(r=(n=t.type)==null?void 0:n._payload)==null?void 0:r.value)==null?void 0:i.muiName))!==-1}function Et(t){return Je(t).defaultView||window}function wf({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=w.useRef(t!==void 0),[o,a]=w.useState(e),l=i?t:o,u=w.useCallback(d=>{i||a(d)},[]);return[l,u]}function bf(t=window){const e=t.document.documentElement.clientWidth;return t.innerWidth-e}const Ef=Gd(),If=pf("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Tf(t){return mf({props:t,name:"MuiStack",defaultTheme:Ef})}function _f(t,e){const n=w.Children.toArray(t).filter(Boolean);return n.reduce((r,i,o)=>(r.push(i),o<n.length-1&&r.push(w.cloneElement(e,{key:`separator-${o}`})),r),[])}const Sf=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Af=({ownerState:t,theme:e})=>{let n={display:"flex",flexDirection:"column",...ac({theme:e},Ms({values:t.direction,breakpoints:e.breakpoints.values}),r=>({flexDirection:r}))};if(t.spacing){const r=qd(e),i=Object.keys(e.breakpoints.values).reduce((u,d)=>((typeof t.spacing=="object"&&t.spacing[d]!=null||typeof t.direction=="object"&&t.direction[d]!=null)&&(u[d]=!0),u),{}),o=Ms({values:t.direction,base:i}),a=Ms({values:t.spacing,base:i});typeof o=="object"&&Object.keys(o).forEach((u,d,f)=>{if(!o[u]){const b=d>0?o[f[d-1]]:"column";o[u]=b}}),n=Kd(n,ac({theme:e},a,(u,d)=>t.useFlexGap?{gap:cc(r,u)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Sf(d?o[d]:t.direction)}`]:cc(r,u)}}))}return n=Yd(e.breakpoints,n),n};function Ql(t={}){const{createStyledComponent:e=If,useThemeProps:n=Tf,componentName:r="MuiStack"}=t,i=()=>xe({root:["root"]},u=>ke(r,u),{}),o=e(Af);return w.forwardRef(function(u,d){const f=n(u),_=Lo(f),{component:b="div",direction:E="column",spacing:A=0,divider:O,children:C,className:R,useFlexGap:D=!1,...P}=_,L={direction:E,spacing:A,useFlexGap:D},j=i();return k.jsx(o,{as:b,ownerState:L,ref:d,className:se(j.root,R),...P,children:O?_f(C,O):C})})}const Us=Ql();function Cf(t){return k.jsx(hf,{...t,defaultTheme:Jd,themeId:Wl})}function Zl(t){return function(n){return k.jsx(Cf,{styles:typeof t=="function"?r=>t({theme:r,...n}):t})}}function Rf(){return Lo}function lo(t,e){if(!t)return e;if(typeof t=="function"||typeof e=="function")return i=>{const o=typeof e=="function"?e(i):e,a=typeof t=="function"?t({...i,...o}):t,l=se(i==null?void 0:i.className,o==null?void 0:o.className,a==null?void 0:a.className);return{...o,...a,...!!l&&{className:l},...(o==null?void 0:o.style)&&(a==null?void 0:a.style)&&{style:{...o.style,...a.style}},...(o==null?void 0:o.sx)&&(a==null?void 0:a.sx)&&{sx:[...Array.isArray(o.sx)?o.sx:[o.sx],...Array.isArray(a.sx)?a.sx:[a.sx]]}}};const n=e,r=se(n==null?void 0:n.className,t==null?void 0:t.className);return{...e,...t,...!!r&&{className:r},...(n==null?void 0:n.style)&&(t==null?void 0:t.style)&&{style:{...n.style,...t.style}},...(n==null?void 0:n.sx)&&(t==null?void 0:t.sx)&&{sx:[...Array.isArray(n.sx)?n.sx:[n.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}function xf(t){return ke("MuiTypography",t)}const fc=Pe("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),kf={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Pf=Rf(),Of=t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:a}=t,l={root:["root",o,t.align!=="inherit"&&`align${Te(e)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return xe(l,xf,a)},Df=re("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${Te(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(Le(({theme:t})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([n,r])=>n!=="inherit"&&r&&typeof r=="object").map(([n,r])=>({props:{variant:n},style:r})),...Object.entries(t.palette).filter(zl()).map(([n])=>({props:{color:n},style:{color:(t.vars||t).palette[n].main}})),...Object.entries(((e=t.palette)==null?void 0:e.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${Te(n)}`},style:{color:(t.vars||t).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),pc={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},tt=w.forwardRef(function(e,n){const{color:r,...i}=_e({props:e,name:"MuiTypography"}),o=!kf[r],a=Pf({...i,...o&&{color:r}}),{align:l="inherit",className:u,component:d,gutterBottom:f=!1,noWrap:_=!1,paragraph:b=!1,variant:E="body1",variantMapping:A=pc,...O}=a,C={...a,align:l,color:r,className:u,component:d,gutterBottom:f,noWrap:_,paragraph:b,variant:E,variantMapping:A},R=d||(b?"p":A[E]||pc[E])||"span",D=Of(C);return k.jsx(Df,{as:R,ref:n,className:se(D.root,u),...O,ownerState:C,style:{...l!=="inherit"&&{"--Typography-textAlign":l},...O.style}})});function Nf(t){return ke("MuiAppBar",t)}Pe("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Lf=t=>{const{color:e,position:n,classes:r}=t,i={root:["root",`color${Te(e)}`,`position${Te(n)}`]};return xe(i,Nf,r)},gc=(t,e)=>t?`${t==null?void 0:t.replace(")","")}, ${e})`:e,Mf=re(Zr,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`position${Te(n.position)}`],e[`color${Te(n.color)}`]]}})(Le(({theme:t})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter(zl(["contrastText"])).map(([e])=>({props:{color:e},style:{"--AppBar-background":(t.vars??t).palette[e].main,"--AppBar-color":(t.vars??t).palette[e].contrastText}})),{props:e=>e.enableColorOnDark===!0&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:e=>e.enableColorOnDark===!1&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?gc(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?gc(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}))),jf=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiAppBar"}),{className:i,color:o="primary",enableColorOnDark:a=!1,position:l="fixed",...u}=r,d={...r,color:o,position:l,enableColorOnDark:a},f=Lf(d);return k.jsx(Mf,{square:!0,component:"header",ownerState:d,elevation:4,className:se(f.root,i,l==="fixed"&&"mui-fixed"),ref:n,...u})});var Ge="top",rt="bottom",it="right",qe="left",Mo="auto",ti=[Ge,rt,it,qe],tr="start",Gr="end",Uf="clippingParents",eu="viewport",Ar="popper",Ff="reference",mc=ti.reduce(function(t,e){return t.concat([e+"-"+tr,e+"-"+Gr])},[]),tu=[].concat(ti,[Mo]).reduce(function(t,e){return t.concat([e,e+"-"+tr,e+"-"+Gr])},[]),$f="beforeRead",Bf="read",Vf="afterRead",Hf="beforeMain",Wf="main",zf="afterMain",Gf="beforeWrite",qf="write",Kf="afterWrite",Yf=[$f,Bf,Vf,Hf,Wf,zf,Gf,qf,Kf];function _t(t){return t?(t.nodeName||"").toLowerCase():null}function Qe(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Un(t){var e=Qe(t).Element;return t instanceof e||t instanceof Element}function nt(t){var e=Qe(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function jo(t){if(typeof ShadowRoot>"u")return!1;var e=Qe(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Jf(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},o=e.elements[n];!nt(o)||!_t(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(a){var l=i[a];l===!1?o.removeAttribute(a):o.setAttribute(a,l===!0?"":l)}))})}function Xf(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],o=e.attributes[r]||{},a=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),l=a.reduce(function(u,d){return u[d]="",u},{});!nt(i)||!_t(i)||(Object.assign(i.style,l),Object.keys(o).forEach(function(u){i.removeAttribute(u)}))})}}const Qf={name:"applyStyles",enabled:!0,phase:"write",fn:Jf,effect:Xf,requires:["computeStyles"]};function It(t){return t.split("-")[0]}var Nn=Math.max,qi=Math.min,nr=Math.round;function uo(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function nu(){return!/^((?!chrome|android).)*safari/i.test(uo())}function rr(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,o=1;e&&nt(t)&&(i=t.offsetWidth>0&&nr(r.width)/t.offsetWidth||1,o=t.offsetHeight>0&&nr(r.height)/t.offsetHeight||1);var a=Un(t)?Qe(t):window,l=a.visualViewport,u=!nu()&&n,d=(r.left+(u&&l?l.offsetLeft:0))/i,f=(r.top+(u&&l?l.offsetTop:0))/o,_=r.width/i,b=r.height/o;return{width:_,height:b,top:f,right:d+_,bottom:f+b,left:d,x:d,y:f}}function Uo(t){var e=rr(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function ru(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&jo(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function jt(t){return Qe(t).getComputedStyle(t)}function Zf(t){return["table","td","th"].indexOf(_t(t))>=0}function cn(t){return((Un(t)?t.ownerDocument:t.document)||window.document).documentElement}function ls(t){return _t(t)==="html"?t:t.assignedSlot||t.parentNode||(jo(t)?t.host:null)||cn(t)}function yc(t){return!nt(t)||jt(t).position==="fixed"?null:t.offsetParent}function ep(t){var e=/firefox/i.test(uo()),n=/Trident/i.test(uo());if(n&&nt(t)){var r=jt(t);if(r.position==="fixed")return null}var i=ls(t);for(jo(i)&&(i=i.host);nt(i)&&["html","body"].indexOf(_t(i))<0;){var o=jt(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function ni(t){for(var e=Qe(t),n=yc(t);n&&Zf(n)&&jt(n).position==="static";)n=yc(n);return n&&(_t(n)==="html"||_t(n)==="body"&&jt(n).position==="static")?e:n||ep(t)||e}function Fo(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Mr(t,e,n){return Nn(t,qi(e,n))}function tp(t,e,n){var r=Mr(t,e,n);return r>n?n:r}function iu(){return{top:0,right:0,bottom:0,left:0}}function su(t){return Object.assign({},iu(),t)}function ou(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var np=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,su(typeof e!="number"?e:ou(e,ti))};function rp(t){var e,n=t.state,r=t.name,i=t.options,o=n.elements.arrow,a=n.modifiersData.popperOffsets,l=It(n.placement),u=Fo(l),d=[qe,it].indexOf(l)>=0,f=d?"height":"width";if(!(!o||!a)){var _=np(i.padding,n),b=Uo(o),E=u==="y"?Ge:qe,A=u==="y"?rt:it,O=n.rects.reference[f]+n.rects.reference[u]-a[u]-n.rects.popper[f],C=a[u]-n.rects.reference[u],R=ni(o),D=R?u==="y"?R.clientHeight||0:R.clientWidth||0:0,P=O/2-C/2,L=_[E],j=D-b[f]-_[A],M=D/2-b[f]/2+P,v=Mr(L,M,j),m=u;n.modifiersData[r]=(e={},e[m]=v,e.centerOffset=v-M,e)}}function ip(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||ru(e.elements.popper,i)&&(e.elements.arrow=i))}const sp={name:"arrow",enabled:!0,phase:"main",fn:rp,effect:ip,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ir(t){return t.split("-")[1]}var op={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ap(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:nr(n*i)/i||0,y:nr(r*i)/i||0}}function vc(t){var e,n=t.popper,r=t.popperRect,i=t.placement,o=t.variation,a=t.offsets,l=t.position,u=t.gpuAcceleration,d=t.adaptive,f=t.roundOffsets,_=t.isFixed,b=a.x,E=b===void 0?0:b,A=a.y,O=A===void 0?0:A,C=typeof f=="function"?f({x:E,y:O}):{x:E,y:O};E=C.x,O=C.y;var R=a.hasOwnProperty("x"),D=a.hasOwnProperty("y"),P=qe,L=Ge,j=window;if(d){var M=ni(n),v="clientHeight",m="clientWidth";if(M===Qe(n)&&(M=cn(n),jt(M).position!=="static"&&l==="absolute"&&(v="scrollHeight",m="scrollWidth")),M=M,i===Ge||(i===qe||i===it)&&o===Gr){L=rt;var y=_&&M===j&&j.visualViewport?j.visualViewport.height:M[v];O-=y-r.height,O*=u?1:-1}if(i===qe||(i===Ge||i===rt)&&o===Gr){P=it;var I=_&&M===j&&j.visualViewport?j.visualViewport.width:M[m];E-=I-r.width,E*=u?1:-1}}var T=Object.assign({position:l},d&&op),S=f===!0?ap({x:E,y:O},Qe(n)):{x:E,y:O};if(E=S.x,O=S.y,u){var p;return Object.assign({},T,(p={},p[L]=D?"0":"",p[P]=R?"0":"",p.transform=(j.devicePixelRatio||1)<=1?"translate("+E+"px, "+O+"px)":"translate3d("+E+"px, "+O+"px, 0)",p))}return Object.assign({},T,(e={},e[L]=D?O+"px":"",e[P]=R?E+"px":"",e.transform="",e))}function cp(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,a=o===void 0?!0:o,l=n.roundOffsets,u=l===void 0?!0:l,d={placement:It(e.placement),variation:ir(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,vc(Object.assign({},d,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:u})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,vc(Object.assign({},d,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const lp={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:cp,data:{}};var Ci={passive:!0};function up(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,o=i===void 0?!0:i,a=r.resize,l=a===void 0?!0:a,u=Qe(e.elements.popper),d=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&d.forEach(function(f){f.addEventListener("scroll",n.update,Ci)}),l&&u.addEventListener("resize",n.update,Ci),function(){o&&d.forEach(function(f){f.removeEventListener("scroll",n.update,Ci)}),l&&u.removeEventListener("resize",n.update,Ci)}}const hp={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:up,data:{}};var dp={left:"right",right:"left",bottom:"top",top:"bottom"};function Ui(t){return t.replace(/left|right|bottom|top/g,function(e){return dp[e]})}var fp={start:"end",end:"start"};function wc(t){return t.replace(/start|end/g,function(e){return fp[e]})}function $o(t){var e=Qe(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Bo(t){return rr(cn(t)).left+$o(t).scrollLeft}function pp(t,e){var n=Qe(t),r=cn(t),i=n.visualViewport,o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;var d=nu();(d||!d&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l+Bo(t),y:u}}function gp(t){var e,n=cn(t),r=$o(t),i=(e=t.ownerDocument)==null?void 0:e.body,o=Nn(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=Nn(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),l=-r.scrollLeft+Bo(t),u=-r.scrollTop;return jt(i||n).direction==="rtl"&&(l+=Nn(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:l,y:u}}function Vo(t){var e=jt(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function au(t){return["html","body","#document"].indexOf(_t(t))>=0?t.ownerDocument.body:nt(t)&&Vo(t)?t:au(ls(t))}function jr(t,e){var n;e===void 0&&(e=[]);var r=au(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),o=Qe(r),a=i?[o].concat(o.visualViewport||[],Vo(r)?r:[]):r,l=e.concat(a);return i?l:l.concat(jr(ls(a)))}function ho(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function mp(t,e){var n=rr(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function bc(t,e,n){return e===eu?ho(pp(t,n)):Un(e)?mp(e,n):ho(gp(cn(t)))}function yp(t){var e=jr(ls(t)),n=["absolute","fixed"].indexOf(jt(t).position)>=0,r=n&&nt(t)?ni(t):t;return Un(r)?e.filter(function(i){return Un(i)&&ru(i,r)&&_t(i)!=="body"}):[]}function vp(t,e,n,r){var i=e==="clippingParents"?yp(t):[].concat(e),o=[].concat(i,[n]),a=o[0],l=o.reduce(function(u,d){var f=bc(t,d,r);return u.top=Nn(f.top,u.top),u.right=qi(f.right,u.right),u.bottom=qi(f.bottom,u.bottom),u.left=Nn(f.left,u.left),u},bc(t,a,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function cu(t){var e=t.reference,n=t.element,r=t.placement,i=r?It(r):null,o=r?ir(r):null,a=e.x+e.width/2-n.width/2,l=e.y+e.height/2-n.height/2,u;switch(i){case Ge:u={x:a,y:e.y-n.height};break;case rt:u={x:a,y:e.y+e.height};break;case it:u={x:e.x+e.width,y:l};break;case qe:u={x:e.x-n.width,y:l};break;default:u={x:e.x,y:e.y}}var d=i?Fo(i):null;if(d!=null){var f=d==="y"?"height":"width";switch(o){case tr:u[d]=u[d]-(e[f]/2-n[f]/2);break;case Gr:u[d]=u[d]+(e[f]/2-n[f]/2);break}}return u}function qr(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,o=n.strategy,a=o===void 0?t.strategy:o,l=n.boundary,u=l===void 0?Uf:l,d=n.rootBoundary,f=d===void 0?eu:d,_=n.elementContext,b=_===void 0?Ar:_,E=n.altBoundary,A=E===void 0?!1:E,O=n.padding,C=O===void 0?0:O,R=su(typeof C!="number"?C:ou(C,ti)),D=b===Ar?Ff:Ar,P=t.rects.popper,L=t.elements[A?D:b],j=vp(Un(L)?L:L.contextElement||cn(t.elements.popper),u,f,a),M=rr(t.elements.reference),v=cu({reference:M,element:P,placement:i}),m=ho(Object.assign({},P,v)),y=b===Ar?m:M,I={top:j.top-y.top+R.top,bottom:y.bottom-j.bottom+R.bottom,left:j.left-y.left+R.left,right:y.right-j.right+R.right},T=t.modifiersData.offset;if(b===Ar&&T){var S=T[i];Object.keys(I).forEach(function(p){var $=[it,rt].indexOf(p)>=0?1:-1,B=[Ge,rt].indexOf(p)>=0?"y":"x";I[p]+=S[B]*$})}return I}function wp(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,l=n.flipVariations,u=n.allowedAutoPlacements,d=u===void 0?tu:u,f=ir(r),_=f?l?mc:mc.filter(function(A){return ir(A)===f}):ti,b=_.filter(function(A){return d.indexOf(A)>=0});b.length===0&&(b=_);var E=b.reduce(function(A,O){return A[O]=qr(t,{placement:O,boundary:i,rootBoundary:o,padding:a})[It(O)],A},{});return Object.keys(E).sort(function(A,O){return E[A]-E[O]})}function bp(t){if(It(t)===Mo)return[];var e=Ui(t);return[wc(t),e,wc(e)]}function Ep(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,a=n.altAxis,l=a===void 0?!0:a,u=n.fallbackPlacements,d=n.padding,f=n.boundary,_=n.rootBoundary,b=n.altBoundary,E=n.flipVariations,A=E===void 0?!0:E,O=n.allowedAutoPlacements,C=e.options.placement,R=It(C),D=R===C,P=u||(D||!A?[Ui(C)]:bp(C)),L=[C].concat(P).reduce(function(J,de){return J.concat(It(de)===Mo?wp(e,{placement:de,boundary:f,rootBoundary:_,padding:d,flipVariations:A,allowedAutoPlacements:O}):de)},[]),j=e.rects.reference,M=e.rects.popper,v=new Map,m=!0,y=L[0],I=0;I<L.length;I++){var T=L[I],S=It(T),p=ir(T)===tr,$=[Ge,rt].indexOf(S)>=0,B=$?"width":"height",U=qr(e,{placement:T,boundary:f,rootBoundary:_,altBoundary:b,padding:d}),z=$?p?it:qe:p?rt:Ge;j[B]>M[B]&&(z=Ui(z));var H=Ui(z),G=[];if(o&&G.push(U[S]<=0),l&&G.push(U[z]<=0,U[H]<=0),G.every(function(J){return J})){y=T,m=!1;break}v.set(T,G)}if(m)for(var oe=A?3:1,be=function(de){var Ce=L.find(function(V){var ee=v.get(V);if(ee)return ee.slice(0,de).every(function(te){return te})});if(Ce)return y=Ce,"break"},me=oe;me>0;me--){var ce=be(me);if(ce==="break")break}e.placement!==y&&(e.modifiersData[r]._skip=!0,e.placement=y,e.reset=!0)}}const Ip={name:"flip",enabled:!0,phase:"main",fn:Ep,requiresIfExists:["offset"],data:{_skip:!1}};function Ec(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Ic(t){return[Ge,it,rt,qe].some(function(e){return t[e]>=0})}function Tp(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,a=qr(e,{elementContext:"reference"}),l=qr(e,{altBoundary:!0}),u=Ec(a,r),d=Ec(l,i,o),f=Ic(u),_=Ic(d);e.modifiersData[n]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:_},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":_})}const _p={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Tp};function Sp(t,e,n){var r=It(t),i=[qe,Ge].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,a=o[0],l=o[1];return a=a||0,l=(l||0)*i,[qe,it].indexOf(r)>=0?{x:l,y:a}:{x:a,y:l}}function Ap(t){var e=t.state,n=t.options,r=t.name,i=n.offset,o=i===void 0?[0,0]:i,a=tu.reduce(function(f,_){return f[_]=Sp(_,e.rects,o),f},{}),l=a[e.placement],u=l.x,d=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=u,e.modifiersData.popperOffsets.y+=d),e.modifiersData[r]=a}const Cp={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ap};function Rp(t){var e=t.state,n=t.name;e.modifiersData[n]=cu({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const xp={name:"popperOffsets",enabled:!0,phase:"read",fn:Rp,data:{}};function kp(t){return t==="x"?"y":"x"}function Pp(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,o=i===void 0?!0:i,a=n.altAxis,l=a===void 0?!1:a,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,_=n.padding,b=n.tether,E=b===void 0?!0:b,A=n.tetherOffset,O=A===void 0?0:A,C=qr(e,{boundary:u,rootBoundary:d,padding:_,altBoundary:f}),R=It(e.placement),D=ir(e.placement),P=!D,L=Fo(R),j=kp(L),M=e.modifiersData.popperOffsets,v=e.rects.reference,m=e.rects.popper,y=typeof O=="function"?O(Object.assign({},e.rects,{placement:e.placement})):O,I=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),T=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,S={x:0,y:0};if(M){if(o){var p,$=L==="y"?Ge:qe,B=L==="y"?rt:it,U=L==="y"?"height":"width",z=M[L],H=z+C[$],G=z-C[B],oe=E?-m[U]/2:0,be=D===tr?v[U]:m[U],me=D===tr?-m[U]:-v[U],ce=e.elements.arrow,J=E&&ce?Uo(ce):{width:0,height:0},de=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:iu(),Ce=de[$],V=de[B],ee=Mr(0,v[U],J[U]),te=P?v[U]/2-oe-ee-Ce-I.mainAxis:be-ee-Ce-I.mainAxis,le=P?-v[U]/2+oe+ee+V+I.mainAxis:me+ee+V+I.mainAxis,ne=e.elements.arrow&&ni(e.elements.arrow),Y=ne?L==="y"?ne.clientTop||0:ne.clientLeft||0:0,ye=(p=T==null?void 0:T[L])!=null?p:0,ae=z+te-ye-Y,je=z+le-ye,pe=Mr(E?qi(H,ae):H,z,E?Nn(G,je):G);M[L]=pe,S[L]=pe-z}if(l){var Ee,Ve=L==="x"?Ge:qe,ve=L==="x"?rt:it,he=M[j],Ze=j==="y"?"height":"width",fn=he+C[Ve],Bt=he-C[ve],pn=[Ge,qe].indexOf(R)!==-1,pt=(Ee=T==null?void 0:T[j])!=null?Ee:0,gn=pn?fn:he-v[Ze]-m[Ze]-pt+I.altAxis,Rt=pn?he+v[Ze]+m[Ze]-pt-I.altAxis:Bt,Vt=E&&pn?tp(gn,he,Rt):Mr(E?gn:fn,he,E?Rt:Bt);M[j]=Vt,S[j]=Vt-he}e.modifiersData[r]=S}}const Op={name:"preventOverflow",enabled:!0,phase:"main",fn:Pp,requiresIfExists:["offset"]};function Dp(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Np(t){return t===Qe(t)||!nt(t)?$o(t):Dp(t)}function Lp(t){var e=t.getBoundingClientRect(),n=nr(e.width)/t.offsetWidth||1,r=nr(e.height)/t.offsetHeight||1;return n!==1||r!==1}function Mp(t,e,n){n===void 0&&(n=!1);var r=nt(e),i=nt(e)&&Lp(e),o=cn(e),a=rr(t,i,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!n)&&((_t(e)!=="body"||Vo(o))&&(l=Np(e)),nt(e)?(u=rr(e,!0),u.x+=e.clientLeft,u.y+=e.clientTop):o&&(u.x=Bo(o))),{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}function jp(t){var e=new Map,n=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function i(o){n.add(o.name);var a=[].concat(o.requires||[],o.requiresIfExists||[]);a.forEach(function(l){if(!n.has(l)){var u=e.get(l);u&&i(u)}}),r.push(o)}return t.forEach(function(o){n.has(o.name)||i(o)}),r}function Up(t){var e=jp(t);return Yf.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function Fp(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function $p(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Tc={placement:"bottom",modifiers:[],strategy:"absolute"};function _c(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Bp(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,o=i===void 0?Tc:i;return function(l,u,d){d===void 0&&(d=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tc,o),modifiersData:{},elements:{reference:l,popper:u},attributes:{},styles:{}},_=[],b=!1,E={state:f,setOptions:function(R){var D=typeof R=="function"?R(f.options):R;O(),f.options=Object.assign({},o,f.options,D),f.scrollParents={reference:Un(l)?jr(l):l.contextElement?jr(l.contextElement):[],popper:jr(u)};var P=Up($p([].concat(r,f.options.modifiers)));return f.orderedModifiers=P.filter(function(L){return L.enabled}),A(),E.update()},forceUpdate:function(){if(!b){var R=f.elements,D=R.reference,P=R.popper;if(_c(D,P)){f.rects={reference:Mp(D,ni(P),f.options.strategy==="fixed"),popper:Uo(P)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(I){return f.modifiersData[I.name]=Object.assign({},I.data)});for(var L=0;L<f.orderedModifiers.length;L++){if(f.reset===!0){f.reset=!1,L=-1;continue}var j=f.orderedModifiers[L],M=j.fn,v=j.options,m=v===void 0?{}:v,y=j.name;typeof M=="function"&&(f=M({state:f,options:m,name:y,instance:E})||f)}}}},update:Fp(function(){return new Promise(function(C){E.forceUpdate(),C(f)})}),destroy:function(){O(),b=!0}};if(!_c(l,u))return E;E.setOptions(d).then(function(C){!b&&d.onFirstUpdate&&d.onFirstUpdate(C)});function A(){f.orderedModifiers.forEach(function(C){var R=C.name,D=C.options,P=D===void 0?{}:D,L=C.effect;if(typeof L=="function"){var j=L({state:f,name:R,instance:E,options:P}),M=function(){};_.push(j||M)}})}function O(){_.forEach(function(C){return C()}),_=[]}return E}}var Vp=[hp,xp,lp,Qf,Cp,Ip,Op,sp,_p],Hp=Bp({defaultModifiers:Vp});function Wp(t){return typeof t=="function"?t():t}const lu=w.forwardRef(function(e,n){const{children:r,container:i,disablePortal:o=!1}=e,[a,l]=w.useState(null),u=dt(w.isValidElement(r)?ei(r):null,n);if(jn(()=>{o||l(Wp(i)||document.body)},[i,o]),jn(()=>{if(a&&!o)return lc(n,a),()=>{lc(n,null)}},[n,a,o]),o){if(w.isValidElement(r)){const d={ref:u};return w.cloneElement(r,d)}return r}return a&&co.createPortal(r,a)});function zp(t){return ke("MuiPopper",t)}Pe("MuiPopper",["root"]);function Gp(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function fo(t){return typeof t=="function"?t():t}function qp(t){return t.nodeType!==void 0}const Kp=t=>{const{classes:e}=t;return xe({root:["root"]},zp,e)},Yp={},Jp=w.forwardRef(function(e,n){const{anchorEl:r,children:i,direction:o,disablePortal:a,modifiers:l,open:u,placement:d,popperOptions:f,popperRef:_,slotProps:b={},slots:E={},TransitionProps:A,ownerState:O,...C}=e,R=w.useRef(null),D=dt(R,n),P=w.useRef(null),L=dt(P,_),j=w.useRef(L);jn(()=>{j.current=L},[L]),w.useImperativeHandle(_,()=>P.current,[]);const M=Gp(d,o),[v,m]=w.useState(M),[y,I]=w.useState(fo(r));w.useEffect(()=>{P.current&&P.current.forceUpdate()}),w.useEffect(()=>{r&&I(fo(r))},[r]),jn(()=>{if(!y||!u)return;const B=H=>{m(H.placement)};let U=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:H})=>{B(H)}}];l!=null&&(U=U.concat(l)),f&&f.modifiers!=null&&(U=U.concat(f.modifiers));const z=Hp(y,R.current,{placement:M,...f,modifiers:U});return j.current(z),()=>{z.destroy(),j.current(null)}},[y,a,l,u,f,M]);const T={placement:v};A!==null&&(T.TransitionProps=A);const S=Kp(e),p=E.root??"div",$=Xd({elementType:p,externalSlotProps:b.root,externalForwardedProps:C,additionalProps:{role:"tooltip",ref:D},ownerState:e,className:S.root});return k.jsx(p,{...$,children:typeof i=="function"?i(T):i})}),Xp=w.forwardRef(function(e,n){const{anchorEl:r,children:i,container:o,direction:a="ltr",disablePortal:l=!1,keepMounted:u=!1,modifiers:d,open:f,placement:_="bottom",popperOptions:b=Yp,popperRef:E,style:A,transition:O=!1,slotProps:C={},slots:R={},...D}=e,[P,L]=w.useState(!0),j=()=>{L(!1)},M=()=>{L(!0)};if(!u&&!f&&(!O||P))return null;let v;if(o)v=o;else if(r){const I=fo(r);v=I&&qp(I)?Je(I).body:Je(null).body}const m=!f&&u&&(!O||P)?"none":void 0,y=O?{in:f,onEnter:j,onExited:M}:void 0;return k.jsx(lu,{disablePortal:l,container:v,children:k.jsx(Jp,{anchorEl:r,direction:a,disablePortal:l,modifiers:d,ref:n,open:O?!P:f,placement:_,popperOptions:b,popperRef:E,slotProps:C,slots:R,...D,style:{position:"fixed",top:0,left:0,display:m,...A},TransitionProps:y,children:i})})}),Qp=re(Xp,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),uu=w.forwardRef(function(e,n){const r=Do(),i=_e({props:e,name:"MuiPopper"}),{anchorEl:o,component:a,components:l,componentsProps:u,container:d,disablePortal:f,keepMounted:_,modifiers:b,open:E,placement:A,popperOptions:O,popperRef:C,transition:R,slots:D,slotProps:P,...L}=i,j=(D==null?void 0:D.root)??(l==null?void 0:l.Root),M={anchorEl:o,container:d,disablePortal:f,keepMounted:_,modifiers:b,open:E,placement:A,popperOptions:O,popperRef:C,transition:R,...L};return k.jsx(Qp,{as:a,direction:r?"rtl":"ltr",slots:{root:j},slotProps:P??u,...M,ref:n})});function Sc(t){return typeof t=="string"}const Zp={entering:{opacity:1},entered:{opacity:1}},po=w.forwardRef(function(e,n){const r=ar(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:a=!0,children:l,easing:u,in:d,onEnter:f,onEntered:_,onEntering:b,onExit:E,onExited:A,onExiting:O,style:C,timeout:R=i,TransitionComponent:D=Gl,...P}=e,L=w.useRef(null),j=dt(L,ei(l),n),M=$=>B=>{if($){const U=L.current;B===void 0?$(U):$(U,B)}},v=M(b),m=M(($,B)=>{ql($);const U=zr({style:C,timeout:R,easing:u},{mode:"enter"});$.style.webkitTransition=r.transitions.create("opacity",U),$.style.transition=r.transitions.create("opacity",U),f&&f($,B)}),y=M(_),I=M(O),T=M($=>{const B=zr({style:C,timeout:R,easing:u},{mode:"exit"});$.style.webkitTransition=r.transitions.create("opacity",B),$.style.transition=r.transitions.create("opacity",B),E&&E($)}),S=M(A),p=$=>{o&&o(L.current,$)};return k.jsx(D,{appear:a,in:d,nodeRef:L,onEnter:m,onEntered:y,onEntering:v,onExit:T,onExited:S,onExiting:I,addEndListener:p,timeout:R,...P,children:($,{ownerState:B,...U})=>w.cloneElement(l,{style:{opacity:0,visibility:$==="exited"&&!d?"hidden":void 0,...Zp[$],...C,...l.props.style},ref:j,...U})})});function eg(t){return ke("MuiBackdrop",t)}Pe("MuiBackdrop",["root","invisible"]);const tg=t=>{const{classes:e,invisible:n}=t;return xe({root:["root",n&&"invisible"]},eg,e)},ng=re("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.invisible&&e.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),hu=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiBackdrop"}),{children:i,className:o,component:a="div",invisible:l=!1,open:u,components:d={},componentsProps:f={},slotProps:_={},slots:b={},TransitionComponent:E,transitionDuration:A,...O}=r,C={...r,component:a,invisible:l},R=tg(C),D={transition:E,root:d.Root,...b},P={...f,..._},L={slots:D,slotProps:P},[j,M]=Se("root",{elementType:ng,externalForwardedProps:L,className:se(R.root,o),ownerState:C}),[v,m]=Se("transition",{elementType:po,externalForwardedProps:L,ownerState:C});return k.jsx(v,{in:u,timeout:A,...O,...m,children:k.jsx(j,{"aria-hidden":!0,...M,classes:R,ref:n,children:i})})}),rg=Pe("MuiBox",["root"]),ig=Zd(),du=ff({themeId:Wl,defaultTheme:ig,defaultClassName:rg.root,generateClassName:Qd.generate}),go=typeof Zl({})=="function",sg=(t,e)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...e&&!t.vars&&{colorScheme:t.palette.mode}}),og=t=>({color:(t.vars||t).palette.text.primary,...t.typography.body1,backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),fu=(t,e=!1)=>{var o,a;const n={};e&&t.colorSchemes&&typeof t.getColorSchemeSelector=="function"&&Object.entries(t.colorSchemes).forEach(([l,u])=>{var f,_;const d=t.getColorSchemeSelector(l);d.startsWith("@")?n[d]={":root":{colorScheme:(f=u.palette)==null?void 0:f.mode}}:n[d.replace(/\s*&/,"")]={colorScheme:(_=u.palette)==null?void 0:_.mode}});let r={html:sg(t,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:{margin:0,...og(t),"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}},...n};const i=(a=(o=t.components)==null?void 0:o.MuiCssBaseline)==null?void 0:a.styleOverrides;return i&&(r=[r,i]),r},Fi="mui-ecs",ag=t=>{const e=fu(t,!1),n=Array.isArray(e)?e[0]:e;return!t.vars&&n&&(n.html[`:root:has(${Fi})`]={colorScheme:t.palette.mode}),t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([r,i])=>{var a,l;const o=t.getColorSchemeSelector(r);o.startsWith("@")?n[o]={[`:root:not(:has(.${Fi}))`]:{colorScheme:(a=i.palette)==null?void 0:a.mode}}:n[o.replace(/\s*&/,"")]={[`&:not(:has(.${Fi}))`]:{colorScheme:(l=i.palette)==null?void 0:l.mode}}}),e},cg=Zl(go?({theme:t,enableColorScheme:e})=>fu(t,e):({theme:t})=>ag(t));function lg(t){const e=_e({props:t,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=e;return k.jsxs(w.Fragment,{children:[go&&k.jsx(cg,{enableColorScheme:r}),!go&&!r&&k.jsx("span",{className:Fi,style:{display:"none"}}),n]})}function ug(t){const e=Je(t);return e.body===t?Et(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function Ur(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function Ac(t){return parseInt(Et(t).getComputedStyle(t).paddingRight,10)||0}function hg(t){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(t.tagName),r=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return n||r}function Cc(t,e,n,r,i){const o=[e,n,...r];[].forEach.call(t.children,a=>{const l=!o.includes(a),u=!hg(a);l&&u&&Ur(a,i)})}function Fs(t,e){let n=-1;return t.some((r,i)=>e(r)?(n=i,!0):!1),n}function dg(t,e){const n=[],r=t.container;if(!e.disableScrollLock){if(ug(r)){const a=bf(Et(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ac(r)+a}px`;const l=Je(r).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${Ac(u)+a}px`})}let o;if(r.parentNode instanceof DocumentFragment)o=Je(r).body;else{const a=r.parentElement,l=Et(r);o=(a==null?void 0:a.nodeName)==="HTML"&&l.getComputedStyle(a).overflowY==="scroll"?a:r}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{n.forEach(({value:o,el:a,property:l})=>{o?a.style.setProperty(l,o):a.style.removeProperty(l)})}}function fg(t){const e=[];return[].forEach.call(t.children,n=>{n.getAttribute("aria-hidden")==="true"&&e.push(n)}),e}class pg{constructor(){this.modals=[],this.containers=[]}add(e,n){let r=this.modals.indexOf(e);if(r!==-1)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&Ur(e.modalRef,!1);const i=fg(n);Cc(n,e.mount,e.modalRef,i,!0);const o=Fs(this.containers,a=>a.container===n);return o!==-1?(this.containers[o].modals.push(e),r):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:i}),r)}mount(e,n){const r=Fs(this.containers,o=>o.modals.includes(e)),i=this.containers[r];i.restore||(i.restore=dg(i,n))}remove(e,n=!0){const r=this.modals.indexOf(e);if(r===-1)return r;const i=Fs(this.containers,a=>a.modals.includes(e)),o=this.containers[i];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(r,1),o.modals.length===0)o.restore&&o.restore(),e.modalRef&&Ur(e.modalRef,n),Cc(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(i,1);else{const a=o.modals[o.modals.length-1];a.modalRef&&Ur(a.modalRef,!1)}return r}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}const gg=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function mg(t){const e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e}function yg(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const e=r=>t.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=e(`[name="${t.name}"]:checked`);return n||(n=e(`[name="${t.name}"]`)),n!==t}function vg(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||yg(t))}function wg(t){const e=[],n=[];return Array.from(t.querySelectorAll(gg)).forEach((r,i)=>{const o=mg(r);o===-1||!vg(r)||(o===0?e.push(r):n.push({documentOrder:i,tabIndex:o,node:r}))}),n.sort((r,i)=>r.tabIndex===i.tabIndex?r.documentOrder-i.documentOrder:r.tabIndex-i.tabIndex).map(r=>r.node).concat(e)}function bg(){return!0}function Eg(t){const{children:e,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:o=wg,isEnabled:a=bg,open:l}=t,u=w.useRef(!1),d=w.useRef(null),f=w.useRef(null),_=w.useRef(null),b=w.useRef(null),E=w.useRef(!1),A=w.useRef(null),O=dt(ei(e),A),C=w.useRef(null);w.useEffect(()=>{!l||!A.current||(E.current=!n)},[n,l]),w.useEffect(()=>{if(!l||!A.current)return;const P=Je(A.current);return A.current.contains(P.activeElement)||(A.current.hasAttribute("tabIndex")||A.current.setAttribute("tabIndex","-1"),E.current&&A.current.focus()),()=>{i||(_.current&&_.current.focus&&(u.current=!0,_.current.focus()),_.current=null)}},[l]),w.useEffect(()=>{if(!l||!A.current)return;const P=Je(A.current),L=v=>{C.current=v,!(r||!a()||v.key!=="Tab")&&P.activeElement===A.current&&v.shiftKey&&(u.current=!0,f.current&&f.current.focus())},j=()=>{var y,I;const v=A.current;if(v===null)return;if(!P.hasFocus()||!a()||u.current){u.current=!1;return}if(v.contains(P.activeElement)||r&&P.activeElement!==d.current&&P.activeElement!==f.current)return;if(P.activeElement!==b.current)b.current=null;else if(b.current!==null)return;if(!E.current)return;let m=[];if((P.activeElement===d.current||P.activeElement===f.current)&&(m=o(A.current)),m.length>0){const T=!!((y=C.current)!=null&&y.shiftKey&&((I=C.current)==null?void 0:I.key)==="Tab"),S=m[0],p=m[m.length-1];typeof S!="string"&&typeof p!="string"&&(T?p.focus():S.focus())}else v.focus()};P.addEventListener("focusin",j),P.addEventListener("keydown",L,!0);const M=setInterval(()=>{P.activeElement&&P.activeElement.tagName==="BODY"&&j()},50);return()=>{clearInterval(M),P.removeEventListener("focusin",j),P.removeEventListener("keydown",L,!0)}},[n,r,i,a,l,o]);const R=P=>{_.current===null&&(_.current=P.relatedTarget),E.current=!0,b.current=P.target;const L=e.props.onFocus;L&&L(P)},D=P=>{_.current===null&&(_.current=P.relatedTarget),E.current=!0};return k.jsxs(w.Fragment,{children:[k.jsx("div",{tabIndex:l?0:-1,onFocus:D,ref:d,"data-testid":"sentinelStart"}),w.cloneElement(e,{ref:O,onFocus:R}),k.jsx("div",{tabIndex:l?0:-1,onFocus:D,ref:f,"data-testid":"sentinelEnd"})]})}function Ig(t){return typeof t=="function"?t():t}function Tg(t){return t?t.props.hasOwnProperty("in"):!1}const Rc=()=>{},Ri=new pg;function _g(t){const{container:e,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,closeAfterTransition:i=!1,onTransitionEnter:o,onTransitionExited:a,children:l,onClose:u,open:d,rootRef:f}=t,_=w.useRef({}),b=w.useRef(null),E=w.useRef(null),A=dt(E,f),[O,C]=w.useState(!d),R=Tg(l);let D=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(D=!1);const P=()=>Je(b.current),L=()=>(_.current.modalRef=E.current,_.current.mount=b.current,_.current),j=()=>{Ri.mount(L(),{disableScrollLock:r}),E.current&&(E.current.scrollTop=0)},M=On(()=>{const B=Ig(e)||P().body;Ri.add(L(),B),E.current&&j()}),v=()=>Ri.isTopModal(L()),m=On(B=>{b.current=B,B&&(d&&v()?j():E.current&&Ur(E.current,D))}),y=w.useCallback(()=>{Ri.remove(L(),D)},[D]);w.useEffect(()=>()=>{y()},[y]),w.useEffect(()=>{d?M():(!R||!i)&&y()},[d,y,R,i,M]);const I=B=>U=>{var z;(z=B.onKeyDown)==null||z.call(B,U),!(U.key!=="Escape"||U.which===229||!v())&&(n||(U.stopPropagation(),u&&u(U,"escapeKeyDown")))},T=B=>U=>{var z;(z=B.onClick)==null||z.call(B,U),U.target===U.currentTarget&&u&&u(U,"backdropClick")};return{getRootProps:(B={})=>{const U=ef(t);delete U.onTransitionEnter,delete U.onTransitionExited;const z={...U,...B};return{role:"presentation",...z,onKeyDown:I(z),ref:A}},getBackdropProps:(B={})=>{const U=B;return{"aria-hidden":!0,...U,onClick:T(U),open:d}},getTransitionProps:()=>{const B=()=>{C(!1),o&&o()},U=()=>{C(!0),a&&a(),i&&y()};return{onEnter:dc(B,(l==null?void 0:l.props.onEnter)??Rc),onExited:dc(U,(l==null?void 0:l.props.onExited)??Rc)}},rootRef:A,portalRef:m,isTopModal:v,exited:O,hasTransition:R}}function Sg(t){return ke("MuiModal",t)}Pe("MuiModal",["root","hidden","backdrop"]);const Ag=t=>{const{open:e,exited:n,classes:r}=t;return xe({root:["root",!e&&n&&"hidden"],backdrop:["backdrop"]},Sg,r)},Cg=re("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.open&&n.exited&&e.hidden]}})(Le(({theme:t})=>({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:e})=>!e.open&&e.exited,style:{visibility:"hidden"}}]}))),Rg=re(hu,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,e)=>e.backdrop})({zIndex:-1}),pu=w.forwardRef(function(e,n){const r=_e({name:"MuiModal",props:e}),{BackdropComponent:i=Rg,BackdropProps:o,classes:a,className:l,closeAfterTransition:u=!1,children:d,container:f,component:_,components:b={},componentsProps:E={},disableAutoFocus:A=!1,disableEnforceFocus:O=!1,disableEscapeKeyDown:C=!1,disablePortal:R=!1,disableRestoreFocus:D=!1,disableScrollLock:P=!1,hideBackdrop:L=!1,keepMounted:j=!1,onBackdropClick:M,onClose:v,onTransitionEnter:m,onTransitionExited:y,open:I,slotProps:T={},slots:S={},theme:p,...$}=r,B={...r,closeAfterTransition:u,disableAutoFocus:A,disableEnforceFocus:O,disableEscapeKeyDown:C,disablePortal:R,disableRestoreFocus:D,disableScrollLock:P,hideBackdrop:L,keepMounted:j},{getRootProps:U,getBackdropProps:z,getTransitionProps:H,portalRef:G,isTopModal:oe,exited:be,hasTransition:me}=_g({...B,rootRef:n}),ce={...B,exited:be},J=Ag(ce),de={};if(d.props.tabIndex===void 0&&(de.tabIndex="-1"),me){const{onEnter:ne,onExited:Y}=H();de.onEnter=ne,de.onExited=Y}const Ce={slots:{root:b.Root,backdrop:b.Backdrop,...S},slotProps:{...E,...T}},[V,ee]=Se("root",{ref:n,elementType:Cg,externalForwardedProps:{...Ce,...$,component:_},getSlotProps:U,ownerState:ce,className:se(l,J==null?void 0:J.root,!ce.open&&ce.exited&&(J==null?void 0:J.hidden))}),[te,le]=Se("backdrop",{ref:o==null?void 0:o.ref,elementType:i,externalForwardedProps:Ce,shouldForwardComponentProp:!0,additionalProps:o,getSlotProps:ne=>z({...ne,onClick:Y=>{M&&M(Y),ne!=null&&ne.onClick&&ne.onClick(Y)}}),className:se(o==null?void 0:o.className,J==null?void 0:J.backdrop),ownerState:ce});return!j&&!I&&(!me||be)?null:k.jsx(lu,{ref:G,container:f,disablePortal:R,children:k.jsxs(V,{...ee,children:[!L&&i?k.jsx(te,{...le}):null,k.jsx(Eg,{disableEnforceFocus:O,disableAutoFocus:A,disableRestoreFocus:D,isEnabled:oe,open:I,children:w.cloneElement(d,de)})]})})});function xg(t){return ke("MuiDialog",t)}const $s=Pe("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),gu=w.createContext({}),kg=re(hu,{name:"MuiDialog",slot:"Backdrop",overrides:(t,e)=>e.backdrop})({zIndex:-1}),Pg=t=>{const{classes:e,scroll:n,maxWidth:r,fullWidth:i,fullScreen:o}=t,a={root:["root"],container:["container",`scroll${Te(n)}`],paper:["paper",`paperScroll${Te(n)}`,`paperWidth${Te(String(r))}`,i&&"paperFullWidth",o&&"paperFullScreen"]};return xe(a,xg,e)},Og=re(pu,{name:"MuiDialog",slot:"Root",overridesResolver:(t,e)=>e.root})({"@media print":{position:"absolute !important"}}),Dg=re("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.container,e[`scroll${Te(n.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),Ng=re(Zr,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`scrollPaper${Te(n.scroll)}`],e[`paperWidth${Te(String(n.maxWidth))}`],n.fullWidth&&e.paperFullWidth,n.fullScreen&&e.paperFullScreen]}})(Le(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${$s.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${t.breakpoints.values[e]}${t.breakpoints.unit}`,[`&.${$s.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${$s.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Lg=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiDialog"}),i=ar(),o={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":l,"aria-modal":u=!0,BackdropComponent:d,BackdropProps:f,children:_,className:b,disableEscapeKeyDown:E=!1,fullScreen:A=!1,fullWidth:O=!1,maxWidth:C="sm",onBackdropClick:R,onClick:D,onClose:P,open:L,PaperComponent:j=Zr,PaperProps:M={},scroll:v="paper",slots:m={},slotProps:y={},TransitionComponent:I=po,transitionDuration:T=o,TransitionProps:S,...p}=r,$={...r,disableEscapeKeyDown:E,fullScreen:A,fullWidth:O,maxWidth:C,scroll:v},B=Pg($),U=w.useRef(),z=ae=>{U.current=ae.target===ae.currentTarget},H=ae=>{D&&D(ae),U.current&&(U.current=null,R&&R(ae),P&&P(ae,"backdropClick"))},G=Kl(l),oe=w.useMemo(()=>({titleId:G}),[G]),be={transition:I,...m},me={transition:S,paper:M,backdrop:f,...y},ce={slots:be,slotProps:me},[J,de]=Se("root",{elementType:Og,shouldForwardComponentProp:!0,externalForwardedProps:ce,ownerState:$,className:se(B.root,b),ref:n}),[Ce,V]=Se("backdrop",{elementType:kg,shouldForwardComponentProp:!0,externalForwardedProps:ce,ownerState:$}),[ee,te]=Se("paper",{elementType:Ng,shouldForwardComponentProp:!0,externalForwardedProps:ce,ownerState:$,className:se(B.paper,M.className)}),[le,ne]=Se("container",{elementType:Dg,externalForwardedProps:ce,ownerState:$,className:se(B.container)}),[Y,ye]=Se("transition",{elementType:po,externalForwardedProps:ce,ownerState:$,additionalProps:{appear:!0,in:L,timeout:T,role:"presentation"}});return k.jsx(J,{closeAfterTransition:!0,slots:{backdrop:Ce},slotProps:{backdrop:{transitionDuration:T,as:d,...V}},disableEscapeKeyDown:E,onClose:P,open:L,onClick:H,...de,...p,children:k.jsx(Y,{...ye,children:k.jsx(le,{onMouseDown:z,...ne,children:k.jsx(ee,{as:j,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":G,"aria-modal":u,...te,children:k.jsx(gu.Provider,{value:oe,children:_})})})})})});function Mg(t){return ke("MuiDialogContent",t)}Pe("MuiDialogContent",["root","dividers"]);function jg(t){return ke("MuiDialogTitle",t)}const Ug=Pe("MuiDialogTitle",["root"]),Fg=t=>{const{classes:e,dividers:n}=t;return xe({root:["root",n&&"dividers"]},Mg,e)},$g=re("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.dividers&&e.dividers]}})(Le(({theme:t})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:e})=>e.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>!e.dividers,style:{[`.${Ug.root} + &`]:{paddingTop:0}}}]}))),Bg=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiDialogContent"}),{className:i,dividers:o=!1,...a}=r,l={...r,dividers:o},u=Fg(l);return k.jsx($g,{className:se(u.root,i),ownerState:l,ref:n,...a})}),Vg=t=>{const{classes:e}=t;return xe({root:["root"]},jg,e)},Hg=re(tt,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Wg=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiDialogTitle"}),{className:i,id:o,...a}=r,l=r,u=Vg(l),{titleId:d=o}=w.useContext(gu);return k.jsx(Hg,{component:"h2",className:se(u.root,i),ownerState:l,ref:n,variant:"h6",id:o??d,...a})});function zg(t){return ke("MuiDivider",t)}Pe("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Gg=t=>{const{absolute:e,children:n,classes:r,flexItem:i,light:o,orientation:a,textAlign:l,variant:u}=t;return xe({root:["root",e&&"absolute",u,o&&"light",a==="vertical"&&"vertical",i&&"flexItem",n&&"withChildren",n&&a==="vertical"&&"withChildrenVertical",l==="right"&&a!=="vertical"&&"textAlignRight",l==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},zg,r)},qg=re("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.absolute&&e.absolute,e[n.variant],n.light&&e.light,n.orientation==="vertical"&&e.vertical,n.flexItem&&e.flexItem,n.children&&e.withChildren,n.children&&n.orientation==="vertical"&&e.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&e.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&e.textAlignLeft]}})(Le(({theme:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:Rn(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:e})=>!!e.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:e})=>e.children&&e.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:e})=>e.orientation==="vertical"&&e.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:e})=>e.textAlign==="right"&&e.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:e})=>e.textAlign==="left"&&e.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),Kg=re("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.wrapper,n.orientation==="vertical"&&e.wrapperVertical]}})(Le(({theme:t})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}))),Ki=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiDivider"}),{absolute:i=!1,children:o,className:a,orientation:l="horizontal",component:u=o||l==="vertical"?"div":"hr",flexItem:d=!1,light:f=!1,role:_=u!=="hr"?"separator":void 0,textAlign:b="center",variant:E="fullWidth",...A}=r,O={...r,absolute:i,component:u,flexItem:d,light:f,orientation:l,role:_,textAlign:b,variant:E},C=Gg(O);return k.jsx(qg,{as:u,className:se(C.root,a),role:_,ref:n,ownerState:O,"aria-orientation":_==="separator"&&(u!=="hr"||l==="vertical")?l:void 0,...A,children:o?k.jsx(Kg,{className:C.wrapper,ownerState:O,children:o}):null})});Ki&&(Ki.muiSkipListHighlight=!0);function Yg(t,e,n){const r=e.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),o=Et(e);let a;if(e.fakeTransform)a=e.fakeTransform;else{const d=o.getComputedStyle(e);a=d.getPropertyValue("-webkit-transform")||d.getPropertyValue("transform")}let l=0,u=0;if(a&&a!=="none"&&typeof a=="string"){const d=a.split("(")[1].split(")")[0].split(",");l=parseInt(d[4],10),u=parseInt(d[5],10)}return t==="left"?i?`translateX(${i.right+l-r.left}px)`:`translateX(${o.innerWidth+l-r.left}px)`:t==="right"?i?`translateX(-${r.right-i.left-l}px)`:`translateX(-${r.left+r.width-l}px)`:t==="up"?i?`translateY(${i.bottom+u-r.top}px)`:`translateY(${o.innerHeight+u-r.top}px)`:i?`translateY(-${r.top-i.top+r.height-u}px)`:`translateY(-${r.top+r.height-u}px)`}function Jg(t){return typeof t=="function"?t():t}function xi(t,e,n){const r=Jg(n),i=Yg(t,e,r);i&&(e.style.webkitTransform=i,e.style.transform=i)}const Xg=w.forwardRef(function(e,n){const r=ar(),i={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:l=!0,children:u,container:d,direction:f="down",easing:_=i,in:b,onEnter:E,onEntered:A,onEntering:O,onExit:C,onExited:R,onExiting:D,style:P,timeout:L=o,TransitionComponent:j=Gl,...M}=e,v=w.useRef(null),m=dt(ei(u),v,n),y=H=>G=>{H&&(G===void 0?H(v.current):H(v.current,G))},I=y((H,G)=>{xi(f,H,d),ql(H),E&&E(H,G)}),T=y((H,G)=>{const oe=zr({timeout:L,style:P,easing:_},{mode:"enter"});H.style.webkitTransition=r.transitions.create("-webkit-transform",{...oe}),H.style.transition=r.transitions.create("transform",{...oe}),H.style.webkitTransform="none",H.style.transform="none",O&&O(H,G)}),S=y(A),p=y(D),$=y(H=>{const G=zr({timeout:L,style:P,easing:_},{mode:"exit"});H.style.webkitTransition=r.transitions.create("-webkit-transform",G),H.style.transition=r.transitions.create("transform",G),xi(f,H,d),C&&C(H)}),B=y(H=>{H.style.webkitTransition="",H.style.transition="",R&&R(H)}),U=H=>{a&&a(v.current,H)},z=w.useCallback(()=>{v.current&&xi(f,v.current,d)},[f,d]);return w.useEffect(()=>{if(b||f==="down"||f==="right")return;const H=yf(()=>{v.current&&xi(f,v.current,d)}),G=Et(v.current);return G.addEventListener("resize",H),()=>{H.clear(),G.removeEventListener("resize",H)}},[f,b,d]),w.useEffect(()=>{b||z()},[b,z]),k.jsx(j,{nodeRef:v,onEnter:I,onEntered:S,onEntering:T,onExit:$,onExited:B,onExiting:p,addEndListener:U,appear:l,in:b,timeout:L,...M,children:(H,{ownerState:G,...oe})=>w.cloneElement(u,{ref:m,style:{visibility:H==="exited"&&!b?"hidden":void 0,...P,...u.props.style},...oe})})});function Qg(t){return ke("MuiDrawer",t)}Pe("MuiDrawer",["root","docked","paper","anchorLeft","anchorRight","anchorTop","anchorBottom","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const mu=(t,e)=>{const{ownerState:n}=t;return[e.root,(n.variant==="permanent"||n.variant==="persistent")&&e.docked,e.modal]},Zg=t=>{const{classes:e,anchor:n,variant:r}=t,i={root:["root",`anchor${Te(n)}`],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${Te(n)}`,r!=="temporary"&&`paperAnchorDocked${Te(n)}`]};return xe(i,Qg,e)},em=re(pu,{name:"MuiDrawer",slot:"Root",overridesResolver:mu})(Le(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer}))),tm=re("div",{shouldForwardProp:No,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:mu})({flex:"0 0 auto"}),nm=re(Zr,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`paperAnchor${Te(n.anchor)}`],n.variant!=="temporary"&&e[`paperAnchorDocked${Te(n.anchor)}`]]}})(Le(({theme:t})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:e})=>e.anchor==="left"&&e.variant!=="temporary",style:{borderRight:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="top"&&e.variant!=="temporary",style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="right"&&e.variant!=="temporary",style:{borderLeft:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="bottom"&&e.variant!=="temporary",style:{borderTop:`1px solid ${(t.vars||t).palette.divider}`}}]}))),yu={left:"right",right:"left",top:"down",bottom:"up"};function An(t){return["left","right"].includes(t)}function Dr({direction:t},e){return t==="rtl"&&An(e)?yu[e]:e}const rm=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiDrawer"}),i=ar(),o=Do(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:u,children:d,className:f,elevation:_=16,hideBackdrop:b=!1,ModalProps:{BackdropProps:E,...A}={},onClose:O,open:C=!1,PaperProps:R={},SlideProps:D,TransitionComponent:P,transitionDuration:L=a,variant:j="temporary",slots:M={},slotProps:v={},...m}=r,y=w.useRef(!1);w.useEffect(()=>{y.current=!0},[]);const I=Dr({direction:o?"rtl":"ltr"},l),S={...r,anchor:l,elevation:_,open:C,variant:j,...m},p=Zg(S),$={slots:{transition:P,...M},slotProps:{paper:R,transition:D,...v,backdrop:lo(v.backdrop||{...u,...E},{transitionDuration:L})}},[B,U]=Se("root",{ref:n,elementType:em,className:se(p.root,p.modal,f),shouldForwardComponentProp:!0,ownerState:S,externalForwardedProps:{...$,...m,...A},additionalProps:{open:C,onClose:O,hideBackdrop:b,slots:{backdrop:$.slots.backdrop},slotProps:{backdrop:$.slotProps.backdrop}}}),[z,H]=Se("paper",{elementType:nm,shouldForwardComponentProp:!0,className:se(p.paper,R.className),ownerState:S,externalForwardedProps:$,additionalProps:{elevation:j==="temporary"?_:0,square:!0}}),[G,oe]=Se("docked",{elementType:tm,ref:n,className:se(p.root,p.docked,f),ownerState:S,externalForwardedProps:$,additionalProps:m}),[be,me]=Se("transition",{elementType:Xg,ownerState:S,externalForwardedProps:$,additionalProps:{in:C,direction:yu[I],timeout:L,appear:y.current}}),ce=k.jsx(z,{...H,children:d});if(j==="permanent")return k.jsx(G,{...oe,children:ce});const J=k.jsx(be,{...me,children:ce});return j==="persistent"?k.jsx(G,{...oe,children:J}):k.jsx(B,{...U,children:J})}),Nt=w.createContext({});function im(t){return ke("MuiList",t)}Pe("MuiList",["root","padding","dense","subheader"]);const sm=t=>{const{classes:e,disablePadding:n,dense:r,subheader:i}=t;return xe({root:["root",!n&&"padding",r&&"dense",i&&"subheader"]},im,e)},om=re("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disablePadding&&e.padding,n.dense&&e.dense,n.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>t.subheader,style:{paddingTop:0}}]}),am=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiList"}),{children:i,className:o,component:a="ul",dense:l=!1,disablePadding:u=!1,subheader:d,...f}=r,_=w.useMemo(()=>({dense:l}),[l]),b={...r,component:a,dense:l,disablePadding:u},E=sm(b);return k.jsx(Nt.Provider,{value:_,children:k.jsxs(om,{as:a,className:se(E.root,o),ref:n,ownerState:b,...f,children:[d,i]})})});function cm(t){return ke("MuiListItem",t)}Pe("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function lm(t){return ke("MuiListItemButton",t)}const Yn=Pe("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),um=(t,e)=>{const{ownerState:n}=t;return[e.root,n.dense&&e.dense,n.alignItems==="flex-start"&&e.alignItemsFlexStart,n.divider&&e.divider,!n.disableGutters&&e.gutters]},hm=t=>{const{alignItems:e,classes:n,dense:r,disabled:i,disableGutters:o,divider:a,selected:l}=t,d=xe({root:["root",r&&"dense",!o&&"gutters",a&&"divider",i&&"disabled",e==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},lm,n);return{...n,...d}},dm=re(tf,{shouldForwardProp:t=>No(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:um})(Le(({theme:t})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Yn.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Rn(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${Yn.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:Rn(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${Yn.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Rn(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Rn(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${Yn.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Yn.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),fm=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:o=!1,component:a="div",children:l,dense:u=!1,disableGutters:d=!1,divider:f=!1,focusVisibleClassName:_,selected:b=!1,className:E,...A}=r,O=w.useContext(Nt),C=w.useMemo(()=>({dense:u||O.dense||!1,alignItems:i,disableGutters:d}),[i,O.dense,u,d]),R=w.useRef(null);jn(()=>{o&&R.current&&R.current.focus()},[o]);const D={...r,alignItems:i,dense:C.dense,disableGutters:d,divider:f,selected:b},P=hm(D),L=dt(R,n);return k.jsx(Nt.Provider,{value:C,children:k.jsx(dm,{ref:L,href:A.href||A.to,component:(A.href||A.to)&&a==="div"?"button":a,focusVisibleClassName:se(P.focusVisible,_),ownerState:D,className:se(P.root,E),...A,classes:P,children:l})})});function pm(t){return ke("MuiListItemSecondaryAction",t)}Pe("MuiListItemSecondaryAction",["root","disableGutters"]);const gm=t=>{const{disableGutters:e,classes:n}=t;return xe({root:["root",e&&"disableGutters"]},pm,n)},mm=re("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),vu=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiListItemSecondaryAction"}),{className:i,...o}=r,a=w.useContext(Nt),l={...r,disableGutters:a.disableGutters},u=gm(l);return k.jsx(mm,{className:se(u.root,i),ownerState:l,ref:n,...o})});vu.muiName="ListItemSecondaryAction";const ym=(t,e)=>{const{ownerState:n}=t;return[e.root,n.dense&&e.dense,n.alignItems==="flex-start"&&e.alignItemsFlexStart,n.divider&&e.divider,!n.disableGutters&&e.gutters,!n.disablePadding&&e.padding,n.hasSecondaryAction&&e.secondaryAction]},vm=t=>{const{alignItems:e,classes:n,dense:r,disableGutters:i,disablePadding:o,divider:a,hasSecondaryAction:l}=t;return xe({root:["root",r&&"dense",!i&&"gutters",!o&&"padding",a&&"divider",e==="flex-start"&&"alignItemsFlexStart",l&&"secondaryAction"],container:["container"]},cm,n)},wm=re("div",{name:"MuiListItem",slot:"Root",overridesResolver:ym})(Le(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${Yn.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),bm=re("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Em=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiListItem"}),{alignItems:i="center",children:o,className:a,component:l,components:u={},componentsProps:d={},ContainerComponent:f="li",ContainerProps:{className:_,...b}={},dense:E=!1,disableGutters:A=!1,disablePadding:O=!1,divider:C=!1,secondaryAction:R,slotProps:D={},slots:P={},...L}=r,j=w.useContext(Nt),M=w.useMemo(()=>({dense:E||j.dense||!1,alignItems:i,disableGutters:A}),[i,j.dense,E,A]),v=w.useRef(null),m=w.Children.toArray(o),y=m.length&&vf(m[m.length-1],["ListItemSecondaryAction"]),I={...r,alignItems:i,dense:M.dense,disableGutters:A,disablePadding:O,divider:C,hasSecondaryAction:y},T=vm(I),S=dt(v,n),p=P.root||u.Root||wm,$=D.root||d.root||{},B={className:se(T.root,$.className,a),...L};let U=l||"li";return y?(U=!B.component&&!l?"div":U,f==="li"&&(U==="li"?U="div":B.component==="li"&&(B.component="div")),k.jsx(Nt.Provider,{value:M,children:k.jsxs(bm,{as:f,className:se(T.container,_),ref:S,ownerState:I,...b,children:[k.jsx(p,{...$,...!Sc(p)&&{as:U,ownerState:{...I,...$.ownerState}},...B,children:m}),m.pop()]})})):k.jsx(Nt.Provider,{value:M,children:k.jsxs(p,{...$,as:U,ref:S,...!Sc(p)&&{ownerState:{...I,...$.ownerState}},...B,children:[m,R&&k.jsx(vu,{children:R})]})})});function Im(t){return ke("MuiListItemIcon",t)}Pe("MuiListItemIcon",["root","alignItemsFlexStart"]);const Tm=t=>{const{alignItems:e,classes:n}=t;return xe({root:["root",e==="flex-start"&&"alignItemsFlexStart"]},Im,n)},_m=re("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(Le(({theme:t})=>({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),Sm=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiListItemIcon"}),{className:i,...o}=r,a=w.useContext(Nt),l={...r,alignItems:a.alignItems},u=Tm(l);return k.jsx(_m,{className:se(u.root,i),ownerState:l,ref:n,...o})});function Am(t){return ke("MuiListItemText",t)}const ki=Pe("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Cm=t=>{const{classes:e,inset:n,primary:r,secondary:i,dense:o}=t;return xe({root:["root",n&&"inset",o&&"dense",r&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},Am,e)},Rm=re("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${ki.primary}`]:e.primary},{[`& .${ki.secondary}`]:e.secondary},e.root,n.inset&&e.inset,n.primary&&n.secondary&&e.multiline,n.dense&&e.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${fc.root}:where(& .${ki.primary})`]:{display:"block"},[`.${fc.root}:where(& .${ki.secondary})`]:{display:"block"},variants:[{props:({ownerState:t})=>t.primary&&t.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:t})=>t.inset,style:{paddingLeft:56}}]}),xm=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiListItemText"}),{children:i,className:o,disableTypography:a=!1,inset:l=!1,primary:u,primaryTypographyProps:d,secondary:f,secondaryTypographyProps:_,slots:b={},slotProps:E={},...A}=r,{dense:O}=w.useContext(Nt);let C=u??i,R=f;const D={...r,disableTypography:a,inset:l,primary:!!C,secondary:!!R,dense:O},P=Cm(D),L={slots:b,slotProps:{primary:d,secondary:_,...E}},[j,M]=Se("primary",{className:P.primary,elementType:tt,externalForwardedProps:L,ownerState:D}),[v,m]=Se("secondary",{className:P.secondary,elementType:tt,externalForwardedProps:L,ownerState:D});return C!=null&&C.type!==tt&&!a&&(C=k.jsx(j,{variant:O?"body2":"body1",component:M!=null&&M.variant?void 0:"span",...M,children:C})),R!=null&&R.type!==tt&&!a&&(R=k.jsx(v,{variant:"body2",color:"textSecondary",...m,children:R})),k.jsxs(Rm,{className:se(P.root,o),ownerState:D,ref:n,...A,children:[C,R]})});function km(t){const{children:e,defer:n=!1,fallback:r=null}=t,[i,o]=w.useState(!1);return jn(()=>{n||o(!0)},[n]),w.useEffect(()=>{n&&o(!0)},[n]),i?e:r}function Pm(t){return ke("MuiTooltip",t)}const we=Pe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function Om(t){return Math.round(t*1e5)/1e5}const Dm=t=>{const{classes:e,disableInteractive:n,arrow:r,touch:i,placement:o}=t,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${Te(o.split("-")[0])}`],arrow:["arrow"]};return xe(a,Pm,e)},Nm=re(uu,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(Le(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${we.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${we.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${we.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${we.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${we.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${we.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${we.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${we.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),Lm=re("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${Te(n.placement.split("-")[0])}`]]}})(Le(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Rn(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${we.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${we.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${we.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${we.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${Om(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${we.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${we.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${we.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${we.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${we.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${we.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${we.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${we.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${we.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${we.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),Mm=re("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(Le(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Rn(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Pi=!1;const xc=new nf;let Cr={x:0,y:0};function Oi(t,e){return(n,...r)=>{e&&e(n,...r),t(n,...r)}}const Bs=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiTooltip"}),{arrow:i=!1,children:o,classes:a,components:l={},componentsProps:u={},describeChild:d=!1,disableFocusListener:f=!1,disableHoverListener:_=!1,disableInteractive:b=!1,disableTouchListener:E=!1,enterDelay:A=100,enterNextDelay:O=0,enterTouchDelay:C=700,followCursor:R=!1,id:D,leaveDelay:P=0,leaveTouchDelay:L=1500,onClose:j,onOpen:M,open:v,placement:m="bottom",PopperComponent:y,PopperProps:I={},slotProps:T={},slots:S={},title:p,TransitionComponent:$,TransitionProps:B,...U}=r,z=w.isValidElement(o)?o:k.jsx("span",{children:o}),H=ar(),G=Do(),[oe,be]=w.useState(),[me,ce]=w.useState(null),J=w.useRef(!1),de=b||R,Ce=Ai(),V=Ai(),ee=Ai(),te=Ai(),[le,ne]=wf({controlled:v,default:!1,name:"Tooltip",state:"open"});let Y=le;const ye=Kl(D),ae=w.useRef(),je=On(()=>{ae.current!==void 0&&(document.body.style.WebkitUserSelect=ae.current,ae.current=void 0),te.clear()});w.useEffect(()=>je,[je]);const pe=q=>{xc.clear(),Pi=!0,ne(!0),M&&!Y&&M(q)},Ee=On(q=>{xc.start(800+P,()=>{Pi=!1}),ne(!1),j&&Y&&j(q),Ce.start(H.transitions.duration.shortest,()=>{J.current=!1})}),Ve=q=>{J.current&&q.type!=="touchstart"||(oe&&oe.removeAttribute("title"),V.clear(),ee.clear(),A||Pi&&O?V.start(Pi?O:A,()=>{pe(q)}):pe(q))},ve=q=>{V.clear(),ee.start(P,()=>{Ee(q)})},[,he]=w.useState(!1),Ze=q=>{uc(q.target)||(he(!1),ve(q))},fn=q=>{oe||be(q.currentTarget),uc(q.target)&&(he(!0),Ve(q))},Bt=q=>{J.current=!0;const Oe=z.props;Oe.onTouchStart&&Oe.onTouchStart(q)},pn=q=>{Bt(q),ee.clear(),Ce.clear(),je(),ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",te.start(C,()=>{document.body.style.WebkitUserSelect=ae.current,Ve(q)})},pt=q=>{z.props.onTouchEnd&&z.props.onTouchEnd(q),je(),ee.start(L,()=>{Ee(q)})};w.useEffect(()=>{if(!Y)return;function q(Oe){Oe.key==="Escape"&&Ee(Oe)}return document.addEventListener("keydown",q),()=>{document.removeEventListener("keydown",q)}},[Ee,Y]);const gn=dt(ei(z),be,n);!p&&p!==0&&(Y=!1);const Rt=w.useRef(),Vt=q=>{const Oe=z.props;Oe.onMouseMove&&Oe.onMouseMove(q),Cr={x:q.clientX,y:q.clientY},Rt.current&&Rt.current.update()},mn={},dr=typeof p=="string";d?(mn.title=!Y&&dr&&!_?p:null,mn["aria-describedby"]=Y?ye:null):(mn["aria-label"]=dr?p:null,mn["aria-labelledby"]=Y&&!dr?ye:null);const He={...mn,...U,...z.props,className:se(U.className,z.props.className),onTouchStart:Bt,ref:gn,...R?{onMouseMove:Vt}:{}},yn={};E||(He.onTouchStart=pn,He.onTouchEnd=pt),_||(He.onMouseOver=Oi(Ve,He.onMouseOver),He.onMouseLeave=Oi(ve,He.onMouseLeave),de||(yn.onMouseOver=Ve,yn.onMouseLeave=ve)),f||(He.onFocus=Oi(fn,He.onFocus),He.onBlur=Oi(Ze,He.onBlur),de||(yn.onFocus=fn,yn.onBlur=Ze));const Ye={...r,isRtl:G,arrow:i,disableInteractive:de,placement:m,PopperComponentProp:y,touch:J.current},Ue=typeof T.popper=="function"?T.popper(Ye):T.popper,fr=w.useMemo(()=>{var Oe,yi;let q=[{name:"arrow",enabled:!!me,options:{element:me,padding:4}}];return(Oe=I.popperOptions)!=null&&Oe.modifiers&&(q=q.concat(I.popperOptions.modifiers)),(yi=Ue==null?void 0:Ue.popperOptions)!=null&&yi.modifiers&&(q=q.concat(Ue.popperOptions.modifiers)),{...I.popperOptions,...Ue==null?void 0:Ue.popperOptions,modifiers:q}},[me,I.popperOptions,Ue==null?void 0:Ue.popperOptions]),gt=Dm(Ye),fi=typeof T.transition=="function"?T.transition(Ye):T.transition,Ht={slots:{popper:l.Popper,transition:l.Transition??$,tooltip:l.Tooltip,arrow:l.Arrow,...S},slotProps:{arrow:T.arrow??u.arrow,popper:{...I,...Ue??u.popper},tooltip:T.tooltip??u.tooltip,transition:{...B,...fi??u.transition}}},[pi,vn]=Se("popper",{elementType:Nm,externalForwardedProps:Ht,ownerState:Ye,className:se(gt.popper,I==null?void 0:I.className)}),[gi,Ne]=Se("transition",{elementType:rf,externalForwardedProps:Ht,ownerState:Ye}),[mi,wn]=Se("tooltip",{elementType:Lm,className:gt.tooltip,externalForwardedProps:Ht,ownerState:Ye}),[bn,bs]=Se("arrow",{elementType:Mm,className:gt.arrow,externalForwardedProps:Ht,ownerState:Ye,ref:ce});return k.jsxs(w.Fragment,{children:[w.cloneElement(z,He),k.jsx(pi,{as:y??uu,placement:m,anchorEl:R?{getBoundingClientRect:()=>({top:Cr.y,left:Cr.x,right:Cr.x,bottom:Cr.y,width:0,height:0})}:oe,popperRef:Rt,open:oe?Y:!1,id:ye,transition:!0,...yn,...vn,popperOptions:fr,children:({TransitionProps:q})=>k.jsx(gi,{timeout:H.transitions.duration.shorter,...q,...Ne,children:k.jsxs(mi,{...wn,children:[p,i?k.jsx(bn,{...bs}):null]})})})]})}),Fr=Ql({createStyledComponent:re("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>_e({props:t,name:"MuiStack"})}),jm=re("div",{shouldForwardProp:No})(Le(({theme:t})=>({position:"fixed",top:0,left:0,bottom:0,zIndex:t.zIndex.drawer-1,variants:[{props:{anchor:"left"},style:{right:"auto"}},{props:{anchor:"right"},style:{left:"auto",right:0}},{props:{anchor:"top"},style:{bottom:"auto",right:0}},{props:{anchor:"bottom"},style:{top:"auto",bottom:0,right:0}}]}))),Um=w.forwardRef(function(e,n){const{anchor:r,classes:i={},className:o,width:a,style:l,...u}=e,d=e;return k.jsx(jm,{className:se("PrivateSwipeArea-root",i.root,i[`anchor${Te(r)}`],o),ref:n,style:{[An(r)?"width":"height"]:a,...l},ownerState:d,...u})}),Di=3,kc=20;let xt=null;function Vs(t,e,n){return t==="right"?n.body.offsetWidth-e[0].pageX:e[0].pageX}function Hs(t,e,n){return t==="bottom"?n.innerHeight-e[0].clientY:e[0].clientY}function Rr(t,e){return t?e.clientWidth:e.clientHeight}function Pc(t,e,n,r){return Math.min(Math.max(n?e-t:r+e-t,0),r)}function Fm(t,e){const n=[];for(;t&&t!==e.parentElement;){const r=Et(e).getComputedStyle(t);r.getPropertyValue("position")==="absolute"||r.getPropertyValue("overflow-x")==="hidden"||(t.clientWidth>0&&t.scrollWidth>t.clientWidth||t.clientHeight>0&&t.scrollHeight>t.clientHeight)&&n.push(t),t=t.parentElement}return n}function $m({domTreeShapes:t,start:e,current:n,anchor:r}){const i={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return t.some(o=>{let a=n>=e;(r==="top"||r==="left")&&(a=!a);const l=r==="left"||r==="right"?"x":"y",u=Math.round(o[i.scrollPosition[l]]),d=u>0,f=u+o[i.clientLength[l]]<o[i.scrollLength[l]];return!!(a&&f||!a&&d)})}const Bm=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),Vm=w.forwardRef(function(e,n){const r=_e({name:"MuiSwipeableDrawer",props:e}),i=ar(),o={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:a="left",disableBackdropTransition:l=!1,disableDiscovery:u=!1,disableSwipeToOpen:d=Bm,hideBackdrop:f,hysteresis:_=.52,allowSwipeInChildren:b=!1,minFlingVelocity:E=450,ModalProps:{BackdropProps:A,...O}={},onClose:C,onOpen:R,open:D=!1,PaperProps:P={},SwipeAreaProps:L,swipeAreaWidth:j=20,transitionDuration:M=o,variant:v="temporary",slots:m={},slotProps:y={},...I}=r,[T,S]=w.useState(!1),p=w.useRef({isSwiping:null}),$=w.useRef(),B=w.useRef(),U=w.useRef(),z=dt(P.ref,U),H=w.useRef(!1),G=w.useRef();jn(()=>{G.current=null},[D]);const oe=w.useCallback((V,ee={})=>{const{mode:te=null,changeTransition:le=!0}=ee,ne=Dr(i,a),Y=["right","bottom"].includes(ne)?1:-1,ye=An(a),ae=ye?`translate(${Y*V}px, 0)`:`translate(0, ${Y*V}px)`,je=U.current.style;je.webkitTransform=ae,je.transform=ae;let pe="";if(te&&(pe=i.transitions.create("all",zr({easing:void 0,style:void 0,timeout:M},{mode:te}))),le&&(je.webkitTransition=pe,je.transition=pe),!l&&!f){const Ee=B.current.style;Ee.opacity=1-V/Rr(ye,U.current),le&&(Ee.webkitTransition=pe,Ee.transition=pe)}},[a,l,f,i,M]),be=On(V=>{if(!H.current)return;if(xt=null,H.current=!1,co.flushSync(()=>{S(!1)}),!p.current.isSwiping){p.current.isSwiping=null;return}p.current.isSwiping=null;const ee=Dr(i,a),te=An(a);let le;te?le=Vs(ee,V.changedTouches,Je(V.currentTarget)):le=Hs(ee,V.changedTouches,Et(V.currentTarget));const ne=te?p.current.startX:p.current.startY,Y=Rr(te,U.current),ye=Pc(le,ne,D,Y),ae=ye/Y;if(Math.abs(p.current.velocity)>E&&(G.current=Math.abs((Y-ye)/p.current.velocity)*1e3),D){p.current.velocity>E||ae>_?C():oe(0,{mode:"exit"});return}p.current.velocity<-E||1-ae>_?R():oe(Rr(te,U.current),{mode:"enter"})}),me=(V=!1)=>{if(!T){(V||!(u&&b))&&co.flushSync(()=>{S(!0)});const ee=An(a);!D&&U.current&&oe(Rr(ee,U.current)+(u?15:-20),{changeTransition:!1}),p.current.velocity=0,p.current.lastTime=null,p.current.lastTranslate=null,p.current.paperHit=!1,H.current=!0}},ce=On(V=>{if(!U.current||!H.current||xt!==null&&xt!==p.current)return;me(!0);const ee=Dr(i,a),te=An(a),le=Vs(ee,V.touches,Je(V.currentTarget)),ne=Hs(ee,V.touches,Et(V.currentTarget));if(D&&U.current.contains(V.target)&&xt===null){const pe=Fm(V.target,U.current);if($m({domTreeShapes:pe,start:te?p.current.startX:p.current.startY,current:te?le:ne,anchor:a})){xt=!0;return}xt=p.current}if(p.current.isSwiping==null){const pe=Math.abs(le-p.current.startX),Ee=Math.abs(ne-p.current.startY),Ve=te?pe>Ee&&pe>Di:Ee>pe&&Ee>Di;if(Ve&&V.cancelable&&V.preventDefault(),Ve===!0||(te?Ee>Di:pe>Di)){if(p.current.isSwiping=Ve,!Ve){be(V);return}p.current.startX=le,p.current.startY=ne,!u&&!D&&(te?p.current.startX-=kc:p.current.startY-=kc)}}if(!p.current.isSwiping)return;const Y=Rr(te,U.current);let ye=te?p.current.startX:p.current.startY;D&&!p.current.paperHit&&(ye=Math.min(ye,Y));const ae=Pc(te?le:ne,ye,D,Y);if(D)if(p.current.paperHit)ae===0&&(p.current.startX=le,p.current.startY=ne);else if(te?le<Y:ne<Y)p.current.paperHit=!0,p.current.startX=le,p.current.startY=ne;else return;p.current.lastTranslate===null&&(p.current.lastTranslate=ae,p.current.lastTime=performance.now()+1);const je=(ae-p.current.lastTranslate)/(performance.now()-p.current.lastTime)*1e3;p.current.velocity=p.current.velocity*.4+je*.6,p.current.lastTranslate=ae,p.current.lastTime=performance.now(),V.cancelable&&V.preventDefault(),oe(ae)}),J=On(V=>{var Y;if(V.defaultPrevented||V.defaultMuiPrevented||D&&(f||!B.current.contains(V.target))&&!U.current.contains(V.target))return;const ee=Dr(i,a),te=An(a),le=Vs(ee,V.touches,Je(V.currentTarget)),ne=Hs(ee,V.touches,Et(V.currentTarget));if(!D){if(d||!(V.target===$.current||(Y=U.current)!=null&&Y.contains(V.target)&&(typeof b=="function"?b(V,$.current,U.current):b)))return;if(te){if(le>j)return}else if(ne>j)return}V.defaultMuiPrevented=!0,xt=null,p.current.startX=le,p.current.startY=ne,me()});w.useEffect(()=>{if(v==="temporary"){const V=Je(U.current);return V.addEventListener("touchstart",J),V.addEventListener("touchmove",ce,{passive:!D}),V.addEventListener("touchend",be),()=>{V.removeEventListener("touchstart",J),V.removeEventListener("touchmove",ce,{passive:!D}),V.removeEventListener("touchend",be)}}},[v,D,J,ce,be]),w.useEffect(()=>()=>{xt===p.current&&(xt=null)},[]),w.useEffect(()=>{D||S(!1)},[D]);const[de,Ce]=Se("swipeArea",{ref:$,elementType:Um,ownerState:r,externalForwardedProps:{slots:m,slotProps:{swipeArea:L,...y}},additionalProps:{width:j,anchor:a}});return k.jsxs(w.Fragment,{children:[k.jsx(rm,{open:v==="temporary"&&T?!0:D,variant:v,ModalProps:{BackdropProps:{...A,ref:B},...v==="temporary"&&{keepMounted:!0},...O},hideBackdrop:f,anchor:a,transitionDuration:G.current||M,onClose:C,ref:n,slots:m,slotProps:{...y,backdrop:lo(y.backdrop??A,{ref:B}),paper:lo(y.paper??P,{style:{pointerEvents:v==="temporary"&&!D&&!b?"none":""},ref:z})},...I}),!d&&v==="temporary"&&k.jsx(km,{children:k.jsx(de,{...Ce})})]})});function Hm(t){return ke("MuiToolbar",t)}Pe("MuiToolbar",["root","gutters","regular","dense"]);const Wm=t=>{const{classes:e,disableGutters:n,variant:r}=t;return xe({root:["root",!n&&"gutters",r]},Hm,e)},zm=re("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableGutters&&e.gutters,e[n.variant]]}})(Le(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}))),Gm=w.forwardRef(function(e,n){const r=_e({props:e,name:"MuiToolbar"}),{className:i,component:o="div",disableGutters:a=!1,variant:l="regular",...u}=r,d={...r,component:o,disableGutters:a,variant:l},f=Wm(d);return k.jsx(zm,{as:o,className:se(f.root,i),ref:n,ownerState:d,...u})});var xr={},Oc;function qm(){if(Oc)return xr;Oc=1,Object.defineProperty(xr,"__esModule",{value:!0}),xr.parse=a,xr.serialize=d;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,o=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function a(b,E){const A=new o,O=b.length;if(O<2)return A;const C=(E==null?void 0:E.decode)||f;let R=0;do{const D=b.indexOf("=",R);if(D===-1)break;const P=b.indexOf(";",R),L=P===-1?O:P;if(D>L){R=b.lastIndexOf(";",D-1)+1;continue}const j=l(b,R,D),M=u(b,D,j),v=b.slice(j,M);if(A[v]===void 0){let m=l(b,D+1,L),y=u(b,L,m);const I=C(b.slice(m,y));A[v]=I}R=L+1}while(R<O);return A}function l(b,E,A){do{const O=b.charCodeAt(E);if(O!==32&&O!==9)return E}while(++E<A);return A}function u(b,E,A){for(;E>A;){const O=b.charCodeAt(--E);if(O!==32&&O!==9)return E+1}return A}function d(b,E,A){const O=(A==null?void 0:A.encode)||encodeURIComponent;if(!t.test(b))throw new TypeError(`argument name is invalid: ${b}`);const C=O(E);if(!e.test(C))throw new TypeError(`argument val is invalid: ${E}`);let R=b+"="+C;if(!A)return R;if(A.maxAge!==void 0){if(!Number.isInteger(A.maxAge))throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);R+="; Max-Age="+A.maxAge}if(A.domain){if(!n.test(A.domain))throw new TypeError(`option domain is invalid: ${A.domain}`);R+="; Domain="+A.domain}if(A.path){if(!r.test(A.path))throw new TypeError(`option path is invalid: ${A.path}`);R+="; Path="+A.path}if(A.expires){if(!_(A.expires)||!Number.isFinite(A.expires.valueOf()))throw new TypeError(`option expires is invalid: ${A.expires}`);R+="; Expires="+A.expires.toUTCString()}if(A.httpOnly&&(R+="; HttpOnly"),A.secure&&(R+="; Secure"),A.partitioned&&(R+="; Partitioned"),A.priority)switch(typeof A.priority=="string"?A.priority.toLowerCase():void 0){case"low":R+="; Priority=Low";break;case"medium":R+="; Priority=Medium";break;case"high":R+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${A.priority}`)}if(A.sameSite)switch(typeof A.sameSite=="string"?A.sameSite.toLowerCase():A.sameSite){case!0:case"strict":R+="; SameSite=Strict";break;case"lax":R+="; SameSite=Lax";break;case"none":R+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${A.sameSite}`)}return R}function f(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function _(b){return i.call(b)==="[object Date]"}return xr}qm();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dc="popstate";function Km(t={}){function e(r,i){let{pathname:o,search:a,hash:l}=r.location;return mo("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kr(i)}return Jm(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function St(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ym(){return Math.random().toString(36).substring(2,10)}function Nc(t,e){return{usr:t.state,key:t.key,idx:e}}function mo(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?cr(e):e,state:n,key:e&&e.key||r||Ym()}}function Kr({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function cr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Jm(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",u=null,d=f();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function f(){return(a.state||{idx:null}).idx}function _(){l="POP";let C=f(),R=C==null?null:C-d;d=C,u&&u({action:l,location:O.location,delta:R})}function b(C,R){l="PUSH";let D=mo(O.location,C,R);d=f()+1;let P=Nc(D,d),L=O.createHref(D);try{a.pushState(P,"",L)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(L)}o&&u&&u({action:l,location:O.location,delta:1})}function E(C,R){l="REPLACE";let D=mo(O.location,C,R);d=f();let P=Nc(D,d),L=O.createHref(D);a.replaceState(P,"",L),o&&u&&u({action:l,location:O.location,delta:0})}function A(C){let R=i.location.origin!=="null"?i.location.origin:i.location.href,D=typeof C=="string"?C:Kr(C);return D=D.replace(/ $/,"%20"),ge(R,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,R)}let O={get action(){return l},get location(){return t(i,a)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dc,_),u=C,()=>{i.removeEventListener(Dc,_),u=null}},createHref(C){return e(i,C)},createURL:A,encodeLocation(C){let R=A(C);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:b,replace:E,go(C){return a.go(C)}};return O}function wu(t,e,n="/"){return Xm(t,e,n,!1)}function Xm(t,e,n,r){let i=typeof e=="string"?cr(e):e,o=sn(i.pathname||"/",n);if(o==null)return null;let a=bu(t);Qm(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let d=ly(o);l=ay(a[u],d,r)}return l}function bu(t,e=[],n=[],r=""){let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let d=Lt([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(ge(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),bu(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:sy(d,o.index),routesMeta:f})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of Eu(o.path))i(o,a,u)}),e}function Eu(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Eu(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Qm(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Zm=/^:[\w-]+$/,ey=3,ty=2,ny=1,ry=10,iy=-2,Lc=t=>t==="*";function sy(t,e){let n=t.split("/"),r=n.length;return n.some(Lc)&&(r+=iy),e&&(r+=ty),n.filter(i=>!Lc(i)).reduce((i,o)=>i+(Zm.test(o)?ey:o===""?ny:ry),r)}function oy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ay(t,e,n=!1){let{routesMeta:r}=t,i={},o="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",_=Yi({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),b=u.route;if(!_&&d&&n&&!r[r.length-1].route.index&&(_=Yi({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!_)return null;Object.assign(i,_.params),a.push({params:i,pathname:Lt([o,_.pathname]),pathnameBase:fy(Lt([o,_.pathnameBase])),route:b}),_.pathnameBase!=="/"&&(o=Lt([o,_.pathnameBase]))}return a}function Yi(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,{paramName:f,isOptional:_},b)=>{if(f==="*"){let A=l[b]||"";a=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const E=l[b];return _&&!E?d[f]=void 0:d[f]=(E||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:t}}function cy(t,e=!1,n=!0){St(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ly(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return St(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function sn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uy(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cr(t):t;return{pathname:n?n.startsWith("/")?n:hy(n,e):e,search:py(r),hash:gy(i)}}function hy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ws(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Iu(t){let e=dy(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Tu(t,e,n,r=!1){let i;typeof t=="string"?i=cr(t):(i={...t},ge(!i.pathname||!i.pathname.includes("?"),Ws("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Ws("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Ws("#","search","hash",i)));let o=t===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let _=e.length-1;if(!r&&a.startsWith("..")){let b=a.split("/");for(;b[0]==="..";)b.shift(),_-=1;i.pathname=b.join("/")}l=_>=0?e[_]:"/"}let u=uy(i,l),d=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}var Lt=t=>t.join("/").replace(/\/\/+/g,"/"),fy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),py=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function my(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var _u=["POST","PUT","PATCH","DELETE"];new Set(_u);var yy=["GET",..._u];new Set(yy);var lr=w.createContext(null);lr.displayName="DataRouter";var us=w.createContext(null);us.displayName="DataRouterState";var Su=w.createContext({isTransitioning:!1});Su.displayName="ViewTransition";var vy=w.createContext(new Map);vy.displayName="Fetchers";var wy=w.createContext(null);wy.displayName="Await";var Ct=w.createContext(null);Ct.displayName="Navigation";var ri=w.createContext(null);ri.displayName="Location";var $t=w.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var Ho=w.createContext(null);Ho.displayName="RouteError";function by(t,{relative:e}={}){ge(ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=w.useContext(Ct),{hash:i,pathname:o,search:a}=si(t,{relative:e}),l=o;return n!=="/"&&(l=o==="/"?n:Lt([n,o])),r.createHref({pathname:l,search:a,hash:i})}function ii(){return w.useContext(ri)!=null}function Wn(){return ge(ii(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(ri).location}var Au="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cu(t){w.useContext(Ct).static||w.useLayoutEffect(t)}function Ey(){let{isDataRoute:t}=w.useContext($t);return t?Ny():Iy()}function Iy(){ge(ii(),"useNavigate() may be used only in the context of a <Router> component.");let t=w.useContext(lr),{basename:e,navigator:n}=w.useContext(Ct),{matches:r}=w.useContext($t),{pathname:i}=Wn(),o=JSON.stringify(Iu(r)),a=w.useRef(!1);return Cu(()=>{a.current=!0}),w.useCallback((u,d={})=>{if(St(a.current,Au),!a.current)return;if(typeof u=="number"){n.go(u);return}let f=Tu(u,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Lt([e,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[e,n,o,i,t])}w.createContext(null);function si(t,{relative:e}={}){let{matches:n}=w.useContext($t),{pathname:r}=Wn(),i=JSON.stringify(Iu(n));return w.useMemo(()=>Tu(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function Ty(t,e){return Ru(t,e)}function Ru(t,e,n,r){var D;ge(ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:o}=w.useContext(Ct),{matches:a}=w.useContext($t),l=a[a.length-1],u=l?l.params:{},d=l?l.pathname:"/",f=l?l.pathnameBase:"/",_=l&&l.route;{let P=_&&_.path||"";xu(d,!_||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let b=Wn(),E;if(e){let P=typeof e=="string"?cr(e):e;ge(f==="/"||((D=P.pathname)==null?void 0:D.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${P.pathname}" was given in the \`location\` prop.`),E=P}else E=b;let A=E.pathname||"/",O=A;if(f!=="/"){let P=f.replace(/^\//,"").split("/");O="/"+A.replace(/^\//,"").split("/").slice(P.length).join("/")}let C=!o&&n&&n.matches&&n.matches.length>0?n.matches:wu(t,{pathname:O});St(_||C!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),St(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Ry(C&&C.map(P=>Object.assign({},P,{params:Object.assign({},u,P.params),pathname:Lt([f,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?f:Lt([f,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),a,n,r);return e&&R?w.createElement(ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},R):R}function _y(){let t=Dy(),e=my(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:o},"ErrorBoundary")," or"," ",w.createElement("code",{style:o},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,a)}var Sy=w.createElement(_y,null),Ay=class extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?w.createElement($t.Provider,{value:this.props.routeContext},w.createElement(Ho.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Cy({routeContext:t,match:e,children:n}){let r=w.useContext(lr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),w.createElement($t.Provider,{value:t},n)}function Ry(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let u=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);ge(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let a=!1,l=-1;if(n)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=u),d.route.id){let{loaderData:f,errors:_}=n,b=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!_||_[d.route.id]===void 0);if(d.route.lazy||b){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,d,f)=>{let _,b=!1,E=null,A=null;n&&(_=o&&d.route.id?o[d.route.id]:void 0,E=d.route.errorElement||Sy,a&&(l<0&&f===0?(xu("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,A=null):l===f&&(b=!0,A=d.route.hydrateFallbackElement||null)));let O=e.concat(i.slice(0,f+1)),C=()=>{let R;return _?R=E:b?R=A:d.route.Component?R=w.createElement(d.route.Component,null):d.route.element?R=d.route.element:R=u,w.createElement(Cy,{match:d,routeContext:{outlet:u,matches:O,isDataRoute:n!=null},children:R})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(Ay,{location:n.location,revalidation:n.revalidation,component:E,error:_,children:C(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):C()},null)}function Wo(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xy(t){let e=w.useContext(lr);return ge(e,Wo(t)),e}function ky(t){let e=w.useContext(us);return ge(e,Wo(t)),e}function Py(t){let e=w.useContext($t);return ge(e,Wo(t)),e}function zo(t){let e=Py(t),n=e.matches[e.matches.length-1];return ge(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function Oy(){return zo("useRouteId")}function Dy(){var r;let t=w.useContext(Ho),e=ky("useRouteError"),n=zo("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function Ny(){let{router:t}=xy("useNavigate"),e=zo("useNavigate"),n=w.useRef(!1);return Cu(()=>{n.current=!0}),w.useCallback(async(i,o={})=>{St(n.current,Au),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...o}))},[t,e])}var Mc={};function xu(t,e,n){!e&&!Mc[t]&&(Mc[t]=!0,St(!1,n))}w.memo(Ly);function Ly({routes:t,future:e,state:n}){return Ru(t,void 0,n,e)}function ku(t){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function My({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){ge(!ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=cr(n));let{pathname:u="/",search:d="",hash:f="",state:_=null,key:b="default"}=n,E=w.useMemo(()=>{let A=sn(u,a);return A==null?null:{location:{pathname:A,search:d,hash:f,state:_,key:b},navigationType:r}},[a,u,d,f,_,b,r]);return St(E!=null,`<Router basename="${a}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:w.createElement(Ct.Provider,{value:l},w.createElement(ri.Provider,{children:e,value:E}))}function jy({children:t,location:e}){return Ty(yo(t),e)}function yo(t,e=[]){let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let o=[...e,i];if(r.type===w.Fragment){n.push.apply(n,yo(r.props.children,o));return}ge(r.type===ku,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=yo(r.props.children,o)),n.push(a)}),n}var $i="get",Bi="application/x-www-form-urlencoded";function hs(t){return t!=null&&typeof t.tagName=="string"}function Uy(t){return hs(t)&&t.tagName.toLowerCase()==="button"}function Fy(t){return hs(t)&&t.tagName.toLowerCase()==="form"}function $y(t){return hs(t)&&t.tagName.toLowerCase()==="input"}function By(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Vy(t,e){return t.button===0&&(!e||e==="_self")&&!By(t)}var Ni=null;function Hy(){if(Ni===null)try{new FormData(document.createElement("form"),0),Ni=!1}catch{Ni=!0}return Ni}var Wy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zs(t){return t!=null&&!Wy.has(t)?(St(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bi}"`),null):t}function zy(t,e){let n,r,i,o,a;if(Fy(t)){let l=t.getAttribute("action");r=l?sn(l,e):null,n=t.getAttribute("method")||$i,i=zs(t.getAttribute("enctype"))||Bi,o=new FormData(t)}else if(Uy(t)||$y(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?sn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||$i,i=zs(t.getAttribute("formenctype"))||zs(l.getAttribute("enctype"))||Bi,o=new FormData(l,t),!Hy()){let{name:d,type:f,value:_}=t;if(f==="image"){let b=d?`${d}.`:"";o.append(`${b}x`,"0"),o.append(`${b}y`,"0")}else d&&o.append(d,_)}}else{if(hs(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$i,r=null,i=Bi,a=t}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}function Go(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function Gy(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qy(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Ky(t,e,n){let r=await Promise.all(t.map(async i=>{let o=e.routes[i.route.id];if(o){let a=await Gy(o,n);return a.links?a.links():[]}return[]}));return Qy(r.flat(1).filter(qy).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function jc(t,e,n,r,i,o){let a=(u,d)=>n[d]?u.route.id!==n[d].route.id:!0,l=(u,d)=>{var f;return n[d].pathname!==u.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==u.params["*"]};return o==="assets"?e.filter((u,d)=>a(u,d)||l(u,d)):o==="data"?e.filter((u,d)=>{var _;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(a(u,d)||l(u,d))return!0;if(u.route.shouldRevalidate){let b=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Yy(t,e,{includeHydrateFallback:n}={}){return Jy(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function Jy(t){return[...new Set(t)]}function Xy(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Qy(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let o=JSON.stringify(Xy(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function Zy(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ev(){let t=w.useContext(lr);return Go(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function tv(){let t=w.useContext(us);return Go(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var qo=w.createContext(void 0);qo.displayName="FrameworkContext";function Pu(){let t=w.useContext(qo);return Go(t,"You must render this element inside a <HydratedRouter> element"),t}function nv(t,e){let n=w.useContext(qo),[r,i]=w.useState(!1),[o,a]=w.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:d,onMouseLeave:f,onTouchStart:_}=e,b=w.useRef(null);w.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let O=R=>{R.forEach(D=>{a(D.isIntersecting)})},C=new IntersectionObserver(O,{threshold:.5});return b.current&&C.observe(b.current),()=>{C.disconnect()}}},[t]),w.useEffect(()=>{if(r){let O=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(O)}}},[r]);let E=()=>{i(!0)},A=()=>{i(!1),a(!1)};return n?t!=="intent"?[o,b,{}]:[o,b,{onFocus:kr(l,E),onBlur:kr(u,A),onMouseEnter:kr(d,E),onMouseLeave:kr(f,A),onTouchStart:kr(_,E)}]:[!1,b,{}]}function kr(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function rv({page:t,...e}){let{router:n}=ev(),r=w.useMemo(()=>wu(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?w.createElement(sv,{page:t,matches:r,...e}):null}function iv(t){let{manifest:e,routeModules:n}=Pu(),[r,i]=w.useState([]);return w.useEffect(()=>{let o=!1;return Ky(t,e,n).then(a=>{o||i(a)}),()=>{o=!0}},[t,e,n]),r}function sv({page:t,matches:e,...n}){let r=Wn(),{manifest:i,routeModules:o}=Pu(),{loaderData:a,matches:l}=tv(),u=w.useMemo(()=>jc(t,e,l,i,r,"data"),[t,e,l,i,r]),d=w.useMemo(()=>jc(t,e,l,i,r,"assets"),[t,e,l,i,r]),f=w.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(C=>{var D;let R=i.routes[C.route.id];!R||!R.hasLoader||(!u.some(P=>P.route.id===C.route.id)&&C.route.id in a&&((D=o[C.route.id])!=null&&D.shouldRevalidate)||R.hasClientLoader?A=!0:E.add(C.route.id))}),E.size===0)return[];let O=Zy(t);return A&&E.size>0&&O.searchParams.set("_routes",e.filter(C=>E.has(C.route.id)).map(C=>C.route.id).join(",")),[O.pathname+O.search]},[a,r,i,u,e,t,o]),_=w.useMemo(()=>Yy(d,i),[d,i]),b=iv(d);return w.createElement(w.Fragment,null,f.map(E=>w.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),_.map(E=>w.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),b.map(({key:E,link:A})=>w.createElement("link",{key:E,...A})))}function ov(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Ou=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ou&&(window.__reactRouterVersion="7.2.0")}catch{}function av({basename:t,children:e,window:n}){let r=w.useRef();r.current==null&&(r.current=Km({window:n,v5Compat:!0}));let i=r.current,[o,a]=w.useState({action:i.action,location:i.location}),l=w.useCallback(u=>{w.startTransition(()=>a(u))},[a]);return w.useLayoutEffect(()=>i.listen(l),[i,l]),w.createElement(My,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i})}var Du=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ko=w.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:f,viewTransition:_,...b},E){let{basename:A}=w.useContext(Ct),O=typeof d=="string"&&Du.test(d),C,R=!1;if(typeof d=="string"&&O&&(C=d,Ou))try{let y=new URL(window.location.href),I=d.startsWith("//")?new URL(y.protocol+d):new URL(d),T=sn(I.pathname,A);I.origin===y.origin&&T!=null?d=T+I.search+I.hash:R=!0}catch{St(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=by(d,{relative:i}),[P,L,j]=nv(r,b),M=hv(d,{replace:a,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:_});function v(y){e&&e(y),y.defaultPrevented||M(y)}let m=w.createElement("a",{...b,...j,href:C||D,onClick:R||o?e:v,ref:ov(E,L),target:u,"data-discover":!O&&n==="render"?"true":void 0});return P&&!O?w.createElement(w.Fragment,null,m,w.createElement(rv,{page:D})):m});Ko.displayName="Link";var cv=w.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:u,...d},f){let _=si(a,{relative:d.relative}),b=Wn(),E=w.useContext(us),{navigator:A,basename:O}=w.useContext(Ct),C=E!=null&&mv(_)&&l===!0,R=A.encodeLocation?A.encodeLocation(_).pathname:_.pathname,D=b.pathname,P=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;n||(D=D.toLowerCase(),P=P?P.toLowerCase():null,R=R.toLowerCase()),P&&O&&(P=sn(P,O)||P);const L=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let j=D===R||!i&&D.startsWith(R)&&D.charAt(L)==="/",M=P!=null&&(P===R||!i&&P.startsWith(R)&&P.charAt(R.length)==="/"),v={isActive:j,isPending:M,isTransitioning:C},m=j?e:void 0,y;typeof r=="function"?y=r(v):y=[r,j?"active":null,M?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let I=typeof o=="function"?o(v):o;return w.createElement(Ko,{...d,"aria-current":m,className:y,ref:f,style:I,to:a,viewTransition:l},typeof u=="function"?u(v):u)});cv.displayName="NavLink";var lv=w.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:o,method:a=$i,action:l,onSubmit:u,relative:d,preventScrollReset:f,viewTransition:_,...b},E)=>{let A=pv(),O=gv(l,{relative:d}),C=a.toLowerCase()==="get"?"get":"post",R=typeof l=="string"&&Du.test(l),D=P=>{if(u&&u(P),P.defaultPrevented)return;P.preventDefault();let L=P.nativeEvent.submitter,j=(L==null?void 0:L.getAttribute("formmethod"))||a;A(L||P.currentTarget,{fetcherKey:e,method:j,navigate:n,replace:i,state:o,relative:d,preventScrollReset:f,viewTransition:_})};return w.createElement("form",{ref:E,method:C,action:O,onSubmit:r?u:D,...b,"data-discover":!R&&t==="render"?"true":void 0})});lv.displayName="Form";function uv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nu(t){let e=w.useContext(lr);return ge(e,uv(t)),e}function hv(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=Ey(),u=Wn(),d=si(t,{relative:o});return w.useCallback(f=>{if(Vy(f,e)){f.preventDefault();let _=n!==void 0?n:Kr(u)===Kr(d);l(t,{replace:_,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[u,l,d,n,r,e,t,i,o,a])}var dv=0,fv=()=>`__${String(++dv)}__`;function pv(){let{router:t}=Nu("useSubmit"),{basename:e}=w.useContext(Ct),n=Oy();return w.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:u,body:d}=zy(r,e);if(i.navigate===!1){let f=i.fetcherKey||fv();await t.fetch(f,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function gv(t,{relative:e}={}){let{basename:n}=w.useContext(Ct),r=w.useContext($t);ge(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...si(t||".",{relative:e})},a=Wn();if(t==null){o.search=a.search;let l=new URLSearchParams(o.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(_=>_).forEach(_=>l.append("index",_));let f=l.toString();o.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Lt([n,o.pathname])),Kr(o)}function mv(t,e={}){let n=w.useContext(Su);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nu("useViewTransitionState"),i=si(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=sn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=sn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yi(i.pathname,a)!=null||Yi(i.pathname,o)!=null}new TextEncoder;const yv=w.createContext(null),Gs={didCatch:!1,error:null};class vv extends w.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Gs}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:o,reason:"imperative-api"}),this.setState(Gs)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&wv(e.resetKeys,i)){var o,a;(o=(a=this.props).onReset)===null||o===void 0||o.call(a,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(Gs)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:o,error:a}=this.state;let l=e;if(o){const u={error:a,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")l=n(u);else if(r)l=w.createElement(r,u);else if(i!==void 0)l=i;else throw a}return w.createElement(yv.Provider,{value:{didCatch:o,error:a,resetErrorBoundary:this.resetErrorBoundary}},l)}}function wv(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}function bv(t){return t.displayName||t.name||"Component"}function Ev(t,e){function n(r){return k.jsx(vv,{FallbackComponent:e,children:k.jsx(t,{...r})})}return n.displayName=`WithErrorHandling${bv(t)}`,n}const Iv=At(k.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),Tv=At(k.jsx("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"}),"RestartAlt"),_v=re(Fr)({justifyContent:"center",alignItems:"center"}),Lu=re(_v)({width:"100%",height:"100%"});function Sv(){return window.location.reload()}function Av(){return k.jsx(du,{height:400,children:k.jsx(Lu,{children:k.jsxs(Zr,{sx:{p:5},children:[k.jsx(tt,{variant:"h5",component:"h3",children:"Sorry, I guess, something went wrong. You can:"}),k.jsxs(Dn,{startIcon:k.jsx(Iv,{}),variant:"outlined",target:"_blank",rel:"noreferrer",href:`mailto: ${hc}`,sx:{my:3},children:["contact with author by this email - ",hc]}),k.jsx(tt,{component:"h6",children:"or"}),k.jsx(Dn,{startIcon:k.jsx(Tv,{}),sx:{mt:3},variant:"outlined",onClick:Sv,children:"Press here to reset the application"})]})})})}const Cv=()=>{};var Uc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Rv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=o>>2,_=(o&3)<<4|l>>4;let b=(l&15)<<2|d>>6,E=d&63;u||(E=64,a||(b=64)),r.push(n[f],n[_],n[b],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const _=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||d==null||_==null)throw new xv;const b=o<<2|l>>4;if(r.push(b),d!==64){const E=l<<4&240|d>>2;if(r.push(E),_!==64){const A=d<<6&192|_;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kv=function(t){const e=Mu(t);return ju.encodeByteArray(e,!0)},Ji=function(t){return kv(t).replace(/\./g,"")},Uu=function(t){try{return ju.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=()=>Pv().__FIREBASE_DEFAULTS__,Dv=()=>{if(typeof process>"u"||typeof Uc>"u")return;const t=Uc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uu(t[1]);return e&&JSON.parse(e)},Yo=()=>{try{return Cv()||Ov()||Dv()||Nv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fu=t=>{var e,n;return(n=(e=Yo())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},$u=t=>{const e=Fu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bu=()=>{var t;return(t=Yo())==null?void 0:t.config},Vu=t=>{var e;return(e=Yo())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jo(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ji(JSON.stringify(n)),Ji(JSON.stringify(a)),""].join(".")}const $r={};function jv(){const t={prod:[],emulator:[]};for(const e of Object.keys($r))$r[e]?t.emulator.push(e):t.prod.push(e);return t}function Uv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fc=!1;function Xo(t,e){if(typeof window>"u"||typeof document>"u"||!zn(window.location.host)||$r[t]===e||$r[t]||Fc)return;$r[t]=e;function n(b){return`__firebase__banner__${b}`}const r="__firebase__banner",o=jv().prod.length>0;function a(){const b=document.getElementById(r);b&&b.remove()}function l(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function u(b,E){b.setAttribute("width","24"),b.setAttribute("id",E),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function d(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Fc=!0,a()},b}function f(b,E){b.setAttribute("id",E),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function _(){const b=Uv(r),E=n("text"),A=document.getElementById(E)||document.createElement("span"),O=n("learnmore"),C=document.getElementById(O)||document.createElement("a"),R=n("preprendIcon"),D=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const P=b.element;l(P),f(C,O);const L=d();u(D,R),P.append(D,A,C,L),document.body.appendChild(P)}o?(A.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function $v(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vv(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wu(){try{return typeof indexedDB=="object"}catch{return!1}}function zu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}function Hv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wv,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?zv(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new at(i,l,r)}}function zv(t,e){return t.replace(Gv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gv=/\{\$([^}]+)}/g;function qv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function on(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if($c(o)&&$c(a)){if(!on(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $c(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kv(t,e){const n=new Yv(t,e);return n.subscribe.bind(n)}class Yv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qs),i.error===void 0&&(i.error=qs),i.complete===void 0&&(i.complete=qs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=1e3,Qv=2,Zv=4*60*60*1e3,ew=.5;function Bc(t,e=Xv,n=Qv){const r=e*Math.pow(n,t),i=Math.round(ew*r*(Math.random()-.5)*2);return Math.min(Zv,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class st{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rw(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nw(t){return t===Sn?void 0:t}function rw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const sw={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ow=ie.INFO,aw={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},cw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ds{constructor(e){this.name=e,this._logLevel=ow,this._logHandler=cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const lw=(t,e)=>e.some(n=>t instanceof n);let Vc,Hc;function uw(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hw(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gu=new WeakMap,vo=new WeakMap,qu=new WeakMap,Ks=new WeakMap,Qo=new WeakMap;function dw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(nn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Gu.set(n,t)}).catch(()=>{}),Qo.set(e,t),e}function fw(t){if(vo.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});vo.set(t,e)}let wo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pw(t){wo=t(wo)}function gw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ys(this),e,...n);return qu.set(r,e.sort?e.sort():[e]),nn(r)}:hw().includes(t)?function(...e){return t.apply(Ys(this),e),nn(Gu.get(this))}:function(...e){return nn(t.apply(Ys(this),e))}}function mw(t){return typeof t=="function"?gw(t):(t instanceof IDBTransaction&&fw(t),lw(t,uw())?new Proxy(t,wo):t)}function nn(t){if(t instanceof IDBRequest)return dw(t);if(Ks.has(t))return Ks.get(t);const e=mw(t);return e!==t&&(Ks.set(t,e),Qo.set(e,t)),e}const Ys=t=>Qo.get(t);function Ku(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),l=nn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(nn(a.result),u.oldVersion,u.newVersion,nn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const yw=["get","getKey","getAll","getAllKeys","count"],vw=["put","add","delete","clear"],Js=new Map;function Wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yw.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Js.set(e,o),o}pw(t=>({...t,get:(e,n,r)=>Wc(e,n)||t.get(e,n,r),has:(e,n)=>!!Wc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bo="@firebase/app",zc="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new ds("@firebase/app"),Ew="@firebase/app-compat",Iw="@firebase/analytics-compat",Tw="@firebase/analytics",_w="@firebase/app-check-compat",Sw="@firebase/app-check",Aw="@firebase/auth",Cw="@firebase/auth-compat",Rw="@firebase/database",xw="@firebase/data-connect",kw="@firebase/database-compat",Pw="@firebase/functions",Ow="@firebase/functions-compat",Dw="@firebase/installations",Nw="@firebase/installations-compat",Lw="@firebase/messaging",Mw="@firebase/messaging-compat",jw="@firebase/performance",Uw="@firebase/performance-compat",Fw="@firebase/remote-config",$w="@firebase/remote-config-compat",Bw="@firebase/storage",Vw="@firebase/storage-compat",Hw="@firebase/firestore",Ww="@firebase/ai",zw="@firebase/firestore-compat",Gw="firebase",qw="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="[DEFAULT]",Kw={[bo]:"fire-core",[Ew]:"fire-core-compat",[Tw]:"fire-analytics",[Iw]:"fire-analytics-compat",[Sw]:"fire-app-check",[_w]:"fire-app-check-compat",[Aw]:"fire-auth",[Cw]:"fire-auth-compat",[Rw]:"fire-rtdb",[xw]:"fire-data-connect",[kw]:"fire-rtdb-compat",[Pw]:"fire-fn",[Ow]:"fire-fn-compat",[Dw]:"fire-iid",[Nw]:"fire-iid-compat",[Lw]:"fire-fcm",[Mw]:"fire-fcm-compat",[jw]:"fire-perf",[Uw]:"fire-perf-compat",[Fw]:"fire-rc",[$w]:"fire-rc-compat",[Bw]:"fire-gcs",[Vw]:"fire-gcs-compat",[Hw]:"fire-fst",[zw]:"fire-fst-compat",[Ww]:"fire-vertex","fire-js":"fire-js",[Gw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map,Yw=new Map,Io=new Map;function Gc(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(Io.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Io.set(e,t);for(const n of Xi.values())Gc(n,t);for(const n of Yw.values())Gc(n,t);return!0}function ln(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function We(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new Gn("app","Firebase",Jw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=qw;function Yu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Eo,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Bu()),!n)throw rn.create("no-options");const o=Xi.get(i);if(o){if(on(n,o.options)&&on(r,o.config))return o;throw rn.create("duplicate-app",{appName:i})}const a=new iw(i);for(const u of Io.values())a.addComponent(u);const l=new Xw(n,r,a);return Xi.set(i,l),l}function fs(t=Eo){const e=Xi.get(t);if(!e&&t===Eo&&Bu())return Yu();if(!e)throw rn.create("no-app",{appName:t});return e}function Ke(t,e,n){let r=Kw[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}ft(new st(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="firebase-heartbeat-database",Zw=1,Yr="firebase-heartbeat-store";let Xs=null;function Ju(){return Xs||(Xs=Ku(Qw,Zw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yr)}catch(n){console.warn(n)}}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),Xs}async function eb(t){try{const n=(await Ju()).transaction(Yr),r=await n.objectStore(Yr).get(Xu(t));return await n.done,r}catch(e){if(e instanceof at)Ut.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function qc(t,e){try{const r=(await Ju()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(e,Xu(t)),await r.done}catch(n){if(n instanceof at)Ut.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function Xu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1024,nb=30;class rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>nb){const a=ob(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kc(),{heartbeatsToSend:r,unsentEntries:i}=ib(this._heartbeatsCache.heartbeats),o=Ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ut.warn(n),""}}}function Kc(){return new Date().toISOString().substring(0,10)}function ib(t,e=tb){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Yc(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wu()?zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yc(t){return Ji(JSON.stringify({version:2,heartbeats:t})).length}function ob(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t){ft(new st("platform-logger",e=>new ww(e),"PRIVATE")),ft(new st("heartbeat",e=>new rb(e),"PRIVATE")),Ke(bo,zc,t),Ke(bo,zc,"esm2020"),Ke("fire-js","")}ab("");function Qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cb=Qu,Zu=new Gn("auth","Firebase",Qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new ds("@firebase/auth");function lb(t,...e){Qi.logLevel<=ie.WARN&&Qi.warn(`Auth (${ur}): ${t}`,...e)}function Vi(t,...e){Qi.logLevel<=ie.ERROR&&Qi.error(`Auth (${ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw ea(t,...e)}function ht(t,...e){return ea(t,...e)}function Zo(t,e,n){const r={...cb(),[e]:n};return new Gn("auth","Firebase",r).create(e,{appName:t.name})}function Mt(t){return Zo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ub(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ot(t,"argument-error"),Zo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ea(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zu.create(t,...e)}function W(t,e,...n){if(!t)throw ea(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vi(e),new Error(e)}function Ft(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function hb(){return Jc()==="http:"||Jc()==="https:"}function Jc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hb()||Hu()||"connection"in navigator)?navigator.onLine:!0}function fb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Fv()||Bv()}get(){return db()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mb=new ai(3e4,6e4);function un(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hn(t,e,n,r,i={}){return th(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=oi({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...o};return $v()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&zn(t.emulatorConfig.host)&&(d.credentials="include"),eh.fetch()(await nh(t,t.config.apiHost,n,l),d)})}async function th(t,e,n){t._canInitEmulator=!1;const r={...pb,...e};try{const i=new vb(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Li(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Li(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Li(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Zo(t,f,d);ot(t,f)}}catch(i){if(i instanceof at)throw i;ot(t,"network-request-failed",{message:String(i)})}}async function ci(t,e,n,r,i={}){const o=await hn(t,e,n,r,i);return"mfaPendingCredential"in o&&ot(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function nh(t,e,n,r){const i=`${e}${n}?${r}`,o=t,a=o.config.emulator?ta(t.config,i):`${t.config.apiScheme}://${i}`;return gb.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function yb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),mb.get())})}}function Li(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}function Xc(t){return t!==void 0&&t.enterprise!==void 0}class wb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bb(t,e){return hn(t,"GET","/v2/recaptchaConfig",un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e){return hn(t,"POST","/v1/accounts:delete",e)}async function Zi(t,e){return hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ib(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=na(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Br(Qs(i.auth_time)),issuedAtTime:Br(Qs(i.iat)),expirationTime:Br(Qs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Qs(t){return Number(t)*1e3}function na(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uu(n);return i?JSON.parse(i):(Vi("Failed to decode base64 JWT payload"),null)}catch(i){return Vi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qc(t){const e=na(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&Tb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t){var _;const e=t.auth,n=await t.getIdToken(),r=await Jr(t,Zi(e,{idToken:n}));W(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(_=i.providerUserInfo)!=null&&_.length?rh(i.providerUserInfo):[],a=Ab(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _o(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Sb(t){const e=Me(t);await es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ab(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e){const n=await th(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await nh(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&zn(t.emulatorConfig.host)&&(u.credentials="include"),eh.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rb(t,e){return hn(t,"POST","/v2/accounts:revokeToken",un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Qc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Cb(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Jn;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(W(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new _b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _o(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ib(this,e)}reload(){return Sb(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await Jr(this,Eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:_,emailVerified:b,isAnonymous:E,providerData:A,stsTokenManager:O}=n;W(_&&O,e,"internal-error");const C=Jn.fromJSON(this.name,O);W(typeof _=="string",e,"internal-error"),Jt(r,e.name),Jt(i,e.name),W(typeof b=="boolean",e,"internal-error"),W(typeof E=="boolean",e,"internal-error"),Jt(o,e.name),Jt(a,e.name),Jt(l,e.name),Jt(u,e.name),Jt(d,e.name),Jt(f,e.name);const R=new lt({uid:_,auth:e,email:i,emailVerified:b,displayName:r,isAnonymous:E,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:f});return A&&Array.isArray(A)&&(R.providerData=A.map(D=>({...D}))),u&&(R._redirectEventId=u),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jn;i.updateFromServerResponse(n);const o=new lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await es(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?rh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Jn;l.updateFromIdToken(r);const u=new lt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _o(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map;function Dt(t){Ft(t instanceof Function,"Expected a class definition");let e=Zc.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ih.type="NONE";const el=ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Xn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Zi(this.auth,{idToken:e}).catch(()=>{});return n?lt._fromGetAccountInfoResponse(this.auth,n,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xn(Dt(el),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Dt(el);const a=Hi(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(a);if(f){let _;if(typeof f=="string"){const b=await Zi(e,{idToken:f}).catch(()=>{});if(!b)break;_=await lt._fromGetAccountInfoResponse(e,b,f)}else _=lt._fromJSON(e,f);d!==o&&(l=_),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Xn(o,e,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Xn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ch(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uh(e))return"Blackberry";if(hh(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||ah(e))&&!e.includes("edge/"))return"Chrome";if(lh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sh(t=Be()){return/firefox\//i.test(t)}function oh(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ah(t=Be()){return/crios\//i.test(t)}function ch(t=Be()){return/iemobile/i.test(t)}function lh(t=Be()){return/android/i.test(t)}function uh(t=Be()){return/blackberry/i.test(t)}function hh(t=Be()){return/webos/i.test(t)}function ra(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xb(t=Be()){var e;return ra(t)&&!!((e=window.navigator)!=null&&e.standalone)}function kb(){return Vv()&&document.documentMode===10}function dh(t=Be()){return ra(t)||lh(t)||hh(t)||uh(t)||/windows phone/i.test(t)||ch(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e=[]){let n;switch(t){case"Browser":n=tl(Be());break;case"Worker":n=`${tl(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e={}){return hn(t,"GET","/v2/passwordPolicy",un(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=6;class Nb{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Db,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nl(this),this.idTokenSubscription=new nl(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Xn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zi(this,{idToken:e}),r=await lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await es(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(Mt(this));const n=e?Me(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ob(this),n=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&lb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dn(t){return Me(t)}class nl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kv(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(t){ps=t}function ph(t){return ps.loadJS(t)}function jb(){return ps.recaptchaEnterpriseScript}function Ub(){return ps.gapiScript}function Fb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $b{constructor(){this.enterprise=new Bb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Bb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Vb="recaptcha-enterprise",gh="NO_RECAPTCHA";class Hb{constructor(e){this.type=Vb,this.auth=dn(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{bb(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new wb(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(o,a,l){const u=window.grecaptcha;Xc(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(gh)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $b().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&Xc(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jb();u.length!==0&&(u+=l),ph(u).then(()=>{i(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function rl(t,e,n,r=!1,i=!1){const o=new Hb(t);let a;if(i)a=gh;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function So(t,e,n,r,i){var o;if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await rl(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rl(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t,e){const n=ln(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(on(o,e??{}))return i;ot(i,"already-initialized")}return n.initialize({options:e})}function zb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gb(t,e,n){const r=dn(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=mh(e),{host:a,port:l}=qb(e),u=l===null?"":`:${l}`,d={url:`${o}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(on(d,r.config.emulator)&&on(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,zn(a)?(Jo(`${o}//${a}${u}`),Xo("Auth",!0)):Kb()}function mh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qb(t){const e=mh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:il(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:il(a)}}}function il(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function Yb(t,e){return hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",un(t,e))}async function Qb(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends ia{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return So(e,n,"signInWithPassword",Jb);case"emailLink":return Xb(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return So(e,r,"signUpPassword",Yb);case"emailLink":return Qb(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="http://localhost";class Fn extends ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=n;if(!r||!i)return null;const a=new Fn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tE(t){const e=Nr(Lr(t)).link,n=e?Nr(Lr(e)).deep_link_id:null,r=Nr(Lr(t)).deep_link_id;return(r?Nr(Lr(r)).link:null)||r||n||e||t}class sa{constructor(e){const n=Nr(Lr(e)),r=n.apiKey??null,i=n.oobCode??null,o=eE(n.mode??null);W(r&&i&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tE(e);try{return new sa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.providerId=hr.PROVIDER_ID}static credential(e,n){return Xr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sa.parseLink(n);return W(r,"argument-error"),Xr._fromEmailAndCode(e,r.code,r.tenantId)}}hr.PROVIDER_ID="password";hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends oa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends li{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends li{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends li{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e){return ci(t,"POST","/v1/accounts:signUp",un(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await lt._fromIdTokenResponse(e,r,i),a=sl(r);return new $n({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sl(r);return new $n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends at{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ts.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ts(e,n,r,i)}}function yh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ts._fromErrorAndOperation(t,o,e,r):o})}async function rE(t,e,n=!1){const r=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $n._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e,n=!1){const{auth:r}=t;if(We(r.app))return Promise.reject(Mt(r));const i="reauthenticate";try{const o=await Jr(t,yh(r,i,e,t),n);W(o.idToken,r,"internal-error");const a=na(o.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(t.uid===l,r,"user-mismatch"),$n._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(t,e,n=!1){if(We(t.app))return Promise.reject(Mt(t));const r="signIn",i=await yh(t,r,e),o=await $n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function sE(t,e){return vh(dn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(t){const e=dn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oE(t,e,n){if(We(t.app))return Promise.reject(Mt(t));const r=dn(t),a=await So(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&wh(t),u}),l=await $n._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function aE(t,e,n){return We(t.app)?Promise.reject(Mt(t)):sE(Me(t),hr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wh(t),r})}function cE(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function lE(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function uE(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function hE(t){return Me(t).signOut()}const ns="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=1e3,fE=10;class Eh extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);kb()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eh.type="LOCAL";const pE=Eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ih.type="SESSION";const Th=Ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,o)),u=await gE(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=aa("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){const b=_;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(b.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function yE(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function vE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bE(){return _h()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="firebaseLocalStorageDb",EE=1,rs="firebaseLocalStorage",Ah="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ms(t,e){return t.transaction([rs],e?"readwrite":"readonly").objectStore(rs)}function IE(){const t=indexedDB.deleteDatabase(Sh);return new ui(t).toPromise()}function Ao(){const t=indexedDB.open(Sh,EE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rs,{keyPath:Ah})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rs)?e(r):(r.close(),await IE(),e(await Ao()))})})}async function ol(t,e,n){const r=ms(t,!0).put({[Ah]:e,value:n});return new ui(r).toPromise()}async function TE(t,e){const n=ms(t,!1).get(e),r=await new ui(n).toPromise();return r===void 0?null:r.value}function al(t,e){const n=ms(t,!0).delete(e);return new ui(n).toPromise()}const _E=800,SE=3;class Ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gs._getInstance(bE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await vE(),!this.activeServiceWorker)return;this.sender=new mE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ao();return await ol(e,ns,"1"),await al(e,ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ol(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>al(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ms(i,!1).getAll();return new ui(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_E)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ch.type="LOCAL";const AE=Ch;new ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t,e){return e?Dt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CE(t){return vh(t.auth,new ca(t),t.bypassAuthState)}function RE(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),iE(n,new ca(t),t.bypassAuthState)}async function xE(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),rE(n,new ca(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CE;case"linkViaPopup":case"linkViaRedirect":return xE;case"reauthViaPopup":case"reauthViaRedirect":return RE;default:ot(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new ai(2e3,1e4);async function PE(t,e,n){if(We(t.app))return Promise.reject(ht(t,"operation-not-supported-in-this-environment"));const r=dn(t);ub(t,e,oa);const i=Rh(r,n);return new xn(r,"signInViaPopup",e,i).executeNotNull()}class xn extends xh{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="pendingRedirect",Wi=new Map;class DE extends xh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const r=await NE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NE(t,e){const n=jE(e),r=ME(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LE(t,e){Wi.set(t._key(),e)}function ME(t){return Dt(t._redirectPersistence)}function jE(t){return Hi(OE,t.config.apiKey,t.name)}async function UE(t,e,n=!1){if(We(t.app))return Promise.reject(Mt(t));const r=dn(t),i=Rh(r,e),a=await new DE(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=10*60*1e3;class $E{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kh(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FE&&this.cachedEventUids.clear(),this.cachedEventUids.has(cl(e))}saveEventToCache(e){this.cachedEventUids.add(cl(e)),this.lastProcessedEventTime=Date.now()}}function cl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e={}){return hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WE=/^https?/;async function zE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VE(t);for(const n of e)try{if(GE(n))return}catch{}ot(t,"unauthorized-domain")}function GE(t){const e=To(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!WE.test(n))return!1;if(HE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new ai(3e4,6e4);function ll(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KE(t){return new Promise((e,n)=>{var i,o,a;function r(){ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ll(),n(ht(t,"network-request-failed"))},timeout:qE.get()})}if((o=(i=Tt().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=Tt().gapi)!=null&&a.load)r();else{const l=Fb("iframefcb");return Tt()[l]=()=>{gapi.load?r():n(ht(t,"network-request-failed"))},ph(`${Ub()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw zi=null,e})}let zi=null;function YE(t){return zi=zi||KE(t),zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new ai(5e3,15e3),XE="__/auth/iframe",QE="emulator/auth/iframe",ZE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ta(e,QE):`https://${t.config.authDomain}/${XE}`,r={apiKey:e.apiKey,appName:t.name,v:ur},i=eI.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${oi(r).slice(1)}`}async function nI(t){const e=await YE(t),n=Tt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:tI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ht(t,"network-request-failed"),l=Tt().setTimeout(()=>{o(a)},JE.get());function u(){Tt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iI=500,sI=600,oI="_blank",aI="http://localhost";class ul{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cI(t,e,n,r=iI,i=sI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...rI,width:r.toString(),height:i.toString(),top:o,left:a},d=Be().toLowerCase();n&&(l=ah(d)?oI:n),sh(d)&&(e=e||aI,u.scrollbars="yes");const f=Object.entries(u).reduce((b,[E,A])=>`${b}${E}=${A},`,"");if(xb(d)&&l!=="_self")return lI(e||"",l),new ul(null);const _=window.open(e||"",l,f);W(_,t,"popup-blocked");try{_.focus()}catch{}return new ul(_)}function lI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="__/auth/handler",hI="emulator/auth/handler",dI=encodeURIComponent("fac");async function hl(t,e,n,r,i,o){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ur,eventId:i};if(e instanceof oa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",qv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof li){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${dI}=${encodeURIComponent(u)}`:"";return`${fI(t)}?${oi(l).slice(1)}${d}`}function fI({config:t}){return t.emulator?ta(t,hI):`https://${t.authDomain}/${uI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="webStorageSupport";class pI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=UE,this._overrideRedirectResult=LE}async _openPopup(e,n,r,i){var a;Ft((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await hl(e,n,r,To(),i);return cI(e,o,aa())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await hl(e,n,r,To(),i);return yE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nI(e),r=new $E(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zs,{type:Zs},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[Zs];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dh()||oh()||ra()}}const gI=pI;var dl="@firebase/auth",fl="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vI(t){ft(new st("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fh(t)},d=new Lb(r,i,o,u);return zb(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ft(new st("auth-internal",e=>{const n=dn(e.getProvider("auth").getImmediate());return(r=>new mI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(dl,fl,yI(t)),Ke(dl,fl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=5*60,bI=Vu("authIdTokenMaxAge")||wI;let pl=null;const EI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bI)return;const i=n==null?void 0:n.token;pl!==i&&(pl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function II(t=fs()){const e=ln(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wb(t,{popupRedirectResolver:gI,persistence:[AE,pE,Th]}),r=Vu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=EI(o.toString());lE(n,a,()=>a(n.currentUser)),cE(n,l=>a(l))}}const i=Fu("auth");return i&&Gb(n,`http://${i}`),n}function TI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Mb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ht("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",TI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vI("Browser");var _I="firebase",SI="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(_I,SI,"app");var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var la;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function y(){}y.prototype=m.prototype,v.F=m.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(I,T,S){for(var p=Array(arguments.length-2),$=2;$<arguments.length;$++)p[$-2]=arguments[$];return m.prototype[T].apply(I,p)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,y){y||(y=0);const I=Array(16);if(typeof m=="string")for(var T=0;T<16;++T)I[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;T<16;++T)I[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=v.g[0],y=v.g[1],T=v.g[2];let S=v.g[3],p;p=m+(S^y&(T^S))+I[0]+3614090360&4294967295,m=y+(p<<7&4294967295|p>>>25),p=S+(T^m&(y^T))+I[1]+3905402710&4294967295,S=m+(p<<12&4294967295|p>>>20),p=T+(y^S&(m^y))+I[2]+606105819&4294967295,T=S+(p<<17&4294967295|p>>>15),p=y+(m^T&(S^m))+I[3]+3250441966&4294967295,y=T+(p<<22&4294967295|p>>>10),p=m+(S^y&(T^S))+I[4]+4118548399&4294967295,m=y+(p<<7&4294967295|p>>>25),p=S+(T^m&(y^T))+I[5]+1200080426&4294967295,S=m+(p<<12&4294967295|p>>>20),p=T+(y^S&(m^y))+I[6]+2821735955&4294967295,T=S+(p<<17&4294967295|p>>>15),p=y+(m^T&(S^m))+I[7]+4249261313&4294967295,y=T+(p<<22&4294967295|p>>>10),p=m+(S^y&(T^S))+I[8]+1770035416&4294967295,m=y+(p<<7&4294967295|p>>>25),p=S+(T^m&(y^T))+I[9]+2336552879&4294967295,S=m+(p<<12&4294967295|p>>>20),p=T+(y^S&(m^y))+I[10]+4294925233&4294967295,T=S+(p<<17&4294967295|p>>>15),p=y+(m^T&(S^m))+I[11]+2304563134&4294967295,y=T+(p<<22&4294967295|p>>>10),p=m+(S^y&(T^S))+I[12]+1804603682&4294967295,m=y+(p<<7&4294967295|p>>>25),p=S+(T^m&(y^T))+I[13]+4254626195&4294967295,S=m+(p<<12&4294967295|p>>>20),p=T+(y^S&(m^y))+I[14]+2792965006&4294967295,T=S+(p<<17&4294967295|p>>>15),p=y+(m^T&(S^m))+I[15]+1236535329&4294967295,y=T+(p<<22&4294967295|p>>>10),p=m+(T^S&(y^T))+I[1]+4129170786&4294967295,m=y+(p<<5&4294967295|p>>>27),p=S+(y^T&(m^y))+I[6]+3225465664&4294967295,S=m+(p<<9&4294967295|p>>>23),p=T+(m^y&(S^m))+I[11]+643717713&4294967295,T=S+(p<<14&4294967295|p>>>18),p=y+(S^m&(T^S))+I[0]+3921069994&4294967295,y=T+(p<<20&4294967295|p>>>12),p=m+(T^S&(y^T))+I[5]+3593408605&4294967295,m=y+(p<<5&4294967295|p>>>27),p=S+(y^T&(m^y))+I[10]+38016083&4294967295,S=m+(p<<9&4294967295|p>>>23),p=T+(m^y&(S^m))+I[15]+3634488961&4294967295,T=S+(p<<14&4294967295|p>>>18),p=y+(S^m&(T^S))+I[4]+3889429448&4294967295,y=T+(p<<20&4294967295|p>>>12),p=m+(T^S&(y^T))+I[9]+568446438&4294967295,m=y+(p<<5&4294967295|p>>>27),p=S+(y^T&(m^y))+I[14]+3275163606&4294967295,S=m+(p<<9&4294967295|p>>>23),p=T+(m^y&(S^m))+I[3]+4107603335&4294967295,T=S+(p<<14&4294967295|p>>>18),p=y+(S^m&(T^S))+I[8]+1163531501&4294967295,y=T+(p<<20&4294967295|p>>>12),p=m+(T^S&(y^T))+I[13]+2850285829&4294967295,m=y+(p<<5&4294967295|p>>>27),p=S+(y^T&(m^y))+I[2]+4243563512&4294967295,S=m+(p<<9&4294967295|p>>>23),p=T+(m^y&(S^m))+I[7]+1735328473&4294967295,T=S+(p<<14&4294967295|p>>>18),p=y+(S^m&(T^S))+I[12]+2368359562&4294967295,y=T+(p<<20&4294967295|p>>>12),p=m+(y^T^S)+I[5]+4294588738&4294967295,m=y+(p<<4&4294967295|p>>>28),p=S+(m^y^T)+I[8]+2272392833&4294967295,S=m+(p<<11&4294967295|p>>>21),p=T+(S^m^y)+I[11]+1839030562&4294967295,T=S+(p<<16&4294967295|p>>>16),p=y+(T^S^m)+I[14]+4259657740&4294967295,y=T+(p<<23&4294967295|p>>>9),p=m+(y^T^S)+I[1]+2763975236&4294967295,m=y+(p<<4&4294967295|p>>>28),p=S+(m^y^T)+I[4]+1272893353&4294967295,S=m+(p<<11&4294967295|p>>>21),p=T+(S^m^y)+I[7]+4139469664&4294967295,T=S+(p<<16&4294967295|p>>>16),p=y+(T^S^m)+I[10]+3200236656&4294967295,y=T+(p<<23&4294967295|p>>>9),p=m+(y^T^S)+I[13]+681279174&4294967295,m=y+(p<<4&4294967295|p>>>28),p=S+(m^y^T)+I[0]+3936430074&4294967295,S=m+(p<<11&4294967295|p>>>21),p=T+(S^m^y)+I[3]+3572445317&4294967295,T=S+(p<<16&4294967295|p>>>16),p=y+(T^S^m)+I[6]+76029189&4294967295,y=T+(p<<23&4294967295|p>>>9),p=m+(y^T^S)+I[9]+3654602809&4294967295,m=y+(p<<4&4294967295|p>>>28),p=S+(m^y^T)+I[12]+3873151461&4294967295,S=m+(p<<11&4294967295|p>>>21),p=T+(S^m^y)+I[15]+530742520&4294967295,T=S+(p<<16&4294967295|p>>>16),p=y+(T^S^m)+I[2]+3299628645&4294967295,y=T+(p<<23&4294967295|p>>>9),p=m+(T^(y|~S))+I[0]+4096336452&4294967295,m=y+(p<<6&4294967295|p>>>26),p=S+(y^(m|~T))+I[7]+1126891415&4294967295,S=m+(p<<10&4294967295|p>>>22),p=T+(m^(S|~y))+I[14]+2878612391&4294967295,T=S+(p<<15&4294967295|p>>>17),p=y+(S^(T|~m))+I[5]+4237533241&4294967295,y=T+(p<<21&4294967295|p>>>11),p=m+(T^(y|~S))+I[12]+1700485571&4294967295,m=y+(p<<6&4294967295|p>>>26),p=S+(y^(m|~T))+I[3]+2399980690&4294967295,S=m+(p<<10&4294967295|p>>>22),p=T+(m^(S|~y))+I[10]+4293915773&4294967295,T=S+(p<<15&4294967295|p>>>17),p=y+(S^(T|~m))+I[1]+2240044497&4294967295,y=T+(p<<21&4294967295|p>>>11),p=m+(T^(y|~S))+I[8]+1873313359&4294967295,m=y+(p<<6&4294967295|p>>>26),p=S+(y^(m|~T))+I[15]+4264355552&4294967295,S=m+(p<<10&4294967295|p>>>22),p=T+(m^(S|~y))+I[6]+2734768916&4294967295,T=S+(p<<15&4294967295|p>>>17),p=y+(S^(T|~m))+I[13]+1309151649&4294967295,y=T+(p<<21&4294967295|p>>>11),p=m+(T^(y|~S))+I[4]+4149444226&4294967295,m=y+(p<<6&4294967295|p>>>26),p=S+(y^(m|~T))+I[11]+3174756917&4294967295,S=m+(p<<10&4294967295|p>>>22),p=T+(m^(S|~y))+I[2]+718787259&4294967295,T=S+(p<<15&4294967295|p>>>17),p=y+(S^(T|~m))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const y=m-this.blockSize,I=this.C;let T=this.h,S=0;for(;S<m;){if(T==0)for(;S<=y;)i(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<m;)if(I[T++]=v.charCodeAt(S++),T==this.blockSize){i(this,I),T=0;break}}else for(;S<m;)if(I[T++]=v[S++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)v[m++]=this.g[y]>>>I&255;return v};function o(v,m){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=m(v)}function a(v,m){this.h=m;const y=[];let I=!0;for(let T=v.length-1;T>=0;T--){const S=v[T]|0;I&&S==m||(y[T]=S,I=!1)}this.g=y}var l={};function u(v){return-128<=v&&v<128?o(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return _;if(v<0)return C(d(-v));const m=[];let y=1;for(let I=0;v>=y;I++)m[I]=v/y|0,y*=4294967296;return new a(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return C(f(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let I=_;for(let S=0;S<v.length;S+=8){var T=Math.min(8,v.length-S);const p=parseInt(v.substring(S,S+T),m);T<8?(T=d(Math.pow(m,T)),I=I.j(T).add(d(p))):(I=I.j(y),I=I.add(d(p)))}return I}var _=u(0),b=u(1),E=u(16777216);t=a.prototype,t.m=function(){if(O(this))return-C(this).m();let v=0,m=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);v+=(I>=0?I:4294967296+I)*m,m*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(O(this))return"-"+C(this).toString(v);const m=d(Math.pow(v,6));var y=this;let I="";for(;;){const T=L(y,m).g;y=R(y,T.j(m));let S=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=T,A(y))return S+I;for(;S.length<6;)S="0"+S;I=S+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}t.l=function(v){return v=R(this,v),O(v)?-1:A(v)?0:1};function C(v){const m=v.g.length,y=[];for(let I=0;I<m;I++)y[I]=~v.g[I];return new a(y,~v.h).add(b)}t.abs=function(){return O(this)?C(this):this},t.add=function(v){const m=Math.max(this.g.length,v.g.length),y=[];let I=0;for(let T=0;T<=m;T++){let S=I+(this.i(T)&65535)+(v.i(T)&65535),p=(S>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);I=p>>>16,S&=65535,p&=65535,y[T]=p<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function R(v,m){return v.add(C(m))}t.j=function(v){if(A(this)||A(v))return _;if(O(this))return O(v)?C(this).j(C(v)):C(C(this).j(v));if(O(v))return C(this.j(C(v)));if(this.l(E)<0&&v.l(E)<0)return d(this.m()*v.m());const m=this.g.length+v.g.length,y=[];for(var I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<v.g.length;T++){const S=this.i(I)>>>16,p=this.i(I)&65535,$=v.i(T)>>>16,B=v.i(T)&65535;y[2*I+2*T]+=p*B,D(y,2*I+2*T),y[2*I+2*T+1]+=S*B,D(y,2*I+2*T+1),y[2*I+2*T+1]+=p*$,D(y,2*I+2*T+1),y[2*I+2*T+2]+=S*$,D(y,2*I+2*T+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function D(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function P(v,m){this.g=v,this.h=m}function L(v,m){if(A(m))throw Error("division by zero");if(A(v))return new P(_,_);if(O(v))return m=L(C(v),m),new P(C(m.g),C(m.h));if(O(m))return m=L(v,C(m)),new P(C(m.g),m.h);if(v.g.length>30){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=b,I=m;I.l(v)<=0;)y=j(y),I=j(I);var T=M(y,1),S=M(I,1);for(I=M(I,2),y=M(y,2);!A(I);){var p=S.add(I);p.l(v)<=0&&(T=T.add(y),S=p),I=M(I,1),y=M(y,1)}return m=R(v,T.j(m)),new P(T,m)}for(T=_;v.l(m)>=0;){for(y=Math.max(1,Math.floor(v.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),S=d(y),p=S.j(m);O(p)||p.l(v)>0;)y-=I,S=d(y),p=S.j(m);A(S)&&(S=b),T=T.add(S),v=R(v,p)}return new P(T,v)}t.B=function(v){return L(this,v).h},t.and=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)&v.i(I);return new a(y,this.h&v.h)},t.or=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)|v.i(I);return new a(y,this.h|v.h)},t.xor=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)^v.i(I);return new a(y,this.h^v.h)};function j(v){const m=v.g.length+1,y=[];for(let I=0;I<m;I++)y[I]=v.i(I)<<1|v.i(I-1)>>>31;return new a(y,v.h)}function M(v,m){const y=m>>5;m%=32;const I=v.g.length-y,T=[];for(let S=0;S<I;S++)T[S]=m>0?v.i(S+y)>>>m|v.i(S+y+1)<<32-m:v.i(S+y);return new a(T,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,la=a}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(s,c){if(c)e:{var h=r;s=s.split(".");for(var g=0;g<s.length-1;g++){var x=s[g];if(!(x in h))break e;h=h[x]}s=s[s.length-1],g=h[s],c=c(g),c!=g&&c!=null&&e(h,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var h=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&h.push([g,c[g]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function u(s,c,h){return s.call.apply(s.bind,arguments)}function d(s,c,h){return d=u,d.apply(null,arguments)}function f(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),s.apply(this,g)}}function _(s,c){function h(){}h.prototype=c.prototype,s.Z=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Ob=function(g,x,N){for(var F=Array(arguments.length-2),K=2;K<arguments.length;K++)F[K-2]=arguments[K];return c.prototype[x].apply(g,F)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function E(s){const c=s.length;if(c>0){const h=Array(c);for(let g=0;g<c;g++)h[g]=s[g];return h}return[]}function A(s,c){for(let g=1;g<arguments.length;g++){const x=arguments[g];var h=typeof x;if(h=h!="object"?h:x?Array.isArray(x)?"array":h:"null",h=="array"||h=="object"&&typeof x.length=="number"){h=s.length||0;const N=x.length||0;s.length=h+N;for(let F=0;F<N;F++)s[h+F]=x[F]}else s.push(x)}}class O{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(s){a.setTimeout(()=>{throw s},0)}function R(){var s=v;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class D{constructor(){this.h=this.g=null}add(c,h){const g=P.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var P=new O(()=>new L,s=>s.reset());class L{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let j,M=!1,v=new D,m=()=>{const s=Promise.resolve(void 0);j=()=>{s.then(y)}};function y(){for(var s;s=R();){try{s.h.call(s.g)}catch(h){C(h)}var c=P;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return s}();function p(s){return/^[\s\xa0]*$/.test(s)}function $(s,c){T.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}_($,T),$.prototype.init=function(s,c){const h=this.type=s.type,g=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var B="closure_listenable_"+(Math.random()*1e6|0),U=0;function z(s,c,h,g,x){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=x,this.key=++U,this.da=this.fa=!1}function H(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function G(s,c,h){for(const g in s)c.call(h,s[g],g,s)}function oe(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function be(s){const c={};for(const h in s)c[h]=s[h];return c}const me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(s,c){let h,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(h in g)s[h]=g[h];for(let N=0;N<me.length;N++)h=me[N],Object.prototype.hasOwnProperty.call(g,h)&&(s[h]=g[h])}}function J(s){this.src=s,this.g={},this.h=0}J.prototype.add=function(s,c,h,g,x){const N=s.toString();s=this.g[N],s||(s=this.g[N]=[],this.h++);const F=Ce(s,c,g,x);return F>-1?(c=s[F],h||(c.fa=!1)):(c=new z(c,this.src,N,!!g,x),c.fa=h,s.push(c)),c};function de(s,c){const h=c.type;if(h in s.g){var g=s.g[h],x=Array.prototype.indexOf.call(g,c,void 0),N;(N=x>=0)&&Array.prototype.splice.call(g,x,1),N&&(H(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function Ce(s,c,h,g){for(let x=0;x<s.length;++x){const N=s[x];if(!N.da&&N.listener==c&&N.capture==!!h&&N.ha==g)return x}return-1}var V="closure_lm_"+(Math.random()*1e6|0),ee={};function te(s,c,h,g,x){if(Array.isArray(c)){for(let N=0;N<c.length;N++)te(s,c[N],h,g,x);return null}return h=Ve(h),s&&s[B]?s.J(c,h,l(g)?!!g.capture:!1,x):le(s,c,h,!1,g,x)}function le(s,c,h,g,x,N){if(!c)throw Error("Invalid event type");const F=l(x)?!!x.capture:!!x;let K=pe(s);if(K||(s[V]=K=new J(s)),h=K.add(c,h,g,F,N),h.proxy)return h;if(g=ne(),h.proxy=g,g.src=s,g.listener=h,s.addEventListener)S||(x=F),x===void 0&&(x=!1),s.addEventListener(c.toString(),g,x);else if(s.attachEvent)s.attachEvent(ae(c.toString()),g);else if(s.addListener&&s.removeListener)s.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ne(){function s(h){return c.call(s.src,s.listener,h)}const c=je;return s}function Y(s,c,h,g,x){if(Array.isArray(c))for(var N=0;N<c.length;N++)Y(s,c[N],h,g,x);else g=l(g)?!!g.capture:!!g,h=Ve(h),s&&s[B]?(s=s.i,N=String(c).toString(),N in s.g&&(c=s.g[N],h=Ce(c,h,g,x),h>-1&&(H(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete s.g[N],s.h--)))):s&&(s=pe(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ce(c,h,g,x)),(h=s>-1?c[s]:null)&&ye(h))}function ye(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[B])de(c.i,s);else{var h=s.type,g=s.proxy;c.removeEventListener?c.removeEventListener(h,g,s.capture):c.detachEvent?c.detachEvent(ae(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=pe(c))?(de(h,s),h.h==0&&(h.src=null,c[V]=null)):H(s)}}}function ae(s){return s in ee?ee[s]:ee[s]="on"+s}function je(s,c){if(s.da)s=!0;else{c=new $(c,this);const h=s.listener,g=s.ha||s.src;s.fa&&ye(s),s=h.call(g,c)}return s}function pe(s){return s=s[V],s instanceof J?s:null}var Ee="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ve(s){return typeof s=="function"?s:(s[Ee]||(s[Ee]=function(c){return s.handleEvent(c)}),s[Ee])}function ve(){I.call(this),this.i=new J(this),this.M=this,this.G=null}_(ve,I),ve.prototype[B]=!0,ve.prototype.removeEventListener=function(s,c,h,g){Y(this,s,c,h,g)};function he(s,c){var h,g=s.G;if(g)for(h=[];g;g=g.G)h.push(g);if(s=s.M,g=c.type||c,typeof c=="string")c=new T(c,s);else if(c instanceof T)c.target=c.target||s;else{var x=c;c=new T(g,s),ce(c,x)}x=!0;let N,F;if(h)for(F=h.length-1;F>=0;F--)N=c.g=h[F],x=Ze(N,g,!0,c)&&x;if(N=c.g=s,x=Ze(N,g,!0,c)&&x,x=Ze(N,g,!1,c)&&x,h)for(F=0;F<h.length;F++)N=c.g=h[F],x=Ze(N,g,!1,c)&&x}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const h=s.g[c];for(let g=0;g<h.length;g++)H(h[g]);delete s.g[c],s.h--}}this.G=null},ve.prototype.J=function(s,c,h,g){return this.i.add(String(s),c,!1,h,g)},ve.prototype.K=function(s,c,h,g){return this.i.add(String(s),c,!0,h,g)};function Ze(s,c,h,g){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let N=0;N<c.length;++N){const F=c[N];if(F&&!F.da&&F.capture==h){const K=F.listener,Re=F.ha||F.src;F.fa&&de(s.i,F),x=K.call(Re,g)!==!1&&x}}return x&&!g.defaultPrevented}function fn(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function Bt(s){s.g=fn(()=>{s.g=null,s.i&&(s.i=!1,Bt(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class pn extends I{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Bt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(s){I.call(this),this.h=s,this.g={}}_(pt,I);var gn=[];function Rt(s){G(s.g,function(c,h){this.g.hasOwnProperty(h)&&ye(c)},s),s.g={}}pt.prototype.N=function(){pt.Z.N.call(this),Rt(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vt=a.JSON.stringify,mn=a.JSON.parse,dr=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function He(){}function yn(){}var Ye={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ue(){T.call(this,"d")}_(Ue,T);function fr(){T.call(this,"c")}_(fr,T);var gt={},fi=null;function Ht(){return fi=fi||new ve}gt.Ia="serverreachability";function pi(s){T.call(this,gt.Ia,s)}_(pi,T);function vn(s){const c=Ht();he(c,new pi(c))}gt.STAT_EVENT="statevent";function gi(s,c){T.call(this,gt.STAT_EVENT,s),this.stat=c}_(gi,T);function Ne(s){const c=Ht();he(c,new gi(c,s))}gt.Ja="timingevent";function mi(s,c){T.call(this,gt.Ja,s),this.size=c}_(mi,T);function wn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function bn(){this.g=!0}bn.prototype.ua=function(){this.g=!1};function bs(s,c,h,g,x,N){s.info(function(){if(s.g)if(N){var F="",K=N.split("&");for(let ue=0;ue<K.length;ue++){var Re=K[ue].split("=");if(Re.length>1){const De=Re[0];Re=Re[1];const yt=De.split("_");F=yt.length>=2&&yt[1]=="type"?F+(De+"="+Re+"&"):F+(De+"=redacted&")}}}else F=null;else F=N;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+c+`
`+h+`
`+F})}function q(s,c,h,g,x,N,F){s.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+c+`
`+h+`
`+N+" "+F})}function Oe(s,c,h,g){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+vd(s,h)+(g?" "+g:"")})}function yi(s,c){s.info(function(){return"TIMEOUT: "+c})}bn.prototype.info=function(){};function vd(s,c){if(!s.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(s=0;s<N.length;s++)if(Array.isArray(N[s])){var h=N[s];if(!(h.length<2)){var g=h[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let F=1;F<g.length;F++)g[F]=""}}}}return Vt(N)}catch{return c}}var Es={NO_ERROR:0,TIMEOUT:8},wd={},Ta;function Is(){}_(Is,He),Is.prototype.g=function(){return new XMLHttpRequest},Ta=new Is;function pr(s){return encodeURIComponent(String(s))}function bd(s){var c=1;s=s.split(":");const h=[];for(;c>0&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function Wt(s,c,h,g){this.j=s,this.i=c,this.l=h,this.S=g||1,this.V=new pt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _a}function _a(){this.i=null,this.g="",this.h=!1}var Sa={},Ts={};function _s(s,c,h){s.M=1,s.A=wi(mt(c)),s.u=h,s.R=!0,Aa(s,null)}function Aa(s,c){s.F=Date.now(),vi(s),s.B=mt(s.A);var h=s.B,g=s.S;Array.isArray(g)||(g=[String(g)]),Fa(h.i,"t",g),s.C=0,h=s.j.L,s.h=new _a,s.g=rc(s.j,h?c:null,!s.u),s.P>0&&(s.O=new pn(d(s.Y,s,s.g),s.P)),c=s.V,h=s.g,g=s.ba;var x="readystatechange";Array.isArray(x)||(x&&(gn[0]=x.toString()),x=gn);for(let N=0;N<x.length;N++){const F=te(h,x[N],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=s.J?be(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),vn(),bs(s.i,s.v,s.B,s.l,s.S,s.u)}Wt.prototype.ba=function(s){s=s.target;const c=this.O;c&&qt(s)==3?c.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)e:{const K=qt(this.g),Re=this.g.ya(),ue=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||Ga(this.g)))){this.K||K!=4||Re==7||(Re==8||ue<=0?vn(3):vn(2)),Ss(this);var c=this.g.ca();this.X=c;var h=Ed(this);if(this.o=c==200,q(this.i,this.v,this.B,this.l,this.S,K,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(g)){var N=g;break t}}N=null}if(s=N)Oe(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,As(this,s);else{this.o=!1,this.m=3,Ne(12),En(this),gr(this);break e}}if(this.R){s=!0;let De;for(;!this.K&&this.C<h.length;)if(De=Id(this,h),De==Ts){K==4&&(this.m=4,Ne(14),s=!1),Oe(this.i,this.l,null,"[Incomplete Response]");break}else if(De==Sa){this.m=4,Ne(15),Oe(this.i,this.l,h,"[Invalid Chunk]"),s=!1;break}else Oe(this.i,this.l,De,null),As(this,De);if(Ca(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||h.length!=0||this.h.h||(this.m=1,Ne(16),s=!1),this.o=this.o&&s,!s)Oe(this.i,this.l,h,"[Invalid Chunked Response]"),En(this),gr(this);else if(h.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Ns(F),F.P=!0,Ne(11))}}else Oe(this.i,this.l,h,null),As(this,h);K==4&&En(this),this.o&&!this.K&&(K==4?Za(this.j,this):(this.o=!1,vi(this)))}else Md(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),En(this),gr(this)}}}catch{}finally{}};function Ed(s){if(!Ca(s))return s.g.la();const c=Ga(s.g);if(c==="")return"";let h="";const g=c.length,x=qt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return En(s),gr(s),"";s.h.i=new a.TextDecoder}for(let N=0;N<g;N++)s.h.h=!0,h+=s.h.i.decode(c[N],{stream:!(x&&N==g-1)});return c.length=0,s.h.g+=h,s.C=0,s.h.g}function Ca(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Id(s,c){var h=s.C,g=c.indexOf(`
`,h);return g==-1?Ts:(h=Number(c.substring(h,g)),isNaN(h)?Sa:(g+=1,g+h>c.length?Ts:(c=c.slice(g,g+h),s.C=g+h,c)))}Wt.prototype.cancel=function(){this.K=!0,En(this)};function vi(s){s.T=Date.now()+s.H,Ra(s,s.H)}function Ra(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=wn(d(s.aa,s),c)}function Ss(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Wt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(yi(this.i,this.B),this.M!=2&&(vn(),Ne(17)),En(this),this.m=2,gr(this)):Ra(this,this.T-s)};function gr(s){s.j.I==0||s.K||Za(s.j,s)}function En(s){Ss(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,Rt(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function As(s,c){try{var h=s.j;if(h.I!=0&&(h.g==s||Cs(h.h,s))){if(!s.L&&Cs(h.h,s)&&h.I==3){try{var g=h.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<s.F)_i(h),Ii(h);else break e;Ds(h),Ne(18)}}else h.xa=x[1],0<h.xa-h.K&&x[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=wn(d(h.Va,h),6e3));Pa(h.h)<=1&&h.ta&&(h.ta=void 0)}else Tn(h,11)}else if((s.L||h.g==s)&&_i(h),!p(c))for(x=h.Ba.g.parse(c),c=0;c<x.length;c++){let ue=x[c];const De=ue[0];if(!(De<=h.K))if(h.K=De,ue=ue[1],h.I==2)if(ue[0]=="c"){h.M=ue[1],h.ba=ue[2];const yt=ue[3];yt!=null&&(h.ka=yt,h.j.info("VER="+h.ka));const _n=ue[4];_n!=null&&(h.za=_n,h.j.info("SVER="+h.za));const Kt=ue[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(g=1.5*Kt,h.O=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Yt=s.g;if(Yt){const Si=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var N=g.h;N.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Rs(N,N.h),N.h=null))}if(g.G){const Ls=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(g.wa=Ls,fe(g.J,g.G,Ls))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-s.F,h.j.info("Handshake RTT: "+h.T+"ms")),g=h;var F=s;if(g.na=nc(g,g.L?g.ba:null,g.W),F.L){Oa(g.h,F);var K=F,Re=g.O;Re&&(K.H=Re),K.D&&(Ss(K),vi(K)),g.g=F}else Xa(g);h.i.length>0&&Ti(h)}else ue[0]!="stop"&&ue[0]!="close"||Tn(h,7);else h.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Tn(h,7):Os(h):ue[0]!="noop"&&h.l&&h.l.qa(ue),h.A=0)}}vn(4)}catch{}}var Td=class{constructor(s,c){this.g=s,this.map=c}};function xa(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ka(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Pa(s){return s.h?1:s.g?s.g.size:0}function Cs(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Rs(s,c){s.g?s.g.add(c):s.h=c}function Oa(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}xa.prototype.cancel=function(){if(this.i=Da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Da(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.G);return c}return E(s.i)}var Na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _d(s,c){if(s){s=s.split("&");for(let h=0;h<s.length;h++){const g=s[h].indexOf("=");let x,N=null;g>=0?(x=s[h].substring(0,g),N=s[h].substring(g+1)):x=s[h],c(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function zt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof zt?(this.l=s.l,mr(this,s.j),this.o=s.o,this.g=s.g,yr(this,s.u),this.h=s.h,xs(this,$a(s.i)),this.m=s.m):s&&(c=String(s).match(Na))?(this.l=!1,mr(this,c[1]||"",!0),this.o=vr(c[2]||""),this.g=vr(c[3]||"",!0),yr(this,c[4]),this.h=vr(c[5]||"",!0),xs(this,c[6]||"",!0),this.m=vr(c[7]||"")):(this.l=!1,this.i=new br(null,this.l))}zt.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(wr(c,La,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(wr(c,La,!0),"@"),s.push(pr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&s.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(wr(h,h.charAt(0)=="/"?Cd:Ad,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",wr(h,xd)),s.join("")},zt.prototype.resolve=function(s){const c=mt(this);let h=!!s.j;h?mr(c,s.j):h=!!s.o,h?c.o=s.o:h=!!s.g,h?c.g=s.g:h=s.u!=null;var g=s.h;if(h)yr(c,s.u);else if(h=!!s.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=c.h.lastIndexOf("/");x!=-1&&(g=c.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const N=[];for(let F=0;F<x.length;){const K=x[F++];K=="."?g&&F==x.length&&N.push(""):K==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&F==x.length&&N.push("")):(N.push(K),g=!0)}g=N.join("/")}else g=x}return h?c.h=g:h=s.i.toString()!=="",h?xs(c,$a(s.i)):h=!!s.m,h&&(c.m=s.m),c};function mt(s){return new zt(s)}function mr(s,c,h){s.j=h?vr(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function yr(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function xs(s,c,h){c instanceof br?(s.i=c,kd(s.i,s.l)):(h||(c=wr(c,Rd)),s.i=new br(c,s.l))}function fe(s,c,h){s.i.set(c,h)}function wi(s){return fe(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function vr(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function wr(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,Sd),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Sd(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var La=/[#\/\?@]/g,Ad=/[#\?:]/g,Cd=/[#\?]/g,Rd=/[#\?@]/g,xd=/#/g;function br(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function In(s){s.g||(s.g=new Map,s.h=0,s.i&&_d(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=br.prototype,t.add=function(s,c){In(this),this.i=null,s=qn(this,s);let h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function Ma(s,c){In(s),c=qn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function ja(s,c){return In(s),c=qn(s,c),s.g.has(c)}t.forEach=function(s,c){In(this),this.g.forEach(function(h,g){h.forEach(function(x){s.call(c,x,g,this)},this)},this)};function Ua(s,c){In(s);let h=[];if(typeof c=="string")ja(s,c)&&(h=h.concat(s.g.get(qn(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)h=h.concat(s[c]);return h}t.set=function(s,c){return In(this),this.i=null,s=qn(this,s),ja(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},t.get=function(s,c){return s?(s=Ua(this,s),s.length>0?String(s[0]):c):c};function Fa(s,c,h){Ma(s,c),h.length>0&&(s.i=null,s.g.set(qn(s,c),E(h)),s.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var h=c[g];const x=pr(h);h=Ua(this,h);for(let N=0;N<h.length;N++){let F=x;h[N]!==""&&(F+="="+pr(h[N])),s.push(F)}}return this.i=s.join("&")};function $a(s){const c=new br;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function qn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function kd(s,c){c&&!s.j&&(In(s),s.i=null,s.g.forEach(function(h,g){const x=g.toLowerCase();g!=x&&(Ma(this,g),Fa(this,x,h))},s)),s.j=c}function Pd(s,c){const h=new bn;if(a.Image){const g=new Image;g.onload=f(Gt,h,"TestLoadImage: loaded",!0,c,g),g.onerror=f(Gt,h,"TestLoadImage: error",!1,c,g),g.onabort=f(Gt,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(Gt,h,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=s}else c(!1)}function Od(s,c){const h=new bn,g=new AbortController,x=setTimeout(()=>{g.abort(),Gt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:g.signal}).then(N=>{clearTimeout(x),N.ok?Gt(h,"TestPingServer: ok",!0,c):Gt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Gt(h,"TestPingServer: error",!1,c)})}function Gt(s,c,h,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(h)}catch{}}function Dd(){this.g=new dr}function ks(s){this.i=s.Sb||null,this.h=s.ab||!1}_(ks,He),ks.prototype.g=function(){return new bi(this.i,this.h)};function bi(s,c){ve.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(bi,ve),t=bi.prototype,t.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,Ir(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},t.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ba(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ba(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}t.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Er(this):Ir(this),this.readyState==3&&Ba(this)}},t.Oa=function(s){this.g&&(this.response=this.responseText=s,Er(this))},t.Na=function(s){this.g&&(this.response=s,Er(this))},t.ga=function(){this.g&&Er(this)};function Er(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Ir(s)}t.setRequestHeader=function(s,c){this.A.append(s,c)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function Ir(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Va(s){let c="";return G(s,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function Ps(s,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Va(h),typeof s=="string"?h!=null&&pr(h):fe(s,c,h))}function Ie(s){ve.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(Ie,ve);var Nd=/^https?$/i,Ld=["POST","PUT"];t=Ie.prototype,t.Fa=function(s){this.H=s},t.ea=function(s,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ta.g(),this.g.onreadystatechange=b(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(N){Ha(this,N);return}if(s=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)h.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())h.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),x=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Ld,c,void 0)>=0)||g||x||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of h)this.g.setRequestHeader(N,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(N){Ha(this,N)}};function Ha(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,Wa(s),Ei(s)}function Wa(s){s.A||(s.A=!0,he(s,"complete"),he(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,he(this,"complete"),he(this,"abort"),Ei(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?za(this):this.Xa())},t.Xa=function(){za(this)};function za(s){if(s.h&&typeof o<"u"){if(s.v&&qt(s)==4)setTimeout(s.Ca.bind(s),0);else if(he(s,"readystatechange"),qt(s)==4){s.h=!1;try{const N=s.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=N===0){let F=String(s.D).match(Na)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),g=!Nd.test(F?F.toLowerCase():"")}h=g}if(h)he(s,"complete"),he(s,"success");else{s.o=6;try{var x=qt(s)>2?s.g.statusText:""}catch{x=""}s.l=x+" ["+s.ca()+"]",Wa(s)}}finally{Ei(s)}}}}function Ei(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const h=s.g;s.g=null,c||he(s,"ready");try{h.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function qt(s){return s.g?s.g.readyState:0}t.ca=function(){try{return qt(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),mn(c)}};function Ga(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Md(s){const c={};s=(s.g&&qt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<s.length;g++){if(p(s[g]))continue;var h=bd(s[g]);const x=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=c[x]||[];c[x]=N,N.push(h)}oe(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tr(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function qa(s){this.za=0,this.i=[],this.j=new bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Tr("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Tr("baseRetryDelayMs",5e3,s),this.Za=Tr("retryDelaySeedMs",1e4,s),this.Ta=Tr("forwardChannelMaxRetries",2,s),this.va=Tr("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new xa(s&&s.concurrentRequestLimit),this.Ba=new Dd,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=qa.prototype,t.ka=8,t.I=1,t.connect=function(s,c,h,g){Ne(0),this.W=s,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.J=nc(this,null,this.W),Ti(this)};function Os(s){if(Ka(s),s.I==3){var c=s.V++,h=mt(s.J);if(fe(h,"SID",s.M),fe(h,"RID",c),fe(h,"TYPE","terminate"),_r(s,h),c=new Wt(s,s.j,c),c.M=2,c.A=wi(mt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=rc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),vi(c)}tc(s)}function Ii(s){s.g&&(Ns(s),s.g.cancel(),s.g=null)}function Ka(s){Ii(s),s.v&&(a.clearTimeout(s.v),s.v=null),_i(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Ti(s){if(!ka(s.h)&&!s.m){s.m=!0;var c=s.Ea;j||m(),M||(j(),M=!0),v.add(c,s),s.D=0}}function jd(s,c){return Pa(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=wn(d(s.Ea,s,c),ec(s,s.D)),s.D++,!0)}t.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const x=new Wt(this,this.j,s);let N=this.o;if(this.U&&(N?(N=be(N),ce(N,this.U)):N=this.U),this.u!==null||this.R||(x.J=N,N=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ja(this,x,c),h=mt(this.J),fe(h,"RID",s),fe(h,"CVER",22),this.G&&fe(h,"X-HTTP-Session-Id",this.G),_r(this,h),N&&(this.R?c="headers="+pr(Va(N))+"&"+c:this.u&&Ps(h,this.u,N)),Rs(this.h,x),this.Ra&&fe(h,"TYPE","init"),this.S?(fe(h,"$req",c),fe(h,"SID","null"),x.U=!0,_s(x,h,null)):_s(x,h,c),this.I=2}}else this.I==3&&(s?Ya(this,s):this.i.length==0||ka(this.h)||Ya(this))};function Ya(s,c){var h;c?h=c.l:h=s.V++;const g=mt(s.J);fe(g,"SID",s.M),fe(g,"RID",h),fe(g,"AID",s.K),_r(s,g),s.u&&s.o&&Ps(g,s.u,s.o),h=new Wt(s,s.j,h,s.D+1),s.u===null&&(h.J=s.o),c&&(s.i=c.G.concat(s.i)),c=Ja(s,h,1e3),h.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Rs(s.h,h),_s(h,g,c)}function _r(s,c){s.H&&G(s.H,function(h,g){fe(c,g,h)}),s.l&&G({},function(h,g){fe(c,g,h)})}function Ja(s,c,h){h=Math.min(s.i.length,h);const g=s.l?d(s.l.Ka,s.l,s):null;e:{var x=s.i;let K=-1;for(;;){const Re=["count="+h];K==-1?h>0?(K=x[0].g,Re.push("ofs="+K)):K=0:Re.push("ofs="+K);let ue=!0;for(let De=0;De<h;De++){var N=x[De].g;const yt=x[De].map;if(N-=K,N<0)K=Math.max(0,x[De].g-100),ue=!1;else try{N="req"+N+"_"||"";try{var F=yt instanceof Map?yt:Object.entries(yt);for(const[_n,Kt]of F){let Yt=Kt;l(Kt)&&(Yt=Vt(Kt)),Re.push(N+_n+"="+encodeURIComponent(Yt))}}catch(_n){throw Re.push(N+"type="+encodeURIComponent("_badmap")),_n}}catch{g&&g(yt)}}if(ue){F=Re.join("&");break e}}F=void 0}return s=s.i.splice(0,h),c.G=s,F}function Xa(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;j||m(),M||(j(),M=!0),v.add(c,s),s.A=0}}function Ds(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=wn(d(s.Da,s),ec(s,s.A)),s.A++,!0)}t.Da=function(){if(this.v=null,Qa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=wn(d(this.Wa,this),s)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),Ii(this),Qa(this))};function Ns(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function Qa(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=mt(s.na);fe(c,"RID","rpc"),fe(c,"SID",s.M),fe(c,"AID",s.K),fe(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&fe(c,"TO",s.ia),fe(c,"TYPE","xmlhttp"),_r(s,c),s.u&&s.o&&Ps(c,s.u,s.o),s.O&&(s.g.H=s.O);var h=s.g;s=s.ba,h.M=1,h.A=wi(mt(c)),h.u=null,h.R=!0,Aa(h,s)}t.Va=function(){this.C!=null&&(this.C=null,Ii(this),Ds(this),Ne(19))};function _i(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Za(s,c){var h=null;if(s.g==c){_i(s),Ns(s),s.g=null;var g=2}else if(Cs(s.h,c))h=c.G,Oa(s.h,c),g=1;else return;if(s.I!=0){if(c.o)if(g==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var x=s.D;g=Ht(),he(g,new mi(g,h)),Ti(s)}else Xa(s);else if(x=c.m,x==3||x==0&&c.X>0||!(g==1&&jd(s,c)||g==2&&Ds(s)))switch(h&&h.length>0&&(c=s.h,c.i=c.i.concat(h)),x){case 1:Tn(s,5);break;case 4:Tn(s,10);break;case 3:Tn(s,6);break;default:Tn(s,2)}}}function ec(s,c){let h=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(h*=2),h*c}function Tn(s,c){if(s.j.info("Error code "+c),c==2){var h=d(s.bb,s),g=s.Ua;const x=!g;g=new zt(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mr(g,"https"),wi(g),x?Pd(g.toString(),h):Od(g.toString(),h)}else Ne(2);s.I=0,s.l&&s.l.pa(c),tc(s),Ka(s)}t.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function tc(s){if(s.I=0,s.ja=[],s.l){const c=Da(s.h);(c.length!=0||s.i.length!=0)&&(A(s.ja,c),A(s.ja,s.i),s.h.i.length=0,E(s.i),s.i.length=0),s.l.oa()}}function nc(s,c,h){var g=h instanceof zt?mt(h):new zt(h);if(g.g!="")c&&(g.g=c+"."+g.g),yr(g,g.u);else{var x=a.location;g=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const N=new zt(null);g&&mr(N,g),c&&(N.g=c),x&&yr(N,x),h&&(N.h=h),g=N}return h=s.G,c=s.wa,h&&c&&fe(g,h,c),fe(g,"VER",s.ka),_r(s,g),g}function rc(s,c,h){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new Ie(new ks({ab:h})):new Ie(s.ma),c.Fa(s.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ic(){}t=ic.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function et(s,c){ve.call(this),this.g=new qa(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!p(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Kn(this)}_(et,ve),et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Os(this.g)},et.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.v&&(h={},h.__data__=Vt(s),s=h);c.i.push(new Td(c.Ya++,s)),c.I==3&&Ti(c)},et.prototype.N=function(){this.g.l=null,delete this.j,Os(this.g),delete this.g,et.Z.N.call(this)};function sc(s){Ue.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const h in c){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}_(sc,Ue);function oc(){fr.call(this),this.status=1}_(oc,fr);function Kn(s){this.g=s}_(Kn,ic),Kn.prototype.ra=function(){he(this.g,"a")},Kn.prototype.qa=function(s){he(this.g,new sc(s))},Kn.prototype.pa=function(s){he(this.g,new oc)},Kn.prototype.oa=function(){he(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,wd.COMPLETE="complete",yn.EventType=Ye,Ye.OPEN="a",Ye.CLOSE="b",Ye.ERROR="c",Ye.MESSAGE="d",ve.prototype.listen=ve.prototype.J,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi="12.8.0";function AI(t){hi=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new ds("@firebase/firestore");function ut(t,...e){if(sr.logLevel<=ie.DEBUG){const n=e.map(ua);sr.debug(`Firestore (${hi}): ${t}`,...n)}}function Ph(t,...e){if(sr.logLevel<=ie.ERROR){const n=e.map(ua);sr.error(`Firestore (${hi}): ${t}`,...n)}}function CI(t,...e){if(sr.logLevel<=ie.WARN){const n=e.map(ua);sr.warn(`Firestore (${hi}): ${t}`,...n)}}function ua(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Oh(t,r,n)}function Oh(t,e,n){let r=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ph(r),new Error(r)}function Vr(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Oh(e,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Z extends at{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class xI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kI{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Vr(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Hr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Hr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vr(typeof r.accessToken=="string",31837,{l:r}),new Dh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Vr(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class PI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class OI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new PI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ml{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Vr(this.o===void 0,3512);const r=o=>{o.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,ut("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ml(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Vr(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ml(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=NI(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%62))}return r}}function an(t,e){return t<e?-1:t>e?1:0}function MI(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),o=e.charAt(r);if(i!==o)return eo(i)===eo(o)?an(i,o):eo(i)?1:-1}return an(t.length,e.length)}const jI=55296,UI=57343;function eo(t){const e=t.charCodeAt(0);return e>=jI&&e<=UI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="__name__";class vt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Qr(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Qr(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=vt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return an(e.length,n.length)}static compareSegments(e,n){const r=vt.isNumericId(e),i=vt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?vt.extractNumericId(e).compare(vt.extractNumericId(n)):MI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return la.fromString(e.substring(4,e.length-2))}}class ct extends vt{construct(e,n,r){return new ct(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ct(n)}static emptyPath(){return new ct([])}}const FI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends vt{construct(e,n,r){return new Cn(e,n,r)}static isValidIdentifier(e){return FI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yl}static keyField(){return new Cn([yl])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Z(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Z(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Z(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new Z(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.path=e}static fromPath(e){return new kn(ct.fromString(e))}static fromName(e){return new kn(ct.fromString(e).popFirst(5))}static empty(){return new kn(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ct.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new kn(new ct(e.slice()))}}function $I(t,e,n,r){if(e===!0&&r===!0)throw new Z(Q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function BI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function VI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Qr(12329,{type:typeof t})}function HI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=VI(t);throw new Z(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e){const n={typeString:t};return e&&(n.value=e),n}function di(t,e){if(!BI(t))throw new Z(Q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new Z(Q.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=-62135596800,wl=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*wl);return new wt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<vl)throw new Z(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wl}_compareTo(e){return this.seconds===e.seconds?an(this.nanoseconds,e.nanoseconds):an(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(di(e,wt._jsonSchema))return new wt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:Ae("string",wt._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};function WI(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new zI("Invalid base64 string: "+o):o}}(e);return new Bn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Bn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return an(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bn.EMPTY_BYTE_STRING=new Bn("");const Co="(default)";class is{constructor(e,n){this.projectId=e,this.database=n||Co}static empty(){return new is("","")}get isDefaultDatabase(){return this.database===Co}isEqual(e){return e instanceof is&&e.projectId===this.projectId&&e.database===this.database}}function GI(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Z(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new is(t.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function KI(t){return new qI(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bl,X;(X=bl||(bl={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new la([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=1048576;function to(){return typeof document<"u"?document:null}class XI{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&ut("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,l=new ha(e,n,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var El,Il;(Il=El||(El={})).Ma="default",Il.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="ComponentProvider",Tl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="firestore.googleapis.com",_l=!0;class Sl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nh,this.ssl=_l}else this.host=e.host,this.ssl=e.ssl??_l;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=YI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JI)throw new Z(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$I("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Z(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RI;switch(r.type){case"firstParty":return new OI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tl.get(n);r&&(ut(ZI,"Removing Datastore"),Tl.delete(n),r.terminate())}(this),Promise.resolve()}}function eT(t,e,n,r={}){var d;t=HI(t,Lh);const i=zn(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Jo(`https://${l}`),Xo("Firestore",!0)),o.host!==Nh&&o.host!==l&&CI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:l,ssl:i,emulatorOptions:r};if(!on(u,a)&&(t._setSettings(u),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=Fe.MOCK_USER;else{f=Mv(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new Z(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Fe(b)}t._authCredentials=new xI(new Dh(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new da(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}toJSON(){return{type:bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(di(n,bt._jsonSchema))return new bt(e,r||null,new kn(ct.fromString(n.referencePath)))}}bt._jsonSchemaVersion="firestore/documentReference/1.0",bt._jsonSchema={type:Ae("string",bt._jsonSchemaVersion),referencePath:Ae("string")};class fa extends da{constructor(e,n,r){super(e,n,KI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new kn(e))}withConverter(e){return new fa(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="AsyncQueue";class Cl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new XI(this,"async_queue_retry"),this._c=()=>{const r=to();r&&ut(Al,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=to();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=to();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Hr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!WI(e))throw e;ut(Al,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ph("INTERNAL UNHANDLED ERROR: ",Rl(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=ha.createAndSchedule(this,e,n,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&Qr(47125,{Pc:Rl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Rl(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class tT extends Lh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Cl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cl(e),this._firestoreClient=void 0,await e}}}function nT(t,e){const n=typeof t=="object"?t:fs(),r=typeof t=="string"?t:Co,i=ln(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=$u("firestore");o&&eT(i,...o)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Bn.fromBase64String(e))}catch(n){throw new Z(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(Bn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(di(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Ae("string",Pt._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return an(this._lat,e._lat)||an(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(di(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:Ae("string",Ln._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(di(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Mn(e.vectorValues);throw new Z(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:Ae("string",Mn._jsonSchemaVersion),vectorValues:Ae("object")};function jh(t,e,n){if((e=Me(e))instanceof Mh)return e._internalPath;if(typeof e=="string")return iT(t,e);throw Ro("Field path arguments must be of type string or ",t)}const rT=new RegExp("[~\\*/\\[\\]]");function iT(t,e,n){if(e.search(rT)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Mh(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Ro(t,e,n,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new Z(Q.INVALID_ARGUMENT,o+t+a)}const xl="@firebase/firestore",kl="4.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sT extends Uh{data(){return super.data()}}class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zn extends Uh{constructor(e,n,r,i,o,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zn._jsonSchema={type:Ae("string",Zn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Gi extends Zn{data(e={}){return super.data(e)}}class Wr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gi(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Gi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ji(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Gi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ji(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:oT(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=LI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qr(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:Ae("string",Wr._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};(function(e,n=!0){AI(ur),ft(new st("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new tT(new kI(r.getProvider("auth-internal")),new DI(a,r.getProvider("app-check-internal")),GI(a,i),a);return o={useFetchStreams:n,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ke(xl,kl,e),Ke(xl,kl,"esm2020")})();const Fh="@firebase/installations",pa="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1e4,Bh=`w:${pa}`,Vh="FIS_v2",aT="https://firebaseinstallations.googleapis.com/v1",cT=60*60*1e3,lT="installations",uT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vn=new Gn(lT,uT,hT);function Hh(t){return t instanceof at&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh({projectId:t}){return`${aT}/projects/${t}/installations`}function zh(t){return{token:t.token,requestStatus:2,expiresIn:fT(t.expiresIn),creationTime:Date.now()}}async function Gh(t,e){const r=(await e.json()).error;return Vn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dT(t,{refreshToken:e}){const n=qh(t);return n.append("Authorization",pT(e)),n}async function Kh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fT(t){return Number(t.replace("s","000"))}function pT(t){return`${Vh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Wh(t),i=qh(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:n,authVersion:Vh,appId:t.appId,sdkVersion:Bh},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Kh(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:zh(d.authToken)}}else throw await Gh("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=/^[cdef][\w-]{21}$/,xo="";function vT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wT(t);return yT.test(n)?n:xo}catch{return xo}}function wT(t){return mT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function Xh(t,e){const n=ys(t);Qh(n,e),bT(n,e)}function Qh(t,e){const n=Jh.get(t);if(n)for(const r of n)r(e)}function bT(t,e){const n=ET();n&&n.postMessage({key:t,fid:e}),IT()}let Pn=null;function ET(){return!Pn&&"BroadcastChannel"in self&&(Pn=new BroadcastChannel("[Firebase] FID Change"),Pn.onmessage=t=>{Qh(t.data.key,t.data.fid)}),Pn}function IT(){Jh.size===0&&Pn&&(Pn.close(),Pn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="firebase-installations-database",_T=1,Hn="firebase-installations-store";let no=null;function ga(){return no||(no=Ku(TT,_T,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}})),no}async function ss(t,e){const n=ys(t),i=(await ga()).transaction(Hn,"readwrite"),o=i.objectStore(Hn),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Xh(t,e.fid),e}async function Zh(t){const e=ys(t),r=(await ga()).transaction(Hn,"readwrite");await r.objectStore(Hn).delete(e),await r.done}async function vs(t,e){const n=ys(t),i=(await ga()).transaction(Hn,"readwrite"),o=i.objectStore(Hn),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&Xh(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){let e;const n=await vs(t.appConfig,r=>{const i=ST(r),o=AT(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===xo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ST(t){const e=t||{fid:vT(),registrationStatus:0};return ed(e)}function AT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RT(t)}:{installationEntry:e}}async function CT(t,e){try{const n=await gT(t,e);return ss(t.appConfig,n)}catch(n){throw Hh(n)&&n.customData.serverCode===409?await Zh(t.appConfig):await ss(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RT(t){let e=await Pl(t.appConfig);for(;e.registrationStatus===1;)await Yh(100),e=await Pl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ma(t);return r||n}return e}function Pl(t){return vs(t,e=>{if(!e)throw Vn.create("installation-not-found");return ed(e)})}function ed(t){return xT(t)?{fid:t.fid,registrationStatus:0}:t}function xT(t){return t.registrationStatus===1&&t.registrationTime+$h<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT({appConfig:t,heartbeatServiceProvider:e},n){const r=PT(t,n),i=dT(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Bh,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Kh(()=>fetch(r,l));if(u.ok){const d=await u.json();return zh(d)}else throw await Gh("Generate Auth Token",u)}function PT(t,{fid:e}){return`${Wh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t,e=!1){let n;const r=await vs(t.appConfig,o=>{if(!td(o))throw Vn.create("not-registered");const a=o.authToken;if(!e&&NT(a))return o;if(a.requestStatus===1)return n=OT(t,e),o;{if(!navigator.onLine)throw Vn.create("app-offline");const l=MT(o);return n=DT(t,l),l}});return n?await n:r.authToken}async function OT(t,e){let n=await Ol(t.appConfig);for(;n.authToken.requestStatus===1;)await Yh(100),n=await Ol(t.appConfig);const r=n.authToken;return r.requestStatus===0?ya(t,e):r}function Ol(t){return vs(t,e=>{if(!td(e))throw Vn.create("not-registered");const n=e.authToken;return jT(n)?{...e,authToken:{requestStatus:0}}:e})}async function DT(t,e){try{const n=await kT(t,e),r={...e,authToken:n};return await ss(t.appConfig,r),n}catch(n){if(Hh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zh(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ss(t.appConfig,r)}throw n}}function td(t){return t!==void 0&&t.registrationStatus===2}function NT(t){return t.requestStatus===2&&!LT(t)}function LT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+cT}function MT(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function jT(t){return t.requestStatus===1&&t.requestTime+$h<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t){const e=t,{installationEntry:n,registrationPromise:r}=await ma(e);return r?r.catch(console.error):ya(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e=!1){const n=t;return await $T(n),(await ya(n,e)).token}async function $T(t){const{registrationPromise:e}=await ma(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){if(!t||!t.options)throw ro("App Configuration");if(!t.name)throw ro("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ro(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ro(t){return Vn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="installations",VT="installations-internal",HT=t=>{const e=t.getProvider("app").getImmediate(),n=BT(e),r=ln(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WT=t=>{const e=t.getProvider("app").getImmediate(),n=ln(e,nd).getImmediate();return{getId:()=>UT(n),getToken:i=>FT(n,i)}};function zT(){ft(new st(nd,HT,"PUBLIC")),ft(new st(VT,WT,"PRIVATE"))}zT();Ke(Fh,pa);Ke(Fh,pa,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="analytics",GT="firebase_id",qT="origin",KT=60*1e3,YT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",va="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new ds("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new Gn("analytics","Analytics",JT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){if(!t.startsWith(va)){const e=Xe.create("invalid-gtag-resource",{gtagURL:t});return $e.warn(e.message),""}return t}function rd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function QT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZT(t,e){const n=QT("firebase-js-sdk-policy",{createScriptURL:XT}),r=document.createElement("script"),i=`${va}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function e_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function t_(t,e,n,r,i,o){const a=r[i];try{if(a)await e[a];else{const u=(await rd(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){$e.error(l)}t("config",i,o)}async function n_(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await rd(n);for(const u of a){const d=l.find(_=>_.measurementId===u),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){$e.error(o)}}function r_(t,e,n,r){async function i(o,...a){try{if(o==="event"){const[l,u]=a;await n_(t,e,n,l,u)}else if(o==="config"){const[l,u]=a;await t_(t,e,n,r,l,u)}else if(o==="consent"){const[l,u]=a;t("consent",l,u)}else if(o==="get"){const[l,u,d]=a;t("get",l,u,d)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){$e.error(l)}}return i}function i_(t,e,n,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=r_(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function s_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(va)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=30,a_=1e3;class c_{constructor(e={},n=a_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const id=new c_;function l_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function u_(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:l_(n)},i=YT.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function h_(t,e=id,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Xe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new p_;return setTimeout(async()=>{l.abort()},KT),sd({appId:r,apiKey:i,measurementId:o},a,l,e)}async function sd(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=id){var l;const{appId:o,measurementId:a}=t;try{await d_(r,e)}catch(u){if(a)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await u_(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!f_(d)){if(i.deleteThrottleMetadata(o),a)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw u}const f=Number((l=d==null?void 0:d.customData)==null?void 0:l.httpStatus)===503?Bc(n,i.intervalMillis,o_):Bc(n,i.intervalMillis),_={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,_),$e.debug(`Calling attemptFetch again in ${f} millis`),sd(t,_,r,i)}}function d_(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function f_(t){if(!(t instanceof at)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class p_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function g_(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,a={...r,send_to:o};t("event",n,a)}}async function m_(t,e,n,r){if(r&&r.global){const i={};for(const o of Object.keys(n))i[`user_properties.${o}`]=n[o];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(){if(Wu())try{await zu()}catch(t){return $e.warn(Xe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $e.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function v_(t,e,n,r,i,o,a){const l=h_(t);l.then(b=>{n[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>$e.error(b)),e.push(l);const u=y_().then(b=>{if(b)return r.getId()}),[d,f]=await Promise.all([l,u]);s_(o)||ZT(o,d.measurementId),i("js",new Date);const _=(a==null?void 0:a.config)??{};return _[qT]="firebase",_.update=!0,f!=null&&(_[GT]=f),i("config",d.measurementId,_),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.app=e}_delete(){return delete er[this.app.options.appId],Promise.resolve()}}let er={},Dl=[];const Nl={};let io="dataLayer",b_="gtag",Ll,wa,Ml=!1;function E_(){const t=[];if(Hu()&&t.push("This is a browser extension environment."),Hv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xe.create("invalid-analytics-context",{errorInfo:e});$e.warn(n.message)}}function I_(t,e,n){E_();const r=t.options.appId;if(!r)throw Xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(er[r]!=null)throw Xe.create("already-exists",{id:r});if(!Ml){e_(io);const{wrappedGtag:o,gtagCore:a}=i_(er,Dl,Nl,io,b_);wa=o,Ll=a,Ml=!0}return er[r]=v_(t,Dl,Nl,e,Ll,io,n),new w_(t)}function T_(t=fs()){t=Me(t);const e=ln(t,os);return e.isInitialized()?e.getImmediate():__(t)}function __(t,e={}){const n=ln(t,os);if(n.isInitialized()){const i=n.getImmediate();if(on(e,n.getOptions()))return i;throw Xe.create("already-initialized")}return n.initialize({options:e})}function S_(t,e,n){t=Me(t),m_(wa,er[t.app.options.appId],e,n).catch(r=>$e.error(r))}function A_(t,e,n,r){t=Me(t),g_(wa,er[t.app.options.appId],e,n,r).catch(i=>$e.error(i))}const jl="@firebase/analytics",Ul="0.10.19";function C_(){ft(new st(os,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return I_(r,i,n)},"PUBLIC")),ft(new st("analytics-internal",t,"PRIVATE")),Ke(jl,Ul),Ke(jl,Ul,"esm2020");function t(e){try{const n=e.getProvider(os).getImmediate();return{logEvent:(r,i,o)=>A_(n,r,i,o),setUserProperties:(r,i)=>S_(n,r,i)}}catch(n){throw Xe.create("interop-component-reg-failed",{reason:n})}}}C_();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="type.googleapis.com/google.protobuf.Int64Value",x_="type.googleapis.com/google.protobuf.UInt64Value";function od(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function as(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>as(e));if(typeof t=="function"||typeof t=="object")return od(t,e=>as(e));throw new Error("Data cannot be encoded in JSON: "+t)}function or(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case R_:case x_:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>or(e)):typeof t=="function"||typeof t=="object"?od(t,e=>or(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ze extends at{constructor(e,n,r){super(`${ba}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,ze.prototype)}}function k_(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function cs(t,e){let n=k_(t),r=n,i;try{const o=e&&e.error;if(o){const a=o.status;if(typeof a=="string"){if(!Fl[a])return new ze("internal","internal");n=Fl[a],r=a}const l=o.message;typeof l=="string"&&(r=l),i=o.details,i!==void 0&&(i=or(i))}}catch{}return n==="ok"?null:new ze(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,We(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||i==null||i.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="us-central1",O_=/^data: (.*?)(?:\n|$)/;function D_(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new ze("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class N_{constructor(e,n,r,i,o=ko,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new P_(e,n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(o);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ko}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function L_(t,e,n){const r=zn(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Jo(t.emulatorOrigin+"/backends"),Xo("Functions",!0))}function M_(t,e,n){const r=i=>U_(t,e,i,{});return r.stream=(i,o)=>$_(t,e,i,o),r}function ad(t){return t.emulatorOrigin&&zn(t.emulatorOrigin)?"include":void 0}async function j_(t,e,n,r,i){n["Content-Type"]="application/json";let o;try{o=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:ad(i)})}catch{return{status:0,json:null}}let a=null;try{a=await o.json()}catch{}return{status:o.status,json:a}}async function cd(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function U_(t,e,n,r){const i=t._url(e);return F_(t,i,n,r)}async function F_(t,e,n,r){n=as(n);const i={data:n},o=await cd(t,r),a=r.timeout||7e4,l=D_(a),u=await Promise.race([j_(e,i,o,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new ze("cancelled","Firebase Functions instance was deleted.");const d=cs(u.status,u.json);if(d)throw d;if(!u.json)throw new ze("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new ze("internal","Response is missing data field.");return{data:or(f)}}function $_(t,e,n,r){const i=t._url(e);return B_(t,i,n,r||{})}async function B_(t,e,n,r){var b;n=as(n);const i={data:n},o=await cd(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let a;try{a=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:o,signal:r==null?void 0:r.signal,credentials:ad(t)})}catch(E){if(E instanceof Error&&E.name==="AbortError"){const O=new ze("cancelled","Request was cancelled.");return{data:Promise.reject(O),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(O)}}}}}}const A=cs(0,null);return{data:Promise.reject(A),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(A)}}}}}}let l,u;const d=new Promise((E,A)=>{l=E,u=A});(b=r==null?void 0:r.signal)==null||b.addEventListener("abort",()=>{const E=new ze("cancelled","Request was cancelled.");u(E)});const f=a.body.getReader(),_=V_(f,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const E=_.getReader();return{async next(){const{value:A,done:O}=await E.read();return{value:A,done:O}},async return(){return await E.cancel(),{done:!0,value:void 0}}}}},data:d}}function V_(t,e,n,r){const i=(a,l)=>{const u=a.match(O_);if(!u)return;const d=u[1];try{const f=JSON.parse(d);if("result"in f){e(or(f.result));return}if("message"in f){l.enqueue(or(f.message));return}if("error"in f){const _=cs(0,f);l.error(_),n(_);return}}catch(f){if(f instanceof ze){l.error(f),n(f);return}}},o=new TextDecoder;return new ReadableStream({start(a){let l="";return u();async function u(){if(r!=null&&r.aborted){const d=new ze("cancelled","Request was cancelled");return a.error(d),n(d),Promise.resolve()}try{const{value:d,done:f}=await t.read();if(f){l.trim()&&i(l.trim(),a),a.close();return}if(r!=null&&r.aborted){const b=new ze("cancelled","Request was cancelled");a.error(b),n(b),await t.cancel();return}l+=o.decode(d,{stream:!0});const _=l.split(`
`);l=_.pop()||"";for(const b of _)b.trim()&&i(b.trim(),a);return u()}catch(d){const f=d instanceof ze?d:cs(0,null);a.error(f),n(f)}}},cancel(){return t.cancel()}})}const $l="@firebase/functions",Bl="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="auth-internal",W_="app-check-internal",z_="messaging-internal";function G_(t){const e=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),o=n.getProvider(H_),a=n.getProvider(z_),l=n.getProvider(W_);return new N_(i,o,a,l,r)};ft(new st(ba,e,"PUBLIC").setMultipleInstances(!0)),Ke($l,Bl,t),Ke($l,Bl,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t=fs(),e=ko){const r=ln(Me(t),ba).getImmediate({identifier:e}),i=$u("functions");return i&&K_(r,...i),r}function K_(t,e,n){L_(Me(t),e,n)}function F0(t,e,n){return M_(Me(t),e)}G_();const Y_={apiKey:"AIzaSyCMo3rMU28z-nyDdtiYY7gnPDldOoyxeKU",authDomain:"sii-robot-a6284.firebaseapp.com",projectId:"sii-robot-a6284",storageBucket:"sii-robot-a6284.firebasestorage.app",messagingSenderId:"415042811690",appId:"1:415042811690:web:80612751ce453e21291053",measurementId:"G-30TQY79797"},ws=Yu(Y_);nT(ws);const Pr=II(ws),$0=q_(ws);typeof window<"u"&&T_(ws);const ld=w.createContext(void 0),B0=()=>{const t=w.useContext(ld);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},J_=({children:t})=>{const[e,n]=w.useState(null),[r,i]=w.useState(!0);w.useEffect(()=>uE(Pr,_=>{n(_),i(!1)}),[]);const d={user:e,loading:r,signIn:async(f,_)=>{await aE(Pr,f,_)},signUp:async(f,_)=>{await oE(Pr,f,_)},signInWithGoogle:async()=>{const f=new kt;await PE(Pr,f)},signOut:async()=>{await hE(Pr)}};return k.jsx(ld.Provider,{value:d,children:t})},X_=At(k.jsx("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),Q_=At(k.jsx("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z"}),"Login"),Z_=At(k.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description"),e0=At(k.jsx("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"History");function t0(){return k.jsx(Lu,{children:k.jsx(sf,{})})}function n0(t){return new Promise(e=>setTimeout(e,t))}function r0(t,e){return function(r){const[i,o]=w.useState(!1);return w.useEffect(()=>{const a=setTimeout(()=>o(!0),e);return()=>clearTimeout(a)},[]),i?k.jsx(t,{...r}):null}}const i0=(t,e)=>w.lazy(()=>{const n=performance.now();return t().then(r=>{const o=performance.now()-n,{delay:a,minimumLoading:l}=e;return o<a||o>a&&o>a+l?r:n0(a+l-o).then(()=>r)})});function s0(t,e,n,r){const i=n.delay?r0(r,n.delay):r,o=i0(t,n);return function(l){return k.jsx(w.Suspense,{fallback:k.jsx(i,{}),children:k.jsx(o,{...e,...l})})}}const Or=(t,e={},n=of,r=t0)=>s0(t,e,n,r),ud=[{component:Or(()=>Sr(()=>import("./index-Cd-E3uJQ.js"),__vite__mapDeps([0,1,2,3,4,5]))),path:"/",title:"Dashboard",icon:X_},{component:Or(()=>Sr(()=>import("./index-DkVD5cH0.js"),__vite__mapDeps([6,1,7,3,8,9,4,5]))),path:"/login",title:"Login",icon:Q_},{component:Or(()=>Sr(()=>import("./index-CtjYHwrF.js"),__vite__mapDeps([10,1,11,7,8,3,2,9,4,5]))),path:"/nueva-boleta",title:"Nueva Boleta",icon:Z_},{component:Or(()=>Sr(()=>import("./index-DlMmPo2Q.js"),__vite__mapDeps([12,1,11,7,8,3,4,5]))),path:"/historial",title:"Historial",icon:e0},{component:Or(()=>Sr(()=>import("./index-DxI9vCuo.js"),__vite__mapDeps([13,1,4,5]))),path:"*"}];function o0(t,e){return t?e:null}function a0(t){return`calc(100vh - ${Number(t.mixins.toolbar.minHeight)+parseInt(t.spacing(1))}px)`}function hd(t){return t.map(({path:e,component:n,routes:r})=>k.jsx(ku,{path:e,element:k.jsx(n,{}),...o0(r,{children:r&&hd(r)})},e))}function c0(){return k.jsx(du,{sx:{height:t=>a0(t)},children:k.jsx(jy,{children:hd(ud)})})}const l0=At(k.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),u0=At(k.jsx("path",{d:"M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2z"}),"InvertColors"),h0=At(k.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),d0=Yl(!1);function dd(){const[t,e]=Jl(d0),n=w.useCallback(()=>e(o=>!o),[e]),r=w.useCallback(()=>e(!1),[e]),i=w.useCallback(()=>e(!0),[e]);return{isOpen:t,toggle:n,close:r,open:i}}const f0=Yl(!1);function Ea(){const[t,e]=Jl(f0),n=w.useCallback(()=>e(o=>!o),[e]),r=w.useCallback(()=>e(!1),[e]),i=w.useCallback(()=>e(!0),[e]);return{isOpen:t,toggle:n,close:r,open:i}}const p0=re(Dn)(({theme:t})=>({height:"fit-content",alignSelf:"center",marginRight:t.spacing(1),borderColor:t.palette.text.disabled,"&:hover":{borderColor:t.palette.text.disabled},color:t.palette.text.disabled})),Vl=['I changed my password to "incorrect". So whenever I forget what it is the computer will say "Your password is incorrect"',"Moses had the first tablet that could connect to the cloud","A clean house is the sign of a broken computer","Why do Java developers wear glasses? Because they don't C#","The first computer dates back to Adam and Eve. It was an Apple with limited memory, just one byte. And then everything crashed","Why are PCs like air conditioners? They stop working properly if you open Windows!","What did the turkey say to the computer? Google, google, google!","There are 10 types of people in this world, those who understand binary and those who dont","OOP sucks and this one isn't a joke","What did the robot say to the dead robot? Rust-in-peace"];function g0(){const t=Math.round(Math.random()*(Vl.length-1)),e=Vl[t];return k.jsxs(Fr,{gap:.5,children:[k.jsx(tt,{variant:"body1",fontWeight:900,children:"Notification demo (random IT jokes)"}),k.jsx(tt,{variant:"body1",children:e})]})}function m0(){const{themeMode:t,toggle:e}=Xl(),{open:n}=Ea(),{open:r}=dd(),i=uf();function o(){i.show(g0(),{autoHideDuration:5e3})}return k.jsx(jf,{position:"static",color:"transparent",elevation:2,"data-pw":`theme-${t}`,enableColorOnDark:!0,children:k.jsx(Gm,{children:k.jsxs(Fr,{direction:"row",justifyContent:"space-between",alignItems:"center",flex:1,children:[k.jsxs(Fr,{direction:"row",gap:1,alignItems:"center",children:[k.jsx(js,{size:"large",edge:"start",color:"info","aria-label":"menu",onClick:n,children:k.jsx(h0,{})}),k.jsx(Dn,{onClick:o,color:"info",children:af})]}),k.jsxs(Fr,{direction:"row",alignItems:"center",children:[k.jsx(Bs,{title:"Hot keys",arrow:!0,children:k.jsx(p0,{size:"small",variant:"outlined","aria-label":"open hotkeys dialog",onClick:r,children:"alt + k"})}),k.jsx(Ki,{orientation:"vertical",flexItem:!0}),k.jsx(Bs,{title:"It's open source",arrow:!0,children:k.jsx(js,{color:"info",size:"large",component:"a",href:cf,target:"_blank",children:k.jsx(l0,{})})}),k.jsx(Ki,{orientation:"vertical",flexItem:!0}),k.jsx(Bs,{title:"Switch theme",arrow:!0,children:k.jsx(js,{color:"info",edge:"end",size:"large",onClick:e,"data-pw":"theme-toggle",children:k.jsx(u0,{})})})]})]})})})}function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(null,arguments)}var fd=["shift","alt","meta","mod","ctrl"],y0={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function en(t){return(t&&y0[t]||t||"").trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function v0(t){return fd.includes(t)}function so(t,e){return e===void 0&&(e=","),t.split(e)}function oo(t,e,n){e===void 0&&(e="+");var r=t.toLocaleLowerCase().split(e).map(function(a){return en(a)}),i={alt:r.includes("alt"),ctrl:r.includes("ctrl")||r.includes("control"),shift:r.includes("shift"),meta:r.includes("meta"),mod:r.includes("mod")},o=r.filter(function(a){return!fd.includes(a)});return Po({},i,{keys:o,description:n,hotkey:t})}(function(){typeof document<"u"&&(document.addEventListener("keydown",function(t){t.key!==void 0&&pd([en(t.key),en(t.code)])}),document.addEventListener("keyup",function(t){t.key!==void 0&&gd([en(t.key),en(t.code)])})),typeof window<"u"&&window.addEventListener("blur",function(){tn.clear()})})();var tn=new Set;function Ia(t){return Array.isArray(t)}function w0(t,e){e===void 0&&(e=",");var n=Ia(t)?t:t.split(e);return n.every(function(r){return tn.has(r.trim().toLowerCase())})}function pd(t){var e=Array.isArray(t)?t:[t];tn.has("meta")&&tn.forEach(function(n){return!v0(n)&&tn.delete(n.toLowerCase())}),e.forEach(function(n){return tn.add(n.toLowerCase())})}function gd(t){var e=Array.isArray(t)?t:[t];t==="meta"?tn.clear():e.forEach(function(n){return tn.delete(n.toLowerCase())})}function b0(t,e,n){(typeof n=="function"&&n(t,e)||n===!0)&&t.preventDefault()}function E0(t,e,n){return typeof n=="function"?n(t,e):n===!0||n===void 0}function I0(t){return md(t,["input","textarea","select"])}function md(t,e){e===void 0&&(e=!1);var n=t.target,r=t.composed,i=null;return T0(n)&&r?i=t.composedPath()[0]&&t.composedPath()[0].tagName:i=n&&n.tagName,Ia(e)?!!(i&&e&&e.some(function(o){var a;return o.toLowerCase()===((a=i)==null?void 0:a.toLowerCase())})):!!(i&&e&&e)}function T0(t){return!!t.tagName&&!t.tagName.startsWith("-")&&t.tagName.includes("-")}function _0(t,e){return t.length===0&&e?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):e?t.some(function(n){return e.includes(n)})||t.includes("*"):!0}var S0=function(e,n,r){r===void 0&&(r=!1);var i=n.alt,o=n.meta,a=n.mod,l=n.shift,u=n.ctrl,d=n.keys,f=e.key,_=e.code,b=e.ctrlKey,E=e.metaKey,A=e.shiftKey,O=e.altKey,C=en(_),R=f.toLowerCase();if(!(d!=null&&d.includes(C))&&!(d!=null&&d.includes(R))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(C))return!1;if(!r){if(i===!O&&R!=="alt"||l===!A&&R!=="shift")return!1;if(a){if(!E&&!b)return!1}else if(o===!E&&R!=="meta"&&R!=="os"||u===!b&&R!=="ctrl"&&R!=="control")return!1}return d&&d.length===1&&(d.includes(R)||d.includes(C))?!0:d?w0(d):!d},A0=w.createContext(void 0),C0=function(){return w.useContext(A0)};function yd(t,e){return t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(t).length===Object.keys(e).length&&Object.keys(t).reduce(function(n,r){return n&&yd(t[r],e[r])},!0):t===e}var R0=w.createContext({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),x0=function(){return w.useContext(R0)};function k0(t){var e=w.useRef(void 0);return yd(e.current,t)||(e.current=t),e.current}var Hl=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},P0=typeof window<"u"?w.useLayoutEffect:w.useEffect;function ao(t,e,n,r){var i=w.useState(null),o=i[0],a=i[1],l=w.useRef(!1),u=n instanceof Array?r instanceof Array?void 0:r:n,d=Ia(t)?t.join(u==null?void 0:u.splitKey):t,f=n instanceof Array?n:r instanceof Array?r:void 0,_=w.useCallback(e,f??[]),b=w.useRef(_);f?b.current=_:b.current=e;var E=k0(u),A=x0(),O=A.enabledScopes,C=C0();return P0(function(){if(!((E==null?void 0:E.enabled)===!1||!_0(O,E==null?void 0:E.scopes))){var R=function(M,v){var m;if(v===void 0&&(v=!1),!(I0(M)&&!md(M,E==null?void 0:E.enableOnFormTags))){if(o!==null){var y=o.getRootNode();if((y instanceof Document||y instanceof ShadowRoot)&&y.activeElement!==o&&!o.contains(y.activeElement)){Hl(M);return}}(m=M.target)!=null&&m.isContentEditable&&!(E!=null&&E.enableOnContentEditable)||so(d,E==null?void 0:E.splitKey).forEach(function(I){var T,S=oo(I,E==null?void 0:E.combinationKey);if(S0(M,S,E==null?void 0:E.ignoreModifiers)||(T=S.keys)!=null&&T.includes("*")){if(E!=null&&E.ignoreEventWhen!=null&&E.ignoreEventWhen(M)||v&&l.current)return;if(b0(M,S,E==null?void 0:E.preventDefault),!E0(M,S,E==null?void 0:E.enabled)){Hl(M);return}b.current(M,S),v||(l.current=!0)}})}},D=function(M){M.key!==void 0&&(pd(en(M.code)),((E==null?void 0:E.keydown)===void 0&&(E==null?void 0:E.keyup)!==!0||E!=null&&E.keydown)&&R(M))},P=function(M){M.key!==void 0&&(gd(en(M.code)),l.current=!1,E!=null&&E.keyup&&R(M,!0))},L=o||(u==null?void 0:u.document)||document;return L.addEventListener("keyup",P),L.addEventListener("keydown",D),C&&so(d,E==null?void 0:E.splitKey).forEach(function(j){return C.addHotkey(oo(j,E==null?void 0:E.combinationKey,E==null?void 0:E.description))}),function(){L.removeEventListener("keyup",P),L.removeEventListener("keydown",D),C&&so(d,E==null?void 0:E.splitKey).forEach(function(j){return C.removeHotkey(oo(j,E==null?void 0:E.combinationKey,E==null?void 0:E.description))})}}},[o,d,E,O]),a}function O0(){const{toggle:t}=Xl(),{toggle:e}=Ea(),{isOpen:n,close:r,toggle:i}=dd();return ao("alt+s",e),ao("alt+t",t),ao("alt+k",i),k.jsxs(Lg,{fullWidth:!0,maxWidth:"xs",onClose:r,open:n,"data-pw":"hotkeys-dialog",children:[k.jsx(Wg,{children:"Hot Keys"}),k.jsxs(Bg,{children:[k.jsxs(Us,{direction:"row",alignItems:"center",height:50,justifyContent:"space-between",children:[k.jsx(tt,{children:"Toggle Theme"}),k.jsx(Dn,{color:"warning",variant:"outlined",onClick:t,children:"alt + t"})]}),k.jsxs(Us,{direction:"row",alignItems:"center",height:50,justifyContent:"space-between",children:[k.jsx(tt,{children:"Toggle Sidebar"}),k.jsx(Dn,{color:"warning",variant:"outlined",onClick:e,children:"alt + s"})]}),k.jsxs(Us,{direction:"row",alignItems:"center",height:50,justifyContent:"space-between",children:[k.jsx(tt,{children:"Toggle Hot Keys' Dialog"}),k.jsx(Dn,{color:"warning",variant:"outlined",onClick:i,children:"alt + k"})]})]})]})}const D0=At([k.jsx("path",{d:"M12 3v18c4.97 0 9-4.03 9-9s-4.03-9-9-9"},"0"),k.jsx("circle",{cx:"6",cy:"14",r:"1"},"1"),k.jsx("circle",{cx:"6",cy:"18",r:"1"},"2"),k.jsx("circle",{cx:"6",cy:"10",r:"1"},"3"),k.jsx("circle",{cx:"3",cy:"10",r:".5"},"4"),k.jsx("circle",{cx:"6",cy:"6",r:"1"},"5"),k.jsx("circle",{cx:"3",cy:"14",r:".5"},"6"),k.jsx("circle",{cx:"10",cy:"21",r:".5"},"7"),k.jsx("circle",{cx:"10",cy:"3",r:".5"},"8"),k.jsx("circle",{cx:"10",cy:"6",r:"1"},"9"),k.jsx("circle",{cx:"10",cy:"14",r:"1.5"},"10"),k.jsx("circle",{cx:"10",cy:"10",r:"1.5"},"11"),k.jsx("circle",{cx:"10",cy:"18",r:"1"},"12")],"Deblur");function N0(){const{isOpen:t,open:e,close:n}=Ea();return k.jsx(Vm,{anchor:"left",open:t,onClose:n,onOpen:e,disableBackdropTransition:!1,swipeAreaWidth:30,"data-pw":"sidebar",children:k.jsx(am,{sx:{width:250,pt:r=>`${r.mixins.toolbar.minHeight}px`},children:ud.filter(r=>r.title).map(({path:r,title:i,icon:o})=>k.jsx(Em,{sx:{p:0},onClick:n,children:k.jsxs(fm,{component:Ko,to:r,children:[k.jsx(Sm,{children:o?k.jsx(o,{}):k.jsx(D0,{})}),k.jsx(xm,{children:i})]})},r))})})}function L0(){return k.jsxs(w.Fragment,{children:[k.jsx(lg,{}),k.jsxs(J_,{children:[k.jsx(O0,{}),k.jsxs(av,{children:[k.jsx(m0,{}),k.jsx(N0,{}),k.jsx(c0,{})]})]})]})}const M0=Ev(L0,Av),V0=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"}));export{V0 as A,du as B,Ki as D,Lu as F,e0 as H,am as L,pu as M,tt as T,B0 as a,Z_ as b,vf as c,yf as d,Lo as e,bf as f,Zl as g,wf as h,Sc as i,F0 as j,$0 as k,lo as m,Et as o,Ey as u};
