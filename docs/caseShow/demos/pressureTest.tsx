/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEdge, FlowNode, FlowView } from '@ant-design/pro-flow';

const nodes: FlowNode[] = [];
const edges: FlowEdge[] = [];

nodes.push({
  id: `a${0}`,
  data: {
    title: `节点${0}`,
    logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
    describe: 'XXX_XXX_XXX_API',
  },
});

for (let i = 1; i < 200; i += 1) {
  nodes.push({
    id: `a${i}`,
    label: `节点${i}`,
    data: {
      title: `节点${i}`,
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  });

  if ((i - 1) % 10 === 0) {
    edges.push({
      id: `a${i}-${Math.random()}-${Date.now() * Math.random()}`,
      source: 'a0',
      target: `a${i}`,
    });
  } else {
    edges.push({
      id: `a${i}-${Math.random()}-${Date.now() * Math.random()}`,
      source: `a${i - 1}`,
      target: `a${i}`,
    });
  }
}

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '800px',
      }}
    >
      <FlowView
        minZoom={0.01}
        stepLessZooming={false}
        nodes={nodes}
        edges={edges}
        stepLessZooming={true}
      ></FlowView>
    </div>
  );
}

export default App;
