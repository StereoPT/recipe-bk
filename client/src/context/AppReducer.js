export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE_INGREDIENT':
      return {
        ingredients: state.ingredients.filter(ingredient => {
          return ingredient.id !== action.payload
        })
      }
    
    case 'ADD_INGREDIENT':
      return {
        ingredients: [action.payload, ...state.ingredients]
      }
    
    case 'EDIT_INGREDIENT':
      const toUpdate = action.payload;
      const updatedIngredients = state.ingredients.map(ingredient => {
        return ingredient.id === toUpdate.id ? toUpdate : ingredient;
      });

      return {
        ingredients: updatedIngredients
      }

    default:
      return state;
  }
}