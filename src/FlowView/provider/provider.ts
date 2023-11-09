import { FlowViewEdge, FlowViewNode, MiniMapPosition, NodeTypeDataMap } from '@/constants';
import { createContext } from 'react';
import { Edge, Node, ReactFlowInstance } from 'reactflow';
import { NodeMapping, SelectType } from '../constants';

interface FlowViewContextProps {
  flowDataAdapter?: (nodes: FlowViewNode<keyof NodeTypeDataMap>[], edges: FlowViewEdge[]) => void;
  nodes?: Node[];
  edges?: Edge[];
  mapping?: NodeMapping;
  isUseProvider?: boolean;
  reactFlowInstance?: ReactFlowInstance<any, any>;
  miniMapPosition?: MiniMapPosition;
  setMiniMapPosition?: React.Dispatch<React.SetStateAction<MiniMapPosition>>;
  // 变更方法
  updateSelectNode?: (nodeId: string, selectType: SelectType) => void;
  updateSelectEdge?: (edgeId: string, selectType: SelectType) => void;
  updateSelectNodes?: (nodeIds: string[], selectType: SelectType) => void;
  updateSelectEdges?: (edgeIds: string[], selectType: SelectType) => void;
}

export const FlowViewContext = createContext<FlowViewContextProps>({});
