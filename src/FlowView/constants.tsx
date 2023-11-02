import { Node } from 'reactflow';
import { ProFlowNode, ProFlowNodeData } from '../constants';

export enum NodeSelect {
  SELECT = 'SELECT',
  SUB_SELECT = 'SUB_SELECT',
  DANGER = 'DANGER',
  SUB_DANGER = 'SUB_DANGER',
  WARNING = 'WARNING',
  SUB_WARNING = 'SUB_WARNING',
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
  width?: number;
  height?: number;
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
  zoom?: number;
  label?: string;
  position?: {
    x: number;
    y: number;
  };
}

export type NodeMapping = Record<string, NodeMapItem>;

export const NODE_SELECT = 'nodeSelected';
export const NODE_SUB_SELECT = 'nodeSubSelected';
export const NODE_DANGER = 'nodeDanger';
export const NODE_SUB_DANGER = 'nodeSubDanger';
export const NODE_WARNING = 'nodeWarning';
export const NODE_SUB_WARNING = 'nodeSubWarning';

export const EDGE_SELECT = 'edgeSelected';
export const EDGE_SUB_SELECT = 'edgeSubSelected';
export const EDGE_DANGER = 'edgeDanger';
export const EDGE_SUB_DANGER = 'edgeSubDanger';
export const EDGE_WARNING = 'edgeWarning';
export const EDGE_SUB_WARNING = 'edgeSubWarning';

export const INIT_NODE = 'initialNode';
export const NODE_WRAP = 'nodeWrap';
