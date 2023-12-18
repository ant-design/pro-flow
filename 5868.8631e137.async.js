"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5868],{55455:function(se,P,e){var y=e(77117),i=e.n(y),s=e(30595),_=e(11527);P.Z=function(l){var S=l.gap,d=S===void 0?10:S,z=l.color,A=z===void 0?"#bac3d4":z;return(0,_.jsx)(s.A,i()(i()({},l),{},{gap:d,color:A}))}},57813:function(se,P,e){e.d(P,{W:function(){return G},Z:function(){return g}});var y=e(18840),i=e.n(y),s=e(91578),_=e(73400),l=e(50959),S=e(52445),d=e(80166),z=e(57261),A,C,Y,v,Q,J,V,w,le=(0,z.kc)(function(a){var t=a.css,r=a.cx,u=a.prefixCls;return{nodeWrap:r("".concat(u,"-xx"),t(A||(A=i()([`
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
    `])))),nodeSelected:t(C||(C=i()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:t(Y||(Y=i()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:t(v||(v=i()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:t(Q||(Q=i()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:t(J||(J=i()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(V||(V=i()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(w||(w=i()([""])))}}),E=e(11527),j,q,ee,ne,$=d.ZP.div(j||(j=i()([`
  width: 320px;
  height: 83px;
  position: relative;
