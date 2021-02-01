import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
// This is Temporary.
// TODO: After DB is Implemented will be REMOVED.
import { v4 as uuid } from 'uuid';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const AddIngredient = () => {
  const [ name, setName ] = useState('');
  const { addIngredient } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newIngredient = {
      id: uuid(),
      name
    };
    addIngredient(newIngredient);

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
