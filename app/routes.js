const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/about', (req, res) => {
  res.render('pages/about');
});

router.get('/blog', (req, res) => {
  res.render('pages/blog');
});

router.get('/projects', (req, res) => {
  res.render('pages/project');
});

router.get('/contact', (req, res) => {
  res.render('pages/project');
});


module.exports = router;
