// Задание 6
// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов и имя продукта
// (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.
/* 1 получить массив обьектов
2 получить массив имени продукта(поля name) 
3 если продукт наме совпалс продукт произвести умножение*/

'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(arr, productName) {
  let cost = 0;

  for (const product of products) {
    if (productName === product.name) {
      cost = product.price * product.quantity;
    }
  }

  return cost;
};
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
