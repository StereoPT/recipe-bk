const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ true, 'Please Add a Recipe Name!' ]
  },
}, { timestamps: false });

module.exports = mongoose.model('Recipe', RecipeSchema);