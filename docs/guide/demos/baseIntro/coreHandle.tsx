/**
 * compact: true
 */
import { FlowView, Handle, Position } from '@ant-design/pro-flow';
import { FC } from 'react';
import useStyles from './css/index.style';

const CustomNode: FC<{
  data: {
    title: string;
  };
}> = (props) => {
  const { data } = props;

  return (
    <div
      style={{
        width: '200px',
        height: '50px',
        backgroundColor: 'white',
        textAlign: 'center',
        lineHeight: '50px',
      }}
    >
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="target" position={Position.Top} id="b" style={{ left: 10 }} />
      <Handle type="target" position={Position.Top} id="c" style={{ left: 190 }} />
      <div>
        <label htmlFor="text">{data.title}</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Bottom} id="e" style={{ left: 10 }} />
      <Handle type="source" position={Position.Bottom} id="f" style={{ left: 190 }} />
    </div>
  );
};

const nodes = [
  {
    id: 'b1',
    type: 'customNode',
    data: {
      title: '一堆 Handle',
    },
  },
];

const nodeTypes = { customNode: CustomNode };

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={[]} nodeTypes={nodeTypes} miniMap={false} autoLayout={false} />
    </div>
  );
}

export default App;
