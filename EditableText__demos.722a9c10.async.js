(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[620],{92223:function(m,a,n){"use strict";n.d(a,{Z:function(){return g}});var t=n(88028),_=n(50959),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},O=D,f=n(89011),p=function(o,e){return _.createElement(f.Z,(0,t.Z)({},o,{ref:e,icon:O}))},g=_.forwardRef(p)},33031:function(m,a,n){"use strict";n.r(a);var t=n(4316),_=n(11527);a.default=function(){return(0,_.jsx)(t.Z,{value:"editable text"})}},2112:function(m,a,n){"use strict";n.d(a,{F:function(){return b}});var t=n(57213),_=n.n(t),D=n(54306),O=n.n(D),f=n(12342),p=n.n(f),g=n(68921),r=n(70960),o=n(50959),e=n(11527),x=["value","onChange","onValueChanging","onChangeEnd"],b=(0,o.memo)(function(d){var l=d.value,C=d.onChange,P=d.onValueChanging,c=d.onChangeEnd,A=p()(d,x),s=l||"",v=(0,o.useState)(s),i=O()(v,2),u=i[0],M=i[1],y=(0,o.useRef)(null),E=(0,o.useRef)(!1),h=(0,o.useRef)(!1),T=(0,o.useCallback)(function(){C==null||C(u)},[u]);return(0,o.useEffect)(function(){typeof l!="undefined"&&M(l)},[l]),(0,e.jsx)(r.I,_()(_()({ref:y},A),{},{value:u,onCompositionStart:function(){E.current=!0},onCompositionEnd:function(){E.current=!1},onFocus:function(){h.current=!0},onBlur:function(){h.current=!1,c==null||c(u)},onChange:function(I){M(I.target.value),P==null||P(I.target.value)},onPressEnter:function(I){!I.shiftKey&&!E.current&&(I.preventDefault(),T(),h.current=!1,c==null||c(u))},suffix:l===u?(0,e.jsx)("span",{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g.ZP,{type:"link",size:"small",onClick:function(){M(l)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,e.jsx)(g.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){T()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},4316:function(m,a,n){"use strict";var t=n(54306),_=n.n(t),D=n(92223),O=n(44006),f=n(50959),p=n(24819),g=n(2112),r=n(11527),o=(0,f.memo)(function(e){var x=e.value,b=e.onChange,d=(0,f.useState)(!1),l=_()(d,2),C=l[0],P=l[1];return C?(0,r.jsx)(g.F,{onChange:b,onChangeEnd:function(){P(!1)},value:x}):(0,r.jsxs)(p.D,{gap:8,align:"center",horizontal:!0,children:[(0,r.jsx)("span",{style:{lineHeight:1},children:x}),(0,r.jsx)(O.Z,{icon:(0,r.jsx)(D.Z,{}),onClick:function(){P(!C)},placement:"right",title:"Edit"})]})});a.Z=o},70960:function(m,a,n){"use strict";n.d(a,{I:function(){return c},K:function(){return A}});var t=n(57213),_=n.n(t),D=n(12342),O=n.n(D),f=n(87307),p=n(50959),g=n(92935),r=n.n(g),o=n(65074),e,x,b,d=(0,o.kc)(function(s){var v=s.css,i=s.token;return{input:v(e||(e=r()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),i.motionEaseOut),block:v(x||(x=r()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),i.colorFillTertiary,i.colorFillQuaternary),textarea:v(b||(b=r()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),i.motionEaseOut)}}),l=n(11527),C=["className","type"],P=["className","type"],c=(0,p.forwardRef)(function(s,v){var i=s.className,u=s.type,M=u===void 0?"ghost":u,y=O()(s,C),E=d(),h=E.styles,T=E.cx;return(0,l.jsx)(f.Z,_()({className:T(h.input,M==="block"&&h.block,i),ref:v},y))}),A=(0,p.memo)((0,p.forwardRef)(function(s,v){var i=s.className,u=s.type,M=u===void 0?"ghost":u,y=O()(s,P),E=d(),h=E.styles,T=E.cx;return(0,l.jsx)(f.Z.TextArea,_()({className:T(h.textarea,M==="block"&&h.block,i),ref:v},y))}))},92935:function(m){function a(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}m.exports=a,m.exports.__esModule=!0,m.exports.default=m.exports}}]);
