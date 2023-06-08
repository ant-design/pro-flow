import type { ReactNode } from 'react';
import { memo } from 'react';
import { ReactFlowProvider } from 'reactflow';

import { createFlowEditorStore, Provider, useStoreApi } from '../store';

export const FlowEditorProvider = memo<{ children: ReactNode; showDevtools?: boolean }>(
  ({ children, showDevtools }) => {
    let isWrapped = true;

    const Content = <>{children}</>;

    try {
      useStoreApi();
    } catch (e) {
      isWrapped = false;
    }

    if (isWrapped) {
      return Content;
    }

    return (
      <ReactFlowProvider>
        <Provider createStore={() => createFlowEditorStore(showDevtools)}>{Content}</Provider>
      </ReactFlowProvider>
    );
  },
);
