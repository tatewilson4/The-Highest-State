const express = require('express');
const router = express.Router();
const Event2 = require('../models/events2.js');
const User = require('../models/users.js');



router.get('/' , (req, res) => {
  Event2.find({}, (err, allEvents2) => {
    res.render('seasons2/index.ejs' , {
      events2: allEvents2
    });
  });
});

router.get('/new' , (req, res) => {
  res.render('seasons2/new.ejs')
});


router.post('/' , (req, res) => {
  Event2.create(req.body, (err, createdEvent2) => {
    res.redirect('/events2');
  });
});

router.get('/:id' , (req,res) => {
  Event2.findById(req.params.id, (err, foundEvent2) => {
    res.render('seasons2/show.ejs' , {
      event2: foundEvent2
    });
  });
});

router.get('/:id/edit' , (req, res) => {
  Event2.findById(req.params.id, (err, foundEvent2) => {
    res.render(
      'seasons2/edit.ejs',
      {event2: foundEvent2}
    );
  });
});

router.put('/:id', (req, res) => {
  Event2.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/events2');
  });
});

router.delete('/:id' , (req, res) => {
  Event2.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/events2');
  });
});

module.exports = router;
