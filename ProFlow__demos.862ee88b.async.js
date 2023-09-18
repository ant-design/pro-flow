"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[675],{44028:function(He,X,l){l.r(X),l.d(X,{default:function(){return Ue}});var se=l(92935),d=l.n(se),m=l(33024),v=l(50959),le=l(57213),f=l.n(le),de=l(21806),ce=l(21496),pe=l(46802),ue=l(6630),y=l(28914),D=l(29584),b=l(22673),ge=l(25532),a=l(11527),C,O,G,T,xe=(0,m.kc)(function(n){var e=n.css;return{container:e(C||(C=d()([`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `]))),visible:e(O||(O=d()([`
    right: 387px;
  `]))),controlAction:e(G||(G=d()([`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))),measureMap:e(T||(T=d()([`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `])))}}),Ae=function(e){var i=e.visible,t=i===void 0?!1:i,o=(0,b._K)(),r=(0,b.Sj)(),c=r.zoom,u=xe(),s=u.styles,g=u.cx,x=function(){o.zoomIn()},A=function(){o.zoomOut()},N=function(){o.fitView()},E=function(){c===1?o.zoomTo(.5):o.zoomTo(1)};return(0,a.jsxs)("div",{className:g(s.container,t&&s.visible),children:[(0,a.jsx)("div",{className:s.controlAction,children:(0,a.jsxs)(ue.Z,{children:[(0,a.jsx)(y.ZP,{icon:(0,a.jsx)(de.Z,{}),onClick:A}),(0,a.jsx)(D.Z,{title:c===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,a.jsxs)(y.ZP,{onClick:E,children:[Math.round(c*100),"%"]})}),(0,a.jsx)(y.ZP,{icon:(0,a.jsx)(ce.Z,{}),onClick:x}),(0,a.jsx)(D.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,a.jsx)(y.ZP,{icon:(0,a.jsx)(pe.Z,{}),onClick:N})})]})}),(0,a.jsx)(ge.a,{className:s.measureMap,pannable:!0,onNodeClick:function(re,j){var Ke=f()(f()({},j.position),{},{height:j.height,width:j.width});o.fitBounds(Ke,{padding:.5})}})]})},me=Ae,P=l(56163),he=l(93525),w=l.n(he),ve=l(65854),fe=l.n(ve),p=function(n){return n.SELECT="SELECT",n.DANGER="DANGER",n.WARNING="WARNING",n.DEFAULT="DEFAULT",n}({}),be="nodeSelected",Ne="nodeDanger",je="nodeWarning",S="initialNode",Ve="nodeWrap",R="edgeSelected",I="edgeDanger",W="edgeWarning",ye=l(59680),F,z,L,k,Z,Ee=(0,m.kc)(function(n){var e=n.css,i=n.cx,t=n.prefixCls;return{nodeWrap:i("".concat(t,"-xx"),e(F||(F=d()([`
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
    `])))),nodeSelected:e(z||(z=d()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(L||(L=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:e(k||(k=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(Z||(Z=d()([""])))}});function $(n){switch(n){case p.SELECT:return be;case p.DANGER:return Ne;case p.WARNING:return je;default:return"nodeDefault"}}var B=(0,v.memo)(function(n){var e=n.title,i=n.logo,t=n.description,o=n.className,r=n.selectType,c=r===void 0?p.SELECT:r,u=Ee(),s=u.styles,g=u.cx,x=(0,v.useRef)(null);return(0,a.jsx)(ye.ZP,{getPopupContainer:function(){return x.current||document.body},children:(0,a.jsxs)("div",{className:g(s.nodeWrap,s[$(c)],o),children:[(0,a.jsx)("img",{className:"img",src:i,alt:""}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("span",{children:e})}),(0,a.jsx)("div",{className:"des",children:t})]})]})})}),we=(0,v.memo)(function(n){var e=Object.assign({},(fe()(n),n));return(0,a.jsx)(B,f()({},e))}),M=we;M.Preview=B;var Xe=M,Q,Y,U,K,H,V,J,q,_,ee,ne,te=(0,m.kc)(function(n){var e=n.css;return{groupWrap:e(Q||(Q=d()([`
    width: 355px;
    height: 614px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    overflow: hidden;
    border: none;
    box-shadow: none;
    background-color: #fafafa;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 8%);
    position: absolute;
    z-index: 10;
    border-radius: 12px;
  `]))),btnWrap:e(Y||(Y=d()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:e(U||(U=d()([`
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
  `]))),groupItemWrap:e(K||(K=d()([`
    width: 320px;
    height: 83px;
    display: flex;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 16px 12px;
    background-color: white;
    background: #fff;
    border: 1px solid #f4f4f4;
    border-radius: 8px;
    margin-bottom: 24px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 8%);

    &:last-child {
      opacity: 0.5;
    }

    img {
      width: 48px;
      height: 48px;
    }
  `]))),groupItemContent:e(H||(H=d()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:e(V||(V=d()([`
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
  `]))),des:e(J||(J=d()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:e(q||(q=d()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(_||(_=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:e(ee||(ee=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(ne||(ne=d()([""])))}}),De=function(e){return e.map(function(i){return i})},Ce=function(e){var i=te(),t=i.styles,o=e.id,r=e.title,c=e.des,u=e.logo;return(0,a.jsxs)("div",{className:t.groupItemWrap,children:[(0,a.jsx)("img",{src:u,alt:""}),(0,a.jsxs)("div",{className:t.groupItemContent,children:[(0,a.jsx)("div",{className:t.groupItemTitle,children:r}),(0,a.jsx)("div",{className:t.des,children:c})]})]},"".concat(o,"-").concat(r))},Oe=function(e){var i=e.group,t=e.data,o=e.select,r=o===void 0?p.SELECT:o,c=te(),u=c.styles;if(!i)return null;if(t.length<7)return(0,a.jsx)("div",{className:u.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var s=De(t);return(0,a.jsxs)("div",{className:(0,m.cx)(u.groupWrap,u[$(r)]),children:[s.map(function(g,x){var A=g.data;return g.position={x:0,y:100*x},g.title=A.title,g.logo=A.logo,g.des=A.describe,Ce(g)}),(0,a.jsx)("div",{className:u.btnWrap}),(0,a.jsxs)("div",{className:u.btn,children:["\u67E5\u770B\u66F4\u591A",(0,a.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})},Ge=Oe,Te=l(79511),oe=l.n(Te);function Pe(n){var e,i,t,o;return(e=n.left)!==null&&e!==void 0&&e.length&&(i=n.right)!==null&&i!==void 0&&i.length?"default":(t=n.left)!==null&&t!==void 0&&t.length?"output":(o=n.right)!==null&&o!==void 0&&o.length?"input":"default"}function Se(n,e){var i={};return n.forEach(function(t){i[t.id]={id:t.id,group:t.group,data:t.data,select:t.select,right:[],left:[]}}),e.forEach(function(t){var o,r,c=t.source,u=t.target;(o=i[c].right)===null||o===void 0||o.push(u),(r=i[u].left)===null||r===void 0||r.push(c)}),i}function Re(n,e){var i=new(oe()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return i.setGraph({rankdir:"LR",align:"UL"}),e.forEach(function(t){return i.setEdge(t.source,t.target)}),n.forEach(function(t){return i.setNode(t.id,t)}),oe().layout(i),{_nodes:n.map(function(t){var o=i.node(t.id),r=o.x,c=o.y;return f()(f()({},t),{},{position:{x:r*1.3,y:c*1}})}),_edges:e}}function Ie(n){var e=n.filter(function(o){var r;return(r=o.className)===null||r===void 0?void 0:r.includes("initialNode-selected")}),i=n.filter(function(o){var r;return(r=o.className)===null||r===void 0?void 0:r.includes("edgeDanger")}),t=n.filter(function(o){var r,c;return!((r=o.className)!==null&&r!==void 0&&r.includes("initialNode-selected"))&&!((c=o.className)!==null&&c!==void 0&&c.includes("edgeDanger"))});return[].concat(w()(t),w()(i),w()(e))}function We(n){switch(n){case p.SELECT:return R;case p.DANGER:return I;case p.WARNING:return W;default:return"edgeDefault"}}function Fe(n,e){var i=n.id,t=e.id,o=e.select,r=o===void 0?p.DEFAULT:o;return{id:"".concat(i,"-").concat(t),source:i,target:t,type:"smoothstep",className:We(r)}}var ze=function(e){var i=[],t=[];Object.keys(e).forEach(function(u){var s=e[u],g=s.select,x=g===void 0?p.DEFAULT:g;console.log(s),i.push({sourcePosition:b.Ly.Right,targetPosition:b.Ly.Left,id:s.id,position:{x:0,y:0},type:Pe(s),width:320,height:83,className:(0,m.cx)(S),data:{label:s.group?(0,a.jsx)(Ge,{id:s.id,group:s.group,data:s.data,select:x}):(0,a.jsx)(Xe,{title:s.data.title,description:s.data.describe,logo:s.data.logo,selectType:x})}}),s.right.length&&s.right.forEach(function(A){t.push(Fe(s,e[A]))})});var o=Re(i,t),r=o._nodes,c=o._edges;return{nodes:r,edges:Ie(c)}},ae,Le=(0,m.kc)(function(n){var e=n.css;return{container:e(ae||(ae=d()([`
    width: 100%;
    height: 100%;

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
  `])),S,R,I,W)}}),ke=.1,Ze=function(e){var i=e.onNodeDragStart,t=e.onPaneClick,o=e.onNodeClick,r=e.nodes,c=e.edges,u=e.miniMap,s=u===void 0?!0:u,g=Le(),x=g.styles,A=g.cx,N=Se(r,c),E=(0,v.useMemo)(function(){if(N){var h=ze(N),re=h.nodes,j=h.edges;return{nodes:re,edges:j}}else return{nodes:[],edges:[]}},[N]);return(0,a.jsxs)(b.x$,{className:A(x.container),onNodeDragStart:i,onPaneClick:t,onNodeClick:o,nodes:E.nodes,edges:E.edges,panOnScroll:!0,fitView:!0,minZoom:ke,children:[s&&(0,a.jsx)(me,{}),(0,a.jsx)(P.A,{id:"1",gap:10,color:"#f1f1f1",variant:P.T.Lines})]})},$e=Ze,ie,Be=(0,m.kc)(function(n){var e=n.css;return{container:e(ie||(ie=d()([`
    width: 100%;
    height: 600px;
  `])))}}),Me=[{id:"a1",select:p.SELECT,data:{title:"XXX\u6570\u636E\u6E90",describe:"cksadjfnf",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original"}},{id:"a2",select:p.DANGER,data:{title:"XXX_API",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a3",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}},{id:"a4",group:!0,select:p.WARNING,data:[{id:"a5",select:p.SELECT,data:{title:"XXX\u6570\u636E\u6E90",describe:"cksadjfnf",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original"}},{id:"a6",select:p.DANGER,data:{title:"XXX_API",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a7",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}},{id:"a8",select:p.SELECT,data:{title:"XXX\u6570\u636E\u6E90",describe:"cksadjfnf",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original"}},{id:"a9",select:p.DANGER,data:{title:"XXX_API",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a10",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}},{id:"a11",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}}]}],Qe=[{id:"a1-a2",source:"a1",target:"a2"},{id:"a2-a3",source:"a2",target:"a3"},{id:"a3-a4",source:"a3",target:"a4"}],Ye=(0,v.memo)(function(){var n=Be(),e=n.styles;return(0,a.jsx)("div",{className:e.container,children:(0,a.jsx)($e,{nodes:Me,edges:Qe})})}),Ue=Ye}}]);
