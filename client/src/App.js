import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { DashboardPage } from './pages/DashboardPage';
import { IngredientPage } from './pages/IngredientPage';
import { RecipePage } from './pages/RecipePage';
import { NotFound } from './pages/NotFound';

import { AddIngredient } from './components/AddIngredient';
import { EditIngredient } from './components/EditIngredient';

import { GlobalProvider } from './context/GlobalState';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Topbar />
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
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
