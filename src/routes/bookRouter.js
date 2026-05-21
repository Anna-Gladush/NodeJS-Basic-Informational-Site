const { Router } = require('express');
const bookRouter = Router();

bookRouter.get('/', (req, res) => {
  res.send('All Books');
})

bookRouter.get('/:booksId', (req, res) => {
  const { booksId } = req.params;
  res.send(`Book Goblin wants: ${booksId}`);
})

bookRouter.get('/:booksId/reserve', (req, res) => {
  const { booksId } = req.params;
  res.send(`Book Goblin has: ${booksId}`);
})

bookRouter.post('/:bookId/reserve', (req, res) => {
  const { booksId } = req.params;
  res.send(`POST Book Goblin has: ${booksId}`);
})
module.exports = bookRouter;