const { Router } = require('express');
const path = require('path');

const indexRouter = Router();
indexRouter.get('/', (req, res) => {
  filePath = path.join(__dirname, 'pages', 'index.html');
  res.statusCode = 200;
  res.sendFile(filePath);
})

indexRouter.get('/about', (req, res) => {
  filePath = path.join(__dirname, 'pages', 'about.html');
  res.statusCode = 200;
  res.sendFile(filePath);
})

indexRouter.get('/contact-me', (req, res) => {
  filePath = path.join(__dirname, 'pages', 'contact-me.html');
  res.statusCode = 200;
  res.sendFile(filePath);
})

indexRouter.get('/{*splat}',(req, res) => {
  filePath = path.join(__dirname, 'pages', '404.html');
  res.statusCode = 404;
  res.sendFile(filePath);
})
module.exports = indexRouter;