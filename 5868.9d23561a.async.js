"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5868],{55455:function(re,w,n){var E=n(77117),r=n.n(E),m=n(30595),N=n(11527);w.Z=function(l){var y=l.gap,s=y===void 0?10:y,A=l.color,B=A===void 0?"#bac3d4":A;return(0,N.jsx)(m.A,r()(r()({},l),{},{gap:s,color:B}))}},57813:function(re,w,n){n.d(w,{W:function(){return F},Z:function(){return u}});var E=n(18840),r=n.n(E),m=n(91578),N=n(73400),l=n(50959),y=n(52445),s=n(80166),A=n(57261),B,D,Y,v,G,Z,J,x,ne=(0,A.kc)(function(o){var a=o.css,i=o.cx,d=o.prefixCls;return{nodeWrap:i("".concat(d,"-xx"),a(B||(B=r()([`
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
    `])))),nodeSelected:a(D||(D=r()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:a(Y||(Y=r()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:a(v||(v=r()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(G||(G=r()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(Z||(Z=r()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(J||(J=r()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(x||(x=r()([""])))}}),b=n(11527),V,te,oe,X,T=s.ZP.div(V||(V=r()([`
  width: 320px;
  height: 83px;
  position: relative;
`]))),z=function(a,i,d){return d&&i>1?a:a/i},F=s.ZP.div(te||(te=r()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(o){var a=o.zoom;return z(24,a,!0)},function(o){var a=o.zoom;return"".concat(2/a,"px ").concat(1/a,"px ").concat(2/a,"px 0")},function(o){var a=o.zoom;return"".concat(14/a,"px")}),p=s.ZP.div(oe||(oe=r()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),e=s.ZP.div(X||(X=r()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`]))),g=function(a){var i=a.data,d=ne(),f=d.styles,j=d.cx,_=i.title,L=i.logo,M=i.description,k=i.className,I=i.selectType,q=I===void 0?m.QB.SELECT:I,S=i.zoom,U=S===void 0?1:S,C=i.label,W=i.titleSlot,se=i.handleType,ee=se===void 0?"both":se;return(0,b.jsxs)(T,{children:[ee==="output"||ee==="both"?(0,b.jsx)(y.HH,{type:"target",position:y.Ly.Left,style:{left:-6}}):null,(0,b.jsxs)("div",{children:[C&&(0,b.jsx)(F,{zoom:U,children:U<=.1?"".concat(String(C).substring(0,3),"..."):C}),(0,b.jsxs)("div",{className:j(f.nodeWrap,f[(0,N.X)(q)],k,"nodrag"),children:[(0,b.jsx)("img",{className:"img",src:L,alt:""}),(0,b.jsxs)("div",{className:"content",children:[(0,b.jsxs)("div",{className:"title",children:[(0,b.jsx)("span",{children:_}),!!W&&!!W.value&&W.type==="left"&&(0,b.jsx)(p,{children:W.value}),!!W&&!!W.value&&W.type==="right"&&(0,b.jsxs)(p,{children:[(0,b.jsx)("div",{style:{width:"28px"}}),(0,b.jsx)(e,{children:W.value})]})]}),(0,b.jsx)("div",{className:"des",children:M})]})]})]}),ee==="input"||ee==="both"?(0,b.jsx)(y.HH,{type:"source",position:y.Ly.Right,style:{right:-6}}):null]})},u=g},85868:function(re,w,n){n.d(w,{Z:function(){return P}});var E=n(77117),r=n.n(E),m=n(50959),N=n(18840),l=n.n(N),y=n(57813),s=n(91578),A=n(73400),B=n(57261),D=n(52445),Y=n(80166),v,G,Z,J,x,ne,b,V,te,oe,X,T,z,F,p=(0,B.kc)(function(c){var t=c.css;return{groupWrap:t(v||(v=l()([`
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
  `]))),btnWrap:t(G||(G=l()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:t(Z||(Z=l()([`
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
  `]))),groupItemWrap:t(J||(J=l()([`
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
  `]))),groupItemContent:t(x||(x=l()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:t(ne||(ne=l()([`
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
  `]))),des:t(b||(b=l()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:t(V||(V=l()([`
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
  `]))),nodeSubSelected:t(te||(te=l()([`
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
  `]))),nodeDanger:t(oe||(oe=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:t(X||(X=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:t(T||(T=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(z||(z=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(F||(F=l()([""])))}}),e=n(11527),g,u=Y.ZP.div(g||(g=l()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),o=function(t){return t.map(function(h){return r()(r()({},h),{},{type:"default",flowNodeType:"lineage"})})},a=function(t){var h=p(),O=h.styles,R=t.id,H=t.title,$=t.des,Q=t.logo;return(0,e.jsxs)("div",{className:O.groupItemWrap,children:[(0,e.jsx)("img",{src:Q,alt:""}),(0,e.jsxs)("div",{className:O.groupItemContent,children:[(0,e.jsx)("div",{className:O.groupItemTitle,children:H}),(0,e.jsx)("div",{className:O.des,children:$})]})]},"".concat(R,"-").concat(H))},i=function(t){var h=t.data,O=p(),R=O.styles,H=h.handleType,$=H===void 0?"both":H,Q=h.selectType,xe=Q===void 0?s.QB.SELECT:Q,le=h.zoom,de=le===void 0?1:le,ce=h.label,pe=h.data;if(pe.length<7)return(0,e.jsx)("div",{className:R.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var je=o(pe);return(0,e.jsxs)(u,{children:[$==="output"||$==="both"?(0,e.jsx)(D.HH,{type:"target",position:D.Ly.Left,style:{top:41.5,left:-6}}):null,(0,e.jsxs)("div",{children:[ce&&(0,e.jsx)(y.W,{zoom:de,children:de<=.1?"".concat(String(ce).substring(0,3),"..."):ce}),(0,e.jsxs)("div",{className:(0,B.cx)(R.groupWrap,R[(0,A.X)(xe)]),children:[je.map(function(ae,he){var ge=ae.data;return ae.position={x:0,y:100*he},ae.title=ge.title,ae.logo=ge.logo,ae.des=ge.describe,a(ae)}),(0,e.jsx)("div",{className:"".concat(R.btnWrap," buttonWrap")}),(0,e.jsxs)("div",{className:R.btn,children:["\u67E5\u770B\u66F4\u591A",(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),$==="input"||$==="both"?(0,e.jsx)(D.HH,{type:"source",position:D.Ly.Right,style:{top:41.5,right:-6}}):null]})},d=i,f=n(30595),j=n(87971),_=n(28152),L=n.n(_);function M(c){var t=c.sourceX,h=c.sourceY,O=c.targetX,R=c.targetY,H=c.sourcePosition,$=c.targetPosition,Q=c.style,xe=Q===void 0?{}:Q,le=c.markerEnd,de=(0,D.OW)({sourceX:t,sourceY:h,sourcePosition:H,targetX:O,targetY:R,targetPosition:$,borderRadius:50}),ce=L()(de,1),pe=ce[0];return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(D.u5,{path:pe,markerEnd:le,style:xe})})}var k=n(82712),I=n(55455),q,S,U,C,W,se,ee,K,fe,me=(0,B.kc)(function(c){var t=c.css,h=c.cx;return{container:t(q||(q=l()([`
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
  `])),s.$D,s._H,s.ph,s.ph,s.Ts,s.l8,s.H0,s.BP),nodeWrap:h(t(S||(S=l()([`
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
    `])))),nodeSelected:t(U||(U=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:t(C||(C=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:t(W||(W=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:t(se||(se=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:t(ee||(ee=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(K||(K=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(fe||(fe=l()([""])))}}),be=function(t){var h=t.data,O=me(),R=O.styles,H=O.cx,$=h.className,Q=h.children;return(0,e.jsx)("div",{className:H(R.nodeWrap,$),children:Q})},Ee=be,_e=n(22105),Oe=(0,m.createContext)({}),ie=function(){},Ne=function(t){var h=t.onNodeDragStart,O=h===void 0?ie:h,R=t.onPaneClick,H=R===void 0?ie:R,$=t.onNodeClick,Q=$===void 0?ie:$,xe=t.onEdgeClick,le=xe===void 0?ie:xe,de=t.onNodesChange,ce=de===void 0?ie:de,pe=t.onEdgesChange,je=pe===void 0?ie:pe,ae=t.nodes,he=ae===void 0?[]:ae,ge=t.edges,Ce=ge===void 0?[]:ge,Ae=t.nodeTypes,Ge=Ae===void 0?{}:Ae,Te=t.edgeTypes,Ze=Te===void 0?{}:Te,Pe=t.miniMap,Fe=Pe===void 0?!0:Pe,ke=t.children,Be=t.background,Ke=Be===void 0?!0:Be,Le=t.autoLayout,Me=Le===void 0?!0:Le,We=t.stepLessZooming,He=We===void 0?!0:We,Qe=t.flowProps,Re=t.minZoom,Ve=Re===void 0?.1:Re,ze=t.maxZoom,Xe=ze===void 0?2:ze,Se=(0,m.useContext)(_e.b),Ye=Se.miniMapPosition,Ie=Se.flowDataAdapter,Je=Se.nodes,qe=Se.edges,Ue=me(),en=Ue.styles,nn=Ue.cx,tn=(0,m.useMemo)(function(){return r()(r()({},Ge),{},{lineage:y.Z,lineageGroup:d,default:Ee})},[]),on=(0,m.useMemo)(function(){return r()(r()({},Ze),{},{radius:M})},[]),an=(0,D.Sj)(),$e=an.zoom;(0,m.useEffect)(function(){Ie(he,Ce,1,Me)},[he,Ce]),(0,m.useEffect)(function(){He&&Ie(he,Ce,$e,Me)},[$e]);var rn=(0,m.useCallback)(function(ue,ve,cn){O(ue,ve,cn)},[O]),sn=(0,m.useCallback)(function(ue){H(ue)},[H]),ln=(0,m.useCallback)(function(ue,ve){Q(ue,ve)},[Q]),dn=(0,m.useCallback)(function(ue,ve){le(ue,ve)},[le]);return(0,e.jsxs)(D.x$,r()(r()({className:nn(en.container),onNodeDragStart:rn,onPaneClick:sn,onNodeClick:ln,onEdgeClick:dn,onNodesChange:ce,onEdgesChange:je,nodes:Je,edges:qe,nodeTypes:tn,edgeTypes:on,panOnScroll:!0,fitView:!0,minZoom:Ve,maxZoom:Xe},Qe),{},{children:[Fe&&(0,e.jsx)(k.Z,{position:Ye,className:"pro-flow-controller"}),ke,Ke&&(0,e.jsx)(I.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:f.T.Dots})]}))},ye=Ne,De=n(62825),we=function(t){var h=(0,m.useContext)(_e.b),O=h.isUseProvider;return O?(0,e.jsx)(ye,r()({},t)):(0,e.jsx)(De.G,{children:(0,e.jsx)(ye,r()({},t))})},P=we},91578:function(re,w,n){n.d(w,{$D:function(){return Z},BP:function(){return G},H0:function(){return v},HM:function(){return s},QB:function(){return E},Ts:function(){return D},Vc:function(){return m},_H:function(){return A},eK:function(){return l},hK:function(){return r},l8:function(){return Y},mc:function(){return N},ph:function(){return B},r0:function(){return y}});var E=function(x){return x.SELECT="SELECT",x.SUB_SELECT="SUB_SELECT",x.DANGER="DANGER",x.SUB_DANGER="SUB_DANGER",x.WARNING="WARNING",x.SUB_WARNING="SUB_WARNING",x.DEFAULT="DEFAULT",x}({}),r="nodeSelected",m="nodeSubSelected",N="nodeDanger",l="nodeSubDanger",y="nodeWarning",s="nodeSubWarning",A="edgeSelected",B="edgeSubSelected",D="edgeDanger",Y="edgeSubDanger",v="edgeWarning",G="edgeSubWarning",Z="initialNode",J="nodeWrap"},62825:function(re,w,n){n.d(w,{G:function(){return F}});var E=n(67855),r=n.n(E),m=n(77117),N=n.n(m),l=n(28152),y=n.n(l),s=n(50959),A=n(52445),B=n(79511),D=n.n(B),Y=n(57261),v=n(91578);function G(p,e,g){var u={};return p.forEach(function(o){var a=o.width,i=o.height,d=o.select,f=d===void 0?v.QB.DEFAULT:d,j=o.type,_=j===void 0?"lineage":j,L=o.position,M=L===void 0?{x:NaN,y:NaN}:L;u[o.id]={id:o.id,data:o.data,select:f,flowNodeType:_,right:[],left:[],position:M,width:a,height:i,zoom:g,label:o.label}}),e.forEach(function(o){var a,i,d=o.source,f=o.target;(a=u[d].right)===null||a===void 0||a.push(f),(i=u[f].left)===null||i===void 0||i.push(d)}),u}function Z(p,e,g){if(!g)return{_nodes:p.map(function(o){var a=o.position,i=a.x,d=a.y;return N()(N()({},o),{},{position:{x:isNaN(i)?1:i,y:isNaN(d)?1:d}})}),_edges:e};var u=new(D()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return u.setGraph({rankdir:"LR",align:"UL"}),e.forEach(function(o){return u.setEdge(o.source,o.target)}),p.forEach(function(o){return u.setNode(o.id,o)}),D().layout(u),{_nodes:p.map(function(o){var a=u.node(o.id),i=a.x,d=a.y,f=o.position,j=f.x,_=f.y;return N()(N()({},o),{},{position:{x:(isNaN(j)?i:j)*1.3,y:(isNaN(_)?d:_)*1}})}),_edges:e}}function J(p){var e=p.filter(function(o){var a,i;return((a=o.className)===null||a===void 0?void 0:a.includes("edgeSelected"))||((i=o.className)===null||i===void 0?void 0:i.includes("edgeSubSelected"))}),g=p.filter(function(o){var a,i;return((a=o.className)===null||a===void 0?void 0:a.includes("edgeDanger"))||((i=o.className)===null||i===void 0?void 0:i.includes("edgeSubDanger"))}),u=p.filter(function(o){var a,i,d,f;return!((a=o.className)!==null&&a!==void 0&&a.includes("edgeSelected"))&&!((i=o.className)!==null&&i!==void 0&&i.includes("edgeSubSelected"))&&!((d=o.className)!==null&&d!==void 0&&d.includes("edgeDanger"))&&!((f=o.className)!==null&&f!==void 0&&f.includes("edgeSubDanger"))});return[].concat(r()(u),r()(g),r()(e))}function x(p){switch(p){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function ne(p){return p.map(function(e){var g=e.source,u=e.target,o=e.select,a=o===void 0?v.QB.DEFAULT:o,i=e.type,d=i===void 0?"smoothstep":i,f=e.label,j=e.animated,_=e.sourceHandle,L=e.targetHandle,M=e.className,k=e.data,I=e.id,q=I===void 0?"".concat(g,"-").concat(u):I;return{id:q,source:g,target:u,sourceHandle:_,targetHandle:L,type:d,data:k,animated:j,label:f,className:x(a)+" "+M}})}var b=function(e){return["lineage","default"].includes(e.flowNodeType)?{width:320,height:83}:e.flowNodeType==="lineageGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},V=function(e){var g,u,o,a;return((g=e.left)===null||g===void 0?void 0:g.length)===0&&((u=e.right)===null||u===void 0?void 0:u.length)===0?"none":((o=e.left)===null||o===void 0?void 0:o.length)===0?"input":((a=e.right)===null||a===void 0?void 0:a.length)===0?"output":"both"},te=function(e){return e.flowNodeType==="lineage"?N()(N()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:V(e)}):e.flowNodeType==="lineageGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:V(e)}:N()(N()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},oe=function(e,g,u){var o=[],a=ne(g);Object.keys(e).forEach(function(j){var _=e[j],L=_.flowNodeType,M=b(_),k=M.width,I=M.height;o.push({sourcePosition:A.Ly.Right,targetPosition:A.Ly.Left,id:_.id,position:_.position,type:L,width:k,height:I,className:(0,Y.cx)(v.$D),data:te(_)})});var i=Z(o,a,u),d=i._nodes,f=i._edges;return{nodes:d,edges:J(f)}},X=n(22105),T=n(11527),z=function(e){var g=e.children,u=(0,s.useState)({x:10,y:10}),o=y()(u,2),a=o[0],i=o[1],d=(0,A._K)(),f=(0,s.useState)([]),j=y()(f,2),_=j[0],L=j[1],M=(0,s.useState)([]),k=y()(M,2),I=k[0],q=k[1],S=(0,s.useState)(void 0),U=y()(S,2),C=U[0],W=U[1],se=(0,s.useState)({}),ee=y()(se,2),K=ee[0],fe=ee[1],me=(0,s.useState)(!0),be=y()(me,2),Ee=be[0],_e=be[1],Oe=(0,s.useCallback)(function(){var P=oe(K,C,Ee),c=P.nodes,t=P.edges;L(c),q(t)},[K,C,Ee]),ie=(0,s.useCallback)(function(P,c,t,h){P.length!==0&&(fe(G(P,c,t)),W(c),_e(h))},[]);(0,s.useEffect)(function(){Object.keys(K).length&&C&&Oe()},[K,C]);var Ne=(0,s.useCallback)(function(P,c){var t=K[P];t&&(t.select=c,fe(N()({},K)))},[K]),ye=(0,s.useCallback)(function(P,c){P.forEach(function(t){Ne(t,c)})},[K]),De=(0,s.useCallback)(function(P,c){var t=C==null?void 0:C.find(function(h){return h.id===P});t&&(t.select=c,W(r()(C)))},[C]),we=(0,s.useCallback)(function(P,c){P.forEach(function(t){De(t,c)})},[K]);return(0,T.jsx)(X.b.Provider,{value:{nodes:_,edges:I,flowDataAdapter:ie,isUseProvider:!0,reactFlowInstance:d,miniMapPosition:a,setMiniMapPosition:i,updateSelectNode:Ne,updateSelectNodes:ye,updateSelectEdge:De,updateSelectEdges:we},children:g})},F=function(e){var g=e.children;return(0,T.jsx)(A.tV,{children:(0,T.jsx)(z,{children:g})})}},22105:function(re,w,n){n.d(w,{b:function(){return r}});var E=n(50959),r=(0,E.createContext)({})},82712:function(re,w,n){var E=n(18840),r=n.n(E),m=n(48839),N=n(4848),l=n(52070),y=n(94066),s=n(46181),A=n(92260),B=n(24565),D=n(27106),Y=n(57261),v=n(50959),G=n(24819),Z=n(52445),J=n(48887),x=n(11527),ne,b,V,te=(0,Y.kc)(function(X,T){var z=X.css,F=X.token,p=T.x,e=T.y;return{container:z(ne||(ne=r()([`
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
    `])),e,p,F.colorBorder),visible:z(b||(b=r()([`
      display: none;
    `]))),minimap:z(V||(V=r()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),F.colorBgContainer)}}),oe=function(T){var z=T.visible,F=z===void 0?!0:z,p=T.className,e=p===void 0?"":p,g=T.position,u=g===void 0?{x:10,y:10}:g,o=(0,Z._K)(),a=(0,Z.Sj)(),i=a.zoom,d=te(u),f=d.styles,j=d.cx,_=d.theme,L=function(){o.zoomIn()},M=function(){o.zoomOut()},k=function(){o.fitView()},I=function(){i===1?o.zoomTo(.5):o.zoomTo(1)},q=[{icon:(0,x.jsx)(m.Z,{}),title:"\u7F29\u5C0F",onClick:M},{title:i===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:I,children:Math.round(i*100)+"%",style:{width:56}},{icon:(0,x.jsx)(N.Z,{}),title:"\u653E\u5927",onClick:L},{icon:(0,x.jsx)(l.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:k}];return(0,x.jsxs)(G.D,{gap:12,align:"center",className:j(f.container,e,!F&&f.visible),children:[(0,x.jsx)(y.ZP,{theme:{algorithm:[_.isDarkMode?s.Z.darkAlgorithm:s.Z.defaultAlgorithm,s.Z.compactAlgorithm]},children:(0,x.jsx)(G.D,{horizontal:!0,align:"center",children:(0,x.jsx)(A.Z,{className:"actionBox",children:q.map(function(S,U){return(0,x.jsx)(B.Z,{arrow:!1,title:S.title,children:(0,x.jsx)(D.ZP,{onClick:S.onClick,icon:S.icon,style:S.style,children:S.children})},U)})})})}),(0,x.jsx)(J.a,{className:f.minimap,maskColor:_.colorBgMask,nodeColor:function(U){return U.data.color?U.data.color:_.colorFill}})]})};w.Z=oe},93466:function(re,w,n){n.d(w,{Q:function(){return E}});var E=function(r){return r.SELECT="SELECT",r.SUB_SELECT="SUB_SELECT",r.DANGER="DANGER",r.SUB_DANGER="SUB_DANGER",r.WARNING="WARNING",r.SUB_WARNING="SUB_WARNING",r.DEFAULT="DEFAULT",r}({})},73400:function(re,w,n){n.d(w,{X:function(){return m}});var E=n(91578),r=n(93466);function m(N){switch(N){case r.Q.SELECT:return E.hK;case r.Q.SUB_SELECT:return E.Vc;case r.Q.DANGER:return E.mc;case r.Q.SUB_DANGER:return E.eK;case r.Q.WARNING:return E.r0;case r.Q.SUB_WARNING:return E.HM;default:return"nodeDefault"}}}}]);
