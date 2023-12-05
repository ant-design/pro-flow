export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="aside">
      <div className="description">您可以将这些节点拖到上面的画布中</div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'StringNode')}
        draggable
      >
        String Node
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'BasicNode')} draggable>
        BasicNode Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, 'EditNode')}
        draggable
      >
        EditNode Node
      </div>
    </div>
  );
};
