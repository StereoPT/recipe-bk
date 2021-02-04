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
  const history = useHistory();
  const currentIngredientID = props.match.params.id;
  const { ingredients, updateOneIngredient } = useContext(GlobalContext);
  const [ selectedIngredient, setSelectedIngredient ] = useState({
    _id: '', name: ''
  });
  
  useEffect(() => {
    const ingredientID = currentIngredientID;
    const selectedIngredient = ingredients.find(ingredient => {
      return ingredient._id === ingredientID
    });

    setSelectedIngredient(selectedIngredient);
  }, [currentIngredientID, ingredients]);

  const onSubmit = () => {
    updateOneIngredient(selectedIngredient);
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
