"use strict";(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[155],{29155:function(k,j,e){e.r(j);var A=e(5072),O=e(10807),b=e(50959),P=e(11527),M=(0,b.memo)(function(){return(0,P.jsxs)(A.Z.Preview,{title:"\u8F93\u51FA",children:[(0,P.jsx)(O.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,P.jsx)(O.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});j.default=M},64254:function(k,j,e){e.d(j,{AC:function(){return x},iq:function(){return E},oR:function(){return v}});var A=e(93525),O=e.n(A),b=e(50959),P=e(7582),M=e(64750),h=e(27870),g=e(11527),f=function(r){var n=r.collapsedKeys,y=r.onCollapsedKeysChange;return(0,P.Ue)(function(d,i){return{collapsedKeys:n!=null?n:[],onCollapsedKeysChange:y,toggleCollapsedKey:function(o){var l,u,m=[];i().collapsedKeys.includes(o)?m=i().collapsedKeys.filter(function(p){return p!==o}):m=[].concat(O()(i().collapsedKeys),[o]),d({collapsedKeys:m}),(l=(u=i()).onCollapsedKeysChange)===null||l===void 0||l.call(u,m)}}})},c=(0,M.k)(),v=c.useStore,x=c.useStoreApi,K=c.Provider,a=(0,b.memo)(function(s){var r=s.collapsedKeys,n=x(),y=(0,h.N)(n);return y("collapsedKeys",r),null}),E=(0,b.memo)(function(s){var r=s.children,n=s.defaultCollapsedKeys,y=s.onCollapsedKeysChange,d=s.collapsedKeys;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(K,{createStore:function(){return f({collapsedKeys:n,onCollapsedKeysChange:y})},children:[r,(0,g.jsx)(a,{collapsedKeys:d})]})})})},5072:function(k,j,e){var A=e(57213),O=e.n(A),b=e(12342),P=e.n(b),M=e(92935),h=e.n(M),g=e(29948),f=e(78009),c=e(50959),v=e(1595),x=e(55207),K=e(64254),a=e(11527),E=["id","onTitleChange","onCollapsedKeysChange"],s,r,n=(0,f.kc)(function(_){var o=_.css,l=_.token,u=_.prefixCls;return{container:o(s||(s=h()([`
    will-change: transform;
    width: 800px;
    border: 2px solid `,`;
    border-radius: 12px;
    .`,`-card-head {
      padding-right: 16px;
    }

    .editor-field-item-container:not(:last-child) {
      margin-bottom: 24px;
    }
  `])),l.colorBorder,u),selected:o(r||(r=h()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),l.colorPrimary)}}),y=(0,c.memo)(function(_){var o=_.active,l=_.collapsedKeys,u=_.onCollapsedKeysChange,m=_.onTitleChange,p=_.style,R=_.className,D=_.title,t=_.children,T=_.extra,L=n(),B=L.styles,I=L.cx;return(0,a.jsx)(K.iq,{collapsedKeys:l,onCollapsedKeysChange:u,children:(0,a.jsx)(g.Z,{title:(0,a.jsx)(v.Z,{onChange:m,value:D||"\u57FA\u7840\u8282\u70B9"}),className:I(B.container,o&&B.selected,R),extra:T,style:p,children:t})})}),d=(0,c.memo)(function(_){var o=_.id,l=_.onTitleChange,u=_.onCollapsedKeysChange,m=P()(_,E),p=(0,x.d)();return(0,a.jsx)(y,O()({onTitleChange:function(D){p.updateNodeMeta(o,"title",D),l==null||l(D)},onCollapsedKeysChange:function(D){p.updateNodeState(o,"collapsedKeys",D),u==null||u(D)}},m))}),i=d;i.Preview=y,j.Z=i},75498:function(k,j,e){e.d(j,{F:function(){return K}});var A=e(57213),O=e.n(A),b=e(54306),P=e.n(b),M=e(12342),h=e.n(M),g=e(43233),f=e(50307),c=e(50959),v=e(11527),x=["value","onChange","onValueChanging","onChangeEnd"],K=(0,c.memo)(function(a){var E=a.value,s=a.onChange,r=a.onValueChanging,n=a.onChangeEnd,y=h()(a,x),d=E||"",i=(0,c.useState)(d),_=P()(i,2),o=_[0],l=_[1],u=(0,c.useRef)(null),m=(0,c.useRef)(!1),p=(0,c.useRef)(!1),R=(0,c.useCallback)(function(){s==null||s(o)},[o]);return(0,c.useEffect)(function(){typeof E!="undefined"&&l(E)},[E]),(0,v.jsx)(f.I,O()(O()({ref:u},y),{},{value:o,onCompositionStart:function(){m.current=!0},onCompositionEnd:function(){m.current=!1},onFocus:function(){p.current=!0},onBlur:function(){p.current=!1,n==null||n(o)},onChange:function(t){l(t.target.value),r==null||r(t.target.value)},onPressEnter:function(t){!t.shiftKey&&!m.current&&(t.preventDefault(),R(),p.current=!1,n==null||n(o))},suffix:E===o?(0,v.jsx)("span",{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g.ZP,{type:"link",size:"small",onClick:function(){l(E)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,v.jsx)(g.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){R()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},1595:function(k,j,e){var A=e(54306),O=e.n(A),b=e(76802),P=e(19918),M=e(50959),h=e(84817),g=e(75498),f=e(11527),c=(0,M.memo)(function(v){var x=v.value,K=v.onChange,a=(0,M.useState)(!1),E=O()(a,2),s=E[0],r=E[1];return s?(0,f.jsx)(g.F,{onChange:K,onChangeEnd:function(){r(!1)},value:x}):(0,f.jsxs)(h.D,{gap:8,horizontal:!0,children:[x,(0,f.jsx)(P.Z,{icon:(0,f.jsx)(b.Z,{}),onClick:function(){r(!s)},placement:"right",title:"Edit"})]})});j.Z=c},50307:function(k,j,e){e.d(j,{I:function(){return n},K:function(){return y}});var A=e(57213),O=e.n(A),b=e(12342),P=e.n(b),M=e(47927),h=e(50959),g=e(92935),f=e.n(g),c=e(78009),v,x,K,a=(0,c.kc)(function(d){var i=d.css,_=d.token;return{input:i(v||(v=f()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),_.motionEaseOut),block:i(x||(x=f()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),_.colorFillTertiary,_.colorFillQuaternary),textarea:i(K||(K=f()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),_.motionEaseOut)}}),E=e(11527),s=["className","type"],r=["className","type"],n=(0,h.forwardRef)(function(d,i){var _=d.className,o=d.type,l=o===void 0?"ghost":o,u=P()(d,s),m=a(),p=m.styles,R=m.cx;return(0,E.jsx)(M.Z,O()({className:R(p.input,l==="block"&&p.block,_),ref:i},u))}),y=(0,h.memo)((0,h.forwardRef)(function(d,i){var _=d.className,o=d.type,l=o===void 0?"ghost":o,u=P()(d,r),m=a(),p=m.styles,R=m.cx;return(0,E.jsx)(M.Z.TextArea,O()({className:R(p.textarea,l==="block"&&p.block,_),ref:i},u))}))},10807:function(k,j,e){e.d(j,{Q:function(){return D}});var A=e(57213),O=e.n(A),b=e(54306),P=e.n(b),M=e(92935),h=e.n(M),g=e(36990),f=e(19918),c=e(61763),v=e(78009),x=e(50959),K=e(84817),a=e(82212),E=e(93251),s=e(73360),r=e(64254),n=e(11527),y,d,i,_,o,l,u="editor-field-item",m=(0,v.kc)(function(t){var T=t.css,L=t.token,B=t.cx,I=T(y||(y=h()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),L.colorBgElevated,L.colorPrimary);return{title:B("".concat(u,"-title"),T(d||(d=h()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),L.colorText)),extra:B(T(i||(i=h()([`
        position: relative;
      `])))),value:T(_||(_=h()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),L.colorBgLayout),handle:I,handleRight:T(o||(o=h()([`
      `,`;
      right: -35px;
    `])),I),handleLeft:T(l||(l=h()([`
      `,`;
      left: -35px;
    `])),I)}}),p=(0,x.memo)(function(t){var T=t.children,L=t.title,B=t.extra,I=t.collapsed,Z=t.onCollapsedChange,J=t.valueContainer,$=t.classNames,W=$===void 0?{}:$,H=t.handles,C=H===void 0?{}:H,S=t.id,Y=t.className,q=t.style,z=m(),N=z.styles,ee=z.theme,w=z.cx,ne=(0,r.oR)(function(U){return[U.collapsedKeys,U.toggleCollapsedKey]},s.X),Q=P()(ne,2),X=Q[0],_e=Q[1],oe=(0,E.Z)(X.includes(S),{value:typeof I=="undefined"?X.includes(S):I,onChange:function(V){_e(S),Z==null||Z(V)}}),G=P()(oe,2),F=G[0],te=G[1];return(0,n.jsxs)(K.D,{gap:12,className:w("".concat(u,"-container"),Y),style:q,children:[L&&(0,n.jsxs)(K.D,{horizontal:!0,distribution:"space-between",align:"center",className:w("".concat(u,"-header"),W==null?void 0:W.header),children:[(0,n.jsxs)(K.D,{className:w(N.title,W==null?void 0:W.title),children:[!!(C!=null&&C.source)&&(0,n.jsx)(a.HH,{id:typeof(C==null?void 0:C.source)=="string"?C==null?void 0:C.source:S,type:"target",position:a.Ly.Left,className:N.handleLeft}),L]}),(0,n.jsxs)(K.D,{horizontal:!0,gap:4,className:w(N.extra,"".concat(u,"-extra"),W==null?void 0:W.extra,"nodrag"),children:[(0,n.jsxs)(c.ZP,{theme:{token:{colorText:ee.colorTextSecondary}},children:[F?null:B&&B.map(function(U,V){return(0,n.jsx)(f.Z,{icon:U.icon,title:U.title,onClick:U.onClick},U.title||""+V)}),(0,n.jsx)(f.Z,{icon:(0,n.jsx)(g.Z,{rotate:F?-90:0}),title:F?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){te(!F)}})]}),!!(C!=null&&C.target)&&(0,n.jsx)(a.HH,{id:typeof(C==null?void 0:C.target)=="string"?C==null?void 0:C.target:S,type:"source",position:a.Ly.Right,className:N.handleRight})]})]}),F?null:T&&J===!1?T:(0,n.jsx)("div",{className:w(N.value,W.value),children:T})]})}),R=function(T){var L=T.children,B=!0,I=(0,n.jsx)(n.Fragment,{children:L});try{(0,r.AC)()}catch(Z){B=!1}return B?I:(0,n.jsx)(r.iq,{children:L})},D=(0,x.memo)(function(t){return(0,n.jsx)(R,{children:(0,n.jsx)(p,O()({},t))})})}}]);
