"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[3184],{95974:function(I,u,_){_.r(u);var O=_(26068),c=_.n(O),M=_(48305),d=_.n(M),v=_(53649),g=_.n(v),t=_(71533),T=_(46401),L=_(51307),m=_(75271),E=_(71886),o=_(52676),i,C=(0,L.kc)(function(r){var l=r.css;return{container:l(i||(i=g()([`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `])))}}),U=function(){var l=(0,m.useState)(E.nodes),p=d()(l,2),s=p[0],f=p[1],w=(0,m.useState)(E.edges),D=d()(w,2),a=D[0],h=D[1],S=C(),A=S.styles,B=function(n){f(s.map(function(e){return e.id===n.id?e.select=t.Q.SELECT:e.select=t.Q.SUB_SELECT,e})),h(a.map(function(e){return(e.source===n.id||e.target===n.id)&&(e.select=t.Q.SUB_SELECT),c()({},e)}))},j=function(){f(s.map(function(n){return n.select=t.Q.DEFAULT,n})),h(a.map(function(n){return n.select=t.Q.DEFAULT,n}))};return(0,o.jsx)("div",{className:A.container,children:(0,o.jsx)(T.Z,{onNodeDragStart:function(n,e){return B(e)},onPaneClick:j,nodes:s,edges:a})})},b=function(){return(0,o.jsx)(U,{})};u.default=b}}]);
