import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from '@ant-design/pro-flow';
import useStyles from './btn.style';

const onEdgeClick = (evt, id) => {
  evt.stopPropagation();
  alert(` ${id}`);
};

export default function CustomEdge(edge: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  } = edge;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const { styles } = useStyles();
  return (
    <>
      <BaseEdge
        className={edge.data.className}
        path={edgePath}
        markerEnd={markerEnd}
        style={style}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <button className={styles.edgebutton} onClick={(event) => onEdgeClick(event, id)}>
            click
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
