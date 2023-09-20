export enum NodeSelect {
  SELECT = 'SELECT',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  DEFAULT = 'DEFAULT',
}
export interface ProFlowNode {
  id: string;
  group?: boolean;
  select?: NodeSelect;
  data: ProFlowNodeData | ProFlowNode[];
}

export interface ProFlowNodeData {
  title: string;
  describe: string;
  logo: string;
}
