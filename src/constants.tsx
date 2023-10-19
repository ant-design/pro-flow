import { type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import { Node } from 'reactflow';

export enum NodeSelect {
  SELECT = 'SELECT',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  DEFAULT = 'DEFAULT',
}

export enum EdgeType {
  default = 'default',
  radius = 'radius',
}

export interface ProFlowNode {
  id: string;
  group?: boolean;
  select?: NodeSelect;
  data: ProFlowNodeData | ProFlowNode[];
  label?: string;
}

export interface ProFlowEdge {
  id: string;
  source: string;
  target: string;
  type?: EdgeType;
}

export interface ProFlowNodeData {
  title: string;
  describe: string;
  logo: string;
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
