import { FlowEditor, FlowEditorProvider, useFlowEditor } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';
import { useEffect } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `,
}));

const ProFlowDemo = () => {
  const editor = useFlowEditor();
  const { styles } = useStyles();
  console.log(editor);
  useEffect(() => {
    editor.addNode({
      id: 'a1',
      position: { x: 0, y: 100 },
      data: {
        children: <div>default node, 123123</div>,
      },
    });
  }, [editor]);

  return (
    <div className={styles.container}>
      <FlowEditor />
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
