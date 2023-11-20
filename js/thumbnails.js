const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const createPicture = (photo) => {
  const {url, description, comments, likes} = photo;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('picture__likes').textContent = likes;

  return picture;
};

const fragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach((photo) => {
    fragment.appendChild(createPicture(photo));
  });

  pictures.appendChild(fragment);
};

export {renderPhotos};
