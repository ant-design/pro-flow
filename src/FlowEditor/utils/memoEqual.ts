import isEqual from 'fast-deep-equal';
import { NodeProps } from 'reactflow';

/**
 * 专门用于Reactflow Node 的比较两个节点的 props 是否相等的方法，会将坐标信息忽略以提升渲染性能
 * @param prevState
 * @param nextState
 */
export const memoEqual = (prevState: NodeProps<any>, nextState: NodeProps<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { xPos: _, yPos: __, ...prev } = prevState;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { xPos: ___, yPos: ____, ...next } = nextState;
  return isEqual(prev, next);
};
