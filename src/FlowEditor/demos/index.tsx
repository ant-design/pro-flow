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
import { createStyles } from 'antd-style';
import { FC, useEffect } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `,
  stringNode: css`
    width: 150px;
    height: 30px;
    text-align: center;
    background-color: white;
    border: 1px solid aqua;
    border-radius: 4px;
    line-height: 30px;
  `,
}));

const StringRender: FC = (node: any) => {
  const { handles, id } = node;
  const { styles } = useStyles();

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
  }, [editor]);

  return (
    <div className={styles.container}>
      <FlowEditor nodeTypes={{ StringNode: StringRender }} />
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
