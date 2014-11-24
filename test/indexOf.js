var expect = require('chai').expect;

// Write a test for a method called 'indexOf' that returns the index of
// a given element of an array.
// Then write the method that will make that test pass.

describe('#indexOf()', function() {
  it('finds the index of an element in an array', function() {
    var array = ['hi', 'bye', 'donielle', 'dennis'];
    expect(indexOf(array, 'donielle')).to.equal(2);
  });
});

var indexOf = function(array, elem) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === elem) return i;
  };
};

