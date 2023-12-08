/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} />
    </div>
  );
}

export default App;
