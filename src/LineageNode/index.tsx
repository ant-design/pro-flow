import { SelectType } from '@/FlowView/constants';
import { getClsFromSelectType } from '@/utils';
import React from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';
import { useStyles } from './styles';

const Wrap = styled.div`
  width: 320px;
  height: 83px;
  position: relative;
`;

interface BloodNodeProps {
  logo: string;
  title?: string;
  titleFlex?: string;
  description?: string;
  showIcon?: boolean;
  icon?: string;
  className?: string;
  selectType?: SelectType;
  zoom?: number;
  label?: string;
  titleSlot?: {
    type: 'left' | 'right';
    value: React.ReactNode;
  };
  handleType?: 'input' | 'output' | 'none' | ' both';
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

const LineageNode: React.FC<{
  data: BloodNodeProps;
}> = ({ data }) => {
  const { styles, cx } = useStyles();
  const {
    title,
    logo,
    description,
    className,
    selectType = SelectType.SELECT,
    zoom = 1,
    label,
    titleSlot,
    handleType = 'both',
  } = data;

  return (
    <Wrap>
      {handleType === 'output' || handleType === 'both' ? (
        <Handle type="target" position={Position.Left} style={{ left: -6 }} />
      ) : null}
      <div>
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
      </div>
      {handleType === 'input' || handleType === 'both' ? (
        <Handle type="source" position={Position.Right} style={{ right: -6 }} />
      ) : null}
    </Wrap>
  );
};

export default LineageNode;
