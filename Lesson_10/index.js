'use strict';

console.log('uniqueCount');

const uniqueCount = (arr) => {
  const uniqueArr = Array.from(new Set(arr));

  return uniqueArr.length;
};


console.log('uniqCount(listIPv4): ', uniqueCount(listIPv4));
