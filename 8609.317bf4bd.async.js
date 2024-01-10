"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[8609],{44433:function(q,w,n){n.d(w,{T:function(){return l.T}});var D=n(26068),i=n.n(D),l=n(41533),d=n(11527);w.Z=function(M){var p=M.gap,_=p===void 0?10:p,A=M.color,L=A===void 0?"#bac3d4":A;return(0,d.jsx)(l.A,i()(i()({},M),{},{gap:_,color:L}))}},14876:function(q,w,n){n.d(w,{Z:function(){return E}});var D=n(26068),i=n.n(D),l=n(53649),d=n.n(l),M=n(67248),p=n(37763),_=n(19601),A=n(95654),L=n(50959),B=n(54733),F=n(2956),b,R,C,$,f,K,W,P,Q,S,H,k,z,Y,m=(0,A.kc)(function(g){var s=g.css;return{groupWrap:s(b||(b=d()([`
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
  `]))),btnWrap:s(R||(R=d()([`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
    background-color: #fefefe;
    opacity: 0.7;
  `]))),btn:s(C||(C=d()([`
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
  `]))),groupItemWrap:s($||($=d()([`
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
  `]))),groupItemContent:s(f||(f=d()([`
    width: 230px;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `]))),groupItemTitle:s(K||(K=d()([`
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
  `]))),des:s(W||(W=d()([`
    font-size: 14px;
    color: rgba(0, 0, 0, 45%);
    line-height: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin-top: 11px;
  `]))),nodeSelected:s(P||(P=d()([`
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
  `]))),nodeSubSelected:s(Q||(Q=d()([`
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
  `]))),nodeDanger:s(S||(S=d()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:s(H||(H=d()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:s(k||(k=d()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:s(z||(z=d()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:s(Y||(Y=d()([""])))}}),e=n(11527),o,c=F.ZP.div(o||(o=d()([`
  width: 357px;
  height: 632px;
  position: relative;
`]))),t=function(s){return s.map(function(x){return i()(i()({},x),{},{type:"default",flowNodeType:"BasicNode"})})},r=function(s){var x=m(),N=x.styles,y=s.id,a=s.title,v=s.des,j=s.logo;return(0,e.jsxs)("div",{className:N.groupItemWrap,children:[(0,e.jsx)("img",{src:j,alt:""}),(0,e.jsxs)("div",{className:N.groupItemContent,children:[(0,e.jsx)("div",{className:N.groupItemTitle,children:a}),(0,e.jsx)("div",{className:N.des,children:v})]})]},"".concat(y,"-").concat(a))},u=function(s){var x=s.data,N=m(),y=N.styles,a=x.handleType,v=a===void 0?"both":a,j=x.selectType,T=j===void 0?p.QB.SELECT:j,G=x.zoom,O=G===void 0?1:G,V=x.label,nn=x.data;if(nn.length<5)return(0,e.jsx)("div",{className:y.groupWrap,children:"\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E5\uFF01"});var en=t(nn);return(0,e.jsxs)(c,{children:[v==="output"||v==="both"?(0,e.jsx)(B.HH,{type:"target",position:B.Ly.Left,style:{top:41.5,left:-6}}):null,(0,e.jsxs)("div",{children:[V&&(0,e.jsx)(M.W,{zoom:O,children:O<=.1?"".concat(String(V).substring(0,3),"..."):V}),(0,e.jsxs)("div",{className:(0,A.cx)(y.groupWrap,y[(0,_.X)(T)]),children:[en.map(function(h,X){var tn=h.data;return h.position={x:0,y:100*X},h.title=tn.title,h.logo=tn.logo,h.des=tn.describe,r(h)}),(0,e.jsx)("div",{className:"".concat(y.btnWrap," buttonWrap")}),(0,e.jsxs)("div",{className:y.btn,children:["\u67E5\u770B\u66F4\u591A",(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original",alt:""})]})]})]}),v==="input"||v==="both"?(0,e.jsx)(B.HH,{type:"source",position:B.Ly.Right,style:{top:41.5,right:-6}}):null]})},E=u},67248:function(q,w,n){n.d(w,{W:function(){return z},Z:function(){return m}});var D=n(53649),i=n.n(D),l=n(37763),d=n(19601),M=n(50959),p=n(54733),_=n(2956),A=n(95654),L,B,F,b,R,C,$,f,K,W,P,Q=(0,A.kc)(function(e){var o=e.css,c=e.cx,t=e.prefixCls;return{nodeWrap:c("".concat(t,"-xx"),o(L||(L=i()([`
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
    `])))),nodeSelected:o(B||(B=i()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:o(F||(F=i()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:o(b||(b=i()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:o(R||(R=i()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:o(C||(C=i()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:o($||($=i()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:o(f||(f=i()([""]))),titleSlotRight:o(K||(K=i()([`
    width: 28px;
    height: 28px;
    position: absolute;
    right: 13px;
    top: 9px;
  `]))),titleSlotLeft:o(W||(W=i()([`
    width: 28px;
    height: 28px;
    margin-left: 8px;
  `]))),wrap:o(P||(P=i()([`
    width: 320px;
    height: 83px;
    position: relative;
  `])))}}),S=n(11527),H,k=function(o,c,t){return t&&c>1?o:o/c},z=_.ZP.div(H||(H=i()([`
  position: absolute;
  z-index: 10;
  top: -`,`px;
  padding: `,`;
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: `,`;
  white-space: nowrap;
