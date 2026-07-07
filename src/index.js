const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  let filePath;
  // HOME
  if (req.url === '/') {
    filePath = path.join(__dirname, 'pages', 'index.html');
    res.statusCode = 200;
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'pages','about.html');
    res.statusCode = 200;
  } else if (req.url === '/contact-me') {
    filePath = path.join(__dirname, 'pages', 'contact-me.html')
    res.statusCode = 200;
  } else {
    filePath = path.join(__dirname, 'pages', '404.html');
    res.statusCode = 404;
  }

  // Sends an HTML file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      res.end(data);
    }
  })
})

// localhost:8080
server.listen(port, hostname, () => {
  console.log('Sever is listening for requests on port 8080');
});