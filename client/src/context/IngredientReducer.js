import { Ingredients } from './Actions';

export const ingredientReducer = (state, action) => {
  switch(action.type) {
    case Ingredients.GET_ALL_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      }
    }
    
    case Ingredients.ADD_ONE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    }
    
    case Ingredients.UPDATE_ONE_INGREDIENT: {
      const toUpdate = action.payload;
      const updatedIngredients = state.ingredients.map(ingredient => {
        return ingredient._id === toUpdate._id ? toUpdate : ingredient;
      });

      return {
        ...state,
        ingredients: updatedIngredients
      }
    }

    case Ingredients.DELETE_ONE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter(ingredient => {
          return ingredient._id !== action.payload
        })
      }
    }

    default:
      return state;
  }
}
