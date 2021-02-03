export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'GET_ALL_INGREDIENTS': {
      return {
        ...state,
        loading: false,
        ingredients: action.payload
      }
    }
    
    case 'ADD_INGREDIENT': {
      return {
        ingredients: [...state.ingredients, action.payload]
      }
    }
    
    case 'EDIT_INGREDIENT': {
      const toUpdate = action.payload;
      const updatedIngredients = state.ingredients.map(ingredient => {
        return ingredient.id === toUpdate.id ? toUpdate : ingredient;
      });

      return {
        ingredients: updatedIngredients
      }
    }

    case 'DELETE_ONE_INGREDIENT': {
      return {
        ingredients: state.ingredients.filter(ingredient => {
          return ingredient._id !== action.payload
        })
      }
    }

    // TODO: Handle ERRORS

    default:
      return state;
  }
}