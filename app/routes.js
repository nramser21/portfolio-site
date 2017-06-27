const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home page');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

router.get('/blog', (req, res) => {
  res.send('Blog page');
});

router.get('/projects', (req, res) => {
  res.send('Projects page');
});

router.get('/contact', (req, res) => {
  res.send('Contact page');
});


module.exports = router;
