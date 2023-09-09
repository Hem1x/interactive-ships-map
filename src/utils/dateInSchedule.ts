import { getCorrectFormatDateWithTime } from './getDate';

export const dateInSchedule = (
  date: string,
  startInteraval: string,
  finishInterval: string,
) => {
  if (date && startInteraval && finishInterval) {
    return (
      new Date(date) >= getCorrectFormatDateWithTime(startInteraval) &&
      new Date(date) <= getCorrectFormatDateWithTime(finishInterval)
    );
  }
  return;
};
