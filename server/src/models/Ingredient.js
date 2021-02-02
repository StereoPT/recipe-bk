const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: String,
}, { timestamps: false });

module.exports = mongoose.model('Ingredient', IngredientSchema);