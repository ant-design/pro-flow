/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEditor, FlowEditorProvider, FlowPanel, useFlowEditor } from '@ant-design/pro-flow';
import { useEffect } from 'react';
import { StringRender } from './StringNode';
import { BtnGroup } from './btnGroup';
import './css/probase.less';

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      type: 'StringNode',
      position: { x: 200, y: 100 },
      data: {
        title: 'String Node',
        handles: {
          source: 'a1-source',
          target: 'a1-target',
        },
      },
    });
  }, [editor]);

  return (
    <div className="container">
      <FlowEditor nodeTypes={{ StringNode: StringRender }} miniMap={false} devtools={true}>
        <FlowPanel position="top-center">
          <BtnGroup editor={editor} />
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
