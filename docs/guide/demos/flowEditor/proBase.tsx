/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEditor, FlowEditorProvider, FlowPanel } from '@ant-design/pro-flow';
import { StringRender } from './StringNode';
import { BtnGroup } from './btnGroup';
import useStyles from './css/probase.style';

const ProFlowDemo = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowEditor nodeTypes={{ StringNode: StringRender }} miniMap={false} devtools={true}>
        <FlowPanel position="top-center">
          <BtnGroup />
        </FlowPanel>
      </FlowEditor>
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
