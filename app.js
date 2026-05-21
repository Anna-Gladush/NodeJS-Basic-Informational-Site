const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  filePath = path.join(__dirname, 'src', 'index.html');
  res.statusCode = 200;
  res.sendFile(filePath)
})

app.get('/about', (req, res) => {
  filePath = path.join(__dirname, 'src', 'about.html');
  res.statusCode = 200;
  res.sendFile(filePath)
})

app.get('/contact-me', (req, res) => {
  filePath = path.join(__dirname, 'src', 'contact-me.html');
  res.statusCode = 200;
  res.sendFile(filePath)
})

app.use((req, res) => {
  filePath = path.join(__dirname, 'src', '404.html');
  res.statusCode = 404;
  res.sendFile(filePath)
})

const PORT = 8080;
const hostname = 'localhost'
app.listen(PORT, hostname, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Sever is listening for requests on port ${PORT}`)
})