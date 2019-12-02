// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего
// вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const result = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const li_element = document.createElement('li');
  li_element.textContent = ingredient;
  //console.log(li_element);
  result.appendChild(li_element);
}

//но наверное єто не правильно, т.к. вставляется єлемент в цикле, а скорее всего должен вставляться отдельно от цикла
console.log('================================================================');
