import { Recipes } from './Actions';

export const recipeReducer = (state, action) => {
  switch(action.type) {
    case Recipes.GET_ALL_RECIPES: {
      return {
        ...state,
        loading: false,
        recipes: action.payload
      }
    }

    case Recipes.ADD_ONE_RECIPE: {
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    }

    case Recipes.UPDATE_ONE_RECIPE: {
      const toUpdate = action.payload;
      const updatedRecipes = state.recipes.map(recipe => {
        return recipe._id === toUpdate._id ? toUpdate : recipe;
      });

      return {
        ...state,
        recipes: updatedRecipes
      }
    }

    case Recipes.DELETE_ONE_RECIPE: {
      return {
        ...state,
        recipes: state.recipes.filter(recipe => {
          return recipe._id !== action.payload
        })
      }
    }

    default:
      return state;
  }
}
