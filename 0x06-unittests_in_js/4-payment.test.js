const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using calculateNumber form Utils', () => {
   const stubSpy = sinon.stub(Utils, 'calculateNumber');
   const sinoSpy = sinon.spy(console);

   stubSpy.returns(10);
   sendPaymentRequestToApi(100, 20);
   expect(stubSpy.calledWith('SUM', 100, 20)).to.be.true;
   expect(stubSpy.callCount).to.be.equal(1);
   expect(sinoSpy.log.calledWith('The total is: 10')).to.be.true;
   expect(sinoSpy.log.callCount).to.be.equal(1);
   stubSpy.restore();
   sinoSpy.log.restore();
  });
});
