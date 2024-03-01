const request = require('request');
const expect = require('chai').expect;
const uri = 'http://localhost:7865';
describe('Index page', () => {
  it('Correct status code', (done) => {
    request.get(uri, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct status result', (done) => {
    request.get(uri, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
