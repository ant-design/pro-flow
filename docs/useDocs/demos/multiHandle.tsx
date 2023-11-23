import { FC, useCallback } from 'react';
import styled from 'styled-components';
import {
  FlowView,
  FlowViewProvider,
  Handle,
  Position,
  SelectType,
  useFlowViewer,
} from '../../../src/index';

const Wrap = styled.div`
  width: 200px;
  height: 83px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &.default {
    border: none;
  }

  &.select {
    border: 1px solid red;
  }
`;

const Container = styled.div`
  width: 800px;
  height: 300px;
`;

const CustomNode: FC<{
  data: {
    title: string;
    selectType: SelectType;
  };
}> = ({ data }) => {
  console.log(data);
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Wrap className={data.selectType === SelectType.SELECT ? 'select' : 'default'}>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.title}</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10 }} />
    </Wrap>
  );
};

const nodes = [
  {
    id: 'n1',
    type: 'customNode',
    data: {
      title: 'Text',
    },
  },
  {
    id: 'n2',
    data: {
      title: 'n2 node',
    },
  },
  {
    id: 'n3',
    data: {
      title: 'n3 node',
    },
  },
];

const edges = [
  { id: 'edge-1', source: 'n1', target: 'n2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'n1', target: 'n3', sourceHandle: 'b' },
];

const nodeTypes = { customNode: CustomNode };

function App() {
  const flowViewer = useFlowViewer();

  console.log(flowViewer);

  return (
    <Container>
      <FlowView
        onNodeClick={(e, n) => {
          console.log(n);
          flowViewer?.selectNode(n.id, SelectType.SELECT);
        }}
        onPaneClick={() => {
          flowViewer?.selectNodes(['n1', 'n2', 'n3'], SelectType.DEFAULT);
        }}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        miniMap={false}
      />
    </Container>
  );
}

function ProApp() {
  return (
    <FlowViewProvider>
      <App />
    </FlowViewProvider>
  );
}

export default ProApp;
