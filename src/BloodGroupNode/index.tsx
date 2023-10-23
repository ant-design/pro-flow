import { ArtboardTitle, getClsFromSelectType } from '@/BloodNode';
import { NodeMapItem, NodeSelect } from '@/ProFlow/constants';
import { ProFlowNode, ProFlowNodeData } from '@/constants';
import { cx } from 'antd-style';
import React from 'react';
import { useStyles } from './styles';

export interface BloodNodeGroupProps {
  id?: string;
  zoom?: number;
  label?: string;
  select?: NodeSelect;
  data: ProFlowNode[];
  group: boolean;
}

const convertMappingNode = (nodeList: ProFlowNode[]): NodeMapItem[] => {
  return nodeList.map((node) => {
    return node;
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

const BloodNodeGroup: React.FC<BloodNodeGroupProps> = ({
  group,
  data,
  select = NodeSelect.SELECT,
  zoom = 1,
  label,
}) => {
  const { styles } = useStyles();

  if (!group) {
    return null;
  }

  if ((data as ProFlowNode[]).length < 7) {
    return <div className={styles.groupWrap}>数组长度必须大于等于7！</div>;
  }

  const nodeList = convertMappingNode(data as ProFlowNode[]);

  return (
    <>
      {label && (
        <ArtboardTitle zoom={zoom}>
          {zoom <= 0.1 ? `${String(label).substring(0, 3)}...` : label}
        </ArtboardTitle>
      )}
      <div className={cx(styles.groupWrap, styles[getClsFromSelectType(select)])}>
        {nodeList!.map((_node, index) => {
          const data = _node.data as ProFlowNodeData;
          _node.position = {
            x: 0,
            y: 100 * index,
          };
          _node.title = data.title;
          _node.logo = data.logo;
          _node.des = data.describe;
          return GroupItem(_node);
        })}
        <div className={styles.btnWrap}></div>
        <div className={styles.btn}>
          查看更多
          <img
            src="https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*W5bAS6ZOqOwAAAAAAAAAAAAADvuvAQ/original"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BloodNodeGroup;