"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[516],{4516:function(ee,un,d){d.d(un,{Z:function(){return Jn}});var gn=d(77117),E=d.n(gn),w=d(50959),f=d(16965),P=d(12538),te=d(99478),xn=d(28152),mn=d.n(xn),r=d(11527);function hn(e){var n=e.sourceX,a=e.sourceY,o=e.targetX,t=e.targetY,i=e.sourcePosition,l=e.targetPosition,u=e.style,p=u===void 0?{}:u,s=e.markerEnd,g=(0,f.OW)({sourceX:n,sourceY:a,sourcePosition:i,targetX:o,targetY:t,targetPosition:l,borderRadius:50}),m=mn()(g,1),x=m[0];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.u5,{path:x,markerEnd:s,style:p})})}var vn=d(18840),c=d.n(vn),fn=d(18411),bn=d(29322),Nn=d(91305),yn=d(80191),C=d(97745),T=d(47175),y=d(67514),jn=d(30656),F,G,$,k,En=(0,y.kc)(function(e){var n=e.css;return{container:n(F||(F=c()([`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `]))),visible:n(G||(G=c()([`
    right: 387px;
  `]))),controlAction:n($||($=c()([`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))),measureMap:n(k||(k=c()([`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `])))}}),wn=function(n){var a=n.visible,o=a===void 0?!1:a,t=(0,f._K)(),i=(0,f.Sj)(),l=i.zoom,u=En(),p=u.styles,s=u.cx,g=function(){t.zoomIn()},m=function(){t.zoomOut()},x=function(){t.fitView()},N=function(){l===1?t.zoomTo(.5):t.zoomTo(1)};return(0,r.jsxs)("div",{className:s(p.container,o&&p.visible),children:[(0,r.jsx)("div",{className:p.controlAction,children:(0,r.jsxs)(yn.Z,{children:[(0,r.jsx)(C.ZP,{icon:(0,r.jsx)(fn.Z,{}),onClick:m}),(0,r.jsx)(T.Z,{title:l===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,r.jsxs)(C.ZP,{onClick:N,children:[Math.round(l*100),"%"]})}),(0,r.jsx)(C.ZP,{icon:(0,r.jsx)(bn.Z,{}),onClick:g}),(0,r.jsx)(T.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,r.jsx)(C.ZP,{icon:(0,r.jsx)(Nn.Z,{}),onClick:x})})]})}),(0,r.jsx)(jn.a,{className:p.measureMap,pannable:!0,onNodeClick:function(cn,j){var z=E()(E()({},j.position),{},{height:j.height,width:j.width});t.fitBounds(z,{padding:.5})}})]})},zn=wn,An=d(67855),O=d.n(An),h=function(e){return e.SELECT="SELECT",e.DANGER="DANGER",e.WARNING="WARNING",e.DEFAULT="DEFAULT",e}({}),Cn="nodeSelected",On="nodeDanger",Dn="nodeWarning",L="initialNode",oe="nodeWrap",W="edgeSelected",Z="edgeDanger",I="edgeWarning",Sn=d(70652),R,B,M,Y,X,Pn=(0,y.kc)(function(e){var n=e.css,a=e.cx,o=e.prefixCls;return{nodeWrap:a("".concat(o,"-xx"),n(R||(R=c()([`
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
    `])))),nodeSelected:n(B||(B=c()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(M||(M=c()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:n(Y||(Y=c()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(X||(X=c()([""])))}}),U,Tn=function(n,a,o){return o&&a>1?n:n/a},V=Sn.ZP.div(U||(U=c()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var n=e.zoom;return Tn(24,n,!0)},function(e){var n=e.zoom;return"".concat(2/n,"px ").concat(1/n,"px ").concat(2/n,"px 0")},function(e){var n=e.zoom;return"".concat(14/n,"px")});function K(e){switch(e){case h.SELECT:return Cn;case h.DANGER:return On;case h.WARNING:return Dn;default:return"nodeDefault"}}var Fn=function(n){var a=n.title,o=n.logo,t=n.description,i=n.className,l=n.selectType,u=l===void 0?h.SELECT:l,p=n.zoom,s=p===void 0?1:p,g=n.label,m=Pn(),x=m.styles,N=m.cx;return console.log(s),(0,r.jsxs)(r.Fragment,{children:[g&&(0,r.jsx)(V,{zoom:s,children:s<=.1?"".concat(String(g).substring(0,3),"..."):g}),(0,r.jsxs)("div",{className:N(x.nodeWrap,x[K(u)],i),children:[(0,r.jsx)("img",{className:"img",src:o,alt:""}),(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("span",{children:a})}),(0,r.jsx)("div",{className:"des",children:t})]})]})]})},Gn=Fn,Q,H,J,q,_,nn,en,tn,on,rn,an,sn=(0,y.kc)(function(e){var n=e.css;return{groupWrap:n(Q||(Q=c()([`
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
  `]))),btnWrap:n(H||(H=c()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:n(J||(J=c()([`
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
  `]))),groupItemWrap:n(q||(q=c()([`
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
  `]))),groupItemContent:n(_||(_=c()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:n(nn||(nn=c()([`
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
  `]))),des:n(en||(en=c()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:n(tn||(tn=c()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(on||(on=c()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:n(rn||(rn=c()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(an||(an=c()([""])))}}),$n=function(n){return n.map(function(a){return a})},kn=function(n){var a=sn(),o=a.styles,t=n.id,i=n.title,l=n.des,u=n.logo;return(0,r.jsxs)("div",{className:o.groupItemWrap,children:[(0,r.jsx)("img",{src:u,alt:""}),(0,r.jsxs)("div",{className:o.groupItemContent,children:[(0,r.jsx)("div",{className:o.groupItemTitle,children:i}),(0,r.jsx)("div",{className:o.des,children:l})]})]},"".concat(t,"-").concat(i))},Ln=function(n){var a=n.group,o=n.data,t=n.select,i=t===void 0?h.SELECT:t,l=n.zoom,u=l===void 0?1:l,p=n.label,s=sn(),g=s.styles;if(!a)return null;if(o.length<7)return(0,r.jsx)("div",{className:g.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var m=$n(o);return(0,r.jsxs)(r.Fragment,{children:[p&&(0,r.jsx)(V,{zoom:u,children:u<=.1?"".concat(String(p).substring(0,3),"..."):p}),(0,r.jsxs)("div",{className:(0,y.cx)(g.groupWrap,g[K(i)]),children:[m.map(function(x,N){var v=x.data;return x.position={x:0,y:100*N},x.title=v.title,x.logo=v.logo,x.des=v.describe,kn(x)}),(0,r.jsx)("div",{className:g.btnWrap}),(0,r.jsxs)("div",{className:g.btn,children:["\u67E5\u770B\u66F4\u591A",(0,r.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]})},Wn=Ln,Zn=d(79511),ln=d.n(Zn);function In(e){var n,a,o,t;return(n=e.left)!==null&&n!==void 0&&n.length&&(a=e.right)!==null&&a!==void 0&&a.length?"default":(o=e.left)!==null&&o!==void 0&&o.length?"output":(t=e.right)!==null&&t!==void 0&&t.length?"input":"default"}function Rn(e,n,a){var o={};return e.forEach(function(t){o[t.id]={id:t.id,group:t.group,data:t.data,select:t.select,right:[],left:[],zoom:a,label:t.label}}),n.forEach(function(t){var i,l,u=t.source,p=t.target;(i=o[u].right)===null||i===void 0||i.push(p),(l=o[p].left)===null||l===void 0||l.push(u)}),o}function Bn(e,n){var a=new(ln()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph({rankdir:"LR",align:"UL"}),n.forEach(function(o){return a.setEdge(o.source,o.target)}),e.forEach(function(o){return a.setNode(o.id,o)}),ln().layout(a),{_nodes:e.map(function(o){var t=a.node(o.id),i=t.x,l=t.y;return E()(E()({},o),{},{position:{x:i*1.3,y:l*1}})}),_edges:n}}function Mn(e){var n=e.filter(function(t){var i;return(i=t.className)===null||i===void 0?void 0:i.includes("initialNode-selected")}),a=e.filter(function(t){var i;return(i=t.className)===null||i===void 0?void 0:i.includes("edgeDanger")}),o=e.filter(function(t){var i,l;return!((i=t.className)!==null&&i!==void 0&&i.includes("initialNode-selected"))&&!((l=t.className)!==null&&l!==void 0&&l.includes("edgeDanger"))});return[].concat(O()(o),O()(a),O()(n))}function Yn(e){switch(e){case h.SELECT:return W;case h.DANGER:return Z;case h.WARNING:return I;default:return"edgeDefault"}}function Xn(e){return e.map(function(n){var a=n.source,o=n.target,t=n.select,i=t===void 0?h.DEFAULT:t;return{id:"".concat(a,"-").concat(o),source:a,target:o,type:"radiusEdge",className:Yn(i)}})}var Un=function(n,a){var o=[],t=Xn(a);Object.keys(n).forEach(function(p){var s=n[p],g=s.select,m=g===void 0?h.DEFAULT:g;console.log(s.zoom),o.push({sourcePosition:f.Ly.Right,targetPosition:f.Ly.Left,id:s.id,position:{x:0,y:0},type:In(s),width:320,height:83,className:(0,y.cx)(L),data:{label:s.group?(0,r.jsx)(Wn,{id:s.id,group:s.group,data:s.data,select:m,zoom:s.zoom,label:s.label}):(0,r.jsx)(Gn,{title:s.data.title,description:s.data.describe,logo:s.data.logo,selectType:m,zoom:s.zoom,label:s.label})}})});var i=Bn(o,t),l=i._nodes,u=i._edges;return{nodes:l,edges:Mn(u)}},dn,Vn=(0,y.kc)(function(e){var n=e.css;return{container:n(dn||(dn=c()([`
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
      stroke: #f7636e;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 2;
      z-index: 100;
    }

    .selectable:focus {
      box-shadow: none !important;
    }

    .selected {
      box-shadow: none !important;
    }
  `])),L,W,Z,I)}}),Kn=.1,D=function(){},Qn=function(n){var a=n.onNodeDragStart,o=a===void 0?D:a,t=n.onPaneClick,i=t===void 0?D:t,l=n.onNodeClick,u=l===void 0?D:l,p=n.nodes,s=n.edges,g=n.miniMap,m=g===void 0?!0:g,x=Vn(),N=x.styles,v=x.cx,cn=(0,f.Sj)(),j=cn.zoom,z=(0,w.useMemo)(function(){return Rn(p,s,j)},[p,s,j]),pn=(0,w.useMemo)(function(){if(z&&s.length){var b=Un(z,s),A=b.nodes,S=b.edges;return{nodes:A,edges:S}}else return{nodes:[],edges:[]}},[z,s]),qn=(0,w.useCallback)(function(b,A,S){o(b,A,S)},[o]),_n=(0,w.useCallback)(function(b){i(b)},[i]),ne=(0,w.useCallback)(function(b,A){u(b,A)},[u]);return(0,r.jsxs)(f.x$,{className:v(N.container),onNodeDragStart:qn,onPaneClick:_n,onNodeClick:ne,nodes:pn.nodes,edges:pn.edges,edgeTypes:{radiusEdge:hn},panOnScroll:!0,fitView:!0,minZoom:Kn,children:[m&&(0,r.jsx)(zn,{}),(0,r.jsx)(P.A,{id:"1",gap:10,color:"#f1f1f1",variant:P.T.Lines})]})},Hn=function(n){return(0,r.jsx)(f.tV,{children:(0,r.jsx)(Qn,E()({},n))})},Jn=Hn}}]);
