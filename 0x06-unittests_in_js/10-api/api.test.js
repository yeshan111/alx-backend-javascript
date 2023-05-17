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

 it('GET /cart/:id should return correct response for a valid :id', (done) => {
    request.get(`${URL}/cart/47`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

 it('GET /cart/:id should return 404 response for a negative number :id', (done) => {
    request.get(`${URL}/cart/-47`, (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

 it('GET /cart/:id should return 404 response for an non-numeric value of :id', (done) => {
    request.get(`${URL}/cart/f600-d445-10de`, (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login should return a valid response', (done) => {
    request.post(`${URL}/login`, {json: {userName: 'mesihg'}}, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome mesihg');
      done();
    });
  });

  it('GET /available_payments should return a valid response', (done) => {
    request.get(`${URL}/available_payments`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
