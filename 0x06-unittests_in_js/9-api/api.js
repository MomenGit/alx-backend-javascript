const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 7865;

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = Number(req.params['id']);
  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.sendStatus(404);
  }
});

const server = app.listen(port, hostname, () => {
  console.log(`API available on ${hostname} port ${port}`);
});
