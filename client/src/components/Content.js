import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import classNames from 'classnames';

import { Topbar } from './Topbar';

import { DashboardPage } from '../pages/DashboardPage';

import { IngredientPage } from '../pages/IngredientPage';
import { AddIngredient } from './ingredients/AddIngredient';
import { EditIngredient } from './ingredients/EditIngredient';

import { RecipePage } from '../pages/RecipePage';
import { AddRecipe } from './recipes/AddRecipe';
import { EditRecipe } from './recipes/EditRecipe';

import { NotFound } from '../pages/NotFound';

import { GlobalContext } from '../context/GlobalState';

export const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  const { getAllIngredients, getAllRecipes  } = useContext(GlobalContext);

  useEffect(() => {
    getAllIngredients();
    getAllRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  return (
    <Container fluid className={ classNames('content', 'p-0', { 'is-open': sidebarIsOpen }) }>
      <Topbar toggleSidebar={ toggleSidebar } />
      <Switch>
        <Route exact path="/" component={ DashboardPage } />

        <Route exact path="/ingredients" component={ IngredientPage } />
        <Route path="/ingredients/add" component={ AddIngredient } />
        <Route path="/ingredients/edit/:id" component={ EditIngredient } />

        <Route exact path="/recipes" component={ RecipePage } />
        <Route path="/recipes/add" component={ AddRecipe } />
        <Route path="/recipes/edit/:id" component={ EditRecipe } />

        <Route component={ NotFound } />
      </Switch>
    </Container>
  );
}
