const express = require('express');
const app = express();

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)

const PORT = 8080;
const hostname = 'localhost';
app.listen(PORT, hostname, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Sever is listening for requests on port ${PORT}`)
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});