import { ProFlowNode, ProFlowNodeData } from '@/constants';
import { Node } from 'reactflow';

export enum NodeSelect {
  SELECT = 'SELECT',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  DEFAULT = 'DEFAULT',
}

export interface InitialNode extends Node {
  width?: number;
  height?: number;
}

export interface NodeMapItem {
  id: string;
  key?: string;
  left?: string[];
  right?: string[];
  skip?: boolean;
  title?: string;
  group?: boolean;
  des?: string;
  danger?: boolean;
  dangerCount?: number;
  type?: 'input' | 'output' | 'default';
  className?: string;
  select?: NodeSelect;
  isGroup?: boolean;
  childrenNeedFold?: boolean;
  haveAlert?: boolean;
  mainDanger?: boolean;
  qualityScore?: string;
  subDanger?: boolean;
  logo?: string;
  data: ProFlowNodeData | ProFlowNode[];
  nodeType?: string;
  position?: {
    x: number;
    y: number;
  };
}

export type NodeMapping = Record<string, NodeMapItem>;

export const NODE_SELECT = 'nodeSelected';
export const NODE_DANGER = 'nodeDanger';
export const NODE_WARNING = 'nodeWarning';
export const INIT_NODE = 'initialNode';
export const NODE_WRAP = 'nodeWrap';
export const EDGE_SELECT = 'edgeSelected';
export const EDGE_DANGER = 'edgeDanger';
export const EDGE_WARNING = 'edgeWarning';
