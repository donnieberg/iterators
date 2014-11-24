var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.


describe('#uniq()', function() {
  it('returns unique elements from array', function() {
    var origArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
    var testResult = JSON.stringify(uniq(origArray));
    expect(testResult).to.equal('[1,2,3,4,5,6]');
  });
});

var uniq = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(results.indexOf(array[i]) === -1) results.push(array[i]);
  };
  return results;
};
