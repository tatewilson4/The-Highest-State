const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event3Schema = new Schema({
  title: String,
  img: String,
  description: String,
  rating: Number
});

const Event3 = mongoose.model('Event3', event3Schema);

module.exports = Event3;
