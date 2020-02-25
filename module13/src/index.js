import './css/styles.css';
import './css/reset.css';
import templateList from './templates/list.hbs';

var debounce = require('lodash.debounce');

const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('button[name="load-more"]');
const input = document.querySelector('input[name="query"]');
const scrollTop = document.querySelector('.scrollTop');

let numberPage = 1;
let url = '';
let nameImg = '';
const key = '15335166-46184c58e4c8bb577f38781ce';

function urlImage() {
  nameImg = input.value;
  console.log(key);
  url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${nameImg}&page=${numberPage}&per_page=12&key=${key}`;
}

function listImage(data) {
  const name = data.hits.map(data => templateList(data)).join('');
  gallery.insertAdjacentHTML('beforeend', name);
  loadMore.hidden = false;
}

function clearListItems() {
  gallery.innerHTML = '';
  loadMore.hidden = true;
}

function outputText(event) {
  urlImage();
  fetch(url + nameImg)
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
