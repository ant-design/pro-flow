"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[7707],{10139:function(ue,L,n){var W=n(77117),c=n.n(W),y=n(15704),w=n(11527);L.Z=function(a){var p=a.gap,u=p===void 0?10:p,P=a.color,N=P===void 0?"#bac3d4":P;return(0,w.jsx)(y.A,c()(c()({},a),{},{gap:u,color:N}))}},27707:function(ue,L,n){n.d(L,{Z:function(){return en}});var W=n(77117),c=n.n(W),y=n(50959),w=n(18840),a=n.n(w),p=n(51938),u=n(73114);function P(d){switch(d){case u.Q.SELECT:return p.hK;case u.Q.SUB_SELECT:return p.Vc;case u.Q.DANGER:return p.mc;case u.Q.SUB_DANGER:return p.eK;case u.Q.WARNING:return p.r0;case u.Q.SUB_WARNING:return p.HM;default:return"nodeDefault"}}var N=n(25880),U=n(80166),H=n(56534),_,X,J,se,h,le,de,oe,he=(0,H.kc)(function(d){var e=d.css,s=d.cx,b=d.prefixCls;return{nodeWrap:s("".concat(b,"-xx"),e(_||(_=a()([`
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
  `]))),nodeSubSelected:e(J||(J=a()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(se||(se=a()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:e(h||(h=a()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:e(le||(le=a()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:e(de||(de=a()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(oe||(oe=a()([""])))}}),r=n(11527),ae,R,k,q,f=U.ZP.div(ae||(ae=a()([`
  width: 320px;
  height: 83px;
  position: relative;
