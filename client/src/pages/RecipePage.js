import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Container
} from 'reactstrap';
import { RecipeList } from '../components/recipes/RecipeList';

export const RecipePage = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <h2 className="m-2">Recipes</h2>
        <Button tag={ Link } to="recipes/add" color="info">Add Recipe</Button>
      </Container>
      <RecipeList />
    </>
  );
}
