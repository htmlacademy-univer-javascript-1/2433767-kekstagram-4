import { MAX_SYMBOLS_HASHTAG } from './constants.js';
import { MAX_HASHTAGS, MAX_STRING_LENGTH } from './constants.js';
import { checkLenght } from './util.js';

const formUpload = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const commentsField = formUpload.querySelector('.text__description');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error'
}, true);

export const buttonAdjustment = () => {
  submitButton.disabled = !pristine.validate();
};

export const inputHashtag = document.querySelector('.text__hashtags');

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (value) => {
  errorMessage = '';

  const inputText = value.toLowerCase().trim();

  if (!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  if (inputArray.length === 0) {
    return true;
  }

  const hashtagRules = [
    {
      check: inputArray.some((item) => item.indexOf('#', 1) >= 1),
      error: 'Хэш-теги разделяются пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа #',
    },
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэш-теги не должны повторяться',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS_HASHTAG),
      error: `Максимальная длина одного хэш-тега ${MAX_SYMBOLS_HASHTAG} символов, включая решётку`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS,
      error: `Нельзя указать больше ${MAX_HASHTAGS} хэш-тегов`,
    },
    {
      check: inputArray.some((item) => !/^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/.test(item)),
      error: 'Хэш-тег содержит недопустимые символы',
    },
  ];

  return hashtagRules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const commentHandler = (string) => {
  const inputText = string.trim();

  if (!inputText) {
    return true;
  }

  const isInvalid = !checkLenght(inputText, MAX_STRING_LENGTH);
  errorMessage = isInvalid ? `Максимальная длина комментария ${MAX_STRING_LENGTH} символов` : '';

  return !isInvalid;
};

pristine.addValidator(inputHashtag, hashtagsHandler, error, 2, false);
pristine.addValidator(commentsField, commentHandler, error, 2, false);

const onHashtagInput = () => buttonAdjustment();
const onCommentInput = () => buttonAdjustment();

inputHashtag.addEventListener('input', onHashtagInput);
commentsField.addEventListener('input', onCommentInput);


formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});
