import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  input: css`
    position: relative;

    max-width: 100%;
    height: 36px;
    padding: 0 12px;

    transition: background-color 100ms ${token.motionEaseOut};

    input {
      background: transparent;
    }
  `,
  block: css`
    background-color: ${token.colorFillTertiary};
    border: 1px solid transparent;

    &:hover {
      background-color: ${token.colorFillQuaternary};
    }
  `,

  textarea: css`
    position: relative;

    max-width: 100%;
    padding: 8px 12px;

    transition: background-color 100ms ${token.motionEaseOut};

    textarea {
      background: transparent;
    }
  `,
}));
