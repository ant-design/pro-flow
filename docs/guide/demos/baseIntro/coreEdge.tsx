/**
 * compact: true
 */

import { FlowPanel, FlowView } from '@ant-design/pro-flow';
import { Button } from 'antd';
import { useState } from 'react';
import useStyles from './css/index.style';
import { getEdges, nodes } from './data/coreEdgeData';

const edgeTypes = ['straight', 'step', 'bezier', 'smoothstep', 'radius'];

function App() {
  const [edgeType, setEdgeType] = useState('straight');
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={getEdges(edgeType)}>
        <FlowPanel>
          {edgeTypes.map((type) => (
            <Button
              key={type}
              onClick={() => {
                setEdgeType(type);
              }}
            >
              {type}
            </Button>
          ))}
        </FlowPanel>
      </FlowView>
    </div>
  );
}

export default App;
