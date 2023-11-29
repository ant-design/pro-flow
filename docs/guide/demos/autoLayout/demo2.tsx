/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import { edges, nodes } from './data/demo2data';
import './index.less';

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={edges} miniMap={false} />
    </div>
  );
}

export default App;
