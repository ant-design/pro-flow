import { createContext } from 'react';
import { ReactFlowInstance } from 'reactflow';

interface FlowViewContextProps {
  isUseProvider?: boolean;
  reactFlowInstance?: ReactFlowInstance<any, any>;
  miniMapPosition?: [number, number];
  setMiniMapPosition?: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export const FlowViewContext = createContext<FlowViewContextProps>({});
