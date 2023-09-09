export const getDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString('Ru-ru', { month: 'short' }).slice(0, -1);

  const hours = getValidData(date.getHours());
  const minutes = getValidData(date.getMinutes());

  return `${day} ${month}, ${hours}:${minutes}`;
};

export const getValidData = (data: number) => {
  return data < 10 ? '0' + data : data;
};

export const getCorrectFormatDate = (date: string) => {
  const dateList = date.split('.');
  return new Date(`${dateList[1]}.${dateList[0]}.${dateList[2]}`);
};

export const getCorrectFormatDateWithTime = (date: string) => {
  const dateList = date.split(' ');
  const dateText = dateList[0].split('.').map((el) => Number(el));
  const timeText = dateList[1].split(':').map((el) => Number(el));

  return new Date(
    Number('20' + dateText[2]),
    dateText[1] - 1,
    dateText[0],
    timeText[0],
    timeText[1],
  );
};
