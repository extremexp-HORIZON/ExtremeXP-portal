import { BaseEdge, EdgeProps, getSmoothStepPath } from "reactflow";

function ExceptionalLink(props: EdgeProps) {
  const { sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition } =
    props;

  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} {...props} />
    </>
  );
}

export default ExceptionalLink;
