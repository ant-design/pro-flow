"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[8697],{5645:function(ue,M,n){var R=n(77117),h=n.n(R),c=n(72997),N=n(11527);M.Z=function(a){var p=a.gap,x=p===void 0?10:p,T=a.color,_=T===void 0?"#bac3d4":T;return(0,N.jsx)(c.A,h()(h()({},a),{},{gap:x,color:_}))}},58697:function(ue,M,n){n.d(M,{Z:function(){return en}});var R=n(77117),h=n.n(R),c=n(50959),N=n(18840),a=n.n(N),p=n(71296),x=n(99275);function T(d){switch(d){case x.Q.SELECT:return p.hK;case x.Q.SUB_SELECT:return p.Vc;case x.Q.DANGER:return p.mc;case x.Q.SUB_DANGER:return p.eK;case x.Q.WARNING:return p.r0;case x.Q.SUB_WARNING:return p.HM;default:return"nodeDefault"}}var _=n(50296),B=n(80166),K=n(41714),E,X,ne,y,D,ie,se,te,fe=(0,K.kc)(function(d){var e=d.css,s=d.cx,b=d.prefixCls;return{nodeWrap:s("".concat(b,"-xx"),e(E||(E=a()([`
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
    `])))),nodeSelected:e(X||(X=a()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:e(ne||(ne=a()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(y||(y=a()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:e(D||(D=a()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:e(ie||(ie=a()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:e(se||(se=a()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(te||(te=a()([""])))}}),r=n(11527),le,z,G,oe,g=B.ZP.div(le||(le=a()([`
  width: 320px;
  height: 83px;
  position: relative;
