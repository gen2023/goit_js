import './styles.css';
import templateList from './templates/list.hbs';
import templateCountry from './templates/country.hbs';
import PNotify from 'pnotify/dist/es/PNotifyCompat';

var debounce = require('lodash.debounce');

const input = document.querySelector('input[data-action="country"]');
const output = document.querySelector('#name-output');
const listCountry = document.querySelector('.listCountry');

const url = 'https://restcountries.eu/rest/v2/name/';
//функция для вывода стран от 2 до 10
function listNameCountry(data) {
  const names = data.map(data => templateList(data)).join('');
  listCountry.insertAdjacentHTML('beforeend', names);
}
//функция для вывода страны
function nameCountry(data) {
  const name = data.map(data => templateCountry(data)).join('');
  listCountry.insertAdjacentHTML('beforeend', name);
}
//очистка экрана
function clearListItems() {
  listCountry.innerHTML = '';
}

input.addEventListener('input', debounce(outputText, 1000)); //задержка после ввода

function outputText(event) {
  const nameCountruInput = event.target.value;

  fetch(url + nameCountruInput) //получаем данные с сайта
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        clearListItems();
      } else if (data.length === 1) {
        clearListItems();
        nameCountry(data);
      } else {
        if (data.length >= 2 && data.length < 10) {
          clearListItems();
          listNameCountry(data);
        } else {
          if (data.length >= 10) {
            clearListItems();
            new PNotify({
              text:
                'Too manu matches found. Please enter a more specific query!.',
              type: 'info',
              icon: true,
            });
          }
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
}
