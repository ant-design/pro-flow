import { green } from '@ant-design/colors';
import { CheckCircleFilled } from '@ant-design/icons';
import { FlowViewNode, Handle, Position } from '@ant-design/pro-flow';
import { FC, useState } from 'react';
import useStyles from './styled';

const taskNode: FC<FlowViewNode> = (node) => {
  const [open, setOpen] = useState(false);
  const { styles } = useStyles();
  const { data } = node;

  return (
    <div className={styles.wrap}>
      <Handle id={`${node.id}`} type="target" position={Position.Left} />
      <div className={styles.taskNode}>
        <CheckCircleFilled style={{ color: green[5], fontSize: 14 }} />
        <div className="title">{data.title}</div>
        <div className="group">
          <div>{data.extra}</div>
          <span className="span">|</span>
          <div onClick={() => setOpen(!open)}>{open ? 'on' : 'off'}</div>
        </div>
      </div>
      {open && data.children}
      <Handle id={`${node.id}`} type="source" position={Position.Right} />
    </div>
  );
};

export default taskNode;
