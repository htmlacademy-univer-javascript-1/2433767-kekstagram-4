import { getPictures } from './data.js';
import { renderPhotos } from './thumbnails.js';
import {initEffects} from './effects.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import './form.js';
import './hashtag-pristine.js';
import './message.js';

renderPhotos(getPictures());
initEffects();
let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = () => {
  showAlert('Ошибка загрузки', SHOW_TIME);
};

getData(onSuccess, onFail);

export {photos};
