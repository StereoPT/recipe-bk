const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ true, 'Please Add an Ingredient Name!' ]
  },
}, { timestamps: false });

module.exports = mongoose.model('Ingredient', IngredientSchema);