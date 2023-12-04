/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import CustomNode from './components/CustomNode';
import { edges, nodes } from './data/multi';

const nodeTypes = { customNode: CustomNode };

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
    </div>
  );
}

export default App;
