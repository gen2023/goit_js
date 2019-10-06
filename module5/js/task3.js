'use strict';
class Storage {
  constructor(items) {
    this.items = items;
  }
  // getItems(); //- возвращает массив текущих товаров
  getItems() {
    return this.items;
  }

  // addItem(item); //- получает новый товар и добавляет его к текущим
  addItem(item) {
    items.push(item);
  }

  // removeItem(item); //- получет товар и, если он есть, удаляет его из текущих
  removeItem(item) {
    if (items.includes(item)) {
      const position = items.indexOf(item);
      items.splice(position, 1);
    } else {
      items.push(item);
    }
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
console.log('================================================================');
