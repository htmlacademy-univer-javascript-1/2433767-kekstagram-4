import { openFullViewPopup } from './full-picture-popup.js';

const generatePictureTemplate = ({ id, url, description, likes, comments }) => `
  <a href="#" data-id="${id}" class="picture">
    <img class="picture__img" src="${url}" width="182" height="182" alt="${description}">
    <p class="picture__info">
      <span class="picture__comments">${likes}</span>
      <span class="picture__likes">${comments.length}</span>
    </p>
  </a>
`;

const PICTURE_SELECTOR = '.picture';
const PICTURES_SELECTOR = '.pictures';

let pictures = null;
const picturesContainer = document.querySelector(PICTURES_SELECTOR);

const onPicturesContainerElementClick = (evt) => {
  const targetElement = evt.target.closest(PICTURE_SELECTOR);

  if (targetElement) {
    const pictureId = +targetElement.dataset.id;
    const targetPicture = pictures.filter((picture) => picture.id === pictureId)[0];
    openFullViewPopup(targetPicture);
  }

};

export const renderPictures = (data) => {
  pictures = data.slice();

  if (pictures) {
    picturesContainer.insertAdjacentHTML(
      'afterbegin',
      pictures.map((picture) => generatePictureTemplate(picture)).join('')
    );

    picturesContainer.addEventListener(
      'click',
      onPicturesContainerElementClick
    );
  }
};
