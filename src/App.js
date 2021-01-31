import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddIngredient } from './components/AddIngredient';
import { EditIngredient } from './components/EditIngredient';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "2rem auto" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/add" component={ AddIngredient } />
          <Route path="/edit/:id" component={ EditIngredient } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
