const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('0 + 0 should return 0', () => assert.equal(calculateNumber(0, 0), 0));
  it('0 + 0.5 should return 1', () => assert.equal(calculateNumber(0, 0.5), 1));
  it('0.2 + 0.6 should return 1', () =>
    assert.equal(calculateNumber(0.2, 0.6), 1));
  it('1 + 3 should return 4', () => assert.equal(calculateNumber(1, 3), 4));
  it('1 + 3.7 should return 5', () => assert.equal(calculateNumber(1, 3.7), 5));
  it('1.2 + 3.7 should return 5', () =>
    assert.equal(calculateNumber(1.2, 3.7), 5));
  it('1.5 + 3.7 should return 6', () =>
    assert.equal(calculateNumber(1.5, 3.7), 6));
  it('-1 + 3 should return 2', () => assert.equal(calculateNumber(-1, 3), 2));
  it('-1 + -3 should return -4', () =>
    assert.equal(calculateNumber(-1, -3), -4));
  it('-1 + -3.7 should return -5', () =>
    assert.equal(calculateNumber(-1, -3.7), -5));
  it('-1.2 + -3.7 should return -5', () =>
    assert.equal(calculateNumber(-1.2, -3.7), -5));
  it('-1.5 + -3.7 should return -6', () =>
    assert.equal(calculateNumber(-1.5, -3.7), -5));
  it('-1.6+ -3.7 should return -6', () =>
    assert.equal(calculateNumber(-1.6, -3.7), -6));
});
