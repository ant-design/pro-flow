import { forwardRef } from 'react';
import { HotkeysProvider } from 'react-hotkeys-hook';

import App, { FlowEditorAppProps } from './FlowEditor';
import { FlowEditorProvider } from './FlowEditorProvider';
import StoreUpdater, { StoreUpdaterProps } from './StoreUpdater';

export interface FlowEditorProps extends StoreUpdaterProps, FlowEditorAppProps {
  devtools?: boolean;
}

const FlowEditor = forwardRef<any, FlowEditorProps>(
  (
    { devtools, onNodesInit, defaultViewport, contextMenuEnabled, flowProps, nodeTypes, ...res },
    ref,
  ) => {
    return (
      <HotkeysProvider initiallyActiveScopes={['flow-editor']}>
        <FlowEditorProvider showDevtools={devtools}>
          <App
            ref={ref}
            nodeTypes={nodeTypes}
            onNodesInit={onNodesInit}
            contextMenuEnabled={contextMenuEnabled}
            defaultViewport={defaultViewport}
            flowProps={flowProps}
          />
          <StoreUpdater {...res} />
        </FlowEditorProvider>
      </HotkeysProvider>
    );
  },
);

export default FlowEditor;
