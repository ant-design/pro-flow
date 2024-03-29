import { Handle, NodeProps, Position, SelectType } from '@ant-design/pro-flow';
import { FC } from 'react';
import useStyles from '../../index.style';

interface PipeNodeChild {
  title: string;
  des: string;
  logo: string;
}

interface PipeNode {
  stepTitle: string;
  title: string;
  des: string;
  logo: string;
  needSwitch?: boolean;
  children?: PipeNodeChild[];
  selectType?: SelectType;
}

export const PipeNode: FC<NodeProps<PipeNode>> = ({ id, data }) => {
  const { stepTitle, title, des, logo, needSwitch = false, children = [], selectType } = data;
  const { styles } = useStyles();

  return (
    <div className={'pipeNodeWrap' + ` pipeNode-${selectType}`}>
      <Handle
        type="target"
        id={`${id}`}
        position={Position.Left}
        style={{
          opacity: 0,
          top: 30,
          left: 3,
        }}
      />
      <div className={styles.stepTitle}>{stepTitle}</div>
      <div className={styles.pipeNode}>
        <div className={styles.mainBox}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.wrap}>
            <div className={styles.title}>{title}</div>
            <div className={styles.des}>{des}</div>
          </div>
          {needSwitch && (
            <div className={styles.pipeNodeRight}>
              <div className={styles.switch}>
                <div className={styles.switchIcon}></div>
              </div>
            </div>
          )}
        </div>
        {children.length > 0 && (
          <div className={styles.children}>
            {children.map((item, index) => (
              <div style={{ position: 'relative' }} key={item.title + ''}>
                {item.leftHandle && (
                  <Handle
                    type="target"
                    id={`${id}-${item.title}-target`}
                    position={Position.Left}
                    style={{
                      opacity: 0,
                      top: 45,
                      left: 0,
                    }}
                  />
                )}
                <div className={styles.childrenBox}>
                  <div className={styles.logo}>
                    <img src={item.logo} alt="" />
                  </div>
                  <div className={styles.wrap}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.des}>{item.des}</div>
                  </div>
                </div>
                {item.rightHandle && (
                  <Handle
                    type="source"
                    id={`${id}-${item.title}-source`}
                    position={Position.Right}
                    style={{
                      top: 45,
                      right: 0,
                      opacity: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Handle
        type="source"
        id={`${id}`}
        position={Position.Right}
        style={{
          top: 30,
          right: 3,
          opacity: 0,
        }}
      />
    </div>
  );
};
