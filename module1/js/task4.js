'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let kol_vo = prompt('Укажите колличество дроидов для покупки');

if (kol_vo === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * Number(kol_vo);
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    let balance = credits - totalPrice;
    console.log(
      `Вы купили ${kol_vo} дроидов, на счету осталось ${balance} кредитов`,
    );
  }
}
