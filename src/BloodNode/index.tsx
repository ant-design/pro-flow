import { NODE_DANGER, NODE_SELECT, NODE_WARNING, NodeSelect } from '@/ProFlow/constants';
import React from 'react';
import { useStyles } from './styles';

interface BloodNodeProps {
  logo: string;
  title?: string;
  titleFlex?: string;
  description?: string;
  showIcon?: boolean;
  icon?: string;
  className?: string;
  selectType?: NodeSelect;
}

export function getClsFromSelectType(select: NodeSelect) {
  switch (select) {
    case NodeSelect.SELECT:
      return NODE_SELECT;
    case NodeSelect.DANGER:
      return NODE_DANGER;
    case NodeSelect.WARNING:
      return NODE_WARNING;
    default:
      return 'nodeDefault';
  }
}

const BloodNode: React.FC<Partial<BloodNodeProps>> = ({
  title,
  logo,
  description,
  className,
  selectType = NodeSelect.SELECT,
}) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles.nodeWrap, styles[getClsFromSelectType(selectType)], className)}>
      <img className={'img'} src={logo} alt="" />
      <div className={'content'}>
        <div className={'title'}>
          <span>{title}</span>
          {/* {mainDanger && <DangerLogo />}
        {qualityScore && <ApiScore score={parseFloat(qualityScore)} />} */}
        </div>
        <div className={'des'}>{description}</div>
      </div>
    </div>
  );
};

export default BloodNode;
