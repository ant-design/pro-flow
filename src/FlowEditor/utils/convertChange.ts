import { EdgeChange, NodeChange } from 'reactflow';
import { EdgeDispatch } from '../store/reducers/edge';
import { NodeDispatch } from '../store/reducers/node';

export function convertNodeChange(c: NodeDispatch): NodeChange[] {
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

export function convertEdgeChange(c: EdgeDispatch): EdgeChange[] {
  switch (c.type) {
    case 'addEdge': {
      return [
        {
          item: c.edge,
          type: 'add',
        },
      ];
    }
    case 'addEdges': {
      return Object.keys(c.edges).map((key) => ({
        item: c.edges[key],
        type: 'add',
      }));
    }
    case 'deleteEdge': {
      return [
        {
          id: c.id,
          type: 'remove',
        },
      ];
    }
    default:
      return [];
  }
}
