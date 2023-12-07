/**
 * compact: true
 * defaultShowCode: true
 */
import {
  BasicNode,
  EditNode,
  FlowEditor,
  FlowEditorProvider,
  useFlowEditor,
} from '@ant-design/pro-flow';
import { Button } from 'antd';
import { useCallback, useEffect } from 'react';
import { FlowPanel } from '../../../../src';
import { StringRender } from './StringNode';
import './css/dragAddNode.less';
import Sidebar from './sidebar';

let id = 0;
const getId = () => `node_${id++}`;

const nodeTypes = {
  StringNode: StringRender,
  BasicNode: BasicNode,
  EditNode: EditNode,
};
const ProFlowDemo = () => {
  const editor = useFlowEditor();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      if (!editor) return;

      const type = event.dataTransfer.getData('application/reactflow');
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
        content: {
          a: '123',
        },
        data: {
          title: `${type} node`,
          content: '123',
        },
      };

      editor.addNode(newNode);
    },
    [editor],
  );

  const handleClick = useCallback(() => {
    console.log('here');
    console.log(editor);
    editor.updateNodeContent('a1', 'content', '9000');

    editor.updateNodeData('a1', { title: 'bug' });
    editor.updateNodeData('a1', { des: '87888' }, true);
  }, [editor]);

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      type: 'EditNode',
      position: { x: 200, y: 100 },
      data: {
        title: '123',
        aaa: '456',
      },
    });
  }, [editor]);

  return (
    <div className="container">
      <FlowEditor
        nodeTypes={nodeTypes}
        flowProps={{
          onDrop,
          onDragOver,
        }}
        miniMap={false}
        devtools={true}
      >
        <FlowPanel>
          <Button onClick={handleClick}>click</Button>
        </FlowPanel>
      </FlowEditor>
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
