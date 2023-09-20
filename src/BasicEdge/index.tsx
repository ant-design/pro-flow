import React from 'react';
import { BaseEdge, EdgeProps, getSmoothStepPath } from 'reactflow';

export default function RadiusEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 50,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
    </>
  );
}
