import './styles.css';
import templateList from './templateList.hbs';
var debounce = require('lodash.debounce');

const input = document.querySelector('input[data-action="country"]');
const output = document.querySelector('#name-output');
const listCountry = document.querySelector('.listCountry');
//console.log(input);
input.addEventListener('input', debounce(outputText, 500));
function outputText(event) {
  const nameCountruInput = event.target.value;

  const url = 'https://restcountries.eu/rest/v2/name/';

  function nameCountry(data) {
    const names = data.map(data => data.name);

    return names;
  }
  fetch(url + nameCountruInput)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length === 1) {
        console.log(nameCountry(data));
      } else {
        if (data.length >= 2 && data.length < 10) {
          //listCountry.innerHTML=
          console.log(nameCountry(data));
        }
      }
    })
    .catch(error => {
      //console.log(error);
    });
}
