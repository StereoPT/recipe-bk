import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import classNames from 'classnames';
import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Topbar } from './components/Topbar';
import { Sidebar } from './components/Sidebar';

import { DashboardPage } from './pages/DashboardPage';

import { IngredientPage } from './pages/IngredientPage';
import { AddIngredient } from './components/ingredients/AddIngredient';
import { EditIngredient } from './components/ingredients/EditIngredient';

import { RecipePage } from './pages/RecipePage';
import { AddRecipe } from './components/recipes/AddRecipe';
import { EditRecipe } from './components/recipes/EditRecipe';

import { NotFound } from './pages/NotFound';

import { GlobalProvider } from './context/GlobalState';

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <GlobalProvider>
        <Router>
          <div className="wrapper">
            <Sidebar toggle={ toggleSidebar } isOpen={ sidebarIsOpen } />
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
          </div>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
