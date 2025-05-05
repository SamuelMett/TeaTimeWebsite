const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  description: { type: String },
  image: { type: String } // URL for item photo (optional)
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
