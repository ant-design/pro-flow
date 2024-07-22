import { produce } from 'immer';
import { Node, XYPosition } from 'reactflow';

import { merge } from 'lodash-es';
import { FlattenNodes, IFlowBasicNode, MetaData, NodeState } from '../../types';

interface AddNodeDispatch {
  type: 'addNode';
  node: Node;
}
interface BatchAddNodesDispatch {
  type: 'addNodes';
  nodes: Record<string, Node>;
}

interface DeleteNodeDispatch {
  type: 'deleteNode';
  id: string;
}

interface UpdateNodePositionDispatch {
  type: 'updateNodePosition';
  id: string;
  position?: XYPosition;
}

interface UpdateNodeMetaDispatch {
  type: 'updateNodeMeta';
  id: string;
  key: keyof MetaData;
  value: MetaData[keyof MetaData];
}

interface UpdateNodeStateDispatch {
  type: 'updateNodeState';
  id: string;
  key: keyof NodeState;
  value: any;
}

interface UpdateNodeContentDispatch {
  type: 'updateNodeContent';
  id: string;
  key: string;
  value: any;
}

interface UpdateNodeDataDispatch {
  type: 'updateNodeData';
  id: string;
  newData: any;
  deepReplace?: boolean;
}

export type NodeDispatch =
  | AddNodeDispatch
  | BatchAddNodesDispatch
  | DeleteNodeDispatch
  | UpdateNodePositionDispatch
  | UpdateNodeMetaDispatch
  | UpdateNodeStateDispatch
  | UpdateNodeContentDispatch
  | UpdateNodeDataDispatch;

export const nodeReducer = (state: FlattenNodes, action: NodeDispatch): FlattenNodes => {
  switch (action.type) {
    case 'addNode':
      return produce(state, (draftState) => {
        if (!action.node || !action.node.id) return;

        draftState[action.node.id] = action.node;
      });

    case 'addNodes':
      return produce(state, (draftState) => {
        const { nodes } = action;
        if (!nodes) return;

        if (Array.isArray(nodes)) {
          nodes.forEach((node) => {
            draftState[node.id] = node;
          });
        } else if (typeof nodes === 'object') {
          Object.keys(nodes).forEach((id) => {
            if (!draftState[id]) {
              draftState[id] = nodes[id];
            }
          });
        }
      });

    case 'deleteNode':
      return produce(state, (draftState) => {
        delete draftState[action.id];
      });

    case 'updateNodePosition':
      return produce(state, (draftState) => {
        if (!draftState[action.id]) return;

        if (!action.position) return;

        draftState[action.id].position = action.position;
      });

    case 'updateNodeMeta':
      return produce(state, (draftState) => {
        if (!draftState[action.id]) return;

        const node = draftState[action.id];

        node.data.meta[action.key] = action.value;
      });

    case 'updateNodeState':
      return produce(state, (draftState) => {
        if (!draftState[action.id]) return;

        const node = draftState[action.id] as IFlowBasicNode;

        node.data.state[action.key] = action.value;
      });

    case 'updateNodeContent':
      return produce(state, (draftState) => {
        const { key, id, value } = action;
        if (!draftState[id]) return;

        const node = draftState[id] as IFlowBasicNode;

        if (!node.data.content) {
          node.data.content = { [key]: value };
        } else {
          node.data.content[key] = value;
        }
      });

    case 'updateNodeData':
      return produce(state, (draftState) => {
        const { newData, id, deepReplace } = action;
        if (!draftState[id]) return;

        const node = draftState[id] as IFlowBasicNode;

        if (!deepReplace) {
          merge(node.data, newData);
        } else {
          node.data = { ...node.data, ...newData };
        }
      });

    default:
      return state;
  }
};
