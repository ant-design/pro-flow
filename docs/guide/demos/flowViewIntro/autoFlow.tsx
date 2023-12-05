/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import './css/index.less';
import { edges, nodes } from './data/data2';

function App() {
  return (
    <div className="container">
      <FlowView
        nodes={nodes}
        edges={edges}
        onEdgeClick={(e, edge) => {
          console.log(edge);
        }}
      ></FlowView>
    </div>
  );
}

export default App;
