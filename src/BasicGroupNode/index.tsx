import { zoomNum } from '@/BasicNode';
import { NodeMapItem, SelectType } from '@/FlowView/constants';
import { BasicGroupNodeData, BasicNodeData } from '@/constants';
import { getClsFromSelectType } from '@/utils';
import { cx } from 'antd-style';
import React from 'react';
import { Handle, Position } from 'reactflow';
import { useStyles } from './styles';

export interface BasicNodeGroupProps {
  id?: string;
  zoom?: number;
  label?: string;
  selectType?: SelectType;
  data: BasicGroupNodeData[];
  handleType?: 'input' | 'output' | 'none' | ' both';
}

const convertMappingNode = (nodeList: BasicGroupNodeData[]): NodeMapItem[] => {
  return nodeList.map((_node) => {
    return { ..._node, type: 'default', flowNodeType: 'BasicNode' };
  });
};

const GroupItem = (node: NodeMapItem) => {
  const { styles } = useStyles();
  const { id, title, des, logo } = node;

  return (
    <div className={styles.groupItemWrap} key={`${id}-${title}`}>
      <img src={logo} alt="" />
      <div className={styles.groupItemContent}>
        <div className={styles.groupItemTitle}>{title}</div>
        <div className={styles.des}>{des}</div>
      </div>
    </div>
  );
};

const BasicNodeGroup: React.FC<{
  data: BasicNodeGroupProps;
}> = ({ data }) => {
  const { styles } = useStyles();
  const {
    handleType = 'both',
    selectType = SelectType.SELECT,
    zoom = 1,
    label,
    data: _data,
  } = data;

  if ((_data as BasicGroupNodeData[]).length < 5) {
    return <div className={styles.groupWrap}>数组长度必须大于等于5！</div>;
  }

  const nodeList = convertMappingNode(_data as BasicGroupNodeData[]);

  return (
    <div
      style={{
        width: '357px',
        height: '632px',
        position: 'relative',
      }}
    >
      {handleType === 'output' || handleType === 'both' ? (
        <Handle type="target" position={Position.Left} style={{ top: 41.5, left: -6 }} />
      ) : null}
      <div>
        {label && (
          <div
            style={{
              position: 'absolute',
              zIndex: 10,
              top: `-${zoomNum(24, zoom, true)}px`,
              padding: `${2 / zoom}px ${1 / zoom}px ${2 / zoom}px 0`,
              color: `rgba(0, 0, 0, 0.45)`,
              borderRadius: `4px`,
              fontSize: `${14 / zoom}px`,
              whiteSpace: `nowrap`,
            }}
          >
            {zoom <= 0.1 ? `${String(label).substring(0, 3)}...` : label}
          </div>
        )}
        <div className={cx(styles.groupWrap, styles[getClsFromSelectType(selectType)])}>
          {nodeList!.map((_node, index) => {
            const data = _node.data as BasicNodeData;
            _node.position = {
              x: 0,
              y: 100 * index,
            };
            _node.title = data.title;
            _node.logo = data.logo;
            _node.des = data.describe;
            return GroupItem(_node);
          })}
          <div className={`${styles.btnWrap} buttonWrap`}></div>
          <div className={styles.btn}>
            查看更多
            <img
              src="https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original"
              alt=""
            />
          </div>
        </div>
      </div>
      {handleType === 'input' || handleType === 'both' ? (
        <Handle type="source" position={Position.Right} style={{ top: 41.5, right: -6 }} />
      ) : null}
    </div>
  );
};

export default BasicNodeGroup;
