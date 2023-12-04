/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEditor, FlowEditorProvider, useFlowEditor } from '@ant-design/pro-flow';
import { useEffect } from 'react';
import { StringRender } from './StringNode';

const ProFlowDemo = () => {
  const editor = useFlowEditor();

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
    <div className="container">
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
