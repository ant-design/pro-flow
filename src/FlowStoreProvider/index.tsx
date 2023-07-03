import { memo, ReactNode } from 'react';
import { createFlowEditorStore, Provider } from '../FlowEditor/store';

import CommonStoreUpdater, {
  CommonUpdaterProps,
} from '../FlowEditor/container/StoreUpdater/Common';

export interface FlowEditorStoreProviderProps extends CommonUpdaterProps {
  children: ReactNode;
  showDevtools?: boolean;
}

export const FlowStoreProvider = memo<FlowEditorStoreProviderProps>(
  ({ showDevtools, children, ...props }) => {
    return (
      <Provider createStore={() => createFlowEditorStore(showDevtools)}>
        {children}
        <CommonStoreUpdater {...props} />
      </Provider>
    );
  },
);
