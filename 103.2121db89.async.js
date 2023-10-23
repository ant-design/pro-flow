"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[103],{26329:function(Gn,G,c){c.d(G,{Z:function(){return xe}});var O=c(77117),E=c.n(O),x=c(50959),S=c(43493),U=c(68301),fe=c(27803),On=c(18840),s=c.n(On),zn=c(18411),Bn=c(29322),Tn=c(91305),Rn=c(68229),D=c(83645),F=c(45228),w=c(67170),Ln=c(3831),t=c(11527),I,k,P,_,Wn=(0,w.kc)(function(e){var n=e.css;return{container:n(I||(I=s()([`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `]))),visible:n(k||(k=s()([`
    right: 387px;
  `]))),controlAction:n(P||(P=s()([`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))),measureMap:n(_||(_=s()([`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `])))}}),Un=function(n){var a=n.visible,o=a===void 0?!1:a,r=n.className,i=r===void 0?"":r,d=(0,S._K)(),f=(0,S.Sj)(),g=f.zoom,l=Wn(),u=l.styles,h=l.cx,m=function(){d.zoomIn()},b=function(){d.zoomOut()},v=function(){d.fitView()},R=function(){g===1?d.zoomTo(.5):d.zoomTo(1)};return(0,t.jsxs)("div",{className:h(u.container,o&&u.visible,i),children:[(0,t.jsx)("div",{className:u.controlAction,children:(0,t.jsxs)(Rn.Z,{children:[(0,t.jsx)(D.ZP,{icon:(0,t.jsx)(zn.Z,{}),onClick:b}),(0,t.jsx)(F.Z,{title:g===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,t.jsxs)(D.ZP,{onClick:R,children:[Math.round(g*100),"%"]})}),(0,t.jsx)(D.ZP,{icon:(0,t.jsx)(Bn.Z,{}),onClick:m}),(0,t.jsx)(F.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,t.jsx)(D.ZP,{icon:(0,t.jsx)(Tn.Z,{}),onClick:v})})]})}),(0,t.jsx)(Ln.a,{className:u.measureMap,pannable:!0,onNodeClick:function(C,y){var L=E()(E()({},y.position),{},{height:y.height,width:y.width});d.fitBounds(L,{padding:.5})}})]})},Fn=Un,In=c(67855),z=c.n(In),p=function(e){return e.SELECT="SELECT",e.SUB_SELECT="SUB_SELECT",e.DANGER="DANGER",e.SUB_DANGER="SUB_DANGER",e.WARNING="WARNING",e.SUB_WARNING="SUB_WARNING",e.DEFAULT="DEFAULT",e}({}),kn="nodeSelected",Pn="nodeSubSelected",_n="nodeDanger",$n="nodeSubDanger",Zn="nodeWarning",Mn="nodeSubWarning",$="edgeSelected",Z="edgeSubSelected",M="edgeDanger",V="edgeSubDanger",K="edgeWarning",Q="edgeSubWarning",Y="initialNode",me="nodeWrap",B=c(70652),H,J,X,q,nn,en,tn,on,Vn=(0,w.kc)(function(e){var n=e.css,a=e.cx,o=e.prefixCls;return{nodeWrap:a("".concat(o,"-xx"),n(H||(H=s()([`
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
    `])))),nodeSelected:n(J||(J=s()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(X||(X=s()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(q||(q=s()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(nn||(nn=s()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(en||(en=s()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(tn||(tn=s()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(on||(on=s()([""])))}}),rn,an,sn,Kn=function(n,a,o){return o&&a>1?n:n/a},ln=B.ZP.div(rn||(rn=s()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var n=e.zoom;return Kn(24,n,!0)},function(e){var n=e.zoom;return"".concat(2/n,"px ").concat(1/n,"px ").concat(2/n,"px 0")},function(e){var n=e.zoom;return"".concat(14/n,"px")}),dn=B.ZP.div(an||(an=s()([`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`]))),Qn=B.ZP.div(sn||(sn=s()([`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`])));function cn(e){switch(e){case p.SELECT:return kn;case p.SUB_SELECT:return Pn;case p.DANGER:return _n;case p.SUB_DANGER:return $n;case p.WARNING:return Zn;case p.SUB_WARNING:return Mn;default:return"nodeDefault"}}var Yn=function(n){var a=n.title,o=n.logo,r=n.description,i=n.className,d=n.selectType,f=d===void 0?p.SELECT:d,g=n.zoom,l=g===void 0?1:g,u=n.label,h=n.titleSlot,m=Vn(),b=m.styles,v=m.cx;return console.log(l),(0,t.jsxs)(t.Fragment,{children:[u&&(0,t.jsx)(ln,{zoom:l,children:l<=.1?"".concat(String(u).substring(0,3),"..."):u}),(0,t.jsxs)("div",{className:v(b.nodeWrap,b[cn(f)],i),children:[(0,t.jsx)("img",{className:"img",src:o,alt:""}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsx)("span",{children:a}),!!h&&!!h.value&&h.type==="left"&&(0,t.jsx)(dn,{children:h.value}),!!h&&!!h.value&&h.type==="right"&&(0,t.jsxs)(dn,{children:[(0,t.jsx)("div",{style:{width:"28px"}}),(0,t.jsx)(Qn,{children:h.value})]})]}),(0,t.jsx)("div",{className:"des",children:r})]})]})]})},Hn=Yn,pn,un,xn,gn,hn,fn,mn,vn,bn,Nn,En,Sn,jn,wn,yn=(0,w.kc)(function(e){var n=e.css;return{groupWrap:n(pn||(pn=s()([`
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
  `]))),btnWrap:n(un||(un=s()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:n(xn||(xn=s()([`
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
  `]))),groupItemWrap:n(gn||(gn=s()([`
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
  `]))),groupItemContent:n(hn||(hn=s()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:n(fn||(fn=s()([`
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
  `]))),des:n(mn||(mn=s()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:n(vn||(vn=s()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:n(bn||(bn=s()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(Nn||(Nn=s()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:n(En||(En=s()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:n(Sn||(Sn=s()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:n(jn||(jn=s()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(wn||(wn=s()([""])))}}),Jn=function(n){return n.map(function(a){return a})},Xn=function(n){var a=yn(),o=a.styles,r=n.id,i=n.title,d=n.des,f=n.logo;return(0,t.jsxs)("div",{className:o.groupItemWrap,children:[(0,t.jsx)("img",{src:f,alt:""}),(0,t.jsxs)("div",{className:o.groupItemContent,children:[(0,t.jsx)("div",{className:o.groupItemTitle,children:i}),(0,t.jsx)("div",{className:o.des,children:d})]})]},"".concat(r,"-").concat(i))},qn=function(n){var a=n.group,o=n.data,r=n.select,i=r===void 0?p.SELECT:r,d=n.zoom,f=d===void 0?1:d,g=n.label,l=yn(),u=l.styles;if(!a)return null;if(o.length<7)return(0,t.jsx)("div",{className:u.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var h=Jn(o);return(0,t.jsxs)(t.Fragment,{children:[g&&(0,t.jsx)(ln,{zoom:f,children:f<=.1?"".concat(String(g).substring(0,3),"..."):g}),(0,t.jsxs)("div",{className:(0,w.cx)(u.groupWrap,u[cn(i)]),children:[h.map(function(m,b){var v=m.data;return m.position={x:0,y:100*b},m.title=v.title,m.logo=v.logo,m.des=v.describe,Xn(m)}),(0,t.jsx)("div",{className:u.btnWrap}),(0,t.jsxs)("div",{className:u.btn,children:["\u67E5\u770B\u66F4\u591A",(0,t.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]})},ne=qn,ee=c(79511),An=c.n(ee);function te(e){var n,a,o,r;return(n=e.left)!==null&&n!==void 0&&n.length&&(a=e.right)!==null&&a!==void 0&&a.length?"default":(o=e.left)!==null&&o!==void 0&&o.length?"output":(r=e.right)!==null&&r!==void 0&&r.length?"input":"default"}function oe(e,n,a){var o={};return e.forEach(function(r){o[r.id]={id:r.id,group:r.group,data:r.data,select:r.select,right:[],left:[],zoom:a,label:r.label}}),n.forEach(function(r){var i,d,f=r.source,g=r.target;(i=o[f].right)===null||i===void 0||i.push(g),(d=o[g].left)===null||d===void 0||d.push(f)}),o}function re(e,n){var a=new(An()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph({rankdir:"LR",align:"UL"}),n.forEach(function(o){return a.setEdge(o.source,o.target)}),e.forEach(function(o){return a.setNode(o.id,o)}),An().layout(a),{_nodes:e.map(function(o){var r=a.node(o.id),i=r.x,d=r.y;return E()(E()({},o),{},{position:{x:i*1.3,y:d*1}})}),_edges:n}}function ae(e){var n=e.filter(function(r){var i;return(i=r.className)===null||i===void 0?void 0:i.includes("initialNode-selected")}),a=e.filter(function(r){var i;return(i=r.className)===null||i===void 0?void 0:i.includes("edgeDanger")}),o=e.filter(function(r){var i,d;return!((i=r.className)!==null&&i!==void 0&&i.includes("initialNode-selected"))&&!((d=r.className)!==null&&d!==void 0&&d.includes("edgeDanger"))});return[].concat(z()(o),z()(a),z()(n))}function ie(e){switch(e){case p.SELECT:return $;case p.SUB_SELECT:return Z;case p.DANGER:return M;case p.SUB_DANGER:return V;case p.WARNING:return K;case p.SUB_WARNING:return Q;default:return"edgeDefault"}}function Dn(e){switch(e){case p.SELECT:return 6;case p.SUB_SELECT:return 5;case p.DANGER:return 4;case p.SUB_DANGER:return 3;case p.WARNING:return 2;case p.SUB_WARNING:return 1;default:return 0}}function se(e){return e.sort(function(n,a){var o=n.select?Dn(n.select):0,r=a.select?Dn(a.select):0;return o-r}).map(function(n){var a=n.source,o=n.target,r=n.select,i=r===void 0?p.DEFAULT:r;return{id:"".concat(a,"-").concat(o),source:a,target:o,type:"smoothstep",className:ie(i)}})}var le=function(n,a){var o=[],r=se(a);Object.keys(n).forEach(function(g){var l=n[g],u=l.select,h=u===void 0?p.DEFAULT:u;o.push({sourcePosition:S.Ly.Right,targetPosition:S.Ly.Left,id:l.id,position:{x:0,y:0},type:te(l),width:320,height:83,className:(0,w.cx)(Y),data:{label:l.group?(0,t.jsx)(ne,{id:l.id,group:l.group,data:l.data,select:h,zoom:l.zoom,label:l.label}):(0,t.jsx)(Hn,{title:l.data.title,description:l.data.describe,logo:l.data.logo,selectType:h,zoom:l.zoom,label:l.label,titleSlot:l.data.titleSlot})}})});var i=re(o,r),d=i._nodes,f=i._edges;return{nodes:d,edges:ae(f)}},Cn,de=(0,w.kc)(function(e){var n=e.css;return{container:n(Cn||(Cn=s()([`
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
  `])),Y,$,Z,M,V,K,Q)}}),ce=.1,T=function(){},pe=function(n){var a=n.onNodeDragStart,o=a===void 0?T:a,r=n.onPaneClick,i=r===void 0?T:r,d=n.onNodeClick,f=d===void 0?T:d,g=n.nodes,l=n.edges,u=n.miniMap,h=u===void 0?!0:u,m=de(),b=m.styles,v=m.cx,R=(0,S.Sj)(),j=R.zoom,C=(0,x.useMemo)(function(){return oe(g,l,j)},[g,l,j]),y=(0,x.useMemo)(function(){if(C&&l.length){var N=le(C,l),A=N.nodes,W=N.edges;return{nodes:A,edges:W}}else return{nodes:[],edges:[]}},[C,l]),L=(0,x.useCallback)(function(N,A,W){o(N,A,W)},[o]),ge=(0,x.useCallback)(function(N){i(N)},[i]),he=(0,x.useCallback)(function(N,A){f(N,A)},[f]);return(0,t.jsxs)(S.x$,{className:v(b.container),onNodeDragStart:L,onPaneClick:ge,onNodeClick:he,nodes:y.nodes,edges:y.edges,panOnScroll:!0,fitView:!0,minZoom:ce,children:[h&&(0,t.jsx)(Fn,{className:"pro-flow-controller"}),(0,t.jsx)(U.A,{id:"1",gap:10,color:"#f1f1f1",variant:U.T.Lines})]})},ue=function(n){return(0,t.jsx)(S.tV,{children:(0,t.jsx)(pe,E()({},n))})},xe=ue},15855:function(Gn,G,c){c.d(G,{P:function(){return E},u:function(){return O}});var O=function(x){return x.SELECT="SELECT",x.SUB_SELECT="SUB_SELECT",x.DANGER="DANGER",x.SUB_DANGER="SUB_DANGER",x.WARNING="WARNING",x.SUB_WARNING="SUB_WARNING",x.DEFAULT="DEFAULT",x}({}),E=function(x){return x.default="default",x.radius="radius",x}({})}}]);
