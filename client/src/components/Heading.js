import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Ingredients</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">Add Ingredient</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
