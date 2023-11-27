"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2253],{51348:function(S,x,e){e.d(x,{Z:function(){return K}});var M=e(90359),u=e(50959),C={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"},p=C,f=e(89011),i=function(v,d){return u.createElement(f.Z,(0,M.Z)({},v,{ref:d,icon:p}))},K=u.forwardRef(i)},79548:function(S,x,e){e.d(x,{Z:function(){return K}});var M=e(90359),u=e(50959),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},p=C,f=e(89011),i=function(v,d){return u.createElement(f.Z,(0,M.Z)({},v,{ref:d,icon:p}))},K=u.forwardRef(i)},62253:function(S,x,e){e.r(x);var M=e(87475),u=e(90356),C=e(50959),p=e(11527),f=(0,C.memo)(function(){return(0,p.jsxs)(M.Z.Preview,{title:"\u8F93\u51FA",children:[(0,p.jsx)(u.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,p.jsx)(u.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});x.default=f},77750:function(S,x,e){e.d(x,{iq:function(){return o},oR:function(){return B},AC:function(){return E}});var M=e(67855),u=e.n(M),C=e(50959),p=e(19785),f=e(7231);const{useDebugValue:i}=C,{useSyncExternalStoreWithSelector:K}=f;let m=!1;function v(n,r=n.getState,l){l&&!m&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),m=!0);const _=K(n.subscribe,n.getState,n.getServerState||n.getState,r,l);return i(_),_}const d=n=>{typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const r=typeof n=="function"?(0,p.M)(n):n,l=(_,O)=>v(r,_,O);return Object.assign(l,r),l},T=n=>n?d(n):d;var A=n=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),T(n)),g=e(63139),c=e(21109),D=e(11527),a=function(r){var l=r.collapsedKeys,_=r.onCollapsedKeysChange;return T(function(O,t){return{collapsedKeys:l!=null?l:[],onCollapsedKeysChange:_,toggleCollapsedKey:function(b){var R,L,I=[];t().collapsedKeys.includes(b)?I=t().collapsedKeys.filter(function(w){return w!==b}):I=[].concat(u()(t().collapsedKeys),[b]),O({collapsedKeys:I}),(R=(L=t()).onCollapsedKeysChange)===null||R===void 0||R.call(L,I)}}})},h=(0,g.k)(),B=h.useStore,E=h.useStoreApi,j=h.Provider,P=(0,C.memo)(function(n){var r=n.collapsedKeys,l=E(),_=(0,c.N)(l);return _("collapsedKeys",r),null}),o=(0,C.memo)(function(n){var r=n.children,l=n.defaultCollapsedKeys,_=n.onCollapsedKeysChange,O=n.collapsedKeys;return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(j,{createStore:function(){return a({collapsedKeys:l,onCollapsedKeysChange:_})},children:[r,(0,D.jsx)(P,{collapsedKeys:O})]})})})},87475:function(S,x,e){var M=e(77117),u=e.n(M),C=e(95530),p=e.n(C),f=e(18840),i=e.n(f),K=e(72953),m=e(24803),v=e(3057),d=e(50959),T=e(1279),A=e(93399),g=e(77750),c=e(11527),D=["id","onTitleChange","onCollapsedKeysChange"],a,h,B=(0,v.kc)(function(o){var n=o.css,r=o.token,l=o.prefixCls;return{container:n(a||(a=i()([`
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
  `])),r.colorBorder,l),selected:n(h||(h=i()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),r.colorPrimary)}}),E=(0,d.memo)(function(o){var n=o.active,r=o.collapsedKeys,l=o.onCollapsedKeysChange,_=o.onTitleChange,O=o.style,t=o.className,s=o.title,b=o.children,R=o.extra,L=B(),I=L.styles,w=L.cx,N=(0,d.useRef)(null);return(0,c.jsx)(K.ZP,{getPopupContainer:function(){return N.current||document.body},children:(0,c.jsx)(g.iq,{collapsedKeys:r,onCollapsedKeysChange:l,children:(0,c.jsx)(m.Z,{ref:N,title:(0,c.jsx)(T.Z,{onChange:_,value:s||"\u57FA\u7840\u8282\u70B9"}),className:w(I.container,n&&I.selected,t),extra:R,style:O,children:b})})})}),j=(0,d.memo)(function(o){var n=o.id,r=o.onTitleChange,l=o.onCollapsedKeysChange,_=p()(o,D),O=(0,A.d)();return(0,c.jsx)(E,u()({onTitleChange:function(s){O.updateNodeMeta(n,"title",s),r==null||r(s)},onCollapsedKeysChange:function(s){O.updateNodeState(n,"collapsedKeys",s),l==null||l(s)}},_))}),P=j;P.Preview=E,x.Z=P},16806:function(S,x,e){e.d(x,{F:function(){return A}});var M=e(77117),u=e.n(M),C=e(28152),p=e.n(C),f=e(95530),i=e.n(f),K=e(72714),m=e(99238),v=e(50959),d=e(11527),T=["value","onChange","onValueChanging","onChangeEnd"],A=(0,v.memo)(function(g){var c=g.value,D=g.onChange,a=g.onValueChanging,h=g.onChangeEnd,B=i()(g,T),E=c||"",j=(0,v.useState)(E),P=p()(j,2),o=P[0],n=P[1],r=(0,v.useRef)(null),l=(0,v.useRef)(!1),_=(0,v.useRef)(!1),O=(0,v.useCallback)(function(){D==null||D(o)},[o]);return(0,v.useEffect)(function(){typeof c!="undefined"&&n(c)},[c]),(0,d.jsx)(m.I,u()(u()({ref:r},B),{},{value:o,onCompositionStart:function(){l.current=!0},onCompositionEnd:function(){l.current=!1},onFocus:function(){_.current=!0},onBlur:function(){_.current=!1,h==null||h(o)},onChange:function(s){n(s.target.value),a==null||a(s.target.value)},onPressEnter:function(s){!s.shiftKey&&!l.current&&(s.preventDefault(),O(),_.current=!1,h==null||h(o))},suffix:c===o?(0,d.jsx)("span",{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(K.ZP,{type:"link",size:"small",onClick:function(){n(c)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,d.jsx)(K.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){O()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},1279:function(S,x,e){var M=e(28152),u=e.n(M),C=e(79548),p=e(83817),f=e(50959),i=e(24819),K=e(16806),m=e(11527),v=(0,f.memo)(function(d){var T=d.value,A=d.onChange,g=(0,f.useState)(!1),c=u()(g,2),D=c[0],a=c[1];return D?(0,m.jsx)(K.F,{onChange:A,onChangeEnd:function(){a(!1)},value:T}):(0,m.jsxs)(i.D,{gap:8,align:"center",horizontal:!0,children:[(0,m.jsx)("span",{style:{lineHeight:1},children:T}),(0,m.jsx)(p.Z,{icon:(0,m.jsx)(C.Z,{}),onClick:function(){a(!D)},placement:"right",title:"Edit"})]})});x.Z=v},99238:function(S,x,e){e.d(x,{I:function(){return h},K:function(){return B}});var M=e(77117),u=e.n(M),C=e(95530),p=e.n(C),f=e(39819),i=e(50959),K=e(18840),m=e.n(K),v=e(3057),d,T,A,g=(0,v.kc)(function(E){var j=E.css,P=E.token;return{input:j(d||(d=m()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),P.motionEaseOut),block:j(T||(T=m()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),P.colorFillTertiary,P.colorFillQuaternary),textarea:j(A||(A=m()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),P.motionEaseOut)}}),c=e(11527),D=["className","type"],a=["className","type"],h=(0,i.forwardRef)(function(E,j){var P=E.className,o=E.type,n=o===void 0?"ghost":o,r=p()(E,D),l=g(),_=l.styles,O=l.cx;return(0,c.jsx)(f.Z,u()({className:O(_.input,n==="block"&&_.block,P),ref:j},r))}),B=(0,i.memo)((0,i.forwardRef)(function(E,j){var P=E.className,o=E.type,n=o===void 0?"ghost":o,r=p()(E,a),l=g(),_=l.styles,O=l.cx;return(0,c.jsx)(f.Z.TextArea,u()({className:O(_.textarea,n==="block"&&_.block,P),ref:j},r))}))},90356:function(S,x,e){e.d(x,{Q:function(){return O}});var M=e(77117),u=e.n(M),C=e(28152),p=e.n(C),f=e(18840),i=e.n(f),K=e(51348),m=e(83817),v=e(72953),d=e(3057),T=e(50959),A=e(24819),g=e(50296),c=e(93251),D=e(77750),a=e(11527),h,B,E,j,P,o,n="editor-field-item",r=(0,d.kc)(function(t){var s=t.css,b=t.token,R=t.cx,L=s(h||(h=i()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),b.colorBgElevated,b.colorPrimary);return{title:R("".concat(n,"-title"),s(B||(B=i()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),b.colorText)),extra:R(s(E||(E=i()([`
        position: relative;
      `])))),value:s(j||(j=i()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),b.colorBgLayout),handle:L,handleRight:s(P||(P=i()([`
      `,`;
      right: -35px;
    `])),L),handleLeft:s(o||(o=i()([`
      `,`;
      left: -35px;
    `])),L)}}),l=(0,T.memo)(function(t){var s=t.children,b=t.title,R=t.extra,L=t.collapsed,I=t.onCollapsedChange,w=t.valueContainer,N=t.classNames,W=N===void 0?{}:N,Q=t.handles,y=Q===void 0?{}:Q,F=t.id,Y=t.className,k=t.style,V=r(),Z=V.styles,q=V.theme,z=V.cx,ee=(0,D.oR)(function(U){return[U.collapsedKeys,U.toggleCollapsedKey]}),G=p()(ee,2),J=G[0],ne=G[1],oe=(0,c.Z)(J.includes(F),{value:typeof L=="undefined"?J.includes(F):L,onChange:function($){ne(F),I==null||I($)}}),X=p()(oe,2),H=X[0],te=X[1];return(0,a.jsxs)(A.D,{gap:12,className:z("".concat(n,"-container"),Y),style:k,children:[b&&(0,a.jsxs)(A.D,{horizontal:!0,distribution:"space-between",align:"center",className:z("".concat(n,"-header"),W==null?void 0:W.header),children:[(0,a.jsxs)(A.D,{className:z(Z.title,W==null?void 0:W.title),children:[!!(y!=null&&y.source)&&(0,a.jsx)(g.HH,{id:typeof(y==null?void 0:y.source)=="string"?y==null?void 0:y.source:F,type:"target",position:g.Ly.Left,className:Z.handleLeft}),b]}),(0,a.jsxs)(A.D,{horizontal:!0,gap:4,className:z(Z.extra,"".concat(n,"-extra"),W==null?void 0:W.extra,"nodrag"),children:[(0,a.jsxs)(v.ZP,{theme:{token:{colorText:q.colorTextSecondary}},children:[H?null:R&&R.map(function(U,$){return(0,a.jsx)(m.Z,{icon:U.icon,title:U.title,onClick:U.onClick},U.title||""+$)}),(0,a.jsx)(m.Z,{icon:(0,a.jsx)(K.Z,{rotate:H?-90:0}),title:H?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){te(!H)}})]}),!!(y!=null&&y.target)&&(0,a.jsx)(g.HH,{id:typeof(y==null?void 0:y.target)=="string"?y==null?void 0:y.target:F,type:"source",position:g.Ly.Right,className:Z.handleRight})]})]}),H?null:s&&w===!1?s:(0,a.jsx)("div",{className:z(Z.value,W.value),children:s})]})}),_=function(s){var b=s.children,R=!0,L=(0,a.jsx)(a.Fragment,{children:b});try{(0,D.AC)()}catch(I){R=!1}return R?L:(0,a.jsx)(D.iq,{children:b})},O=(0,T.memo)(function(t){return(0,a.jsx)(_,{children:(0,a.jsx)(l,u()({},t))})})}}]);
