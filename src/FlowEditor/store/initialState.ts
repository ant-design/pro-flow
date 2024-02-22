import { Edge, EdgeChange, Node, NodeChange, ReactFlowInstance, Viewport } from 'reactflow';
import { FlowTreeNode, InternalFlow } from '../types';
import { DocWithHistoryManager } from '../utils/yjs';

export interface FlowEditorState {
  flattenNodes: Record<string, Node>;
  onFlattenNodesChange?: (flattenNodes: Record<string, Node>) => void;

  flattenEdges: Record<string, Edge>;
  onFlattenEdgesChange?: (flattenEdges: Record<string, Edge>) => void;

  selectedKeys: string[];

  onSelectionChange?: (selection: string[]) => void;

  // nodes change 相关事件
  onNodesChange?: (nodeChanges: NodeChange[]) => void;
  beforeNodesChange?: (nodeChanges: NodeChange[]) => boolean;
  afterNodesChange?: (nodeChanges: NodeChange[]) => void;

  // edges change 相关事件
  onEdgesChange?: (edges: EdgeChange[]) => void;
  beforeEdgesChange?: (edges: EdgeChange[]) => boolean;
  afterEdgesChange?: (edges: EdgeChange[]) => void;

  onNodesTreeChange?: (nodesTree: FlowTreeNode[]) => void;
  onViewPortChange?: (viewport: Viewport) => void;

  reactflow: ReactFlowInstance;
  yjsDoc: DocWithHistoryManager<InternalFlow>;
}

export const initialState: FlowEditorState = {
  reactflow: {} as ReactFlowInstance,
  flattenNodes: {},
  flattenEdges: {},
  selectedKeys: [],
  yjsDoc: new DocWithHistoryManager<InternalFlow>(),
};
