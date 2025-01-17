!(function(){"use strict";var In=Object.defineProperty,vn=Object.defineProperties;var fn=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ze=(I,l,n)=>l in I?In(I,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):I[l]=n,M=(I,l)=>{for(var n in l||(l={}))Le.call(l,n)&&ze(I,n,l[n]);if(oe)for(var n of oe(l))ke.call(l,n)&&ze(I,n,l[n]);return I},G=(I,l)=>vn(I,fn(l));var pe=(I,l)=>{var n={};for(var u in I)Le.call(I,u)&&l.indexOf(u)<0&&(n[u]=I[u]);if(I!=null&&oe)for(var u of oe(I))l.indexOf(u)<0&&ke.call(I,u)&&(n[u]=I[u]);return n};(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[5313],{10493:function(I,l,n){n.r(l),n.d(l,{demos:function(){return ln}});var u={};n.r(u),n.d(u,{Background:function(){return me.A},BackgroundVariant:function(){return me.T},BaseEdge:function(){return e.u5},BezierEdge:function(){return e.Jd},ConnectionLineType:function(){return e.t8},ConnectionMode:function(){return e.jD},ControlButton:function(){return D},Controls:function(){return $e},EdgeLabelRenderer:function(){return e.XQ},EdgeText:function(){return e.f6},Handle:function(){return e.HH},MarkerType:function(){return e.QZ},MiniMap:function(){return Re.a},NodeResizeControl:function(){return ce},NodeResizer:function(){return rn},NodeToolbar:function(){return Je},PanOnScrollMode:function(){return e.IY},Panel:function(){return e.s_},Position:function(){return e.Ly},ReactFlow:function(){return e.x$},ReactFlowProvider:function(){return e.tV},ResizeControlVariant:function(){return k},SelectionMode:function(){return e.oW},SimpleBezierEdge:function(){return e.y7},SmoothStepEdge:function(){return e.Su},StepEdge:function(){return e.xC},StraightEdge:function(){return e.r4},addEdge:function(){return e.Z_},applyEdgeChanges:function(){return e.yn},applyNodeChanges:function(){return e.Fb},boxToRect:function(){return e.GA},clamp:function(){return e.uZ},default:function(){return e.x$},getBezierPath:function(){return e.OQ},getBoundsOfRects:function(){return e.oI},getConnectedEdges:function(){return e.my},getIncomers:function(){return e.vG},getMarkerEnd:function(){return e.cf},getNodePositionWithOrigin:function(){return e.VP},getNodesBounds:function(){return e.RX},getOutgoers:function(){return e.xA},getRectOfNodes:function(){return e.YH},getSimpleBezierPath:function(){return e.bS},getSmoothStepPath:function(){return e.OW},getStraightPath:function(){return e.Hm},getTransformForBounds:function(){return e.lx},getViewportForBounds:function(){return e.$i},handleParentExpand:function(){return e.Wx},internalsSymbol:function(){return e.xB},isEdge:function(){return e.un},isNode:function(){return e.UG},reconnectEdge:function(){return e.Kz},rectToBox:function(){return e.RF},updateEdge:function(){return e.sN},useEdges:function(){return e.Mi},useEdgesState:function(){return e.ll},useGetPointerPosition:function(){return e.wE},useKeyPress:function(){return e.Kr},useNodeId:function(){return e.hR},useNodes:function(){return e.SM},useNodesInitialized:function(){return e.B},useNodesState:function(){return e.Rr},useOnSelectionChange:function(){return e.AQ},useOnViewportChange:function(){return e.CV},useReactFlow:function(){return e._K},useStore:function(){return e.oR},useStoreApi:function(){return e.AC},useUpdateNodeInternals:function(){return e.Bn},useViewport:function(){return e.Sj}});var $=n(90228),N=n.n($),Y=n(87999),H=n.n(Y),o=n(75271),re=n.t(o,2),le=n(56439),be=n(25930),ue=n(68642),Ie=n(48486),e=n(87811),Re=n(86847),W=n(28680),ve=n(24905);function Te(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},o.createElement("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"}))}function Oe(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},o.createElement("path",{d:"M0 0h32v4.2H0z"}))}function He(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},o.createElement("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"}))}function De(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},o.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"}))}function Ze(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},o.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"}))}const D=c=>{var i=c,{children:t,className:a}=i,s=pe(i,["children","className"]);return o.createElement("button",M({type:"button",className:(0,W.Z)(["react-flow__controls-button",a])},s),t)};D.displayName="ControlButton";const Xe=t=>({isInteractive:t.nodesDraggable||t.nodesConnectable||t.elementsSelectable,minZoomReached:t.transform[2]<=t.minZoom,maxZoomReached:t.transform[2]>=t.maxZoom}),fe=({style:t,showZoom:a=!0,showFitView:s=!0,showInteractive:c=!0,fitViewOptions:i,onZoomIn:p,onZoomOut:r,onFitView:d,onInteractiveChange:v,className:w,children:C,position:P="bottom-left"})=>{const V=(0,e.AC)(),[g,B]=(0,o.useState)(!1),{isInteractive:x,minZoomReached:E,maxZoomReached:A}=(0,e.oR)(Xe,ve.X),{zoomIn:b,zoomOut:R,fitView:Z}=(0,e._K)();if((0,o.useEffect)(()=>{B(!0)},[]),!g)return null;const f=()=>{b(),p==null||p()},F=()=>{R(),r==null||r()},X=()=>{Z(i),d==null||d()},S=()=>{V.setState({nodesDraggable:!x,nodesConnectable:!x,elementsSelectable:!x}),v==null||v(!x)};return o.createElement(e.s_,{className:(0,W.Z)(["react-flow__controls",w]),position:P,style:t,"data-testid":"rf__controls"},a&&o.createElement(o.Fragment,null,o.createElement(D,{onClick:f,className:"react-flow__controls-zoomin",title:"zoom in","aria-label":"zoom in",disabled:A},o.createElement(Te,null)),o.createElement(D,{onClick:F,className:"react-flow__controls-zoomout",title:"zoom out","aria-label":"zoom out",disabled:E},o.createElement(Oe,null))),s&&o.createElement(D,{className:"react-flow__controls-fitview",onClick:X,title:"fit view","aria-label":"fit view"},o.createElement(He,null)),c&&o.createElement(D,{className:"react-flow__controls-interactive",onClick:S,title:"toggle interactivity","aria-label":"toggle interactivity"},x?o.createElement(Ze,null):o.createElement(De,null)),C)};fe.displayName="Controls";var $e=(0,o.memo)(fe),me=n(50373),Ye=n(30967);const Ke=t=>{var a;return(a=t.domNode)==null?void 0:a.querySelector(".react-flow__renderer")};function Ue({children:t}){const a=(0,e.oR)(Ke);return a?(0,Ye.createPortal)(t,a):null}const Ge=(t,a)=>{var s,c,i,p,r,d;return((s=t==null?void 0:t.positionAbsolute)==null?void 0:s.x)===((c=a==null?void 0:a.positionAbsolute)==null?void 0:c.x)&&((i=t==null?void 0:t.positionAbsolute)==null?void 0:i.y)===((p=a==null?void 0:a.positionAbsolute)==null?void 0:p.y)&&(t==null?void 0:t.width)===(a==null?void 0:a.width)&&(t==null?void 0:t.height)===(a==null?void 0:a.height)&&(t==null?void 0:t.selected)===(a==null?void 0:a.selected)&&((r=t==null?void 0:t[e.xB])==null?void 0:r.z)===((d=a==null?void 0:a[e.xB])==null?void 0:d.z)},We=(t,a)=>t.length===a.length&&t.every((s,c)=>Ge(s,a[c])),je=t=>({transform:t.transform,nodeOrigin:t.nodeOrigin,selectedNodesCount:t.getNodes().filter(a=>a.selected).length});function Qe(t,a,s,c,i){let p=.5;i==="start"?p=0:i==="end"&&(p=1);let r=[(t.x+t.width*p)*a[2]+a[0],t.y*a[2]+a[1]-c],d=[-100*p,-100];switch(s){case e.Ly.Right:r=[(t.x+t.width)*a[2]+a[0]+c,(t.y+t.height*p)*a[2]+a[1]],d=[0,-100*p];break;case e.Ly.Bottom:r[1]=(t.y+t.height)*a[2]+a[1]+c,d[1]=0;break;case e.Ly.Left:r=[t.x*a[2]+a[0]-c,(t.y+t.height*p)*a[2]+a[1]],d=[-100,-100*p];break}return`translate(${r[0]}px, ${r[1]}px) translate(${d[0]}%, ${d[1]}%)`}function Je(w){var C=w,{nodeId:t,children:a,className:s,style:c,isVisible:i,position:p=e.Ly.Top,offset:r=10,align:d="center"}=C,v=pe(C,["nodeId","children","className","style","isVisible","position","offset","align"]);const P=(0,e.hR)(),V=(0,o.useCallback)(f=>(Array.isArray(t)?t:[t||P||""]).reduce((X,S)=>{const j=f.nodeInternals.get(S);return j&&X.push(j),X},[]),[t,P]),g=(0,e.oR)(V,We),{transform:B,nodeOrigin:x,selectedNodesCount:E}=(0,e.oR)(je,ve.X);if(!(typeof i=="boolean"?i:g.length===1&&g[0].selected&&E===1)||!g.length)return null;const b=(0,e.RX)(g,x),R=Math.max(...g.map(f=>{var F;return(((F=f[e.xB])==null?void 0:F.z)||1)+1})),Z=M({position:"absolute",transform:Qe(b,B,p,r,d),zIndex:R},c);return o.createElement(Ue,null,o.createElement("div",M({style:Z,className:(0,W.Z)(["react-flow__node-toolbar",s])},v),a))}var qe=n(45452),_e=n(41468),k;(function(t){t.Line="line",t.Handle="handle"})(k||(k={}));function en({width:t,prevWidth:a,height:s,prevHeight:c,invertX:i,invertY:p}){const r=t-a,d=s-c,v=[r>0?1:r<0?-1:0,d>0?1:d<0?-1:0];return r&&i&&(v[0]=v[0]*-1),d&&p&&(v[1]=v[1]*-1),v}const ge={width:0,height:0,x:0,y:0},nn=G(M({},ge),{pointerX:0,pointerY:0,aspectRatio:1});function tn({nodeId:t,position:a,variant:s=k.Handle,className:c,style:i={},children:p,color:r,minWidth:d=10,minHeight:v=10,maxWidth:w=Number.MAX_VALUE,maxHeight:C=Number.MAX_VALUE,keepAspectRatio:P=!1,shouldResize:V,onResizeStart:g,onResize:B,onResizeEnd:x}){const E=(0,e.hR)(),A=typeof t=="string"?t:E,b=(0,e.AC)(),R=(0,o.useRef)(null),Z=(0,o.useRef)(nn),f=(0,o.useRef)(ge),F=(0,e.wE)(),X=s===k.Line?"right":"bottom-right",S=a!=null?a:X;(0,o.useEffect)(()=>{if(!R.current||!A)return;const xe=(0,_e.Z)(R.current),Q=S.includes("right")||S.includes("left"),J=S.includes("bottom")||S.includes("top"),q=S.includes("left"),_=S.includes("top"),dn=(0,qe.Z)().on("start",z=>{var ee,K,T,ne;const m=b.getState().nodeInternals.get(A),{xSnapped:de,ySnapped:se}=F(z);f.current={width:(ee=m==null?void 0:m.width)!=null?ee:0,height:(K=m==null?void 0:m.height)!=null?K:0,x:(T=m==null?void 0:m.position.x)!=null?T:0,y:(ne=m==null?void 0:m.position.y)!=null?ne:0},Z.current=G(M({},f.current),{pointerX:de,pointerY:se,aspectRatio:f.current.width/f.current.height}),g==null||g(z,M({},f.current))}).on("drag",z=>{const{nodeInternals:m,triggerNodeChanges:de}=b.getState(),{xSnapped:se,ySnapped:ee}=F(z),K=m.get(A);if(K){const T=[],{pointerX:ne,pointerY:sn,width:he,height:ye,x:Ce,y:Se,aspectRatio:L}=Z.current,{x:we,y:Be,width:Ee,height:Ne}=f.current,Pe=Math.floor(Q?se-ne:0),Ve=Math.floor(J?ee-sn:0);let h=(0,e.uZ)(he+(q?-Pe:Pe),d,w),y=(0,e.uZ)(ye+(_?-Ve:Ve),v,C);if(P){const O=h/y,U=Q&&J,te=Q&&!J,ae=J&&!Q;h=O<=L&&U||ae?y*L:h,y=O>L&&U||te?h/L:y,h>=w?(h=w,y=w/L):h<=d&&(h=d,y=d/L),y>=C?(y=C,h=C*L):y<=v&&(y=v,h=v*L)}const Me=h!==Ee,Ae=y!==Ne;if(q||_){const O=q?Ce-(h-he):Ce,U=_?Se-(y-ye):Se,te=O!==we&&Me,ae=U!==Be&&Ae;if(te||ae){const ie={id:K.id,type:"position",position:{x:te?O:we,y:ae?U:Be}};T.push(ie),f.current.x=ie.position.x,f.current.y=ie.position.y}}if(Me||Ae){const O={id:A,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:h,height:y}};T.push(O),f.current.width=h,f.current.height=y}if(T.length===0)return;const pn=en({width:f.current.width,prevWidth:Ee,height:f.current.height,prevHeight:Ne,invertX:q,invertY:_}),Fe=G(M({},f.current),{direction:pn});if((V==null?void 0:V(z,Fe))===!1)return;B==null||B(z,Fe),de(T)}}).on("end",z=>{const m={id:A,type:"dimensions",resizing:!1};x==null||x(z,M({},f.current)),b.getState().triggerNodeChanges([m])});return xe.call(dn),()=>{xe.on(".drag",null)}},[A,S,d,v,w,C,P,F,g,B,x]);const j=S.split("-"),un=s===k.Line?"borderColor":"backgroundColor",cn=r?G(M({},i),{[un]:r}):i;return o.createElement("div",{className:(0,W.Z)(["react-flow__resize-control","nodrag",...j,s,c]),ref:R,style:cn},p)}var ce=(0,o.memo)(tn);const an=["top-left","top-right","bottom-left","bottom-right"],on=["top","right","bottom","left"];function rn({nodeId:t,isVisible:a=!0,handleClassName:s,handleStyle:c,lineClassName:i,lineStyle:p,color:r,minWidth:d=10,minHeight:v=10,maxWidth:w=Number.MAX_VALUE,maxHeight:C=Number.MAX_VALUE,keepAspectRatio:P=!1,shouldResize:V,onResizeStart:g,onResize:B,onResizeEnd:x}){return a?o.createElement(o.Fragment,null,on.map(E=>o.createElement(ce,{key:E,className:i,style:p,nodeId:t,position:E,variant:k.Line,color:r,minWidth:d,minHeight:v,maxWidth:w,maxHeight:C,onResizeStart:g,keepAspectRatio:P,shouldResize:V,onResize:B,onResizeEnd:x})),an.map(E=>o.createElement(ce,{key:E,className:s,style:c,nodeId:t,position:E,color:r,minWidth:d,minHeight:v,maxWidth:w,maxHeight:C,onResizeStart:g,keepAspectRatio:P,shouldResize:V,onResize:B,onResizeEnd:x}))):null}var ln={"background-demo-demos":{component:o.memo(o.lazy(function(){return n.e(7403).then(n.bind(n,82372))})),asset:{type:"BLOCK",id:"background-demo-demos",refAtomIds:["Background"],dependencies:{"index.tsx":{type:"FILE",value:n(44868).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},antd:{type:"NPM",value:"5.23.1"},"antd-style":{type:"NPM",value:"3.7.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":le,antd:be,"antd-style":ue,react:re},renderOpts:{compile:function(){var t=H()(N()().mark(function s(){var c,i=arguments;return N()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(4693).then(n.bind(n,54693));case 2:return r.abrupt("return",(c=r.sent).default.apply(c,i));case 3:case"end":return r.stop()}},s)}));function a(){return t.apply(this,arguments)}return a}()}},"background-demo-swim":{component:o.memo(o.lazy(function(){return n.e(7403).then(n.bind(n,26647))})),asset:{type:"BLOCK",id:"background-demo-swim",refAtomIds:["Background"],dependencies:{"index.tsx":{type:"FILE",value:n(99573).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},"antd-style":{type:"NPM",value:"3.7.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":le,"antd-style":ue,react:re},renderOpts:{compile:function(){var t=H()(N()().mark(function s(){var c,i=arguments;return N()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(4693).then(n.bind(n,54693));case 2:return r.abrupt("return",(c=r.sent).default.apply(c,i));case 3:case"end":return r.stop()}},s)}));function a(){return t.apply(this,arguments)}return a}()}},"background-demo-double":{component:o.memo(o.lazy(function(){return n.e(7403).then(n.bind(n,33539))})),asset:{type:"BLOCK",id:"background-demo-double",refAtomIds:["Background"],dependencies:{"index.tsx":{type:"FILE",value:n(11170).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},"antd-style":{type:"NPM",value:"3.7.1"},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:n(81176).Z},reactflow:{type:"NPM",value:"11.11.4"}},entry:"index.tsx"},context:{"...tsx":Ie,"@/index":le,"antd-style":ue,react:re,"/home/runner/work/pro-flow/pro-flow/src/Background/index.tsx":Ie,reactflow:u},renderOpts:{compile:function(){var t=H()(N()().mark(function s(){var c,i=arguments;return N()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(4693).then(n.bind(n,54693));case 2:return r.abrupt("return",(c=r.sent).default.apply(c,i));case 3:case"end":return r.stop()}},s)}));function a(){return t.apply(this,arguments)}return a}()}}}},69554:function(I,l,n){n.d(l,{F:function(){return Y}});var u=n(1482),$=n(24324),N=n(75271),Y=function(){var o=$.ZP.useBreakpoint();return(0,N.useMemo)(function(){return(0,u.f)(o)},[o])}},68642:function(I,l,n){n.r(l),n.d(l,{StyleProvider:function(){return u.V9},ThemeProvider:function(){return u.f6},createGlobalStyle:function(){return u.vJ},createInstance:function(){return u.Fs},createStyles:function(){return u.kc},createStylish:function(){return u.Yz},css:function(){return u.iv},cx:function(){return u.cx},extractStaticStyle:function(){return u.Y2},injectGlobal:function(){return u.hi},keyframes:function(){return u.F4},setupStyled:function(){return u.Us},styleManager:function(){return u.Rr},useAntdStylish:function(){return $.n},useAntdTheme:function(){return N.A},useAntdToken:function(){return Y.S},useResponsive:function(){return H.F},useTheme:function(){return u.Fg},useThemeMode:function(){return o.r}});var u=n(56753),$=n(47495),N=n(59165),Y=n(98984),H=n(69554),o=n(13828)},10407:function(I,l,n){n.r(l),n.d(l,{texts:function(){return u}});const u=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:3},{value:"\u7C7B\u578B",paraId:0,tocIndex:3},{value:"\u63CF\u8FF0",paraId:0,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:3},{value:"\u5FC5\u9009",paraId:0,tocIndex:3},{value:"id",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"\u5982\u679C\u8981\u663E\u793A\u591A\u4E2A\u80CC\u666F\uFF0C\u5219\u9700\u8981",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"className",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"variant",paraId:0,tocIndex:3},{value:"BackgroundVariant",paraId:0,tocIndex:3},{value:"\u80CC\u666F\u56FE\u6848\u7C7B\u578B",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"gap",paraId:0,tocIndex:3},{value:"number |[number, number]",paraId:0,tocIndex:3},{value:"\u6A21\u5F0F\u4E4B\u95F4\u7684\u5DEE\u8DDD\u3002\u60A8\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u6570\u5B57\u7684\u6570\u7EC4\u6765\u6307\u5B9A x \u95F4\u9699\u548C y \u95F4\u9699\u3002",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"size",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"\u201D \u70B9 \u201C\u7684\u534A\u5F84\u6216\u201D \u5341\u5B57 \u201C\u7684\u5C3A\u5BF8",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"lineWidth",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"\u201D \u7EBF \u201C\u6216\u201D \u5341\u5B57 \u201C\u7684\u5BBD\u5EA6",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"offset",paraId:0,tocIndex:3},{value:"number",paraId:0,tocIndex:3},{value:"\u56FE\u6848\u504F\u79FB",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"color",paraId:0,tocIndex:3},{value:"string",paraId:0,tocIndex:3},{value:"\u56FE\u6848\u989C\u8272",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"style",paraId:0,tocIndex:3},{value:"CSSProperties",paraId:0,tocIndex:3},{value:"\u6837\u5F0F\u5C5E\u6027",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"-",paraId:0,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u5FC5\u9009",paraId:1,tocIndex:4},{value:"lines",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"\u7EBF",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"dots",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"\u70B9",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"cross",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"\u5341\u5B57",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u63CF\u8FF0",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"\u5FC5\u9009",paraId:2,tocIndex:5},{value:"lanes",paraId:2,tocIndex:5},{value:"SwimLaneProps[]",paraId:2,tocIndex:5},{value:"\u6CF3\u9053\u5217\u8868",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"className",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"\u7C7B\u540D",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"style",paraId:2,tocIndex:5},{value:"React.CSSProperties",paraId:2,tocIndex:5},{value:"\u6837\u5F0F",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"\u5FC5\u9009",paraId:3,tocIndex:6},{value:"id",paraId:3,tocIndex:6},{value:"string]",paraId:3,tocIndex:6},{value:"id",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"label",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u6807\u7B7E",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"labelColor",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u6807\u7B7E\u7684\u80CC\u666F",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"backgroundColor",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u6CF3\u9053\u7684\u80CC\u666F",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"width",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"style",paraId:3,tocIndex:6},{value:"React.CSSProperties",paraId:3,tocIndex:6},{value:"\u6837\u5F0F",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6}]},11170:function(I,l){l.Z=`import { FlowView } from '@/index';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import Background, { BackgroundVariant } from '..';

const useStyles = createStyles(({ css }) => ({
  container: css\`
    width: 100%;
    height: 600px;
  \`,
}));

const BackgroundDemo = memo(() => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false} background={false}>
        <Background id="1" gap={10} color="yellow" variant={BackgroundVariant.Lines} />
        <Background id="2" gap={100} offset={1} color="red" variant={BackgroundVariant.Lines} />
      </FlowView>
    </div>
  );
});

export default BackgroundDemo;
`},44868:function(I,l){l.Z=`import { Background, BackgroundVariant, FlowPanel, FlowView } from '@ant-design/pro-flow';
import { Button } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useState } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css\`
    width: 100%;
    height: 600px;
  \`,
}));

const BackgroundDemo = memo(() => {
  const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Cross);
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false} background={false}>
        <FlowPanel position={'top-left'}>
          <div>variant:</div>
          <Button onClick={() => setVariant(BackgroundVariant.Dots)}>dots</Button>
          <Button onClick={() => setVariant(BackgroundVariant.Lines)}>lines</Button>
          <Button onClick={() => setVariant(BackgroundVariant.Cross)}>cross</Button>
        </FlowPanel>
        <Background variant={variant} />
      </FlowView>
    </div>
  );
});

export default BackgroundDemo;
`},99573:function(I,l){l.Z=`import { FlowView, SwimLaneProps, SwimlaneBackground } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css\`
    width: 100%;
    height: 600px;
  \`,
}));

const BackgroundDemo = memo(() => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false} background={false}>
        <SwimlaneBackground
          lanes={
            [
              {
                id: '1',
                label: 'Swimlane 1',
                labelColor: '#FECCCB',
              },
              {
                id: '2',
                label: 'Swimlane 2',
                labelColor: '#FDCDE6',
              },
              {
                id: '3',
                label: 'Swimlane 3',
                labelColor: '#CEFFE7',
              },
              {
                id: '4',

                label: 'Swimlane 4',
                labelColor: '#CDFECE',
              },
              {
                id: '5',
                label: 'Swimlane 5',
                labelColor: '#E7FFCC',
              },
              {
                id: '6',
                label: 'Swimlane 6',
                labelColor: '#CEFFE7',
              },
              {
                id: '7',
                label: 'Swimlane 7',
                labelColor: '#CBE5FF',
              },
            ] as SwimLaneProps[]
          }
        ></SwimlaneBackground>
      </FlowView>
    </div>
  );
});

export default BackgroundDemo;
`},81176:function(I,l){l.Z=`import { CSSProperties } from 'react';
import { Background, BackgroundVariant } from 'reactflow';

interface BackgroundProps {
  variant?: BackgroundVariant;
  gap?: number | [number, number];
  size?: number;
  lineWidth?: number;
  offset?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
  id?: string;
}

export default (props: BackgroundProps) => {
  const { gap = 10, color = '#bac3d4' } = props;

  return <Background {...props} gap={gap} color={color} />;
};

export { BackgroundVariant };
`}}]);
}());