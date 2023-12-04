/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import CustomNode from './components/CustomNode';
import { nodes } from './data/index';

const nodeTypes = { customNode: CustomNode };

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={[]} nodeTypes={nodeTypes} />
    </div>
  );
}

export default App;
