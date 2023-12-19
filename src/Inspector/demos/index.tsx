/**
 * compact: true
 */
import { FlowView, Inspector, Language, MiniMap } from '@ant-design/pro-flow';
import { useState } from 'react';

const nodes = [
  {
    id: 'a1',
    data: {
      title: '可点击节点',
      description: '点击打开Inspector',
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