`]))),de=function(t,r,u){return u&&r>1?t:t/r},G=d.ZP.div(q||(q=i()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(a){var t=a.zoom;return de(24,t,!0)},function(a){var t=a.zoom;return"".concat(2/t,"px ").concat(1/t,"px ").concat(2/t,"px 0")},function(a){var t=a.zoom;return"".concat(14/t,"px")}),m=d.ZP.div(ee||(ee=i()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),n=d.ZP.div(ne||(ne=i()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`]))),p=function(t){var r=t.data,u=le(),h=u.styles,O=u.cx,D=r.title,b=r.logo,Z=r.description,W=r.className,R=r.selectType,F=R===void 0?s.QB.SELECT:R,te=r.zoom,k=te===void 0?1:te,T=r.label,B=r.titleSlot,oe=r.handleType,K=oe===void 0?"both":oe;return(0,E.jsxs)($,{children:[K==="output"||K==="both"?(0,E.jsx)(S.HH,{type:"target",position:S.Ly.Left,style:{left:-6}}):null,(0,E.jsxs)("div",{children:[T&&(0,E.jsx)(G,{zoom:k,children:k<=.1?"".concat(String(T).substring(0,3),"..."):T}),(0,E.jsxs)("div",{className:O(h.nodeWrap,h[(0,_.X)(F)],W),children:[(0,E.jsx)("img",{className:"img",src:b,alt:""}),(0,E.jsxs)("div",{className:"content",children:[(0,E.jsxs)("div",{className:"title",children:[(0,E.jsx)("span",{children:D}),!!B&&!!B.value&&B.type==="left"&&(0,E.jsx)(m,{children:B.value}),!!B&&!!B.value&&B.type==="right"&&(0,E.jsxs)(m,{children:[(0,E.jsx)("div",{style:{width:"28px"}}),(0,E.jsx)(n,{children:B.value})]})]}),(0,E.jsx)("div",{className:"des",children:Z})]})]})]}),K==="input"||K==="both"?(0,E.jsx)(S.HH,{type:"source",position:S.Ly.Right,style:{right:-6}}):null]})},g=p},85868:function(se,P,e){e.d(P,{Z:function(){return Oe}});var y=e(77117),i=e.n(y),s=e(50959),_=e(18840),l=e.n(_),S=e(57813),d=e(91578),z=e(73400),A=e(57261),C=e(52445),Y=e(80166),v,Q,J,V,w,le,E,j,q,ee,ne,$,de,G,m=(0,A.kc)(function(N){var o=N.css;return{groupWrap:o(v||(v=l()([`
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
  `]))),btnWrap:o(Q||(Q=l()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:o(J||(J=l()([`
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
  `]))),groupItemWrap:o(V||(V=l()([`
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
  `]))),groupItemContent:o(w||(w=l()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:o(le||(le=l()([`
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
  `]))),des:o(E||(E=l()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:o(j||(j=l()([`
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
  `]))),nodeSubSelected:o(q||(q=l()([`
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
  `]))),nodeDanger:o(ee||(ee=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:o(ne||(ne=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:o($||($=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:o(de||(de=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:o(G||(G=l()([""])))}}),n=e(11527),p,g=Y.ZP.div(p||(p=l()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),a=function(o){return o.map(function(c){return i()(i()({},c),{},{type:"default",flowNodeType:"lineage"})})},t=function(o){var c=m(),x=c.styles,f=o.id,M=o.title,I=o.des,H=o.logo;return(0,n.jsxs)("div",{className:x.groupItemWrap,children:[(0,n.jsx)("img",{src:H,alt:""}),(0,n.jsxs)("div",{className:x.groupItemContent,children:[(0,n.jsx)("div",{className:x.groupItemTitle,children:M}),(0,n.jsx)("div",{className:x.des,children:I})]})]},"".concat(f,"-").concat(M))},r=function(o){var c=o.data,x=m(),f=x.styles,M=c.handleType,I=M===void 0?"both":M,H=c.selectType,xe=H===void 0?d.QB.SELECT:H,ue=c.zoom,pe=ue===void 0?1:ue,ce=c.label,ge=c.data;if(ge.length<7)return(0,n.jsx)("div",{className:f.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var ye=a(ge);return(0,n.jsxs)(g,{children:[I==="output"||I==="both"?(0,n.jsx)(C.HH,{type:"target",position:C.Ly.Left,style:{top:41.5,left:-6}}):null,(0,n.jsxs)("div",{children:[ce&&(0,n.jsx)(S.W,{zoom:pe,children:pe<=.1?"".concat(String(ce).substring(0,3),"..."):ce}),(0,n.jsxs)("div",{className:(0,A.cx)(f.groupWrap,f[(0,z.X)(xe)]),children:[ye.map(function(ie,he){var fe=ie.data;return ie.position={x:0,y:100*he},ie.title=fe.title,ie.logo=fe.logo,ie.des=fe.describe,t(ie)}),(0,n.jsx)("div",{className:"".concat(f.btnWrap," buttonWrap")}),(0,n.jsxs)("div",{className:f.btn,children:["\u67E5\u770B\u66F4\u591A",(0,n.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),I==="input"||I==="both"?(0,n.jsx)(C.HH,{type:"source",position:C.Ly.Right,style:{top:41.5,right:-6}}):null]})},u=r,h=e(30595),O=e(87971),D=e(28152),b=e.n(D);function Z(N){var o=N.sourceX,c=N.sourceY,x=N.targetX,f=N.targetY,M=N.sourcePosition,I=N.targetPosition,H=N.style,xe=H===void 0?{}:H,ue=N.markerEnd,pe=(0,C.OW)({sourceX:o,sourceY:c,sourcePosition:M,targetX:x,targetY:f,targetPosition:I,borderRadius:50}),ce=b()(pe,1),ge=ce[0];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(C.u5,{path:ge,markerEnd:ue,style:xe})})}var W=e(82712),R=e(93466),F=e(55455),te,k,T,B,oe,K,U,L,ae,me=(0,A.kc)(function(N){var o=N.css,c=N.cx;return{container:o(te||(te=l()([`
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
  `])),d.$D,d._H,d.ph,d.ph,d.Ts,d.l8,d.H0,d.BP),nodeWrap:c(o(k||(k=l()([`
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
    `])))),nodeSelected:o(T||(T=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:o(B||(B=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:o(oe||(oe=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:o(K||(K=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:o(U||(U=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:o(L||(L=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:o(ae||(ae=l()([""])))}}),be=function(o){var c=o.data,x=me(),f=x.styles,M=x.cx,I=c.className,H=c.children;return(0,n.jsx)("div",{className:M(f.nodeWrap,I),children:H})},De=be,_e=e(22105),we=(0,s.createContext)({}),re=function(){},je=function(o){var c=o.onNodeDragStart,x=c===void 0?re:c,f=o.onPaneClick,M=f===void 0?re:f,I=o.onNodeClick,H=I===void 0?re:I,xe=o.onEdgeClick,ue=xe===void 0?re:xe,pe=o.onNodesChange,ce=pe===void 0?re:pe,ge=o.onEdgesChange,ye=ge===void 0?re:ge,ie=o.nodes,he=ie===void 0?[]:ie,fe=o.edges,Te=fe===void 0?[]:fe,Pe=o.nodeTypes,ke=Pe===void 0?{}:Pe,Ae=o.edgeTypes,Ke=Ae===void 0?{}:Ae,Be=o.miniMap,He=Be===void 0?!0:Be,Qe=o.children,Le=o.background,Ve=Le===void 0?!0:Le,Me=o.autoLayout,ze=Me===void 0?!0:Me,We=o.stepLessZooming,Xe=We===void 0?!0:We,Ye=o.flowProps,Re=o.minZoom,Je=Re===void 0?.1:Re,Ie=o.maxZoom,qe=Ie===void 0?2:Ie,en=o.className,Ue=o.layoutOptions,$e=Ue===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:Ue,Se=(0,s.useContext)(_e.b),nn=Se.miniMapPosition,Ge=Se.flowDataAdapter,tn=Se.nodes,on=Se.edges,Ze=me(),an=Ze.styles,rn=Ze.cx,sn=(0,s.useMemo)(function(){return i()(i()({},ke),{},{lineage:S.Z,lineageGroup:u,default:De})},[]),ln=(0,s.useMemo)(function(){return i()(i()({},Ke),{},{radius:Z})},[]),dn=(0,C.Sj)(),Fe=dn.zoom;(0,s.useEffect)(function(){Ge(he,Te,1,ze,$e)},[he,Te]),(0,s.useEffect)(function(){Xe&&Ge(he,Te,Fe,ze,$e)},[Fe]);var cn=(0,s.useCallback)(function(X){ce(X)},[ce]),un=(0,s.useCallback)(function(X){ye(X)},[ye]),pn=(0,s.useCallback)(function(X,ve,hn){x(X,ve,hn)},[x]),gn=(0,s.useCallback)(function(){},[]),xn=(0,s.useCallback)(function(X){M(X)},[M]),fn=(0,s.useCallback)(function(X,ve){H(X,ve)},[H]),mn=(0,s.useCallback)(function(X,ve){ue(X,ve)},[ue]);return(0,n.jsxs)(C.x$,i()(i()({className:rn(an.container,en),onNodeDragStart:pn,onNodeDragStop:gn,onPaneClick:xn,onNodeClick:fn,onEdgeClick:mn,onNodesChange:cn,onEdgesChange:un,nodes:tn,edges:on,nodeTypes:sn,edgeTypes:ln,panOnScroll:!0,fitView:!0,minZoom:Je,maxZoom:qe},Ye),{},{children:[He&&(0,n.jsx)(W.Z,{language:R.S.zh_CN,position:nn,className:"pro-flow-controller"}),Qe,Ve&&(0,n.jsx)(F.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:h.T.Dots})]}))},Ee=je,Ce=e(62825),Ne=function(o){var c=(0,s.useContext)(_e.b),x=c.isUseProvider;return x?(0,n.jsx)(Ee,i()({},o)):(0,n.jsx)(Ce.G,{children:(0,n.jsx)(Ee,i()({},o))})},Oe=Ne},91578:function(se,P,e){e.d(P,{$D:function(){return J},BP:function(){return Q},H0:function(){return v},HM:function(){return d},QB:function(){return y},Ts:function(){return C},Vc:function(){return s},_H:function(){return z},eK:function(){return l},hK:function(){return i},l8:function(){return Y},mc:function(){return _},ph:function(){return A},r0:function(){return S}});var y=function(w){return w.SELECT="SELECT",w.SUB_SELECT="SUB_SELECT",w.DANGER="DANGER",w.SUB_DANGER="SUB_DANGER",w.WARNING="WARNING",w.SUB_WARNING="SUB_WARNING",w.DEFAULT="DEFAULT",w}({}),i="nodeSelected",s="nodeSubSelected",_="nodeDanger",l="nodeSubDanger",S="nodeWarning",d="nodeSubWarning",z="edgeSelected",A="edgeSubSelected",C="edgeDanger",Y="edgeSubDanger",v="edgeWarning",Q="edgeSubWarning",J="initialNode",V="nodeWrap"},62825:function(se,P,e){e.d(P,{G:function(){return G}});var y=e(67855),i=e.n(y),s=e(77117),_=e.n(s),l=e(28152),S=e.n(l),d=e(50959),z=e(52445),A=e(79511),C=e.n(A),Y=e(57261),v=e(91578);function Q(m,n,p){var g={};return m.forEach(function(a){var t=a.width,r=a.height,u=a.select,h=u===void 0?v.QB.DEFAULT:u,O=a.type,D=O===void 0?"lineage":O,b=a.position,Z=b===void 0?{x:NaN,y:NaN}:b;g[a.id]={id:a.id,data:a.data,select:h,flowNodeType:D,right:[],left:[],position:Z,width:t,height:r,zoom:p,label:a.label}}),n.forEach(function(a){var t,r,u=a.source,h=a.target;(t=g[u].right)===null||t===void 0||t.push(h),(r=g[h].left)===null||r===void 0||r.push(u)}),g}function J(m,n,p,g){if(!p)return{_nodes:m.map(function(t){var r=t.position,u=r.x,h=r.y;return _()(_()({},t),{},{position:{x:isNaN(u)?1:u,y:isNaN(h)?1:h}})}),_edges:n};var a=new(C()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph(_()({},g)),n.forEach(function(t){return a.setEdge(t.source,t.target)}),m.forEach(function(t){return a.setNode(t.id,t)}),C().layout(a),{_nodes:m.map(function(t){var r=a.node(t.id),u=r.x,h=r.y,O=t.position,D=O.x,b=O.y;return _()(_()({},t),{},{position:{x:isNaN(D)?u:D,y:isNaN(b)?h:b}})}),_edges:n}}function V(m){var n=m.filter(function(a){var t,r;return((t=a.className)===null||t===void 0?void 0:t.includes("edgeSelected"))||((r=a.className)===null||r===void 0?void 0:r.includes("edgeSubSelected"))}),p=m.filter(function(a){var t,r;return((t=a.className)===null||t===void 0?void 0:t.includes("edgeDanger"))||((r=a.className)===null||r===void 0?void 0:r.includes("edgeSubDanger"))}),g=m.filter(function(a){var t,r,u,h;return!((t=a.className)!==null&&t!==void 0&&t.includes("edgeSelected"))&&!((r=a.className)!==null&&r!==void 0&&r.includes("edgeSubSelected"))&&!((u=a.className)!==null&&u!==void 0&&u.includes("edgeDanger"))&&!((h=a.className)!==null&&h!==void 0&&h.includes("edgeSubDanger"))});return[].concat(i()(g),i()(p),i()(n))}function w(m){switch(m){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function le(m){return m.map(function(n){var p=n.source,g=n.target,a=n.select,t=a===void 0?v.QB.DEFAULT:a,r=n.type,u=r===void 0?"smoothstep":r,h=n.label,O=n.animated,D=n.sourceHandle,b=n.targetHandle,Z=n.className,W=n.data,R=n.id,F=R===void 0?"".concat(p,"-").concat(g):R;return{id:F,source:p,target:g,sourceHandle:D,targetHandle:b,type:u,data:W,animated:O,label:h,className:w(t)+" "+Z}})}var E=function(n){return["lineage","default"].includes(n.flowNodeType)?{width:320,height:83}:n.flowNodeType==="lineageGroup"?{width:355,height:1100}:{width:n.width||1,height:n.height||1}},j=function(n){var p,g,a,t;return((p=n.left)===null||p===void 0?void 0:p.length)===0&&((g=n.right)===null||g===void 0?void 0:g.length)===0?"none":((a=n.left)===null||a===void 0?void 0:a.length)===0?"input":((t=n.right)===null||t===void 0?void 0:t.length)===0?"output":"both"},q=function(n){return n.flowNodeType==="lineage"?_()(_()({},n.data),{},{selectType:n.select,label:n.label,zoom:n.zoom,handleType:j(n)}):n.flowNodeType==="lineageGroup"?{data:n.data,selectType:n.select,label:n.label,zoom:n.zoom,handleType:j(n)}:_()(_()({},n.data),{},{selectType:n.select,zoom:n.zoom,label:n.label})},ee=function(n,p,g,a){var t=[],r=le(p);Object.keys(n).forEach(function(D){var b=n[D],Z=b.flowNodeType,W=E(b),R=W.width,F=W.height;t.push({sourcePosition:z.Ly.Right,targetPosition:z.Ly.Left,id:b.id,position:b.position,type:Z,width:R,height:F,className:(0,Y.cx)(v.$D),data:q(b)})});var u=J(t,r,g,a),h=u._nodes,O=u._edges;return{nodes:h,edges:V(O)}},ne=e(22105),$=e(11527),de=function(n){var p=n.children,g=(0,d.useState)({x:10,y:10}),a=S()(g,2),t=a[0],r=a[1],u=(0,z._K)(),h=(0,d.useState)([]),O=S()(h,2),D=O[0],b=O[1],Z=(0,d.useState)([]),W=S()(Z,2),R=W[0],F=W[1],te=(0,d.useState)(void 0),k=S()(te,2),T=k[0],B=k[1],oe=(0,d.useState)({}),K=S()(oe,2),U=K[0],L=K[1],ae=(0,d.useState)(!0),me=S()(ae,2),be=me[0],De=me[1],_e=(0,d.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),we=S()(_e,2),re=we[0],je=we[1],Ee=(0,d.useCallback)(function(){var c=ee(U,T,be,re),x=c.nodes,f=c.edges;b(x),F(f)},[U,T,be,re]),Ce=(0,d.useCallback)(function(c,x,f,M,I){c.length!==0&&(L(Q(c,x,f)),B(x),De(M),je(I))},[]);(0,d.useEffect)(function(){Object.keys(U).length&&T&&Ee()},[U,T]);var Ne=(0,d.useCallback)(function(c,x){var f=U[c];f&&(f.select=x,L(_()({},U)))},[U]),Oe=(0,d.useCallback)(function(c,x){c.forEach(function(f){Ne(f,x)})},[U]),N=(0,d.useCallback)(function(c,x){var f=T==null?void 0:T.find(function(M){return M.id===c});f&&(f.select=x,B(i()(T)))},[T]),o=(0,d.useCallback)(function(c,x){c.forEach(function(f){N(f,x)})},[U]);return(0,$.jsx)(ne.b.Provider,{value:{nodes:D,edges:R,flowDataAdapter:Ce,isUseProvider:!0,reactFlowInstance:u,miniMapPosition:t,setMiniMapPosition:r,updateSelectNode:Ne,updateSelectNodes:Oe,updateSelectEdge:N,updateSelectEdges:o},children:p})},G=function(n){var p=n.children;return(0,$.jsx)(z.tV,{children:(0,$.jsx)(de,{children:p})})}},22105:function(se,P,e){e.d(P,{b:function(){return i}});var y=e(50959),i=(0,y.createContext)({})},82712:function(se,P,e){var y=e(21320),i=e.n(y),s=e(18840),_=e.n(s),l=e(48839),S=e(4848),d=e(52070),z=e(94066),A=e(46181),C=e(92260),Y=e(24565),v=e(27106),Q=e(57261),J=e(50959),V=e(24819),w=e(52445),le=e(48887),E=e(93466),j=e(11527),q,ee,ne,$,de=(0,Q.kc)(function(n,p){var g=n.css,a=n.token,t=p.x,r=p.y;return{container:g(q||(q=_()([`
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
    `])),r,t,a.colorBorder),visible:g(ee||(ee=_()([`
      display: none;
    `]))),minimap:g(ne||(ne=_()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),a.colorBgContainer)}}),G=($={},i()($,E.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),i()($,E.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),$),m=function(p){var g=p.visible,a=g===void 0?!0:g,t=p.className,r=t===void 0?"":t,u=p.position,h=u===void 0?{x:10,y:10}:u,O=p.language,D=O===void 0?E.S.zh_CN:O,b=(0,w._K)(),Z=(0,w.Sj)(),W=Z.zoom,R=de(h),F=R.styles,te=R.cx,k=R.theme,T=function(){b.zoomIn()},B=function(){b.zoomOut()},oe=function(){b.fitView()},K=function(){W===1?b.zoomTo(.5):b.zoomTo(1)},U=[{icon:(0,j.jsx)(l.Z,{}),title:G[D].zoomOut,onClick:B},{title:W===1?G[D].zoomTo2:G[D].zoomTo1,onClick:K,children:Math.round(W*100)+"%",style:{width:56}},{icon:(0,j.jsx)(S.Z,{}),title:G[D].zoomIn,onClick:T},{icon:(0,j.jsx)(d.Z,{}),title:G[D].zoomFit,onClick:oe}];return(0,j.jsxs)(V.D,{gap:12,align:"center",className:te(F.container,r,!a&&F.visible),children:[(0,j.jsx)(z.ZP,{theme:{algorithm:[k.isDarkMode?A.Z.darkAlgorithm:A.Z.defaultAlgorithm,A.Z.compactAlgorithm]},children:(0,j.jsx)(V.D,{horizontal:!0,align:"center",children:(0,j.jsx)(C.Z,{className:"actionBox",children:U.map(function(L,ae){return(0,j.jsx)(Y.Z,{arrow:!1,title:L.title,children:(0,j.jsx)(v.ZP,{onClick:L.onClick,icon:L.icon,style:L.style,children:L.children})},ae)})})})}),(0,j.jsx)(le.a,{className:F.minimap,maskColor:k.colorBgMask,nodeColor:function(ae){return ae.data.color?ae.data.color:k.colorFill}})]})};P.Z=m},93466:function(se,P,e){e.d(P,{Q:function(){return y},S:function(){return i}});var y=function(s){return s.SELECT="SELECT",s.SUB_SELECT="SUB_SELECT",s.DANGER="DANGER",s.SUB_DANGER="SUB_DANGER",s.WARNING="WARNING",s.SUB_WARNING="SUB_WARNING",s.DEFAULT="DEFAULT",s}({}),i=function(s){return s.zh_CN="zh_CN",s.en_US="en_US",s}({})},73400:function(se,P,e){e.d(P,{X:function(){return s}});var y=e(91578),i=e(93466);function s(_){switch(_){case i.Q.SELECT:return y.hK;case i.Q.SUB_SELECT:return y.Vc;case i.Q.DANGER:return y.mc;case i.Q.SUB_DANGER:return y.eK;case i.Q.WARNING:return y.r0;case i.Q.SUB_WARNING:return y.HM;default:return"nodeDefault"}}}}]);
