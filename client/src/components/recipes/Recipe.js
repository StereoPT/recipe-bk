import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroupItem, Button
} from 'reactstrap'; 

export const Recipe = ({ recipe, deleteOneRecipe }) => {
  return (
    <ListGroupItem className="d-flex align-items-center">
      <strong>{ recipe.name }</strong>
      <div className="ml-auto">
        <Link to={ `recipes/edit/${recipe._id}` } className="btn btn-sm btn-warning mr-1">Edit</Link>
        <Button className="btn-sm" onClick={ () => deleteOneRecipe(recipe._id) } color="danger">Delete</Button>
      </div>
    </ListGroupItem>
  );
}
