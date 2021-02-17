import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Recipe } from './Recipe';
import { ListGroup } from 'reactstrap';

export const RecipeList = () => {
  const { recipes, getAllRecipes, deleteOneRecipe } = useContext(GlobalContext);

  useEffect(() => {
    getAllRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

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
