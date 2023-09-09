export const dateInSchedule = (
  date: string,
  startInteraval: Date,
  finishInterval: Date,
) => {
  if (date && startInteraval && finishInterval) {
    return new Date(date) >= startInteraval && new Date(date) <= finishInterval;
  }
  return;
};
