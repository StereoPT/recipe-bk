const { Router } = require('express');
const router = Router();
const {
  getIngredients,
  addIngredient,
  deleteIngredient
} = require('../controllers/ingredientController');

router
  .route('/')
  .get(getIngredients)
  .post(addIngredient);

router
  .route('/:id')
  .delete(deleteIngredient);

module.exports = router;