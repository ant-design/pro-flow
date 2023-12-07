"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5868],{55455:function(se,w,n){var b=n(77117),r=n.n(b),h=n(43772),_=n(11527);w.Z=function(l){var N=l.gap,s=N===void 0?10:N,T=l.color,B=T===void 0?"#bac3d4":T;return(0,_.jsx)(h.A,r()(r()({},l),{},{gap:s,color:B}))}},57813:function(se,w,n){n.d(w,{W:function(){return k},Z:function(){return u}});var b=n(18840),r=n.n(b),h=n(91578),_=n(73400),l=n(50959),N=n(8033),s=n(80166),T=n(45503),B,D,J,v,F,Z,q,x,te=(0,T.kc)(function(t){var o=t.css,i=t.cx,c=t.prefixCls;return{nodeWrap:i("".concat(c,"-xx"),o(B||(B=r()([`
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
    `])))),nodeSelected:o(D||(D=r()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:o(J||(J=r()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:o(v||(v=r()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:o(F||(F=r()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:o(Z||(Z=r()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:o(q||(q=r()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:o(x||(x=r()([""])))}}),m=n(11527),X,oe,ae,Y,C=s.ZP.div(X||(X=r()([`
  width: 320px;
  height: 83px;
  position: relative;
`]))),I=function(o,i,c){return c&&i>1?o:o/i},k=s.ZP.div(oe||(oe=r()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(t){var o=t.zoom;return I(24,o,!0)},function(t){var o=t.zoom;return"".concat(2/o,"px ").concat(1/o,"px ").concat(2/o,"px 0")},function(t){var o=t.zoom;return"".concat(14/o,"px")}),p=s.ZP.div(ae||(ae=r()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),e=s.ZP.div(Y||(Y=r()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`]))),g=function(o){var i=o.data,c=te(),f=c.styles,j=c.cx,E=i.title,M=i.logo,L=i.description,K=i.className,U=i.selectType,ee=U===void 0?h.QB.SELECT:U,S=i.zoom,$=S===void 0?1:S,O=i.label,W=i.titleSlot,le=i.handleType,ne=le===void 0?"both":le;return(0,m.jsxs)(C,{children:[ne==="output"||ne==="both"?(0,m.jsx)(N.HH,{type:"target",position:N.Ly.Left,style:{left:-6}}):null,(0,m.jsxs)("div",{children:[O&&(0,m.jsx)(k,{zoom:$,children:$<=.1?"".concat(String(O).substring(0,3),"..."):O}),(0,m.jsxs)("div",{className:j(f.nodeWrap,f[(0,_.X)(ee)],K),children:[(0,m.jsx)("img",{className:"img",src:M,alt:""}),(0,m.jsxs)("div",{className:"content",children:[(0,m.jsxs)("div",{className:"title",children:[(0,m.jsx)("span",{children:E}),!!W&&!!W.value&&W.type==="left"&&(0,m.jsx)(p,{children:W.value}),!!W&&!!W.value&&W.type==="right"&&(0,m.jsxs)(p,{children:[(0,m.jsx)("div",{style:{width:"28px"}}),(0,m.jsx)(e,{children:W.value})]})]}),(0,m.jsx)("div",{className:"des",children:L})]})]})]}),ne==="input"||ne==="both"?(0,m.jsx)(N.HH,{type:"source",position:N.Ly.Right,style:{right:-6}}):null]})},u=g},85868:function(se,w,n){n.d(w,{Z:function(){return R}});var b=n(77117),r=n.n(b),h=n(50959),_=n(18840),l=n.n(_),N=n(57813),s=n(91578),T=n(73400),B=n(45503),D=n(8033),J=n(80166),v,F,Z,q,x,te,m,X,oe,ae,Y,C,I,k,p=(0,B.kc)(function(d){var a=d.css;return{groupWrap:a(v||(v=l()([`
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
  `]))),btnWrap:a(F||(F=l()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:a(Z||(Z=l()([`
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
  `]))),groupItemWrap:a(q||(q=l()([`
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
  `]))),groupItemContent:a(x||(x=l()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:a(te||(te=l()([`
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
  `]))),des:a(m||(m=l()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:a(X||(X=l()([`
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
  `]))),nodeSubSelected:a(oe||(oe=l()([`
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
  `]))),nodeDanger:a(ae||(ae=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(Y||(Y=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(C||(C=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(I||(I=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(k||(k=l()([""])))}}),e=n(11527),g,u=J.ZP.div(g||(g=l()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),t=function(a){return a.map(function(y){return r()(r()({},y),{},{type:"default",flowNodeType:"lineage"})})},o=function(a){var y=p(),A=y.styles,z=a.id,Q=a.title,G=a.des,V=a.logo;return(0,e.jsxs)("div",{className:A.groupItemWrap,children:[(0,e.jsx)("img",{src:V,alt:""}),(0,e.jsxs)("div",{className:A.groupItemContent,children:[(0,e.jsx)("div",{className:A.groupItemTitle,children:Q}),(0,e.jsx)("div",{className:A.des,children:G})]})]},"".concat(z,"-").concat(Q))},i=function(a){var y=a.data,A=p(),z=A.styles,Q=y.handleType,G=Q===void 0?"both":Q,V=y.selectType,ge=V===void 0?s.QB.SELECT:V,ce=y.zoom,pe=ce===void 0?1:ce,re=y.label,ue=y.data;if(ue.length<7)return(0,e.jsx)("div",{className:z.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var me=t(ue);return(0,e.jsxs)(u,{children:[G==="output"||G==="both"?(0,e.jsx)(D.HH,{type:"target",position:D.Ly.Left,style:{top:41.5,left:-6}}):null,(0,e.jsxs)("div",{children:[re&&(0,e.jsx)(N.W,{zoom:pe,children:pe<=.1?"".concat(String(re).substring(0,3),"..."):re}),(0,e.jsxs)("div",{className:(0,B.cx)(z.groupWrap,z[(0,T.X)(ge)]),children:[me.map(function(ie,Oe){var fe=ie.data;return ie.position={x:0,y:100*Oe},ie.title=fe.title,ie.logo=fe.logo,ie.des=fe.describe,o(ie)}),(0,e.jsx)("div",{className:"".concat(z.btnWrap," buttonWrap")}),(0,e.jsxs)("div",{className:z.btn,children:["\u67E5\u770B\u66F4\u591A",(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),G==="input"||G==="both"?(0,e.jsx)(D.HH,{type:"source",position:D.Ly.Right,style:{top:41.5,right:-6}}):null]})},c=i,f=n(43772),j=n(71774),E=n(28152),M=n.n(E);function L(d){var a=d.sourceX,y=d.sourceY,A=d.targetX,z=d.targetY,Q=d.sourcePosition,G=d.targetPosition,V=d.style,ge=V===void 0?{}:V,ce=d.markerEnd,pe=(0,D.OW)({sourceX:a,sourceY:y,sourcePosition:Q,targetX:A,targetY:z,targetPosition:G,borderRadius:50}),re=M()(pe,1),ue=re[0];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(D.u5,{path:ue,markerEnd:ce,style:ge})})}var K=n(82712),U=n(55455),ee,S,$,O,W,le,ne,H,ve,Ee=(0,B.kc)(function(d){var a=d.css,y=d.cx;return{container:a(ee||(ee=l()([`
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
  `])),s.$D,s._H,s.ph,s.ph,s.Ts,s.l8,s.H0,s.BP),nodeWrap:y(a(S||(S=l()([`
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
    `])))),nodeSelected:a($||($=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:a(O||(O=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:a(W||(W=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(le||(le=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(ne||(ne=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(H||(H=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(ve||(ve=l()([""])))}}),_e=function(a){var y=a.data,A=Ee(),z=A.styles,Q=A.cx,G=y.className,V=y.children;return(0,e.jsx)("div",{className:Q(z.nodeWrap,G),children:V})},Ne=_e,ye=n(22105),Se=.1,Ae=(0,h.createContext)({}),de=function(){},we=function(a){var y=a.onNodeDragStart,A=y===void 0?de:y,z=a.onPaneClick,Q=z===void 0?de:z,G=a.onNodeClick,V=G===void 0?de:G,ge=a.onEdgeClick,ce=ge===void 0?de:ge,pe=a.nodes,re=pe===void 0?[]:pe,ue=a.edges,me=ue===void 0?[]:ue,ie=a.nodeTypes,Oe=ie===void 0?{}:ie,fe=a.edgeTypes,ze=fe===void 0?{}:fe,Te=a.miniMap,Ie=Te===void 0?!0:Te,Ue=a.children,Ce=a.background,$e=Ce===void 0?!0:Ce,Pe=a.autoLayout,Be=Pe===void 0?!0:Pe,Me=a.stepLessZooming,Ge=Me===void 0?!0:Me,Fe=a.flowProps,De=(0,h.useContext)(ye.b),Ze=De.miniMapPosition,Le=De.flowDataAdapter,ke=De.nodes,Ke=De.edges,We=Ee(),He=We.styles,Qe=We.cx,Ve=(0,h.useMemo)(function(){return r()(r()({},Oe),{},{lineage:N.Z,lineageGroup:c,default:Ne})},[]),Xe=(0,h.useMemo)(function(){return r()(r()({},ze),{},{radius:L})},[]),Ye=(0,D.Sj)(),Re=Ye.zoom;(0,h.useEffect)(function(){Le(re,me,1,Be)},[re,me]),(0,h.useEffect)(function(){Ge&&Le(re,me,Re,Be)},[Re]);var Je=(0,h.useCallback)(function(xe,be,tn){A(xe,be,tn)},[A]),qe=(0,h.useCallback)(function(xe){Q(xe)},[Q]),en=(0,h.useCallback)(function(xe,be){V(xe,be)},[V]),nn=(0,h.useCallback)(function(xe,be){ce(xe,be)},[ce]);return(0,e.jsxs)(D.x$,r()(r()({className:Qe(He.container),onNodeDragStart:Je,onPaneClick:qe,onNodeClick:en,onEdgeClick:nn,nodes:ke,edges:Ke,nodeTypes:Ve,edgeTypes:Xe,panOnScroll:!0,fitView:!0,minZoom:Se},Fe),{},{children:[Ie&&(0,e.jsx)(K.Z,{position:Ze,className:"pro-flow-controller"}),Ue,$e&&(0,e.jsx)(U.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:f.T.Dots})]}))},he=we,je=n(62825),P=function(a){var y=(0,h.useContext)(ye.b),A=y.isUseProvider;return A?(0,e.jsx)(he,r()({},a)):(0,e.jsx)(je.G,{children:(0,e.jsx)(he,r()({},a))})},R=P},91578:function(se,w,n){n.d(w,{$D:function(){return Z},BP:function(){return F},H0:function(){return v},HM:function(){return s},QB:function(){return b},Ts:function(){return D},Vc:function(){return h},_H:function(){return T},eK:function(){return l},hK:function(){return r},l8:function(){return J},mc:function(){return _},ph:function(){return B},r0:function(){return N}});var b=function(x){return x.SELECT="SELECT",x.SUB_SELECT="SUB_SELECT",x.DANGER="DANGER",x.SUB_DANGER="SUB_DANGER",x.WARNING="WARNING",x.SUB_WARNING="SUB_WARNING",x.DEFAULT="DEFAULT",x}({}),r="nodeSelected",h="nodeSubSelected",_="nodeDanger",l="nodeSubDanger",N="nodeWarning",s="nodeSubWarning",T="edgeSelected",B="edgeSubSelected",D="edgeDanger",J="edgeSubDanger",v="edgeWarning",F="edgeSubWarning",Z="initialNode",q="nodeWrap"},62825:function(se,w,n){n.d(w,{G:function(){return k}});var b=n(67855),r=n.n(b),h=n(77117),_=n.n(h),l=n(28152),N=n.n(l),s=n(50959),T=n(8033),B=n(79511),D=n.n(B),J=n(45503),v=n(91578);function F(p,e,g){var u={};return p.forEach(function(t){var o=t.width,i=t.height,c=t.select,f=c===void 0?v.QB.DEFAULT:c,j=t.type,E=j===void 0?"lineage":j,M=t.position,L=M===void 0?{x:NaN,y:NaN}:M;u[t.id]={id:t.id,data:t.data,select:f,flowNodeType:E,right:[],left:[],position:L,width:o,height:i,zoom:g,label:t.label}}),e.forEach(function(t){var o,i,c=t.source,f=t.target;(o=u[c].right)===null||o===void 0||o.push(f),(i=u[f].left)===null||i===void 0||i.push(c)}),u}function Z(p,e,g){if(!g)return{_nodes:p.map(function(t){var o=t.position,i=o.x,c=o.y;return _()(_()({},t),{},{position:{x:isNaN(i)?1:i,y:isNaN(c)?1:c}})}),_edges:e};var u=new(D()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return u.setGraph({rankdir:"LR",align:"UL"}),e.forEach(function(t){return u.setEdge(t.source,t.target)}),p.forEach(function(t){return u.setNode(t.id,t)}),D().layout(u),{_nodes:p.map(function(t){var o=u.node(t.id),i=o.x,c=o.y,f=t.position,j=f.x,E=f.y;return _()(_()({},t),{},{position:{x:(isNaN(j)?i:j)*1.3,y:(isNaN(E)?c:E)*1}})}),_edges:e}}function q(p){var e=p.filter(function(t){var o,i;return((o=t.className)===null||o===void 0?void 0:o.includes("edgeSelected"))||((i=t.className)===null||i===void 0?void 0:i.includes("edgeSubSelected"))}),g=p.filter(function(t){var o,i;return((o=t.className)===null||o===void 0?void 0:o.includes("edgeDanger"))||((i=t.className)===null||i===void 0?void 0:i.includes("edgeSubDanger"))}),u=p.filter(function(t){var o,i,c,f;return!((o=t.className)!==null&&o!==void 0&&o.includes("edgeSelected"))&&!((i=t.className)!==null&&i!==void 0&&i.includes("edgeSubSelected"))&&!((c=t.className)!==null&&c!==void 0&&c.includes("edgeDanger"))&&!((f=t.className)!==null&&f!==void 0&&f.includes("edgeSubDanger"))});return[].concat(r()(u),r()(g),r()(e))}function x(p){switch(p){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function te(p){return p.map(function(e){var g=e.source,u=e.target,t=e.select,o=t===void 0?v.QB.DEFAULT:t,i=e.type,c=i===void 0?"smoothstep":i,f=e.label,j=e.animated,E=e.sourceHandle,M=e.targetHandle,L=e.className,K=e.data,U=e.id,ee=U===void 0?"".concat(g,"-").concat(u):U;return{id:ee,source:g,target:u,sourceHandle:E,targetHandle:M,type:c,data:K,animated:j,label:f,className:x(o)+" "+L}})}var m=function(e){return["lineage","default"].includes(e.flowNodeType)?{width:320,height:83}:e.flowNodeType==="lineageGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},X=function(e){var g,u,t,o;return((g=e.left)===null||g===void 0?void 0:g.length)===0&&((u=e.right)===null||u===void 0?void 0:u.length)===0?"none":((t=e.left)===null||t===void 0?void 0:t.length)===0?"input":((o=e.right)===null||o===void 0?void 0:o.length)===0?"output":"both"},oe=function(e){return e.flowNodeType==="lineage"?_()(_()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:X(e)}):e.flowNodeType==="lineageGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:X(e)}:_()(_()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},ae=function(e,g,u){var t=[],o=te(g);Object.keys(e).forEach(function(j){var E=e[j],M=E.flowNodeType,L=m(E),K=L.width,U=L.height;t.push({sourcePosition:T.Ly.Right,targetPosition:T.Ly.Left,id:E.id,position:E.position,type:M,width:K,height:U,className:(0,J.cx)(v.$D),data:oe(E)})});var i=Z(t,o,u),c=i._nodes,f=i._edges;return{nodes:c,edges:q(f)}},Y=n(22105),C=n(11527),I=function(e){var g=e.children,u=(0,s.useState)({x:10,y:10}),t=N()(u,2),o=t[0],i=t[1],c=(0,T._K)(),f=(0,s.useState)([]),j=N()(f,2),E=j[0],M=j[1],L=(0,s.useState)([]),K=N()(L,2),U=K[0],ee=K[1],S=(0,s.useState)(void 0),$=N()(S,2),O=$[0],W=$[1],le=(0,s.useState)({}),ne=N()(le,2),H=ne[0],ve=ne[1],Ee=(0,s.useState)(!0),_e=N()(Ee,2),Ne=_e[0],ye=_e[1],Se=(0,s.useCallback)(function(){var P=ae(H,O,Ne),R=P.nodes,d=P.edges;M(R),ee(d)},[H,O,Ne]),Ae=(0,s.useCallback)(function(P,R,d,a){P.length!==0&&(ve(F(P,R,d)),W(R),ye(a))},[]);(0,s.useEffect)(function(){Object.keys(H).length&&O&&Se()},[H,O]);var de=(0,s.useCallback)(function(P,R){var d=H[P];d&&(d.select=R,ve(_()({},H)))},[H]),we=(0,s.useCallback)(function(P,R){P.forEach(function(d){de(d,R)})},[H]),he=(0,s.useCallback)(function(P,R){var d=O==null?void 0:O.find(function(a){return a.id===P});d&&(d.select=R,W(r()(O)))},[O]),je=(0,s.useCallback)(function(P,R){P.forEach(function(d){he(d,R)})},[H]);return(0,C.jsx)(Y.b.Provider,{value:{nodes:E,edges:U,flowDataAdapter:Ae,isUseProvider:!0,reactFlowInstance:c,miniMapPosition:o,setMiniMapPosition:i,updateSelectNode:de,updateSelectNodes:we,updateSelectEdge:he,updateSelectEdges:je},children:g})},k=function(e){var g=e.children;return(0,C.jsx)(T.tV,{children:(0,C.jsx)(I,{children:g})})}},22105:function(se,w,n){n.d(w,{b:function(){return r}});var b=n(50959),r=(0,b.createContext)({})},82712:function(se,w,n){var b=n(18840),r=n.n(b),h=n(48839),_=n(4848),l=n(52070),N=n(30152),s=n(87362),T=n(58018),B=n(32618),D=n(47100),J=n(45503),v=n(50959),F=n(24819),Z=n(8033),q=n(52863),x=n(11527),te,m,X,oe=(0,J.kc)(function(Y,C){var I=Y.css,k=Y.token,p=C.x,e=C.y;return{container:I(te||(te=r()([`
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
    `])),e,p,k.colorBorder),visible:I(m||(m=r()([`
      display: none;
    `]))),minimap:I(X||(X=r()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),k.colorBgContainer)}}),ae=function(C){var I=C.visible,k=I===void 0?!0:I,p=C.className,e=p===void 0?"":p,g=C.position,u=g===void 0?{x:10,y:10}:g,t=(0,Z._K)(),o=(0,Z.Sj)(),i=o.zoom,c=oe(u),f=c.styles,j=c.cx,E=c.theme,M=function(){t.zoomIn()},L=function(){t.zoomOut()},K=function(){t.fitView()},U=function(){i===1?t.zoomTo(.5):t.zoomTo(1)},ee=[{icon:(0,x.jsx)(h.Z,{}),title:"\u7F29\u5C0F",onClick:L},{title:i===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:U,children:Math.round(i*100)+"%",style:{width:56}},{icon:(0,x.jsx)(_.Z,{}),title:"\u653E\u5927",onClick:M},{icon:(0,x.jsx)(l.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:K}];return(0,x.jsxs)(F.D,{gap:12,align:"center",className:j(f.container,e,!k&&f.visible),children:[(0,x.jsx)(N.ZP,{theme:{algorithm:[E.isDarkMode?s.Z.darkAlgorithm:s.Z.defaultAlgorithm,s.Z.compactAlgorithm]},children:(0,x.jsx)(F.D,{horizontal:!0,align:"center",children:(0,x.jsx)(T.Z,{className:"actionBox",children:ee.map(function(S,$){return(0,x.jsx)(B.Z,{arrow:!1,title:S.title,children:(0,x.jsx)(D.ZP,{onClick:S.onClick,icon:S.icon,style:S.style,children:S.children})},$)})})})}),(0,x.jsx)(q.a,{className:f.minimap,maskColor:E.colorBgMask,nodeColor:function($){return $.data.color?$.data.color:E.colorFill}})]})};w.Z=ae},93466:function(se,w,n){n.d(w,{Q:function(){return b}});var b=function(r){return r.SELECT="SELECT",r.SUB_SELECT="SUB_SELECT",r.DANGER="DANGER",r.SUB_DANGER="SUB_DANGER",r.WARNING="WARNING",r.SUB_WARNING="SUB_WARNING",r.DEFAULT="DEFAULT",r}({})},73400:function(se,w,n){n.d(w,{X:function(){return h}});var b=n(91578),r=n(93466);function h(_){switch(_){case r.Q.SELECT:return b.hK;case r.Q.SUB_SELECT:return b.Vc;case r.Q.DANGER:return b.mc;case r.Q.SUB_DANGER:return b.eK;case r.Q.WARNING:return b.r0;case r.Q.SUB_WARNING:return b.HM;default:return"nodeDefault"}}}}]);
