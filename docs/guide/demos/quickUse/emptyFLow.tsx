/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import './css/index.less';

function App() {
  return (
    <div className="container">
      <FlowView nodes={[]} edges={[]} />
    </div>
  );
}

export default App;
