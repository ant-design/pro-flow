/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowPanel, FlowView } from '@ant-design/pro-flow';
import { useState } from 'react';
import './css/index.less';
import { nodes } from './data/data';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={[]} miniMap={open}>
        <FlowPanel position="top-center">
          <button onClick={() => setOpen(!open)}>小地图{open ? '打开' : '关闭'}</button>
        </FlowPanel>
      </FlowView>
    </div>
  );
}

export default App;
