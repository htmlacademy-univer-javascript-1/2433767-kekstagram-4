const POSTS_COUNT = 25;
const LikeCount = { MIN: 15, MAX: 200 };
const COMMENTS_COUNT = 30;
const AVATAR_COUNT = 6;

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

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId++;

    return lastGeneratedId;
  };
};

const getCommentId = createIdGenerator();

const getRandomNumber = (x, y) => {
  const minimum = Math.ceil(Math.min(x, y));
  const maximum = Math.floor(Math.max(x, y));
  const result = minimum + Math.random() * (maximum - minimum + 1);

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPost = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(LikeCount.MIN, LikeCount.MAX),
  comments: Array.from({length: getRandomNumber(0, COMMENTS_COUNT)}, createComment),
});

const getPosts = () => Array.from(
  { length: POSTS_COUNT },
  (_, postIndex) => createPost(postIndex + 1),
);

getPosts();
