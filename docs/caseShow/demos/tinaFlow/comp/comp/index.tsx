import { Handle, Position, useFlowViewer } from '@ant-design/pro-flow';
import { FC, useState } from 'react';
import { IconFont } from '../icon';

interface CompNodeProps {
  className?: string;
}

export const CompNode: FC<any> = function CompNode(props) {
  const s = useState({ height: '100px', width: '200px' });
  // const { updateNodeMeta } = useFlowEditor();
  const { selectNode, selectEdges, selectNodes, zoomToNode, fullScreen, instance } =
    useFlowViewer();

  // @ts-ignore
  window.instance = instance;
  return (
    <div style={{ ...s[0], background: '#fff', borderRadius: 8, border: '1px solid #ccc' }}>
      <Handle
        id={`${props.id}-target`}
        type="target"
        position={Position.Left}
        style={{
          opacity: 0,
        }}
      />
      compcompcompcomp
      <IconFont
        type="icon-bianji"
        onClick={() => {
          if (s[0].width === '200px') {
            s[1]({ height: '200px', width: '250px' });
            props?.data?.onResize(250, 200);
          } else {
            s[1]({ height: '100px', width: '200px' });
            props?.data?.onResize(200, 100);
          }
          console.log('props: ', props);
          // updateNodeMeta(props.id, "height", 200);
          // updateNodeMeta(props.id, "width", 250);
        }}
      />
    </div>
  );
};
