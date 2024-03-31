import { FlowViewNode } from '@ant-design/pro-flow';
import { FC } from 'react';
import useStyles from './styled';
import TaskNode from './taskNode';

const StageNode: FC<FlowViewNode> = (node) => {
  // const [open, setOpen] = useState(false);
  const { styles } = useStyles();
  const { data } = node;
  const taskNodes = data.children;

  return (
    <div className={styles.stageNode}>
      <div className="wrap">
        <div className="title">{data.title}</div>
        {data.extra}
      </div>
      <div className="taskNodes">
        {taskNodes.map((taskNode: any) => {
          return <TaskNode data={taskNode} />;
        })}
      </div>
    </div>
  );
};

export default StageNode;
