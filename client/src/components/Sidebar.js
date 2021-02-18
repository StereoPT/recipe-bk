import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUtensils,
  faListUl
} from '@fortawesome/free-solid-svg-icons';
import {
  Nav, NavItem, NavLink
} from 'reactstrap';

import "../css/Sidebar.css";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <nav className={ classNames("sidebar", { "is-open": isOpen }) }>
      <div className="sidebar-header">
        <span color="info" onClick={ toggle } style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>RecipeBK</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={ Link } to={ "/" }>
              <FontAwesomeIcon icon={ faTachometerAlt } className="mr-2" />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ Link } to={ "/recipes" }>
              <FontAwesomeIcon icon={ faUtensils } className="mr-2" />
              Recipes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ Link } to={ "/ingredients" }>
              <FontAwesomeIcon icon={ faListUl } className="mr-2" />
              Ingredients
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>
  );
}
