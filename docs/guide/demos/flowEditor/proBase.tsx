import { FlowPanel } from '@ant-design/pro-flow';
import { useEffect } from 'react';
import { FlowEditor, FlowEditorProvider, useFlowEditor } from '../../../../src/FlowEditor/index';
import { StringRender } from './StringNode';
import './css/probase.less';

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  useEffect(() => {
    console.log(editor);
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
          <button
            onClick={() => {
              const nodes = editor.getFlattenNodes();
              const index = Object.keys(nodes).length + 1;

              editor.addNode({
                id: `a${index}`,
                type: 'StringNode',
                position: { x: index * 200, y: 100 },
                data: {
                  title: `String Node ${index}`,
                  handles: {
                    source: `a${index}-source`,
                    target: `a${index}-target`,
                  },
                },
              });
            }}
          >
            新增节点
          </button>
          <button
            onClick={() => {
              editor.getSelectedKeys().forEach((id) => {
                console.log(id);
                editor.deleteNode(id);
              });
            }}
          >
            删除选中节点
          </button>
          <br />
          <button onClick={() => editor.undo()}>撤销</button>
          <button onClick={() => editor.redo()}>重做</button>
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
