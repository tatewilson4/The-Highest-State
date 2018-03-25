const express = require('express');
const router = express.Router();
const Event5 = require('../models/events5.js');
const User = require('../models/users.js');
//

router.get('/' , (req, res) => {
  Event5.find({}, (err, allEvents5) => {
    res.render('seasons5/index.ejs' , {
      events5: allEvents5
    });
  });
});

router.get('/new' , (req, res) => {
  res.render('seasons5/new.ejs')
});


router.post('/' , (req, res) => {
  Event5.create(req.body, (err, createdEvent) => {
    res.redirect('/events5');
  });
});


router.get('/:id' , (req,res) => {
  Event5.findById(req.params.id, (err, foundEvent5) => {
    res.render('seasons5/show.ejs' , {
      event5: foundEvent5
    });
  });
});

router.get('/:id/edit' , (req, res) => {
  Event5.findById(req.params.id, (err, foundEvent5) => {
    res.render(
      'seasons5/edit.ejs',
      {event5: foundEvent5}
    );
  });
});

router.put('/:id', (req, res) => {
  Event5.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/events5');
  });
});

router.delete('/:id' , (req, res) => {
  Event5.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/events5');
  });
});

module.exports = router;
