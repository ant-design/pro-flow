import { FlowEditor, FlowEditorProvider, FlowPanel, useFlowEditor } from '@ant-design/pro-flow';
import { useEffect } from 'react';
import { StringRender } from './StringNode';

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  useEffect(() => {
    console.log(editor);
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
      <FlowEditor nodeTypes={{ StringNode: StringRender }}>
        <FlowPanel position="top-center">
          <button onClick={() => editor.selectAll()}>全选</button>
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
