"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[4943],{2007:function(W,_,e){var M=e(53649),s=e.n(M),m=e(23856),v=e(97459),t=e(79366),i=e(50959),l=e(67269),p=e(11527),P,h,c,O=(0,m.kc)(function(x){var E=x.css,d=x.token;return{container:E(P||(P=s()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,t.m4)(d.colorBgContainer,.5)),loader:E(h||(h=s()([`
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
  `])),d.colorText,(0,t.m4)(d.colorText,.2),(0,t.m4)(d.colorText,.2),(0,t.m4)(d.colorText,0)),tip:E(c||(c=s()([`
    color: `,`;
  `])),d.colorTextPlaceholder)}}),y=(0,i.memo)(function(x){var E=x.children,d=x.loading,o=x.tip,S=o===void 0?"\u753B\u5E03\u521D\u59CB\u5316...":o,I=O(),A=I.styles,g=(0,p.jsxs)(l.Z,{gap:12,className:A.container,children:[(0,p.jsx)(l.Z,{width:100,height:100,children:(0,p.jsx)("div",{className:A.loader})}),!(0,v.Z)(S)&&(0,p.jsx)("div",{className:A.tip,children:S})]});return E?(0,p.jsxs)(p.Fragment,{children:[typeof d=="undefined"||d?g:null,E]}):g});_.Z=y},85287:function(W,_,e){e.d(_,{N:function(){return t}});var M=e(50959),s=e(73759),m=e(50973),v=e(11527),t=(0,M.memo)(function(i){var l=i.children,p=i.showDevtools,P=!0,h=(0,v.jsx)(v.Fragment,{children:l});try{(0,m.AC)()}catch(c){P=!1}return P?h:(0,v.jsx)(s.tV,{children:(0,v.jsx)(m.zt,{createStore:function(){return(0,m.ze)(p)},children:h})})})},16569:function(W,_,e){var M=e(50959),s=e(6218),m=e(75952),v=e(50973),t=function(l){var p=l.onFlattenNodesChange,P=l.onNodesChange,h=l.beforeNodesChange,c=l.afterNodesChange,O=l.onEdgesChange,y=l.beforeEdgesChange,x=l.afterEdgesChange,E=l.onFlattenEdgesChange,d=l.onNodesTreeChange,o=l.editorRef,S=l.useStateUpdater,I=l.flattenNodes,A=l.flattenEdges,g=(0,s.N)((0,v.AC)()),L=S!=null?S:g;L("flattenNodes",I),L("flattenEdges",A),g("onFlattenNodesChange",p),g("onFlattenEdgesChange",E),g("onNodesChange",P),g("beforeNodesChange",h),g("afterNodesChange",c),g("onEdgesChange",O),g("beforeEdgesChange",y),g("afterEdgesChange",x),g("onNodesTreeChange",d);var z=(0,m.d)();return(0,M.useImperativeHandle)(o,function(){return z}),null};_.Z=t},42295:function(W,_,e){e.d(_,{Z:function(){return Ve}});var M=e(26068),s=e.n(M),m=e(67825),v=e.n(m),t=e(50959),i=e(94299),l=e(48305),p=e.n(l),P=e(53649),h=e.n(P),c=e(23856),O=e(3341),y=e.n(O),x=e(16116),E=e(33743),d=e(73759),o=e(79346),S=e(86752),I=e(2007),A=e(74184),g=e(10332),L=e(55247),z=e(73093),G=e(43634),R=e(50973),r=e(11527),k=16,U=function(){var a=(0,d._K)(),f=(0,R.oR)(function(b){return[b.selectAll]}),T=p()(f,1),j=T[0];return(0,t.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:j,icon:(0,r.jsx)(z.Z,{size:k}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,r.jsx)(G.Z,{size:k}),onClick:j,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,r.jsx)(g.Z,{}),onClick:function(){a.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,r.jsx)(L.Z,{}),onClick:function(){a.zoomOut()},key:"zoomOut"}}},[])},q=(0,t.memo)(function(){var n=U(),a=[n.paste,n.DIVIDER,n.selectAll,n.zoomIn,n.zoomOut];return(0,r.jsx)(A.Z,{items:a})}),C=q,w=e(88025),N=e(57774),ee=e(60496),_e=e(60909),ie=e(84138),Me=e(62408),xe=e(28426),be=e(83110),Pe=e(54138),ce,fe,De=(0,c.kc)(function(n){var a=n.css,f=n.token;return{container:a(ce||(ce=h()([`
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
  `])),f.colorBgContainer)}}),Oe=(0,t.memo)(function(n){var a=n.zoom,f=De(),T=f.styles,j=f.theme,b=(0,d._K)(),K=function(){b.zoomIn()},V=function(){b.zoomOut()},u=function(){b.fitView()},$=function(){a===1?b.zoomTo(.5):b.zoomTo(1)},Z=[{icon:(0,r.jsx)(w.Z,{}),title:"\u7F29\u5C0F",onClick:V},{title:a===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:$,children:Math.round(a*100)+"%",style:{width:56}},{icon:(0,r.jsx)(N.Z,{}),title:"\u653E\u5927",onClick:K},{icon:(0,r.jsx)(ee.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:u}];return(0,r.jsxs)(E.D,{gap:12,align:"center",className:T.container,children:[(0,r.jsx)(_e.ZP,{theme:{algorithm:[j.isDarkMode?ie.Z.darkAlgorithm:ie.Z.defaultAlgorithm,ie.Z.compactAlgorithm]},children:(0,r.jsx)(E.D,{horizontal:!0,align:"center",children:(0,r.jsx)(Me.Z,{children:Z.map(function(D,F){return(0,r.jsx)(xe.Z,{arrow:!1,title:D.title,children:(0,r.jsx)(be.ZP,{onClick:D.onClick,icon:D.icon,style:D.style,children:D.children})},F)})})})}),(0,r.jsx)(Pe.a,{className:T.minimap,maskColor:j.colorBgMask,nodeColor:function(F){return F.data.color?F.data.color:j.colorFill}})]})}),ye=(0,t.memo)(function(){var n=(0,d.Sj)(),a=n.zoom;return(0,r.jsx)(Oe,{zoom:a})}),we=e(75952),Ne=function(){var a=(0,R.oR)(function(u){return[u.selectAll,u.undo,u.redo,u.copySelection,u.paste]}),f=p()(a,5),T=f[0],j=f[1],b=f[2],K=f[3],V=f[4];(0,i.y1)("meta+a",function(u){u.preventDefault(),T()}),(0,i.y1)("meta+z",function(u){u.preventDefault(),j()}),(0,i.y1)("meta+c",function(u){u.preventDefault(),K()}),(0,i.y1)("meta+v",function(u){u.preventDefault(),V()}),(0,i.y1)("meta+shift+z",function(u){u.preventDefault(),b()}),(0,i.y1)("backspace",function(u){u.preventDefault()})},ve=e(83413),me,he,je=(0,c.kc)(function(n){var a=n.css,f=n.token;return{container:a(me||(me=h()([`
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
  `])),f.colorBgContainer)}}),Se=(0,t.forwardRef)(function(n,a){var f=n.nodeTypes,T=n.contextMenuEnabled,j=T===void 0?!0:T,b=n.style,K=n.className,V=n.flowProps,u=n.defaultViewport,$=n.children,Z=n.background,D=Z===void 0?!0:Z,F=n.miniMap,ne=F===void 0?!0:F,H=n.onNodesInit,Y=n.beforeConnect,Q=Y===void 0?function(){return!0}:Y,re=n.onConnect,te=re===void 0?function(){}:re,de=n.afterConnect,J=de===void 0?function(){}:de,X=je(),se=X.theme,ue=X.styles,oe=(0,R.oR)(ve.k.nodeList,y()),We=(0,R.oR)(ve.k.edgeList,y()),Ze=(0,we.d)(),ae=(0,d.B)(),ge=(0,t.useRef)(!1),Be=(0,t.useMemo)(function(){return ae?!0:!(oe.length>0)},[oe,ae]),ze=(0,R.oR)(function(B){return[B.handleNodesChange,B.handleEdgesChange,B.updateEdgesOnConnection,B.onViewPortChange]}),le=p()(ze,4),ke=le[0],$e=le[1],He=le[2],Ce=le[3],pe=(0,d._K)();Ne(),(0,d.CV)({onChange:Ce?(0,x.Z)(Ce,300):void 0}),(0,t.useEffect)(function(){ge.current||(ge.current=!0,u?pe.setViewport(u):pe.fitView())},[ae]),(0,t.useEffect)(function(){ae&&(H==null||H(Ze))},[ae]);var Ge=(0,t.useCallback)(function(B){if(Q(B)){te&&te(B);var Ee=He(B);J&&Ee&&J(Ee)}},[te,Q,J]);return(0,r.jsxs)(E.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!Be&&(0,r.jsx)(I.Z,{}),(0,r.jsxs)(d.x$,s()(s()({nodeTypes:f,ref:a,className:(0,c.cx)(ue.container,K),defaultViewport:u,fitView:!u,fitViewOptions:{padding:3},nodes:oe,edges:We,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:b},V),{},{selectionMode:d.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:ke,onEdgesChange:$e,onConnect:Ge,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[D&&(0,r.jsx)(o.A,{color:se.colorTextQuaternary,variant:o.T.Dots,size:2}),ne&&(0,r.jsx)(ye,{}),j&&(0,r.jsx)(C,{}),$]}))]})}),Te=Se,Ae=e(85287),Ie=e(6218),Re=e(16569),Fe=function(a){var f=a.flattenNodes,T=a.onFlattenNodesChange,j=a.onNodesChange,b=a.beforeNodesChange,K=a.afterNodesChange,V=a.flattenEdges,u=a.onEdgesChange,$=a.beforeEdgesChange,Z=a.afterEdgesChange,D=a.onFlattenEdgesChange,F=a.onNodesTreeChange,ne=a.onViewPortChange,H=a.editorRef,Y=(0,Ie.N)((0,R.AC)()),Q=(0,R.AC)(),re=function(J,X){Y(J,X,[X],function(se){if(!y()(X,Q.getState()[J])){Q.setState(se);var ue=Q.getState(),oe=ue.yjsDoc;oe.updateHistoryData(se)}})},te=(0,d._K)();return Y("reactflow",te),Y("onViewPortChange",ne),(0,r.jsx)(Re.Z,{flattenNodes:f,flattenEdges:V,editorRef:H,onEdgesChange:u,onNodesChange:j,beforeNodesChange:b,beforeEdgesChange:$,afterEdgesChange:Z,afterNodesChange:K,onNodesTreeChange:F,onFlattenEdgesChange:D,onFlattenNodesChange:T,useStateUpdater:re})},Le=Fe,Ue=["devtools","onNodesInit","beforeConnect","onConnect","afterConnect","defaultViewport","contextMenuEnabled","flowProps","nodeTypes","children","miniMap","background"],Ke=(0,t.forwardRef)(function(n,a){var f=n.devtools,T=n.onNodesInit,j=n.beforeConnect,b=n.onConnect,K=n.afterConnect,V=n.defaultViewport,u=n.contextMenuEnabled,$=n.flowProps,Z=n.nodeTypes,D=n.children,F=n.miniMap,ne=n.background,H=v()(n,Ue);return(0,r.jsx)(i.NL,{initiallyActiveScopes:["flow-editor"],children:(0,r.jsxs)(Ae.N,{showDevtools:f,children:[(0,r.jsx)(Te,{ref:a,nodeTypes:Z,miniMap:F,background:ne,onNodesInit:T,beforeConnect:j,onConnect:b,afterConnect:K,contextMenuEnabled:u,defaultViewport:V,flowProps:$,children:D}),(0,r.jsx)(Le,s()({},H))]})})}),Ve=Ke},83413:function(W,_,e){e.d(_,{k:function(){return v}});var M=e(26068),s=e.n(M),m=function(i){return Object.values(i.flattenNodes).map(function(l){return s()(s()({},l),{},{selected:i.selectedKeys.includes(l.id)})})},v={nodeList:m,edgeList:function(i){return Object.values(i.flattenEdges||{}).map(function(l){return s()(s()({},l),{},{selected:i.selectedKeys.includes(l.id)})})}}},64594:function(W,_,e){var M=e(73759),s=e(11527);_.Z=function(m){var v=m.position,t=v===void 0?"top-left":v,i=m.children;return(0,s.jsx)(M.s_,{position:t,children:i})}},3306:function(W,_,e){e.d(_,{R:function(){return t}});var M=e(48305),s=e.n(M),m=e(50959),v=e(73759),t=function(l){var p=(0,m.useState)(l),P=s()(p,2),h=P[0],c=P[1],O=(0,m.useCallback)(function(y){c(function(x){return(0,v.Fb)(y,x)})},[h]);return[h,c,O]}},40835:function(W,_,e){e.d(_,{Zi:function(){return P},to:function(){return p},x5:function(){return l}});var M=e(90228),s=e.n(M),m=e(87999),v=e.n(m),t=e(50959),i=e(57992),l=function(){var c=(0,t.useContext)(i.b),O=c.reactFlowInstance;return{reactFlowInstance:O}},p=function(){var c=(0,t.useContext)(i.b),O=c.setMiniMapPosition,y=function(E,d){O({x:E,y:d})};return{setMiniMapPosition:y}},P=function(){var c=(0,t.useContext)(i.b),O=c.updateSelectNode,y=c.updateSelectEdge,x=c.updateSelectEdges,E=c.updateSelectNodes,d=c.setMiniMapPosition,o=c.reactFlowInstance,S=c.flowViewRef,I=(0,t.useCallback)(function(C){if(o)return o.getNode(C)},[o]),A=(0,t.useCallback)(function(){if(o)return o.getNodes()},[o]),g=(0,t.useCallback)(function(C,w){o&&o.zoomTo(C,{duration:w})},[o]),L=(0,t.useCallback)(function(C,w){var N=I(C);N&&o&&o.fitView({nodes:[{id:C}],duration:w})},[I,o]),z=(0,t.useCallback)(function(C,w){d&&d({x:C,y:w})},[d]),G=(0,t.useCallback)(function(){if(o)return o.getViewport()},[o]),R=(0,t.useCallback)(function(C,w){if(o)return o.setViewport(C,{duration:w})},[o]),r=(0,t.useCallback)(function(C){if(o)return o.fitView({duration:C})},[o]),k=(0,t.useCallback)(v()(s()().mark(function C(){return s()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:document.exitFullScreen();case 1:case"end":return N.stop()}},C)})),[]),U=(0,t.useCallback)(function(){setTimeout(function(){r()},500)},[r]),q=(0,t.useCallback)(v()(s()().mark(function C(){return s()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:(S==null?void 0:S.current).requestFullscreen().then(function(){U()}).catch(function(ee){console.error(ee)});case 1:case"end":return N.stop()}},C)})),[U]);return(0,t.useEffect)(function(){U&&document.addEventListener("fullscreenchange",U)},[U]),{selectNode:O,selectEdge:y,selectEdges:x,selectNodes:E,getNode:I,getNodes:A,zoomTo:g,getViewport:G,setViewport:R,zoomToNode:L,fitView:r,setMiniMapPosition:z,instance:o,fullScreen:q,exitFullScreen:k}}},23252:function(W,_,e){e.d(_,{Z:function(){return E}});var M=e(26068),s=e.n(M),m=e(82092),v=e.n(m),t=e(67825),i=e.n(t),l=e(75937),p=e(50959),P=e(23856),h=(0,P.kc)(function(){return{container:{width:"100%",height:"600px"},dataFlowDrawer:{textAlign:"left",color:"#000",".ant-drawer-title":{textAlign:"left"}},"dataFlowDrawerDraggablePanel.studio-draggable-panel":{height:"100%",overflow:"visible",zIndex:"19",borderColor:"transparent",borderLeftWidth:"0"},"studio-draggable-panel-left-handle:active::before":{backgroundColor:"rgb(195, 195, 195)",background:"rgb(195, 195, 195)"},dataFlowDrawerDraggablePanel:{display:"none"},"studio-draggable-panel-toggle":{display:"none"}}}),c=h,O=e(11527),y=["open","width","mask","style","rootStyle","className","onClose","children"],x=function(o){var S=o.open,I=o.width,A=o.mask,g=A===void 0?!1:A,L=o.style,z=L===void 0?{}:L,G=o.rootStyle,R=G===void 0?{}:G,r=o.className,k=o.onClose,U=k===void 0?function(){}:k,q=o.children,C=i()(o,y),w=c(),N=w.styles,ee=w.cx;return(0,O.jsx)(l.Z,s()(s()({open:S,onClose:U,width:I,mask:g,className:r?ee(v()(v()({},N.dataFlowDrawer,!0),"className",!0)):N.dataFlowDrawer,getContainer:!1,style:s()(s()({},z),{},{padding:"0 0"}),rootStyle:s()(s()({},R),{},{position:"absolute"})},C),{},{children:q}))},E=x}}]);
