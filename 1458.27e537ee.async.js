"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[1458],{17007:function(W,M,e){var b=e(53649),a=e.n(b),h=e(95654),f=e(97459),t=e(36007),l=e(50959),d=e(81057),v=e(11527),P,m,u,O=(0,h.kc)(function(E){var y=E.css,g=E.token;return{container:y(P||(P=a()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,t.m4)(g.colorBgContainer,.5)),loader:y(m||(m=a()([`
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
  `])),g.colorText,(0,t.m4)(g.colorText,.2),(0,t.m4)(g.colorText,.2),(0,t.m4)(g.colorText,0)),tip:y(u||(u=a()([`
    color: `,`;
  `])),g.colorTextPlaceholder)}}),D=(0,l.memo)(function(E){var y=E.children,g=E.loading,o=E.tip,w=o===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":o,R=O(),L=R.styles,Z=(0,v.jsxs)(d.Z,{gap:12,className:L.container,children:[(0,v.jsx)(d.Z,{width:100,height:100,children:(0,v.jsx)("div",{className:L.loader})}),!(0,f.Z)(w)&&(0,v.jsx)("div",{className:L.tip,children:w})]});return y?(0,v.jsxs)(v.Fragment,{children:[typeof g=="undefined"||g?Z:null,y]}):Z});M.Z=D},13178:function(W,M,e){e.d(M,{N:function(){return t}});var b=e(50959),a=e(54733),h=e(75656),f=e(11527),t=(0,b.memo)(function(l){var d=l.children,v=l.showDevtools,P=!0,m=(0,f.jsx)(f.Fragment,{children:d});try{(0,h.AC)()}catch(u){P=!1}return P?m:(0,f.jsx)(a.tV,{children:(0,f.jsx)(h.zt,{createStore:function(){return(0,h.ze)(v)},children:m})})})},20920:function(W,M,e){var b=e(50959),a=e(29130),h=e(75364),f=e(75656),t=function(d){var v=d.onFlattenNodesChange,P=d.onNodesChange,m=d.onEdgesChange,u=d.onFlattenEdgesChange,O=d.onNodesTreeChange,D=d.editorRef,E=d.useStateUpdater,y=d.flattenNodes,g=d.flattenEdges,o=(0,a.N)((0,f.AC)()),w=E!=null?E:o;w("flattenNodes",y),w("flattenEdges",g),o("onFlattenNodesChange",v),o("onFlattenEdgesChange",u),o("onNodesChange",P),o("onEdgesChange",m),o("onNodesTreeChange",O);var R=(0,h.d)();return(0,b.useImperativeHandle)(D,function(){return R}),null};M.Z=t},15720:function(W,M,e){e.d(M,{Z:function(){return Qe}});var b=e(26068),a=e.n(b),h=e(67825),f=e.n(h),t=e(50959),l=e(76503),d=e(48305),v=e.n(d),P=e(53649),m=e.n(P),u=e(95654),O=e(3341),D=e.n(O),E=e(16116),y=e(20057),g=e(24819),o=e(54733),w=e(41533),R=e(10327),L=e(17007),Z=e(26428),G=e(90048),q=e(73849),Y=e(57843),ee=e(43612),I=e(75656),r=e(11527),U=16,ne=function(){var s=(0,o._K)(),c=(0,I.oR)(function(x){return[x.selectAll]}),A=v()(c,1),T=A[0];return(0,t.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:T,icon:(0,r.jsx)(Y.Z,{size:U}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,r.jsx)(ee.Z,{size:U}),onClick:T,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,r.jsx)(G.Z,{}),onClick:function(){s.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,r.jsx)(q.Z,{}),onClick:function(){s.zoomOut()},key:"zoomOut"}}},[])},C=(0,t.memo)(function(){var n=ne(),s=[n.paste,n.DIVIDER,n.selectAll,n.zoomIn,n.zoomOut];return(0,r.jsx)(Z.Z,{items:s})}),j=C,S=e(18019),oe=e(83529),we=e(54260),je=e(49084),se=e(66609),Se=e(10994),Te=e(85806),Ie=e(86865),Ae=e(84960),de,ie,Fe=(0,u.kc)(function(n){var s=n.css,c=n.token;return{container:s(de||(de=m()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),c.colorBorder),minimap:s(ie||(ie=m()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),c.colorBgContainer)}}),Re=(0,t.memo)(function(n){var s=n.zoom,c=Fe(),A=c.styles,T=c.theme,x=(0,o._K)(),K=function(){x.zoomIn()},V=function(){x.zoomOut()},i=function(){x.fitView()},k=function(){s===1?x.zoomTo(.5):x.zoomTo(1)},B=[{icon:(0,r.jsx)(S.Z,{}),title:"\u7F29\u5C0F",onClick:V},{title:s===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:k,children:Math.round(s*100)+"%",style:{width:56}},{icon:(0,r.jsx)(oe.Z,{}),title:"\u653E\u5927",onClick:K},{icon:(0,r.jsx)(we.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:i}];return(0,r.jsxs)(g.D,{gap:12,align:"center",className:A.container,children:[(0,r.jsx)(je.ZP,{theme:{algorithm:[T.isDarkMode?se.Z.darkAlgorithm:se.Z.defaultAlgorithm,se.Z.compactAlgorithm]},children:(0,r.jsx)(g.D,{horizontal:!0,align:"center",children:(0,r.jsx)(Se.Z,{children:B.map(function(_,F){return(0,r.jsx)(Te.Z,{arrow:!1,title:_.title,children:(0,r.jsx)(Ie.ZP,{onClick:_.onClick,icon:_.icon,style:_.style,children:_.children})},F)})})})}),(0,r.jsx)(Ae.a,{className:A.minimap,maskColor:T.colorBgMask,nodeColor:function(F){return F.data.color?F.data.color:T.colorFill}})]})}),Le=(0,t.memo)(function(){var n=(0,o.Sj)(),s=n.zoom;return(0,r.jsx)(Re,{zoom:s})}),Ue=e(75364),Ze=function(){var s=(0,I.oR)(function(i){return[i.selectAll,i.undo,i.redo,i.copySelection,i.paste]}),c=v()(s,5),A=c[0],T=c[1],x=c[2],K=c[3],V=c[4];(0,l.y1)("meta+a",function(i){i.preventDefault(),A()}),(0,l.y1)("meta+z",function(i){i.preventDefault(),T()}),(0,l.y1)("meta+c",function(i){i.preventDefault(),K()}),(0,l.y1)("meta+v",function(i){i.preventDefault(),V()}),(0,l.y1)("meta+shift+z",function(i){i.preventDefault(),x()}),(0,l.y1)("backspace",function(i){i.preventDefault()})},ue=e(1425),ce,fe,Ke=(0,u.kc)(function(n){var s=n.css,c=n.token;return{container:s(ce||(ce=m()([`
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
  `])),c.colorBgLayout,c.colorBorder,c.colorPrimary),minimap:s(fe||(fe=m()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),c.colorBgContainer)}}),Ve=(0,t.forwardRef)(function(n,s){var c=n.nodeTypes,A=n.contextMenuEnabled,T=A===void 0?!0:A,x=n.style,K=n.className,V=n.flowProps,i=n.defaultViewport,k=n.children,B=n.background,_=B===void 0?!0:B,F=n.miniMap,te=F===void 0?!0:F,$=n.onNodesInit,ae=n.beforeNodesChange,Q=ae===void 0?function(){return!0}:ae,z=n.onNodesChange,H=z===void 0?function(){}:z,J=n.afterNodesChange,X=J===void 0?function(){}:J,ge=n.beforeConnect,Je=ge===void 0?function(){return!0}:ge,he=n.onConnect,ve=he===void 0?function(){}:he,me=n.afterConnect,Ce=me===void 0?function(){}:me,pe=n.beforeEdgesChange,Xe=pe===void 0?function(){return!0}:pe,Ee=n.onEdgesChange,_e=n.afterEdgeChange,Me=_e===void 0?function(){}:_e,be=Ke(),qe=be.theme,en=be.styles,nn=(0,t.useState)(!1),xe=v()(nn,2),on=xe[0],tn=xe[1],an=(0,I.oR)(ue.k.nodeList,D()),rn=(0,I.oR)(ue.k.edgeList,D()),sn=(0,Ue.d)(),ln=(0,I.oR)(function(p){return[p.updateEdgesOnConnection,p.updateEdgesOnEdgeChange,p.onViewPortChange,p.onElementSelectChange,p.dispatchNodes]}),re=v()(ln,5),dn=re[0],un=re[1],Pe=re[2],ye=re[3],le=re[4],Ne=(0,o._K)();Ze(),(0,o.CV)({onChange:Pe?(0,E.Z)(Pe,300):void 0});var Oe=(0,o.B)();(0,t.useEffect)(function(){i?Ne.setViewport(i):Ne.fitView(),Oe&&(tn(!0),$==null||$(sn))},[Oe]);var cn=(0,t.useCallback)(function(p){Q(p)&&(p.forEach(function(N){switch(N.type){case"add":le({type:"addNode",node:N.item});break;case"position":if(!N.dragging)break;le({type:"updateNodePosition",position:N.position,id:N.id});break;case"remove":le({type:"deleteNode",id:N.id});break;case"select":ye(N.id,N.selected)}}),H&&(0,y.Z)(H,50)(p),X&&X(p))},[]),De=(0,t.useCallback)(function(p){Xe(p)&&(un(p),p.forEach(function(N){switch(N.type){case"select":ye(N.id,N.selected)}}),Ee&&Ee(p),Me&&Me(p))},[]),fn=(0,t.useCallback)(function(p){if(Je(p)){ve&&ve(p);var N=dn(p);Ce&&N&&(De([{item:N,type:"add"}]),Ce(N))}},[]);return(0,r.jsxs)(g.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!on&&(0,r.jsx)(L.Z,{}),(0,r.jsxs)(o.x$,a()(a()({nodeTypes:c,ref:s,className:(0,u.cx)(en.container,K),defaultViewport:i,fitView:!i,fitViewOptions:{padding:3},nodes:an,edges:rn,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:x},V),{},{selectionMode:o.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:cn,onEdgesChange:De,onConnect:fn,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[_&&(0,r.jsx)(w.A,{color:qe.colorTextQuaternary,variant:w.T.Dots,size:2}),te&&(0,r.jsx)(Le,{}),T&&(0,r.jsx)(j,{}),k]}))]})}),We=Ve,Be=e(13178),ze=e(29130),ke=e(20920),$e=function(s){var c=s.flattenNodes,A=s.onFlattenNodesChange,T=s.onNodesChange,x=s.flattenEdges,K=s.onEdgesChange,V=s.onFlattenEdgesChange,i=s.onNodesTreeChange,k=s.onViewPortChange,B=s.editorRef,_=(0,ze.N)((0,I.AC)()),F=(0,I.AC)(),te=function(Q,z){_(Q,z,[z],function(H){if(!D()(z,F.getState()[Q])){F.setState(H);var J=F.getState(),X=J.yjsDoc;X.updateHistoryData(H)}})},$=(0,o._K)();return _("reactflow",$),_("onViewPortChange",k),(0,r.jsx)(ke.Z,{flattenNodes:c,flattenEdges:x,editorRef:B,onEdgesChange:K,onNodesChange:T,onNodesTreeChange:i,onFlattenEdgesChange:V,onFlattenNodesChange:A,useStateUpdater:te})},He=$e,Ge=["devtools","onNodesInit","beforeEdgesChange","onEdgesChange","afterEdgeChange","beforeNodesChange","onNodesChange","afterNodesChange","beforeConnect","onConnect","afterConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],Ye=(0,t.forwardRef)(function(n,s){var c=n.devtools,A=n.onNodesInit,T=n.beforeEdgesChange,x=n.onEdgesChange,K=n.afterEdgeChange,V=n.beforeNodesChange,i=n.onNodesChange,k=n.afterNodesChange,B=n.beforeConnect,_=n.onConnect,F=n.afterConnect,te=n.defaultViewport,$=n.contextMenuEnabled,ae=n.flowProps,Q=n.nodeTypes,z=n.children,H=n.miniMap,J=n.background,X=f()(n,Ge);return(0,r.jsx)(l.NL,{initiallyActiveScopes:["flow-editor"],children:(0,r.jsxs)(Be.N,{showDevtools:c,children:[(0,r.jsx)(We,{ref:s,nodeTypes:Q,miniMap:H,background:J,onNodesInit:A,beforeNodesChange:V,beforeEdgesChange:T,beforeConnect:B,onEdgesChange:x,afterEdgeChange:K,onNodesChange:i,afterNodesChange:k,onConnect:_,afterConnect:F,contextMenuEnabled:$,defaultViewport:te,flowProps:ae,children:z}),(0,r.jsx)(He,a()({},X))]})})}),Qe=Ye},1425:function(W,M,e){e.d(M,{k:function(){return f}});var b=e(26068),a=e.n(b),h=function(l){return Object.values(l.flattenNodes).map(function(d){return a()(a()({},d),{},{selected:l.selectedKeys.includes(d.id)})})},f={nodeList:h,edgeList:function(l){return Object.values(l.flattenEdges||{}).map(function(d){return a()(a()({},d),{},{selected:l.selectedKeys.includes(d.id)})})}}},54169:function(W,M,e){var b=e(54733),a=e(11527);M.Z=function(h){var f=h.position,t=f===void 0?"top-left":f,l=h.children;return(0,a.jsx)(b.s_,{position:t,children:l})}},4711:function(W,M,e){e.d(M,{R:function(){return t}});var b=e(48305),a=e.n(b),h=e(50959),f=e(54733),t=function(d){var v=(0,h.useState)(d),P=a()(v,2),m=P[0],u=P[1],O=(0,h.useCallback)(function(D){u(function(E){return(0,f.Fb)(D,E)})},[m]);return[m,u,O]}},71353:function(W,M,e){e.d(M,{Zi:function(){return P},to:function(){return v},x5:function(){return d}});var b=e(90228),a=e.n(b),h=e(87999),f=e.n(h),t=e(50959),l=e(14981),d=function(){var u=(0,t.useContext)(l.b),O=u.reactFlowInstance;return{reactFlowInstance:O}},v=function(){var u=(0,t.useContext)(l.b),O=u.setMiniMapPosition,D=function(y,g){O({x:y,y:g})};return{setMiniMapPosition:D}},P=function(){var u=(0,t.useContext)(l.b),O=u.updateSelectNode,D=u.updateSelectEdge,E=u.updateSelectEdges,y=u.updateSelectNodes,g=u.setMiniMapPosition,o=u.reactFlowInstance,w=u.flowViewRef,R=(0,t.useCallback)(function(C){if(o)return o.getNode(C)},[]),L=(0,t.useCallback)(function(){if(o)return o.getNodes()},[o]),Z=(0,t.useCallback)(function(C,j){o&&o.zoomTo(C,{duration:j})},[o]),G=(0,t.useCallback)(function(C,j){var S=R(C);S&&o&&o.fitView({nodes:[{id:C}],duration:j})},[R,o]),q=(0,t.useCallback)(function(C,j){g&&g({x:C,y:j})},[g]),Y=(0,t.useCallback)(function(){if(o)return o.getViewport()},[o]),ee=(0,t.useCallback)(function(C,j){if(o)return o.setViewport(C,{duration:j})},[o]),I=(0,t.useCallback)(function(C){if(o)return o.fitView({duration:C})},[o]),r=(0,t.useCallback)(f()(a()().mark(function C(){return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:document.exitFullScreen();case 1:case"end":return S.stop()}},C)})),[]),U=(0,t.useCallback)(function(){setTimeout(function(){I()},500)},[I]),ne=(0,t.useCallback)(f()(a()().mark(function C(){return a()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:(w==null?void 0:w.current).requestFullscreen().then(function(){U()}).catch(function(oe){console.error(oe)});case 1:case"end":return S.stop()}},C)})),[U]);return(0,t.useEffect)(function(){U&&document.addEventListener("fullscreenchange",U)},[U]),{selectNode:O,selectEdge:D,selectEdges:E,selectNodes:y,getNode:R,getNodes:L,zoomTo:Z,getViewport:Y,setViewport:ee,zoomToNode:G,fitView:I,setMiniMapPosition:q,instance:o,fullScreen:ne,exitFullScreen:r}}},13143:function(W,M,e){e.d(M,{Z:function(){return y}});var b=e(26068),a=e.n(b),h=e(82092),f=e.n(h),t=e(67825),l=e.n(t),d=e(81283),v=e(50959),P=e(95654),m=(0,P.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),u=m,O=e(11527),D=["open","width","mask","style","rootStyle","className","onClose","children"],E=function(o){var w=o.open,R=o.width,L=o.mask,Z=L===void 0?!1:L,G=o.style,q=G===void 0?{}:G,Y=o.rootStyle,ee=Y===void 0?{}:Y,I=o.className,r=o.onClose,U=r===void 0?function(){}:r,ne=o.children,C=l()(o,D),j=u(),S=j.styles,oe=j.cx;return(0,O.jsx)(d.Z,a()(a()({open:w,onClose:U,width:R,mask:Z,className:I?oe(f()(f()({},S.dataFlowDrawer,!0),"className",!0)):S.dataFlowDrawer,getContainer:!1,style:a()(a()({},q),{},{padding:"0 0"}),rootStyle:a()(a()({},ee),{},{position:"absolute"})},C),{},{children:ne}))},y=E}}]);
