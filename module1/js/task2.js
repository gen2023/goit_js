'use strict';
const total = 100;
const ordered = 150;
let result;

if (ordered > total) {
  result = 'На складе недостаточно товаров!';
} else {
  result = 'Заказ оформлен, с вами свяжется менеджер!';
}

console.log(result);
