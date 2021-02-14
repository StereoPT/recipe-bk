const Recipe = require('../models/Recipe');

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();

    return res.json({
      data: recipes
    });
  } catch(error) {
    next(error);
  }
}

const getOneRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);

    return res.json({
      data: recipe
    });
  } catch(error) {
    next(error);
  }
}

const addOneRecipe = async (req, res, next) => {
  try {
    const { name } = req.body;
    const recipeAdded = await Recipe.create({ name });

    return res.json({
      data: recipeAdded
    });
  } catch(error) {
    next(error);
  }
}

const updateOneRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name: newName } = req.body;
    const recipeUpdated = await Recipe.findByIdAndUpdate(id, { name: newname }, { new: true });

    return res.json({
      data: recipeUpdated
    });
  } catch(error) {
    next(error);
  }
}

const deleteAllRecipes = async (req, res, next) => {
  try {
    //TODO: Return Deleted Ingredients!
    const recipeDeleted = await Recipe.deleteMany({ });

    return res.json({
      data: recipeDeleted
    });
  } catch(error) {
    next(error);
  }
}

const deleteOneRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipeDeleted = await Recipe.findByIdAndDelete(id);

    return res.json({
      data: recipeDeleted
    });
  } catch(error) {
    next(error);
  }
}

module.exports = {
  getAllRecipes, getOneRecipe,
  addOneRecipe,
  updateOneRecipe,
  deleteAllRecipes, deleteOneRecipe
}