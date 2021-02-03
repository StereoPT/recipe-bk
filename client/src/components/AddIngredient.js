import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const AddIngredient = () => {
  const [ name, setName ] = useState('');
  const { addOneIngredient } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newIngredient = { name };
    addOneIngredient(newIngredient);

    history.push('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={ onSubmit }>
      <FormGroup>
        <Label>Ingredient Name</Label>
        <Input type="text" value={ name } onChange={ onChange } placeholder="Ingredient Name" />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}
