import { Edge, Node } from 'reactflow';
import { IFlowBasicNode } from './node';

export * from './meta';
export * from './node';

export type FlattenNodes = Record<string, IFlowBasicNode>;
export type FlattenEdges = Record<string, Edge>;

export interface FlowTreeNode {
  id: string;
  links: string[];
  children: FlowTreeNode[];
}

export interface InternalFlow {
  flattenNodes: Record<string, Node>;
  flattenEdges: Record<string, Edge>;
}

export interface ActionPayload {
  type: string;
  payload: any;
}

export interface ActionOptions {
  recordHistory?: boolean;
}
