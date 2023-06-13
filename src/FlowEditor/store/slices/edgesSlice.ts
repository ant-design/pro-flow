import isEqual from 'fast-deep-equal';
import { Connection, Edge, EdgeChange } from 'reactflow';
import { StateCreator } from 'zustand';

import { ActionOptions, ActionPayload, FlattenEdges } from '../../types';
import { FlowEditorStore } from '../actions';
import { EdgeDispatch, edgesReducer } from '../reducers/edge';

export interface PublicEdgesAction {
  dispatchEdges: (payload: EdgeDispatch, options?: ActionOptions) => void;
  addEdges: (edges: Record<string, Edge>, options?: ActionOptions) => void;
}
export interface EdgesSlice extends PublicEdgesAction {
  internalUpdateEdges: (flattenEdges: FlattenEdges, payload: ActionPayload) => void;
  updateEdgesOnConnection: (connection: Connection) => void;
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
    get().dispatchEdges({ type: 'createEdgeFromConnection', connection });
  },

  updateEdgesOnEdgeChange: (changes) => {
    changes.forEach((e) => {
      switch (e.type) {
        case 'remove':
          get().dispatchEdges({ type: 'deleteEdge', id: e.id });
      }
    });
  },
});
