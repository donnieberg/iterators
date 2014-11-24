var expect = require('chai').expect;

// Write a test for a method called 'each' that loops over an array and
// returns the array.
// Then write the method that will make that test pass.
//

describe('#each() method', function() {
  it('iterates over each element', function() {
    var originalArray = [1,2,3,4,5];
    var secondArray = [];

    each(originalArray, function(a) {
      secondArray.push(a);
    });

    expect(JSON.stringify(originalArray)).to.equal(JSON.stringify(secondArray));
  });
});


var each = function(originalArray, callback) {
  for (var i = 0; i < originalArray.length; i++) callback(originalArray[i]);
  return originalArray;
};


