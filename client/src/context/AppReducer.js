import { Ingredients, Recipes } from './Types';

export const AppReducer = (state, action) => {
  switch(action.type) {
    case Ingredients.GET_ALL_INGREDIENTS: {
      return {
        ...state,
        loading: false,
        ingredients: action.payload
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

    // TODO: Handle ERRORS

    default:
      return state;
  }
}