// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
//элементов
//  в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на
//кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает
// столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

//1 при нажатии накнопку очистить value становится равным 0
//2
const control = document.querySelector('#controls');
console.log(control);
const input = control.querySelector('input');
console.log(input);
input.setAttribute('value', '2');
const inputValue = control.querySelectorAll('button');
console.log(inputValue);
