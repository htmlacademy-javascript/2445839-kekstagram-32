// получает случайное целочисленное число из диапозона
const getRandomUniqueInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// возвращает случайный элемент массива

const getRandomArrayElement = (elements) => elements[getRandomUniqueInteger(0, elements.length - 1)];

export {getRandomArrayElement, getRandomUniqueInteger};
