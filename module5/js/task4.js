// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:
'use strict';
class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  // Геттер value - возвращает текущее значение поля _value
  get value() {
    return this._value;
  }

  // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
  append(str) {
    this._value += str;
  }

  // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  prepend(str) {
    this._value = str + this._value;
  }

  // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
  pad(str) {
    this._value += str;
    this._value = str + this._value;
  }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

console.log('================================================================');
