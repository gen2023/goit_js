// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты
//  работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// Вызовы функции для проверки работоспособности твоей реализации.

'use strict';
const countTotalSalary = function(employees) {
  let summ = 0;
  const values = Object.values(employees);

  for (const value of values) {
    summ += value;
  }

  return summ;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

console.log(
  '======================================================================',
);
