const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event5Schema = new Schema({
  fall:
    {
      title: String,
      img: String,
      description: String,
      rating: Number},
  winter: {
      title: String,
      img: String,
      description: String,
      rating: Number},
  spring: {
    title: String,
    img: String,
    description: String,
    rating: Number},
  summer: {
    title: String,
    img: String,
    description: String,
    rating: Number}
});

const Event5 = mongoose.model('Event5', event5Schema);

module.exports = Event5;
