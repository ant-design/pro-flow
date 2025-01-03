import { Handle, NodeProps, Position } from '@ant-design/pro-flow';
import React, { FC, useEffect } from 'react';

import { useMind } from '../ctx';
import { IconFont } from '../icon';
import './index.less';

interface GroupProps extends NodeProps {
  className?: string;
}

export const Group: FC<GroupProps> = function Group(props) {
  const { updateNodes } = useMind();

  const [count, setCount] = React.useState(props.data?.count);

  useEffect(() => {
    const row = Math.ceil(count / 2);
    updateNodes([[props.id, { height: 38.5 + row * 63 + (row - 1) * 8 + 16, width: 342 }]]);
  }, [count]);

  return (
    <div className={'group'}>
      <Handle
        id={`${props.id}-target`}
        type="target"
        position={Position.Left}
        className={'handle'}
      />

      <div className={'header'}>
        <img
          src="https://mdn.alipayobjects.com/huamei_fcqe9k/afts/img/A*j8ICSbNgZ3wAAAAAAAAAAAAADtOFAQ/original"
          alt=""
        />
        <div className={'title'}>bizData</div>
        <div className={'op'}>
          <IconFont
            type="icon-bianji"
            onClick={() => {
              setCount((count) => count + 1);
            }}
          />
        </div>
      </div>

      <div className={'body'}>
        {new Array(count).fill('').map((item, i) => (
          <div key={i} className={'item'}>
            <div className={'itemTitle'}>SaveMoneyContainer</div>
            <div className={'itemDesc'}>直塞发奖弹窗</div>
          </div>
        ))}
      </div>
    </div>
  );
};
