"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[3435],{72559:function(A,r,e){e.r(r);var x=e(48305),u=e.n(x),C=e(4248),a=e(4590),E=e(99493),v=e(83110),p=e(50959),f=e(33743),d=e(11527),R=(0,p.memo)(function(){var I=(0,p.useState)([]),P=u()(I,2),O=P[0],M=P[1];return(0,d.jsxs)("div",{children:[(0,d.jsxs)(C.Z.Preview,{collapsedKeys:O,onCollapsedKeysChange:M,title:"\u8F93\u51FA",children:[(0,d.jsx)(a.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,d.jsx)(a.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"}),(0,d.jsx)(a.Q,{id:"model",title:"\u6A21\u578B",children:"GPT-3.5-turbo"})]}),(0,d.jsx)(E.Z,{}),(0,d.jsxs)(f.D,{align:"center",horizontal:!0,gap:8,children:[(0,d.jsx)(v.ZP,{onClick:function(){M([])},children:"\u5168\u90E8\u5C55\u5F00"}),(0,d.jsxs)("div",{children:["\u6298\u8D77 Key: ",O.join(",")]})," "]})]})});r.default=R},59596:function(A,r,e){e.r(r);var x=e(4248),u=e(28497),C=e(50959),a=e(11527),E=(0,C.memo)(function(){return(0,a.jsx)(x.Z.Preview,{title:"\u6587\u672C\u6846",children:(0,a.jsx)(u.K,{placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u672C\u5185\u5BB9",type:"block"})})});r.default=E},88525:function(A,r,e){e.r(r);var x=e(4248),u=e(4590),C=e(50959),a=e(11527),E=(0,C.memo)(function(){return(0,a.jsxs)(x.Z.Preview,{title:"\u8F93\u51FA",children:[(0,a.jsx)(u.Q,{id:"variable",title:"\u53D8\u91CF\u540D",children:"\u53D8\u91CF\u540D"}),(0,a.jsx)(u.Q,{id:"sourceId",title:"\u8F93\u51FA\u6765\u6E90",children:"\u6765\u6E90"})]})});r.default=E},4590:function(A,r,e){e.d(r,{Q:function(){return ne},n:function(){return $}});var x=e(26068),u=e.n(x),C=e(48305),a=e.n(C),E=e(53649),v=e.n(E),p=e(91010),f=e(50959),d={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"},R=d,I=e(82017),P=function(o,s){return f.createElement(I.Z,(0,p.Z)({},o,{ref:s,icon:R}))},O=f.forwardRef(P),M=O,B=e(20081),b=e(60909),w=e(23856),y=e(33743),K=e(73759),k=e(93251),W=e(96422),l=e(11527),F,S,Z,Q,H,z,T="editor-field-item",$=(0,w.kc)(function(n){var o=n.css,s=n.token,h=n.cx,m=o(F||(F=v()([`
    width: 20px;
    height: 20px;
    background: `,`;
    border: 4px solid `,`;
  `])),s.colorBgElevated,s.colorPrimary);return{title:h("".concat(T,"-title"),o(S||(S=v()([`
        position: relative;
        font-weight: bold;
        color: `,`;
      `])),s.colorText)),extra:h(o(Z||(Z=v()([`
        position: relative;
      `])))),value:o(Q||(Q=v()([`
      padding: 12px 16px;
      background: `,`;
      border-radius: 8px;
    `])),s.colorBgLayout),handle:m,handleRight:o(H||(H=v()([`
      `,`;
      right: -35px;
    `])),m),handleLeft:o(z||(z=v()([`
      `,`;
      left: -35px;
    `])),m)}}),q=(0,f.memo)(function(n){var o=n.children,s=n.title,h=n.extra,m=n.collapsed,L=n.onCollapsedChange,te=n.valueContainer,G=n.classNames,i=G===void 0?{}:G,J=n.handles,t=J===void 0?{}:J,D=n.id,le=n.className,oe=n.style,U=$(),g=U.styles,ae=U.theme,_=U.cx,se=(0,W.oR)(function(c){return[c.collapsedKeys,c.toggleCollapsedKey]}),V=a()(se,2),X=V[0],de=V[1],re=(0,k.Z)(X.includes(D),{value:typeof m=="undefined"?X.includes(D):m,onChange:function(N){de(D),L==null||L(N)}}),Y=a()(re,2),j=Y[0],ie=Y[1];return(0,l.jsxs)(y.D,{gap:12,className:_("".concat(T,"-container"),le),style:oe,children:[s&&(0,l.jsxs)(y.D,{horizontal:!0,distribution:"space-between",align:"center",className:_("".concat(T,"-header"),i==null?void 0:i.header),children:[(0,l.jsxs)(y.D,{className:_(g.title,i==null?void 0:i.title),children:[!!(t!=null&&t.source)&&(0,l.jsx)(K.HH,{id:typeof(t==null?void 0:t.source)=="string"?t==null?void 0:t.source:D,type:"target",position:K.Ly.Left,className:g.handleLeft}),s]}),(0,l.jsxs)(y.D,{horizontal:!0,gap:4,className:_(g.extra,"".concat(T,"-extra"),i==null?void 0:i.extra,"nodrag"),children:[(0,l.jsxs)(b.ZP,{theme:{token:{colorText:ae.colorTextSecondary}},children:[j?null:h&&h.map(function(c,N){return(0,l.jsx)(B.Z,{icon:c.icon,title:c.title,onClick:c.onClick},c.title||""+N)}),(0,l.jsx)(B.Z,{icon:(0,l.jsx)(M,{rotate:j?-90:0}),title:j?"\u5C55\u5F00":"\u6298\u8D77",onClick:function(){ie(!j)}})]}),!!(t!=null&&t.target)&&(0,l.jsx)(K.HH,{id:typeof(t==null?void 0:t.target)=="string"?t==null?void 0:t.target:D,type:"source",position:K.Ly.Right,className:g.handleRight})]})]}),j?null:o&&te===!1?o:(0,l.jsx)("div",{className:_(g.value,i.value),children:o})]})}),ee=function(o){var s=o.children,h=!0,m=(0,l.jsx)(l.Fragment,{children:s});try{(0,W.AC)()}catch(L){h=!1}return h?m:(0,l.jsx)(W.iq,{children:s})},ne=(0,f.memo)(function(n){return(0,l.jsx)(ee,{children:(0,l.jsx)(q,u()({},n))})})}}]);