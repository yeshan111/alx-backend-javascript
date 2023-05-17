const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let sinoSpy;
  beforeEach(() => {
    if(!sinoSpy) {
     sinoSpy = sinon.spy(console);
    }
  });
  afterEach(() => {
   sinoSpy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) should log "The total is: 120"', () => {
   sendPaymentRequestToApi(100, 20);
   expect(sinoSpy.log.calledWith('The total is: 120')).to.be.true;
   expect(sinoSpy.log.calledOnce).to.be.true;
  });

 it('sendPaymentRequestToApi(10, 10) should log "The total is: 20"', () => {
   sendPaymentRequestToApi(10, 10);
   expect(sinoSpy.log.calledWith('The total is: 20')).to.be.true;
   expect(sinoSpy.log.calledOnce).to.be.true;
  });

});
