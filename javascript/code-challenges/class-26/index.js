'use strict';
function sort(arr) {
  let temp = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
module.exports =sort;
console.log(sort([5, 3, 6,3, 1, 4, 3, 2, 1,-100])); // >> [5, 3, 6,3, 1, 4, 3, 2, 1,-100]
console.log(sort([-10, 5, 11, 7, 15, 12, 15])); // >> [-10, 5, 11, 7, 15, 12, 15]
