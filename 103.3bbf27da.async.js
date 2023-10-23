"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[103],{26329:function(Cn,G,c){c.d(G,{Z:function(){return ue}});var O=c(77117),E=c.n(O),g=c(50959),S=c(43493),F=c(68301),me=c(27803),Gn=c(18840),l=c.n(Gn),On=c(18411),zn=c(29322),Bn=c(91305),Tn=c(68229),D=c(83645),U=c(45228),w=c(67170),Rn=c(3831),t=c(11527),I,$,k,P,Ln=(0,w.kc)(function(e){var n=e.css;return{container:n(I||(I=l()([`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `]))),visible:n($||($=l()([`
    right: 387px;
  `]))),controlAction:n(k||(k=l()([`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))),measureMap:n(P||(P=l()([`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `])))}}),Wn=function(n){var r=n.visible,a=r===void 0?!1:r,o=n.className,s=o===void 0?"":o,i=(0,S._K)(),u=(0,S.Sj)(),p=u.zoom,d=Ln(),x=d.styles,m=d.cx,f=function(){i.zoomIn()},b=function(){i.zoomOut()},v=function(){i.fitView()},R=function(){p===1?i.zoomTo(.5):i.zoomTo(1)};return(0,t.jsxs)("div",{className:m(x.container,a&&x.visible,s),children:[(0,t.jsx)("div",{className:x.controlAction,children:(0,t.jsxs)(Tn.Z,{children:[(0,t.jsx)(D.ZP,{icon:(0,t.jsx)(On.Z,{}),onClick:b}),(0,t.jsx)(U.Z,{title:p===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,t.jsxs)(D.ZP,{onClick:R,children:[Math.round(p*100),"%"]})}),(0,t.jsx)(D.ZP,{icon:(0,t.jsx)(zn.Z,{}),onClick:f}),(0,t.jsx)(U.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,t.jsx)(D.ZP,{icon:(0,t.jsx)(Bn.Z,{}),onClick:v})})]})}),(0,t.jsx)(Rn.a,{className:x.measureMap,pannable:!0,onNodeClick:function(C,y){var L=E()(E()({},y.position),{},{height:y.height,width:y.width});i.fitBounds(L,{padding:.5})}})]})},Fn=Wn,Un=c(67855),z=c.n(Un),h=function(e){return e.SELECT="SELECT",e.SUB_SELECT="SUB_SELECT",e.DANGER="DANGER",e.SUB_DANGER="SUB_DANGER",e.WARNING="WARNING",e.SUB_WARNING="SUB_WARNING",e.DEFAULT="DEFAULT",e}({}),In="nodeSelected",$n="nodeSubSelected",kn="nodeDanger",Pn="nodeSubDanger",_n="nodeWarning",Zn="nodeSubWarning",_="edgeSelected",Z="edgeSubSelected",M="edgeDanger",V="edgeSubDanger",K="edgeWarning",Q="edgeSubWarning",Y="initialNode",he="nodeWrap",B=c(70652),H,J,X,q,nn,en,tn,on,Mn=(0,w.kc)(function(e){var n=e.css,r=e.cx,a=e.prefixCls;return{nodeWrap:r("".concat(a,"-xx"),n(H||(H=l()([`
      width: 320px;
      height: 85px;
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 12px;
      padding: 16px 12px;
      box-sizing: border-box;
      border: 3px solid white;
      flex: 1;
      background-color: white;

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
    `])))),nodeSelected:n(J||(J=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(X||(X=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(q||(q=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(nn||(nn=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(en||(en=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(tn||(tn=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(on||(on=l()([""])))}}),an,rn,sn,Vn=function(n,r,a){return a&&r>1?n:n/r},ln=B.ZP.div(an||(an=l()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var n=e.zoom;return Vn(24,n,!0)},function(e){var n=e.zoom;return"".concat(2/n,"px ").concat(1/n,"px ").concat(2/n,"px 0")},function(e){var n=e.zoom;return"".concat(14/n,"px")}),dn=B.ZP.div(rn||(rn=l()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),Kn=B.ZP.div(sn||(sn=l()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`])));function cn(e){switch(e){case h.SELECT:return In;case h.SUB_SELECT:return $n;case h.DANGER:return kn;case h.SUB_DANGER:return Pn;case h.WARNING:return _n;case h.SUB_WARNING:return Zn;default:return"nodeDefault"}}var Qn=function(n){var r=n.title,a=n.logo,o=n.description,s=n.className,i=n.selectType,u=i===void 0?h.SELECT:i,p=n.zoom,d=p===void 0?1:p,x=n.label,m=n.titleSlot,f=Mn(),b=f.styles,v=f.cx;return console.log(d),(0,t.jsxs)(t.Fragment,{children:[x&&(0,t.jsx)(ln,{zoom:d,children:d<=.1?"".concat(String(x).substring(0,3),"..."):x}),(0,t.jsxs)("div",{className:v(b.nodeWrap,b[cn(u)],s),children:[(0,t.jsx)("img",{className:"img",src:a,alt:""}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsx)("span",{children:r}),!!m&&!!m.value&&m.type==="left"&&(0,t.jsx)(dn,{children:m.value}),!!m&&!!m.value&&m.type==="right"&&(0,t.jsxs)(dn,{children:[(0,t.jsx)("div",{style:{width:"28px"}}),(0,t.jsx)(Kn,{children:m.value})]})]}),(0,t.jsx)("div",{className:"des",children:o})]})]})]})},Yn=Qn,pn,un,xn,gn,mn,hn,fn,vn,bn,Nn,En,Sn,jn,wn,yn=(0,w.kc)(function(e){var n=e.css;return{groupWrap:n(pn||(pn=l()([`
    width: 355px;
    height: 614px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    position: absolute;
    background-color: #f9f9f9;
    z-index: 10;
  `]))),btnWrap:n(un||(un=l()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:n(xn||(xn=l()([`
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
  `]))),groupItemWrap:n(gn||(gn=l()([`
    width: 320px;
    height: 83px;
    display: flex;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 16px 12px;
    background-color: white;
    margin-bottom: 24px;
    background: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.08), 0 4px 6px -2 rgba(25, 15, 15, 0.05);

    &:last-child {
      opacity: 0.5;
    }

    img {
      width: 48px;
      height: 48px;
    }
  `]))),groupItemContent:n(mn||(mn=l()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:n(hn||(hn=l()([`
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
  `]))),des:n(fn||(fn=l()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:n(vn||(vn=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(bn||(bn=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(Nn||(Nn=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(En||(En=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(Sn||(Sn=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(jn||(jn=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(wn||(wn=l()([""])))}}),Hn=function(n){return n.map(function(r){return r})},Jn=function(n){var r=yn(),a=r.styles,o=n.id,s=n.title,i=n.des,u=n.logo;return(0,t.jsxs)("div",{className:a.groupItemWrap,children:[(0,t.jsx)("img",{src:u,alt:""}),(0,t.jsxs)("div",{className:a.groupItemContent,children:[(0,t.jsx)("div",{className:a.groupItemTitle,children:s}),(0,t.jsx)("div",{className:a.des,children:i})]})]},"".concat(o,"-").concat(s))},Xn=function(n){var r=n.group,a=n.data,o=n.select,s=o===void 0?h.SELECT:o,i=n.zoom,u=i===void 0?1:i,p=n.label,d=yn(),x=d.styles;if(!r)return null;if(a.length<7)return(0,t.jsx)("div",{className:x.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var m=Hn(a);return(0,t.jsxs)(t.Fragment,{children:[p&&(0,t.jsx)(ln,{zoom:u,children:u<=.1?"".concat(String(p).substring(0,3),"..."):p}),(0,t.jsxs)("div",{className:(0,w.cx)(x.groupWrap,x[cn(s)]),children:[m.map(function(f,b){var v=f.data;return f.position={x:0,y:100*b},f.title=v.title,f.logo=v.logo,f.des=v.describe,Jn(f)}),(0,t.jsx)("div",{className:x.btnWrap}),(0,t.jsxs)("div",{className:x.btn,children:["\u67E5\u770B\u66F4\u591A",(0,t.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]})},qn=Xn,ne=c(79511),An=c.n(ne);function ee(e){var n,r,a,o;return(n=e.left)!==null&&n!==void 0&&n.length&&(r=e.right)!==null&&r!==void 0&&r.length?"default":(a=e.left)!==null&&a!==void 0&&a.length?"output":(o=e.right)!==null&&o!==void 0&&o.length?"input":"default"}function te(e,n,r){var a={};return e.forEach(function(o){a[o.id]={id:o.id,group:o.group,data:o.data,select:o.select,right:[],left:[],zoom:r,label:o.label}}),n.forEach(function(o){var s,i,u=o.source,p=o.target;(s=a[u].right)===null||s===void 0||s.push(p),(i=a[p].left)===null||i===void 0||i.push(u)}),a}function oe(e,n){var r=new(An()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return r.setGraph({rankdir:"LR",align:"UL"}),n.forEach(function(a){return r.setEdge(a.source,a.target)}),e.forEach(function(a){return r.setNode(a.id,a)}),An().layout(r),{_nodes:e.map(function(a){var o=r.node(a.id),s=o.x,i=o.y;return E()(E()({},a),{},{position:{x:s*1.3,y:i*1}})}),_edges:n}}function ae(e){console.log(e);var n=e.filter(function(o){var s,i;return((s=o.className)===null||s===void 0?void 0:s.includes("edgeSelected"))||((i=o.className)===null||i===void 0?void 0:i.includes("edgeSubSelected"))}),r=e.filter(function(o){var s,i;return((s=o.className)===null||s===void 0?void 0:s.includes("edgeDanger"))||((i=o.className)===null||i===void 0?void 0:i.includes("edgeSubDanger"))}),a=e.filter(function(o){var s,i,u,p;return!((s=o.className)!==null&&s!==void 0&&s.includes("edgeSelected"))&&!((i=o.className)!==null&&i!==void 0&&i.includes("edgeSubSelected"))&&!((u=o.className)!==null&&u!==void 0&&u.includes("edgeDanger"))&&!((p=o.className)!==null&&p!==void 0&&p.includes("edgeSubDanger"))});return[].concat(z()(a),z()(r),z()(n))}function re(e){switch(e){case h.SELECT:return _;case h.SUB_SELECT:return Z;case h.DANGER:return M;case h.SUB_DANGER:return V;case h.WARNING:return K;case h.SUB_WARNING:return Q;default:return"edgeDefault"}}function ie(e){return e.map(function(n){var r=n.source,a=n.target,o=n.select,s=o===void 0?h.DEFAULT:o;return{id:"".concat(r,"-").concat(a),source:r,target:a,type:"smoothstep",className:re(s)}})}var se=function(n,r){var a=[],o=ie(r);Object.keys(n).forEach(function(p){var d=n[p],x=d.select,m=x===void 0?h.DEFAULT:x;a.push({sourcePosition:S.Ly.Right,targetPosition:S.Ly.Left,id:d.id,position:{x:0,y:0},type:ee(d),width:320,height:83,className:(0,w.cx)(Y),data:{label:d.group?(0,t.jsx)(qn,{id:d.id,group:d.group,data:d.data,select:m,zoom:d.zoom,label:d.label}):(0,t.jsx)(Yn,{title:d.data.title,description:d.data.describe,logo:d.data.logo,selectType:m,zoom:d.zoom,label:d.label,titleSlot:d.data.titleSlot})}})});var s=oe(a,o),i=s._nodes,u=s._edges;return{nodes:i,edges:ae(u)}},Dn,le=(0,w.kc)(function(e){var n=e.css;return{container:n(Dn||(Dn=l()([`
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
      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 8%);
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
  `])),Y,_,Z,M,V,K,Q)}}),de=.1,T=function(){},ce=function(n){var r=n.onNodeDragStart,a=r===void 0?T:r,o=n.onPaneClick,s=o===void 0?T:o,i=n.onNodeClick,u=i===void 0?T:i,p=n.nodes,d=n.edges,x=n.miniMap,m=x===void 0?!0:x,f=le(),b=f.styles,v=f.cx,R=(0,S.Sj)(),j=R.zoom,C=(0,g.useMemo)(function(){return te(p,d,j)},[p,d,j]),y=(0,g.useMemo)(function(){if(C&&d.length){var N=se(C,d),A=N.nodes,W=N.edges;return{nodes:A,edges:W}}else return{nodes:[],edges:[]}},[C,d]),L=(0,g.useCallback)(function(N,A,W){a(N,A,W)},[a]),xe=(0,g.useCallback)(function(N){s(N)},[s]),ge=(0,g.useCallback)(function(N,A){u(N,A)},[u]);return(0,t.jsxs)(S.x$,{className:v(b.container),onNodeDragStart:L,onPaneClick:xe,onNodeClick:ge,nodes:y.nodes,edges:y.edges,panOnScroll:!0,fitView:!0,minZoom:de,children:[m&&(0,t.jsx)(Fn,{className:"pro-flow-controller"}),(0,t.jsx)(F.A,{id:"1",gap:10,color:"#f1f1f1",variant:F.T.Lines})]})},pe=function(n){return(0,t.jsx)(S.tV,{children:(0,t.jsx)(ce,E()({},n))})},ue=pe},15855:function(Cn,G,c){c.d(G,{P:function(){return E},u:function(){return O}});var O=function(g){return g.SELECT="SELECT",g.SUB_SELECT="SUB_SELECT",g.DANGER="DANGER",g.SUB_DANGER="SUB_DANGER",g.WARNING="WARNING",g.SUB_WARNING="SUB_WARNING",g.DEFAULT="DEFAULT",g}({}),E=function(g){return g.default="default",g.radius="radius",g}({})}}]);
