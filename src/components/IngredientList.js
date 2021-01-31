import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'; 

export const IngredientList = () => {
  const { ingredients, removeIngredient } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-2">
      { ingredients.length > 0 ? (
        <React.Fragment>
          { ingredients.map((ingredient) => (
            <ListGroupItem className="d-flex" key={ ingredient.id }>
              <strong>{ ingredient.name }</strong>
              <div className="ml-auto">
                <Link to={ `/edit/${ingredient.id}` } className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={ () => removeIngredient(ingredient.id) } color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          )) }
        </React.Fragment>
      ) : (
        <h4 className="text-center">
          No Ingredients
        </h4>
      ) }
    </ListGroup>
  );
}
