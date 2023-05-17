const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calcualateNumber', () => {
  describe('SUM operation', () => {
  it('positive whole numbers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('positive numbers rounding down numbers', () => {
    expect(calculateNumber('SUM', 2.3, 3.0)).to.equal(5);
  });

  it('negative numbers', () => {
    expect(calculateNumber('SUM', -1, -2)).to.equal(-3);
  });

  it('positive and negative number', () => {
    expect(calculateNumber('SUM', -1.4, 2.3)).to.equal(1);
  });

  it('whole number', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });
  });

 describe('SUBTRACT operation', () => {
  it('positive equal whole numbers', () => {
   expect(calculateNumber('SUBTRACT', 3.0, 3.0)).to.equal(0);
  });
  it('negative equal whole numbers', () => {
   expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
  });

  it('positive and negative whole numbers', () => {
   expect(calculateNumber('SUBTRACT', -4.0, 3.0)).to.equal(-7);
  });

  it('both 0 whole numbers', () => {
   expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
  });
 
 });
 describe('DIVIDE operation', () => {
 
 it('both 0 whole numbers', () => {
   expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
 
  it('negative and positive number', () => {
   expect(calculateNumber('DIVIDE', -4.0, 2.0)).to.equal(-2);
  });


it('postive and negative number', () => {
   expect(calculateNumber('DIVIDE', 4.0, -2.0)).to.equal(-2);
  });
it('negative and 0 number', () => {
   expect(calculateNumber('DIVIDE', -4.0, 0)).to.equal('Error');
  });


  it('negative and positive rounded up number', () => {
   expect(calculateNumber('DIVIDE', -6.0, 2.5)).to.equal(-2);
  });

  it('negative and positive rounded down number', () => {
   expect(calculateNumber('DIVIDE', -4.0, 2.4)).to.equal(-2);
  });

 });

});
