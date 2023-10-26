"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[31],{56031:function(R,y,i){i.d(y,{Z:function(){return Se}});var w=i(77117),f=i.n(w),x=i(50959),b=i(7896),O=i(43665),T=i(96019),W=i(28152),F=i.n(W),t=i(11527);function _(e){var n=e.sourceX,a=e.sourceY,r=e.targetX,o=e.targetY,l=e.sourcePosition,s=e.targetPosition,u=e.style,p=u===void 0?{}:u,c=e.markerEnd,g=(0,b.OW)({sourceX:n,sourceY:a,sourcePosition:l,targetX:r,targetY:o,targetPosition:s,borderRadius:50}),m=F()(g,1),v=m[0];return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(b.u5,{path:v,markerEnd:c,style:p})})}var A=i(18840),d=i.n(A),G=i(18411),L=i(29322),I=i(91305),U=i(68229),z=i(83645),Q=i(45228),D=i(72710),Mn=i(706),H,J,q,nn,$n=(0,D.kc)(function(e,n){var a=e.css,r=n.x,o=n.y;return{container:a(H||(H=d()([`
      position: absolute;
      bottom: `,`px;
      right: `,`px;

      z-index: 100;
      transition: right 0.2s ease;
    `])),o,10+r),visible:a(J||(J=d()([`
      right: 387px;
    `]))),controlAction:a(q||(q=d()([`
      height: 80px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    `]))),measureMap:a(nn||(nn=d()([`
      border-radius: 4px;
      height: 180px;
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
      right: 0;
      bottom: 0;
      position: relative;
    `])))}}),kn=function(n){var a=n.visible,r=a===void 0?!1:a,o=n.className,l=o===void 0?"":o,s=n.position,u=s===void 0?[0,0]:s,p=(0,b._K)(),c=(0,b.Sj)(),g=c.zoom,m=$n({x:u[0],y:u[1]}),v=m.styles,E=m.cx,N=function(){p.zoomIn()},Z=function(){p.zoomOut()},V=function(){p.fitView()},B=function(){g===1?p.zoomTo(.5):p.zoomTo(1)};return(0,t.jsxs)("div",{className:E(v.container,r&&v.visible,l),children:[(0,t.jsx)("div",{className:v.controlAction,children:(0,t.jsxs)(U.Z,{children:[(0,t.jsx)(z.ZP,{icon:(0,t.jsx)(G.Z,{}),onClick:Z}),(0,t.jsx)(Q.Z,{title:g===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,t.jsxs)(z.ZP,{onClick:B,children:[Math.round(g*100),"%"]})}),(0,t.jsx)(z.ZP,{icon:(0,t.jsx)(L.Z,{}),onClick:N}),(0,t.jsx)(Q.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,t.jsx)(z.ZP,{icon:(0,t.jsx)(I.Z,{}),onClick:V})})]})}),(0,t.jsx)(Mn.a,{className:v.measureMap,pannable:!0,onNodeClick:function(K,C){var Y=f()(f()({},C.position),{},{height:C.height,width:C.width});p.fitBounds(Y,{padding:.5})}})]})},Zn=kn,Vn=i(67855),M=i.n(Vn),h=function(e){return e.SELECT="SELECT",e.SUB_SELECT="SUB_SELECT",e.DANGER="DANGER",e.SUB_DANGER="SUB_DANGER",e.WARNING="WARNING",e.SUB_WARNING="SUB_WARNING",e.DEFAULT="DEFAULT",e}({}),Kn="nodeSelected",Yn="nodeSubSelected",Xn="nodeDanger",Qn="nodeSubDanger",Hn="nodeWarning",Jn="nodeSubWarning",en="edgeSelected",tn="edgeSubSelected",on="edgeDanger",rn="edgeSubDanger",an="edgeWarning",sn="edgeSubWarning",ln="initialNode",De="nodeWrap",$=i(70652),dn,cn,pn,un,xn,gn,mn,vn,qn=(0,D.kc)(function(e){var n=e.css,a=e.cx,r=e.prefixCls;return{nodeWrap:a("".concat(r,"-xx"),n(dn||(dn=d()([`
      width: 320px;
      height: 85px;
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
    `])))),nodeSelected:n(cn||(cn=d()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(pn||(pn=d()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(un||(un=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(xn||(xn=d()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(gn||(gn=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(mn||(mn=d()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(vn||(vn=d()([""])))}}),hn,fn,bn,ne=function(n,a,r){return r&&a>1?n:n/a},En=$.ZP.div(hn||(hn=d()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var n=e.zoom;return ne(24,n,!0)},function(e){var n=e.zoom;return"".concat(2/n,"px ").concat(1/n,"px ").concat(2/n,"px 0")},function(e){var n=e.zoom;return"".concat(14/n,"px")}),Nn=$.ZP.div(fn||(fn=d()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),ee=$.ZP.div(bn||(bn=d()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`])));function Sn(e){switch(e){case h.SELECT:return Kn;case h.SUB_SELECT:return Yn;case h.DANGER:return Xn;case h.SUB_DANGER:return Qn;case h.WARNING:return Hn;case h.SUB_WARNING:return Jn;default:return"nodeDefault"}}var te=function(n){var a=n.title,r=n.logo,o=n.description,l=n.className,s=n.selectType,u=s===void 0?h.SELECT:s,p=n.zoom,c=p===void 0?1:p,g=n.label,m=n.titleSlot,v=qn(),E=v.styles,N=v.cx;return(0,t.jsxs)(t.Fragment,{children:[g&&(0,t.jsx)(En,{zoom:c,children:c<=.1?"".concat(String(g).substring(0,3),"..."):g}),(0,t.jsxs)("div",{className:N(E.nodeWrap,E[Sn(u)],l),children:[(0,t.jsx)("img",{className:"img",src:r,alt:""}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsx)("span",{children:a}),!!m&&!!m.value&&m.type==="left"&&(0,t.jsx)(Nn,{children:m.value}),!!m&&!!m.value&&m.type==="right"&&(0,t.jsxs)(Nn,{children:[(0,t.jsx)("div",{style:{width:"28px"}}),(0,t.jsx)(ee,{children:m.value})]})]}),(0,t.jsx)("div",{className:"des",children:o})]})]})]})},oe=te,jn,yn,wn,Dn,_n,An,Cn,Pn,On,Tn,Gn,zn,Bn,Rn,Wn=(0,D.kc)(function(e){var n=e.css;return{groupWrap:n(jn||(jn=d()([`
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
  `]))),btnWrap:n(yn||(yn=d()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:n(wn||(wn=d()([`
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

    img {
      width: 14px;
      height: 14px;
      margin-left: 4px;
      transform: translateY(-1px);
    }
  `]))),groupItemWrap:n(Dn||(Dn=d()([`
    width: 320px;
    height: 83px;
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
  `]))),groupItemContent:n(_n||(_n=d()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:n(An||(An=d()([`
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
  `]))),des:n(Cn||(Cn=d()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:n(Pn||(Pn=d()([`
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
  `]))),nodeSubSelected:n(On||(On=d()([`
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
  `]))),nodeDanger:n(Tn||(Tn=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(Gn||(Gn=d()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(zn||(zn=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(Bn||(Bn=d()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(Rn||(Rn=d()([""])))}}),re=function(n){return n.map(function(a){return a})},ae=function(n){var a=Wn(),r=a.styles,o=n.id,l=n.title,s=n.des,u=n.logo;return(0,t.jsxs)("div",{className:r.groupItemWrap,children:[(0,t.jsx)("img",{src:u,alt:""}),(0,t.jsxs)("div",{className:r.groupItemContent,children:[(0,t.jsx)("div",{className:r.groupItemTitle,children:l}),(0,t.jsx)("div",{className:r.des,children:s})]})]},"".concat(o,"-").concat(l))},ie=function(n){var a=n.group,r=n.data,o=n.select,l=o===void 0?h.SELECT:o,s=n.zoom,u=s===void 0?1:s,p=n.label,c=Wn(),g=c.styles;if(!a)return null;if(r.length<7)return(0,t.jsx)("div",{className:g.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var m=re(r);return(0,t.jsxs)(t.Fragment,{children:[p&&(0,t.jsx)(En,{zoom:u,children:u<=.1?"".concat(String(p).substring(0,3),"..."):p}),(0,t.jsxs)("div",{className:(0,D.cx)(g.groupWrap,g[Sn(l)]),children:[m.map(function(v,E){var N=v.data;return v.position={x:0,y:100*E},v.title=N.title,v.logo=N.logo,v.des=N.describe,ae(v)}),(0,t.jsx)("div",{className:"".concat(g.btnWrap," buttonWrap")}),(0,t.jsxs)("div",{className:g.btn,children:["\u67E5\u770B\u66F4\u591A",(0,t.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]})},se=ie,le=i(15855),de=i(79511),Fn=i.n(de);function ce(e){var n,a,r,o;return(n=e.left)!==null&&n!==void 0&&n.length&&(a=e.right)!==null&&a!==void 0&&a.length?"default":(r=e.left)!==null&&r!==void 0&&r.length?"output":(o=e.right)!==null&&o!==void 0&&o.length?"input":"default"}function pe(e,n,a){var r={};return e.forEach(function(o){r[o.id]={id:o.id,group:o.group,width:o.group?355:322,height:o.group?1100:85,data:o.data,select:o.select,right:[],left:[],zoom:a,label:o.label}}),n.forEach(function(o){var l,s,u=o.source,p=o.target;(l=r[u].right)===null||l===void 0||l.push(p),(s=r[p].left)===null||s===void 0||s.push(u)}),r}function ue(e,n){var a=new(Fn()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph({rankdir:"LR",align:"UL"}),n.forEach(function(r){return a.setEdge(r.source,r.target)}),e.forEach(function(r){return a.setNode(r.id,r)}),Fn().layout(a),{_nodes:e.map(function(r){var o=a.node(r.id),l=o.x,s=o.y;return f()(f()({},r),{},{position:{x:l*1.3,y:s*1}})}),_edges:n}}function xe(e){var n=e.filter(function(o){var l,s;return((l=o.className)===null||l===void 0?void 0:l.includes("edgeSelected"))||((s=o.className)===null||s===void 0?void 0:s.includes("edgeSubSelected"))}),a=e.filter(function(o){var l,s;return((l=o.className)===null||l===void 0?void 0:l.includes("edgeDanger"))||((s=o.className)===null||s===void 0?void 0:s.includes("edgeSubDanger"))}),r=e.filter(function(o){var l,s,u,p;return!((l=o.className)!==null&&l!==void 0&&l.includes("edgeSelected"))&&!((s=o.className)!==null&&s!==void 0&&s.includes("edgeSubSelected"))&&!((u=o.className)!==null&&u!==void 0&&u.includes("edgeDanger"))&&!((p=o.className)!==null&&p!==void 0&&p.includes("edgeSubDanger"))});return[].concat(M()(r),M()(a),M()(n))}function ge(e){switch(e){case h.SELECT:return en;case h.SUB_SELECT:return tn;case h.DANGER:return on;case h.SUB_DANGER:return rn;case h.WARNING:return an;case h.SUB_WARNING:return sn;default:return"edgeDefault"}}function me(e){return e.map(function(n){var a=n.source,r=n.target,o=n.select,l=o===void 0?h.DEFAULT:o,s=n.type;return{id:"".concat(a,"-").concat(r),source:a,target:r,type:s===le.P.default?"smoothstep":"radiusEdge",className:ge(l)}})}var ve=function(n,a){var r=[],o=me(a);Object.keys(n).forEach(function(p){var c=n[p],g=c.select,m=g===void 0?h.DEFAULT:g;r.push({sourcePosition:b.Ly.Right,targetPosition:b.Ly.Left,id:c.id,position:{x:0,y:0},type:ce(c),width:c.group?355:320,height:c.group?1100:83,className:(0,D.cx)(ln),data:{label:c.group?(0,t.jsx)(se,{id:c.id,group:c.group,data:c.data,select:m,zoom:c.zoom,label:c.label}):(0,t.jsx)(oe,{title:c.data.title,description:c.data.describe,logo:c.data.logo,selectType:m,zoom:c.zoom,label:c.label,titleSlot:c.data.titleSlot})}})});var l=ue(r,o),s=l._nodes,u=l._edges;return{nodes:s,edges:xe(u)}},Ln=i(50508),In,he=(0,D.kc)(function(e){var n=e.css;return{container:n(In||(In=d()([`
    width: 100%;
    height: 100%;

    .react-flow__attribution {
      display: none;
    }

    .`,` {
      padding: 0;
      box-sizing: border-box;
      width: 320px;
      height: 83px;
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
  `])),ln,en,tn,on,rn,an,sn)}}),fe=.1,_e=(0,x.createContext)({}),k=function(){},be=function(n){var a=n.onNodeDragStart,r=a===void 0?k:a,o=n.onPaneClick,l=o===void 0?k:o,s=n.onNodeClick,u=s===void 0?k:s,p=n.nodes,c=n.edges,g=n.miniMap,m=g===void 0?!0:g,v=n.children,E=he(),N=E.styles,Z=E.cx,V=(0,b.Sj)(),B=V.zoom,S=(0,x.useMemo)(function(){return pe(p,c,B)},[p,c,B]),K=(0,x.useMemo)(function(){if(S&&c.length){var j=ve(S,c),P=j.nodes,X=j.edges;return{nodes:P,edges:X}}else return{nodes:[],edges:[]}},[S,c]),C=(0,x.useContext)(Ln.b),Y=C.miniMapPosition,je=(0,x.useCallback)(function(j,P,X){r(j,P,X)},[r]),ye=(0,x.useCallback)(function(j){l(j)},[l]),we=(0,x.useCallback)(function(j,P){u(j,P)},[u]);return(0,t.jsxs)(b.x$,{className:Z(N.container),onNodeDragStart:je,onPaneClick:ye,onNodeClick:we,nodes:K.nodes,edges:K.edges,edgeTypes:{radiusEdge:_},panOnScroll:!0,fitView:!0,minZoom:fe,children:[m&&(0,t.jsx)(Zn,{position:Y,className:"pro-flow-controller"}),(0,t.jsx)(O.A,{style:{backgroundColor:"#F7F8FA"},id:"1",gap:10,color:"#bac3d4",variant:O.T.Dots}),v]})},Un=be,Ee=i(38571),Ne=function(n){var a=(0,x.useContext)(Ln.b),r=a.isUseProvider;return r?(0,t.jsx)(Un,f()({},n)):(0,t.jsx)(Ee.G,{children:(0,t.jsx)(Un,f()({},n))})},Se=Ne},38571:function(R,y,i){i.d(y,{G:function(){return F}});var w=i(28152),f=i.n(w),x=i(50959),b=i(7896),O=i(50508),T=i(11527),W=function(_){var A=_.children,d=(0,x.useState)([0,0]),G=f()(d,2),L=G[0],I=G[1],U=(0,b._K)();return(0,T.jsx)(O.b.Provider,{value:{isUseProvider:!0,reactFlowInstance:U,miniMapPosition:L,setMiniMapPosition:I},children:A})},F=function(_){var A=_.children;return(0,T.jsx)(b.tV,{children:(0,T.jsx)(W,{children:A})})}},50508:function(R,y,i){i.d(y,{b:function(){return f}});var w=i(50959),f=(0,w.createContext)({})},15855:function(R,y,i){i.d(y,{P:function(){return f},u:function(){return w}});var w=function(x){return x.SELECT="SELECT",x.SUB_SELECT="SUB_SELECT",x.DANGER="DANGER",x.SUB_DANGER="SUB_DANGER",x.WARNING="WARNING",x.SUB_WARNING="SUB_WARNING",x.DEFAULT="DEFAULT",x}({}),f=function(x){return x.default="default",x.radius="radius",x}({})}}]);
