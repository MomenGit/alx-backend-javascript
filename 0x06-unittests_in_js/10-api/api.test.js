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

describe('GET /cart/:id route', () => {
  it('Correct result when id is number', (done) => {
    request.get(`${uri}/cart/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('Correct status code when id is number', (done) => {
    request.get(`${uri}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct status code when is not a number', (done) => {
    request.get(`${uri}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('GET /available_payments route', () => {
  it('Correct result', (done) => {
    request.get(`${uri}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});

describe('POST /login route', () => {
  it('Correct result', (done) => {
    request.post(
      `${uri}/login`,
      { json: { userName: 'Betty' } },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      },
    );
  });
});
