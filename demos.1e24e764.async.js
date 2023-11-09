"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2433],{21122:function(Q,E,e){e.r(E);var O=e(18840),m=e.n(O),x=e(91499),h=e(71904),c=e(80166),y=e(11527),r,d=[{id:"a1",data:{title:"XXX_API_b3",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a2",data:{title:"XXX_API_b4",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a3",data:{title:"XXX_API_b4",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}}],f=[{id:"a1-a2",source:"a1",target:"a2"},{id:"a1-a3",source:"a1",target:"a3",type:h.P.radius}];function I(){return(0,y.jsx)(P,{children:(0,y.jsx)(x.Z,{nodes:d,edges:f})})}E.default=I;var P=c.ZP.div(r||(r=m()([`
  width: 800px;
  height: 500px;
`])))},17741:function(Q,E,e){e.r(E);var O=e(18840),m=e.n(O),x=e(91499),h=e(80166),c=e(11527),y;function r(){return(0,c.jsx)(d,{children:(0,c.jsx)(x.Z,{nodes:[],edges:[]})})}E.default=r;var d=h.ZP.div(y||(y=m()([`
  width: 800px;
  height: 500px;
`])))},48350:function(Q,E,e){e.r(E),e.d(E,{default:function(){return i}});var O=e(18840),m=e.n(O),x=e(80166),h=e(71904),c=e(50959),y=e(86151),r=function(){var j=useContext(FlowViewContext),_=j.reactFlowInstance;return{reactFlowInstance:_}},d=function(){var j=useContext(FlowViewContext),_=j.setMiniMapPosition,F=function(z,H){_({x:z,y:H})};return{setMiniMapPosition:F}},f=function(){var j=(0,c.useContext)(y.b),_=j.updateSelectNode,F=j.updateSelectEdge,B=j.updateSelectEdges,z=j.updateSelectNodes;return{updateSelectNode:_,updateSelectEdge:F,updateSelectEdges:B,updateSelectNodes:z}},I=e(91499),P=e(87289),g=e(11527),M,C=[{id:"a1",data:{title:"XXX_API_b3",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a2",data:{title:"XXX_API_b4",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}},{id:"a3",data:{title:"XXX_API_b4",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}}],R=[{id:"a1-a2",source:"a1",target:"a2"},{id:"a1-a3",source:"a1",target:"a3",type:h.P.radius}];function U(){var Z=f(),j=Z.updateSelectNode,_=Z.updateSelectEdges,F=Z.updateSelectNodes;return(0,g.jsx)(K,{children:(0,g.jsx)(I.Z,{onNodeClick:function(z,H){F(["a1","a2","a3"],h.Q.SUB_SELECT),j(H.id,h.Q.SELECT),_(["a1-a2","a1-a3"],h.Q.SUB_SELECT)},onPaneClick:function(){F(["a1","a2","a3"],h.Q.DEFAULT),_(["a1-a2","a1-a3"],h.Q.DEFAULT)},nodes:C,edges:R})})}function p(){return(0,g.jsx)(P.G,{children:(0,g.jsx)(U,{})})}var i=p,K=x.ZP.div(M||(M=m()([`
  width: 800px;
  height: 500px;
`])))},53450:function(Q,E,e){e.r(E),e.d(E,{default:function(){return Ye}});var O=e(18840),m=e.n(O),x=e(82225),h=e(77117),c=e.n(h),y=e(95530),r=e.n(y),d=e(50959),f=e(95407),I=e(28152),P=e.n(I),g=e(70123),M=e(3341),C=e.n(M),R=e(32598),U=e(20057),p=e(24819),i=e(21377),K=e(23392),Z=e(24754),j=e(1364),_=e(50667),F=e(11410),B=e(89561),z=e(7747),H=e(79984),X=e(62402),a=e(11527),ae=16,Ee=function(){var t=(0,i._K)(),n=(0,X.oR)(function(u){return[u.selectAll]}),l=P()(n,1),v=l[0];return(0,d.useMemo)(function(){return{DIVIDER:{type:"divider"},paste:{key:"paste",label:"\u7C98\u8D34",onClick:v,icon:(0,a.jsx)(z.Z,{size:ae}),shortcut:["meta","V"]},selectAll:{key:"selectAll",label:"\u9009\u62E9\u5168\u90E8",icon:(0,a.jsx)(H.Z,{size:ae}),onClick:v,shortcut:["meta","A"]},zoomIn:{label:"\u653E\u5927",icon:(0,a.jsx)(F.Z,{}),onClick:function(){t.zoomIn()},key:"zoomIn"},zoomOut:{label:"\u7F29\u5C0F",icon:(0,a.jsx)(B.Z,{}),onClick:function(){t.zoomOut()},key:"zoomOut"}}},[])},Ce=(0,d.memo)(function(){var o=Ee(),t=[o.paste,o.DIVIDER,o.selectAll,o.zoomIn,o.zoomOut];return(0,a.jsx)(_.Z,{items:t})}),xe=Ce,ye=e(9012),Pe=e(70210),je=e(78593),Se=e(11299),J=e(80153),De=e(20167),Oe=e(58713),Me=e(61128),_e=e(92920),se,de,Xe=(0,g.kc)(function(o){var t=o.css,n=o.token;return{container:t(se||(se=m()([`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: `,`;
    }
  `])),n.colorBorder),minimap:t(de||(de=m()([`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: `,`;
    border-radius: 4px;
  `])),n.colorBgContainer)}}),Ne=(0,d.memo)(function(o){var t=o.zoom,n=Xe(),l=n.styles,v=n.theme,u=(0,i._K)(),T=function(){u.zoomIn()},w=function(){u.zoomOut()},S=function(){u.fitView()},s=function(){t===1?u.zoomTo(.5):u.zoomTo(1)},V=[{icon:(0,a.jsx)(ye.Z,{}),title:"\u7F29\u5C0F",onClick:w},{title:t===1?"\u7F29\u653E\u4E3A 2:1":"\u7F29\u653E\u4E3A 1:1",onClick:s,children:Math.round(t*100)+"%",style:{width:56}},{icon:(0,a.jsx)(Pe.Z,{}),title:"\u653E\u5927",onClick:T},{icon:(0,a.jsx)(je.Z,{}),title:"\u81EA\u9002\u5E94\u753B\u5E03",onClick:S}];return(0,a.jsxs)(p.D,{gap:12,align:"center",className:l.container,children:[(0,a.jsx)(Se.ZP,{theme:{algorithm:[v.isDarkMode?J.Z.darkAlgorithm:J.Z.defaultAlgorithm,J.Z.compactAlgorithm]},children:(0,a.jsx)(p.D,{horizontal:!0,align:"center",children:(0,a.jsx)(De.Z,{children:V.map(function(A,N){return(0,a.jsx)(Oe.Z,{arrow:!1,title:A.title,children:(0,a.jsx)(Me.ZP,{onClick:A.onClick,icon:A.icon,style:A.style,children:A.children})},N)})})})}),(0,a.jsx)(_e.a,{className:l.minimap,maskColor:v.colorBgMask,nodeColor:function(N){return N.data.color?N.data.color:v.colorFill}})]})}),Ie=(0,d.memo)(function(){var o=(0,i.Sj)(),t=o.zoom;return(0,a.jsx)(Ne,{zoom:t})}),Te=function(){var t=(0,X.oR)(function(s){return[s.selectAll,s.undo,s.redo,s.deleteSelection,s.copySelection,s.paste]}),n=P()(t,6),l=n[0],v=n[1],u=n[2],T=n[3],w=n[4],S=n[5];(0,f.y1)("meta+a",function(s){s.preventDefault(),l()}),(0,f.y1)("meta+z",function(s){s.preventDefault(),v()}),(0,f.y1)("meta+c",function(s){s.preventDefault(),w()}),(0,f.y1)("meta+v",function(s){s.preventDefault(),S()}),(0,f.y1)("meta+shift+z",function(s){s.preventDefault(),u()}),(0,f.y1)("backspace",function(s){s.preventDefault(),T()})},we=function(t){return Object.values(t.flattenNodes).map(function(n){return c()(c()({},n),{},{selected:t.selectedKeys.includes(n.id)})})},le={nodeList:we,edgeList:function(t){return Object.values(t.flattenEdges||{}).map(function(n){return c()(c()({},n),{},{selected:t.selectedKeys.includes(n.id)})})}},re,ie,Le=(0,g.kc)(function(o){var t=o.css,n=o.token;return{container:t(re||(re=m()([`
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
  `])),n.colorBgLayout,n.colorBorder,n.colorPrimary),minimap:t(ie||(ie=m()([`
    overflow: hidden;
    height: 150px;
    background: `,`;
    border-radius: 4px;
  `])),n.colorBgContainer)}}),Fe=(0,d.forwardRef)(function(o,t){var n=o.nodeTypes,l=o.contextMenuEnabled,v=l===void 0?!0:l,u=o.style,T=o.className,w=o.flowProps,S=o.defaultViewport,s=o.onNodesInit,V=Le(),A=V.theme,N=V.styles,q=(0,d.useState)(!1),$=P()(q,2),ve=$[0],G=$[1],k=(0,X.oR)(le.nodeList,C()),Y=(0,X.oR)(le.edgeList,C()),ee=(0,x.d)(),te=(0,X.oR)(function(L){return[L.onNodesChange,L.updateEdgesOnConnection,L.updateEdgesOnEdgeChange,L.onViewPortChange,L.onElementSelectChange,L.onEdgesChange,L.dispatchNodes]}),b=P()(te,7),me=b[0],Je=b[1],qe=b[2],he=b[3],fe=b[4],pe=b[5],ne=b[6],Ae=(0,i._K)();Te(),(0,i.CV)({onChange:he?(0,R.Z)(he,300):void 0});var oe=(0,i.B)();return(0,d.useEffect)(function(){S?Ae.setViewport(S):Ae.fitView(),console.log(oe),oe&&(G(!0),s==null||s(ee))},[oe]),(0,a.jsxs)(p.D,{height:"100%",width:"100%",style:{position:"relative"},children:[!ve&&(0,a.jsx)(j.Z,{}),(0,a.jsxs)(i.x$,c()(c()({nodeTypes:n,ref:t,className:(0,g.cx)(N.container,T),defaultViewport:S,fitView:!S,fitViewOptions:{padding:3},nodes:k,edges:Y,snapGrid:[20,20],minZoom:.05,panOnScroll:!0,panOnDrag:!1,zoomOnScroll:!1,selectionOnDrag:!0,style:u},w),{},{selectionMode:i.oW.Partial,selectionKeyCode:["Meta","Shift"],multiSelectionKeyCode:["Meta","Shift"],selectNodesOnDrag:!0,onNodesChange:function(W){W.forEach(function(D){switch(D.type){case"add":ne({type:"addNode",node:D.item});break;case"position":if(!D.dragging)break;ne({type:"updateNodePosition",position:D.position,id:D.id});break;case"remove":ne({type:"deleteNode",id:D.id});break;case"select":fe(D.id,D.selected)}}),me&&(0,U.Z)(me,50)(W)},onEdgesChange:function(W){qe(W),W.forEach(function(D){switch(D.type){case"select":fe(D.id,D.selected)}}),pe&&pe(W)},onConnect:Je,disableKeyboardA11y:!0,proOptions:{hideAttribution:!0},children:[(0,a.jsx)(K.A,{color:A.colorTextQuaternary,variant:K.T.Dots,size:2}),(0,a.jsx)(Ie,{}),v&&(0,a.jsx)(xe,{})]}))]})}),Re=Fe,ue=(0,d.memo)(function(o){var t=o.children,n=o.showDevtools,l=!0,v=(0,a.jsx)(a.Fragment,{children:t});try{(0,X.AC)()}catch(u){l=!1}return l?v:(0,a.jsx)(i.tV,{children:(0,a.jsx)(X.zt,{createStore:function(){return(0,X.ze)(n)},children:v})})}),Ue=e(21109),Ze=e(97281),be=function(t){var n=t.flattenNodes,l=t.onFlattenNodesChange,v=t.onNodesChange,u=t.flattenEdges,T=t.onEdgesChange,w=t.onFlattenEdgesChange,S=t.onNodesTreeChange,s=t.onViewPortChange,V=t.editorRef,A=(0,Ue.N)((0,X.AC)()),N=(0,X.AC)(),q=function(G,k){A(G,k,[k],function(Y){if(!C()(k,N.getState()[G])){N.setState(Y);var ee=N.getState(),te=ee.yjsDoc;te.updateHistoryData(Y)}})},$=(0,i._K)();return A("reactflow",$),A("onViewPortChange",s),(0,a.jsx)(Ze.Z,{flattenNodes:n,flattenEdges:u,editorRef:V,onEdgesChange:T,onNodesChange:v,onNodesTreeChange:S,onFlattenEdgesChange:w,onFlattenNodesChange:l,useStateUpdater:q})},Ke=be,Be=["devtools","onNodesInit","defaultViewport","contextMenuEnabled","flowProps","nodeTypes"],ze=(0,d.forwardRef)(function(o,t){var n=o.devtools,l=o.onNodesInit,v=o.defaultViewport,u=o.contextMenuEnabled,T=o.flowProps,w=o.nodeTypes,S=r()(o,Be);return(0,a.jsx)(f.NL,{initiallyActiveScopes:["flow-editor"],children:(0,a.jsxs)(ue,{showDevtools:n,children:[(0,a.jsx)(Re,{ref:t,nodeTypes:w,onNodesInit:l,contextMenuEnabled:u,defaultViewport:v,flowProps:T}),(0,a.jsx)(Ke,c()({},S))]})})}),Ve=ze,We=e(80166),ce,ge,Qe=We.ZP.div(ce||(ce=m()([`
  width: 120px;
  height: 30px;
  text-align: center;
  background-color: white;
  border: 1px solid aqua;
  border-radius: 4px;
  line-height: 30px;
