'use strict';

const sort = require('../index');

describe('sort function()', () => {
  it('sort()', () => {
    let arr = [5, 3, 6, 1, 4, 2, 0, -1];
    expect(sort(arr)).toEqual([-1, 0, 1, 2, 3, 4, 5, 6]);
  });


  it('sort()', () => {
    let arr = [11, 15, 12, 10, -2, -55, 22];
    expect(sort(arr)).toEqual([-55, -2, 10, 11, 12, 15, 22]);
  });



});
