// routes/users.js
const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({error: 'Email and password required'});
  
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hashed });
    return res.json({ userId: user.id });
  } catch (err) {
    console.error(err);
    return res.status(400).json({error: 'User already exists or invalid data'});
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({error: 'Email and password required'});

  const user = await User.findOne({ where: { email } });
  if(!user) return res.status(401).json({error: 'Invalid credentials'});

  const match = await bcrypt.compare(password, user.password);
  if(!match) return res.status(401).json({error: 'Invalid credentials'});

  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;