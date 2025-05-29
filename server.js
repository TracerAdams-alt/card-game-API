const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('./config/passport'); // adjust path if needed

const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/cardgame', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
