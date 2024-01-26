import { useCallback, useContext, useEffect } from 'react';
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
    flowViewRef,
  } = useContext(FlowViewContext);

  const getNode = useCallback(
    (nodeId: string) => {
      if (reactFlowInstance) {
        return reactFlowInstance.getNode(nodeId);
      }
    },
    [reactFlowInstance],
  );

  const getNodes = useCallback(() => {
    if (reactFlowInstance) {
      return reactFlowInstance.getNodes();
    }
  }, [reactFlowInstance]);

  const zoomTo = useCallback(
    (zoomNumber: number, duration?: number) => {
      if (reactFlowInstance) {
        reactFlowInstance.zoomTo(zoomNumber, { duration });
      }
    },
    [reactFlowInstance],
  );

  const zoomToNode = useCallback(
    (nodeId: string, duration?: number) => {
      const node = getNode(nodeId);
      if (node && reactFlowInstance) {
        reactFlowInstance.fitView({
          nodes: [{ id: nodeId }],
          duration,
        });
      }
    },
    [getNode, reactFlowInstance],
  );

  const setMiniMapPosition = useCallback(
    (x: number, y: number) => {
      if (setPosition) {
        setPosition({ x, y });
      }
    },
    [setPosition],
  );

  const getViewport = useCallback(() => {
    if (reactFlowInstance) {
      return reactFlowInstance.getViewport!();
    }
  }, [reactFlowInstance]);

  const setViewport = useCallback(
    (viewport: Viewport, duration?: number) => {
      if (reactFlowInstance) {
        return reactFlowInstance.setViewport!(viewport, { duration });
      }
    },
    [reactFlowInstance],
  );

  const fitView = useCallback(
    (duration?: number) => {
      if (reactFlowInstance) {
        return reactFlowInstance.fitView({ duration });
      }
    },
    [reactFlowInstance],
  );

  const exitFullScreen = useCallback(async () => {
    (document as any).exitFullScreen();
  }, []);

  const handleFullScreenChange = useCallback(() => {
    setTimeout(() => {
      fitView();
    }, 500);
  }, [fitView]);

  const fullScreen = useCallback(async () => {
    (flowViewRef?.current as any)
      .requestFullscreen()
      .then(() => {
        handleFullScreenChange();
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, [handleFullScreenChange]);

  useEffect(() => {
    if (handleFullScreenChange) {
      document.addEventListener('fullscreenchange', handleFullScreenChange);
    }
  }, [handleFullScreenChange]);

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
    fitView,
    setMiniMapPosition,
    instance: reactFlowInstance,
    fullScreen,
    exitFullScreen,
  };
};
