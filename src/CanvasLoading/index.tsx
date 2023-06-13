import { LoadingOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import { rgba } from 'polished';
import { memo, ReactNode } from 'react';
import { Center } from 'react-layout-kit';

const useStyles = createStyles(
  ({ css, token }) => css`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: ${rgba(token.colorBgContainer, 0.5)};
    backdrop-filter: blur(20px);
  `,
);

interface CanvasLoadingProps {
  children?: ReactNode;
  loading?: boolean;
}

const CanvasLoading = memo<CanvasLoadingProps>(({ children, loading }) => {
  const { styles } = useStyles();

  const content = (
    <Center className={styles}>
      <LoadingOutlined spin style={{ fontSize: 32, marginBottom: 12 }} /> 画布初始化...
    </Center>
  );

  if (!children) return content;

  return (
    <>
      {typeof loading === 'undefined' ? content : loading ? content : null}
      {children}
    </>
  );
});

export default CanvasLoading;
