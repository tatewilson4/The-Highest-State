const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event2Schema = new Schema({
  title: String,
  img: String,
  description: String,
  rating: Number
});

const Event2 = mongoose.model('Event2', event2Schema);

module.exports = Event2;
