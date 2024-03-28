import { Handle, Position } from '@ant-design/pro-flow';
import useStyles from '../styled';

const TextNode = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.textNode}>
      <h1>文本节点</h1>
      <textarea type="textarea" placeholder="请输入内容" />
      <Handle type={'source'} position={Position.Right} />
    </div>
  );
};

export default TextNode;
