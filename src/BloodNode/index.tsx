import { NODE_DANGER, NODE_SELECT, NODE_WARNING, NodeSelect } from '@/ProFlow/constants';
import React from 'react';
import styled from 'styled-components';
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
  zoom?: number;
  label?: string;
}

const zoomNum = (num: number, zoom: number, limitMax?: boolean) => {
  if (limitMax) return zoom > 1 ? num : num / zoom;

  return num / zoom;
};

const ArtboardTitle = styled.div<{ zoom: number }>`
  position: absolute;
  z-index: 10;
  top: -${({ zoom }) => zoomNum(24, zoom, true)}px;
  padding: ${({ zoom }) => `${2 / zoom}px ${1 / zoom}px ${2 / zoom}px 0`};
  color: ${({ theme }) => theme.colorPrimary};
  border-radius: 4px;
  font-size: ${({ zoom }) => `${14 / zoom}px`};
  white-space: nowrap;
`;

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
  zoom = 1,
  label,
}) => {
  const { styles, cx } = useStyles();

  console.log(zoom);

  return (
    <>
      {label && (
        <ArtboardTitle zoom={zoom}>
          {zoom <= 0.1 ? `${String(label).substring(0, 3)}...` : label}
        </ArtboardTitle>
      )}
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
    </>
  );
};

export default BloodNode;
