const list = document.getElementById('categories');
const li_item = list.querySelectorAll('.item');
console.log('В списке ' + li_item.length + ' категории');

li_item.forEach((elem_mass, i) => {
  const h2_text = elem_mass.querySelector('h2');
  const li_length = elem_mass.querySelectorAll('li');
  console.log(i + 1 + '-ый заголовок - ' + h2_text.textContent);
  console.log('Колличесво ' + li_length.length);
});
