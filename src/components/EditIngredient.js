import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const EditIngredient = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Ingredient Name</Label>
        <Input type="text" placeholder="Ingredient Name" />
      </FormGroup>
      <Button type="submit">Edit Ingredient</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}
