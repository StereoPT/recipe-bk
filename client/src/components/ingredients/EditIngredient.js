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

export const EditIngredient = (props) => {
  const history = useHistory();
  const currentIngredientID = props.match.params.id;
  const { ingredients, updateOneIngredient } = useContext(GlobalContext);
  const [ selectedIngredient, setSelectedIngredient ] = useState({
    _id: '', name: ''
  });
  
  useEffect(() => {
    if(ingredients.length === 0) {
      history.push('/');
    }

    const ingredientID = currentIngredientID;
    const selectedIngredient = ingredients.find(ingredient => {
      return ingredient._id === ingredientID
    });

    setSelectedIngredient(selectedIngredient);
  }, [currentIngredientID, ingredients, history]);

  const onSubmit = () => {
    updateOneIngredient(selectedIngredient);
    history.push('/ingredients');
  }

  const onChange = (e) => {
    setSelectedIngredient({...selectedIngredient, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <h2 className="m-2">Edit Ingredient</h2>
        <Button tag={ Link } to="/ingredients" color="danger">Back</Button>
      </Container>
      <Form className="m-3" onSubmit={ onSubmit }>
        <FormGroup>
          <Label>Ingredient Name:</Label>
          <Input type="text" name="name" onChange={ onChange } value={ selectedIngredient.name } placeholder="Ingredient Name" />
        </FormGroup>
        <Button color="info" type="submit">Edit Ingredient</Button>
      </Form>
    </>
  );
}
