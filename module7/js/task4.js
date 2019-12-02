let clickCount = 0;
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', event => {
    const element = document.querySelector('#value');
    clickCount -= 1;

    element.textContent = clickCount;
  });

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', event => {
    const element = document.querySelector('#value');
    clickCount += 1;
    element.textContent = clickCount;
  });
