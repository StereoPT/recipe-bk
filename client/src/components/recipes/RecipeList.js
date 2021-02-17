import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Recipe } from './Recipe';
import { ListGroup } from 'reactstrap';

export const RecipeList = () => {
  const { recipes, deleteOneRecipe } = useContext(GlobalContext);

  return (
    <ListGroup className="m-3">
      { recipes?.length > 0 ? (
        recipes.map((recipe) => (
          <Recipe key={ recipe._id } recipe={ recipe } deleteOneRecipe={ deleteOneRecipe } />
        ))
      ) : (
        <h4 className="text-center">No Recipes</h4>
      )}
    </ListGroup>
  );
}
