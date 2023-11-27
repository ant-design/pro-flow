"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[6580],{17606:function(W,i,e){e.r(i);var b=e(77117),v=e.n(b),D=e(28152),A=e.n(D),P=e(18840),u=e.n(P),d=e(99275),X=e(58697),O=e(95111),M=e(3057),m=e(50959),j=e(80166),n=e(11527),c,p,S=(0,M.kc)(function(l){var r=l.css;return{container:r(c||(c=u()([`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `])))}}),w=function(r){var o=r.score;return(0,n.jsx)(O.Z,{style:{fontSize:"6px",textAlign:"center"},type:"circle",trailColor:"white",percent:o===0?1:o*20,strokeColor:o*20>60?"#30a46c":"#e5484d",format:function(){return"".concat(o)},size:[28,6]})},y=j.ZP.div(p||(p=u()([`
  width: 28px;
  height: 16px;
  background: #ffeef1;
  border-radius: 7px;

  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 8px;
    height: 9px;
  }
`]))),T=[{id:"b1",label:"titleSlot-left",data:{title:"XXX_API1",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API",titleSlot:{type:"left",value:(0,n.jsx)(y,{children:(0,n.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*wkEJRbSowekAAAAAAAAAAAAADvuvAQ/original",alt:""})})}}},{id:"b2",label:"titleSlot-right",data:{title:"XXX_APIddddddddddddddddddddddddddddddddddddddddddddddddddd_b2",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API",titleSlot:{type:"right",value:(0,n.jsx)(w,{score:4})}}},{id:"b3",label:"default",data:{title:"XXX_API_b3",logo:"https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original",describe:"XXX_XXX_XXX_API"}}],U=[{id:"b12",source:"b1",target:"b2"},{id:"b23",source:"b2",target:"b3"}],C=function(){var r=(0,m.useState)(T),o=A()(r,2),a=o[0],g=o[1],x=(0,m.useState)(U),f=A()(x,2),s=f[0],h=f[1],I=S(),R=I.styles,K=function(_){g(a.map(function(t){return t.id===_.id&&(t.select=d.Q.SELECT),t})),h(s.map(function(t){return(t.source===_.id||t.target===_.id)&&(t.select=d.Q.SUB_SELECT),v()({},t)}))},B=function(){g(a.map(function(_){return _.select=d.Q.DEFAULT,_})),h(s.map(function(_){return _.select=d.Q.DEFAULT,_}))};return(0,n.jsx)("div",{className:R.container,children:(0,n.jsx)(X.Z,{onNodeDragStart:function(_,t){return K(t)},onPaneClick:B,nodes:a,edges:s})})},L=function(){return(0,n.jsx)(C,{})};i.default=L}}]);
