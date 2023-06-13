export const EDGE_ID_CONNECT_SYMBOL = '$$';
export const EDGE_HANDLE_CONNECT_SYMBOL = '@@';

const genNodeId = (id: string, suffix?: string | null) =>
  id + EDGE_HANDLE_CONNECT_SYMBOL + (suffix || '');

export const generateEdgeId = (
  source: string,
  target: string,
  sourceHandle?: string | null,
  targetHandle?: string | null,
) => genNodeId(source, sourceHandle) + EDGE_ID_CONNECT_SYMBOL + genNodeId(target, targetHandle);

export const getConnectionFromEdgeId = (id: string) => {
  const [source, target] = id.split(EDGE_ID_CONNECT_SYMBOL);

  if (!source || !target) return { source: '', target: '', sourceHandle: '', targetHandle: '' };

  const [sourceId, sourceHandle] = source.split(EDGE_HANDLE_CONNECT_SYMBOL);
  const [targetId, targetHandle] = target.split(EDGE_HANDLE_CONNECT_SYMBOL);

  return { source: sourceId, target: targetId, sourceHandle, targetHandle };
};
