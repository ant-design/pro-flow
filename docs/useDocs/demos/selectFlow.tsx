import { FlowView } from '@ant-design/pro-flow';
import { EdgeType, FlowViewEdge, FlowViewNode, SelectType } from '@ant-design/pro-flow/es/index';
import { useState } from 'react';
import styled from 'styled-components';

const initNodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
];
const initEdges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a1-a3',
    source: 'a1',
    target: 'a3',
    type: EdgeType.radius,
  },
];

function App() {
  const [nodes, setNodes] = useState<FlowViewNode>(initNodes);
  const [edges, setEdges] = useState<FlowViewEdge>(initEdges);

  const handlePaneClick = (e: any) => {
    setNodes(
      nodes.map((_node) => {
        _node.select = SelectType.DEFAULT;
        return _node;
      }),
    );
    setEdges(
      edges.map((edge) => {
        edge.select = SelectType.DEFAULT;
        return edge;
      }),
    );
  };

  const handleNodeClick = (e: any, node) => {
    console.log(node);
    setNodes(
      nodes.map((_node) => {
        if (_node.id === node.id) {
          _node.select = SelectType.SELECT;
        } else {
          _node.select = SelectType.SUB_SELECT;
        }
        return _node;
      }),
    );
    setEdges(
      edges.map((edge) => {
        edge.select = SelectType.SUB_SELECT;
        return edge;
      }),
    );
  };

  return (
    <Container>
      <FlowView
        onPaneClick={handlePaneClick}
        onNodeClick={handleNodeClick}
        nodes={nodes}
        edges={edges}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 800px;
  height: 500px;
`;
