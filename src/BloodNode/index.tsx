import { ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';
import { CSSProperties, ReactNode, memo, useRef } from 'react';

const useStyles = createStyles(({ css }) => ({
  nodeWrap: css`
    width: 320px;
    height: 85px;
    display: flex;
    /* z-index: 10 !important; */
    /* position: absolute; */
    border-radius: 12px;
    padding: 16px 12px;
    background-color: red;
    box-sizing: border-box;
    /* border: 3px solid white; */
    flex: 1;

    .img {
      width: 48px;
      height: 48px;
    }

    .content {
      width: 230px;
      margin-left: 13px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .title {
        width: 100%;
        display: flex;
        flex: 1;

        span {
          font-size: 16px;
          color: rgba(0, 0, 0, 85%);
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }

        .dangerLogo {
          width: 28px;
          height: 16px;
          background: #ffeef1;
          border-radius: 7px;
          margin-left: 8px;
          margin-top: 3px;
          img {
            width: 8px;
            height: 9px;
          }
        }
      }

      .des {
        font-size: 14px;
        color: rgba(0, 0, 0, 45%);
        line-height: 20px;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
      }
    }
  `,
}));

interface BloodNodeProps {
  logo: string;
  title: string;
  titleFlex: string;
  description: string;
  showIcon: boolean;
  icon: string;
}

export interface BloodNodePreviewProps extends BloodNodeProps {
  /**
   * 是否激活状态
   */
  active?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 自定义样式
   */
  onClick?: () => void;
}

const Preview = memo<Partial<BloodNodePreviewProps>>(({ title, logo, description }) => {
  const { styles } = useStyles();
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
      <div className={styles.nodeWrap}>
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
});

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
