/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import ButtonEdge from './ButtonEdge';
import { edges, nodes } from './data';

const edgeTypes = {
  buttonEdge: ButtonEdge,
};

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
    </div>
  );
}

export default App;
