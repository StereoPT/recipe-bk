import React, { createContext, useReducer } from 'react';
import combineReducers from 'react-combine-reducers';
import { ingredientReducer } from './IngredientReducer';
import { recipeReducer } from './RecipeReducer';
import { Ingredients, Recipes } from './Actions';
import axios from 'axios';
import cogoToast from 'cogo-toast';

// Initial State
const initialIngredientState = {
  ingredients: [ ],
  loading: true,
};

const initialRecipeState = {
  recipes: [ ],
  loading: true,
};

const initialState = {
  ingredientReducer: initialIngredientState,
  recipeReducer: initialRecipeState,
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const backendURL = window.location.hostname;

  const [ rootReducer, initialStateCombined ] = combineReducers({
    ingredientReducer: [ ingredientReducer, initialIngredientState ],
    recipeReducer: [ recipeReducer, initialRecipeState ],
  });
  
  const [ state, dispatch ] = useReducer(rootReducer, initialStateCombined);

  const getAllIngredients = async () => {
    try {
      const { data: ingredients } = await axios.get(`http://${backendURL}:1337/api/v1/ingredients`);
      cogoToast.success('Ingredients Fetched!', { position: 'top-right' });
      
      dispatch({
        type: Ingredients.GET_ALL_INGREDIENTS,
        payload: ingredients.data
      });
    } catch(err) {
      console.error(err);
      cogoToast.error('Error Getting Ingredients!', { position: 'top-right' });
    }
  }

  // TODO: Add a Get One Ingredient?

  const addOneIngredient = async (ingredient) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const { data: ingredientAdded } = await axios.post(`http://${backendURL}:1337/api/v1/ingredients`, ingredient, config);
      cogoToast.success('Ingredient Added!', { position: 'top-right' });

      dispatch({
        type: Ingredients.ADD_ONE_INGREDIENT,
        payload: ingredientAdded.data
      });
    } catch (err) {
      console.error(err);
      cogoToast.error('Error Adding Ingredient!', { position: 'top-right' });
    }
  }

  const updateOneIngredient = async (ingredient) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const { data: ingredientUpdated } = await axios.put(`http://${backendURL}:1337/api/v1/ingredients/${ingredient._id}`, ingredient, config);
      cogoToast.success('Ingredient Updated!', { position: 'top-right' });

      dispatch({
        type: Ingredients.UPDATE_ONE_INGREDIENT,
        payload: ingredientUpdated.data
      });
    } catch(err) {
      console.error(err);
      cogoToast.error('Error Updating Ingredient!', { position: 'top-right' });
    }
  }

  // TODO: Delete All Ingredients

  const deleteOneIngredient = async (id) => {
    try {
      await axios.delete(`http://${backendURL}:1337/api/v1/ingredients/${id}`);
      cogoToast.success('Ingredient Deleted!', { position: 'top-right' });

      dispatch({
        type: Ingredients.DELETE_ONE_INGREDIENT,
        payload: id
      });
    } catch(err) {
      console.error(err);
      cogoToast.error('Error Deleting Ingredient!', { position: 'top-right' });
    }
  }

  const getAllRecipes = async () => {
    try {
      const { data: recipes } = await axios.get(`http://${backendURL}:1337/api/v1/recipes`);
      cogoToast.success('Recipes Fetched!', { position: 'top-right' });

      dispatch({
        type: Recipes.GET_ALL_RECIPES,
        payload: recipes.data
      });
    } catch(err) {
      console.error(err);
      cogoToast.error('Error Getting Recipes!', { position: 'top-right' });
    }
  }

  // TODO: Add a Get One Recipe?

  const addOneRecipe = async (recipe) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const { data: recipeAdded } = await axios.post(`http://${backendURL}:1337/api/v1/recipes`, recipe, config);
      cogoToast.success('Recipe Added!', { position: 'top-right' });

      dispatch({
        type: Recipes.ADD_ONE_RECIPE,
        payload: recipeAdded.data
      });
    } catch (err) {
      console.error(err);
      cogoToast.error('Error Adding Recipe!', { position: 'top-right' });
    }
  }

  const updateOneRecipe = async (recipe) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const { data: recipeUpdated } = await axios.put(`http://${backendURL}:1337/api/v1/recipes/${recipe._id}`, recipe, config);
      cogoToast.success('Recipe Updated!', { position: 'top-right' });

      dispatch({
        type: Recipes.UPDATE_ONE_RECIPE,
        payload: recipeUpdated.data
      });
    } catch(err) {
      console.error(err);
      cogoToast.error('Error Updating Recipe!', { position: 'top-right' });
    }
  }

  const deleteOneRecipe = async (id) => {
    try {
      await axios.delete(`http://${backendURL}:1337/api/v1/recipes/${id}`);
      cogoToast.success('Recipe Deleted!', { position: 'top-right' });

      dispatch({
        type: Recipes.DELETE_ONE_RECIPE,
        payload: id
      });
    } catch(err) {
      console.error(err);
      cogoToast.error('Error Deleting Recipe!', { position: 'top-right' });
    }
  }

  // TODO: Delete All Recipes

  return (
    <GlobalContext.Provider value={{
      ingredientReducer: state.ingredientReducer,
      getAllIngredients, addOneIngredient, updateOneIngredient, deleteOneIngredient,
      recipeReducer: state.recipeReducer,
      getAllRecipes, addOneRecipe, updateOneRecipe, deleteOneRecipe,
    }}>
      { children }
    </GlobalContext.Provider>
  );
};