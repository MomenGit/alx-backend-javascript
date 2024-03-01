#!/usr/bin/node

/**
 * Round a and b and return the sum of it
 * @param {*} a
 * @param {*} b
 * @returns a + b
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
