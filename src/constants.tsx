import React, {
  ComponentProps,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import ReactFlow, { Edge, EdgeChange, EdgeProps, Node, NodeChange, NodeProps } from 'reactflow';

export enum SelectType {
  SELECT = 'SELECT',
  SUB_SELECT = 'SUB_SELECT',
  DANGER = 'DANGER',
  SUB_DANGER = 'SUB_DANGER',
  WARNING = 'WARNING',
  SUB_WARNING = 'SUB_WARNING',
  DEFAULT = 'DEFAULT',
}

export type EdgeType = 'radius' | 'smoothstep' | 'straight' | 'step' | 'bezier';

export interface DefaultNodeData {
  className?: string;
  children?: React.ReactNode;
}

export interface BasicNodeData {
  title: string;
  describe: string;
  logo: string;
  titleSlot?: {
    type: 'left' | 'right';
    value: React.ReactNode;
  };
}

export interface BasicGroupNodeData {
  id: string;
  data: BasicNodeData;
}

export interface NodeTypeDataMap {
  default: DefaultNodeData;
  lineage: BasicNodeData;
  lineageGroup: BasicGroupNodeData[];
}

export interface FlowViewNode<T = any, U extends string | undefined = string | undefined> {
  id: string;
  select?: SelectType;
  data: T;
  type?: U;
  label?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  className?: string;
  position?: {
    x: number;
    y: number;
  };
}

export interface FlowViewEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
  animated?: boolean;
  select?: SelectType;
  label?: string;
  type?: EdgeType | string;
  className?: string;
  data?: any;
}

export interface FlowViewProps {
  onNodeDragStart?: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick?: (event: ReactMouseEvent) => void;
  onNodeClick?: (event: ReactMouseEvent, node: Node) => void;
  onEdgeClick?: (event: ReactMouseEvent, edge: Edge) => void;
  onNodesChange?: (changes: NodeChange[]) => void;
  onEdgesChange?: (changes: EdgeChange[]) => void;
  flowProps?: ComponentProps<typeof ReactFlow>;
  nodes: FlowViewNode[];
  edges: FlowViewEdge[];
  nodeTypes?: Record<string, React.ComponentType<NodeProps>>;
  edgeTypes?: Record<string, React.ComponentType<EdgeProps>>;
  style?: CSSProperties;
  miniMap?: boolean;
  background?: boolean;
  children?: React.ReactNode;
  autoLayout?: boolean;
  stepLessZooming?: boolean;
  minZoom?: number;
  maxZoom?: number;
}

export interface MiniMapPosition {
  x: number;
  y: number;
}
