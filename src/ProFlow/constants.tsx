import { Node } from 'reactflow';

export interface ProFlowNode {
  id: string;
  type: string;
  data: ProFlowNodeData;
}

export interface ProFlowNodeData {
  title: string;
  describe: string;
  logo: string;
}

export interface ProFLowEdge {
  id: string;
  source: string;
  target: string;
}

export interface InitialNode extends Node {
  width?: number;
  height?: number;
}

export interface NodeMapItem {
  id?: string;
  key?: string;
  left?: string[];
  right?: string[];
  skip?: boolean;
  title?: string;
  des?: string;
  danger?: boolean;
  dangerCount?: number;
  type?: 'input' | 'output' | 'default';
  className?: string;
  selected?: boolean;
  isGroup?: boolean;
  childrenNeedFold?: boolean;
  haveAlert?: boolean;
  mainDanger?: boolean;
  qualityScore?: string;
  subDanger?: boolean;
  data?: ProFlowNodeData;
  nodeType?: string;
  position?: {
    x: number;
    y: number;
  };
}

export type NodeMapping = Record<string, NodeMapItem>;
