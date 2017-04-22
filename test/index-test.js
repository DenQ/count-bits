var chai = require('chai');
var assert = require('assert');
var countBits = require('../src/index');

var expect = chai.expect;

var SIZE = 256;
var specs = [];

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

for(var i=0; i<SIZE; i++) {
  var count = (dec2bin(i).match(/1/g) || []).length;
  specs.push(count);
}

describe('Testing positive', function() {

  it('default usage', function() {
    assert.equal(4, countBits(15)); // 15 === 1111
    assert.equal(1, countBits(16)); // 15 === 1000
  });

  it('checking on big collection, key=>value', function() {
    specs.forEach(function(item, index) {
      assert.equal(item, countBits(index));
    });
  });

});

describe('Testing negative', function() {

  it('string number', function() {
    assert.equal(4, countBits('15'));
  });

  it('float', function() {
    assert.equal(4, countBits(15.5));
  });

  it('unsigned', function() {
    assert.equal(29, countBits(-15));
  });

  it('not number', function() {
    assert.equal(-1, countBits(NaN));
    assert.equal(-1, countBits(null));
    assert.equal(-1, countBits(undefined));
    assert.equal(-1, countBits(false));
    assert.equal(-1, countBits(true));
    assert.equal(-1, countBits({}));
    assert.equal(-1, countBits([]));
    assert.equal(-1, countBits(function() { return null;}));
  });

  it('string', function() {
    assert.equal(-1, countBits("hello"));
  });

});
