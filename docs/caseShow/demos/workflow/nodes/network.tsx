import { FC } from 'react';
import useStyles from '../styled';

interface NetworkNode {
  title: string;
  logo: string;
  des?: string;
}

const NetworkNode: FC<{
  data: NetworkNode;
}> = ({ data }) => {
  const { styles } = useStyles();

  return <div></div>;
};

export default NetworkNode;
