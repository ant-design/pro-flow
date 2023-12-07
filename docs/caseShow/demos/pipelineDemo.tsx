/**
 * compact: true
 */
import {
  Background,
  FlowView,
  FlowViewProvider,
  Handle,
  Position,
  useFlowViewer,
} from '@ant-design/pro-flow';
import { FC, useCallback } from 'react';
import { SelectType } from '../../../src';
import useStyles from './index.style';

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
  selectType?: SelectType;
}

const nodeWidth = 170;
const nodeHeight = 500;

export const PipeNode: FC<{
  data: PipeNode;
}> = ({ data }) => {
  const { stepTitle, title, des, logo, needSwitch = false, children = [], selectType } = data;
  const { styles } = useStyles();

  return (
    <div className={'pipeNodeWrap' + ` pipeNode-${selectType}`}>
      <Handle
        type="target"
        position={Position.Left}
        style={{
          opacity: 0,
          top: 30,
          left: 3,
        }}
      />
      <div className={styles.stepTitle}>{stepTitle}</div>
      <div className={styles.pipeNode}>
        <div className={styles.mainBox}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.wrap}>
            <div className={styles.title}>{title}</div>
            <div className={styles.des}>{des}</div>
          </div>
          {needSwitch && (
            <div className={styles.pipeNodeRight}>
              <div className={styles.switch}>
                <div className={styles.switchIcon}></div>
              </div>
            </div>
          )}
        </div>
        {children.length > 0 && (
          <div className={styles.children}>
            {children.map((item, index) => (
              <div className={styles.childrenBox} key={index}>
                <div className={styles.logo}>
                  <img src={item.logo} alt="" />
                </div>
                <div className={styles.wrap}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.des}>{item.des}</div>
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

const nodeTypes = { pipeNode: PipeNode };

const nodes = [
  {
    id: 'a1',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
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
  {
    id: 'a2',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 2: 部署平台 xxx@DEFAULT ...',
      title: 'xxx@DEFAULT 初始化',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '2秒',
      needSwitch: true,
      open: true,
      children: [
        {
          title: '初始化海图组件',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: '注册部署平台',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '0秒',
        },
      ],
    },
  },
  {
    id: 'a3',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 3: 三方关联初始化',
      title: '监控初始化',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '1秒',
    },
  },
  {
    id: 'a4',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 4: 准备组件仓库初始化',
      title: '重命名 name',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '1秒',
    },
  },
  {
    id: 'a5',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 5: 代码初始化',
      title: '仓库初始化',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*7gzVQJ63mfEAAAAAAAAAAAAADvl6AQ/original',
      des: '6秒',
      needSwitch: true,
      open: true,
      children: [
        {
          title: '创建仓库',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '3秒',
        },
        {
          title: '接触分支保护',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: '初始化代码模板',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*7gzVQJ63mfEAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: '创建代码基线',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
          des: '未开始',
        },
      ],
    },
  },
  {
    id: 'a6',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 6: 仓库权限同步',
      title: '同步至埋点平台',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
      des: '未开始',
    },
  },
];

const edges = [
  {
    id: 'e1',
    source: 'a1',
    target: 'a2',
    animated: true,
  },
  {
    id: 'e2',
    source: 'a2',
    target: 'a3',
    animated: true,
  },
  {
    id: 'e3',
    source: 'a3',
    target: 'a4',
    animated: true,
  },
  {
    id: 'e4',
    source: 'a4',
    target: 'a5',
    animated: true,
  },
  {
    id: 'e5',
    source: 'a5',
    target: 'a6',
    animated: true,
  },
];

function App() {
  const flowViewer = useFlowViewer();
  const { styles } = useStyles();

  const handleClick = useCallback(
    (e, n) => {
      flowViewer?.zoomToNode(n.id, 1000);
    },
    [flowViewer],
  );

  const handlePaneClick = useCallback(() => {
    // flowViewer?.zoomToNode(n.id, 1000);
  }, [flowViewer]);

  return (
    <div className={styles.container}>
      <FlowView
        onNodeClick={handleClick}
        onPaneClick={handlePaneClick}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        background={false}
      >
        <Background color="white" variant="none" style={{ background: 'white' }} />
      </FlowView>
    </div>
  );
}

function ProApp() {
  return (
    <FlowViewProvider>
      <App />
    </FlowViewProvider>
  );
}

export default ProApp;
