const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event4Schema = new Schema({
  title: String,
  img: String,
  description: String,
  rating: Number
});

const Event4 = mongoose.model('Event4', event4Schema);

module.exports = Event4;
