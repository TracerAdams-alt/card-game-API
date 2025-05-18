const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const router = express.Router();
const users = []; // Replace with DB

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const existing = users.find(u => u.username === username);
  if (existing) return res.status(400).json({ message: 'User already exists' });

  const hashed = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashed });
  res.json({ message: 'User registered' });
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Logged in', user: req.user });
});

// Logout
router.post('/logout', (req, res) => {
  req.logout(() => res.json({ message: 'Logged out' }));
});

module.exports = router;
