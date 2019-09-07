'use strict';
let message;
const ADMIN_PASSWORD = 'jqueryismyjam';

let pass = prompt('Введите пароль:');
console.log(pass);

if (pass === null) {
  message = 'Отменено пользователем!';
} else if (pass === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
