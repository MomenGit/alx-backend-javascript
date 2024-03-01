#!/usr/bin/node

/**
 * Round a and b and return the result
 * of the operation specified by type
 * @param {*} a
 * @param {*} b
 * @returns a type b
 */
function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      if (b === 0) return 'Error';
      return a / b;
    default:
      break;
  }
}

module.exports = calculateNumber;
