/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import './css/index.less';
import { edges, nodes } from './data/data3';

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={edges} autoLayout={false}></FlowView>
    </div>
  );
}

export default App;
