var expect = require('chai').expect;

// Write a test for a method called 'map' that loops over an array
// and returns the result of each operation in a new array.
// Then write the method that will make that test pass.

describe('#map()', function() {
  it('returns new array of itself', function() {
    var originalArray = [1,2,4,5,5];
    var result = map(originalArray, function(a) {
      return a*=2;
    });

    result = JSON.stringify(result);
    expect(result).to.equal('[2,4,8,10,10]');
  });
});

var map = function(array, callback) {
  var newArray=[];
  for (var i = 0; i < array.length; i++) newArray.push(callback(array[i]));
  return newArray;
};
