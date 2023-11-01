import { MiniMapPosition } from '@/constants';
import { createContext } from 'react';
import { ReactFlowInstance } from 'reactflow';

interface FlowViewContextProps {
  isUseProvider?: boolean;
  reactFlowInstance?: ReactFlowInstance<any, any>;
  miniMapPosition?: MiniMapPosition;
  setMiniMapPosition?: React.Dispatch<React.SetStateAction<MiniMapPosition>>;
}

export const FlowViewContext = createContext<FlowViewContextProps>({});
