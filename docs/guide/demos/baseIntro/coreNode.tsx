/**
 * compact: true
 */
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';

const nodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
];

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={[]} miniMap={false} />
    </div>
  );
}

export default App;
