"use strict";(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[729],{49729:function(Z,S,e){e.r(S);var R=e(46577),C=e(14835),b=e(50959),E=e(11527),j=(0,b.memo)(function(){return(0,E.jsxs)(R.Z.Preview,{title:"\u8F93\u51FA",children:[(0,E.jsx)(C.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,E.jsx)(C.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});S.default=j},61718:function(Z,S,e){e.d(S,{AC:function(){return D},iq:function(){return i},oR:function(){return g}});var R=e(93525),C=e.n(R),b=e(50959),E=e(36121),j=e(20991),v=e(45235),T=e(11527),O=function(u){var n=u.collapsedKeys,L=u.onCollapsedKeysChange;return(0,E.Ue)(function(r,c){return{collapsedKeys:n!=null?n:[],onCollapsedKeysChange:L,toggleCollapsedKey:function(d){var x,K,P=[];c().collapsedKeys.includes(d)?P=c().collapsedKeys.filter(function(M){return M!==d}):P=[].concat(C()(c().collapsedKeys),[d]),r({collapsedKeys:P}),(x=(K=c()).onCollapsedKeysChange)===null||x===void 0||x.call(K,P)}}})},s=(0,j.k)(),g=s.useStore,D=s.useStoreApi,A=s.Provider,f=(0,b.memo)(function(m){var u=m.collapsedKeys,n=D(),L=(0,v.N)(n);return L("collapsedKeys",u),null}),i=(0,b.memo)(function(m){var u=m.children,n=m.defaultCollapsedKeys,L=m.onCollapsedKeysChange,r=m.collapsedKeys;return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(A,{createStore:function(){return O({collapsedKeys:n,onCollapsedKeysChange:L})},children:[u,(0,T.jsx)(f,{collapsedKeys:r})]})})})},46577:function(Z,S,e){e.d(S,{Z:function(){return l}});var R=e(57213),C=e.n(R),b=e(12342),E=e.n(b),j=e(92935),v=e.n(j),T=e(73620),O=e(41417),s=e(50959),g=e(67754),D=e(28062),A=e(20991),f=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=new DocWithHistoryManager;return create()(optionalDevtools(a)(createStore(t),{name:"FLOW_EDITOR"}))},i=(0,A.k)(),m=i.Provider,u=i.useStore,n=i.useStoreApi,L=["yjsDoc","flattenEdges","selectedKeys","onFlattenNodesChange","onEdgesChange","onFlattenEdgesChange","onNodesChange","onViewPortChange","onNodesTreeChange","onSelectionChange","onElementSelectChange","updateEdgesOnEdgeChange","updateEdgesOnConnection","internalUpdateEdges","internalUpdateNodes","internalUpdateSelection"],r=function(){var a=n(),t=a.getState(),y=t.yjsDoc,W=t.flattenEdges,F=t.selectedKeys,k=t.onFlattenNodesChange,p=t.onEdgesChange,V=t.onFlattenEdgesChange,_=t.onNodesChange,I=t.onViewPortChange,$=t.onNodesTreeChange,X=t.onSelectionChange,G=t.onElementSelectChange,w=t.updateEdgesOnEdgeChange,te=t.updateEdgesOnConnection,z=t.internalUpdateEdges,oe=t.internalUpdateNodes,Y=t.internalUpdateSelection,H=E()(t,L),q=(0,D.Z)(function(){return a.getState().flattenNodes}),ee=(0,D.Z)(function(){return a.getState().flattenEdges}),J=(0,D.Z)(function(){return a.getState().selectedKeys});return(0,s.useMemo)(function(){return C()(C()({},H),{},{getFlattenNodes:q,getSelectedKeys:J,getFlattenEdges:ee})},[H])},c=e(61718),h=e(11527),d=["id","onTitleChange","onCollapsedKeysChange"],x,K,P=(0,O.kc)(function(o){var a=o.css,t=o.token,y=o.prefixCls;return{container:a(x||(x=v()([`
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
  `])),t.colorBorder,y),selected:a(K||(K=v()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),t.colorPrimary)}}),M=(0,s.memo)(function(o){var a=o.active,t=o.collapsedKeys,y=o.onCollapsedKeysChange,W=o.onTitleChange,F=o.style,k=o.className,p=o.title,V=o.children,_=o.extra,I=P(),$=I.styles,X=I.cx;return(0,h.jsx)(c.iq,{collapsedKeys:t,onCollapsedKeysChange:y,children:(0,h.jsx)(T.Z,{title:(0,h.jsx)(g.Z,{onChange:W,value:p||"\u57FA\u7840\u8282\u70B9"}),className:X($.container,a&&$.selected,k),extra:_,style:F,children:V})})}),B=(0,s.memo)(function(o){var a=o.id,t=o.onTitleChange,y=o.onCollapsedKeysChange,W=E()(o,d),F=r();return(0,h.jsx)(M,C()({onTitleChange:function(p){F.updateNodeMeta(a,"title",p),t==null||t(p)},onCollapsedKeysChange:function(p){F.updateNodeState(a,"collapsedKeys",p),y==null||y(p)}},W))}),U=B;U.Preview=M;var l=U},44502:function(Z,S,e){e.d(S,{F:function(){return A}});var R=e(57213),C=e.n(R),b=e(54306),E=e.n(b),j=e(12342),v=e.n(j),T=e(62591),O=e(85114),s=e(50959),g=e(11527),D=["value","onChange","onValueChanging","onChangeEnd"],A=(0,s.memo)(function(f){var i=f.value,m=f.onChange,u=f.onValueChanging,n=f.onChangeEnd,L=v()(f,D),r=i||"",c=(0,s.useState)(r),h=E()(c,2),d=h[0],x=h[1],K=(0,s.useRef)(null),P=(0,s.useRef)(!1),M=(0,s.useRef)(!1),B=(0,s.useCallback)(function(){m==null||m(d)},[d]);return(0,s.useEffect)(function(){typeof i!="undefined"&&x(i)},[i]),(0,g.jsx)(O.I,C()(C()({ref:K},L),{},{value:d,onCompositionStart:function(){P.current=!0},onCompositionEnd:function(){P.current=!1},onFocus:function(){M.current=!0},onBlur:function(){M.current=!1,n==null||n(d)},onChange:function(l){x(l.target.value),u==null||u(l.target.value)},onPressEnter:function(l){!l.shiftKey&&!P.current&&(l.preventDefault(),B(),M.current=!1,n==null||n(d))},suffix:i===d?(0,g.jsx)("span",{}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(T.ZP,{type:"link",size:"small",onClick:function(){x(i)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,g.jsx)(T.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){B()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},67754:function(Z,S,e){var R=e(54306),C=e.n(R),b=e(43520),E=e(83030),j=e(50959),v=e(84817),T=e(44502),O=e(11527),s=(0,j.memo)(function(g){var D=g.value,A=g.onChange,f=(0,j.useState)(!1),i=C()(f,2),m=i[0],u=i[1];return m?(0,O.jsx)(T.F,{onChange:A,onChangeEnd:function(){u(!1)},value:D}):(0,O.jsxs)(v.D,{gap:8,horizontal:!0,children:[D,(0,O.jsx)(E.Z,{icon:(0,O.jsx)(b.Z,{}),onClick:function(){u(!m)},placement:"right",title:"Edit"})]})});S.Z=s},85114:function(Z,S,e){e.d(S,{I:function(){return n},K:function(){return L}});var R=e(57213),C=e.n(R),b=e(12342),E=e.n(b),j=e(3185),v=e(50959),T=e(92935),O=e.n(T),s=e(41417),g,D,A,f=(0,s.kc)(function(r){var c=r.css,h=r.token;return{input:c(g||(g=O()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),h.motionEaseOut),block:c(D||(D=O()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),h.colorFillTertiary,h.colorFillQuaternary),textarea:c(A||(A=O()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),h.motionEaseOut)}}),i=e(11527),m=["className","type"],u=["className","type"],n=(0,v.forwardRef)(function(r,c){var h=r.className,d=r.type,x=d===void 0?"ghost":d,K=E()(r,m),P=f(),M=P.styles,B=P.cx;return(0,i.jsx)(j.Z,C()({className:B(M.input,x==="block"&&M.block,h),ref:c},K))}),L=(0,v.memo)((0,v.forwardRef)(function(r,c){var h=r.className,d=r.type,x=d===void 0?"ghost":d,K=E()(r,u),P=f(),M=P.styles,B=P.cx;return(0,i.jsx)(j.Z.TextArea,C()({className:B(M.textarea,x==="block"&&M.block,h),ref:c},K))}))},14835:function(Z,S,e){e.d(S,{Q:function(){return U}});var R=e(57213),C=e.n(R),b=e(54306),E=e.n(b),j=e(92935),v=e.n(j),T=e(163),O=e(83030),s=e(34646),g=e(41417),D=e(50959),A=e(84817),f=e(60250),i=e(93251),m=e(81264),u=e(61718),n=e(11527),L,r,c,h,d,x,K="editor-field-item",P=(0,g.kc)(function(l){var o=l.css,a=l.token,t=l.cx,y=o(L||(L=v()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),a.colorBgElevated,a.colorPrimary);return{title:t("".concat(K,"-title"),o(r||(r=v()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),a.colorText)),extra:t(o(c||(c=v()([`
        position: relative;
      `])))),value:o(h||(h=v()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),a.colorBgLayout),handle:y,handleRight:o(d||(d=v()([`
      `,`;
      right: -35px;
    `])),y),handleLeft:o(x||(x=v()([`
      `,`;
      left: -35px;
    `])),y)}}),M=(0,D.memo)(function(l){var o=l.children,a=l.title,t=l.extra,y=l.collapsed,W=l.onCollapsedChange,F=l.valueContainer,k=l.classNames,p=k===void 0?{}:k,V=l.handles,_=V===void 0?{}:V,I=l.id,$=l.className,X=l.style,G=P(),w=G.styles,te=G.theme,z=G.cx,oe=(0,u.oR)(function(N){return[N.collapsedKeys,N.toggleCollapsedKey]},m.X),Y=E()(oe,2),H=Y[0],q=Y[1],ee=(0,i.Z)(H.includes(I),{value:typeof y=="undefined"?H.includes(I):y,onChange:function(ne){q(I),W==null||W(ne)}}),J=E()(ee,2),Q=J[0],le=J[1];return(0,n.jsxs)(A.D,{gap:12,className:z("".concat(K,"-container"),$),style:X,children:[a&&(0,n.jsxs)(A.D,{horizontal:!0,distribution:"space-between",align:"center",className:z("".concat(K,"-header"),p==null?void 0:p.header),children:[(0,n.jsxs)(A.D,{className:z(w.title,p==null?void 0:p.title),children:[!!(_!=null&&_.source)&&(0,n.jsx)(f.HH,{id:typeof(_==null?void 0:_.source)=="string"?_==null?void 0:_.source:I,type:"target",position:f.Ly.Left,className:w.handleLeft}),a]}),(0,n.jsxs)(A.D,{horizontal:!0,gap:4,className:z(w.extra,"".concat(K,"-extra"),p==null?void 0:p.extra,"nodrag"),children:[(0,n.jsxs)(s.ZP,{theme:{token:{colorText:te.colorTextSecondary}},children:[Q?null:t&&t.map(function(N,ne){return(0,n.jsx)(O.Z,{icon:N.icon,title:N.title,onClick:N.onClick},N.title||""+ne)}),(0,n.jsx)(O.Z,{icon:(0,n.jsx)(T.Z,{rotate:Q?-90:0}),title:Q?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){le(!Q)}})]}),!!(_!=null&&_.target)&&(0,n.jsx)(f.HH,{id:typeof(_==null?void 0:_.target)=="string"?_==null?void 0:_.target:I,type:"source",position:f.Ly.Right,className:w.handleRight})]})]}),Q?null:o&&F===!1?o:(0,n.jsx)("div",{className:z(w.value,p.value),children:o})]})}),B=function(o){var a=o.children,t=!0,y=(0,n.jsx)(n.Fragment,{children:a});try{(0,u.AC)()}catch(W){t=!1}return t?y:(0,n.jsx)(u.iq,{children:a})},U=(0,D.memo)(function(l){return(0,n.jsx)(B,{children:(0,n.jsx)(M,C()({},l))})})}}]);
