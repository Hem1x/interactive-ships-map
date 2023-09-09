const randomColorOneNumber = () => {
  return `${Math.floor(Math.random() * 255)}`;
};

export const randomColor = () => {
  return `rgb(0,${randomColorOneNumber()},${randomColorOneNumber()})`;
};
