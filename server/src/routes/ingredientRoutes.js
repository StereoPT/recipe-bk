const { Router } = require('express');
const router = Router();
const {
  getAllIngredients, getOneIngredient,
  addOneIngredient,
  updateOneIngredient,
  deleteAllIngredients, deleteOneIngredient
} = require('../controllers/ingredientController');

router.route('/')
  .get(getAllIngredients)
  .post(addOneIngredient)
  .delete(deleteAllIngredients);

router.route('/:id')
  .get(getOneIngredient)
  .put(updateOneIngredient)
  .delete(deleteOneIngredient);

module.exports = router;