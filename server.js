const express = require('express');
const app = express();
const router = require('./app/routes');
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(layouts)

const hostname = 'localhost';
const port = 3000;

app.use('/', router);

app.listen(port, hostname, () => {
  console.log('Server is running at http://' + hostname + ':' + port);
});
