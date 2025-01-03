"use strict";(self.webpackChunk_ant_design_pro_flow=self.webpackChunk_ant_design_pro_flow||[]).push([[399],{10451:function(d,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var p=e(90228),r=e.n(p),s=e(87999),I=e.n(s),t=e(75271),u=e(6365),c={"inspector-demo-demos":{component:t.memo(t.lazy(function(){return e.e(2182).then(e.bind(e,21959))})),asset:{type:"BLOCK",id:"inspector-demo-demos",refAtomIds:["Inspector"],dependencies:{"index.tsx":{type:"FILE",value:e(11292).Z},"@ant-design/pro-flow":{type:"NPM",value:"1.3.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/pro-flow":u,react:o||(o=e.t(t,2))},renderOpts:{compile:function(){var _=I()(r()().mark(function v(){var l,m=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(1021).then(e.bind(e,61021));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,m));case 3:case"end":return a.stop()}},v)}));function i(){return _.apply(this,arguments)}return i}()}}}},57678:function(d,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5C5E\u6027\u540D",paraId:0,tocIndex:1},{value:"\u7C7B\u578B",paraId:0,tocIndex:1},{value:"\u63CF\u8FF0",paraId:0,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:1},{value:"\u5FC5\u9009",paraId:0,tocIndex:1},{value:"className",paraId:0,tocIndex:1},{value:"string",paraId:0,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"open",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5C55\u793A",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"width",paraId:0,tocIndex:1},{value:"number",paraId:0,tocIndex:1},{value:"Inspector \u7684\u5BBD\u5EA6",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"onClose",paraId:0,tocIndex:1},{value:"()=>void",paraId:0,tocIndex:1},{value:"\u5173\u95ED\u65B9\u6CD5",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"children",paraId:0,tocIndex:1},{value:"React.ReactNode",paraId:0,tocIndex:1},{value:"\u5B50\u7EC4\u4EF6",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"style",paraId:0,tocIndex:1},{value:"CSSProperties",paraId:0,tocIndex:1},{value:"style \u5C5E\u6027",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"mask",paraId:0,tocIndex:1},{value:"boolean",paraId:0,tocIndex:1},{value:"\u662F\u5426\u5F00\u542F\u906E\u7F69",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1},{value:"-",paraId:0,tocIndex:1}]},11292:function(d,n){n.Z=`import { FlowView, Inspector, Language, MiniMap } from '@ant-design/pro-flow';
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
