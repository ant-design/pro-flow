/**
 * compact: true
 */
import {
  FlowEditor,
  FlowEditorProvider,
  Handle,
  Position,
  useFlowEditor,
} from '@ant-design/pro-flow';
import { FC, useEffect } from 'react';
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

const ProFlowDemo = () => {
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

  return (
    <div className={styles.container}>
      <FlowEditor nodeTypes={nodeTypes}></FlowEditor>
    </div>
  );
};

const FlowDemo = () => {
  return (
    <FlowEditorProvider>
      <ProFlowDemo />
    </FlowEditorProvider>
  );
};

export default FlowDemo;
