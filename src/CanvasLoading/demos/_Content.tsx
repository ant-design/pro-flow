import { SmileOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css, cx }) => {
  const commonCard = css`
    border-radius: ${token.borderRadiusLG}px;
    padding: ${token.paddingLG}px;
  `;

  return {
    container: css`
      background-color: ${token.colorBgLayout};
      padding: 24px;
    `,

    defaultCard: css`
      ${commonCard};
      background: ${token.colorBgContainer};
      color: ${token.colorText};
    `,

    primaryCard: cx(
      commonCard,
      css`
        background: ${token.colorPrimary};
        color: ${token.colorTextLightSolid};
      `,
    ),
  };
});

const App = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <Space direction={'vertical'} style={{ width: '100%' }} size={16}>
        <Space>
          <Button title={'功能按钮的说明'} icon={<SmileOutlined />} />
          操作按钮
        </Space>
        <div className={styles.defaultCard}>普通卡片</div>
        <div className={styles.primaryCard}>主要卡片</div>
      </Space>
    </div>
  );
};

export default App;
