import React, { type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import { Node } from 'reactflow';
import { NodeMapItem } from './FlowView/constants';

export enum NodeSelect {
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
export interface LineageGroupData {
  title: string;
  describe: string;
  logo: string;
  children: LineageGroupNodeData[];
}

export interface NodeTypeDataMap {
  default: DefaultNodeData;
  lineage: LineageNodeData;
  lineageGroup: LineageGroupData;
}

export type FlowNodeType = keyof NodeTypeDataMap;

export type NodeHandler = {
  [T in FlowNodeType]: (node: NodeMapItem) => React.ReactNode;
};

export type DefaultNodeType<T> = T extends FlowNodeType ? T : 'lineage';
export interface ProFlowNode<T extends FlowNodeType = DefaultNodeType<FlowNodeType>> {
  id: string;
  select?: NodeSelect;
  data: NodeTypeDataMap[T];
  type?: T;
  label?: string;
  width?: number;
  height?: number;
}

export interface ProFlowEdge {
  id: string;
  source: string;
  target: string;
  select?: NodeSelect;
  type?: EdgeType;
}

export interface ProFlowProps {
  onNodeDragStart?: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick?: (event: ReactMouseEvent) => void;
  onNodeClick?: (event: ReactMouseEvent, node: Node) => void;
  nodes: ProFlowNode[];
  edges: ProFlowEdge[];
  className?: string;
  style?: CSSProperties;
  miniMap?: boolean;
  background?: boolean;
  children?: React.ReactNode;
}

export interface ProFlowProps {
  onNodeDragStart?: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick?: (event: ReactMouseEvent) => void;
  onNodeClick?: (event: ReactMouseEvent, node: Node) => void;
  nodes: ProFlowNode[];
  edges: ProFlowEdge[];
  className?: string;
  style?: CSSProperties;
  miniMap?: boolean;
}

export interface MiniMapPosition {
  x: number;
  y: number;
}
