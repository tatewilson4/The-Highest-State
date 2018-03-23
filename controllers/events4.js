const express = require('express');
const router = express.Router();
const Event4 = require('../models/events4.js');
const User = require('../models/users.js');



router.get('/' , (req, res) => {
  Event4.find({}, (err, allEvents4) => {
    res.render('seasons4/index.ejs' , {
      events4: allEvents4
    });
  });
});

router.get('/new' , (req, res) => {
  res.render('seasons4/new.ejs')
});


router.post('/' , (req, res) => {
  Event4.create(req.body, (err, createdEvent4) => {
    res.redirect('/events4');
  });
});

router.get('/:id' , (req,res) => {
  Event4.findById(req.params.id, (err, foundEvent4) => {
    res.render('seasons4/show.ejs' , {
      event4: foundEvent4
    });
  });
});

router.get('/:id/edit' , (req, res) => {
  Event4.findById(req.params.id, (err, foundEvent4) => {
    res.render(
      'seasons4/edit.ejs',
      {event4: foundEvent4}
    );
  });
});

router.put('/:id', (req, res) => {
  Event4.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/events4');
  });
});

router.delete('/:id' , (req, res) => {
  Event4.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/events4');
  });
});

module.exports = router;
