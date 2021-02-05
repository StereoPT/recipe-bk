import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Ingredient } from './Ingredient';
import { ListGroup } from 'reactstrap'; 

export const IngredientList = () => {
  const { ingredients, getAllIngredients, deleteOneIngredient } = useContext(GlobalContext);

  useEffect(() => {
    getAllIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  return (
    <ListGroup className="mt-2">
      { ingredients.length > 0 ? (
        <React.Fragment>
          { ingredients.map((ingredient) => (
            <Ingredient key={ ingredient._id } ingredient={ ingredient } deleteOneIngredient={ deleteOneIngredient } />
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
