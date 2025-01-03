/**
 * compact: true
 */
import { FlowView } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import SwimlaneBackground from '../components/SwimBg';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const BackgroundDemo = memo(() => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false} background={false}>
        <SwimlaneBackground
          lanes={[
            {
              id: '1',
              label: 'Swimlane 1',
              labelColor: '#FECCCB',
            },
            {
              id: '2',
              label: 'Swimlane 2',
              labelColor: '#FDCDE6',
            },
            {
              id: '3',
              label: 'Swimlane 3',
              labelColor: '#CEFFE7',
            },
            {
              id: '4',

              label: 'Swimlane 4',
              labelColor: '#CDFECE',
            },
            {
              id: '5',
              label: 'Swimlane 5',
              labelColor: '#E7FFCC',
            },
            {
              id: '6',
              label: 'Swimlane 6',
              labelColor: '#CEFFE7',
            },
            {
              id: '7',
              label: 'Swimlane 7',
              labelColor: '#CBE5FF',
            },
          ]}
        ></SwimlaneBackground>
      </FlowView>
    </div>
  );
});

export default BackgroundDemo;
