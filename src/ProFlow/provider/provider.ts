import { createContext } from 'react';
import { ReactFlowInstance } from 'reactflow';

interface FlowViewContextProps {
  isUseProvider?: boolean;
  reactFlowInstance?: ReactFlowInstance<any, any>;
}

export const FlowViewContext = createContext<FlowViewContextProps>({});
