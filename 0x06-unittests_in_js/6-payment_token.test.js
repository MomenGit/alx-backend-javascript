const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('', () => {
  it('Successful Response', (done) => {
    getPaymentTokenFromAPI(true)
      .then((value) => {
        expect(value).to.deep.equal({
          data: 'Successful response from the API',
        });
        done();
      })
      .catch(() => done());
  });
  it('Bad Response', (done) => {
    getPaymentTokenFromAPI(false)
      .then((value) => {
        expect(value).to.equal(undefined);
        done();
      })
      .catch(() => done());
  });
});
