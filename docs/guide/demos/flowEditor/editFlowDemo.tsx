/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEditor, FlowEditorProvider, useFlowEditor } from '@ant-design/pro-flow';
import { EditorNode } from './EditorNode';

import { useEffect } from 'react';

const nodeTypes = { editorNode: EditorNode };

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      title: '123',
      type: 'editorNode',
      position: { x: 200, y: 100 },
    });
  }, [editor]);

  return (
    <div className="container">
      <FlowEditor nodeTypes={nodeTypes} miniMap={false} devtools={true}></FlowEditor>
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
