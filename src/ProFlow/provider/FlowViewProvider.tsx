import { FC, ReactNode, useState } from 'react';
import { ReactFlowProvider, useReactFlow } from 'reactflow';
import { FlowViewContext } from './provider';

// 数据处理层
const ProviderInner: FC<{ children: ReactNode }> = ({ children }) => {
  const [miniMapPosition, setMiniMapPosition] = useState<[number, number]>([0, 0]);
  const reactFlowInstance = useReactFlow();

  return (
    <FlowViewContext.Provider
      value={{
        isUseProvider: true,
        reactFlowInstance,
        miniMapPosition,
        setMiniMapPosition,
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
