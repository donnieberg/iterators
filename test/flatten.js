var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
// Then write the method that will make that test pass.

describe('#flatten()', function() {
  it('returns a one dimensional array from a nested array', function() {
    var nestedArray = [ [1,2,3], [4,5,6], [7,8,9]];
    var testResult = JSON.stringify(flatten(nestedArray));

    expect(testResult).to.equal('[1,2,3,4,5,6,7,8,9]');
  });
});

var flatten = function(array) {
  return [].concat.apply([], array);
};
