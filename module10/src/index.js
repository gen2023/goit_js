import './styles.css';
import template from './template.hbs';
import menuBase from './menu.json';

const menu = document.querySelector('.js-menu');
const body = document.querySelector('body');
const input = document.querySelector('.js-switch-input');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.theme === undefined || localStorage.theme === Theme.LIGHT) {
  body.classList.add(Theme.LIGHT);
} else {
  input.checked = true;
  body.classList.add(Theme.DARK);
}
function themeEdit() {
  if (event.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

input.addEventListener('click', themeEdit);

const resultCode = menuBase.reduce((acc, value) => acc + template(value), '');

menu.innerHTML = resultCode;
