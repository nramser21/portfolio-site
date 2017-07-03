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
  res.render('pages/projects/projects');
});

router.get('/projects/fcc', (req, res) => {
  res.render('pages/projects/fcc');
});

router.get('/projects/shell', (req, res) => {
  res.render('pages/projects/shell');
});

router.get('/projects/portfolio', (req, res) => {
  res.render('pages/projects/portfolio');
});

router.get('/projects/school', (req, res) => {
  res.render('pages/projects/school');
});

router.get('/projects/legacy', (req, res) => {
  res.render('pages/projects/legacy');
});

router.get('/projects/iss-tracker', (req, res) => {
  res.render('pages/projects/iss-tracker');
});

router.get('/projects/freelance', (req, res) => {
  res.render('pages/projects/freelance');
});

router.get('/projects/learning', (req, res) => {
  res.render('pages/projects/learning');
});

router.get('/projects/podcast', (req, res) => {
  res.render('pages/projects/podcast');
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});


module.exports = router;
