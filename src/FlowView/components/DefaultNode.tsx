import { DefaultNodeData } from '@/constants';
import { FC } from 'react';
import { useStyles } from '../styles';

const DefaultNode: FC<{
  data: DefaultNodeData;
}> = ({ data }) => {
  const { styles, cx } = useStyles();
  const { className, children } = data;

  return <div className={cx(styles.nodeWrap, className)}>{children}</div>;
};

export default DefaultNode;
