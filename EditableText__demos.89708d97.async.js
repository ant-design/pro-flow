(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[620],{946:function(m,_,n){"use strict";n.d(_,{Z:function(){return C}});var t=n(31966),a=n(50959),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},O=D,f=n(86793),v=function(o,e){return a.createElement(f.Z,(0,t.Z)({},o,{ref:e,icon:O}))},C=a.forwardRef(v)},43583:function(m,_,n){"use strict";n.r(_);var t=n(85063),a=n(11527);_.default=function(){return(0,a.jsx)(t.Z,{value:"editable text"})}},83181:function(m,_,n){"use strict";n.d(_,{F:function(){return b}});var t=n(57213),a=n.n(t),D=n(54306),O=n.n(D),f=n(12342),v=n.n(f),C=n(43233),s=n(63392),o=n(50959),e=n(11527),x=["value","onChange","onValueChanging","onChangeEnd"],b=(0,o.memo)(function(d){var r=d.value,P=d.onChange,g=d.onValueChanging,c=d.onChangeEnd,k=v()(d,x),l=r||"",E=(0,o.useState)(l),u=O()(E,2),i=u[0],M=u[1],I=(0,o.useRef)(null),h=(0,o.useRef)(!1),p=(0,o.useRef)(!1),T=(0,o.useCallback)(function(){P==null||P(i)},[i]);return(0,o.useEffect)(function(){typeof r!="undefined"&&M(r)},[r]),(0,e.jsx)(s.I,a()(a()({ref:I},k),{},{value:i,onCompositionStart:function(){h.current=!0},onCompositionEnd:function(){h.current=!1},onFocus:function(){p.current=!0},onBlur:function(){p.current=!1,c==null||c(i)},onChange:function(y){M(y.target.value),g==null||g(y.target.value)},onPressEnter:function(y){!y.shiftKey&&!h.current&&(y.preventDefault(),T(),p.current=!1,c==null||c(i))},suffix:r===i?(0,e.jsx)("span",{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(C.ZP,{type:"link",size:"small",onClick:function(){M(r)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,e.jsx)(C.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){T()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},85063:function(m,_,n){"use strict";var t=n(54306),a=n.n(t),D=n(946),O=n(19918),f=n(50959),v=n(84817),C=n(83181),s=n(11527),o=(0,f.memo)(function(e){var x=e.value,b=e.onChange,d=(0,f.useState)(!1),r=a()(d,2),P=r[0],g=r[1];return P?(0,s.jsx)(C.F,{onChange:b,onChangeEnd:function(){g(!1)},value:x}):(0,s.jsxs)(v.D,{gap:8,horizontal:!0,children:[x,(0,s.jsx)(O.Z,{icon:(0,s.jsx)(D.Z,{}),onClick:function(){g(!P)},placement:"right",title:"Edit"})]})});_.Z=o},63392:function(m,_,n){"use strict";n.d(_,{I:function(){return c},K:function(){return k}});var t=n(57213),a=n.n(t),D=n(12342),O=n.n(D),f=n(81186),v=n(50959),C=n(92935),s=n.n(C),o=n(78009),e,x,b,d=(0,o.kc)(function(l){var E=l.css,u=l.token;return{input:E(e||(e=s()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),u.motionEaseOut),block:E(x||(x=s()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),u.colorFillTertiary,u.colorFillQuaternary),textarea:E(b||(b=s()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),u.motionEaseOut)}}),r=n(11527),P=["className","type"],g=["className","type"],c=(0,v.forwardRef)(function(l,E){var u=l.className,i=l.type,M=i===void 0?"ghost":i,I=O()(l,P),h=d(),p=h.styles,T=h.cx;return(0,r.jsx)(f.Z,a()({className:T(p.input,M==="block"&&p.block,u),ref:E},I))}),k=(0,v.memo)((0,v.forwardRef)(function(l,E){var u=l.className,i=l.type,M=i===void 0?"ghost":i,I=O()(l,g),h=d(),p=h.styles,T=h.cx;return(0,r.jsx)(f.Z.TextArea,a()({className:T(p.textarea,M==="block"&&p.block,u),ref:E},I))}))},92935:function(m){function _(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}m.exports=_,m.exports.__esModule=!0,m.exports.default=m.exports}}]);
