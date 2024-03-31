import { CheckCircleFilled } from '@ant-design/icons';
import { Handle, Position } from '@ant-design/pro-flow';
import { useState } from 'react';
import useStyles from './styled';

export interface TaskNodeC {
  id: string;
  title: string;
  status: string;
  extra: React.JSX.Element;
  isOpen: boolean;
  children: React.JSX.Element;
}

const TaskNode = (props: { data: TaskNodeC }) => {
  const { data } = props;
  const [open, setOpen] = useState(data.isOpen);
  const { styles } = useStyles();

  return (
    <div className={styles.wrap}>
      <Handle
        style={{
          position: 'absolute',
          top: '21px',
          transform: 'translateY(-50%)',
          opacity: 0,
        }}
        id={`${data.id}`}
        type="target"
        position={Position.Left}
      />
      <div
        className={styles.taskNode}
        style={{ justifyContent: `${data.children ? 'space-between' : 'flex-start'}` }}
      >
        <CheckCircleFilled style={{ color: '#008000', fontSize: 14 }} />
        <div className="title">{data.title}</div>
        {data.children && (
          <div
            className="group"
            style={{ justifyContent: `${data.extra ? 'space-between' : 'flex-end'}` }}
          >
            {data.extra && <div className="extra">{data.extra}</div>}
            {data.extra && <span className="span">|</span>}
            <div onClick={() => setOpen(!open)}>{open ? 'on' : 'off'}</div>
          </div>
        )}
      </div>
      {open && data.children}
      <Handle
        style={{
          position: 'absolute',
          top: '21px',
          transform: 'translateY(-50%)',
          opacity: 0,
        }}
        id={`${data.id}`}
        type="source"
        position={Position.Right}
      />
    </div>
  );
};

export default TaskNode;
