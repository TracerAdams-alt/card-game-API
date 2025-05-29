const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  power: Number,
  health: Number,
  cost: Number,
  ability: String,
  imageUrl: String // path to your sprite
});

module.exports = mongoose.model('Card', CardSchema);
