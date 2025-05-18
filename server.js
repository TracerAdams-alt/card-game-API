const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/auth');
require('./config/passport'); // Load passport config

const app = express();
app.use(express.json());
app.use(session({ secret: 'secret123', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes); // Mount auth routes

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
