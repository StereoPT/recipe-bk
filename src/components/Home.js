import React from 'react';
import { Heading } from './Heading';
import { IngredientList } from './IngredientList';

export const Home = () => {
  return (
    <React.Fragment>
      <Heading />
      <IngredientList />
    </React.Fragment>
  );
}
