'use strict';
const findLongestWord = function(string) {
  const arr = string.split(' ');
  let maxWorld = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (maxWorld.length < arr[i].length) {
      maxWorld = arr[i];
    }
  }

  return maxWorld;
};

console.log(
  'самое длинное слово: ',
  findLongestWord('The quick brown fox jumped over the lazy dog'),
); // 'jumped'

console.log('самое длинное слово: ', findLongestWord('Google do a roll')); // 'Google'

console.log(
  'самое длинное слово: ',
  findLongestWord('May the force be with you'),
); // 'force'

console.log(
  '======================================================================',
);
