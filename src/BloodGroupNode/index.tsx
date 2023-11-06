import { ArtboardTitle } from '@/BloodNode';
import { NodeMapItem, NodeSelect } from '@/FlowView/constants';
import { LineageGroupNodeData, LineageNodeData } from '@/constants';
import { getClsFromSelectType } from '@/utils';
import { cx } from 'antd-style';
import React from 'react';
import { useStyles } from './styles';

export interface BloodNodeGroupProps {
  id?: string;
  zoom?: number;
  label?: string;
  select?: NodeSelect;
  data: LineageGroupNodeData[];
}

const convertMappingNode = (nodeList: LineageGroupNodeData[]): NodeMapItem[] => {
  return nodeList.map((_node) => {
    return { ..._node, type: 'default', flowNodeType: 'lineage' };
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
  data,
  select = NodeSelect.SELECT,
  zoom = 1,
  label,
}) => {
  const { styles } = useStyles();

  if ((data as LineageGroupNodeData[]).length < 7) {
    return <div className={styles.groupWrap}>数组长度必须大于等于7！</div>;
  }

  const nodeList = convertMappingNode(data as LineageGroupNodeData[]);

  return (
    <>
      {label && (
        <ArtboardTitle zoom={zoom}>
          {zoom <= 0.1 ? `${String(label).substring(0, 3)}...` : label}
        </ArtboardTitle>
      )}
      <div className={cx(styles.groupWrap, styles[getClsFromSelectType(select)])}>
        {nodeList!.map((_node, index) => {
          const data = _node.data as LineageNodeData;
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
    </>
  );
};

export default BloodNodeGroup;
