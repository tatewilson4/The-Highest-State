const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  img: String,
  description: String,
  rating: Number
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
