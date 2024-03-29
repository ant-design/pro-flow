import { FlowViewNode } from '@ant-design/pro-flow';
import { FC, useState } from 'react';
import useStyles from './styled';

const StageNode: FC<FlowViewNode> = (node) => {
  const [open, setOpen] = useState(false);
  const { styles } = useStyles();
  const { data } = node;

  return <div className={styles.stageNode}></div>;
};

export default StageNode;
