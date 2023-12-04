export const BtnGroup = (props) => {
  const { editor } = props;

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
      <button
        onClick={() => {
          const nodes = editor.getFlattenNodes();
          const index = nodes ? Object.keys(nodes).length + 1 : 1;
          console.log(index);

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
    </>
  );
};
