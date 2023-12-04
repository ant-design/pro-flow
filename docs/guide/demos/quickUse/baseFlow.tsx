/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import './css/index.less';
import { edges, nodes } from './data';

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
