'use strict';
const calculateEngravingPrice = function(message, pricePerWord) {
  console.log(`сообщение: ${message} - цена слова: ${pricePerWord}`);
  const arr = message.split(' ');
  const total = pricePerWord * arr.length;

  return total;
};

console.log(
  'Цена гравировки строки=',
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  'Цена гравировки строки=',
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160
console.log(
  'Цена гравировки строки=',
  calculateEngravingPrice('Donec orci lectus aliquam est', 40),
); // 200

console.log(
  'Цена гравировки строки=',
  calculateEngravingPrice('Donec orci lectus aliquam est', 20),
); // 100

console.log(
  '======================================================================',
);
