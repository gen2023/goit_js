const input = document.querySelector('#font-size-control');
input.setAttribute('value', '20');
input.setAttribute('min', '10');
input.setAttribute('max', '150');

input.addEventListener('click', event => {
  const value = document.querySelector('#font-size-control').value;
  const text = document.querySelector('#text');

  text.style.fontSize = value + 'px';
});
