"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[9199],{25885:function(I,u,_){_.r(u);var O=_(26068),M=_.n(O),c=_(48305),d=_.n(c),v=_(53649),g=_.n(v),o=_(58728),T=_(56469),L=_(56753),m=_(75271),i=_(32833),t=_(52676),E,b=(0,L.kc)(function(r){var l=r.css;return{container:l(E||(E=g()([`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `])))}}),w=function(){var l=(0,m.useState)(i.nodes),p=d()(l,2),s=p[0],f=p[1],U=(0,m.useState)(i.edges),D=d()(U,2),a=D[0],h=D[1],A=b(),S=A.styles,j=function(e){f(s.map(function(n){return n.id===e.id&&(n.select=o.Q.SELECT),n})),h(a.map(function(n){return(n.source===e.id||n.target===e.id)&&(n.select=o.Q.SUB_SELECT),M()({},n)}))},B=function(){f(s.map(function(e){return e.select=o.Q.DEFAULT,e})),h(a.map(function(e){return e.select=o.Q.DEFAULT,e}))};return(0,t.jsx)("div",{className:S.container,children:(0,t.jsx)(T.Z,{onNodeDragStart:function(e,n){return j(n)},onPaneClick:B,nodes:s,edges:a})})},C=function(){return(0,t.jsx)(w,{})};u.default=C}}]);
