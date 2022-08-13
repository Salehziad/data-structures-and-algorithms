'use strict';

let mergeSort = require('../MergeSort');


describe('mergeSort function()', () => {
  it('mergeSort()', () => {
    expect(mergeSort([20,18,12,8,5,-2])).toEqual([ -2, 5, 8, 12, 18, 20 ]);
    expect(mergeSort([5,12,7,5,5,7])).toEqual([ 5, 5, 5, 7, 7, 12 ]);
    expect(mergeSort([2,3,5,7,13,11])).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });



});
