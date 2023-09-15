import { NODE_DANGER, NODE_SELECT, NODE_WARNING, NodeSelect } from '@/ProFlow/constants';
import { ConfigProvider } from 'antd';
import { CSSProperties, ReactNode, memo, useRef } from 'react';
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

function getClsFromSelectType(select: NodeSelect) {
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

export interface BloodNodePreviewProps extends BloodNodeProps {
  /**
   * 是否激活状态
   */
  active?: boolean;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 自定义样式
   */
  onClick?: () => void;
}

const Preview = memo<Partial<BloodNodePreviewProps>>(
  ({ title, logo, description, className, selectType = NodeSelect.SELECT }) => {
    const { styles, cx } = useStyles();
    const cardRef = useRef<HTMLDivElement>(null);

    return (
      <ConfigProvider
        // 不这样做会导致 select 的下拉菜单被遮挡，并且不会正常放大缩小
        getPopupContainer={() => {
          return cardRef.current || document.body;
        }}
      >
        {/* <Card ref={cardRef} title={title} className={} style={style}>
            {children}
          </Card> */}
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
      </ConfigProvider>
    );
  },
);

const Default = memo<BloodNodeProps>(({ ...props }) => {
  return <Preview {...props} />;
}) as (props: BloodNodePreviewProps) => JSX.Element;

interface IBloodNode {
  (props: BloodNodeProps): ReactNode;
  Preview: typeof Preview;
}

const BloodNode = Default as IBloodNode;

BloodNode.Preview = Preview;

export default BloodNode;
