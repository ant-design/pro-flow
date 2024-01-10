import { SelectType } from '@/FlowView/constants';
import { getClsFromSelectType } from '@/utils';
import React from 'react';
import { Handle, Position } from 'reactflow';
import { useStyles } from './styles';

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

export const zoomNum = (num: number, zoom: number, limitMax?: boolean) => {
  if (limitMax) return zoom > 1 ? num : num / zoom;

  return num / zoom;
};

const BasicNode: React.FC<{
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
    <div className={styles.wrap}>
      {handleType === 'output' || handleType === 'both' ? (
        <Handle type="target" position={Position.Left} style={{ left: -6 }} />
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
        <div className={cx(styles.nodeWrap, styles[getClsFromSelectType(selectType)], className)}>
          <img className={'img'} src={logo} alt="" />
          <div className={'content'}>
            <div className={'title'}>
              <span>{title}</span>
              {!!titleSlot && !!titleSlot.value && titleSlot.type === 'left' && (
                <div className={styles.titleSlotLeft}>{titleSlot.value}</div>
              )}
              {!!titleSlot && !!titleSlot.value && titleSlot.type === 'right' && (
                <div className={styles.titleSlotLeft}>
                  <div style={{ width: '28px' }}></div>
                  <div className={styles.titleSlotRight}>{titleSlot.value}</div>
                </div>
              )}
            </div>

            <div className={'des'}>{description}</div>
          </div>
        </div>
      </div>
      {handleType === 'input' || handleType === 'both' ? (
        <Handle type="source" position={Position.Right} style={{ right: -6 }} />
      ) : null}
    </div>
  );
};

export default BasicNode;
