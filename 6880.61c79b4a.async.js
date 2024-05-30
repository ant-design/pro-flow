(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[6880],{87340:function(ee,S,e){"use strict";e.r(S),e.d(S,{BackgroundVariant:function(){return f.T}});var y=e(26068),l=e.n(y),f=e(42622),g=e(52676);S.default=function(c){var r=c.gap,_=r===void 0?10:r,E=c.color,M=E===void 0?"#bac3d4":E;return(0,g.jsx)(f.A,l()(l()({},c),{},{gap:_,color:M}))}},51934:function(ee,S,e){"use strict";e.d(S,{Z:function(){return m}});var y=e(26068),l=e.n(y),f=e(95160),g=e(27197),c=e(29403),r=e(85833),_=e(75271),E=e(25436),M=e(53649),v=e.n(M),j,N,U,h,W,i,C,F,K,I,z,B,T,H,L=(0,r.kc)(function(x){var p=x.css;return{groupWrap:p(j||(j=v()([`
    width: 355px;
    height: 614px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    overflow: hidden;
    background-color: #fafafa;
    position: absolute;
    z-index: 10;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
  `]))),btnWrap:p(N||(N=v()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:p(U||(U=v()([`
    width: 110px;
    height: 32px;
    position: absolute;
    z-index: 12;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 32px;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 2%);
    font-size: 14px;
    color: rgba(0, 0, 0, 88%);
    line-height: 32px;
    bottom: 16px;
    left: 112px;
    text-align: center;

    img {
      width: 14px;
      height: 14px;
      margin-left: 4px;
      transform: translateY(2px);
    }
  `]))),groupItemWrap:p(h||(h=v()([`
    display: flex;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 16px 12px;
    background: #fff;
    margin-bottom: 26px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

    &:last-child {
      opacity: 0.5;
    }

    img {
      width: 48px;
      height: 48px;
    }
  `]))),groupItemContent:p(W||(W=v()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:p(i||(i=v()([`
    width: 100%;
    font-size: 16px;
    color: rgba(0, 0, 0, 88%);
    line-height: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  `]))),des:p(C||(C=v()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:p(F||(F=v()([`
    background-color: #ecf3fe;
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;

    .buttonWrap {
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 11;
      opacity: 0.7;
      background-color: #ecf3fe;
    }
  `]))),nodeSubSelected:p(K||(K=v()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
    background-color: #ecf3fe;

    .buttonWrap {
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 11;
      opacity: 0.7;
      background-color: #ecf3fe;
    }
  `]))),nodeDanger:p(I||(I=v()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:p(z||(z=v()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:p(B||(B=v()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:p(T||(T=v()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:p(H||(H=v()([""])))}}),a=e(52676),s=function(p){return p.map(function($){return l()(l()({},$),{},{type:"default",flowNodeType:"BasicNode"})})},P=function(p){var $=L(),X=$.styles,J=p.id,Z=p.title,q=p.des,V=p.logo;return(0,a.jsxs)("div",{className:X.groupItemWrap,children:[(0,a.jsx)("img",{src:V,alt:""}),(0,a.jsxs)("div",{className:X.groupItemContent,children:[(0,a.jsx)("div",{className:X.groupItemTitle,children:Z}),(0,a.jsx)("div",{className:X.des,children:q})]})]},"".concat(J,"-").concat(Z))},w=function(p){var $=p.data,X=L(),J=X.styles,Z=$.handleType,q=Z===void 0?"both":Z,V=$.selectType,R=V===void 0?g.QB.SELECT:V,ne=$.zoom,oe=ne===void 0?1:ne,de=$.label,ce=$.data;if(ce.length<5)return(0,a.jsx)("div",{className:J.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E5\uFF01"});var ie=s(ce);return(0,a.jsxs)("div",{style:{width:"357px",height:"632px",position:"relative"},children:[q==="output"||q==="both"?(0,a.jsx)(E.HH,{type:"target",position:E.Ly.Left,style:{top:41.5,left:-6}}):null,(0,a.jsxs)("div",{children:[de&&(0,a.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat((0,f.h)(20,oe,!0),"px) scale(").concat(1/oe,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:oe<=.1?"".concat(String(de).substring(0,3),"..."):de}),(0,a.jsxs)("div",{className:(0,r.cx)(J.groupWrap,J[(0,c.X)(R)]),children:[ie.map(function(se,Ee){var _e=se.data;return se.position={x:0,y:100*Ee},se.title=_e.title,se.logo=_e.logo,se.des=_e.description,P(se)}),(0,a.jsx)("div",{className:"".concat(J.btnWrap," buttonWrap")}),(0,a.jsxs)("div",{className:J.btn,children:["\u67E5\u770B\u66F4\u591A",(0,a.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),q==="input"||q==="both"?(0,a.jsx)(E.HH,{type:"source",position:E.Ly.Right,style:{top:41.5,right:-6}}):null]})},m=w},95160:function(ee,S,e){"use strict";e.d(S,{Z:function(){return T},h:function(){return z}});var y=e(27197),l=e(29403),f=e(75271),g=e(25436),c=e(53649),r=e.n(c),_=e(85833),E,M,v,j,N,U,h,W,i,C,F,K=(0,_.kc)(function(H){var L=H.css,a=H.cx,s=H.prefixCls;return{nodeWrap:a("".concat(s,"-xx"),L(E||(E=r()([`
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 8px;
      padding: 16px 12px;
      box-sizing: border-box;
      /* border: 3px solid white; */
      flex: 1;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

      .img {
        width: 48px;
        height: 48px;
      }

      .content {
        width: 230px;
        margin-left: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .title {
          width: 100%;
          display: flex;
          flex: 1;

          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 85%);
            line-height: 22px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
          }

          .dangerLogo {
            width: 28px;
            height: 16px;
            background: #ffeef1;
            border-radius: 7px;
            margin-left: 8px;
            margin-top: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 8px;
              height: 9px;
            }
          }
        }

        .des {
          font-size: 14px;
          color: rgba(0, 0, 0, 45%);
          line-height: 20px;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
    `])))),nodeSelected:L(M||(M=r()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:L(v||(v=r()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:L(j||(j=r()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:L(N||(N=r()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:L(U||(U=r()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:L(h||(h=r()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:L(W||(W=r()([""]))),titleSlotRight:L(i||(i=r()([`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 13px;
    top: 9px;
  `]))),titleSlotLeft:L(C||(C=r()([`
    width: 28px;
    height: 28px;
    margin-left: 8px;
  `]))),wrap:L(F||(F=r()([`
    width: 320px;
    height: 83px;
    position: relative;
  `])))}}),I=e(52676),z=function(L,a,s){return s&&a>1?L:L/a},B=function(L){var a=L.data,s=K(),P=s.styles,w=s.cx,m=a.title,x=a.logo,p=a.description,$=a.className,X=a.selectType,J=X===void 0?y.QB.SELECT:X,Z=a.zoom,q=Z===void 0?1:Z,V=a.label,R=a.titleSlot,ne=a.handleType,oe=ne===void 0?"both":ne;return(0,I.jsxs)("div",{className:P.wrap,children:[oe==="output"||oe==="both"?(0,I.jsx)(g.HH,{type:"target",position:g.Ly.Left,style:{left:-6}}):null,(0,I.jsxs)("div",{children:[V&&(0,I.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat(z(20,q,!0),"px) scale(").concat(1/q,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:q<=.1?"".concat(String(V).substring(0,3),"..."):V}),(0,I.jsxs)("div",{className:w(P.nodeWrap,P[(0,l.X)(J)],$),children:[(0,I.jsx)("img",{className:"img",src:x,alt:""}),(0,I.jsxs)("div",{className:"content",children:[(0,I.jsxs)("div",{className:"title",children:[(0,I.jsx)("span",{children:m}),!!R&&!!R.value&&R.type==="left"&&(0,I.jsx)("div",{className:P.titleSlotLeft,children:R.value}),!!R&&!!R.value&&R.type==="right"&&(0,I.jsxs)("div",{className:P.titleSlotLeft,children:[(0,I.jsx)("div",{style:{width:"28px"}}),(0,I.jsx)("div",{className:P.titleSlotRight,children:R.value})]})]}),(0,I.jsx)("div",{className:"des",children:p})]})]})]}),oe==="input"||oe==="both"?(0,I.jsx)(g.HH,{type:"source",position:g.Ly.Right,style:{right:-6}}):null]})},T=B},74600:function(ee,S,e){"use strict";var y=e(53649),l=e.n(y),f=e(85833),g=e(97459),c=e(77377),r=e(75271),_=e(55471),E=e(52676),M,v,j,N=(0,f.kc)(function(h){var W=h.css,i=h.token;return{container:W(M||(M=l()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,c.m4)(i.colorBgContainer,.5)),loader:W(v||(v=l()([`
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: `,`;
    box-shadow: 0 0 0 0 `,`;
    animation: l2 1.5s infinite linear;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: 0 0 0 0 `,`;
      animation: inherit;
      animation-delay: -0.5s;
    }

    &:after {
      animation-delay: -1s;
    }

    @keyframes l2 {
      100% {
        box-shadow: 0 0 0 40px `,`;
      }
    }
  `])),i.colorText,(0,c.m4)(i.colorText,.2),(0,c.m4)(i.colorText,.2),(0,c.m4)(i.colorText,0)),tip:W(j||(j=l()([`
    color: `,`;
  `])),i.colorTextPlaceholder)}}),U=(0,r.memo)(function(h){var W=h.children,i=h.loading,C=h.tip,F=C===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":C,K=N(),I=K.styles,z=(0,E.jsxs)(_.Z,{gap:12,className:I.container,children:[(0,E.jsx)(_.Z,{width:100,height:100,children:(0,E.jsx)("div",{className:I.loader})}),!(0,g.Z)(F)&&(0,E.jsx)("div",{className:I.tip,children:F})]});return W?(0,E.jsxs)(E.Fragment,{children:[typeof i=="undefined"||i?z:null,W]}):z});S.Z=U},2409:function(ee,S,e){"use strict";e.d(S,{F:function(){return N}});var y=e(26068),l=e.n(y),f=e(48305),g=e.n(f),c=e(67825),r=e.n(c),_=e(73116),E=e(99713),M=e(75271),v=e(52676),j=["value","onChange","onValueChanging","onChangeEnd"],N=(0,M.memo)(function(U){var h=U.value,W=U.onChange,i=U.onValueChanging,C=U.onChangeEnd,F=r()(U,j),K=h||"",I=(0,M.useState)(K),z=g()(I,2),B=z[0],T=z[1],H=(0,M.useRef)(null),L=(0,M.useRef)(!1),a=(0,M.useRef)(!1),s=(0,M.useCallback)(function(){W==null||W(B)},[B]);return(0,M.useEffect)(function(){typeof h!="undefined"&&T(h)},[h]),(0,v.jsx)(E.I,l()(l()({ref:H},F),{},{value:B,onCompositionStart:function(){L.current=!0},onCompositionEnd:function(){L.current=!1},onFocus:function(){a.current=!0},onBlur:function(){a.current=!1,C==null||C(B)},onChange:function(w){T(w.target.value),i==null||i(w.target.value)},onPressEnter:function(w){!w.shiftKey&&!L.current&&(w.preventDefault(),s(),a.current=!1,C==null||C(B))},suffix:h===B?(0,v.jsx)("span",{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_.ZP,{type:"link",size:"small",onClick:function(){T(h)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,v.jsx)(_.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){s()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},83274:function(ee,S,e){"use strict";e.d(S,{AC:function(){return j},iq:function(){return h},oR:function(){return v}});var y=e(15558),l=e.n(y),f=e(75271),g=e(3557),c=e(45785),r=e(40072),_=e(52676),E=function(i){var C=i.collapsedKeys,F=i.onCollapsedKeysChange;return(0,g.Ue)(function(K,I){return{collapsedKeys:C!=null?C:[],onCollapsedKeysChange:F,toggleCollapsedKey:function(B){var T,H,L=[];I().collapsedKeys.includes(B)?L=I().collapsedKeys.filter(function(a){return a!==B}):L=[].concat(l()(I().collapsedKeys),[B]),K({collapsedKeys:L}),(T=(H=I()).onCollapsedKeysChange)===null||T===void 0||T.call(H,L)}}})},M=(0,c.k)(),v=M.useStore,j=M.useStoreApi,N=M.Provider,U=(0,f.memo)(function(W){var i=W.collapsedKeys,C=j(),F=(0,r.N)(C);return F("collapsedKeys",i),null}),h=(0,f.memo)(function(W){var i=W.children,C=W.defaultCollapsedKeys,F=W.onCollapsedKeysChange,K=W.collapsedKeys;return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(N,{createStore:function(){return E({collapsedKeys:C,onCollapsedKeysChange:F})},children:[i,(0,_.jsx)(U,{collapsedKeys:K})]})})})},91515:function(ee,S,e){"use strict";var y=e(26068),l=e.n(y),f=e(67825),g=e.n(f),c=e(53649),r=e.n(c),_=e(74389),E=e(6052),M=e(85833),v=e(75271),j=e(98805),N=e(20306),U=e(83274),h=e(52676),W=["id","onTitleChange","onCollapsedKeysChange"],i,C,F=(0,M.kc)(function(B){var T=B.css,H=B.token,L=B.prefixCls;return{container:T(i||(i=r()([`
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
  `])),H.colorBorder,L),selected:T(C||(C=r()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),H.colorPrimary)}}),K=(0,v.memo)(function(B){var T=B.active,H=B.collapsedKeys,L=B.onCollapsedKeysChange,a=B.onTitleChange,s=B.style,P=B.className,w=B.title,m=B.children,x=B.extra,p=F(),$=p.styles,X=p.cx,J=(0,v.useRef)(null);return(0,h.jsx)(_.ZP,{getPopupContainer:function(){return J.current||document.body},children:(0,h.jsx)(U.iq,{collapsedKeys:H,onCollapsedKeysChange:L,children:(0,h.jsx)(E.Z,{ref:J,title:(0,h.jsx)(j.Z,{onChange:a,value:w||"\u57FA\u7840\u8282\u70B9"}),className:X($.container,T&&$.selected,P),extra:x,style:s,children:m})})})}),I=(0,v.memo)(function(B){var T=B.id,H=B.onTitleChange,L=B.onCollapsedKeysChange,a=g()(B,W),s=(0,N.d)();return(0,h.jsx)(K,l()({onTitleChange:function(w){s.updateNodeMeta(T,"title",w),H==null||H(w)},onCollapsedKeysChange:function(w){s.updateNodeState(T,"collapsedKeys",w),L==null||L(w)}},a))}),z=I;z.Preview=K,S.Z=z},98805:function(ee,S,e){"use strict";var y=e(48305),l=e.n(y),f=e(12583),g=e(64368),c=e(75271),r=e(90142),_=e(2409),E=e(52676),M=(0,c.memo)(function(v){var j=v.value,N=v.onChange,U=(0,c.useState)(!1),h=l()(U,2),W=h[0],i=h[1];return W?(0,E.jsx)(_.F,{onChange:N,onChangeEnd:function(){i(!1)},value:j}):(0,E.jsxs)(r.D,{gap:8,align:"center",horizontal:!0,children:[(0,E.jsx)("span",{style:{lineHeight:1},children:j}),(0,E.jsx)(g.Z,{icon:(0,E.jsx)(f.Z,{}),onClick:function(){i(!W)},placement:"right",title:"Edit"})]})});S.Z=M},21076:function(ee,S,e){"use strict";e.d(S,{N:function(){return c}});var y=e(75271),l=e(25436),f=e(67265),g=e(52676),c=(0,y.memo)(function(r){var _=r.children,E=r.showDevtools,M=!0,v=(0,g.jsx)(g.Fragment,{children:_});try{(0,f.AC)()}catch(j){M=!1}return M?v:(0,g.jsx)(l.tV,{children:(0,g.jsx)(f.zt,{createStore:function(){return(0,f.ze)(E)},children:v})})})},3840:function(ee,S,e){"use strict";var y=e(75271),l=e(40072),f=e(20306),g=e(67265),c=function(_){var E=_.onFlattenNodesChange,M=_.onNodesChange,v=_.beforeNodesChange,j=_.afterNodesChange,N=_.onEdgesChange,U=_.beforeEdgesChange,h=_.afterEdgesChange,W=_.onFlattenEdgesChange,i=_.onNodesTreeChange,C=_.editorRef,F=_.useStateUpdater,K=_.flattenNodes,I=_.flattenEdges,z=(0,l.N)((0,g.AC)()),B=F!=null?F:z;B("flattenNodes",K),B("flattenEdges",I),z("onFlattenNodesChange",E),z("onFlattenEdgesChange",W),z("onNodesChange",M),z("beforeNodesChange",v),z("afterNodesChange",j),z("onEdgesChange",N),z("beforeEdgesChange",U),z("afterEdgesChange",h),z("onNodesTreeChange",i);var T=(0,f.d)();return(0,y.useImperativeHandle)(C,function(){return T}),null};S.Z=c},20586:function(ee,S,e){"use strict";e.d(S,{Z:function(){return Me}});var y=e(26068),l=e.n(y),f=e(67825),g=e.n(f),c=e(75271),r=e(53038),_=e(48305),E=e.n(_),M=e(53649),v=e.n(M),j=e(85833),N=e(3341),U=e.n(N),h=e(16116),W=e(90142),i=e(25436),C=e(42622),F=e(44209),K=e(74600),I=e(91991),z=e(35952),B=e(29114),T=e(25729),H=e(97411),L=e(67265),a=e(52676),s=16,P=function(){var D=(0,i._K)(),o=(0,L.oR)(function(t){return[t.selectAll]}),d=E()(o,1),n=d[0];return(0,c.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:n,icon:(0,a.jsx)(T.Z,{size:s}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,a.jsx)(H.Z,{size:s}),onClick:n,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,a.jsx)(z.Z,{}),onClick:function(){D.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,a.jsx)(B.Z,{}),onClick:function(){D.zoomOut()},key:"zoomOut"}}},[])},w=(0,c.memo)(function(){var b=P(),D=[b.paste,b.DIVIDER,b.selectAll,b.zoomIn,b.zoomOut];return(0,a.jsx)(I.Z,{items:D})}),m=w,x=e(91400),p=e(64756),$=e(17288),X=e(74389),J=e(85368),Z=e(76062),q=e(15498),V=e(73116),R=e(28587),ne,oe,de=(0,j.kc)(function(b){var D=b.css,o=b.token;return{container:D(ne||(ne=v()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),o.colorBorder),minimap:D(oe||(oe=v()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),o.colorBgContainer)}}),ce=(0,c.memo)(function(b){var D=b.zoom,o=de(),d=o.styles,n=o.theme,t=(0,i._K)(),u=function(){t.zoomIn()},O=function(){t.zoomOut()},A=function(){t.fitView()},Y=function(){D===1?t.zoomTo(.5):t.zoomTo(1)},k=[{icon:(0,a.jsx)(x.Z,{}),title:"\u7F29\u5C0F",onClick:O},{title:D===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:Y,children:Math.round(D*100)+"%",style:{width:56}},{icon:(0,a.jsx)(p.Z,{}),title:"\u653E\u5927",onClick:u},{icon:(0,a.jsx)($.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:A}];return(0,a.jsxs)(W.D,{gap:12,align:"center",className:d.container,children:[(0,a.jsx)(X.ZP,{theme:{algorithm:[n.isDarkMode?J.Z.darkAlgorithm:J.Z.defaultAlgorithm,J.Z.compactAlgorithm]},children:(0,a.jsx)(W.D,{horizontal:!0,align:"center",children:(0,a.jsx)(Z.Z,{children:k.map(function(G,Q){return(0,a.jsx)(q.Z,{arrow:!1,title:G.title,children:(0,a.jsx)(V.ZP,{onClick:G.onClick,icon:G.icon,style:G.style,children:G.children})},Q)})})})}),(0,a.jsx)(R.a,{className:d.minimap,maskColor:n.colorBgMask,nodeColor:function(Q){return Q.data.color?Q.data.color:n.colorFill}})]})}),ie=(0,c.memo)(function(){var b=(0,i.Sj)(),D=b.zoom;return(0,a.jsx)(ce,{zoom:D})}),se=e(20306),Ee=function(){var D=(0,L.oR)(function(A){return[A.selectAll,A.undo,A.redo,A.copySelection,A.paste]}),o=E()(D,5),d=o[0],n=o[1],t=o[2],u=o[3],O=o[4];(0,r.y1)("meta+a",function(A){A.preventDefault(),d()}),(0,r.y1)("meta+z",function(A){A.preventDefault(),n()}),(0,r.y1)("meta+c",function(A){A.preventDefault(),u()}),(0,r.y1)("meta+v",function(A){A.preventDefault(),O()}),(0,r.y1)("meta+shift+z",function(A){A.preventDefault(),t()}),(0,r.y1)("backspace",function(A){A.preventDefault()})},_e=e(19438),ae,fe,De=(0,j.kc)(function(b){var D=b.css,o=b.token;return{container:D(ae||(ae=v()([`
    background: `,`;

    -webkit-font-smoothing: antialiased;

    .react-flow__pane {
      cursor: default;
    }
    .react-flow__edge-path,
    .react-flow__connection-path {
      stroke: `,`;
      stroke-width: 3px;
    }

    .react-flow__edge.selected .react-flow__edge-path,
    .react-flow__edge:focus .react-flow__edge-path,
    .react-flow__edge:focus-visible .react-flow__edge-path {
      stroke: `,`;
      stroke-width: 4px;
    }
  `])),o.colorBgLayout,o.colorBorder,o.colorPrimary),minimap:D(fe||(fe=v()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),o.colorBgContainer)}}),me=(0,c.forwardRef)(function(b,D){var o=b.nodeTypes,d=b.contextMenuEnabled,n=d===void 0?!0:d,t=b.style,u=b.className,O=b.flowProps,A=b.defaultViewport,Y=b.children,k=b.background,G=k===void 0?!0:k,Q=b.miniMap,pe=Q===void 0?!0:Q,te=b.onNodesInit,le=b.beforeConnect,re=le===void 0?function(){return!0}:le,ue=b.onConnect,xe=ue===void 0?function(){}:ue,Ue=b.afterConnect,je=Ue===void 0?function(){}:Ue,Se=De(),Ae=Se.theme,We=Se.styles,we=(0,L.oR)(_e.k.nodeList,U()),Fe=(0,L.oR)(_e.k.edgeList,U()),ze=(0,se.d)(),Ie=(0,i.B)(),Re=(0,c.useRef)(!1),Ze=(0,c.useMemo)(function(){return Ie?!0:!(we.length>0)},[we,Ie]),$e=(0,L.oR)(function(Oe){return[Oe.handleNodesChange,Oe.handleEdgesChange,Oe.updateEdgesOnConnection,Oe.onViewPortChange]}),Le=E()($e,4),He=Le[0],Ve=Le[1],Ge=Le[2],Ke=Le[3],ve=(0,i._K)();Ee(),(0,i.CV)({onChange:Ke?(0,h.Z)(Ke,300):void 0}),(0,c.useEffect)(function(){Re.current||(Re.current=!0,A?ve.setViewport(A):ve.fitView())},[Ie]),(0,c.useEffect)(function(){Ie&&(te==null||te(ze))},[Ie]);var Be=(0,c.useCallback)(function(Oe){if(re(Oe)){xe&&xe(Oe);var Qe=Ge(Oe);je&&Qe&&je(Qe)}},[xe,re,je]);return(0,a.jsxs)(W.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!Ze&&(0,a.jsx)(K.Z,{}),(0,a.jsxs)(i.x$,l()(l()({nodeTypes:o,ref:D,className:(0,j.cx)(We.container,u),defaultViewport:A,fitView:!A,fitViewOptions:{padding:3},nodes:we,edges:Fe,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:t},O),{},{selectionMode:i.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:He,onEdgesChange:Ve,onConnect:Be,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[G&&(0,a.jsx)(C.A,{color:Ae.colorTextQuaternary,variant:C.T.Dots,size:2}),pe&&(0,a.jsx)(ie,{}),n&&(0,a.jsx)(m,{}),Y]}))]})}),he=me,ye=e(21076),ge=e(40072),Ce=e(3840),Pe=function(D){var o=D.flattenNodes,d=D.onFlattenNodesChange,n=D.onNodesChange,t=D.beforeNodesChange,u=D.afterNodesChange,O=D.flattenEdges,A=D.onEdgesChange,Y=D.beforeEdgesChange,k=D.afterEdgesChange,G=D.onFlattenEdgesChange,Q=D.onNodesTreeChange,pe=D.onViewPortChange,te=D.editorRef,le=(0,ge.N)((0,L.AC)()),re=(0,L.AC)(),ue=function(je,Se){le(je,Se,[Se],function(Ae){if(!U()(Se,re.getState()[je])){re.setState(Ae);var We=re.getState(),we=We.yjsDoc;we.updateHistoryData(Ae)}})},xe=(0,i._K)();return le("reactflow",xe),le("onViewPortChange",pe),(0,a.jsx)(Ce.Z,{flattenNodes:o,flattenEdges:O,editorRef:te,onEdgesChange:A,onNodesChange:n,beforeNodesChange:t,beforeEdgesChange:Y,afterEdgesChange:k,afterNodesChange:u,onNodesTreeChange:Q,onFlattenEdgesChange:G,onFlattenNodesChange:d,useStateUpdater:ue})},Ne=Pe,be=["devtools","onNodesInit","beforeConnect","onConnect","afterConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],Te=(0,c.forwardRef)(function(b,D){var o=b.devtools,d=b.onNodesInit,n=b.beforeConnect,t=b.onConnect,u=b.afterConnect,O=b.defaultViewport,A=b.contextMenuEnabled,Y=b.flowProps,k=b.nodeTypes,G=b.children,Q=b.miniMap,pe=b.background,te=g()(b,be);return(0,a.jsx)(r.NL,{initiallyActiveScopes:["flow-editor"],children:(0,a.jsxs)(ye.N,{showDevtools:o,children:[(0,a.jsx)(he,{ref:D,nodeTypes:k,miniMap:Q,background:pe,onNodesInit:d,beforeConnect:n,onConnect:t,afterConnect:u,contextMenuEnabled:A,defaultViewport:O,flowProps:Y,children:G}),(0,a.jsx)(Ne,l()({},te))]})})}),Me=Te},20306:function(ee,S,e){"use strict";e.d(S,{d:function(){return v}});var y=e(26068),l=e.n(y),f=e(67825),g=e.n(f),c=e(62758),r=e(75271),_=e(25436),E=e(67265),M=["yjsDoc","flattenEdges","selectedKeys","onFlattenNodesChange","onEdgesChange","onFlattenEdgesChange","onNodesChange","beforeNodesChange","afterNodesChange","onViewPortChange","onNodesTreeChange","onSelectionChange","onElementSelectChange","updateEdgesOnEdgeChange","updateEdgesOnConnection","internalUpdateEdges","internalUpdateNodes","internalUpdateSelection"],v=function(){var N=(0,E.AC)(),U=(0,_._K)(),h=N.getState(),W=h.yjsDoc,i=h.flattenEdges,C=h.selectedKeys,F=h.onFlattenNodesChange,K=h.onEdgesChange,I=h.onFlattenEdgesChange,z=h.onNodesChange,B=h.beforeNodesChange,T=h.afterNodesChange,H=h.onViewPortChange,L=h.onNodesTreeChange,a=h.onSelectionChange,s=h.onElementSelectChange,P=h.updateEdgesOnEdgeChange,w=h.updateEdgesOnConnection,m=h.internalUpdateEdges,x=h.internalUpdateNodes,p=h.internalUpdateSelection,$=g()(h,M),X=(0,c.Z)(function(){return N.getState().flattenNodes}),J=(0,c.Z)(function(){return N.getState().flattenEdges}),Z=(0,c.Z)(function(){return N.getState().selectedKeys}),q=(0,r.useCallback)(function(V){return U?U.screenToFlowPosition(V):{x:0,y:0}},[U]);return(0,r.useMemo)(function(){return l()(l()({},$),{},{screenToFlowPosition:q,getFlattenNodes:X,getSelectedKeys:Z,getFlattenEdges:J})},[$])}},54024:function(ee,S,e){"use strict";e.r(S),e.d(S,{FlowEditor:function(){return y.Z},FlowEditorProvider:function(){return l.N},findNodeById:function(){return M.n},flowEditorSelectors:function(){return g.k},memoEqual:function(){return E.N},useFlowEditor:function(){return f.d}});var y=e(20586),l=e(21076),f=e(20306),g=e(19438),c=e(72197),r={};for(var _ in c)["default","FlowEditor","FlowEditorProvider","useFlowEditor","memoEqual","findNodeById","flowEditorSelectors"].indexOf(_)<0&&(r[_]=function(v){return c[v]}.bind(0,_));e.d(S,r);var E=e(1402),M=e(49566)},67265:function(ee,S,e){"use strict";e.d(S,{zt:function(){return be},ze:function(){return Pe},oR:function(){return Te},AC:function(){return Me}});var y=e(89986),l=e(71730),f=e(79734),g=e(45785),c=e(48305),r=e.n(c),_=e(62657),E=e.n(_),M=e(21742),v=e.n(M),j=e(83136),N=e.n(j),U=e(17069),h=e.n(U),W=e(25298),i=e.n(W),C=e(82092),F=e.n(C),K=e(7034),I=h()(function b(D){i()(this,b),F()(this,"type",void 0),F()(this,"name",void 0),F()(this,"timestamp",void 0),this.type=D.type,this.name=D.name,this.timestamp=D.timestamp}),z=function(b){v()(o,b);var D=N()(o);function o(d){var n;return i()(this,o),n=D.call(this,d),F()(E()(n),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),F()(E()(n),"undoManager",void 0),F()(E()(n),"updateHistoryData",function(t){var u=n.getMap(n._internalHistoryKey);Object.entries(t).forEach(function(O){var A=r()(O,2),Y=A[0],k=A[1];u.set(Y,k)})}),F()(E()(n),"recordHistoryData",function(t,u){n.transact(function(){n.updateHistoryData(t)},new I(u))}),F()(E()(n),"getHistoryMap",function(){return n.getMap(n._internalHistoryKey)}),F()(E()(n),"getHistoryJSON",function(){var t=n.getMap(n._internalHistoryKey);return t.toJSON()}),F()(E()(n),"redo",function(){return n.undoManager.redo()}),F()(E()(n),"undo",function(){return n.undoManager.undo()}),n.undoManager=new K.H6(n.getHistoryMap(),{trackedOrigins:new Set([I])}),n}return h()(o)}(K.QW),B=e(26068),T=e.n(B),H={reactflow:{},flattenNodes:{},flattenEdges:{},selectedKeys:[],yjsDoc:new z},L=e(67825),a=e.n(L);function s(b){switch(b.type){case"addNode":return[{item:b.node,type:"add"}];case"addNodes":return Object.keys(b.nodes).map(function(D){return{item:b.nodes[D],type:"add"}});case"deleteNode":return[{id:b.id,type:"remove"}];case"updateNodePosition":return[{id:b.id,type:"position",position:b.position}];default:return[]}}function P(b){switch(b.type){case"addEdge":return[{item:b.edge,type:"add"}];case"addEdges":return Object.keys(b.edges).map(function(D){return{item:b.edges[D],type:"add"}});case"deleteEdge":return[{id:b.id,type:"remove"}];default:return[]}}var w="$$",m="@@",x=function(D,o){return D+m+(o||"")},p=function(D,o,d,n){return x(D,d)+w+x(o,n)},$=function(D){var o=D.split(w),d=_slicedToArray(o,2),n=d[0],t=d[1];if(!n||!t)return{source:"",target:"",sourceHandle:"",targetHandle:""};var u=n.split(m),O=_slicedToArray(u,2),A=O[0],Y=O[1],k=t.split(m),G=_slicedToArray(k,2),Q=G[0],pe=G[1];return{source:A,target:Q,sourceHandle:Y,targetHandle:pe}},X=e(3341),J=e.n(X),Z=e(53874),q=e(62071),V=function(D,o){switch(o.type){case"addEdge":return(0,Z.Uy)(D,function(d){d[o.edge.id]=o.edge});case"addEdges":return(0,Z.Uy)(D,function(d){var n=o.edges;n&&Object.keys(n).forEach(function(t){d[t]||(d[t]=n[t])})});case"updateEdge":return(0,Z.Uy)(D,function(d){var n=o.id,t=o.edge;d[n]=T()(T()({},d[n]),t)});case"updateEdgeData":return(0,Z.Uy)(D,function(d){var n=o.newData,t=o.id,u=o.deepReplace;if(d[t]=T()(T()({},d[t]),{},{data:n}),!!d[t]){var O=d[t];u?d[t]=T()(T()(T()({},d[t]),O),{},{data:T()(T()({},O.data),n)}):d[t]=T()(T()(T()({},d[t]),O),{},{data:(0,q.Z)(O.data,n)})}});case"deleteEdge":return(0,Z.Uy)(D,function(d){delete d[o.id]});case"createEdgeFromConnection":return(0,Z.Uy)(D,function(d){var n=o.edge;d[n.id]=n});default:return D}},R=["type"],ne=function(D,o){return{internalUpdateEdges:function(n,t){var u,O;D({flattenEdges:n},!1,t),(u=(O=o()).onFlattenEdgesChange)===null||u===void 0||u.call(O,n)},dispatchEdges:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},u=t.recordHistory,O=u===void 0?!0:u,A=n.type,Y=a()(n,R),k=o(),G=k.beforeEdgesChange,Q=k.onEdgesChange,pe=k.afterEdgesChange,te=k.internalUpdateEdges,le=k.yjsDoc,re=P(n),ue=V(o().flattenEdges,n);J()(ue,o().flattenEdges)||G&&!G(re)||(Q&&Q(re),pe&&pe(re),te(ue,{type:"dispatchFlattenEdges/".concat(A),payload:Y}),O&&le.recordHistoryData({flattenEdges:ue},{type:"edge",name:n.type,timestamp:Date.now()}))},addEdges:function(n,t){o().dispatchEdges({type:"addEdges",edges:n},t)},updateEdgesOnConnection:function(n){var t=n.source,u=n.target,O=n.sourceHandle,A=n.targetHandle;if(!(!t||!u)){var Y=p(t,u,O,A),k={id:Y,source:t,target:u,sourceHandle:O,targetHandle:A};return o().dispatchEdges({type:"addEdge",edge:k}),k}},updateEdgesOnEdgeChange:function(n){n.forEach(function(t){switch(t.type){case"remove":o().deselectElement(t.id),o().dispatchEdges({type:"deleteEdge",id:t.id})}})},deleteEdge:function(n){o().deselectElement(n),o().dispatchEdges({type:"deleteEdge",id:n})},deleteEdges:function(n){n.forEach(function(t){o().deselectElement(t),o().dispatchEdges({type:"deleteEdge",id:t})})},updateEdgeData:function(n,t){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,O=arguments.length>3?arguments[3]:void 0;o().dispatchEdges({type:"updateEdgeData",id:n,newData:t,deepReplace:u},O)},updateEdge:function(n,t,u){o().dispatchEdges({type:"updateEdge",id:n,edge:t},u)},handleEdgesChange:function(n){var t=o(),u=t.dispatchEdges,O=t.onElementSelectChange,A=t.beforeEdgesChange,Y=t.onEdgesChange,k=t.afterEdgesChange,G=t.deselectElement;n.forEach(function(Q){switch(Q.type){case"add":u({type:"addEdge",edge:Q.item});break;case"remove":G(Q.id),u({type:"deleteEdge",id:Q.id});break;case"select":if(A&&!A(n))return;Y&&Y(n),O(Q.id,Q.selected),k&&k(n)}})}}},oe=function(D,o){switch(o.type){case"addNode":return(0,Z.Uy)(D,function(d){!o.node||!o.node.id||(d[o.node.id]=o.node)});case"addNodes":return(0,Z.Uy)(D,function(d){var n=o.nodes;n&&Object.keys(n).forEach(function(t){d[t]||(d[t]=n[t])})});case"deleteNode":return(0,Z.Uy)(D,function(d){delete d[o.id]});case"updateNodePosition":return(0,Z.Uy)(D,function(d){d[o.id]&&o.position&&(d[o.id].position=o.position)});case"updateNodeMeta":return(0,Z.Uy)(D,function(d){if(d[o.id]){var n=d[o.id];n.data.meta[o.key]=o.value}});case"updateNodeState":return(0,Z.Uy)(D,function(d){if(d[o.id]){var n=d[o.id];n.data.state[o.key]=o.value}});case"updateNodeContent":return(0,Z.Uy)(D,function(d){var n=o.key,t=o.id,u=o.value;if(d[t]){var O=d[t];O.data.content?O.data.content[n]=u:O.data.content=F()({},n,u)}});case"updateNodeData":return(0,Z.Uy)(D,function(d){var n=o.newData,t=o.id,u=o.deepReplace;if(d[t]){var O=d[t];u?O.data=T()(T()({},O.data),n):(0,q.Z)(O.data,n)}});default:return D}},de=["type"],ce=function(D,o){return{internalUpdateNodes:function(n,t){var u,O;J()(n,o().flattenNodes)||(D({flattenNodes:n},!1,t),(u=(O=o()).onFlattenNodesChange)===null||u===void 0||u.call(O,n))},dispatchNodes:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},u=t.recordHistory,O=u===void 0?!0:u,A=o(),Y=A.beforeNodesChange,k=A.onNodesChange,G=A.afterNodesChange,Q=A.internalUpdateNodes,pe=A.yjsDoc,te=n.type,le=a()(n,de),re=s(n),ue=oe(o().flattenNodes,n);J()(ue,o().flattenNodes)||Y&&!Y(re)||(k&&k(re),G&&G(re),Q(ue,{type:"dispatchFlattenNodes/".concat(te),payload:le}),O&&pe.recordHistoryData({flattenNodes:ue},{type:"nodes",name:n.type,timestamp:Date.now()}))},updateNodeMeta:function(n,t,u,O){o().dispatchNodes({type:"updateNodeMeta",id:n,key:t,value:u},O)},updateNodeState:function(n,t,u,O){o().dispatchNodes({type:"updateNodeState",id:n,key:t,value:u},O)},updateNodeContent:function(n,t,u,O){o().dispatchNodes({type:"updateNodeContent",id:n,key:t,value:u},O)},updateNodeData:function(n,t){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,O=arguments.length>3?arguments[3]:void 0;o().dispatchNodes({type:"updateNodeData",id:n,newData:t,deepReplace:u},O)},addNode:function(n){o().dispatchNodes({type:"addNode",node:n})},addNodes:function(n,t){o().dispatchNodes({type:"addNodes",nodes:n},t)},deleteNode:function(n){o().deselectElement(n),o().dispatchNodes({type:"deleteNode",id:n})},deleteNodes:function(n){n.forEach(function(t){o().deselectElement(t),o().dispatchNodes({type:"deleteNode",id:t})})},handleNodesChange:function(n){var t=o(),u=t.dispatchNodes,O=t.onElementSelectChange,A=t.deselectElement,Y=t.beforeNodesChange,k=t.onNodesChange,G=t.afterNodesChange;n.forEach(function(Q){switch(Q.type){case"add":u({type:"addNode",node:Q.item});break;case"position":if(!Q.dragging)break;u({type:"updateNodePosition",position:Q.position,id:Q.id});break;case"remove":A(Q.id),u({type:"deleteNode",id:Q.id});break;case"select":if(Y&&!Y(n))return;k&&k(n),O(Q.id,Q.selected),G&&G(n)}})}}},ie=e(335),se=e.n(ie),Ee=e(90228),_e=e.n(Ee),ae=e(87999),fe=e.n(ae),De=e(15558),me=e.n(De),he=e(67197),ye=(0,he.kP)("0123456789abcdefghijklmnopqrstuvwxyz",16),ge=function(D,o){return{internalUpdateSelection:function(n,t){var u,O;D({selectedKeys:n},!1,t),(u=(O=o()).onSelectionChange)===null||u===void 0||u.call(O,n)},onElementSelectChange:function(n,t){t?o().selectElement(n):o().deselectElement(n)},actionList:function(){var n=o(),t=n.yjsDoc;return{undo:t.undoManager.undoStack.length,redo:t.undoManager.redoStack.length}},selectElement:function(n){o().selectedKeys.includes(n)||o().internalUpdateSelection([].concat(me()(o().selectedKeys),[n]),{type:"selection/selectElement",payload:{id:n}})},selectElements:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;o().internalUpdateSelection(t?[].concat(me()(o().selectedKeys),me()(n)):n,{type:"selection/selectElements",payload:{ids:n}})},selectAll:function(){var n=o().reactflow.getNodes(),t=o().reactflow.getEdges(),u=[].concat(me()(n.map(function(O){return O.id})),me()(t.map(function(O){return O.id})));o().internalUpdateSelection(u,{type:"selection/selectAll",payload:{ids:u}})},deselectElement:function(n){o().internalUpdateSelection(o().selectedKeys.filter(function(t){return t!==n}),{type:"selection/deselectElement",payload:{id:n}})},deselectAll:function(){o().internalUpdateSelection([],{type:"selection/deselectAll",payload:{}})},deleteSelection:function(){var n=o(),t=n.selectedKeys,u=n.flattenEdges,O=n.flattenNodes,A=n.dispatchNodes,Y=n.dispatchEdges,k=n.deselectAll;k(),t.forEach(function(G){O[G]&&A({type:"deleteNode",id:G}),u[G]&&Y({type:"deleteEdge",id:G})})},copySelection:function(){var d=fe()(_e()().mark(function t(){var u,O,A,Y,k,G,Q,pe,te,le;return _e()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:if(u=o(),O=u.selectedKeys,A=u.flattenEdges,Y=u.flattenNodes,O.length!==0){ue.next=3;break}return ue.abrupt("return");case 3:return k=Object.values(Y).filter(function(xe){return O.includes(xe.id)}),G=Object.values(A).filter(function(xe){return O.includes(xe.id)}),Q={nodes:k,edges:G},pe=new Blob([JSON.stringify(Q)],{type:"text/html"}),te=new Blob([JSON.stringify(Q)],{type:"text/plain"}),le=new ClipboardItem({"text/html":pe,"text/plain":te}),ue.next=11,navigator.clipboard.write([le]);case 11:return ue.abrupt("return",Q);case 12:case"end":return ue.stop()}},t)}));function n(){return d.apply(this,arguments)}return n}(),paste:function(){var d=fe()(_e()().mark(function t(){var u;return _e()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,navigator.clipboard.read();case 2:u=A.sent,u.forEach(function(Y){var k=se()(Y.types),G;try{for(k.s();!(G=k.n()).done;){var Q=G.value;if(Q==="text/plain"){var pe=Y.getType(Q);pe.then(function(te){te.text().then(function(le){var re=void 0;try{re=JSON.parse(le)}catch(ue){}re&&o().pasteIntoFlow(re)})})}}}catch(te){k.e(te)}finally{k.f()}});case 4:case"end":return A.stop()}},t)}));function n(){return d.apply(this,arguments)}return n}(),pasteIntoFlow:function(n){var t=o(),u=t.yjsDoc,O=t.addEdges,A=t.addNodes,Y=t.deselectAll,k=t.selectElements,G={},Q={};Y(),n.nodes.forEach(function(te){var le=ye();G[le]=T()(T()({},te),{},{id:le,position:{x:te.position.x+10,y:te.position.y+10}}),n.edges.forEach(function(re){re.source===te.id&&(re.source=le),re.target===te.id&&(re.target=le)})}),n.edges.forEach(function(te){var le=p(te.source,te.target,te.sourceHandle,te.targetHandle);Q[le]=T()(T()({},te),{},{id:le})}),A(G,{recordHistory:!1}),O(Q,{recordHistory:!1}),u.recordHistoryData({flattenNodes:o().flattenNodes,flattenEdges:o().flattenEdges},{type:"paste",name:"\u7C98\u8D34",timestamp:Date.now()});var pe=Object.keys(G).concat(Object.keys(Q));k(pe)},undo:function(){var n=o(),t=n.yjsDoc,u=n.internalUpdateEdges,O=n.internalUpdateNodes,A=t.undo(),Y=t.getHistoryJSON(),k=Y.flattenNodes,G=Y.flattenEdges;O(k||{},{type:"history/undo",payload:A}),u(G||{},{type:"history/undo",payload:A})},redo:function(){var n=o(),t=n.yjsDoc,u=n.internalUpdateEdges,O=n.internalUpdateNodes,A=t.redo(),Y=t.getHistoryJSON(),k=Y.flattenNodes,G=Y.flattenEdges;O(k,{type:"history/redo",payload:A}),u(G,{type:"history/redo",payload:A})}}},Ce=function(D){return function(){return T()(T()(T()(T()({},H),{},{yjsDoc:D},ne.apply(void 0,arguments)),ce.apply(void 0,arguments)),ge.apply(void 0,arguments))}},Pe=function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,o=new z;return(0,l.F)()((0,f.v)(D)(Ce(o),{name:"FLOW_EDITOR"}),y.X)},Ne=(0,g.k)(),be=Ne.Provider,Te=Ne.useStore,Me=Ne.useStoreApi},19438:function(ee,S,e){"use strict";e.d(S,{k:function(){return g}});var y=e(26068),l=e.n(y),f=function(r){return Object.values(r.flattenNodes).map(function(_){return l()(l()({},_),{},{selected:r.selectedKeys.includes(_.id)})})},g={nodeList:f,edgeList:function(r){return Object.values(r.flattenEdges||{}).map(function(_){return l()(l()({},_),{},{selected:r.selectedKeys.includes(_.id)})})}}},72197:function(ee,S,e){"use strict";e.r(S);var y=e(11396),l=e.n(y),f={};for(var g in y)g!=="default"&&(f[g]=function(c){return y[c]}.bind(0,g));e.d(S,f)},11396:function(){},1402:function(ee,S,e){"use strict";e.d(S,{N:function(){return _}});var y=e(67825),l=e.n(y),f=e(3341),g=e.n(f),c=["xPos","yPos"],r=["xPos","yPos"],_=function(M,v){var j=M.xPos,N=M.yPos,U=l()(M,c),h=v.xPos,W=v.yPos,i=l()(v,r);return g()(U,i)}},49566:function(ee,S,e){"use strict";e.d(S,{n:function(){return f}});var y=e(335),l=e.n(y),f=function c(r,_){var E=l()(r),M;try{for(E.s();!(M=E.n()).done;){var v=M.value;if(v.id===_)return v;var j=c(v.children,_);if(j)return j}}catch(N){E.e(N)}finally{E.f()}},g=function c(r,_){var E=_createForOfIteratorHelper(r),M;try{for(E.s();!(M=E.n()).done;){var v=M.value;if(v.children.some(function(N){return N.id===_}))return v;var j=c(v.children,_);if(j)return j}}catch(N){E.e(N)}finally{E.f()}}},83520:function(ee,S,e){"use strict";var y=e(25436),l=e(52676);S.Z=function(f){var g=f.position,c=g===void 0?"top-left":g,r=f.children;return(0,l.jsx)(y.s_,{position:c,children:r})}},68037:function(ee,S,e){"use strict";e.d(S,{o:function(){return v}});var y=e(26068),l=e.n(y),f=e(67825),g=e.n(f),c=e(75271),r=e(67265),_=e(3840),E=e(52676),M=["showDevtools","children"],v=(0,c.memo)(function(j){var N=j.showDevtools,U=j.children,h=g()(j,M);return(0,E.jsxs)(r.zt,{createStore:function(){return(0,r.ze)(N)},children:[U,(0,E.jsx)(_.Z,l()({},h))]})})},64152:function(ee,S,e){"use strict";e.d(S,{Z:function(){return q}});var y=e(26068),l=e.n(y),f=e(75271),g=e(51934),c=e(95160),r=e(25436),_=e(42622),E=e(44209),M=e(80631),v=e(26009),j=e(57530),N=e(87340),U=e(53649),h=e.n(U),W=e(85833),i=e(27197),C,F,K,I,z,B,T,H,L,a=(0,W.kc)(function(V){var R=V.css,ne=V.cx;return{container:R(C||(C=h()([`
    width: 100%;
    height: 100%;

    .react-flow__attribution {
      display: none;
    }

    .`,` {
      padding: 0;
      box-sizing: border-box;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      z-index: 1;
    }

    .`,` path {
      stroke: #1677ff;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #1677ff;
      stroke-width: 1;
      z-index: 100;
    }

    .`,`:hover path {
      stroke: red;
      stroke-width: 1;
      z-index: 100;
    }

    .`,` path {
      stroke: #f7636e;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #f7636e;
      stroke-width: 1;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 1;
      z-index: 100;
    }

    .selectable:focus {
      box-shadow: none !important;
    }

    .selected {
      box-shadow: none !important;
    }
  `])),i.$D,i._H,i.ph,i.ph,i.Ts,i.l8,i.H0,i.BP),nodeWrap:ne(R(F||(F=h()([`
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 8px;
      padding: 16px 12px;
      box-sizing: border-box;
      /* border: 3px solid white; */
      flex: 1;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

      .img {
        width: 48px;
        height: 48px;
      }

      .content {
        width: 230px;
        margin-left: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .title {
          width: 100%;
          display: flex;
          flex: 1;

          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 85%);
            line-height: 22px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
          }

          .dangerLogo {
            width: 28px;
            height: 16px;
            background: #ffeef1;
            border-radius: 7px;
            margin-left: 8px;
            margin-top: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 8px;
              height: 9px;
            }
          }
        }

        .des {
          font-size: 14px;
          color: rgba(0, 0, 0, 45%);
          line-height: 20px;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
      }
    `])))),nodeSelected:R(K||(K=h()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:R(I||(I=h()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:R(z||(z=h()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:R(B||(B=h()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:R(T||(T=h()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:R(H||(H=h()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:R(L||(L=h()([""])))}}),s=e(52676),P=function(R){var ne=R.data,oe=a(),de=oe.styles,ce=oe.cx,ie=ne.className,se=ne.children;return(0,s.jsx)("div",{className:ce(de.nodeWrap,ie),children:se})},w=P,m=e(43745),x=(0,f.createContext)({}),p=function(){},$=function(R){var ne=R.onNodeDragStart,oe=ne===void 0?p:ne,de=R.onPaneClick,ce=de===void 0?p:de,ie=R.onNodeClick,se=ie===void 0?p:ie,Ee=R.onEdgeClick,_e=Ee===void 0?p:Ee,ae=R.onNodesChange,fe=ae===void 0?p:ae,De=R.onEdgesChange,me=De===void 0?p:De,he=R.nodes,ye=he===void 0?[]:he,ge=R.edges,Ce=ge===void 0?[]:ge,Pe=R.nodeTypes,Ne=Pe===void 0?{}:Pe,be=R.edgeTypes,Te=be===void 0?{}:be,Me=R.miniMap,b=Me===void 0?!0:Me,D=R.children,o=R.background,d=o===void 0?!0:o,n=R.autoLayout,t=n===void 0?!0:n,u=R.stepLessZooming,O=u===void 0?!1:u,A=R.flowProps,Y=R.minZoom,k=Y===void 0?.1:Y,G=R.maxZoom,Q=G===void 0?2:G,pe=R.className,te=R.layoutOptions,le=te===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:te,re=(0,f.useContext)(m.b),ue=re.miniMapPosition,xe=re.flowDataAdapter,Ue=re.flowViewRef,je=re.nodes,Se=re.edges,Ae=a(),We=Ae.styles,we=Ae.cx,Fe=(0,f.useMemo)(function(){return l()(l()({},Ne),{},{BasicNode:c.Z,BasicNodeGroup:g.Z,default:w})},[]),ze=(0,f.useMemo)(function(){return l()(l()({},Te),{},{radius:M.Z})},[]),Ie=(0,r.Sj)(),Re=Ie.zoom;(0,f.useEffect)(function(){var ve=Re||1;xe(ye,Ce,ve,t,le)},[ye,Ce]),(0,f.useEffect)(function(){O&&xe(ye,Ce,Re,t,le)},[Re]);var Ze=(0,f.useCallback)(function(ve){fe(ve)},[fe]),$e=(0,f.useCallback)(function(ve){me(ve)},[me]),Le=(0,f.useCallback)(function(ve,Be,Oe){oe(ve,Be,Oe)},[oe]),He=(0,f.useCallback)(function(){},[]),Ve=(0,f.useCallback)(function(ve){ce(ve)},[ce]),Ge=(0,f.useCallback)(function(ve,Be){se(ve,Be)},[se]),Ke=(0,f.useCallback)(function(ve,Be){_e(ve,Be)},[_e]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.x$,l()(l()({ref:Ue,className:we(We.container,pe),onNodeDragStart:Le,onNodeDragStop:He,onPaneClick:Ve,onNodeClick:Ge,onEdgeClick:Ke,onNodesChange:Ze,onEdgesChange:$e,nodes:je,edges:Se,nodeTypes:Fe,edgeTypes:ze,panOnScroll:!0,fitView:!0,minZoom:k,maxZoom:Q},A),{},{children:[b&&(0,s.jsx)(v.Z,{language:j.S.zh_CN,position:ue,className:"pro-flow-controller"}),D,d&&(0,s.jsx)(N.default,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:_.T.Dots})]}))})},X=$,J=e(51848),Z=function(R){var ne=(0,f.useContext)(m.b),oe=ne.isUseProvider;return oe?(0,s.jsx)(X,l()({},R)):(0,s.jsx)(J.G,{children:(0,s.jsx)(X,l()({},R))})},q=Z},27197:function(ee,S,e){"use strict";e.d(S,{$D:function(){return h},BP:function(){return U},H0:function(){return N},HM:function(){return _},QB:function(){return y},Ts:function(){return v},Vc:function(){return f},_H:function(){return E},eK:function(){return c},hK:function(){return l},l8:function(){return j},mc:function(){return g},ph:function(){return M},r0:function(){return r}});var y=function(i){return i.SELECT="SELECT",i.SUB_SELECT="SUB_SELECT",i.DANGER="DANGER",i.SUB_DANGER="SUB_DANGER",i.WARNING="WARNING",i.SUB_WARNING="SUB_WARNING",i.DEFAULT="DEFAULT",i}({}),l="nodeSelected",f="nodeSubSelected",g="nodeDanger",c="nodeSubDanger",r="nodeWarning",_="nodeSubWarning",E="edgeSelected",M="edgeSubSelected",v="edgeDanger",j="edgeSubDanger",N="edgeWarning",U="edgeSubWarning",h="initialNode",W="nodeWrap"},60106:function(ee,S,e){"use strict";e.d(S,{R:function(){return c}});var y=e(48305),l=e.n(y),f=e(75271),g=e(25436),c=function(_){var E=(0,f.useState)(_),M=l()(E,2),v=M[0],j=M[1],N=(0,f.useCallback)(function(U){j(function(h){return(0,g.Fb)(U,h)})},[v]);return[v,j,N]}},63016:function(ee,S,e){"use strict";e.d(S,{Zi:function(){return M},to:function(){return E},x5:function(){return _}});var y=e(90228),l=e.n(y),f=e(87999),g=e.n(f),c=e(75271),r=e(43745),_=function(){var j=(0,c.useContext)(r.b),N=j.reactFlowInstance;return{reactFlowInstance:N}},E=function(){var j=(0,c.useContext)(r.b),N=j.setMiniMapPosition,U=function(W,i){N({x:W,y:i})};return{setMiniMapPosition:U}},M=function(){var j=(0,c.useContext)(r.b),N=j.updateSelectNode,U=j.updateSelectEdge,h=j.updateSelectEdges,W=j.updateSelectNodes,i=j.setMiniMapPosition,C=j.reactFlowInstance,F=j.flowViewRef,K=(0,c.useCallback)(function(m){if(C)return C.getNode(m)},[C]),I=(0,c.useCallback)(function(){if(C)return C.getNodes()},[C]),z=(0,c.useCallback)(function(m,x){C&&C.zoomTo(m,{duration:x})},[C]),B=(0,c.useCallback)(function(m,x){var p=K(m);p&&C&&C.fitView({nodes:[{id:m}],duration:x})},[K,C]),T=(0,c.useCallback)(function(m,x){i&&i({x:m,y:x})},[i]),H=(0,c.useCallback)(function(){if(C)return C.getViewport()},[C]),L=(0,c.useCallback)(function(m,x){if(C)return C.setViewport(m,{duration:x})},[C]),a=(0,c.useCallback)(function(m){if(C)return C.fitView({duration:m})},[C]),s=(0,c.useCallback)(g()(l()().mark(function m(){return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:document.exitFullScreen();case 1:case"end":return p.stop()}},m)})),[]),P=(0,c.useCallback)(function(){setTimeout(function(){a()},500)},[a]),w=(0,c.useCallback)(g()(l()().mark(function m(){return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:(F==null?void 0:F.current).requestFullscreen().then(function(){P()}).catch(function($){console.error($)});case 1:case"end":return p.stop()}},m)})),[P]);return(0,c.useEffect)(function(){P&&document.addEventListener("fullscreenchange",P)},[P]),{selectNode:N,selectEdge:U,selectEdges:h,selectNodes:W,getNode:K,getNodes:I,zoomTo:z,getViewport:H,setViewport:L,zoomToNode:B,fitView:a,setMiniMapPosition:T,instance:C,fullScreen:w,exitFullScreen:s}}},51848:function(ee,S,e){"use strict";e.d(S,{G:function(){return L}});var y=e(15558),l=e.n(y),f=e(26068),g=e.n(f),c=e(48305),r=e.n(c),_=e(75271),E=e(25436),M=e(79511),v=e.n(M),j=e(85833),N=e(27197);function U(a,s,P){var w={};return a.forEach(function(m){var x=m.width,p=m.height,$=m.select,X=$===void 0?N.QB.DEFAULT:$,J=m.type,Z=J===void 0?"BasicNode":J,q=m.position,V=q===void 0?{x:NaN,y:NaN}:q;w[m.id]=g()(g()({},m),{},{id:m.id,data:m.data,select:X,type:Z,right:[],left:[],position:V,width:x,height:p,zoom:P,label:m.label})}),s.forEach(function(m){var x,p,$=m.source,X=m.target;w[$]&&((x=w[$].right)===null||x===void 0||x.push(X)),w[X]&&((p=w[X].left)===null||p===void 0||p.push($))}),w}function h(a,s,P,w){if(!P)return{_nodes:a.map(function(x){var p=x.position,$=p.x,X=p.y;return g()(g()({},x),{},{position:{x:isNaN($)?1:$,y:isNaN(X)?1:X}})}),_edges:s};var m=new(v()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return m.setGraph(g()({rankdir:"LR",align:"UL",nodesep:100,ranksep:200},w)),s.forEach(function(x){return m.setEdge(x.source,x.target)}),a.forEach(function(x){return m.setNode(x.id,x)}),v().layout(m),{_nodes:a.map(function(x){var p=m.node(x.id),$=p.x,X=p.y,J=x.position,Z=J.x,q=J.y;return g()(g()({},x),{},{position:{x:isNaN(Z)?$:Z,y:isNaN(q)?X:q}})}),_edges:s}}function W(a){var s=a.filter(function(m){var x,p;return((x=m.className)===null||x===void 0?void 0:x.includes("edgeSelected"))||((p=m.className)===null||p===void 0?void 0:p.includes("edgeSubSelected"))}),P=a.filter(function(m){var x,p;return((x=m.className)===null||x===void 0?void 0:x.includes("edgeDanger"))||((p=m.className)===null||p===void 0?void 0:p.includes("edgeSubDanger"))}),w=a.filter(function(m){var x,p,$,X;return!((x=m.className)!==null&&x!==void 0&&x.includes("edgeSelected"))&&!((p=m.className)!==null&&p!==void 0&&p.includes("edgeSubSelected"))&&!(($=m.className)!==null&&$!==void 0&&$.includes("edgeDanger"))&&!((X=m.className)!==null&&X!==void 0&&X.includes("edgeSubDanger"))});return[].concat(l()(w),l()(P),l()(s))}function i(a){switch(a){case N.QB.SELECT:return N._H;case N.QB.SUB_SELECT:return N.ph;case N.QB.DANGER:return N.Ts;case N.QB.SUB_DANGER:return N.l8;case N.QB.WARNING:return N.H0;case N.QB.SUB_WARNING:return N.BP;default:return"edgeDefault"}}function C(a){return a.map(function(s){var P=s.source,w=s.target,m=s.select,x=m===void 0?N.QB.DEFAULT:m,p=s.type,$=p===void 0?"smoothstep":p,X=s.label,J=s.animated,Z=s.sourceHandle,q=s.targetHandle,V=s.className,R=s.data,ne=s.id,oe=ne===void 0?"".concat(P,"-").concat(w):ne,de=i(x)+" "+V;return g()(g()({},s),{},{id:oe,source:P,target:w,sourceHandle:Z,targetHandle:q,type:$,animated:J,select:x,label:X,data:g()({select:x,className:de},R),className:de})})}var F=function(s){return s.type==="BasicNode"?{width:320,height:83}:s.type==="BasicNodeGroup"?{width:355,height:1100}:{width:s.width||1,height:s.height||1}},K=function(s){var P,w,m,x;return((P=s.left)===null||P===void 0?void 0:P.length)===0&&((w=s.right)===null||w===void 0?void 0:w.length)===0?"none":((m=s.left)===null||m===void 0?void 0:m.length)===0?"input":((x=s.right)===null||x===void 0?void 0:x.length)===0?"output":"both"},I=function(s){return s.type==="BasicNode"?g()(g()({},s.data),{},{selectType:s.select,label:s.label,zoom:s.zoom,handleType:K(s)}):s.type==="BasicNodeGroup"?{data:s.data,selectType:s.select,label:s.label,zoom:s.zoom,handleType:K(s)}:g()(g()({},s.data),{},{selectType:s.select,zoom:s.zoom,label:s.label})},z=function(s,P,w,m){var x=[],p=C(P);Object.keys(s).forEach(function(Z){var q=s[Z],V=q.type,R=F(q),ne=R.width,oe=R.height;x.push(g()(g()({},q),{},{sourcePosition:E.Ly.Right,targetPosition:E.Ly.Left,id:q.id,position:q.position,type:V,width:ne,height:oe,className:(0,j.cx)(N.$D),data:I(q)}))});var $=h(x,p,w,m),X=$._nodes,J=$._edges;return{nodes:X,edges:W(J)}},B=e(43745),T=e(52676),H=function(s){var P=s.children,w=(0,_.useState)({x:10,y:10}),m=r()(w,2),x=m[0],p=m[1],$=(0,E._K)(),X=(0,_.useState)([]),J=r()(X,2),Z=J[0],q=J[1],V=(0,_.useState)([]),R=r()(V,2),ne=R[0],oe=R[1],de=(0,_.useState)(void 0),ce=r()(de,2),ie=ce[0],se=ce[1],Ee=(0,_.useState)({}),_e=r()(Ee,2),ae=_e[0],fe=_e[1],De=(0,_.useState)(!0),me=r()(De,2),he=me[0],ye=me[1],ge=(0,_.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),Ce=r()(ge,2),Pe=Ce[0],Ne=Ce[1],be=(0,_.useRef)(),Te=(0,_.useCallback)(function(){var n=z(ae,ie,he,Pe),t=n.nodes,u=n.edges;q(t),oe(u)},[ae,ie,he,Pe]),Me=(0,_.useCallback)(function(n,t,u,O,A){n.length!==0&&(fe(U(n,t,u)),se(t),ye(O),Ne(A))},[]);(0,_.useEffect)(function(){Object.keys(ae).length&&ie&&Te()},[ae,ie]);var b=(0,_.useCallback)(function(n,t){var u=ae[n];u&&(u.select=t,fe(g()({},ae)))},[ae]),D=(0,_.useCallback)(function(n,t){n.forEach(function(u){b(u,t)})},[ae]),o=(0,_.useCallback)(function(n,t){var u=ie==null?void 0:ie.find(function(O){return O.id===n});u&&(u.select=t,se(l()(ie)))},[ie]),d=(0,_.useCallback)(function(n,t){n.forEach(function(u){o(u,t)})},[ae]);return(0,T.jsx)(B.b.Provider,{value:{nodes:Z,edges:ne,isUseProvider:!0,reactFlowInstance:$,miniMapPosition:x,flowViewRef:be,setMiniMapPosition:p,flowDataAdapter:Me,updateSelectNode:b,updateSelectNodes:D,updateSelectEdge:o,updateSelectEdges:d},children:P})},L=function(s){var P=s.children;return(0,T.jsx)(E.tV,{children:(0,T.jsx)(H,{children:P})})}},43745:function(ee,S,e){"use strict";e.d(S,{b:function(){return l}});var y=e(75271),l=(0,y.createContext)({})},99713:function(ee,S,e){"use strict";e.d(S,{I:function(){return C},K:function(){return F}});var y=e(26068),l=e.n(y),f=e(67825),g=e.n(f),c=e(91707),r=e(75271),_=e(53649),E=e.n(_),M=e(85833),v,j,N,U=(0,M.kc)(function(K){var I=K.css,z=K.token;return{input:I(v||(v=E()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),z.motionEaseOut),block:I(j||(j=E()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),z.colorFillTertiary,z.colorFillQuaternary),textarea:I(N||(N=E()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),z.motionEaseOut)}}),h=e(52676),W=["className","type"],i=["className","type"],C=(0,r.forwardRef)(function(K,I){var z=K.className,B=K.type,T=B===void 0?"ghost":B,H=g()(K,W),L=U(),a=L.styles,s=L.cx;return(0,h.jsx)(c.Z,l()({className:s(a.input,T==="block"&&a.block,z),ref:I},H))}),F=(0,r.memo)((0,r.forwardRef)(function(K,I){var z=K.className,B=K.type,T=B===void 0?"ghost":B,H=g()(K,i),L=U(),a=L.styles,s=L.cx;return(0,h.jsx)(c.Z.TextArea,l()({className:s(a.textarea,T==="block"&&a.block,z),ref:I},H))}))},84041:function(ee,S,e){"use strict";e.d(S,{Z:function(){return W}});var y=e(26068),l=e.n(y),f=e(82092),g=e.n(f),c=e(67825),r=e.n(c),_=e(8730),E=e(75271),M=e(85833),v=(0,M.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),j=v,N=e(52676),U=["open","width","mask","style","rootStyle","className","onClose","children"],h=function(C){var F=C.open,K=C.width,I=C.mask,z=I===void 0?!1:I,B=C.style,T=B===void 0?{}:B,H=C.rootStyle,L=H===void 0?{}:H,a=C.className,s=C.onClose,P=s===void 0?function(){}:s,w=C.children,m=r()(C,U),x=j(),p=x.styles,$=x.cx;return(0,N.jsx)(_.Z,l()(l()({open:F,onClose:P,width:K,mask:z,className:a?$(g()(g()({},p.dataFlowDrawer,!0),"className",!0)):p.dataFlowDrawer,getContainer:!1,style:l()(l()({},T),{},{padding:"0 0"}),rootStyle:l()(l()({},L),{},{position:"absolute"})},m),{},{children:w}))},W=h},26009:function(ee,S,e){"use strict";var y=e(82092),l=e.n(y),f=e(53649),g=e.n(f),c=e(91400),r=e(64756),_=e(17288),E=e(74389),M=e(85368),v=e(76062),j=e(15498),N=e(73116),U=e(85833),h=e(75271),W=e(90142),i=e(25436),C=e(28587),F=e(57530),K=e(52676),I,z,B,T=(0,U.kc)(function(a,s){var P=a.css,w=a.token,m=s.x,x=s.y;return{container:P(I||(I=g()([`
      position: absolute;
      bottom: `,`px;
      right: `,`px;
      z-index: 100;
      transition: right 0.2s ease;

      .actionBox {
        width: 192px;
        height: 38px;
        display: flex;
        justify-content: space-evenly;
      }

      .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
        border-color: `,`;
      }
    `])),x,m,w.colorBorder),visible:P(z||(z=g()([`
      display: none;
    `]))),minimap:P(B||(B=g()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),w.colorBgContainer)}}),H=l()(l()({},F.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),F.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),L=function(s){var P=s.visible,w=P===void 0?!0:P,m=s.className,x=m===void 0?"":m,p=s.position,$=p===void 0?{x:10,y:10}:p,X=s.language,J=X===void 0?F.S.zh_CN:X,Z=(0,i._K)(),q=(0,i.Sj)(),V=q.zoom,R=T($),ne=R.styles,oe=R.cx,de=R.theme,ce=function(){Z.zoomIn()},ie=function(){Z.zoomOut()},se=function(){Z.fitView()},Ee=function(){V===1?Z.zoomTo(.5):Z.zoomTo(1)},_e=[{icon:(0,K.jsx)(c.Z,{}),title:H[J].zoomOut,onClick:ie},{title:V===1?H[J].zoomTo2:H[J].zoomTo1,onClick:Ee,children:Math.round(V*100)+"%",style:{width:56}},{icon:(0,K.jsx)(r.Z,{}),title:H[J].zoomIn,onClick:ce},{icon:(0,K.jsx)(_.Z,{}),title:H[J].zoomFit,onClick:se}];return(0,K.jsxs)(W.D,{gap:12,align:"center",className:oe(ne.container,x,!w&&ne.visible),children:[(0,K.jsx)(E.ZP,{theme:{algorithm:[de.isDarkMode?M.Z.darkAlgorithm:M.Z.defaultAlgorithm,M.Z.compactAlgorithm]},children:(0,K.jsx)(W.D,{horizontal:!0,align:"center",children:(0,K.jsx)(v.Z,{className:"actionBox",children:_e.map(function(ae,fe){return(0,K.jsx)(j.Z,{arrow:!1,title:ae.title,children:(0,K.jsx)(N.ZP,{onClick:ae.onClick,icon:ae.icon,style:ae.style,children:ae.children})},fe)})})})}),(0,K.jsx)(C.a,{className:ne.minimap,maskColor:de.colorBgMask,nodeColor:function(fe){return fe.data.color?fe.data.color:de.colorFill}})]})};S.Z=L},6568:function(ee,S,e){"use strict";e.d(S,{Q:function(){return s},n:function(){return H}});var y=e(26068),l=e.n(y),f=e(48305),g=e.n(f),c=e(53649),r=e.n(c),_=e(87075),E=e(64368),M=e(74389),v=e(85833),j=e(75271),N=e(90142),U=e(25436),h=e(65720),W=e(83274),i=e(52676),C,F,K,I,z,B,T="editor-field-item",H=(0,v.kc)(function(P){var w=P.css,m=P.token,x=P.cx,p=w(C||(C=r()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),m.colorBgElevated,m.colorPrimary);return{title:x("".concat(T,"-title"),w(F||(F=r()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),m.colorText)),extra:x(w(K||(K=r()([`
        position: relative;
      `])))),value:w(I||(I=r()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),m.colorBgLayout),handle:p,handleRight:w(z||(z=r()([`
      `,`;
      right: -35px;
    `])),p),handleLeft:w(B||(B=r()([`
      `,`;
      left: -35px;
    `])),p)}}),L=(0,j.memo)(function(P){var w=P.children,m=P.title,x=P.extra,p=P.collapsed,$=P.onCollapsedChange,X=P.valueContainer,J=P.classNames,Z=J===void 0?{}:J,q=P.handles,V=q===void 0?{}:q,R=P.id,ne=P.className,oe=P.style,de=H(),ce=de.styles,ie=de.theme,se=de.cx,Ee=(0,W.oR)(function(ge){return[ge.collapsedKeys,ge.toggleCollapsedKey]}),_e=g()(Ee,2),ae=_e[0],fe=_e[1],De=(0,h.Z)(ae.includes(R),{value:typeof p=="undefined"?ae.includes(R):p,onChange:function(Ce){fe(R),$==null||$(Ce)}}),me=g()(De,2),he=me[0],ye=me[1];return(0,i.jsxs)(N.D,{gap:12,className:se("".concat(T,"-container"),ne),style:oe,children:[m&&(0,i.jsxs)(N.D,{horizontal:!0,distribution:"space-between",align:"center",className:se("".concat(T,"-header"),Z==null?void 0:Z.header),children:[(0,i.jsxs)(N.D,{className:se(ce.title,Z==null?void 0:Z.title),children:[!!(V!=null&&V.source)&&(0,i.jsx)(U.HH,{id:typeof(V==null?void 0:V.source)=="string"?V==null?void 0:V.source:R,type:"target",position:U.Ly.Left,className:ce.handleLeft}),m]}),(0,i.jsxs)(N.D,{horizontal:!0,gap:4,className:se(ce.extra,"".concat(T,"-extra"),Z==null?void 0:Z.extra,"nodrag"),children:[(0,i.jsxs)(M.ZP,{theme:{token:{colorText:ie.colorTextSecondary}},children:[he?null:x&&x.map(function(ge,Ce){return(0,i.jsx)(E.Z,{icon:ge.icon,title:ge.title,onClick:ge.onClick},ge.title||""+Ce)}),(0,i.jsx)(E.Z,{icon:(0,i.jsx)(_.Z,{rotate:he?-90:0}),title:he?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){ye(!he)}})]}),!!(V!=null&&V.target)&&(0,i.jsx)(U.HH,{id:typeof(V==null?void 0:V.target)=="string"?V==null?void 0:V.target:R,type:"source",position:U.Ly.Right,className:ce.handleRight})]})]}),he?null:w&&X===!1?w:(0,i.jsx)("div",{className:se(ce.value,Z.value),children:w})]})}),a=function(w){var m=w.children,x=!0,p=(0,i.jsx)(i.Fragment,{children:m});try{(0,W.AC)()}catch($){x=!1}return x?p:(0,i.jsx)(W.iq,{children:m})},s=(0,j.memo)(function(P){return(0,i.jsx)(a,{children:(0,i.jsx)(L,l()({},P))})})},80631:function(ee,S,e){"use strict";e.d(S,{Z:function(){return c}});var y=e(48305),l=e.n(y),f=e(25436),g=e(52676);function c(r){var _=r.sourceX,E=r.sourceY,M=r.targetX,v=r.targetY,j=r.sourcePosition,N=r.targetPosition,U=r.style,h=U===void 0?{}:U,W=r.markerEnd,i=(0,f.OW)({sourceX:_,sourceY:E,sourcePosition:j,targetX:M,targetY:v,targetPosition:N,borderRadius:50}),C=l()(i,1),F=C[0];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(f.u5,{path:F,markerEnd:W,style:h})})}},57530:function(ee,S,e){"use strict";e.d(S,{Q:function(){return y},S:function(){return l}});var y=function(f){return f.SELECT="SELECT",f.SUB_SELECT="SUB_SELECT",f.DANGER="DANGER",f.SUB_DANGER="SUB_DANGER",f.WARNING="WARNING",f.SUB_WARNING="SUB_WARNING",f.DEFAULT="DEFAULT",f}({}),l=function(f){return f.zh_CN="zh_CN",f.en_US="en_US",f}({})},66880:function(ee,S,e){"use strict";e.r(S),e.d(S,{Background:function(){return l.default},BackgroundVariant:function(){return l.BackgroundVariant},BaseEdge:function(){return y.u5},BasicGroupNode:function(){return f.Z},BasicNode:function(){return g.Z},CanvasLoading:function(){return c.Z},ControlInput:function(){return i.F},EdgeLabelRenderer:function(){return y.XQ},EditNode:function(){return r.Z},EditableText:function(){return _.Z},FlowPanel:function(){return E.Z},FlowStoreProvider:function(){return M.o},FlowView:function(){return v.Z},FlowViewProvider:function(){return z.G},Handle:function(){return y.HH},Input:function(){return B.I},Inspector:function(){return N.Z},Language:function(){return T.S},MiniMap:function(){return U.Z},NodeField:function(){return h.Q},Position:function(){return y.Ly},RadiusEdge:function(){return W.Z},SelectType:function(){return T.Q},SmoothStepEdge:function(){return y.Su},TextArea:function(){return B.K},applyEdgeChanges:function(){return y.yn},applyNodeChanges:function(){return y.Fb},getBezierPath:function(){return y.OQ},getSmoothStepPath:function(){return y.OW},getStraightPath:function(){return y.Hm},useEdgesState:function(){return y.ll},useFlowView:function(){return I.x5},useFlowViewer:function(){return I.Zi},useMiniMap:function(){return I.to},useNodeFieldStyles:function(){return h.n},useNodesState:function(){return j.R}});var y=e(25436),l=e(87340),f=e(51934),g=e(95160),c=e(74600),r=e(91515),_=e(98805),E=e(83520),M=e(68037),v=e(64152),j=e(60106),N=e(84041),U=e(26009),h=e(6568),W=e(80631),i=e(2409),C=e(54024),F={};for(var K in C)["default","BaseEdge","EdgeLabelRenderer","Handle","Position","SmoothStepEdge","applyEdgeChanges","applyNodeChanges","getBezierPath","getSmoothStepPath","getStraightPath","Background","BasicGroupNode","BasicNode","CanvasLoading","EditNode","EditableText","FlowPanel","FlowStoreProvider","FlowView","useEdgesState","useNodesState","Inspector","MiniMap","NodeField","useNodeFieldStyles","RadiusEdge","BackgroundVariant","ControlInput"].indexOf(K)<0&&(F[K]=function(H){return C[H]}.bind(0,K));e.d(S,F);var I=e(63016),z=e(51848),B=e(99713),T=e(57530)},29403:function(ee,S,e){"use strict";e.d(S,{X:function(){return f}});var y=e(27197),l=e(57530);function f(g){switch(g){case l.Q.SELECT:return y.hK;case l.Q.SUB_SELECT:return y.Vc;case l.Q.DANGER:return y.mc;case l.Q.SUB_DANGER:return y.eK;case l.Q.WARNING:return y.r0;case l.Q.SUB_WARNING:return y.HM;default:return"nodeDefault"}}}}]);
