#!/usr/bin/node

const process = require('process');

/**
 * prints in STDOUT the string argument
 * @param {String} string - string to be printed
 */
function displayMessage (string) {
  process.stdout.write(string + '\n');
}

module.exports = displayMessage;
