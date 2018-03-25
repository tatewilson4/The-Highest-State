const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Event = require('./models/events.js');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride('_method'));


const eventsController = require('./controllers/events.js');
app.use('/events', eventsController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const events2Controller = require('./controllers/events2.js');
app.use('/events2', events2Controller);

const events3Controller = require('./controllers/events3.js');
app.use('/events3', events3Controller);

const events4Controller = require('./controllers/events4.js');
app.use('/events4', events4Controller);

const events5Controller = require('./controllers/events5.js');
app.use('/events5', events5Controller);

app.use(express.static('public'));



app.get('/' , (req, res) => {
  res.render('index.ejs');
});





const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/events'
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('listening');
});
