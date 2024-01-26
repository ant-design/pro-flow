import { NodeChange } from 'reactflow';
import { NodeDispatch } from '../store/reducers/node';

export function convertChange(c: NodeDispatch): NodeChange[] {
  switch (c.type) {
    case 'addNode': {
      return [
        {
          item: c.node,
          type: 'add',
        },
      ];
    }
    case 'addNodes': {
      return Object.keys(c.nodes).map((key) => ({
        item: c.nodes[key],
        type: 'add',
      }));
    }
    case 'deleteNode': {
      return [
        {
          id: c.id,
          type: 'remove',
        },
      ];
    }
    case 'updateNodePosition': {
      return [
        {
          id: c.id,
          type: 'position',
          position: c.position,
        },
      ];
    }
    default:
      return [];
  }
}
