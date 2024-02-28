#!/usr/bin/node
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Small HTTP server using Express listening on port ${port}`);
});

module.exports = app;
