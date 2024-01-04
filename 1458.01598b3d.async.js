"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[1458],{17007:function(B,_,e){var M=e(53649),a=e.n(M),m=e(73523),f=e(97459),t=e(17994),l=e(50959),i=e(81057),h=e(11527),x,g,u,y=(0,m.kc)(function(C){var P=C.css,v=C.token;return{container:P(x||(x=a()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,t.m4)(v.colorBgContainer,.5)),loader:P(g||(g=a()([`
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
  `])),v.colorText,(0,t.m4)(v.colorText,.2),(0,t.m4)(v.colorText,.2),(0,t.m4)(v.colorText,0)),tip:P(u||(u=a()([`
    color: `,`;
  `])),v.colorTextPlaceholder)}}),O=(0,l.memo)(function(C){var P=C.children,v=C.loading,n=C.tip,D=n===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":n,R=y(),L=R.styles,K=(0,h.jsxs)(i.Z,{gap:12,className:L.container,children:[(0,h.jsx)(i.Z,{width:100,height:100,children:(0,h.jsx)("div",{className:L.loader})}),!(0,f.Z)(D)&&(0,h.jsx)("div",{className:L.tip,children:D})]});return P?(0,h.jsxs)(h.Fragment,{children:[typeof v=="undefined"||v?K:null,P]}):K});_.Z=O},13178:function(B,_,e){e.d(_,{N:function(){return t}});var M=e(50959),a=e(6951),m=e(75656),f=e(11527),t=(0,M.memo)(function(l){var i=l.children,h=l.showDevtools,x=!0,g=(0,f.jsx)(f.Fragment,{children:i});try{(0,m.AC)()}catch(u){x=!1}return x?g:(0,f.jsx)(a.tV,{children:(0,f.jsx)(m.zt,{createStore:function(){return(0,m.ze)(h)},children:g})})})},20920:function(B,_,e){var M=e(50959),a=e(29130),m=e(75364),f=e(75656),t=function(i){var h=i.onFlattenNodesChange,x=i.onNodesChange,g=i.onEdgesChange,u=i.onFlattenEdgesChange,y=i.onNodesTreeChange,O=i.editorRef,C=i.useStateUpdater,P=i.flattenNodes,v=i.flattenEdges,n=(0,a.N)((0,f.AC)()),D=C!=null?C:n;D("flattenNodes",P),D("flattenEdges",v),n("onFlattenNodesChange",h),n("onFlattenEdgesChange",u),n("onNodesChange",x),n("onEdgesChange",g),n("onNodesTreeChange",y);var R=(0,m.d)();return(0,M.useImperativeHandle)(O,function(){return R}),null};_.Z=t},15720:function(B,_,e){e.d(_,{Z:function(){return Be}});var M=e(26068),a=e.n(M),m=e(67825),f=e.n(m),t=e(50959),l=e(95407),i=e(48305),h=e.n(i),x=e(53649),g=e.n(x),u=e(73523),y=e(3341),O=e.n(y),C=e(16116),P=e(20057),v=e(24819),n=e(6951),D=e(45931),R=e(54998),L=e(17007),K=e(2992),G=e(90048),J=e(73849),Y=e(75476),X=e(21881),S=e(75656),r=e(11527),U=16,q=function(){var s=(0,n._K)(),c=(0,S.oR)(function(b){return[b.selectAll]}),T=h()(c,1),j=T[0];return(0,t.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:j,icon:(0,r.jsx)(Y.Z,{size:U}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,r.jsx)(X.Z,{size:U}),onClick:j,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,r.jsx)(G.Z,{}),onClick:function(){s.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,r.jsx)(J.Z,{}),onClick:function(){s.zoomOut()},key:"zoomOut"}}},[])},p=(0,t.memo)(function(){var o=q(),s=[o.paste,o.DIVIDER,o.selectAll,o.zoomIn,o.zoomOut];return(0,r.jsx)(K.Z,{items:s})}),w=p,N=e(18019),ee=e(83529),be=e(54260),xe=e(59318),re=e(56997),Pe=e(69153),ye=e(88685),Oe=e(96855),De=e(53234),de,ue,we=(0,u.kc)(function(o){var s=o.css,c=o.token;return{container:s(de||(de=g()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),c.colorBorder),minimap:s(ue||(ue=g()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),c.colorBgContainer)}}),Ne=(0,t.memo)(function(o){var s=o.zoom,c=we(),T=c.styles,j=c.theme,b=(0,n._K)(),V=function(){b.zoomIn()},W=function(){b.zoomOut()},d=function(){b.fitView()},k=function(){s===1?b.zoomTo(.5):b.zoomTo(1)},z=[{icon:(0,r.jsx)(N.Z,{}),title:"\u7F29\u5C0F",onClick:W},{title:s===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:k,children:Math.round(s*100)+"%",style:{width:56}},{icon:(0,r.jsx)(ee.Z,{}),title:"\u653E\u5927",onClick:V},{icon:(0,r.jsx)(be.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:d}];return(0,r.jsxs)(v.D,{gap:12,align:"center",className:T.container,children:[(0,r.jsx)(xe.ZP,{theme:{algorithm:[j.isDarkMode?re.Z.darkAlgorithm:re.Z.defaultAlgorithm,re.Z.compactAlgorithm]},children:(0,r.jsx)(v.D,{horizontal:!0,align:"center",children:(0,r.jsx)(Pe.Z,{children:z.map(function(E,I){return(0,r.jsx)(ye.Z,{arrow:!1,title:E.title,children:(0,r.jsx)(Oe.ZP,{onClick:E.onClick,icon:E.icon,style:E.style,children:E.children})},I)})})})}),(0,r.jsx)(De.a,{className:T.minimap,maskColor:j.colorBgMask,nodeColor:function(I){return I.data.color?I.data.color:j.colorFill}})]})}),je=(0,t.memo)(function(){var o=(0,n.Sj)(),s=o.zoom;return(0,r.jsx)(Ne,{zoom:s})}),Se=e(75364),Te=function(){var s=(0,S.oR)(function(d){return[d.selectAll,d.undo,d.redo,d.copySelection,d.paste]}),c=h()(s,5),T=c[0],j=c[1],b=c[2],V=c[3],W=c[4];(0,l.y1)("meta+a",function(d){d.preventDefault(),T()}),(0,l.y1)("meta+z",function(d){d.preventDefault(),j()}),(0,l.y1)("meta+c",function(d){d.preventDefault(),V()}),(0,l.y1)("meta+v",function(d){d.preventDefault(),W()}),(0,l.y1)("meta+shift+z",function(d){d.preventDefault(),b()}),(0,l.y1)("backspace",function(d){d.preventDefault()})},ce=e(1425),fe,ve,Ie=(0,u.kc)(function(o){var s=o.css,c=o.token;return{container:s(fe||(fe=g()([`
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
  `])),c.colorBgLayout,c.colorBorder,c.colorPrimary),minimap:s(ve||(ve=g()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),c.colorBgContainer)}}),Ae=(0,t.forwardRef)(function(o,s){var c=o.nodeTypes,T=o.contextMenuEnabled,j=T===void 0?!0:T,b=o.style,V=o.className,W=o.flowProps,d=o.defaultViewport,k=o.children,z=o.background,E=z===void 0?!0:z,I=o.miniMap,ne=I===void 0?!0:I,$=o.onNodesInit,se=o.beforeNodesChange,oe=se===void 0?function(){return!0}:se,Q=o.beforeEdgesChange,te=Q===void 0?function(){return!0}:Q,ae=o.beforeConnect,le=ae===void 0?function(){return!0}:ae,me=Ie(),ze=me.theme,ke=me.styles,$e=(0,t.useState)(!1),he=h()($e,2),He=he[0],Ge=he[1],Ye=(0,S.oR)(ce.k.nodeList,O()),Qe=(0,S.oR)(ce.k.edgeList,O()),Je=(0,Se.d)(),Xe=(0,S.oR)(function(Z){return[Z.onNodesChange,Z.updateEdgesOnConnection,Z.updateEdgesOnEdgeChange,Z.onViewPortChange,Z.onElementSelectChange,Z.onEdgesChange,Z.dispatchNodes]}),H=h()(Xe,7),ge=H[0],qe=H[1],en=H[2],pe=H[3],Ce=H[4],Ee=H[5],ie=H[6],_e=(0,n._K)();Te(),(0,n.CV)({onChange:pe?(0,C.Z)(pe,300):void 0});var Me=(0,n.B)();return(0,t.useEffect)(function(){d?_e.setViewport(d):_e.fitView(),Me&&(Ge(!0),$==null||$(Je))},[Me]),(0,r.jsxs)(v.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!He&&(0,r.jsx)(L.Z,{}),(0,r.jsxs)(n.x$,a()(a()({nodeTypes:c,ref:s,className:(0,u.cx)(ke.container,V),defaultViewport:d,fitView:!d,fitViewOptions:{padding:3},nodes:Ye,edges:Qe,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:b},W),{},{selectionMode:n.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:function(F){oe(F)&&(F.forEach(function(A){switch(A.type){case"add":ie({type:"addNode",node:A.item});break;case"position":if(!A.dragging)break;ie({type:"updateNodePosition",position:A.position,id:A.id});break;case"remove":ie({type:"deleteNode",id:A.id});break;case"select":Ce(A.id,A.selected)}}),ge&&(0,P.Z)(ge,50)(F))},onEdgesChange:function(F){te(F)&&(en(F),F.forEach(function(A){switch(A.type){case"select":Ce(A.id,A.selected)}}),Ee&&Ee(F))},onConnect:function(F){le(F)&&qe(F)},disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[E&&(0,r.jsx)(D.A,{color:ze.colorTextQuaternary,variant:D.T.Dots,size:2}),ne&&(0,r.jsx)(je,{}),j&&(0,r.jsx)(w,{}),k]}))]})}),Fe=Ae,Re=e(13178),Le=e(29130),Ue=e(20920),Ze=function(s){var c=s.flattenNodes,T=s.onFlattenNodesChange,j=s.onNodesChange,b=s.flattenEdges,V=s.onEdgesChange,W=s.onFlattenEdgesChange,d=s.onNodesTreeChange,k=s.onViewPortChange,z=s.editorRef,E=(0,Le.N)((0,S.AC)()),I=(0,S.AC)(),ne=function(oe,Q){E(oe,Q,[Q],function(te){if(!O()(Q,I.getState()[oe])){I.setState(te);var ae=I.getState(),le=ae.yjsDoc;le.updateHistoryData(te)}})},$=(0,n._K)();return E("reactflow",$),E("onViewPortChange",k),(0,r.jsx)(Ue.Z,{flattenNodes:c,flattenEdges:b,editorRef:z,onEdgesChange:V,onNodesChange:j,onNodesTreeChange:d,onFlattenEdgesChange:W,onFlattenNodesChange:T,useStateUpdater:ne})},Ke=Ze,Ve=["devtools","onNodesInit","beforeNodesChange","beforeEdgesChange","beforeConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],We=(0,t.forwardRef)(function(o,s){var c=o.devtools,T=o.onNodesInit,j=o.beforeNodesChange,b=o.beforeEdgesChange,V=o.beforeConnect,W=o.defaultViewport,d=o.contextMenuEnabled,k=o.flowProps,z=o.nodeTypes,E=o.children,I=o.miniMap,ne=o.background,$=f()(o,Ve);return(0,r.jsx)(l.NL,{initiallyActiveScopes:["flow-editor"],children:(0,r.jsxs)(Re.N,{showDevtools:c,children:[(0,r.jsx)(Fe,{ref:s,nodeTypes:z,miniMap:I,background:ne,onNodesInit:T,beforeNodesChange:j,beforeEdgesChange:b,beforeConnect:V,contextMenuEnabled:d,defaultViewport:W,flowProps:k,children:E}),(0,r.jsx)(Ke,a()({},$))]})})}),Be=We},1425:function(B,_,e){e.d(_,{k:function(){return f}});var M=e(26068),a=e.n(M),m=function(l){return Object.values(l.flattenNodes).map(function(i){return a()(a()({},i),{},{selected:l.selectedKeys.includes(i.id)})})},f={nodeList:m,edgeList:function(l){return Object.values(l.flattenEdges||{}).map(function(i){return a()(a()({},i),{},{selected:l.selectedKeys.includes(i.id)})})}}},54169:function(B,_,e){var M=e(6951),a=e(11527);_.Z=function(m){var f=m.position,t=f===void 0?"top-left":f,l=m.children;return(0,a.jsx)(M.s_,{position:t,children:l})}},4711:function(B,_,e){e.d(_,{R:function(){return t}});var M=e(48305),a=e.n(M),m=e(50959),f=e(6951),t=function(i){var h=(0,m.useState)(i),x=a()(h,2),g=x[0],u=x[1],y=(0,m.useCallback)(function(O){u(function(C){return(0,f.Fb)(O,C)})},[g]);return[g,u,y]}},71353:function(B,_,e){e.d(_,{Zi:function(){return x},to:function(){return h},x5:function(){return i}});var M=e(90228),a=e.n(M),m=e(87999),f=e.n(m),t=e(50959),l=e(14981),i=function(){var u=(0,t.useContext)(l.b),y=u.reactFlowInstance;return{reactFlowInstance:y}},h=function(){var u=(0,t.useContext)(l.b),y=u.setMiniMapPosition,O=function(P,v){y({x:P,y:v})};return{setMiniMapPosition:O}},x=function(){var u=(0,t.useContext)(l.b),y=u.updateSelectNode,O=u.updateSelectEdge,C=u.updateSelectEdges,P=u.updateSelectNodes,v=u.setMiniMapPosition,n=u.reactFlowInstance,D=u.flowViewRef,R=(0,t.useCallback)(function(p){if(n)return n.getNode(p)},[]),L=(0,t.useCallback)(function(){if(n)return n.getNodes()},[n]),K=(0,t.useCallback)(function(p,w){n&&n.zoomTo(p,{duration:w})},[n]),G=(0,t.useCallback)(function(p,w){var N=R(p);N&&n&&n.fitView({nodes:[{id:p}],duration:w})},[R,n]),J=(0,t.useCallback)(function(p,w){v&&v({x:p,y:w})},[v]),Y=(0,t.useCallback)(function(){if(n)return n.getViewport()},[n]),X=(0,t.useCallback)(function(p,w){if(n)return n.setViewport(p,{duration:w})},[n]),S=(0,t.useCallback)(function(p){if(n)return n.fitView({duration:p})},[n]),r=(0,t.useCallback)(f()(a()().mark(function p(){return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:document.exitFullScreen();case 1:case"end":return N.stop()}},p)})),[]),U=(0,t.useCallback)(function(){setTimeout(function(){S()},500)},[S]),q=(0,t.useCallback)(f()(a()().mark(function p(){return a()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:(D==null?void 0:D.current).requestFullscreen().then(function(){U()}).catch(function(ee){console.error(ee)});case 1:case"end":return N.stop()}},p)})),[U]);return(0,t.useEffect)(function(){U&&document.addEventListener("fullscreenchange",U)},[U]),{selectNode:y,selectEdge:O,selectEdges:C,selectNodes:P,getNode:R,getNodes:L,zoomTo:K,getViewport:Y,setViewport:X,zoomToNode:G,fitView:S,setMiniMapPosition:J,instance:n,fullScreen:q,exitFullScreen:r}}},13143:function(B,_,e){e.d(_,{Z:function(){return P}});var M=e(26068),a=e.n(M),m=e(82092),f=e.n(m),t=e(67825),l=e.n(t),i=e(69366),h=e(50959),x=e(73523),g=(0,x.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),u=g,y=e(11527),O=["open","width","mask","style","rootStyle","className","onClose","children"],C=function(n){var D=n.open,R=n.width,L=n.mask,K=L===void 0?!1:L,G=n.style,J=G===void 0?{}:G,Y=n.rootStyle,X=Y===void 0?{}:Y,S=n.className,r=n.onClose,U=r===void 0?function(){}:r,q=n.children,p=l()(n,O),w=u(),N=w.styles,ee=w.cx;return(0,y.jsx)(i.Z,a()(a()({open:D,onClose:U,width:R,mask:K,className:S?ee(f()(f()({},N.dataFlowDrawer,!0),"className",!0)):N.dataFlowDrawer,getContainer:!1,style:a()(a()({},J),{},{padding:"0 0"}),rootStyle:a()(a()({},X),{},{position:"absolute"})},p),{},{children:q}))},P=C}}]);
