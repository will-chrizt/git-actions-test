// src/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.send(`Hello from Node.js app! Running in ${environment} environment.`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port} in ${environment} mode`);
});
