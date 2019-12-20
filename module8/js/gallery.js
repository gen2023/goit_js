'use strict';
import images from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxConent = document.querySelector('.lightbox__content');
const lightboxImage = document.querySelector('.lightbox__image');
const closeLightbox = document.querySelector(
  'button[data-action="close-lightbox"]',
);

let HTMLText = '';

for (let i = 0; i < images.length; i++) {
  HTMLText = `${HTMLText}<li><img class="gallery__image" src="${images[i].preview}" alt="${images[i].description}"></li>`;
}

gallery.insertAdjacentHTML('afterbegin', HTMLText);

const insertImage = event => {
  const smallImageUrl = event.target.src;

  const getBigImage = (images, smallImageUrl) =>
    images
      .filter(img => img.preview === smallImageUrl)
      .map(img => img.original);
  const bigImageUrl = getBigImage(images, smallImageUrl);

  lightbox.classList.add('is-open');
  lightboxImage.setAttribute('src', bigImageUrl);
};

closeLightbox.addEventListener('click', close);
lightbox.addEventListener('click', closeClickLightbox);
window.addEventListener('keydown', closeEscape);

function close() {
  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
}

function closeClickLightbox() {
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.target !== lightboxConent) {
    return;
  }
  close();
}

function closeEscape({ type, key }) {
  console.log(key);
  if (key === 'Escape') {
    close();
  }
}

gallery.addEventListener('click', insertImage);
