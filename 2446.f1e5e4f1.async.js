"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2446],{20225:function(W,_,e){var M=e(53649),s=e.n(M),m=e(46033),v=e(97459),o=e(72683),i=e(50959),l=e(81057),p=e(11527),P,h,c,O=(0,m.kc)(function(x){var E=x.css,d=x.token;return{container:E(P||(P=s()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,o.m4)(d.colorBgContainer,.5)),loader:E(h||(h=s()([`
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
  `])),d.colorText,(0,o.m4)(d.colorText,.2),(0,o.m4)(d.colorText,.2),(0,o.m4)(d.colorText,0)),tip:E(c||(c=s()([`
    color: `,`;
  `])),d.colorTextPlaceholder)}}),y=(0,i.memo)(function(x){var E=x.children,d=x.loading,t=x.tip,S=t===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":t,I=O(),A=I.styles,g=(0,p.jsxs)(l.Z,{gap:12,className:A.container,children:[(0,p.jsx)(l.Z,{width:100,height:100,children:(0,p.jsx)("div",{className:A.loader})}),!(0,v.Z)(S)&&(0,p.jsx)("div",{className:A.tip,children:S})]});return E?(0,p.jsxs)(p.Fragment,{children:[typeof d=="undefined"||d?g:null,E]}):g});_.Z=y},64361:function(W,_,e){e.d(_,{N:function(){return o}});var M=e(50959),s=e(67799),m=e(31279),v=e(11527),o=(0,M.memo)(function(i){var l=i.children,p=i.showDevtools,P=!0,h=(0,v.jsx)(v.Fragment,{children:l});try{(0,m.AC)()}catch(c){P=!1}return P?h:(0,v.jsx)(s.tV,{children:(0,v.jsx)(m.zt,{createStore:function(){return(0,m.ze)(p)},children:h})})})},32889:function(W,_,e){var M=e(50959),s=e(56794),m=e(49658),v=e(31279),o=function(l){var p=l.onFlattenNodesChange,P=l.onNodesChange,h=l.beforeNodesChange,c=l.afterNodesChange,O=l.onEdgesChange,y=l.beforeEdgesChange,x=l.afterEdgesChange,E=l.onFlattenEdgesChange,d=l.onNodesTreeChange,t=l.editorRef,S=l.useStateUpdater,I=l.flattenNodes,A=l.flattenEdges,g=(0,s.N)((0,v.AC)()),L=S!=null?S:g;L("flattenNodes",I),L("flattenEdges",A),g("onFlattenNodesChange",p),g("onFlattenEdgesChange",E),g("onNodesChange",P),g("beforeNodesChange",h),g("afterNodesChange",c),g("onEdgesChange",O),g("beforeEdgesChange",y),g("afterEdgesChange",x),g("onNodesTreeChange",d);var z=(0,m.d)();return(0,M.useImperativeHandle)(t,function(){return z}),null};_.Z=o},45367:function(W,_,e){e.d(_,{Z:function(){return Ke}});var M=e(26068),s=e.n(M),m=e(67825),v=e.n(m),o=e(50959),i=e(94299),l=e(48305),p=e.n(l),P=e(53649),h=e.n(P),c=e(46033),O=e(3341),y=e.n(O),x=e(16116),E=e(24819),d=e(67799),t=e(5794),S=e(83034),I=e(20225),A=e(93071),g=e(5377),L=e(502),z=e(42900),G=e(58206),F=e(31279),r=e(11527),k=16,U=function(){var a=(0,d._K)(),f=(0,F.oR)(function(b){return[b.selectAll]}),T=p()(f,1),j=T[0];return(0,o.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:j,icon:(0,r.jsx)(z.Z,{size:k}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,r.jsx)(G.Z,{size:k}),onClick:j,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,r.jsx)(g.Z,{}),onClick:function(){a.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,r.jsx)(L.Z,{}),onClick:function(){a.zoomOut()},key:"zoomOut"}}},[])},q=(0,o.memo)(function(){var n=U(),a=[n.paste,n.DIVIDER,n.selectAll,n.zoomIn,n.zoomOut];return(0,r.jsx)(A.Z,{items:a})}),C=q,w=e(64997),N=e(27026),ee=e(52228),Ee=e(30614),ie=e(24286),_e=e(56896),Me=e(34144),xe=e(26820),be=e(85556),ce,fe,Pe=(0,c.kc)(function(n){var a=n.css,f=n.token;return{container:a(ce||(ce=h()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),f.colorBorder),minimap:a(fe||(fe=h()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),f.colorBgContainer)}}),De=(0,o.memo)(function(n){var a=n.zoom,f=Pe(),T=f.styles,j=f.theme,b=(0,d._K)(),K=function(){b.zoomIn()},V=function(){b.zoomOut()},u=function(){b.fitView()},$=function(){a===1?b.zoomTo(.5):b.zoomTo(1)},Z=[{icon:(0,r.jsx)(w.Z,{}),title:"\u7F29\u5C0F",onClick:V},{title:a===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:$,children:Math.round(a*100)+"%",style:{width:56}},{icon:(0,r.jsx)(N.Z,{}),title:"\u653E\u5927",onClick:K},{icon:(0,r.jsx)(ee.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:u}];return(0,r.jsxs)(E.D,{gap:12,align:"center",className:T.container,children:[(0,r.jsx)(Ee.ZP,{theme:{algorithm:[j.isDarkMode?ie.Z.darkAlgorithm:ie.Z.defaultAlgorithm,ie.Z.compactAlgorithm]},children:(0,r.jsx)(E.D,{horizontal:!0,align:"center",children:(0,r.jsx)(_e.Z,{children:Z.map(function(D,R){return(0,r.jsx)(Me.Z,{arrow:!1,title:D.title,children:(0,r.jsx)(xe.ZP,{onClick:D.onClick,icon:D.icon,style:D.style,children:D.children})},R)})})})}),(0,r.jsx)(be.a,{className:T.minimap,maskColor:j.colorBgMask,nodeColor:function(R){return R.data.color?R.data.color:j.colorFill}})]})}),Oe=(0,o.memo)(function(){var n=(0,d.Sj)(),a=n.zoom;return(0,r.jsx)(De,{zoom:a})}),ye=e(49658),we=function(){var a=(0,F.oR)(function(u){return[u.selectAll,u.undo,u.redo,u.copySelection,u.paste]}),f=p()(a,5),T=f[0],j=f[1],b=f[2],K=f[3],V=f[4];(0,i.y1)("meta+a",function(u){u.preventDefault(),T()}),(0,i.y1)("meta+z",function(u){u.preventDefault(),j()}),(0,i.y1)("meta+c",function(u){u.preventDefault(),K()}),(0,i.y1)("meta+v",function(u){u.preventDefault(),V()}),(0,i.y1)("meta+shift+z",function(u){u.preventDefault(),b()}),(0,i.y1)("backspace",function(u){u.preventDefault()})},ve=e(70369),me,he,Ne=(0,c.kc)(function(n){var a=n.css,f=n.token;return{container:a(me||(me=h()([`
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
  `])),f.colorBgLayout,f.colorBorder,f.colorPrimary),minimap:a(he||(he=h()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),f.colorBgContainer)}}),je=(0,o.forwardRef)(function(n,a){var f=n.nodeTypes,T=n.contextMenuEnabled,j=T===void 0?!0:T,b=n.style,K=n.className,V=n.flowProps,u=n.defaultViewport,$=n.children,Z=n.background,D=Z===void 0?!0:Z,R=n.miniMap,ne=R===void 0?!0:R,H=n.onNodesInit,Y=n.beforeConnect,Q=Y===void 0?function(){return!0}:Y,ae=n.onConnect,oe=ae===void 0?function(){}:ae,de=n.afterConnect,J=de===void 0?function(){}:de,X=Ne(),re=X.theme,ue=X.styles,te=(0,F.oR)(ve.k.nodeList,y()),Ve=(0,F.oR)(ve.k.edgeList,y()),We=(0,ye.d)(),se=(0,d.B)(),Ze=(0,o.useMemo)(function(){return se?!0:!(te.length>0)},[te,se]),Be=(0,F.oR)(function(B){return[B.handleNodesChange,B.handleEdgesChange,B.updateEdgesOnConnection,B.onViewPortChange]}),le=p()(Be,4),ze=le[0],ke=le[1],$e=le[2],ge=le[3],Ce=(0,d._K)();we(),(0,d.CV)({onChange:ge?(0,x.Z)(ge,300):void 0}),(0,o.useEffect)(function(){u?Ce.setViewport(u):Ce.fitView(),se&&(H==null||H(We))},[se]);var He=(0,o.useCallback)(function(B){if(Q(B)){oe&&oe(B);var pe=$e(B);J&&pe&&J(pe)}},[oe,Q,J]);return(0,r.jsxs)(E.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!Ze&&(0,r.jsx)(I.Z,{}),(0,r.jsxs)(d.x$,s()(s()({nodeTypes:f,ref:a,className:(0,c.cx)(ue.container,K),defaultViewport:u,fitView:!u,fitViewOptions:{padding:3},nodes:te,edges:Ve,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:b},V),{},{selectionMode:d.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:ze,onEdgesChange:ke,onConnect:He,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[D&&(0,r.jsx)(t.A,{color:re.colorTextQuaternary,variant:t.T.Dots,size:2}),ne&&(0,r.jsx)(Oe,{}),j&&(0,r.jsx)(C,{}),$]}))]})}),Se=je,Te=e(64361),Ae=e(56794),Ie=e(32889),Fe=function(a){var f=a.flattenNodes,T=a.onFlattenNodesChange,j=a.onNodesChange,b=a.beforeNodesChange,K=a.afterNodesChange,V=a.flattenEdges,u=a.onEdgesChange,$=a.beforeEdgesChange,Z=a.afterEdgesChange,D=a.onFlattenEdgesChange,R=a.onNodesTreeChange,ne=a.onViewPortChange,H=a.editorRef,Y=(0,Ae.N)((0,F.AC)()),Q=(0,F.AC)(),ae=function(J,X){Y(J,X,[X],function(re){if(!y()(X,Q.getState()[J])){Q.setState(re);var ue=Q.getState(),te=ue.yjsDoc;te.updateHistoryData(re)}})},oe=(0,d._K)();return Y("reactflow",oe),Y("onViewPortChange",ne),(0,r.jsx)(Ie.Z,{flattenNodes:f,flattenEdges:V,editorRef:H,onEdgesChange:u,onNodesChange:j,beforeNodesChange:b,beforeEdgesChange:$,afterEdgesChange:Z,afterNodesChange:K,onNodesTreeChange:R,onFlattenEdgesChange:D,onFlattenNodesChange:T,useStateUpdater:ae})},Re=Fe,Le=["devtools","onNodesInit","beforeConnect","onConnect","afterConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],Ue=(0,o.forwardRef)(function(n,a){var f=n.devtools,T=n.onNodesInit,j=n.beforeConnect,b=n.onConnect,K=n.afterConnect,V=n.defaultViewport,u=n.contextMenuEnabled,$=n.flowProps,Z=n.nodeTypes,D=n.children,R=n.miniMap,ne=n.background,H=v()(n,Le);return(0,r.jsx)(i.NL,{initiallyActiveScopes:["flow-editor"],children:(0,r.jsxs)(Te.N,{showDevtools:f,children:[(0,r.jsx)(Se,{ref:a,nodeTypes:Z,miniMap:R,background:ne,onNodesInit:T,beforeConnect:j,onConnect:b,afterConnect:K,contextMenuEnabled:u,defaultViewport:V,flowProps:$,children:D}),(0,r.jsx)(Re,s()({},H))]})})}),Ke=Ue},70369:function(W,_,e){e.d(_,{k:function(){return v}});var M=e(26068),s=e.n(M),m=function(i){return Object.values(i.flattenNodes).map(function(l){return s()(s()({},l),{},{selected:i.selectedKeys.includes(l.id)})})},v={nodeList:m,edgeList:function(i){return Object.values(i.flattenEdges||{}).map(function(l){return s()(s()({},l),{},{selected:i.selectedKeys.includes(l.id)})})}}},11830:function(W,_,e){var M=e(67799),s=e(11527);_.Z=function(m){var v=m.position,o=v===void 0?"top-left":v,i=m.children;return(0,s.jsx)(M.s_,{position:o,children:i})}},30309:function(W,_,e){e.d(_,{R:function(){return o}});var M=e(48305),s=e.n(M),m=e(50959),v=e(67799),o=function(l){var p=(0,m.useState)(l),P=s()(p,2),h=P[0],c=P[1],O=(0,m.useCallback)(function(y){c(function(x){return(0,v.Fb)(y,x)})},[h]);return[h,c,O]}},70589:function(W,_,e){e.d(_,{Zi:function(){return P},to:function(){return p},x5:function(){return l}});var M=e(90228),s=e.n(M),m=e(87999),v=e.n(m),o=e(50959),i=e(77941),l=function(){var c=(0,o.useContext)(i.b),O=c.reactFlowInstance;return{reactFlowInstance:O}},p=function(){var c=(0,o.useContext)(i.b),O=c.setMiniMapPosition,y=function(E,d){O({x:E,y:d})};return{setMiniMapPosition:y}},P=function(){var c=(0,o.useContext)(i.b),O=c.updateSelectNode,y=c.updateSelectEdge,x=c.updateSelectEdges,E=c.updateSelectNodes,d=c.setMiniMapPosition,t=c.reactFlowInstance,S=c.flowViewRef,I=(0,o.useCallback)(function(C){if(t)return t.getNode(C)},[t]),A=(0,o.useCallback)(function(){if(t)return t.getNodes()},[t]),g=(0,o.useCallback)(function(C,w){t&&t.zoomTo(C,{duration:w})},[t]),L=(0,o.useCallback)(function(C,w){var N=I(C);N&&t&&t.fitView({nodes:[{id:C}],duration:w})},[I,t]),z=(0,o.useCallback)(function(C,w){d&&d({x:C,y:w})},[d]),G=(0,o.useCallback)(function(){if(t)return t.getViewport()},[t]),F=(0,o.useCallback)(function(C,w){if(t)return t.setViewport(C,{duration:w})},[t]),r=(0,o.useCallback)(function(C){if(t)return t.fitView({duration:C})},[t]),k=(0,o.useCallback)(v()(s()().mark(function C(){return s()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:document.exitFullScreen();case 1:case"end":return N.stop()}},C)})),[]),U=(0,o.useCallback)(function(){setTimeout(function(){r()},500)},[r]),q=(0,o.useCallback)(v()(s()().mark(function C(){return s()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:(S==null?void 0:S.current).requestFullscreen().then(function(){U()}).catch(function(ee){console.error(ee)});case 1:case"end":return N.stop()}},C)})),[U]);return(0,o.useEffect)(function(){U&&document.addEventListener("fullscreenchange",U)},[U]),{selectNode:O,selectEdge:y,selectEdges:x,selectNodes:E,getNode:I,getNodes:A,zoomTo:g,getViewport:G,setViewport:F,zoomToNode:L,fitView:r,setMiniMapPosition:z,instance:t,fullScreen:q,exitFullScreen:k}}},36872:function(W,_,e){e.d(_,{Z:function(){return E}});var M=e(26068),s=e.n(M),m=e(82092),v=e.n(m),o=e(67825),i=e.n(o),l=e(80242),p=e(50959),P=e(46033),h=(0,P.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),c=h,O=e(11527),y=["open","width","mask","style","rootStyle","className","onClose","children"],x=function(t){var S=t.open,I=t.width,A=t.mask,g=A===void 0?!1:A,L=t.style,z=L===void 0?{}:L,G=t.rootStyle,F=G===void 0?{}:G,r=t.className,k=t.onClose,U=k===void 0?function(){}:k,q=t.children,C=i()(t,y),w=c(),N=w.styles,ee=w.cx;return(0,O.jsx)(l.Z,s()(s()({open:S,onClose:U,width:I,mask:g,className:r?ee(v()(v()({},N.dataFlowDrawer,!0),"className",!0)):N.dataFlowDrawer,getContainer:!1,style:s()(s()({},z),{},{padding:"0 0"}),rootStyle:s()(s()({},F),{},{position:"absolute"})},C),{},{children:q}))},E=x}}]);
