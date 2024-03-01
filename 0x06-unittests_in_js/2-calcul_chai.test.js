const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('0 + 0 should return 0', () =>
      expect(calculateNumber('SUM', 0, 0)).to.equal(0));
    it('0 + 0.5 should return 1', () =>
      expect(calculateNumber('SUM', 0, 0.5)).to.equal(1));
    it('0.2 + 0.6 should return 1', () =>
      expect(calculateNumber('SUM', 0.2, 0.6)).to.equal(1));
    it('1 + 3 should return 4', () =>
      expect(calculateNumber('SUM', 1, 3)).to.equal(4));
    it('1 + 3.7 should return 5', () =>
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5));
    it('1.2 + 3.7 should return 5', () =>
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5));
    it('1.5 + 3.7 should return 6', () =>
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6));
    it('-1 + 3 should return 2', () =>
      expect(calculateNumber('SUM', -1, 3)).to.equal(2));
    it('-1 + -3 should return -4', () =>
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4));
    it('-1 + -3.7 should return -5', () =>
      expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5));
    it('-1.2 + -3.7 should return -5', () =>
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5));
    it('-1.5 + -3.7 should return -6', () =>
      expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5));
    it('-1.6 + -3.7 should return -6', () =>
      expect(calculateNumber('SUM', -1.6, -3.7)).to.equal(-6));
  });
  describe('SUBTRACT', () => {
    it('0 - 0 should return 0', () =>
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0));
    it('0 - 0.5 should return -1', () =>
      expect(calculateNumber('SUBTRACT', 0, 0.5)).to.equal(-1));
    it('0.2 - 0.6 should return -1', () =>
      expect(calculateNumber('SUBTRACT', 0.2, 0.6)).to.equal(-1));
    it('1 - 3 should return -2', () =>
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2));
    it('1 - 3.7 should return -3', () =>
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3));
    it('1.2 - 3.7 should return -3', () =>
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3));
    it('1.5 - 3.7 should return -2', () =>
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2));
    it('-1 - 3 should return -4', () =>
      expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4));
    it('-1 - -3 should return 2', () =>
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2));
    it('-1 - -3.7 should return 3', () =>
      expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3));
    it('-1.2 - -3.7 should return 3', () =>
      expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3));
    it('-1.5 - -3.7 should return 3', () =>
      expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3));
    it('-1.6 - -3.7 should return 2', () =>
      expect(calculateNumber('SUBTRACT', -1.6, -3.7)).to.equal(2));
  });
  describe('DIVIDE', () => {
    it('0 / 0 should return Error', () =>
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error'));
    it('1 / 0.4 should return Error', () =>
      expect(calculateNumber('DIVIDE', 1, 0.4)).to.equal('Error'));
    it('0 / 0.5 should return 0', () =>
      expect(calculateNumber('DIVIDE', 0, 0.5)).to.equal(0));
    it('0.2 / 0.6 should return 0', () =>
      expect(calculateNumber('DIVIDE', 0.2, 0.6)).to.equal(0));
    it('1 / 4 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25));
    it('1 / 3.7 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25));
    it('1.2 / 3.7 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25));
    it('1.5 / 3.7 should return 0.5', () =>
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5));
    it('-1 / 4 should return -0.25', () =>
      expect(calculateNumber('DIVIDE', -1, 4)).to.equal(-0.25));
    it('-1 / -4 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', -1, -4)).to.equal(0.25));
    it('-1 / -3.7 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', -1, -3.7)).to.equal(0.25));
    it('-1.2 / -3.7 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', -1.2, -3.7)).to.equal(0.25));
    it('-1.5 / -3.7 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.equal(0.25));
    it('-1.6 / -3.7 should return 0.5', () =>
      expect(calculateNumber('DIVIDE', -1.6, -3.7)).to.equal(0.5));
    it('-1.5 / 3.7 should return 0.25', () =>
      expect(calculateNumber('DIVIDE', -1.5, 3.7)).to.equal(-0.25));
    it('1.6 / -3.7 should return 0.5', () =>
      expect(calculateNumber('DIVIDE', 1.6, -3.7)).to.equal(-0.5));
  });
});
