const express = require('express');
const router = express.Router();
const Event = require('../models/events.js');

router.get('/' , (req, res) => {
  Event.find({}, (err, allEvents) => {
    res.render('index.ejs' , {
      events: allEvents
    });
  });
});

router.get('/new' , (req, res) => {
  res.render('new.ejs')
});

// router.get('/events/seedEvents', (req, res) => {
//
//   Event.create(seed, (err, createdEvents) => {
//     // logs created users
//     console.log(createdEvents);
//     // redirects to index
//     res.redirect('/events');
//   });
// });

router.post('/' , (req, res) => {
  Event.create(req.body, (err, createdEvent) => {
    res.redirect('/events');
  });
});

router.get('/:id' , (req,res) => {
  Event.findById(req.params.id, (err, foundEvent) => {
    res.render('show.ejs' , {
      event: foundEvent
    });
  });
});

router.get('/:id/edit' , (req, res) => {
  Event.findById(req.params.id, (err, foundEvent) => {
    res.render(
      'edit.ejs',
      {event: foundEvent}
    );
  });
});

router.put('/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/events');
  });
});

router.delete('/:id' , (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/events');
  });
});

module.exports = router;
