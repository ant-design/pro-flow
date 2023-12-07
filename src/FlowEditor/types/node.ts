import { Node, NodeProps } from 'reactflow';
import { MetaData } from './meta';

/**
 * 节点状态
 */
export interface NodeState {
  /**
   * 折叠状态
   * @default []
   */
  collapsedKeys: string[];

  /**
   * 取消请求控制器
   */
  abortController?: AbortController;

  /**
   * 是否正在加载
   */
  loading?: boolean;
}

/**
 * 流程基础节点数据
 */
export interface IFlowBasicNodeData {
  /**
   * 节点id
   */
  id: string;
  /**
   * 每个节点都会有的元数据
   */
  meta: MetaData;
  /**
   * 节点本身会存在的状态
   */
  state: NodeState;
}

// 通用节点的数据结构

export interface IFlowNodeData<T = any> extends IFlowBasicNodeData {
  content: T;
  [key: string]: any;
}

export type IFlowBasicNode<T = any> = Node<IFlowNodeData<T>>;

export type BasicFlowNodeProps<T> = NodeProps<IFlowNodeData<T>>;
