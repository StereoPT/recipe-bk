import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Ingredient } from './Ingredient';
import { ListGroup } from 'reactstrap'; 

export const IngredientList = () => {
  const { ingredients, deleteOneIngredient } = useContext(GlobalContext);

  return (
    <ListGroup className="m-3">
      { ingredients?.length > 0 ? (
        ingredients.map((ingredient) => (
          <Ingredient key={ ingredient._id } ingredient={ ingredient } deleteOneIngredient={ deleteOneIngredient } />
        ))
      ) : (
        <h4 className="text-center">No Ingredients</h4>
      ) }
    </ListGroup>
  );
}
