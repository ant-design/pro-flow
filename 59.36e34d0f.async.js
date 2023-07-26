"use strict";(self.webpackChunk_ant_design_pro_flow_editor=self.webpackChunk_ant_design_pro_flow_editor||[]).push([[59],{7059:function(S,K,e){e.r(K);var b=e(53041),D=e(20072),y=e(50959),P=e(11527),O=(0,y.memo)(function(){return(0,P.jsxs)(b.Z.Preview,{title:"\u8F93\u51FA",children:[(0,P.jsx)(D.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,P.jsx)(D.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});K.default=O},7441:function(S,K,e){e.d(K,{AC:function(){return M},iq:function(){return l},oR:function(){return i}});var b=e(93525),D=e.n(b),y=e(50959),P=e(7582),O=e(64750),c=e(27870),g=e(11527),E=function(r){var o=r.collapsedKeys,j=r.onCollapsedKeysChange;return(0,P.Ue)(function(a,p){return{collapsedKeys:o!=null?o:[],onCollapsedKeysChange:j,toggleCollapsedKey:function(n){var s,d,t=[];p().collapsedKeys.includes(n)?t=p().collapsedKeys.filter(function(f){return f!==n}):t=[].concat(D()(p().collapsedKeys),[n]),a({collapsedKeys:t}),(s=(d=p()).onCollapsedKeysChange)===null||s===void 0||s.call(d,t)}}})},m=(0,O.k)(),i=m.useStore,M=m.useStoreApi,x=m.Provider,v=(0,y.memo)(function(u){var r=u.collapsedKeys,o=M(),j=(0,c.N)(o);return j("collapsedKeys",r),null}),l=(0,y.memo)(function(u){var r=u.children,o=u.defaultCollapsedKeys,j=u.onCollapsedKeysChange,a=u.collapsedKeys;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(x,{createStore:function(){return E({collapsedKeys:o,onCollapsedKeysChange:j})},children:[r,(0,g.jsx)(v,{collapsedKeys:a})]})})})},53041:function(S,K,e){var b=e(57213),D=e.n(b),y=e(12342),P=e.n(y),O=e(92935),c=e.n(O),g=e(19706),E=e(29575),m=e(22745),i=e(50959),M=e(18305),x=e(38707),v=e(7441),l=e(11527),u=["id","onTitleChange","onCollapsedKeysChange"],r,o,j=(0,m.kc)(function(n){var s=n.css,d=n.token,t=n.prefixCls;return{container:s(r||(r=c()([`
    will-change: transform;
    width: 100%;
    max-width: 800px;
    border: 2px solid `,`;
    border-radius: 12px;
    .`,`-card-head {
      padding-right: 16px;
    }

    .editor-field-item-container:not(:last-child) {
      margin-bottom: 24px;
    }
  `])),d.colorBorder,t),selected:s(o||(o=c()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),d.colorPrimary)}}),a=(0,i.memo)(function(n){var s=n.active,d=n.collapsedKeys,t=n.onCollapsedKeysChange,f=n.onTitleChange,A=n.style,R=n.className,_=n.title,T=n.children,L=n.extra,B=j(),I=B.styles,N=B.cx,H=(0,i.useRef)(null);return(0,l.jsx)(g.ZP,{getPopupContainer:function(){return H.current||document.body},children:(0,l.jsx)(v.iq,{collapsedKeys:d,onCollapsedKeysChange:t,children:(0,l.jsx)(E.Z,{ref:H,title:(0,l.jsx)(M.Z,{onChange:f,value:_||"\u57FA\u7840\u8282\u70B9"}),className:N(I.container,s&&I.selected,R),extra:L,style:A,children:T})})})}),p=(0,i.memo)(function(n){var s=n.id,d=n.onTitleChange,t=n.onCollapsedKeysChange,f=P()(n,u),A=(0,x.d)();return(0,l.jsx)(a,D()({onTitleChange:function(_){A.updateNodeMeta(s,"title",_),d==null||d(_)},onCollapsedKeysChange:function(_){A.updateNodeState(s,"collapsedKeys",_),t==null||t(_)}},f))}),C=p;C.Preview=a,K.Z=C},22068:function(S,K,e){e.d(K,{F:function(){return x}});var b=e(57213),D=e.n(b),y=e(54306),P=e.n(y),O=e(12342),c=e.n(O),g=e(34124),E=e(91336),m=e(50959),i=e(11527),M=["value","onChange","onValueChanging","onChangeEnd"],x=(0,m.memo)(function(v){var l=v.value,u=v.onChange,r=v.onValueChanging,o=v.onChangeEnd,j=c()(v,M),a=l||"",p=(0,m.useState)(a),C=P()(p,2),n=C[0],s=C[1],d=(0,m.useRef)(null),t=(0,m.useRef)(!1),f=(0,m.useRef)(!1),A=(0,m.useCallback)(function(){u==null||u(n)},[n]);return(0,m.useEffect)(function(){typeof l!="undefined"&&s(l)},[l]),(0,i.jsx)(E.I,D()(D()({ref:d},j),{},{value:n,onCompositionStart:function(){t.current=!0},onCompositionEnd:function(){t.current=!1},onFocus:function(){f.current=!0},onBlur:function(){f.current=!1,o==null||o(n)},onChange:function(_){s(_.target.value),r==null||r(_.target.value)},onPressEnter:function(_){!_.shiftKey&&!t.current&&(_.preventDefault(),A(),f.current=!1,o==null||o(n))},suffix:l===n?(0,i.jsx)("span",{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.ZP,{type:"link",size:"small",onClick:function(){s(l)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,i.jsx)(g.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){A()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},18305:function(S,K,e){var b=e(54306),D=e.n(b),y=e(58790),P=e(35e3),O=e(50959),c=e(84817),g=e(22068),E=e(11527),m=(0,O.memo)(function(i){var M=i.value,x=i.onChange,v=(0,O.useState)(!1),l=D()(v,2),u=l[0],r=l[1];return u?(0,E.jsx)(g.F,{onChange:x,onChangeEnd:function(){r(!1)},value:M}):(0,E.jsxs)(c.D,{gap:8,align:"center",horizontal:!0,children:[(0,E.jsx)("span",{style:{lineHeight:1},children:M}),(0,E.jsx)(P.Z,{icon:(0,E.jsx)(y.Z,{}),onClick:function(){r(!u)},placement:"right",title:"Edit"})]})});K.Z=m},91336:function(S,K,e){e.d(K,{I:function(){return o},K:function(){return j}});var b=e(57213),D=e.n(b),y=e(12342),P=e.n(y),O=e(95842),c=e(50959),g=e(92935),E=e.n(g),m=e(22745),i,M,x,v=(0,m.kc)(function(a){var p=a.css,C=a.token;return{input:p(i||(i=E()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),C.motionEaseOut),block:p(M||(M=E()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),C.colorFillTertiary,C.colorFillQuaternary),textarea:p(x||(x=E()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),C.motionEaseOut)}}),l=e(11527),u=["className","type"],r=["className","type"],o=(0,c.forwardRef)(function(a,p){var C=a.className,n=a.type,s=n===void 0?"ghost":n,d=P()(a,u),t=v(),f=t.styles,A=t.cx;return(0,l.jsx)(O.Z,D()({className:A(f.input,s==="block"&&f.block,C),ref:p},d))}),j=(0,c.memo)((0,c.forwardRef)(function(a,p){var C=a.className,n=a.type,s=n===void 0?"ghost":n,d=P()(a,r),t=v(),f=t.styles,A=t.cx;return(0,l.jsx)(O.Z.TextArea,D()({className:A(f.textarea,s==="block"&&f.block,C),ref:p},d))}))},20072:function(S,K,e){e.d(K,{Q:function(){return R}});var b=e(57213),D=e.n(b),y=e(54306),P=e.n(y),O=e(92935),c=e.n(O),g=e(4544),E=e(35e3),m=e(19706),i=e(22745),M=e(50959),x=e(84817),v=e(6483),l=e(93251),u=e(73360),r=e(7441),o=e(11527),j,a,p,C,n,s,d="editor-field-item",t=(0,i.kc)(function(_){var T=_.css,L=_.token,B=_.cx,I=T(j||(j=c()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),L.colorBgElevated,L.colorPrimary);return{title:B("".concat(d,"-title"),T(a||(a=c()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),L.colorText)),extra:B(T(p||(p=c()([`
        position: relative;
      `])))),value:T(C||(C=c()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),L.colorBgLayout),handle:I,handleRight:T(n||(n=c()([`
      `,`;
      right: -35px;
    `])),I),handleLeft:T(s||(s=c()([`
      `,`;
      left: -35px;
    `])),I)}}),f=(0,M.memo)(function(_){var T=_.children,L=_.title,B=_.extra,I=_.collapsed,N=_.onCollapsedChange,H=_.valueContainer,V=_.classNames,W=V===void 0?{}:V,k=_.handles,h=k===void 0?{}:k,w=_.id,Y=_.className,q=_.style,$=t(),F=$.styles,ee=$.theme,Z=$.cx,oe=(0,r.oR)(function(U){return[U.collapsedKeys,U.toggleCollapsedKey]},u.X),X=P()(oe,2),G=X[0],ne=X[1],_e=(0,l.Z)(G.includes(w),{value:typeof I=="undefined"?G.includes(w):I,onChange:function(Q){ne(w),N==null||N(Q)}}),J=P()(_e,2),z=J[0],te=J[1];return(0,o.jsxs)(x.D,{gap:12,className:Z("".concat(d,"-container"),Y),style:q,children:[L&&(0,o.jsxs)(x.D,{horizontal:!0,distribution:"space-between",align:"center",className:Z("".concat(d,"-header"),W==null?void 0:W.header),children:[(0,o.jsxs)(x.D,{className:Z(F.title,W==null?void 0:W.title),children:[!!(h!=null&&h.source)&&(0,o.jsx)(v.HH,{id:typeof(h==null?void 0:h.source)=="string"?h==null?void 0:h.source:w,type:"target",position:v.Ly.Left,className:F.handleLeft}),L]}),(0,o.jsxs)(x.D,{horizontal:!0,gap:4,className:Z(F.extra,"".concat(d,"-extra"),W==null?void 0:W.extra,"nodrag"),children:[(0,o.jsxs)(m.ZP,{theme:{token:{colorText:ee.colorTextSecondary}},children:[z?null:B&&B.map(function(U,Q){return(0,o.jsx)(E.Z,{icon:U.icon,title:U.title,onClick:U.onClick},U.title||""+Q)}),(0,o.jsx)(E.Z,{icon:(0,o.jsx)(g.Z,{rotate:z?-90:0}),title:z?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){te(!z)}})]}),!!(h!=null&&h.target)&&(0,o.jsx)(v.HH,{id:typeof(h==null?void 0:h.target)=="string"?h==null?void 0:h.target:w,type:"source",position:v.Ly.Right,className:F.handleRight})]})]}),z?null:T&&H===!1?T:(0,o.jsx)("div",{className:Z(F.value,W.value),children:T})]})}),A=function(T){var L=T.children,B=!0,I=(0,o.jsx)(o.Fragment,{children:L});try{(0,r.AC)()}catch(N){B=!1}return B?I:(0,o.jsx)(r.iq,{children:L})},R=(0,M.memo)(function(_){return(0,o.jsx)(A,{children:(0,o.jsx)(f,D()({},_))})})}}]);
