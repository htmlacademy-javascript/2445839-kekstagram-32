const USER_ID = 25;
const USER_URL = 25;
const MIN_USER_LIKES = 15;
const MAX_USER_LIKES = 200;

const USER_NAME = [
  'Артем',
  'Михаил',
  'Анна',
  'Жанна',
  'Владислав',
  'Анастасия',
  'Владимир',
  'Дмитрий',
  'Ника',
  'Анастасия',
  'Елена',
  'Дарья'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо., Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Ах, что за фото!',
  'Твоей фигуре позавидуют спортсмены, а костюмчику — лучшие модные дизайнеры!',
  'Бабушка занималась домашним хозяйством',
  'На фотографии лето.',
  'Солнце светит очень ярко',
  'это видно',
  'хотя сам снимок не цветной. Зеленая трава повсюду',
  'деревья одеты в пышную листву',
  'Атмосфера снимка очень теплая и дружелюбная.',
  'От лиц веет добротой',
  ' солнце наполняет все вокруг светом.',
  'Вероятно, это был чудесный день, и я хотела бы хоть на минутку оказаться в нем.',
];

// получает случайное целочисленное число из диапозона
const getRandomUniqueInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// возвращает случайный элемент массива

const getRandomArrayElement = (elements) => elements[getRandomUniqueInteger(0, elements.length - 1)];

//  создание объекта

const createNewUser = () => {
  const randomIndexId = getRandomUniqueInteger(1, USER_ID);
  const randomIndexUrl = getRandomUniqueInteger(1, USER_URL);
  const randomDescription = getRandomArrayElement(DESCRIPTION);
  const randomLikes = getRandomUniqueInteger(MIN_USER_LIKES, MAX_USER_LIKES);
  const randomAvatar = `img/avatar-${getRandomUniqueInteger(1, 6)}.svg`;
  const randomMessage = MESSAGE[getRandomUniqueInteger(1, 2)];
  const randomName = getRandomArrayElement (USER_NAME);

  return {
    id: randomIndexId,
    url: randomIndexUrl,
    description: randomDescription,
    likes: randomLikes,
    comments: {
      id: randomIndexId,
      avatar: randomAvatar,
      message: randomMessage,
      name: randomName,
    }
  };
};

// создание массива
const similarWizards = () => Array.from({length: USER_ID}, createNewUser);

console.log(similarWizards());
