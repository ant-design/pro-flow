import { produce } from 'immer';
import { Edge } from 'reactflow';

import { merge } from 'lodash-es';

export type EdgesState = Record<string, Edge>;

interface AddEdgeAction {
  type: 'addEdge';
  edge: Edge;
}

interface BatchAddEdgesAction {
  type: 'addEdges';
  edges: Record<string, Edge>;
}

interface UpdateEdgeAction {
  type: 'updateEdge';
  id: string;
  edge: Edge;
}

interface UpdateEdgeDataAction {
  type: 'updateEdgeData';
  id: string;
  newData: any;
  deepReplace?: boolean;
}

interface DeleteEdgeAction {
  type: 'deleteEdge';
  id: string;
}

interface CreateEdgeFromConnectionAction {
  type: 'createEdgeFromConnection';
  edge: Edge;
}

export type EdgeDispatch =
  | AddEdgeAction
  | BatchAddEdgesAction
  | UpdateEdgeAction
  | DeleteEdgeAction
  | CreateEdgeFromConnectionAction
  | UpdateEdgeDataAction;

export const edgesReducer = (state: EdgesState, payload: EdgeDispatch): EdgesState => {
  switch (payload.type) {
    case 'addEdge':
      return produce(state, (draftState) => {
        draftState[payload.edge.id] = payload.edge;
      });

    case 'addEdges':
      return produce(state, (draftState) => {
        const { edges } = payload;
        if (!edges) return;

        if (Array.isArray(edges)) {
          edges.forEach((edge) => {
            draftState[edge.id] = edge;
          });
        } else if (typeof edges === 'object') {
          Object.keys(edges).forEach((id) => {
            if (!draftState[id]) {
              draftState[id] = edges[id];
            }
          });
        }
      });

    case 'updateEdge':
      return produce(state, (draftState) => {
        const { id, edge } = payload;

        draftState[id] = { ...draftState[id], ...edge };
      });

    case 'updateEdgeData':
      return produce(state, (draftState) => {
        const { newData, id, deepReplace } = payload;
        draftState[id] = { ...draftState[id], data: newData };

        if (!draftState[id]) return;

        const edge = draftState[id] as Edge;
        if (!deepReplace) {
          draftState[id] = { ...draftState[id], ...edge, data: merge(edge.data, newData) };
        } else {
          draftState[id] = { ...draftState[id], ...edge, data: { ...edge.data, ...newData } };
        }
      });

    case 'deleteEdge':
      return produce(state, (draftState) => {
        delete draftState[payload.id];
      });

    case 'createEdgeFromConnection':
      return produce(state, (draftState) => {
        const edge = payload.edge;

        draftState[edge.id] = edge;
      });

    default:
      return state;
  }
};
