import { Node } from 'reactflow';

import { FlowEditorStore } from './actions';

const nodeList = (s: FlowEditorStore): Node[] => {
  return Object.values(s.flattenNodes).map((n) => ({
    ...n,
    selected: s.selectedKeys.includes(n.id),
  }));
};

export const flowEditorSelectors = {
  nodeList,
  edgeList: (s: FlowEditorStore) =>
    Object.values(s.flattenEdges || {}).map((e) => ({
      ...e,
      selected: s.selectedKeys.includes(e.id),
    })),
};
