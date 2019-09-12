'use strict';
let cost = 0;
let country = prompt('Введите Вашу страну');

if (country === null) {
  console.log('Отменено пользователем!');
}

switch (country.toLowerCase()) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
if (cost !== 0) {
  console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
}
