var expect = require('chai').expect;

// Write a test for a method called 'reduce' that loops over an array
// and returns the result of each operation reduced into a single value.
// Then write the method that will make that test pass.

describe('#reduce()', function() {
  it('iterates over array with callback to return single value', function() {
    var array = [1,2,3];
    var endResult = 0;

    reduce(array, function(a) {
      endResult += (a*a);
    });

    expect(endResult).to.equal(14);
  });
});

var reduce = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  };
}
