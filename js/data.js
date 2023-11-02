import {
  AVATAR_COUNT,
  DESCRIPTIONS,
  LikeCount,
  NAMES,
  COMMENTS_MESSAGES,
  COMMENTS_COUNT,
  POSTS_COUNT
} from './constants.js';

import {
  createIdGenerator,
  getRandomInteger,
  getRandomArrayElement,
} from './utils.js';

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
