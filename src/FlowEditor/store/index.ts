import { create, StoreApi } from 'zustand';
import { createContext, optionalDevtools } from 'zustand-utils';

import { InternalFlow } from '../types';
import { DocWithHistoryManager } from '../utils/yjs';
import { createStore, FlowEditorStore } from './actions';

export const createFlowEditorStore = (showDevtools = false) => {
  const doc = new DocWithHistoryManager<InternalFlow>();

  return create<FlowEditorStore>()(
    optionalDevtools(showDevtools)(createStore(doc), { name: 'FLOW_EDITOR' }),
  );
};

export const { Provider, useStore, useStoreApi } = createContext<StoreApi<FlowEditorStore>>();

export type { FlowEditorStore } from './actions';
export * from './selectors';
