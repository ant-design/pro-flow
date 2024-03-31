import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => {
  return {
    dangerLogo: {
      width: '28px',
      height: '16px',
      background: '#ffeef1',
      borderRadius: '7px',
      marginTop: '3px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: { width: '8px', height: '9px' },
    },
    container: css`
      width: 100%;
      height: 600px;
      .ant-progress-text {
        text-align: center !important;
      }
    `,
    CustomWrap: {
      width: '300px',
      height: '100px',
      backgroundColor: 'red',
    },
  };
});
export default useStyles;
