import { produce } from 'immer';
import { Connection, Edge } from 'reactflow';

import { merge } from 'lodash-es';
import { generateEdgeId } from '../../utils/edge';

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
  connection: Connection;
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

        Object.keys(edges).forEach((id) => {
          if (!draftState[id]) {
            draftState[id] = edges[id];
          }
        });
      });

    case 'updateEdge':
      return produce(state, (draftState) => {
        const { id, edge } = payload;
        console.log(draftState[id]);
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
        const { source, target, sourceHandle, targetHandle } = payload.connection;
        if (!source || !target) return;

        const edgeId = generateEdgeId(source, target, sourceHandle, targetHandle);

        draftState[edgeId] = {
          id: edgeId,
          source: source,
          target: target,
          sourceHandle,
          targetHandle,
        };
      });

    default:
      return state;
  }
};
