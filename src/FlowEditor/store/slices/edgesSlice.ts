import isEqual from 'fast-deep-equal';
import { Connection, Edge, EdgeChange } from 'reactflow';
import { StateCreator } from 'zustand';

import { generateEdgeId } from '@/FlowEditor/utils/edge';
import { ActionOptions, ActionPayload, FlattenEdges } from '../../types';
import { FlowEditorStore } from '../actions';
import { EdgeDispatch, edgesReducer } from '../reducers/edge';

export interface PublicEdgesAction {
  dispatchEdges: (payload: EdgeDispatch, options?: ActionOptions) => void;
  addEdges: (edges: Record<string, Edge>, options?: ActionOptions) => void;
  deleteEdge: (id: string) => void;
  updateEdge: (id: string, edge: Edge, options?: ActionOptions) => void;
  updateEdgeData: <T extends object>(
    id: string,
    newData: T,
    forceReplace?: boolean,
    options?: ActionOptions,
  ) => void;
}
export interface EdgesSlice extends PublicEdgesAction {
  internalUpdateEdges: (flattenEdges: FlattenEdges, payload: ActionPayload) => void;
  updateEdgesOnConnection: (connection: Connection) => Edge | undefined;
  updateEdgesOnEdgeChange: (changes: EdgeChange[]) => void;
}

export const edgesSlice: StateCreator<
  FlowEditorStore,
  [['zustand/devtools', never]],
  [],
  EdgesSlice
> = (set, get) => ({
  internalUpdateEdges: (flattenEdges, payload) => {
    set({ flattenEdges }, false, payload);

    get().onFlattenEdgesChange?.(flattenEdges);
  },
  dispatchEdges: (payload, { recordHistory = true } = { recordHistory: true }) => {
    const { type, ...res } = payload;
    const flattenEdges = edgesReducer(get().flattenEdges, payload);
    if (isEqual(flattenEdges, get().flattenEdges)) return;

    const { internalUpdateEdges, yjsDoc } = get();

    internalUpdateEdges(flattenEdges, {
      type: `dispatchFlattenEdges/${type}`,
      payload: res,
    });

    if (recordHistory) {
      yjsDoc.recordHistoryData(
        { flattenEdges },
        { type: 'edge', name: payload.type, timestamp: Date.now() },
      );
    }
  },
  addEdges: (edges, options) => {
    get().dispatchEdges({ type: 'addEdges', edges: edges }, options);
  },

  updateEdgesOnConnection: (connection) => {
    const { source, target, sourceHandle, targetHandle } = connection;

    if (!source || !target) return;

    const edgeId = generateEdgeId(source, target, sourceHandle, targetHandle);

    const edge: Edge = {
      id: edgeId,
      source: source,
      target: target,
      sourceHandle,
      targetHandle,
    };

    get().dispatchEdges({ type: 'addEdge', edge });

    return edge;
  },

  updateEdgesOnEdgeChange: (changes) => {
    changes.forEach((e) => {
      switch (e.type) {
        case 'remove':
          get().deselectElement(e.id);
          get().dispatchEdges({ type: 'deleteEdge', id: e.id });
      }
    });
  },

  deleteEdge: (id) => {
    get().deselectElement(id);
    get().dispatchEdges({ type: 'deleteEdge', id });
  },

  updateEdgeData: (id, newData, deepReplace = false, options) => {
    get().dispatchEdges(
      {
        type: 'updateEdgeData',
        id,
        newData: newData as any,
        deepReplace,
      },
      options,
    );
  },

  updateEdge: (id, edgeData, options) => {
    get().dispatchEdges(
      {
        type: 'updateEdge',
        id,
        edge: edgeData,
      },
      options,
    );
  },
});
