"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[399],{46152:function(d,n,e){e.r(n),e.d(n,{demos:function(){return I}});var o=e(90228),t=e.n(o),p=e(87999),s=e.n(p),r=e(75271),I={"inspector-demo-demos":{component:r.memo(r.lazy(function(){return e.e(2182).then(e.bind(e,181))})),asset:{type:"BLOCK",id:"inspector-demo-demos",refAtomIds:["Inspector"],dependencies:{"index.tsx":{type:"FILE",value:e(91364).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":e(91516),react:e(75271)},renderOpts:{compile:function(){var u=s()(t()().mark(function i(){var l,v=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4268).then(e.bind(e,84268));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},i)}));function c(){return u.apply(this,arguments)}return c}()}}}},71555:function(d,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u5FC5\u9009",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"open",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5C55\u793A",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"width",paraId:0,tocIndex:1},{value:"number",paraId:0,tocIndex:1},{value:"Inspector \u7684\u5BBD\u5EA6",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"onClose",paraId:0,tocIndex:1},{value:"()=>void",paraId:0,tocIndex:1},{value:"\u5173\u95ED\u65B9\u6CD5",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"children",paraId:0,tocIndex:1},{value:"React.ReactNode",paraId:0,tocIndex:1},{value:"\u5B50\u7EC4\u4EF6",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"style \u5C5E\u6027",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"mask",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5F00\u542F\u906E\u7F69",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1}]},91364:function(d,n){n.Z=`import { FlowView, Inspector, Language, MiniMap } from '@ant-design/pro-flow';
import { useState } from 'react';

const nodes = [
  {
    id: 'a1',
    data: {
      title: '\u53EF\u70B9\u51FB\u8282\u70B9',
      description: '\u70B9\u51FB\u6253\u5F00Inspector',
    },
  },
];

const ProFlowDemo = () => {
  const [open, setOpen] = useState(false);

  const handleUnHighlight = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <FlowView
        onNodeClick={() => setOpen(true)}
        onPaneClick={handleUnHighlight}
        nodes={nodes}
        edges={[]}
        miniMap={false}
      >
        <Inspector
          open={open}
          mask={false}
          onClose={() => setOpen(false)}
          width={300}
          title={'Inspector'}
        >
          <div>Inspector</div>
          <div>Inspector</div>
          <div>Inspector</div>
          <div>Inspector</div>
          <div>Inspector</div>
        </Inspector>
        <MiniMap language={Language.en_US} />
      </FlowView>
    </div>
  );
};

export default ProFlowDemo;
`}}]);
