import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import classNames from 'classnames';

import { Topbar } from './components/Topbar';
import { DashboardPage } from './pages/DashboardPage';
import { IngredientPage } from './pages/IngredientPage';
import { AddIngredient } from './components/AddIngredient';
import { EditIngredient } from './components/EditIngredient';
import { RecipePage } from './pages/RecipePage';
import { NotFound } from './pages/NotFound';

import { GlobalProvider } from './context/GlobalState';

import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './components/Sidebar';

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

                <Route path="/recipes" component={ RecipePage } />

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
