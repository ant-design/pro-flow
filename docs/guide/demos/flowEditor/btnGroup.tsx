import { useFlowEditor } from '@ant-design/pro-flow';
import { useCallback, useEffect, useState } from 'react';

export const BtnGroup = () => {
  const editor = useFlowEditor();
  const [count, setCount] = useState(0);

  const addMockNode = useCallback(() => {
    if (editor) {
      const id = Math.random();

      editor.addNode({
        id: `a${id}`,
        type: 'StringNode',
        position: { x: count * 200, y: 100 },
        data: {
          title: 'String Node',
          handles: {
            source: 'a1-source',
            target: 'a1-target',
          },
        },
      });

      setCount((c) => c + 1);
    }
  }, [editor, count]);

  useEffect(() => {
    if (editor) {
      addMockNode();
    }
  }, []);

  return (
    <>
      <button
        onClick={() => {
          editor.selectAll();
        }}
      >
        全选
      </button>
      <button
        onClick={() => {
          editor.deselectAll();
        }}
      >
        取消全选
      </button>
      <br />
      <button onClick={addMockNode}>新增节点</button>
      <button
        onClick={() => {
          editor.getSelectedKeys().forEach((id) => {
            editor.deleteNode(id);
          });
        }}
      >
        删除选中节点
      </button>
      <br />
      <button onClick={() => editor.undo()}>撤销</button>
      <button onClick={() => editor.redo()}>重做</button>
    </>
  );
};
