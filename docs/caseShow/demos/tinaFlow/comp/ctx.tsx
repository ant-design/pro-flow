import { FlowViewEdge, FlowViewNode, useFlowViewer } from '@ant-design/pro-flow';
import { FC, createContext, useCallback, useContext, useState } from 'react';

interface ICtx {
  nodes: FlowViewNode[];
  edges: FlowViewEdge[];
  init: (nodes: FlowViewNode[], edges: FlowViewEdge[]) => void;
  updateNodes: (
    items: [string, Partial<FlowViewNode> | ((node: FlowViewNode) => FlowViewNode)][],
  ) => void;
  removeNodes: (ids: string[]) => void;
}

const Ctx = createContext<ICtx>({
  nodes: [],
  edges: [],
  init: () => {},
  updateNodes: () => {},
  removeNodes: () => {},
});

export const MindProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const nodesState = useState<FlowViewNode[]>([]);
  const edgesState = useState<FlowViewEdge[]>([]);

  const updateNodes = useCallback<ICtx['updateNodes']>((items) => {
    nodesState[1]((nodes) => {
      const _nodes = [...nodes];
      items.forEach(([id, item]) => {
        const idx = _nodes.findIndex((n) => n.id === id);
        const node = _nodes[idx];
        if (node) {
          if (typeof item === 'function') {
            _nodes[idx] = { ...node, ...item(node) };
          } else {
            _nodes[idx] = { ...node, ...item };
          }
        }
      });
      // @ts-ignore
      window.nodes = _nodes;
      return _nodes;
    });
  }, []);

  const removeNodes = useCallback<ICtx['removeNodes']>((ids) => {
    nodesState[1]((nodes) => {
      return nodes.filter((node) => !ids.includes(node.id));
    });
    edgesState[1]((edges) => {
      return edges.filter((edge) => !ids.includes(edge.source) && !ids.includes(edge.target));
    });
  }, []);

  const init = useCallback<ICtx['init']>((nodes, edges) => {
    nodesState[1](nodes);
    edgesState[1](edges);
  }, []);

  return (
    <Ctx.Provider
      value={{ nodes: nodesState[0], edges: edgesState[0], updateNodes, removeNodes, init }}
    >
      {children}
    </Ctx.Provider>
  );
};

export function useMind() {
  const { selectNode, selectEdges, selectNodes, zoomToNode, fullScreen, instance } =
    useFlowViewer();

  // @ts-ignore
  window.instance = instance;
  return useContext(Ctx);
}
