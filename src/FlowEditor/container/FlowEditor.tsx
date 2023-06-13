import { createStyles } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { debounce, throttle } from 'lodash-es';
import { forwardRef, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Node,
  NodeTypes,
  SelectionMode,
  Viewport,
  useNodesInitialized,
  useOnViewportChange,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { shallow } from 'zustand/shallow';

import CanvasLoading from '@/CanvasLoading';
import ContextMenu from '../features/ContextMenu';
import ControlAction from '../features/ControlAction';
import { FlowEditorInstance, useFlowEditor } from '../hooks/useFlowEditor';
import { useHotkeyManager } from '../hooks/useHotkeyManager';
import { flowEditorSelectors, useStore } from '../store';

export const useStyles = createStyles(({ css, token }) => ({
  container: css`
    background: ${token.colorBgLayout};

    -webkit-font-smoothing: antialiased;

    .react-flow__pane {
      cursor: default;
    }
    .react-flow__edge-path,
    .react-flow__connection-path {
      stroke: ${token.colorBorder};
      stroke-width: 3px;
    }

    .react-flow__edge.selected .react-flow__edge-path,
    .react-flow__edge:focus .react-flow__edge-path,
    .react-flow__edge:focus-visible .react-flow__edge-path {
      stroke: ${token.colorPrimary};
      stroke-width: 4px;
    }
  `,
  minimap: css`
    overflow: hidden;
    height: 150px;
    background: ${token.colorBgContainer};
    border-radius: 4px;
  `,
}));

export interface AppProps {
  nodeTypes?: NodeTypes;
  defaultViewport?: Viewport;
  onNodesInit?: (editor: FlowEditorInstance) => void;
  onNodesInitChange?: (init: boolean) => void;
}

const FlowEditor = forwardRef<any, AppProps>(({ nodeTypes, defaultViewport, onNodesInit }, ref) => {
  const { theme, styles } = useStyles();
  const [flowInit, setFlowInit] = useState(false);

  const nodes: Node[] = useStore(flowEditorSelectors.nodeList, isEqual);
  const edges = useStore(flowEditorSelectors.edgeList, isEqual);
  const editor = useFlowEditor();
  const [
    onNodesChange,
    updateEdgesOnConnection,
    updateEdgesOnEdgeChange,
    onViewPortChange,
    onElementSelectChange,
    onEdgesChange,
    dispatchNodes,
  ] = useStore(
    (s) => [
      s.onNodesChange,
      s.updateEdgesOnConnection,
      s.updateEdgesOnEdgeChange,
      s.onViewPortChange,
      s.onElementSelectChange,
      s.onEdgesChange,
      s.dispatchNodes,
    ],
    shallow,
  );

  const instance = useReactFlow();

  // 添加快捷键监听
  useHotkeyManager();

  // 抛出 viewport 变化的事件
  useOnViewportChange({
    onChange: onViewPortChange ? debounce(onViewPortChange, 300) : undefined,
  });

  const nodesInitialized = useNodesInitialized();

  useEffect(() => {
    // 先把画布的 viewport 设置好
    if (!defaultViewport) {
      instance.fitView();
    } else {
      instance.setViewport(defaultViewport);
    }

    // 然后设定初始化节点的相关状态
    if (nodesInitialized) {
      setFlowInit(true);
      onNodesInit?.(editor);
    }
  }, [nodesInitialized]);

  return (
    <Flexbox height={'100%'} width={'100%'} style={{ position: 'relative' }}>
      {!flowInit && <CanvasLoading />}
      <ReactFlow
        nodeTypes={nodeTypes}
        ref={ref}
        // 如果外部传入 viewport，则使用外部的 viewport
        defaultViewport={defaultViewport}
        // 否则就 fit view
        fitView={!defaultViewport}
        fitViewOptions={{ padding: 3 }}
        nodes={nodes}
        edges={edges}
        // snapToGrid
        snapGrid={[20, 20]}
        minZoom={0.05}
        // 画布配置逻辑
        panOnScroll
        panOnDrag={false}
        zoomOnScroll={false}
        // 选择模式逻辑
        selectionMode={SelectionMode.Partial}
        selectionKeyCode={['Meta', 'Shift']}
        multiSelectionKeyCode={['Meta', 'Shift']}
        selectNodesOnDrag
        onNodesChange={(changes) => {
          // 选择逻辑 nodes 和 edges 一致
          changes.forEach((c) => {
            switch (c.type) {
              case 'add':
                dispatchNodes({ type: 'addNode', node: c.item });
                break;
              case 'position':
                // 结束拖拽时，会触发一次 position，此时 dragging 为 false
                if (!c.dragging) break;

                dispatchNodes({ type: 'updateNodePosition', position: c.position, id: c.id });

                break;

              case 'remove':
                dispatchNodes({ type: 'deleteNode', id: c.id });
                break;
              case 'select':
                onElementSelectChange(c.id, c.selected);
            }
          });

          if (onNodesChange) {
            throttle(onNodesChange, 50)(changes);
          }
        }}
        onEdgesChange={(changes) => {
          updateEdgesOnEdgeChange(changes);

          // 选择逻辑 nodes 和 edges 一致
          changes.forEach((c) => {
            switch (c.type) {
              case 'select':
                onElementSelectChange(c.id, c.selected);
            }
          });

          if (onEdgesChange) {
            onEdgesChange(changes);
          }
        }}
        onConnect={updateEdgesOnConnection}
        disableKeyboardA11y={true}
        proOptions={{ hideAttribution: true }}
        className={styles.container}
        onNodeDrag={(e) => {
          console.log(e.altKey, e.shiftKey);
        }}
      >
        <Background color={theme.colorTextQuaternary} variant={BackgroundVariant.Dots} size={2} />
        <ControlAction />
        <ContextMenu />
      </ReactFlow>
    </Flexbox>
  );
});

export default FlowEditor;
