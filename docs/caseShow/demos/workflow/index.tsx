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
import { useCallback, useEffect } from 'react';
import { StringRender } from '/docs/guide/demos/flowEditor/StringNode';

import TextNode from './nodes/textNode';
import Sidebar from './sidebar';
import useStyles from './styled';

let id = 0;
const getId = () => `node_${id++}`;

const nodeTypes = {
  TextNode: TextNode,
  StringNode: StringRender,
  BasicNode: BasicNode,
  EditNode: EditNode,
};
const ProFlowDemo = () => {
  const editor = useFlowEditor();
  const { styles } = useStyles();

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

  useEffect(() => {
    editor.addNode({
      id: 'a1',
      type: 'TextNode',
      position: { x: 200, y: 100 },
      data: {
        title: '123',
        aaa: '456',
      },
    });
  }, [editor]);

  return (
    <div className={styles.container}>
      <FlowEditor
        nodeTypes={nodeTypes}
        flowProps={{
          onDrop,
          onDragOver,
        }}
        miniMap={false}
        devtools={true}
      >
        <Sidebar />
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
