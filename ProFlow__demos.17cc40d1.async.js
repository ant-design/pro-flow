"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[675],{44028:function(Me,E,d){d.r(E),d.d(E,{default:function(){return $e}});var ie=d(92935),c=d.n(ie),h=d(33024),X=d(50959),se=d(57213),N=d.n(se),re=d(21806),le=d(21496),de=d(46802),ce=d(6630),y=d(28914),D=d(29584),f=d(22673),pe=d(25532),i=d(11527),O,C,G,T,ge=(0,h.kc)(function(n){var e=n.css;return{container:e(O||(O=c()([`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `]))),visible:e(C||(C=c()([`
    right: 387px;
  `]))),controlAction:e(G||(G=c()([`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))),measureMap:e(T||(T=c()([`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `])))}}),ue=function(e){var a=e.visible,t=a===void 0?!1:a,o=(0,f._K)(),s=(0,f.Sj)(),l=s.zoom,g=ge(),r=g.styles,u=g.cx,x=function(){o.zoomIn()},A=function(){o.zoomOut()},v=function(){o.fitView()},j=function(){l===1?o.zoomTo(.5):o.zoomTo(1)};return(0,i.jsxs)("div",{className:u(r.container,t&&r.visible),children:[(0,i.jsx)("div",{className:r.controlAction,children:(0,i.jsxs)(ce.Z,{children:[(0,i.jsx)(y.ZP,{icon:(0,i.jsx)(re.Z,{}),onClick:A}),(0,i.jsx)(D.Z,{title:l===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,i.jsxs)(y.ZP,{onClick:j,children:[Math.round(l*100),"%"]})}),(0,i.jsx)(y.ZP,{icon:(0,i.jsx)(le.Z,{}),onClick:x}),(0,i.jsx)(D.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,i.jsx)(y.ZP,{icon:(0,i.jsx)(de.Z,{}),onClick:v})})]})}),(0,i.jsx)(pe.a,{className:r.measureMap,pannable:!0,onNodeClick:function(ae,b){var Be=N()(N()({},b.position),{},{height:b.height,width:b.width});o.fitBounds(Be,{padding:.5})}})]})},xe=ue,S=d(56163),Ae=d(93525),w=d.n(Ae),p=function(n){return n.SELECT="SELECT",n.DANGER="DANGER",n.WARNING="WARNING",n.DEFAULT="DEFAULT",n}({}),he="nodeSelected",me="nodeDanger",fe="nodeWarning",I="initialNode",Qe="nodeWrap",R="edgeSelected",P="edgeDanger",W="edgeWarning",F,z,k,L,Z,ve=(0,h.kc)(function(n){var e=n.css,a=n.cx,t=n.prefixCls;return{nodeWrap:a("".concat(t,"-xx"),e(F||(F=c()([`
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
    `])))),nodeSelected:e(z||(z=c()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(k||(k=c()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:e(L||(L=c()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(Z||(Z=c()([""])))}});function $(n){switch(n){case p.SELECT:return he;case p.DANGER:return me;case p.WARNING:return fe;default:return"nodeDefault"}}var be=function(e){var a=e.title,t=e.logo,o=e.description,s=e.className,l=e.selectType,g=l===void 0?p.SELECT:l,r=ve(),u=r.styles,x=r.cx;return(0,i.jsxs)("div",{className:x(u.nodeWrap,u[$(g)],s),children:[(0,i.jsx)("img",{className:"img",src:t,alt:""}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("span",{children:a})}),(0,i.jsx)("div",{className:"des",children:o})]})]})},Ne=be,B,M,Q,Y,U,K,H,V,_,J,q,ee=(0,h.kc)(function(n){var e=n.css;return{groupWrap:e(B||(B=c()([`
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
  `]))),btnWrap:e(M||(M=c()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:e(Q||(Q=c()([`
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
  `]))),groupItemWrap:e(Y||(Y=c()([`
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
  `]))),groupItemContent:e(U||(U=c()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:e(K||(K=c()([`
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
  `]))),des:e(H||(H=c()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:e(V||(V=c()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:e(_||(_=c()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:e(J||(J=c()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:e(q||(q=c()([""])))}}),ye=function(e){return e.map(function(a){return a})},je=function(e){var a=ee(),t=a.styles,o=e.id,s=e.title,l=e.des,g=e.logo;return(0,i.jsxs)("div",{className:t.groupItemWrap,children:[(0,i.jsx)("img",{src:g,alt:""}),(0,i.jsxs)("div",{className:t.groupItemContent,children:[(0,i.jsx)("div",{className:t.groupItemTitle,children:s}),(0,i.jsx)("div",{className:t.des,children:l})]})]},"".concat(o,"-").concat(s))},we=function(e){var a=e.group,t=e.data,o=e.select,s=o===void 0?p.SELECT:o,l=ee(),g=l.styles;if(!a)return null;if(t.length<7)return(0,i.jsx)("div",{className:g.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var r=ye(t);return(0,i.jsxs)("div",{className:(0,h.cx)(g.groupWrap,g[$(s)]),children:[r.map(function(u,x){var A=u.data;return u.position={x:0,y:100*x},u.title=A.title,u.logo=A.logo,u.des=A.describe,je(u)}),(0,i.jsx)("div",{className:g.btnWrap}),(0,i.jsxs)("div",{className:g.btn,children:["\u67E5\u770B\u66F4\u591A",(0,i.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})},Ee=we,Xe=d(79511),ne=d.n(Xe);function De(n){var e,a,t,o;return(e=n.left)!==null&&e!==void 0&&e.length&&(a=n.right)!==null&&a!==void 0&&a.length?"default":(t=n.left)!==null&&t!==void 0&&t.length?"output":(o=n.right)!==null&&o!==void 0&&o.length?"input":"default"}function Oe(n,e){var a={};return n.forEach(function(t){a[t.id]={id:t.id,group:t.group,data:t.data,select:t.select,right:[],left:[]}}),e.forEach(function(t){var o,s,l=t.source,g=t.target;(o=a[l].right)===null||o===void 0||o.push(g),(s=a[g].left)===null||s===void 0||s.push(l)}),a}function Ce(n,e){var a=new(ne()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return a.setGraph({rankdir:"LR",align:"UL"}),e.forEach(function(t){return a.setEdge(t.source,t.target)}),n.forEach(function(t){return a.setNode(t.id,t)}),ne().layout(a),{_nodes:n.map(function(t){var o=a.node(t.id),s=o.x,l=o.y;return N()(N()({},t),{},{position:{x:s*1.3,y:l*1}})}),_edges:e}}function Ge(n){var e=n.filter(function(o){var s;return(s=o.className)===null||s===void 0?void 0:s.includes("initialNode-selected")}),a=n.filter(function(o){var s;return(s=o.className)===null||s===void 0?void 0:s.includes("edgeDanger")}),t=n.filter(function(o){var s,l;return!((s=o.className)!==null&&s!==void 0&&s.includes("initialNode-selected"))&&!((l=o.className)!==null&&l!==void 0&&l.includes("edgeDanger"))});return[].concat(w()(t),w()(a),w()(e))}function Te(n){switch(n){case p.SELECT:return R;case p.DANGER:return P;case p.WARNING:return W;default:return"edgeDefault"}}function Se(n,e){var a=n.id,t=e.id,o=e.select,s=o===void 0?p.DEFAULT:o;return{id:"".concat(a,"-").concat(t),source:a,target:t,type:"smoothstep",className:Te(s)}}var Ie=function(e){var a=[],t=[];Object.keys(e).forEach(function(g){var r=e[g],u=r.select,x=u===void 0?p.DEFAULT:u;console.log(r),a.push({sourcePosition:f.Ly.Right,targetPosition:f.Ly.Left,id:r.id,position:{x:0,y:0},type:De(r),width:320,height:83,className:(0,h.cx)(I),data:{label:r.group?(0,i.jsx)(Ee,{id:r.id,group:r.group,data:r.data,select:x}):(0,i.jsx)(Ne,{title:r.data.title,description:r.data.describe,logo:r.data.logo,selectType:x})}}),r.right.length&&r.right.forEach(function(A){t.push(Se(r,e[A]))})});var o=Ce(a,t),s=o._nodes,l=o._edges;return{nodes:s,edges:Ge(l)}},te,Re=(0,h.kc)(function(n){var e=n.css;return{container:e(te||(te=c()([`
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
  `])),I,R,P,W)}}),Pe=.1,We=function(e){var a=e.onNodeDragStart,t=e.onPaneClick,o=e.onNodeClick,s=e.nodes,l=e.edges,g=e.miniMap,r=g===void 0?!0:g,u=Re(),x=u.styles,A=u.cx,v=Oe(s,l),j=(0,X.useMemo)(function(){if(v){var m=Ie(v),ae=m.nodes,b=m.edges;return{nodes:ae,edges:b}}else return{nodes:[],edges:[]}},[v]);return(0,i.jsxs)(f.x$,{className:A(x.container),onNodeDragStart:a,onPaneClick:t,onNodeClick:o,nodes:j.nodes,edges:j.edges,panOnScroll:!0,fitView:!0,minZoom:Pe,children:[r&&(0,i.jsx)(xe,{}),(0,i.jsx)(S.A,{id:"1",gap:10,color:"#f1f1f1",variant:S.T.Lines})]})},Fe=We,oe,ze=(0,h.kc)(function(n){var e=n.css;return{container:e(oe||(oe=c()([`
    width: 100%;
    height: 600px;
  `])))}}),ke=[{id:"a1",select:p.SELECT,data:{title:"XXX\u6570\u636E\u6E90",describe:"cksadjfnf",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original"}},{id:"a2",select:p.DANGER,data:{title:"XXX_API",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a3",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}},{id:"a4",group:!0,select:p.WARNING,data:[{id:"a5",select:p.SELECT,data:{title:"XXX\u6570\u636E\u6E90",describe:"cksadjfnf",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original"}},{id:"a6",select:p.DANGER,data:{title:"XXX_API",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a7",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}},{id:"a8",select:p.SELECT,data:{title:"XXX\u6570\u636E\u6E90",describe:"cksadjfnf",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original"}},{id:"a9",select:p.DANGER,data:{title:"XXX_API",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a10",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}},{id:"a11",select:p.WARNING,data:{title:"XXXX\u4EA7\u54C1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original",describe:"2031030213014"}}]}],Le=[{id:"a1-a2",source:"a1",target:"a2"},{id:"a2-a3",source:"a2",target:"a3"},{id:"a3-a4",source:"a3",target:"a4"}],Ze=(0,X.memo)(function(){var n=ze(),e=n.styles;return(0,i.jsx)("div",{className:e.container,children:(0,i.jsx)(Fe,{nodes:ke,edges:Le})})}),$e=Ze}}]);
