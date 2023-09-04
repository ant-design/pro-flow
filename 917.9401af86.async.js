"use strict";(self.webpackChunk_ant_design_pro_flow_editor=self.webpackChunk_ant_design_pro_flow_editor||[]).push([[917],{59917:function(S,K,e){e.r(K);var T=e(66220),O=e(37118),j=e(50959),f=e(11527),g=(0,j.memo)(function(){return(0,f.jsxs)(T.Z.Preview,{title:"\u8F93\u51FA",children:[(0,f.jsx)(O.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,f.jsx)(O.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});K.default=g},28495:function(S,K,e){e.d(K,{AC:function(){return x},iq:function(){return s},oR:function(){return u}});var T=e(93525),O=e.n(T),j=e(50959),f=e(38341),g=e(6627),c=e(37870),M=e(11527),C=function(o){var t=o.collapsedKeys,b=o.onCollapsedKeysChange;return(0,f.Ue)(function(i,p){return{collapsedKeys:t!=null?t:[],onCollapsedKeysChange:b,toggleCollapsedKey:function(n){var a,E,r=[];p().collapsedKeys.includes(n)?r=p().collapsedKeys.filter(function(D){return D!==n}):r=[].concat(O()(p().collapsedKeys),[n]),i({collapsedKeys:r}),(a=(E=p()).onCollapsedKeysChange)===null||a===void 0||a.call(E,r)}}})},m=(0,g.k)(),u=m.useStore,x=m.useStoreApi,y=m.Provider,v=(0,j.memo)(function(d){var o=d.collapsedKeys,t=x(),b=(0,c.N)(t);return b("collapsedKeys",o),null}),s=(0,j.memo)(function(d){var o=d.children,t=d.defaultCollapsedKeys,b=d.onCollapsedKeysChange,i=d.collapsedKeys;return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(y,{createStore:function(){return C({collapsedKeys:t,onCollapsedKeysChange:b})},children:[o,(0,M.jsx)(v,{collapsedKeys:i})]})})})},66220:function(S,K,e){var T=e(57213),O=e.n(T),j=e(12342),f=e.n(j),g=e(92935),c=e.n(g),M=e(37869),C=e(10612),m=e(61111),u=e(50959),x=e(65260),y=e(96535),v=e(28495),s=e(11527),d=["id","onTitleChange","onCollapsedKeysChange"],o,t,b=(0,m.kc)(function(n){var a=n.css,E=n.token,r=n.prefixCls;return{container:a(o||(o=c()([`
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
  `])),E.colorBorder,r),selected:a(t||(t=c()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),E.colorPrimary)}}),i=(0,u.memo)(function(n){var a=n.active,E=n.collapsedKeys,r=n.onCollapsedKeysChange,D=n.onTitleChange,A=n.style,_=n.className,l=n.title,R=n.children,I=n.extra,L=b(),U=L.styles,H=L.cx,N=(0,u.useRef)(null);return(0,s.jsx)(M.ZP,{getPopupContainer:function(){return N.current||document.body},children:(0,s.jsx)(v.iq,{collapsedKeys:E,onCollapsedKeysChange:r,children:(0,s.jsx)(C.Z,{ref:N,title:(0,s.jsx)(x.Z,{onChange:D,value:l||"\u57FA\u7840\u8282\u70B9"}),className:H(U.container,a&&U.selected,_),extra:I,style:A,children:R})})})}),p=(0,u.memo)(function(n){var a=n.id,E=n.onTitleChange,r=n.onCollapsedKeysChange,D=f()(n,d),A=(0,y.d)();return(0,s.jsx)(i,O()({onTitleChange:function(l){A.updateNodeMeta(a,"title",l),E==null||E(l)},onCollapsedKeysChange:function(l){A.updateNodeState(a,"collapsedKeys",l),r==null||r(l)}},D))}),h=p;h.Preview=i,K.Z=h},96287:function(S,K,e){e.d(K,{F:function(){return y}});var T=e(57213),O=e.n(T),j=e(54306),f=e.n(j),g=e(12342),c=e.n(g),M=e(27641),C=e(30456),m=e(50959),u=e(11527),x=["value","onChange","onValueChanging","onChangeEnd"],y=(0,m.memo)(function(v){var s=v.value,d=v.onChange,o=v.onValueChanging,t=v.onChangeEnd,b=c()(v,x),i=s||"",p=(0,m.useState)(i),h=f()(p,2),n=h[0],a=h[1],E=(0,m.useRef)(null),r=(0,m.useRef)(!1),D=(0,m.useRef)(!1),A=(0,m.useCallback)(function(){d==null||d(n)},[n]);return(0,m.useEffect)(function(){typeof s!="undefined"&&a(s)},[s]),(0,u.jsx)(C.I,O()(O()({ref:E},b),{},{value:n,onCompositionStart:function(){r.current=!0},onCompositionEnd:function(){r.current=!1},onFocus:function(){D.current=!0},onBlur:function(){D.current=!1,t==null||t(n)},onChange:function(l){a(l.target.value),o==null||o(l.target.value)},onPressEnter:function(l){!l.shiftKey&&!r.current&&(l.preventDefault(),A(),D.current=!1,t==null||t(n))},suffix:s===n?(0,u.jsx)("span",{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(M.ZP,{type:"link",size:"small",onClick:function(){a(s)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,u.jsx)(M.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){A()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},65260:function(S,K,e){var T=e(54306),O=e.n(T),j=e(24684),f=e(22578),g=e(50959),c=e(55937),M=e(96287),C=e(11527),m=(0,g.memo)(function(u){var x=u.value,y=u.onChange,v=(0,g.useState)(!1),s=O()(v,2),d=s[0],o=s[1];return d?(0,C.jsx)(M.F,{onChange:y,onChangeEnd:function(){o(!1)},value:x}):(0,C.jsxs)(c.D,{gap:8,align:"center",horizontal:!0,children:[(0,C.jsx)("span",{style:{lineHeight:1},children:x}),(0,C.jsx)(f.Z,{icon:(0,C.jsx)(j.Z,{}),onClick:function(){o(!d)},placement:"right",title:"Edit"})]})});K.Z=m},30456:function(S,K,e){e.d(K,{I:function(){return t},K:function(){return b}});var T=e(57213),O=e.n(T),j=e(12342),f=e.n(j),g=e(17454),c=e(50959),M=e(92935),C=e.n(M),m=e(61111),u,x,y,v=(0,m.kc)(function(i){var p=i.css,h=i.token;return{input:p(u||(u=C()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),h.motionEaseOut),block:p(x||(x=C()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),h.colorFillTertiary,h.colorFillQuaternary),textarea:p(y||(y=C()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),h.motionEaseOut)}}),s=e(11527),d=["className","type"],o=["className","type"],t=(0,c.forwardRef)(function(i,p){var h=i.className,n=i.type,a=n===void 0?"ghost":n,E=f()(i,d),r=v(),D=r.styles,A=r.cx;return(0,s.jsx)(g.Z,O()({className:A(D.input,a==="block"&&D.block,h),ref:p},E))}),b=(0,c.memo)((0,c.forwardRef)(function(i,p){var h=i.className,n=i.type,a=n===void 0?"ghost":n,E=f()(i,o),r=v(),D=r.styles,A=r.cx;return(0,s.jsx)(g.Z.TextArea,O()({className:A(D.textarea,a==="block"&&D.block,h),ref:p},E))}))},37118:function(S,K,e){e.d(K,{Q:function(){return A}});var T=e(57213),O=e.n(T),j=e(54306),f=e.n(j),g=e(92935),c=e.n(g),M=e(2108),C=e(22578),m=e(37869),u=e(61111),x=e(50959),y=e(55937),v=e(6345),s=e(93251),d=e(28495),o=e(11527),t,b,i,p,h,n,a="editor-field-item",E=(0,u.kc)(function(_){var l=_.css,R=_.token,I=_.cx,L=l(t||(t=c()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),R.colorBgElevated,R.colorPrimary);return{title:I("".concat(a,"-title"),l(b||(b=c()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),R.colorText)),extra:I(l(i||(i=c()([`
        position: relative;
      `])))),value:l(p||(p=c()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),R.colorBgLayout),handle:L,handleRight:l(h||(h=c()([`
      `,`;
      right: -35px;
    `])),L),handleLeft:l(n||(n=c()([`
      `,`;
      left: -35px;
    `])),L)}}),r=(0,x.memo)(function(_){var l=_.children,R=_.title,I=_.extra,L=_.collapsed,U=_.onCollapsedChange,H=_.valueContainer,N=_.classNames,B=N===void 0?{}:N,Q=_.handles,P=Q===void 0?{}:Q,w=_.id,X=_.className,Y=_.style,V=E(),F=V.styles,q=V.theme,Z=V.cx,ee=(0,d.oR)(function(W){return[W.collapsedKeys,W.toggleCollapsedKey]}),k=f()(ee,2),G=k[0],ne=k[1],oe=(0,s.Z)(G.includes(w),{value:typeof L=="undefined"?G.includes(w):L,onChange:function($){ne(w),U==null||U($)}}),J=f()(oe,2),z=J[0],_e=J[1];return(0,o.jsxs)(y.D,{gap:12,className:Z("".concat(a,"-container"),X),style:Y,children:[R&&(0,o.jsxs)(y.D,{horizontal:!0,distribution:"space-between",align:"center",className:Z("".concat(a,"-header"),B==null?void 0:B.header),children:[(0,o.jsxs)(y.D,{className:Z(F.title,B==null?void 0:B.title),children:[!!(P!=null&&P.source)&&(0,o.jsx)(v.HH,{id:typeof(P==null?void 0:P.source)=="string"?P==null?void 0:P.source:w,type:"target",position:v.Ly.Left,className:F.handleLeft}),R]}),(0,o.jsxs)(y.D,{horizontal:!0,gap:4,className:Z(F.extra,"".concat(a,"-extra"),B==null?void 0:B.extra,"nodrag"),children:[(0,o.jsxs)(m.ZP,{theme:{token:{colorText:q.colorTextSecondary}},children:[z?null:I&&I.map(function(W,$){return(0,o.jsx)(C.Z,{icon:W.icon,title:W.title,onClick:W.onClick},W.title||""+$)}),(0,o.jsx)(C.Z,{icon:(0,o.jsx)(M.Z,{rotate:z?-90:0}),title:z?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){_e(!z)}})]}),!!(P!=null&&P.target)&&(0,o.jsx)(v.HH,{id:typeof(P==null?void 0:P.target)=="string"?P==null?void 0:P.target:w,type:"source",position:v.Ly.Right,className:F.handleRight})]})]}),z?null:l&&H===!1?l:(0,o.jsx)("div",{className:Z(F.value,B.value),children:l})]})}),D=function(l){var R=l.children,I=!0,L=(0,o.jsx)(o.Fragment,{children:R});try{(0,d.AC)()}catch(U){I=!1}return I?L:(0,o.jsx)(d.iq,{children:R})},A=(0,x.memo)(function(_){return(0,o.jsx)(D,{children:(0,o.jsx)(r,O()({},_))})})}}]);
