import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Container
} from 'reactstrap';
import { IngredientList } from '../components/ingredients/IngredientList';

export const IngredientPage = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <h2 className="m-2">Ingredients</h2>
        <Button tag={ Link } to="ingredients/add" color="info">Add Ingredient</Button>
      </Container>
      <IngredientList />
    </>
  );
}