`]))),o=function(e,s,b){return b&&s>1?e:e/s},m=B.ZP.div(z||(z=a()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(d){var e=d.zoom;return o(24,e,!0)},function(d){var e=d.zoom;return"".concat(2/e,"px ").concat(1/e,"px ").concat(2/e,"px 0")},function(d){var e=d.zoom;return"".concat(14/e,"px")}),u=B.ZP.div(G||(G=a()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),t=B.ZP.div(oe||(oe=a()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`]))),i=function(e){var s=e.data,b=fe(),j=b.styles,L=b.cx,C=s.title,W=s.logo,re=s.description,q=s.className,V=s.selectType,Q=V===void 0?p.QB.SELECT:V,Y=s.zoom,ce=Y===void 0?1:Y,U=s.label,k=s.titleSlot,ee=s.handleType,ge=ee===void 0?"both":ee;return(0,r.jsxs)(g,{children:[ge==="output"||ge==="both"?(0,r.jsx)(_.HH,{type:"target",position:_.Ly.Left,style:{left:-6}}):null,(0,r.jsxs)("div",{children:[U&&(0,r.jsx)(m,{zoom:ce,children:ce<=.1?"".concat(String(U).substring(0,3),"..."):U}),(0,r.jsxs)("div",{className:L(j.nodeWrap,j[T(Q)],q),children:[(0,r.jsx)("img",{className:"img",src:W,alt:""}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("span",{children:C}),!!k&&!!k.value&&k.type==="left"&&(0,r.jsx)(u,{children:k.value}),!!k&&!!k.value&&k.type==="right"&&(0,r.jsxs)(u,{children:[(0,r.jsx)("div",{style:{width:"28px"}}),(0,r.jsx)(t,{children:k.value})]})]}),(0,r.jsx)("div",{className:"des",children:re})]})]})]}),ge==="input"||ge==="both"?(0,r.jsx)(_.HH,{type:"source",position:_.Ly.Right,style:{right:-6}}):null]})},l=i,f,v,S,w,I,Z,J,H,he,ae,de,F,ve,be,me=(0,K.kc)(function(d){var e=d.css;return{groupWrap:e(f||(f=a()([`
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
  `]))),btnWrap:e(v||(v=a()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:e(S||(S=a()([`
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
  `]))),groupItemWrap:e(w||(w=a()([`
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
  `]))),groupItemContent:e(I||(I=a()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:e(Z||(Z=a()([`
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
  `]))),des:e(J||(J=a()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:e(H||(H=a()([`
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
  `]))),nodeSubSelected:e(he||(he=a()([`
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
  `]))),nodeDanger:e(ae||(ae=a()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:e(de||(de=a()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:e(F||(F=a()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:e(ve||(ve=a()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(be||(be=a()([""])))}}),$,Ee=B.ZP.div($||($=a()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),Oe=function(e){return e.map(function(s){return h()(h()({},s),{},{type:"default",flowNodeType:"lineage"})})},Ne=function(e){var s=me(),b=s.styles,j=e.id,L=e.title,C=e.des,W=e.logo;return(0,r.jsxs)("div",{className:b.groupItemWrap,children:[(0,r.jsx)("img",{src:W,alt:""}),(0,r.jsxs)("div",{className:b.groupItemContent,children:[(0,r.jsx)("div",{className:b.groupItemTitle,children:L}),(0,r.jsx)("div",{className:b.des,children:C})]})]},"".concat(j,"-").concat(L))},ye=function(e){var s=e.data,b=me(),j=b.styles,L=s.handleType,C=L===void 0?"both":L,W=s.selectType,re=W===void 0?p.QB.SELECT:W,q=s.zoom,V=q===void 0?1:q,Q=s.label,Y=s.data;if(Y.length<7)return(0,r.jsx)("div",{className:j.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var ce=Oe(Y);return(0,r.jsxs)(Ee,{children:[C==="output"||C==="both"?(0,r.jsx)(_.HH,{type:"target",position:_.Ly.Left,style:{top:41.5,left:-6}}):null,(0,r.jsxs)("div",{children:[Q&&(0,r.jsx)(m,{zoom:V,children:V<=.1?"".concat(String(Q).substring(0,3),"..."):Q}),(0,r.jsxs)("div",{className:(0,K.cx)(j.groupWrap,j[T(re)]),children:[ce.map(function(U,k){var ee=U.data;return U.position={x:0,y:100*k},U.title=ee.title,U.logo=ee.logo,U.des=ee.describe,Ne(U)}),(0,r.jsx)("div",{className:"".concat(j.btnWrap," buttonWrap")}),(0,r.jsxs)("div",{className:j.btn,children:["\u67E5\u770B\u66F4\u591A",(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),C==="input"||C==="both"?(0,r.jsx)(_.HH,{type:"source",position:_.Ly.Right,style:{top:41.5,right:-6}}):null]})},Ae=ye,Pe=n(72997),Le=n(52934),we=n(28152),Ce=n.n(we);function Se(d){var e=d.sourceX,s=d.sourceY,b=d.targetX,j=d.targetY,L=d.sourcePosition,C=d.targetPosition,W=d.style,re=W===void 0?{}:W,q=d.markerEnd,V=(0,_.OW)({sourceX:e,sourceY:s,sourcePosition:L,targetX:b,targetY:j,targetPosition:C,borderRadius:50}),Q=Ce()(V,1),Y=Q[0];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(_.u5,{path:Y,markerEnd:q,style:re})})}var Te=n(2459),A=n(5645),P,O,xe,We,Me,Re,Be,ze,Ie,Ue=(0,K.kc)(function(d){var e=d.css,s=d.cx;return{container:e(P||(P=a()([`
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
  `])),p.$D,p._H,p.ph,p.Ts,p.l8,p.H0,p.BP),nodeWrap:s(e(O||(O=a()([`
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
    `])))),nodeSelected:e(xe||(xe=a()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:e(We||(We=a()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(Me||(Me=a()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:e(Re||(Re=a()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:e(Be||(Be=a()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:e(ze||(ze=a()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(Ie||(Ie=a()([""])))}}),Ve=function(e){var s=e.data,b=Ue(),j=b.styles,L=b.cx,C=s.className,W=s.children;return(0,r.jsx)("div",{className:L(j.nodeWrap,C),children:W})},Qe=Ve,Ge=n(813),Ye=.1,bn=(0,c.createContext)({}),je=function(){},Xe=function(e){var s=e.onNodeDragStart,b=s===void 0?je:s,j=e.onPaneClick,L=j===void 0?je:j,C=e.onNodeClick,W=C===void 0?je:C,re=e.onEdgeClick,q=re===void 0?je:re,V=e.nodes,Q=V===void 0?[]:V,Y=e.edges,ce=Y===void 0?[]:Y,U=e.nodeTypes,k=U===void 0?{}:U,ee=e.edgeTypes,ge=ee===void 0?{}:ee,$e=e.miniMap,nn=$e===void 0?!0:$e,tn=e.children,ke=e.background,on=ke===void 0?!0:ke,Ze=e.autoLayout,an=Ze===void 0?!0:Ze,De=(0,c.useContext)(Ge.b),rn=De.miniMapPosition,sn=De.flowDataAdapter,ln=De.nodes,dn=De.edges,He=Ue(),cn=He.styles,pn=He.cx,un=(0,c.useMemo)(function(){return h()(h()({},k),{},{lineage:l,lineageGroup:Ae,default:Qe})},[]),xn=(0,c.useMemo)(function(){return h()(h()({},ge),{},{radius:Se})},[]),gn=(0,_.Sj)(),Ke=gn.zoom;(0,c.useEffect)(function(){sn(Q,ce,Ke,an)},[Q,ce,Ke]);var fn=(0,c.useCallback)(function(pe,_e,_n){b(pe,_e,_n)},[b]),hn=(0,c.useCallback)(function(pe){L(pe)},[L]),vn=(0,c.useCallback)(function(pe,_e){W(pe,_e)},[W]),mn=(0,c.useCallback)(function(pe,_e){q(pe,_e)},[q]);return(0,r.jsxs)(_.x$,{className:pn(cn.container),onNodeDragStart:fn,onPaneClick:hn,onNodeClick:vn,onEdgeClick:mn,nodes:ln,edges:dn,nodeTypes:un,edgeTypes:xn,panOnScroll:!0,fitView:!0,minZoom:Ye,children:[nn&&(0,r.jsx)(Te.Z,{position:rn,className:"pro-flow-controller"}),tn,on&&(0,r.jsx)(A.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:Pe.T.Dots})]})},Fe=Xe,Je=n(74554),qe=function(e){var s=(0,c.useContext)(Ge.b),b=s.isUseProvider;return b?(0,r.jsx)(Fe,h()({},e)):(0,r.jsx)(Je.G,{children:(0,r.jsx)(Fe,h()({},e))})},en=qe},71296:function(ue,M,n){n.d(M,{$D:function(){return ne},BP:function(){return X},H0:function(){return E},HM:function(){return x},QB:function(){return R},Ts:function(){return B},Vc:function(){return c},_H:function(){return T},eK:function(){return a},hK:function(){return h},l8:function(){return K},mc:function(){return N},ph:function(){return _},r0:function(){return p}});var R=function(D){return D.SELECT="SELECT",D.SUB_SELECT="SUB_SELECT",D.DANGER="DANGER",D.SUB_DANGER="SUB_DANGER",D.WARNING="WARNING",D.SUB_WARNING="SUB_WARNING",D.DEFAULT="DEFAULT",D}({}),h="nodeSelected",c="nodeSubSelected",N="nodeDanger",a="nodeSubDanger",p="nodeWarning",x="nodeSubWarning",T="edgeSelected",_="edgeSubSelected",B="edgeDanger",K="edgeSubDanger",E="edgeWarning",X="edgeSubWarning",ne="initialNode",y="nodeWrap"},74554:function(ue,M,n){n.d(M,{G:function(){return oe}});var R=n(67855),h=n.n(R),c=n(77117),N=n.n(c),a=n(28152),p=n.n(a),x=n(50959),T=n(50296),_=n(79511),B=n.n(_),K=n(41714),E=n(71296);function X(g,o,m){var u={};return g.forEach(function(t){var i=t.width,l=t.height,f=t.select,v=f===void 0?E.QB.DEFAULT:f,S=t.type,w=S===void 0?"lineage":S,I=t.position,Z=I===void 0?{x:NaN,y:NaN}:I;u[t.id]={id:t.id,data:t.data,select:v,flowNodeType:w,right:[],left:[],position:Z,width:i,height:l,zoom:m,label:t.label}}),o.forEach(function(t){var i,l,f=t.source,v=t.target;(i=u[f].right)===null||i===void 0||i.push(v),(l=u[v].left)===null||l===void 0||l.push(f)}),u}function ne(g,o,m){if(!m)return{_nodes:g.map(function(t){var i=t.position,l=i.x,f=i.y;return N()(N()({},t),{},{position:{x:isNaN(l)?1:l,y:isNaN(f)?1:f}})}),_edges:o};var u=new(B()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return u.setGraph({rankdir:"LR",align:"UL"}),o.forEach(function(t){return u.setEdge(t.source,t.target)}),g.forEach(function(t){return u.setNode(t.id,t)}),B().layout(u),{_nodes:g.map(function(t){var i=u.node(t.id),l=i.x,f=i.y,v=t.position,S=v.x,w=v.y;return N()(N()({},t),{},{position:{x:(isNaN(S)?l:S)*1.3,y:(isNaN(w)?f:w)*1}})}),_edges:o}}function y(g){var o=g.filter(function(t){var i,l;return((i=t.className)===null||i===void 0?void 0:i.includes("edgeSelected"))||((l=t.className)===null||l===void 0?void 0:l.includes("edgeSubSelected"))}),m=g.filter(function(t){var i,l;return((i=t.className)===null||i===void 0?void 0:i.includes("edgeDanger"))||((l=t.className)===null||l===void 0?void 0:l.includes("edgeSubDanger"))}),u=g.filter(function(t){var i,l,f,v;return!((i=t.className)!==null&&i!==void 0&&i.includes("edgeSelected"))&&!((l=t.className)!==null&&l!==void 0&&l.includes("edgeSubSelected"))&&!((f=t.className)!==null&&f!==void 0&&f.includes("edgeDanger"))&&!((v=t.className)!==null&&v!==void 0&&v.includes("edgeSubDanger"))});return[].concat(h()(u),h()(m),h()(o))}function D(g){switch(g){case E.QB.SELECT:return E._H;case E.QB.SUB_SELECT:return E.ph;case E.QB.DANGER:return E.Ts;case E.QB.SUB_DANGER:return E.l8;case E.QB.WARNING:return E.H0;case E.QB.SUB_WARNING:return E.BP;default:return"edgeDefault"}}function ie(g){return g.map(function(o){var m=o.source,u=o.target,t=o.select,i=t===void 0?E.QB.DEFAULT:t,l=o.type,f=l===void 0?"smoothstep":l,v=o.label,S=o.animated,w=o.sourceHandle,I=o.targetHandle;return{id:"".concat(m,"-").concat(u),source:m,target:u,sourceHandle:w,targetHandle:I,type:f,animated:S,label:v,className:D(i)}})}var se=function(o){return["lineage","default"].includes(o.flowNodeType)?{width:320,height:83}:o.flowNodeType==="lineageGroup"?{width:355,height:1100}:{width:o.width||1,height:o.height||1}},te=function(o){var m,u,t,i;return((m=o.left)===null||m===void 0?void 0:m.length)===0&&((u=o.right)===null||u===void 0?void 0:u.length)===0?"none":((t=o.left)===null||t===void 0?void 0:t.length)===0?"input":((i=o.right)===null||i===void 0?void 0:i.length)===0?"output":"both"},fe=function(o){return["lineage"].includes(o.flowNodeType)?N()(N()({},o.data),{},{selectType:o.select,label:o.label,zoom:o.zoom,handleType:te(o)}):o.flowNodeType==="lineageGroup"?{data:o.data,selectType:o.select,label:o.label,zoom:o.zoom,handleType:te(o)}:N()(N()({},o.data),{},{selectType:o.select,zoom:o.zoom})},r=function(o,m,u){var t=[],i=ie(m);Object.keys(o).forEach(function(S){var w=o[S],I=w.flowNodeType,Z=se(w),J=Z.width,H=Z.height;t.push({sourcePosition:T.Ly.Right,targetPosition:T.Ly.Left,id:w.id,position:w.position,type:I,width:J,height:H,className:(0,K.cx)(E.$D),data:fe(w)})});var l=ne(t,i,u),f=l._nodes,v=l._edges;return{nodes:f,edges:y(v)}},le=n(813),z=n(11527),G=function(o){var m=o.children,u=(0,x.useState)({x:0,y:0}),t=p()(u,2),i=t[0],l=t[1],f=(0,T._K)(),v=(0,x.useState)([]),S=p()(v,2),w=S[0],I=S[1],Z=(0,x.useState)([]),J=p()(Z,2),H=J[0],he=J[1],ae=(0,x.useState)(void 0),de=p()(ae,2),F=de[0],ve=de[1],be=(0,x.useState)({}),me=p()(be,2),$=me[0],Ee=me[1],Oe=(0,x.useState)(!0),Ne=p()(Oe,2),ye=Ne[0],Ae=Ne[1],Pe=(0,x.useCallback)(function(){var A=r($,F,ye),P=A.nodes,O=A.edges;I(P),he(O)},[$,F,ye]),Le=(0,x.useCallback)(function(A,P,O,xe){A.length!==0&&(Ee(X(A,P,O)),ve(P),Ae(xe))},[]);(0,x.useEffect)(function(){Object.keys($).length&&F&&Pe()},[$,F]);var we=(0,x.useCallback)(function(A,P){var O=$[A];O&&(O.select=P,Ee(N()({},$)))},[$]),Ce=(0,x.useCallback)(function(A,P){A.forEach(function(O){we(O,P)})},[$]),Se=(0,x.useCallback)(function(A,P){var O=F==null?void 0:F.find(function(xe){return xe.id===A});O&&(O.select=P,ve(h()(F)))},[F]),Te=(0,x.useCallback)(function(A,P){A.forEach(function(O){Se(O,P)})},[$]);return(0,z.jsx)(le.b.Provider,{value:{nodes:w,edges:H,flowDataAdapter:Le,isUseProvider:!0,reactFlowInstance:f,miniMapPosition:i,setMiniMapPosition:l,updateSelectNode:we,updateSelectNodes:Ce,updateSelectEdge:Se,updateSelectEdges:Te},children:m})},oe=function(o){var m=o.children;return(0,z.jsx)(T.tV,{children:(0,z.jsx)(G,{children:m})})}},813:function(ue,M,n){n.d(M,{b:function(){return h}});var R=n(50959),h=(0,R.createContext)({})},2459:function(ue,M,n){var R=n(77117),h=n.n(R),c=n(18840),N=n.n(c),a=n(67169),p=n(45616),x=n(3176),T=n(24206),_=n(16926),B=n(27806),K=n(41714),E=n(50959),X=n(50296),ne=n(23858),y=n(11527),D,ie,se,te,fe=(0,K.kc)(function(le,z){var G=le.css,oe=z.x,g=z.y;return{container:G(D||(D=N()([`
      position: absolute;
      bottom: `,`px;
      right: `,`px;
      z-index: 100;
      transition: right 0.2s ease;
      width: 200px;
      height: 260px;
      box-sizing: border-box;
    `])),g,10+oe),visible:G(ie||(ie=N()([`
      display: none;
    `]))),controlAction:G(se||(se=N()([`
      height: 80px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `]))),measureMap:G(te||(te=N()([`
      border-radius: 4px;
      height: 180px;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0 !important;
      position: relative !important;
    `])))}}),r=function(z){var G=z.visible,oe=G===void 0?!0:G,g=z.className,o=g===void 0?"":g,m=z.position,u=m===void 0?{x:0,y:0}:m,t=(0,X._K)(),i=(0,X.Sj)(),l=i.zoom,f=fe(u),v=f.styles,S=f.cx,w=function(){t.zoomIn()},I=function(){t.zoomOut()},Z=function(){t.fitView()},J=function(){l===1?t.zoomTo(.5):t.zoomTo(1)};return(0,y.jsxs)("div",{className:S(v.container,!oe&&v.visible,o),children:[(0,y.jsx)("div",{className:v.controlAction,children:(0,y.jsxs)(T.Z,{children:[(0,y.jsx)(_.ZP,{icon:(0,y.jsx)(a.Z,{}),onClick:I}),(0,y.jsx)(B.Z,{title:l===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,y.jsxs)(_.ZP,{onClick:J,children:[Math.round(l*100),"%"]})}),(0,y.jsx)(_.ZP,{icon:(0,y.jsx)(p.Z,{}),onClick:w}),(0,y.jsx)(B.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,y.jsx)(_.ZP,{icon:(0,y.jsx)(x.Z,{}),onClick:Z})})]})}),(0,y.jsx)(ne.a,{className:v.measureMap,onNodeClick:function(he,ae){var de=h()(h()({},ae.position),{},{height:ae.height,width:ae.width});t.fitBounds(de,{padding:.5})}})]})};M.Z=r},99275:function(ue,M,n){n.d(M,{P:function(){return h},Q:function(){return R}});var R=function(c){return c.SELECT="SELECT",c.SUB_SELECT="SUB_SELECT",c.DANGER="DANGER",c.SUB_DANGER="SUB_DANGER",c.WARNING="WARNING",c.SUB_WARNING="SUB_WARNING",c.DEFAULT="DEFAULT",c}({}),h=function(c){return c.default="default",c.radius="radius",c}({})}}]);
