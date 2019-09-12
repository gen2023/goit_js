'use strict';
let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  if (Number(input)) {
    numbers.push(input);
  } else if (input === null) {
    break;
  } else {
    alert('введено некоректное число');
  }
}
console.log(numbers);
if (numbers.length > 1) {
  for (let i = 0; i < numbers.length; i += 1) {
    total = total + Number(numbers[i]);
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else if (numbers.length === 0) {
  console.log('Массив пустой');
} else {
  console.log('В массиве 1 число');
}

console.log(
  '======================================================================',
);
