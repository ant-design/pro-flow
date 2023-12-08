import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => {
  return {
    edgebutton: css`
      width: '0px';
      background: '#eee';
      border: '1px solid #fff';
      cursor: 'pointer';
      border-radius: '30px';
      font-size: '12px';
      line-height: '1';
      margin-bottom: 8px;
      cursor: pointer;

      &:hover {
        box-shadow: '0 0 6px 2px rgba(0, 0, 0, 0.08)';
      }
    `,
    customEdge: css`
      background-color: red;
      &:hover {
        path {
          stroke: red;
        }
      }
    `,
    container: {
      width: '100%',
      height: '400px',
    },
    path: {
      stroke: 'red',
    },
  };
});
export default useStyles;
