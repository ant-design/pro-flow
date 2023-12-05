"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[7893],{10139:function(ie,w,n){var b=n(77117),r=n.n(b),v=n(43772),_=n(11527);w.Z=function(l){var N=l.gap,s=N===void 0?10:N,T=l.color,B=T===void 0?"#bac3d4":T;return(0,_.jsx)(v.A,r()(r()({},l),{},{gap:s,color:B}))}},54092:function(ie,w,n){n.d(w,{W:function(){return Z},Z:function(){return u}});var b=n(18840),r=n.n(b),v=n(51938),_=n(44472),l=n(50959),N=n(8033),s=n(80166),T=n(45503),B,D,X,h,G,F,Y,x,ne=(0,T.kc)(function(t){var o=t.css,i=t.cx,c=t.prefixCls;return{nodeWrap:i("".concat(c,"-xx"),o(B||(B=r()([`
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
  `]))),nodeSubSelected:o(X||(X=r()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:o(h||(h=r()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:o(G||(G=r()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:o(F||(F=r()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:o(Y||(Y=r()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:o(x||(x=r()([""])))}}),m=n(11527),Q,te,oe,V,C=s.ZP.div(Q||(Q=r()([`
  width: 320px;
  height: 83px;
  position: relative;
`]))),I=function(o,i,c){return c&&i>1?o:o/i},Z=s.ZP.div(te||(te=r()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(t){var o=t.zoom;return I(24,o,!0)},function(t){var o=t.zoom;return"".concat(2/o,"px ").concat(1/o,"px ").concat(2/o,"px 0")},function(t){var o=t.zoom;return"".concat(14/o,"px")}),p=s.ZP.div(oe||(oe=r()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),e=s.ZP.div(V||(V=r()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`]))),g=function(o){var i=o.data,c=ne(),f=c.styles,j=c.cx,E=i.title,M=i.logo,L=i.description,J=i.className,q=i.selectType,se=q===void 0?v.QB.SELECT:q,S=i.zoom,U=S===void 0?1:S,O=i.label,W=i.titleSlot,le=i.handleType,ee=le===void 0?"both":le;return(0,m.jsxs)(C,{children:[ee==="output"||ee==="both"?(0,m.jsx)(N.HH,{type:"target",position:N.Ly.Left,style:{left:-6}}):null,(0,m.jsxs)("div",{children:[O&&(0,m.jsx)(Z,{zoom:U,children:U<=.1?"".concat(String(O).substring(0,3),"..."):O}),(0,m.jsxs)("div",{className:j(f.nodeWrap,f[(0,_.X)(se)],J),children:[(0,m.jsx)("img",{className:"img",src:M,alt:""}),(0,m.jsxs)("div",{className:"content",children:[(0,m.jsxs)("div",{className:"title",children:[(0,m.jsx)("span",{children:E}),!!W&&!!W.value&&W.type==="left"&&(0,m.jsx)(p,{children:W.value}),!!W&&!!W.value&&W.type==="right"&&(0,m.jsxs)(p,{children:[(0,m.jsx)("div",{style:{width:"28px"}}),(0,m.jsx)(e,{children:W.value})]})]}),(0,m.jsx)("div",{className:"des",children:L})]})]})]}),ee==="input"||ee==="both"?(0,m.jsx)(N.HH,{type:"source",position:N.Ly.Right,style:{right:-6}}):null]})},u=g},17893:function(ie,w,n){n.d(w,{Z:function(){return R}});var b=n(77117),r=n.n(b),v=n(50959),_=n(18840),l=n.n(_),N=n(54092),s=n(51938),T=n(44472),B=n(45503),D=n(8033),X=n(80166),h,G,F,Y,x,ne,m,Q,te,oe,V,C,I,Z,p=(0,B.kc)(function(d){var a=d.css;return{groupWrap:a(h||(h=l()([`
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
  `]))),btnWrap:a(G||(G=l()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:a(F||(F=l()([`
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
  `]))),groupItemWrap:a(Y||(Y=l()([`
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
  `]))),groupItemTitle:a(ne||(ne=l()([`
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
  `]))),nodeSelected:a(Q||(Q=l()([`
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
  `]))),nodeSubSelected:a(te||(te=l()([`
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
  `]))),nodeDanger:a(oe||(oe=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(V||(V=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(C||(C=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(I||(I=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(Z||(Z=l()([""])))}}),e=n(11527),g,u=X.ZP.div(g||(g=l()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),t=function(a){return a.map(function(y){return r()(r()({},y),{},{type:"default",flowNodeType:"lineage"})})},o=function(a){var y=p(),A=y.styles,z=a.id,K=a.title,$=a.des,H=a.logo;return(0,e.jsxs)("div",{className:A.groupItemWrap,children:[(0,e.jsx)("img",{src:H,alt:""}),(0,e.jsxs)("div",{className:A.groupItemContent,children:[(0,e.jsx)("div",{className:A.groupItemTitle,children:K}),(0,e.jsx)("div",{className:A.des,children:$})]})]},"".concat(z,"-").concat(K))},i=function(a){var y=a.data,A=p(),z=A.styles,K=y.handleType,$=K===void 0?"both":K,H=y.selectType,ge=H===void 0?s.QB.SELECT:H,ce=y.zoom,pe=ce===void 0?1:ce,ae=y.label,ue=y.data;if(ue.length<7)return(0,e.jsx)("div",{className:z.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var me=t(ue);return(0,e.jsxs)(u,{children:[$==="output"||$==="both"?(0,e.jsx)(D.HH,{type:"target",position:D.Ly.Left,style:{top:41.5,left:-6}}):null,(0,e.jsxs)("div",{children:[ae&&(0,e.jsx)(N.W,{zoom:pe,children:pe<=.1?"".concat(String(ae).substring(0,3),"..."):ae}),(0,e.jsxs)("div",{className:(0,B.cx)(z.groupWrap,z[(0,T.X)(ge)]),children:[me.map(function(re,Oe){var fe=re.data;return re.position={x:0,y:100*Oe},re.title=fe.title,re.logo=fe.logo,re.des=fe.describe,o(re)}),(0,e.jsx)("div",{className:"".concat(z.btnWrap," buttonWrap")}),(0,e.jsxs)("div",{className:z.btn,children:["\u67E5\u770B\u66F4\u591A",(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),$==="input"||$==="both"?(0,e.jsx)(D.HH,{type:"source",position:D.Ly.Right,style:{top:41.5,right:-6}}):null]})},c=i,f=n(43772),j=n(82982),E=n(28152),M=n.n(E);function L(d){var a=d.sourceX,y=d.sourceY,A=d.targetX,z=d.targetY,K=d.sourcePosition,$=d.targetPosition,H=d.style,ge=H===void 0?{}:H,ce=d.markerEnd,pe=(0,D.OW)({sourceX:a,sourceY:y,sourcePosition:K,targetX:A,targetY:z,targetPosition:$,borderRadius:50}),ae=M()(pe,1),ue=ae[0];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(D.u5,{path:ue,markerEnd:ce,style:ge})})}var J=n(26723),q=n(10139),se,S,U,O,W,le,ee,k,he,Ee=(0,B.kc)(function(d){var a=d.css,y=d.cx;return{container:a(se||(se=l()([`
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
    `])))),nodeSelected:a(U||(U=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:a(O||(O=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:a(W||(W=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(le||(le=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(ee||(ee=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(k||(k=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(he||(he=l()([""])))}}),_e=function(a){var y=a.data,A=Ee(),z=A.styles,K=A.cx,$=y.className,H=y.children;return(0,e.jsx)("div",{className:K(z.nodeWrap,$),children:H})},Ne=_e,ye=n(62303),Se=.1,Ae=(0,v.createContext)({}),de=function(){},we=function(a){var y=a.onNodeDragStart,A=y===void 0?de:y,z=a.onPaneClick,K=z===void 0?de:z,$=a.onNodeClick,H=$===void 0?de:$,ge=a.onEdgeClick,ce=ge===void 0?de:ge,pe=a.nodes,ae=pe===void 0?[]:pe,ue=a.edges,me=ue===void 0?[]:ue,re=a.nodeTypes,Oe=re===void 0?{}:re,fe=a.edgeTypes,ze=fe===void 0?{}:fe,Te=a.miniMap,Ie=Te===void 0?!0:Te,Ue=a.children,Ce=a.background,$e=Ce===void 0?!0:Ce,Pe=a.autoLayout,Be=Pe===void 0?!0:Pe,Me=a.stepLessZooming,Ge=Me===void 0?!0:Me,De=(0,v.useContext)(ye.b),Fe=De.miniMapPosition,Le=De.flowDataAdapter,Ze=De.nodes,ke=De.edges,We=Ee(),Ke=We.styles,He=We.cx,Qe=(0,v.useMemo)(function(){return r()(r()({},Oe),{},{lineage:N.Z,lineageGroup:c,default:Ne})},[]),Ve=(0,v.useMemo)(function(){return r()(r()({},ze),{},{radius:L})},[]),Xe=(0,D.Sj)(),Re=Xe.zoom;(0,v.useEffect)(function(){Le(ae,me,1,Be)},[ae,me]),(0,v.useEffect)(function(){Ge&&Le(ae,me,Re,Be)},[Re]);var Ye=(0,v.useCallback)(function(xe,be,nn){A(xe,be,nn)},[A]),Je=(0,v.useCallback)(function(xe){K(xe)},[K]),qe=(0,v.useCallback)(function(xe,be){H(xe,be)},[H]),en=(0,v.useCallback)(function(xe,be){ce(xe,be)},[ce]);return(0,e.jsxs)(D.x$,{className:He(Ke.container),onNodeDragStart:Ye,onPaneClick:Je,onNodeClick:qe,onEdgeClick:en,nodes:Ze,edges:ke,nodeTypes:Qe,edgeTypes:Ve,panOnScroll:!0,fitView:!0,minZoom:Se,children:[Ie&&(0,e.jsx)(J.Z,{position:Fe,className:"pro-flow-controller"}),Ue,$e&&(0,e.jsx)(q.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:f.T.Dots})]})},ve=we,je=n(70377),P=function(a){var y=(0,v.useContext)(ye.b),A=y.isUseProvider;return A?(0,e.jsx)(ve,r()({},a)):(0,e.jsx)(je.G,{children:(0,e.jsx)(ve,r()({},a))})},R=P},51938:function(ie,w,n){n.d(w,{$D:function(){return F},BP:function(){return G},H0:function(){return h},HM:function(){return s},QB:function(){return b},Ts:function(){return D},Vc:function(){return v},_H:function(){return T},eK:function(){return l},hK:function(){return r},l8:function(){return X},mc:function(){return _},ph:function(){return B},r0:function(){return N}});var b=function(x){return x.SELECT="SELECT",x.SUB_SELECT="SUB_SELECT",x.DANGER="DANGER",x.SUB_DANGER="SUB_DANGER",x.WARNING="WARNING",x.SUB_WARNING="SUB_WARNING",x.DEFAULT="DEFAULT",x}({}),r="nodeSelected",v="nodeSubSelected",_="nodeDanger",l="nodeSubDanger",N="nodeWarning",s="nodeSubWarning",T="edgeSelected",B="edgeSubSelected",D="edgeDanger",X="edgeSubDanger",h="edgeWarning",G="edgeSubWarning",F="initialNode",Y="nodeWrap"},70377:function(ie,w,n){n.d(w,{G:function(){return Z}});var b=n(67855),r=n.n(b),v=n(77117),_=n.n(v),l=n(28152),N=n.n(l),s=n(50959),T=n(8033),B=n(79511),D=n.n(B),X=n(45503),h=n(51938);function G(p,e,g){var u={};return p.forEach(function(t){var o=t.width,i=t.height,c=t.select,f=c===void 0?h.QB.DEFAULT:c,j=t.type,E=j===void 0?"lineage":j,M=t.position,L=M===void 0?{x:NaN,y:NaN}:M;u[t.id]={id:t.id,data:t.data,select:f,flowNodeType:E,right:[],left:[],position:L,width:o,height:i,zoom:g,label:t.label}}),e.forEach(function(t){var o,i,c=t.source,f=t.target;(o=u[c].right)===null||o===void 0||o.push(f),(i=u[f].left)===null||i===void 0||i.push(c)}),u}function F(p,e,g){if(!g)return{_nodes:p.map(function(t){var o=t.position,i=o.x,c=o.y;return _()(_()({},t),{},{position:{x:isNaN(i)?1:i,y:isNaN(c)?1:c}})}),_edges:e};var u=new(D()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return u.setGraph({rankdir:"LR",align:"UL"}),e.forEach(function(t){return u.setEdge(t.source,t.target)}),p.forEach(function(t){return u.setNode(t.id,t)}),D().layout(u),{_nodes:p.map(function(t){var o=u.node(t.id),i=o.x,c=o.y,f=t.position,j=f.x,E=f.y;return _()(_()({},t),{},{position:{x:(isNaN(j)?i:j)*1.3,y:(isNaN(E)?c:E)*1}})}),_edges:e}}function Y(p){var e=p.filter(function(t){var o,i;return((o=t.className)===null||o===void 0?void 0:o.includes("edgeSelected"))||((i=t.className)===null||i===void 0?void 0:i.includes("edgeSubSelected"))}),g=p.filter(function(t){var o,i;return((o=t.className)===null||o===void 0?void 0:o.includes("edgeDanger"))||((i=t.className)===null||i===void 0?void 0:i.includes("edgeSubDanger"))}),u=p.filter(function(t){var o,i,c,f;return!((o=t.className)!==null&&o!==void 0&&o.includes("edgeSelected"))&&!((i=t.className)!==null&&i!==void 0&&i.includes("edgeSubSelected"))&&!((c=t.className)!==null&&c!==void 0&&c.includes("edgeDanger"))&&!((f=t.className)!==null&&f!==void 0&&f.includes("edgeSubDanger"))});return[].concat(r()(u),r()(g),r()(e))}function x(p){switch(p){case h.QB.SELECT:return h._H;case h.QB.SUB_SELECT:return h.ph;case h.QB.DANGER:return h.Ts;case h.QB.SUB_DANGER:return h.l8;case h.QB.WARNING:return h.H0;case h.QB.SUB_WARNING:return h.BP;default:return"edgeDefault"}}function ne(p){return p.map(function(e){var g=e.source,u=e.target,t=e.select,o=t===void 0?h.QB.DEFAULT:t,i=e.type,c=i===void 0?"smoothstep":i,f=e.label,j=e.animated,E=e.sourceHandle,M=e.targetHandle,L=e.className;return{id:"".concat(g,"-").concat(u),source:g,target:u,sourceHandle:E,targetHandle:M,type:c,animated:j,label:f,className:x(o)+" "+L}})}var m=function(e){return["lineage","default"].includes(e.flowNodeType)?{width:320,height:83}:e.flowNodeType==="lineageGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},Q=function(e){var g,u,t,o;return((g=e.left)===null||g===void 0?void 0:g.length)===0&&((u=e.right)===null||u===void 0?void 0:u.length)===0?"none":((t=e.left)===null||t===void 0?void 0:t.length)===0?"input":((o=e.right)===null||o===void 0?void 0:o.length)===0?"output":"both"},te=function(e){return e.flowNodeType==="lineage"?_()(_()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:Q(e)}):e.flowNodeType==="lineageGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:Q(e)}:_()(_()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},oe=function(e,g,u){var t=[],o=ne(g);Object.keys(e).forEach(function(j){var E=e[j],M=E.flowNodeType,L=m(E),J=L.width,q=L.height;t.push({sourcePosition:T.Ly.Right,targetPosition:T.Ly.Left,id:E.id,position:E.position,type:M,width:J,height:q,className:(0,X.cx)(h.$D),data:te(E)})});var i=F(t,o,u),c=i._nodes,f=i._edges;return{nodes:c,edges:Y(f)}},V=n(62303),C=n(11527),I=function(e){var g=e.children,u=(0,s.useState)({x:10,y:10}),t=N()(u,2),o=t[0],i=t[1],c=(0,T._K)(),f=(0,s.useState)([]),j=N()(f,2),E=j[0],M=j[1],L=(0,s.useState)([]),J=N()(L,2),q=J[0],se=J[1],S=(0,s.useState)(void 0),U=N()(S,2),O=U[0],W=U[1],le=(0,s.useState)({}),ee=N()(le,2),k=ee[0],he=ee[1],Ee=(0,s.useState)(!0),_e=N()(Ee,2),Ne=_e[0],ye=_e[1],Se=(0,s.useCallback)(function(){var P=oe(k,O,Ne),R=P.nodes,d=P.edges;M(R),se(d)},[k,O,Ne]),Ae=(0,s.useCallback)(function(P,R,d,a){P.length!==0&&(he(G(P,R,d)),W(R),ye(a))},[]);(0,s.useEffect)(function(){Object.keys(k).length&&O&&Se()},[k,O]);var de=(0,s.useCallback)(function(P,R){var d=k[P];d&&(d.select=R,he(_()({},k)))},[k]),we=(0,s.useCallback)(function(P,R){P.forEach(function(d){de(d,R)})},[k]),ve=(0,s.useCallback)(function(P,R){var d=O==null?void 0:O.find(function(a){return a.id===P});d&&(d.select=R,W(r()(O)))},[O]),je=(0,s.useCallback)(function(P,R){P.forEach(function(d){ve(d,R)})},[k]);return(0,C.jsx)(V.b.Provider,{value:{nodes:E,edges:q,flowDataAdapter:Ae,isUseProvider:!0,reactFlowInstance:c,miniMapPosition:o,setMiniMapPosition:i,updateSelectNode:de,updateSelectNodes:we,updateSelectEdge:ve,updateSelectEdges:je},children:g})},Z=function(e){var g=e.children;return(0,C.jsx)(T.tV,{children:(0,C.jsx)(I,{children:g})})}},62303:function(ie,w,n){n.d(w,{b:function(){return r}});var b=n(50959),r=(0,b.createContext)({})},26723:function(ie,w,n){var b=n(18840),r=n.n(b),v=n(37398),_=n(87943),l=n(57957),N=n(30152),s=n(87362),T=n(58018),B=n(32618),D=n(47100),X=n(45503),h=n(50959),G=n(24819),F=n(8033),Y=n(52863),x=n(11527),ne,m,Q,te=(0,X.kc)(function(V,C){var I=V.css,Z=V.token,p=C.x,e=C.y;return{container:I(ne||(ne=r()([`
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
    `])),e,p,Z.colorBorder),visible:I(m||(m=r()([`
      display: none;
    `]))),minimap:I(Q||(Q=r()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),Z.colorBgContainer)}}),oe=function(C){var I=C.visible,Z=I===void 0?!0:I,p=C.className,e=p===void 0?"":p,g=C.position,u=g===void 0?{x:10,y:10}:g,t=(0,F._K)(),o=(0,F.Sj)(),i=o.zoom,c=te(u),f=c.styles,j=c.cx,E=c.theme,M=function(){t.zoomIn()},L=function(){t.zoomOut()},J=function(){t.fitView()},q=function(){i===1?t.zoomTo(.5):t.zoomTo(1)},se=[{icon:(0,x.jsx)(v.Z,{}),title:"\u7F29\u5C0F",onClick:L},{title:i===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:q,children:Math.round(i*100)+"%",style:{width:56}},{icon:(0,x.jsx)(_.Z,{}),title:"\u653E\u5927",onClick:M},{icon:(0,x.jsx)(l.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:J}];return(0,x.jsxs)(G.D,{gap:12,align:"center",className:j(f.container,e,!Z&&f.visible),children:[(0,x.jsx)(N.ZP,{theme:{algorithm:[E.isDarkMode?s.Z.darkAlgorithm:s.Z.defaultAlgorithm,s.Z.compactAlgorithm]},children:(0,x.jsx)(G.D,{horizontal:!0,align:"center",children:(0,x.jsx)(T.Z,{className:"actionBox",children:se.map(function(S,U){return(0,x.jsx)(B.Z,{arrow:!1,title:S.title,children:(0,x.jsx)(D.ZP,{onClick:S.onClick,icon:S.icon,style:S.style,children:S.children})},U)})})})}),(0,x.jsx)(Y.a,{className:f.minimap,maskColor:E.colorBgMask,nodeColor:function(U){return U.data.color?U.data.color:E.colorFill}})]})};w.Z=oe},73114:function(ie,w,n){n.d(w,{Q:function(){return b}});var b=function(r){return r.SELECT="SELECT",r.SUB_SELECT="SUB_SELECT",r.DANGER="DANGER",r.SUB_DANGER="SUB_DANGER",r.WARNING="WARNING",r.SUB_WARNING="SUB_WARNING",r.DEFAULT="DEFAULT",r}({})},44472:function(ie,w,n){n.d(w,{X:function(){return v}});var b=n(51938),r=n(73114);function v(_){switch(_){case r.Q.SELECT:return b.hK;case r.Q.SUB_SELECT:return b.Vc;case r.Q.DANGER:return b.mc;case r.Q.SUB_DANGER:return b.eK;case r.Q.WARNING:return b.r0;case r.Q.SUB_WARNING:return b.HM;default:return"nodeDefault"}}}}]);
