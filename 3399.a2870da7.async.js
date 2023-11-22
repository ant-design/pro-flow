"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[3399],{93399:function(oe,K,d){d.d(K,{d:function(){return W}});var T=d(77117),A=d.n(T),$=d(95530),_=d.n($),O=d(80111),R=d(50959),w=d(18463),N=["yjsDoc","flattenEdges","selectedKeys","onFlattenNodesChange","onEdgesChange","onFlattenEdgesChange","onNodesChange","onViewPortChange","onNodesTreeChange","onSelectionChange","onElementSelectChange","updateEdgesOnEdgeChange","updateEdgesOnConnection","internalUpdateEdges","internalUpdateNodes","internalUpdateSelection"],W=function(){var D=(0,w.AC)(),f=D.getState(),Z=f.yjsDoc,L=f.flattenEdges,Q=f.selectedKeys,B=f.onFlattenNodesChange,X=f.onEdgesChange,v=f.onFlattenEdgesChange,x=f.onNodesChange,J=f.onViewPortChange,b=f.onNodesTreeChange,k=f.onSelectionChange,m=f.onElementSelectChange,q=f.updateEdgesOnEdgeChange,ee=f.updateEdgesOnConnection,z=f.internalUpdateEdges,te=f.internalUpdateNodes,M=f.internalUpdateSelection,y=_()(f,N),F=(0,O.Z)(function(){return D.getState().flattenNodes}),H=(0,O.Z)(function(){return D.getState().flattenEdges}),I=(0,O.Z)(function(){return D.getState().selectedKeys});return(0,R.useMemo)(function(){return A()(A()({},y),{},{getFlattenNodes:F,getSelectedKeys:I,getFlattenEdges:H})},[y])}},18463:function(oe,K,d){d.d(K,{zt:function(){return Ce},ze:function(){return Ne},oR:function(){return Se},AC:function(){return Ue}});var T=d(15098),A=d(24975),$=d(24521),_=d(63139),O=d(28152),R=d.n(O),w=d(90696),N=d.n(w),W=d(13762),Y=d.n(W),D=d(41206),f=d.n(D),Z=d(96345),L=d.n(Z),Q=d(15033),B=d.n(Q),X=d(21320),v=d.n(X),x=d(39852),J=L()(function E(s){B()(this,E),v()(this,"type",void 0),v()(this,"name",void 0),v()(this,"timestamp",void 0),this.type=s.type,this.name=s.name,this.timestamp=s.timestamp}),b=function(E){Y()(t,E);var s=f()(t);function t(a){var e;return B()(this,t),e=s.call(this,a),v()(N()(e),"_internalHistoryKey","__INTERNAL_HISTORY_MAP__"),v()(N()(e),"undoManager",void 0),v()(N()(e),"updateHistoryData",function(n){var o=e.getMap(e._internalHistoryKey);Object.entries(n).forEach(function(r){var l=R()(r,2),c=l[0],i=l[1];o.set(c,i)})}),v()(N()(e),"recordHistoryData",function(n,o){e.transact(function(){e.updateHistoryData(n)},new J(o))}),v()(N()(e),"getHistoryMap",function(){return e.getMap(e._internalHistoryKey)}),v()(N()(e),"getHistoryJSON",function(){var n=e.getMap(e._internalHistoryKey);return n.toJSON()}),v()(N()(e),"redo",function(){return e.undoManager.redo()}),v()(N()(e),"undo",function(){return e.undoManager.undo()}),e.undoManager=new x.H6(e.getHistoryMap(),{trackedOrigins:new Set([J])}),e}return L()(t)}(x.QW),k=d(77117),m=d.n(k),q={reactflow:{},flattenNodes:{},flattenEdges:{},selectedKeys:[],yjsDoc:new b},ee=d(95530),z=d.n(ee),te=d(3341),M=d.n(te),y=d(64461),F="$$",H="@@",I=function(s,t){return s+H+(t||"")},ne=function(s,t,a,e){return I(s,a)+F+I(t,e)},De=function(s){var t=s.split(F),a=_slicedToArray(t,2),e=a[0],n=a[1];if(!e||!n)return{source:"",target:"",sourceHandle:"",targetHandle:""};var o=e.split(H),r=_slicedToArray(o,2),l=r[0],c=r[1],i=n.split(H),u=_slicedToArray(i,2),p=u[0],C=u[1];return{source:l,target:p,sourceHandle:c,targetHandle:C}},re=function(s,t){switch(t.type){case"addEdge":return(0,y.Uy)(s,function(a){a[t.edge.id]=t.edge});case"addEdges":return(0,y.Uy)(s,function(a){var e=t.edges;e&&Object.keys(e).forEach(function(n){a[n]||(a[n]=e[n])})});case"updateEdge":return(0,y.Uy)(s,function(a){var e=t.id,n=t.edge;a[e]=m()(m()({},a[e]),n)});case"deleteEdge":return(0,y.Uy)(s,function(a){delete a[t.id]});case"createEdgeFromConnection":return(0,y.Uy)(s,function(a){var e=t.connection,n=e.source,o=e.target,r=e.sourceHandle,l=e.targetHandle;if(!(!n||!o)){var c=ne(n,o,r,l);a[c]={id:c,source:n,target:o,sourceHandle:r,targetHandle:l}}});default:return s}},de=["type"],se=function(s,t){return{internalUpdateEdges:function(e,n){var o,r;s({flattenEdges:e},!1,n),(o=(r=t()).onFlattenEdgesChange)===null||o===void 0||o.call(r,e)},dispatchEdges:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},o=n.recordHistory,r=o===void 0?!0:o,l=e.type,c=z()(e,de),i=re(t().flattenEdges,e);if(!M()(i,t().flattenEdges)){var u=t(),p=u.internalUpdateEdges,C=u.yjsDoc;p(i,{type:"dispatchFlattenEdges/".concat(l),payload:c}),r&&C.recordHistoryData({flattenEdges:i},{type:"edge",name:e.type,timestamp:Date.now()})}},addEdges:function(e,n){t().dispatchEdges({type:"addEdges",edges:e},n)},updateEdgesOnConnection:function(e){t().dispatchEdges({type:"createEdgeFromConnection",connection:e})},updateEdgesOnEdgeChange:function(e){e.forEach(function(n){switch(n.type){case"remove":t().dispatchEdges({type:"deleteEdge",id:n.id})}})}}},le=function(s,t){switch(t.type){case"addNode":return(0,y.Uy)(s,function(a){!t.node||!t.node.id||(a[t.node.id]=t.node)});case"addNodes":return(0,y.Uy)(s,function(a){var e=t.nodes;e&&Object.keys(e).forEach(function(n){a[n]||(a[n]=e[n])})});case"deleteNode":return(0,y.Uy)(s,function(a){delete a[t.id]});case"updateNodePosition":return(0,y.Uy)(s,function(a){a[t.id]&&t.position&&(a[t.id].position=t.position)});case"updateNodeMeta":return(0,y.Uy)(s,function(a){if(a[t.id]){var e=a[t.id];e.data.meta[t.key]=t.value}});case"updateNodeState":return(0,y.Uy)(s,function(a){if(a[t.id]){var e=a[t.id];e.data.state[t.key]=t.value}});case"updateNodeContent":return(0,y.Uy)(s,function(a){var e=t.key,n=t.id,o=t.value;if(a[n]){var r=a[n];r.data.content?r.data.content[e]=o:r.data.content=v()({},e,o)}});default:return s}},ie=["type"],ce=function(s,t){return{internalUpdateNodes:function(e,n){var o,r;M()(e,t().flattenNodes)||(s({flattenNodes:e},!1,n),(o=(r=t()).onFlattenNodesChange)===null||o===void 0||o.call(r,e))},dispatchNodes:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{recordHistory:!0},o=n.recordHistory,r=o===void 0?!0:o,l=e.type,c=z()(e,ie),i=le(t().flattenNodes,e);if(!M()(i,t().flattenNodes)){t().internalUpdateNodes(i,{type:"dispatchFlattenNodes/".concat(l),payload:c});var u=t(),p=u.yjsDoc;r&&p.recordHistoryData({flattenNodes:i},{type:"nodes",name:e.type,timestamp:Date.now()})}},updateNodeMeta:function(e,n,o,r){t().dispatchNodes({type:"updateNodeMeta",id:e,key:n,value:o},r)},updateNodeState:function(e,n,o,r){t().dispatchNodes({type:"updateNodeState",id:e,key:n,value:o},r)},updateNodeContent:function(e,n,o,r){t().dispatchNodes({type:"updateNodeContent",id:e,key:n,value:o},r)},addNode:function(e){t().dispatchNodes({type:"addNode",node:e})},addNodes:function(e,n){t().dispatchNodes({type:"addNodes",nodes:e},n)},deleteNode:function(e){t().dispatchNodes({type:"deleteNode",id:e})}}},ue=d(38887),fe=d.n(ue),ge=d(13448),P=d.n(ge),pe=d(74815),ae=d.n(pe),ye=d(67855),j=d.n(ye),ve=d(67197),Ee=(0,ve.kP)("0123456789abcdefghijklmnopqrstuvwxyz",16),he=function(s,t){return{internalUpdateSelection:function(e,n){var o,r;s({selectedKeys:e},!1,n),(o=(r=t()).onSelectionChange)===null||o===void 0||o.call(r,e)},onElementSelectChange:function(e,n){n?t().selectElement(e):t().deselectElement(e)},actionList:function(){var e=t(),n=e.yjsDoc;return{undo:n.undoManager.undoStack.length,redo:n.undoManager.redoStack.length}},selectElement:function(e){t().selectedKeys.includes(e)||t().internalUpdateSelection([].concat(j()(t().selectedKeys),[e]),{type:"selection/selectElement",payload:{id:e}})},selectElements:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;t().internalUpdateSelection(n?[].concat(j()(t().selectedKeys),j()(e)):e,{type:"selection/selectElements",payload:{ids:e}})},selectAll:function(){var e=t().reactflow.getNodes(),n=t().reactflow.getEdges(),o=[].concat(j()(e.map(function(r){return r.id})),j()(n.map(function(r){return r.id})));t().internalUpdateSelection(o,{type:"selection/selectAll",payload:{ids:o}})},deselectElement:function(e){t().internalUpdateSelection(t().selectedKeys.filter(function(n){return n!==e}),{type:"selection/deselectElement",payload:{id:e}})},deselectAll:function(){t().internalUpdateSelection([],{type:"selection/deselectAll",payload:{}})},deleteSelection:function(){var e=t(),n=e.selectedKeys,o=e.flattenEdges,r=e.flattenNodes,l=e.dispatchNodes,c=e.dispatchEdges;n.forEach(function(i){r[i]&&l({type:"deleteNode",id:i}),o[i]&&c({type:"deleteEdge",id:i})})},copySelection:function(){var a=ae()(P()().mark(function n(){var o,r,l,c,i,u,p,C,g,h;return P()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:if(o=t(),r=o.selectedKeys,l=o.flattenEdges,c=o.flattenNodes,r.length!==0){U.next=3;break}return U.abrupt("return");case 3:return i=Object.values(c).filter(function(V){return r.includes(V.id)}),u=Object.values(l).filter(function(V){return r.includes(V.id)}),p={nodes:i,edges:u},C=new Blob([JSON.stringify(p)],{type:"text/html"}),g=new Blob([JSON.stringify(p)],{type:"text/plain"}),h=new ClipboardItem({"text/html":C,"text/plain":g}),U.next=11,navigator.clipboard.write([h]);case 11:return U.abrupt("return",p);case 12:case"end":return U.stop()}},n)}));function e(){return a.apply(this,arguments)}return e}(),paste:function(){var a=ae()(P()().mark(function n(){var o;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,navigator.clipboard.read();case 2:o=l.sent,o.forEach(function(c){var i=fe()(c.types),u;try{for(i.s();!(u=i.n()).done;){var p=u.value;if(p==="text/plain"){var C=c.getType(p);C.then(function(g){g.text().then(function(h){var S=void 0;try{S=JSON.parse(h)}catch(U){}S&&t().pasteIntoFlow(S)})})}}}catch(g){i.e(g)}finally{i.f()}});case 4:case"end":return l.stop()}},n)}));function e(){return a.apply(this,arguments)}return e}(),pasteIntoFlow:function(e){var n=t(),o=n.yjsDoc,r=n.addEdges,l=n.addNodes,c=n.deselectAll,i=n.selectElements,u={},p={};c(),e.nodes.forEach(function(g){var h=Ee();u[h]=m()(m()({},g),{},{id:h,position:{x:g.position.x+10,y:g.position.y+10}}),e.edges.forEach(function(S){S.source===g.id&&(S.source=h),S.target===g.id&&(S.target=h)})}),e.edges.forEach(function(g){var h=ne(g.source,g.target,g.sourceHandle,g.targetHandle);p[h]=m()(m()({},g),{},{id:h})}),l(u,{recordHistory:!1}),r(p,{recordHistory:!1}),o.recordHistoryData({flattenNodes:t().flattenNodes,flattenEdges:t().flattenEdges},{type:"paste",name:"\u7C98\u8D34",timestamp:Date.now()});var C=Object.keys(u).concat(Object.keys(p));i(C)},undo:function(){var e=t(),n=e.yjsDoc,o=e.internalUpdateEdges,r=e.internalUpdateNodes,l=n.undo(),c=n.getHistoryJSON(),i=c.flattenNodes,u=c.flattenEdges;r(i,{type:"history/undo",payload:l}),o(u,{type:"history/undo",payload:l})},redo:function(){var e=t(),n=e.yjsDoc,o=e.internalUpdateEdges,r=e.internalUpdateNodes,l=n.redo(),c=n.getHistoryJSON(),i=c.flattenNodes,u=c.flattenEdges;r(i,{type:"history/redo",payload:l}),o(u,{type:"history/redo",payload:l})}}},me=function(s){return function(){return m()(m()(m()(m()({},q),{},{yjsDoc:s},se.apply(void 0,arguments)),ce.apply(void 0,arguments)),he.apply(void 0,arguments))}},Ne=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=new b;return(0,A.F)()((0,$.v)(s)(me(t),{name:"FLOW_EDITOR"}),T.X)},G=(0,_.k)(),Ce=G.Provider,Se=G.useStore,Ue=G.useStoreApi}}]);
