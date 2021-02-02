const Ingredient = require('../models/Ingredient');

const getIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    res.json({
      data: ingredients
    });
  } catch(error) {
    next(error);
  }
}

const addIngredient = async (req, res, next) => {
  try {
    res.json({
      message: 'POST Ingredient',
    });
  } catch(error) {
    next(error);
  }
}

const deleteIngredient = async (req, res, next) => {
  try {
    res.json({
      message: 'DELETE Ingredient',
    });
  } catch(error) {
    next(error);
  }
}

module.exports = {
  getIngredients,
  addIngredient,
  deleteIngredient
}