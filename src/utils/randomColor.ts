const randomColorOneNumber = () => {
  return `${Math.floor(Math.random() * 255)}`;
};

export const randomColor = () => {
  return `rgb(${randomColorOneNumber()},${randomColorOneNumber()},${randomColorOneNumber()})`;
};
