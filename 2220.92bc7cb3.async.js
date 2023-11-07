"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2220],{51266:function(S,y,e){e.d(y,{Z:function(){return T}});var j=e(97605),v=e(50959),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},E=O,x=e(89011),u=function(h,d){return v.createElement(x.Z,(0,j.Z)({},h,{ref:d,icon:E}))},T=v.forwardRef(u)},52220:function(S,y,e){e.r(y);var j=e(47593),v=e(75830),O=e(50959),E=e(11527),x=(0,O.memo)(function(){return(0,E.jsxs)(j.Z.Preview,{title:"\u8F93\u51FA",children:[(0,E.jsx)(v.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,E.jsx)(v.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});y.default=x},62434:function(S,y,e){e.d(y,{iq:function(){return o},oR:function(){return B},AC:function(){return c}});var j=e(67855),v=e.n(j),O=e(50959),E=e(79023),x=e(7231);const{useDebugValue:u}=O,{useSyncExternalStoreWithSelector:T}=x;let p=!1;function h(n,r=n.getState,l){l&&!p&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),p=!0);const s=T(n.subscribe,n.getState,n.getServerState||n.getState,r,l);return u(s),s}const d=n=>{typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const r=typeof n=="function"?(0,E.M)(n):n,l=(s,P)=>h(r,s,P);return Object.assign(l,r),l},b=n=>n?d(n):d;var A=n=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),b(n)),C=e(63139),i=e(21109),f=e(11527),a=function(r){var l=r.collapsedKeys,s=r.onCollapsedKeysChange;return b(function(P,t){return{collapsedKeys:l!=null?l:[],onCollapsedKeysChange:s,toggleCollapsedKey:function(K){var R,L,I=[];t().collapsedKeys.includes(K)?I=t().collapsedKeys.filter(function(N){return N!==K}):I=[].concat(v()(t().collapsedKeys),[K]),P({collapsedKeys:I}),(R=(L=t()).onCollapsedKeysChange)===null||R===void 0||R.call(L,I)}}})},m=(0,C.k)(),B=m.useStore,c=m.useStoreApi,M=m.Provider,g=(0,O.memo)(function(n){var r=n.collapsedKeys,l=c(),s=(0,i.N)(l);return s("collapsedKeys",r),null}),o=(0,O.memo)(function(n){var r=n.children,l=n.defaultCollapsedKeys,s=n.onCollapsedKeysChange,P=n.collapsedKeys;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(M,{createStore:function(){return a({collapsedKeys:l,onCollapsedKeysChange:s})},children:[r,(0,f.jsx)(g,{collapsedKeys:P})]})})})},47593:function(S,y,e){var j=e(77117),v=e.n(j),O=e(95530),E=e.n(O),x=e(18840),u=e.n(x),T=e(11299),p=e(91229),h=e(61380),d=e(50959),b=e(97339),A=e(80907),C=e(62434),i=e(11527),f=["id","onTitleChange","onCollapsedKeysChange"],a,m,B=(0,h.kc)(function(o){var n=o.css,r=o.token,l=o.prefixCls;return{container:n(a||(a=u()([`
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
  `])),r.colorBorder,l),selected:n(m||(m=u()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),r.colorPrimary)}}),c=(0,d.memo)(function(o){var n=o.active,r=o.collapsedKeys,l=o.onCollapsedKeysChange,s=o.onTitleChange,P=o.style,t=o.className,_=o.title,K=o.children,R=o.extra,L=B(),I=L.styles,N=L.cx,w=(0,d.useRef)(null);return(0,i.jsx)(T.ZP,{getPopupContainer:function(){return w.current||document.body},children:(0,i.jsx)(C.iq,{collapsedKeys:r,onCollapsedKeysChange:l,children:(0,i.jsx)(p.Z,{ref:w,title:(0,i.jsx)(b.Z,{onChange:s,value:_||"\u57FA\u7840\u8282\u70B9"}),className:N(I.container,n&&I.selected,t),extra:R,style:P,children:K})})})}),M=(0,d.memo)(function(o){var n=o.id,r=o.onTitleChange,l=o.onCollapsedKeysChange,s=E()(o,f),P=(0,A.d)();return(0,i.jsx)(c,v()({onTitleChange:function(_){P.updateNodeMeta(n,"title",_),r==null||r(_)},onCollapsedKeysChange:function(_){P.updateNodeState(n,"collapsedKeys",_),l==null||l(_)}},s))}),g=M;g.Preview=c,y.Z=g},46157:function(S,y,e){e.d(y,{F:function(){return A}});var j=e(77117),v=e.n(j),O=e(28152),E=e.n(O),x=e(95530),u=e.n(x),T=e(61128),p=e(42498),h=e(50959),d=e(11527),b=["value","onChange","onValueChanging","onChangeEnd"],A=(0,h.memo)(function(C){var i=C.value,f=C.onChange,a=C.onValueChanging,m=C.onChangeEnd,B=u()(C,b),c=i||"",M=(0,h.useState)(c),g=E()(M,2),o=g[0],n=g[1],r=(0,h.useRef)(null),l=(0,h.useRef)(!1),s=(0,h.useRef)(!1),P=(0,h.useCallback)(function(){f==null||f(o)},[o]);return(0,h.useEffect)(function(){typeof i!="undefined"&&n(i)},[i]),(0,d.jsx)(p.I,v()(v()({ref:r},B),{},{value:o,onCompositionStart:function(){l.current=!0},onCompositionEnd:function(){l.current=!1},onFocus:function(){s.current=!0},onBlur:function(){s.current=!1,m==null||m(o)},onChange:function(_){n(_.target.value),a==null||a(_.target.value)},onPressEnter:function(_){!_.shiftKey&&!l.current&&(_.preventDefault(),P(),s.current=!1,m==null||m(o))},suffix:i===o?(0,d.jsx)("span",{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(T.ZP,{type:"link",size:"small",onClick:function(){n(i)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,d.jsx)(T.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){P()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},97339:function(S,y,e){var j=e(28152),v=e.n(j),O=e(51266),E=e(58863),x=e(50959),u=e(24819),T=e(46157),p=e(11527),h=(0,x.memo)(function(d){var b=d.value,A=d.onChange,C=(0,x.useState)(!1),i=v()(C,2),f=i[0],a=i[1];return f?(0,p.jsx)(T.F,{onChange:A,onChangeEnd:function(){a(!1)},value:b}):(0,p.jsxs)(u.D,{gap:8,align:"center",horizontal:!0,children:[(0,p.jsx)("span",{style:{lineHeight:1},children:b}),(0,p.jsx)(E.Z,{icon:(0,p.jsx)(O.Z,{}),onClick:function(){a(!f)},placement:"right",title:"Edit"})]})});y.Z=h},42498:function(S,y,e){e.d(y,{I:function(){return m},K:function(){return B}});var j=e(77117),v=e.n(j),O=e(95530),E=e.n(O),x=e(68049),u=e(50959),T=e(18840),p=e.n(T),h=e(61380),d,b,A,C=(0,h.kc)(function(c){var M=c.css,g=c.token;return{input:M(d||(d=p()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),g.motionEaseOut),block:M(b||(b=p()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),g.colorFillTertiary,g.colorFillQuaternary),textarea:M(A||(A=p()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),g.motionEaseOut)}}),i=e(11527),f=["className","type"],a=["className","type"],m=(0,u.forwardRef)(function(c,M){var g=c.className,o=c.type,n=o===void 0?"ghost":o,r=E()(c,f),l=C(),s=l.styles,P=l.cx;return(0,i.jsx)(x.Z,v()({className:P(s.input,n==="block"&&s.block,g),ref:M},r))}),B=(0,u.memo)((0,u.forwardRef)(function(c,M){var g=c.className,o=c.type,n=o===void 0?"ghost":o,r=E()(c,a),l=C(),s=l.styles,P=l.cx;return(0,i.jsx)(x.Z.TextArea,v()({className:P(s.textarea,n==="block"&&s.block,g),ref:M},r))}))},75830:function(S,y,e){e.d(y,{Q:function(){return P}});var j=e(77117),v=e.n(j),O=e(28152),E=e.n(O),x=e(18840),u=e.n(x),T=e(64885),p=e(58863),h=e(11299),d=e(61380),b=e(50959),A=e(24819),C=e(78910),i=e(93251),f=e(62434),a=e(11527),m,B,c,M,g,o,n="editor-field-item",r=(0,d.kc)(function(t){var _=t.css,K=t.token,R=t.cx,L=_(m||(m=u()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),K.colorBgElevated,K.colorPrimary);return{title:R("".concat(n,"-title"),_(B||(B=u()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),K.colorText)),extra:R(_(c||(c=u()([`
        position: relative;
      `])))),value:_(M||(M=u()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),K.colorBgLayout),handle:L,handleRight:_(g||(g=u()([`
      `,`;
      right: -35px;
    `])),L),handleLeft:_(o||(o=u()([`
      `,`;
      left: -35px;
    `])),L)}}),l=(0,b.memo)(function(t){var _=t.children,K=t.title,R=t.extra,L=t.collapsed,I=t.onCollapsedChange,N=t.valueContainer,w=t.classNames,W=w===void 0?{}:w,Q=t.handles,D=Q===void 0?{}:Q,F=t.id,Y=t.className,k=t.style,V=r(),Z=V.styles,q=V.theme,z=V.cx,ee=(0,f.oR)(function(U){return[U.collapsedKeys,U.toggleCollapsedKey]}),G=E()(ee,2),J=G[0],ne=G[1],oe=(0,i.Z)(J.includes(F),{value:typeof L=="undefined"?J.includes(F):L,onChange:function($){ne(F),I==null||I($)}}),X=E()(oe,2),H=X[0],te=X[1];return(0,a.jsxs)(A.D,{gap:12,className:z("".concat(n,"-container"),Y),style:k,children:[K&&(0,a.jsxs)(A.D,{horizontal:!0,distribution:"space-between",align:"center",className:z("".concat(n,"-header"),W==null?void 0:W.header),children:[(0,a.jsxs)(A.D,{className:z(Z.title,W==null?void 0:W.title),children:[!!(D!=null&&D.source)&&(0,a.jsx)(C.HH,{id:typeof(D==null?void 0:D.source)=="string"?D==null?void 0:D.source:F,type:"target",position:C.Ly.Left,className:Z.handleLeft}),K]}),(0,a.jsxs)(A.D,{horizontal:!0,gap:4,className:z(Z.extra,"".concat(n,"-extra"),W==null?void 0:W.extra,"nodrag"),children:[(0,a.jsxs)(h.ZP,{theme:{token:{colorText:q.colorTextSecondary}},children:[H?null:R&&R.map(function(U,$){return(0,a.jsx)(p.Z,{icon:U.icon,title:U.title,onClick:U.onClick},U.title||""+$)}),(0,a.jsx)(p.Z,{icon:(0,a.jsx)(T.Z,{rotate:H?-90:0}),title:H?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){te(!H)}})]}),!!(D!=null&&D.target)&&(0,a.jsx)(C.HH,{id:typeof(D==null?void 0:D.target)=="string"?D==null?void 0:D.target:F,type:"source",position:C.Ly.Right,className:Z.handleRight})]})]}),H?null:_&&N===!1?_:(0,a.jsx)("div",{className:z(Z.value,W.value),children:_})]})}),s=function(_){var K=_.children,R=!0,L=(0,a.jsx)(a.Fragment,{children:K});try{(0,f.AC)()}catch(I){R=!1}return R?L:(0,a.jsx)(f.iq,{children:K})},P=(0,b.memo)(function(t){return(0,a.jsx)(s,{children:(0,a.jsx)(l,v()({},t))})})}}]);
