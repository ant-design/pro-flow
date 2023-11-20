import { useContext } from 'react';
import { Viewport } from 'reactflow';
import { FlowViewContext } from '../provider/provider';

export const useFlowView = () => {
  const { reactFlowInstance } = useContext(FlowViewContext);

  return {
    reactFlowInstance,
  };
};

export const useMiniMap = () => {
  const { setMiniMapPosition: setPosition } = useContext(FlowViewContext);

  const setMiniMapPosition = (x: number, y: number) => {
    setPosition!({ x, y });
  };

  return {
    setMiniMapPosition,
  };
};

export const useFlowViewer = () => {
  const {
    updateSelectNode,
    updateSelectEdge,
    updateSelectEdges,
    updateSelectNodes,
    setMiniMapPosition: setPosition,
    reactFlowInstance,
  } = useContext(FlowViewContext);

  const getNode = (nodeId: string) => {
    return reactFlowInstance?.getNode(nodeId);
  };

  const getNodes = () => {
    return reactFlowInstance?.getNodes();
  };

  const zoomTo = (zoomNumber: number, duration?: number) => {
    reactFlowInstance?.zoomTo(zoomNumber, { duration });
  };

  const zoomToNode = (nodeId: string, duration?: number) => {
    const node = getNode(nodeId);
    if (node) {
      reactFlowInstance?.fitView({
        nodes: [{ id: nodeId }],
        duration,
      });
    }
  };

  const setMiniMapPosition = (x: number, y: number) => {
    setPosition!({ x, y });
  };

  const getViewport = () => {
    return reactFlowInstance?.getViewport!();
  };

  const setViewport = (viewport: Viewport, duration?: number) => {
    return reactFlowInstance?.setViewport!(viewport, { duration });
  };

  return {
    selectNode: updateSelectNode!,
    selectEdge: updateSelectEdge!,
    selectEdges: updateSelectEdges!,
    selectNodes: updateSelectNodes!,
    getNode,
    getNodes,
    zoomTo,
    getViewport,
    setViewport,
    zoomToNode,
    setMiniMapPosition,
  };
};
