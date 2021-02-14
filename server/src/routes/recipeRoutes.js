const { Router } = require('express');
const router = Router();
const {
  getAllRecipes, getOneRecipe,
  addOneRecipe,
  updateOneRecipe,
  deleteAllRecipes, deleteOneRecipe
} = require('../controllers/recipeController');

router.route('/')
  .get(getAllRecipes)
  .post(addOneRecipe)
  .delete(deleteAllRecipes);

router.route('/:id')
  .get(getOneRecipe)
  .put(updateOneRecipe)
  .delete(deleteOneRecipe);

module.exports = router;