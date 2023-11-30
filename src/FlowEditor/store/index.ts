import { StoreApi } from 'zustand';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { createContext, optionalDevtools } from 'zustand-utils';

import { InternalFlow } from '../types';
import { DocWithHistoryManager } from '../utils/yjs';
import { createStore, FlowEditorStore } from './actions';

export const createFlowEditorStore = (showDevtools = true) => {
  const doc = new DocWithHistoryManager<InternalFlow>();

  return createWithEqualityFn<FlowEditorStore>()(
    optionalDevtools(showDevtools)(createStore(doc), { name: 'FLOW_EDITOR' }),
    shallow,
  );
};

export const { Provider, useStore, useStoreApi } = createContext<StoreApi<FlowEditorStore>>();

export type { FlowEditorStore } from './actions';
export * from './selectors';
