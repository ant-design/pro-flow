import React, { type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import { Edge, EdgeProps, Node, NodeProps } from 'reactflow';
import { NodeMapItem } from './FlowView/constants';

export enum SelectType {
  SELECT = 'SELECT',
  SUB_SELECT = 'SUB_SELECT',
  DANGER = 'DANGER',
  SUB_DANGER = 'SUB_DANGER',
  WARNING = 'WARNING',
  SUB_WARNING = 'SUB_WARNING',
  DEFAULT = 'DEFAULT',
}

export enum EdgeType {
  default = 'default',
  radius = 'radius',
}

export interface DefaultNodeData {
  className?: string;
  children?: React.ReactNode;
}

export interface LineageNodeData {
  title: string;
  describe: string;
  logo: string;
  titleSlot?: {
    type: 'left' | 'right';
    value: React.ReactNode;
  };
}

export interface LineageGroupNodeData {
  id: string;
  data: LineageNodeData;
}

export interface NodeTypeDataMap {
  default: DefaultNodeData;
  lineage: LineageNodeData;
  lineageGroup: LineageGroupNodeData[];
}

export type FlowNodeType = keyof NodeTypeDataMap;

export type NodeHandler = {
  [T in FlowNodeType]: (node: NodeMapItem) => React.ReactNode;
};

export type DefaultNodeType<T> = T extends FlowNodeType ? T : 'lineage';
export interface FlowViewNode<T extends FlowNodeType = DefaultNodeType<FlowNodeType>> {
  id: string;
  select?: SelectType;
  data: NodeTypeDataMap[T] | any;
  type?: T | string;
  label?: string;
  width?: number;
  height?: number;
  position?: {
    x: number;
    y: number;
  };
}

export interface FlowViewEdge {
  id: string;
  source: string;
  target: string;
  select?: SelectType;
  label?: string;
  type?: EdgeType;
}

export interface FlowViewProps {
  onNodeDragStart?: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick?: (event: ReactMouseEvent) => void;
  onNodeClick?: (event: ReactMouseEvent, node: Node) => void;
  onEdgeClick?: (event: ReactMouseEvent, edge: Edge) => void;
  nodes: FlowViewNode[];
  edges: FlowViewEdge[];
  nodeTypes?: Record<string, React.ComponentType<NodeProps>>;
  edgeTypes?: Record<string, React.ComponentType<EdgeProps>>;
  style?: CSSProperties;
  miniMap?: boolean;
  background?: boolean;
  children?: React.ReactNode;
  autoLayout?: boolean;
}

export interface MiniMapPosition {
  x: number;
  y: number;
}
