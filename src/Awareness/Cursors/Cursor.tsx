import Color from 'color';
import { memo } from 'react';

import { createStyles } from '@/theme';
import CursorSvg from './CursorSvg';

const useStyles = createStyles(({ css }) => ({
  container: css`
    position: fixed;

    z-index: 5000;
  `,
  name: css`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    max-width: 96px;
    padding: 2px 12px;
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
}));

export interface CursorProps {
  position: { x: number; y: number };
  color: string;
  name: string;
}

const Cursor = memo<CursorProps>(({ position, color, name }) => {
  const { styles } = useStyles();

  return (
    <div
      className={styles.container}
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <CursorSvg color={color} />
      <div
        className={styles.name}
        style={{
          backgroundColor: color,
          color: Color(color).isLight() ? 'black' : 'white',
        }}
      >
        {name}
      </div>
    </div>
  );
});

export default Cursor;
