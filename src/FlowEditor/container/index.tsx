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
      beforeNodesChange,

      // edge change
      beforeEdgesChange,
      onEdgesChange,
      afterEdgeChange,

      // Connect
      beforeConnect,
      onConnect,
      afterConnect,

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
            onEdgesChange={onEdgesChange}
            afterEdgeChange={afterEdgeChange}
            onConnect={onConnect}
            afterConnect={afterConnect}
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
