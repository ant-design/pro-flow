"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[7599],{70020:function(k,w,n){n.d(w,{F:function(){return I}});var $=n(26068),b=n.n($),L=n(48305),H=n.n(L),T=n(67825),A=n.n(T),x=n(86865),f=n(79810),D=n(50959),y=n(11527),B=["value","onChange","onValueChanging","onChangeEnd"],I=(0,D.memo)(function(N){var l=N.value,O=N.onChange,C=N.onValueChanging,m=N.onChangeEnd,E=A()(N,B),h=l||"",P=(0,D.useState)(h),j=H()(P,2),u=j[0],s=j[1],K=(0,D.useRef)(null),v=(0,D.useRef)(!1),U=(0,D.useRef)(!1),F=(0,D.useCallback)(function(){O==null||O(u)},[u]);return(0,D.useEffect)(function(){typeof l!="undefined"&&s(l)},[l]),(0,y.jsx)(f.I,b()(b()({ref:K},E),{},{value:u,onCompositionStart:function(){v.current=!0},onCompositionEnd:function(){v.current=!1},onFocus:function(){U.current=!0},onBlur:function(){U.current=!1,m==null||m(u)},onChange:function(p){s(p.target.value),C==null||C(p.target.value)},onPressEnter:function(p){!p.shiftKey&&!v.current&&(p.preventDefault(),F(),U.current=!1,m==null||m(u))},suffix:l===u?(0,y.jsx)("span",{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.ZP,{type:"link",size:"small",onClick:function(){s(l)},style:{padding:0},children:"\u91CD\u7F6E"}),(0,y.jsx)(x.ZP,{type:"link",size:"small",style:{padding:0},onClick:function(){F()},children:"\u4FDD\u5B58 \u21B5"})]})}))})},48828:function(k,w,n){n.d(w,{AC:function(){return B},iq:function(){return l},oR:function(){return y}});var $=n(15558),b=n.n($),L=n(50959),H=n(54011),T=n(13422),A=n(29130),x=n(11527),f=function(C){var m=C.collapsedKeys,E=C.onCollapsedKeysChange;return(0,H.Ue)(function(h,P){return{collapsedKeys:m!=null?m:[],onCollapsedKeysChange:E,toggleCollapsedKey:function(u){var s,K,v=[];P().collapsedKeys.includes(u)?v=P().collapsedKeys.filter(function(U){return U!==u}):v=[].concat(b()(P().collapsedKeys),[u]),h({collapsedKeys:v}),(s=(K=P()).onCollapsedKeysChange)===null||s===void 0||s.call(K,v)}}})},D=(0,T.k)(),y=D.useStore,B=D.useStoreApi,I=D.Provider,N=(0,L.memo)(function(O){var C=O.collapsedKeys,m=B(),E=(0,A.N)(m);return E("collapsedKeys",C),null}),l=(0,L.memo)(function(O){var C=O.children,m=O.defaultCollapsedKeys,E=O.onCollapsedKeysChange,h=O.collapsedKeys;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(I,{createStore:function(){return f({collapsedKeys:m,onCollapsedKeysChange:E})},children:[C,(0,x.jsx)(N,{collapsedKeys:h})]})})})},77599:function(k,w,n){var $=n(26068),b=n.n($),L=n(67825),H=n.n(L),T=n(53649),A=n.n(T),x=n(49084),f=n(16965),D=n(95654),y=n(50959),B=n(36036),I=n(75364),N=n(48828),l=n(11527),O=["id","onTitleChange","onCollapsedKeysChange"],C,m,E=(0,D.kc)(function(u){var s=u.css,K=u.token,v=u.prefixCls;return{container:s(C||(C=A()([`
    will-change: transform;
    width: 100%;
    max-width: 600px;
    border: 1px solid `,`;
    border-radius: 12px;
    .`,`-card-head {
      padding-right: 16px;
    }

    .editor-field-item-container:not(:last-child) {
      margin-bottom: 24px;
    }
  `])),K.colorBorder,v),selected:s(m||(m=A()([`
    border-color: `,`;
    border-width: 2px;
    box-shadow: 0 9px 25px -6px rgba(0, 0, 0, 0.1);
  `])),K.colorPrimary)}}),h=(0,y.memo)(function(u){var s=u.active,K=u.collapsedKeys,v=u.onCollapsedKeysChange,U=u.onTitleChange,F=u.style,W=u.className,p=u.title,ee=u.children,Q=u.extra,G=E(),X=G.styles,q=G.cx,ne=(0,y.useRef)(null);return(0,l.jsx)(x.ZP,{getPopupContainer:function(){return ne.current||document.body},children:(0,l.jsx)(N.iq,{collapsedKeys:K,onCollapsedKeysChange:v,children:(0,l.jsx)(f.Z,{ref:ne,title:(0,l.jsx)(B.Z,{onChange:U,value:p||"\u57FA\u7840\u8282\u70B9"}),className:q(X.container,s&&X.selected,W),extra:Q,style:F,children:ee})})})}),P=(0,y.memo)(function(u){var s=u.id,K=u.onTitleChange,v=u.onCollapsedKeysChange,U=H()(u,O),F=(0,I.d)();return(0,l.jsx)(h,b()({onTitleChange:function(p){F.updateNodeMeta(s,"title",p),K==null||K(p)},onCollapsedKeysChange:function(p){F.updateNodeState(s,"collapsedKeys",p),v==null||v(p)}},U))}),j=P;j.Preview=h,w.Z=j},36036:function(k,w,n){var $=n(48305),b=n.n($),L=n(52327),H=n(20466),T=n(50959),A=n(24819),x=n(70020),f=n(11527),D=(0,T.memo)(function(y){var B=y.value,I=y.onChange,N=(0,T.useState)(!1),l=b()(N,2),O=l[0],C=l[1];return O?(0,f.jsx)(x.F,{onChange:I,onChangeEnd:function(){C(!1)},value:B}):(0,f.jsxs)(A.D,{gap:8,align:"center",horizontal:!0,children:[(0,f.jsx)("span",{style:{lineHeight:1},children:B}),(0,f.jsx)(H.Z,{icon:(0,f.jsx)(L.Z,{}),onClick:function(){C(!O)},placement:"right",title:"Edit"})]})});w.Z=D},75364:function(k,w,n){n.d(w,{d:function(){return y}});var $=n(26068),b=n.n($),L=n(67825),H=n.n(L),T=n(80111),A=n(50959),x=n(54733),f=n(75656),D=["yjsDoc","flattenEdges","selectedKeys","onFlattenNodesChange","onEdgesChange","onFlattenEdgesChange","onNodesChange","onViewPortChange","onNodesTreeChange","onSelectionChange","onElementSelectChange","updateEdgesOnEdgeChange","updateEdgesOnConnection","internalUpdateEdges","internalUpdateNodes","internalUpdateSelection"],y=function(){var I=(0,f.AC)(),N=(0,x._K)(),l=I.getState(),O=l.yjsDoc,C=l.flattenEdges,m=l.selectedKeys,E=l.onFlattenNodesChange,h=l.onEdgesChange,P=l.onFlattenEdgesChange,j=l.onNodesChange,u=l.onViewPortChange,s=l.onNodesTreeChange,K=l.onSelectionChange,v=l.onElementSelectChange,U=l.updateEdgesOnEdgeChange,F=l.updateEdgesOnConnection,W=l.internalUpdateEdges,p=l.internalUpdateNodes,ee=l.internalUpdateSelection,Q=H()(l,D),G=(0,T.Z)(function(){return I.getState().flattenNodes}),X=(0,T.Z)(function(){return I.getState().flattenEdges}),q=(0,T.Z)(function(){return I.getState().selectedKeys}),ne=(0,A.useCallback)(function(oe){return N?N.screenToFlowPosition(oe):{x:0,y:0}},[N]);return(0,A.useMemo)(function(){return b()(b()({},Q),{},{screenToFlowPosition:ne,getFlattenNodes:G,getSelectedKeys:q,getFlattenEdges:X})},[Q])}},75656:function(k,w,n){n.d(w,{zt:function(){return Oe},ze:function(){return De},oR:function(){return Pe},AC:function(){return Me}});var $=n(41048),b=n(59245),L=n(38980),H=n(13422),T=n(48305),A=n.n(T),x=n(62657),f=n.n(x),D=n(21742),y=n.n(D),B=n(83136),I=n.n(B),N=n(17069),l=n.n(N),O=n(25298),C=n.n(O),m=n(82092),E=n.n(m),h=n(15836),P=l()(function Z(i){C()(this,Z),E()(this,"type",void 0),E()(this,"name",void 0),E()(this,"timestamp",void 0),this.type=i.type,this.name=i.name,this.timestamp=i.timestamp}),j=function(Z){y()(t,Z);var i=I()(t);function t(a){var e;return C()(this,t),e=i.call(this,a),E()(f()(e),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),E()(f()(e),"undoManager",void 0),E()(f()(e),"updateHistoryData",function(o){var r=e.getMap(e._internalHistoryKey);Object.entries(o).forEach(function(d){var c=A()(d,2),g=c[0],_=c[1];r.set(g,_)})}),E()(f()(e),"recordHistoryData",function(o,r){e.transact(function(){e.updateHistoryData(o)},new P(r))}),E()(f()(e),"getHistoryMap",function(){return e.getMap(e._internalHistoryKey)}),E()(f()(e),"getHistoryJSON",function(){var o=e.getMap(e._internalHistoryKey);return o.toJSON()}),E()(f()(e),"redo",function(){return e.undoManager.redo()}),E()(f()(e),"undo",function(){return e.undoManager.undo()}),e.undoManager=new h.H6(e.getHistoryMap(),{trackedOrigins:new Set([P])}),e}return l()(t)}(h.QW),u=n(26068),s=n.n(u),K={reactflow:{},flattenNodes:{},flattenEdges:{},selectedKeys:[],yjsDoc:new j},v=n(67825),U=n.n(v),F=n(3341),W=n.n(F),p=n(64461),ee=n(62071),Q="$$",G="@@",X=function(i,t){return i+G+(t||"")},q=function(i,t,a,e){return X(i,a)+Q+X(t,e)},ne=function(i){var t=i.split(Q),a=_slicedToArray(t,2),e=a[0],o=a[1];if(!e||!o)return{source:"",target:"",sourceHandle:"",targetHandle:""};var r=e.split(G),d=_slicedToArray(r,2),c=d[0],g=d[1],_=o.split(G),M=_slicedToArray(_,2),R=M[0],J=M[1];return{source:c,target:R,sourceHandle:g,targetHandle:J}},oe=function(i,t){switch(t.type){case"addEdge":return(0,p.Uy)(i,function(a){a[t.edge.id]=t.edge});case"addEdges":return(0,p.Uy)(i,function(a){var e=t.edges;e&&Object.keys(e).forEach(function(o){a[o]||(a[o]=e[o])})});case"updateEdge":return(0,p.Uy)(i,function(a){var e=t.id,o=t.edge;console.log(a[e]),a[e]=s()(s()({},a[e]),o)});case"updateEdgeData":return(0,p.Uy)(i,function(a){var e=t.newData,o=t.id,r=t.deepReplace;if(a[o]=s()(s()({},a[o]),{},{data:e}),!!a[o]){var d=a[o];r?a[o]=s()(s()(s()({},a[o]),d),{},{data:s()(s()({},d.data),e)}):a[o]=s()(s()(s()({},a[o]),d),{},{data:(0,ee.Z)(d.data,e)})}});case"deleteEdge":return(0,p.Uy)(i,function(a){delete a[t.id]});case"createEdgeFromConnection":return(0,p.Uy)(i,function(a){var e=t.connection,o=e.source,r=e.target,d=e.sourceHandle,c=e.targetHandle;if(!(!o||!r)){var g=q(o,r,d,c);a[g]={id:g,source:o,target:r,sourceHandle:d,targetHandle:c}}});default:return i}},le=["type"],ie=function(i,t){return{internalUpdateEdges:function(e,o){var r,d;i({flattenEdges:e},!1,o),(r=(d=t()).onFlattenEdgesChange)===null||r===void 0||r.call(d,e)},dispatchEdges:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},r=o.recordHistory,d=r===void 0?!0:r,c=e.type,g=U()(e,le),_=oe(t().flattenEdges,e);if(!W()(_,t().flattenEdges)){var M=t(),R=M.internalUpdateEdges,J=M.yjsDoc;R(_,{type:"dispatchFlattenEdges/".concat(c),payload:g}),d&&J.recordHistoryData({flattenEdges:_},{type:"edge",name:e.type,timestamp:Date.now()})}},addEdges:function(e,o){t().dispatchEdges({type:"addEdges",edges:e},o)},updateEdgesOnConnection:function(e){t().dispatchEdges({type:"createEdgeFromConnection",connection:e})},updateEdgesOnEdgeChange:function(e){e.forEach(function(o){switch(o.type){case"remove":t().dispatchEdges({type:"deleteEdge",id:o.id})}})},deleteEdge:function(e){t().deselectElement(e),t().dispatchEdges({type:"deleteEdge",id:e})},updateEdgeData:function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=arguments.length>3?arguments[3]:void 0;t().dispatchEdges({type:"updateEdgeData",id:e,newData:o,deepReplace:r},d)},updateEdge:function(e,o,r){t().dispatchEdges({type:"updateEdge",id:e,edge:o},r)}}},ue=function(i,t){switch(t.type){case"addNode":return(0,p.Uy)(i,function(a){!t.node||!t.node.id||(a[t.node.id]=t.node)});case"addNodes":return(0,p.Uy)(i,function(a){var e=t.nodes;e&&Object.keys(e).forEach(function(o){a[o]||(a[o]=e[o])})});case"deleteNode":return(0,p.Uy)(i,function(a){delete a[t.id]});case"updateNodePosition":return(0,p.Uy)(i,function(a){a[t.id]&&t.position&&(a[t.id].position=t.position)});case"updateNodeMeta":return(0,p.Uy)(i,function(a){if(a[t.id]){var e=a[t.id];e.data.meta[t.key]=t.value}});case"updateNodeState":return(0,p.Uy)(i,function(a){if(a[t.id]){var e=a[t.id];e.data.state[t.key]=t.value}});case"updateNodeContent":return(0,p.Uy)(i,function(a){var e=t.key,o=t.id,r=t.value;if(a[o]){var d=a[o];d.data.content?d.data.content[e]=r:d.data.content=E()({},e,r)}});case"updateNodeData":return(0,p.Uy)(i,function(a){var e=t.newData,o=t.id,r=t.deepReplace;if(a[o]){var d=a[o];r?d.data=s()(s()({},d.data),e):(0,ee.Z)(d.data,e)}});default:return i}},ce=["type"],_e=function(i,t){return{internalUpdateNodes:function(e,o){var r,d;W()(e,t().flattenNodes)||(i({flattenNodes:e},!1,o),(r=(d=t()).onFlattenNodesChange)===null||r===void 0||r.call(d,e))},dispatchNodes:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},r=o.recordHistory,d=r===void 0?!0:r,c=e.type,g=U()(e,ce),_=ue(t().flattenNodes,e);if(!W()(_,t().flattenNodes)){t().internalUpdateNodes(_,{type:"dispatchFlattenNodes/".concat(c),payload:g});var M=t(),R=M.yjsDoc;d&&R.recordHistoryData({flattenNodes:_},{type:"nodes",name:e.type,timestamp:Date.now()})}},updateNodeMeta:function(e,o,r,d){t().dispatchNodes({type:"updateNodeMeta",id:e,key:o,value:r},d)},updateNodeState:function(e,o,r,d){t().dispatchNodes({type:"updateNodeState",id:e,key:o,value:r},d)},updateNodeContent:function(e,o,r,d){t().dispatchNodes({type:"updateNodeContent",id:e,key:o,value:r},d)},updateNodeData:function(e,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=arguments.length>3?arguments[3]:void 0;t().dispatchNodes({type:"updateNodeData",id:e,newData:o,deepReplace:r},d)},addNode:function(e){t().dispatchNodes({type:"addNode",node:e})},addNodes:function(e,o){t().dispatchNodes({type:"addNodes",nodes:e},o)},deleteNode:function(e){t().deselectElement(e),t().dispatchNodes({type:"deleteNode",id:e})}}},pe=n(335),fe=n.n(pe),ge=n(90228),ae=n.n(ge),Ee=n(87999),se=n.n(Ee),ve=n(15558),te=n.n(ve),me=n(67197),he=(0,me.kP)("0123456789abcdefghijklmnopqrstuvwxyz",16),ye=function(i,t){return{internalUpdateSelection:function(e,o){var r,d;i({selectedKeys:e},!1,o),(r=(d=t()).onSelectionChange)===null||r===void 0||r.call(d,e)},onElementSelectChange:function(e,o){o?t().selectElement(e):t().deselectElement(e)},actionList:function(){var e=t(),o=e.yjsDoc;return{undo:o.undoManager.undoStack.length,redo:o.undoManager.redoStack.length}},selectElement:function(e){t().selectedKeys.includes(e)||t().internalUpdateSelection([].concat(te()(t().selectedKeys),[e]),{type:"selection/selectElement",payload:{id:e}})},selectElements:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;t().internalUpdateSelection(o?[].concat(te()(t().selectedKeys),te()(e)):e,{type:"selection/selectElements",payload:{ids:e}})},selectAll:function(){var e=t().reactflow.getNodes(),o=t().reactflow.getEdges(),r=[].concat(te()(e.map(function(d){return d.id})),te()(o.map(function(d){return d.id})));t().internalUpdateSelection(r,{type:"selection/selectAll",payload:{ids:r}})},deselectElement:function(e){t().internalUpdateSelection(t().selectedKeys.filter(function(o){return o!==e}),{type:"selection/deselectElement",payload:{id:e}})},deselectAll:function(){t().internalUpdateSelection([],{type:"selection/deselectAll",payload:{}})},deleteSelection:function(){var e=t(),o=e.selectedKeys,r=e.flattenEdges,d=e.flattenNodes,c=e.dispatchNodes,g=e.dispatchEdges;o.forEach(function(_){d[_]&&c({type:"deleteNode",id:_}),r[_]&&g({type:"deleteEdge",id:_})})},copySelection:function(){var a=se()(ae()().mark(function o(){var r,d,c,g,_,M,R,J,S,z;return ae()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(r=t(),d=r.selectedKeys,c=r.flattenEdges,g=r.flattenNodes,d.length!==0){Y.next=3;break}return Y.abrupt("return");case 3:return _=Object.values(g).filter(function(de){return d.includes(de.id)}),M=Object.values(c).filter(function(de){return d.includes(de.id)}),R={nodes:_,edges:M},J=new Blob([JSON.stringify(R)],{type:"text/html"}),S=new Blob([JSON.stringify(R)],{type:"text/plain"}),z=new ClipboardItem({"text/html":J,"text/plain":S}),Y.next=11,navigator.clipboard.write([z]);case 11:return Y.abrupt("return",R);case 12:case"end":return Y.stop()}},o)}));function e(){return a.apply(this,arguments)}return e}(),paste:function(){var a=se()(ae()().mark(function o(){var r;return ae()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,navigator.clipboard.read();case 2:r=c.sent,r.forEach(function(g){var _=fe()(g.types),M;try{for(_.s();!(M=_.n()).done;){var R=M.value;if(R==="text/plain"){var J=g.getType(R);J.then(function(S){S.text().then(function(z){var V=void 0;try{V=JSON.parse(z)}catch(Y){}V&&t().pasteIntoFlow(V)})})}}}catch(S){_.e(S)}finally{_.f()}});case 4:case"end":return c.stop()}},o)}));function e(){return a.apply(this,arguments)}return e}(),pasteIntoFlow:function(e){var o=t(),r=o.yjsDoc,d=o.addEdges,c=o.addNodes,g=o.deselectAll,_=o.selectElements,M={},R={};g(),e.nodes.forEach(function(S){var z=he();M[z]=s()(s()({},S),{},{id:z,position:{x:S.position.x+10,y:S.position.y+10}}),e.edges.forEach(function(V){V.source===S.id&&(V.source=z),V.target===S.id&&(V.target=z)})}),e.edges.forEach(function(S){var z=q(S.source,S.target,S.sourceHandle,S.targetHandle);R[z]=s()(s()({},S),{},{id:z})}),c(M,{recordHistory:!1}),d(R,{recordHistory:!1}),r.recordHistoryData({flattenNodes:t().flattenNodes,flattenEdges:t().flattenEdges},{type:"paste",name:"\u7C98\u8D34",timestamp:Date.now()});var J=Object.keys(M).concat(Object.keys(R));_(J)},undo:function(){var e=t(),o=e.yjsDoc,r=e.internalUpdateEdges,d=e.internalUpdateNodes,c=o.undo(),g=o.getHistoryJSON(),_=g.flattenNodes,M=g.flattenEdges;d(_||{},{type:"history/undo",payload:c}),r(M||{},{type:"history/undo",payload:c})},redo:function(){var e=t(),o=e.yjsDoc,r=e.internalUpdateEdges,d=e.internalUpdateNodes,c=o.redo(),g=o.getHistoryJSON(),_=g.flattenNodes,M=g.flattenEdges;d(_,{type:"history/redo",payload:c}),r(M,{type:"history/redo",payload:c})}}},Ce=function(i){return function(){return s()(s()(s()(s()({},K),{},{yjsDoc:i},ie.apply(void 0,arguments)),_e.apply(void 0,arguments)),ye.apply(void 0,arguments))}},De=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,t=new j;return(0,b.F)()((0,L.v)(i)(Ce(t),{name:"FLOW_EDITOR"}),$.X)},re=(0,H.k)(),Oe=re.Provider,Pe=re.useStore,Me=re.useStoreApi},79810:function(k,w,n){n.d(w,{I:function(){return m},K:function(){return E}});var $=n(26068),b=n.n($),L=n(67825),H=n.n(L),T=n(86674),A=n(50959),x=n(53649),f=n.n(x),D=n(95654),y,B,I,N=(0,D.kc)(function(h){var P=h.css,j=h.token;return{input:P(y||(y=f()([`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms `,`;

    input {
      background: transparent;
    }
  `])),j.motionEaseOut),block:P(B||(B=f()([`
    background-color: `,`;
    border: 1px solid transparent;

    &:hover {
      background-color: `,`;
    }
  `])),j.colorFillTertiary,j.colorFillQuaternary),textarea:P(I||(I=f()([`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms `,`;

    textarea {
      background: transparent;
    }
  `])),j.motionEaseOut)}}),l=n(11527),O=["className","type"],C=["className","type"],m=(0,A.forwardRef)(function(h,P){var j=h.className,u=h.type,s=u===void 0?"ghost":u,K=H()(h,O),v=N(),U=v.styles,F=v.cx;return(0,l.jsx)(T.Z,b()({className:F(U.input,s==="block"&&U.block,j),ref:P},K))}),E=(0,A.memo)((0,A.forwardRef)(function(h,P){var j=h.className,u=h.type,s=u===void 0?"ghost":u,K=H()(h,C),v=N(),U=v.styles,F=v.cx;return(0,l.jsx)(T.Z.TextArea,b()({className:F(U.textarea,s==="block"&&U.block,j),ref:P},K))}))}}]);