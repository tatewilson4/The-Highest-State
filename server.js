const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// const seed = require('./models/seed.js');
const session = require('express-session');
const eventsController = require('./controllers/events.js');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/events', eventsController);

// app.use(express.static('public'));
app.use(session({
  secret: "feedmeseymour", //some random string
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
