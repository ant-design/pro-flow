import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-direction: column; */
  `,
  label: css`
    text-align: center;
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #cbcdce;
    color: '#A8AAAE';
  `,
}));

export interface SwimlaneBackgroundProps {
  lanes: SwimLaneProps[];
  className?: string;
  style?: React.CSSProperties;
}

export interface SwimLaneProps {
  id: string;
  label: string;
  labelColor?: string;
  backgroundColor?: string;
  width?: string;
  style?: React.CSSProperties;
}

const SwimlaneBackground = (props: SwimlaneBackgroundProps) => {
  const { lanes, className: clm, style } = props;
  const { styles } = useStyles();

  return (
    <div
      className={`${styles.container} ${clm}`}
      style={{
        ...style,
      }}
    >
      {lanes.map((lane) => (
        <div
          key={lane.id}
          style={{
            top: 0,
            height: '100%',
            width: lane.width || '100%',
            backgroundColor: lane.backgroundColor || '#FAFAFA',
            border: '1px solid #cbcdce',
            ...lane.style,
          }}
        >
          <div
            className={styles.label}
            style={{
              backgroundColor: lane.labelColor || '#f6f8fc',
            }}
          >
            {lane.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SwimlaneBackground;
