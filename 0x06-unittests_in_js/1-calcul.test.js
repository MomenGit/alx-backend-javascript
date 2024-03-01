const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('0 + 0 should return 0', () =>
      assert.equal(calculateNumber('SUM', 0, 0), 0));
    it('0 + 0.5 should return 1', () =>
      assert.equal(calculateNumber('SUM', 0, 0.5), 1));
    it('0.2 + 0.6 should return 1', () =>
      assert.equal(calculateNumber('SUM', 0.2, 0.6), 1));
    it('1 + 3 should return 4', () =>
      assert.equal(calculateNumber('SUM', 1, 3), 4));
    it('1 + 3.7 should return 5', () =>
      assert.equal(calculateNumber('SUM', 1, 3.7), 5));
    it('1.2 + 3.7 should return 5', () =>
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5));
    it('1.5 + 3.7 should return 6', () =>
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6));
    it('-1 + 3 should return 2', () =>
      assert.equal(calculateNumber('SUM', -1, 3), 2));
    it('-1 + -3 should return -4', () =>
      assert.equal(calculateNumber('SUM', -1, -3), -4));
    it('-1 + -3.7 should return -5', () =>
      assert.equal(calculateNumber('SUM', -1, -3.7), -5));
    it('-1.2 + -3.7 should return -5', () =>
      assert.equal(calculateNumber('SUM', -1.2, -3.7), -5));
    it('-1.5 + -3.7 should return -6', () =>
      assert.equal(calculateNumber('SUM', -1.5, -3.7), -5));
    it('-1.6 + -3.7 should return -6', () =>
      assert.equal(calculateNumber('SUM', -1.6, -3.7), -6));
  });
  describe('SUBTRACT', () => {
    it('0 - 0 should return 0', () =>
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0));
    it('0 - 0.5 should return -1', () =>
      assert.equal(calculateNumber('SUBTRACT', 0, 0.5), -1));
    it('0.2 - 0.6 should return -1', () =>
      assert.equal(calculateNumber('SUBTRACT', 0.2, 0.6), -1));
    it('1 - 3 should return -2', () =>
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2));
    it('1 - 3.7 should return -3', () =>
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3));
    it('1.2 - 3.7 should return -3', () =>
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3));
    it('1.5 - 3.7 should return -2', () =>
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2));
    it('-1 - 3 should return -4', () =>
      assert.equal(calculateNumber('SUBTRACT', -1, 3), -4));
    it('-1 - -3 should return 2', () =>
      assert.equal(calculateNumber('SUBTRACT', -1, -3), 2));
    it('-1 - -3.7 should return 3', () =>
      assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3));
    it('-1.2 - -3.7 should return 3', () =>
      assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3));
    it('-1.5 - -3.7 should return 3', () =>
      assert.equal(calculateNumber('SUBTRACT', -1.5, -3.7), 3));
    it('-1.6 - -3.7 should return 2', () =>
      assert.equal(calculateNumber('SUBTRACT', -1.6, -3.7), 2));
  });
  describe('DIVIDE', () => {
    it('0 / 0 should return Error', () =>
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error'));
    it('1 / 0.4 should return Error', () =>
      assert.equal(calculateNumber('DIVIDE', 1, 0.4), 'Error'));
    it('0 / 0.5 should return 0', () =>
      assert.equal(calculateNumber('DIVIDE', 0, 0.5), 0));
    it('0.2 / 0.6 should return 0', () =>
      assert.equal(calculateNumber('DIVIDE', 0.2, 0.6), 0));
    it('1 / 4 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25));
    it('1 / 3.7 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25));
    it('1.2 / 3.7 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25));
    it('1.5 / 3.7 should return 0.5', () =>
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5));
    it('-1 / 4 should return -0.25', () =>
      assert.equal(calculateNumber('DIVIDE', -1, 4), -0.25));
    it('-1 / -4 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', -1, -4), 0.25));
    it('-1 / -3.7 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', -1, -3.7), 0.25));
    it('-1.2 / -3.7 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', -1.2, -3.7), 0.25));
    it('-1.5 / -3.7 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', -1.5, -3.7), 0.25));
    it('-1.6 / -3.7 should return 0.5', () =>
      assert.equal(calculateNumber('DIVIDE', -1.6, -3.7), 0.5));
    it('-1.5 / 3.7 should return 0.25', () =>
      assert.equal(calculateNumber('DIVIDE', -1.5, 3.7), -0.25));
    it('1.6 / -3.7 should return 0.5', () =>
      assert.equal(calculateNumber('DIVIDE', 1.6, -3.7), -0.5));
  });
});
