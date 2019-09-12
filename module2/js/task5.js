'use strict';
const checkForSpam = function(str) {
  console.log(str);

  const newString = str.toLowerCase();
  const world1 = newString.includes('spam');
  const world2 = newString.includes('sale');

  if (world1 || world2) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

console.log(
  '======================================================================',
);
