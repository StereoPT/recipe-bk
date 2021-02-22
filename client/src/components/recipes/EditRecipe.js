import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const EditRecipe = (props) => {
  const history = useHistory();
  const { recipeReducer, updateOneRecipe } = useContext(GlobalContext);
  const { recipes } = recipeReducer;
  const [ selectedRecipe, setSelectedRecipe ] = useState({
    _id: '', name: ''
  });
  
  useEffect(() => {
    if(recipes.length === 0) {
      history.push('/');
    }

    const currentRecipe = getRecipeFromID();
    setSelectedRecipe(currentRecipe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ recipes, history ]);

  const onSubmit = (e) => {
    e.preventDefault();

    const oldRecipe = getRecipeFromID();

    if(oldRecipe.name !== selectedRecipe.name) {
      updateOneRecipe(selectedRecipe);
      history.push('/recipes');
    } else {
      // TODO: Better Error Message  -> Visible
      console.error("Recipe Name needs to be Different!");
    }
  }

  const onChange = (e) => {
    setSelectedRecipe({ ...selectedRecipe, [e.target.name]: e.target.value });
  }

  const getRecipeFromID = () => {
    const currentRecipeID = props.match.params.id;
    return recipes.find(recipe => {
      return recipe._id === currentRecipeID
    });
  }

  return (
    <>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <h2 className="m-2">Edit Recipe</h2>
        <Button tag={ Link } to="/recipes" color="danger">Back</Button>
      </Container>
      <Form className="m-3" onSubmit={ onSubmit }>
        <FormGroup>
          <Label>Recipe Name:</Label>
          <Input type="text" name="name" onChange={ onChange } value={ selectedRecipe.name } placeholder="Recipe Name" />
        </FormGroup>
        <Button color="info" type="submit">Edit Recipe</Button>
      </Form>
    </>
  );
}
