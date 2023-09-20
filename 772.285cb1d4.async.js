"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[772],{37261:function(sn,C,l){l.d(C,{$D:function(){return A},H0:function(){return b},Ts:function(){return G},_H:function(){return P},hK:function(){return w},mc:function(){return T},r0:function(){return f},u3:function(){return S}});var S=function(v){return v.SELECT="SELECT",v.DANGER="DANGER",v.WARNING="WARNING",v.DEFAULT="DEFAULT",v}({}),w="nodeSelected",T="nodeDanger",f="nodeWarning",A="initialNode",i="nodeWrap",P="edgeSelected",G="edgeDanger",b="edgeWarning"},1772:function(sn,C,l){l.d(C,{Z:function(){return zn}});var S=l(54306),w=l.n(S),T=l(50959),f=l(68107),A=l(42421),i=l(11527);function P(t){var n=t.sourceX,r=t.sourceY,e=t.targetX,o=t.targetY,a=t.sourcePosition,d=t.targetPosition,c=t.style,s=c===void 0?{}:c,g=t.markerEnd,x=(0,f.OW)({sourceX:n,sourceY:r,sourcePosition:a,targetX:e,targetY:o,targetPosition:d,borderRadius:50}),h=w()(x,1),m=h[0];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(f.u5,{path:m,markerEnd:g,style:s})})}var G=l(57213),b=l.n(G),v=l(92935),u=l.n(v),ln=l(21806),dn=l(21496),cn=l(46802),un=l(16247),O=l(97318),$=l(62616),N=l(6981),pn=l(49794),z,L,W,Z,gn=(0,N.kc)(function(t){var n=t.css;return{container:n(z||(z=u()([`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `]))),visible:n(L||(L=u()([`
    right: 387px;
  `]))),controlAction:n(W||(W=u()([`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `]))),measureMap:n(Z||(Z=u()([`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `])))}}),xn=function(n){var r=n.visible,e=r===void 0?!1:r,o=(0,f._K)(),a=(0,f.Sj)(),d=a.zoom,c=gn(),s=c.styles,g=c.cx,x=function(){o.zoomIn()},h=function(){o.zoomOut()},m=function(){o.fitView()},y=function(){d===1?o.zoomTo(.5):o.zoomTo(1)};return(0,i.jsxs)("div",{className:g(s.container,e&&s.visible),children:[(0,i.jsx)("div",{className:s.controlAction,children:(0,i.jsxs)(un.Z,{children:[(0,i.jsx)(O.ZP,{icon:(0,i.jsx)(ln.Z,{}),onClick:h}),(0,i.jsx)($.Z,{title:d===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",children:(0,i.jsxs)(O.ZP,{onClick:y,children:[Math.round(d*100),"%"]})}),(0,i.jsx)(O.ZP,{icon:(0,i.jsx)(dn.Z,{}),onClick:x}),(0,i.jsx)($.Z,{title:"\u81EA\u9002\u5E94\u753B\u5E03",children:(0,i.jsx)(O.ZP,{icon:(0,i.jsx)(cn.Z,{}),onClick:m})})]})}),(0,i.jsx)(pn.a,{className:s.measureMap,pannable:!0,onNodeClick:function(an,j){var D=b()(b()({},j.position),{},{height:j.height,width:j.width});o.fitBounds(D,{padding:.5})}})]})},hn=xn,fn=l(93525),F=l.n(fn),p=l(37261),I,R,k,B,M,vn=(0,N.kc)(function(t){var n=t.css,r=t.cx,e=t.prefixCls;return{nodeWrap:r("".concat(e,"-xx"),n(I||(I=u()([`
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
    `])))),nodeSelected:n(R||(R=u()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(k||(k=u()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:n(B||(B=u()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(M||(M=u()([""])))}});function Y(t){switch(t){case p.u3.SELECT:return p.hK;case p.u3.DANGER:return p.mc;case p.u3.WARNING:return p.r0;default:return"nodeDefault"}}var mn=function(n){var r=n.title,e=n.logo,o=n.description,a=n.className,d=n.selectType,c=d===void 0?p.u3.SELECT:d,s=vn(),g=s.styles,x=s.cx;return(0,i.jsxs)("div",{className:x(g.nodeWrap,g[Y(c)],a),children:[(0,i.jsx)("img",{className:"img",src:e,alt:""}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("span",{children:r})}),(0,i.jsx)("div",{className:"des",children:o})]})]})},bn=mn,H,X,U,K,V,Q,J,q,_,nn,en,tn=(0,N.kc)(function(t){var n=t.css;return{groupWrap:n(H||(H=u()([`
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
  `]))),btnWrap:n(X||(X=u()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:n(U||(U=u()([`
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
  `]))),groupItemWrap:n(K||(K=u()([`
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
  `]))),groupItemContent:n(V||(V=u()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:n(Q||(Q=u()([`
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
  `]))),des:n(J||(J=u()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:n(q||(q=u()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:n(_||(_=u()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeWarning:n(nn||(nn=u()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:n(en||(en=u()([""])))}}),Nn=function(n){return n.map(function(r){return r})},yn=function(n){var r=tn(),e=r.styles,o=n.id,a=n.title,d=n.des,c=n.logo;return(0,i.jsxs)("div",{className:e.groupItemWrap,children:[(0,i.jsx)("img",{src:c,alt:""}),(0,i.jsxs)("div",{className:e.groupItemContent,children:[(0,i.jsx)("div",{className:e.groupItemTitle,children:a}),(0,i.jsx)("div",{className:e.des,children:d})]})]},"".concat(o,"-").concat(a))},En=function(n){var r=n.group,e=n.data,o=n.select,a=o===void 0?p.u3.SELECT:o,d=tn(),c=d.styles;if(!r)return null;if(e.length<7)return(0,i.jsx)("div",{className:c.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E7\uFF01"});var s=Nn(e);return(0,i.jsxs)("div",{className:(0,N.cx)(c.groupWrap,c[Y(a)]),children:[s.map(function(g,x){var h=g.data;return g.position={x:0,y:100*x},g.title=h.title,g.logo=h.logo,g.des=h.describe,yn(g)}),(0,i.jsx)("div",{className:c.btnWrap}),(0,i.jsxs)("div",{className:c.btn,children:["\u67E5\u770B\u66F4\u591A",(0,i.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})},jn=En,wn=l(79511),on=l.n(wn);function An(t){var n,r,e,o;return(n=t.left)!==null&&n!==void 0&&n.length&&(r=t.right)!==null&&r!==void 0&&r.length?"default":(e=t.left)!==null&&e!==void 0&&e.length?"output":(o=t.right)!==null&&o!==void 0&&o.length?"input":"default"}function On(t,n){var r={};return t.forEach(function(e){r[e.id]={id:e.id,group:e.group,data:e.data,select:e.select,right:[],left:[]}}),n.forEach(function(e){var o,a,d=e.source,c=e.target;(o=r[d].right)===null||o===void 0||o.push(c),(a=r[c].left)===null||a===void 0||a.push(d)}),r}function Dn(t,n){var r=new(on()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return r.setGraph({rankdir:"LR",align:"UL"}),n.forEach(function(e){return r.setEdge(e.source,e.target)}),t.forEach(function(e){return r.setNode(e.id,e)}),on().layout(r),{_nodes:t.map(function(e){var o=r.node(e.id),a=o.x,d=o.y;return b()(b()({},e),{},{position:{x:a*1.3,y:d*1}})}),_edges:n}}function Cn(t){var n=t.filter(function(o){var a;return(a=o.className)===null||a===void 0?void 0:a.includes("initialNode-selected")}),r=t.filter(function(o){var a;return(a=o.className)===null||a===void 0?void 0:a.includes("edgeDanger")}),e=t.filter(function(o){var a,d;return!((a=o.className)!==null&&a!==void 0&&a.includes("initialNode-selected"))&&!((d=o.className)!==null&&d!==void 0&&d.includes("edgeDanger"))});return[].concat(F()(e),F()(r),F()(n))}function Sn(t){switch(t){case p.u3.SELECT:return p._H;case p.u3.DANGER:return p.Ts;case p.u3.WARNING:return p.H0;default:return"edgeDefault"}}function Tn(t,n){var r=t.id,e=n.id,o=n.select,a=o===void 0?p.u3.DEFAULT:o;return{id:"".concat(r,"-").concat(e),source:r,target:e,type:"radiusEdge",className:Sn(a)}}var Pn=function(n){var r=[],e=[];Object.keys(n).forEach(function(c){var s=n[c],g=s.select,x=g===void 0?p.u3.DEFAULT:g;console.log(s),r.push({sourcePosition:f.Ly.Right,targetPosition:f.Ly.Left,id:s.id,position:{x:0,y:0},type:An(s),width:320,height:83,className:(0,N.cx)(p.$D),data:{label:s.group?(0,i.jsx)(jn,{id:s.id,group:s.group,data:s.data,select:x}):(0,i.jsx)(bn,{title:s.data.title,description:s.data.describe,logo:s.data.logo,selectType:x})}}),s.right.length&&s.right.forEach(function(h){e.push(Tn(s,n[h]))})});var o=Dn(r,e),a=o._nodes,d=o._edges;return{nodes:a,edges:Cn(d)}},rn,Gn=(0,N.kc)(function(t){var n=t.css;return{container:n(rn||(rn=u()([`
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
  `])),p.$D,p._H,p.Ts,p.H0)}}),Fn=.1,$n=function(n){var r=n.onNodeDragStart,e=n.onPaneClick,o=n.onNodeClick,a=n.nodes,d=n.edges,c=n.miniMap,s=c===void 0?!0:c,g=Gn(),x=g.styles,h=g.cx,m=On(a,d),y=(0,T.useMemo)(function(){if(m){var D=Pn(m),Ln=D.nodes,Wn=D.edges;return{nodes:Ln,edges:Wn}}else return{nodes:[],edges:[]}},[m]),E=(0,f.ll)(y.edges),an=w()(E,1),j=an[0];return console.log(y.edges),console.log(j),(0,i.jsxs)(f.x$,{className:h(x.container),onNodeDragStart:r,onPaneClick:e,onNodeClick:o,nodes:y.nodes,edges:y.edges,edgeTypes:{radiusEdge:P},panOnScroll:!0,fitView:!0,minZoom:Fn,children:[s&&(0,i.jsx)(hn,{}),(0,i.jsx)(A.A,{id:"1",gap:10,color:"#f1f1f1",variant:A.T.Lines})]})},zn=$n}}]);
