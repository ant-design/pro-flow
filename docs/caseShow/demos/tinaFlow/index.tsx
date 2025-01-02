import { FlowView, useFlowViewer } from '@ant-design/pro-flow';
import { FC, useEffect, useState } from 'react';

// import "./flow.less";
import { TreeDataNode } from 'antd';
import { CompNode } from './comp/comp';
import { MindProvider, useMind } from './comp/ctx';
import { Group } from './comp/group';
import { IconFont } from './comp/icon';

interface FlowProps {
  className?: string;
}

const nodeTypes = {
  CompNode,
  Group,
};

export const Flow: FC<any> = function Flow(props) {
  const { selectNode, selectEdges, selectNodes, zoomToNode, fullScreen, instance } =
    useFlowViewer();

  // @ts-ignore
  window.instance = instance;
  // instance?.setViewport

  const s = useState({ width: 200, height: 100 });

  // @ts-ignore
  window.ss = s[1];

  const { nodes, edges, init } = useMind();

  useEffect(() => {
    init(_nodes, _edges);
  }, []);

  return (
    <div style={{ flex: '1 1 auto', height: '800px', minWidth: 0 }}>
      <FlowView
        layoutOptions={{
          nodesep: 200,
        }}
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodeClick={(e, node) => zoomToNode(node!.id, 1000)}
      />
    </div>
  );
};

export default () => {
  return (
    <MindProvider>
      <Flow />
    </MindProvider>
  );
};

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <IconFont type="icon-sketch" />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <IconFont type="icon-sketch" />,
        children: [
          { title: 'leaf', key: '0-0-0-0', icon: <IconFont type="icon-sketch" /> },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <IconFont type="icon-sketch" />,
          },
          { title: 'leaf', key: '0-0-0-2', icon: <IconFont type="icon-sketch" /> },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <IconFont type="icon-sketch" />,
        children: [{ title: 'leaf', key: '0-0-1-0', icon: <IconFont type="icon-sketch" /> }],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <IconFont type="icon-sketch" />,
        children: [
          { title: 'leaf', key: '0-0-2-0', icon: <IconFont type="icon-sketch" /> },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <IconFont type="icon-sketch" />,
            // switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <IconFont type="icon-sketch" />,
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        icon: <IconFont type="icon-sketch" />,
        children: [
          { title: 'leaf', key: '0-1-0-0', icon: <IconFont type="icon-sketch" /> },
          { title: 'leaf', key: '0-1-0-1', icon: <IconFont type="icon-sketch" /> },
        ],
      },
    ],
  },
];

const _nodes: any[] = [
  {
    id: 'b1',
    data: {
      title: 'SaveMoneyContainer',
      description: '直塞发奖弹窗',
      logo: 'https://mdn.alipayobjects.com/huamei_fcqe9k/afts/img/A*j8ICSbNgZ3wAAAAAAAAAAAAADtOFAQ/original',
      titleSlot: {
        type: 'right',
        value: <span>aaa</span>,
      },
    },
  },
  {
    id: 'b11',
    type: 'Group',
    width: 200,
    data: {
      count: 10,
    },
  },
  {
    id: 'b2',
    type: 'Group',
    width: 234,
    data: {
      count: 2,
    },
  },
  // {
  //   id: "b2",
  //   type: "BasicNodeGroup",
  //   label: "bizData",
  //   title: "bizData",
  //   selectType: "SELECT",
  //   data: [
  //     "canSetFirst",
  //     "eventModalVisible",
  //     "quotaPopupData",
  //     "quotaPopupData1",
  //     "quotaPopupData2",
  //     "quotaPopupData3",
  //     "quotaPopupData4",
  //   ].map((item) => ({
  //     id: item,
  //     data: {
  //       title: item,
  //       description: "bizData 描述描述",
  //       logo: "https://mdn.alipayobjects.com/huamei_fcqe9k/afts/img/A*OavdQKLWtjAAAAAAAAAAAAAADtOFAQ/original",
  //     },
  //   })),
  // },
];
const _edges: any[] = [
  {
    id: 'b111',
    source: 'b1',
    target: 'b11',
  },
  {
    id: 'b12',
    source: 'b1',
    target: 'b2',
  },
];
