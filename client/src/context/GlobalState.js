import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  ingredients: [ ],
  loading: true
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  const getAllIngredients = async () => {
    try {
      const { data: ingredients } = await axios.get('http://localhost:1337/api/v1/ingredients');

      dispatch({
        type: 'GET_ALL_INGREDIENTS',
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
      const { data: ingredientAdded } = await axios.post('http://localhost:1337/api/v1/ingredients', ingredient, config);

      dispatch({
        type: 'ADD_INGREDIENT',
        payload: ingredientAdded.data
      });
    } catch (err) {
      console.error(err);
    }
  }

  const editIngredient = (ingredient) => {
    dispatch({
      type: 'EDIT_INGREDIENT',
      payload: ingredient
    })
  }

  // Delete All Ingredients

  const deleteOneIngredient = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/v1/ingredients/${id}`);

      dispatch({
        type: 'DELETE_ONE_INGREDIENT',
        payload: id
      });
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <GlobalContext.Provider value={{
      ingredients: state.ingredients,
      loading: state.loading,
      getAllIngredients,
      addOneIngredient,
      editIngredient,
      deleteOneIngredient,
    }}>
      { children }
    </GlobalContext.Provider>
  );
};