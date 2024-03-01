const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 7865;

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to the payment system');
});

const server = app.listen(port, hostname, () => {
  console.log(`API available on ${hostname} port ${port}`);
});
