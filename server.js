const express = require('express');
const router = require('./app/routes');
const layouts = require('express-ejs-layouts');
var sass = require('node-sass-middleware');

const app = express();
const hostname = 'localhost';
const port = 3000;

app.set('view engine', 'ejs');
app.use(layouts)
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use(sass({
  src: __dirname + '/sass',
  dest: __dirname + '/public/css',
  prefix: '/css'
}));

app.listen(port, hostname, () => {
  console.log('Server is running at http://' + hostname + ':' + port);
});
