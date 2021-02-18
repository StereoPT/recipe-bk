import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button
} from 'reactstrap';

export const AddIngredient = () => {
  const [ name, setName ] = useState('');
  const { addOneIngredient } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newIngredient = { name };

    if(name !== "") {
      addOneIngredient(newIngredient);
      history.push('/ingredients');
    } else {
      // TODO: Better Error Message  -> Visible
      console.error("Ingredient Name Missing!");
    }
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <h2 className="m-2">Add Ingredient</h2>
        <Button tag={ Link } to="/ingredients" color="danger">Back</Button>
      </Container>
      <Form className="m-3" onSubmit={ onSubmit }>
        <FormGroup>
          <Input type="text" value={ name } onChange={ onChange } placeholder="Ingredient Name" />
        </FormGroup>
        <Button color="info" type="submit">Submit</Button>
      </Form>
    </>
  );
}
