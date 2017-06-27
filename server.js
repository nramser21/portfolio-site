const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, hostname, () => {
  console.log('Server is running at http://' + hostname + ':' + port);
});