`]))),He=function(t){console.log(t);var n=t.handles,l=t.id;return(0,a.jsxs)(Qe,{children:[(0,a.jsx)(i.HH,{id:typeof(n==null?void 0:n.source)=="string"?n==null?void 0:n.source:l,type:"target",position:i.Ly.Left}),t.data.title,(0,a.jsx)(i.HH,{id:typeof(n==null?void 0:n.source)=="string"?n==null?void 0:n.source:l,type:"source",position:i.Ly.Right})]})},ke=(0,g.kc)(function(o){var t=o.css;return{container:t(ge||(ge=m()([`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `])))}}),$e=function(){var t=(0,x.d)(),n=ke(),l=n.styles;return(0,d.useEffect)(function(){t.addNode({id:"a1",type:"StringNode",position:{x:0,y:100},data:{title:"String Node",handles:{}}})},[t]),(0,a.jsx)("div",{className:l.container,children:(0,a.jsx)(Ve,{nodeTypes:{StringNode:He}})})},Ge=function(){return(0,a.jsx)(ue,{children:(0,a.jsx)($e,{})})},Ye=Ge},1364:function(Q,E,e){var O=e(18840),m=e.n(O),x=e(85137),h=e(70123),c=e(61621),y=e(50959),r=e(81057),d=e(11527),f,I=(0,h.kc)(function(g){var M=g.css,C=g.token;return M(f||(f=m()([`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: `,`;
    backdrop-filter: blur(20px);
  `])),(0,c.m4)(C.colorBgContainer,.5))}),P=(0,y.memo)(function(g){var M=g.children,C=g.loading,R=I(),U=R.styles,p=(0,d.jsxs)(r.Z,{className:U,children:[(0,d.jsx)(x.Z,{spin:!0,style:{fontSize:32,marginBottom:12}})," \u753B\u5E03\u521D\u59CB\u5316..."]});return M?(0,d.jsxs)(d.Fragment,{children:[typeof C=="undefined"||C?p:null,M]}):p});E.Z=P},97281:function(Q,E,e){var O=e(50959),m=e(21109),x=e(82225),h=e(62402),c=function(r){var d=r.onFlattenNodesChange,f=r.onNodesChange,I=r.onEdgesChange,P=r.onFlattenEdgesChange,g=r.onNodesTreeChange,M=r.editorRef,C=r.useStateUpdater,R=r.flattenNodes,U=r.flattenEdges,p=(0,m.N)((0,h.AC)()),i=C!=null?C:p;i("flattenNodes",R),i("flattenEdges",U),p("onFlattenNodesChange",d),p("onFlattenEdgesChange",P),p("onNodesChange",f),p("onEdgesChange",I),p("onNodesTreeChange",g);var K=(0,x.d)();return(0,O.useImperativeHandle)(M,function(){return K}),null};E.Z=c}}]);
