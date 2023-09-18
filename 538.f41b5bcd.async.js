"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[538],{45777:function(S,x,e){e.d(x,{Z:function(){return T}});var b=e(28957),m=e(50959),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},v=D,O=e(89011),i=function(c,d){return m.createElement(O.Z,(0,b.Z)({},c,{ref:d,icon:v}))},T=m.forwardRef(i)},61538:function(S,x,e){e.r(x);var b=e(4311),m=e(35782),D=e(50959),v=e(11527),O=(0,D.memo)(function(){return(0,v.jsxs)(b.Z.Preview,{title:"\u8F93\u51FA",children:[(0,v.jsx)(m.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,v.jsx)(m.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});x.default=O},7868:function(S,x,e){e.d(x,{iq:function(){return C},oR:function(){return g},AC:function(){return I}});var b=e(93525),m=e.n(b),D=e(50959),v=e(67745),O=e(7231);const{useSyncExternalStoreWithSelector:i}=O;let T=!1;function E(n,t=n.getState,a){a&&!T&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),T=!0);const r=i(n.subscribe,n.getState,n.getServerState||n.getState,t,a);return(0,D.useDebugValue)(r),r}const c=n=>{typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof n=="function"?(0,v.M)(n):n,a=(r,u)=>E(t,r,u);return Object.assign(a,t),a},d=n=>n?c(n):c;var R=n=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),d(n)),A=e(6627),h=e(37870),s=e(11527),y=function(t){var a=t.collapsedKeys,r=t.onCollapsedKeysChange;return d(function(u,f){return{collapsedKeys:a!=null?a:[],onCollapsedKeysChange:r,toggleCollapsedKey:function(_){var K,L,j=[];f().collapsedKeys.includes(_)?j=f().collapsedKeys.filter(function(B){return B!==_}):j=[].concat(m()(f().collapsedKeys),[_]),u({collapsedKeys:j}),(K=(L=f()).onCollapsedKeysChange)===null||K===void 0||K.call(L,j)}}})},o=(0,A.k)(),g=o.useStore,I=o.useStoreApi,p=o.Provider,M=(0,D.memo)(function(n){var t=n.collapsedKeys,a=I(),r=(0,h.N)(a);return r("collapsedKeys",t),null}),C=(0,D.memo)(function(n){var t=n.children,a=n.defaultCollapsedKeys,r=n.onCollapsedKeysChange,u=n.collapsedKeys;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(p,{createStore:function(){return y({collapsedKeys:a,onCollapsedKeysChange:r})},children:[t,(0,s.jsx)(M,{collapsedKeys:u})]})})})},4311:function(S,x,e){var b=e(57213),m=e.n(b),D=e(12342),v=e.n(D),O=e(92935),i=e.n(O),T=e(59680),E=e(78326),c=e(33024),d=e(50959),R=e(54856),A=e(72184),h=e(7868),s=e(11527),y=["id","onTitleChange","onCollapsedKeysChange"],o,g,I=(0,c.kc)(function(n){var t=n.css,a=n.token,r=n.prefixCls;return{container:t(o||(o=i()([`
    will-change: transform;
    width: 100%;
    max-width: 600px;
    border: 1px solid `,`;
    border-radius: 12px;
    .`,`-card-head {
      padding-right: 16px;
    }

    .editor-field-item-container:not(:last-child) {
      margin-bottom: 24px;
    }
  `])),a.colorBorder,r),selected:t(g||(g=i()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),a.colorPrimary)}}),p=(0,d.memo)(function(n){var t=n.active,a=n.collapsedKeys,r=n.onCollapsedKeysChange,u=n.onTitleChange,f=n.style,l=n.className,_=n.title,K=n.children,L=n.extra,j=I(),B=j.styles,H=j.cx,N=(0,d.useRef)(null);return(0,s.jsx)(T.ZP,{getPopupContainer:function(){return N.current||document.body},children:(0,s.jsx)(h.iq,{collapsedKeys:a,onCollapsedKeysChange:r,children:(0,s.jsx)(E.Z,{ref:N,title:(0,s.jsx)(R.Z,{onChange:u,value:_||"\u57FA\u7840\u8282\u70B9"}),className:H(B.container,t&&B.selected,l),extra:L,style:f,children:K})})})}),M=(0,d.memo)(function(n){var t=n.id,a=n.onTitleChange,r=n.onCollapsedKeysChange,u=v()(n,y),f=(0,A.d)();return(0,s.jsx)(p,m()({onTitleChange:function(_){f.updateNodeMeta(t,"title",_),a==null||a(_)},onCollapsedKeysChange:function(_){f.updateNodeState(t,"collapsedKeys",_),r==null||r(_)}},u))}),C=M;C.Preview=p,x.Z=C},31534:function(S,x,e){e.d(x,{F:function(){return A}});var b=e(57213),m=e.n(b),D=e(54306),v=e.n(D),O=e(12342),i=e.n(O),T=e(28914),E=e(89079),c=e(50959),d=e(11527),R=["value","onChange","onValueChanging","onChangeEnd"],A=(0,c.memo)(function(h){var s=h.value,y=h.onChange,o=h.onValueChanging,g=h.onChangeEnd,I=i()(h,R),p=s||"",M=(0,c.useState)(p),C=v()(M,2),n=C[0],t=C[1],a=(0,c.useRef)(null),r=(0,c.useRef)(!1),u=(0,c.useRef)(!1),f=(0,c.useCallback)(function(){y==null||y(n)},[n]);return(0,c.useEffect)(function(){typeof s!="undefined"&&t(s)},[s]),(0,d.jsx)(E.I,m()(m()({ref:a},I),{},{value:n,onCompositionStart:function(){r.current=!0},onCompositionEnd:function(){r.current=!1},onFocus:function(){u.current=!0},onBlur:function(){u.current=!1,g==null||g(n)},onChange:function(_){t(_.target.value),o==null||o(_.target.value)},onPressEnter:function(_){!_.shiftKey&&!r.current&&(_.preventDefault(),f(),u.current=!1,g==null||g(n))},suffix:s===n?(0,d.jsx)("span",{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(T.ZP,{type:"link",size:"small",onClick:function(){t(s)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,d.jsx)(T.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){f()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},54856:function(S,x,e){var b=e(54306),m=e.n(b),D=e(45777),v=e(85714),O=e(50959),i=e(79111),T=e(31534),E=e(11527),c=(0,O.memo)(function(d){var R=d.value,A=d.onChange,h=(0,O.useState)(!1),s=m()(h,2),y=s[0],o=s[1];return y?(0,E.jsx)(T.F,{onChange:A,onChangeEnd:function(){o(!1)},value:R}):(0,E.jsxs)(i.D,{gap:8,align:"center",horizontal:!0,children:[(0,E.jsx)("span",{style:{lineHeight:1},children:R}),(0,E.jsx)(v.Z,{icon:(0,E.jsx)(D.Z,{}),onClick:function(){o(!y)},placement:"right",title:"Edit"})]})});x.Z=c},89079:function(S,x,e){e.d(x,{I:function(){return g},K:function(){return I}});var b=e(57213),m=e.n(b),D=e(12342),v=e.n(D),O=e(31813),i=e(50959),T=e(92935),E=e.n(T),c=e(33024),d,R,A,h=(0,c.kc)(function(p){var M=p.css,C=p.token;return{input:M(d||(d=E()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),C.motionEaseOut),block:M(R||(R=E()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),C.colorFillTertiary,C.colorFillQuaternary),textarea:M(A||(A=E()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),C.motionEaseOut)}}),s=e(11527),y=["className","type"],o=["className","type"],g=(0,i.forwardRef)(function(p,M){var C=p.className,n=p.type,t=n===void 0?"ghost":n,a=v()(p,y),r=h(),u=r.styles,f=r.cx;return(0,s.jsx)(O.Z,m()({className:f(u.input,t==="block"&&u.block,C),ref:M},a))}),I=(0,i.memo)((0,i.forwardRef)(function(p,M){var C=p.className,n=p.type,t=n===void 0?"ghost":n,a=v()(p,o),r=h(),u=r.styles,f=r.cx;return(0,s.jsx)(O.Z.TextArea,m()({className:f(u.textarea,t==="block"&&u.block,C),ref:M},a))}))},35782:function(S,x,e){e.d(x,{Q:function(){return f}});var b=e(57213),m=e.n(b),D=e(54306),v=e.n(D),O=e(92935),i=e.n(O),T=e(58991),E=e(85714),c=e(59680),d=e(33024),R=e(50959),A=e(79111),h=e(22673),s=e(93251),y=e(7868),o=e(11527),g,I,p,M,C,n,t="editor-field-item",a=(0,d.kc)(function(l){var _=l.css,K=l.token,L=l.cx,j=_(g||(g=i()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),K.colorBgElevated,K.colorPrimary);return{title:L("".concat(t,"-title"),_(I||(I=i()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),K.colorText)),extra:L(_(p||(p=i()([`
        position: relative;
      `])))),value:_(M||(M=i()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),K.colorBgLayout),handle:j,handleRight:_(C||(C=i()([`
      `,`;
      right: -35px;
    `])),j),handleLeft:_(n||(n=i()([`
      `,`;
      left: -35px;
    `])),j)}}),r=(0,R.memo)(function(l){var _=l.children,K=l.title,L=l.extra,j=l.collapsed,B=l.onCollapsedChange,H=l.valueContainer,N=l.classNames,W=N===void 0?{}:N,Q=l.handles,P=Q===void 0?{}:Q,w=l.id,Y=l.className,k=l.style,V=a(),F=V.styles,q=V.theme,Z=V.cx,ee=(0,y.oR)(function(U){return[U.collapsedKeys,U.toggleCollapsedKey]}),G=v()(ee,2),J=G[0],ne=G[1],oe=(0,s.Z)(J.includes(w),{value:typeof j=="undefined"?J.includes(w):j,onChange:function($){ne(w),B==null||B($)}}),X=v()(oe,2),z=X[0],te=X[1];return(0,o.jsxs)(A.D,{gap:12,className:Z("".concat(t,"-container"),Y),style:k,children:[K&&(0,o.jsxs)(A.D,{horizontal:!0,distribution:"space-between",align:"center",className:Z("".concat(t,"-header"),W==null?void 0:W.header),children:[(0,o.jsxs)(A.D,{className:Z(F.title,W==null?void 0:W.title),children:[!!(P!=null&&P.source)&&(0,o.jsx)(h.HH,{id:typeof(P==null?void 0:P.source)=="string"?P==null?void 0:P.source:w,type:"target",position:h.Ly.Left,className:F.handleLeft}),K]}),(0,o.jsxs)(A.D,{horizontal:!0,gap:4,className:Z(F.extra,"".concat(t,"-extra"),W==null?void 0:W.extra,"nodrag"),children:[(0,o.jsxs)(c.ZP,{theme:{token:{colorText:q.colorTextSecondary}},children:[z?null:L&&L.map(function(U,$){return(0,o.jsx)(E.Z,{icon:U.icon,title:U.title,onClick:U.onClick},U.title||""+$)}),(0,o.jsx)(E.Z,{icon:(0,o.jsx)(T.Z,{rotate:z?-90:0}),title:z?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){te(!z)}})]}),!!(P!=null&&P.target)&&(0,o.jsx)(h.HH,{id:typeof(P==null?void 0:P.target)=="string"?P==null?void 0:P.target:w,type:"source",position:h.Ly.Right,className:F.handleRight})]})]}),z?null:_&&H===!1?_:(0,o.jsx)("div",{className:Z(F.value,W.value),children:_})]})}),u=function(_){var K=_.children,L=!0,j=(0,o.jsx)(o.Fragment,{children:K});try{(0,y.AC)()}catch(B){L=!1}return L?j:(0,o.jsx)(y.iq,{children:K})},f=(0,R.memo)(function(l){return(0,o.jsx)(u,{children:(0,o.jsx)(r,m()({},l))})})}}]);
