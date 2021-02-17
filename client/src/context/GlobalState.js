import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import { Ingredients, Recipes } from './Types';
import axios from 'axios';

// Initial State
const initialState = {
  ingredients: [ ],
  recipes: [ ],
  loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  const getAllIngredients = async () => {
    try {
      // const { data: ingredients } = await axios.get('http://localhost:1337/api/v1/ingredients');
      const { data: ingredients } = await axios.get('http://192.168.1.7:1337/api/v1/ingredients');

      dispatch({
        type: Ingredients.GET_ALL_INGREDIENTS,
        payload: ingredients.data
      });
    } catch(err) {
      // TODO: Add Error Handling
      console.error(err);
    }
  }

  // TODO: Add a Get One?
  // eslint-disable-next-line
  const getOneIngredient = async (id) => { }

  const addOneIngredient = async (ingredient) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      // const { data: ingredientAdded } = await axios.post('http://localhost:1337/api/v1/ingredients', ingredient, config);
      const { data: ingredientAdded } = await axios.post('http://192.168.1.7:1337/api/v1/ingredients', ingredient, config);

      dispatch({
        type: Ingredients.ADD_ONE_INGREDIENT,
        payload: ingredientAdded.data
      });
    } catch (err) {
      console.error(err);
    }
  }

  const updateOneIngredient = async (ingredient) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      // const { data: ingredientUpdated } = await axios.put(`http://localhost:1337/api/v1/ingredients/${ingredient._id}`, ingredient, config);
      const { data: ingredientUpdated } = await axios.put(`http://192.168.1.7:1337/api/v1/ingredients/${ingredient._id}`, ingredient, config);

      dispatch({
        type: Ingredients.UPDATE_ONE_INGREDIENT,
        payload: ingredientUpdated.data
      });
    } catch(err) {
      console.error(err);
    }
  }

  // TODO: Delete All Ingredients

  const deleteOneIngredient = async (id) => {
    try {
      // await axios.delete(`http://localhost:1337/api/v1/ingredients/${id}`);
      await axios.delete(`http://192.168.1.7:1337/api/v1/ingredients/${id}`);

      dispatch({
        type: Ingredients.DELETE_ONE_INGREDIENT,
        payload: id
      });
    } catch(err) {
      console.error(err);
    }
  }

  const getAllRecipes = async () => {
    try {
      // const { data: recipes } = await axios.get('http://localhost:1337/api/v1/recipes');
      const { data: recipes } = await axios.get('http://192.168.1.7:1337/api/v1/recipes');

      dispatch({
        type: Recipes.GET_ALL_RECIPES,
        payload: recipes.data
      });
    } catch(err) {
      // TODO: Add Error Handling
      console.error(err);
    }
  }

  const addOneRecipe = async (recipe) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      // const { data: recipeAdded } = await axios.post('http://localhost:1337/api/v1/recipes', recipe, config);
      const { data: recipeAdded } = await axios.post('http://192.168.1.7:1337/api/v1/recipes', recipe, config);

      dispatch({
        type: Recipes.ADD_ONE_RECIPE,
        payload: recipeAdded.data
      });
    } catch (err) {
      console.error(err);
    }
  }

  const updateOneRecipe = async (recipe) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      // const { data: recipeUpdated } = await axios.put(`http://localhost:1337/api/v1/recipes/${recipe._id}`, recipe, config);
      const { data: recipeUpdated } = await axios.put(`http://192.168.1.7:1337/api/v1/recipes/${recipe._id}`, recipe, config);

      dispatch({
        type: Recipes.UPDATE_ONE_RECIPE,
        payload: recipeUpdated.data
      });
    } catch(err) {
      console.error(err);
    }
  }

  // TODO: Delete All Ingredients

  const deleteOneRecipe = async (id) => {
    try {
      // await axios.delete(`http://localhost:1337/api/v1/recipes/${id}`);
      await axios.delete(`http://192.168.1.7:1337/api/v1/recipes/${id}`);

      dispatch({
        type: Ingredients.DELETE_ONE_INGREDIENT,
        payload: id
      });
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <GlobalContext.Provider value={{
      ingredients: state.ingredients,
      recipes: state.recipes,
      loading: state.loading,
      getAllIngredients,
      addOneIngredient,
      updateOneIngredient,
      deleteOneIngredient,
      getAllRecipes,
      addOneRecipe,
      updateOneRecipe,
      deleteOneRecipe,
    }}>
      { children }
    </GlobalContext.Provider>
  );
};