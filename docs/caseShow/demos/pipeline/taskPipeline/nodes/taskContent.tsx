import { CheckCircleFilled, ClockCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import useStyles from './styled';

export const TaskContent = () => {
  const { styles } = useStyles();

  return (
    <ul className={styles.taskContent}>
      <li>
        <CheckCircleFilled style={{ color: '#008000', fontSize: 14 }} />
        <div>
          <span>七尼尼 已完成</span>
          <span>43s</span>
        </div>
      </li>
      <li />
      <li>
        <CheckCircleFilled style={{ color: '#008000', fontSize: 14 }} />
        <div>
          <span>lydon 已完成</span>
          <span>43s</span>
        </div>
      </li>
      <li />
      <li>
        <CloseCircleFilled style={{ color: '#ff4000', fontSize: 14 }} />
        <div>
          <span>青霓 审批不通过</span>
          <span>43s</span>
        </div>
      </li>
      <li />
      <li>
        <ClockCircleFilled style={{ color: 'rgba(0, 0, 0, 0.2)', fontSize: 14 }} />
        <div>
          <span>青霓 未开始</span>
          <span />
        </div>
      </li>
    </ul>
  );
};
