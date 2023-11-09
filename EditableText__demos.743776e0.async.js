(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5620],{75689:function(e,l,n){"use strict";n.d(l,{Z:function(){return d}});var t=n(97605),o=n(50959),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},_=a,r=n(89011),s=function(c,i){return o.createElement(r.Z,(0,t.Z)({},c,{ref:i,icon:_}))},d=o.forwardRef(s)},66099:function(e,l,n){"use strict";n.r(l);var t=n(98516),o=n(11527);l.default=function(){return(0,o.jsx)(t.Z,{value:"editable text"})}},62541:function(e,l,n){"use strict";n.d(l,{F:function(){return M}});var t=n(77117),o=n.n(t),a=n(28152),_=n.n(a),r=n(95530),s=n.n(r),d=n(61128),u=n(90776),c=n(50959),i=n(11527),b=["value","onChange","onValueChanging","onChangeEnd"],M=(0,c.memo)(function(E){var p=E.value,P=E.onChange,C=E.onValueChanging,h=E.onChangeEnd,L=s()(E,b),f=p||"",O=(0,c.useState)(f),m=_()(O,2),v=m[0],j=m[1],T=(0,c.useRef)(null),g=(0,c.useRef)(!1),x=(0,c.useRef)(!1),y=(0,c.useCallback)(function(){P==null||P(v)},[v]);return(0,c.useEffect)(function(){typeof p!="undefined"&&j(p)},[p]),(0,i.jsx)(u.I,o()(o()({ref:T},L),{},{value:v,onCompositionStart:function(){g.current=!0},onCompositionEnd:function(){g.current=!1},onFocus:function(){x.current=!0},onBlur:function(){x.current=!1,h==null||h(v)},onChange:function(I){j(I.target.value),C==null||C(I.target.value)},onPressEnter:function(I){!I.shiftKey&&!g.current&&(I.preventDefault(),y(),x.current=!1,h==null||h(v))},suffix:p===v?(0,i.jsx)("span",{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.ZP,{type:"link",size:"small",onClick:function(){j(p)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,i.jsx)(d.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){y()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},98516:function(e,l,n){"use strict";var t=n(28152),o=n.n(t),a=n(75689),_=n(93083),r=n(50959),s=n(24819),d=n(62541),u=n(11527),c=(0,r.memo)(function(i){var b=i.value,M=i.onChange,E=(0,r.useState)(!1),p=o()(E,2),P=p[0],C=p[1];return P?(0,u.jsx)(d.F,{onChange:M,onChangeEnd:function(){C(!1)},value:b}):(0,u.jsxs)(s.D,{gap:8,align:"center",horizontal:!0,children:[(0,u.jsx)("span",{style:{lineHeight:1},children:b}),(0,u.jsx)(_.Z,{icon:(0,u.jsx)(a.Z,{}),onClick:function(){C(!P)},placement:"right",title:"Edit"})]})});l.Z=c},90776:function(e,l,n){"use strict";n.d(l,{I:function(){return h},K:function(){return L}});var t=n(77117),o=n.n(t),a=n(95530),_=n.n(a),r=n(21717),s=n(50959),d=n(18840),u=n.n(d),c=n(70123),i,b,M,E=(0,c.kc)(function(f){var O=f.css,m=f.token;return{input:O(i||(i=u()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),m.motionEaseOut),block:O(b||(b=u()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),m.colorFillTertiary,m.colorFillQuaternary),textarea:O(M||(M=u()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),m.motionEaseOut)}}),p=n(11527),P=["className","type"],C=["className","type"],h=(0,s.forwardRef)(function(f,O){var m=f.className,v=f.type,j=v===void 0?"ghost":v,T=_()(f,P),g=E(),x=g.styles,y=g.cx;return(0,p.jsx)(r.Z,o()({className:y(x.input,j==="block"&&x.block,m),ref:O},T))}),L=(0,s.memo)((0,s.forwardRef)(function(f,O){var m=f.className,v=f.type,j=v===void 0?"ghost":v,T=_()(f,C),g=E(),x=g.styles,y=g.cx;return(0,p.jsx)(r.Z.TextArea,o()({className:y(x.textarea,j==="block"&&x.block,m),ref:O},T))}))},95530:function(e,l,n){var t=n(70285);function o(a,_){if(a==null)return{};var r=t(a,_),s,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(d=0;d<u.length;d++)s=u[d],!(_.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(r[s]=a[s])}return r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},70285:function(e){function l(n,t){if(n==null)return{};var o={},a=Object.keys(n),_,r;for(r=0;r<a.length;r++)_=a[r],!(t.indexOf(_)>=0)&&(o[_]=n[_]);return o}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},18840:function(e){function l(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
