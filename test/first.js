var expect = require('chai').expect;

// Write a test for a method called 'first' that returns the first
// element of an array.
// Then write the method that will make that test pass.
//

describe('#first()', function() {
  it('returns first element', function() {
    var array = [1,2,3,4,5];
    expect(first(array)).to.equal(1);
  });
});

var first = function(array) {
  return array[0];
};
