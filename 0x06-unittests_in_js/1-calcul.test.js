const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calcualateNumber', () => {
  describe('SUM operation', () => {
  it('positive whole numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('positive numbers rounding down numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 2.3, 3.0), 5);
  });

  it('negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -2), -3);
  });

  it('positive and negative number', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, 2.3), 1);
  });

  it('whole number', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });
  });

 describe('SUBTRACT operation', () => {
  it('positive equal whole numbers', () => {
   assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 3.0), 0);
  });
  it('negative equal whole numbers', () => {
   assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
  });

  it('positive and negative whole numbers', () => {
   assert.strictEqual(calculateNumber('SUBTRACT', -4.0, 3.0), -7);
  });

  it('both 0 whole numbers', () => {
   assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
  });
 
 });
 describe('DIVIDE operation', () => {
 
 it('both 0 whole numbers', () => {
   assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
 
  it('negative and positive number', () => {
   assert.strictEqual(calculateNumber('DIVIDE', -4.0, 2.0), -2);
  });


it('postive and negative number', () => {
   assert.strictEqual(calculateNumber('DIVIDE', 4.0, -2.0), -2);
  });
it('negative and 0 number', () => {
   assert.strictEqual(calculateNumber('DIVIDE', -4.0, 0), 'Error');
  });


  it('negative and positive rounded up number', () => {
   assert.strictEqual(calculateNumber('DIVIDE', -6.0, 2.5), -2);
  });

  it('negative and positive rounded down number', () => {
   assert.strictEqual(calculateNumber('DIVIDE', -4.0, 2.4), -2);
  });

 });

});
