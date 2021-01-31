import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const AddIngredient = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Ingredient Name</Label>
        <Input type="text" placeholder="Ingredient Name" />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
}
