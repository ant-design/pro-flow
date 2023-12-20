"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5868],{55455:function(ie,P,n){var y=n(77117),i=n.n(y),l=n(30595),_=n(11527);P.Z=function(c){var S=c.gap,u=S===void 0?10:S,R=c.color,L=R===void 0?"#bac3d4":R;return(0,_.jsx)(l.A,i()(i()({},c),{},{gap:u,color:L}))}},57813:function(ie,P,n){n.d(P,{W:function(){return te},Z:function(){return f}});var y=n(18840),i=n.n(y),l=n(91578),_=n(73400),c=n(50959),S=n(52445),u=n(50214),R=n(85869),L,A,Y,v,H,J,V,j,ee,Q,C,ne=(0,R.kc)(function(e){var o=e.css,s=e.cx,a=e.prefixCls;return{nodeWrap:s("".concat(a,"-xx"),o(L||(L=i()([`
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
    `])))),nodeSelected:o(A||(A=i()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:o(Y||(Y=i()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:o(v||(v=i()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:o(H||(H=i()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:o(J||(J=i()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:o(V||(V=i()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:o(j||(j=i()([""]))),titleSlotRight:o(ee||(ee=i()([`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 13px;
    top: 9px;
  `]))),titleSlotLeft:o(Q||(Q=i()([`
    width: 28px;
    height: 28px;
    margin-left: 8px;
  `]))),wrap:o(C||(C=i()([`
    width: 320px;
    height: 83px;
    position: relative;
  `])))}}),E=n(11527),q,F=function(o,s,a){return a&&s>1?o:o/s},te=u.ZP.div(q||(q=i()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var o=e.zoom;return F(24,o,!0)},function(e){var o=e.zoom;return"".concat(2/o,"px ").concat(1/o,"px ").concat(2/o,"px 0")},function(e){var o=e.zoom;return"".concat(14/o,"px")}),k=function(o){var s=o.data,a=ne(),r=a.styles,d=a.cx,g=s.title,b=s.logo,T=s.description,w=s.className,m=s.selectType,Z=m===void 0?l.QB.SELECT:m,M=s.zoom,W=M===void 0?1:M,I=s.label,U=s.titleSlot,K=s.handleType,O=K===void 0?"both":K;return(0,E.jsxs)("div",{className:r.wrap,children:[O==="output"||O==="both"?(0,E.jsx)(S.HH,{type:"target",position:S.Ly.Left,style:{left:-6}}):null,(0,E.jsxs)("div",{children:[I&&(0,E.jsx)(te,{zoom:W,children:W<=.1?"".concat(String(I).substring(0,3),"..."):I}),(0,E.jsxs)("div",{className:d(r.nodeWrap,r[(0,_.X)(Z)],w),children:[(0,E.jsx)("img",{className:"img",src:b,alt:""}),(0,E.jsxs)("div",{className:"content",children:[(0,E.jsxs)("div",{className:"title",children:[(0,E.jsx)("span",{children:g}),!!U&&!!U.value&&U.type==="left"&&(0,E.jsx)("div",{className:r.titleSlotLeft,children:U.value}),!!U&&!!U.value&&U.type==="right"&&(0,E.jsxs)("div",{className:r.titleSlotLeft,children:[(0,E.jsx)("div",{style:{width:"28px"}}),(0,E.jsx)("div",{className:r.titleSlotRight,children:U.value})]})]}),(0,E.jsx)("div",{className:"des",children:T})]})]})]}),O==="input"||O==="both"?(0,E.jsx)(S.HH,{type:"source",position:S.Ly.Right,style:{right:-6}}):null]})},f=k},85868:function(ie,P,n){n.d(P,{Z:function(){return ye}});var y=n(77117),i=n.n(y),l=n(50959),_=n(18840),c=n.n(_),S=n(57813),u=n(91578),R=n(73400),L=n(85869),A=n(52445),Y=n(50214),v,H,J,V,j,ee,Q,C,ne,E,q,F,te,k,f=(0,L.kc)(function(D){var t=D.css;return{groupWrap:t(v||(v=c()([`
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
  `]))),btnWrap:t(H||(H=c()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:t(J||(J=c()([`
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
  `]))),groupItemWrap:t(V||(V=c()([`
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
  `]))),groupItemContent:t(j||(j=c()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:t(ee||(ee=c()([`
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
  `]))),des:t(Q||(Q=c()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:t(C||(C=c()([`
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
  `]))),nodeSubSelected:t(ne||(ne=c()([`
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
  `]))),nodeDanger:t(E||(E=c()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:t(q||(q=c()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:t(F||(F=c()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(te||(te=c()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(k||(k=c()([""])))}}),e=n(11527),o,s=Y.ZP.div(o||(o=c()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),a=function(t){return t.map(function(N){return i()(i()({},N),{},{type:"default",flowNodeType:"BasicNode"})})},r=function(t){var N=f(),p=N.styles,x=t.id,h=t.title,B=t.des,G=t.logo;return(0,e.jsxs)("div",{className:p.groupItemWrap,children:[(0,e.jsx)("img",{src:G,alt:""}),(0,e.jsxs)("div",{className:p.groupItemContent,children:[(0,e.jsx)("div",{className:p.groupItemTitle,children:h}),(0,e.jsx)("div",{className:p.des,children:B})]})]},"".concat(x,"-").concat(h))},d=function(t){var N=t.data,p=f(),x=p.styles,h=N.handleType,B=h===void 0?"both":h,G=N.selectType,xe=G===void 0?u.QB.SELECT:G,ce=N.zoom,ue=ce===void 0?1:ce,se=N.label,pe=N.data;if(pe.length<7)return(0,e.jsx)("div",{className:x.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var Se=a(pe);return(0,e.jsxs)(s,{children:[B==="output"||B==="both"?(0,e.jsx)(A.HH,{type:"target",position:A.Ly.Left,style:{top:41.5,left:-6}}):null,(0,e.jsxs)("div",{children:[se&&(0,e.jsx)(S.W,{zoom:ue,children:ue<=.1?"".concat(String(se).substring(0,3),"..."):se}),(0,e.jsxs)("div",{className:(0,L.cx)(x.groupWrap,x[(0,R.X)(xe)]),children:[Se.map(function(re,he){var fe=re.data;return re.position={x:0,y:100*he},re.title=fe.title,re.logo=fe.logo,re.des=fe.describe,r(re)}),(0,e.jsx)("div",{className:"".concat(x.btnWrap," buttonWrap")}),(0,e.jsxs)("div",{className:x.btn,children:["\u67E5\u770B\u66F4\u591A",(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),B==="input"||B==="both"?(0,e.jsx)(A.HH,{type:"source",position:A.Ly.Right,style:{top:41.5,right:-6}}):null]})},g=d,b=n(30595),T=n(87971),w=n(28152),m=n.n(w);function Z(D){var t=D.sourceX,N=D.sourceY,p=D.targetX,x=D.targetY,h=D.sourcePosition,B=D.targetPosition,G=D.style,xe=G===void 0?{}:G,ce=D.markerEnd,ue=(0,A.OW)({sourceX:t,sourceY:N,sourcePosition:h,targetX:p,targetY:x,targetPosition:B,borderRadius:50}),se=m()(ue,1),pe=se[0];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(A.u5,{path:pe,markerEnd:ce,style:xe})})}var M=n(82712),W=n(93466),I=n(55455),U,K,O,le,ge,de,$,z,oe,me=(0,L.kc)(function(D){var t=D.css,N=D.cx;return{container:t(U||(U=c()([`
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
  `])),u.$D,u._H,u.ph,u.ph,u.Ts,u.l8,u.H0,u.BP),nodeWrap:N(t(K||(K=c()([`
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
    `])))),nodeSelected:t(O||(O=c()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:t(le||(le=c()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:t(ge||(ge=c()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:t(de||(de=c()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:t($||($=c()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(z||(z=c()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(oe||(oe=c()([""])))}}),_e=function(t){var N=t.data,p=me(),x=p.styles,h=p.cx,B=N.className,G=N.children;return(0,e.jsx)("div",{className:h(x.nodeWrap,B),children:G})},De=_e,Ee=n(22105),we=(0,l.createContext)({}),ae=function(){},je=function(t){var N=t.onNodeDragStart,p=N===void 0?ae:N,x=t.onPaneClick,h=x===void 0?ae:x,B=t.onNodeClick,G=B===void 0?ae:B,xe=t.onEdgeClick,ce=xe===void 0?ae:xe,ue=t.onNodesChange,se=ue===void 0?ae:ue,pe=t.onEdgesChange,Se=pe===void 0?ae:pe,re=t.nodes,he=re===void 0?[]:re,fe=t.edges,Ae=fe===void 0?[]:fe,Te=t.nodeTypes,ke=Te===void 0?{}:Te,Pe=t.edgeTypes,Ke=Pe===void 0?{}:Pe,Be=t.miniMap,He=Be===void 0?!0:Be,Ve=t.children,Le=t.background,Qe=Le===void 0?!0:Le,Me=t.autoLayout,ze=Me===void 0?!0:Me,Re=t.stepLessZooming,Xe=Re===void 0?!1:Re,Ye=t.flowProps,We=t.minZoom,Je=We===void 0?.1:We,Ie=t.maxZoom,qe=Ie===void 0?2:Ie,en=t.className,Ue=t.layoutOptions,$e=Ue===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:Ue,ve=(0,l.useContext)(Ee.b),nn=ve.miniMapPosition,Ge=ve.flowDataAdapter,tn=ve.flowViewRef,on=ve.nodes,an=ve.edges,Fe=me(),rn=Fe.styles,sn=Fe.cx,ln=(0,l.useMemo)(function(){return i()(i()({},ke),{},{BasicNode:S.Z,BasicNodeGroup:g,default:De})},[]),dn=(0,l.useMemo)(function(){return i()(i()({},Ke),{},{radius:Z})},[]),cn=(0,A.Sj)(),Ze=cn.zoom;(0,l.useEffect)(function(){Ge(he,Ae,1,ze,$e)},[he,Ae]),(0,l.useEffect)(function(){Xe&&Ge(he,Ae,Ze,ze,$e)},[Ze]);var un=(0,l.useCallback)(function(X){se(X)},[se]),pn=(0,l.useCallback)(function(X){Se(X)},[Se]),gn=(0,l.useCallback)(function(X,be,vn){p(X,be,vn)},[p]),xn=(0,l.useCallback)(function(){},[]),fn=(0,l.useCallback)(function(X){h(X)},[h]),mn=(0,l.useCallback)(function(X,be){G(X,be)},[G]),hn=(0,l.useCallback)(function(X,be){ce(X,be)},[ce]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(A.x$,i()(i()({ref:tn,className:sn(rn.container,en),onNodeDragStart:gn,onNodeDragStop:xn,onPaneClick:fn,onNodeClick:mn,onEdgeClick:hn,onNodesChange:un,onEdgesChange:pn,nodes:on,edges:an,nodeTypes:ln,edgeTypes:dn,panOnScroll:!0,fitView:!0,minZoom:Je,maxZoom:qe},Ye),{},{children:[He&&(0,e.jsx)(M.Z,{language:W.S.zh_CN,position:nn,className:"pro-flow-controller"}),Ve,Qe&&(0,e.jsx)(I.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:b.T.Dots})]}))})},Ne=je,Ce=n(62825),Oe=function(t){var N=(0,l.useContext)(Ee.b),p=N.isUseProvider;return p?(0,e.jsx)(Ne,i()({},t)):(0,e.jsx)(Ce.G,{children:(0,e.jsx)(Ne,i()({},t))})},ye=Oe},91578:function(ie,P,n){n.d(P,{$D:function(){return J},BP:function(){return H},H0:function(){return v},HM:function(){return u},QB:function(){return y},Ts:function(){return A},Vc:function(){return l},_H:function(){return R},eK:function(){return c},hK:function(){return i},l8:function(){return Y},mc:function(){return _},ph:function(){return L},r0:function(){return S}});var y=function(j){return j.SELECT="SELECT",j.SUB_SELECT="SUB_SELECT",j.DANGER="DANGER",j.SUB_DANGER="SUB_DANGER",j.WARNING="WARNING",j.SUB_WARNING="SUB_WARNING",j.DEFAULT="DEFAULT",j}({}),i="nodeSelected",l="nodeSubSelected",_="nodeDanger",c="nodeSubDanger",S="nodeWarning",u="nodeSubWarning",R="edgeSelected",L="edgeSubSelected",A="edgeDanger",Y="edgeSubDanger",v="edgeWarning",H="edgeSubWarning",J="initialNode",V="nodeWrap"},62825:function(ie,P,n){n.d(P,{G:function(){return k}});var y=n(67855),i=n.n(y),l=n(77117),_=n.n(l),c=n(28152),S=n.n(c),u=n(50959),R=n(52445),L=n(79511),A=n.n(L),Y=n(85869),v=n(91578);function H(f,e,o){var s={};return f.forEach(function(a){var r=a.width,d=a.height,g=a.select,b=g===void 0?v.QB.DEFAULT:g,T=a.type,w=T===void 0?"BasicNode":T,m=a.position,Z=m===void 0?{x:NaN,y:NaN}:m;s[a.id]={id:a.id,data:a.data,select:b,type:w,right:[],left:[],position:Z,width:r,height:d,zoom:o,label:a.label}}),e.forEach(function(a){var r,d,g=a.source,b=a.target;(r=s[g].right)===null||r===void 0||r.push(b),(d=s[b].left)===null||d===void 0||d.push(g)}),s}function J(f,e,o,s){if(!o)return{_nodes:f.map(function(r){var d=r.position,g=d.x,b=d.y;return _()(_()({},r),{},{position:{x:isNaN(g)?1:g,y:isNaN(b)?1:b}})}),_edges:e};var a=new(A()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph(_()({},s)),e.forEach(function(r){return a.setEdge(r.source,r.target)}),f.forEach(function(r){return a.setNode(r.id,r)}),A().layout(a),{_nodes:f.map(function(r){var d=a.node(r.id),g=d.x,b=d.y,T=r.position,w=T.x,m=T.y;return _()(_()({},r),{},{position:{x:isNaN(w)?g:w,y:isNaN(m)?b:m}})}),_edges:e}}function V(f){var e=f.filter(function(a){var r,d;return((r=a.className)===null||r===void 0?void 0:r.includes("edgeSelected"))||((d=a.className)===null||d===void 0?void 0:d.includes("edgeSubSelected"))}),o=f.filter(function(a){var r,d;return((r=a.className)===null||r===void 0?void 0:r.includes("edgeDanger"))||((d=a.className)===null||d===void 0?void 0:d.includes("edgeSubDanger"))}),s=f.filter(function(a){var r,d,g,b;return!((r=a.className)!==null&&r!==void 0&&r.includes("edgeSelected"))&&!((d=a.className)!==null&&d!==void 0&&d.includes("edgeSubSelected"))&&!((g=a.className)!==null&&g!==void 0&&g.includes("edgeDanger"))&&!((b=a.className)!==null&&b!==void 0&&b.includes("edgeSubDanger"))});return[].concat(i()(s),i()(o),i()(e))}function j(f){switch(f){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function ee(f){return f.map(function(e){var o=e.source,s=e.target,a=e.select,r=a===void 0?v.QB.DEFAULT:a,d=e.type,g=d===void 0?"smoothstep":d,b=e.label,T=e.animated,w=e.sourceHandle,m=e.targetHandle,Z=e.className,M=e.data,W=e.id,I=W===void 0?"".concat(o,"-").concat(s):W;return{id:I,source:o,target:s,sourceHandle:w,targetHandle:m,type:g,data:M,animated:T,label:b,className:j(r)+" "+Z}})}var Q=function(e){return e.type==="BasicNode"?{width:320,height:83}:e.type==="BasicNodeGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},C=function(e){var o,s,a,r;return((o=e.left)===null||o===void 0?void 0:o.length)===0&&((s=e.right)===null||s===void 0?void 0:s.length)===0?"none":((a=e.left)===null||a===void 0?void 0:a.length)===0?"input":((r=e.right)===null||r===void 0?void 0:r.length)===0?"output":"both"},ne=function(e){return e.type==="BasicNode"?_()(_()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:C(e)}):e.type==="BasicNodeGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:C(e)}:_()(_()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},E=function(e,o,s,a){var r=[],d=ee(o);Object.keys(e).forEach(function(w){var m=e[w],Z=m.type,M=Q(m),W=M.width,I=M.height;r.push({sourcePosition:R.Ly.Right,targetPosition:R.Ly.Left,id:m.id,position:m.position,type:Z,width:W,height:I,className:(0,Y.cx)(v.$D),data:ne(m)})});var g=J(r,d,s,a),b=g._nodes,T=g._edges;return{nodes:b,edges:V(T)}},q=n(22105),F=n(11527),te=function(e){var o=e.children,s=(0,u.useState)({x:10,y:10}),a=S()(s,2),r=a[0],d=a[1],g=(0,R._K)(),b=(0,u.useState)([]),T=S()(b,2),w=T[0],m=T[1],Z=(0,u.useState)([]),M=S()(Z,2),W=M[0],I=M[1],U=(0,u.useState)(void 0),K=S()(U,2),O=K[0],le=K[1],ge=(0,u.useState)({}),de=S()(ge,2),$=de[0],z=de[1],oe=(0,u.useState)(!0),me=S()(oe,2),_e=me[0],De=me[1],Ee=(0,u.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),we=S()(Ee,2),ae=we[0],je=we[1],Ne=(0,u.useRef)(),Ce=(0,u.useCallback)(function(){var p=E($,O,_e,ae),x=p.nodes,h=p.edges;m(x),I(h)},[$,O,_e,ae]),Oe=(0,u.useCallback)(function(p,x,h,B,G){p.length!==0&&(z(H(p,x,h)),le(x),De(B),je(G))},[]);(0,u.useEffect)(function(){Object.keys($).length&&O&&Ce()},[$,O]);var ye=(0,u.useCallback)(function(p,x){var h=$[p];h&&(h.select=x,z(_()({},$)))},[$]),D=(0,u.useCallback)(function(p,x){p.forEach(function(h){ye(h,x)})},[$]),t=(0,u.useCallback)(function(p,x){var h=O==null?void 0:O.find(function(B){return B.id===p});h&&(h.select=x,le(i()(O)))},[O]),N=(0,u.useCallback)(function(p,x){p.forEach(function(h){t(h,x)})},[$]);return(0,F.jsx)(q.b.Provider,{value:{nodes:w,edges:W,isUseProvider:!0,reactFlowInstance:g,miniMapPosition:r,flowViewRef:Ne,setMiniMapPosition:d,flowDataAdapter:Oe,updateSelectNode:ye,updateSelectNodes:D,updateSelectEdge:t,updateSelectEdges:N},children:o})},k=function(e){var o=e.children;return(0,F.jsx)(R.tV,{children:(0,F.jsx)(te,{children:o})})}},22105:function(ie,P,n){n.d(P,{b:function(){return i}});var y=n(50959),i=(0,y.createContext)({})},82712:function(ie,P,n){var y=n(21320),i=n.n(y),l=n(18840),_=n.n(l),c=n(48839),S=n(4848),u=n(52070),R=n(85608),L=n(25073),A=n(27162),Y=n(92473),v=n(39531),H=n(85869),J=n(50959),V=n(24819),j=n(52445),ee=n(48887),Q=n(93466),C=n(11527),ne,E,q,F,te=(0,H.kc)(function(e,o){var s=e.css,a=e.token,r=o.x,d=o.y;return{container:s(ne||(ne=_()([`
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
    `])),d,r,a.colorBorder),visible:s(E||(E=_()([`
      display: none;
    `]))),minimap:s(q||(q=_()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),a.colorBgContainer)}}),k=(F={},i()(F,Q.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),i()(F,Q.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),F),f=function(o){var s=o.visible,a=s===void 0?!0:s,r=o.className,d=r===void 0?"":r,g=o.position,b=g===void 0?{x:10,y:10}:g,T=o.language,w=T===void 0?Q.S.zh_CN:T,m=(0,j._K)(),Z=(0,j.Sj)(),M=Z.zoom,W=te(b),I=W.styles,U=W.cx,K=W.theme,O=function(){m.zoomIn()},le=function(){m.zoomOut()},ge=function(){m.fitView()},de=function(){M===1?m.zoomTo(.5):m.zoomTo(1)},$=[{icon:(0,C.jsx)(c.Z,{}),title:k[w].zoomOut,onClick:le},{title:M===1?k[w].zoomTo2:k[w].zoomTo1,onClick:de,children:Math.round(M*100)+"%",style:{width:56}},{icon:(0,C.jsx)(S.Z,{}),title:k[w].zoomIn,onClick:O},{icon:(0,C.jsx)(u.Z,{}),title:k[w].zoomFit,onClick:ge}];return(0,C.jsxs)(V.D,{gap:12,align:"center",className:U(I.container,d,!a&&I.visible),children:[(0,C.jsx)(R.ZP,{theme:{algorithm:[K.isDarkMode?L.Z.darkAlgorithm:L.Z.defaultAlgorithm,L.Z.compactAlgorithm]},children:(0,C.jsx)(V.D,{horizontal:!0,align:"center",children:(0,C.jsx)(A.Z,{className:"actionBox",children:$.map(function(z,oe){return(0,C.jsx)(Y.Z,{arrow:!1,title:z.title,children:(0,C.jsx)(v.ZP,{onClick:z.onClick,icon:z.icon,style:z.style,children:z.children})},oe)})})})}),(0,C.jsx)(ee.a,{className:I.minimap,maskColor:K.colorBgMask,nodeColor:function(oe){return oe.data.color?oe.data.color:K.colorFill}})]})};P.Z=f},93466:function(ie,P,n){n.d(P,{Q:function(){return y},S:function(){return i}});var y=function(l){return l.SELECT="SELECT",l.SUB_SELECT="SUB_SELECT",l.DANGER="DANGER",l.SUB_DANGER="SUB_DANGER",l.WARNING="WARNING",l.SUB_WARNING="SUB_WARNING",l.DEFAULT="DEFAULT",l}({}),i=function(l){return l.zh_CN="zh_CN",l.en_US="en_US",l}({})},73400:function(ie,P,n){n.d(P,{X:function(){return l}});var y=n(91578),i=n(93466);function l(_){switch(_){case i.Q.SELECT:return y.hK;case i.Q.SUB_SELECT:return y.Vc;case i.Q.DANGER:return y.mc;case i.Q.SUB_DANGER:return y.eK;case i.Q.WARNING:return y.r0;case i.Q.SUB_WARNING:return y.HM;default:return"nodeDefault"}}}}]);
