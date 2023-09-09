export const routeProgress = (
  startInteraval: Date,
  finishInterval: Date,
  selectedDate: Date,
) => {
  const routeDuration = (finishInterval.getTime() - startInteraval.getTime()) / 3600000;
  const progressDuration = (selectedDate.getTime() - startInteraval.getTime()) / 3600000;

  return (progressDuration / routeDuration).toFixed(2);
};

export const routeProgressOnRoute = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  percentage: number,
) => {
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  const pointX = startX + (deltaX * percentage) / 100;
  const pointY = startY + (deltaY * percentage) / 100;

  return [pointX + 0.12, pointY];
};
