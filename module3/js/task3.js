// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя
// самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся
// как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.
'use strict';

const findBestEmployee = function(employees) {
  let maxTask = 0;
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let numKey;

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > maxTask) {
      maxTask = values[i];
      numKey = i;
    }
  }

  const name = keys[numKey];

  return `${name} : ${maxTask}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

console.log('================================================================');
