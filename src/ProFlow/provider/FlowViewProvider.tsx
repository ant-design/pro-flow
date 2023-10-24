import { FC, ReactNode } from 'react';
import { ReactFlowProvider, useReactFlow } from 'reactflow';
import { FlowViewContext } from './provider';

// 数据处理层
const ProviderInner: FC<{ children: ReactNode }> = ({ children }) => {
  const reactFlowInstance = useReactFlow();

  return (
    <FlowViewContext.Provider
      value={{
        isUseProvider: true,
        reactFlowInstance,
      }}
    >
      {children}
    </FlowViewContext.Provider>
  );
};

export const FlowViewProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ReactFlowProvider>
      <ProviderInner>{children}</ProviderInner>
    </ReactFlowProvider>
  );
};
