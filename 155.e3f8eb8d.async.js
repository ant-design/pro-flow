"use strict";(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[155],{29155:function(k,K,e){e.r(K);var b=e(5072),D=e(10807),y=e(50959),P=e(11527),O=(0,y.memo)(function(){return(0,P.jsxs)(b.Z.Preview,{title:"\u8F93\u51FA",children:[(0,P.jsx)(D.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,P.jsx)(D.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});K.default=O},64254:function(k,K,e){e.d(K,{AC:function(){return M},iq:function(){return l},oR:function(){return i}});var b=e(93525),D=e.n(b),y=e(50959),P=e(7582),O=e(64750),m=e(27870),g=e(11527),E=function(a){var n=a.collapsedKeys,j=a.onCollapsedKeysChange;return(0,P.Ue)(function(r,c){return{collapsedKeys:n!=null?n:[],onCollapsedKeysChange:j,toggleCollapsedKey:function(t){var s,d,_=[];c().collapsedKeys.includes(t)?_=c().collapsedKeys.filter(function(f){return f!==t}):_=[].concat(D()(c().collapsedKeys),[t]),r({collapsedKeys:_}),(s=(d=c()).onCollapsedKeysChange)===null||s===void 0||s.call(d,_)}}})},h=(0,O.k)(),i=h.useStore,M=h.useStoreApi,x=h.Provider,v=(0,y.memo)(function(u){var a=u.collapsedKeys,n=M(),j=(0,m.N)(n);return j("collapsedKeys",a),null}),l=(0,y.memo)(function(u){var a=u.children,n=u.defaultCollapsedKeys,j=u.onCollapsedKeysChange,r=u.collapsedKeys;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(x,{createStore:function(){return E({collapsedKeys:n,onCollapsedKeysChange:j})},children:[a,(0,g.jsx)(v,{collapsedKeys:r})]})})})},5072:function(k,K,e){var b=e(57213),D=e.n(b),y=e(12342),P=e.n(y),O=e(92935),m=e.n(O),g=e(61763),E=e(29948),h=e(78009),i=e(50959),M=e(1595),x=e(55207),v=e(64254),l=e(11527),u=["id","onTitleChange","onCollapsedKeysChange"],a,n,j=(0,h.kc)(function(t){var s=t.css,d=t.token,_=t.prefixCls;return{container:s(a||(a=m()([`
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
  `])),d.colorBorder,_),selected:s(n||(n=m()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),d.colorPrimary)}}),r=(0,i.memo)(function(t){var s=t.active,d=t.collapsedKeys,_=t.onCollapsedKeysChange,f=t.onTitleChange,A=t.style,R=t.className,o=t.title,T=t.children,L=t.extra,B=j(),I=B.styles,S=B.cx,z=(0,i.useRef)(null);return(0,l.jsx)(g.ZP,{getPopupContainer:function(){return z.current||document.body},children:(0,l.jsx)(v.iq,{collapsedKeys:d,onCollapsedKeysChange:_,children:(0,l.jsx)(E.Z,{ref:z,title:(0,l.jsx)(M.Z,{onChange:f,value:o||"\u57FA\u7840\u8282\u70B9"}),className:S(I.container,s&&I.selected,R),extra:L,style:A,children:T})})})}),c=(0,i.memo)(function(t){var s=t.id,d=t.onTitleChange,_=t.onCollapsedKeysChange,f=P()(t,u),A=(0,x.d)();return(0,l.jsx)(r,D()({onTitleChange:function(o){A.updateNodeMeta(s,"title",o),d==null||d(o)},onCollapsedKeysChange:function(o){A.updateNodeState(s,"collapsedKeys",o),_==null||_(o)}},f))}),p=c;p.Preview=r,K.Z=p},75498:function(k,K,e){e.d(K,{F:function(){return x}});var b=e(57213),D=e.n(b),y=e(54306),P=e.n(y),O=e(12342),m=e.n(O),g=e(43233),E=e(50307),h=e(50959),i=e(11527),M=["value","onChange","onValueChanging","onChangeEnd"],x=(0,h.memo)(function(v){var l=v.value,u=v.onChange,a=v.onValueChanging,n=v.onChangeEnd,j=m()(v,M),r=l||"",c=(0,h.useState)(r),p=P()(c,2),t=p[0],s=p[1],d=(0,h.useRef)(null),_=(0,h.useRef)(!1),f=(0,h.useRef)(!1),A=(0,h.useCallback)(function(){u==null||u(t)},[t]);return(0,h.useEffect)(function(){typeof l!="undefined"&&s(l)},[l]),(0,i.jsx)(E.I,D()(D()({ref:d},j),{},{value:t,onCompositionStart:function(){_.current=!0},onCompositionEnd:function(){_.current=!1},onFocus:function(){f.current=!0},onBlur:function(){f.current=!1,n==null||n(t)},onChange:function(o){s(o.target.value),a==null||a(o.target.value)},onPressEnter:function(o){!o.shiftKey&&!_.current&&(o.preventDefault(),A(),f.current=!1,n==null||n(t))},suffix:l===t?(0,i.jsx)("span",{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.ZP,{type:"link",size:"small",onClick:function(){s(l)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,i.jsx)(g.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){A()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},1595:function(k,K,e){var b=e(54306),D=e.n(b),y=e(76802),P=e(84109),O=e(50959),m=e(84817),g=e(75498),E=e(11527),h=(0,O.memo)(function(i){var M=i.value,x=i.onChange,v=(0,O.useState)(!1),l=D()(v,2),u=l[0],a=l[1];return u?(0,E.jsx)(g.F,{onChange:x,onChangeEnd:function(){a(!1)},value:M}):(0,E.jsxs)(m.D,{gap:8,align:"center",horizontal:!0,children:[(0,E.jsx)("span",{style:{lineHeight:1},children:M}),(0,E.jsx)(P.Z,{icon:(0,E.jsx)(y.Z,{}),onClick:function(){a(!u)},placement:"right",title:"Edit"})]})});K.Z=h},50307:function(k,K,e){e.d(K,{I:function(){return n},K:function(){return j}});var b=e(57213),D=e.n(b),y=e(12342),P=e.n(y),O=e(47927),m=e(50959),g=e(92935),E=e.n(g),h=e(78009),i,M,x,v=(0,h.kc)(function(r){var c=r.css,p=r.token;return{input:c(i||(i=E()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),p.motionEaseOut),block:c(M||(M=E()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),p.colorFillTertiary,p.colorFillQuaternary),textarea:c(x||(x=E()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),p.motionEaseOut)}}),l=e(11527),u=["className","type"],a=["className","type"],n=(0,m.forwardRef)(function(r,c){var p=r.className,t=r.type,s=t===void 0?"ghost":t,d=P()(r,u),_=v(),f=_.styles,A=_.cx;return(0,l.jsx)(O.Z,D()({className:A(f.input,s==="block"&&f.block,p),ref:c},d))}),j=(0,m.memo)((0,m.forwardRef)(function(r,c){var p=r.className,t=r.type,s=t===void 0?"ghost":t,d=P()(r,a),_=v(),f=_.styles,A=_.cx;return(0,l.jsx)(O.Z.TextArea,D()({className:A(f.textarea,s==="block"&&f.block,p),ref:c},d))}))},10807:function(k,K,e){e.d(K,{Q:function(){return R}});var b=e(57213),D=e.n(b),y=e(54306),P=e.n(y),O=e(92935),m=e.n(O),g=e(36990),E=e(84109),h=e(61763),i=e(78009),M=e(50959),x=e(84817),v=e(82212),l=e(93251),u=e(73360),a=e(64254),n=e(11527),j,r,c,p,t,s,d="editor-field-item",_=(0,i.kc)(function(o){var T=o.css,L=o.token,B=o.cx,I=T(j||(j=m()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),L.colorBgElevated,L.colorPrimary);return{title:B("".concat(d,"-title"),T(r||(r=m()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),L.colorText)),extra:B(T(c||(c=m()([`
        position: relative;
      `])))),value:T(p||(p=m()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),L.colorBgLayout),handle:I,handleRight:T(t||(t=m()([`
      `,`;
      right: -35px;
    `])),I),handleLeft:T(s||(s=m()([`
      `,`;
      left: -35px;
    `])),I)}}),f=(0,M.memo)(function(o){var T=o.children,L=o.title,B=o.extra,I=o.collapsed,S=o.onCollapsedChange,z=o.valueContainer,H=o.classNames,W=H===void 0?{}:H,Q=o.handles,C=Q===void 0?{}:Q,N=o.id,Y=o.className,q=o.style,V=_(),w=V.styles,ee=V.theme,F=V.cx,ne=(0,a.oR)(function(U){return[U.collapsedKeys,U.toggleCollapsedKey]},u.X),X=P()(ne,2),G=X[0],te=X[1],oe=(0,l.Z)(G.includes(N),{value:typeof I=="undefined"?G.includes(N):I,onChange:function($){te(N),S==null||S($)}}),J=P()(oe,2),Z=J[0],_e=J[1];return(0,n.jsxs)(x.D,{gap:12,className:F("".concat(d,"-container"),Y),style:q,children:[L&&(0,n.jsxs)(x.D,{horizontal:!0,distribution:"space-between",align:"center",className:F("".concat(d,"-header"),W==null?void 0:W.header),children:[(0,n.jsxs)(x.D,{className:F(w.title,W==null?void 0:W.title),children:[!!(C!=null&&C.source)&&(0,n.jsx)(v.HH,{id:typeof(C==null?void 0:C.source)=="string"?C==null?void 0:C.source:N,type:"target",position:v.Ly.Left,className:w.handleLeft}),L]}),(0,n.jsxs)(x.D,{horizontal:!0,gap:4,className:F(w.extra,"".concat(d,"-extra"),W==null?void 0:W.extra,"nodrag"),children:[(0,n.jsxs)(h.ZP,{theme:{token:{colorText:ee.colorTextSecondary}},children:[Z?null:B&&B.map(function(U,$){return(0,n.jsx)(E.Z,{icon:U.icon,title:U.title,onClick:U.onClick},U.title||""+$)}),(0,n.jsx)(E.Z,{icon:(0,n.jsx)(g.Z,{rotate:Z?-90:0}),title:Z?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){_e(!Z)}})]}),!!(C!=null&&C.target)&&(0,n.jsx)(v.HH,{id:typeof(C==null?void 0:C.target)=="string"?C==null?void 0:C.target:N,type:"source",position:v.Ly.Right,className:w.handleRight})]})]}),Z?null:T&&z===!1?T:(0,n.jsx)("div",{className:F(w.value,W.value),children:T})]})}),A=function(T){var L=T.children,B=!0,I=(0,n.jsx)(n.Fragment,{children:L});try{(0,a.AC)()}catch(S){B=!1}return B?I:(0,n.jsx)(a.iq,{children:L})},R=(0,M.memo)(function(o){return(0,n.jsx)(A,{children:(0,n.jsx)(f,D()({},o))})})}}]);
