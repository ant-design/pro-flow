import { FlowViewProps } from '@/constants';
import { FC, useContext } from 'react';
import FlowView from '.';
import { FlowViewProvider } from './provider/FlowViewProvider';
import { FlowViewContext } from './provider/provider';

const ProFlow: FC<FlowViewProps> = (props) => {
  const { isUseProvider } = useContext(FlowViewContext);

  if (isUseProvider) {
    return <FlowView {...props} />;
  }

  return (
    <FlowViewProvider>
      <FlowView {...props} />
    </FlowViewProvider>
  );
};

export default ProFlow;
