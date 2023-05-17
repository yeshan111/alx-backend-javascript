const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using calculateNumber form Utils', () => {
   const sinoSpy = sinon.spy(Utils);

   sendPaymentRequestToApi(100, 50);
   expect(sinoSpy.calculateNumber.calledWith('SUM', 100, 50)).to.be.true;
   expect(sinoSpy.calculateNumber.callCount).to.be.equal(1);
   sinoSpy.calculateNumber.restore();
  
  });
});
