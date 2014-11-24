var expect = require('chai').expect;

// Write a test for a method called 'last' that returns the last element
// of an array.
// Then write the method that will make that test pass.
//

describe('#last()', function() {
  it('returns last element', function() {
    var array = [1,2,3,4,5];
    expect(last(array)).to.equal(5);
  });
});

var last = function(array) {
  var lastItem = array.length-1;
  return array[lastItem];
};
