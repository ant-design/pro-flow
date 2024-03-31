import { Handle, Position } from '@ant-design/pro-flow';
import useStyles from './techPipeLine.style';

interface PipeNodeChild {
  title: string;
  logo?: string;
  id: string;
}

interface PipeNode {
  title: string;
  logo: string;
  des?: string;
  children?: PipeNodeChild[];
}

const PipeNode: FC<{
  data: PipeNode;
}> = ({ data }) => {
  const { title, des, logo, children = [] } = data;
  const { styles } = useStyles();

  return (
    <div className={styles.techUIpipeNodeWrap}>
      <div className={styles.pipeNode}>
        <div className={styles.mainBox}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subLogo}>
            <img
              src={
                'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Rg0cQpidn8cAAAAAAAAAAAAADvl6AQ/original'
              }
              alt=""
            />
          </div>
        </div>

        {children.length > 0 && (
          <div className={styles.children}>
            {children.map((item, index) => (
              <div key={item.title + index}>
                <div className={styles.childrenBox}>
                  <Handle
                    id={`${item.id}-target`}
                    type="target"
                    position={Position.Left}
                    style={{
                      opacity: 0,
                    }}
                  />

                  {item.logo && (
                    <div className={styles.logo}>
                      <img src={item.logo} alt="" />
                    </div>
                  )}

                  <div className={styles.wrap}>
                    <div className={styles.lineTitle}>{item.title}</div>
                  </div>
                  <Handle
                    id={`${item.id}-source`}
                    type="source"
                    position={Position.Right}
                    style={{
                      opacity: 0,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {des && <div className={styles.des}>{des}</div>}
      </div>
    </div>
  );
};

export default PipeNode;
