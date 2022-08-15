'use strict';

const quickSort = require('../QuickSort');

describe('quickSort function()', () => {

  it('quickSort()', () => {
    let array = [5, 2, 4, 6, 1, 3];
    expect(quickSort(array)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
