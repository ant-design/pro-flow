import { getConnectionFromEdgeId } from './edge';

describe('getConnectionFromEdgeId 函数', () => {
  test('输入空字符串，返回空对象', () => {
    expect(getConnectionFromEdgeId('')).toEqual({
      source: '',
      target: '',
      sourceHandle: '',
      targetHandle: '',
    });
  });

  test('输入非法字符串，返回空对象', () => {
    expect(getConnectionFromEdgeId('abc')).toEqual({
      source: '',
      target: '',
      sourceHandle: '',
      targetHandle: '',
    });
  });

  test('输入有效字符串，返回正确的对象', () => {
    expect(getConnectionFromEdgeId('source@@sourceHandle$$target@@targetHandle')).toEqual({
      source: 'source',
      target: 'target',
      sourceHandle: 'sourceHandle',
      targetHandle: 'targetHandle',
    });
  });
});
