import { Node, XYPosition } from 'reactflow';
import { FlattenNodes } from '../../types';
import { NodeDispatch, nodeReducer } from './node';

describe('nodeReducer', () => {
  let initialState: FlattenNodes;
  let testNode: Node;

  beforeEach(() => {
    // 初始化测试用例中需要使用的变量
    initialState = {};
    testNode = {
      id: 'test-id',
      type: 'test-type',
      position: { x: 100, y: 200 },
      data: {},
    };
  });

  test('应该返回初始状态', () => {
    const result = nodeReducer(initialState, { type: 'unknown' } as unknown as NodeDispatch);
    expect(result).toBe(initialState);
  });

  test('应该添加节点', () => {
    const result = nodeReducer(initialState, { type: 'addNode', node: testNode });
    expect(result).toEqual({ [testNode.id]: testNode });
  });

  test('应该删除节点', () => {
    initialState[testNode.id] = testNode;
    const result = nodeReducer(initialState, { type: 'deleteNode', id: testNode.id });
    expect(result).toEqual({});
  });

  test('应该更新节点位置', () => {
    initialState[testNode.id] = testNode;
    const newPosition: XYPosition = { x: 300, y: 400 };
    const result = nodeReducer(initialState, {
      type: 'updateNodePosition',
      id: testNode.id,
      position: newPosition,
    });
    expect(result[testNode.id].position).toEqual(newPosition);
  });

  test('应该忽略未知的节点更新操作', () => {
    initialState[testNode.id] = testNode;
    const result = nodeReducer(initialState, { type: 'unknown' as any, id: testNode.id });
    expect(result).toBe(initialState);
  });

  test('应该忽略未知的节点删除操作', () => {
    initialState[testNode.id] = testNode;
    const result = nodeReducer(initialState, {
      type: 'deleteNode',
      unknownField: 'unknownValue',
    } as unknown as NodeDispatch);
    expect(result).toBe(initialState);
  });

  test('应该忽略未知的节点添加操作', () => {
    const result = nodeReducer(initialState, {
      type: 'addNode',
      unknownField: 'unknownValue',
    } as unknown as NodeDispatch);
    expect(result).toBe(initialState);
  });

  test('应该忽略未知的节点更新位置操作', () => {
    initialState[testNode.id] = testNode;
    const result = nodeReducer(initialState, {
      type: 'updateNodePosition',
      id: testNode.id,
      unknownField: 'unknownValue',
    } as NodeDispatch);
    expect(result).toBe(initialState);
  });
});
