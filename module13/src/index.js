import './css/styles.css';
import './css/reset.css';
import templateList from './templates/list.hbs';

var debounce = require('lodash.debounce');

const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('button[name="load-more"]');
const input = document.querySelector('input[name="query"]');
const scrollTop = document.querySelector('.scrollTop');
const form = document.querySelector('.search-form');

let numberPage = 1;
let url = '';
let nameImgOld = '';
let nameImg = '';
const key = '15335166-46184c58e4c8bb577f38781ce';

function outputText(event) {
  stopEvent();
  urlImage();
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (nameImg === '') {
        clearListItems();
      } else {
        listImage(data);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

function urlImage() {
  nameImgOld = nameImg;
  nameImg = input.value;
  url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${nameImg}&page=${numberPage}&per_page=12&key=${key}`;
}

function listImage(data) {
  if (data.total === 0) {
    alert('no image');
    clearListItems();
    input.value = '';
  } else {
    if (nameImgOld != nameImg) {
      clearListItems();
    }
    const name = data.hits.map(data => templateList(data)).join('');
    gallery.insertAdjacentHTML('beforeend', name);
    loadMore.hidden = false;
  }
}

function clearListItems() {
  gallery.innerHTML = '';
  loadMore.hidden = true;
  stopEvent();
}

function stopEvent(event) {
  form.addEventListener('submit', function(event) {
    //if (event.keyCode == 13) {
    event.preventDefault();
    // }
  });
}

scrollTop.addEventListener('click', event => {
  window.scrollTo(pageXOffset, 0);
});

window.addEventListener('scroll', event => {
  scrollTop.hidden = pageYOffset < document.documentElement.clientHeight;
});

input.addEventListener('input', debounce(outputText, 2000));
loadMore.addEventListener('click', event => {
  numberPage++;
  outputText();
});
