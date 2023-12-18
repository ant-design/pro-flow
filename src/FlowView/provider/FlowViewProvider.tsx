import { FlowViewEdge, FlowViewNode, MiniMapPosition, NodeTypeDataMap } from '@/constants';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Edge, Node, ReactFlowProvider, useReactFlow } from 'reactflow';
import { LayoutOptions, NodeMapping, SelectType } from '../constants';
import { convertMappingFrom, getRenderData } from '../helper';
import { FlowViewContext } from './provider';

// 数据处理层
const ProviderInner: FC<{ children: ReactNode }> = ({ children }) => {
  const [miniMapPosition, setMiniMapPosition] = useState<MiniMapPosition>({ x: 10, y: 10 });
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [initEdges, setInitEdges] = useState<FlowViewEdge[] | undefined>(undefined);
  const [mapping, setMapping] = useState<NodeMapping>({});
  const [autoLayout, setAutoLayout] = useState<boolean>(true);
  const [layoutOptions, setLayoutOptions] = useState<LayoutOptions>({
    rankdir: 'LR',
    align: 'UL',
    nodesep: 100,
    ranksep: 200,
  });

  const convertRenderData = useCallback(() => {
    const { nodes: _nodes, edges: _edges } = getRenderData(
      mapping,
      initEdges!,
      autoLayout,
      layoutOptions,
    );
    setNodes(_nodes);
    setEdges(_edges);
  }, [mapping, initEdges, autoLayout, layoutOptions]);

  const flowDataAdapter = useCallback(
    (
      initNodes: FlowViewNode<keyof NodeTypeDataMap>[],
      initEdges: FlowViewEdge[],
      zoom: number,
      autoLayout: boolean,
      layoutOptions: LayoutOptions,
    ) => {
      if (initNodes.length === 0) return;

      setMapping(convertMappingFrom(initNodes!, initEdges!, zoom));
      setInitEdges(initEdges);
      setAutoLayout(autoLayout);
      setLayoutOptions(layoutOptions);
    },
    [],
  );

  useEffect(() => {
    if (Object.keys(mapping).length && initEdges) {
      convertRenderData();
    }
  }, [mapping, initEdges]);

  // 选中单个节点
  const updateSelectNode = useCallback(
    (nodeId: string, selectType: SelectType) => {
      const node = mapping[nodeId];
      if (node) {
        node.select = selectType;
        setMapping({ ...mapping });
      }
    },
    [mapping],
  );

  // 选中多个节点
  const updateSelectNodes = useCallback(
    (nodeIds: string[], selectType: SelectType) => {
      nodeIds.forEach((id) => {
        updateSelectNode(id, selectType);
      });
    },
    [mapping],
  );

  // 选中单条线
  const updateSelectEdge = useCallback(
    (edgeId: string, selectType: SelectType) => {
      const edge = initEdges?.find((edge) => edge.id === edgeId);
      if (edge) {
        edge.select = selectType;
        setInitEdges([...initEdges!]);
      }
    },
    [initEdges],
  );

  // 选中多条线
  const updateSelectEdges = useCallback(
    (edgeIds: string[], selectType: SelectType) => {
      edgeIds.forEach((id) => {
        updateSelectEdge(id, selectType);
      });
    },
    [mapping],
  );

  return (
    <FlowViewContext.Provider
      value={{
        nodes,
        edges,
        // dargePosition,
        flowDataAdapter,
        isUseProvider: true,
        reactFlowInstance,
        miniMapPosition,
        setMiniMapPosition,
        // 变更方法
        updateSelectNode,
        updateSelectNodes,
        updateSelectEdge,
        updateSelectEdges,
      }}
    >
      {children}
    </FlowViewContext.Provider>
  );
};

export const FlowViewProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ReactFlowProvider>
      <ProviderInner>{children}</ProviderInner>
    </ReactFlowProvider>
  );
};
