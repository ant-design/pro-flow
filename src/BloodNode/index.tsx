import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  nodeWrap: css`
    width: 320px;
    height: 85px;
    display: flex;
    z-index: 10 !important;
    position: absolute;
    border-radius: 12px;
    padding: 16px 12px;
    background-color: white;
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

const BloodNode: React.FC<Partial<BloodNodeProps>> = ({
  logo,
  title,
  // titleFlex,
  description,
  // showIcon,
  // icon,
}) => {
  const { styles } = useStyles();

  return (
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
  );
};

export default BloodNode;
