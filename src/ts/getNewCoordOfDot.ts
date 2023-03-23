export const getNewCoordOfDot = (
  circleRadius: number,
  angleInRad: number,
  numOfDot: number
) => {
  return {
    x: circleRadius * Math.cos(angleInRad * numOfDot),
    y: circleRadius * Math.sin(angleInRad * numOfDot),
  };
}
