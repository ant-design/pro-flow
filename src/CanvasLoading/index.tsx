import { createStyles } from 'antd-style';
import { isNull } from 'lodash-es';
import { rgba } from 'polished';
import { memo, ReactNode } from 'react';
import { Center } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: ${rgba(token.colorBgContainer, 0.5)};
    backdrop-filter: blur(20px);
  `,
  loader: css`
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${token.colorText};
    box-shadow: 0 0 0 0 ${rgba(token.colorText, 0.2)};
    animation: l2 1.5s infinite linear;
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: 0 0 0 0 ${rgba(token.colorText, 0.2)};
      animation: inherit;
      animation-delay: -0.5s;
    }

    &:after {
      animation-delay: -1s;
    }

    @keyframes l2 {
      100% {
        box-shadow: 0 0 0 40px ${rgba(token.colorText, 0)};
      }
    }
  `,
  tip: css`
    color: ${token.colorTextPlaceholder};
  `,
}));

interface CanvasLoadingProps {
  children?: ReactNode;
  loading?: boolean;
  tip?: string | null;
}

const CanvasLoading = memo<CanvasLoadingProps>(({ children, loading, tip = '画布初始化...' }) => {
  const { styles } = useStyles();

  const content = (
    <Center gap={12} className={styles.container}>
      <Center width={100} height={100}>
        <div className={styles.loader}></div>
      </Center>
      {!isNull(tip) && <div className={styles.tip}>{tip}</div>}
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
