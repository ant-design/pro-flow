/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowEditor, FlowEditorProvider, useFlowEditor } from '@ant-design/pro-flow';
import { useCallback, useEffect } from 'react';
import { StringRender } from './StringNode';
import './css/dragAddNode.less';
import Sidebar from './sidebar';

let id = 0;
const getId = () => `dndnode_${id++}`;

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      console.log(type);

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = editor.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      editor.addNode(newNode);
    },
    [editor],
  );

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
      <FlowEditor
        nodeTypes={{ StringNode: StringRender }}
        onDrop={onDrop}
        onDragOver={onDragOver}
        miniMap={false}
        devtools={true}
      ></FlowEditor>
      <Sidebar />
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
