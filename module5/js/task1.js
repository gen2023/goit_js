// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
//  В prototype функции-конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.
'use strict';
const Account = function(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`Ваш логин ${this.login} Ваш пароль ${this.email}`);
};

console.log(Account.prototype.getInfo); // function
// console.dir(Account);
const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com

console.log('================================================================');
