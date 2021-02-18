import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

import { GlobalContext } from '../context/GlobalState';

export const DashboardPage = () => {
  const { ingredients, recipes } = useContext(GlobalContext);

  return (
    <>
      <Container fluid>
        <h2 className="m-2">Dashboard</h2>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Recipes</CardTitle>
              <CardText>At the moment you have <strong>{ recipes.length }</strong> Recipes.</CardText>
              <Button tag={ Link } to="recipes" color="info">Check Recipes</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Ingredients</CardTitle>
              <CardText>At the moment you have <strong>{ ingredients.length }</strong> Ingredients.</CardText>
              <Button tag={ Link } to="ingredients" color="info">Check Ingredients</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
