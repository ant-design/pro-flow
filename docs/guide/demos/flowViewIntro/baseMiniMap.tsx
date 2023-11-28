/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import './css/index.less';
import { nodes } from './data/data';

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={[]} />
    </div>
  );
}

export default App;
