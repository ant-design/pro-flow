import { StateCreator } from 'zustand';

import { FlowEditorState, initialState } from './initialState';
import { InternalStoreAction, edgesSlice, generalActionSlice, nodesSlice } from './slices';

import { InternalFlow } from '../types';
import { DocWithHistoryManager } from '../utils/yjs';

export type FlowEditorStore = FlowEditorState & InternalStoreAction;

export const createStore =
  (
    yjsDoc: DocWithHistoryManager<InternalFlow>,
  ): StateCreator<FlowEditorStore, [['zustand/devtools', never]]> =>
  (...params) => ({
    ...initialState,
    yjsDoc,

    ...edgesSlice(...params),
    ...nodesSlice(...params),
    ...generalActionSlice(...params),
  });
