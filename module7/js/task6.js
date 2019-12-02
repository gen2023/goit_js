// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное
//  количество символов.

// <input
//   type="text"
//   id="validation-input"
//   length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  //1 получить данные с data-length
  //1.1 получить длинну строки console.log(event.currentTarget.value.length);
  //2 проверка иф
  //3 добавление стилей

  const num1 = Number(event.currentTarget.value.length);
  console.log(num1);

  const num2 = Number(input.getAttribute('datalength'));
  console.log(num2);

  if (num1 === num2) console.log('ok');
  //document.input.classList.add('#validation-input.valid');
  else console.log('not ok'); //document.input.classList.add('#validation-input.invalid');
});
