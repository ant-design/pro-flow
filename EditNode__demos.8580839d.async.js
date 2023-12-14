(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[3435],{14249:function(T,u,e){"use strict";e.d(u,{Z:function(){return C}});var v=e(56920),i=e(50959),p={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"},a=p,m=e(89011),c=function(r,d){return i.createElement(m.Z,(0,v.Z)({},r,{ref:d,icon:a}))},C=i.forwardRef(c)},45637:function(T,u,e){"use strict";e.d(u,{Z:function(){return C}});var v=e(56920),i=e(50959),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=p,m=e(89011),c=function(r,d){return i.createElement(m.Z,(0,v.Z)({},r,{ref:d,icon:a}))},C=i.forwardRef(c)},32818:function(T,u,e){"use strict";e.r(u);var v=e(28152),i=e.n(v),p=e(17368),a=e(88198),m=e(75972),c=e(27106),C=e(50959),P=e(24819),r=e(11527),d=(0,C.memo)(function(){var t=(0,C.useState)([]),E=i()(t,2),f=E[0],j=E[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)(p.Z.Preview,{collapsedKeys:f,onCollapsedKeysChange:j,title:"\u8F93\u51FA",children:[(0,r.jsx)(a.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,r.jsx)(a.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"}),(0,r.jsx)(a.Q,{id:"model",title:"\u6A21\u578B",children:"GPT-3.5-turbo"})]}),(0,r.jsx)(m.Z,{}),(0,r.jsxs)(P.D,{align:"center",horizontal:!0,gap:8,children:[(0,r.jsx)(c.ZP,{onClick:function(){j([])},children:"\u5168\u90E8\u5C55\u5F00"}),(0,r.jsxs)("div",{children:["\u6298\u8D77 Key: ",f.join(",")]})," "]})]})});u.default=d},25427:function(T,u,e){"use strict";e.r(u);var v=e(17368),i=e(55642),p=e(50959),a=e(11527),m=(0,p.memo)(function(){return(0,a.jsx)(v.Z.Preview,{title:"\u6587\u672C\u6846",children:(0,a.jsx)(i.K,{placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u672C\u5185\u5BB9",type:"block"})})});u.default=m},97060:function(T,u,e){"use strict";e.r(u);var v=e(17368),i=e(88198),p=e(50959),a=e(11527),m=(0,p.memo)(function(){return(0,a.jsxs)(v.Z.Preview,{title:"\u8F93\u51FA",children:[(0,a.jsx)(i.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,a.jsx)(i.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});u.default=m},20058:function(T,u,e){"use strict";e.d(u,{AC:function(){return t},iq:function(){return j},oR:function(){return d}});var v=e(67855),i=e.n(v),p=e(50959),a=e(3656),m=e(13422),c=e(29130),C=e(11527),P=function(o){var A=o.collapsedKeys,s=o.onCollapsedKeysChange;return(0,a.Ue)(function(g,y){return{collapsedKeys:A!=null?A:[],onCollapsedKeysChange:s,toggleCollapsedKey:function(R){var I,H,W=[];y().collapsedKeys.includes(R)?W=y().collapsedKeys.filter(function(U){return U!==R}):W=[].concat(i()(y().collapsedKeys),[R]),g({collapsedKeys:W}),(I=(H=y()).onCollapsedKeysChange)===null||I===void 0||I.call(H,W)}}})},r=(0,m.k)(),d=r.useStore,t=r.useStoreApi,E=r.Provider,f=(0,p.memo)(function(D){var o=D.collapsedKeys,A=t(),s=(0,c.N)(A);return s("collapsedKeys",o),null}),j=(0,p.memo)(function(D){var o=D.children,A=D.defaultCollapsedKeys,s=D.onCollapsedKeysChange,g=D.collapsedKeys;return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(E,{createStore:function(){return P({collapsedKeys:A,onCollapsedKeysChange:s})},children:[o,(0,C.jsx)(f,{collapsedKeys:g})]})})})},17368:function(T,u,e){"use strict";e.d(u,{Z:function(){return Q}});var v=e(77117),i=e.n(v),p=e(95530),a=e.n(p),m=e(18840),c=e.n(m),C=e(94066),P=e(43355),r=e(57261),d=e(50959),t=e(28152),E=e.n(t),f=e(45637),j=e(35906),D=e(24819),o=e(27106),A=e(55642),s=e(11527),g=["value","onChange","onValueChanging","onChangeEnd"],y=(0,d.memo)(function(n){var x=n.value,O=n.onChange,_=n.onValueChanging,K=n.onChangeEnd,l=a()(n,g),B=x||"",S=(0,d.useState)(B),X=E()(S,2),N=X[0],F=X[1],Y=(0,d.useRef)(null),z=(0,d.useRef)(!1),G=(0,d.useRef)(!1),k=(0,d.useCallback)(function(){O==null||O(N)},[N]);return(0,d.useEffect)(function(){typeof x!="undefined"&&F(x)},[x]),(0,s.jsx)(A.I,i()(i()({ref:Y},l),{},{value:N,onCompositionStart:function(){z.current=!0},onCompositionEnd:function(){z.current=!1},onFocus:function(){G.current=!0},onBlur:function(){G.current=!1,K==null||K(N)},onChange:function(J){F(J.target.value),_==null||_(J.target.value)},onPressEnter:function(J){!J.shiftKey&&!z.current&&(J.preventDefault(),k(),G.current=!1,K==null||K(N))},suffix:x===N?(0,s.jsx)("span",{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.ZP,{type:"link",size:"small",onClick:function(){F(x)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,s.jsx)(o.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){k()},children:"\u4FDD\u5B58 \u21B5"})]})}))}),L=(0,d.memo)(function(n){var x=n.value,O=n.onChange,_=(0,d.useState)(!1),K=E()(_,2),l=K[0],B=K[1];return l?(0,s.jsx)(y,{onChange:O,onChangeEnd:function(){B(!1)},value:x}):(0,s.jsxs)(D.D,{gap:8,align:"center",horizontal:!0,children:[(0,s.jsx)("span",{style:{lineHeight:1},children:x}),(0,s.jsx)(j.Z,{icon:(0,s.jsx)(f.Z,{}),onClick:function(){B(!l)},placement:"right",title:"Edit"})]})}),R=L,I=e(66317),H=e(20058),W=["id","onTitleChange","onCollapsedKeysChange"],U,w,h=(0,r.kc)(function(n){var x=n.css,O=n.token,_=n.prefixCls;return{container:x(U||(U=c()([`
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
  `])),O.colorBorder,_),selected:x(w||(w=c()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),O.colorPrimary)}}),M=(0,d.memo)(function(n){var x=n.active,O=n.collapsedKeys,_=n.onCollapsedKeysChange,K=n.onTitleChange,l=n.style,B=n.className,S=n.title,X=n.children,N=n.extra,F=h(),Y=F.styles,z=F.cx,G=(0,d.useRef)(null);return(0,s.jsx)(C.ZP,{getPopupContainer:function(){return G.current||document.body},children:(0,s.jsx)(H.iq,{collapsedKeys:O,onCollapsedKeysChange:_,children:(0,s.jsx)(P.Z,{ref:G,title:(0,s.jsx)(R,{onChange:K,value:S||"\u57FA\u7840\u8282\u70B9"}),className:z(Y.container,x&&Y.selected,B),extra:N,style:l,children:X})})})}),b=(0,d.memo)(function(n){var x=n.id,O=n.onTitleChange,_=n.onCollapsedKeysChange,K=a()(n,W),l=(0,I.d)();return(0,s.jsx)(M,i()({onTitleChange:function(S){l.updateNodeMeta(x,"title",S),O==null||O(S)},onCollapsedKeysChange:function(S){l.updateNodeState(x,"collapsedKeys",S),_==null||_(S)}},K))}),Z=b;Z.Preview=M;var Q=Z},55642:function(T,u,e){"use strict";e.d(u,{I:function(){return A},K:function(){return s}});var v=e(77117),i=e.n(v),p=e(95530),a=e.n(p),m=e(10528),c=e(50959),C=e(18840),P=e.n(C),r=e(57261),d,t,E,f=(0,r.kc)(function(g){var y=g.css,L=g.token;return{input:y(d||(d=P()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),L.motionEaseOut),block:y(t||(t=P()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),L.colorFillTertiary,L.colorFillQuaternary),textarea:y(E||(E=P()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),L.motionEaseOut)}}),j=e(11527),D=["className","type"],o=["className","type"],A=(0,c.forwardRef)(function(g,y){var L=g.className,R=g.type,I=R===void 0?"ghost":R,H=a()(g,D),W=f(),U=W.styles,w=W.cx;return(0,j.jsx)(m.Z,i()({className:w(U.input,I==="block"&&U.block,L),ref:y},H))}),s=(0,c.memo)((0,c.forwardRef)(function(g,y){var L=g.className,R=g.type,I=R===void 0?"ghost":R,H=a()(g,o),W=f(),U=W.styles,w=W.cx;return(0,j.jsx)(m.Z.TextArea,i()({className:w(U.textarea,I==="block"&&U.block,L),ref:y},H))}))},88198:function(T,u,e){"use strict";e.d(u,{Q:function(){return w}});var v=e(77117),i=e.n(v),p=e(28152),a=e.n(p),m=e(18840),c=e.n(m),C=e(14249),P=e(35906),r=e(94066),d=e(57261),t=e(50959),E=e(24819),f=e(52445),j=e(93251),D=e(20058),o=e(11527),A,s,g,y,L,R,I="editor-field-item",H=(0,d.kc)(function(h){var M=h.css,b=h.token,Z=h.cx,Q=M(A||(A=c()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),b.colorBgElevated,b.colorPrimary);return{title:Z("".concat(I,"-title"),M(s||(s=c()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),b.colorText)),extra:Z(M(g||(g=c()([`
        position: relative;
      `])))),value:M(y||(y=c()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),b.colorBgLayout),handle:Q,handleRight:M(L||(L=c()([`
      `,`;
      right: -35px;
    `])),Q),handleLeft:M(R||(R=c()([`
      `,`;
      left: -35px;
    `])),Q)}}),W=(0,t.memo)(function(h){var M=h.children,b=h.title,Z=h.extra,Q=h.collapsed,n=h.onCollapsedChange,x=h.valueContainer,O=h.classNames,_=O===void 0?{}:O,K=h.handles,l=K===void 0?{}:K,B=h.id,S=h.className,X=h.style,N=H(),F=N.styles,Y=N.theme,z=N.cx,G=(0,D.oR)(function($){return[$.collapsedKeys,$.toggleCollapsedKey]}),k=a()(G,2),V=k[0],J=k[1],te=(0,j.Z)(V.includes(B),{value:typeof Q=="undefined"?V.includes(B):Q,onChange:function(ee){J(B),n==null||n(ee)}}),ne=a()(te,2),q=ne[0],oe=ne[1];return(0,o.jsxs)(E.D,{gap:12,className:z("".concat(I,"-container"),S),style:X,children:[b&&(0,o.jsxs)(E.D,{horizontal:!0,distribution:"space-between",align:"center",className:z("".concat(I,"-header"),_==null?void 0:_.header),children:[(0,o.jsxs)(E.D,{className:z(F.title,_==null?void 0:_.title),children:[!!(l!=null&&l.source)&&(0,o.jsx)(f.HH,{id:typeof(l==null?void 0:l.source)=="string"?l==null?void 0:l.source:B,type:"target",position:f.Ly.Left,className:F.handleLeft}),b]}),(0,o.jsxs)(E.D,{horizontal:!0,gap:4,className:z(F.extra,"".concat(I,"-extra"),_==null?void 0:_.extra,"nodrag"),children:[(0,o.jsxs)(r.ZP,{theme:{token:{colorText:Y.colorTextSecondary}},children:[q?null:Z&&Z.map(function($,ee){return(0,o.jsx)(P.Z,{icon:$.icon,title:$.title,onClick:$.onClick},$.title||""+ee)}),(0,o.jsx)(P.Z,{icon:(0,o.jsx)(C.Z,{rotate:q?-90:0}),title:q?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){oe(!q)}})]}),!!(l!=null&&l.target)&&(0,o.jsx)(f.HH,{id:typeof(l==null?void 0:l.target)=="string"?l==null?void 0:l.target:B,type:"source",position:f.Ly.Right,className:F.handleRight})]})]}),q?null:M&&x===!1?M:(0,o.jsx)("div",{className:z(F.value,_.value),children:M})]})}),U=function(M){var b=M.children,Z=!0,Q=(0,o.jsx)(o.Fragment,{children:b});try{(0,D.AC)()}catch(n){Z=!1}return Z?Q:(0,o.jsx)(D.iq,{children:b})},w=(0,t.memo)(function(h){return(0,o.jsx)(U,{children:(0,o.jsx)(W,i()({},h))})})},18840:function(T){function u(e,v){return v||(v=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(v)}}))}T.exports=u,T.exports.__esModule=!0,T.exports.default=T.exports},3656:function(T,u,e){"use strict";e.d(u,{Ue:function(){return r}});var v=e(2563),i=e(50959),p=e(7231);const{useDebugValue:a}=i,{useSyncExternalStoreWithSelector:m}=p;let c=!1;function C(t,E=t.getState,f){f&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);const j=m(t.subscribe,t.getState,t.getServerState||t.getState,E,f);return a(j),j}const P=t=>{typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const E=typeof t=="function"?(0,v.M)(t):t,f=(j,D)=>C(E,j,D);return Object.assign(f,E),f},r=t=>t?P(t):P;var d=t=>(console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),r(t))}}]);
