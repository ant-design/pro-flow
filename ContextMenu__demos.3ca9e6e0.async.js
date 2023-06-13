!(function(){var ct=Object.defineProperty,dt=Object.defineProperties;var ut=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var Le=(r,c,e)=>c in r?ct(r,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[c]=e,pe=(r,c)=>{for(var e in c||(c={}))Re.call(c,e)&&Le(r,e,c[e]);if(ne)for(var e of ne(c))Ee.call(c,e)&&Le(r,e,c[e]);return r},Be=(r,c)=>dt(r,ut(c));var Te=(r,c)=>{var e={};for(var u in r)Re.call(r,u)&&c.indexOf(u)<0&&(e[u]=r[u]);if(r!=null&&ne)for(var u of ne(r))c.indexOf(u)<0&&Ee.call(r,u)&&(e[u]=r[u]);return e};(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[965],{26576:function(r,c,e){"use strict";e.r(c),e.d(c,{default:function(){return Ke}});var u=e(76297),I=e(31966),n=e(50959),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"},k=j,M=e(86793),R=function(v,d){return n.createElement(M.Z,(0,I.Z)({},v,{ref:d,icon:k}))},H=n.forwardRef(R),oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"},re=oe,xe=function(v,d){return n.createElement(M.Z,(0,I.Z)({},v,{ref:d,icon:re}))},ie=n.forwardRef(xe),l=e(57213),o=e.n(l),S=e(54306),f=e.n(S),m=e(12342),E=e.n(m),s=e(19441),Y=e(86364),ae=e(31540),V=e(12558),le=e(52510),J=e.n(le),se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const x=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q=(i,v)=>{const d=(0,n.forwardRef)((z,F)=>{var b=z,{color:g="currentColor",size:a=24,strokeWidth:B=2,absoluteStrokeWidth:U,children:T}=b,X=Te(b,["color","size","strokeWidth","absoluteStrokeWidth","children"]);return(0,n.createElement)("svg",pe(Be(pe({ref:F},se),{width:a,height:a,stroke:g,strokeWidth:U?Number(B)*24/Number(a):B,className:`lucide lucide-${x(i)}`}),X),[...v.map(([$,D])=>(0,n.createElement)($,D)),...(Array.isArray(T)?T:[T])||[]])});return d.displayName=`${i}`,d},ce=q("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]);var _=e(84817),t=e(11527),Z=2.2,C="13px",de=function(){return(0,t.jsx)("svg",{fill:"none",height:C,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:Z,viewBox:"0 0 24 24",width:C,xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"})})},ee=function(){return(0,t.jsx)("svg",{className:"lucide lucide-chevron-up",fill:"none",height:C,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:Z,viewBox:"0 0 24 24",width:C,xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("polyline",{points:"18 15 12 9 6 15"})})},ue=function(){return(0,t.jsx)("svg",{className:"lucide lucide-chevron-up",fill:"none",height:C,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:Z,viewBox:"0 0 24 24",width:C,xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"})})},Ne=function(){return(0,t.jsxs)("svg",{className:"lucide lucide-chevron-up",fill:"none",height:C,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:Z,viewBox:"0 0 24 24",width:C,xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M3 3h6l6 18h6"}),(0,t.jsx)("path",{d:"M14 3h7"})]})},Ze=e(92935),W=e.n(Ze),ge=e(41417),be,ye,we,je,ke,We=(0,ge.kc)(function(i,v){var d=i.css,g=i.cx,a=i.token,B=d(be||(be=W()([`
    font-weight: bold;
    color: `,`;
    background: `,`;
    &:hover {
      color: `,`;
      background: `,`;
    }
  `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover);return{item:g("".concat(v,"-item"),d(ye||(ye=W()([`
        all: unset;

        user-select: none;
        scroll-margin: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        box-sizing: inherit;
        width: 100%;
        padding: 12px 10px;

        font-family: `,`;
        font-weight: normal;
        line-height: 1;
        color: `,`;

        background: transparent;
        border-radius: 5px;
        &:hover {
          background: `,`;
        }
      `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:g("".concat(v,"-item-selected"),B),active:g("".concat(v,"-item-active"),d(we||(we=W()([`
        background: `,`;
      `])),a.colorFillTertiary)),arrow:d(je||(je=W()([`
      color: `,`;
    `])),a.colorTextTertiary),kbd:d(ke||(ke=W()([`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 18px;
      height: 20px;

      font-family: `,`;
      font-size: 14px;
      color: `,`;

      border-radius: 2px;
    `])),a.fontFamily,a.colorTextQuaternary)}}),Ae=["label","icon","disabled","nested","shortcut","active","selected"],He={meta:(0,t.jsx)(de,{}),control:(0,t.jsx)(ee,{}),shift:(0,t.jsx)(ue,{}),alt:(0,t.jsx)(Ne,{}),enter:"\u21B5"},Fe={meta:"meta",command:"meta",cmd:"meta",ctl:"control",control:"control",shift:"shift",alt:"alt"},De=(0,n.forwardRef)(function(i,v){var d,g=i.label,a=i.icon,B=i.disabled,U=i.nested,T=i.shortcut,X=i.active,F=i.selected,z=E()(i,Ae),b=We(),$=b.styles,D=b.cx;return(0,t.jsxs)("button",o()(o()({type:"button"},z),{},{className:D($.item,(d={},J()(d,$.selected,F),J()(d,$.active,X),d)),disabled:B,ref:v,role:"menuitem",children:[(0,t.jsxs)(_.D,{gap:8,horizontal:!0,children:[a&&(0,t.jsx)("span",{children:a}),g]}),U?(0,t.jsx)("span",{"aria-hidden":!0,children:(0,t.jsx)(ce,{className:$.arrow})}):T?(0,t.jsx)(_.D,{align:"center",horizontal:!0,children:T.map(function(N){var K=Fe[N.toLowerCase()];return(0,t.jsx)("kbd",{className:$.kbd,children:K?He[K]:N.toUpperCase()},N)})}):null]}))}),Ce=De,Oe,Me,Ge=(0,ge.kc)(function(i,v){var d=i.css,g=i.cx,a=i.token;return{container:g(v,d(Oe||(Oe=W()([`
      user-select: none;
      scrollbar-width: none;

      overflow-y: auto;
      overscroll-behavior: contain;

      box-sizing: border-box;
      width: 200px;
      padding: 5px;

      font-size: `,`;

      background: `,`;
      border: 1px solid `,`;
      border-radius: 8px;
      outline: 0;
      box-shadow: `,`;

      &::-webkit-scrollbar {
        display: none;
      }
    `])),a.fontSize,a.colorBgContainer,a.colorBorder,a.boxShadowSecondary)),button:g("".concat(v,"-button"),d(Me||(Me=W()([`
      all: unset;

      cursor: default;
      user-select: none;

      padding: 12px 10px;

      font-size: `,`px;
      line-height: 1;
      color: `,`;

      background: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;

      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: `,`;
        border-color: transparent;
      }

      &:focus-visible {
        border-color: `,`;
        box-shadow: 0 0 0 2px `,`;
      }
    `])),a.fontSize,a.colorText,a.colorBgContainer,a.colorBorder,a.borderRadius,a.colorPrimaryBg,a.colorPrimary,a.colorPrimaryBg))}}),Ye=["items","label","container"],Se=(0,n.forwardRef)(function(i,v){var d=i.items,g=i.label,a=i.container,B=E()(i,Ye),U=Ge(),T=U.styles,X=(0,n.useState)(!1),F=f()(X,2),z=F[0],b=F[1],$=(0,n.useState)(null),D=f()($,2),N=D[0],K=D[1],Qe=(0,n.useState)(!1),Ie=f()(Qe,2),fe=Ie[0],ze=Ie[1],$e=(0,n.useRef)([]),Je=(0,n.useRef)(d.map(function(h){return h.label})),ve=(0,n.useRef)(!1),P=(0,s.ay)(),G=(0,s.jV)(),Q=(0,s.Zm)(),O=Q!==null,Pe=(0,s.YF)({nodeId:G,open:z,onOpenChange:b,placement:O?"right-start":"bottom-start",middleware:[(0,Y.cv)({mainAxis:O?0:4,alignmentAxis:O?-4:0}),(0,Y.RR)(),(0,Y.uY)()],whileElementsMounted:ae.Me}),te=Pe.refs,A=Pe.context,qe=(0,s.XI)(A,{enabled:O&&fe,delay:{open:75},handleClose:(0,s.xp)({blockPointerEvents:!0})}),_e=(0,s.eS)(A,{event:"mousedown",toggle:!O||!fe,ignoreMouse:O}),et=(0,s.qs)(A,{role:"menu"}),tt=(0,s.bQ)(A),nt=(0,s.c0)(A,{listRef:$e,activeIndex:N,nested:O,onNavigate:K}),ot=(0,s.ox)(A,{enabled:z,listRef:Je,onMatch:z?K:void 0,activeIndex:N}),he=(0,s.NI)([qe,_e,et,tt,nt,ot]),rt=he.getReferenceProps,it=he.getFloatingProps,at=he.getItemProps;(0,n.useEffect)(function(){if(!P)return;function h(){b(!1)}function y(p){p.nodeId!==G&&p.parentId===Q&&b(!1)}return P.events.on("click",h),P.events.on("menuopen",y),function(){P.events.off("click",h),P.events.off("menuopen",y)}},[P,G,Q]),(0,n.useEffect)(function(){z&&P&&P.events.emit("menuopen",{parentId:Q,nodeId:G})},[P,z,G,Q]),(0,n.useEffect)(function(){function h(p){var w=p.pointerType;w!=="touch"&&ze(!0)}function y(){ze(!1)}return window.addEventListener("pointermove",h,{once:!0,capture:!0}),window.addEventListener("keydown",y,!0),function(){window.removeEventListener("pointermove",h,{capture:!0}),window.removeEventListener("keydown",y,!0)}},[fe]),(0,n.useEffect)(function(){var h;function y(w){w.preventDefault(),te.setPositionReference({getBoundingClientRect:function(){return{width:0,height:0,x:w.clientX,y:w.clientY,top:w.clientY,right:w.clientX,bottom:w.clientY,left:w.clientX}}}),b(!0),clearTimeout(h),ve.current=!1,h=window.setTimeout(function(){ve.current=!0},300)}function p(){ve.current&&b(!1)}return document.addEventListener("contextmenu",y),document.addEventListener("mouseup",p),function(){document.removeEventListener("contextmenu",y),document.removeEventListener("mouseup",p),clearTimeout(h)}},[te,a]);var lt=(0,n.useCallback)(function(h,y){if("type"in h&&h.type==="divider")return(0,t.jsx)(V.Z,{style:{margin:"4px 12px",minWidth:"auto",width:"auto"}});var p=h,w=o()({label:p.label,key:p.key,icon:p.icon,shortcut:p.shortcut,active:N===y},at({ref:function(L){$e.current[y]=L},onClick:function(){var L;(L=p.onClick)===null||L===void 0||L.call(p),b(!1)},onMouseUp:function(){var L;(L=p.onClick)===null||L===void 0||L.call(p),b(!1)}}));return"children"in h?(0,t.jsx)(Se,o()(o()({},w),{},{items:h.children})):(0,t.jsx)(Ce,o()({},w))},[N]),st=(0,s.qq)([te.setReference,v]);return(0,t.jsxs)(s.mN,{id:G,children:[g?(0,t.jsx)(Ce,o()(o()({label:g,nested:O,ref:st,role:O?"menuitem":"menu"},B),rt({onClick:function(y){y.stopPropagation()}}))):null,(0,t.jsx)(s.ll,{children:z&&(0,t.jsx)(s.wD,{context:A,initialFocus:O?-1:0,modal:!1,returnFocus:!O,children:(0,t.jsx)("div",o()(o()({className:T.container,ref:te.setFloating},it()),{},{children:d==null?void 0:d.map(lt)}))})})]})}),Ve=(0,n.forwardRef)(function(i,v){return(0,t.jsx)(s.RB,{children:(0,t.jsx)(Se,o()(o()({},i),{},{ref:v}))})}),Ue=Ve;const Xe=q("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);var Ke=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"RightClick"}),(0,t.jsx)(Ue,{items:[{key:"copy",label:"\u590D\u5236",icon:(0,t.jsx)(u.Z,{}),shortcut:["meta","C"]},{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,t.jsx)(Xe,{}),shortcut:["meta","A"]},{label:"\u653E\u5927",key:"zoomIn",icon:(0,t.jsx)(H,{})},{label:"\u7F29\u5C0F",key:"zoomOut",icon:(0,t.jsx)(ie,{})},{label:"\u6700\u8FD1\u6253\u5F00\u7684\u6587\u4EF6...",key:"recent",children:[{key:"1",label:"\u6587\u4EF61"},{key:"2",label:"\u6587\u4EF62"}]}]})]})}},12558:function(r,c,e){"use strict";e.d(c,{Z:function(){return ie}});var u=e(84875),I=e.n(u),n=e(50959),j=e(79538),k=e(24896),M=e(1332),R=e(46205);const H=l=>{const{componentCls:o,sizePaddingEdgeHorizontal:S,colorSplit:f,lineWidth:m}=l;return{[o]:Object.assign(Object.assign({},(0,k.Wf)(l)),{borderBlockStart:`${m}px solid ${f}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${l.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${m}px solid ${f}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${l.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${o}-with-text`]:{display:"flex",alignItems:"center",margin:`${l.dividerHorizontalWithTextGutterMargin}px 0`,color:l.colorTextHeading,fontWeight:500,fontSize:l.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${f}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${m}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${o}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${o}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${o}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:f,borderStyle:"dashed",borderWidth:`${m}px 0 0`},[`&-horizontal${o}-with-text${o}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${o}-dashed`]:{borderInlineStartWidth:m,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${o}-with-text`]:{color:l.colorText,fontWeight:"normal",fontSize:l.fontSize},[`&-horizontal${o}-with-text-left${o}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${o}-inner-text`]:{paddingInlineStart:S}},[`&-horizontal${o}-with-text-right${o}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${o}-inner-text`]:{paddingInlineEnd:S}}})}};var oe=(0,M.Z)("Divider",l=>{const o=(0,R.TS)(l,{dividerVerticalGutterMargin:l.marginXS,dividerHorizontalWithTextGutterMargin:l.margin,dividerHorizontalGutterMargin:l.marginLG});return[H(o)]},{sizePaddingEdgeHorizontal:0}),re=function(l,o){var S={};for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&o.indexOf(f)<0&&(S[f]=l[f]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,f=Object.getOwnPropertySymbols(l);m<f.length;m++)o.indexOf(f[m])<0&&Object.prototype.propertyIsEnumerable.call(l,f[m])&&(S[f[m]]=l[f[m]]);return S},ie=l=>{const{getPrefixCls:o,direction:S}=n.useContext(j.E_),{prefixCls:f,type:m="horizontal",orientation:E="center",orientationMargin:s,className:Y,rootClassName:ae,children:V,dashed:le,plain:J}=l,se=re(l,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),x=o("divider",f),[q,ce]=oe(x),_=E.length>0?`-${E}`:E,t=!!V,Z=E==="left"&&s!=null,C=E==="right"&&s!=null,de=I()(x,ce,`${x}-${m}`,{[`${x}-with-text`]:t,[`${x}-with-text${_}`]:t,[`${x}-dashed`]:!!le,[`${x}-plain`]:!!J,[`${x}-rtl`]:S==="rtl",[`${x}-no-default-orientation-margin-left`]:Z,[`${x}-no-default-orientation-margin-right`]:C},Y,ae),ee=n.useMemo(()=>typeof s=="number"?s:/^\d+$/.test(s)?Number(s):s,[s]),ue=Object.assign(Object.assign({},Z&&{marginLeft:ee}),C&&{marginRight:ee});return q(n.createElement("div",Object.assign({className:de},se,{role:"separator"}),V&&m!=="vertical"&&n.createElement("span",{className:`${x}-inner-text`,style:ue},V)))}},12342:function(r,c,e){var u=e(20006);function I(n,j){if(n==null)return{};var k=u(n,j),M,R;if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(n);for(R=0;R<H.length;R++)M=H[R],!(j.indexOf(M)>=0)&&Object.prototype.propertyIsEnumerable.call(n,M)&&(k[M]=n[M])}return k}r.exports=I,r.exports.__esModule=!0,r.exports.default=r.exports},20006:function(r){function c(e,u){if(e==null)return{};var I={},n=Object.keys(e),j,k;for(k=0;k<n.length;k++)j=n[k],!(u.indexOf(j)>=0)&&(I[j]=e[j]);return I}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports},92935:function(r){function c(e,u){return u||(u=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(u)}}))}r.exports=c,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
}());