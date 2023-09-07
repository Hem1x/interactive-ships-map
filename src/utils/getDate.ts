export const getDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString('Ru-ru', { month: 'short' }).slice(0, -1);

  const hours = getValidData(date.getHours());
  const minutes = getValidData(date.getMinutes());

  return `${day} ${month}, ${hours}:${minutes}`;
};

function getValidData(data: number) {
  return data < 10 ? '0' + data : data;
}
