// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает
// число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

'use strict';

const countProps = function(obj) {
  let count = 0;
  // const keys = Object.keys(obj);
  // for (let i = 0; i < keys.length; i += 1) {
  for (const key in obj) {
    count += 1;
  }
  return count;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
console.log('================================================================');
