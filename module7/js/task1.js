// Задание 1
// В HTML есть список категорий ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Животные</h2>

//     <ul>
//       <li>Кот</li>
//       <li>Хомяк</li>
//       <li>Лошадь</li>
//       <li>Попугай</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Продукты</h2>

//     <ul>
//       <li>Хлеб</li>
//       <li>Петрушка</li>
//       <li>Творог</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Технологии</h2>

//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node</li>
//     </ul>
//   </li>
// </ul>
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.
const list = document.getElementById('categories');
const li_item = list.querySelectorAll('.item');
console.log('В списке ' + li_item.length + ' категории');
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

li_item.forEach((elem_mass, i) => {
  const h2_text = elem_mass.querySelector('h2');
  const li_length = elem_mass.querySelectorAll('li');
  console.log(i + 1 + '-ый заголовок - ' + h2_text.textContent);
  console.log('Колличесво ' + li_length.length);
});
// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
console.log('================================================================');
