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
    {
      devtools,
      onNodesInit,
      onEdgeChange,
      beforeNodesChange,
      beforeEdgesChange,
      beforeConnect,
      defaultViewport,
      contextMenuEnabled,
      flowProps,
      nodeTypes,
      children,
      miniMap,
      background,
      ...res
    },
    ref,
  ) => {
    return (
      <HotkeysProvider initiallyActiveScopes={['flow-editor']}>
        <FlowEditorProvider showDevtools={devtools}>
          <App
            ref={ref}
            nodeTypes={nodeTypes}
            miniMap={miniMap}
            background={background}
            onNodesInit={onNodesInit}
            beforeNodesChange={beforeNodesChange}
            beforeEdgesChange={beforeEdgesChange}
            beforeConnect={beforeConnect}
            onEdgeChange={onEdgeChange}
            contextMenuEnabled={contextMenuEnabled}
            defaultViewport={defaultViewport}
            flowProps={flowProps}
          >
            {children}
          </App>
          <StoreUpdater {...res} />
        </FlowEditorProvider>
      </HotkeysProvider>
    );
  },
);

export default FlowEditor;
