import { useContext } from 'react';
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
    setPosition!([x, y]);
  };

  return {
    setMiniMapPosition,
  };
};
