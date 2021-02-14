import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroupItem, Button
} from 'reactstrap'; 

export const Ingredient = (props) => {
  const { ingredient, deleteOneIngredient } = props;

  return (
    <ListGroupItem className="d-flex align-items-center">
      <strong>{ ingredient.name }</strong>
      <div className="ml-auto">
        <Link to={ `ingredients/edit/${ingredient._id}` } className="btn btn-sm btn-warning mr-1">Edit</Link>
        <Button className="btn-sm" onClick={ () => deleteOneIngredient(ingredient._id) } color="danger">Delete</Button>
      </div>
    </ListGroupItem>
  );
}
