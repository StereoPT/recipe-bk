import React from 'react';
import { Link } from 'react-router-dom';

import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

export const Topbar = () => {

  return (
    <Navbar color="light" light expand="md">
      <Link to='/'><NavbarBrand>RecipeBK</NavbarBrand></Link>
    </Navbar>
  );
}
