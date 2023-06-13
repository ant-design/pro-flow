"use strict";(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[620],{67653:function(y,v,n){n.r(v);var h=n(67754),u=n(11527);v.default=function(){return(0,u.jsx)(h.Z,{value:"editable text"})}},44502:function(y,v,n){n.d(v,{F:function(){return x}});var h=n(57213),u=n.n(h),b=n(54306),g=n.n(b),p=n(12342),C=n.n(p),M=n(62591),l=n(85114),a=n(50959),e=n(11527),P=["value","onChange","onValueChanging","onChangeEnd"],x=(0,a.memo)(function(s){var t=s.value,E=s.onChange,f=s.onValueChanging,i=s.onChangeEnd,I=C()(s,P),o=t||"",d=(0,a.useState)(o),r=g()(d,2),_=r[0],D=r[1],T=(0,a.useRef)(null),c=(0,a.useRef)(!1),m=(0,a.useRef)(!1),j=(0,a.useCallback)(function(){E==null||E(_)},[_]);return(0,a.useEffect)(function(){typeof t!="undefined"&&D(t)},[t]),(0,e.jsx)(l.I,u()(u()({ref:T},I),{},{value:_,onCompositionStart:function(){c.current=!0},onCompositionEnd:function(){c.current=!1},onFocus:function(){m.current=!0},onBlur:function(){m.current=!1,i==null||i(_)},onChange:function(k){D(k.target.value),f==null||f(k.target.value)},onPressEnter:function(k){!k.shiftKey&&!c.current&&(k.preventDefault(),j(),m.current=!1,i==null||i(_))},suffix:t===_?(0,e.jsx)("span",{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(M.ZP,{type:"link",size:"small",onClick:function(){D(t)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,e.jsx)(M.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){j()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},67754:function(y,v,n){var h=n(54306),u=n.n(h),b=n(43520),g=n(83030),p=n(50959),C=n(84817),M=n(44502),l=n(11527),a=(0,p.memo)(function(e){var P=e.value,x=e.onChange,s=(0,p.useState)(!1),t=u()(s,2),E=t[0],f=t[1];return E?(0,l.jsx)(M.F,{onChange:x,onChangeEnd:function(){f(!1)},value:P}):(0,l.jsxs)(C.D,{gap:8,horizontal:!0,children:[P,(0,l.jsx)(g.Z,{icon:(0,l.jsx)(b.Z,{}),onClick:function(){f(!E)},placement:"right",title:"Edit"})]})});v.Z=a},85114:function(y,v,n){n.d(v,{I:function(){return i},K:function(){return I}});var h=n(57213),u=n.n(h),b=n(12342),g=n.n(b),p=n(3185),C=n(50959),M=n(92935),l=n.n(M),a=n(41417),e,P,x,s=(0,a.kc)(function(o){var d=o.css,r=o.token;return{input:d(e||(e=l()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),r.motionEaseOut),block:d(P||(P=l()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),r.colorFillTertiary,r.colorFillQuaternary),textarea:d(x||(x=l()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),r.motionEaseOut)}}),t=n(11527),E=["className","type"],f=["className","type"],i=(0,C.forwardRef)(function(o,d){var r=o.className,_=o.type,D=_===void 0?"ghost":_,T=g()(o,E),c=s(),m=c.styles,j=c.cx;return(0,t.jsx)(p.Z,u()({className:j(m.input,D==="block"&&m.block,r),ref:d},T))}),I=(0,C.memo)((0,C.forwardRef)(function(o,d){var r=o.className,_=o.type,D=_===void 0?"ghost":_,T=g()(o,f),c=s(),m=c.styles,j=c.cx;return(0,t.jsx)(p.Z.TextArea,u()({className:j(m.textarea,D==="block"&&m.block,r),ref:d},T))}))}}]);
