import { type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import { Node } from 'reactflow';

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
  select?: NodeSelect;
  type?: EdgeType;
}

export interface ProFlowNodeData {
  title: string;
  describe: string;
  logo: string;
  titleSlot?: {
    type: 'left' | 'right';
    value: React.ReactNode;
  };
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
