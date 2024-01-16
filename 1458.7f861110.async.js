"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[1458],{17007:function(W,M,e){var b=e(53649),a=e.n(b),h=e(48010),f=e(97459),t=e(36007),l=e(50959),d=e(81057),p=e(11527),y,m,u,O=(0,h.kc)(function(E){var N=E.css,g=E.token;return{container:N(y||(y=a()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,t.m4)(g.colorBgContainer,.5)),loader:N(m||(m=a()([`
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: `,`;
    box-shadow: 0 0 0 0 `,`;
    animation: l2 1.5s infinite linear;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: 0 0 0 0 `,`;
      animation: inherit;
      animation-delay: -0.5s;
    }

    &:after {
      animation-delay: -1s;
    }

    @keyframes l2 {
      100% {
        box-shadow: 0 0 0 40px `,`;
      }
    }
  `])),g.colorText,(0,t.m4)(g.colorText,.2),(0,t.m4)(g.colorText,.2),(0,t.m4)(g.colorText,0)),tip:N(u||(u=a()([`
    color: `,`;
  `])),g.colorTextPlaceholder)}}),D=(0,l.memo)(function(E){var N=E.children,g=E.loading,o=E.tip,w=o===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":o,R=O(),L=R.styles,Z=(0,p.jsxs)(d.Z,{gap:12,className:L.container,children:[(0,p.jsx)(d.Z,{width:100,height:100,children:(0,p.jsx)("div",{className:L.loader})}),!(0,f.Z)(w)&&(0,p.jsx)("div",{className:L.tip,children:w})]});return N?(0,p.jsxs)(p.Fragment,{children:[typeof g=="undefined"||g?Z:null,N]}):Z});M.Z=D},13178:function(W,M,e){e.d(M,{N:function(){return t}});var b=e(50959),a=e(40741),h=e(75656),f=e(11527),t=(0,b.memo)(function(l){var d=l.children,p=l.showDevtools,y=!0,m=(0,f.jsx)(f.Fragment,{children:d});try{(0,h.AC)()}catch(u){y=!1}return y?m:(0,f.jsx)(a.tV,{children:(0,f.jsx)(h.zt,{createStore:function(){return(0,h.ze)(p)},children:m})})})},20920:function(W,M,e){var b=e(50959),a=e(29130),h=e(75364),f=e(75656),t=function(d){var p=d.onFlattenNodesChange,y=d.onNodesChange,m=d.onEdgesChange,u=d.onFlattenEdgesChange,O=d.onNodesTreeChange,D=d.editorRef,E=d.useStateUpdater,N=d.flattenNodes,g=d.flattenEdges,o=(0,a.N)((0,f.AC)()),w=E!=null?E:o;w("flattenNodes",N),w("flattenEdges",g),o("onFlattenNodesChange",p),o("onFlattenEdgesChange",u),o("onNodesChange",y),o("onEdgesChange",m),o("onNodesTreeChange",O);var R=(0,h.d)();return(0,b.useImperativeHandle)(D,function(){return R}),null};M.Z=t},15720:function(W,M,e){e.d(M,{Z:function(){return Qe}});var b=e(26068),a=e.n(b),h=e(67825),f=e.n(h),t=e(50959),l=e(26164),d=e(48305),p=e.n(d),y=e(53649),m=e.n(y),u=e(48010),O=e(3341),D=e.n(O),E=e(16116),N=e(20057),g=e(24819),o=e(40741),w=e(11480),R=e(95417),L=e(17007),Z=e(4931),G=e(90048),ee=e(73849),Y=e(57843),ne=e(43612),A=e(75656),r=e(11527),U=16,oe=function(){var s=(0,o._K)(),c=(0,A.oR)(function(x){return[x.selectAll]}),I=p()(c,1),T=I[0];return(0,t.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:T,icon:(0,r.jsx)(Y.Z,{size:U}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,r.jsx)(ne.Z,{size:U}),onClick:T,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,r.jsx)(G.Z,{}),onClick:function(){s.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,r.jsx)(ee.Z,{}),onClick:function(){s.zoomOut()},key:"zoomOut"}}},[])},C=(0,t.memo)(function(){var n=oe(),s=[n.paste,n.DIVIDER,n.selectAll,n.zoomIn,n.zoomOut];return(0,r.jsx)(Z.Z,{items:s})}),j=C,S=e(18019),te=e(83529),we=e(54260),je=e(68664),le=e(43377),Se=e(73880),Te=e(4842),Ae=e(17219),Ie=e(22077),ue,ce,Fe=(0,u.kc)(function(n){var s=n.css,c=n.token;return{container:s(ue||(ue=m()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),c.colorBorder),minimap:s(ce||(ce=m()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),c.colorBgContainer)}}),Re=(0,t.memo)(function(n){var s=n.zoom,c=Fe(),I=c.styles,T=c.theme,x=(0,o._K)(),K=function(){x.zoomIn()},V=function(){x.zoomOut()},i=function(){x.fitView()},k=function(){s===1?x.zoomTo(.5):x.zoomTo(1)},B=[{icon:(0,r.jsx)(S.Z,{}),title:"\u7F29\u5C0F",onClick:V},{title:s===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:k,children:Math.round(s*100)+"%",style:{width:56}},{icon:(0,r.jsx)(te.Z,{}),title:"\u653E\u5927",onClick:K},{icon:(0,r.jsx)(we.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:i}];return(0,r.jsxs)(g.D,{gap:12,align:"center",className:I.container,children:[(0,r.jsx)(je.ZP,{theme:{algorithm:[T.isDarkMode?le.Z.darkAlgorithm:le.Z.defaultAlgorithm,le.Z.compactAlgorithm]},children:(0,r.jsx)(g.D,{horizontal:!0,align:"center",children:(0,r.jsx)(Se.Z,{children:B.map(function(_,F){return(0,r.jsx)(Te.Z,{arrow:!1,title:_.title,children:(0,r.jsx)(Ae.ZP,{onClick:_.onClick,icon:_.icon,style:_.style,children:_.children})},F)})})})}),(0,r.jsx)(Ie.a,{className:I.minimap,maskColor:T.colorBgMask,nodeColor:function(F){return F.data.color?F.data.color:T.colorFill}})]})}),Le=(0,t.memo)(function(){var n=(0,o.Sj)(),s=n.zoom;return(0,r.jsx)(Re,{zoom:s})}),Ue=e(75364),Ze=function(){var s=(0,A.oR)(function(i){return[i.selectAll,i.undo,i.redo,i.copySelection,i.paste]}),c=p()(s,5),I=c[0],T=c[1],x=c[2],K=c[3],V=c[4];(0,l.y1)("meta+a",function(i){i.preventDefault(),I()}),(0,l.y1)("meta+z",function(i){i.preventDefault(),T()}),(0,l.y1)("meta+c",function(i){i.preventDefault(),K()}),(0,l.y1)("meta+v",function(i){i.preventDefault(),V()}),(0,l.y1)("meta+shift+z",function(i){i.preventDefault(),x()}),(0,l.y1)("backspace",function(i){i.preventDefault()})},fe=e(1425),ge,he,Ke=(0,u.kc)(function(n){var s=n.css,c=n.token;return{container:s(ge||(ge=m()([`
    background: `,`;

    -webkit-font-smoothing: antialiased;

    .react-flow__pane {
      cursor: default;
    }
    .react-flow__edge-path,
    .react-flow__connection-path {
      stroke: `,`;
      stroke-width: 3px;
    }

    .react-flow__edge.selected .react-flow__edge-path,
    .react-flow__edge:focus .react-flow__edge-path,
    .react-flow__edge:focus-visible .react-flow__edge-path {
      stroke: `,`;
      stroke-width: 4px;
    }
  `])),c.colorBgLayout,c.colorBorder,c.colorPrimary),minimap:s(he||(he=m()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),c.colorBgContainer)}}),Ve=(0,t.forwardRef)(function(n,s){var c=n.nodeTypes,I=n.contextMenuEnabled,T=I===void 0?!0:I,x=n.style,K=n.className,V=n.flowProps,i=n.defaultViewport,k=n.children,B=n.background,_=B===void 0?!0:B,F=n.miniMap,ae=F===void 0?!0:F,$=n.onNodesInit,re=n.beforeNodesChange,Q=re===void 0?function(){return!0}:re,z=n.onNodesChange,H=z===void 0?function(){}:z,J=n.afterNodesChange,X=J===void 0?function(){}:J,ve=n.beforeConnect,Je=ve===void 0?function(){return!0}:ve,me=n.onConnect,Ce=me===void 0?function(){}:me,pe=n.afterConnect,Ee=pe===void 0?function(){}:pe,_e=n.beforeEdgesChange,Xe=_e===void 0?function(){return!0}:_e,Me=n.onEdgesChange,be=n.afterEdgeChange,xe=be===void 0?function(){}:be,Pe=Ke(),qe=Pe.theme,en=Pe.styles,de=(0,A.oR)(fe.k.nodeList,D()),nn=(0,A.oR)(fe.k.edgeList,D()),on=(0,Ue.d)(),se=(0,o.B)(),tn=(0,t.useMemo)(function(){return se?!0:!(de.length>0)},[de,se]),an=(0,A.oR)(function(v){return[v.updateEdgesOnConnection,v.updateEdgesOnEdgeChange,v.onViewPortChange,v.onElementSelectChange,v.dispatchNodes,v.deselectElement]}),q=p()(an,6),rn=q[0],sn=q[1],ye=q[2],Ne=q[3],ie=q[4],ln=q[5],Oe=(0,o._K)();Ze(),(0,o.CV)({onChange:ye?(0,E.Z)(ye,300):void 0}),(0,t.useEffect)(function(){i?Oe.setViewport(i):Oe.fitView(),se&&($==null||$(on))},[se]);var dn=(0,t.useCallback)(function(v){Q(v)&&(v.forEach(function(P){switch(P.type){case"add":ie({type:"addNode",node:P.item});break;case"position":if(!P.dragging)break;ie({type:"updateNodePosition",position:P.position,id:P.id});break;case"remove":ln(P.id),ie({type:"deleteNode",id:P.id});break;case"select":Ne(P.id,P.selected)}}),H&&(0,N.Z)(H,50)(v),X&&X(v))},[]),De=(0,t.useCallback)(function(v){Xe(v)&&(sn(v),v.forEach(function(P){switch(P.type){case"select":Ne(P.id,P.selected)}}),Me&&Me(v),xe&&xe(v))},[]),un=(0,t.useCallback)(function(v){if(Je(v)){Ce&&Ce(v);var P=rn(v);Ee&&P&&(De([{item:P,type:"add"}]),Ee(P))}},[]);return(0,r.jsxs)(g.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!tn&&(0,r.jsx)(L.Z,{}),(0,r.jsxs)(o.x$,a()(a()({nodeTypes:c,ref:s,className:(0,u.cx)(en.container,K),defaultViewport:i,fitView:!i,fitViewOptions:{padding:3},nodes:de,edges:nn,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:x},V),{},{selectionMode:o.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:dn,onEdgesChange:De,onConnect:un,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[_&&(0,r.jsx)(w.A,{color:qe.colorTextQuaternary,variant:w.T.Dots,size:2}),ae&&(0,r.jsx)(Le,{}),T&&(0,r.jsx)(j,{}),k]}))]})}),We=Ve,Be=e(13178),ze=e(29130),ke=e(20920),$e=function(s){var c=s.flattenNodes,I=s.onFlattenNodesChange,T=s.onNodesChange,x=s.flattenEdges,K=s.onEdgesChange,V=s.onFlattenEdgesChange,i=s.onNodesTreeChange,k=s.onViewPortChange,B=s.editorRef,_=(0,ze.N)((0,A.AC)()),F=(0,A.AC)(),ae=function(Q,z){_(Q,z,[z],function(H){if(!D()(z,F.getState()[Q])){F.setState(H);var J=F.getState(),X=J.yjsDoc;X.updateHistoryData(H)}})},$=(0,o._K)();return _("reactflow",$),_("onViewPortChange",k),(0,r.jsx)(ke.Z,{flattenNodes:c,flattenEdges:x,editorRef:B,onEdgesChange:K,onNodesChange:T,onNodesTreeChange:i,onFlattenEdgesChange:V,onFlattenNodesChange:I,useStateUpdater:ae})},He=$e,Ge=["devtools","onNodesInit","beforeEdgesChange","onEdgesChange","afterEdgeChange","beforeNodesChange","onNodesChange","afterNodesChange","beforeConnect","onConnect","afterConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],Ye=(0,t.forwardRef)(function(n,s){var c=n.devtools,I=n.onNodesInit,T=n.beforeEdgesChange,x=n.onEdgesChange,K=n.afterEdgeChange,V=n.beforeNodesChange,i=n.onNodesChange,k=n.afterNodesChange,B=n.beforeConnect,_=n.onConnect,F=n.afterConnect,ae=n.defaultViewport,$=n.contextMenuEnabled,re=n.flowProps,Q=n.nodeTypes,z=n.children,H=n.miniMap,J=n.background,X=f()(n,Ge);return(0,r.jsx)(l.NL,{initiallyActiveScopes:["flow-editor"],children:(0,r.jsxs)(Be.N,{showDevtools:c,children:[(0,r.jsx)(We,{ref:s,nodeTypes:Q,miniMap:H,background:J,onNodesInit:I,beforeNodesChange:V,beforeEdgesChange:T,beforeConnect:B,onEdgesChange:x,afterEdgeChange:K,onNodesChange:i,afterNodesChange:k,onConnect:_,afterConnect:F,contextMenuEnabled:$,defaultViewport:ae,flowProps:re,children:z}),(0,r.jsx)(He,a()({},X))]})})}),Qe=Ye},1425:function(W,M,e){e.d(M,{k:function(){return f}});var b=e(26068),a=e.n(b),h=function(l){return Object.values(l.flattenNodes).map(function(d){return a()(a()({},d),{},{selected:l.selectedKeys.includes(d.id)})})},f={nodeList:h,edgeList:function(l){return Object.values(l.flattenEdges||{}).map(function(d){return a()(a()({},d),{},{selected:l.selectedKeys.includes(d.id)})})}}},54169:function(W,M,e){var b=e(40741),a=e(11527);M.Z=function(h){var f=h.position,t=f===void 0?"top-left":f,l=h.children;return(0,a.jsx)(b.s_,{position:t,children:l})}},4711:function(W,M,e){e.d(M,{R:function(){return t}});var b=e(48305),a=e.n(b),h=e(50959),f=e(40741),t=function(d){var p=(0,h.useState)(d),y=a()(p,2),m=y[0],u=y[1],O=(0,h.useCallback)(function(D){u(function(E){return(0,f.Fb)(D,E)})},[m]);return[m,u,O]}},71353:function(W,M,e){e.d(M,{Zi:function(){return y},to:function(){return p},x5:function(){return d}});var b=e(90228),a=e.n(b),h=e(87999),f=e.n(h),t=e(50959),l=e(14981),d=function(){var u=(0,t.useContext)(l.b),O=u.reactFlowInstance;return{reactFlowInstance:O}},p=function(){var u=(0,t.useContext)(l.b),O=u.setMiniMapPosition,D=function(N,g){O({x:N,y:g})};return{setMiniMapPosition:D}},y=function(){var u=(0,t.useContext)(l.b),O=u.updateSelectNode,D=u.updateSelectEdge,E=u.updateSelectEdges,N=u.updateSelectNodes,g=u.setMiniMapPosition,o=u.reactFlowInstance,w=u.flowViewRef,R=(0,t.useCallback)(function(C){if(o)return o.getNode(C)},[]),L=(0,t.useCallback)(function(){if(o)return o.getNodes()},[o]),Z=(0,t.useCallback)(function(C,j){o&&o.zoomTo(C,{duration:j})},[o]),G=(0,t.useCallback)(function(C,j){var S=R(C);S&&o&&o.fitView({nodes:[{id:C}],duration:j})},[R,o]),ee=(0,t.useCallback)(function(C,j){g&&g({x:C,y:j})},[g]),Y=(0,t.useCallback)(function(){if(o)return o.getViewport()},[o]),ne=(0,t.useCallback)(function(C,j){if(o)return o.setViewport(C,{duration:j})},[o]),A=(0,t.useCallback)(function(C){if(o)return o.fitView({duration:C})},[o]),r=(0,t.useCallback)(f()(a()().mark(function C(){return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:document.exitFullScreen();case 1:case"end":return S.stop()}},C)})),[]),U=(0,t.useCallback)(function(){setTimeout(function(){A()},500)},[A]),oe=(0,t.useCallback)(f()(a()().mark(function C(){return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:(w==null?void 0:w.current).requestFullscreen().then(function(){U()}).catch(function(te){console.error(te)});case 1:case"end":return S.stop()}},C)})),[U]);return(0,t.useEffect)(function(){U&&document.addEventListener("fullscreenchange",U)},[U]),{selectNode:O,selectEdge:D,selectEdges:E,selectNodes:N,getNode:R,getNodes:L,zoomTo:Z,getViewport:Y,setViewport:ne,zoomToNode:G,fitView:A,setMiniMapPosition:ee,instance:o,fullScreen:oe,exitFullScreen:r}}},13143:function(W,M,e){e.d(M,{Z:function(){return N}});var b=e(26068),a=e.n(b),h=e(82092),f=e.n(h),t=e(67825),l=e.n(t),d=e(85383),p=e(50959),y=e(48010),m=(0,y.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),u=m,O=e(11527),D=["open","width","mask","style","rootStyle","className","onClose","children"],E=function(o){var w=o.open,R=o.width,L=o.mask,Z=L===void 0?!1:L,G=o.style,ee=G===void 0?{}:G,Y=o.rootStyle,ne=Y===void 0?{}:Y,A=o.className,r=o.onClose,U=r===void 0?function(){}:r,oe=o.children,C=l()(o,D),j=u(),S=j.styles,te=j.cx;return(0,O.jsx)(d.Z,a()(a()({open:w,onClose:U,width:R,mask:Z,className:A?te(f()(f()({},S.dataFlowDrawer,!0),"className",!0)):S.dataFlowDrawer,getContainer:!1,style:a()(a()({},ee),{},{padding:"0 0"}),rootStyle:a()(a()({},ne),{},{position:"absolute"})},C),{},{children:oe}))},N=E}}]);
