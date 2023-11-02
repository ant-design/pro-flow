import {
  NODE_DANGER,
  NODE_SELECT,
  NODE_SUB_DANGER,
  NODE_SUB_SELECT,
  NODE_SUB_WARNING,
  NODE_WARNING,
  NodeSelect,
} from '@/FlowView/constants';
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
  titleSlot?: {
    type: 'left' | 'right';
    value: React.ReactNode;
  };
}

const zoomNum = (num: number, zoom: number, limitMax?: boolean) => {
  if (limitMax) return zoom > 1 ? num : num / zoom;

  return num / zoom;
};

export const ArtboardTitle = styled.div<{ zoom: number }>`
  position: absolute;
  z-index: 10;
  top: -${({ zoom }) => zoomNum(24, zoom, true)}px;
  padding: ${({ zoom }) => `${2 / zoom}px ${1 / zoom}px ${2 / zoom}px 0`};
  color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  font-size: ${({ zoom }) => `${14 / zoom}px`};
  white-space: nowrap;
`;

const TitleSlotLeft = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 8px;
`;

const TitleSlotRight = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 13px;
  top: 9px;
`;

export function getClsFromSelectType(select: NodeSelect) {
  switch (select) {
    case NodeSelect.SELECT:
      return NODE_SELECT;
    case NodeSelect.SUB_SELECT:
      return NODE_SUB_SELECT;
    case NodeSelect.DANGER:
      return NODE_DANGER;
    case NodeSelect.SUB_DANGER:
      return NODE_SUB_DANGER;
    case NodeSelect.WARNING:
      return NODE_WARNING;
    case NodeSelect.SUB_WARNING:
      return NODE_SUB_WARNING;
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
  titleSlot,
}) => {
  const { styles, cx } = useStyles();

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
            {!!titleSlot && !!titleSlot.value && titleSlot.type === 'left' && (
              <TitleSlotLeft>{titleSlot.value}</TitleSlotLeft>
            )}
            {!!titleSlot && !!titleSlot.value && titleSlot.type === 'right' && (
              <TitleSlotLeft>
                <div style={{ width: '28px' }}></div>
                <TitleSlotRight>{titleSlot.value}</TitleSlotRight>
              </TitleSlotLeft>
            )}
          </div>

          <div className={'des'}>{description}</div>
        </div>
      </div>
    </>
  );
};

export default BloodNode;
