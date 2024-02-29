"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[3268],{1067:function(q,C,n){n.d(C,{T:function(){return s.T}});var S=n(26068),d=n.n(S),s=n(86050),g=n(11527);C.Z=function(R){var l=R.gap,_=l===void 0?10:l,T=R.color,L=T===void 0?"#bac3d4":T;return(0,g.jsx)(s.A,d()(d()({},R),{},{gap:_,color:L}))}},45562:function(q,C,n){n.d(C,{Z:function(){return r}});var S=n(26068),d=n.n(S),s=n(15909),g=n(23628),R=n(56525),l=n(61203),_=n(50959),T=n(20510),L=n(53649),b=n.n(L),G,v,W,P,F,x,K,z,A,D,H,Q,V,B,E=(0,l.kc)(function(i){var t=i.css;return{groupWrap:t(G||(G=b()([`
    width: 355px;
    height: 614px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    overflow: hidden;
    background-color: #fafafa;
    position: absolute;
    z-index: 10;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
  `]))),btnWrap:t(v||(v=b()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:t(W||(W=b()([`
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
    text-align: center;

    img {
      width: 14px;
      height: 14px;
      margin-left: 4px;
      transform: translateY(2px);
    }
  `]))),groupItemWrap:t(P||(P=b()([`
    display: flex;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 16px 12px;
    background: #fff;
    margin-bottom: 26px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

    &:last-child {
      opacity: 0.5;
    }

    img {
      width: 48px;
      height: 48px;
    }
  `]))),groupItemContent:t(F||(F=b()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:t(x||(x=b()([`
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
  `]))),des:t(K||(K=b()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:t(z||(z=b()([`
    background-color: #ecf3fe;
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;

    .buttonWrap {
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 11;
      opacity: 0.7;
      background-color: #ecf3fe;
    }
  `]))),nodeSubSelected:t(A||(A=b()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
    background-color: #ecf3fe;

    .buttonWrap {
      width: 100%;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 11;
      opacity: 0.7;
      background-color: #ecf3fe;
    }
  `]))),nodeDanger:t(D||(D=b()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:t(H||(H=b()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:t(Q||(Q=b()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(V||(V=b()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(B||(B=b()([""])))}}),o=n(11527),e=function(t){return t.map(function(c){return d()(d()({},c),{},{type:"default",flowNodeType:"BasicNode"})})},u=function(t){var c=E(),p=c.styles,m=t.id,N=t.title,h=t.des,y=t.logo;return(0,o.jsxs)("div",{className:p.groupItemWrap,children:[(0,o.jsx)("img",{src:y,alt:""}),(0,o.jsxs)("div",{className:p.groupItemContent,children:[(0,o.jsx)("div",{className:p.groupItemTitle,children:N}),(0,o.jsx)("div",{className:p.des,children:h})]})]},"".concat(m,"-").concat(N))},f=function(t){var c=t.data,p=E(),m=p.styles,N=c.handleType,h=N===void 0?"both":N,y=c.selectType,a=y===void 0?g.QB.SELECT:y,w=c.zoom,j=w===void 0?1:w,k=c.label,X=c.data;if(X.length<5)return(0,o.jsx)("div",{className:m.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E5\uFF01"});var M=e(X);return(0,o.jsxs)("div",{style:{width:"357px",height:"632px",position:"relative"},children:[h==="output"||h==="both"?(0,o.jsx)(T.HH,{type:"target",position:T.Ly.Left,style:{top:41.5,left:-6}}):null,(0,o.jsxs)("div",{children:[k&&(0,o.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat((0,s.h)(20,j,!0),"px) scale(").concat(1/j,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:j<=.1?"".concat(String(k).substring(0,3),"..."):k}),(0,o.jsxs)("div",{className:(0,l.cx)(m.groupWrap,m[(0,R.X)(a)]),children:[M.map(function(I,en){var Y=I.data;return I.position={x:0,y:100*en},I.title=Y.title,I.logo=Y.logo,I.des=Y.description,u(I)}),(0,o.jsx)("div",{className:"".concat(m.btnWrap," buttonWrap")}),(0,o.jsxs)("div",{className:m.btn,children:["\u67E5\u770B\u66F4\u591A",(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),h==="input"||h==="both"?(0,o.jsx)(T.HH,{type:"source",position:T.Ly.Right,style:{top:41.5,right:-6}}):null]})},r=f},15909:function(q,C,n){n.d(C,{Z:function(){return V},h:function(){return H}});var S=n(23628),d=n(56525),s=n(50959),g=n(20510),R=n(53649),l=n.n(R),_=n(61203),T,L,b,G,v,W,P,F,x,K,z,A=(0,_.kc)(function(B){var E=B.css,o=B.cx,e=B.prefixCls;return{nodeWrap:o("".concat(e,"-xx"),E(T||(T=l()([`
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 8px;
      padding: 16px 12px;
      box-sizing: border-box;
      /* border: 3px solid white; */
      flex: 1;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

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
            display: flex;
            justify-content: center;
            align-items: center;
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
    `])))),nodeSelected:E(L||(L=l()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:E(b||(b=l()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:E(G||(G=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:E(v||(v=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:E(W||(W=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:E(P||(P=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:E(F||(F=l()([""]))),titleSlotRight:E(x||(x=l()([`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 13px;
    top: 9px;
  `]))),titleSlotLeft:E(K||(K=l()([`
    width: 28px;
    height: 28px;
    margin-left: 8px;
  `]))),wrap:E(z||(z=l()([`
    width: 320px;
    height: 83px;
    position: relative;
  `])))}}),D=n(11527),H=function(E,o,e){return e&&o>1?E:E/o},Q=function(E){var o=E.data,e=A(),u=e.styles,f=e.cx,r=o.title,i=o.logo,t=o.description,c=o.className,p=o.selectType,m=p===void 0?S.QB.SELECT:p,N=o.zoom,h=N===void 0?1:N,y=o.label,a=o.titleSlot,w=o.handleType,j=w===void 0?"both":w;return(0,D.jsxs)("div",{className:u.wrap,children:[j==="output"||j==="both"?(0,D.jsx)(g.HH,{type:"target",position:g.Ly.Left,style:{left:-6}}):null,(0,D.jsxs)("div",{children:[y&&(0,D.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat(H(20,h,!0),"px) scale(").concat(1/h,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:h<=.1?"".concat(String(y).substring(0,3),"..."):y}),(0,D.jsxs)("div",{className:f(u.nodeWrap,u[(0,d.X)(m)],c),children:[(0,D.jsx)("img",{className:"img",src:i,alt:""}),(0,D.jsxs)("div",{className:"content",children:[(0,D.jsxs)("div",{className:"title",children:[(0,D.jsx)("span",{children:r}),!!a&&!!a.value&&a.type==="left"&&(0,D.jsx)("div",{className:u.titleSlotLeft,children:a.value}),!!a&&!!a.value&&a.type==="right"&&(0,D.jsxs)("div",{className:u.titleSlotLeft,children:[(0,D.jsx)("div",{style:{width:"28px"}}),(0,D.jsx)("div",{className:u.titleSlotRight,children:a.value})]})]}),(0,D.jsx)("div",{className:"des",children:t})]})]})]}),j==="input"||j==="both"?(0,D.jsx)(g.HH,{type:"source",position:g.Ly.Right,style:{right:-6}}):null]})},V=Q},3268:function(q,C,n){n.d(C,{Z:function(){return h}});var S=n(26068),d=n.n(S),s=n(50959),g=n(45562),R=n(15909),l=n(20510),_=n(86050),T=n(89631),L=n(90248),b=n(6875),G=n(3934),v=n(1067),W=n(53649),P=n.n(W),F=n(61203),x=n(23628),K,z,A,D,H,Q,V,B,E,o=(0,F.kc)(function(y){var a=y.css,w=y.cx;return{container:a(K||(K=P()([`
    width: 100%;
    height: 100%;

    .react-flow__attribution {
      display: none;
    }

    .`,` {
      padding: 0;
      box-sizing: border-box;
      border: none;
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
      stroke: #1677ff;
      stroke-width: 1;
      z-index: 100;
    }

    .`,`:hover path {
      stroke: red;
      stroke-width: 1;
      z-index: 100;
    }

    .`,` path {
      stroke: #f7636e;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #f7636e;
      stroke-width: 1;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 2;
      z-index: 100;
    }

    .`,` path {
      stroke: #ef9d3b;
      stroke-width: 1;
      z-index: 100;
    }

    .selectable:focus {
      box-shadow: none !important;
    }

    .selected {
      box-shadow: none !important;
    }
  `])),x.$D,x._H,x.ph,x.ph,x.Ts,x.l8,x.H0,x.BP),nodeWrap:w(a(z||(z=P()([`
      display: flex;
      z-index: 10 !important;
      position: absolute;
      border-radius: 8px;
      padding: 16px 12px;
      box-sizing: border-box;
      /* border: 3px solid white; */
      flex: 1;
      background: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0 4px 6px -2px rgba(25, 15, 15, 0.05), 0 0 1px 0 rgba(0, 0, 0, 0.08);

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
            display: flex;
            justify-content: center;
            align-items: center;
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
    `])))),nodeSelected:a(A||(A=P()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:a(D||(D=P()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:a(H||(H=P()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(Q||(Q=P()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(V||(V=P()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(B||(B=P()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(E||(E=P()([""])))}}),e=n(11527),u=function(a){var w=a.data,j=o(),k=j.styles,X=j.cx,M=w.className,I=w.children;return(0,e.jsx)("div",{className:X(k.nodeWrap,M),children:I})},f=u,r=n(77941),i=(0,s.createContext)({}),t=function(){},c=function(a){var w=a.onNodeDragStart,j=w===void 0?t:w,k=a.onPaneClick,X=k===void 0?t:k,M=a.onNodeClick,I=M===void 0?t:M,en=a.onEdgeClick,Y=en===void 0?t:en,O=a.onNodesChange,nn=O===void 0?t:O,pn=a.onEdgesChange,on=pn===void 0?t:pn,an=a.nodes,rn=an===void 0?[]:an,gn=a.edges,tn=gn===void 0?[]:gn,sn=a.nodeTypes,hn=sn===void 0?{}:sn,xn=a.edgeTypes,vn=xn===void 0?{}:xn,fn=a.miniMap,mn=fn===void 0?!0:fn,_n=a.children,ln=a.background,bn=ln===void 0?!0:ln,U=a.autoLayout,Z=U===void 0?!0:U,$=a.stepLessZooming,dn=$===void 0?!1:$,En=a.flowProps,Nn=a.minZoom,Cn=Nn===void 0?.1:Nn,yn=a.maxZoom,Tn=yn===void 0?2:yn,Pn=a.className,Sn=a.layoutOptions,Dn=Sn===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:Sn,cn=(0,s.useContext)(r.b),An=cn.miniMapPosition,wn=cn.flowDataAdapter,Bn=cn.flowViewRef,Ln=cn.nodes,Mn=cn.edges,jn=o(),Rn=jn.styles,Wn=jn.cx,zn=(0,s.useMemo)(function(){return d()(d()({},hn),{},{BasicNode:R.Z,BasicNodeGroup:g.Z,default:f})},[]),In=(0,s.useMemo)(function(){return d()(d()({},vn),{},{radius:L.Z})},[]),Un=(0,l.Sj)(),On=Un.zoom;(0,s.useEffect)(function(){wn(rn,tn,1,Z,Dn)},[rn,tn]),(0,s.useEffect)(function(){dn&&wn(rn,tn,On,Z,Dn)},[On]);var $n=(0,s.useCallback)(function(J){nn(J)},[nn]),Gn=(0,s.useCallback)(function(J){on(J)},[on]),Fn=(0,s.useCallback)(function(J,un,Vn){j(J,un,Vn)},[j]),Zn=(0,s.useCallback)(function(){},[]),Kn=(0,s.useCallback)(function(J){X(J)},[X]),kn=(0,s.useCallback)(function(J,un){I(J,un)},[I]),Hn=(0,s.useCallback)(function(J,un){Y(J,un)},[Y]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(l.x$,d()(d()({ref:Bn,className:Wn(Rn.container,Pn),onNodeDragStart:Fn,onNodeDragStop:Zn,onPaneClick:Kn,onNodeClick:kn,onEdgeClick:Hn,onNodesChange:$n,onEdgesChange:Gn,nodes:Ln,edges:Mn,nodeTypes:zn,edgeTypes:In,panOnScroll:!0,fitView:!0,minZoom:Cn,maxZoom:Tn},En),{},{children:[mn&&(0,e.jsx)(b.Z,{language:G.S.zh_CN,position:An,className:"pro-flow-controller"}),_n,bn&&(0,e.jsx)(v.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:_.T.Dots})]}))})},p=c,m=n(94770),N=function(a){var w=(0,s.useContext)(r.b),j=w.isUseProvider;return j?(0,e.jsx)(p,d()({},a)):(0,e.jsx)(m.G,{children:(0,e.jsx)(p,d()({},a))})},h=N},23628:function(q,C,n){n.d(C,{$D:function(){return P},BP:function(){return W},H0:function(){return v},HM:function(){return _},QB:function(){return S},Ts:function(){return b},Vc:function(){return s},_H:function(){return T},eK:function(){return R},hK:function(){return d},l8:function(){return G},mc:function(){return g},ph:function(){return L},r0:function(){return l}});var S=function(x){return x.SELECT="SELECT",x.SUB_SELECT="SUB_SELECT",x.DANGER="DANGER",x.SUB_DANGER="SUB_DANGER",x.WARNING="WARNING",x.SUB_WARNING="SUB_WARNING",x.DEFAULT="DEFAULT",x}({}),d="nodeSelected",s="nodeSubSelected",g="nodeDanger",R="nodeSubDanger",l="nodeWarning",_="nodeSubWarning",T="edgeSelected",L="edgeSubSelected",b="edgeDanger",G="edgeSubDanger",v="edgeWarning",W="edgeSubWarning",P="initialNode",F="nodeWrap"},94770:function(q,C,n){n.d(C,{G:function(){return E}});var S=n(15558),d=n.n(S),s=n(26068),g=n.n(s),R=n(48305),l=n.n(R),_=n(50959),T=n(20510),L=n(79511),b=n.n(L),G=n(61203),v=n(23628);function W(o,e,u){var f={};return o.forEach(function(r){var i=r.width,t=r.height,c=r.select,p=c===void 0?v.QB.DEFAULT:c,m=r.type,N=m===void 0?"BasicNode":m,h=r.position,y=h===void 0?{x:NaN,y:NaN}:h;f[r.id]={id:r.id,data:r.data,select:p,type:N,right:[],left:[],position:y,width:i,height:t,zoom:u,label:r.label}}),e.forEach(function(r){var i,t,c=r.source,p=r.target;(i=f[c].right)===null||i===void 0||i.push(p),(t=f[p].left)===null||t===void 0||t.push(c)}),f}function P(o,e,u,f){if(!u)return{_nodes:o.map(function(i){var t=i.position,c=t.x,p=t.y;return g()(g()({},i),{},{position:{x:isNaN(c)?1:c,y:isNaN(p)?1:p}})}),_edges:e};var r=new(b()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return r.setGraph(g()({},f)),e.forEach(function(i){return r.setEdge(i.source,i.target)}),o.forEach(function(i){return r.setNode(i.id,i)}),b().layout(r),{_nodes:o.map(function(i){var t=r.node(i.id),c=t.x,p=t.y,m=i.position,N=m.x,h=m.y;return g()(g()({},i),{},{position:{x:isNaN(N)?c:N,y:isNaN(h)?p:h}})}),_edges:e}}function F(o){var e=o.filter(function(r){var i,t;return((i=r.className)===null||i===void 0?void 0:i.includes("edgeSelected"))||((t=r.className)===null||t===void 0?void 0:t.includes("edgeSubSelected"))}),u=o.filter(function(r){var i,t;return((i=r.className)===null||i===void 0?void 0:i.includes("edgeDanger"))||((t=r.className)===null||t===void 0?void 0:t.includes("edgeSubDanger"))}),f=o.filter(function(r){var i,t,c,p;return!((i=r.className)!==null&&i!==void 0&&i.includes("edgeSelected"))&&!((t=r.className)!==null&&t!==void 0&&t.includes("edgeSubSelected"))&&!((c=r.className)!==null&&c!==void 0&&c.includes("edgeDanger"))&&!((p=r.className)!==null&&p!==void 0&&p.includes("edgeSubDanger"))});return[].concat(d()(f),d()(u),d()(e))}function x(o){switch(o){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function K(o){return o.map(function(e){var u=e.source,f=e.target,r=e.select,i=r===void 0?v.QB.DEFAULT:r,t=e.type,c=t===void 0?"smoothstep":t,p=e.label,m=e.animated,N=e.sourceHandle,h=e.targetHandle,y=e.className,a=e.data,w=e.id,j=w===void 0?"".concat(u,"-").concat(f):w;return{id:j,source:u,target:f,sourceHandle:N,targetHandle:h,type:c,data:a,animated:m,label:p,className:x(i)+" "+y}})}var z=function(e){return e.type==="BasicNode"?{width:320,height:83}:e.type==="BasicNodeGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},A=function(e){var u,f,r,i;return((u=e.left)===null||u===void 0?void 0:u.length)===0&&((f=e.right)===null||f===void 0?void 0:f.length)===0?"none":((r=e.left)===null||r===void 0?void 0:r.length)===0?"input":((i=e.right)===null||i===void 0?void 0:i.length)===0?"output":"both"},D=function(e){return e.type==="BasicNode"?g()(g()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:A(e)}):e.type==="BasicNodeGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:A(e)}:g()(g()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},H=function(e,u,f,r){var i=[],t=K(u);Object.keys(e).forEach(function(N){var h=e[N],y=h.type,a=z(h),w=a.width,j=a.height;i.push({sourcePosition:T.Ly.Right,targetPosition:T.Ly.Left,id:h.id,position:h.position,type:y,width:w,height:j,className:(0,G.cx)(v.$D),data:D(h)})});var c=P(i,t,f,r),p=c._nodes,m=c._edges;return{nodes:p,edges:F(m)}},Q=n(77941),V=n(11527),B=function(e){var u=e.children,f=(0,_.useState)({x:10,y:10}),r=l()(f,2),i=r[0],t=r[1],c=(0,T._K)(),p=(0,_.useState)([]),m=l()(p,2),N=m[0],h=m[1],y=(0,_.useState)([]),a=l()(y,2),w=a[0],j=a[1],k=(0,_.useState)(void 0),X=l()(k,2),M=X[0],I=X[1],en=(0,_.useState)({}),Y=l()(en,2),O=Y[0],nn=Y[1],pn=(0,_.useState)(!0),on=l()(pn,2),an=on[0],rn=on[1],gn=(0,_.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),tn=l()(gn,2),sn=tn[0],hn=tn[1],xn=(0,_.useRef)(),vn=(0,_.useCallback)(function(){var U=H(O,M,an,sn),Z=U.nodes,$=U.edges;h(Z),j($)},[O,M,an,sn]),fn=(0,_.useCallback)(function(U,Z,$,dn,En){U.length!==0&&(nn(W(U,Z,$)),I(Z),rn(dn),hn(En))},[]);(0,_.useEffect)(function(){Object.keys(O).length&&M&&vn()},[O,M]);var mn=(0,_.useCallback)(function(U,Z){var $=O[U];$&&($.select=Z,nn(g()({},O)))},[O]),_n=(0,_.useCallback)(function(U,Z){U.forEach(function($){mn($,Z)})},[O]),ln=(0,_.useCallback)(function(U,Z){var $=M==null?void 0:M.find(function(dn){return dn.id===U});$&&($.select=Z,I(d()(M)))},[M]),bn=(0,_.useCallback)(function(U,Z){U.forEach(function($){ln($,Z)})},[O]);return(0,V.jsx)(Q.b.Provider,{value:{nodes:N,edges:w,isUseProvider:!0,reactFlowInstance:c,miniMapPosition:i,flowViewRef:xn,setMiniMapPosition:t,flowDataAdapter:fn,updateSelectNode:mn,updateSelectNodes:_n,updateSelectEdge:ln,updateSelectEdges:bn},children:u})},E=function(e){var u=e.children;return(0,V.jsx)(T.tV,{children:(0,V.jsx)(B,{children:u})})}},77941:function(q,C,n){n.d(C,{b:function(){return d}});var S=n(50959),d=(0,S.createContext)({})},6875:function(q,C,n){var S=n(82092),d=n.n(S),s=n(53649),g=n.n(s),R=n(64997),l=n(27026),_=n(52228),T=n(30614),L=n(24286),b=n(56896),G=n(34144),v=n(26820),W=n(61203),P=n(50959),F=n(24819),x=n(20510),K=n(1201),z=n(3934),A=n(11527),D,H,Q,V=(0,W.kc)(function(o,e){var u=o.css,f=o.token,r=e.x,i=e.y;return{container:u(D||(D=g()([`
      position: absolute;
      bottom: `,`px;
      right: `,`px;
      z-index: 100;
      transition: right 0.2s ease;

      .actionBox {
        width: 192px;
        height: 38px;
        display: flex;
        justify-content: space-evenly;
      }

      .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
        border-color: `,`;
      }
    `])),i,r,f.colorBorder),visible:u(H||(H=g()([`
      display: none;
    `]))),minimap:u(Q||(Q=g()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),f.colorBgContainer)}}),B=d()(d()({},z.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),z.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),E=function(e){var u=e.visible,f=u===void 0?!0:u,r=e.className,i=r===void 0?"":r,t=e.position,c=t===void 0?{x:10,y:10}:t,p=e.language,m=p===void 0?z.S.zh_CN:p,N=(0,x._K)(),h=(0,x.Sj)(),y=h.zoom,a=V(c),w=a.styles,j=a.cx,k=a.theme,X=function(){N.zoomIn()},M=function(){N.zoomOut()},I=function(){N.fitView()},en=function(){y===1?N.zoomTo(.5):N.zoomTo(1)},Y=[{icon:(0,A.jsx)(R.Z,{}),title:B[m].zoomOut,onClick:M},{title:y===1?B[m].zoomTo2:B[m].zoomTo1,onClick:en,children:Math.round(y*100)+"%",style:{width:56}},{icon:(0,A.jsx)(l.Z,{}),title:B[m].zoomIn,onClick:X},{icon:(0,A.jsx)(_.Z,{}),title:B[m].zoomFit,onClick:I}];return(0,A.jsxs)(F.D,{gap:12,align:"center",className:j(w.container,i,!f&&w.visible),children:[(0,A.jsx)(T.ZP,{theme:{algorithm:[k.isDarkMode?L.Z.darkAlgorithm:L.Z.defaultAlgorithm,L.Z.compactAlgorithm]},children:(0,A.jsx)(F.D,{horizontal:!0,align:"center",children:(0,A.jsx)(b.Z,{className:"actionBox",children:Y.map(function(O,nn){return(0,A.jsx)(G.Z,{arrow:!1,title:O.title,children:(0,A.jsx)(v.ZP,{onClick:O.onClick,icon:O.icon,style:O.style,children:O.children})},nn)})})})}),(0,A.jsx)(K.a,{className:w.minimap,maskColor:k.colorBgMask,nodeColor:function(nn){return nn.data.color?nn.data.color:k.colorFill}})]})};C.Z=E},90248:function(q,C,n){n.d(C,{Z:function(){return R}});var S=n(48305),d=n.n(S),s=n(20510),g=n(11527);function R(l){var _=l.sourceX,T=l.sourceY,L=l.targetX,b=l.targetY,G=l.sourcePosition,v=l.targetPosition,W=l.style,P=W===void 0?{}:W,F=l.markerEnd,x=(0,s.OW)({sourceX:_,sourceY:T,sourcePosition:G,targetX:L,targetY:b,targetPosition:v,borderRadius:50}),K=d()(x,1),z=K[0];return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(s.u5,{path:z,markerEnd:F,style:P})})}},3934:function(q,C,n){n.d(C,{Q:function(){return S},S:function(){return d}});var S=function(s){return s.SELECT="SELECT",s.SUB_SELECT="SUB_SELECT",s.DANGER="DANGER",s.SUB_DANGER="SUB_DANGER",s.WARNING="WARNING",s.SUB_WARNING="SUB_WARNING",s.DEFAULT="DEFAULT",s}({}),d=function(s){return s.zh_CN="zh_CN",s.en_US="en_US",s}({})},56525:function(q,C,n){n.d(C,{X:function(){return s}});var S=n(23628),d=n(3934);function s(g){switch(g){case d.Q.SELECT:return S.hK;case d.Q.SUB_SELECT:return S.Vc;case d.Q.DANGER:return S.mc;case d.Q.SUB_DANGER:return S.eK;case d.Q.WARNING:return S.r0;case d.Q.SUB_WARNING:return S.HM;default:return"nodeDefault"}}}}]);
