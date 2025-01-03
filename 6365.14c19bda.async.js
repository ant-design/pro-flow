(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[6365],{54926:function(oe,M,e){"use strict";var y=e(26068),l=e.n(y),p=e(53649),f=e.n(p),_=e(51307),s=e(52676),u,v,N=(0,_.kc)(function(b){var D=b.css;return{container:D(u||(u=f()([`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-direction: column; */
  `]))),label:D(v||(v=f()([`
    text-align: center;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #cbcdce;
    color: '#A8AAAE';
  `])))}}),g=function(D){var B=D.lanes,h=D.className,R=D.style,i=N(),x=i.styles;return(0,s.jsx)("div",{className:"".concat(x.container," ").concat(h),style:l()({},R),children:B.map(function(S){return(0,s.jsx)("div",{style:l()({top:0,height:"100%",width:S.width||"100%",backgroundColor:S.backgroundColor||"#FAFAFA",border:"1px solid #cbcdce"},S.style),children:(0,s.jsx)("div",{className:x.label,style:{backgroundColor:S.labelColor||"#f6f8fc"},children:S.label})},S.id)})})};M.Z=g},2091:function(oe,M,e){"use strict";e.r(M),e.d(M,{BackgroundVariant:function(){return p.T}});var y=e(26068),l=e.n(y),p=e(50373),f=e(52676);M.default=function(_){var s=_.gap,u=s===void 0?10:s,v=_.color,N=v===void 0?"#bac3d4":v;return(0,f.jsx)(p.A,l()(l()({},_),{},{gap:u,color:N}))}},63890:function(oe,M,e){"use strict";e.d(M,{Z:function(){return E}});var y=e(26068),l=e.n(y),p=e(98495),f=e(25014),_=e(20499),s=e(51307),u=e(75271),v=e(87811),N=e(53649),g=e.n(N),b,D,B,h,R,i,x,S,K,I,F,L,j,V,T=(0,s.kc)(function(O){var m=O.css;return{groupWrap:m(b||(b=g()([`
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
  `]))),btnWrap:m(D||(D=g()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:m(B||(B=g()([`
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
  `]))),groupItemWrap:m(h||(h=g()([`
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
  `]))),groupItemContent:m(R||(R=g()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:m(i||(i=g()([`
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
  `]))),des:m(x||(x=g()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:m(S||(S=g()([`
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
  `]))),nodeSubSelected:m(K||(K=g()([`
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
  `]))),nodeDanger:m(I||(I=g()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:m(F||(F=g()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:m(L||(L=g()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:m(j||(j=g()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:m(V||(V=g()([""])))}}),r=e(52676),d=function(m){return m.map(function(z){return l()(l()({},z),{},{type:"default",flowNodeType:"BasicNode"})})},P=function(m){var z=T(),J=z.styles,Q=m.id,Y=m.title,ee=m.des,U=m.logo;return(0,r.jsxs)("div",{className:J.groupItemWrap,children:[(0,r.jsx)("img",{src:U,alt:""}),(0,r.jsxs)("div",{className:J.groupItemContent,children:[(0,r.jsx)("div",{className:J.groupItemTitle,children:Y}),(0,r.jsx)("div",{className:J.des,children:ee})]})]},"".concat(Q,"-").concat(Y))},A=function(m){var z=m.data,J=T(),Q=J.styles,Y=z.handleType,ee=Y===void 0?"both":Y,U=z.selectType,w=U===void 0?f.QB.SELECT:U,ae=z.zoom,re=ae===void 0?1:ae,de=z.label,_e=z.data;if(_e.length<5)return(0,r.jsx)("div",{className:Q.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E5\uFF01"});var ue=d(_e);return(0,r.jsxs)("div",{style:{width:"357px",height:"632px",position:"relative"},children:[ee==="output"||ee==="both"?(0,r.jsx)(v.HH,{type:"target",position:v.Ly.Left,style:{top:41.5,left:-6}}):null,(0,r.jsxs)("div",{children:[de&&(0,r.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat((0,p.h)(20,re,!0),"px) scale(").concat(1/re,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:re<=.1?"".concat(String(de).substring(0,3),"..."):de}),(0,r.jsxs)("div",{className:(0,s.cx)(Q.groupWrap,Q[(0,_.X)(w)]),children:[ue.map(function(le,xe){var ge=le.data;return le.position={x:0,y:100*xe},le.title=ge.title,le.logo=ge.logo,le.des=ge.description,P(le)}),(0,r.jsx)("div",{className:"".concat(Q.btnWrap," buttonWrap")}),(0,r.jsxs)("div",{className:Q.btn,children:["\u67E5\u770B\u66F4\u591A",(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),ee==="input"||ee==="both"?(0,r.jsx)(v.HH,{type:"source",position:v.Ly.Right,style:{top:41.5,right:-6}}):null]})},E=A},98495:function(oe,M,e){"use strict";e.d(M,{Z:function(){return j},h:function(){return F}});var y=e(25014),l=e(20499),p=e(75271),f=e(87811),_=e(53649),s=e.n(_),u=e(51307),v,N,g,b,D,B,h,R,i,x,S,K=(0,u.kc)(function(V){var T=V.css,r=V.cx,d=V.prefixCls;return{nodeWrap:r("".concat(d,"-xx"),T(v||(v=s()([`
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
    `])))),nodeSelected:T(N||(N=s()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:T(g||(g=s()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:T(b||(b=s()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:T(D||(D=s()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:T(B||(B=s()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:T(h||(h=s()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:T(R||(R=s()([""]))),titleSlotRight:T(i||(i=s()([`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 13px;
    top: 9px;
  `]))),titleSlotLeft:T(x||(x=s()([`
    width: 28px;
    height: 28px;
    margin-left: 8px;
  `]))),wrap:T(S||(S=s()([`
    width: 320px;
    height: 83px;
    position: relative;
  `])))}}),I=e(52676),F=function(T,r,d){return d&&r>1?T:T/r},L=function(T){var r=T.data,d=K(),P=d.styles,A=d.cx,E=r.title,O=r.logo,m=r.description,z=r.className,J=r.selectType,Q=J===void 0?y.QB.SELECT:J,Y=r.zoom,ee=Y===void 0?1:Y,U=r.label,w=r.titleSlot,ae=r.handleType,re=ae===void 0?"both":ae;return(0,I.jsxs)("div",{className:P.wrap,children:[re==="output"||re==="both"?(0,I.jsx)(f.HH,{type:"target",position:f.Ly.Left,style:{left:-6}}):null,(0,I.jsxs)("div",{children:[U&&(0,I.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat(F(20,ee,!0),"px) scale(").concat(1/ee,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:ee<=.1?"".concat(String(U).substring(0,3),"..."):U}),(0,I.jsxs)("div",{className:A(P.nodeWrap,P[(0,l.X)(Q)],z),children:[(0,I.jsx)("img",{className:"img",src:O,alt:""}),(0,I.jsxs)("div",{className:"content",children:[(0,I.jsxs)("div",{className:"title",children:[(0,I.jsx)("span",{children:E}),!!w&&!!w.value&&w.type==="left"&&(0,I.jsx)("div",{className:P.titleSlotLeft,children:w.value}),!!w&&!!w.value&&w.type==="right"&&(0,I.jsxs)("div",{className:P.titleSlotLeft,children:[(0,I.jsx)("div",{style:{width:"28px"}}),(0,I.jsx)("div",{className:P.titleSlotRight,children:w.value})]})]}),(0,I.jsx)("div",{className:"des",children:m})]})]})]}),re==="input"||re==="both"?(0,I.jsx)(f.HH,{type:"source",position:f.Ly.Right,style:{right:-6}}):null]})},j=L},90733:function(oe,M,e){"use strict";var y=e(53649),l=e.n(y),p=e(51307),f=e(97459),_=e(68314),s=e(75271),u=e(40863),v=e(52676),N,g,b,D=(0,p.kc)(function(h){var R=h.css,i=h.token;return{container:R(N||(N=l()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,_.m4)(i.colorBgContainer,.5)),loader:R(g||(g=l()([`
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
  `])),i.colorText,(0,_.m4)(i.colorText,.2),(0,_.m4)(i.colorText,.2),(0,_.m4)(i.colorText,0)),tip:R(b||(b=l()([`
    color: `,`;
  `])),i.colorTextPlaceholder)}}),B=(0,s.memo)(function(h){var R=h.children,i=h.loading,x=h.tip,S=x===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":x,K=D(),I=K.styles,F=(0,v.jsxs)(u.Z,{gap:12,className:I.container,children:[(0,v.jsx)(u.Z,{width:100,height:100,children:(0,v.jsx)("div",{className:I.loader})}),!(0,f.Z)(S)&&(0,v.jsx)("div",{className:I.tip,children:S})]});return R?(0,v.jsxs)(v.Fragment,{children:[typeof i=="undefined"||i?F:null,R]}):F});M.Z=B},7907:function(oe,M,e){"use strict";e.d(M,{F:function(){return D}});var y=e(26068),l=e.n(y),p=e(48305),f=e.n(p),_=e(67825),s=e.n(_),u=e(52113),v=e(45720),N=e(75271),g=e(52676),b=["value","onChange","onValueChanging","onChangeEnd"],D=(0,N.memo)(function(B){var h=B.value,R=B.onChange,i=B.onValueChanging,x=B.onChangeEnd,S=s()(B,b),K=h||"",I=(0,N.useState)(K),F=f()(I,2),L=F[0],j=F[1],V=(0,N.useRef)(null),T=(0,N.useRef)(!1),r=(0,N.useRef)(!1),d=(0,N.useCallback)(function(){R==null||R(L)},[L]);return(0,N.useEffect)(function(){typeof h!="undefined"&&j(h)},[h]),(0,g.jsx)(v.I,l()(l()({ref:V},S),{},{value:L,onCompositionStart:function(){T.current=!0},onCompositionEnd:function(){T.current=!1},onFocus:function(){r.current=!0},onBlur:function(){r.current=!1,x==null||x(L)},onChange:function(A){j(A.target.value),i==null||i(A.target.value)},onPressEnter:function(A){!A.shiftKey&&!T.current&&(A.preventDefault(),d(),r.current=!1,x==null||x(L))},suffix:h===L?(0,g.jsx)("span",{}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.ZP,{type:"link",size:"small",onClick:function(){j(h)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,g.jsx)(u.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){d()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},27450:function(oe,M,e){"use strict";e.d(M,{AC:function(){return b},iq:function(){return h},oR:function(){return g}});var y=e(15558),l=e.n(y),p=e(75271),f=e(75595),_=e(97412),s=e(99166),u=e(52676),v=function(i){var x=i.collapsedKeys,S=i.onCollapsedKeysChange;return(0,f.Ue)(function(K,I){return{collapsedKeys:x!=null?x:[],onCollapsedKeysChange:S,toggleCollapsedKey:function(L){var j,V,T=[];I().collapsedKeys.includes(L)?T=I().collapsedKeys.filter(function(r){return r!==L}):T=[].concat(l()(I().collapsedKeys),[L]),K({collapsedKeys:T}),(j=(V=I()).onCollapsedKeysChange)===null||j===void 0||j.call(V,T)}}})},N=(0,_.k)(),g=N.useStore,b=N.useStoreApi,D=N.Provider,B=(0,p.memo)(function(R){var i=R.collapsedKeys,x=b(),S=(0,s.N)(x);return S("collapsedKeys",i),null}),h=(0,p.memo)(function(R){var i=R.children,x=R.defaultCollapsedKeys,S=R.onCollapsedKeysChange,K=R.collapsedKeys;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(D,{createStore:function(){return v({collapsedKeys:x,onCollapsedKeysChange:S})},children:[i,(0,u.jsx)(B,{collapsedKeys:K})]})})})},72190:function(oe,M,e){"use strict";var y=e(26068),l=e.n(y),p=e(67825),f=e.n(p),_=e(53649),s=e.n(_),u=e(91364),v=e(17727),N=e(51307),g=e(75271),b=e(2829),D=e(48116),B=e(27450),h=e(52676),R=["id","onTitleChange","onCollapsedKeysChange"],i,x,S=(0,N.kc)(function(L){var j=L.css,V=L.token,T=L.prefixCls;return{container:j(i||(i=s()([`
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
  `])),V.colorBorder,T),selected:j(x||(x=s()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),V.colorPrimary)}}),K=(0,g.memo)(function(L){var j=L.active,V=L.collapsedKeys,T=L.onCollapsedKeysChange,r=L.onTitleChange,d=L.style,P=L.className,A=L.title,E=L.children,O=L.extra,m=S(),z=m.styles,J=m.cx,Q=(0,g.useRef)(null);return(0,h.jsx)(u.ZP,{getPopupContainer:function(){return Q.current||document.body},children:(0,h.jsx)(B.iq,{collapsedKeys:V,onCollapsedKeysChange:T,children:(0,h.jsx)(v.Z,{ref:Q,title:(0,h.jsx)(b.Z,{onChange:r,value:A||"\u57FA\u7840\u8282\u70B9"}),className:J(z.container,j&&z.selected,P),extra:O,style:d,children:E})})})}),I=(0,g.memo)(function(L){var j=L.id,V=L.onTitleChange,T=L.onCollapsedKeysChange,r=f()(L,R),d=(0,D.d)();return(0,h.jsx)(K,l()({onTitleChange:function(A){d.updateNodeMeta(j,"title",A),V==null||V(A)},onCollapsedKeysChange:function(A){d.updateNodeState(j,"collapsedKeys",A),T==null||T(A)}},r))}),F=I;F.Preview=K,M.Z=F},2829:function(oe,M,e){"use strict";var y=e(48305),l=e.n(y),p=e(74978),f=e(10473),_=e(75271),s=e(17586),u=e(7907),v=e(52676),N=(0,_.memo)(function(g){var b=g.value,D=g.onChange,B=(0,_.useState)(!1),h=l()(B,2),R=h[0],i=h[1];return R?(0,v.jsx)(u.F,{onChange:D,onChangeEnd:function(){i(!1)},value:b}):(0,v.jsxs)(s.D,{gap:8,align:"center",horizontal:!0,children:[(0,v.jsx)("span",{style:{lineHeight:1},children:b}),(0,v.jsx)(f.Z,{icon:(0,v.jsx)(p.Z,{}),onClick:function(){i(!R)},placement:"right",title:"Edit"})]})});M.Z=N},73516:function(oe,M,e){"use strict";e.d(M,{N:function(){return _}});var y=e(75271),l=e(87811),p=e(5896),f=e(52676),_=(0,y.memo)(function(s){var u=s.children,v=s.showDevtools,N=!0,g=(0,f.jsx)(f.Fragment,{children:u});try{(0,p.AC)()}catch(b){N=!1}return N?g:(0,f.jsx)(l.tV,{children:(0,f.jsx)(p.zt,{createStore:function(){return(0,p.ze)(v)},children:g})})})},80243:function(oe,M,e){"use strict";var y=e(75271),l=e(99166),p=e(48116),f=e(5896),_=function(u){var v=u.onFlattenNodesChange,N=u.onNodesChange,g=u.beforeNodesChange,b=u.afterNodesChange,D=u.onEdgesChange,B=u.beforeEdgesChange,h=u.afterEdgesChange,R=u.onFlattenEdgesChange,i=u.onNodesTreeChange,x=u.editorRef,S=u.useStateUpdater,K=u.flattenNodes,I=u.flattenEdges,F=(0,l.N)((0,f.AC)()),L=S!=null?S:F;L("flattenNodes",K),L("flattenEdges",I),F("onFlattenNodesChange",v),F("onFlattenEdgesChange",R),F("onNodesChange",N),F("beforeNodesChange",g),F("afterNodesChange",b),F("onEdgesChange",D),F("beforeEdgesChange",B),F("afterEdgesChange",h),F("onNodesTreeChange",i);var j=(0,p.d)();return(0,y.useImperativeHandle)(x,function(){return j}),null};M.Z=_},29692:function(oe,M,e){"use strict";e.d(M,{Z:function(){return Se}});var y=e(26068),l=e.n(y),p=e(67825),f=e.n(p),_=e(75271),s=e(28837),u=e(48305),v=e.n(u),N=e(53649),g=e.n(N),b=e(51307),D=e(3341),B=e.n(D),h=e(16116),R=e(17586),i=e(87811),x=e(50373),S=e(39820),K=e(90733),I=e(42941),F=e(65313),L=e(18922),j=e(99220),V=e(78180),T=e(5896),r=e(52676),d=16,P=function(){var X=(0,i._K)(),H=(0,T.oR)(function(a){return[a.selectAll]}),W=v()(H,1),t=W[0];return(0,_.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:t,icon:(0,r.jsx)(j.Z,{size:d}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,r.jsx)(V.Z,{size:d}),onClick:t,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,r.jsx)(F.Z,{}),onClick:function(){X.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,r.jsx)(L.Z,{}),onClick:function(){X.zoomOut()},key:"zoomOut"}}},[])},A=(0,_.memo)(function(){var $=P(),X=[$.paste,$.DIVIDER,$.selectAll,$.zoomIn,$.zoomOut];return(0,r.jsx)(I.Z,{items:X})}),E=A,O=e(30308),m=e(4976),z=e(5129),J=e(91364),Q=e(12580),Y=e(61308),ee=e(5720),U=e(52113),w=e(86847),ae,re,de=(0,b.kc)(function($){var X=$.css,H=$.token;return{container:X(ae||(ae=g()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),H.colorBorder),minimap:X(re||(re=g()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),H.colorBgContainer)}}),_e=(0,_.memo)(function($){var X=$.zoom,H=de(),W=H.styles,t=H.theme,a=(0,i._K)(),n=function(){a.zoomIn()},o=function(){a.zoomOut()},C=function(){a.fitView()},c=function(){X===1?a.zoomTo(.5):a.zoomTo(1)},Z=[{icon:(0,r.jsx)(O.Z,{}),title:"\u7F29\u5C0F",onClick:o},{title:X===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:c,children:Math.round(X*100)+"%",style:{width:56}},{icon:(0,r.jsx)(m.Z,{}),title:"\u653E\u5927",onClick:n},{icon:(0,r.jsx)(z.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:C}];return(0,r.jsxs)(R.D,{gap:12,align:"center",className:W.container,children:[(0,r.jsx)(J.ZP,{theme:{algorithm:[t.isDarkMode?Q.Z.darkAlgorithm:Q.Z.defaultAlgorithm,Q.Z.compactAlgorithm]},children:(0,r.jsx)(R.D,{horizontal:!0,align:"center",children:(0,r.jsx)(Y.Z,{children:Z.map(function(G,k){return(0,r.jsx)(ee.Z,{arrow:!1,title:G.title,children:(0,r.jsx)(U.ZP,{onClick:G.onClick,icon:G.icon,style:G.style,children:G.children})},k)})})})}),(0,r.jsx)(w.a,{className:W.minimap,maskColor:t.colorBgMask,nodeColor:function(k){return k.data.color?k.data.color:t.colorFill}})]})}),ue=(0,_.memo)(function(){var $=(0,i.Sj)(),X=$.zoom;return(0,r.jsx)(_e,{zoom:X})}),le=e(48116),xe=function(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,H=(0,T.oR)(function(c){return[c.selectAll,c.undo,c.redo,c.copySelection,c.paste]}),W=v()(H,5),t=W[0],a=W[1],n=W[2],o=W[3],C=W[4];(0,s.y1)("meta+a",function(c){X&&(c.preventDefault(),t())}),(0,s.y1)("meta+z",function(c){X&&(c.preventDefault(),a())}),(0,s.y1)("meta+c",function(c){X&&(c.preventDefault(),o())}),(0,s.y1)("meta+v",function(c){X&&(c.preventDefault(),C())}),(0,s.y1)("meta+shift+z",function(c){X&&(c.preventDefault(),n())}),(0,s.y1)("backspace",function(c){X&&c.preventDefault()})},ge=e(22374),se,me,Pe=(0,b.kc)(function($){var X=$.css,H=$.token;return{container:X(se||(se=g()([`
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
  `])),H.colorBgLayout,H.colorBorder,H.colorPrimary),minimap:X(me||(me=g()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),H.colorBgContainer)}}),De=(0,_.forwardRef)(function($,X){var H=$.nodeTypes,W=$.contextMenuEnabled,t=W===void 0?!0:W,a=$.style,n=$.className,o=$.flowProps,C=$.defaultViewport,c=$.children,Z=$.background,G=Z===void 0?!0:Z,k=$.miniMap,ne=k===void 0?!0:k,q=$.hotkeyManager,pe=q===void 0?!0:q,te=$.onNodesInit,ce=$.beforeConnect,ie=ce===void 0?function(){return!0}:ce,fe=$.onConnect,Oe=fe===void 0?function(){}:fe,Te=$.afterConnect,Me=Te===void 0?function(){}:Te,Be=Pe(),We=Be.theme,Ze=Be.styles,Ke=(0,T.oR)(ge.k.nodeList,B()),$e=(0,T.oR)(ge.k.edgeList,B()),Le=(0,le.d)(),Re=(0,i.B)(),Fe=(0,_.useRef)(!1),He=(0,_.useMemo)(function(){return Re?!0:!(Ke.length>0)},[Ke,Re]),Ve=(0,T.oR)(function(we){return[we.handleNodesChange,we.handleEdgesChange,we.updateEdgesOnConnection,we.onViewPortChange]}),Ue=v()(Ve,4),Ge=Ue[0],ke=Ue[1],Ce=Ue[2],Ae=Ue[3],ze=(0,i._K)();xe(pe),(0,i.CV)({onChange:Ae?(0,h.Z)(Ae,300):void 0}),(0,_.useEffect)(function(){Fe.current||(Fe.current=!0,C?ze.setViewport(C):ze.fitView())},[Re]),(0,_.useEffect)(function(){Re&&(te==null||te(Le))},[Re]);var Xe=(0,_.useCallback)(function(we){if(ie(we)){Oe&&Oe(we);var Qe=Ce(we);Me&&Qe&&Me(Qe)}},[Oe,ie,Me]);return(0,r.jsxs)(R.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!He&&(0,r.jsx)(K.Z,{}),(0,r.jsxs)(i.x$,l()(l()({nodeTypes:H,ref:X,className:(0,b.cx)(Ze.container,n),defaultViewport:C,fitView:!C,fitViewOptions:{padding:3},nodes:Ke,edges:$e,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:a},o),{},{selectionMode:i.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:Ge,onEdgesChange:ke,onConnect:Xe,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[G&&(0,r.jsx)(x.A,{color:We.colorTextQuaternary,variant:x.T.Dots,size:2}),ne&&(0,r.jsx)(ue,{}),t&&(0,r.jsx)(E,{}),c]}))]})}),he=De,Ee=e(73516),ve=e(99166),ye=e(80243),be=function(X){var H=X.flattenNodes,W=X.onFlattenNodesChange,t=X.onNodesChange,a=X.beforeNodesChange,n=X.afterNodesChange,o=X.flattenEdges,C=X.onEdgesChange,c=X.beforeEdgesChange,Z=X.afterEdgesChange,G=X.onFlattenEdgesChange,k=X.onNodesTreeChange,ne=X.onViewPortChange,q=X.editorRef,pe=(0,ve.N)((0,T.AC)()),te=(0,T.AC)(),ce=function(Oe,Te){pe(Oe,Te,[Te],function(Me){if(!B()(Te,te.getState()[Oe])){te.setState(Me);var Be=te.getState(),We=Be.yjsDoc;We.updateHistoryData(Me)}})},ie=(0,i._K)();return pe("reactflow",ie),pe("onViewPortChange",ne),(0,r.jsx)(ye.Z,{flattenNodes:H,flattenEdges:o,editorRef:q,onEdgesChange:C,onNodesChange:t,beforeNodesChange:a,beforeEdgesChange:c,afterEdgesChange:Z,afterNodesChange:n,onNodesTreeChange:k,onFlattenEdgesChange:G,onFlattenNodesChange:W,useStateUpdater:ce})},Ie=be,je=["devtools","onNodesInit","beforeConnect","onConnect","afterConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],Ne=(0,_.forwardRef)(function($,X){var H=$.devtools,W=$.onNodesInit,t=$.beforeConnect,a=$.onConnect,n=$.afterConnect,o=$.defaultViewport,C=$.contextMenuEnabled,c=$.flowProps,Z=$.nodeTypes,G=$.children,k=$.miniMap,ne=$.background,q=f()($,je);return(0,r.jsx)(s.NL,{initiallyActiveScopes:["flow-editor"],children:(0,r.jsxs)(Ee.N,{showDevtools:H,children:[(0,r.jsx)(he,{ref:X,nodeTypes:Z,miniMap:k,background:ne,onNodesInit:W,beforeConnect:t,onConnect:a,afterConnect:n,contextMenuEnabled:C,defaultViewport:o,flowProps:c,children:G}),(0,r.jsx)(Ie,l()({},q))]})})}),Se=Ne},48116:function(oe,M,e){"use strict";e.d(M,{d:function(){return g}});var y=e(26068),l=e.n(y),p=e(67825),f=e.n(p),_=e(72170),s=e(75271),u=e(87811),v=e(5896),N=["yjsDoc","flattenEdges","selectedKeys","onFlattenNodesChange","onEdgesChange","onFlattenEdgesChange","onNodesChange","beforeNodesChange","afterNodesChange","onViewPortChange","onNodesTreeChange","onSelectionChange","onElementSelectChange","updateEdgesOnEdgeChange","updateEdgesOnConnection","internalUpdateEdges","internalUpdateNodes","internalUpdateSelection"],g=function(){var D=(0,v.AC)(),B=(0,u._K)(),h=D.getState(),R=h.yjsDoc,i=h.flattenEdges,x=h.selectedKeys,S=h.onFlattenNodesChange,K=h.onEdgesChange,I=h.onFlattenEdgesChange,F=h.onNodesChange,L=h.beforeNodesChange,j=h.afterNodesChange,V=h.onViewPortChange,T=h.onNodesTreeChange,r=h.onSelectionChange,d=h.onElementSelectChange,P=h.updateEdgesOnEdgeChange,A=h.updateEdgesOnConnection,E=h.internalUpdateEdges,O=h.internalUpdateNodes,m=h.internalUpdateSelection,z=f()(h,N),J=(0,_.Z)(function(){return D.getState().flattenNodes}),Q=(0,_.Z)(function(){return D.getState().flattenEdges}),Y=(0,_.Z)(function(){return D.getState().selectedKeys}),ee=(0,s.useCallback)(function(U){return B?B.screenToFlowPosition(U):{x:0,y:0}},[B]);return(0,s.useMemo)(function(){return l()(l()({},z),{},{screenToFlowPosition:ee,getFlattenNodes:J,getSelectedKeys:Y,getFlattenEdges:Q})},[z])}},5484:function(oe,M,e){"use strict";e.r(M),e.d(M,{FlowEditor:function(){return y.Z},FlowEditorProvider:function(){return l.N},findNodeById:function(){return N.n},flowEditorSelectors:function(){return f.k},memoEqual:function(){return v.N},useFlowEditor:function(){return p.d}});var y=e(29692),l=e(73516),p=e(48116),f=e(22374),_=e(17345),s={};for(var u in _)["default","FlowEditor","FlowEditorProvider","useFlowEditor","memoEqual","findNodeById","flowEditorSelectors"].indexOf(u)<0&&(s[u]=function(g){return _[g]}.bind(0,u));e.d(M,s);var v=e(45703),N=e(16412)},5896:function(oe,M,e){"use strict";e.d(M,{zt:function(){return Se},ze:function(){return je},oR:function(){return $},AC:function(){return X}});var y=e(24513),l=e(71348),p=e(24140),f=e(97412),_=e(48305),s=e.n(_),u=e(62657),v=e.n(u),N=e(21742),g=e.n(N),b=e(83136),D=e.n(b),B=e(17069),h=e.n(B),R=e(25298),i=e.n(R),x=e(82092),S=e.n(x),K=e(5449),I=h()(function H(W){i()(this,H),S()(this,"type",void 0),S()(this,"name",void 0),S()(this,"timestamp",void 0),this.type=W.type,this.name=W.name,this.timestamp=W.timestamp}),F=function(H){g()(t,H);var W=D()(t);function t(a){var n;return i()(this,t),n=W.call(this,a),S()(v()(n),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),S()(v()(n),"undoManager",void 0),S()(v()(n),"updateHistoryData",function(o){var C=n.getMap(n._internalHistoryKey);Object.entries(o).forEach(function(c){var Z=s()(c,2),G=Z[0],k=Z[1];C.set(G,k)})}),S()(v()(n),"recordHistoryData",function(o,C){n.transact(function(){n.updateHistoryData(o)},new I(C))}),S()(v()(n),"getHistoryMap",function(){return n.getMap(n._internalHistoryKey)}),S()(v()(n),"getHistoryJSON",function(){var o=n.getMap(n._internalHistoryKey);return o.toJSON()}),S()(v()(n),"redo",function(){return n.undoManager.redo()}),S()(v()(n),"undo",function(){return n.undoManager.undo()}),n.undoManager=new K.H6(n.getHistoryMap(),{trackedOrigins:new Set([I])}),n}return h()(t)}(K.QW),L=e(26068),j=e.n(L),V={reactflow:{},flattenNodes:{},flattenEdges:{},selectedKeys:[],yjsDoc:new F},T=e(67825),r=e.n(T);function d(H){switch(H.type){case"addNode":return[{item:H.node,type:"add"}];case"addNodes":return Object.keys(H.nodes).map(function(W){return{item:H.nodes[W],type:"add"}});case"deleteNode":return[{id:H.id,type:"remove"}];case"updateNodePosition":return[{id:H.id,type:"position",position:H.position}];default:return[]}}function P(H){switch(H.type){case"addEdge":return[{item:H.edge,type:"add"}];case"addEdges":return Object.keys(H.edges).map(function(W){return{item:H.edges[W],type:"add"}});case"deleteEdge":return[{id:H.id,type:"remove"}];default:return[]}}var A="$$",E="@@",O=function(W,t){return W+E+(t||"")},m=function(W,t,a,n){return O(W,a)+A+O(t,n)},z=function(W){var t=W.split(A),a=_slicedToArray(t,2),n=a[0],o=a[1];if(!n||!o)return{source:"",target:"",sourceHandle:"",targetHandle:""};var C=n.split(E),c=_slicedToArray(C,2),Z=c[0],G=c[1],k=o.split(E),ne=_slicedToArray(k,2),q=ne[0],pe=ne[1];return{source:Z,target:q,sourceHandle:G,targetHandle:pe}},J=e(3341),Q=e.n(J),Y=e(31759),ee=e.n(Y),U=e(53874),w=e(62071),ae=function(W,t){switch(t.type){case"addEdge":return(0,U.Uy)(W,function(a){a[t.edge.id]=t.edge});case"addEdges":return(0,U.Uy)(W,function(a){var n=t.edges;n&&(Array.isArray(n)?n.forEach(function(o){a[o.id]=o}):ee()(n)==="object"&&Object.keys(n).forEach(function(o){a[o]||(a[o]=n[o])}))});case"updateEdge":return(0,U.Uy)(W,function(a){var n=t.id,o=t.edge;a[n]=j()(j()({},a[n]),o)});case"updateEdgeData":return(0,U.Uy)(W,function(a){var n=t.newData,o=t.id,C=t.deepReplace;if(a[o]=j()(j()({},a[o]),{},{data:n}),!!a[o]){var c=a[o];C?a[o]=j()(j()(j()({},a[o]),c),{},{data:j()(j()({},c.data),n)}):a[o]=j()(j()(j()({},a[o]),c),{},{data:(0,w.Z)(c.data,n)})}});case"deleteEdge":return(0,U.Uy)(W,function(a){delete a[t.id]});case"createEdgeFromConnection":return(0,U.Uy)(W,function(a){var n=t.edge;a[n.id]=n});default:return W}},re=["type"],de=function(W,t){return{internalUpdateEdges:function(n,o){var C,c;W({flattenEdges:n},!1,o),(C=(c=t()).onFlattenEdgesChange)===null||C===void 0||C.call(c,n)},dispatchEdges:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},C=o.recordHistory,c=C===void 0?!0:C,Z=n.type,G=r()(n,re),k=t(),ne=k.beforeEdgesChange,q=k.onEdgesChange,pe=k.afterEdgesChange,te=k.internalUpdateEdges,ce=k.yjsDoc,ie=P(n),fe=ae(t().flattenEdges,n);Q()(fe,t().flattenEdges)||ne&&!ne(ie)||(q&&q(ie),pe&&pe(ie),te(fe,{type:"dispatchFlattenEdges/".concat(Z),payload:G}),c&&ce.recordHistoryData({flattenEdges:fe},{type:"edge",name:n.type,timestamp:Date.now()}))},addEdge:function(n){t().dispatchEdges({type:"addEdge",edge:n})},addEdges:function(n,o){var C=Array.isArray(n)?n.reduce(function(c,Z){return c[Z.id]=Z,c},{}):n;t().dispatchEdges({type:"addEdges",edges:C},o)},updateEdgesOnConnection:function(n){var o=n.source,C=n.target,c=n.sourceHandle,Z=n.targetHandle;if(!(!o||!C)){var G=m(o,C,c,Z),k={id:G,source:o,target:C,sourceHandle:c,targetHandle:Z};return t().dispatchEdges({type:"addEdge",edge:k}),k}},updateEdgesOnEdgeChange:function(n){n.forEach(function(o){switch(o.type){case"remove":t().deselectElement(o.id),t().dispatchEdges({type:"deleteEdge",id:o.id})}})},deleteEdge:function(n){t().deselectElement(n),t().dispatchEdges({type:"deleteEdge",id:n})},deleteEdges:function(n){n.forEach(function(o){t().deselectElement(o),t().dispatchEdges({type:"deleteEdge",id:o})})},updateEdgeData:function(n,o){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=arguments.length>3?arguments[3]:void 0;t().dispatchEdges({type:"updateEdgeData",id:n,newData:o,deepReplace:C},c)},updateEdge:function(n,o,C){t().dispatchEdges({type:"updateEdge",id:n,edge:o},C)},handleEdgesChange:function(n){var o=t(),C=o.dispatchEdges,c=o.onElementSelectChange,Z=o.beforeEdgesChange,G=o.onEdgesChange,k=o.afterEdgesChange,ne=o.deselectElement;n.forEach(function(q){switch(q.type){case"add":C({type:"addEdge",edge:q.item});break;case"remove":ne(q.id),C({type:"deleteEdge",id:q.id});break;case"select":if(Z&&!Z(n))return;G&&G(n),c(q.id,q.selected),k&&k(n)}})}}},_e=function(W,t){switch(t.type){case"addNode":return(0,U.Uy)(W,function(a){!t.node||!t.node.id||(a[t.node.id]=t.node)});case"addNodes":return(0,U.Uy)(W,function(a){var n=t.nodes;n&&(Array.isArray(n)?n.forEach(function(o){a[o.id]=o}):ee()(n)==="object"&&Object.keys(n).forEach(function(o){a[o]||(a[o]=n[o])}))});case"deleteNode":return(0,U.Uy)(W,function(a){delete a[t.id]});case"updateNodePosition":return(0,U.Uy)(W,function(a){a[t.id]&&t.position&&(a[t.id].position=t.position)});case"updateNodeMeta":return(0,U.Uy)(W,function(a){if(a[t.id]){var n=a[t.id];n.data.meta[t.key]=t.value}});case"updateNodeState":return(0,U.Uy)(W,function(a){if(a[t.id]){var n=a[t.id];n.data.state[t.key]=t.value}});case"updateNodeContent":return(0,U.Uy)(W,function(a){var n=t.key,o=t.id,C=t.value;if(a[o]){var c=a[o];c.data.content?c.data.content[n]=C:c.data.content=S()({},n,C)}});case"updateNodeData":return(0,U.Uy)(W,function(a){var n=t.newData,o=t.id,C=t.deepReplace;if(a[o]){var c=a[o];C?c.data=j()(j()({},c.data),n):(0,w.Z)(c.data,n)}});default:return W}},ue=["type"],le=function(W,t){return{internalUpdateNodes:function(n,o){var C,c;Q()(n,t().flattenNodes)||(W({flattenNodes:n},!1,o),(C=(c=t()).onFlattenNodesChange)===null||C===void 0||C.call(c,n))},dispatchNodes:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},C=o.recordHistory,c=C===void 0?!0:C,Z=t(),G=Z.beforeNodesChange,k=Z.onNodesChange,ne=Z.afterNodesChange,q=Z.internalUpdateNodes,pe=Z.yjsDoc,te=n.type,ce=r()(n,ue),ie=d(n),fe=_e(t().flattenNodes,n);Q()(fe,t().flattenNodes)||G&&!G(ie)||(k&&k(ie),ne&&ne(ie),q(fe,{type:"dispatchFlattenNodes/".concat(te),payload:ce}),c&&pe.recordHistoryData({flattenNodes:fe},{type:"nodes",name:n.type,timestamp:Date.now()}))},updateNodeMeta:function(n,o,C,c){t().dispatchNodes({type:"updateNodeMeta",id:n,key:o,value:C},c)},updateNodeState:function(n,o,C,c){t().dispatchNodes({type:"updateNodeState",id:n,key:o,value:C},c)},updateNodeContent:function(n,o,C,c){t().dispatchNodes({type:"updateNodeContent",id:n,key:o,value:C},c)},updateNodeData:function(n,o){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=arguments.length>3?arguments[3]:void 0;t().dispatchNodes({type:"updateNodeData",id:n,newData:o,deepReplace:C},c)},addNode:function(n){t().dispatchNodes({type:"addNode",node:n})},addNodes:function(n,o){var C=Array.isArray(n)?n.reduce(function(c,Z){return c[Z.id]=Z,c},{}):n;t().dispatchNodes({type:"addNodes",nodes:C},o)},deleteNode:function(n){t().deselectElement(n),t().dispatchNodes({type:"deleteNode",id:n})},deleteNodes:function(n){n.forEach(function(o){t().deselectElement(o),t().dispatchNodes({type:"deleteNode",id:o})})},handleNodesChange:function(n){var o=t(),C=o.dispatchNodes,c=o.onElementSelectChange,Z=o.deselectElement,G=o.beforeNodesChange,k=o.onNodesChange,ne=o.afterNodesChange;n.forEach(function(q){switch(q.type){case"add":C({type:"addNode",node:q.item});break;case"position":if(!q.dragging)break;C({type:"updateNodePosition",position:q.position,id:q.id});break;case"remove":Z(q.id),C({type:"deleteNode",id:q.id});break;case"select":if(G&&!G(n))return;k&&k(n),c(q.id,q.selected),ne&&ne(n)}})}}},xe=e(335),ge=e.n(xe),se=e(90228),me=e.n(se),Pe=e(87999),De=e.n(Pe),he=e(15558),Ee=e.n(he),ve=e(67197),ye=(0,ve.kP)("0123456789abcdefghijklmnopqrstuvwxyz",16),be=function(W,t){return{internalUpdateSelection:function(n,o){var C,c;W({selectedKeys:n},!1,o),(C=(c=t()).onSelectionChange)===null||C===void 0||C.call(c,n)},onElementSelectChange:function(n,o){o?t().selectElement(n):t().deselectElement(n)},actionList:function(){var n=t(),o=n.yjsDoc;return{undo:o.undoManager.undoStack.length,redo:o.undoManager.redoStack.length}},selectElement:function(n){t().selectedKeys.includes(n)||t().internalUpdateSelection([].concat(Ee()(t().selectedKeys),[n]),{type:"selection/selectElement",payload:{id:n}})},selectElements:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;t().internalUpdateSelection(o?[].concat(Ee()(t().selectedKeys),Ee()(n)):n,{type:"selection/selectElements",payload:{ids:n}})},selectAll:function(){var n=t().reactflow.getNodes(),o=t().reactflow.getEdges(),C=[].concat(Ee()(n.map(function(c){return c.id})),Ee()(o.map(function(c){return c.id})));t().internalUpdateSelection(C,{type:"selection/selectAll",payload:{ids:C}})},deselectElement:function(n){t().internalUpdateSelection(t().selectedKeys.filter(function(o){return o!==n}),{type:"selection/deselectElement",payload:{id:n}})},deselectAll:function(){t().internalUpdateSelection([],{type:"selection/deselectAll",payload:{}})},deleteSelection:function(){var n=t(),o=n.selectedKeys,C=n.flattenEdges,c=n.flattenNodes,Z=n.dispatchNodes,G=n.dispatchEdges,k=n.deselectAll;k(),o.forEach(function(ne){c[ne]&&Z({type:"deleteNode",id:ne}),C[ne]&&G({type:"deleteEdge",id:ne})})},copySelection:function(){var a=De()(me()().mark(function o(){var C,c,Z,G,k,ne,q,pe,te,ce;return me()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:if(C=t(),c=C.selectedKeys,Z=C.flattenEdges,G=C.flattenNodes,c.length!==0){fe.next=3;break}return fe.abrupt("return");case 3:return k=Object.values(G).filter(function(Oe){return c.includes(Oe.id)}),ne=Object.values(Z).filter(function(Oe){return c.includes(Oe.id)}),q={nodes:k,edges:ne},pe=new Blob([JSON.stringify(q)],{type:"text/html"}),te=new Blob([JSON.stringify(q)],{type:"text/plain"}),ce=new ClipboardItem({"text/html":pe,"text/plain":te}),fe.next=11,navigator.clipboard.write([ce]);case 11:return fe.abrupt("return",q);case 12:case"end":return fe.stop()}},o)}));function n(){return a.apply(this,arguments)}return n}(),paste:function(){var a=De()(me()().mark(function o(){var C;return me()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,navigator.clipboard.read();case 2:C=Z.sent,C.forEach(function(G){var k=ge()(G.types),ne;try{for(k.s();!(ne=k.n()).done;){var q=ne.value;if(q==="text/plain"){var pe=G.getType(q);pe.then(function(te){te.text().then(function(ce){var ie=void 0;try{ie=JSON.parse(ce)}catch(fe){}ie&&t().pasteIntoFlow(ie)})})}}}catch(te){k.e(te)}finally{k.f()}});case 4:case"end":return Z.stop()}},o)}));function n(){return a.apply(this,arguments)}return n}(),pasteIntoFlow:function(n){var o=t(),C=o.yjsDoc,c=o.addEdges,Z=o.addNodes,G=o.deselectAll,k=o.selectElements,ne={},q={};G(),n.nodes.forEach(function(te){var ce=ye();ne[ce]=j()(j()({},te),{},{id:ce,position:{x:te.position.x+10,y:te.position.y+10}}),n.edges.forEach(function(ie){ie.source===te.id&&(ie.source=ce),ie.target===te.id&&(ie.target=ce)})}),n.edges.forEach(function(te){var ce=m(te.source,te.target,te.sourceHandle,te.targetHandle);q[ce]=j()(j()({},te),{},{id:ce})}),Z(ne,{recordHistory:!1}),c(q,{recordHistory:!1}),C.recordHistoryData({flattenNodes:t().flattenNodes,flattenEdges:t().flattenEdges},{type:"paste",name:"\u7C98\u8D34",timestamp:Date.now()});var pe=Object.keys(ne).concat(Object.keys(q));k(pe)},undo:function(){var n=t(),o=n.yjsDoc,C=n.internalUpdateEdges,c=n.internalUpdateNodes,Z=o.undo(),G=o.getHistoryJSON(),k=G.flattenNodes,ne=G.flattenEdges;c(k||{},{type:"history/undo",payload:Z}),C(ne||{},{type:"history/undo",payload:Z})},redo:function(){var n=t(),o=n.yjsDoc,C=n.internalUpdateEdges,c=n.internalUpdateNodes,Z=o.redo(),G=o.getHistoryJSON(),k=G.flattenNodes,ne=G.flattenEdges;c(k,{type:"history/redo",payload:Z}),C(ne,{type:"history/redo",payload:Z})}}},Ie=function(W){return function(){return j()(j()(j()(j()({},V),{},{yjsDoc:W},de.apply(void 0,arguments)),le.apply(void 0,arguments)),be.apply(void 0,arguments))}},je=function(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,t=new F;return(0,l.F)()((0,p.v)(W)(Ie(t),{name:"FLOW_EDITOR"}),y.X)},Ne=(0,f.k)(),Se=Ne.Provider,$=Ne.useStore,X=Ne.useStoreApi},22374:function(oe,M,e){"use strict";e.d(M,{k:function(){return f}});var y=e(26068),l=e.n(y),p=function(s){return Object.values(s.flattenNodes).map(function(u){return l()(l()({},u),{},{selected:s.selectedKeys.includes(u.id)})})},f={nodeList:p,edgeList:function(s){return Object.values(s.flattenEdges||{}).map(function(u){return l()(l()({},u),{},{selected:s.selectedKeys.includes(u.id)})})}}},17345:function(oe,M,e){"use strict";e.r(M);var y=e(45074),l=e.n(y),p={};for(var f in y)f!=="default"&&(p[f]=function(_){return y[_]}.bind(0,f));e.d(M,p)},45074:function(){},45703:function(oe,M,e){"use strict";e.d(M,{N:function(){return u}});var y=e(67825),l=e.n(y),p=e(3341),f=e.n(p),_=["xPos","yPos"],s=["xPos","yPos"],u=function(N,g){var b=N.xPos,D=N.yPos,B=l()(N,_),h=g.xPos,R=g.yPos,i=l()(g,s);return f()(B,i)}},16412:function(oe,M,e){"use strict";e.d(M,{n:function(){return p}});var y=e(335),l=e.n(y),p=function _(s,u){var v=l()(s),N;try{for(v.s();!(N=v.n()).done;){var g=N.value;if(g.id===u)return g;var b=_(g.children,u);if(b)return b}}catch(D){v.e(D)}finally{v.f()}},f=function _(s,u){var v=_createForOfIteratorHelper(s),N;try{for(v.s();!(N=v.n()).done;){var g=N.value;if(g.children.some(function(D){return D.id===u}))return g;var b=_(g.children,u);if(b)return b}}catch(D){v.e(D)}finally{v.f()}}},59846:function(oe,M,e){"use strict";var y=e(87811),l=e(52676);M.Z=function(p){var f=p.position,_=f===void 0?"top-left":f,s=p.children;return(0,l.jsx)(y.s_,{position:_,children:s})}},3274:function(oe,M,e){"use strict";e.d(M,{o:function(){return g}});var y=e(26068),l=e.n(y),p=e(67825),f=e.n(p),_=e(75271),s=e(5896),u=e(80243),v=e(52676),N=["showDevtools","children"],g=(0,_.memo)(function(b){var D=b.showDevtools,B=b.children,h=f()(b,N);return(0,v.jsxs)(s.zt,{createStore:function(){return(0,s.ze)(D)},children:[B,(0,v.jsx)(u.Z,l()({},h))]})})},46401:function(oe,M,e){"use strict";e.d(M,{Z:function(){return ee}});var y=e(26068),l=e.n(y),p=e(75271),f=e(63890),_=e(98495),s=e(87811),u=e(50373),v=e(39820),N=e(99549),g=e(33076),b=e(71533),D=e(2091),B=e(53649),h=e.n(B),R=e(51307),i=e(25014),x,S,K,I,F,L,j,V,T,r=(0,R.kc)(function(U){var w=U.css,ae=U.cx;return{container:w(x||(x=h()([`
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
  `])),i.$D,i._H,i.ph,i.ph,i.Ts,i.l8,i.H0,i.BP),nodeWrap:ae(w(S||(S=h()([`
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
    `])))),nodeSelected:w(K||(K=h()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:w(I||(I=h()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:w(F||(F=h()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:w(L||(L=h()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:w(j||(j=h()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:w(V||(V=h()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:w(T||(T=h()([""])))}}),d=e(52676),P=function(w){var ae=w.data,re=r(),de=re.styles,_e=re.cx,ue=ae.className,le=ae.children;return(0,d.jsx)("div",{className:_e(de.nodeWrap,ue),children:le})},A=P,E=e(46967),O=(0,p.createContext)({}),m=function(){},z=function(w){var ae=w.onNodeDragStart,re=ae===void 0?m:ae,de=w.onPaneClick,_e=de===void 0?m:de,ue=w.onNodeClick,le=ue===void 0?m:ue,xe=w.onEdgeClick,ge=xe===void 0?m:xe,se=w.onNodesChange,me=se===void 0?m:se,Pe=w.onEdgesChange,De=Pe===void 0?m:Pe,he=w.nodes,Ee=he===void 0?[]:he,ve=w.edges,ye=ve===void 0?[]:ve,be=w.nodeTypes,Ie=be===void 0?{}:be,je=w.edgeTypes,Ne=je===void 0?{}:je,Se=w.miniMap,$=Se===void 0?!0:Se,X=w.children,H=w.background,W=H===void 0?!0:H,t=w.autoLayout,a=t===void 0?!0:t,n=w.stepLessZooming,o=n===void 0?!1:n,C=w.flowProps,c=w.minZoom,Z=c===void 0?.1:c,G=w.maxZoom,k=G===void 0?2:G,ne=w.className,q=w.layoutOptions,pe=q===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:q,te=(0,p.useContext)(E.b),ce=te.miniMapPosition,ie=te.flowDataAdapter,fe=te.flowViewRef,Oe=te.nodes,Te=te.edges,Me=r(),Be=Me.styles,We=Me.cx,Ze=(0,p.useMemo)(function(){return l()(l()({},Ie),{},{BasicNode:_.Z,BasicNodeGroup:f.Z,default:A})},[]),Ke=(0,p.useMemo)(function(){return l()(l()({},Ne),{},{radius:N.Z})},[]),$e=(0,s.Sj)(),Le=$e.zoom;(0,p.useEffect)(function(){var Ce=Le||1;ie(Ee,ye,Ce,a,pe)},[Ee,ye]),(0,p.useEffect)(function(){o&&ie(Ee,ye,Le,a,pe)},[Le]);var Re=(0,p.useCallback)(function(Ce){me(Ce)},[me]),Fe=(0,p.useCallback)(function(Ce){De(Ce)},[De]),He=(0,p.useCallback)(function(Ce,Ae,ze){re(Ce,Ae,ze)},[re]),Ve=(0,p.useCallback)(function(){},[]),Ue=(0,p.useCallback)(function(Ce){_e(Ce)},[_e]),Ge=(0,p.useCallback)(function(Ce,Ae){le(Ce,Ae)},[le]),ke=(0,p.useCallback)(function(Ce,Ae){ge(Ce,Ae)},[ge]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.x$,l()(l()({ref:fe,className:We(Be.container,ne),onNodeDragStart:He,onNodeDragStop:Ve,onPaneClick:Ue,onNodeClick:Ge,onEdgeClick:ke,onNodesChange:Re,onEdgesChange:Fe,nodes:Oe,edges:Te,nodeTypes:Ze,edgeTypes:Ke,panOnScroll:!0,fitView:!0,minZoom:Z,maxZoom:k},C),{},{children:[$&&(0,d.jsx)(g.Z,{language:b.S.zh_CN,position:ce,className:"pro-flow-controller"}),X,W&&(0,d.jsx)(D.default,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:u.T.Dots})]}))})},J=z,Q=e(35976),Y=function(w){var ae=(0,p.useContext)(E.b),re=ae.isUseProvider;return re?(0,d.jsx)(J,l()({},w)):(0,d.jsx)(Q.G,{children:(0,d.jsx)(J,l()({},w))})},ee=Y},25014:function(oe,M,e){"use strict";e.d(M,{$D:function(){return h},BP:function(){return B},H0:function(){return D},HM:function(){return u},QB:function(){return y},Ts:function(){return g},Vc:function(){return p},_H:function(){return v},eK:function(){return _},hK:function(){return l},l8:function(){return b},mc:function(){return f},ph:function(){return N},r0:function(){return s}});var y=function(i){return i.SELECT="SELECT",i.SUB_SELECT="SUB_SELECT",i.DANGER="DANGER",i.SUB_DANGER="SUB_DANGER",i.WARNING="WARNING",i.SUB_WARNING="SUB_WARNING",i.DEFAULT="DEFAULT",i}({}),l="nodeSelected",p="nodeSubSelected",f="nodeDanger",_="nodeSubDanger",s="nodeWarning",u="nodeSubWarning",v="edgeSelected",N="edgeSubSelected",g="edgeDanger",b="edgeSubDanger",D="edgeWarning",B="edgeSubWarning",h="initialNode",R="nodeWrap"},41857:function(oe,M,e){"use strict";e.d(M,{R:function(){return _}});var y=e(48305),l=e.n(y),p=e(75271),f=e(87811),_=function(u){var v=(0,p.useState)(u),N=l()(v,2),g=N[0],b=N[1],D=(0,p.useCallback)(function(B){b(function(h){return(0,f.Fb)(B,h)})},[g]);return[g,b,D]}},4411:function(oe,M,e){"use strict";e.d(M,{Zi:function(){return N},to:function(){return v},x5:function(){return u}});var y=e(90228),l=e.n(y),p=e(87999),f=e.n(p),_=e(75271),s=e(46967),u=function(){var b=(0,_.useContext)(s.b),D=b.reactFlowInstance;return{reactFlowInstance:D}},v=function(){var b=(0,_.useContext)(s.b),D=b.setMiniMapPosition,B=function(R,i){D({x:R,y:i})};return{setMiniMapPosition:B}},N=function(){var b=(0,_.useContext)(s.b),D=b.updateSelectNode,B=b.updateSelectEdge,h=b.updateSelectEdges,R=b.updateSelectNodes,i=b.setMiniMapPosition,x=b.reactFlowInstance,S=b.flowViewRef,K=(0,_.useCallback)(function(E){if(x)return x.getNode(E)},[x]),I=(0,_.useCallback)(function(){if(x)return x.getNodes()},[x]),F=(0,_.useCallback)(function(E,O){x&&x.zoomTo(E,{duration:O})},[x]),L=(0,_.useCallback)(function(E,O){var m=K(E);m&&x&&x.fitView({nodes:[{id:E}],duration:O})},[K,x]),j=(0,_.useCallback)(function(E,O){i&&i({x:E,y:O})},[i]),V=(0,_.useCallback)(function(){if(x)return x.getViewport()},[x]),T=(0,_.useCallback)(function(E,O){if(x)return x.setViewport(E,{duration:O})},[x]),r=(0,_.useCallback)(function(E){if(x)return x.fitView({duration:E})},[x]),d=(0,_.useCallback)(f()(l()().mark(function E(){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:document.exitFullScreen();case 1:case"end":return m.stop()}},E)})),[]),P=(0,_.useCallback)(function(){setTimeout(function(){r()},500)},[r]),A=(0,_.useCallback)(f()(l()().mark(function E(){return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:(S==null?void 0:S.current).requestFullscreen().then(function(){P()}).catch(function(z){console.error(z)});case 1:case"end":return m.stop()}},E)})),[P]);return(0,_.useEffect)(function(){P&&document.addEventListener("fullscreenchange",P)},[P]),{selectNode:D,selectEdge:B,selectEdges:h,selectNodes:R,getNode:K,getNodes:I,zoomTo:F,getViewport:V,setViewport:T,zoomToNode:L,fitView:r,setMiniMapPosition:j,instance:x,fullScreen:A,exitFullScreen:d}}},35976:function(oe,M,e){"use strict";e.d(M,{G:function(){return T}});var y=e(15558),l=e.n(y),p=e(26068),f=e.n(p),_=e(48305),s=e.n(_),u=e(75271),v=e(87811),N=e(79511),g=e.n(N),b=e(51307),D=e(25014);function B(r,d,P){var A={};return r.forEach(function(E){var O=E.width,m=E.height,z=E.select,J=z===void 0?D.QB.DEFAULT:z,Q=E.type,Y=Q===void 0?"BasicNode":Q,ee=E.position,U=ee===void 0?{x:NaN,y:NaN}:ee;A[E.id]=f()(f()({},E),{},{id:E.id,data:E.data,select:J,type:Y,right:[],left:[],position:U,width:O,height:m,zoom:P,label:E.label})}),d.forEach(function(E){var O,m,z=E.source,J=E.target;A[z]&&((O=A[z].right)===null||O===void 0||O.push(J)),A[J]&&((m=A[J].left)===null||m===void 0||m.push(z))}),A}function h(r,d,P,A){if(!P)return{_nodes:r.map(function(O){var m=O.position,z=m.x,J=m.y;return f()(f()({},O),{},{position:{x:isNaN(z)?1:z,y:isNaN(J)?1:J}})}),_edges:d};var E=new(g()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return E.setGraph(f()({rankdir:"LR",align:"UL",nodesep:100,ranksep:200},A)),d.forEach(function(O){return E.setEdge(O.source,O.target)}),r.forEach(function(O){return E.setNode(O.id,O)}),g().layout(E),{_nodes:r.map(function(O){var m=E.node(O.id),z=m.x,J=m.y,Q=O.position,Y=Q.x,ee=Q.y;return f()(f()({},O),{},{position:{x:isNaN(Y)?z:Y,y:isNaN(ee)?J:ee}})}),_edges:d}}function R(r){var d=r.filter(function(E){var O,m;return((O=E.className)===null||O===void 0?void 0:O.includes("edgeSelected"))||((m=E.className)===null||m===void 0?void 0:m.includes("edgeSubSelected"))}),P=r.filter(function(E){var O,m;return((O=E.className)===null||O===void 0?void 0:O.includes("edgeDanger"))||((m=E.className)===null||m===void 0?void 0:m.includes("edgeSubDanger"))}),A=r.filter(function(E){var O,m,z,J;return!((O=E.className)!==null&&O!==void 0&&O.includes("edgeSelected"))&&!((m=E.className)!==null&&m!==void 0&&m.includes("edgeSubSelected"))&&!((z=E.className)!==null&&z!==void 0&&z.includes("edgeDanger"))&&!((J=E.className)!==null&&J!==void 0&&J.includes("edgeSubDanger"))});return[].concat(l()(A),l()(P),l()(d))}function i(r){switch(r){case D.QB.SELECT:return D._H;case D.QB.SUB_SELECT:return D.ph;case D.QB.DANGER:return D.Ts;case D.QB.SUB_DANGER:return D.l8;case D.QB.WARNING:return D.H0;case D.QB.SUB_WARNING:return D.BP;default:return"edgeDefault"}}function x(r){return r.map(function(d){var P=d.source,A=d.target,E=d.select,O=E===void 0?D.QB.DEFAULT:E,m=d.type,z=m===void 0?"smoothstep":m,J=d.label,Q=d.animated,Y=d.sourceHandle,ee=d.targetHandle,U=d.className,w=d.data,ae=d.id,re=ae===void 0?"".concat(P,"-").concat(A):ae,de=i(O)+" "+U;return f()(f()({},d),{},{id:re,source:P,target:A,sourceHandle:Y,targetHandle:ee,type:z,animated:Q,select:O,label:J,data:f()({select:O,className:de},w),className:de})})}var S=function(d){return d.type==="BasicNode"?{width:320,height:83}:d.type==="BasicNodeGroup"?{width:355,height:1100}:{width:d.width||1,height:d.height||1}},K=function(d){var P,A,E,O;return((P=d.left)===null||P===void 0?void 0:P.length)===0&&((A=d.right)===null||A===void 0?void 0:A.length)===0?"none":((E=d.left)===null||E===void 0?void 0:E.length)===0?"input":((O=d.right)===null||O===void 0?void 0:O.length)===0?"output":"both"},I=function(d){return d.type==="BasicNode"?f()(f()({},d.data),{},{selectType:d.select,label:d.label,zoom:d.zoom,handleType:K(d)}):d.type==="BasicNodeGroup"?{data:d.data,selectType:d.select,label:d.label,zoom:d.zoom,handleType:K(d)}:f()(f()({},d.data),{},{selectType:d.select,zoom:d.zoom,label:d.label})},F=function(d,P,A,E){var O=[],m=x(P);Object.keys(d).forEach(function(Y){var ee=d[Y],U=ee.type,w=S(ee),ae=w.width,re=w.height;O.push(f()(f()({},ee),{},{sourcePosition:v.Ly.Right,targetPosition:v.Ly.Left,id:ee.id,position:ee.position,type:U,width:ae,height:re,className:(0,b.cx)(D.$D),data:I(ee)}))});var z=h(O,m,A,E),J=z._nodes,Q=z._edges;return console.log(Q),{nodes:J,edges:R(Q)}},L=e(46967),j=e(52676),V=function(d){var P=d.children,A=(0,u.useState)({x:10,y:10}),E=s()(A,2),O=E[0],m=E[1],z=(0,v._K)(),J=(0,u.useState)([]),Q=s()(J,2),Y=Q[0],ee=Q[1],U=(0,u.useState)([]),w=s()(U,2),ae=w[0],re=w[1],de=(0,u.useState)(void 0),_e=s()(de,2),ue=_e[0],le=_e[1],xe=(0,u.useState)({}),ge=s()(xe,2),se=ge[0],me=ge[1],Pe=(0,u.useState)(!0),De=s()(Pe,2),he=De[0],Ee=De[1],ve=(0,u.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),ye=s()(ve,2),be=ye[0],Ie=ye[1],je=(0,u.useRef)(),Ne=(0,u.useCallback)(function(){var t=F(se,ue,he,be),a=t.nodes,n=t.edges;ee(a),re(n)},[se,ue,he,be]),Se=(0,u.useCallback)(function(t,a,n,o,C){t.length!==0&&(me(B(t,a,n)),le(a),Ee(o),Ie(C))},[]);(0,u.useEffect)(function(){Object.keys(se).length&&ue&&Ne()},[se,ue]);var $=(0,u.useCallback)(function(t,a){var n=se[t];n&&(n.select=a,me(f()({},se)))},[se]),X=(0,u.useCallback)(function(t,a){t.forEach(function(n){$(n,a)})},[se]),H=(0,u.useCallback)(function(t,a){var n=ue==null?void 0:ue.find(function(o){return o.id===t});n&&(n.select=a,le(l()(ue)))},[ue]),W=(0,u.useCallback)(function(t,a){t.forEach(function(n){H(n,a)})},[se]);return(0,j.jsx)(L.b.Provider,{value:{nodes:Y,edges:ae,isUseProvider:!0,reactFlowInstance:z,miniMapPosition:O,flowViewRef:je,setMiniMapPosition:m,flowDataAdapter:Se,updateSelectNode:$,updateSelectNodes:X,updateSelectEdge:H,updateSelectEdges:W},children:P})},T=function(d){var P=d.children;return(0,j.jsx)(v.tV,{children:(0,j.jsx)(V,{children:P})})}},46967:function(oe,M,e){"use strict";e.d(M,{b:function(){return l}});var y=e(75271),l=(0,y.createContext)({})},45720:function(oe,M,e){"use strict";e.d(M,{I:function(){return x},K:function(){return S}});var y=e(26068),l=e.n(y),p=e(67825),f=e.n(p),_=e(73209),s=e(75271),u=e(53649),v=e.n(u),N=e(51307),g,b,D,B=(0,N.kc)(function(K){var I=K.css,F=K.token;return{input:I(g||(g=v()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),F.motionEaseOut),block:I(b||(b=v()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),F.colorFillTertiary,F.colorFillQuaternary),textarea:I(D||(D=v()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),F.motionEaseOut)}}),h=e(52676),R=["className","type"],i=["className","type"],x=(0,s.forwardRef)(function(K,I){var F=K.className,L=K.type,j=L===void 0?"ghost":L,V=f()(K,R),T=B(),r=T.styles,d=T.cx;return(0,h.jsx)(_.Z,l()({className:d(r.input,j==="block"&&r.block,F),ref:I},V))}),S=(0,s.memo)((0,s.forwardRef)(function(K,I){var F=K.className,L=K.type,j=L===void 0?"ghost":L,V=f()(K,i),T=B(),r=T.styles,d=T.cx;return(0,h.jsx)(_.Z.TextArea,l()({className:d(r.textarea,j==="block"&&r.block,F),ref:I},V))}))},60715:function(oe,M,e){"use strict";e.d(M,{Z:function(){return R}});var y=e(26068),l=e.n(y),p=e(82092),f=e.n(p),_=e(67825),s=e.n(_),u=e(69456),v=e(75271),N=e(51307),g=(0,N.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),b=g,D=e(52676),B=["open","width","mask","style","rootStyle","className","onClose","children"],h=function(x){var S=x.open,K=x.width,I=x.mask,F=I===void 0?!1:I,L=x.style,j=L===void 0?{}:L,V=x.rootStyle,T=V===void 0?{}:V,r=x.className,d=x.onClose,P=d===void 0?function(){}:d,A=x.children,E=s()(x,B),O=b(),m=O.styles,z=O.cx;return(0,D.jsx)(u.Z,l()(l()({open:S,onClose:P,width:K,mask:F,className:r?z(f()(f()({},m.dataFlowDrawer,!0),"className",!0)):m.dataFlowDrawer,getContainer:!1,style:l()(l()({},j),{},{padding:"0 0"}),rootStyle:l()(l()({},T),{},{position:"absolute"})},E),{},{children:A}))},R=h},33076:function(oe,M,e){"use strict";var y=e(82092),l=e.n(y),p=e(53649),f=e.n(p),_=e(30308),s=e(4976),u=e(5129),v=e(91364),N=e(12580),g=e(61308),b=e(5720),D=e(52113),B=e(51307),h=e(75271),R=e(17586),i=e(87811),x=e(86847),S=e(71533),K=e(52676),I,F,L,j=(0,B.kc)(function(r,d){var P=r.css,A=r.token,E=d.x,O=d.y;return{container:P(I||(I=f()([`
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
    `])),O,E,A.colorBorder),visible:P(F||(F=f()([`
      display: none;
    `]))),minimap:P(L||(L=f()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),A.colorBgContainer)}}),V=l()(l()({},S.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),S.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),T=function(d){var P=d.visible,A=P===void 0?!0:P,E=d.className,O=E===void 0?"":E,m=d.position,z=m===void 0?{x:10,y:10}:m,J=d.language,Q=J===void 0?S.S.zh_CN:J,Y=(0,i._K)(),ee=(0,i.Sj)(),U=ee.zoom,w=j(z),ae=w.styles,re=w.cx,de=w.theme,_e=function(){Y.zoomIn()},ue=function(){Y.zoomOut()},le=function(){Y.fitView()},xe=function(){U===1?Y.zoomTo(.5):Y.zoomTo(1)},ge=[{icon:(0,K.jsx)(_.Z,{}),title:V[Q].zoomOut,onClick:ue},{title:U===1?V[Q].zoomTo2:V[Q].zoomTo1,onClick:xe,children:Math.round(U*100)+"%",style:{width:56}},{icon:(0,K.jsx)(s.Z,{}),title:V[Q].zoomIn,onClick:_e},{icon:(0,K.jsx)(u.Z,{}),title:V[Q].zoomFit,onClick:le}];return(0,K.jsxs)(R.D,{gap:12,align:"center",className:re(ae.container,O,!A&&ae.visible),children:[(0,K.jsx)(v.ZP,{theme:{algorithm:[de.isDarkMode?N.Z.darkAlgorithm:N.Z.defaultAlgorithm,N.Z.compactAlgorithm]},children:(0,K.jsx)(R.D,{horizontal:!0,align:"center",children:(0,K.jsx)(g.Z,{className:"actionBox",children:ge.map(function(se,me){return(0,K.jsx)(b.Z,{arrow:!1,title:se.title,children:(0,K.jsx)(D.ZP,{onClick:se.onClick,icon:se.icon,style:se.style,children:se.children})},me)})})})}),(0,K.jsx)(x.a,{className:ae.minimap,maskColor:de.colorBgMask,nodeColor:function(me){return me.data.color?me.data.color:de.colorFill}})]})};M.Z=T},36107:function(oe,M,e){"use strict";e.d(M,{Q:function(){return d},n:function(){return V}});var y=e(26068),l=e.n(y),p=e(48305),f=e.n(p),_=e(53649),s=e.n(_),u=e(89434),v=e(10473),N=e(91364),g=e(51307),b=e(75271),D=e(17586),B=e(87811),h=e(65720),R=e(27450),i=e(52676),x,S,K,I,F,L,j="editor-field-item",V=(0,g.kc)(function(P){var A=P.css,E=P.token,O=P.cx,m=A(x||(x=s()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),E.colorBgElevated,E.colorPrimary);return{title:O("".concat(j,"-title"),A(S||(S=s()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),E.colorText)),extra:O(A(K||(K=s()([`
        position: relative;
      `])))),value:A(I||(I=s()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),E.colorBgLayout),handle:m,handleRight:A(F||(F=s()([`
      `,`;
      right: -35px;
    `])),m),handleLeft:A(L||(L=s()([`
      `,`;
      left: -35px;
    `])),m)}}),T=(0,b.memo)(function(P){var A=P.children,E=P.title,O=P.extra,m=P.collapsed,z=P.onCollapsedChange,J=P.valueContainer,Q=P.classNames,Y=Q===void 0?{}:Q,ee=P.handles,U=ee===void 0?{}:ee,w=P.id,ae=P.className,re=P.style,de=V(),_e=de.styles,ue=de.theme,le=de.cx,xe=(0,R.oR)(function(ve){return[ve.collapsedKeys,ve.toggleCollapsedKey]}),ge=f()(xe,2),se=ge[0],me=ge[1],Pe=(0,h.Z)(se.includes(w),{value:typeof m=="undefined"?se.includes(w):m,onChange:function(ye){me(w),z==null||z(ye)}}),De=f()(Pe,2),he=De[0],Ee=De[1];return(0,i.jsxs)(D.D,{gap:12,className:le("".concat(j,"-container"),ae),style:re,children:[E&&(0,i.jsxs)(D.D,{horizontal:!0,distribution:"space-between",align:"center",className:le("".concat(j,"-header"),Y==null?void 0:Y.header),children:[(0,i.jsxs)(D.D,{className:le(_e.title,Y==null?void 0:Y.title),children:[!!(U!=null&&U.source)&&(0,i.jsx)(B.HH,{id:typeof(U==null?void 0:U.source)=="string"?U==null?void 0:U.source:w,type:"target",position:B.Ly.Left,className:_e.handleLeft}),E]}),(0,i.jsxs)(D.D,{horizontal:!0,gap:4,className:le(_e.extra,"".concat(j,"-extra"),Y==null?void 0:Y.extra,"nodrag"),children:[(0,i.jsxs)(N.ZP,{theme:{token:{colorText:ue.colorTextSecondary}},children:[he?null:O&&O.map(function(ve,ye){return(0,i.jsx)(v.Z,{icon:ve.icon,title:ve.title,onClick:ve.onClick},ve.title||""+ye)}),(0,i.jsx)(v.Z,{icon:(0,i.jsx)(u.Z,{rotate:he?-90:0}),title:he?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){Ee(!he)}})]}),!!(U!=null&&U.target)&&(0,i.jsx)(B.HH,{id:typeof(U==null?void 0:U.target)=="string"?U==null?void 0:U.target:w,type:"source",position:B.Ly.Right,className:_e.handleRight})]})]}),he?null:A&&J===!1?A:(0,i.jsx)("div",{className:le(_e.value,Y.value),children:A})]})}),r=function(A){var E=A.children,O=!0,m=(0,i.jsx)(i.Fragment,{children:E});try{(0,R.AC)()}catch(z){O=!1}return O?m:(0,i.jsx)(R.iq,{children:E})},d=(0,b.memo)(function(P){return(0,i.jsx)(r,{children:(0,i.jsx)(T,l()({},P))})})},99549:function(oe,M,e){"use strict";e.d(M,{Z:function(){return _}});var y=e(48305),l=e.n(y),p=e(87811),f=e(52676);function _(s){var u=s.sourceX,v=s.sourceY,N=s.targetX,g=s.targetY,b=s.sourcePosition,D=s.targetPosition,B=s.style,h=B===void 0?{}:B,R=s.markerEnd,i=(0,p.OW)({sourceX:u,sourceY:v,sourcePosition:b,targetX:N,targetY:g,targetPosition:D,borderRadius:50}),x=l()(i,1),S=x[0];return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(p.u5,{path:S,markerEnd:R,style:h})})}},71533:function(oe,M,e){"use strict";e.d(M,{Q:function(){return y},S:function(){return l}});var y=function(p){return p.SELECT="SELECT",p.SUB_SELECT="SUB_SELECT",p.DANGER="DANGER",p.SUB_DANGER="SUB_DANGER",p.WARNING="WARNING",p.SUB_WARNING="SUB_WARNING",p.DEFAULT="DEFAULT",p}({}),l=function(p){return p.zh_CN="zh_CN",p.en_US="en_US",p}({})},6365:function(oe,M,e){"use strict";e.r(M),e.d(M,{Background:function(){return l.default},BackgroundVariant:function(){return l.BackgroundVariant},BaseEdge:function(){return y.u5},BasicGroupNode:function(){return f.Z},BasicNode:function(){return _.Z},CanvasLoading:function(){return s.Z},ControlInput:function(){return x.F},EdgeLabelRenderer:function(){return y.XQ},EditNode:function(){return u.Z},EditableText:function(){return v.Z},FlowPanel:function(){return N.Z},FlowStoreProvider:function(){return g.o},FlowView:function(){return b.Z},FlowViewProvider:function(){return L.G},Handle:function(){return y.HH},Input:function(){return j.I},Inspector:function(){return B.Z},Language:function(){return V.S},MiniMap:function(){return h.Z},NodeField:function(){return R.Q},Position:function(){return y.Ly},RadiusEdge:function(){return i.Z},SelectType:function(){return V.Q},SmoothStepEdge:function(){return y.Su},SwimlaneBackground:function(){return p.Z},TextArea:function(){return j.K},applyEdgeChanges:function(){return y.yn},applyNodeChanges:function(){return y.Fb},getBezierPath:function(){return y.OQ},getSmoothStepPath:function(){return y.OW},getStraightPath:function(){return y.Hm},useEdgesState:function(){return y.ll},useFlowView:function(){return F.x5},useFlowViewer:function(){return F.Zi},useMiniMap:function(){return F.to},useNodeFieldStyles:function(){return R.n},useNodesState:function(){return D.R}});var y=e(87811),l=e(2091),p=e(54926),f=e(63890),_=e(98495),s=e(90733),u=e(72190),v=e(2829),N=e(59846),g=e(3274),b=e(46401),D=e(41857),B=e(60715),h=e(33076),R=e(36107),i=e(99549),x=e(7907),S=e(5484),K={};for(var I in S)["default","BaseEdge","EdgeLabelRenderer","Handle","Position","SmoothStepEdge","applyEdgeChanges","applyNodeChanges","getBezierPath","getSmoothStepPath","getStraightPath","Background","SwimlaneBackground","BasicGroupNode","BasicNode","CanvasLoading","EditNode","EditableText","FlowPanel","FlowStoreProvider","FlowView","useEdgesState","useNodesState","Inspector","MiniMap","NodeField","useNodeFieldStyles","RadiusEdge","BackgroundVariant","ControlInput"].indexOf(I)<0&&(K[I]=function(T){return S[T]}.bind(0,I));e.d(M,K);var F=e(4411),L=e(35976),j=e(45720),V=e(71533)},20499:function(oe,M,e){"use strict";e.d(M,{X:function(){return p}});var y=e(25014),l=e(71533);function p(f){switch(f){case l.Q.SELECT:return y.hK;case l.Q.SUB_SELECT:return y.Vc;case l.Q.DANGER:return y.mc;case l.Q.SUB_DANGER:return y.eK;case l.Q.WARNING:return y.r0;case l.Q.SUB_WARNING:return y.HM;default:return"nodeDefault"}}}}]);
