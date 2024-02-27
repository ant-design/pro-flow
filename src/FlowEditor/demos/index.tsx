/**
 * compact: true
 */
import {
  FlowEditor,
  FlowEditorProvider,
  FlowPanel,
  Handle,
  Position,
  useFlowEditor,
} from '@ant-design/pro-flow';
import { FC, useCallback, useEffect, useState } from 'react';
import useStyles from './index.style';

const StringRender: FC = (node: any) => {
  const { styles } = useStyles();
  const { handles, id } = node;

  return (
    <div className={styles.stringNode}>
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'target'}
        position={Position.Left}
      />
      {node.data.title}
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};

const nodeTypes = { StringNode: StringRender };

const ProFlowDemo = (props: { nodes: [] }) => {
  const nodes = props.nodes;
  const editor = useFlowEditor();
  const { styles } = useStyles();

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      type: 'StringNode',
      position: { x: 0, y: 100 },
      data: {
        title: 'String Node',
        handles: {},
      },
    });
    editor.addNode({
      id: 'a2',
      type: 'StringNode',
      position: { x: 0, y: 300 },
      data: {
        title: 'String Node',
        handles: {},
      },
    });
    editor.addEdges({
      'a1-a2': {
        id: 'a1-a2',
        source: 'a1',
        target: 'a2',
        data: {
          source: 'a1',
          target: 'a2',
          label: '123',
        },
      },
    });
  }, [editor]);

  const handleConnect = useCallback(
    (connection) => {
      console.log('onConnect: ', connection);
      console.log(nodes);
    },
    [nodes],
  );

  const handleEdgesChange = useCallback(
    (change) => {
      // console.log('onEdgesChange', nodes);
      console.log(change);
    },
    [nodes],
  );

  const handleNodesChange = useCallback(
    (change) => {
      // console.log('onEdgesChange', nodes);
      console.log(change);
    },
    [nodes],
  );

  return (
    <div className={styles.container}>
      <FlowEditor
        nodeTypes={nodeTypes}
        // onNodesChange done
        // beforeNodesChange={(nodes) => {
        //   console.log('beforeNodesChange', nodes);
        //   return true;
        // }}
        // onNodesChange={(nodes) => {
        //   console.log('onNodesChange', nodes);
        // }}
        // afterNodesChange={(nodes) => {
        //   console.log('afterNodesChange', nodes);
        // }}
        // onFlattenNodesChange={(e) => {
        //   console.log(e);
        // }}

        // onEdgesChange done
        // beforeEdgesChange={(edges) => {
        //   console.log('beforeEdgesChange', edges);
        //   return true;
        // }}
        onEdgesChange={handleEdgesChange}
        onNodesChange={handleNodesChange}
        // afterEdgesChange={(edges) => {
        //   console.log('afterEdgesChange', edges);
        // }}
        // onFlattenEdgesChange={(e) => {
        //   console.log('flattenEdgesChange', e);
        // }}

        onConnect={handleConnect}
      >
        <FlowPanel>
          <button
            type={'button'}
            onClick={() => {
              editor.deleteNode('a1');
            }}
          >
            remove
          </button>
        </FlowPanel>
      </FlowEditor>
    </div>
  );
};

const FlowDemo = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setNodes([
      {
        aaa: 123,
      },
    ]);
  }, []);
  return (
    <FlowEditorProvider>
      <ProFlowDemo nodes={nodes} />
    </FlowEditorProvider>
  );
};

export default FlowDemo;
