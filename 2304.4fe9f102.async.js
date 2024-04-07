"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2304],{21989:function(q,C,n){n.d(C,{T:function(){return s.T}});var S=n(26068),d=n.n(S),s=n(79346),c=n(11527);C.Z=function(R){var l=R.gap,_=l===void 0?10:l,T=R.color,L=T===void 0?"#bac3d4":T;return(0,c.jsx)(s.A,d()(d()({},R),{},{gap:_,color:L}))}},51621:function(q,C,n){n.d(C,{Z:function(){return r}});var S=n(26068),d=n.n(S),s=n(75079),c=n(51086),R=n(34e3),l=n(23856),_=n(50959),T=n(73759),L=n(53649),b=n.n(L),G,v,W,P,F,m,K,z,A,D,H,X,V,B,E=(0,l.kc)(function(i){var t=i.css;return{groupWrap:t(G||(G=b()([`
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
  `]))),groupItemTitle:t(m||(m=b()([`
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
  `]))),nodeWarning:t(X||(X=b()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:t(V||(V=b()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:t(B||(B=b()([""])))}}),o=n(11527),e=function(t){return t.map(function(u){return d()(d()({},u),{},{type:"default",flowNodeType:"BasicNode"})})},p=function(t){var u=E(),g=u.styles,h=t.id,N=t.title,x=t.des,y=t.logo;return(0,o.jsxs)("div",{className:g.groupItemWrap,children:[(0,o.jsx)("img",{src:y,alt:""}),(0,o.jsxs)("div",{className:g.groupItemContent,children:[(0,o.jsx)("div",{className:g.groupItemTitle,children:N}),(0,o.jsx)("div",{className:g.des,children:x})]})]},"".concat(h,"-").concat(N))},f=function(t){var u=t.data,g=E(),h=g.styles,N=u.handleType,x=N===void 0?"both":N,y=u.selectType,a=y===void 0?c.QB.SELECT:y,w=u.zoom,j=w===void 0?1:w,k=u.label,Y=u.data;if(Y.length<5)return(0,o.jsx)("div",{className:h.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E5\uFF01"});var M=e(Y);return(0,o.jsxs)("div",{style:{width:"357px",height:"632px",position:"relative"},children:[x==="output"||x==="both"?(0,o.jsx)(T.HH,{type:"target",position:T.Ly.Left,style:{top:41.5,left:-6}}):null,(0,o.jsxs)("div",{children:[k&&(0,o.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat((0,s.h)(20,j,!0),"px) scale(").concat(1/j,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:j<=.1?"".concat(String(k).substring(0,3),"..."):k}),(0,o.jsxs)("div",{className:(0,l.cx)(h.groupWrap,h[(0,R.X)(a)]),children:[M.map(function(I,en){var J=I.data;return I.position={x:0,y:100*en},I.title=J.title,I.logo=J.logo,I.des=J.description,p(I)}),(0,o.jsx)("div",{className:"".concat(h.btnWrap," buttonWrap")}),(0,o.jsxs)("div",{className:h.btn,children:["\u67E5\u770B\u66F4\u591A",(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),x==="input"||x==="both"?(0,o.jsx)(T.HH,{type:"source",position:T.Ly.Right,style:{top:41.5,right:-6}}):null]})},r=f},75079:function(q,C,n){n.d(C,{Z:function(){return V},h:function(){return H}});var S=n(51086),d=n(34e3),s=n(50959),c=n(73759),R=n(53649),l=n.n(R),_=n(23856),T,L,b,G,v,W,P,F,m,K,z,A=(0,_.kc)(function(B){var E=B.css,o=B.cx,e=B.prefixCls;return{nodeWrap:o("".concat(e,"-xx"),E(T||(T=l()([`
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
  `]))),nodeDefault:E(F||(F=l()([""]))),titleSlotRight:E(m||(m=l()([`
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
  `])))}}),D=n(11527),H=function(E,o,e){return e&&o>1?E:E/o},X=function(E){var o=E.data,e=A(),p=e.styles,f=e.cx,r=o.title,i=o.logo,t=o.description,u=o.className,g=o.selectType,h=g===void 0?S.QB.SELECT:g,N=o.zoom,x=N===void 0?1:N,y=o.label,a=o.titleSlot,w=o.handleType,j=w===void 0?"both":w;return(0,D.jsxs)("div",{className:p.wrap,children:[j==="output"||j==="both"?(0,D.jsx)(c.HH,{type:"target",position:c.Ly.Left,style:{left:-6}}):null,(0,D.jsxs)("div",{children:[y&&(0,D.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat(H(20,x,!0),"px) scale(").concat(1/x,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:x<=.1?"".concat(String(y).substring(0,3),"..."):y}),(0,D.jsxs)("div",{className:f(p.nodeWrap,p[(0,d.X)(h)],u),children:[(0,D.jsx)("img",{className:"img",src:i,alt:""}),(0,D.jsxs)("div",{className:"content",children:[(0,D.jsxs)("div",{className:"title",children:[(0,D.jsx)("span",{children:r}),!!a&&!!a.value&&a.type==="left"&&(0,D.jsx)("div",{className:p.titleSlotLeft,children:a.value}),!!a&&!!a.value&&a.type==="right"&&(0,D.jsxs)("div",{className:p.titleSlotLeft,children:[(0,D.jsx)("div",{style:{width:"28px"}}),(0,D.jsx)("div",{className:p.titleSlotRight,children:a.value})]})]}),(0,D.jsx)("div",{className:"des",children:t})]})]})]}),j==="input"||j==="both"?(0,D.jsx)(c.HH,{type:"source",position:c.Ly.Right,style:{right:-6}}):null]})},V=X},12304:function(q,C,n){n.d(C,{Z:function(){return x}});var S=n(26068),d=n.n(S),s=n(50959),c=n(51621),R=n(75079),l=n(73759),_=n(79346),T=n(86752),L=n(56566),b=n(77758),G=n(13180),v=n(21989),W=n(53649),P=n.n(W),F=n(23856),m=n(51086),K,z,A,D,H,X,V,B,E,o=(0,F.kc)(function(y){var a=y.css,w=y.cx;return{container:a(K||(K=P()([`
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
  `])),m.$D,m._H,m.ph,m.ph,m.Ts,m.l8,m.H0,m.BP),nodeWrap:w(a(z||(z=P()([`
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
  `]))),nodeSubDanger:a(X||(X=P()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(V||(V=P()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(B||(B=P()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(E||(E=P()([""])))}}),e=n(11527),p=function(a){var w=a.data,j=o(),k=j.styles,Y=j.cx,M=w.className,I=w.children;return(0,e.jsx)("div",{className:Y(k.nodeWrap,M),children:I})},f=p,r=n(57992),i=(0,s.createContext)({}),t=function(){},u=function(a){var w=a.onNodeDragStart,j=w===void 0?t:w,k=a.onPaneClick,Y=k===void 0?t:k,M=a.onNodeClick,I=M===void 0?t:M,en=a.onEdgeClick,J=en===void 0?t:en,O=a.onNodesChange,nn=O===void 0?t:O,pn=a.onEdgesChange,on=pn===void 0?t:pn,an=a.nodes,rn=an===void 0?[]:an,gn=a.edges,tn=gn===void 0?[]:gn,sn=a.nodeTypes,vn=sn===void 0?{}:sn,fn=a.edgeTypes,_n=fn===void 0?{}:fn,xn=a.miniMap,mn=xn===void 0?!0:xn,bn=a.children,ln=a.background,En=ln===void 0?!0:ln,U=a.autoLayout,Z=U===void 0?!0:U,$=a.stepLessZooming,dn=$===void 0?!1:$,Nn=a.flowProps,yn=a.minZoom,Cn=yn===void 0?.1:yn,Sn=a.maxZoom,Tn=Sn===void 0?2:Sn,Pn=a.className,Dn=a.layoutOptions,wn=Dn===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:Dn,cn=(0,s.useContext)(r.b),An=cn.miniMapPosition,jn=cn.flowDataAdapter,Bn=cn.flowViewRef,Ln=cn.nodes,Mn=cn.edges,On=o(),Rn=On.styles,Wn=On.cx,zn=(0,s.useMemo)(function(){return d()(d()({},vn),{},{BasicNode:R.Z,BasicNodeGroup:c.Z,default:f})},[]),In=(0,s.useMemo)(function(){return d()(d()({},_n),{},{radius:L.Z})},[]),Un=(0,l.Sj)(),hn=Un.zoom;(0,s.useEffect)(function(){var Q=hn||1;jn(rn,tn,Q,Z,wn)},[rn,tn]),(0,s.useEffect)(function(){dn&&jn(rn,tn,hn,Z,wn)},[hn]);var $n=(0,s.useCallback)(function(Q){nn(Q)},[nn]),Gn=(0,s.useCallback)(function(Q){on(Q)},[on]),Fn=(0,s.useCallback)(function(Q,un,Vn){j(Q,un,Vn)},[j]),Zn=(0,s.useCallback)(function(){},[]),Kn=(0,s.useCallback)(function(Q){Y(Q)},[Y]),kn=(0,s.useCallback)(function(Q,un){I(Q,un)},[I]),Hn=(0,s.useCallback)(function(Q,un){J(Q,un)},[J]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(l.x$,d()(d()({},Nn),{},{ref:Bn,className:Wn(Rn.container,Pn),onNodeDragStart:Fn,onNodeDragStop:Zn,onPaneClick:Kn,onNodeClick:kn,onEdgeClick:Hn,onNodesChange:$n,onEdgesChange:Gn,nodes:Ln,edges:Mn,nodeTypes:zn,edgeTypes:In,panOnScroll:!0,fitView:!0,minZoom:Cn,maxZoom:Tn,children:[mn&&(0,e.jsx)(b.Z,{language:G.S.zh_CN,position:An,className:"pro-flow-controller"}),bn,En&&(0,e.jsx)(v.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:_.T.Dots})]}))})},g=u,h=n(78019),N=function(a){var w=(0,s.useContext)(r.b),j=w.isUseProvider;return j?(0,e.jsx)(g,d()({},a)):(0,e.jsx)(h.G,{children:(0,e.jsx)(g,d()({},a))})},x=N},51086:function(q,C,n){n.d(C,{$D:function(){return P},BP:function(){return W},H0:function(){return v},HM:function(){return _},QB:function(){return S},Ts:function(){return b},Vc:function(){return s},_H:function(){return T},eK:function(){return R},hK:function(){return d},l8:function(){return G},mc:function(){return c},ph:function(){return L},r0:function(){return l}});var S=function(m){return m.SELECT="SELECT",m.SUB_SELECT="SUB_SELECT",m.DANGER="DANGER",m.SUB_DANGER="SUB_DANGER",m.WARNING="WARNING",m.SUB_WARNING="SUB_WARNING",m.DEFAULT="DEFAULT",m}({}),d="nodeSelected",s="nodeSubSelected",c="nodeDanger",R="nodeSubDanger",l="nodeWarning",_="nodeSubWarning",T="edgeSelected",L="edgeSubSelected",b="edgeDanger",G="edgeSubDanger",v="edgeWarning",W="edgeSubWarning",P="initialNode",F="nodeWrap"},78019:function(q,C,n){n.d(C,{G:function(){return E}});var S=n(15558),d=n.n(S),s=n(26068),c=n.n(s),R=n(48305),l=n.n(R),_=n(50959),T=n(73759),L=n(79511),b=n.n(L),G=n(23856),v=n(51086);function W(o,e,p){var f={};return o.forEach(function(r){var i=r.width,t=r.height,u=r.select,g=u===void 0?v.QB.DEFAULT:u,h=r.type,N=h===void 0?"BasicNode":h,x=r.position,y=x===void 0?{x:NaN,y:NaN}:x;f[r.id]=c()(c()({},r),{},{id:r.id,data:r.data,select:g,type:N,right:[],left:[],position:y,width:i,height:t,zoom:p,label:r.label})}),e.forEach(function(r){var i,t,u=r.source,g=r.target;f[u]&&((i=f[u].right)===null||i===void 0||i.push(g)),f[g]&&((t=f[g].left)===null||t===void 0||t.push(u))}),f}function P(o,e,p,f){if(!p)return{_nodes:o.map(function(i){var t=i.position,u=t.x,g=t.y;return c()(c()({},i),{},{position:{x:isNaN(u)?1:u,y:isNaN(g)?1:g}})}),_edges:e};var r=new(b()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return r.setGraph(c()({rankdir:"LR",align:"UL",nodesep:100,ranksep:200},f)),e.forEach(function(i){return r.setEdge(i.source,i.target)}),o.forEach(function(i){return r.setNode(i.id,i)}),b().layout(r),{_nodes:o.map(function(i){var t=r.node(i.id),u=t.x,g=t.y,h=i.position,N=h.x,x=h.y;return c()(c()({},i),{},{position:{x:isNaN(N)?u:N,y:isNaN(x)?g:x}})}),_edges:e}}function F(o){var e=o.filter(function(r){var i,t;return((i=r.className)===null||i===void 0?void 0:i.includes("edgeSelected"))||((t=r.className)===null||t===void 0?void 0:t.includes("edgeSubSelected"))}),p=o.filter(function(r){var i,t;return((i=r.className)===null||i===void 0?void 0:i.includes("edgeDanger"))||((t=r.className)===null||t===void 0?void 0:t.includes("edgeSubDanger"))}),f=o.filter(function(r){var i,t,u,g;return!((i=r.className)!==null&&i!==void 0&&i.includes("edgeSelected"))&&!((t=r.className)!==null&&t!==void 0&&t.includes("edgeSubSelected"))&&!((u=r.className)!==null&&u!==void 0&&u.includes("edgeDanger"))&&!((g=r.className)!==null&&g!==void 0&&g.includes("edgeSubDanger"))});return[].concat(d()(f),d()(p),d()(e))}function m(o){switch(o){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function K(o){return o.map(function(e){var p=e.source,f=e.target,r=e.select,i=r===void 0?v.QB.DEFAULT:r,t=e.type,u=t===void 0?"smoothstep":t,g=e.label,h=e.animated,N=e.sourceHandle,x=e.targetHandle,y=e.className,a=e.data,w=e.id,j=w===void 0?"".concat(p,"-").concat(f):w;return c()(c()({},e),{},{id:j,source:p,target:f,sourceHandle:N,targetHandle:x,type:u,data:a,animated:h,label:g,className:m(i)+" "+y})})}var z=function(e){return e.type==="BasicNode"?{width:320,height:83}:e.type==="BasicNodeGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},A=function(e){var p,f,r,i;return((p=e.left)===null||p===void 0?void 0:p.length)===0&&((f=e.right)===null||f===void 0?void 0:f.length)===0?"none":((r=e.left)===null||r===void 0?void 0:r.length)===0?"input":((i=e.right)===null||i===void 0?void 0:i.length)===0?"output":"both"},D=function(e){return e.type==="BasicNode"?c()(c()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:A(e)}):e.type==="BasicNodeGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:A(e)}:c()(c()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},H=function(e,p,f,r){var i=[],t=K(p);Object.keys(e).forEach(function(N){var x=e[N],y=x.type,a=z(x),w=a.width,j=a.height;i.push(c()(c()({},x),{},{sourcePosition:T.Ly.Right,targetPosition:T.Ly.Left,id:x.id,position:x.position,type:y,width:w,height:j,className:(0,G.cx)(v.$D),data:D(x)}))});var u=P(i,t,f,r),g=u._nodes,h=u._edges;return{nodes:g,edges:F(h)}},X=n(57992),V=n(11527),B=function(e){var p=e.children,f=(0,_.useState)({x:10,y:10}),r=l()(f,2),i=r[0],t=r[1],u=(0,T._K)(),g=(0,_.useState)([]),h=l()(g,2),N=h[0],x=h[1],y=(0,_.useState)([]),a=l()(y,2),w=a[0],j=a[1],k=(0,_.useState)(void 0),Y=l()(k,2),M=Y[0],I=Y[1],en=(0,_.useState)({}),J=l()(en,2),O=J[0],nn=J[1],pn=(0,_.useState)(!0),on=l()(pn,2),an=on[0],rn=on[1],gn=(0,_.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),tn=l()(gn,2),sn=tn[0],vn=tn[1],fn=(0,_.useRef)(),_n=(0,_.useCallback)(function(){var U=H(O,M,an,sn),Z=U.nodes,$=U.edges;x(Z),j($)},[O,M,an,sn]),xn=(0,_.useCallback)(function(U,Z,$,dn,Nn){U.length!==0&&(nn(W(U,Z,$)),I(Z),rn(dn),vn(Nn))},[]);(0,_.useEffect)(function(){Object.keys(O).length&&M&&_n()},[O,M]);var mn=(0,_.useCallback)(function(U,Z){var $=O[U];$&&($.select=Z,nn(c()({},O)))},[O]),bn=(0,_.useCallback)(function(U,Z){U.forEach(function($){mn($,Z)})},[O]),ln=(0,_.useCallback)(function(U,Z){var $=M==null?void 0:M.find(function(dn){return dn.id===U});$&&($.select=Z,I(d()(M)))},[M]),En=(0,_.useCallback)(function(U,Z){U.forEach(function($){ln($,Z)})},[O]);return(0,V.jsx)(X.b.Provider,{value:{nodes:N,edges:w,isUseProvider:!0,reactFlowInstance:u,miniMapPosition:i,flowViewRef:fn,setMiniMapPosition:t,flowDataAdapter:xn,updateSelectNode:mn,updateSelectNodes:bn,updateSelectEdge:ln,updateSelectEdges:En},children:p})},E=function(e){var p=e.children;return(0,V.jsx)(T.tV,{children:(0,V.jsx)(B,{children:p})})}},57992:function(q,C,n){n.d(C,{b:function(){return d}});var S=n(50959),d=(0,S.createContext)({})},77758:function(q,C,n){var S=n(82092),d=n.n(S),s=n(53649),c=n.n(s),R=n(88025),l=n(57774),_=n(60496),T=n(60909),L=n(84138),b=n(62408),G=n(28426),v=n(83110),W=n(23856),P=n(50959),F=n(33743),m=n(73759),K=n(54138),z=n(13180),A=n(11527),D,H,X,V=(0,W.kc)(function(o,e){var p=o.css,f=o.token,r=e.x,i=e.y;return{container:p(D||(D=c()([`
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
    `])),i,r,f.colorBorder),visible:p(H||(H=c()([`
      display: none;
    `]))),minimap:p(X||(X=c()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),f.colorBgContainer)}}),B=d()(d()({},z.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),z.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),E=function(e){var p=e.visible,f=p===void 0?!0:p,r=e.className,i=r===void 0?"":r,t=e.position,u=t===void 0?{x:10,y:10}:t,g=e.language,h=g===void 0?z.S.zh_CN:g,N=(0,m._K)(),x=(0,m.Sj)(),y=x.zoom,a=V(u),w=a.styles,j=a.cx,k=a.theme,Y=function(){N.zoomIn()},M=function(){N.zoomOut()},I=function(){N.fitView()},en=function(){y===1?N.zoomTo(.5):N.zoomTo(1)},J=[{icon:(0,A.jsx)(R.Z,{}),title:B[h].zoomOut,onClick:M},{title:y===1?B[h].zoomTo2:B[h].zoomTo1,onClick:en,children:Math.round(y*100)+"%",style:{width:56}},{icon:(0,A.jsx)(l.Z,{}),title:B[h].zoomIn,onClick:Y},{icon:(0,A.jsx)(_.Z,{}),title:B[h].zoomFit,onClick:I}];return(0,A.jsxs)(F.D,{gap:12,align:"center",className:j(w.container,i,!f&&w.visible),children:[(0,A.jsx)(T.ZP,{theme:{algorithm:[k.isDarkMode?L.Z.darkAlgorithm:L.Z.defaultAlgorithm,L.Z.compactAlgorithm]},children:(0,A.jsx)(F.D,{horizontal:!0,align:"center",children:(0,A.jsx)(b.Z,{className:"actionBox",children:J.map(function(O,nn){return(0,A.jsx)(G.Z,{arrow:!1,title:O.title,children:(0,A.jsx)(v.ZP,{onClick:O.onClick,icon:O.icon,style:O.style,children:O.children})},nn)})})})}),(0,A.jsx)(K.a,{className:w.minimap,maskColor:k.colorBgMask,nodeColor:function(nn){return nn.data.color?nn.data.color:k.colorFill}})]})};C.Z=E},56566:function(q,C,n){n.d(C,{Z:function(){return R}});var S=n(48305),d=n.n(S),s=n(73759),c=n(11527);function R(l){var _=l.sourceX,T=l.sourceY,L=l.targetX,b=l.targetY,G=l.sourcePosition,v=l.targetPosition,W=l.style,P=W===void 0?{}:W,F=l.markerEnd,m=(0,s.OW)({sourceX:_,sourceY:T,sourcePosition:G,targetX:L,targetY:b,targetPosition:v,borderRadius:50}),K=d()(m,1),z=K[0];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.u5,{path:z,markerEnd:F,style:P})})}},13180:function(q,C,n){n.d(C,{Q:function(){return S},S:function(){return d}});var S=function(s){return s.SELECT="SELECT",s.SUB_SELECT="SUB_SELECT",s.DANGER="DANGER",s.SUB_DANGER="SUB_DANGER",s.WARNING="WARNING",s.SUB_WARNING="SUB_WARNING",s.DEFAULT="DEFAULT",s}({}),d=function(s){return s.zh_CN="zh_CN",s.en_US="en_US",s}({})},34e3:function(q,C,n){n.d(C,{X:function(){return s}});var S=n(51086),d=n(13180);function s(c){switch(c){case d.Q.SELECT:return S.hK;case d.Q.SUB_SELECT:return S.Vc;case d.Q.DANGER:return S.mc;case d.Q.SUB_DANGER:return S.eK;case d.Q.WARNING:return S.r0;case d.Q.SUB_WARNING:return S.HM;default:return"nodeDefault"}}}}]);
