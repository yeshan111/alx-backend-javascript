const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calcualateNumber', () => {
  it('integer whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('rounding down a\'s floating point number', () => {
    assert.strictEqual(calculateNumber(2.3, 3.0), 5);
  });

  it('rounding down b\'s floating point  number', () => {
    assert.strictEqual(calculateNumber(2.0, 2.4), 4);
  });

  it('rounding down both a\'s and b\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.3), 3);
  });

  it('rounding up a\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.5, 2.0), 4);
  });

  it('rounding up b\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.6), 4);
  });

  it('rounding up both a\'s and b\'s floating point number', () => {
    assert.strictEqual(calculateNumber(1.5, 2.6), 5);
  });
});
