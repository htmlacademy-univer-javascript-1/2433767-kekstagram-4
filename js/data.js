import {
  POSTS_COUNT
} from './constants.js';

import {
  createIdGenerator,
  getRandomInteger,
  getRandomArrayElement,
} from './utils.js';

const LikeCount = { MIN: 15, MAX: 200 };
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 30;

const DESCRIPTIONS = [
  'Закат на пляже',
  'Закат в горах',
  'Архитектурное чудо в самом сердце города',
  'Костер на берегу озера',
  'Укромный уголок в парке',
  'Загадочная пустыня',
  'Свадебная церемония',
  'Пейзаж с рекой',
  'Компания на пикнике',
  'Фото кота',
  'Собака играет с мячом',
  'Холмистая местность',
  'Огромный город с небоскребами',
  'Чарующая улыбка',
  'Лунный пейзаж',
  'Новогодний феерверк',
  'Живописная панорама',
  'Пейзаж с водопадом',
  'Вид на морской пейзаж',
  'Портрет мужчины',
  'Портрет женщины',
  'Загадочный лес',
  'Полевые цветы',
  'Черно-белая фотография городских улиц',
  'Зимний сад',
];

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Елизавета',
  'Диана',
  'Ксения',
  'Дарья',
  'Екатерина',
  'Дмитрий',
  'Антон',
  'Никита',
  'Кирилл',
  'Илья'
];

const generateCommentId = createIdGenerator();

export const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export const generatePicture = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    createComment
  ),
});

export const getPictures = () => Array.from(
  { length: POSTS_COUNT },
  (_, pictureIndex) => generatePicture(pictureIndex + 1),
);