`]))),o=function(e,s,b){return b&&s>1?e:e/s},v=U.ZP.div(R||(R=a()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(d){var e=d.zoom;return o(24,e,!0)},function(d){var e=d.zoom;return"".concat(2/e,"px ").concat(1/e,"px ").concat(2/e,"px 0")},function(d){var e=d.zoom;return"".concat(14/e,"px")}),x=U.ZP.div(k||(k=a()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),t=U.ZP.div(q||(q=a()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`]))),i=function(e){var s=e.data,b=he(),D=b.styles,B=b.cx,T=s.title,M=s.logo,ie=s.description,ne=s.className,V=s.selectType,Q=V===void 0?p.QB.SELECT:V,Y=s.zoom,ce=Y===void 0?1:Y,I=s.label,F=s.titleSlot,te=s.handleType,fe=te===void 0?"both":te;return(0,r.jsxs)(f,{children:[fe==="output"||fe==="both"?(0,r.jsx)(N.HH,{type:"target",position:N.Ly.Left,style:{left:-6}}):null,(0,r.jsxs)("div",{children:[I&&(0,r.jsx)(v,{zoom:ce,children:ce<=.1?"".concat(String(I).substring(0,3),"..."):I}),(0,r.jsxs)("div",{className:B(D.nodeWrap,D[P(Q)],ne),children:[(0,r.jsx)("img",{className:"img",src:M,alt:""}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("span",{children:T}),!!F&&!!F.value&&F.type==="left"&&(0,r.jsx)(x,{children:F.value}),!!F&&!!F.value&&F.type==="right"&&(0,r.jsxs)(x,{children:[(0,r.jsx)("div",{style:{width:"28px"}}),(0,r.jsx)(t,{children:F.value})]})]}),(0,r.jsx)("div",{className:"des",children:ie})]})]})]}),fe==="input"||fe==="both"?(0,r.jsx)(N.HH,{type:"source",position:N.Ly.Right,style:{right:-6}}):null]})},l=i,g,m,S,E,z,Z,ee,re,xe,O,K,G,ve,_e,me=(0,H.kc)(function(d){var e=d.css;return{groupWrap:e(g||(g=a()([`
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
  `]))),btnWrap:e(m||(m=a()([`
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
  `]))),groupItemWrap:e(E||(E=a()([`
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
  `]))),groupItemContent:e(z||(z=a()([`
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
  `]))),des:e(ee||(ee=a()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:e(re||(re=a()([`
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
  `]))),nodeSubSelected:e(xe||(xe=a()([`
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
  `]))),nodeDanger:e(O||(O=a()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:e(K||(K=a()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:e(G||(G=a()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:e(ve||(ve=a()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(_e||(_e=a()([""])))}}),$,Ee=U.ZP.div($||($=a()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),Oe=function(e){return e.map(function(s){return c()(c()({},s),{},{type:"default",flowNodeType:"lineage"})})},Ne=function(e){var s=me(),b=s.styles,D=e.id,B=e.title,T=e.des,M=e.logo;return(0,r.jsxs)("div",{className:b.groupItemWrap,children:[(0,r.jsx)("img",{src:M,alt:""}),(0,r.jsxs)("div",{className:b.groupItemContent,children:[(0,r.jsx)("div",{className:b.groupItemTitle,children:B}),(0,r.jsx)("div",{className:b.des,children:T})]})]},"".concat(D,"-").concat(B))},ye=function(e){var s=e.data,b=me(),D=b.styles,B=s.handleType,T=B===void 0?"both":B,M=s.selectType,ie=M===void 0?p.QB.SELECT:M,ne=s.zoom,V=ne===void 0?1:ne,Q=s.label,Y=s.data;if(Y.length<7)return(0,r.jsx)("div",{className:D.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var ce=Oe(Y);return(0,r.jsxs)(Ee,{children:[T==="output"||T==="both"?(0,r.jsx)(N.HH,{type:"target",position:N.Ly.Left,style:{top:41.5,left:-6}}):null,(0,r.jsxs)("div",{children:[Q&&(0,r.jsx)(v,{zoom:V,children:V<=.1?"".concat(String(Q).substring(0,3),"..."):Q}),(0,r.jsxs)("div",{className:(0,H.cx)(D.groupWrap,D[P(ie)]),children:[ce.map(function(I,F){var te=I.data;return I.position={x:0,y:100*F},I.title=te.title,I.logo=te.logo,I.des=te.describe,Ne(I)}),(0,r.jsx)("div",{className:"".concat(D.btnWrap," buttonWrap")}),(0,r.jsxs)("div",{className:D.btn,children:["\u67E5\u770B\u66F4\u591A",(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),T==="input"||T==="both"?(0,r.jsx)(N.HH,{type:"source",position:N.Ly.Right,style:{top:41.5,right:-6}}):null]})},Ae=ye,Ce=n(15704),Be=n(28996),we=n(28152),Te=n.n(we);function Se(d){var e=d.sourceX,s=d.sourceY,b=d.targetX,D=d.targetY,B=d.sourcePosition,T=d.targetPosition,M=d.style,ie=M===void 0?{}:M,ne=d.markerEnd,V=(0,N.OW)({sourceX:e,sourceY:s,sourcePosition:B,targetX:b,targetY:D,targetPosition:T,borderRadius:50}),Q=Te()(V,1),Y=Q[0];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N.u5,{path:Y,markerEnd:ne,style:ie})})}var Pe=n(26723),A=n(10139),C,j,ge,Me,Le,We,Re,ze,Ie,Ue=(0,H.kc)(function(d){var e=d.css,s=d.cx;return{container:e(C||(C=a()([`
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
  `])),p.$D,p._H,p.ph,p.Ts,p.l8,p.H0,p.BP),nodeWrap:s(e(j||(j=a()([`
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
    `])))),nodeSelected:e(ge||(ge=a()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:e(Me||(Me=a()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(Le||(Le=a()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:e(We||(We=a()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:e(Re||(Re=a()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:e(ze||(ze=a()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(Ie||(Ie=a()([""])))}}),Ve=function(e){var s=e.data,b=Ue(),D=b.styles,B=b.cx,T=s.className,M=s.children;return(0,r.jsx)("div",{className:B(D.nodeWrap,T),children:M})},Qe=Ve,Ge=n(62303),Ye=.1,_n=(0,y.createContext)({}),De=function(){},Xe=function(e){var s=e.onNodeDragStart,b=s===void 0?De:s,D=e.onPaneClick,B=D===void 0?De:D,T=e.onNodeClick,M=T===void 0?De:T,ie=e.onEdgeClick,ne=ie===void 0?De:ie,V=e.nodes,Q=V===void 0?[]:V,Y=e.edges,ce=Y===void 0?[]:Y,I=e.nodeTypes,F=I===void 0?{}:I,te=e.edgeTypes,fe=te===void 0?{}:te,Fe=e.miniMap,nn=Fe===void 0?!0:Fe,tn=e.children,ke=e.background,on=ke===void 0?!0:ke,Ze=e.autoLayout,an=Ze===void 0?!0:Ze,je=(0,y.useContext)(Ge.b),rn=je.miniMapPosition,sn=je.flowDataAdapter,ln=je.nodes,dn=je.edges,He=Ue(),cn=He.styles,pn=He.cx,un=(0,y.useMemo)(function(){return c()(c()({},F),{},{lineage:l,lineageGroup:Ae,default:Qe})},[]),xn=(0,y.useMemo)(function(){return c()(c()({},fe),{},{radius:Se})},[]),gn=(0,N.Sj)(),Ke=gn.zoom;(0,y.useEffect)(function(){sn(Q,ce,Ke,an)},[Q,ce,Ke]);var fn=(0,y.useCallback)(function(pe,be,bn){b(pe,be,bn)},[b]),hn=(0,y.useCallback)(function(pe){B(pe)},[B]),vn=(0,y.useCallback)(function(pe,be){M(pe,be)},[M]),mn=(0,y.useCallback)(function(pe,be){ne(pe,be)},[ne]);return(0,r.jsxs)(N.x$,{className:pn(cn.container),onNodeDragStart:fn,onPaneClick:hn,onNodeClick:vn,onEdgeClick:mn,nodes:ln,edges:dn,nodeTypes:un,edgeTypes:xn,panOnScroll:!0,fitView:!0,minZoom:Ye,children:[nn&&(0,r.jsx)(Pe.Z,{position:rn,className:"pro-flow-controller"}),tn,on&&(0,r.jsx)(A.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:Ce.T.Dots})]})},$e=Xe,Je=n(70377),qe=function(e){var s=(0,y.useContext)(Ge.b),b=s.isUseProvider;return b?(0,r.jsx)($e,c()({},e)):(0,r.jsx)(Je.G,{children:(0,r.jsx)($e,c()({},e))})},en=qe},51938:function(ue,L,n){n.d(L,{$D:function(){return J},BP:function(){return X},H0:function(){return _},HM:function(){return u},QB:function(){return W},Ts:function(){return U},Vc:function(){return y},_H:function(){return P},eK:function(){return a},hK:function(){return c},l8:function(){return H},mc:function(){return w},ph:function(){return N},r0:function(){return p}});var W=function(h){return h.SELECT="SELECT",h.SUB_SELECT="SUB_SELECT",h.DANGER="DANGER",h.SUB_DANGER="SUB_DANGER",h.WARNING="WARNING",h.SUB_WARNING="SUB_WARNING",h.DEFAULT="DEFAULT",h}({}),c="nodeSelected",y="nodeSubSelected",w="nodeDanger",a="nodeSubDanger",p="nodeWarning",u="nodeSubWarning",P="edgeSelected",N="edgeSubSelected",U="edgeDanger",H="edgeSubDanger",_="edgeWarning",X="edgeSubWarning",J="initialNode",se="nodeWrap"},70377:function(ue,L,n){n.d(L,{G:function(){return q}});var W=n(67855),c=n.n(W),y=n(77117),w=n.n(y),a=n(28152),p=n.n(a),u=n(50959),P=n(25880),N=n(79511),U=n.n(N),H=n(56534),_=n(51938);function X(f,o,v){var x={};return f.forEach(function(t){var i=t.width,l=t.height,g=t.select,m=g===void 0?_.QB.DEFAULT:g,S=t.type,E=S===void 0?"lineage":S,z=t.position,Z=z===void 0?{x:NaN,y:NaN}:z;x[t.id]={id:t.id,data:t.data,select:m,flowNodeType:E,right:[],left:[],position:Z,width:i,height:l,zoom:v,label:t.label}}),o.forEach(function(t){var i,l,g=t.source,m=t.target;(i=x[g].right)===null||i===void 0||i.push(m),(l=x[m].left)===null||l===void 0||l.push(g)}),x}function J(f,o,v){if(!v)return{_nodes:f.map(function(t){var i=t.position,l=i.x,g=i.y;return w()(w()({},t),{},{position:{x:isNaN(l)?1:l,y:isNaN(g)?1:g}})}),_edges:o};var x=new(U()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return x.setGraph({rankdir:"LR",align:"UL"}),o.forEach(function(t){return x.setEdge(t.source,t.target)}),f.forEach(function(t){return x.setNode(t.id,t)}),U().layout(x),{_nodes:f.map(function(t){var i=x.node(t.id),l=i.x,g=i.y,m=t.position,S=m.x,E=m.y;return w()(w()({},t),{},{position:{x:(isNaN(S)?l:S)*1.3,y:(isNaN(E)?g:E)*1}})}),_edges:o}}function se(f){var o=f.filter(function(t){var i,l;return((i=t.className)===null||i===void 0?void 0:i.includes("edgeSelected"))||((l=t.className)===null||l===void 0?void 0:l.includes("edgeSubSelected"))}),v=f.filter(function(t){var i,l;return((i=t.className)===null||i===void 0?void 0:i.includes("edgeDanger"))||((l=t.className)===null||l===void 0?void 0:l.includes("edgeSubDanger"))}),x=f.filter(function(t){var i,l,g,m;return!((i=t.className)!==null&&i!==void 0&&i.includes("edgeSelected"))&&!((l=t.className)!==null&&l!==void 0&&l.includes("edgeSubSelected"))&&!((g=t.className)!==null&&g!==void 0&&g.includes("edgeDanger"))&&!((m=t.className)!==null&&m!==void 0&&m.includes("edgeSubDanger"))});return[].concat(c()(x),c()(v),c()(o))}function h(f){switch(f){case _.QB.SELECT:return _._H;case _.QB.SUB_SELECT:return _.ph;case _.QB.DANGER:return _.Ts;case _.QB.SUB_DANGER:return _.l8;case _.QB.WARNING:return _.H0;case _.QB.SUB_WARNING:return _.BP;default:return"edgeDefault"}}function le(f){return f.map(function(o){var v=o.source,x=o.target,t=o.select,i=t===void 0?_.QB.DEFAULT:t,l=o.type,g=l===void 0?"smoothstep":l,m=o.label,S=o.animated,E=o.sourceHandle,z=o.targetHandle;return{id:"".concat(v,"-").concat(x),source:v,target:x,sourceHandle:E,targetHandle:z,type:g,animated:S,label:m,className:h(i)}})}var de=function(o){return["lineage","default"].includes(o.flowNodeType)?{width:320,height:83}:o.flowNodeType==="lineageGroup"?{width:355,height:1100}:{width:o.width||1,height:o.height||1}},oe=function(o){var v,x,t,i;return((v=o.left)===null||v===void 0?void 0:v.length)===0&&((x=o.right)===null||x===void 0?void 0:x.length)===0?"none":((t=o.left)===null||t===void 0?void 0:t.length)===0?"input":((i=o.right)===null||i===void 0?void 0:i.length)===0?"output":"both"},he=function(o){return o.flowNodeType==="lineage"?w()(w()({},o.data),{},{selectType:o.select,label:o.label,zoom:o.zoom,handleType:oe(o)}):o.flowNodeType==="lineageGroup"?{data:o.data,selectType:o.select,label:o.label,zoom:o.zoom,handleType:oe(o)}:w()(w()({},o.data),{},{selectType:o.select,zoom:o.zoom,label:o.label})},r=function(o,v,x){var t=[],i=le(v);Object.keys(o).forEach(function(S){var E=o[S],z=E.flowNodeType,Z=de(E),ee=Z.width,re=Z.height;t.push({sourcePosition:P.Ly.Right,targetPosition:P.Ly.Left,id:E.id,position:E.position,type:z,width:ee,height:re,className:(0,H.cx)(_.$D),data:he(E)})});var l=J(t,i,x),g=l._nodes,m=l._edges;return{nodes:g,edges:se(m)}},ae=n(62303),R=n(11527),k=function(o){var v=o.children,x=(0,u.useState)({x:10,y:10}),t=p()(x,2),i=t[0],l=t[1],g=(0,P._K)(),m=(0,u.useState)([]),S=p()(m,2),E=S[0],z=S[1],Z=(0,u.useState)([]),ee=p()(Z,2),re=ee[0],xe=ee[1],O=(0,u.useState)(void 0),K=p()(O,2),G=K[0],ve=K[1],_e=(0,u.useState)({}),me=p()(_e,2),$=me[0],Ee=me[1],Oe=(0,u.useState)(!0),Ne=p()(Oe,2),ye=Ne[0],Ae=Ne[1],Ce=(0,u.useCallback)(function(){var A=r($,G,ye),C=A.nodes,j=A.edges;z(C),xe(j)},[$,G,ye]),Be=(0,u.useCallback)(function(A,C,j,ge){A.length!==0&&(Ee(X(A,C,j)),ve(C),Ae(ge))},[]);(0,u.useEffect)(function(){Object.keys($).length&&G&&Ce()},[$,G]);var we=(0,u.useCallback)(function(A,C){var j=$[A];j&&(j.select=C,Ee(w()({},$)))},[$]),Te=(0,u.useCallback)(function(A,C){A.forEach(function(j){we(j,C)})},[$]),Se=(0,u.useCallback)(function(A,C){var j=G==null?void 0:G.find(function(ge){return ge.id===A});j&&(j.select=C,ve(c()(G)))},[G]),Pe=(0,u.useCallback)(function(A,C){A.forEach(function(j){Se(j,C)})},[$]);return(0,R.jsx)(ae.b.Provider,{value:{nodes:E,edges:re,flowDataAdapter:Be,isUseProvider:!0,reactFlowInstance:g,miniMapPosition:i,setMiniMapPosition:l,updateSelectNode:we,updateSelectNodes:Te,updateSelectEdge:Se,updateSelectEdges:Pe},children:v})},q=function(o){var v=o.children;return(0,R.jsx)(P.tV,{children:(0,R.jsx)(k,{children:v})})}},62303:function(ue,L,n){n.d(L,{b:function(){return c}});var W=n(50959),c=(0,W.createContext)({})},26723:function(ue,L,n){var W=n(18840),c=n.n(W),y=n(37398),w=n(87943),a=n(57957),p=n(27529),u=n(93228),P=n(29038),N=n(1581),U=n(36809),H=n(56534),_=n(50959),X=n(24819),J=n(25880),se=n(37714),h=n(11527),le,de,oe,he=(0,H.kc)(function(ae,R){var k=ae.css,q=ae.token,f=R.x,o=R.y;return{container:k(le||(le=c()([`
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
    `])),o,f,q.colorBorder),visible:k(de||(de=c()([`
      display: none;
    `]))),minimap:k(oe||(oe=c()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),q.colorBgContainer)}}),r=function(R){var k=R.visible,q=k===void 0?!0:k,f=R.className,o=f===void 0?"":f,v=R.position,x=v===void 0?{x:10,y:10}:v,t=(0,J._K)(),i=(0,J.Sj)(),l=i.zoom,g=he(x),m=g.styles,S=g.cx,E=g.theme,z=function(){t.zoomIn()},Z=function(){t.zoomOut()},ee=function(){t.fitView()},re=function(){l===1?t.zoomTo(.5):t.zoomTo(1)},xe=[{icon:(0,h.jsx)(y.Z,{}),title:"\u7F29\u5C0F",onClick:Z},{title:l===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:re,children:Math.round(l*100)+"%",style:{width:56}},{icon:(0,h.jsx)(w.Z,{}),title:"\u653E\u5927",onClick:z},{icon:(0,h.jsx)(a.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:ee}];return(0,h.jsxs)(X.D,{gap:12,align:"center",className:S(m.container,o,!q&&m.visible),children:[(0,h.jsx)(p.ZP,{theme:{algorithm:[E.isDarkMode?u.Z.darkAlgorithm:u.Z.defaultAlgorithm,u.Z.compactAlgorithm]},children:(0,h.jsx)(X.D,{horizontal:!0,align:"center",children:(0,h.jsx)(P.Z,{className:"actionBox",children:xe.map(function(O,K){return(0,h.jsx)(N.Z,{arrow:!1,title:O.title,children:(0,h.jsx)(U.ZP,{onClick:O.onClick,icon:O.icon,style:O.style,children:O.children})},K)})})})}),(0,h.jsx)(se.a,{className:m.minimap,maskColor:E.colorBgMask,nodeColor:function(K){return K.data.color?K.data.color:E.colorFill}})]})};L.Z=r},73114:function(ue,L,n){n.d(L,{Q:function(){return W}});var W=function(c){return c.SELECT="SELECT",c.SUB_SELECT="SUB_SELECT",c.DANGER="DANGER",c.SUB_DANGER="SUB_DANGER",c.WARNING="WARNING",c.SUB_WARNING="SUB_WARNING",c.DEFAULT="DEFAULT",c}({})}}]);
