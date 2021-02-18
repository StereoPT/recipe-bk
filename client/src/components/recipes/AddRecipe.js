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

export const AddRecipe = () => {
  const [ name, setName ] = useState('');
  const { addOneRecipe } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name };

    if(name !== "") {
      addOneRecipe(newRecipe);
      history.push('/recipes');
    } else {
      // TODO: Better Error Message  -> Visible
      console.error("Recipe Name Missing!");
    }
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <Container fluid className="d-flex justify-content-between align-items-center">
        <h2 className="m-2">Add Recipe</h2>
        <Button tag={ Link } to="/recipes" color="danger">Back</Button>
      </Container>
      <Form className="m-3" onSubmit={ onSubmit }>
        <FormGroup>
          <Input type="text" value={ name } onChange={ onChange } placeholder="Recipe Name" />
        </FormGroup>
        <Button color="info" type="submit">Submit</Button>
      </Form>
    </>
  );
}
