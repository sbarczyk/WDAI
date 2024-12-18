// routes/books.js
const express = require('express');
const router = express.Router();
const { Book } = require('../models');
const auth = require('../middleware/auth');

// GET /api/books
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// GET /api/books/:id
router.get('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if(!book) return res.status(404).json({error: 'Book not found'});
  res.json(book);
});

// POST /api/books (zabezpieczone)
router.post('/', auth, async (req, res) => {
  const { title, author, year } = req.body;
  if(!title || !author || !year) return res.status(400).json({error: 'Missing fields'});

  const book = await Book.create({ title, author, year });
  res.json({ bookId: book.id });
});

// DELETE /api/books/:id (zabezpieczone)
router.delete('/:id', auth, async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if(!book) return res.status(404).json({error: 'Book not found'});
  await book.destroy();
  res.json({message: 'Book deleted'});
});

module.exports = router;