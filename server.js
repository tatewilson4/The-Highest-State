const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./models/users.js');



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


const eventsController = require('./controllers/events.js');
app.use('/events', eventsController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

// app.use(express.static('public'));
app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));



app.listen(3000, () => {
  console.log('listening');
});

mongoose.connect('mongodb://localhost:27017/events');
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