`])),function(e){var o=e.zoom;return k(24,o,!0)},function(e){var o=e.zoom;return"".concat(2/o,"px ").concat(1/o,"px ").concat(2/o,"px 0")},function(e){var o=e.zoom;return"".concat(14/o,"px")}),Y=function(o){var c=o.data,t=Q(),r=t.styles,u=t.cx,E=c.title,g=c.logo,s=c.description,x=c.className,N=c.selectType,y=N===void 0?l.QB.SELECT:N,a=c.zoom,v=a===void 0?1:a,j=c.label,T=c.titleSlot,G=c.handleType,O=G===void 0?"both":G;return(0,S.jsxs)("div",{className:r.wrap,children:[O==="output"||O==="both"?(0,S.jsx)(p.HH,{type:"target",position:p.Ly.Left,style:{left:-6}}):null,(0,S.jsxs)("div",{children:[j&&(0,S.jsx)(z,{zoom:v,children:v<=.1?"".concat(String(j).substring(0,3),"..."):j}),(0,S.jsxs)("div",{className:u(r.nodeWrap,r[(0,d.X)(y)],x),children:[(0,S.jsx)("img",{className:"img",src:g,alt:""}),(0,S.jsxs)("div",{className:"content",children:[(0,S.jsxs)("div",{className:"title",children:[(0,S.jsx)("span",{children:E}),!!T&&!!T.value&&T.type==="left"&&(0,S.jsx)("div",{className:r.titleSlotLeft,children:T.value}),!!T&&!!T.value&&T.type==="right"&&(0,S.jsxs)("div",{className:r.titleSlotLeft,children:[(0,S.jsx)("div",{style:{width:"28px"}}),(0,S.jsx)("div",{className:r.titleSlotRight,children:T.value})]})]}),(0,S.jsx)("div",{className:"des",children:s})]})]})]}),O==="input"||O==="both"?(0,S.jsx)(p.HH,{type:"source",position:p.Ly.Right,style:{right:-6}}):null]})},m=Y},68609:function(q,w,n){n.d(w,{Z:function(){return N}});var D=n(26068),i=n.n(D),l=n(50959),d=n(14876),M=n(67248),p=n(54733),_=n(41533),A=n(10327),L=n(70235),B=n(88604),F=n(31445),b=n(44433),R=n(53649),C=n.n(R),$=n(95654),f=n(37763),K,W,P,Q,S,H,k,z,Y,m=(0,$.kc)(function(y){var a=y.css,v=y.cx;return{container:a(K||(K=C()([`
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
  `])),f.$D,f._H,f.ph,f.ph,f.Ts,f.l8,f.H0,f.BP),nodeWrap:v(a(W||(W=C()([`
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
    `])))),nodeSelected:a(P||(P=C()([`
    box-shadow: 0 0 0 3px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubSelected:a(Q||(Q=C()([`
    box-shadow: 0 0 0 1px #1677ff, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDanger:a(S||(S=C()([`
    box-shadow: 0 0 0 3px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%);
  `]))),nodeSubDanger:a(H||(H=C()([`
    box-shadow: 0 0 0 1px #f7636e, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeWarning:a(k||(k=C()([`
    box-shadow: 0 0 0 3px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeSubWarning:a(z||(z=C()([`
    box-shadow: 0 0 0 1px #ef9d3b, 0 1px 4px 1px rgba(0, 0, 0, 8%) !important;
  `]))),nodeDefault:a(Y||(Y=C()([""])))}}),e=n(11527),o=function(a){var v=a.data,j=m(),T=j.styles,G=j.cx,O=v.className,V=v.children;return(0,e.jsx)("div",{className:G(T.nodeWrap,O),children:V})},c=o,t=n(14981),r=(0,l.createContext)({}),u=function(){},E=function(a){var v=a.onNodeDragStart,j=v===void 0?u:v,T=a.onPaneClick,G=T===void 0?u:T,O=a.onNodeClick,V=O===void 0?u:O,nn=a.onEdgeClick,en=nn===void 0?u:nn,h=a.onNodesChange,X=h===void 0?u:h,tn=a.onEdgesChange,an=tn===void 0?u:tn,rn=a.nodes,sn=rn===void 0?[]:rn,gn=a.edges,on=gn===void 0?[]:gn,ln=a.nodeTypes,vn=ln===void 0?{}:ln,mn=a.edgeTypes,hn=mn===void 0?{}:mn,fn=a.miniMap,xn=fn===void 0?!0:fn,_n=a.children,dn=a.background,bn=dn===void 0?!0:dn,I=a.autoLayout,Z=I===void 0?!0:I,U=a.stepLessZooming,cn=U===void 0?!1:U,En=a.flowProps,Nn=a.minZoom,Cn=Nn===void 0?.1:Nn,yn=a.maxZoom,Pn=yn===void 0?2:yn,Tn=a.className,Dn=a.layoutOptions,Sn=Dn===void 0?{rankdir:"LR",align:"UL",nodesep:100,ranksep:200}:Dn,un=(0,l.useContext)(t.b),An=un.miniMapPosition,jn=un.flowDataAdapter,Bn=un.flowViewRef,Ln=un.nodes,Mn=un.edges,On=m(),Rn=On.styles,Wn=On.cx,zn=(0,l.useMemo)(function(){return i()(i()({},vn),{},{BasicNode:M.Z,BasicNodeGroup:d.Z,default:c})},[]),In=(0,l.useMemo)(function(){return i()(i()({},hn),{},{radius:L.Z})},[]),Un=(0,p.Sj)(),wn=Un.zoom;(0,l.useEffect)(function(){jn(sn,on,1,Z,Sn)},[sn,on]),(0,l.useEffect)(function(){cn&&jn(sn,on,wn,Z,Sn)},[wn]);var $n=(0,l.useCallback)(function(J){X(J)},[X]),Gn=(0,l.useCallback)(function(J){an(J)},[an]),Zn=(0,l.useCallback)(function(J,pn,Vn){j(J,pn,Vn)},[j]),Fn=(0,l.useCallback)(function(){},[]),Kn=(0,l.useCallback)(function(J){G(J)},[G]),Hn=(0,l.useCallback)(function(J,pn){V(J,pn)},[V]),kn=(0,l.useCallback)(function(J,pn){en(J,pn)},[en]);return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(p.x$,i()(i()({ref:Bn,className:Wn(Rn.container,Tn),onNodeDragStart:Zn,onNodeDragStop:Fn,onPaneClick:Kn,onNodeClick:Hn,onEdgeClick:kn,onNodesChange:$n,onEdgesChange:Gn,nodes:Ln,edges:Mn,nodeTypes:zn,edgeTypes:In,panOnScroll:!0,fitView:!0,minZoom:Cn,maxZoom:Pn},En),{},{children:[xn&&(0,e.jsx)(B.Z,{language:F.S.zh_CN,position:An,className:"pro-flow-controller"}),_n,bn&&(0,e.jsx)(b.Z,{style:{backgroundColor:"#F7F8FA"},gap:10,color:"#bac3d4",variant:_.T.Dots})]}))})},g=E,s=n(98966),x=function(a){var v=(0,l.useContext)(t.b),j=v.isUseProvider;return j?(0,e.jsx)(g,i()({},a)):(0,e.jsx)(s.G,{children:(0,e.jsx)(g,i()({},a))})},N=x},37763:function(q,w,n){n.d(w,{$D:function(){return C},BP:function(){return R},H0:function(){return b},HM:function(){return _},QB:function(){return D},Ts:function(){return B},Vc:function(){return l},_H:function(){return A},eK:function(){return M},hK:function(){return i},l8:function(){return F},mc:function(){return d},ph:function(){return L},r0:function(){return p}});var D=function(f){return f.SELECT="SELECT",f.SUB_SELECT="SUB_SELECT",f.DANGER="DANGER",f.SUB_DANGER="SUB_DANGER",f.WARNING="WARNING",f.SUB_WARNING="SUB_WARNING",f.DEFAULT="DEFAULT",f}({}),i="nodeSelected",l="nodeSubSelected",d="nodeDanger",M="nodeSubDanger",p="nodeWarning",_="nodeSubWarning",A="edgeSelected",L="edgeSubSelected",B="edgeDanger",F="edgeSubDanger",b="edgeWarning",R="edgeSubWarning",C="initialNode",$="nodeWrap"},98966:function(q,w,n){n.d(w,{G:function(){return Y}});var D=n(15558),i=n.n(D),l=n(26068),d=n.n(l),M=n(48305),p=n.n(M),_=n(50959),A=n(54733),L=n(79511),B=n.n(L),F=n(95654),b=n(37763);function R(m,e,o){var c={};return m.forEach(function(t){var r=t.width,u=t.height,E=t.select,g=E===void 0?b.QB.DEFAULT:E,s=t.type,x=s===void 0?"BasicNode":s,N=t.position,y=N===void 0?{x:NaN,y:NaN}:N;c[t.id]={id:t.id,data:t.data,select:g,type:x,right:[],left:[],position:y,width:r,height:u,zoom:o,label:t.label}}),e.forEach(function(t){var r,u,E=t.source,g=t.target;(r=c[E].right)===null||r===void 0||r.push(g),(u=c[g].left)===null||u===void 0||u.push(E)}),c}function C(m,e,o,c){if(!o)return{_nodes:m.map(function(r){var u=r.position,E=u.x,g=u.y;return d()(d()({},r),{},{position:{x:isNaN(E)?1:E,y:isNaN(g)?1:g}})}),_edges:e};var t=new(B()).graphlib.Graph().setDefaultEdgeLabel(function(){return{}});return t.setGraph(d()({},c)),e.forEach(function(r){return t.setEdge(r.source,r.target)}),m.forEach(function(r){return t.setNode(r.id,r)}),B().layout(t),{_nodes:m.map(function(r){var u=t.node(r.id),E=u.x,g=u.y,s=r.position,x=s.x,N=s.y;return d()(d()({},r),{},{position:{x:isNaN(x)?E:x,y:isNaN(N)?g:N}})}),_edges:e}}function $(m){var e=m.filter(function(t){var r,u;return((r=t.className)===null||r===void 0?void 0:r.includes("edgeSelected"))||((u=t.className)===null||u===void 0?void 0:u.includes("edgeSubSelected"))}),o=m.filter(function(t){var r,u;return((r=t.className)===null||r===void 0?void 0:r.includes("edgeDanger"))||((u=t.className)===null||u===void 0?void 0:u.includes("edgeSubDanger"))}),c=m.filter(function(t){var r,u,E,g;return!((r=t.className)!==null&&r!==void 0&&r.includes("edgeSelected"))&&!((u=t.className)!==null&&u!==void 0&&u.includes("edgeSubSelected"))&&!((E=t.className)!==null&&E!==void 0&&E.includes("edgeDanger"))&&!((g=t.className)!==null&&g!==void 0&&g.includes("edgeSubDanger"))});return[].concat(i()(c),i()(o),i()(e))}function f(m){switch(m){case b.QB.SELECT:return b._H;case b.QB.SUB_SELECT:return b.ph;case b.QB.DANGER:return b.Ts;case b.QB.SUB_DANGER:return b.l8;case b.QB.WARNING:return b.H0;case b.QB.SUB_WARNING:return b.BP;default:return"edgeDefault"}}function K(m){return m.map(function(e){var o=e.source,c=e.target,t=e.select,r=t===void 0?b.QB.DEFAULT:t,u=e.type,E=u===void 0?"smoothstep":u,g=e.label,s=e.animated,x=e.sourceHandle,N=e.targetHandle,y=e.className,a=e.data,v=e.id,j=v===void 0?"".concat(o,"-").concat(c):v;return{id:j,source:o,target:c,sourceHandle:x,targetHandle:N,type:E,data:a,animated:s,label:g,className:f(r)+" "+y}})}var W=function(e){return e.type==="BasicNode"?{width:320,height:83}:e.type==="BasicNodeGroup"?{width:355,height:1100}:{width:e.width||1,height:e.height||1}},P=function(e){var o,c,t,r;return((o=e.left)===null||o===void 0?void 0:o.length)===0&&((c=e.right)===null||c===void 0?void 0:c.length)===0?"none":((t=e.left)===null||t===void 0?void 0:t.length)===0?"input":((r=e.right)===null||r===void 0?void 0:r.length)===0?"output":"both"},Q=function(e){return e.type==="BasicNode"?d()(d()({},e.data),{},{selectType:e.select,label:e.label,zoom:e.zoom,handleType:P(e)}):e.type==="BasicNodeGroup"?{data:e.data,selectType:e.select,label:e.label,zoom:e.zoom,handleType:P(e)}:d()(d()({},e.data),{},{selectType:e.select,zoom:e.zoom,label:e.label})},S=function(e,o,c,t){var r=[],u=K(o);Object.keys(e).forEach(function(x){var N=e[x],y=N.type,a=W(N),v=a.width,j=a.height;r.push({sourcePosition:A.Ly.Right,targetPosition:A.Ly.Left,id:N.id,position:N.position,type:y,width:v,height:j,className:(0,F.cx)(b.$D),data:Q(N)})});var E=C(r,u,c,t),g=E._nodes,s=E._edges;return{nodes:g,edges:$(s)}},H=n(14981),k=n(11527),z=function(e){var o=e.children,c=(0,_.useState)({x:10,y:10}),t=p()(c,2),r=t[0],u=t[1],E=(0,A._K)(),g=(0,_.useState)([]),s=p()(g,2),x=s[0],N=s[1],y=(0,_.useState)([]),a=p()(y,2),v=a[0],j=a[1],T=(0,_.useState)(void 0),G=p()(T,2),O=G[0],V=G[1],nn=(0,_.useState)({}),en=p()(nn,2),h=en[0],X=en[1],tn=(0,_.useState)(!0),an=p()(tn,2),rn=an[0],sn=an[1],gn=(0,_.useState)({rankdir:"LR",align:"UL",nodesep:100,ranksep:200}),on=p()(gn,2),ln=on[0],vn=on[1],mn=(0,_.useRef)(),hn=(0,_.useCallback)(function(){var I=S(h,O,rn,ln),Z=I.nodes,U=I.edges;N(Z),j(U)},[h,O,rn,ln]),fn=(0,_.useCallback)(function(I,Z,U,cn,En){I.length!==0&&(X(R(I,Z,U)),V(Z),sn(cn),vn(En))},[]);(0,_.useEffect)(function(){Object.keys(h).length&&O&&hn()},[h,O]);var xn=(0,_.useCallback)(function(I,Z){var U=h[I];U&&(U.select=Z,X(d()({},h)))},[h]),_n=(0,_.useCallback)(function(I,Z){I.forEach(function(U){xn(U,Z)})},[h]),dn=(0,_.useCallback)(function(I,Z){var U=O==null?void 0:O.find(function(cn){return cn.id===I});U&&(U.select=Z,V(i()(O)))},[O]),bn=(0,_.useCallback)(function(I,Z){I.forEach(function(U){dn(U,Z)})},[h]);return(0,k.jsx)(H.b.Provider,{value:{nodes:x,edges:v,isUseProvider:!0,reactFlowInstance:E,miniMapPosition:r,flowViewRef:mn,setMiniMapPosition:u,flowDataAdapter:fn,updateSelectNode:xn,updateSelectNodes:_n,updateSelectEdge:dn,updateSelectEdges:bn},children:o})},Y=function(e){var o=e.children;return(0,k.jsx)(A.tV,{children:(0,k.jsx)(z,{children:o})})}},14981:function(q,w,n){n.d(w,{b:function(){return i}});var D=n(50959),i=(0,D.createContext)({})},88604:function(q,w,n){var D=n(82092),i=n.n(D),l=n(53649),d=n.n(l),M=n(18019),p=n(83529),_=n(54260),A=n(49084),L=n(66609),B=n(10994),F=n(85806),b=n(86865),R=n(95654),C=n(50959),$=n(24819),f=n(54733),K=n(84960),W=n(31445),P=n(11527),Q,S,H,k=(0,R.kc)(function(m,e){var o=m.css,c=m.token,t=e.x,r=e.y;return{container:o(Q||(Q=d()([`
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
    `])),r,t,c.colorBorder),visible:o(S||(S=d()([`
      display: none;
    `]))),minimap:o(H||(H=d()([`
      position: relative !important;
      right: 0;
      bottom: 0;

      overflow: hidden;

      height: 150px;
      margin: 0;

      background: `,`;
      border-radius: 4px;
    `])),c.colorBgContainer)}}),z=i()(i()({},W.S.zh_CN,{zoomIn:"\u653E\u5927",zoomOut:"\u7F29\u5C0F",zoomFit:"\u81EA\u9002\u5E94\u753B\u5E03",zoomTo1:"\u7F29\u653E\u4E3A 1:1",zoomTo2:"\u7F29\u653E\u4E3A 2:1"}),W.S.en_US,{zoomIn:"Zoom In",zoomOut:"Zoom Out",zoomFit:"Zoom Fit",zoomTo1:"Zoom To 1:1",zoomTo2:"Zoom To 2:1"}),Y=function(e){var o=e.visible,c=o===void 0?!0:o,t=e.className,r=t===void 0?"":t,u=e.position,E=u===void 0?{x:10,y:10}:u,g=e.language,s=g===void 0?W.S.zh_CN:g,x=(0,f._K)(),N=(0,f.Sj)(),y=N.zoom,a=k(E),v=a.styles,j=a.cx,T=a.theme,G=function(){x.zoomIn()},O=function(){x.zoomOut()},V=function(){x.fitView()},nn=function(){y===1?x.zoomTo(.5):x.zoomTo(1)},en=[{icon:(0,P.jsx)(M.Z,{}),title:z[s].zoomOut,onClick:O},{title:y===1?z[s].zoomTo2:z[s].zoomTo1,onClick:nn,children:Math.round(y*100)+"%",style:{width:56}},{icon:(0,P.jsx)(p.Z,{}),title:z[s].zoomIn,onClick:G},{icon:(0,P.jsx)(_.Z,{}),title:z[s].zoomFit,onClick:V}];return(0,P.jsxs)($.D,{gap:12,align:"center",className:j(v.container,r,!c&&v.visible),children:[(0,P.jsx)(A.ZP,{theme:{algorithm:[T.isDarkMode?L.Z.darkAlgorithm:L.Z.defaultAlgorithm,L.Z.compactAlgorithm]},children:(0,P.jsx)($.D,{horizontal:!0,align:"center",children:(0,P.jsx)(B.Z,{className:"actionBox",children:en.map(function(h,X){return(0,P.jsx)(F.Z,{arrow:!1,title:h.title,children:(0,P.jsx)(b.ZP,{onClick:h.onClick,icon:h.icon,style:h.style,children:h.children})},X)})})})}),(0,P.jsx)(K.a,{className:v.minimap,maskColor:T.colorBgMask,nodeColor:function(X){return X.data.color?X.data.color:T.colorFill}})]})};w.Z=Y},70235:function(q,w,n){n.d(w,{Z:function(){return M}});var D=n(48305),i=n.n(D),l=n(54733),d=n(11527);function M(p){var _=p.sourceX,A=p.sourceY,L=p.targetX,B=p.targetY,F=p.sourcePosition,b=p.targetPosition,R=p.style,C=R===void 0?{}:R,$=p.markerEnd,f=(0,l.OW)({sourceX:_,sourceY:A,sourcePosition:F,targetX:L,targetY:B,targetPosition:b,borderRadius:50}),K=i()(f,1),W=K[0];return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.u5,{path:W,markerEnd:$,style:C})})}},31445:function(q,w,n){n.d(w,{Q:function(){return D},S:function(){return i}});var D=function(l){return l.SELECT="SELECT",l.SUB_SELECT="SUB_SELECT",l.DANGER="DANGER",l.SUB_DANGER="SUB_DANGER",l.WARNING="WARNING",l.SUB_WARNING="SUB_WARNING",l.DEFAULT="DEFAULT",l}({}),i=function(l){return l.zh_CN="zh_CN",l.en_US="en_US",l}({})},19601:function(q,w,n){n.d(w,{X:function(){return l}});var D=n(37763),i=n(31445);function l(d){switch(d){case i.Q.SELECT:return D.hK;case i.Q.SUB_SELECT:return D.Vc;case i.Q.DANGER:return D.mc;case i.Q.SUB_DANGER:return D.eK;case i.Q.WARNING:return D.r0;case i.Q.SUB_WARNING:return D.HM;default:return"nodeDefault"}}}}]);
