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

// 暴露给用户使用的Node配置
export interface ProFlowNode {
  id: string;
  group?: boolean;
  select?: NodeSelect;
  data: ProFlowNodeData | ProFlowNode[];
}

// 暴露给用户使用的Edge配置
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
