'use strict';
const formatString = function(string) {
  console.log(string.length);

  if (string.length < 40) {
    return string;
  } else {
    const newString = string.slice(0, 40) + '...';
    return newString;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

console.log(
  '======================================================================',
);
