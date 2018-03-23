const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.get('/new' , (req, res) => {
  res.render('sessions/new.ejs');
});

router.post('/' , (req, res) => {
  User.findOne({
    name: req.body.name
  }, (err, foundUser) => {
    if(bcrypt.compareSync(req.body.password, foundUser.password)){
  req.session.currentUser = foundUser;
  res.redirect('/');
  } else {
    res.send('wrong password')
    }
  });
});

router.delete('/' , (req, res) => {
  res.sessions.destroy(() => {
    res.redirect('/events');
  });
});

module.exports = router;
