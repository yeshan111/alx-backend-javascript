const request = require('request');
const { expect } = require('chai');

describe('API Integration test', () => {
  const URL = 'http://localhost:7865';
 it('GET / should return correct response', (done) => {
   request.get(`${URL}`, (_, res, body) => {
    expect(res.statusCode).to.be.equal(200);
    expect(body).to.be.equal('Welcome to the payment system');
    done();	   
   });
 });

});
