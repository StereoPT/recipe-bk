const Ingredient = require('../models/Ingredient');

const getAllIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();

    return res.json({
      data: ingredients
    });
  } catch(error) {
    next(error);
  }
}

const getOneIngredient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id);

    return res.json({
      data: ingredient
    });
  } catch(error) {
    next(error);
  }
}

const addOneIngredient = async (req, res, next) => {
  try {
    const { name } = req.body;
    const ingredientAdded = await Ingredient.create({ name });

    return res.json({
      data: ingredientAdded
    });
  } catch(error) {
    next(error);
  }
}

const updateOneIngredient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name: newName } = req.body;
    const ingredientUpdated = await Ingredient.findByIdAndUpdate(id, { name: newName }, { new: true });

    return res.json({
      data: ingredientUpdated
    });
  } catch(error) {
    next(error);
  }
}

const deleteAllIngredients = async (req, res, next) => {
  try {
    //TODO: Return Deleted Ingredients!
    const ingredientsDeleted = await Ingredient.deleteMany({ });

    return res.json({
      data: ingredientsDeleted
    });
  } catch(error) {
    next(error);
  }
}

const deleteOneIngredient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredientDeleted = await Ingredient.findByIdAndDelete(id);

    return res.json({
      data: ingredientDeleted
    });
  } catch(error) {
    next(error);
  }
}

module.exports = {
  getAllIngredients, getOneIngredient,
  addOneIngredient,
  updateOneIngredient,
  deleteAllIngredients, deleteOneIngredient
}