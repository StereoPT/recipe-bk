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
  const currentRecipeID = props.match.params.id;
  const { recipes, updateOneRecipe } = useContext(GlobalContext);
  const [ selectedRecipe, setSelectedRecipe ] = useState({
    _id: '', name: ''
  });
  
  useEffect(() => {
    if(recipes.length === 0) {
      history.push('/');
    }

    const recipeID = currentRecipeID;
    const selectedRecipe = recipes.find(recipe => {
      return recipe._id === recipeID
    });

    setSelectedRecipe(selectedRecipe);
  }, [currentRecipeID, recipes, history]);

  const onSubmit = () => {
    updateOneRecipe(selectedRecipe);
    history.push('/ingredients');
  }

  const onChange = (e) => {
    setSelectedRecipe({...selectedRecipe, [e.target.name]: e.target.value });
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
