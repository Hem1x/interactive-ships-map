export const getDate = (date: Date) => {
  const day = getValidData(date.getDate());
  const month = getValidData(date.getMonth());
  const year = getValidData(date.getFullYear());

  const hours = getValidData(date.getHours());
  const minutes = getValidData(date.getMinutes());

  return `${hours}:${minutes} ${day}.${month}.${year} `;
};

function getValidData(data: number) {
  return data < 10 ? '0' + data : data;
}
