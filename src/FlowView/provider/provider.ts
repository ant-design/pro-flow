import { FlowViewEdge, FlowViewNode, MiniMapPosition } from '@/constants';
import { createContext } from 'react';
import { Edge, Node, ReactFlowInstance } from 'reactflow';
import { NodeMapping } from '../constants';

interface FlowViewContextProps {
  flowDataAdapter?: (
    nodes: FlowViewNode[],
    edges: FlowViewEdge[],
  ) => {
    nodes: Node[];
    edges: Edge[];
  };
  mapping?: NodeMapping;
  isUseProvider?: boolean;
  reactFlowInstance?: ReactFlowInstance<any, any>;
  miniMapPosition?: MiniMapPosition;
  setMiniMapPosition?: React.Dispatch<React.SetStateAction<MiniMapPosition>>;
}

export const FlowViewContext = createContext<FlowViewContextProps>({});
