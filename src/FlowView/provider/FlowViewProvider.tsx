import { FlowViewEdge, FlowViewNode, MiniMapPosition } from '@/constants';
import { FC, ReactNode, useCallback, useState } from 'react';
import { ReactFlowProvider, useReactFlow, useViewport } from 'reactflow';
import { NodeMapping } from '../constants';
import { convertMappingFrom, getRenderData } from '../helper';
import { FlowViewContext } from './provider';

// 数据处理层
const ProviderInner: FC<{ children: ReactNode }> = ({ children }) => {
  const [miniMapPosition, setMiniMapPosition] = useState<MiniMapPosition>({ x: 0, y: 0 });
  const reactFlowInstance = useReactFlow();
  // const [nodes, setNodes] = useState<FlowViewNode<keyof NodeTypeDataMap>[]>([]);
  // const [edges, setEdges] = useState<FlowViewEdge[]>([]);
  const [mapping, setMapping] = useState<NodeMapping>({});
  const { zoom } = useViewport();

  console.log(mapping);

  const flowDataAdapter = useCallback((nodes: FlowViewNode[], edges: FlowViewEdge[]) => {
    const _mapping = convertMappingFrom(nodes!, edges!, zoom);
    const { nodes: _nodes, edges: _edges } = getRenderData(_mapping, edges!);
    console.log('here');
    setMapping(_mapping);

    return {
      nodes: _nodes,
      edges: _edges,
    };
  }, []);

  return (
    <FlowViewContext.Provider
      value={{
        flowDataAdapter,
        isUseProvider: true,
        reactFlowInstance,
        miniMapPosition,
        setMiniMapPosition,
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
