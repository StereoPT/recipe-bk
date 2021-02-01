exports.getIngredients = (req, res, next) => {
  try {
    res.json({
      message: 'GET Ingredients',
    });
  } catch(error) {
    next(error);
  }
}

exports.addIngredient = (req, res, next) => {
  try {
    res.json({
      message: 'POST Ingredient',
    });
  } catch(error) {
    next(error);
  }
}

exports.deleteIngredient = (req, res, next) => {
  try {
    res.json({
      message: 'DELETE Ingredient',
    });
  } catch(error) {
    next(error);
  }
}