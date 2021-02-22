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
  const { ingredientReducer, updateOneIngredient } = useContext(GlobalContext);
  const { ingredients } = ingredientReducer;
  const [ selectedIngredient, setSelectedIngredient ] = useState({
    _id: '', name: ''
  });
  
  useEffect(() => {
    if(ingredients.length === 0) {
      history.push('/');
    }

    const currentIngredient = getIngredientFromID();
    setSelectedIngredient(currentIngredient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ingredients, history ]);

  const onSubmit = (e) => {
    e.preventDefault();

    const oldIngredient = getIngredientFromID();

    if(oldIngredient.name !== selectedIngredient.name) {
      updateOneIngredient(selectedIngredient);
      history.push('/ingredients');
    } else {
      // TODO: Better Error Message  -> Visible
      console.error("Ingredient Name needs to be Different!");
    } 
  }

  const onChange = (e) => {
    setSelectedIngredient({ ...selectedIngredient, [e.target.name]: e.target.value });
  }

  const getIngredientFromID = () => {
    const currentIngredientID = props.match.params.id;
    return ingredients.find(ingredient => {
      return ingredient._id === currentIngredientID
    });
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
