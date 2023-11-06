import { DefaultNodeData } from '@/constants';
import { FC } from 'react';
import { useStyles } from '../styles';

const DefaultNode: FC<DefaultNodeData> = (props) => {
  const { styles, cx } = useStyles();
  const { className, children } = props;

  return <div className={cx(styles.nodeWrap, className)}>{children}</div>;
};

export default DefaultNode;
