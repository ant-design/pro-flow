// import { generateEdgeId } from '../../utils/edge';

import { EdgeDispatch, EdgesState, edgesReducer } from './edge';

describe('edgesReducer', () => {
  let initialState: EdgesState;

  beforeEach(() => {
    initialState = {
      'edge-1': {
        id: 'edge-1',
        source: 'node-1',
        target: 'node-2',
        sourceHandle: 'output',
        targetHandle: 'input',
      },
    };
  });

  it('should add a new edge', () => {
    const newEdge = {
      id: 'edge-2',
      source: 'node-2',
      target: 'node-3',
      sourceHandle: 'output',
      targetHandle: 'input',
    };
    const action: EdgeDispatch = { type: 'addEdge', edge: newEdge };

    const result = edgesReducer(initialState, action);

    expect(result).toEqual({
      ...initialState,
      [newEdge.id]: newEdge,
    });
  });

  it('should update an existing edge', () => {
    const updatedEdge = {
      id: 'edge-1',
      source: 'node-1',
      target: 'node-3',
      sourceHandle: 'output',
      targetHandle: 'input',
    };
    const action: EdgeDispatch = { type: 'updateEdge', id: 'edge-1', edge: updatedEdge };

    const result = edgesReducer(initialState, action);

    expect(result).toEqual({
      'edge-1': updatedEdge,
    });
  });

  it('should delete an existing edge', () => {
    const action: EdgeDispatch = { type: 'deleteEdge', id: 'edge-1' };

    const result = edgesReducer(initialState, action);

    expect(result).toEqual({});
  });
});

describe('createEdgeFromConnection', () => {
  let initialState: EdgesState;

  beforeEach(() => {
    initialState = {
      'edge-1': {
        id: 'edge-1',
        source: 'node-1',
        target: 'node-2',
        sourceHandle: 'output',
        targetHandle: 'input',
      },
    };
  });

  // it('should not create an edge if source or target is missing', () => {
  //   const action: EdgeDispatch = {
  //     type: 'createEdgeFromConnection',
  //     connection: {
  //       source: 'node-1',
  //       target: null,
  //       sourceHandle: 'output',
  //       targetHandle: 'input',
  //     },
  //   };

  //   const result = edgesReducer(initialState, action);

  //   expect(result).toEqual(initialState);
  // });

  // it('should use default handles if sourceHandle or targetHandle is missing', () => {
  //   const action: EdgeDispatch = {
  //     type: 'createEdgeFromConnection',
  //     connection: {
  //       source: 'node-1',
  //       target: 'node-2',
  //       sourceHandle: null,
  //       targetHandle: null,
  //     },
  //   };

  //   const result = edgesReducer(initialState, action);

  //   expect(result).toMatchSnapshot();
  // });

  // it('should create a new edge', () => {
  //   const action: EdgeDispatch = {
  //     type: 'createEdgeFromConnection',
  //     connection: {
  //       source: 'node-1',
  //       target: 'node-2',
  //       sourceHandle: 'output',
  //       targetHandle: 'input',
  //     },
  //   };
  //   const expectedEdge = {
  //     id: generateEdgeId('node-1', 'node-2', 'output', 'input'),
  //     source: 'node-1',
  //     target: 'node-2',
  //     sourceHandle: 'output',
  //     targetHandle: 'input',
  //   };

  //   const result = edgesReducer(initialState, action);

  //   expect(result).toEqual({
  //     ...initialState,
  //     [expectedEdge.id]: expectedEdge,
  //   });
  // });

  // it('should not create a duplicate edge', () => {
  //   const action: EdgeDispatch = {
  //     type: 'createEdgeFromConnection',
  //     connection: {
  //       source: 'node-1',
  //       target: 'node-2',
  //       sourceHandle: 'output',
  //       targetHandle: 'input',
  //     },
  //   };
  //   const expectedEdge = {
  //     id: generateEdgeId('node-1', 'node-2', 'output', 'input'),
  //     source: 'node-1',
  //     target: 'node-2',
  //     sourceHandle: 'output',
  //     targetHandle: 'input',
  //   };
  //   const stateWithDuplicate = {
  //     ...initialState,
  //     [expectedEdge.id]: expectedEdge,
  //   };

  //   const result = edgesReducer(stateWithDuplicate, action);

  //   expect(result).toEqual(stateWithDuplicate);
  // });

  it('default not change', () => {
    const action = {
      type: 'NO_TO_USE_FOREVER',
    } as unknown as EdgeDispatch;

    const result = edgesReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});
