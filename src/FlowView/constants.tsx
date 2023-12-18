import { Node } from 'reactflow';

export enum SelectType {
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

export interface NodeMapItem<T = any, U extends string | undefined = string | undefined> {
  id: string;
  key?: string;
  left?: string[];
  right?: string[];
  skip?: boolean;
  title?: string;
  group?: boolean;
  des?: string;
  width?: number | null;
  height?: number | null;
  danger?: boolean;
  dangerCount?: number;
  type?: 'input' | 'output' | 'default';
  flowNodeType?: U;
  className?: string;
  select?: SelectType;
  isGroup?: boolean;
  childrenNeedFold?: boolean;
  haveAlert?: boolean;
  mainDanger?: boolean;
  qualityScore?: string;
  subDanger?: boolean;
  logo?: string;
  data: T;
  nodeType?: string;
  zoom?: number;
  label?: string;
  position?: {
    x: number;
    y: number;
  };
}

export interface LayoutOptions {
  rankdir?: 'TB' | 'BT' | 'LR' | 'RL';
  align?: 'UL' | 'DL' | 'UR' | 'DR';
  nodesep?: number;
  ranksep?: number;
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
