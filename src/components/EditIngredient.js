import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const EditIngredient = (props) => {
  const [ selectedIngredient, setSelectedIngredient ] = useState({
    id: '', name: ''
  });
  const { ingredients, editIngredient } = useContext(GlobalContext);
  const history = useHistory();
  const currentIngredientID = props.match.params.id;

  useEffect(() => {
    const ingredientID = currentIngredientID;
    const selectedIngredient = ingredients.find(ingredient => ingredient.id === ingredientID);
    setSelectedIngredient(selectedIngredient);
  }, [currentIngredientID, ingredients]);

  const onSubmit = () => {
    editIngredient(selectedIngredient);

    history.push('/');
  }

  const onChange = (e) => {
    setSelectedIngredient({...selectedIngredient, [e.target.name]: e.target.value });
  }

  return (
    <Form onSubmit={ onSubmit }>
      <FormGroup>
        <Label>Ingredient Name</Label>
        <Input type="text" name="name" onChange={ onChange } value={ selectedIngredient.name } placeholder="Ingredient Name" />
      </FormGroup>
      <Button type="submit">Edit Ingredient</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}
