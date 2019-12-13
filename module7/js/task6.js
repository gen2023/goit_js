const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  const inputLength = Number(event.currentTarget.value.length);

  const dataLength = Number(input.getAttribute('data-length'));

  if (inputLength === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
