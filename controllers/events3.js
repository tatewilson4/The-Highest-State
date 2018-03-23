const express = require('express');
const router = express.Router();
const Event3 = require('../models/events3.js');
const User = require('../models/users.js');



router.get('/' , (req, res) => {
  Event3.find({}, (err, allEvents3) => {
    res.render('seasons3/index.ejs' , {
      events3: allEvents3
    });
  });
});

router.get('/new' , (req, res) => {
  res.render('seasons3/new.ejs')
});


router.post('/' , (req, res) => {
  Event3.create(req.body, (err, createdEvent3) => {
    res.redirect('/events3');
  });
});

router.get('/:id' , (req,res) => {
  Event3.findById(req.params.id, (err, foundEvent3) => {
    res.render('seasons3/show.ejs' , {
      event3: foundEvent3
    });
  });
});

router.get('/:id/edit' , (req, res) => {
  Event3.findById(req.params.id, (err, foundEvent3) => {
    res.render(
      'seasons3/edit.ejs',
      {event3: foundEvent3}
    );
  });
});

router.put('/:id', (req, res) => {
  Event3.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/events3');
  });
});

router.delete('/:id' , (req, res) => {
  Event3.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/events3');
  });
});

module.exports = router;
