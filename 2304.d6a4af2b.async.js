"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[2304],{21989:function(q,C,e){e.d(C,{T:function(){return s.T}});var S=e(26068),c=e.n(S),s=e(79346),d=e(11527);C.Z=function(R){var l=R.gap,_=l===void 0?10:l,T=R.color,L=T===void 0?"#bac3d4":T;return(0,d.jsx)(s.A,c()(c()({},R),{},{gap:_,color:L}))}},51621:function(q,C,e){e.d(C,{Z:function(){return i}});var S=e(26068),c=e.n(S),s=e(75079),d=e(51086),R=e(34e3),l=e(23856),_=e(50959),T=e(73759),L=e(53649),b=e.n(L),F,v,z,P,Z,m,k,I,A,D,H,X,V,B,E=(0,l.kc)(function(r){var t=r.css;return{groupWrap:t(F||(F=b()([`
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
  `]))),btn:t(z||(z=b()([`
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
  `]))),groupItemContent:t(Z||(Z=b()([`
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
  `]))),des:t(k||(k=b()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:t(I||(I=b()([`
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
  `]))),nodeDefault:t(B||(B=b()([""])))}}),o=e(11527),n=function(t){return t.map(function(u){return c()(c()({},u),{},{type:"default",flowNodeType:"BasicNode"})})},p=function(t){var u=E(),g=u.styles,h=t.id,N=t.title,x=t.des,y=t.logo;return(0,o.jsxs)("div",{className:g.groupItemWrap,children:[(0,o.jsx)("img",{src:y,alt:""}),(0,o.jsxs)("div",{className:g.groupItemContent,children:[(0,o.jsx)("div",{className:g.groupItemTitle,children:N}),(0,o.jsx)("div",{className:g.des,children:x})]})]},"".concat(h,"-").concat(N))},f=function(t){var u=t.data,g=E(),h=g.styles,N=u.handleType,x=N===void 0?"both":N,y=u.selectType,a=y===void 0?d.QB.SELECT:y,w=u.zoom,j=w===void 0?1:w,W=u.label,Y=u.data;if(Y.length<5)return(0,o.jsx)("div",{className:h.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E5\uFF01"});var M=n(Y);return(0,o.jsxs)("div",{style:{width:"357px",height:"632px",position:"relative"},children:[x==="output"||x==="both"?(0,o.jsx)(T.HH,{type:"target",position:T.Ly.Left,style:{top:41.5,left:-6}}):null,(0,o.jsxs)("div",{children:[W&&(0,o.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat((0,s.h)(20,j,!0),"px) scale(").concat(1/j,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:j<=.1?"".concat(String(W).substring(0,3),"..."):W}),(0,o.jsxs)("div",{className:(0,l.cx)(h.groupWrap,h[(0,R.X)(a)]),children:[M.map(function(U,ne){var J=U.data;return U.position={x:0,y:100*ne},U.title=J.title,U.logo=J.logo,U.des=J.description,p(U)}),(0,o.jsx)("div",{className:"".concat(h.btnWrap," buttonWrap")}),(0,o.jsxs)("div",{className:h.btn,children:["\u67E5\u770B\u66F4\u591A",(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),x==="input"||x==="both"?(0,o.jsx)(T.HH,{type:"source",position:T.Ly.Right,style:{top:41.5,right:-6}}):null]})},i=f},75079:function(q,C,e){e.d(C,{Z:function(){return V},h:function(){return H}});var S=e(51086),c=e(34e3),s=e(50959),d=e(73759),R=e(53649),l=e.n(R),_=e(23856),T,L,b,F,v,z,P,Z,m,k,I,A=(0,_.kc)(function(B){var E=B.css,o=B.cx,n=B.prefixCls;return{nodeWrap:o("".concat(n,"-xx"),E(T||(T=l()([`
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
  `]))),nodeDanger:E(F||(F=l()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:E(v||(v=l()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:E(z||(z=l()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:E(P||(P=l()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:E(Z||(Z=l()([""]))),titleSlotRight:E(m||(m=l()([`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 13px;
    top: 9px;
  `]))),titleSlotLeft:E(k||(k=l()([`
    width: 28px;
    height: 28px;
    margin-left: 8px;
  `]))),wrap:E(I||(I=l()([`
    width: 320px;
    height: 83px;
    position: relative;
  `])))}}),D=e(11527),H=function(E,o,n){return n&&o>1?E:E/o},X=function(E){var o=E.data,n=A(),p=n.styles,f=n.cx,i=o.title,r=o.logo,t=o.description,u=o.className,g=o.selectType,h=g===void 0?S.QB.SELECT:g,N=o.zoom,x=N===void 0?1:N,y=o.label,a=o.titleSlot,w=o.handleType,j=w===void 0?"both":w;return(0,D.jsxs)("div",{className:p.wrap,children:[j==="output"||j==="both"?(0,D.jsx)(d.HH,{type:"target",position:d.Ly.Left,style:{left:-6}}):null,(0,D.jsxs)("div",{children:[y&&(0,D.jsx)("div",{style:{position:"absolute",zIndex:10,transform:"translate(0, -".concat(H(20,x,!0),"px) scale(").concat(1/x,")"),color:"rgba(0, 0, 0, 0.45)",borderRadius:"4px",fontSize:"".concat(14,"px"),whiteSpace:"nowrap"},children:x<=.1?"".concat(String(y).substring(0,3),"..."):y}),(0,D.jsxs)("div",{className:f(p.nodeWrap,p[(0,c.X)(h)],u),children:[(0,D.jsx)("img",{className:"img",src:r,alt:""}),(0,D.jsxs)("div",{className:"content",children:[(0,D.jsxs)("div",{className:"title",children:[(0,D.jsx)("span",{children:i}),!!a&&!!a.value&&a.type==="left"&&(0,D.jsx)("div",{className:p.titleSlotLeft,children:a.value}),!!a&&!!a.value&&a.type==="right"&&(0,D.jsxs)("div",{className:p.titleSlotLeft,children:[(0,D.jsx)("div",{style:{width:"28px"}}),(0,D.jsx)("div",{className:p.titleSlotRight,children:a.value})]})]}),(0,D.jsx)("div",{className:"des",children:t})]})]})]}),j==="input"||j==="both"?(0,D.jsx)(d.HH,{type:"source",position:d.Ly.Right,style:{right:-6}}):null]})},V=X},12304:function(q,C,e){e.d(C,{Z:function(){return x}});var S=e(26068),c=e.n(S),s=e(50959),d=e(51621),R=e(75079),l=e(73759),_=e(79346),T=e(86752),L=e(56566),b=e(77758),F=e(13180),v=e(21989),z=e(53649),P=e.n(z),Z=e(23856),m=e(51086),k,I,A,D,H,X,V,B,E,o=(0,Z.kc)(function(y){var a=y.css,w=y.cx;return{container:a(k||(k=P()([`
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
  `])),m.$D,m._H,m.ph,m.ph,m.Ts,m.l8,m.H0,m.BP),nodeWrap:w(a(I||(I=P()([`
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
  `]))),nodeDefault:a(E||(E=P()([""])))}}),n=e(11527),p=function(a){var w=a.data,j=o(),W=j.styles,Y=j.cx,M=w.className,U=w.children;return(0,n.jsx)("div",{className:Y(W.nodeWrap,M),children:U})},f=p,i=e(57992),r=(0,s.createContext)({}),t=function(){},u=function(a){var w=a.onNodeDragStart,j=w===void 0?t:w,W=a.onPaneClick,Y=W===void 0?t:W,M=a.onNodeClick,U=M===void 0?t:M,ne=a.onEdgeClick,J=ne===void 0?t:ne,O=a.onNodesChange,ee=O===void 0?t:O,ue=a.onEdgesChange,oe=ue===void 0?t:ue,ae=a.nodes,re=ae===void 0?[]:ae,pe=a.edges,te=pe===void 0?[]:pe,ie=a.nodeTypes,he=ie===void 0?{}:ie,ge=a.edgeTypes,ve=ge===void 0?{}:ge,fe=a.miniMap,xe=fe===void 0?!0:fe,_e=a.children,se=a.background,be=se===void 0?!0:se,$=a.autoLayout,K=$===void 0?!0:$,G=a.stepLessZooming,le=G===void 0?!1:G,Ee=a.flowProps,Ne=a.minZoom,Oe=Ne===void 0?.1:Ne,ye=a.maxZoom,Ce=ye===void 0?2:ye,Te=a.className,Se=a.layoutOptions,De=Se===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:Se,de=(0,s.useContext)(i.b),Pe=de.miniMapPosition,we=de.flowDataAdapter,Ae=de.flowViewRef,Be=de.nodes,Le=de.edges,je=o(),Me=je.styles,Re=je.cx,We=(0,s.useMemo)(function(){return c()(c()({},he),{},{BasicNode:R.Z,BasicNodeGroup:d.Z,default:f})},[]),ze=(0,s.useMemo)(function(){return c()(c()({},ve),{},{radius:L.Z})},[]),Ie=(0,l.Sj)(),me=Ie.zoom;(0,s.useEffect)(function(){var Q=me||1;we(re,te,Q,K,De)},[re,te]),(0,s.useEffect)(function(){le&&we(re,te,me,K,De)},[me]);var Ue=(0,s.useCallback)(function(Q){ee(Q)},[ee]),$e=(0,s.useCallback)(function(Q){oe(Q)},[oe]),Ge=(0,s.useCallback)(function(Q,ce,He){j(Q,ce,He)},[j]),Fe=(0,s.useCallback)(function(){},[]),Ze=(0,s.useCallback)(function(Q){Y(Q)},[Y]),Ke=(0,s.useCallback)(function(Q,ce){U(Q,ce)},[U]),ke=(0,s.useCallback)(function(Q,ce){J(Q,ce)},[J]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.x$,c()(c()({},Ee),{},{ref:Ae,className:Re(Me.container,Te),onNodeDragStart:Ge,onNodeDragStop:Fe,onPaneClick:Ze,onNodeClick:Ke,onEdgeClick:ke,onNodesChange:Ue,onEdgesChange:$e,nodes:Be,edges:Le,nodeTypes:We,edgeTypes:ze,panOnScroll:!0,fitView:!0,minZoom:Oe,maxZoom:Ce,children:[xe&&(0,n.jsx)(b.Z,{language:F.S.zh_CN,position:Pe,className:"pro-flow-controller"}),_e,be&&(0,n.jsx)(v.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:_.T.Dots})]}))})},g=u,h=e(78019),N=function(a){var w=(0,s.useContext)(i.b),j=w.isUseProvider;return j?(0,n.jsx)(g,c()({},a)):(0,n.jsx)(h.G,{children:(0,n.jsx)(g,c()({},a))})},x=N},51086:function(q,C,e){e.d(C,{$D:function(){return P},BP:function(){return z},H0:function(){return v},HM:function(){return _},QB:function(){return S},Ts:function(){return b},Vc:function(){return s},_H:function(){return T},eK:function(){return R},hK:function(){return c},l8:function(){return F},mc:function(){return d},ph:function(){return L},r0:function(){return l}});var S=function(m){return m.SELECT="SELECT",m.SUB_SELECT="SUB_SELECT",m.DANGER="DANGER",m.SUB_DANGER="SUB_DANGER",m.WARNING="WARNING",m.SUB_WARNING="SUB_WARNING",m.DEFAULT="DEFAULT",m}({}),c="nodeSelected",s="nodeSubSelected",d="nodeDanger",R="nodeSubDanger",l="nodeWarning",_="nodeSubWarning",T="edgeSelected",L="edgeSubSelected",b="edgeDanger",F="edgeSubDanger",v="edgeWarning",z="edgeSubWarning",P="initialNode",Z="nodeWrap"},78019:function(q,C,e){e.d(C,{G:function(){return E}});var S=e(15558),c=e.n(S),s=e(26068),d=e.n(s),R=e(48305),l=e.n(R),_=e(50959),T=e(73759),L=e(79511),b=e.n(L),F=e(23856),v=e(51086);function z(o,n,p){var f={};return o.forEach(function(i){var r=i.width,t=i.height,u=i.select,g=u===void 0?v.QB.DEFAULT:u,h=i.type,N=h===void 0?"BasicNode":h,x=i.position,y=x===void 0?{x:NaN,y:NaN}:x;f[i.id]=d()(d()({},i),{},{id:i.id,data:i.data,select:g,type:N,right:[],left:[],position:y,width:r,height:t,zoom:p,label:i.label})}),n.forEach(function(i){var r,t,u=i.source,g=i.target;f[u]&&((r=f[u].right)===null||r===void 0||r.push(g)),f[g]&&((t=f[g].left)===null||t===void 0||t.push(u))}),f}function P(o,n,p,f){if(!p)return{_nodes:o.map(function(r){var t=r.position,u=t.x,g=t.y;return d()(d()({},r),{},{position:{x:isNaN(u)?1:u,y:isNaN(g)?1:g}})}),_edges:n};var i=new(b()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return i.setGraph(d()({rankdir:"LR",align:"UL",nodesep:100,ranksep:200},f)),n.forEach(function(r){return i.setEdge(r.source,r.target)}),o.forEach(function(r){return i.setNode(r.id,r)}),b().layout(i),{_nodes:o.map(function(r){var t=i.node(r.id),u=t.x,g=t.y,h=r.position,N=h.x,x=h.y;return d()(d()({},r),{},{position:{x:isNaN(N)?u:N,y:isNaN(x)?g:x}})}),_edges:n}}function Z(o){var n=o.filter(function(i){var r,t;return((r=i.className)===null||r===void 0?void 0:r.includes("edgeSelected"))||((t=i.className)===null||t===void 0?void 0:t.includes("edgeSubSelected"))}),p=o.filter(function(i){var r,t;return((r=i.className)===null||r===void 0?void 0:r.includes("edgeDanger"))||((t=i.className)===null||t===void 0?void 0:t.includes("edgeSubDanger"))}),f=o.filter(function(i){var r,t,u,g;return!((r=i.className)!==null&&r!==void 0&&r.includes("edgeSelected"))&&!((t=i.className)!==null&&t!==void 0&&t.includes("edgeSubSelected"))&&!((u=i.className)!==null&&u!==void 0&&u.includes("edgeDanger"))&&!((g=i.className)!==null&&g!==void 0&&g.includes("edgeSubDanger"))});return[].concat(c()(f),c()(p),c()(n))}function m(o){switch(o){case v.QB.SELECT:return v._H;case v.QB.SUB_SELECT:return v.ph;case v.QB.DANGER:return v.Ts;case v.QB.SUB_DANGER:return v.l8;case v.QB.WARNING:return v.H0;case v.QB.SUB_WARNING:return v.BP;default:return"edgeDefault"}}function k(o){return o.map(function(n){var p=n.source,f=n.target,i=n.select,r=i===void 0?v.QB.DEFAULT:i,t=n.type,u=t===void 0?"smoothstep":t,g=n.label,h=n.animated,N=n.sourceHandle,x=n.targetHandle,y=n.className,a=n.data,w=n.id,j=w===void 0?"".concat(p,"-").concat(f):w,W=m(r)+" "+y;return d()(d()({},n),{},{id:j,source:p,target:f,sourceHandle:N,targetHandle:x,type:u,animated:h,select:r,label:g,data:d()({select:r,className:W},a),className:W})})}var I=function(n){return n.type==="BasicNode"?{width:320,height:83}:n.type==="BasicNodeGroup"?{width:355,height:1100}:{width:n.width||1,height:n.height||1}},A=function(n){var p,f,i,r;return((p=n.left)===null||p===void 0?void 0:p.length)===0&&((f=n.right)===null||f===void 0?void 0:f.length)===0?"none":((i=n.left)===null||i===void 0?void 0:i.length)===0?"input":((r=n.right)===null||r===void 0?void 0:r.length)===0?"output":"both"},D=function(n){return n.type==="BasicNode"?d()(d()({},n.data),{},{selectType:n.select,label:n.label,zoom:n.zoom,handleType:A(n)}):n.type==="BasicNodeGroup"?{data:n.data,selectType:n.select,label:n.label,zoom:n.zoom,handleType:A(n)}:d()(d()({},n.data),{},{selectType:n.select,zoom:n.zoom,label:n.label})},H=function(n,p,f,i){var r=[],t=k(p);Object.keys(n).forEach(function(N){var x=n[N],y=x.type,a=I(x),w=a.width,j=a.height;r.push(d()(d()({},x),{},{sourcePosition:T.Ly.Right,targetPosition:T.Ly.Left,id:x.id,position:x.position,type:y,width:w,height:j,className:(0,F.cx)(v.$D),data:D(x)}))});var u=P(r,t,f,i),g=u._nodes,h=u._edges;return{nodes:g,edges:Z(h)}},X=e(57992),V=e(11527),B=function(n){var p=n.children,f=(0,_.useState)({x:10,y:10}),i=l()(f,2),r=i[0],t=i[1],u=(0,T._K)(),g=(0,_.useState)([]),h=l()(g,2),N=h[0],x=h[1],y=(0,_.useState)([]),a=l()(y,2),w=a[0],j=a[1],W=(0,_.useState)(void 0),Y=l()(W,2),M=Y[0],U=Y[1],ne=(0,_.useState)({}),J=l()(ne,2),O=J[0],ee=J[1],ue=(0,_.useState)(!0),oe=l()(ue,2),ae=oe[0],re=oe[1],pe=(0,_.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),te=l()(pe,2),ie=te[0],he=te[1],ge=(0,_.useRef)(),ve=(0,_.useCallback)(function(){var $=H(O,M,ae,ie),K=$.nodes,G=$.edges;x(K),j(G)},[O,M,ae,ie]),fe=(0,_.useCallback)(function($,K,G,le,Ee){$.length!==0&&(ee(z($,K,G)),U(K),re(le),he(Ee))},[]);(0,_.useEffect)(function(){Object.keys(O).length&&M&&ve()},[O,M]);var xe=(0,_.useCallback)(function($,K){var G=O[$];G&&(G.select=K,ee(d()({},O)))},[O]),_e=(0,_.useCallback)(function($,K){$.forEach(function(G){xe(G,K)})},[O]),se=(0,_.useCallback)(function($,K){var G=M==null?void 0:M.find(function(le){return le.id===$});G&&(G.select=K,U(c()(M)))},[M]),be=(0,_.useCallback)(function($,K){$.forEach(function(G){se(G,K)})},[O]);return(0,V.jsx)(X.b.Provider,{value:{nodes:N,edges:w,isUseProvider:!0,reactFlowInstance:u,miniMapPosition:r,flowViewRef:ge,setMiniMapPosition:t,flowDataAdapter:fe,updateSelectNode:xe,updateSelectNodes:_e,updateSelectEdge:se,updateSelectEdges:be},children:p})},E=function(n){var p=n.children;return(0,V.jsx)(T.tV,{children:(0,V.jsx)(B,{children:p})})}},57992:function(q,C,e){e.d(C,{b:function(){return c}});var S=e(50959),c=(0,S.createContext)({})},77758:function(q,C,e){var S=e(82092),c=e.n(S),s=e(53649),d=e.n(s),R=e(88025),l=e(57774),_=e(60496),T=e(60909),L=e(84138),b=e(62408),F=e(28426),v=e(83110),z=e(23856),P=e(50959),Z=e(33743),m=e(73759),k=e(54138),I=e(13180),A=e(11527),D,H,X,V=(0,z.kc)(function(o,n){var p=o.css,f=o.token,i=n.x,r=n.y;return{container:p(D||(D=d()([`
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
    `])),r,i,f.colorBorder),visible:p(H||(H=d()([`
      display: none;
    `]))),minimap:p(X||(X=d()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),f.colorBgContainer)}}),B=c()(c()({},I.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),I.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),E=function(n){var p=n.visible,f=p===void 0?!0:p,i=n.className,r=i===void 0?"":i,t=n.position,u=t===void 0?{x:10,y:10}:t,g=n.language,h=g===void 0?I.S.zh_CN:g,N=(0,m._K)(),x=(0,m.Sj)(),y=x.zoom,a=V(u),w=a.styles,j=a.cx,W=a.theme,Y=function(){N.zoomIn()},M=function(){N.zoomOut()},U=function(){N.fitView()},ne=function(){y===1?N.zoomTo(.5):N.zoomTo(1)},J=[{icon:(0,A.jsx)(R.Z,{}),title:B[h].zoomOut,onClick:M},{title:y===1?B[h].zoomTo2:B[h].zoomTo1,onClick:ne,children:Math.round(y*100)+"%",style:{width:56}},{icon:(0,A.jsx)(l.Z,{}),title:B[h].zoomIn,onClick:Y},{icon:(0,A.jsx)(_.Z,{}),title:B[h].zoomFit,onClick:U}];return(0,A.jsxs)(Z.D,{gap:12,align:"center",className:j(w.container,r,!f&&w.visible),children:[(0,A.jsx)(T.ZP,{theme:{algorithm:[W.isDarkMode?L.Z.darkAlgorithm:L.Z.defaultAlgorithm,L.Z.compactAlgorithm]},children:(0,A.jsx)(Z.D,{horizontal:!0,align:"center",children:(0,A.jsx)(b.Z,{className:"actionBox",children:J.map(function(O,ee){return(0,A.jsx)(F.Z,{arrow:!1,title:O.title,children:(0,A.jsx)(v.ZP,{onClick:O.onClick,icon:O.icon,style:O.style,children:O.children})},ee)})})})}),(0,A.jsx)(k.a,{className:w.minimap,maskColor:W.colorBgMask,nodeColor:function(ee){return ee.data.color?ee.data.color:W.colorFill}})]})};C.Z=E},56566:function(q,C,e){e.d(C,{Z:function(){return R}});var S=e(48305),c=e.n(S),s=e(73759),d=e(11527);function R(l){var _=l.sourceX,T=l.sourceY,L=l.targetX,b=l.targetY,F=l.sourcePosition,v=l.targetPosition,z=l.style,P=z===void 0?{}:z,Z=l.markerEnd,m=(0,s.OW)({sourceX:_,sourceY:T,sourcePosition:F,targetX:L,targetY:b,targetPosition:v,borderRadius:50}),k=c()(m,1),I=k[0];return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.u5,{path:I,markerEnd:Z,style:P})})}},13180:function(q,C,e){e.d(C,{Q:function(){return S},S:function(){return c}});var S=function(s){return s.SELECT="SELECT",s.SUB_SELECT="SUB_SELECT",s.DANGER="DANGER",s.SUB_DANGER="SUB_DANGER",s.WARNING="WARNING",s.SUB_WARNING="SUB_WARNING",s.DEFAULT="DEFAULT",s}({}),c=function(s){return s.zh_CN="zh_CN",s.en_US="en_US",s}({})},34e3:function(q,C,e){e.d(C,{X:function(){return s}});var S=e(51086),c=e(13180);function s(d){switch(d){case c.Q.SELECT:return S.hK;case c.Q.SUB_SELECT:return S.Vc;case c.Q.DANGER:return S.mc;case c.Q.SUB_DANGER:return S.eK;case c.Q.WARNING:return S.r0;case c.Q.SUB_WARNING:return S.HM;default:return"nodeDefault"}}}}]);
