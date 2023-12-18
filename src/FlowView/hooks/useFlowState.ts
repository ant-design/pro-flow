import { FlowViewNode } from '@/constants';
import { useCallback, useState } from 'react';
import { Node, NodeChange, applyNodeChanges, useEdgesState } from 'reactflow';

const useNodesState = (
  beforeNodes: FlowViewNode[],
): [
  FlowViewNode[],
  React.Dispatch<React.SetStateAction<FlowViewNode[]>>,
  (changes: NodeChange[]) => void,
] => {
  const [items, setItems] = useState(beforeNodes);

  const onItemsChange = useCallback(
    (changes: NodeChange[]) => {
      setItems((items) => applyNodeChanges(changes, items as Node[]));
    },
    [items],
  );

  return [items, setItems, onItemsChange];
};

export { useEdgesState, useNodesState };
