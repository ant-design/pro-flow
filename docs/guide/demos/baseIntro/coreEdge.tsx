/**
 * compact: true
 */

import { FlowPanel, FlowView } from '@ant-design/pro-flow';
import { Button } from 'antd';
import { useState } from 'react';
import './css/index.less';
import { getEdges, nodes } from './data/coreEdgeData';

const edgeTypes = ['straight', 'step', 'bezier', 'smoothstep', 'radius'];

function App() {
  const [edgeType, setEdgeType] = useState('straight');

  return (
    <div className="container">
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
