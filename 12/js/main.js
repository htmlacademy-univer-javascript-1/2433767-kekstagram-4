import { getPictures } from './data.js';
import { renderPhotos } from './thumbnails.js';
import './form.js';
import './hashtag-pristine.js';
import {initEffects} from './effects.js';

renderPhotos(getPictures());
initEffects();
