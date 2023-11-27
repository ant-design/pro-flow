/**
 * compact: true
 */
import { FlowView, Handle, Position } from '@ant-design/pro-flow';
import { FC } from 'react';
import './css/customerNode.less';

interface PipeNodeChild {
  title: string;
  des: string;
  logo: string;
}

interface PipeNode {
  stepTitle: string;
  title: string;
  des: string;
  logo: string;
  needSwitch?: boolean;
  children?: PipeNodeChild[];
}

const CustomNode: FC<{
  data: PipeNode;
}> = ({ data }) => {
  const { stepTitle, title, des, logo, needSwitch = false, children = [] } = data;

  return (
    <div className={'customerWrap'}>
      <Handle
        type="target"
        position={Position.Left}
        style={{
          opacity: 0,
          top: 30,
          left: 3,
        }}
      />
      <div className="stepTitle">{stepTitle}</div>
      <div className="pipeNode">
        <div className="mainBox">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="wrap">
            <div className="title">{title}</div>
            <div className="des">{des}</div>
          </div>
          {needSwitch && (
            <div className="pipeNodeRight">
              <div className="switch">
                <div className="switchIcon"></div>
              </div>
            </div>
          )}
        </div>
        {children.length > 0 && (
          <div className="children">
            {children.map((item, index) => (
              <div className="childrenBox" key={index}>
                <div className="logo">
                  <img src={item.logo} alt="" />
                </div>
                <div className="wrap">
                  <div className="title">{item.title}</div>
                  <div className="des">{item.des}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        style={{
          top: 30,
          right: 3,
          opacity: 0,
        }}
      />
    </div>
  );
};

const nodes = [
  {
    id: 'a1',
    type: 'customNode',
    width: 170,
    height: 500,
    data: {
      stepTitle: '阶段 1: 部署平台 npmregistry@...',
      title: 'npmregistry@DEFAULT ...',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '34秒',
      needSwitch: true,
      open: true,
      children: [
        {
          title: '参数初始化',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: 'NPM 组件初始化',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '30秒',
        },
        {
          title: '同步成员（仅子组件生...',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '0秒',
        },
        {
          title: '注册部署平台',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '0秒',
        },
      ],
    },
  },
];

const nodeTypes = { customNode: CustomNode };

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={[]} nodeTypes={nodeTypes} miniMap={false} />
    </div>
  );
}

export default App;
