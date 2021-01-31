import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// Initial State
const initialState = {
  ingredients: [ ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  // Actions
  const removeIngredient = (id) => {
    dispatch({
      type: 'REMOVE_INGREDIENT',
      payload: id
    })
  }

  const addIngredient = (ingredient) => {
    dispatch({
      type: 'ADD_INGREDIENT',
      payload: ingredient
    })
  }

  const editIngredient = (ingredient) => {
    dispatch({
      type: 'EDIT_INGREDIENT',
      payload: ingredient
    })
  }

  return (
    <GlobalContext.Provider value={{
      ingredients: state.ingredients,
      removeIngredient,
      addIngredient,
      editIngredient
    }}>
      { children }
    </GlobalContext.Provider>
  );
};