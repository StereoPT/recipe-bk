import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import classNames from 'classnames';

import { Topbar } from './components/Topbar';
import { DashboardPage } from './pages/DashboardPage';
import { IngredientPage } from './pages/IngredientPage';
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
                <Route path="/ingredients" component={ IngredientPage } />
                <Route path="/recipes" component={ RecipePage } />
                {/*
                <Route path="/add" component={ AddIngredient } />
                <Route path="/edit/:id" component={ EditIngredient } />
                */}
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
