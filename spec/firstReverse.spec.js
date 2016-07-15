var firstReverse = require('../easy-1-firstReverse/main');
var expect = require('chai').expect;

describe('firstReverse', function () {
  it('is a function', function () {
    expect(firstReverse).to.be.a('function');
  });
  it('expects one argument', function () {
    expect(firstReverse.length).to.equal(1);
  })
  it('returns \'etybredoc\' for \'coderbyte\'', function () {
    expect(firstReverse('coderbyte')).to.equal('etybredoc');
  });
  it('returns \'edoC evoL I\' for \'I Love Code\'', function () {
    expect(firstReverse('I Love Code')).to.equal('edoC evoL I');
  });

});